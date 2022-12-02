import { LitElement, html, css as css } from 'lit';
import { Workbox, messageSW} from 'workbox-window';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/button-group/button-group.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import './info-panel.js';
import './js-canvas.js';         // Canvas2D JS implementation
import './pathkit-canvas.js';    // Canvas2D + PathKit implementation
import './settings-dialog.js';
import './toolbar.js';
import './usi-dialog.js';
import { DataSamples } from './utils.js';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('/tiny-canvas/');

export class MainApplication extends LitElement {
  static styles = css`
    :host {
      width: 100vw;
      height: 100vh;
      font-family: var(--sl-input-font-family);
      font-size: var(--sl-input-font-size-medium);
      font-weight: var(--sl-input-font-weight);
      color: var(--sl-input-color);
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .drawer-content {
      width: 100%;
      height: 80vh;
    }

    tiny-toolbar {
      width: 20vw;
      height: 100vh;
    }

    js-canvas, pathkit-canvas {
      width: 100%;
      height: 100%;
    }

    info-panel {
      position: absolute;
      top: 5vh;
      right: 20px;
    }

    .main-content {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;
      width: 100%;
    }

    .button-group-toolbar {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 5vh;
      justify-content: space-evenly;
      padding-left: 5px;
      padding-right: 5px;
      background-color: #313030;
      border: solid 1px #202020;
    }
    
    .button-group-toolbar sl-button-group:not(:last-of-type) {
      margin-right: var(--sl-spacing-x-small);
    }

    #background-canvas {
      background-color: #313030;
      width: 100vw;
      height: 95vh;
      display: flex;
    }

    #main-canvas {
      height: 95vh;
      display: flex;
      background-color: white;
      flex-grow: 1;
    }

    drawing-toolbar {
      height: 95vh;
      flex-basis: 50px;
      flex-grow: 0;
      flex-shrink: 0;
    }

    .title {
      flex-grow: 2;
      font-size: 2em;
      text-align: left;
      font-family: 'Dancing Script';
      color: #cbcbcb;
    }

    sl-button.button::part(base) {
      background-color: #525151;
      border-color: #000000;
      color: #a2a2a2;
    }

    sl-button:not([disabled]).button::part(base):hover {
      color: #ececec;
      border-color:#ececec;
    }

    .alert-sw {
      position: absolute;
      bottom: 3vh;
      left: 1vw;
      z-index: 4;
    }

    .text-sw {
      padding-bottom: 10px;
    }

    .reload {
      margin-left: 5px;
    }
  `;

  set currentEvent(currentEvent) {
    this._previousEvent = this._currentEvent;
    this._currentEvent = currentEvent;
    this._isIdle = false;
    clearTimeout(this._idleTimer);
    this._idleTimer = setTimeout(this._onIdle.bind(this), this._defaultIdleTimeout);
  }

  get currentEvent() { return this._currentEvent; }

  firstUpdated() {
    const settingsButton = this.shadowRoot.querySelector('#settings-button');
    const settingsDialog = this.shadowRoot.querySelector('#settings-dialog');
    settingsButton.addEventListener('click', () => settingsDialog.show());

    this._swAlert = this.shadowRoot.querySelector('#sw-alert');
    // Check that service workers are supported
    if ('serviceWorker' in navigator) {
      // Use the window load event to keep the page load performant
      window.addEventListener('load', async () => {
        this._wb = new Workbox('./sw.js');
        this._wb.addEventListener('waiting', () => this._showSWAlert());
        this._wb.addEventListener('externalwaiting', () => this._showSWAlert());
        this._wbRegistration = await this._wb.register();
      });
    }

    // Default to Canvas2D and desynchronized canvas
    this._switchRenderingType('js-canvas', true);

    this._usiDialog = this.shadowRoot.querySelector('#usi-dialog');
    this._infoButton = this.shadowRoot.querySelector('#info-button');
    this._infoButton.onpointerdown = this._toggleInfoPanel.bind(this);
    this._undoButton = this.shadowRoot.querySelector('#undo-button');
    this._undoButton.onpointerdown = this._undoPath.bind(this);
    this._redoButton = this.shadowRoot.querySelector('#redo-button');
    this._redoButton.onpointerdown = this._redoPath.bind(this);
    this._deleteButton = this.shadowRoot.querySelector('#delete-button');
    this._deleteButton.onpointerdown = this._deleteAllPaths.bind(this);
    this._undoButton.disabled = true;
    this._redoButton.disabled = true;
    this._infoPanel = this.shadowRoot.querySelector('#info-panel');
    this._infoPanel.style.visibility = 'hidden';
    this._infoPanel.onpointerdown = this._onDragStart.bind(this);
    this._infoPanel.onpointermove = this._onDrag.bind(this);
    this._infoPanel.onpointerup = this._onDragEnd.bind(this);
  }

