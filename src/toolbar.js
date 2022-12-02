import { LitElement, html, css as css } from 'lit';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/color-picker/color-picker.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';

import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';

export class DrawingTool extends LitElement {
    static styles = css`
        .selected sl-icon-button::part(base) {
            background-color: black;
        }

        .selected sl-icon-button::part(base):hover,
        sl-icon-button::part(base):focus {
            border: solid 1px transparent;
        }

        sl-icon-button::part(base) {
            color: #969696;
            font-size: 25px;
            border: solid 1px transparent;
        }

        sl-icon-button::part(base):hover,
        sl-icon-button::part(base):focus {
            border: solid 1px black;
        }

        sl-icon-button::part(base):active {
            color: #d4d4d4;
        }
    `;

    static get properties() {
        return {
            selected : {type: Boolean, reflectToAttribute: true, attribute: true},
            name : {type: String, reflectToAttribute: true, attribute: true},
            label : {type: String, reflectToAttribute: true, attribute: true},
            library : {type: String, reflectToAttribute: true, attribute: true},
        };
    }

    set selected(selected) {
        let oldSelected = this._selected;
        this._selected = selected;
        this.requestUpdate('selected', oldSelected);
    }
    
    get selected() { return this._selected; }

    set name(name) {
        let oldName = this._name;
        this._name = name;
        this.requestUpdate('name', oldName);
    }
    
    get name() { return this._name; }

    set label(label) {
        let oldLabel = this._label;
        this._label = label;
        this.requestUpdate('label', oldLabel);
    }
    
    get label() { return this._label; }

    set library(library) {
        let oldLibrary = this._library;
        this._library = library;
        this.requestUpdate('library', this._library);
    }
    
    get library() { return this._library; }
    
    constructor() {
        super();
        this._selected = false;
        this._label = '';
        this._name = '';
        this._library = 'default';
    }

    render() {
        return html`
            <div class="${this.selected? "selected" : ""}">
                <sl-icon-button 
                    library="${this.library}"
                    name="${this.name}" label="${this.label}">
                </sl-icon-button>
            </div>`;
    }
}

customElements.define('drawing-button', DrawingTool);

export class DrawingToolbar extends LitElement {
    static styles = css`
        :host {
            border-right: solid 1px black;
            border-top: solid 1px black;
        }

        *,
        *::after,
        *::before {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
        }

        .content {
            height: 90vh;
            display: flex;
            flex-direction: column;
            margin-left: 4px;
            margin-right: 4px;
            margin-top: 10px;
            align-items: center;
            justify-content: space-between;
        }

        sl-color-picker {
            margin-top: 10px;
        }

        sl-color-picker::part(trigger) {
            border-radius: 0px;
        }

        sl-dropdown {
            margin-top: 10px;
        }

        .line-width-panel {
            border: solid 2px black;
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            background-color: white;
            text-align: center;
            padding-bottom: 10px;
        }

        .line-width-title {
            background-color: #313030;
            color: #cbcbcb;
            font-size: 20px;
            padding: 10px;
        }

        sl-range {
            height: 100%;
            margin: 10px;
        }

        .expand {
            flex-grow: 1;
        }

        .stylus-visual {
            height: 100%;
            grid-row-start: 1;
            grid-row-end: span 4;
        }

        .pen-customizations-actions {
            height: 80%;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 10% auto;
        }

        #drawer {
            --size: 60vw;
        }

        #drawer::part(close-button__base) {
            background-color: #525151;
            border: solid 1px #000000;
            color: #a2a2a2;
        }

        #drawer::part(close-button__base):hover {
            color: #ececec;
            border: solid 1px #ececec;
        }

        #drawer::part(header) {
            background-color: #313030;
            color: white;
        }

        .drawer-content {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
        
        .color-box {
            border-radius: 4px;
            width: 50px;
            height: 50px;
            border-color: solid 2px black;
            background-color: black;
        }

        .category {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .arrows {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        .title {
            font-size: 3vw;
            text-align: center;
            text-decoration: underline;
            padding-left: 10px;
            padding-right: 10px;
        }

        .value {
            font-weight: bold;
        }

        .category-title {
            text-decoration: underline;
            margin-bottom: 10px;
        }

        sl-button {
            width: 100px;
        }

        sl-icon {
            font-size: 40px;
        }

        sl-button.button::part(base) {
            background-color: #525151;
            border-color: white;
            color: #ffffff;
            margin-top: 10px;
        }

        sl-button:not([disabled]).button::part(base):hover {
            color: #ececec;
            border-color: black;
        }

        .border {
            border-width: 0px 6px 0px 6px;
            border-color: black;
            border-style: solid;
        }

        .border-top {
            border-top: solid 6px black;
            border-radius: 4px 4px 0px 0px;
        }

        .border-bottom {
            border-bottom: solid 6px black;
            border-radius: 0px 0px 4px 4px;
        }

        .draw-with-preferred {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .arrow {
            height: 50px;
            margin-top: 10px;
        }
    `;

