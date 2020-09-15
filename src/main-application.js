import { LitElement, html, css as css } from '/web_modules/lit-element.js';
import { Workbox, messageSW} from '/web_modules/workbox-window.js';
import '/web_modules/@material/mwc-snackbar.js';
import './toolbar.js';

export class MainApplication extends LitElement {
  static styles = css`
    :host {
      width: 100vw;
      height: 100vh;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    mwc-snackbar {
        --mdc-snackbar-action-color: #2d89ef;
    }

    .main-layout {
       display: flex;
       justify-content: flex-start;
       flex-direction: row;
    }

    tiny-toolbar{
      width: 20vw;
      height: 100vh;
    }

    #canvas {
      width: 80%;
      height: 100vh;
      user-select: none;
      touch-action: none;
    }
  `;

  _pointerDown = false;
  _currentColor = '#000000';
  _points = [];
  _predicted_points = [];

  firstUpdated() {
    this._canvas = this.shadowRoot.querySelector('#canvas');
    if (this._canvas && this._canvas.getContext)
      this._context = this._canvas.getContext('2d');

    // Check that we have a valid context to draw on/with before adding event handlers
    if (!this._context) {
      console.error('Your browser doesn\'t support canvas, this demo won\'t work');
      return;
    }

    this._snackbar = this.shadowRoot.querySelector('#snackbar');
    this._snackbar.addEventListener('MDCSnackbar:closed', event => {
      if (event.detail.reason === "action") {
        this._wb.addEventListener('controlling', () => {
          window.location.reload();
          this._wbRegistration = undefined;
        });
        // Send a message to the waiting service worker instructing
        // it to skip waiting, which will trigger the `controlling`
        // event listener above.
        if (this._wbRegistration && this._wbRegistration.waiting) {
          messageSW(this._wbRegistration.waiting, {type: 'SKIP_WAITING'})
        }
      }
    });
    // Check that service workers are supported
    if ('serviceWorker' in navigator) {
      // Use the window load event to keep the page load performant
      window.addEventListener('load', async () => {
        this._wb = new Workbox('./sw.js');
        this._wb.addEventListener('waiting', () => this._showSnackbar());
        this._wb.addEventListener('externalwaiting', () => this._showSnackbar());
        this._wbRegistration = await this._wb.register();
      });
    }

    this._canvas.onpointerdown = this._onPointerDown.bind(this);
    this._canvas.onpointermove = this._onPointerMove.bind(this);
    this._canvas.onpointerup = this._onPointerUp.bind(this);
    const style = window.getComputedStyle(this._canvas);
    this._canvas.width  = parseInt(style.width, 10);
    this._canvas.height =  parseInt(style.height, 10);
    this._offscreenCanvas = document.createElement('canvas');
    this._offscreenCanvas.width = this._canvas.width;
    this._offscreenCanvas.height = this._canvas.height;
    this._offscreenCanvasContext = this._offscreenCanvas.getContext('2d', { desynchronized: true });
    this._context.lineCap = this._offscreenCanvasContext.lineCap = "round";
    this._context.lineJoin = this._offscreenCanvasContext.lineJoin = "round";
    this._context.shadowBlur = this._offscreenCanvasContext.shadowBlur = 2;
    window.addEventListener('resize', this._onResize);
    console.log(window.navigator.usi)
  }

  constructor() {
    super();
    this._drawWithPreferredColor = false;
    this._drawPredictedEvents = false;
    this._highlightPredictedEvents = false;
    this._currentLineWidth = 8;
  }

  _showSnackbar() {
    this._snackbar.show();
  }

  _onPointerDown = async (event) => {
    this._pointerDown = true;
    this._pointerId = event.pointerId;
    this._canvas.setPointerCapture(this._pointerId);
    event.preventDefault();
    this._points.push(this._getRelativeCoordinates(event));
    // Varying brush size based on pressure, convert from pressure range of 0 to 1
    // to a scale factor of 0 to 2
    this._context.lineWidth = this._offscreenCanvasContext.lineWidth = this._currentLineWidth * event.pressure * 2;
    this._drawStroke(event, this._offscreenCanvasContext);
  }

