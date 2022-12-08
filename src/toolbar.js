import { LitElement, html, css as css } from 'lit';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/color-picker/color-picker.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import { isPenCustomizationsSupported } from './utils.js'

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
            height: 33%;
        }

        .color-text {
            height: 33%;
            margin-top: 10px;
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

        #read-stylus-panel {
            display: none;
            grid-row: span 3;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    `;

    static get properties() {
        return {
            currentLineStyle : { type: String, reflectToAttribute: true, attribute: true },
            currentLineColor : { type: String, reflectToAttribute: true, attribute: true },
            currentLineWidth : { type: Number, reflectToAttribute: true, attribute: true },
            preferredStyle : { type: String, reflectToAttribute: true, attribute: true },
            preferredColor : { type: String, reflectToAttribute: true, attribute: true },
            preferredWidth : { type: Number, reflectToAttribute: true, attribute: true },
            drawWithCustomizations : { type: Boolean, reflectToAttribute: true, attribute: true },
        };
    }

    firstUpdated() {
        this._colorPicker = this.shadowRoot.querySelector('#color-picker');
        this._drawer = this.shadowRoot.querySelector('#drawer');
        this._lineWidthRange = this.shadowRoot.querySelector('#line-width-range');
        this._penCustomizationsButton = this.shadowRoot.querySelector('#pen-customizations-button');
        this._customizationsSwitch = this.shadowRoot.querySelector('#draw-customizations-switch');
        if (isPenCustomizationsSupported()) {
            console.log('Pen Customizations are supported.');
        } else {
            console.log('Pen Customizations are not supported.');
            this._penCustomizationsButton.style.display = 'none';
        }
        this._readStylusPanel = this.shadowRoot.querySelector('#read-stylus-panel');
    }

    _styleSelected(style, event) {
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
        if (this._drawWithCustomizations) {
            if(this.preferredStyle != this.currentLineStyle)
                this._writePreferredStyle(event);
            this._updateLineColorCustomization(event);
            this._updateLineWidthCustomization(event);
        }
    }

    _colorSelected(color) {
        this.currentLineColor = this._colorPicker.value.toUpperCase();
    }

    _updateLineColorCustomization = async (event) => {
        if (this._drawWithCustomizations && this.preferredColor != this.currentLineColor) {
            await this._writePreferredColor(event);
            // In case the value was adjusted.
            this.currentLineColor = this.preferredColor;
        }
    }

    set currentLineColor(color) {
        let oldColor = this._currentLineColor;
        this._currentLineColor = color;
        if(this._colorPicker.value != color)
            this._colorPicker.value = color;
        let event = new CustomEvent('lineColor-changed', {
            detail: { lineColor: color},
            bubbles: true,
            composed: true
        });
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
            composed: true
        });
        this.dispatchEvent(event);
        this.requestUpdate('currentLineWidth', oldWidth);
    }
    
    get currentLineWidth() { return this._currentLineWidth; }

    set preferredColor(color) {
        let oldColor = this._preferredColor;
        this._preferredColor = color;
        let event = new CustomEvent('preferredColor-changed', {
            detail: { preferredColor: color},
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
        this.requestUpdate('preferredColor', oldColor);
    }

    get preferredColor() { return this._preferredColor; }

    set preferredStyle(style) {
        let oldStyle = this._preferredStyle;
        this._preferredStyle = style;
        let event = new CustomEvent('preferredStyle-changed', {
            detail: { preferredStyle: style},
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
        this.requestUpdate('preferredStyle', oldStyle);
    }

    get preferredStyle() { return this._preferredStyle; }

    set preferredWidth(width) {
        let oldWidth = this._preferredWidth;
        this._preferredWidth = width;
        let event = new CustomEvent('preferredWidth-changed', {
            detail: { preferredWidth: width},
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
        this.requestUpdate('preferredWidth', oldWidth);
    }

    get preferredWidth() { return this._preferredWidth; }

    set drawWithCustomizations(drawWithCustomizations) {
        let oldDrawWithCustomizations = this._drawWithCustomizations;
        this._drawWithCustomizations = drawWithCustomizations;
        let event = new CustomEvent('drawWithCustomizations-changed', {
            detail: { drawWithCustomizations: drawWithCustomizations},
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
        this.requestUpdate('drawWithCustomizations', oldDrawWithCustomizations);
    }

    get drawWithCustomizations() { return this._drawWithCustomizations; }

    _lineWidthChanged() {
        this.currentLineWidth = this._lineWidthRange.value;
    }

    _updateLineWidthCustomization(event) {
        if (this._drawWithCustomizations)
            this._writePreferredWidth(event);
    }

    _readAndSetPreferredColor = async (event) => {
        try {
            this.preferredColor = await event.penCustomizationsDetails.getPreferredInkingColor();
            this.currentLineColor = this.preferredColor;
        } catch (error) {
            this._emitErrorToast('Couldn\'t read the preferred color from the stylus.');
        }
    }

    _readAndSetPreferredStyle = async (event) => {
        try {
            this.preferredStyle = await event.penCustomizationsDetails.getPreferredInkingStyle();
            this.preferredStyle = this.preferredStyle.toLowerCase();
            this.currentLineStyle = this.preferredStyle;
        } catch (error) {
            this._emitErrorToast('Couldn\'t read the preferred style from the stylus.');
        }
    }

    _readAndSetPreferredWidth = async (event) => {
        try {
            this.preferredWidth = await event.penCustomizationsDetails.getPreferredInkingWidth();
            this.currentLineWidth = this.preferredWidth;
        } catch (error) {
            this._emitErrorToast('Couldn\'t read the preferred width from the stylus.');
        }
    }

    _writePreferredColor = async (event) => {
        try {
            this.preferredColor = await event.penCustomizationsDetails.setPreferredInkingColor(this.currentLineColor);
            if (this.preferredColor != this.currentLineColor) {
                this._emitWarningToast('The color was written successfully but was adjusted to work with the pen.');
            } else {
                this._emitSuccessToast('The current color was written successfully.');
            }
        } catch (error) {
            console.log(error)
            this._emitErrorToast('The current color could not be written on the stylus.');
        }
    }

    _writePreferredWidth = async (event) => {
        try {
            this.preferredWidth = await event.penCustomizationsDetails.setPreferredInkingWidth(this.currentLineWidth);
            this._emitSuccessToast('The current width was written successfully.');
        } catch (error) {
            this._emitErrorToast('The current width could not be written on the stylus.');
        }
    }

    _writePreferredStyle = async (event) => {
        try {
            let preferredStyle = await event.penCustomizationsDetails.setPreferredInkingStyle(this.currentLineStyle.toUpperCase());
            this.preferredStyle = preferredStyle.toLowerCase();
            this._emitSuccessToast('The current style was written successfully.');
        } catch (error) {
            this._emitErrorToast('The current style could not be written on the stylus.');
        }
    }

    // Always escape HTML for text arguments!
    _escapeHtml(html) {
        const div = document.createElement('div');
        div.textContent = html;
        return div.innerHTML;
    }

    _createToastNotification(message, variant = 'success', icon = 'check2-circle', duration = 4000) {
        const alert = Object.assign(document.createElement('sl-alert'), {
            variant,
            closable: true,
            duration: duration,
            innerHTML: `
                <sl-icon name="${icon}" slot="icon"></sl-icon>
                ${this._escapeHtml(message)}
            `
        });
        this.shadowRoot.append(alert);
        return alert.toast();
    }

    _emitSuccessToast(message) {
        this._createToastNotification(message);
    }

    _emitWarningToast(message) {
        this._createToastNotification(
            message,
            'warning',
            'exclamation-triangle');
    }

    _emitErrorToast(message) {
        this._createToastNotification(
            message,
            'danger',
            'exclamation-octagon');
    }

    _readStylusCustomizations = async (event, shouldShowError = false) => {
        // Let's read the features before showing the panel.
        let preferredCells = this.shadowRoot.querySelectorAll('.preferred');
        try {
            const preferredColor = await event.penCustomizationsDetails.getPreferredInkingColor();
            const preferredStyle = await event.penCustomizationsDetails.getPreferredInkingStyle();
            const preferredWidth = await event.penCustomizationsDetails.getPreferredInkingWidth();
            // If all the readings succeeded then we can set them.
            this.preferredColor = preferredColor;
            this.preferredStyle = preferredStyle.toLowerCase();
            this.preferredWidth = preferredWidth;
            this._readStylusPanel.style.display = 'none';
            preferredCells.forEach((element) => {
                element.style.display = 'flex';
            });
        } catch (error) {
            // We couldn't read the attributes, let's show a panel with a button
            // to let the user try again.
            this._readStylusPanel.style.display = 'flex';
            preferredCells.forEach((element) => {
                element.style.display = 'none';
            });
            if (shouldShowError) {
                this._emitErrorToast('Could not read the customizations from the stylus.');
            }
        }
    }

    _drawWithCustomizationsSwitchChanged() {
        this.drawWithCustomizations = this._customizationsSwitch.checked;
        if (this.drawWithCustomizations) {
            this.currentLineColor = this.preferredColor;
            this.currentLineStyle = this.preferredStyle;
            this.currentLineWidth = this.preferredWidth;
        }
    }

    _showStylusCustomizationsDrawer = async (event) => {
        this._readStylusCustomizations(event, false);
        this._drawer.show();
    }

    constructor() {
        super();
        this._currentLineStyle = 'pencil';
        this._currentLineColor = '#000000';
        this._currentLineWidth = 1;
        this._preferredWidth = 1;
        this._preferredColor = '#000000';
        this._preferredStyle = 'pencil';
        this._drawWithCustomizations = false;
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
                    @pointerdown="${(event) => this._styleSelected('pencil', event)}">
                </drawing-button>
                <drawing-button name="pen" label="pen"
                    ?selected="${this.currentLineStyle === 'ink'}"
                    @pointerdown="${(event) => this._styleSelected('ink', event)}">
                </drawing-button>
                <drawing-button name="brush" label="brush"
                    ?selected="${this.currentLineStyle === 'brush'}"
                    @pointerdown="${(event) => this._styleSelected('brush', event)}">
                </drawing-button>
                <drawing-button name="marker" library="my-icons"
                    ?selected="${this.currentLineStyle === 'marker'}"
                    @pointerdown="${(event) => this._styleSelected('marker', event)}">
                </drawing-button>
                <drawing-button library="my-icons" name="highlighter"
                    ?selected="${this.currentLineStyle === 'highlighter'}"
                    @pointerdown="${(event) => this._styleSelected('highlighter', event)}">
                </drawing-button>
                <sl-color-picker
                    id="color-picker"
                    format="hex" size="small" label="Select a color" value="#000000"
                    @sl-change="${() => this._colorSelected()}"
                    @pointerup="${(event) => this._updateLineColorCustomization(event)}">
                </sl-color-picker>
                <sl-dropdown placement="right-start" distance=10>
                    <drawing-button slot="trigger" caret class="line-width-button" 
                            name="border-width" label="drawing line width">
                    </drawing-button>
                    <div class="line-width-panel">
                        <div class="line-width-title"> Drawing Line Width</div>
                        <sl-range id="line-width-range" min="1" max="50" 
                            @sl-change="${() => this._lineWidthChanged()}"
                            @pointerup="${(event) => this._updateLineWidthCustomization(event)}">
                        </sl-range>
                        Current width: ${this.currentLineWidth} px
                    </div>
                </sl-dropdown>
                <div class="expand"></div>
                <drawing-button id="pen-customizations-button"
                    library="my-icons" name="pen_customizations"
                    @pointerdown="${(event) => this._showStylusCustomizationsDrawer(event)}">
                </drawing-button>
                <sl-drawer label="Stylus Customizations" id="drawer" placement="start">
                    <div class="drawer-content">
                        <div class="pen-customizations-actions">
                            <img src="icons/pen_customizations_visual.svg" 
                                alt="picture of a stylus with a memory" class="stylus-visual"/>
                            <div class="title border border-top">Stylus</div>
                            <div class="title"></div>
                            <div class="title border border-top">Editor</div>
                            <div id="read-stylus-panel" class="border border-bottom">
                                Read preferences from stylus
                                <sl-tooltip content="Read preferences from stylus">
                                    <sl-button class="button">
                                        <sl-icon
                                            name="arrow-clockwise" label="Read from stylus"
                                            @pointerdown="${(event) => this._readStylusCustomizations(event, true)}"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                            </div>
                            <div class="category border preferred">
                                <div class="category-title">Preferred Color</div>
                                <div class="color-box" style="background-color: ${this.preferredColor}"></div>
                                <div class="color-text">${this.preferredColor}</div>
                            </div>
                            <div class="category">
                                <sl-tooltip content="Send preferred color to stylus">
                                    <sl-button class="button" @pointerdown="${this._writePreferredColor}">
                                        <sl-icon library="my-icons" name="left-arrow" label="Send preferred color to stylus"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                                <sl-tooltip content="Read preferred color from stylus">
                                    <sl-button class="button" @pointerdown="${this._readAndSetPreferredColor}">
                                        <sl-icon library="my-icons" name="right-arrow" label="Read preferred color from stylus"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                            </div>
                            <div class="category border">
                                <div class="category-title">Drawing Color</div>
                                <div class="color-box" style="background-color: ${this.currentLineColor}"></div>
                                <div class="color-text">${this.currentLineColor}</div>
                            </div>
                            <div class="category border preferred">
                                <div class="category-title">Preferred Width</div>
                                <div class="value">${this._preferredWidth} px</div>
                            </div>
                            <div class="category">
                                <sl-tooltip content="Send preferred width to stylus">
                                    <sl-button class="button" @pointerdown="${this._writePreferredWidth}">
                                        <sl-icon library="my-icons" name="left-arrow" label="Send preferred width to stylus"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                                <sl-tooltip content="Read preferred width from stylus">
                                    <sl-button class="button" @pointerdown="${this._readAndSetPreferredWidth}">
                                        <sl-icon library="my-icons" name="right-arrow" label="Read preferred width from stylus"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                            </div>
                            <div class="category border">
                                <div class="category-title">Drawing Width</div>
                                <div class="value">${this.currentLineWidth} px</div>
                            </div>
                            <div class="category border border-bottom preferred">
                                <div class="category-title">Preferred Style</div>
                                <div class="value">${this._preferredStyle}</div>
                            </div>
                            <div class="category">
                                <sl-tooltip content="Send preferred style to stylus">
                                    <sl-button class="button" @pointerdown="${this._writePreferredStyle}">
                                        <sl-icon library="my-icons" name="left-arrow" label="Send preferred style to stylus"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                                <sl-tooltip content="Read preferred style from stylus">
                                    <sl-button class="button" @pointerdown="${this._readAndSetPreferredStyle}">
                                        <sl-icon library="my-icons" name="right-arrow" label="Read preferred style from stylus"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                            </div>
                            <div class="category border border-bottom">
                                <div class="category-title">Drawing Style</div>
                                <div class="value">${this.currentLineStyle}</div>
                            </div>
                        </div>
                        <sl-divider></sl-divider>
                        <div class="draw-with-preferred">
                            <div class="draw-preferred-switch-title">Automatically load customizations from stylus and set them in the editor (when possible)</div>
                            <sl-switch id="draw-customizations-switch" @sl-change="${this._drawWithCustomizationsSwitchChanged}"></sl-switch>
                        </div>
                    </div>
                </sl-drawer>
            </div>
        `;
    }
}

customElements.define('drawing-toolbar', DrawingToolbar);