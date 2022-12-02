import { LitElement, html, css as css } from 'lit';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/range/range.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';

export class Settings extends LitElement {
    static styles = css`
        *,
        *::after,
        *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        }

        sl-dialog {
            --width: 70vw;
        }

        sl-tab-group {
            height: 30vh;
        }

        .panel {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }

        .switch {
            margin: 10px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .switch-title {
            width: 80%;
        }

        .select-title {
            width: 50%;
            margin: auto;
        }

        sl-select {
            width: 50%;
        }

        sl-range {
            margin: 10px;
        }
    `;

    static get properties() {
        return {
            renderingType : {type: String, reflectToAttribute: true, attribute: true},
            desynchronizedEnabled : {type: Boolean, reflectToAttribute: true, attribute: true},
            pointerRawUpdateEnabled : {type: Boolean, reflectToAttribute: true, attribute: true},
            pressureEventsEnabled : {type: Boolean, reflectToAttribute: true, attribute: true},
            predictedEventsEnabled : {type: Boolean, reflectToAttribute: true, attribute: true},
            predictedEventsHighlightEnabled : {type: Boolean, reflectToAttribute: true, attribute: true},
            predictedType : {type: String, reflectToAttribute: true, attribute: true},
            numOfPredictionPoints : {type: Number, reflectToAttribute: true, attribute: true},
            coalescedEventsEnabled : {type: Boolean, reflectToAttribute: true, attribute: true},
            drawPointsOnlyEnabled : {type: Boolean, reflectToAttribute: true, attribute: true}};
    }