  constructor() {
    super();
    this._renderingType = null;
    this._rafId = null;
    this._dragActive = false;
    this._currentX = 0;
    this._currentY = 0;
    this._initialX = 0
    this._initialY = 0;
    this._xOffset = 0;
    this._yOffset = 0;
    this._defaultIdleTimeout = 50;
    this._currentEvent = null;
    this._previousEvent = null;
    this._pointerLatencySamples = new DataSamples(60);
  }

  _showSWAlert() {
    this._swAlert.show();
  }

  _reloadSW() {
    this._wb.addEventListener('controlling', () => {
      window.location.reload();
      this._wbRegistration = undefined;
    });
    // Send a message to the waiting service worker instructing
    // it to skip waiting, which will trigger the `controlling`
    // event listener above.
    if (this._wbRegistration && this._wbRegistration.waiting) {
      messageSW(this._wbRegistration.waiting, {type: 'SKIP_WAITING'})
    }
  }

  _toggleInfoPanel() {
    if (this._infoPanel.style.visibility === 'hidden') {
      this._infoPanel.style.visibility = 'visible';
      this._rafId = window.requestAnimationFrame(this._onFrame.bind(this));
    } else {
      this._infoPanel.style.visibility = 'hidden';
      if (this._rafId) {
        window.cancelAnimationFrame(this._rafId);
        this._rafId = null;
      }
    }
  }

  _undoPath() {
    this._mainCanvas.undoPath();
  }

  _redoPath() {
    this._mainCanvas.redoPath();
  }

  _deleteAllPaths = async (event) => {
    this._mainCanvas.deleteAllPaths();
  }

  // for overlay drag
  _onDragStart = async (event) => {
    this._initialX = event.x - this._xOffset;
    this._initialY = event.y - this._yOffset;

    if (event.target === this._infoPanel)
      this._dragActive = true;
  }

  _onDrag = async (event) => {
    if (this._dragActive) {
      event.preventDefault();
      this._currentX = event.clientX - this._initialX;
      this._currentY = event.clientY - this._initialY;
      this._xOffset = this._currentX;
      this._yOffset = this._currentY;
      this._infoPanel.style.transform = 'translate3d(' + this._currentX + 'px, ' + this._currentY + 'px, 0)';
    }
  }

  _onDragEnd = async (event) => {
    this._initialX = this._currentX;
    this._initialY = this._currentY;
    this._dragActive = false;
  }

  _onFrame(frameTime) {
    // this callback gets called before the next repaint
    // so we can mesasure the latency from the event being dispatched up in the browser
    // until the event being handled
    if (!this._isIdle && this._currentEvent) {
      let pointerLatency = performance.now() - this._currentEvent.timeStamp;
      this._pointerLatencySamples.push(pointerLatency);
      this._updateInfoPanel(this._currentEvent);
    }
    this._rafId = window.requestAnimationFrame(this._onFrame.bind(this));
  }

  _onIdle() {
    this._isIdle = true;
    this._pointerLatencySamples.clear();
    //this._infoPanel.avgLatency = 0;
  }

  _updateInfoPanel(event) {
    this._infoPanel.eventType = event.type;
    this._infoPanel.pointerType =  event.pointerType;
    this._infoPanel.pointerId =  event.pointerId;
    this._infoPanel.isPrimary =  event.isPrimary;
    this._infoPanel.width =  event.width;
    this._infoPanel.height =  event.height;
    this._infoPanel.positionX = this._roundDecimal(event.x, 4);
    this._infoPanel.positionY = this._roundDecimal(event.y, 4);
    /*if (typeof event.penCustomizationsDetails !== 'undefined') {
      event.penCustomizationsDetails.getPreferredInkingColor().then((color) => {
        this._infoPanel.preferredColor = color;
      });
      event.penCustomizationsDetails.getPreferredInkingStyle().then((style) => {
        this._infoPanel.preferredStyle = style;
      });
      event.penCustomizationsDetails.getPreferredInkingWidth().then((width) => {
        this._infoPanel.preferredWidth = width;
      });
    }*/
    this._infoPanel.pressure = this._roundDecimal(event.pressure, 4);
    this._infoPanel.tangentialPressure = this._roundDecimal(event.tangentialPressure, 4);
    this._infoPanel.tiltX = this._roundDecimal(event.tiltX, 4);
    this._infoPanel.tiltY = this._roundDecimal(event.tiltY, 4);
    this._infoPanel.twist = this._roundDecimal(event.twist, 4);
    this._infoPanel.avgLatency = this._pointerLatencySamples.avg().toFixed(1);
  }

