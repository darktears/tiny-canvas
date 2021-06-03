function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { LitElement, html, css } from '../web_modules/lit-element.js';
import KalmanFilter from '../web_modules/kalman-filter/lib/kalman-filter.js';
export class BaseCanvas extends LitElement {
  static get properties() {
    return {
      app: {
        type: Object,
        reflectToAttribute: true,
        attribute: true
      },
      canvas: {
        type: Object,
        reflectToAttribute: true,
        attribute: true
      },
      predictionCanvas: {
        type: Object,
        reflectToAttribute: true,
        attribute: true
      },
      desynchronized: {
        type: Boolean,
        reflectToAttribute: true,
        attribute: true
      },
      renderer: {
        type: Object,
        reflectToAttribute: true,
        attribute: true
      },
      pointerRawUpdate: {
        type: Boolean,
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
      drawCoalescedEvents: {
        type: Boolean,
        reflectToAttribute: true,
        attribute: true
      },
      drawPointsOnly: {
        type: Boolean,
        reflectToAttribute: true,
        attribute: true
      },
      drawPredictedEvents: {
        type: Boolean,
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
      highlightPredictedEvents: {
        type: Boolean,
        reflectToAttribute: true,
        attribute: true
      },
      numOfPredictionPoints: {
        type: Number,
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

  set canvas(canvas) {
    let oldCanvas = this._canvas;
    this._canvas = canvas;
    this.requestUpdate('canvas', oldCanvas);
  }

  get canvas() {
    return this._canvas;
  }

  set predictionCanvas(predictionCanvas) {
    let oldPredictionCanvas = this._predictionCanvas;
    this._predictionCanvas = predictionCanvas;
    this.requestUpdate('predictionCanvas', oldPredictionCanvas);
  }

  get predictionCanvas() {
    return this._predictionCanvas;
  }

  set desynchronized(desynchronized) {
    let oldDesynchronized = this._desynchronized;
    this._desynchronized = desynchronized;
    this.requestUpdate('desynchronized', oldDesynchronized);
  }

  get desynchronized() {
    return this._desynchronized;
  }

  set renderer(renderer) {
    let oldRenderer = this._renderer;
    this._renderer = renderer;
    this.requestUpdate('renderer', oldRenderer);

    if (this._renderer) {
      this._renderer.currentColor = this._currentColor;
      this._renderer.currentLineWidth = this._currentLineWidth;
      this._renderer.drawCoalescedEvents = this._drawCoalescedEvents;
      this._renderer.drawPointsOnly = this._drawPointsOnly;
      this._renderer.drawPredictedEvents = this._drawPredictedEvents;
      this._renderer.drawWithPreferredColor = this._drawWithPreferredColor;
      this._renderer.drawWithPressure = this._drawWithPressure;
      this._renderer.highlightPredictedEvents = this._highlightPredictedEvents;
      this._renderer.predictionType = this._predictionType;
      this._renderer.numOfPredictionPoints = this_numOfPredictionPoints;
    }
  }

  get renderer() {
    return this._renderer;
  }

  set pointerRawUpdate(pointerRawUpdate) {
    let oldPointerRawUpdate = this._pointerRawUpdate;
    this._pointerRawUpdate = pointerRawUpdate;
    this.requestUpdate('pointerRawUpdate', oldPointerRawUpdate);

    if (oldPointerRawUpdate !== pointerRawUpdate) {
      if (this._canvas) {
        if (pointerRawUpdate) {
          this._canvas.onpointermove = null;
          this._canvas.onpointerrawupdate = this._onPointerMove.bind(this);
        } else {
          this._canvas.onpointerrawupdate = null;
          this._canvas.onpointermove = this._onPointerMove.bind(this);
        }
      }
    }
  }

  get pointerRawUpdate() {
    return this._pointerRawUpdate;
  }

  set currentColor(currentColor) {
    let oldCurrentColor = this._currentColor;
    this._currentColor = currentColor;

    if (this._renderer) {
      this._renderer.currentColor = currentColor;
    }

    this.requestUpdate('currentColor', oldCurrentColor);
  }

  get currentColor() {
    return this._currentColor;
  }

  set currentLineWidth(currentLineWidth) {
    let oldCurrentLineWidth = this._currentLineWidth;
    this._currentLineWidth = currentLineWidth;
    if (this._renderer) this._renderer.currentLineWidth = currentLineWidth;
    this.requestUpdate('currentLineWidth', oldCurrentLineWidth);
  }

  get currentLineWidth() {
    return this._currentLineWidth;
  }

  set drawCoalescedEvents(drawCoalescedEvents) {
    let oldDrawCoalescedEvents = this._drawCoalescedEvents;
    this._drawCoalescedEvents = drawCoalescedEvents;
    if (this._renderer) this._renderer.drawCoalescedEvents = drawCoalescedEvents;
    this.requestUpdate('drawCoalescedEvents', oldDrawCoalescedEvents);
  }

  get drawCoalescedEvents() {
    return this._drawCoalescedEvents;
  }

  set drawPointsOnly(drawPointsOnly) {
    let oldDrawPointsOnly = this._drawPointsOnly;
    this._drawPointsOnly = drawPointsOnly;
    if (this._renderer) this._renderer.drawPointsOnly = drawPointsOnly;
    this.requestUpdate('drawPointsOnly', oldDrawPointsOnly);
  }

  get drawPointsOnly() {
    return this._drawPointsOnly;
  }

  set drawPredictedEvents(drawPredictedEvents) {
    let oldDrawPredictedEvents = this._drawPredictedEvents;
    this._drawPredictedEvents = drawPredictedEvents;
    if (this._renderer) this._renderer.drawPredictedEvents = drawPredictedEvents;
    this.requestUpdate('drawPredictedEvents', oldDrawPredictedEvents);
  }

  get drawPredictedEvents() {
    return this._drawPredictedEvents;
  }

  set drawWithPreferredColor(drawWithPreferredColor) {
    let oldDrawWithPreferredColor = this._drawWithPreferredColor;
    this._drawWithPreferredColor = drawWithPreferredColor;
    if (this._renderer) this._renderer.drawWithPreferredColor = drawWithPreferredColor;
    this.requestUpdate('drawWithPreferredColor', oldDrawWithPreferredColor);
  }

  get drawWithPreferredColor() {
    return this._drawWithPreferredColor;
  }

  set drawWithPressure(drawWithPressure) {
    let oldDrawWithPressure = this._drawWithPressure;
    this._drawWithPressure = drawWithPressure;
    if (this._renderer) this._renderer.drawWithPressure = drawWithPressure;
    this.requestUpdate('drawWithPressure', oldDrawWithPressure);
  }

  get drawWithPressure() {
    return this._drawWithPressure;
  }

  set highlightPredictedEvents(highlightPredictedEvents) {
    let oldHighlightPredictedEvents = this._highlightPredictedEvents;
    this._highlightPredictedEvents = highlightPredictedEvents;
    if (this._renderer) this._renderer.highlightPredictedEvents = highlightPredictedEvents;
    this.requestUpdate('highlightPredictedEvents', oldHighlightPredictedEvents);
  }

  get highlightPredictedEvents() {
    return this._highlightPredictedEvents;
  }

  set predictionType(predictionType) {
    let oldPredictionType = this._predictionType;
    this._predictionType = predictionType;
    if (this._renderer) this._renderer.predictionType = predictionType;
    this.requestUpdate('predictionType', oldPredictionType);
  }

  get predictionType() {
    return this._predictionType;
  }

  set numOfPredictionPoints(numOfPredictionPoints) {
    let oldNumOfPredictionPoints = this._numOfPredictionPoints;
    this._numOfPredictionPoints = numOfPredictionPoints;
    if (this._renderer) this._renderer.numOfPredictionPoints = numOfPredictionPoints;
    this.requestUpdate('numOfPredictionPoints', oldNumOfPredictionPoints);
  }

  get numOfPredictionPoints() {
    return this._numOfPredictionPoints;
  }

  set paths(paths) {
    let oldPaths = this._paths;
    this._paths = paths;
    let event = new CustomEvent('paths-changed', {
      detail: {
        paths: paths
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.requestUpdate('paths', oldPaths);
  }

  get paths() {
    return this._paths;
  }

  firstUpdated() {
    const style = window.getComputedStyle(this);
    this._canvas = this.shadowRoot.querySelector('#canvas');
    this._predictionCanvas = this.shadowRoot.querySelector('#prediction-canvas');
    this._canvas.width = this._predictionCanvas.width = parseInt(style.width, 10);
    this._canvas.height = this._predictionCanvas.height = parseInt(style.height, 10);
    this._canvas.style.left = this._predictionCanvas.style.left = style.left + 'px';
    this._canvas.style.top = this._predictionCanvas.style.top = style.top + 'px';
    this._canvas.onpointerdown = this._onPointerDown.bind(this);
    if (this._pointerRawUpdate) this._canvas.onpointerrawupdate = this._onPointerMove.bind(this);else this._canvas.onpointermove = this._onPointerMove.bind(this);
    this._canvas.onpointerup = this._onPointerUp.bind(this);
    window.addEventListener('resize', this._onResize);
  }

  constructor() {
    super();

    _defineProperty(this, "_onPointerDown", async event => {
      if (this._pointerDown && event.pointerId !== this._pointerId) return;
      this._app.currentEvent = event;
      this._pointerDown = true;
      this._pointerId = event.pointerId;

      this._renderer.beginPath(this._getPoint(event));

      this._draw();

      event.preventDefault();
    });

    _defineProperty(this, "_onPointerMove", async event => {
      if (event.clientY < 0 || event.clientX < 0 || event.clientX > window.innerWidth || event.clientY > window.innerHeight) {
        this._pointerDown = false;
        return;
      }

      if (this._pointerDown && event.pointerId === this._pointerId) {
        let points = [];
        let predictedPoints = [];

        if (event.getCoalescedEvents && this._drawCoalescedEvents) {
          if (event.getCoalescedEvents().length > 0) {
            for (let e of event.getCoalescedEvents()) {
              let point = this._getPoint(e);

              point.coalesced = true;
              points.push(point);
            }
          } else {
            points.push(this._getPoint(event));
          }
        } else {
          points.push(this._getPoint(event));
        } // mark the last one as non-coalesced as it contains the same position as the actual event
        // this flag is used to distinguish them when rendering in points only mode


        points[points.length - 1].coalesced = false;

        if (this._drawPredictedEvents) {
          for (let e of this._getPrediction(event)) {
            predictedPoints.push(e);
          } // number of points from slider should be between 1 - 10


          if (this._numOfPredictionPoints > 0 && this._numOfPredictionPoints <= 10) {
            predictedPoints = predictedPoints.slice(0, this._numOfPredictionPoints);
          }
        }

        this._renderer.addToPath(points, predictedPoints);

        this._draw();

        event.preventDefault();
      }

      this._app.currentEvent = event;
    });

    _defineProperty(this, "_onPointerUp", async event => {
      this._app.currentEvent = event;

      if (this._pointerDown) {
        if (event.pointerId !== this._pointerId) return;

        this._renderer.endPath(this._getPoint(event));

        this.paths = this._renderer.paths;
        this._pointerDown = false;
        this._pointerId = null;

        this._resetPrediction();
      }
    });

    _defineProperty(this, "_onResize", async event => {
      const style = window.getComputedStyle(this);
      const width = parseInt(style.width, 10);
      const height = parseInt(style.height, 10);

      if (width > 0 && height > 0) {
        this._canvas.width = this._predictionCanvas.width = width;
        this._canvas.height = this._predictionCanvas.height = height;

        this._renderer.resize(width, height);
      }
    });

    this._app = null;
    this._canvas = null;
    this._predictionCanvas = null;
    this._desynchronized = false;
    this._renderer = null;
    this._pointerRawUpdate = false;
    this._pointerDown = false; // renderer-specific properties

    this._currentColor = '#000000';
    this._currentLineWidth = 1;
    this._drawCoalescedEvents = false;
    this._drawPointsOnly = false;
    this._drawPredictedEvents = false;
    this._drawWithPreferredColor = false;
    this._drawWithPressure = false;
    this._highlightPredictedEvents = false;
    this._predictionType = 'custom';
    this._numOfPredictionPoints = 1; // Kalman filter for self-learning predictions

    this._kalmanFilterDataSize = 6;
    this._kalmanFilter = new KalmanFilter({
      observation: this._kalmanFilterDataSize
    });
    this._correctedPrediction = null;
  }

  undoPath() {
    this._renderer.undoPath();

    this.paths = this._renderer.paths;

    this._draw();
  }

  redoPath() {
    this._renderer.redoPath();

    this.paths = this._renderer.paths;

    this._draw();
  }

  deleteAllPaths() {
    this._renderer.deleteAllPaths();

    this.paths = this._renderer.paths;

    this._draw();
  }

  _getPrediction(event) {
    let predictedPoints = [];

    if (this._predictionType === 'chrome' && event.getPredictedEvents) {
      // use Chrome's built-in prediction
      for (let e of event.getPredictedEvents()) predictedPoints.push(this._getPoint(e));

      return predictedPoints;
    } else {
      // use custom KalmanFilter prediction
      return this._getCustomPrediction(event);
    }
  }

  _getCustomPrediction(event) {
    // custom prediction using KalmanFilter-based algorithm that samples
    // last 10 points, and uses the corrected averages of the velocity for
    // calculating predicted pointer position
    let points = event.getCoalescedEvents();
    if (points.length < 1) return [];
    let predictedPoints = [];

    let previous = this._getPoint(this._app.currentEvent);

    let maxPredictedPoints = 0;
    let timeDelta = 0;
    let dX = 0;
    let dY = 0;
    let vX = 0;
    let vY = 0;
    let aX = 0;
    let aY = 0;
    let current = null;

    for (let e of points) {
      current = e;
      if (current.timeStamp === previous.timeStamp) break;
      let timeDelta = current.timeStamp - previous.timeStamp;
      dX = current.x - previous.x;
      dY = current.y - previous.y;
      vX = dX / timeDelta;
      vY = dY / timeDelta;
      aX = vX / timeDelta;
      aY = vY / timeDelta;
      if (dX < 5 && dY < 5) maxPredictedPoints = 0;else if (dX < 10 && dY < 10) maxPredictedPoints = 1;else if (dX < 20 && dY < 20) maxPredictedPoints = 8;else maxPredictedPoints = 10;
      let previousCorrected = this._correctedPrediction;

      let newPrediction = this._kalmanFilter.predict({
        previousCorrected
      });

      this._correctedPrediction = this._kalmanFilter.correct({
        predicted: newPrediction,
        observation: [maxPredictedPoints, timeDelta, vX, vY, aX, aY]
      });
      previousCorrected = this._correctedPrediction;
      previous = current;
    }

    maxPredictedPoints = Math.ceil(this._correctedPrediction.mean[0][0]);
    timeDelta = this._correctedPrediction.mean[1][0];
    vX = this._correctedPrediction.mean[2][0];
    vY = this._correctedPrediction.mean[3][0];
    aX = this._correctedPrediction.mean[4][0];
    aY = this._correctedPrediction.mean[5][0];

    for (let i = 1; i <= maxPredictedPoints; i++) {
      // velocity only for now as adding acceleration produce more extreme values
      let point = {
        type: event.type,
        timeStamp: event.timeStamp + timeDelta * i,
        x: current.x + vX * timeDelta * i,
        y: current.y + vY * timeDelta * i,
        pressure: event.pressure,
        preferredColor: event.preferredColor,
        color: this._currentColor,
        lineWidth: this._currentLineWidth
      };
      predictedPoints.push(point);
    }

    return predictedPoints;
  }

  _resetPrediction() {
    this._kalmanFilter = new KalmanFilter({
      observation: this._kalmanFilterDataSize
    });
    this._correctedPrediction = null;
  }

  _draw() {
    this._renderer.render();
  } // return a simplified version of the event for ease of serialization to worker


  _getPoint(event) {
    return {
      timeStamp: event.timeStamp,
      type: event.type,
      x: event.clientX,
      y: event.clientY,
      pressure: event.pressure,
      preferredColor: event.preferredColor,
      color: this._currentColor,
      lineWidth: this._currentLineWidth
    };
  }

  render() {
    return html`
    <canvas id="canvas"></canvas>
    <canvas id="prediction-canvas"></canvas>`;
  }

}

_defineProperty(BaseCanvas, "styles", css`
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