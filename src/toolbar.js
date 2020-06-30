import { LitElement, html, css as css } from '../web_modules/lit-element.js';
import '../web_modules/@material/mwc-button.js';
import '../web_modules/@material/mwc-icon-button.js';

export class ColorCell extends LitElement {
  static styles = css`
    .selected {
      border: solid 2px #5e5e5e;
      box-sizing: border-box;
      width:100%;
      height:100%;
    }
  `;

static get properties() {
  return { selected : {type: Boolean, reflectToAttribute: true, attribute: true} };
  }

  set selected(selected) {
    let oldSelected = this._selected;
    this._selected = selected;
    this.requestUpdate('selected', oldSelected);
  }

  get selected() { return this._selected; }

  constructor() {
    super();
    this._selected = false;
  }

  render() {
    return html`
      <div class="${this.selected? "selected" : ""}">
        <slot></slot>
      </div>`;
  }
}

customElements.define("color-cell", ColorCell);

export class Toolbar extends LitElement {
  static styles = css`
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

    .header {
      text-align: center;
      box-sizing: border-box;
      width: 100%;
      font-size: 1.5em;
      height: 30px;
      background-color: #f2f2f2;
      border: 1px solid #cccccc;
    }

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      box-sizing: border-box;
      padding: 10px;
    }

    .color-grid {
      width: 100%;
      height: 80%;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(10, 1fr);
      margin-top: 10px;
    }

    .color-cell {
      border: var(--border-grid);
    }

    .usi-section {
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    .usi-text {
      margin-bottom: 10px;
    }

    mwc-button {
      width: 100%;
    }

    .usi-minitext {
      margin-top: 10px;
      font-size: 0.7em;
    }

    .read-section {
      display: flex;
      flex-direction: row;
    }

    .usi-color-cell {
      width: 40%;
      border: var(--border-grid);
      margin-left: 20px;
    }
  `;

  static get properties() {
  return { currentColor : {type: String, reflectToAttribute: true, attribute: true} };
  }

  set currentColor(color) {
    let oldColor = this._currentColor;
    this._currentColor = color;
    let event = new CustomEvent('color-changed', {
      detail: { color: color},
      bubbles: true,
      composed: true });
    this.dispatchEvent(event);
    this.requestUpdate('currentColor', oldColor);
  }

  get currentColor() { return this._currentColor; }

  firstUpdated() {
    this._usiColorCell = this.shadowRoot.querySelector('#usi-color-cell');
    this._usiButton = this.shadowRoot.querySelector('#usi-button');
    this._usiButton.onpointerdown = this._readPreferredColorFromStylus.bind(this);
  }

  _colorSelected(color) {
    console.log('coolor selected')
    this.currentColor = color;
    this._usiColorCell.selected = false;
    this._usiColorCell.style.backgroundColor = 'white';
  }

  _readPreferredColorFromStylus = async (event) => {
    if (!event.preferredColor) {
      console.error('Please click this button with your stylus.');
      return;
    }

    if (event.preferredColor) {
      this.currentColor = event.preferredColor;
      this._usiColorCell.selected = true;
      this._usiColorCell.style.backgroundColor = event.preferredColor;
    }
  }

  constructor() {
    super();
    this._currentColor = "#000000";
    this._colors = ["#FF0000", "#00FFFF", "#0000FF", "#0000A0", "#ADD8E6", "#800080",
      "#FFFF00", "#00FF00", "#FF00FF", "#FFFFFF", "#C0C0C0", "#808080", "#000000",
      "#FFA500", "#A52A2A", "#800000", "#008000", "#808000"];
  }

  render() {
    return html`
    <div class="header">Toolbar</div>
    <div class="content">
      <div class="color-grid">
      ${this._colors.map((i,x) => html`<color-cell class="color-cell" ?selected="${this.currentColor === i}"
        style="background-color:${i}" @pointerdown="${(event) => this._colorSelected(i)}"></color-cell>`)}
      </div>
      <div class="usi-section">
        <div class="usi-text">Read my preferred color from my stylus*:</div>
        <div class="read-section">
          <mwc-button slot="action" icon="colorize" raised id="usi-button"></mwc-button>
          <color-cell class="usi-color-cell" id="usi-color-cell"></color-cell>
        </div>
        <div class="usi-minitext">*An Universal Stylus Initiative compatible hardware is required.</div>
      </div>
    </div>`;
  }
}

customElements.define("tiny-toolbar", Toolbar);