  _roundDecimal(value, numOfDecimalPlaces) {
    const factor = Math.pow(10, numOfDecimalPlaces);
    return Math.round(value * factor) / factor;
  }

  _switchRenderingType(renderingType, desynchronized) {
    if (this._renderingType === renderingType && this._mainCanvas._desynchronized === desynchronized)
      return;

    let newCanvas = document.createElement(renderingType);

    if (this._mainCanvas) {
      newCanvas.currentLineColor = this._mainCanvas.currentLineColor;
      newCanvas.currentLineStye = this._mainCanvas.currentLineStyle;
      newCanvas.currentLineWidth = this._mainCanvas.currentLineWidth;
      newCanvas.drawCoalescedEvents = this._mainCanvas.drawCoalescedEvents;
      newCanvas.drawPointsOnly = this._mainCanvas.drawPointsOnly;
      newCanvas.drawPredictedEvents = this._mainCanvas.drawPredictedEvents;
      newCanvas.drawWithPreferredFeatures = this._mainCanvas.drawWithPreferredFeatures;
      newCanvas.drawWithPressure = this._mainCanvas.drawWithPressure;
      newCanvas.highlightPredictedEvents = this._mainCanvas.highlightPredictedEvents;
      newCanvas.numOfPredictionPoints = this._mainCanvas.numOfPredictionPoints;
      newCanvas.pointerRawUpdate = this._mainCanvas.pointerRawUpdate;
      this._mainCanvas.remove();
    }
    this._mainCanvas = newCanvas;
    this._mainCanvas.app = this;
    this._mainCanvas.desynchronized = desynchronized;
    this._renderingType = renderingType;
    this.shadowRoot.getElementById('main-canvas').appendChild(newCanvas);
  }

  _renderingTypeChanged(event) {
    this._switchRenderingType(event.detail.renderingType, this._mainCanvas._desynchronized);
  }

  _desynchronizedEnabledChanged(event) {
    if (this._renderingType && this._mainCanvas._desynchronized !== event.detail.desynchronizedEnabled) {
      // once you get the context of the canvas after you set desynchronized flag
      // you can't get another context with a changed setting, the canvas should be re-created 
      this._switchRenderingType(this._renderingType, event.detail.desynchronizedEnabled);
    }
  }

  _lineColorChanged(event) {
    this._mainCanvas.currentLineColor = event.detail.lineColor;
    this._mainCanvas.drawWithPreferredFeatures = false;
  }

  _lineStyleChanged(event) {
    this._mainCanvas.currentLineStyle = event.detail.lineStyle;
    this._mainCanvas.drawWithPreferredFeatures = false;
  }

  _lineWidthChanged(event) {
    this._mainCanvas.currentLineWidth = event.detail.lineWidth;
    this._mainCanvas.drawWithPreferredFeatures = false;
  }

  _drawWithPreferredFeaturesChanged(event) {
    this._mainCanvas.drawWithPreferredFeatures = event.detail.drawWithPreferredFeatures;
  }

