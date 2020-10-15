function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { LitElement, html, css } from '../web_modules/lit-element.js';
import '../web_modules/@material/mwc-button.js';
import '../web_modules/@material/mwc-checkbox.js';
import '../web_modules/@material/mwc-formfield.js';
import '../web_modules/@material/mwc-icon-button.js';
import '../web_modules/@material/mwc-slider.js';
import '../web_modules/@material/mwc-snackbar.js';
import '../web_modules/@material/mwc-tab-bar.js';
export class ColorCell extends LitElement {
  static get properties() {
    return {
      selected: {
        type: Boolean,
        reflectToAttribute: true,
        attribute: true
      }
    };
  }

  set selected(selected) {
    let oldSelected = this._selected;
    this._selected = selected;
    this.requestUpdate('selected', oldSelected);
  }

  get selected() {
    return this._selected;
  }

  constructor() {
    super();
    this._selected = false;
  }

  render() {
    return html`
      <div class="${this.selected ? "selected" : ""}">
        <slot></slot>
      </div>`;
  }

}

_defineProperty(ColorCell, "styles", css`
    .selected {
      border: solid 2px #5e5e5e;
      box-sizing: border-box;
      width:100%;
      height:100%;
    }
  `);

customElements.define("color-cell", ColorCell);
export class Toolbar extends LitElement {
  static get properties() {
    return {
      tabSelected: {
        type: Number,
        reflectToAttribute: true,
        attribute: true
      },
      currentColor: {
        type: String,
        reflectToAttribute: true,
        attribute: true
      },
      lineWidth: {
        type: Number,
        reflectToAttribute: true,
        attribute: true
      },
      drawFromPreferredColor: {
        type: Boolean,
        reflectToAttribute: true,
        attribute: true
      },
      pressureEventsEnabled: {
        type: Boolean,
        reflectToAttribute: true,
        attribute: true
      },
      predictedEventsEnabled: {
        type: Boolean,
        reflectToAttribute: true,
        attribute: true
      },
      predictedEventsHighlightEnabled: {
        type: Boolean,
        reflectToAttribute: true,
        attribute: true
      },
      numOfPredictionPoints: {
        type: Number,
        reflectToAttribute: true,
        attribute: true
      },
      coalescedEventsEnabled: {
        type: Boolean,
        reflectToAttribute: true,
        attribute: true
      },
      drawPointsOnlyEnabled: {
        type: Boolean,
        reflectToAttribute: true,
        attribute: true
      }
    };
  }