    static get properties() {
        return {
            currentLineStyle : { type: String, reflectToAttribute: true, attribute: true },
            currentLineColor : { type: String, reflectToAttribute: true, attribute: true },
            currentLineWidth : { type: Number, reflectToAttribute: true, attribute: true },
        };
    }

    firstUpdated() {
        this._colorPicker = this.shadowRoot.querySelector('#color-picker');
        this._drawer = this.shadowRoot.querySelector('#drawer');
        this._lineWidthRange = this.shadowRoot.querySelector('#line-width-range');
        this._penCustomizationsButton = this.shadowRoot.querySelector('#pen-customizations-button');
        if (this._isPenCustomizationsSupported()) {
            console.log('Pen Customizations are supported.');
        } else {
            console.log('Pen Customizations are not supported.');
            this._penCustomizationsButton.style.display = 'none';
        }
    }

    _styleSelected(style) {
        this.currentLineStyle = style;
        switch (style) {
            case 'ink':
                this.currentLineWidth = 6;
                break;
            case 'pencil':
                this.currentLineWidth = 1;
                break;
            case 'marker':
                this.currentLineWidth = 12;
                break;
            case 'highlighter':
                this.currentLineWidth = 24;
                this.currentLineColor = '#FFFF00';
                break;
            case 'brush':
                this.currentLineWidth = 14;
                break;
            default:
                console.log('Unsupported pen style ', style);
        } 
    }

    _colorSelected(color) {
        this.currentLineColor = this._colorPicker.value;
    }

    set currentLineColor(color) {
        let oldColor = this._currentLineColor;
        this._currentLineColor = color;
        this._colorPicker.value = color;
        let event = new CustomEvent('lineColor-changed', {
            detail: { lineColor: color},
            bubbles: true,
            composed: true });
        this.dispatchEvent(event);
        this.requestUpdate('currentLineColor', oldColor);
    }
    
    get currentLineColor() { return this._currentLineColor; }

    set currentLineStyle(style) {
        let oldStyle = this._currentLineStyle;
        this._currentLineStyle = style;
        let event = new CustomEvent('lineStyle-changed', {
            detail: { lineStyle: style},
            bubbles: true,
            composed: true 
        });
        this.dispatchEvent(event);
        this.requestUpdate('currentLineStyle', oldStyle);
    }
    
    get currentLineStyle() { return this._currentLineStyle; }

    set currentLineWidth(width) {
        let oldWidth = this._currentLineWidth;
        this._currentLineWidth = width;
        this._lineWidthRange.value = width;
        let event = new CustomEvent('lineWidth-changed', {
            detail: { lineWidth: width},
            bubbles: true,
            composed: true });
        this.dispatchEvent(event);
        this.requestUpdate('currentLineWidth', oldWidth);
    }
    
    get currentLineWidth() { return this._currentLineWidth; }

    _lineWidthChanged() {
        this.currentLineWidth = this._lineWidthRange.value;
    }

    _isPenCustomizationsSupported() {
        let event = new PointerEvent('pointerdown');
        return (typeof event.penCustomizationsDetails !== 'undefined');
    }

    constructor() {
        super();
        this._currentLineStyle = 'pencil';
        this._currentLineColor = '#000000';
        this._currentLineWidth = 1;
        registerIconLibrary('my-icons', {
            resolver: name => `icons/${name}.svg`,
            mutator: svg => svg.setAttribute('fill', 'currentColor')
        });
    }

