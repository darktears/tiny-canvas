function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { LitElement, html, css } from '../web_modules/lit-element.js';
import PathKitInit from '../web_modules/pathkit-wasm/bin/pathkit.js';
export class PathKitCanvas extends LitElement {
  static get properties() {
    return {
      app: {
        type: Object,
        reflectToAttribute: true,
        attribute: true
      },
      points: {
        type: Array,
        reflectToAttribute: true,
        attribute: true
      },
      predictedPoints: {
        type: Array,
        reflectToAttribute: true,
        attribute: true
      },
      numOfPredictionPoints: {
        type: Number,
        reflectToAttribute: true,
        attribute: true
      },
      currentColor: {
        type: String,
        reflectToAttribute: true,
        attribute: true
      },
      currentLineWidth: {
        type: String,
        reflectToAttribute: true,
        attribute: true
      },
      drawWithPreferredColor: {
        type: Boolean,
        reflectToAttribute: true,
        attribute: true
      },
      drawWithPressure: {
        type: Boolean,
        reflectToAttribute: true,
        attribute: true
      },
      drawPredictedEvents: {
        type: Boolean,
        reflectToAttribute: true,
        attribute: true
      },
      highlightPredictedEvents: {
        type: Boolean,
        reflectToAttribute: true,
        attribute: true
      },
      drawCoalescedEvents: {
        type: Boolean,
        reflectToAttribute: true,
        attribute: true
      },
      drawPointsOnly: {
        type: Boolean,
        reflectToAttribute: true,
        attribute: true
      }
    };
  }

  set app(app) {
    let oldApp = this._app;
    this._app = app;
    this.requestUpdate('app', oldApp);
  }

  get app() {
    return this._app;
  }

  set numOfPredictionPoints(numOfPredictionPoints) {
    let oldNumOfPredictionPoints = this._numOfPredictionPoints;
    this._numOfPredictionPoints = numOfPredictionPoints;
    this.requestUpdate('numOfPredictionPoints', oldNumOfPredictionPoints);
  }

  get numOfPredictionPoints() {
    return this._numOfPredictionPoints;
  }

  set currentColor(currentColor) {
    let oldCurrentColor = this._currentColor;
    this._currentColor = currentColor;
    this.requestUpdate('currentColor', oldCurrentColor);
  }

  get currentColor() {
    return this._currentColor;
  }

  set currentLineWidth(currentLineWidth) {
    let oldCurrentLineWidth = this._currentLineWidth;
    this._currentLineWidth = currentLineWidth;
    this.requestUpdate('currentLineWidth', oldCurrentLineWidth);
  }

  get currentLineWidth() {
    return this._currentLineWidth;
  }

  set drawWithPreferredColor(drawWithPreferredColor) {
    let oldDrawWithPreferredColor = this._drawWithPreferredColor;
    this._drawWithPreferredColor = drawWithPreferredColor;
    this.requestUpdate('drawWithPreferredColor', oldDrawWithPreferredColor);
  }

  get drawWithPreferredColor() {
    return this._drawWithPreferredColor;
  }

  set drawWithPressure(drawWithPressure) {
    let oldDrawWithPressure = this._drawWithPressure;
    this._drawWithPressure = drawWithPressure;
    this.requestUpdate('drawWithPressure', oldDrawWithPressure);
  }

  get drawWithPressure() {
    return this._drawWithPressure;
  }

  set drawPredictedEvents(drawPredictedEvents) {
    let oldDrawPredictedEvents = this._drawPredictedEvents;
    this._drawPredictedEvents = drawPredictedEvents;
    this.requestUpdate('drawPredictedEvents', oldDrawPredictedEvents);
  }

  get drawPredictedEvents() {
    return this._drawPredictedEvents;
  }

  set highlightPredictedEvents(highlightPredictedEvents) {
    let oldHighlightPredictedEvents = this._highlightPredictedEvents;
    this._highlightPredictedEvents = highlightPredictedEvents;
    this.requestUpdate('highlightPredictedEvents', oldHighlightPredictedEvents);
  }

  get highlightPredictedEvents() {
    return this._highlightPredictedEvents;
  }

  set drawCoalescedEvents(drawCoalescedEvents) {
    let oldDrawCoalescedEvents = this._drawCoalescedEvents;
    this._drawCoalescedEvents = drawCoalescedEvents;
    this.requestUpdate('drawCoalescedEvents', oldDrawCoalescedEvents);
  }

  get drawCoalescedEvents() {
    return this._drawCoalescedEvents;
  }

  set drawPointsOnly(drawPointsOnly) {
    let oldDrawPointsOnly = this._drawPointsOnly;
    this._drawPointsOnly = drawPointsOnly;
    this.requestUpdate('drawPointsOnly', oldDrawPointsOnly);
  }

  get drawPointsOnly() {
    return this._drawPointsOnly;
  }