  _onPointerMove = async (event) => {
    if (event.clientY < 0 || event.clientX < 0 ||
      event.clientX > window.innerWidth || event.clientY > window.innerHeight) {
        this._pointerDown = false;
        return;
    }

    if(this._pointerDown) {
      // This will clear the canvas (which include the previous predictions).
      if (this._drawPredictedEvents)
        this._context.clearRect(0, 0, this._context.canvas.width, this._context.canvas.height);
      this._context.shadowColor = this._getCurrentColor(event);
      if (event.getCoalescedEvents) {
        if (event.getCoalescedEvents().length > 0) {
          for (let e of event.getCoalescedEvents())
            this._points.push(this._getRelativeCoordinates(e));
        } else {
          this._points.push(this._getRelativeCoordinates(event));
        }
      } else {
        this._points.push(this._getRelativeCoordinates(event));
      }

      // Varying brush size based on pressure, convert from pressure range of 0 to 1
      // to a scale factor of 0 to 2
      this._context.lineWidth = this._offscreenCanvasContext.lineWidth = this._currentLineWidth * event.pressure * 2;
      this._drawStroke(event, this._offscreenCanvasContext);
      // Draw the offscreen canvas into the main canvas.
      this._context.drawImage(this._offscreenCanvas, 0, 0);

      if (this._drawPredictedEvents && event.getPredictedEvents) {
        // 2 first predictions seems to be a good number, the other predictions are very far off.
        this._predicted_points = event.getPredictedEvents().slice(0, 2);
        if (this._predicted_points.length > 0)
          this._strokePredictedEvents(event, this._context);
      }

      // Drop all previous coalesced pointer events vents as the line has already painted and
      // only store the current point position to be used for th next move event, also
      // CoalescedEvents do not store pressure information that is used to redraw the line
      this._points = [];
      this._predicted_points = [];
      this._points.push(this._getRelativeCoordinates(event));
      event.preventDefault();
    }
  }

  _onPointerUp = async (event) => {
    if (this._drawPredictedEvents)
      this._context.clearRect(0, 0, this._context.canvas.width, this._context.canvas.height);
    this._pointerDown = false;
    this._canvas.releasePointerCapture(this._pointerId);
    this._predicted_points = [];
    this._points = [];
    // Draw the true path.
    this._context.drawImage(this._offscreenCanvas, 0, 0);
  }

   _getRelativeCoordinates(event) {
    const rect = this._canvas.getBoundingClientRect();
    return {
      x: Math.round(event.clientX - rect.left),
      y: Math.round(event.clientY - rect.top)
    };
  }

  _drawStroke(event, context) {
    if (this._points.length < 2)
      return;

    context.beginPath();
    let i;
    context.moveTo(this._points[0].x, this._points[0].y);
    context.lineTo(this._points[1].x, this._points[1].y);
    for (i = 1; i < this._points.length-2; i++) {
      const xc = (this._points[i].x + this._points[i+1].x) / 2;
      const yc = (this._points[i].y + this._points[i+1].y) / 2;
      context.quadraticCurveTo(this._points[i].x, this._points[i].y, Math.round(xc), Math.round(yc));
    }
    // curve through the last two points
    if (this._points.length > 2)
      context.quadraticCurveTo(this._points[i].x, this._points[i].y, this._points[i+1].x,this._points[i+1].y);

    context.strokeStyle = this._getCurrentColor(event);
    context.stroke();
  }

  _strokePredictedEvents(event, context) {
    context.beginPath();
    context.moveTo(this._points[this._points.length - 1].x, this._points[this._points.length - 1].y);
    if (this._highlightPredictedEvents)
      context.strokeStyle = 'red';
    else
      context.strokeStyle = this._getCurrentColor(event);
    for (let e of this._predicted_points) {
      const coordinate = this._getRelativeCoordinates(e);
      context.lineTo(coordinate.x, coordinate.y);
    }
    context.stroke();
  }

  _getCurrentColor(event) {
    if (event.preferredColor && this._drawWithPreferredColor)
      return event.preferredColor;
    else
      return this._currentColor;
  }

  _colorChanged(event) {
    this._currentColor = event.detail.color;
    this._drawWithPreferredColor = false;
  }

  _lineWidthChanged(event) {
    this._currentLineWidth = event.detail.lineWidth;
  }

  _drawWithPreferredColorChanged(event) {
    this._drawWithPreferredColor = event.detail.drawWithPreferredColor;
  }

  _predictedEventsEnabledChanged(event) {
    this._drawPredictedEvents = event.detail.predictedEventsEnabled;
  }

  _predictedEventsHighlightEnabledChanged(event) {
    this._highlightPredictedEvents = event.detail.predictedEventsHighlightEnabled;
  }

  _onResize = async (event) => {
    const style = window.getComputedStyle(this._canvas);
    this._canvas.width  = this._offscreenCanvas.width = parseInt(style.width, 10);
    this._canvas.height =  this._offscreenCanvas.height = parseInt(style.height, 10);
  }

  render() {
    return html`
    <div class="main-layout">
      <tiny-toolbar @color-changed=${this._colorChanged}
        @lineWidth-changed=${this._lineWidthChanged}
        @drawWithPreferredColor-changed=${this._drawWithPreferredColorChanged}
        @predictedEventsEnabled-changed=${this._predictedEventsEnabledChanged}
        @predictedEventsHighlightEnabled-changed=${this._predictedEventsHighlightEnabledChanged}></tiny-toolbar>
        <canvas id="canvas"></canvas>
    </div>
    <mwc-snackbar id="snackbar" labelText="A newer version of the application is available.">
    <mwc-button slot="action">RELOAD</mwc-button>
      <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
    </mwc-snackbar>`;
  }
}

customElements.define("main-application", MainApplication);