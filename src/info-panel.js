import { LitElement, html, css as css } from 'lit';
import '@shoelace-style/shoelace/dist/components/card/card.js';

export class InfoPanel extends LitElement {
  static styles = css`
    :host {
      font-size: 12px;
      z-index: 3;
      user-select: none;
      touch-action: none;
    }

    .card-header {
      width: 300px;
    }

    .card-header [slot='header'] {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    sl-card::part(header) {
      background-color: #313030;
      color: white;
    }

    .card-header sl-icon-button {
      font-size: var(--sl-font-size-medium);
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

    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 10px;
    }

    .name {
      padding: 5px;
    }

    .value {
      padding: 5px;
      font-weight: bold;
    }
  `;

  static get properties() {
    return { eventType : {type: String, reflectToAttribute: true, attribute: true},
             pointerType : {type: String, reflectToAttribute: true, attribute: true},
             pointerId : {type: Number, reflectToAttribute: true, attribute: true},
             isPrimary : {type: Boolean, reflectToAttribute: true, attribute: true},
             width : {type: Number, reflectToAttribute: true, attribute: true},
             height : {type: Number, reflectToAttribute: true, attribute: true},
             positionX : {type: Number, reflectToAttribute: true, attribute: true},
             positionY : {type: Number, reflectToAttribute: true, attribute: true},
             preferredColor : {type: String, reflectToAttribute: true, attribute: true},
             preferredStyle : {type: String, reflectToAttribute: true, attribute: true},
             preferredWidth : {type: Number, reflectToAttribute: true, attribute: true},
             pressure : {type: Number, reflectToAttribute: true, attribute: true},
             tangentialPressure : {type: Number, reflectToAttribute: true, attribute: true},
             tiltX : {type: Number, reflectToAttribute: true, attribute: true},
             tiltY : {type: Number, reflectToAttribute: true, attribute: true},
             twist : {type: Number, reflectToAttribute: true, attribute: true},
             avgLatency : {type: Number, reflectToAttribute: true, attribute: true}};
    }

  set eventType(eventType) {
    let oldEventType = this._eventType;
    this._eventType = eventType;
    this.requestUpdate('eventType', oldEventType);
  }

  get eventType() { return this._eventType; }

  set pointerType(pointerType) {
    let oldPointerType = this._pointerType;
    this._pointerType = pointerType;
    this.requestUpdate('pointerType', oldPointerType);
  }

  get pointerType() { return this._pointerType; }

  set pointerId(pointerId) {
    let oldPointerId = this._pointerId;
    this._pointerId = pointerId;
    this.requestUpdate('pointerId', oldPointerId);
  }

  get pointerId() { return this._pointerId; }

  set isPrimary(isPrimary) {
    let oldIsPrimary = this._isPrimary;
    this._isPrimary = isPrimary;
    this.requestUpdate('isPrimary', oldIsPrimary);
  }

  get isPrimary() { return this._isPrimary; }

  set width(width) {
    let oldWidth = this._pointerId;
    this._width = width;
    this.requestUpdate('width', oldWidth);
  }

  get width() { return this._width; }

  set height(height) {
    let oldHeight = this._height;
    this._height = height;
    this.requestUpdate('height', oldHeight);
  }

  get height() { return this._height; }

  set positionX(positionX) {
    let oldPositionX = this._positionX;
    this._positionX = positionX;
    this.requestUpdate('positionX', oldPositionX);
  }

  get positionX() { return this._positionX; }

  set positionY(positionY) {
    let oldPositionY = this._positionY;
    this._positionY = positionY;
    this.requestUpdate('positionY', oldPositionY);
  }

  get positionY() { return this._positionY; }

  set preferredColor(preferredColor) {
    let oldPreferredColor = this._preferredColor;
    this._preferredColor = preferredColor;
    this.requestUpdate('preferredColor', oldPreferredColor);
  }

  get preferredColor() { return this._preferredColor; }

