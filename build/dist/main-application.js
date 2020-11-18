function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { LitElement, html, css } from '../web_modules/lit-element.js';
import { Workbox, messageSW } from '../web_modules/workbox-window.js';
import '../web_modules/@material/mwc-drawer.js';
import '../web_modules/@material/mwc-icon-button.js';
import '../web_modules/@material/mwc-snackbar.js';
import '../web_modules/@material/mwc-top-app-bar.js';
import './info-panel.js';
import './js-canvas.js';
import './toolbar.js';
export class MainApplication extends LitElement {
  // for overlay drag
  firstUpdated() {
    this._drawer = this.shadowRoot.querySelector('#drawer');

    if (this._drawer) {
      const container = this._drawer.parentNode;
      container.addEventListener('MDCTopAppBar:nav', () => {
        this._drawer.open = !this._drawer.open;
      });
    }

    this._snackbar = this.shadowRoot.querySelector('#snackbar');

    this._snackbar.addEventListener('MDCSnackbar:closed', event => {
      if (event.detail.reason === "action") {
        this._wb.addEventListener('controlling', () => {
          window.location.reload();
          this._wbRegistration = undefined;
        }); // Send a message to the waiting service worker instructing
        // it to skip waiting, which will trigger the `controlling`
        // event listener above.


        if (this._wbRegistration && this._wbRegistration.waiting) {
          messageSW(this._wbRegistration.waiting, {
            type: 'SKIP_WAITING'
          });
        }
      }
    }); // Check that service workers are supported


    if ('serviceWorker' in navigator) {
      // Use the window load event to keep the page load performant
      window.addEventListener('load', async () => {
        this._wb = new Workbox('./sw.js');

        this._wb.addEventListener('waiting', () => this._showSnackbar());

        this._wb.addEventListener('externalwaiting', () => this._showSnackbar());

        this._wbRegistration = await this._wb.register();
      });
    }

    this._mainCanvas = this.shadowRoot.querySelector('#main-canvas');
    this._mainCanvas.app = this;
    this._infoButton = this.shadowRoot.querySelector('#info-button');
    this._infoButton.onpointerdown = this._toggleInfoPanel.bind(this);
    this._clearButton = this.shadowRoot.querySelector('#clear-button');
    this._clearButton.onpointerdown = this._clearCanvas.bind(this);
    this._infoPanel = this.shadowRoot.querySelector('#info-panel');
    this._infoPanel.style.visibility = 'hidden';
    this._infoPanel.onpointerdown = this._onDragStart.bind(this);
    this._infoPanel.onpointermove = this._onDrag.bind(this);
    this._infoPanel.onpointerup = this._onDragEnd.bind(this);
    console.log(window.navigator.usi);
  }

  constructor() {
    super();

    _defineProperty(this, "_rafId", null);

    _defineProperty(this, "_dragActive", false);

    _defineProperty(this, "_currentX", void 0);

    _defineProperty(this, "_currentY", void 0);

    _defineProperty(this, "_initialX", void 0);

    _defineProperty(this, "_initialY", void 0);

    _defineProperty(this, "_xOffset", 0);

    _defineProperty(this, "_yOffset", 0);

    _defineProperty(this, "_clearCanvas", async event => {
      this._mainCanvas._clearCanvas();
    });

    _defineProperty(this, "_onDragStart", async event => {
      this._initialX = event.x - this._xOffset;
      this._initialY = event.y - this._yOffset;
      if (event.target === this._infoPanel) this._dragActive = true;
    });

    _defineProperty(this, "_onDrag", async event => {
      if (this._dragActive) {
        event.preventDefault();
        this._currentX = event.clientX - this._initialX;
        this._currentY = event.clientY - this._initialY;
        this._xOffset = this._currentX;
        this._yOffset = this._currentY;
        this._rafId = window.requestAnimationFrame(this._onAnimationFrame.bind(this));
      } else {
        this._pointerMoved = true;
      }
    });

    _defineProperty(this, "_onDragEnd", async event => {
      if (this._rafId) {
        window.cancelAnimationFrame(this._rafId);
        this._rafId = null;
      }

      this._initialX = this._currentX;
      this._initialY = this._currentY;
      this._dragActive = false;
    });
  }

  _showSnackbar() {
    this._snackbar.show();
  }

  _toggleInfoPanel() {
    this._infoPanel.style.visibility = this._infoPanel.style.visibility === 'hidden' ? 'visible' : 'hidden';
  }

  _onAnimationFrame() {
    if (this._dragActive) {
      this._infoPanel.style.transform = 'translate3d(' + this._currentX + 'px, ' + this._currentY + 'px, 0)';
    }
  }