  _pointerRawUpdateEnabledChanged(event) {
    this._mainCanvas.pointerRawUpdate = event.detail.pointerRawUpdateEnabled;
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

  _predictionTypeChanged(event) {
    this._mainCanvas.predictionType = event.detail.predictionType;
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

  _usiInfoDialogPressed(event) {
    this._usiDialog.show(event.detail.usiInfo);
  }

  _pathsChanged(event) {
    let paths = event.detail.paths;
    if (paths.length === 0) {
      this._undoButton.disabled = true;
      this._redoButton.disabled = true;
      this._redoButton.closest('sl-tooltip').disabled = true;
      this._undoButton.closest('sl-tooltip').disabled = true;
    } else {
      this._undoButton.disabled = !paths[0].display ? true : false;
      this._redoButton.disabled = paths[paths.length-1].display ? true : false;
      this._undoButton.closest('sl-tooltip').disabled = this._undoButton.disabled;
      this._redoButton.closest('sl-tooltip').disabled = this._redoButton.disabled;
    }
  }

  render() {
    return html`
      <div class="main-content">
        <div class="button-group-toolbar">
          <div class="title">Tiny Canvas</div>
          <sl-button-group label="History">
            <sl-tooltip content="Undo">
              <sl-button id="undo-button" class="button">
                <sl-icon name="arrow-counterclockwise" label="Undo"></sl-icon>
              </sl-button>
            </sl-tooltip>
            <sl-tooltip content="Redo">
              <sl-button id="redo-button" class="button">
                <sl-icon name="arrow-clockwise" label="Redo"></sl-icon>
              </sl-button>
            </sl-tooltip>
            <sl-tooltip content="Clear Drawing">
              <sl-button id="delete-button" class="button">
                <sl-icon name="x-circle" label="Clear Canvas"></sl-icon>
              </sl-button>
            </sl-tooltip>
          </sl-button-group>
          <sl-button-group label="Misc">
          <sl-tooltip content="Events Debug Panel">
            <sl-button id="info-button" class="button">
              <sl-icon name="info-circle" label="Pointer Events Information"></sl-icon>
            </sl-button>
          </sl-tooltip>
          <sl-tooltip content="Settings" placement="bottom">
            <sl-button id="settings-button" class="button">
              <sl-icon name="gear" label="Application Preferences"></sl-icon>
            </sl-button>
          </sl-tooltip>
          </sl-button-group>
        </div>
        <div id="background-canvas">
          <drawing-toolbar
            @lineColor-changed=${this._lineColorChanged}
            @lineStyle-changed=${this._lineStyleChanged}
            @lineWidth-changed=${this._lineWidthChanged}>
          </drawing-toolbar>
          <main-canvas id="main-canvas" @paths-changed="${this._pathsChanged}"></main-canvas>
        </div>
    </div>
    <sl-drawer label="Drawer" placement="start" class="drawer-placement-start">
      <div class="drawer-content">
        <tiny-toolbar
          @renderingType-changed=${this._renderingTypeChanged}
          @desynchronizedEnabled-changed=${this._desynchronizedEnabledChanged}
          @lineColor-changed=${this._lineColorChanged}
          @lineStyle-changed=${this._lineStyleChanged}
          @lineWidth-changed=${this._lineWidthChanged}
          @drawWithPreferredFeatures-changed=${this._drawWithPreferredFeaturesChanged}
          @usiInfoDialog-pressed=${this._usiInfoDialogPressed}>
        </tiny-toolbar>
      </div>
      <sl-button slot="footer" variant="primary">Close</sl-button>
    </sl-drawer>
    <settings-dialog id="settings-dialog"
      @renderingType-changed=${this._renderingTypeChanged}
      @desynchronizedEnabled-changed=${this._desynchronizedEnabledChanged}
      @pointerRawUpdateEnabled-changed=${this._pointerRawUpdateEnabledChanged}
      @pressureEventsEnabled-changed=${this._pressureEventsEnabledChanged}
      @predictedEventsEnabled-changed=${this._predictedEventsEnabledChanged}
      @predictedEventsHighlightEnabled-changed=${this._predictedEventsHighlightEnabledChanged}
      @predictionType-changed=${this._predictionTypeChanged}
      @numOfPredictionPoints-changed=${this._numOfPredictionPointsChanged}
      @coalescedEventsEnabled-changed=${this._coalescedEventsEnabledChanged}
      @drawPointsOnlyEnabled-changed=${this._drawPointsOnlyEnabledChanged}></settings-dialog>
    <info-panel id="info-panel"></info-panel>
    <usi-dialog id="usi-dialog"></usi-dialog>
    <div class="alert-sw">
      <sl-alert id="sw-alert" variant="primary" closable duration="10000">
        <sl-icon slot="icon" name="info-circle"></sl-icon>
        <div class="text-sw">
          <strong>A newer version of the application is available</strong>
        </div>
        Please reload to update: 
        <sl-button class="reload" size="small" @click="${this._reloadSW}">Reload</sl-button>
      </sl-alert>
    </div>`;
  }
}

customElements.define('main-application', MainApplication);
