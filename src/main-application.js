import { LitElement, html, css as css } from 'lit-element';
import { Workbox, messageSW} from 'workbox-window';
import '@material/mwc-drawer';
import '@material/mwc-icon-button';
import '@material/mwc-snackbar';
import '@material/mwc-top-app-bar';
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

    mwc-drawer {
      --mdc-drawer-width: 384px;
    }

    .drawer-content {
      width: 100%;
      height: 80vh;
    }

    .header {
      text-align: center;
      width: 100%;
      font-size: 1.5em;
      height: 30px;
      font-weight: bold;
    }

    tiny-toolbar{
      width: 20vw;
      height: 100vh;
    }

    #canvas {
      position: absolute;
      width: 100vw;
      height: 100vh;
      user-select: none;
      touch-action: none;
      z-index: 1;
    }

    #prediction-canvas {
      position: absolute;
      pointer-events: none;
      user-select: none;
      touch-action: none;
      z-index: 2;
    }
  `;

  _pointerDown = false;
  _pointerMoved = false;
  _currentColor = '#000000';
  _points = [];
  _predicted_points = [];

  firstUpdated() {
    this._drawer = this.shadowRoot.querySelector('#drawer');
    if (this._drawer) {
        const container = this._drawer.parentNode;
        container.addEventListener('MDCTopAppBar:nav', () => {
            this._drawer.open = !this._drawer.open;
        });
    }

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

    this._clearButton = this.shadowRoot.querySelector('#clear-button');
    this._clearButton.onpointerdown = this._clearCanvas.bind(this);
    this._canvas.onpointerdown = this._onPointerDown.bind(this);
    this._canvas.onpointermove = this._onPointerMove.bind(this);
    this._canvas.onpointerup = this._onPointerUp.bind(this);
    const style = window.getComputedStyle(this._canvas);
    this._canvas.width  = parseInt(style.width, 10);
    this._canvas.height =  parseInt(style.height, 10);
    this._predictionCanvas = this.shadowRoot.querySelector('#prediction-canvas');
    this._predictionCanvas.style.left = style.left + 'px';
    this._predictionCanvas.style.top = style.top + 'px';
    this._predictionCanvas.width = this._canvas.width;
    this._predictionCanvas.height = this._canvas.height;
    this._predictionCanvasContext = this._predictionCanvas.getContext('2d');
    this._context.lineCap = this._predictionCanvasContext.lineCap = 'round';
    this._context.lineJoin = this._predictionCanvasContext.lineJoin = 'round';
    this._context.shadowBlur = this._predictionCanvasContext.shadowBlur = 2;
    window.addEventListener('resize', this._onResize);
    console.log(window.navigator.usi);
  }

  constructor() {
    super();
    this._drawWithPreferredColor = false;
    this._drawWithPressure = false;
    this._drawPredictedEvents = false;
    this._highlightPredictedEvents = false;
    this._drawCoalescedEvents = false;
    this._drawPointsOnly = false;
    this._currentLineWidth = 8;
    // By default, the number of points slider is set to 2, because the first 2
    // predictions seems to be a good number, the other predictions are very far off.
    this._numOfPredictionPoints = 2;
  }

  _showSnackbar() {
    this._snackbar.show();
  }

  _clearCanvas = async (event) => {
    this._context.clearRect(0, 0, this._context.canvas.width, this._context.canvas.height);
    this._predictionCanvasContext.clearRect(0, 0,
      this._predictionCanvasContext.canvas.width, this._predictionCanvasContext.canvas.height);
  }

  _onPointerDown = async (event) => {
    this._pointerDown = true;
    this._pointerId = event.pointerId;
    this._canvas.setPointerCapture(this._pointerId);
    event.preventDefault();
    this._points.push(this._getRelativeCoordinates(event));
  }

  _onPointerMove = async (event) => {
    if (event.clientY < 0 || event.clientX < 0 ||
      event.clientX > window.innerWidth || event.clientY > window.innerHeight) {
        this._pointerDown = false;
        return;
    }

    if(this._pointerDown) {
      this._pointerMoved = true;
      // This will clear the canvas (which include the previous predictions).
      if (this._drawPredictedEvents)
        this._predictionCanvasContext.clearRect(0, 0,
          this._predictionCanvasContext.canvas.width, this._predictionCanvasContext.canvas.height);
      if (event.getCoalescedEvents && this._drawCoalescedEvents) {
        if (event.getCoalescedEvents().length > 0) {
          for (let e of event.getCoalescedEvents())
            this._points.push(this._getRelativeCoordinates(e));
        } else {
          this._points.push(this._getRelativeCoordinates(event));
        }
      } else {
        this._points.push(this._getRelativeCoordinates(event));
      }

      if (this._drawPointsOnly)
        this._drawPoints(event, this._context);
      else
        this._drawStroke(event, this._context);

      if (this._drawPredictedEvents && event.getPredictedEvents) {
        // number of points from slider should be between 1 - 10
        if (this._numOfPredictionPoints > 0 && this._numOfPredictionPoints <= 10)
          this._predicted_points = event.getPredictedEvents().slice(0, this._numOfPredictionPoints);
        else
          this._predicted_points = event.getPredictedEvents();
        if (this._predicted_points.length > 0)
          this._strokePredictedEvents(event, this._predictionCanvasContext);
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
      this._predictionCanvasContext.clearRect(0, 0,
        this._predictionCanvasContext.canvas.width, this._predictionCanvasContext.canvas.height);
    if (!this._pointerMoved)
      if (this._drawPointsOnly)
        this._drawPoints(event, this._context);
      else
        this._drawStroke(event, this._context);
    else
      this._pointerMoved = false;
    this._pointerDown = false;
    this._canvas.releasePointerCapture(this._pointerId);
    this._predicted_points = [];
    this._points = [];
  }

   _getRelativeCoordinates(event) {
    const rect = this._canvas.getBoundingClientRect();
    return {
      x: event.clientX,
      y: event.clientY - rect.top,
      pressure: event.pressure
    };
  }

  _drawStroke(event, context) {
    if (this._points.length < 2) {
      context.beginPath();
      context.fillStyle = this._getCurrentColor(event);
      let radius;
      if (this._drawWithPressure)
        radius = this._currentLineWidth * event.pressure * 2;
      else
        radius = this._currentLineWidth / 2;
      context.arc(this._getRelativeCoordinates(event).x, this._getRelativeCoordinates(event).y, radius, 0, Math.PI * 2, true);
      context.fill();
      return;
    }

    let i;
    for (i = 0; i < this._points.length-1; i++) {
      let startWidth, endWidth;
      // Varying brush size based on pressure, convert from pressure range of 0 to 1
      // to a scale factor of 0 to 2
      if (this._drawWithPressure) {
        startWidth = this._currentLineWidth * this._points[i].pressure * 2;
        endWidth = this._currentLineWidth * this._points[i+1].pressure * 2;
      } else {
        startWidth = endWidth = this._currentLineWidth;
      }
      let path = this._createPath(this._points[i].x, this._points[i].y, this._points[i+1].x, this._points[i+1].y, startWidth, endWidth);
      context.fillStyle = this._getCurrentColor(event);
      context.fill(path);
    }
  }

  _drawPoints(event, context) {
    if (this._points.length < 2) {
      context.beginPath();
      context.fillStyle = this._getCurrentColor(event);
      context.arc(this._getRelativeCoordinates(event).x,  this._getRelativeCoordinates(event).y, 3, 0, Math.PI * 2, true);
      context.fill();
      return;
    }

    let i;
    for (i = 1; i < this._points.length-1; i++) {
      context.beginPath();
      context.fillStyle = '#FF0000';
      context.arc(this._points[i].x, this._points[i].y, 2, 0, Math.PI * 2, true);
      context.fill();
    }

    context.beginPath();
    context.fillStyle = this._getCurrentColor(event);
    context.arc(this._points[i].x, this._points[i].y, 3, 0, Math.PI * 2, true);
    context.fill();
  }

  _createPath(x1, y1, x2, y2, startWidth, endWidth) {
    const vectorX = x2 - x1,
          vectorY = y2 - y1;
    const vectorAngle = Math.atan2(vectorY, vectorX) + Math.PI / 2;
    const path = new Path2D();

    path.arc(x1, y1, startWidth / 2, vectorAngle, vectorAngle + Math.PI);
    path.arc(x2, y2, endWidth / 2, vectorAngle + Math.PI, vectorAngle);
    path.closePath();
    return path;
  }

  _strokePredictedEvents(event, context) {
    // Varying brush size based on pressure, convert from pressure range of 0 to 1
    // to a scale factor of 0 to 2
    if (this._drawWithPressure)
      context.lineWidth = this._currentLineWidth * event.pressure * 2;
    else
      context.lineWidth = this._currentLineWidth;
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

  _pressureEventsEnabledChanged(event) {
    this._drawWithPressure = event.detail.pressureEventsEnabled;
  }

  _predictedEventsEnabledChanged(event) {
    this._drawPredictedEvents = event.detail.predictedEventsEnabled;
  }

  _predictedEventsHighlightEnabledChanged(event) {
    this._highlightPredictedEvents = event.detail.predictedEventsHighlightEnabled;
  }

  _numOfPredictionPointsChanged(event) {
    this._numOfPredictionPoints = event.detail.numOfPredictionPoints;
  }

  _coalescedEventsEnabledChanged(event) {
    this._drawCoalescedEvents = event.detail.coalescedEventsEnabled;
  }

  _drawPointsOnlyEnabledChanged(event) {
    this._drawPointsOnly = event.detail.drawPointsOnlyEnabled;
  }

  _onResize = async (event) => {
    const style = window.getComputedStyle(this._canvas);
    this._canvas.width  = this._predictionCanvas.width = parseInt(style.width, 10);
    this._canvas.height =  this._predictionCanvas.height = parseInt(style.height, 10);
  }

  render() {
    return html`
    <mwc-drawer id="drawer" hasHeader type="modal">
      <span slot="title" class="header">Toolbar</span>
      <div class="drawer-content">
        <tiny-toolbar @color-changed=${this._colorChanged}
          @lineWidth-changed=${this._lineWidthChanged}
          @drawWithPreferredColor-changed=${this._drawWithPreferredColorChanged}
          @pressureEventsEnabled-changed=${this._pressureEventsEnabledChanged}
          @predictedEventsEnabled-changed=${this._predictedEventsEnabledChanged}
          @predictedEventsHighlightEnabled-changed=${this._predictedEventsHighlightEnabledChanged}
          @numOfPredictionPoints-changed=${this._numOfPredictionPointsChanged}
          @coalescedEventsEnabled-changed=${this._coalescedEventsEnabledChanged}
          @drawPointsOnlyEnabled-changed=${this._drawPointsOnlyEnabledChanged}>
        </tiny-toolbar>
      </div>
      <div slot="appContent">
        <mwc-top-app-bar>
          <mwc-icon-button slot="navigationIcon" icon="menu"></mwc-icon-button>
          <div slot="title">TinyCanvas</div>
          <mwc-icon-button slot="actionItems" id="clear-button" icon="clear"></mwc-icon-button>
        </mwc-top-app-bar>
        <canvas id="canvas"></canvas>
        <canvas id="prediction-canvas"></canvas>
      </div>
    </mwc-drawer>
    <mwc-snackbar id="snackbar" labelText="A newer version of the application is available.">
    <mwc-button slot="action">RELOAD</mwc-button>
      <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
    </mwc-snackbar>`;
  }
}

customElements.define("main-application", MainApplication);