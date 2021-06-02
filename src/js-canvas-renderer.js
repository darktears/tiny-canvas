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

  clearCanvas() {
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }

  clearPredictionCanvas() {
    this._predictionContext.clearRect(0, 0,
      this._predictionContext.canvas.width, this._predictionContext.canvas.height);
  }

  render() {
    this._paths.forEach(path => {
      // render all path history not rendered
      if (path.display && !path.rendered) {
        if (this._drawPointsOnly)
          this._drawPoints(this._context, path.points);
        else
          this._drawStroke(this._context, path.points);
        path.rendered = true;
      }
    });

    if(this._currentPath && this._currentPath.points.length > 0 &&
       !this._currentPath.points[this._currentPath.points.length-1].rendered) {
      // check if there are points added but not yet rendered
      let newPoints = [...this._currentPath.points];
      for (let i=newPoints.length-1; i >= 0; i--) {
        if (newPoints[i].rendered) {
          newPoints.splice(0, i);
          break;
        }
      }

      if (this._drawPointsOnly)
        this._drawPoints(this._context, newPoints);
      else
        this._drawStroke(this._context, newPoints);

      if (this._drawPredictedEvents) {
        // This will clear the canvas (which include the previous predictions).
        this._predictionContext.clearRect(0, 0,
          this._predictionContext.canvas.width, this._predictionContext.canvas.height);
        if (this._currentPath.predictedPoints.length > 0) {
          if (this._drawPointsOnly)
            this._strokePredictedPoints(this._predictionContext, this._currentPath.predictedPoints);
          else
            this._strokePredictedEvents(this._predictionContext, this._currentPath.predictedPoints);
        }
      }

      // mark all as rendered
      this._currentPath.points.forEach(point => {
        point.rendered = true;
      });
      this._currentPath.predictedPoints = [];
    }
  }

  _drawStroke(context, points) {
    if (points.length < 2) {
      context.beginPath();
      context.fillStyle = this.getCurrentColor(points[0]);
      let radius;
      if (this._drawWithPressure)
        radius = points[0].lineWidth * points[0].pressure;
      else
        radius = points[0].lineWidth / 2;
    }

    let i;
    for (i = 0; i < points.length-1; i++) {
      let startWidth, endWidth;
      // Varying brush size based on pressure, convert from pressure range of 0 to 1
      // to a scale factor of 0 to 2
      if (this._drawWithPressure) {
        startWidth = points[i].lineWidth * points[i].pressure * 2;
        endWidth = points[i].lineWidth * points[i+1].pressure * 2;
      } else {
        startWidth = endWidth = points[i].lineWidth;
      }
      let path = this._createPath(points[i].x, points[i].y, points[i+1].x, points[i+1].y, startWidth, endWidth);
      context.fillStyle = this.getCurrentColor(points[i]);
      context.fill(path);
    }
  }

  _drawPoints(context, points) {
    for (let i = 0; i < points.length; i++) {
      context.beginPath();
      context.fillStyle = this.getCurrentColor(points[i]);
      if (points[i].coalesced) {
        context.arc(points[i].x, points[i].y, points[i].lineWidth / 2, 0, Math.PI * 2, true);
        context.stroke();
      } else {
        context.arc(points[i].x, points[i].y, points[i].lineWidth, 0, Math.PI * 2, true);
        context.fill();
      }
    }
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

  _strokePredictedEvents(context, points) {
    if (points.length > 0 && this._currentPath.points.length > 0) {
      let lastPoint = this._currentPath.points[this._currentPath.points.length-1];
      let startWidth, endWidth;
      // Varying brush size based on pressure, convert from pressure range of 0 to 1
      // to a scale factor of 0 to 2
      if (this._drawWithPressure) {
        startWidth = endWidth = lastPoint.lineWidth * lastPoint.pressure * 2;
      } else {
        startWidth = endWidth = lastPoint.lineWidth;
      }

      let path = this._createPath(lastPoint.x, lastPoint.y, points[0].x, points[0].y, startWidth, endWidth);
      if (this._highlightPredictedEvents)
        context.fillStyle = 'red';
      else
        context.fillStyle = this.getCurrentColor(lastPoint);
      context.fill(path);

      let i;
      for (i = 0; i < points.length-1; i++) {
        let path = this._createPath(points[i].x, points[i].y,
          points[i+1].x, points[i+1].y, startWidth, endWidth);
        context.fill(path);
      }
    }
  }

  _strokePredictedPoints(context, points) {
    let i;
    let lastPoint = this._currentPath.points[this._currentPath.points.length-1];
    for (i = 0; i < points.length; i++) {
      context.beginPath();
      if (this._highlightPredictedEvents)
        context.fillStyle = 'red';
      else
        context.fillStyle = this.getCurrentColor(lastPoint);
      context.arc(points[i].x, points[i].y, 3, 0, Math.PI * 2, true);
      context.fill();
    }
  }
}
