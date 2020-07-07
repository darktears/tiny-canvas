function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { LitElement, html, css } from '../web_modules/lit-element.js';
import { Workbox, messageSW } from '../web_modules/workbox-window.js';
import '../web_modules/@material/mwc-snackbar.js';
import './toolbar.js';
export class MainApplication extends LitElement {
  firstUpdated() {
    this._canvas = this.shadowRoot.querySelector('#canvas');
    if (this._canvas && this._canvas.getContext) this._context = this._canvas.getContext('2d'); // Check that we have a valid context to draw on/with before adding event handlers

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
        }); // Send a message to the waiting service worker instructing
        // it to skip waiting, which will trigger the `controlling`
        // event listener above.


        if (this._wbRegistration && this._wbRegistration.waiting) {
          messageSW(this._wbRegistration.waiting, {
            type: 'SKIP_WAITING'
          });
        }
      }
    }); // Check that service workers are supported


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
    this._canvas.width = parseInt(style.width, 10);
    this._canvas.height = parseInt(style.height, 10);
    window.addEventListener('resize', this._onResize);
    console.log(window.navigator.usi);
  }

  constructor() {
    super();

    _defineProperty(this, "_pointerDown", false);

    _defineProperty(this, "_currentColor", '#000000');

    _defineProperty(this, "_points", []);

    _defineProperty(this, "_onPointerDown", async event => {
      this._pointerDown = true;
      this._pointerId = event.pointerId;

      this._canvas.setPointerCapture(this._pointerId);

      event.preventDefault();

      this._drawStroke(event.clientX, event.clientY);
    });

    _defineProperty(this, "_onPointerMove", async event => {
      if (event.clientY < 0 || event.clientX < 0 || event.clientX > window.innerWidth || event.clientY > window.innerHeight) {
        this._pointerDown = false;
        return;
      }

      if (this._pointerDown) {
        const coordinate = this._getRelativeCoordinates(event);

        if (event.preferredColor && this._drawWithPreferredColor) this._drawStroke(coordinate.x, coordinate.y, event.preferredColor);else this._drawStroke(coordinate.x, coordinate.y, this._currentColor);
        event.preventDefault();
      }
    });

    _defineProperty(this, "_onPointerUp", async event => {
      this._pointerDown = false;
      this._points = [];

      this._canvas.releasePointerCapture(this._pointerId);
    });

    _defineProperty(this, "_onResize", async event => {
      const style = window.getComputedStyle(this._canvas);
      this._canvas.width = parseInt(style.width, 10);
      this._canvas.height = parseInt(style.height, 10);
    });

    this._drawWithPreferredColor = false;
  }

  _showSnackbar() {
    this._snackbar.show();
  }

  _getRelativeCoordinates(event) {
    const rect = this._canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  _drawStroke(x, y, color) {
    this._points.push({
      x: Math.round(x),
      y: Math.round(y)
    });

    this._context.moveTo(this._points[0].x, this._points[0].y);

    this._context.beginPath();

    let i;
    this._context.lineWidth = 8;
    this._context.lineCap = "round";

    for (i = 1; i < this._points.length - 2; i++) {
      const xc = (this._points[i].x + this._points[i + 1].x) / 2;
      const yc = (this._points[i].y + this._points[i + 1].y) / 2;

      this._context.quadraticCurveTo(this._points[i].x, this._points[i].y, xc, yc);
    } // curve through the last two points


    if (this._points.length > 2) this._context.quadraticCurveTo(this._points[i].x, this._points[i].y, this._points[i + 1].x, this._points[i + 1].y);
    this._context.strokeStyle = color;

    this._context.stroke();
  }

  _colorChanged(event) {
    this._currentColor = event.detail.color;
    this._drawWithPreferredColor = false;
  }

  _drawWithPreferredColorChanged(event) {
    this._drawWithPreferredColor = event.detail.drawWithPreferredColor;
  }

  render() {
    return html`
    <div class="main-layout">
      <tiny-toolbar @color-changed=${this._colorChanged}  @drawWithPreferredColor-changed=${this._drawWithPreferredColorChanged}></tiny-toolbar>
      <canvas id="canvas"></canvas>
    </div>
    <mwc-snackbar id="snackbar" labelText="A newer version of the application is available.">
    <mwc-button slot="action">RELOAD</mwc-button>
      <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
    </mwc-snackbar>`;
  }

}

_defineProperty(MainApplication, "styles", css`
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
  `);

customElements.define("main-application", MainApplication);