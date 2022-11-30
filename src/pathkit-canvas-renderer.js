import { BaseCanvasRenderer } from './base-canvas-renderer.js';
import PathKitInit from 'pathkit-wasm/bin/pathkit';

let PathKit = null;

export class PathKitCanvasRenderer extends BaseCanvasRenderer {

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

    PathKitInit({
      locateFile: (file) => './wasm/' + file,
    }).then((pathkit) => {
      PathKit = pathkit;
      console.log('Canvas2D with PathKit loaded, desynchronized:', desynchronized);
    });
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
          } else if (this.getCurrentLineStyle(this._currentPath.points[0]) !== 'BRUSH' &&
                     this.getCurrentLineStyle(this._currentPath.points[0]) !== 'HIGHLIGHTER') {
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

  _drawStroke(context, points) {
    let penColor = this.getCurrentLineColor(points[0]);
    let rgbColor = this._hexToRgbColor(penColor);
    let penStyle = this.getCurrentLineStyle(points[0]);
    let penWidth = this.getCurrentLineWidth(points[0]);
    let i;

    if(points[0].type === 'pointerdown') {
      context.lineCap = this._predictionContext.lineCap = 'round';
      context.lineJoin = this._predictionContext.lineJoin = 'round';
    }

    switch(penStyle) {
      case 'BRUSH':
        context.filter = 'blur(' + penWidth + 'px)';
        context.strokeStyle = penColor;
        break;
      case 'HIGHLIGHTER':
        context.filter = 'none';
        context.strokeStyle = 'rgba(' + rgbColor.r + ',' + rgbColor.g + ',' + rgbColor.b + ',0.01)';;
        break;
      default:
        context.filter = 'none';
        context.strokeStyle = penColor;
        break;
    }

    for (i = 0; i < points.length-1; i++) {
      let path = this._createPath(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
      // NOTE: there's a bug in the arc() function using PathKit in wasm
      // so until that's fixed, we can only create a fixed width path rather
      // that a variable path, it will be slightly less ideal
      if (this._drawWithPressure)
        context.lineWidth = this.getCurrentLineWidth(points[i]) * points[i].pressure * 2;
      else
        context.lineWidth = this.getCurrentLineWidth(points[i]);
       context.stroke(path.toPath2D());
      path.delete(); // clean up wasm memory
    }
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

  _createPath(x1, y1, x2, y2) {
    // FIXME: there's a bug in the arc() function using PathKit in wasm
    // so until that's fixed, we can only create a fixed width path rather
    // that a variable path, it will be slightly less ideal
    const path = PathKit.NewPath();
    path.moveTo(x1, y1);
    path.lineTo(x2, y2);
    return path;
  }

  _strokePredictedEvents(context, points) {
    if (points.length > 0 && this._currentPath.points.length > 0) {
      let lastPoint = this._currentPath.points[this._currentPath.points.length-1];
      if (this._drawWithPressure)
        context.lineWidth = this.getCurrentLineWidth(lastPoint) * lastPoint.pressure * 2;
      else
        context.lineWidth = this.getCurrentLineWidth(lastPoint);
      context.lineCap = 'round';
      if (this._highlightPredictedEvents)
        context.strokeStyle = 'red';
      else
        context.strokeStyle = this.getCurrentLineColor(lastPoint);

      let path = this._createPath(lastPoint.x, lastPoint.y, this._currentPath.predictedPoints[0].x, this._currentPath.predictedPoints[0].y);
      context.stroke(path.toPath2D());
      path.delete(); // clean up wasm memory

      let i;
      for (i = 0; i < this._currentPath.predictedPoints.length-1; i++) {
        path = this._createPath(this._currentPath.predictedPoints[i].x, this._currentPath.predictedPoints[i].y, this._currentPath.predictedPoints[i+1].x, this._currentPath.predictedPoints[i+1].y);
        context.stroke(path.toPath2D());
        path.delete(); // clean up wasm memory
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
