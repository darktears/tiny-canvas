import{d as H,f as A,_ as j,q as p,p as l,e as I,b as J,h as K,c as L}from"../common/class-map-8fd0dd64.js";import{h as t,c as M}from"../common/lit-element-9c695caa.js";import{s as u}from"../common/style-map-e125dda0.js";import{F as N}from"../common/form-element-9f856d4a.js";import{o as v}from"../common/observer-306f3f70.js";/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function w(b){return b===void 0&&(b=window),O(b)?{passive:!0}:!1}function O(b){b===void 0&&(b=window);var c=!1;try{var a={get passive(){return c=!0,!1}},d=function(){};b.document.addEventListener("test",d,a),b.document.removeEventListener("test",d,a)}catch(e){c=!1}return c}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var B={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},C={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function D(b){return Boolean(b.document)&&typeof b.document.createElement==="function"}function P(b,c){if(D(b)&&c in B){var a=b.document.createElement("div"),d=B[c],e=d.standard,h=d.prefixed,i=e in a.style;return i?e:h}return c}function Q(b,c){if(D(b)&&c in C){var a=b.document.createElement("div"),d=C[c],e=d.standard,h=d.prefixed,i=d.cssProperty,f=i in a.style;return f?e:h}return c}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var R=function(){function b(c){c===void 0&&(c={}),this.adapter=c}return Object.defineProperty(b,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(b,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(b,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(b,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),b.prototype.init=function(){},b.prototype.destroy=function(){},b}();/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var m={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",HAS_TRACK_MARKER:"mdc-slider--display-markers",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete",DISABLE_TOUCH_ACTION:"mdc-slider--disable-touch-action"},o={ARIA_DISABLED:"aria-disabled",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",STEP_DATA_ATTR:"data-step",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",TRACK_SELECTOR:".mdc-slider__track"},x={PAGE_FACTOR:4};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var y=typeof window!=="undefined",z=y&&!!window.PointerEvent,E=z?["pointerdown"]:["mousedown","touchstart"],F=z?["pointerup"]:["mouseup","touchend"],S={mousedown:"mousemove",pointerdown:"pointermove",touchstart:"touchmove"},g={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",HOME:"Home",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp"},T=function(b){H(c,b);function c(a){var d=b.call(this,A(A({},c.defaultAdapter),a))||this;return d.savedTabIndex_=NaN,d.active_=!1,d.inTransit_=!1,d.isDiscrete_=!1,d.hasTrackMarker_=!1,d.handlingThumbTargetEvt_=!1,d.min_=0,d.max_=100,d.step_=0,d.value_=0,d.disabled_=!1,d.preventFocusState_=!1,d.thumbContainerPointerHandler_=function(){return d.handlingThumbTargetEvt_=!0},d.interactionStartHandler_=function(e){return d.handleDown_(e)},d.keydownHandler_=function(e){return d.handleKeydown_(e)},d.focusHandler_=function(){return d.handleFocus_()},d.blurHandler_=function(){return d.handleBlur_()},d.resizeHandler_=function(){return d.layout()},d}return Object.defineProperty(c,"cssClasses",{get:function(){return m},enumerable:!0,configurable:!0}),Object.defineProperty(c,"strings",{get:function(){return o},enumerable:!0,configurable:!0}),Object.defineProperty(c,"numbers",{get:function(){return x},enumerable:!0,configurable:!0}),Object.defineProperty(c,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){return},removeClass:function(){return},getAttribute:function(){return null},setAttribute:function(){return},removeAttribute:function(){return},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabIndex:function(){return 0},registerInteractionHandler:function(){return},deregisterInteractionHandler:function(){return},registerThumbContainerInteractionHandler:function(){return},deregisterThumbContainerInteractionHandler:function(){return},registerBodyInteractionHandler:function(){return},deregisterBodyInteractionHandler:function(){return},registerResizeHandler:function(){return},deregisterResizeHandler:function(){return},notifyInput:function(){return},notifyChange:function(){return},setThumbContainerStyleProperty:function(){return},setTrackStyleProperty:function(){return},setMarkerValue:function(){return},setTrackMarkers:function(){return},isRTL:function(){return!1}}},enumerable:!0,configurable:!0}),c.prototype.init=function(){var a=this;this.isDiscrete_=this.adapter.hasClass(m.IS_DISCRETE),this.hasTrackMarker_=this.adapter.hasClass(m.HAS_TRACK_MARKER),E.forEach(function(d){a.adapter.registerInteractionHandler(d,a.interactionStartHandler_),a.adapter.registerThumbContainerInteractionHandler(d,a.thumbContainerPointerHandler_)}),z&&this.adapter.addClass(m.DISABLE_TOUCH_ACTION),this.adapter.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_),this.adapter.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&this.getStep()===0&&(this.step_=1)},c.prototype.destroy=function(){var a=this;E.forEach(function(d){a.adapter.deregisterInteractionHandler(d,a.interactionStartHandler_),a.adapter.deregisterThumbContainerInteractionHandler(d,a.thumbContainerPointerHandler_)}),this.adapter.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.deregisterResizeHandler(this.resizeHandler_)},c.prototype.setupTrackMarker=function(){this.isDiscrete_&&this.hasTrackMarker_&&this.getStep()!==0&&this.adapter.setTrackMarkers(this.getStep(),this.getMax(),this.getMin())},c.prototype.layout=function(){this.rect_=this.adapter.computeBoundingRect(),this.updateUIForCurrentValue_()},c.prototype.getValue=function(){return this.value_},c.prototype.setValue=function(a){this.setValue_(a,!1)},c.prototype.getMax=function(){return this.max_},c.prototype.setMax=function(a){if(a<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=a,this.setValue_(this.value_,!1,!0),this.adapter.setAttribute(o.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()},c.prototype.getMin=function(){return this.min_},c.prototype.setMin=function(a){if(a>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=a,this.setValue_(this.value_,!1,!0),this.adapter.setAttribute(o.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()},c.prototype.getStep=function(){return this.step_},c.prototype.setStep=function(a){if(a<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&(typeof a!=="number"||a<1)&&(a=1),this.step_=a,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()},c.prototype.isDisabled=function(){return this.disabled_},c.prototype.setDisabled=function(a){this.disabled_=a,this.toggleClass_(m.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter.getTabIndex(),this.adapter.setAttribute(o.ARIA_DISABLED,"true"),this.adapter.removeAttribute("tabindex")):(this.adapter.removeAttribute(o.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter.setAttribute("tabindex",String(this.savedTabIndex_)))},c.prototype.handleDown_=function(a){var d=this;if(this.disabled_)return;this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);var e=function(f){d.handleMove_(f)},h=S[a.type],i=function(){d.handleUp_(),d.adapter.deregisterBodyInteractionHandler(h,e),F.forEach(function(f){return d.adapter.deregisterBodyInteractionHandler(f,i)})};this.adapter.registerBodyInteractionHandler(h,e),F.forEach(function(f){return d.adapter.registerBodyInteractionHandler(f,i)}),this.setValueFromEvt_(a)},c.prototype.handleMove_=function(a){a.preventDefault(),this.setValueFromEvt_(a)},c.prototype.handleUp_=function(){this.setActive_(!1),this.adapter.notifyChange()},c.prototype.getClientX_=function(a){return a.targetTouches&&a.targetTouches.length>0?a.targetTouches[0].clientX:a.clientX},c.prototype.setValueFromEvt_=function(a){var d=this.getClientX_(a),e=this.computeValueFromClientX_(d);this.setValue_(e,!0)},c.prototype.computeValueFromClientX_=function(a){var d=this,e=d.max_,h=d.min_,i=a-this.rect_.left,f=i/this.rect_.width;return this.adapter.isRTL()&&(f=1-f),h+f*(e-h)},c.prototype.handleKeydown_=function(a){var d=this.getKeyId_(a),e=this.getValueForKeyId_(d);if(isNaN(e))return;a.preventDefault(),this.adapter.addClass(m.FOCUS),this.setValue_(e,!0),this.adapter.notifyChange()},c.prototype.getKeyId_=function(a){return a.key===g.ARROW_LEFT||a.keyCode===37?g.ARROW_LEFT:a.key===g.ARROW_RIGHT||a.keyCode===39?g.ARROW_RIGHT:a.key===g.ARROW_UP||a.keyCode===38?g.ARROW_UP:a.key===g.ARROW_DOWN||a.keyCode===40?g.ARROW_DOWN:a.key===g.HOME||a.keyCode===36?g.HOME:a.key===g.END||a.keyCode===35?g.END:a.key===g.PAGE_UP||a.keyCode===33?g.PAGE_UP:a.key===g.PAGE_DOWN||a.keyCode===34?g.PAGE_DOWN:""},c.prototype.getValueForKeyId_=function(a){var d=this,e=d.max_,h=d.min_,i=d.step_,f=i||(e-h)/100,n=this.adapter.isRTL()&&(a===g.ARROW_LEFT||a===g.ARROW_RIGHT);n&&(f=-f);switch(a){case g.ARROW_LEFT:case g.ARROW_DOWN:return this.value_-f;case g.ARROW_RIGHT:case g.ARROW_UP:return this.value_+f;case g.HOME:return this.min_;case g.END:return this.max_;case g.PAGE_UP:return this.value_+f*x.PAGE_FACTOR;case g.PAGE_DOWN:return this.value_-f*x.PAGE_FACTOR;default:return NaN}},c.prototype.handleFocus_=function(){if(this.preventFocusState_)return;this.adapter.addClass(m.FOCUS)},c.prototype.handleBlur_=function(){this.preventFocusState_=!1,this.adapter.removeClass(m.FOCUS)},c.prototype.setValue_=function(a,d,e){e===void 0&&(e=!1);if(a===this.value_&&!e)return;var h=this,i=h.min_,f=h.max_,n=a===i||a===f;this.step_&&!n&&(a=this.quantize_(a)),a<i?a=i:a>f&&(a=f),a=a||0,this.value_=a,this.adapter.setAttribute(o.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),d&&(this.adapter.notifyInput(),this.isDiscrete_&&this.adapter.setMarkerValue(a))},c.prototype.quantize_=function(a){var d=Math.round(a/this.step_);return d*this.step_},c.prototype.updateUIForCurrentValue_=function(){var a=this,d=this,e=d.max_,h=d.min_,i=d.value_,f=(i-h)/(e-h),n=f*this.rect_.width;this.adapter.isRTL()&&(n=this.rect_.width-n);var r=y?P(window,"transform"):"transform",s=y?Q(window,"transitionend"):"transitionend";if(this.inTransit_){var G=function(){a.setInTransit_(!1),a.adapter.deregisterThumbContainerInteractionHandler(s,G)};this.adapter.registerThumbContainerInteractionHandler(s,G)}requestAnimationFrame(function(){a.adapter.setThumbContainerStyleProperty(r,"translateX("+n+"px) translateX(-50%)"),a.adapter.setTrackStyleProperty(r,"scaleX("+f+")")})},c.prototype.setActive_=function(a){this.active_=a,this.toggleClass_(m.ACTIVE,this.active_)},c.prototype.setInTransit_=function(a){this.inTransit_=a,this.toggleClass_(m.IN_TRANSIT,this.inTransit_)},c.prototype.toggleClass_=function(a,d){d?this.adapter.addClass(a):this.adapter.removeClass(a)},c}(R);const U="input",V="change";class k extends N{constructor(){super(...arguments);this.mdcFoundationClass=T,this.min=0,this.max=100,this._value=0,this.step=0,this.disabled=!1,this.pin=!1,this.markers=!1,this.pinMarkerText="",this.trackMarkerContainerStyles={},this.thumbContainerStyles={},this.trackStyles={},this.isFoundationDestroyed=!1}set value(b){this.mdcFoundation&&this.mdcFoundation.setValue(b),this._value=b,this.requestUpdate("value",b)}get value(){return this.mdcFoundation?this.mdcFoundation.getValue():this._value}render(){const b=this.step!==0,c={"mdc-slider--discrete":b,"mdc-slider--display-markers":this.markers&&b};let a="";b&&this.markers&&(a=t`
        <div
            class="mdc-slider__track-marker-container"
            style="${u(this.trackMarkerContainerStyles)}">
        </div>`);let d="";return this.pin&&(d=t`
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker">${this.pinMarkerText}</span>
      </div>`),t`
      <div class="mdc-slider ${J(c)}"
           tabindex="0" role="slider"
           aria-valuemin="${this.min}" aria-valuemax="${this.max}"
           aria-valuenow="${this.value}"
           aria-disabled="${this.disabled.toString()}"
           data-step="${this.step}"
           @mousedown=${this.layout}
           @touchstart=${this.layout}>
        <div class="mdc-slider__track-container">
          <div
              class="mdc-slider__track"
              style="${u(this.trackStyles)}">
          </div>
          ${a}
        </div>
        <div
            class="mdc-slider__thumb-container"
            style="${u(this.thumbContainerStyles)}">
          <!-- TODO: use cache() directive -->
          ${d}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
        <div class="mdc-slider__focus-ring"></div>
      </div>
    </div>`}connectedCallback(){super.connectedCallback(),this.mdcRoot&&this.isFoundationDestroyed&&(this.isFoundationDestroyed=!1,this.mdcFoundation.init())}updated(b){const c=b.has("min"),a=b.has("max");c&&a?this.max<this.mdcFoundation.getMin()?(this.mdcFoundation.setMin(this.min),this.mdcFoundation.setMax(this.max)):(this.mdcFoundation.setMax(this.max),this.mdcFoundation.setMin(this.min)):c?this.mdcFoundation.setMin(this.min):a&&this.mdcFoundation.setMax(this.max),super.updated(b)}disconnectedCallback(){super.disconnectedCallback(),this.isFoundationDestroyed=!0,this.mdcFoundation.destroy()}createAdapter(){return Object.assign(Object.assign({},K(this.mdcRoot)),{getAttribute:b=>this.mdcRoot.getAttribute(b),setAttribute:(b,c)=>this.mdcRoot.setAttribute(b,c),removeAttribute:b=>this.mdcRoot.removeAttribute(b),computeBoundingRect:()=>{const b=this.mdcRoot.getBoundingClientRect(),c={bottom:b.bottom,height:b.height,left:b.left+window.pageXOffset,right:b.right,top:b.top,width:b.width};return c},getTabIndex:()=>this.mdcRoot.tabIndex,registerInteractionHandler:(b,c)=>{const a=b==="touchstart"?w():void 0;this.mdcRoot.addEventListener(b,c,a)},deregisterInteractionHandler:(b,c)=>this.mdcRoot.removeEventListener(b,c),registerThumbContainerInteractionHandler:(b,c)=>{const a=b==="touchstart"?w():void 0;this.thumbContainer.addEventListener(b,c,a)},deregisterThumbContainerInteractionHandler:(b,c)=>this.thumbContainer.removeEventListener(b,c),registerBodyInteractionHandler:(b,c)=>document.body.addEventListener(b,c),deregisterBodyInteractionHandler:(b,c)=>document.body.removeEventListener(b,c),registerResizeHandler:b=>window.addEventListener("resize",b,w()),deregisterResizeHandler:b=>window.removeEventListener("resize",b),notifyInput:()=>{const b=this.mdcFoundation.getValue();b!==this._value&&(this.value=b,this.dispatchEvent(new CustomEvent(U,{detail:this,composed:!0,bubbles:!0,cancelable:!0})))},notifyChange:()=>{this.dispatchEvent(new CustomEvent(V,{detail:this,composed:!0,bubbles:!0,cancelable:!0}))},setThumbContainerStyleProperty:(b,c)=>{this.thumbContainerStyles[b]=c,this.requestUpdate()},setTrackStyleProperty:(b,c)=>{this.trackStyles[b]=c,this.requestUpdate()},setMarkerValue:b=>this.pinMarkerText=b.toLocaleString(),setTrackMarkers:(b,c,a)=>{const d=b.toLocaleString(),e=c.toLocaleString(),h=a.toLocaleString(),i=`((${e} - ${h}) / ${d})`,f="2px",n=`linear-gradient(to right, currentColor ${f}, transparent 0)`,r=`0 center / calc((100% - ${f}) / ${i}) 100% repeat-x`,s=`${n} ${r}`;this.trackMarkerContainerStyles.background=s,this.requestUpdate()},isRTL:()=>getComputedStyle(this.mdcRoot).direction==="rtl"})}resetFoundation(){this.mdcFoundation&&(this.mdcFoundation.destroy(),this.mdcFoundation.init())}async firstUpdated(){await super.firstUpdated(),this.mdcFoundation.setValue(this._value)}layout(){this.mdcFoundation.layout()}}j([p(".mdc-slider")],k.prototype,"mdcRoot",void 0),j([p(".mdc-slider")],k.prototype,"formElement",void 0),j([p(".mdc-slider__thumb-container")],k.prototype,"thumbContainer",void 0),j([p(".mdc-slider__pin-value-marker")],k.prototype,"pinMarker",void 0),j([l({type:Number})],k.prototype,"min",void 0),j([l({type:Number})],k.prototype,"max",void 0),j([l({type:Number})],k.prototype,"value",null),j([l({type:Number}),v(function(b,c){const a=c!==0,d=b!==0;a!==d&&this.resetFoundation(),this.mdcFoundation.setStep(b)})],k.prototype,"step",void 0),j([l({type:Boolean,reflect:!0}),v(function(b){this.mdcFoundation.setDisabled(b)})],k.prototype,"disabled",void 0),j([l({type:Boolean,reflect:!0})],k.prototype,"pin",void 0),j([l({type:Boolean,reflect:!0}),v(function(){this.mdcFoundation.setupTrackMarker()})],k.prototype,"markers",void 0),j([l({type:String})],k.prototype,"pinMarkerText",void 0),j([l({type:Object})],k.prototype,"trackMarkerContainerStyles",void 0),j([l({type:Object})],k.prototype,"thumbContainerStyles",void 0),j([l({type:Object})],k.prototype,"trackStyles",void 0),j([I({capture:!0,passive:!0})],k.prototype,"layout",null);/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const W=M`@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);opacity:.26}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#018786;fill:var(--mdc-theme-secondary, #018786);stroke:#018786;stroke:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-slider--disable-touch-action{touch-action:none}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container::after{background-color:#9a9a9a;opacity:.26}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component, white)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track-container::after{position:absolute;top:0;left:0;display:block;width:100%;height:100%;content:""}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5;transition:transform 100ms ease-out,fill 100ms ease-out,stroke 100ms ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform 266.67ms ease-out,opacity 266.67ms ease-out,background-color 266.67ms ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1;transition:transform 100ms ease-out}.mdc-slider__pin-value-marker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px, -20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}:host{display:inline-block;min-width:120px;outline:none}`;let q=class b extends k{};q.styles=W,q=j([L("mwc-slider")],q);export{q as Slider};