  _updateInfoPanel(event) {
    this._infoPanel.eventType = event.type;
    this._infoPanel.pointerType = event.pointerType;
    this._infoPanel.pointerId = event.pointerId;
    this._infoPanel.isPrimary = event.isPrimary;
    this._infoPanel.width = event.width;
    this._infoPanel.height = event.height;
    this._infoPanel.positionX = this._roundDecimal(event.x, 4);
    this._infoPanel.positionY = this._roundDecimal(event.y, 4);
    this._infoPanel.preferredColor = event.preferredColor;
    this._infoPanel.pressure = this._roundDecimal(event.pressure, 4);
    this._infoPanel.tangentialPressure = this._roundDecimal(event.tangentialPressure, 4);
    this._infoPanel.tiltX = this._roundDecimal(event.tiltX, 4);
    this._infoPanel.tiltY = this._roundDecimal(event.tiltY, 4);
    this._infoPanel.twist = this._roundDecimal(event.twist, 4);
  }

  _roundDecimal(value, numOfDecimalPlaces) {
    const factor = Math.pow(10, numOfDecimalPlaces);
    return Math.round(value * factor) / factor;
  }

  _colorChanged(event) {
    this._mainCanvas.currentColor = event.detail.color;
    this._mainCanvas.drawWithPreferredColor = false;
  }

  _lineWidthChanged(event) {
    this._mainCanvas.currentLineWidth = event.detail.lineWidth;
  }

  _drawWithPreferredColorChanged(event) {
    this._mainCanvas.drawWithPreferredColor = event.detail.drawWithPreferredColor;
  }

  _pressureEventsEnabledChanged(event) {
    this._mainCanvas.drawWithPressure = event.detail.pressureEventsEnabled;
  }

  _predictedEventsEnabledChanged(event) {
    this._mainCanvas.drawPredictedEvents = event.detail.predictedEventsEnabled;
  }

  _predictedEventsHighlightEnabledChanged(event) {
    this._mainCanvas.highlightPredictedEvents = event.detail.predictedEventsHighlightEnabled;
  }

  _numOfPredictionPointsChanged(event) {
    this._mainCanvas.numOfPredictionPoints = event.detail.numOfPredictionPoints;
  }

  _coalescedEventsEnabledChanged(event) {
    this._mainCanvas.drawCoalescedEvents = event.detail.coalescedEventsEnabled;
  }

  _drawPointsOnlyEnabledChanged(event) {
    this._mainCanvas.drawPointsOnly = event.detail.drawPointsOnlyEnabled;
  }

  render() {
    return html`
    <mwc-drawer id="drawer" hasHeader type="modal">
      <span slot="title" class="header">Toolbar</span>
      <div class="drawer-content">
        <tiny-toolbar @color-changed=${this._colorChanged}
          @lineWidth-changed=${this._lineWidthChanged}
          @drawWithPreferredColor-changed=${this._drawWithPreferredColorChanged}
          @pressureEventsEnabled-changed=${this._pressureEventsEnabledChanged}
          @predictedEventsEnabled-changed=${this._predictedEventsEnabledChanged}
          @predictedEventsHighlightEnabled-changed=${this._predictedEventsHighlightEnabledChanged}
          @numOfPredictionPoints-changed=${this._numOfPredictionPointsChanged}
          @coalescedEventsEnabled-changed=${this._coalescedEventsEnabledChanged}
          @drawPointsOnlyEnabled-changed=${this._drawPointsOnlyEnabledChanged}>
        </tiny-toolbar>
      </div>
      <div slot="appContent">
        <mwc-top-app-bar>
          <mwc-icon-button slot="navigationIcon" icon="menu"></mwc-icon-button>
          <div slot="title">TinyCanvas</div>
          <mwc-icon-button slot="actionItems" id="info-button" icon="info"></mwc-icon-button>
          <mwc-icon-button slot="actionItems" id="clear-button" icon="clear"></mwc-icon-button>
        </mwc-top-app-bar>
        <main-canvas id="main-canvas"></main-canvas>
        <info-panel id="info-panel"></info-panel>
      </div>
    </mwc-drawer>
    <mwc-snackbar id="snackbar" labelText="A newer version of the application is available.">
    <mwc-button slot="action">RELOAD</mwc-button>
      <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
    </mwc-snackbar>`;
  }

}

_defineProperty(MainApplication, "styles", css`
    :host {
      width: 100vw;
      height: 100vh;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    mwc-snackbar {
      --mdc-snackbar-action-color: #2d89ef;
    }

    mwc-drawer {
      --mdc-drawer-width: 384px;
    }

    .drawer-content {
      width: 100%;
      height: 80vh;
    }

    .header {
      text-align: center;
      width: 100%;
      font-size: 1.5em;
      height: 30px;
      font-weight: bold;
    }

    tiny-toolbar {
      width: 20vw;
      height: 100vh;
    }

    main-canvas {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
    }

    info-panel {
      position: relative;
      top: 20px;
      left: 20px;
      width: 250px;
      height: 400px;
    }

    info-panel:hover {
      cursor: pointer;
      border-style: solid;
      border-color: lightgrey;
    }
  `);

customElements.define('main-application', MainApplication);