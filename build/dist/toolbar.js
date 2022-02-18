function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { LitElement, html, css } from '../web_modules/lit-element.js';
import '../web_modules/@material/mwc-button.js';
import '../web_modules/@material/mwc-checkbox.js';
import '../web_modules/@material/mwc-formfield.js';
import '../web_modules/@material/mwc-icon-button.js';
import '../web_modules/@material/mwc-list/mwc-list-item.js';
import '../web_modules/@material/mwc-linear-progress.js';
import '../web_modules/@material/mwc-radio.js';
import '../web_modules/@material/mwc-select.js';
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

customElements.define('color-cell', ColorCell);
export class Toolbar extends LitElement {
  static get properties() {
    return {
      tabSelected: {
        type: Number,
        reflectToAttribute: true,
        attribute: true
      },
      renderingType: {
        type: String,
        reflectToAttribute: true,
        attribute: true
      },
      desynchronizedEnabled: {
        type: Boolean,
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
      pointerRawUpdateEnabled: {
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
      predictedType: {
        type: String,
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

  set renderingType(renderingType) {
    let oldRenderingType = this._renderingType;
    this._renderingType = renderingType;
    let event = new CustomEvent('renderingType-changed', {
      detail: {
        renderingType: renderingType
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.requestUpdate('renderingType', oldRenderingType);
  }

  get renderingType() {
    return this._renderingType;
  }

  set desynchronizedEnabled(desynchronizedEnabled) {
    let oldDesynchronizedEnabled = this._desynchronizedEnabled;
    this._desynchronizedEnabled = desynchronizedEnabled;
    let event = new CustomEvent('desynchronizedEnabled-changed', {
      detail: {
        desynchronizedEnabled: desynchronizedEnabled
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.requestUpdate('desynchronizedEnabled', oldDesynchronizedEnabled);
  }

  get desynchronizedEnabled() {
    return this._desynchronizedEnabled;
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

  set pointerRawUpdateEnabled(value) {
    let oldPref = this._pointerRawUpdateEnabled;
    this._pointerRawUpdateEnabled = value;
    let event = new CustomEvent('pointerRawUpdateEnabled-changed', {
      detail: {
        pointerRawUpdateEnabled: value
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.requestUpdate('pointerRawUpdateEnabled', oldPref);
  }

  get pointerRawUpdateEnabled() {
    return this._pointerRawUpdateEnabled;
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

  set predictionType(predictionType) {
    let oldPredictionType = this._predictionType;
    this._predictionType = predictionType;
    let event = new CustomEvent('predictionType-changed', {
      detail: {
        predictionType: predictionType
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.requestUpdate('predictionType', oldPredictionType);
  }

  get predictionType() {
    return this._predictionType;
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
    this._desynchronizedCheckbox = this.shadowRoot.querySelector('#desynchronized-checkbox');
    this._usiColorCell = this.shadowRoot.querySelector('#usi-read-color-cell');
    this._snackbar = this.shadowRoot.querySelector('#snackbar');
    this._usiReadDone = this.shadowRoot.querySelector('#usi-read-done');
    this._usiReadError = this.shadowRoot.querySelector('#usi-read-error');
    this._usiWriteDone = this.shadowRoot.querySelector('#usi-write-done');
    this._usiWriteError = this.shadowRoot.querySelector('#usi-write-error');
    this._usiPermissionGroup = this.shadowRoot.querySelector('#usi-permission-group');
    this._usiPermissionButton = this.shadowRoot.querySelector('#usi-permission-button');
    this._usiGroup = this.shadowRoot.querySelector('#usi-group');
    this._usiReadButton = this.shadowRoot.querySelector('#usi-read-button');
    this._usiWriteButton = this.shadowRoot.querySelector('#usi-write-button');
    this._usiDeviceInfo = this.shadowRoot.querySelector('#usi-device-info');
    this._usiInfoButton = this.shadowRoot.querySelector('#usi-info-button');
    this._usiInfoProgress = this.shadowRoot.querySelector('#usi-info-progress');
    this._drawingPreferencesCheckbox = this.shadowRoot.querySelector('#drawing-preferences-checkbox');
    this._renderingTypeSelect = this.shadowRoot.querySelector('#rendering-type-select');
    this._pointerRawUpdateCheckbox = this.shadowRoot.querySelector('#pointer-raw-update-checkbox');
    this._pressureEventsCheckbox = this.shadowRoot.querySelector('#pressure-events-checkbox');
    this._predictedEventsCheckbox = this.shadowRoot.querySelector('#predicted-events-checkbox');
    this._predictedEventsHighlightCheckbox = this.shadowRoot.querySelector('#predicted-events-highlight-checkbox');
    this._predictionTypeSelect = this.shadowRoot.querySelector('#prediction-type-select');
    this._coalescedEventsCheckbox = this.shadowRoot.querySelector('#coalesced-events-checkbox');
    this._drawPointsOnlyCheckbox = this.shadowRoot.querySelector('#points-only-checkbox');
    this._lineWidthSlider = this.shadowRoot.querySelector('#line-width-slider');
    this._numOfPredictionPointsSlider = this.shadowRoot.querySelector('#prediction-points-slider');
    this._usiReadButton.onpointerdown = this._readPreferredColorFromStylus.bind(this);
    this._usiWriteButton.onpointerdown = this._writePreferredColorToStylus.bind(this);
    this._usiInfoButton.onpointerdown = this._showUSIInfoPressed.bind(this);
    this._usiInfoButton.onpointerup = this._usiInfoButton.onpointerleave = this._showUSIInfoReleased.bind(this);

    if (this._isUSISupported()) {
      this._usiPermissionGroup.style.display = 'none';
      this._usiInfoButton.style.display = 'none';
      this._usiInfoProgress.style.display = 'none';
      console.log('navigator.usi available - USI read/write supported');
    } else if (this._isHIDSupported()) {
      this._usiGroup.style.display = 'none';
      console.log('navigator.hid available - USI read/write supported');
    } else {
      this._usiPermissionButton.disabled = true;
      this._usiGroup.style.display = 'none';
      console.log('USI reard/write not supported');
    }

    this.desynchronizedEnabled = this._desynchronizedCheckbox.checked = true;
    this.predictedEventsEnabled = this._predictedEventsCheckbox.checked = true;
    this.predictedEventsHighlightEnabled = this._predictedEventsHighlightCheckbox.checked = true;
    this.pressureEventsEnabled = this._pressureEventsCheckbox.checked = true;
    this.coalescedEventsEnabled = this._coalescedEventsCheckbox.checked = true;
    if (!this._isPointerRawUpdateSupported()) this._pointerRawUpdateCheckbox.disabled = true;

    this._usiInfoProgress.close();

    this._hideReadStatus();

    this._hideWriteStatus();

    this._canvasTabSelected();

    this._triggerPropertyUpdate(); // prevent context menu from showing when long pressing on a button


    window.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    }, false);
  }

  _isUSISupported() {
    return typeof window.navigator.usi !== 'undefined';
  }

  _isHIDSupported() {
    return typeof window.navigator.hid !== 'undefined';
  }

  _isPointerRawUpdateSupported() {
    return typeof this.onpointerrawupdate !== 'undefined';
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

  _renderingTypeChanged() {
    this.renderingType = this._renderingTypeSelect.selected.value;

    this._triggerPropertyUpdate();
  }

  _triggerPropertyUpdate() {
    // update all properties that changed for the new canvas
    this.desynchronizedEnabled = this.desynchronizedEnabled;
    this.currentColor = this.currentColor;
    this.lineWidth = this.lineWidth;
    this.drawFromPreferredColor = this.drawFromPreferredColor;
    this.pointerRawUpdateEnabled = this.pointerRawUpdateEnabled;
    this.pressureEventsEnabled = this.pressureEventsEnabled;
    this.predictedEventsEnabled = this.predictedEventsEnabled;
    this.predictedEventsHighlightEnabled = this.predictedEventsHighlightEnabled;
    this.predictionType = this.predictionType;
    this.numOfPredictionPoints = this.numOfPredictionPoints;
    this.coalescedEventsEnabled = this.coalescedEventsEnabled;
    this.drawPointsOnlyEnabled = this.drawPointsOnlyEnabled;
  }

  _desynchronizedChanged() {
    this.desynchronizedEnabled = this._desynchronizedCheckbox.checked;
  }

  _colorSelected(color) {
    this.currentColor = color;
    this._usiColorCell.selected = false;
    this._usiColorCell.style.backgroundColor = 'white';
    this._drawingPreferencesCheckbox.checked = false;
  }

  _showReadStatus(success) {
    if (success) {
      this._usiReadDone.style.display = 'flex';
      this._usiReadError.style.display = 'none';
    } else {
      this._usiReadError.style.display = 'flex';
      this._usiReadDone.style.display = 'none';
    }
  }

  _showWriteStatus(success) {
    if (success) {
      this._usiWriteDone.style.display = 'flex';
      this._usiWriteError.style.display = 'none';
    } else {
      this._usiWriteError.style.display = 'flex';
      this._usiWriteDone.style.display = 'none';
    }
  }

  _hideReadStatus() {
    this._usiReadDone.style.display = 'none';
    this._usiReadError.style.display = 'none';
  }

  _hideWriteStatus() {
    this._usiWriteDone.style.display = 'none';
    this._usiWriteError.style.display = 'none';
  }

  _showUSIInfoReleased(event) {
    this._usiInfoProgress.close();

    this._usiCancelReadWrite();
  }

  _usiCancelReadWrite() {
    this._canceled = true;
  }

  _showPopup(msg) {
    this._snackbar.labelText = msg;

    this._snackbar.show();
  }

  _drawingPreferenceChanged() {
    this.drawWithPreferredColor = this._drawingPreferencesCheckbox.checked;
  }

  _pointerRawUpdateChanged() {
    this.pointerRawUpdateEnabled = this._pointerRawUpdateCheckbox.checked;

    if (this._predictedEventsCheckbox.checked) {
      // enabling pointerrawupdate will not work with predictedEvents
      this.predictedEventsEnabled = this._predictedEventsCheckbox.checked = false;
      this.predictedEventsHighlightEnabled = this._predictedEventsHighlightCheckbox.checked = false;
      this._predictionTypeSelect.disabled = this._numOfPredictionPointsSlider.disabled = !this._predictedEventsCheckbox.checked;
    }
  }

  _pressureEventsChanged() {
    this.pressureEventsEnabled = this._pressureEventsCheckbox.checked;
  }

  _predictedEventsChanged() {
    this.predictedEventsEnabled = this._predictedEventsCheckbox.checked;
    this._predictedEventsHighlightCheckbox.disabled = !this._predictedEventsCheckbox.checked;

    if (this._predictedEventsCheckbox.checked) {
      // enabling predictedEvents will not work with pointerrawupdate
      this.pointerRawUpdateEnabled = this._pointerRawUpdateCheckbox.checked = false;
    } else {
      this.predictedEventsHighlightEnabled = this._predictedEventsHighlightCheckbox.checked = false;
    }

    this._predictionTypeSelect.disabled = this._numOfPredictionPointsSlider.disabled = !this._predictedEventsCheckbox.checked;
  }

  _predictedEventsHighlightChanged() {
    this.predictedEventsHighlightEnabled = this._predictedEventsHighlightCheckbox.checked;
  }

  _predictionTypeChanged() {
    this.predictionType = this._predictionTypeSelect.selected.value;
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

    _defineProperty(this, "_initHID", async () => {
      try {
        let usi = new HIDUSI();
        await usi.open();
        if (!usi.opened) return;
        this._usihid = usi;
        this._usiDeviceInfo.textContent = 'USI Product Name: ' + this._usihid.productName;
        this._usiPermissionGroup.style.display = 'none';
        this._usiGroup.style.display = 'flex';
        this._usiReadButton.disabled = false;
        this._usiWriteButton.disabled = false;
      } catch (e) {
        this._showPopup(e);
      }
    });

    _defineProperty(this, "_readPreferredColorFromStylus", async event => {
      this._hideReadStatus();

      if (this._isUSISupported()) {
        if (!event.preferredColor) {
          this._usiColorCell.selected = false;
          this._usiColorCell.style.backgroundColor = 'white';

          this._showReadStatus(false);

          console.log('please click this button with your stylus.');
          return;
        }

        this.currentColor = event.preferredColor;
        this._usiColorCell.selected = true;
        this._usiColorCell.style.backgroundColor = event.preferredColor;

        this._showReadStatus(true);
      } else if (this._isHIDSupported()) {
        try {
          let preferredColor = await this._usihid.getPreferredColor();
          this._usiColorCell.selected = true;
          this.currentColor = this._usiColorCell.style.backgroundColor = preferredColor;

          this._showReadStatus(true);
        } catch (e) {
          this._showReadStatus(false);

          console.log(e);
        }
      }
    });

    _defineProperty(this, "_writePreferredColorToStylus", async event => {
      this._hideWriteStatus();

      if (this._isUSISupported()) {
        try {
          await navigator.usi.setPreferredColor(this._currentColor);

          this._showWriteStatus(true);
        } catch (e) {
          this._showWriteStatus(false);

          console.log('please click this button with your stylus.');
        }
      } else if (this._isHIDSupported()) {
        try {
          await this._usihid.setPreferredColor(this._currentColor);

          this._showWriteStatus(true);
        } catch (e) {
          this._showWriteStatus(false);

          console.log(e);
        }
      }
    });

    _defineProperty(this, "_showUSIInfoPressed", async event => {
      if (this._isHIDSupported()) {
        this._usiInfoProgress.open();

        this._usiInfoProgress.progress = this._usiInfoProgress.buffer = 0;

        try {
          let firmware = await this._usiPendingReadWrite(this._usihid.getFirmware);

          if (!firmware) {
            this._usiInfoProgress.close();

            return;
          }

          this._usiInfoProgress.progress = this._usiInfoProgress.buffer = .2;
          let protocol = await this._usiPendingReadWrite(this._usihid.getProtocol);

          if (!protocol) {
            this._usiInfoProgress.close();

            return;
          }

          this._usiInfoProgress.progress = this._usiInfoProgress.buffer = .4;
          let color = await this._usiPendingReadWrite(this._usihid.getPreferredColor);

          if (!color) {
            this._usiInfoProgress.close();

            return;
          }

          this._usiInfoProgress.progress = this._usiInfoProgress.buffer = .6;
          let width = await this._usiPendingReadWrite(this._usihid.getWidth);

          if (!width) {
            this._usiInfoProgress.close();

            return;
          }

          this._usiInfoProgress.progress = this._usiInfoProgress.buffer = 8;
          let style = await this._usiPendingReadWrite(this._usihid.getStyle);

          if (!style) {
            this._usiInfoProgress.close();

            return;
          }

          this._usiInfoProgress.progress = this._usiInfoProgress.buffer = 1;
          this.dispatchEvent(new CustomEvent('usiInfoDialog-pressed', {
            detail: {
              usiInfo: {
                firmware: firmware,
                protocol: protocol,
                preferredColor: color,
                preferredWidth: width,
                style: style
              }
            }
          }));
        } catch (e) {
          if (this._canceled) {
            this._usiInfoProgress.close();
          }
        }
      }
    });

    _defineProperty(this, "_usiPendingReadWrite", async fn => {
      const NUM_OF_RETRY = 10;
      this._canceled = false;
      let data = null;

      for (let i = 0; i < NUM_OF_RETRY; ++i) {
        try {
          data = await fn();
          break;
        } catch (err) {}

        if (this._canceled) {
          return null;
        }
      }

      return data;
    });

    this._currentColor = '#000000';
    this._desynchronizedEnabled = false;
    this._drawWithPreferredColor = false;
    this._pointerRawUpdateEnabled = false;
    this._pressureEventsEnabled = false;
    this._predictedEventsEnabled = false;
    this._predictedEventsHighlightEnabled = false;
    this._predictionType = "custom";
    this._coalescedEventsEnabled = false;
    this._drawPointsOnlyEnabled = false;
    this._lineWidth = 1;
    this._numOfPredictionPoints = 1;
    this._colors = ['#FF0000', '#00FFFF', '#0000FF', '#000080', '#ADD8E6', '#800080', '#FFFF00', '#00FF00', '#FF00FF', '#FFFFFF', '#C0C0C0', '#808080', '#000000', '#FFA500', '#A52A2A', '#800000', '#008000', '#808000']; // hid

    this._usihid = null;
  }

  render() {
    return html`
    <mwc-snackbar id="snackbar"></mwc-snackbar>
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
        <mwc-slider discrete withTickMarks step="1" value="1" min="1" max="20" id="line-width-slider" @change="${this._lineWidthChanged}"></mwc-slider>
      </div>
      <div class="grow"></div>
      <div class="usi-permission-section" id="usi-permission-group">
        <mwc-button slot="action" icon="sync" label="USI Read/Write" raised id="usi-permission-button"
          @pointerdown="${event => this._initHID(event)}"></mwc-button>
      </div>
      <div class="usi-section" id="usi-group">
        <mwc-formfield spaceBetween="true" class="usi-text" label="Always use my preferred color when drawing" alignEnd="true">
          <mwc-checkbox id="drawing-preferences-checkbox" reducedTouchTarget="true" @change="${this._drawingPreferenceChanged}"></mwc-checkbox>
        </mwc-formfield>
        <div class="usi-text">Read my preferred color from my stylus*:</div>
        <div class="usi-read-write-section">
          <mwc-button slot="action" icon="colorize" raised id="usi-read-button"></mwc-button>
          <color-cell class="usi-color-cell" id="usi-read-color-cell"></color-cell>
          <mwc-icon id="usi-read-done" class="done">done</mwc-icon>
          <mwc-icon id="usi-read-error" class="error">error</mwc-icon>
        </div>
        <div class="usi-text">Write the selected color to my stylus*:</div>
        <div class="usi-read-write-section">
          <mwc-button slot="action" icon="vertical_align_bottom" raised id="usi-write-button"></mwc-button>
          <color-cell class="usi-color-cell" id="usi-write-color-cell" style="background-color:${this.currentColor}"></color-cell>
          <mwc-icon id="usi-write-done" class="done">done</mwc-icon>
          <mwc-icon id="usi-write-error" class="error">error</mwc-icon>
        </div>
        <div class="usi-text" id="usi-device-info">*An Universal Stylus Initiative compatible hardware is required.</div>
        <mwc-button slot="action" label="Hold with Stylus" icon="info" raised id="usi-info-button"></mwc-button>
        <mwc-linear-progress id="usi-info-progress" progress="0"></mwc-linear-progress>
      </div>
    </div>
    <div id="pointer-events-tab" class="content">
      <div class="canvas-section">
        <mwc-select id="rendering-type-select" label="Type" @change="${this._renderingTypeChanged}">
          <mwc-list-item value="js-canvas" selected>Canvas 2D</mwc-list-item>
          <mwc-list-item value="pathkit-canvas">Canvas2D + Pathkit</mwc-list-item>
        </mwc-select>
        <mwc-formfield spaceBetween="true" class="canvas-text" label="Desynchronized Canvas" alignEnd="true">
          <mwc-checkbox id="desynchronized-checkbox" reducedTouchTarget="true" @change="${this._desynchronizedChanged}"></mwc-checkbox>
        </mwc-formfield>
      </div>
      <div class="pointer-events-section">
        <mwc-formfield spaceBetween="true" class="pointer-events-text" label="Enable Pointer Raw Update" alignEnd="true">
          <mwc-checkbox id="pointer-raw-update-checkbox" reducedTouchTarget="true" @change="${this._pointerRawUpdateChanged}"></mwc-checkbox>
        </mwc-formfield>
        <mwc-formfield spaceBetween="true" class="pointer-events-text" label="Enable Pen Pressure" alignEnd="true">
          <mwc-checkbox id="pressure-events-checkbox" reducedTouchTarget="true" @change="${this._pressureEventsChanged}"></mwc-checkbox>
        </mwc-formfield>
        <mwc-formfield spaceBetween="true" class="pointer-events-text" label="Enable Coalesced Events" alignEnd="true">
          <mwc-checkbox id="coalesced-events-checkbox" reducedTouchTarget="true" @change="${this._coalescedEventsChanged}"></mwc-checkbox>
        </mwc-formfield>
        <mwc-formfield spaceBetween="true" class="pointer-events-text" label="Enable Pointer Events Prediction" alignEnd="true">
          <mwc-checkbox id="predicted-events-checkbox" reducedTouchTarget="true" @change="${this._predictedEventsChanged}"></mwc-checkbox>
        </mwc-formfield>
        <mwc-formfield spaceBetween="true" class="pointer-events-text" label="Highlight Pointer Events Prediction" alignEnd="true">
          <mwc-checkbox id="predicted-events-highlight-checkbox" reducedTouchTarget="true" @change="${this._predictedEventsHighlightChanged}"></mwc-checkbox>
        </mwc-formfield>
        <mwc-select id="prediction-type-select" label="Type" @change="${this._predictionTypeChanged}">
          <mwc-list-item value="custom" selected>Custom Prediction (KalmanFilter)</mwc-list-item>
          <mwc-list-item value="chrome">Chrome Prediction</mwc-list-item>
        </mwc-select>
        <div class="prediction-title">Number of Prediction Points Drawn</div>
        <mwc-slider discrete withTickMarks step="1" value="1" min="1" max="10" id="prediction-points-slider" @change="${this._numOfPredictionPointsChanged}"></mwc-slider>
      </div>
      <div class="grow"></div>
      <div class="debug-section">
        <mwc-formfield spaceBetween="true" class="pointer-events-text" label="Draw Points Only" alignEnd="true">
          <mwc-checkbox id="points-only-checkbox" reducedTouchTarget="true" @change="${this._drawPointsOnlyChanged}"></mwc-checkbox>
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
      grid-template-rows: repeat(5, 1fr);
      margin-top: 10px;
    }

    .color-cell {
      border: var(--border-grid);
      min-height: 20px;
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

    .usi-permission-section {
      display: flex;
      flex-direction: column;
    }

    .usi-section {
      display: flex;
      flex-direction: column;
    }

    .usi-text {
      padding-bottom: 10px;
      padding-top: 10px;
    }

    .pointer-events-section {
      display: flex;
      flex-direction: column;
    }

    .pointer-events-text {
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
      width: auto;
    }

    .usi-minitext {
      padding-top: 10px;
      font-size: 0.7em;
    }

    .usi-read-write-section {
      display: flex;
      flex-direction: row;
    }

    .usi-read-write-section > mwc-button {
      width: 50%;
    }

    .usi-read-write-section > mwc-icon {
      padding-left: 20px;
    }

    .done {
      color: #008000;
    }

    .error {
      color: #ff0000;
    }

    mwc-linear-progress {
      padding-top: 20px;
    }

    .usi-color-cell {
      width: 30%;
      border: var(--border-grid);
      margin-left: 20px;
    }

    .grow {
      flex-grow: 2;
    }
  `);

customElements.define('tiny-toolbar', Toolbar);