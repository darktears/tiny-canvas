import { LitElement, html, css as css } from 'lit';
import '@material/mwc-dialog';

export class USIDialog extends LitElement {
  static styles = css`
    :host {
      user-select: none;
      touch-action: none;
    }

    mwc-dialog {
      --mdc-dialog-min-width: 500px;
      --mdc-dialog-min-height: 400px;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 10px;
      font-size: 12px;
      text-align: left;
      border-radius: 20px;
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
    return { firmwareVersion : {type: String, reflectToAttribute: true, attribute: true},
             preferredColor : {type: String, reflectToAttribute: true, attribute: true},
             preferredWidth : {type: Number, reflectToAttribute: true, attribute: true},
             productId : {type: String, reflectToAttribute: true, attribute: true},
             protocolVersion : {type: String, reflectToAttribute: true, attribute: true},
             style : {type: String, reflectToAttribute: true, attribute: true},
             vendorId : {type: String, reflectToAttribute: true, attribute: true}};
  }

  set firmwareVersion(firmwareVersion) {
    let oldFirmwareVersion = this._firmwareVersion;
    this._firmwareVersion = firmwareVersion;
    this.requestUpdate('firmwareVersion', oldFirmwareVersion);
  }

  get firmwareVersion() { return this._firmwareVersion; }

  set preferredColor(preferredColor) {
    let oldPreferredColor = this.preferredColor;
    this._preferredColor = preferredColor;
    this.requestUpdate('preferredColor', oldPreferredColor);
  }

  get preferredColor() { return this._preferredColor; }

  set preferredWidth(preferredWidth) {
    let oldPreferredWidth = this._preferredWidth;
    this._preferredWidth = preferredWidth;
    this.requestUpdate('preferredWidth', oldPreferredWidth);
  }

  get preferredWidth() { return this._preferredWidth; }

  set productId(productId) {
    let oldProductId = this._productId;
    this._productId = productId;
    this.requestUpdate('productId', oldProductId);
  }

  get productId() { return this._productId; }

  set protocolVersion(protocolVersion) {
    let oldProtocolVersion = this._protocolVersion;
    this._protocolVersion = protocolVersion;
    this.requestUpdate('protocolVersion', oldProtocolVersion);
  }

  get protocolVersion() { return this._protocolVersion; }

  set style(style) {
    let oldStyle = this._style;
    this._style = style;
    this.requestUpdate('style', oldStyle);
  }

  get style() { return this._style; }

  set vendorId(vendorId) {
    let oldVendorId = this._vendorId;
    this._vendorId = vendorId;
    this.requestUpdate('vendorId', oldVendorId);
  }

  get vendorId() { return this._vendorId; }

  constructor() {
    super();
  }

  show(usiInfo) {
    if (usiInfo) {
      this.vendorId = usiInfo.firmware.vendorId;
      this.productId = usiInfo.firmware.productId;
      this.firmwareVersion = usiInfo.firmware.firmwareVersion;
      this.protocolVersion = usiInfo.protocol.protocolVersion;
      this.preferredColor = usiInfo.preferredColor;
      this.preferredWidth = usiInfo.preferredWidth;
      this.style = usiInfo.style;
      this.shadowRoot.getElementById('usi-mwc-dialog').show();
    }
  }

  render() {
    return html`
    <mwc-dialog id="usi-mwc-dialog" heading="USI Stylus Info" scrimClickAction="">
    <div class="grid">
    <div class="name">Vendor id</div><div class="value">${String(this.vendorId)}</div>
    <div class="name">Product id</div><div class="value">${String(this.productId)}</div>
    <div class="name">Firmware version</div><div class="value">${String(this.firmwareVersion)}</div>
    <div class="name">USI version</div><div class="value">${String(this.protocolVersion)}</div>
    <div class="name">Preferred Color</div><div class="value">${String(this.preferredColor)}</div>
    <div class="name">Preferred Width</div><div class="value">${String(this.preferredWidth)}</div>
    <div class="name">Style</div><div class="value">${String(this.style)}</div>
    </div>
    <mwc-button dialogAction="ok" slot="primaryAction">ok</mwc-button>
  </mwc-dialog>`;
  }
}

customElements.define('usi-dialog', USIDialog);