  firstUpdated() {
    this._canvas = this.shadowRoot.querySelector('#canvas');
    if (this._canvas && this._canvas.getContext) this._context = this._canvas.getContext('2d', {
      desynchronized: true
    }); // Check that we have a valid context to draw on/with before adding event handlers

    if (!this._context) {
      console.error('Your browser doesn\'t support canvas, this demo won\'t work');
      return;
    }

    this._predictionCanvas = this.shadowRoot.querySelector('#prediction-canvas');
    this._predictionCanvasContext = this._predictionCanvas.getContext('2d', {
      desynchronized: true
    });
    const style = window.getComputedStyle(this);
    this._canvas.width = this._predictionCanvas.width = parseInt(style.width, 10);
    this._canvas.height = this._predictionCanvas.height = parseInt(style.height, 10);
    this._canvas.style.left = this._predictionCanvas.style.left = style.left + 'px';
    this._canvas.style.top = this._predictionCanvas.style.top = style.top + 'px';
    this._context.lineCap = this._predictionCanvasContext.lineCap = 'round';
    this._context.lineJoin = this._predictionCanvasContext.lineJoin = 'round';
    this._context.shadowBlur = this._predictionCanvasContext.shadowBlur = 2;
    window.addEventListener('resize', this._onResize);
    PathKitInit({
      locateFile: file => './wasm/' + file
    }).then(PathKit => {
      console.log('PathKit loaded');
      window.PathKit = PathKit;
      this._canvas.onpointerdown = this._onPointerDown.bind(this);
      this._canvas.onpointermove = this._onPointerMove.bind(this);
      this._canvas.onpointerup = this._onPointerUp.bind(this);
    });
  }

  constructor() {
    super();

    _defineProperty(this, "_rafId", null);

    _defineProperty(this, "_pointerDown", false);

    _defineProperty(this, "_currentColor", '#000000');

    _defineProperty(this, "_points", []);

    _defineProperty(this, "_predicted_points", []);

    _defineProperty(this, "_onPointerDown", async event => {
      this._pointerDown = true;
      this._pointerId = event.pointerId;

      this._canvas.setPointerCapture(this._pointerId);

      this._points.push(event);

      this._rafId = window.requestAnimationFrame(this._onAnimationFrame.bind(this));
      event.preventDefault();
    });

    _defineProperty(this, "_onPointerMove", async event => {
      if (event.clientY < 0 || event.clientX < 0 || event.clientX > window.innerWidth || event.clientY > window.innerHeight) {
        this._pointerDown = false;
        return;
      }

      if (this._pointerDown) {
        if (event.getCoalescedEvents && this._drawCoalescedEvents) {
          if (event.getCoalescedEvents().length > 0) {
            for (let e of event.getCoalescedEvents()) this._points.push(e);
          } else {
            this._points.push(event);
          }
        } else {
          this._points.push(event);
        }

        if (this._drawPredictedEvents && event.getPredictedEvents) {
          for (let e of event.getPredictedEvents()) {
            this._predicted_points.push(e);
          } // number of points from slider should be between 1 - 10


          if (this._numOfPredictionPoints > 0 && this._numOfPredictionPoints <= 10) this._predicted_points = this._predicted_points.slice(0, this._numOfPredictionPoints);
        }

        this._rafId = window.requestAnimationFrame(this._onAnimationFrame.bind(this));
        event.preventDefault();
      }
    });

    _defineProperty(this, "_onPointerUp", async event => {
      if (this._rafId) {
        window.cancelAnimationFrame(this._rafId);
        this._rafId = null;
      }

      if (this._drawPredictedEvents) this._predictionCanvasContext.clearRect(0, 0, this._predictionCanvasContext.canvas.width, this._predictionCanvasContext.canvas.height);
      this._pointerDown = false;

      this._canvas.releasePointerCapture(this._pointerId);

      this._predicted_points = [];
      this._points = [];

      this._app._updateInfoPanel(event);
    });

    _defineProperty(this, "_onResize", async event => {
      const style = window.getComputedStyle(this);
      this._canvas.width = this._predictionCanvas.width = parseInt(style.width, 10);
      this._canvas.height = this._predictionCanvas.height = parseInt(style.height, 10);
    });

    this._drawWithPreferredColor = false;
    this._drawWithPressure = false;
    this._drawPredictedEvents = false;
    this._highlightPredictedEvents = false;
    this._drawCoalescedEvents = false;
    this._drawPointsOnly = false;
    this._currentLineWidth = 1;
    this._numOfPredictionPoints = 1;
  }

  _clearCanvas() {
    this._context.clearRect(0, 0, this._context.canvas.width, this._context.canvas.height);

    this._predictionCanvasContext.clearRect(0, 0, this._predictionCanvasContext.canvas.width, this._predictionCanvasContext.canvas.height);
  }

