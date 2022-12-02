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
        if (this._drawPointsOnly) {
          this._drawPoints(this._context, path.points);
        } else if (this.getCurrentLineStyle(path.points[0]) === 'highlighter') {
          this._drawLine(this._context, path.points);
        } else {
          this._drawStroke(this._context, path.points);
        }
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

      if (this._drawPointsOnly) {
        this._drawPoints(this._context, newPoints);
      } else if (this.getCurrentLineStyle(newPoints[0]) === 'highlighter') {
        this._drawLine(this._context, newPoints);
      } else {
        this._drawStroke(this._context, newPoints);
      }

      if (this._drawPredictedEvents) {
        // This will clear the canvas (which include the previous predictions).
        this._predictionContext.clearRect(0, 0,
          this._predictionContext.canvas.width, this._predictionContext.canvas.height);
        if (this._currentPath.predictedPoints.length > 0) {
          if (this._drawPointsOnly) {
            this._strokePredictedPoints(this._predictionContext, this._currentPath.predictedPoints);
          } else if (this.getCurrentLineStyle(this._currentPath.points[0]) !== 'brush' &&
                     this.getCurrentLineStyle(this._currentPath.points[0]) !== 'highlighter') {
            this._strokePredictedEvents(this._predictionContext, this._currentPath.predictedPoints);
          }
        }
      }

      // mark all as rendered
      this._currentPath.points.forEach(point => {
        point.rendered = true;
      });
      this._currentPath.predictedPoints = [];
    }
  }

  _hexToRgbColor(color) {
    return { r: '0x' + color[1] + color[2] | 0, g: '0x' + color[3] + color[4] | 0, b: '0x' + color[5] + color[6] | 0 };
  }

  // Draws strokes with varying pressure, eg. ink/pencil/brush
  _drawStroke(context, points) {
    let penColor = this.getCurrentLineColor(points[0]);
    let penStyle = this.getCurrentLineStyle(points[0]);
    let penWidth = this.getCurrentLineWidth(points[0]);
    let startWidth, endWidth;
    let i;

    if(points[0].type === 'pointerdown') {
      startWidth = this.getCurrentLineWidth(points[0]);
      endWidth = this.getCurrentLineWidth(points[0]);
      context.fillStyle = penColor;
      context.strokeStyle = 'none';
    }

    for (i = 0; i < points.length-1; i++) {
      // Varying brush size based on pressure, convert from pressure range of 0 to 1
      // to a scale factor of 0 to 2
      if (this._drawWithPressure && points[i].type !== 'pointerdown') {
        startWidth = this.getCurrentLineWidth(points[i]) * points[i].pressure * 2;
        endWidth = this.getCurrentLineWidth(points[i]) * points[i+1].pressure * 2;
      } else {
        startWidth = endWidth = this.getCurrentLineWidth(points[i]);
      }
      let path = this._createPath(points[i].x, points[i].y, points[i+1].x, points[i+1].y, startWidth, endWidth);
      switch(penStyle) {
        case 'brush':
          context.filter = 'blur(' + penWidth + 'px)';
          break;
        default:
          context.filter = 'none'
          break;
      }
      context.fill(path);
    }
  }

  // Draw fixed width line, eg. highlighter
  _drawLine(context, points) {
    if (points.length < 2)
      return;

    let penColor = this.getCurrentLineColor(points[0]);
     let rgbColor = this._hexToRgbColor(penColor);

    if(points[0].type === 'pointerdown') {
      context.beginPath();
      context.lineCap  = 'round';
      context.lineJoin = 'round';
      context.fillStyle = 'none';
      context.strokeStyle = 'rgba(' + rgbColor.r + ',' + rgbColor.g + ',' + rgbColor.b + ',0.01)';
      context.filter = 'none';
    }

    context.lineWidth = this.getCurrentLineWidth(points[0]);
    context.moveTo(points[0].x, points[0].y);
    context.lineTo(points[1].x, points[1].y);

    let i;
    for (i = 1; i < points.length-2; i++) {
      const xc = (points[i].x + points[i+1].x) / 2;
      const yc = (points[i].y + points[i+1].y) / 2;
      context.quadraticCurveTo(points[i].x, points[i].y, Math.round(xc), Math.round(yc));
    }
    if (points.length > 2) {
      context.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
    }

    context.stroke();
  }

  _drawPoints(context, points) {
    for (let i = 0; i < points.length; i++) {
      context.beginPath();
      context.fillStyle = this.getCurrentLineColor(points[i]);
      if (points[i].coalesced) {
        context.arc(points[i].x, points[i].y, this.getCurrentLineWidth(points[i]) / 2, 0, Math.PI * 2, true);
        context.stroke();
      } else {
        context.arc(points[i].x, points[i].y, this.getCurrentLineWidth(points[i]), 0, Math.PI * 2, true);
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

  _strokePredictedEvents(context, points, style) {
    if (points.length > 0 && this._currentPath.points.length > 0) {
      let lastPoint = this._currentPath.points[this._currentPath.points.length-1];
      let startWidth, endWidth;
      // Varying brush size based on pressure, convert from pressure range of 0 to 1
      // to a scale factor of 0 to 2
      if (this._drawWithPressure) {
        startWidth = endWidth = this.getCurrentLineWidth(lastPoint) * lastPoint.pressure * 2;
      } else {
        startWidth = endWidth = this.getCurrentLineWidth(lastPoint);
      }

      let path = this._createPath(lastPoint.x, lastPoint.y, points[0].x, points[0].y, startWidth, endWidth);
      if (this._highlightPredictedEvents)
        context.fillStyle = 'red';
      else
        context.fillStyle = this.getCurrentLineColor(lastPoint);
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
        context.fillStyle = this.getCurrentLineColor(lastPoint);
      context.arc(points[i].x, points[i].y, 3, 0, Math.PI * 2, true);
      context.fill();
    }
  }
}