    set renderingType(renderingType) {
        let oldRenderingType = this._renderingType;
        this._renderingType = renderingType;
        let event = new CustomEvent('renderingType-changed', {
            detail: { renderingType: renderingType },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
        this.requestUpdate('renderingType', oldRenderingType);
    }

    get renderingType() { return this._renderingType; }

    set desynchronizedEnabled(desynchronizedEnabled) {
        let oldDesynchronizedEnabled = this._desynchronizedEnabled;
        this._desynchronizedEnabled = desynchronizedEnabled;
        let event = new CustomEvent('desynchronizedEnabled-changed', {
            detail: { desynchronizedEnabled: desynchronizedEnabled },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
        this.requestUpdate('desynchronizedEnabled', oldDesynchronizedEnabled);
    }

    get desynchronizedEnabled() { return this._desynchronizedEnabled; }

    set pointerRawUpdateEnabled(value) {
        let oldPref = this._pointerRawUpdateEnabled;
        this._pointerRawUpdateEnabled = value;
        let event = new CustomEvent('pointerRawUpdateEnabled-changed', {
            detail: { pointerRawUpdateEnabled: value },
            bubbles: true,
            composed: true 
        });
        this.dispatchEvent(event);
        this.requestUpdate('pointerRawUpdateEnabled', oldPref);
    }
    
    get pointerRawUpdateEnabled() { return this._pointerRawUpdateEnabled; }

    set pressureEventsEnabled(value) {
        let oldPref = this._pressureEventsEnabled;
        this._pressureEventsEnabled = value;
        let event = new CustomEvent('pressureEventsEnabled-changed', {
            detail: { pressureEventsEnabled: value },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
        this.requestUpdate('pressureEventsEnabled', oldPref);
    }
    
    get pressureEventsEnabled() { return this._pressureEventsEnabled; }

    set predictedEventsEnabled(value) {
        let oldPref = this._predictedEventsEnabled;
        this._predictedEventsEnabled = value;
        let event = new CustomEvent('predictedEventsEnabled-changed', {
            detail: { predictedEventsEnabled: value },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
        this.requestUpdate('predictedEventsEnabled', oldPref);
    }
    
    get predictedEventsEnabled() { return this._predictedEventsEnabled; }

    set predictedEventsHighlightEnabled(value) {
        let oldPref = this._predictedEventsHighlightEnabled;
        this._predictedEventsHighlightEnabled = value;
        let event = new CustomEvent('predictedEventsHighlightEnabled-changed', {
            detail: { predictedEventsHighlightEnabled: value },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
        this.requestUpdate('predictedEventsHighlightEnabled', oldPref);
    }
    
    get predictedEventsHighlightEnabled() { return this._predictedEventsHighlightEnabled; }

    set predictionType(predictionType) {
        let oldPredictionType = this._predictionType;
        this._predictionType = predictionType;
        let event = new CustomEvent('predictionType-changed', {
            detail: { predictionType: predictionType },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
        this.requestUpdate('predictionType', oldPredictionType);
    }
    
    get predictionType() { return this._predictionType; }

    set numOfPredictionPoints(points) {
        let oldPoints = this._numOfPredictionPoints;
        this._numOfPredictionPoints = points;
        let event = new CustomEvent('numOfPredictionPoints-changed', {
            detail: { numOfPredictionPoints: points },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
        this.requestUpdate('numOfPredictionPoints', oldPoints);
    }
    
    get numOfPredictionPoints() { return this._numOfPredictionPoints; }

    set coalescedEventsEnabled(value) {
        let oldPref = this._coalescedEventsEnabled;
        this._coalescedEventsEnabled = value;
        let event = new CustomEvent('coalescedEventsEnabled-changed', {
            detail: {
                coalescedEventsEnabled: value,
                bubbles: true,
                composed: true
            }
        });
        this.dispatchEvent(event);
        this.requestUpdate('coalescedEventsEnabled', oldPref);
    }
    
    get coalescedEventsEnabled() { return this._coalescedEventsEnabled; }

    set drawPointsOnlyEnabled(value) {
        let oldPref = this._drawPointsOnlyEnabled;
        this._drawPointsOnlyEnabled = value;
        let event = new CustomEvent('drawPointsOnlyEnabled-changed', {
            detail: { drawPointsOnlyEnabled: value },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
        this.requestUpdate('drawPointsOnlyEnabled', oldPref);
    }
    
    get drawPointsOnlyEnabled() { return this._drawPointsOnlyEnabled; }

    show() {
        this._dialog.show();
    }

    _triggerPropertyUpdate() {
        // update all properties that changed for the new canvas
        this.desynchronizedEnabled = this.desynchronizedEnabled;
        this.pointerRawUpdateEnabled = this.pointerRawUpdateEnabled;
        this.pressureEventsEnabled = this.pressureEventsEnabled;
        this.predictedEventsEnabled = this.predictedEventsEnabled;
        this.predictedEventsHighlightEnabled = this.predictedEventsHighlightEnabled;
        this.predictionType = this.predictionType;
        this.numOfPredictionPoints = this.numOfPredictionPoints;
        this.coalescedEventsEnabled = this.coalescedEventsEnabled;
        this.drawPointsOnlyEnabled = this.drawPointsOnlyEnabled;
    }

    _renderingTypeModeChanged() {
        this.renderingType = this._renderingModeSelect.value;
        this._triggerPropertyUpdate();
    }

    _desynchronizedSwitchChanged() {
        this.desynchronizedEnabled = this._desynchronizedSwitch.checked;
    }

    _isPointerRawUpdateSupported() {
        return (typeof this.onpointerrawupdate !== 'undefined');
    }

    _pointerRawSwitchChanged() {
        this.pointerRawUpdateEnabled = this._pointerRawSwitch.checked;
        if (this._pointerRawSwitch.checked) {
            // enabling pointerrawupdate will not work with predictedEvents
            this.predictedEventsEnabled = this._predictionSwitch.checked = false;
            this.predictedEventsHighlightEnabled = this._predictionHighlightSwitch.checked = false;
            this._predictionModeSelect.disabled = this._predictionPointsRange.disabled = !this._predictionSwitch.checked;
        }
    }

    _drawPointsOnlyChanged() {
        this.drawPointsOnlyEnabled = this._drawPointsSwitch.checked;
    }

    _coalescedEventsSwitchChanged() {
        this.coalescedEventsEnabled = this._coalescedEventsSwitch.checked;
    }

    _pressureEventsSwitchChanged() {
        this.pressureEventsEnabled = this._penPressureSwitch.checked;
    }

    _predictedEventsSwitchChanged() {
        this.predictedEventsEnabled = this._predictionSwitch.checked;
        this._predictionHighlightSwitch.disabled = !this._predictionSwitch.checked;
        if (this._predictionSwitch.checked) {
            // enabling predictedEvents will not work with pointerrawupdate
            this.pointerRawUpdateEnabled = this._pointerRawSwitch.checked = false;
        } else {
            this.predictedEventsHighlightEnabled = this._predictionHighlightSwitch.checked = false;
        }
        this._predictionModeSelect.disabled = this._predictionPointsRange.disabled = !this._predictionSwitch.checked;
    }

    _predictedEventsHighlightSwitchChanged() {
        this.predictedEventsHighlightEnabled = this._predictionHighlightSwitch.checked;
    }

    _predictionTypeSwitchChanged() {
        this.predictionType = this._predictionModeSelect.value;
    }

    _predictionPointsRangeChanged() {
        this.numOfPredictionPoints = this._predictionPointsRange.value;
    }

    firstUpdated() {
        this._dialog = this.shadowRoot.querySelector('#dialog');
        const closeButton = this._dialog.querySelector('sl-button[slot="footer"]');
        closeButton.addEventListener('click', () => this._dialog.hide());

        // Store all the UX settings elements.
        this._renderingModeSelect = this.shadowRoot.querySelector('#rendering-mode-select');
        this._desynchronizedSwitch = this.shadowRoot.querySelector('#desynchronized-switch');
        this._drawPointsSwitch = this.shadowRoot.querySelector('#draw-points-switch');
        this._pointerRawSwitch = this.shadowRoot.querySelector('#pointerraw-switch');
        this._coalescedEventsSwitch = this.shadowRoot.querySelector('#coalesced-switch');
        this._penPressureSwitch = this.shadowRoot.querySelector('#pen-pressure-switch');
        this._predictionSwitch = this.shadowRoot.querySelector('#predictions-switch');
        this._predictionHighlightSwitch = this.shadowRoot.querySelector('#predictions-highlight-switch');
        this._predictionModeSelect = this.shadowRoot.querySelector('#prediction-mode-select');
        this._predictionPointsRange = this.shadowRoot.querySelector('#prediction-points-range');

        this.desynchronizedEnabled = this._desynchronizedSwitch.checked = true;
        this.predictedEventsEnabled = this._predictionSwitch.checked = true;
        this.predictedEventsHighlightEnabled = this._predictionHighlightSwitch.checked = false;
        this.pressureEventsEnabled = this._penPressureSwitch.checked = true;
        this.coalescedEventsEnabled = this._coalescedEventsSwitch.checked = true;
        if (!this._isPointerRawUpdateSupported())
            this._pointerRawSwitch.disabled = true;
        this._triggerPropertyUpdate();
    }

    constructor() {
        super();
        this._desynchronizedEnabled = false;
        this._drawingPreferencesCheckbox = false;
        this._pointerRawUpdateEnabled = false;
        this._pressureEventsEnabled = false;
        this._predictedEventsEnabled = false;
        this._predictedEventsHighlightEnabled = false;
        this._predictionType = "custom";
        this._coalescedEventsEnabled = false;
        this._drawPointsOnlyEnabled = false;
        this._numOfPredictionPoints = 1;
    }

    render() {
        return html`
        <sl-dialog label="Preferences" id="dialog">
            <sl-tab-group>
                <sl-tab slot="nav" panel="general">General</sl-tab>
                <sl-tab slot="nav" panel="pointer">Pointer Events</sl-tab>
                <sl-tab slot="nav" panel="prediction">Prediction</sl-tab>

                <sl-tab-panel name="general">
                    <div class="panel">
                        <div class="switch">
                            <div class="select-title">Rendering mode</div>
                            <sl-select id="rendering-mode-select" @sl-change="${this._renderingTypeModeChanged}" value="canvas">
                                <sl-menu-item value="canvas">Canvas 2D</sl-menu-item>
                                <sl-menu-item value="pathkit">Canvas 2D + PathKit</sl-menu-item>
                            </sl-select>
                        </div>
                        <div class="switch">
                            <div class="switch-title">Use desynchronized canvas</div>
                            <sl-switch id="desynchronized-switch" @sl-change="${this._desynchronizedSwitchChanged}"></sl-switch>
                        </div>
                        <div class="switch">
                            <div class="switch-title">Only draw points</div>
                            <sl-switch id="draw-points-switch" @sl-change="${this._drawPointsOnlyChanged}"></sl-switch>
                        </div>
                    </div>
                </sl-tab-panel>
                <sl-tab-panel name="pointer">
                    <div class="panel">
                        <div class="switch">
                            <div class="switch-title">Turn on pointerraw update</div>
                            <sl-switch id="pointerraw-switch" @sl-change="${this._pointerRawSwitchChanged}"></sl-switch>
                        </div>
                        <div class="switch">
                            <div class="switch-title">Use coalesced events</div>
                            <sl-switch id="coalesced-switch" @sl-change="${this._coalescedEventsSwitchChanged}"></sl-switch>
                        </div>
                        <div class="switch">
                            <div class="switch-title">Use pen pressure</div>
                            <sl-switch id="pen-pressure-switch" @sl-change="${this._pressureEventsSwitchChanged}"></sl-switch>
                        </div>
                    </div>
                </sl-tab-panel>
                <sl-tab-panel name="prediction">
                    <div class="panel">
                        <div class="switch">
                            <div class="switch-title">Turn on pointer events predictions</div>
                            <sl-switch id="predictions-switch" @sl-change="${this._predictedEventsSwitchChanged}"></sl-switch>
                        </div>
                        <div class="switch">
                            <div class="switch-title">Highlight pointer events predictions</div>
                            <sl-switch id="predictions-highlight-switch" @sl-change="${this._predictedEventsHighlightSwitchChanged}"></sl-switch>
                        </div>
                        <div class="switch">
                            <div class="select-title">Prediction mode</div>
                            <sl-select id="prediction-mode-select" @sl-change="${this._predictionTypeSwitchChanged}" value="custom">
                                <sl-menu-item value="custom">Custom (Kalman Filter)</sl-menu-item>
                                <sl-menu-item value="browser">Browser Prediction</sl-menu-item>
                            </sl-select>
                        </div>
                        <sl-range id="prediction-points-range" label="Number of predictions points" min="1" max="10" value="1" step="1" @sl-change="${this._predictionPointsRangeChanged}"></sl-range>
                    </div>
                </sl-tab-panel>
            </sl-tab-group>
        <sl-button slot="footer" variant="primary">Close</sl-button>
        </sl-dialog>
        `;
    }
}

customElements.define('settings-dialog', Settings);