    render() {
        return html`
            <div class="content">
                <drawing-button name="pencil" label="pencil"
                    ?selected="${this.currentLineStyle === 'pencil'}"
                    @pointerdown="${() => this._styleSelected('pencil')}">
                </drawing-button>
                <drawing-button name="pen" label="pen"
                    ?selected="${this.currentLineStyle === 'ink'}"
                    @pointerdown="${() => this._styleSelected('ink')}">
                </drawing-button>
                <drawing-button name="brush" label="brush"
                    ?selected="${this.currentLineStyle === 'brush'}"
                    @pointerdown="${() => this._styleSelected('brush')}">
                </drawing-button>
                <drawing-button name="marker" library="my-icons"
                    ?selected="${this.currentLineStyle === 'marker'}"
                    @pointerdown="${() => this._styleSelected('marker')}">
                </drawing-button>
                <drawing-button library="my-icons" name="highlighter"
                    ?selected="${this.currentLineStyle === 'highlighter'}"
                    @pointerdown="${() => this._styleSelected('highlighter')}">
                </drawing-button>
                <sl-color-picker
                    id="color-picker"
                    format="hex" size="small" label="Select a color" value="#000000"
                    @sl-change="${() => this._colorSelected()}">
                </sl-color-picker>
                <sl-dropdown placement="right-start" distance=10>
                    <drawing-button slot="trigger" caret class="line-width-button" 
                            name="border-width" label="drawing line width">
                    </drawing-button>
                    <div class="line-width-panel">
                        <div class="line-width-title"> Drawing Line Width</div>
                        <sl-range id="line-width-range" min="1" max="50" 
                            @sl-change="${() => this._lineWidthChanged()}">
                        </sl-range>
                        Current width: ${this._currentLineWidth} px
                    </div>
                </sl-dropdown>
                <div class="expand"></div>
                <drawing-button id="pen-customizations-button"
                    library="my-icons" name="pen_customizations"
                    @pointerdown="${() => this._drawer.show()}">
                </drawing-button>
                <sl-drawer label="Stylus Customizations" id="drawer" placement="start">
                    <div class="drawer-content">
                        <div class="pen-customizations-actions">
                            <img src="icons/pen_customizations_visual.svg" 
                                alt="picture of a stylus with a memory" class="stylus-visual"/>
                            <div class="title border border-top">Stylus</div>
                            <div class="title"></div>
                            <div class="title border border-top">Editor</div>
                            <div class="category border">
                                <div class="category-title">Preferred Color</div>
                                <div class="color-box" style="background-color: ${this.currentLineColor}"></div>
                            </div>
                            <div class="category">
                                <sl-tooltip content="Send preferred color to stylus">
                                    <sl-button class="button">
                                        <sl-icon library="my-icons" name="left-arrow" label="Send preferred color to stylus"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                                <sl-tooltip content="Read preferred color from stylus">
                                    <sl-button class="button">
                                        <sl-icon library="my-icons" name="right-arrow" label="Read preferred color from stylus"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                            </div>
                            <div class="category border">
                                <div class="category-title">Drawing Color</div>
                                <div class="color-box" style="background-color: ${this.currentLineColor}"></div>
                            </div>
                            <div class="category border">
                                <div class="category-title">Preferred Width</div>
                                <div class="value">3px</div>
                            </div>
                            <div class="category">
                                <sl-tooltip content="Send preferred width to stylus">
                                    <sl-button class="button">
                                        <sl-icon library="my-icons" name="left-arrow" label="Send preferred width to stylus"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                                <sl-tooltip content="Read preferred width from stylus">
                                    <sl-button class="button">
                                        <sl-icon library="my-icons" name="right-arrow" label="Read preferred width from stylus"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                            </div>
                            <div class="category border">
                                <div class="category-title">Drawing Width</div>
                                <div class="value">${this.currentLineWidth} px</div>
                            </div>
                            <div class="category border border-bottom">
                                <div class="category-title">Preferred Style</div>
                                <div class="value">${this.currentTool}</div>
                            </div>
                            <div class="category">
                                <sl-tooltip content="Send preferred style to stylus">
                                    <sl-button class="button">
                                        <sl-icon library="my-icons" name="left-arrow" label="Send preferred style to stylus"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                                <sl-tooltip content="Read preferred style from stylus">
                                    <sl-button class="button">
                                        <sl-icon library="my-icons" name="right-arrow" label="Read preferred style from stylus"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                            </div>
                            <div class="category border border-bottom">
                                <div class="category-title">Drawing Style</div>
                                <div class="value">${this.currentTool}</div>
                            </div>
                        </div>
                        <sl-divider></sl-divider>
                        <div class="draw-with-preferred">
                            <div class="draw-preferred-switch-title">Automatically load customizations from stylus and set them in the editor (when possible)</div>
                            <sl-switch id="draw-preferred-switch" @sl-change=""></sl-switch>
                        </div>
                    </div>
                </sl-drawer>
            </div>
        `;
    }
}

customElements.define('drawing-toolbar', DrawingToolbar);