  set preferredStyle(preferredStyle) {
    let oldPreferredStyle = this._preferredStyle;
    this._preferredStyle = preferredStyle;
    this.requestUpdate('preferredStyle', oldPreferredStyle);
  }

  get preferredStyle() { return this._preferredStyle; }

  set preferredWidth(preferredWidth) {
    let oldPreferredWidth = this._preferredWidth;
    this._preferredWidth = preferredWidth;
    this.requestUpdate('preferredWidth', oldPreferredWidth);
  }

  get preferredWidth() { return this._preferredWidth; }

  set pressure(pressure) {
    let oldPressure = this._pressure;
    this._pressure = pressure;
    this.requestUpdate('pressure', oldPressure);
  }

  get pressure() { return this._pressure; }

  set tangentialPressure(tangentialPressure) {
    let oldTangentialPressure = this._tangentialPressure;
    this._tangentialPressure = tangentialPressure;
    this.requestUpdate('tangentialPressure', oldTangentialPressure);
  }

  get tangentialPressure() { return this._tangentialPressure; }

  set tiltX(tiltX) {
    let oldTiltX = this._tiltX;
    this._tiltX = tiltX;
    this.requestUpdate('tiltX', oldTiltX);
  }

  get tiltX() { return this._tiltX; }

  set tiltY(tiltY) {
    let oldTiltY = this._tiltY;
    this._tiltY = tiltY;
    this.requestUpdate('tiltY', oldTiltY);
  }

  get tiltY() { return this._tiltY; }

  set twist(twist) {
    let oldTwist = this._twist;
    this._twist = twist;
    this.requestUpdate('twist', oldTwist);
  }

  get twist() { return this._twist; }

  set avgLatency(avgLatency) {
    let oldAvgLatency = this._avgLatency;
    this._avgLatency = avgLatency;
    this.requestUpdate('avgLatency', oldAvgLatency);
  }

  get avgLatency() { return this._avgLatency; }

  constructor() {
    super();
  }

  _closedClicked() {
    this.shadowRoot.host.style.visibility = 'hidden';
  }

  render() {
    return html`
      <sl-card class="card-header">
        <div slot="header">
          Pointer Events Debug
          <sl-tooltip content="Close">
              <sl-button class="button" @click="${this._closedClicked}">
                <sl-icon name="x-circle" label="Clear Canvas"></sl-icon>
              </sl-button>
          </sl-tooltip>
        </div>
        <div class="content">
          <div class="name">Event type</div><div class="value">${String(this._eventType)}</div>
          <div class="name">Pointer type</div><div class="value">${String(this._pointerType)}</div>
          <div class="name">Pointer id</div><div class="value">${String(this._pointerId)}</div>
          <div class="name">IsPrimary</div><div class="value">${String(this._isPrimary)}</div>
          <div class="name">Width</div><div class="value">${String(this._width)}</div>
          <div class="name">Height</div><div class="value">${String(this._height)}</div>
          <div class="name">Position x</div><div class="value">${String(this._positionX)}</div>
          <div class="name">Position y</div><div class="value">${String(this._positionY)}</div>
          <div class="name">Preferred color</div><div class="value">${String(this._preferredColor)}</div>
          <div class="name">Preferred style</div><div class="value">${String(this._preferredStyle)}</div>
          <div class="name">Preferred width</div><div class="value">${String(this._preferredWidth)}</div>
          <div class="name">Pressure</div><div class="value">${String(this._pressure)}</div>
          <div class="name">Tangential pressure</div><div class="value">${String(this._tangentialPressure)}</div>
          <div class="name">Tilt x</div><div class="value">${String(this._tiltX)}</div>
          <div class="name">Tilt y</div><div class="value">${String(this._tiltY)}</div>
          <div class="name">Twist</div><div class="value">${String(this._twist)}</div>
          <div class="name">Avg latency</div><div class="value">${String(this._avgLatency)}ms</div>
        </div>
      </sl-card>
    `;
  }
}

customElements.define('info-panel', InfoPanel);