  set tabSelected(index) {
    let oldIndex = this._tabBar.activeIndex;
    this._tabBar.activeIndex = index;
    let event = new CustomEvent('tab-changed', {
      detail: {
        tabSelected: index
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.requestUpdate('tabSelected', oldIndex);
  }

  get tabSelected() {
    return this._tabBar.activeIndex;
  }

  set currentColor(color) {
    let oldColor = this._currentColor;
    this._currentColor = color;
    let event = new CustomEvent('color-changed', {
      detail: {
        color: color
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.requestUpdate('currentColor', oldColor);
  }

  get currentColor() {
    return this._currentColor;
  }

  set lineWidth(width) {
    let oldWidth = this._lineWidth;
    this._lineWidth = width;
    let event = new CustomEvent('lineWidth-changed', {
      detail: {
        lineWidth: width
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.requestUpdate('lineWidth', oldWidth);
  }

  get lineWidth() {
    return this._lineWidth;
  }

  set drawWithPreferredColor(value) {
    let oldPref = this._drawWithPreferredColor;
    this._drawWithPreferredColor = value;
    let event = new CustomEvent('drawWithPreferredColor-changed', {
      detail: {
        drawWithPreferredColor: value
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.requestUpdate('drawWithPreferredColor', oldPref);
  }

  get drawWithPreferredColor() {
    return this._drawWithPreferredColor;
  }

  set pressureEventsEnabled(value) {
    let oldPref = this._pressureEventsEnabled;
    this._pressureEventsEnabled = value;
    let event = new CustomEvent('pressureEventsEnabled-changed', {
      detail: {
        pressureEventsEnabled: value
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.requestUpdate('pressureEventsEnabled', oldPref);
  }

  get pressureEventsEnabled() {
    return this._pressureEventsEnabled;
  }

  set predictedEventsEnabled(value) {
    let oldPref = this._predictedEventsEnabled;
    this._predictedEventsEnabled = value;
    let event = new CustomEvent('predictedEventsEnabled-changed', {
      detail: {
        predictedEventsEnabled: value
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.requestUpdate('predictedEventsEnabled', oldPref);
  }

  get predictedEventsEnabled() {
    return this._predictedEventsEnabled;
  }

  set predictedEventsHighlightEnabled(value) {
    let oldPref = this._predictedEventsHighlightEnabled;
    this._predictedEventsHighlightEnabled = value;
    let event = new CustomEvent('predictedEventsHighlightEnabled-changed', {
      detail: {
        predictedEventsHighlightEnabled: value
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.requestUpdate('predictedEventsHighlightEnabled', oldPref);
  }

  get predictedEventsHighlightEnabled() {
    return this._predictedEventsHighlightEnabled;
  }

  set numOfPredictionPoints(points) {
    let oldPoints = this._numOfPredictionPoints;
    this._numOfPredictionPoints = points;
    let event = new CustomEvent('numOfPredictionPoints-changed', {
      detail: {
        numOfPredictionPoints: points
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.requestUpdate('numOfPredictionPoints', oldPoints);
  }

  get numOfPredictionPoints() {
    return this._numOfPredictionPoints;
  }

  set coalescedEventsEnabled(value) {
    let oldPref = this._coalescedEventsEnabled;
    this._coalescedEventsEnabled = value;
    let event = new CustomEvent('coalescedEventsEnabled-changed', {
      detail: {
        coalescedEventsEnabled: value
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.requestUpdate('coalescedEventsEnabled', oldPref);
  }

  get coalescedEventsEnabled() {
    return this._coalescedEventsEnabled;
  }

  set drawPointsOnlyEnabled(value) {
    let oldPref = this._drawPointsOnlyEnabled;
    this._drawPointsOnlyEnabled = value;
    let event = new CustomEvent('drawPointsOnlyEnabled-changed', {
      detail: {
        drawPointsOnlyEnabled: value
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.requestUpdate('drawPointsOnlyEnabled', oldPref);
  }

  get drawPointsOnlyEnabled() {
    return this._drawPointsOnlyEnabled;
  }

  firstUpdated() {
    this._tabBar = this.shadowRoot.querySelector('#tabbar');
    this._canvasTab = this.shadowRoot.querySelector('#canvas-tab');
    this._pointerEventsTab = this.shadowRoot.querySelector('#pointer-events-tab');
    this._usiColorCell = this.shadowRoot.querySelector('#usi-read-color-cell');
    this._snackbar = this.shadowRoot.querySelector('#snackbar');
    this._usiReadButton = this.shadowRoot.querySelector('#usi-read-button');
    this._usiWriteButton = this.shadowRoot.querySelector('#usi-write-button');
    this._drawingPreferencesCheckbox = this.shadowRoot.querySelector('#drawing-preferences-checkbox');
    this._pressureEventsCheckbox = this.shadowRoot.querySelector('#pressure-events-checkbox');
    this._predictedEventsCheckbox = this.shadowRoot.querySelector('#predicted-events-checkbox');
    this._predictedEventsHighlightCheckbox = this.shadowRoot.querySelector('#predicted-events-highlight-checkbox');
    this._coalescedEventsCheckbox = this.shadowRoot.querySelector('#coalesced-events-checkbox');
    this._drawPointsOnlyCheckbox = this.shadowRoot.querySelector('#points-only-checkbox');
    this._lineWidthSlider = this.shadowRoot.querySelector('#line-width-slider');
    this._numOfPredictionPointsSlider = this.shadowRoot.querySelector('#prediction-points-slider');
    this._usiReadButton.onpointerdown = this._readPreferredColorFromStylus.bind(this);

    if (typeof window.navigator.usi === 'undefined') {
      this._usiReadButton.disabled = true;
      this._usiWriteButton.disabled = true;
      console.log('USI reard/write not supported');
    }

    if (!this._predictedEventsEnabled) this._numOfPredictionPointsSlider.disabled = true;
    this.pressureEventsEnabled = this._pressureEventsCheckbox.checked = true;
    this.coalescedEventsEnabled = this._coalescedEventsCheckbox.checked = true;

    this._canvasTabSelected();
  }

  _canvasTabSelected() {
    this._canvasTab.style.display = 'flex';
    this._canvasTab.style.visibilty = 'visible';
    this._pointerEventsTab.style.display = 'none';
    this._pointerEventsTab.style.visibilty = 'hidden';
    this.tabSelected = 0;
  }

  _pointerEventsTabSelected() {
    this._canvasTab.style.display = 'none';
    this._canvasTab.style.visibilty = 'hidden';
    this._pointerEventsTab.style.display = 'flex';
    this._pointerEventsTab.style.visibilty = 'visible';
    this.tabSelected = 1;
  }

  _colorSelected(color) {
    this.currentColor = color;
    this._usiColorCell.selected = false;
    this._usiColorCell.style.backgroundColor = 'white';
    this._drawingPreferencesCheckbox.checked = false;
  }

  _writePreferredColorToStylus(event) {
    navigator.usi.setPreferredColor(this._currentColor).then(_ => this._showSuccess());
  }

  _showSuccess() {
    this._snackbar.show();
  }

  _drawingPreferenceChanged() {
    this.drawWithPreferredColor = this._drawingPreferencesCheckbox.checked;
  }

  _pressureEventsChanged() {
    this.pressureEventsEnabled = this._pressureEventsCheckbox.checked;
  }

  _predictedEventsChanged() {
    this.predictedEventsEnabled = this._predictedEventsCheckbox.checked;
    this._predictedEventsHighlightCheckbox.disabled = !this._predictedEventsCheckbox.checked;
    if (!this._predictedEventsCheckbox.checked) this.predictedEventsHighlightEnabled = this._predictedEventsHighlightCheckbox.checked = false;
    this._numOfPredictionPointsSlider.disabled = !this._predictedEventsCheckbox.checked;
  }

  _predictedEventsHighlightChanged() {
    this.predictedEventsHighlightEnabled = this._predictedEventsHighlightCheckbox.checked;
  }

  _coalescedEventsChanged() {
    this.coalescedEventsEnabled = this._coalescedEventsCheckbox.checked;
  }

  _drawPointsOnlyChanged() {
    this.drawPointsOnlyEnabled = this._drawPointsOnlyCheckbox.checked;
  }

  _lineWidthChanged() {
    this.lineWidth = this._lineWidthSlider.value;
  }

  _numOfPredictionPointsChanged() {
    this.numOfPredictionPoints = this._numOfPredictionPointsSlider.value;
  }

  constructor() {
    super();

    _defineProperty(this, "_readPreferredColorFromStylus", async event => {
      if (!event.preferredColor) {
        console.error('Please click this button with your stylus.');
        return;
      }

      if (event.preferredColor) {
        this.currentColor = event.preferredColor;
        this._usiColorCell.selected = true;
        this._usiColorCell.style.backgroundColor = event.preferredColor;
      }
    });

    this._currentColor = "#000000";
    this._drawWithPreferredColor = false;
    this._pressureEventsEnabled = false;
    this._predictedEventsEnabled = false;
    this._predictedEventsHighlightEnabled = false;
    this._coalescedEventsEnabled = false;
    this._drawPointsOnlyEnabled = false;
    this._lineWidth = 8;
    this._numOfPredictionPoints = 2;
    this._colors = ["#FF0000", "#00FFFF", "#0000FF", "#0000A0", "#ADD8E6", "#800080", "#FFFF00", "#00FF00", "#FF00FF", "#FFFFFF", "#C0C0C0", "#808080", "#000000", "#FFA500", "#A52A2A", "#800000", "#008000", "#808000"];
  }

  render() {
    return html`
    <mwc-snackbar id="snackbar" labelText="Sucessfully wrote the new color on your USI device."></mwc-snackbar>
    <mwc-tab-bar id="tabbar" class="tab-bar">
      <mwc-tab label="Canvas" @pointerdown="${event => this._canvasTabSelected()}"></mwc-tab>
      <mwc-tab label="Pointer Events" @pointerdown="${event => this._pointerEventsTabSelected()}"></mwc-tab>
    </mwc-tab-bar>
    <div id="canvas-tab" class="content">
      <div class="color-grid">
      ${this._colors.map((i, x) => html`<color-cell class="color-cell" ?selected="${this.currentColor === i}"
        style="background-color:${i}" @pointerdown="${event => this._colorSelected(i)}"></color-cell>`)}
      </div>
      <div class="width-section">
        <div class="width-title">Line Width</div>
        <mwc-slider pin markers step="1" value="8" min="1" max="20" id="line-width-slider" @change="${this._lineWidthChanged}"></mwc-slider>
      </div>
      <div class="grow"></div>
      <div class="usi-section">
        <mwc-formfield spaceBetween="true" class="usi-text" label="Always use my preferred color when drawing" alignEnd="true">
          <mwc-checkbox id="drawing-preferences-checkbox" @change="${this._drawingPreferenceChanged}"></mwc-checkbox>
        </mwc-formfield>
        <div class="usi-text">Read my preferred color from my stylus*:</div>
        <div class="usi-read-write-section">
          <mwc-button slot="action" icon="colorize" raised id="usi-read-button"></mwc-button>
          <color-cell class="usi-color-cell" id="usi-read-color-cell"></color-cell>
        </div>
        <div class="usi-text">Write the selected color on my stylus as my preferred color*:</div>
        <div class="usi-read-write-section">
          <mwc-button slot="action" icon="vertical_align_bottom" raised id="usi-write-button"
            @pointerdown="${event => this._writePreferredColorToStylus(event)}"></mwc-button>
          <color-cell class="usi-color-cell" id="usi-write-color-cell" style="background-color:${this.currentColor}"></color-cell>
        </div>
        <div class="usi-minitext">*An Universal Stylus Initiative compatible hardware is required.</div>
      </div>
    </div>
    <div id="pointer-events-tab" class="content">
      <div class="canvas-section">
        <mwc-formfield spaceBetween="true" class="canvas-text" label="Enable Pen Pressure" alignEnd="true">
          <mwc-checkbox id="pressure-events-checkbox" @change="${this._pressureEventsChanged}"></mwc-checkbox>
        </mwc-formfield>
        <mwc-formfield spaceBetween="true" class="canvas-text" label="Enable Coalesced Events" alignEnd="true">
          <mwc-checkbox id="coalesced-events-checkbox" @change="${this._coalescedEventsChanged}"></mwc-checkbox>
        </mwc-formfield>
        <mwc-formfield spaceBetween="true" class="canvas-text" label="Enable Pointer Events Prediction" alignEnd="true">
          <mwc-checkbox id="predicted-events-checkbox" @change="${this._predictedEventsChanged}"></mwc-checkbox>
        </mwc-formfield>
        <mwc-formfield spaceBetween="true" class="canvas-text" label="Highlight Pointer Events Prediction" alignEnd="true">
          <mwc-checkbox id="predicted-events-highlight-checkbox" disabled @change="${this._predictedEventsHighlightChanged}"></mwc-checkbox>
        </mwc-formfield>
        <div class="prediction-title">Number of Prediction Points Drawn</div>
        <mwc-slider pin markers step="1" value="2" min="1" max="10" id="prediction-points-slider" @change="${this._numOfPredictionPointsChanged}"></mwc-slider>
      </div>
      <div class="grow"></div>
      <div class="debug-section">
        <mwc-formfield spaceBetween="true" class="canvas-text" label="Draw Points Only" alignEnd="true">
          <mwc-checkbox id="points-only-checkbox" @change="${this._drawPointsOnlyChanged}"></mwc-checkbox>
        </mwc-formfield>
      </div>
    </div>`;
  }

}

_defineProperty(Toolbar, "styles", css`
    :host {
      border: var(--border-grid);
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
      --border-grid: solid 1px #cccccc;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .tab-bar {
      width: 100%;
      height: 10%;
      display: flex;
    }

    .content {
      width: 100%;
      height: 87%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-direction: column;
      box-sizing: border-box;
      padding: 10px;
    }

    .color-grid {
      flex-grow: 2;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(10, 1fr);
      margin-top: 10px;
    }

    .color-cell {
      border: var(--border-grid);
    }

    .width-section {
      display: flex;
      flex-direction: column;
    }

    .width-title {
      text-align: center;
      width: 100%;
      font-size: 1.1em;
      font-weight: bold;
    }

    .canvas-section {
      display: flex;
      flex-direction: column;
    }

    .canvas-text {
      padding-bottom: 10px;
      padding-top: 10px;
    }

    .usi-section {
      display: flex;
      flex-direction: column;
    }

    .usi-text {
      padding-bottom: 10px;
      padding-top: 10px;
    }

    .prediction-title {
      text-align: center;
      width: 100%;
      font-size: 0.8em;
      font-weight: bold;
    }

    .debug-section {
      display: flex;
      flex-direction: column;
    }

    mwc-button {
      width: 100%;
    }

    .usi-minitext {
      padding-top: 10px;
      font-size: 0.7em;
    }

    .usi-read-write-section {
      display: flex;
      flex-direction: row;
    }

    .usi-color-cell {
      width: 40%;
      border: var(--border-grid);
      margin-left: 20px;
    }

    .grow {
      flex-grow: 2;
    }
  `);

customElements.define("tiny-toolbar", Toolbar);