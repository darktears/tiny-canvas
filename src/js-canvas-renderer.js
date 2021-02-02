import { BaseCanvasRenderer } from './base-canvas-renderer.js';

export class JSCanvasRenderer extends BaseCanvasRenderer {

  constructor(canvas, predictionCanvas, desynchronized) {
    super(canvas, predictionCanvas);
    this._context = this._canvas.getContext('2d', { desynchronized: desynchronized });
    this._predictionContext = this._predictionCanvas.getContext('2d', { desynchronized: desynchronized });

    if (!this._context || !this._predictionContext) {
      console.error('Your browser doesn\'t support canvas, this demo won\'t work');
      return;
    }

    this._context.lineCap = this._predictionContext.lineCap = 'round';
    this._context.lineJoin = this._predictionContext.lineJoin = 'round';
    this._context.shadowBlur = this._predictionContext.shadowBlur = 2;
    console.log('Canvas2D loaded, desynchronized:', desynchronized);
  }

  resize(width, height) {
    this._canvas.width  = this._predictionCanvas.width = width;
    this._canvas.height =  this._predictionCanvas.height = height;
  }

  beginPath(point) {
    this._points.push(point);
  }

  addToPath(points, predictedPoints) {
    if (!points)
      return;
    this._points.push(...points);
    this._predictedPoints = predictedPoints;
  }

  endPath(point) {
    if (this._drawPredictedEvents)
      this._predictionContext.clearRect(0, 0,
        this._predictionContext.canvas.width, this._predictionContext.canvas.height);
    this._points = [];
    this._predictedPoints = [];
  }

  clear() {
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._predictionContext.clearRect(0, 0,
      this._predictionContext.canvas.width, this._predictionContext.canvas.height);
    this._points = [];
    this._predictedPoints = [];
  }

  render() {
    if(this._points.length > 0) {
      if (this._drawPointsOnly)
        this._drawPoints(this._context);
      else
        this._drawStroke(this._context);

      if (this._drawPredictedEvents && this._predictedPoints.length > 0) {
        // This will clear the canvas (which include the previous predictions).
        this._predictionContext.clearRect(0, 0,
          this._predictionContext.canvas.width, this._predictionContext.canvas.height);
        if (this._drawPointsOnly)
          this._strokePredictedPoints(this._predictionContext);
        else
          this._strokePredictedEvents(this._predictionContext);
      }

      // Drop all previous coalesced pointer events except for the last one
      // which is used for the next start position for the stroke.  If
      // coalesced events were not used, then the last point will always be
      // the current x y position of pointerMove event.
      this._points.splice(0, this._points.length-1);
      this._predictedPoints = [];
    }
  }

  _drawStroke(context) {
    if (this._points.length < 2) {
      context.beginPath();
      context.fillStyle = this.getCurrentColor(this._points[0]);
      let radius;
      if (this._drawWithPressure)
        radius = this._currentLineWidth * this._points[0].pressure;
      else
        radius = this._currentLineWidth / 2;
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
      context.fillStyle = this.getCurrentColor(this._points[i]);
      context.fill(path);
    }
  }

  _drawPoints(context) {
    if (this._points.length < 2) {
      context.beginPath();
      context.fillStyle = this.getCurrentColor(this._points[0]);
      context.arc(this._points[0].x,  this._points[0].y, 3, 0, Math.PI * 2, true);
      context.fill();
      return;
    }

    let i;
    for (i = 1; i < this._points.length-1; i++) {
      context.beginPath();
      context.fillStyle = this.getCurrentColor(this._points[i]);
      context.arc(this._points[i].x, this._points[i].y, 2, 0, Math.PI * 2, true);
      context.stroke();
    }

    context.beginPath();
    context.fillStyle = this.getCurrentColor(this._points[i]);
    context.arc(this._points[i].x, this._points[i].y, 3, 0, Math.PI * 2, true);
    context.fill();
  }

  _createPath(x1, y1, x2, y2, startWidth, endWidth) {
    const vectorX = x2 - x1,
          vectorY = y2 - y1;
    const vectorAngle = Math.atan2(vectorY, vectorX) + Math.PI / 2;
    const path = new Path2D();

    path.arc(x1, y1, startWidth / 2, vectorAngle, vectorAngle + Math.PI, false);
    path.arc(x2, y2, endWidth / 2, vectorAngle + Math.PI, vectorAngle, false);
    path.closePath();
    return path;
  }

  _strokePredictedEvents(context) {
    if (this._points.length > 0 && this._predictedPoints.length > 0) {
      let lastPoint = this._points[this._points.length-1];
      let startWidth, endWidth;
      // Varying brush size based on pressure, convert from pressure range of 0 to 1
      // to a scale factor of 0 to 2
      if (this._drawWithPressure) {
        startWidth = endWidth = this._currentLineWidth * lastPoint.pressure * 2;
      } else {
        startWidth = endWidth = this._currentLineWidth;
      }

      let path = this._createPath(lastPoint.x, lastPoint.y, this._predictedPoints[0].x, this._predictedPoints[0].y, startWidth, endWidth);
      if (this._highlightPredictedEvents)
        context.fillStyle = 'red';
      else
        context.fillStyle = this.getCurrentColor(lastPoint);
      context.fill(path);

      let i;
      for (i = 0; i < this._predictedPoints.length-1; i++) {
        let path = this._createPath(this._predictedPoints[i].x, this._predictedPoints[i].y, this._predictedPoints[i+1].x, this._predictedPoints[i+1].y, startWidth, endWidth);
        context.fill(path);
      }
    }
  }

  _strokePredictedPoints(context) {
    let i;
    let lastPoint = this._points[this._points.length-1];
    for (i = 0; i < this._predictedPoints.length; i++) {
      context.beginPath();
      if (this._highlightPredictedEvents)
        context.fillStyle = 'red';
      else
        context.fillStyle = this.getCurrentColor(lastPoint);
      context.arc(this._predictedPoints[i].x, this._predictedPoints[i].y, 3, 0, Math.PI * 2, true);
      context.fill();
    }
  }
}
