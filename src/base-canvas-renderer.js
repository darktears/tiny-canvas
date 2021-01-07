export class BaseCanvasRenderer {

  set currentColor(currentColor) {
    this._currentColor = currentColor;
    this.updateProperty('currentColor', currentColor);
  }

  get currentColor() { return this._currentColor; }

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

  set drawWithPreferredColor(drawWithPreferredColor) {
    this._drawWithPreferredColor = drawWithPreferredColor;
    this.updateProperty('drawWithPreferredColor', drawWithPreferredColor);
  }

  get drawWithPreferredColor() { return this._drawWithPreferredColor; }

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

  set numOfPredictionPoints(numOfPredictionPoints) {
    this._numOfPredictionPoints = numOfPredictionPoints;
    this.updateProperty('numOfPredictionPoints', numOfPredictionPoints);
  }

  get numOfPredictionPoints() { return this._numOfPredictionPoints; }

  constructor(canvas, predictionCanvas) {
    this._canvas = canvas;
    this._predictionCanvas = predictionCanvas;
    this._points = [];
    this._predictedPoints = [];
    this._currentColor = '#000000';
    this._currentLineWidth = 1;
    this._drawCoalescedEvents = false;
    this._drawPointsOnly = false;
    this._drawPredictedEvents = false;
    this._drawWithPreferredColor = false;
    this._drawWithPressure = false;
    this._highlightPredictedEvents = false;
    this._numOfPredictionPoints = 1;
  }

  getCurrentColor(point) {
    if (point.preferredColor && this._drawWithPreferredColor)
      return point.preferredColor;
    else
      return this._currentColor;
  }

  updateProperty(name, value) {
    console.log('renderer property', name, 'set to', value);
  }

  resize(width, height) {
    console.error('base implementation not provided, must overwrite');
  }

  beginPath(point) {
    console.error('base implementation not provided, must overwrite');
  }

  addToPath(points, predictedPoints) {
    console.error('base implementation not provided, must overwrite');
  }

  endPath(point) {
    console.error('base implementation not provided, must overwrite');
  }

  clear() {
    console.error('base implementation not provided, must overwrite');
  }

  render() {
    console.error('base implementation not provided, must overwrite');
  }
}