  _onAnimationFrame() {
    if (this._pointerDown && this._points.length > 0) {
      if (this._drawPointsOnly) this._drawPoints(this._context);else this._drawStroke(this._context);

      if (this._drawPredictedEvents && this._predicted_points.length > 0) {
        // This will clear the canvas (which include the previous predictions).
        this._predictionCanvasContext.clearRect(0, 0, this._predictionCanvasContext.canvas.width, this._predictionCanvasContext.canvas.height);

        if (this._drawPointsOnly) this._strokePredictedPoints(this._predictionCanvasContext);else this._strokePredictedEvents(this._predictionCanvasContext);
      } // Drop all previous coalesced pointer events except for the last one
      // which is used for the next start position for the stroke.  If
      // coalesced events were not used, then the last point will always be
      // the current x y position of pointerMove event.


      this._points.splice(0, this._points.length - 1);

      this._predicted_points = [];

      this._app._updateInfoPanel(this._points[0]);
    }
  }

  _drawStroke(context) {
    if (this._points.length < 2) {
      context.beginPath();
      context.fillStyle = this._getCurrentColor(this._points[0]);
      let radius;
      if (this._drawWithPressure) radius = this._currentLineWidth * this._points[0].pressure;else radius = this._currentLineWidth / 2;
    }

    let i;

    for (i = 0; i < this._points.length - 1; i++) {
      let path = this._createPath(this._points[i].x, this._points[i].y, this._points[i + 1].x, this._points[i + 1].y); // NOTE: there's a bug in the arc() function using PathKit in wasm
      // so until that's fixed, we can only create a fixed width path rather
      // that a variable path, it will be slightly less ideal


      if (this._drawWithPressure) context.lineWidth = this._currentLineWidth * this._points[i].pressure * 2;else context.lineWidth = this._currentLineWidth;
      context.lineCap = 'round';
      context.strokeStyle = this._getCurrentColor(this._points[i]);
      context.stroke(path.toPath2D());
      path.delete(); // clean up wasm memory
    }
  }

  _drawPoints(context) {
    if (this._points.length < 2) {
      context.beginPath();
      context.fillStyle = this._getCurrentColor(this._points[0]);
      context.arc(this._points[0].x, this._points[0].y, 3, 0, Math.PI * 2, true);
      context.fill();
      return;
    }

    let i;

    for (i = 1; i < this._points.length - 1; i++) {
      context.beginPath();
      context.fillStyle = this._getCurrentColor(this._points[i]);
      context.arc(this._points[i].x, this._points[i].y, 2, 0, Math.PI * 2, true);
      context.stroke();
    }

    context.beginPath();
    context.fillStyle = this._getCurrentColor(this._points[i]);
    context.arc(this._points[i].x, this._points[i].y, 3, 0, Math.PI * 2, true);
    context.fill();
  }

  _createPath(x1, y1, x2, y2) {
    // FIXME: there's a bug in the arc() function using PathKit in wasm
    // so until that's fixed, we can only create a fixed width path rather
    // that a variable path, it will be slightly less ideal
    const path = PathKit.NewPath();
    path.moveTo(x1, y1);
    path.lineTo(x2, y2);
    return path;
  }

  _strokePredictedEvents(context) {
    if (this._points.length > 0) {
      let lastPoint = this._points[this._points.length - 1];
      if (this._drawWithPressure) context.lineWidth = this._currentLineWidth * lastPoint.pressure * 2;else context.lineWidth = this._currentLineWidth;
      context.lineCap = 'round';
      context.strokeStyle = 'red';

      let path = this._createPath(lastPoint.x, lastPoint.y, this._predicted_points[0].x, this._predicted_points[0].y);

      context.stroke(path.toPath2D());
      path.delete(); // clean up wasm memory

      let i;

      for (i = 0; i < this._predicted_points.length - 1; i++) {
        path = this._createPath(this._predicted_points[i].x, this._predicted_points[i].y, this._predicted_points[i + 1].x, this._predicted_points[i + 1].y);
        context.stroke(path.toPath2D());
        path.delete(); // clean up wasm memory
      }
    }
  }

  _strokePredictedPoints(context) {
    let i;
    let lastPoint = this._points[this._points.length - 1];

    for (i = 0; i < this._predicted_points.length; i++) {
      context.beginPath();
      if (this._highlightPredictedEvents) context.fillStyle = 'red';else context.fillStyle = this._getCurrentColor(lastPoint);
      context.arc(this._predicted_points[i].x, this._predicted_points[i].y, 3, 0, Math.PI * 2, true);
      context.fill();
    }
  }

  _getCurrentColor(event) {
    if (event.preferredColor && this._drawWithPreferredColor) return event.preferredColor;else return this._currentColor;
  }

  render() {
    return html`
    <canvas id="canvas"></canvas>
    <canvas id="prediction-canvas"></canvas>`;
  }

}

_defineProperty(PathKitCanvas, "styles", css`
    :host {
    }

    #canvas {
      position: absolute;
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
  `);

customElements.define('pathkit-canvas', PathKitCanvas);