export class BaseCanvasRenderer {

  set paths(paths) {
    this._paths = paths;
    this.updateProperty('paths', paths);
  }

  get paths() { return this._paths; }

  set currentLineColor(currentLineColor) {
    this._currentLineColor = currentLineColor;
    this.updateProperty('currentLineColor', currentLineColor);
  }

  get currentLineColor() { return this._currentLineColor; }

  set currentLineStyle(currentLineStyle) {
    this._currentLineStyle = currentLineStyle;
    this.updateProperty('currentLineStyle', currentLineStyle);
  }

  get currentLineStyle() { return this._currentLineStyle; }

  set currentLineWidth(currentLineWidth) {
    this._currentLineWidth = currentLineWidth;
    this.updateProperty('currentLineWidth', currentLineWidth);
  }

  get currentLineWidth() { return this._currentLineWidth; }

  set drawCoalescedEvents(drawCoalescedEvents) {
    this._drawCoalescedEvents = drawCoalescedEvents;
    this.updateProperty('drawCoalescedEvents', drawCoalescedEvents);
  }

  get drawCoalescedEvents() { return this._drawCoalescedEvents; }

  set drawPointsOnly(drawPointsOnly) {
    this._drawPointsOnly = drawPointsOnly;
    this.updateProperty('drawPointsOnly', drawPointsOnly);
  }

  get drawPointsOnly() { return this._drawPointsOnly; }

  set drawPredictedEvents(drawPredictedEvents) {
    this._drawPredictedEvents = drawPredictedEvents;
    this.updateProperty('drawPredictedEvents', drawPredictedEvents);
  }

  get drawPredictedEvents() { return this._drawPredictedEvents; }

  set drawWithCustomizations(drawWithCustomizations) {
    this._drawWithCustomizations = drawWithCustomizations;
    this.updateProperty('drawWithCustomizations', drawWithCustomizations);
  }

  get drawWithCustomizations() { return this._drawWithCustomizations; }

  set drawWithPressure(drawWithPressure) {
    this._drawWithPressure = drawWithPressure;
    this.updateProperty('drawWithPressure', drawWithPressure);
  }

  get drawWithPressure() { return this._drawWithPressure; }

  set highlightPredictedEvents(highlightPredictedEvents) {
    this._highlightPredictedEvents = highlightPredictedEvents;
    this.updateProperty('highlightPredictedEvents', highlightPredictedEvents);
  }

  get highlightPredictedEvents() { return this._highlightPredictedEvents; }

  set predictionType(predictionType) {
    this._predictionType = predictionType;
    this.updateProperty('predictionType', predictionType);
  }

  get predictionType() { return this._predictionType; }

  set numOfPredictionPoints(numOfPredictionPoints) {
    this._numOfPredictionPoints = numOfPredictionPoints;
    this.updateProperty('numOfPredictionPoints', numOfPredictionPoints);
  }

  get numOfPredictionPoints() { return this._numOfPredictionPoints; }

  constructor(canvas, predictionCanvas) {
    this._canvas = canvas;
    this._predictionCanvas = predictionCanvas;
    this._paths = [];
    this._currentPath = null;
    this._currentLineColor = '#000000';
    this._currentLineStyle = 'INK';
    this._currentLineWidth = 1;
    this._drawCoalescedEvents = false;
    this._drawPointsOnly = false;
    this._drawPredictedEvents = false;
    this._drawWithCustomizations = false;
    this._drawWithPressure = false;
    this._highlightPredictedEvents = false;
    this._predictionType = 'custom';
    this._numOfPredictionPoints = 1;
  }

  getCurrentLineColor(point) {
    // Fixme: use new PenCustomizations API
    if (point.preferredColor && this._drawWithCustomizations)
      return point.preferredColor;
     else
      return point.lineColor;
  }

  getCurrentLineStyle(point) {
    // Fixme: use new PenCustomizations API
    if (point.preferredStyle && this._drawWithCustomizations)
      return point.preferredStyle;
    else
      return point.lineStyle;
  }

  getCurrentLineWidth(point) {
    // Fixme: use new PenCustomizations API
    if (point.preferredWidth && this._drawWithCustomizations)
      return point.preferredWidth;
    else
      return point.lineWidth;
  }

  updateProperty(name, value) {
    console.log('renderer property', name, 'set to', value);
  }

  resize(width, height) {
    this._canvas.width  = this._predictionCanvas.width = width;
    this._canvas.height =  this._predictionCanvas.height = height;
  }

  undoPath() {
    this.clearCanvas();
    this.clearPredictionCanvas();

    let done = false;
    for (let i=this._paths.length-1; i >= 0; i--) {
      this._paths[i].rendered = false;
      if (!done && this._paths[i].display) {
        this._paths[i].display = false;
        done = true;
      }
    }
  }

  redoPath() {
    this.clearCanvas();
    this.clearPredictionCanvas();

    let done = false;
    for (let i=0; i < this._paths.length; i++) {
      this._paths[i].rendered = false;
      if (!done && !this._paths[i].display) {
        this._paths[i].display = true;
        done = true;
      }
    }
  }

  beginPath(point) {
    if (!this._currentPath)
      this._currentPath = new Path();
    this._currentPath.points.push(point);

    let fromIndex = -1;
    for (let i=this._paths.length-1; i >= 0; i--) {
      if (!this._paths[i].display) {
        fromIndex = i;
      }
    }

    if (fromIndex >= 0)
      this._paths.splice(fromIndex, this._paths.length);
  }

  addToPath(points, predictedPoints) {
    if (!points || !this._currentPath)
      return;

    this._currentPath.points.push(...points);
    this._currentPath.predictedPoints = predictedPoints;
  }

  endPath(point) {
    if (this._drawPredictedEvents)
      this.clearPredictionCanvas();

    this._currentPath.predictedPoints = [];
    this._currentPath.display = true;
    this._currentPath.rendered = true;
    this._paths.push(this._currentPath);
    this._currentPath = null;
  }

  deleteAllPaths() {
    this.clearCanvas();
    this.clearPredictionCanvas();
    this._paths = [];
    this._currentPath = null;
    this._points = [];
    this._predictedPoints = [];
  }

  clearCanvas() {
    console.error('base implementation not provided, must overwrite');
  }

  clearPredictionCanvas() {
    console.error('base implementation not provided, must overwrite');
  }

  render() {
    console.error('base implementation not provided, must overwrite');
  }
}

class Path {

  set points(points) {
    this._points = points;
  }

  get points() { return this._points; }

  set predictedPoints(predictedPoints) {
    this._predictedPoints = predictedPoints;
  }

  get predictedPoints() { return this._predictedPoints; }

  set display(display) {
    this._display = display;
  }

  get display() { return this._display; }

  set rendered(rendered) {
    this._rendered = rendered;
  }

  get rendered() { return this._rendered; }

  constructor() {
    this._points = [];
    this._predictedPoints = [];
    this._display = false;
    this._rendered = false;
  }
}
