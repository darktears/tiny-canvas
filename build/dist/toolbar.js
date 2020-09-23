function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}import{LitElement as f,html as e,css as g}from"../web_modules/lit-element.js";import"../web_modules/@material/mwc-button.js";import"../web_modules/@material/mwc-checkbox.js";import"../web_modules/@material/mwc-formfield.js";import"../web_modules/@material/mwc-icon-button.js";import"../web_modules/@material/mwc-slider.js";import"../web_modules/@material/mwc-snackbar.js";export class ColorCell extends f{static get properties(){return{selected:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}set selected(a){let b=this._selected;this._selected=a,this.requestUpdate("selected",b)}get selected(){return this._selected}constructor(){super();this._selected=!1}render(){return e`
      <div class="${this.selected?"selected":""}">
        <slot></slot>
      </div>`}}d(ColorCell,"styles",g`
    .selected {
      border: solid 2px #5e5e5e;
      box-sizing: border-box;
      width:100%;
      height:100%;
    }
  `),customElements.define("color-cell",ColorCell);export class Toolbar extends f{static get properties(){return{currentColor:{type:String,reflectToAttribute:!0,attribute:!0},lineWidth:{type:Number,reflectToAttribute:!0,attribute:!0},drawFromPreferredColor:{type:Boolean,reflectToAttribute:!0,attribute:!0},pressureEventsEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},predictedEventsEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},predictedEventsHighlightEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}set currentColor(a){let b=this._currentColor;this._currentColor=a;let c=new CustomEvent("color-changed",{detail:{color:a},bubbles:!0,composed:!0});this.dispatchEvent(c),this.requestUpdate("currentColor",b)}get currentColor(){return this._currentColor}set lineWidth(a){let b=this._lineWidth;this._lineWidth=a;let c=new CustomEvent("lineWidth-changed",{detail:{lineWidth:a},bubbles:!0,composed:!0});this.dispatchEvent(c),this.requestUpdate("lineWidth",b)}get lineWidth(){return this._lineWidth}set drawWithPreferredColor(a){let b=this._drawWithPreferredColor;this._drawWithPreferredColor=a;let c=new CustomEvent("drawWithPreferredColor-changed",{detail:{drawWithPreferredColor:a},bubbles:!0,composed:!0});this.dispatchEvent(c),this.requestUpdate("drawWithPreferredColor",b)}get drawWithPreferredColor(){return this._drawWithPreferredColor}set pressureEventsEnabled(a){let b=this._pressureEventsEnabled;this._pressureEventsEnabled=a;let c=new CustomEvent("pressureEventsEnabled-changed",{detail:{pressureEventsEnabled:a},bubbles:!0,composed:!0});this.dispatchEvent(c),this.requestUpdate("pressureEventsEnabled",b)}get pressureEventsEnabled(){return this._pressureEventsEnabled}set predictedEventsEnabled(a){let b=this._predictedEventsEnabled;this._predictedEventsEnabled=a;let c=new CustomEvent("predictedEventsEnabled-changed",{detail:{predictedEventsEnabled:a},bubbles:!0,composed:!0});this.dispatchEvent(c),this.requestUpdate("predictedEventsEnabled",b)}get predictedEventsEnabled(){return this._predictedEventsEnabled}set predictedEventsHighlightEnabled(a){let b=this._predictedEventsHighlightEnabled;this._predictedEventsHighlightEnabled=a;let c=new CustomEvent("predictedEventsHighlightEnabled-changed",{detail:{predictedEventsHighlightEnabled:a},bubbles:!0,composed:!0});this.dispatchEvent(c),this.requestUpdate("predictedEventsHighlightEnabled",b)}get predictedEventsHighlightEnabled(){return this._predictedEventsHighlightEnabled}firstUpdated(){this._usiColorCell=this.shadowRoot.querySelector("#usi-read-color-cell"),this._snackbar=this.shadowRoot.querySelector("#snackbar"),this._clearButton=this.shadowRoot.querySelector("#clear-button"),this._usiReadButton=this.shadowRoot.querySelector("#usi-read-button"),this._usiWriteButton=this.shadowRoot.querySelector("#usi-write-button"),this._drawingPreferencesCheckbox=this.shadowRoot.querySelector("#drawing-preferences-checkbox"),this._pressureEventsCheckbox=this.shadowRoot.querySelector("#pressure-events-checkbox"),this._predictedEventsCheckbox=this.shadowRoot.querySelector("#predicted-events-checkbox"),this._predictedEventsHighlightCheckbox=this.shadowRoot.querySelector("#predicted-events-highlight-checkbox"),this._lineWidthSlider=this.shadowRoot.querySelector("#line-width-slider"),this._clearButton.onpointerdown=this._clearCanvas.bind(this),this._usiReadButton.onpointerdown=this._readPreferredColorFromStylus.bind(this),typeof window.navigator.usi==="undefined"?(this._pressureEventsCheckbox.disabled=!0,this._usiReadButton.disabled=!0,this._usiWriteButton.disabled=!0,console.log("USI reard/write not supported")):this.pressureEventsEnabled=this._pressureEventsCheckbox.checked=!0}_colorSelected(a){this.currentColor=a,this._usiColorCell.selected=!1,this._usiColorCell.style.backgroundColor="white",this._drawingPreferencesCheckbox.checked=!1}_writePreferredColorToStylus(a){navigator.usi.setPreferredColor(this._currentColor).then(b=>this._showSuccess())}_showSuccess(){this._snackbar.show()}_drawingPreferenceChanged(){this.drawWithPreferredColor=this._drawingPreferencesCheckbox.checked}_pressureEventsChanged(){this.pressureEventsEnabled=this._pressureEventsCheckbox.checked}_predictedEventsChanged(){this.predictedEventsEnabled=this._predictedEventsCheckbox.checked,this._predictedEventsHighlightCheckbox.disabled=!this._predictedEventsCheckbox.checked}_predictedEventsHighlightChanged(){this.predictedEventsHighlightEnabled=this._predictedEventsHighlightCheckbox.checked}_lineWidthChanged(){this.lineWidth=this._lineWidthSlider.value}constructor(){super();d(this,"_clearCanvas",async a=>{let b=document.querySelector("main-application");b._context.clearRect(0,0,b._context.canvas.width,b._context.canvas.height),b._offscreenCanvasContext.clearRect(0,0,b._offscreenCanvasContext.canvas.width,b._offscreenCanvasContext.canvas.height)}),d(this,"_readPreferredColorFromStylus",async a=>{if(!a.preferredColor){console.error("Please click this button with your stylus.");return}a.preferredColor&&(this.currentColor=a.preferredColor,this._usiColorCell.selected=!0,this._usiColorCell.style.backgroundColor=a.preferredColor)}),this._currentColor="#000000",this._drawWithPreferredColor=!1,this._pressureEventsEnabled=!1,this._predictedEventsEnabled=!1,this._predictedEventsHighlightEnabled=!1,this._lineWidth=8,this._colors=["#FF0000","#00FFFF","#0000FF","#0000A0","#ADD8E6","#800080","#FFFF00","#00FF00","#FF00FF","#FFFFFF","#C0C0C0","#808080","#000000","#FFA500","#A52A2A","#800000","#008000","#808000"]}render(){return e`
    <mwc-snackbar id="snackbar" labelText="Sucessfully wrote the new color on your USI device."></mwc-snackbar>
    <div class="header">Toolbar</div>
    <div class="content">
      <div class="color-grid">
      ${this._colors.map((a,b)=>e`<color-cell class="color-cell" ?selected="${this.currentColor===a}"
        style="background-color:${a}" @pointerdown="${c=>this._colorSelected(a)}"></color-cell>`)}
      </div>
      <div class="width-section">
        <div class="width-title">Line Width</div>
        <mwc-slider pin markers step="1" value="8" min="1" max="20" id="line-width-slider" @change="${this._lineWidthChanged}"></mwc-slider>
      </div>
      <mwc-button slot="action" raised id="clear-button">Clear</mwc-button>
      <div class="grow"></div>
      <div class="canvas-section">
        <mwc-formfield spaceBetween="true" class="canvas-text" label="Enable Pen Pressure" alignEnd="true">
          <mwc-checkbox id="pressure-events-checkbox" @change="${this._pressureEventsChanged}"></mwc-checkbox>
        </mwc-formfield>
        <mwc-formfield spaceBetween="true" class="canvas-text" label="Enable Pointer Events Prediction" alignEnd="true">
          <mwc-checkbox id="predicted-events-checkbox" @change="${this._predictedEventsChanged}"></mwc-checkbox>
        </mwc-formfield>
        <mwc-formfield spaceBetween="true" class="canvas-text" label="Highlight Pointer Events Prediction" alignEnd="true">
          <mwc-checkbox id="predicted-events-highlight-checkbox" disabled @change="${this._predictedEventsHighlightChanged}"></mwc-checkbox>
        </mwc-formfield>
      </div>
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
            @pointerdown="${a=>this._writePreferredColorToStylus(a)}"></mwc-button>
          <color-cell class="usi-color-cell" id="usi-write-color-cell" style="background-color:${this.currentColor}"></color-cell>
        </div>
        <div class="usi-minitext">*An Universal Stylus Initiative compatible hardware is required.</div>
      </div>
    </div>`}}d(Toolbar,"styles",g`
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
      font-weight: bold;
    }

    .content {
      width: 100%;
      height: 97%;
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
  `),customElements.define("tiny-toolbar",Toolbar);
