var Vp=Object.defineProperty;var Bp=(r,t,e)=>t in r?Vp(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var vt=(r,t,e)=>Bp(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ki=window,Ka=ki.ShadowRoot&&(ki.ShadyCSS===void 0||ki.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xa=Symbol(),Ul=new WeakMap;let mh=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Xa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ka&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Ul.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ul.set(e,t))}return t}toString(){return this.cssText}};const Hp=r=>new mh(typeof r=="string"?r:r+"",void 0,Xa),qe=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,n,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[o+1],r[0]);return new mh(e,r,Xa)},jp=(r,t)=>{Ka?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=ki.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,r.appendChild(i)})},Wl=Ka?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Hp(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var An;const Oi=window,Fl=Oi.trustedTypes,Kp=Fl?Fl.emptyScript:"",Vl=Oi.reactiveElementPolyfillSupport,Pa={toAttribute(r,t){switch(t){case Boolean:r=r?Kp:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},gh=(r,t)=>t!==r&&(t==t||r==r),kn={attribute:!0,type:String,converter:Pa,reflect:!1,hasChanged:gh};let hr=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=kn){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||kn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Wl(n))}else t!==void 0&&e.push(Wl(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return jp(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=kn){var n;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const s=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Pa).toAttribute(e,i.type);this._$El=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,o=n._$Ev.get(t);if(o!==void 0&&this._$El!==o){const s=n.getPropertyOptions(o),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:Pa;this._$El=o,this[o]=c.fromAttribute(e,s.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||gh)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,o)=>this[o]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var o;return(o=n.hostUpdate)===null||o===void 0?void 0:o.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};hr.finalized=!0,hr.elementProperties=new Map,hr.elementStyles=[],hr.shadowRootOptions={mode:"open"},Vl==null||Vl({ReactiveElement:hr}),((An=Oi.reactiveElementVersions)!==null&&An!==void 0?An:Oi.reactiveElementVersions=[]).push("1.4.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $n;const Li=window,gr=Li.trustedTypes,Bl=gr?gr.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ta="$lit$",Ie=`lit$${(Math.random()+"").slice(9)}$`,vh="?"+Ie,Xp=`<${vh}>`,Je=document,Gr=()=>Je.createComment(""),Yr=r=>r===null||typeof r!="object"&&typeof r!="function",bh=Array.isArray,Gp=r=>bh(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Pn=`[ 	
\f\r]`,Ir=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hl=/-->/g,jl=/>/g,Ke=RegExp(`>|${Pn}(?:([^\\s"'>=/]+)(${Pn}*=${Pn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Kl=/'/g,Xl=/"/g,yh=/^(?:script|style|textarea|title)$/i,Yp=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),ve=Yp(1),tr=Symbol.for("lit-noChange"),$t=Symbol.for("lit-nothing"),Gl=new WeakMap,Ye=Je.createTreeWalker(Je,129,null,!1);function _h(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bl!==void 0?Bl.createHTML(t):t}const Zp=(r,t)=>{const e=r.length-1,i=[];let n,o=t===2?"<svg>":"",s=Ir;for(let c=0;c<e;c++){const h=r[c];let l,u,a=-1,d=0;for(;d<h.length&&(s.lastIndex=d,u=s.exec(h),u!==null);)d=s.lastIndex,s===Ir?u[1]==="!--"?s=Hl:u[1]!==void 0?s=jl:u[2]!==void 0?(yh.test(u[2])&&(n=RegExp("</"+u[2],"g")),s=Ke):u[3]!==void 0&&(s=Ke):s===Ke?u[0]===">"?(s=n??Ir,a=-1):u[1]===void 0?a=-2:(a=s.lastIndex-u[2].length,l=u[1],s=u[3]===void 0?Ke:u[3]==='"'?Xl:Kl):s===Xl||s===Kl?s=Ke:s===Hl||s===jl?s=Ir:(s=Ke,n=void 0);const p=s===Ke&&r[c+1].startsWith("/>")?" ":"";o+=s===Ir?h+Xp:a>=0?(i.push(l),h.slice(0,a)+Ta+h.slice(a)+Ie+p):h+Ie+(a===-2?(i.push(void 0),c):p)}return[_h(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),i]};let Ia=class wh{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,s=0;const c=t.length-1,h=this.parts,[l,u]=Zp(t,e);if(this.el=wh.createElement(l,i),Ye.currentNode=this.el.content,e===2){const a=this.el.content,d=a.firstChild;d.remove(),a.append(...d.childNodes)}for(;(n=Ye.nextNode())!==null&&h.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const a=[];for(const d of n.getAttributeNames())if(d.endsWith(Ta)||d.startsWith(Ie)){const p=u[s++];if(a.push(d),p!==void 0){const f=n.getAttribute(p.toLowerCase()+Ta).split(Ie),v=/([.?@])?(.*)/.exec(p);h.push({type:1,index:o,name:v[2],strings:f,ctor:v[1]==="."?Jp:v[1]==="?"?ef:v[1]==="@"?rf:ji})}else h.push({type:6,index:o})}for(const d of a)n.removeAttribute(d)}if(yh.test(n.tagName)){const a=n.textContent.split(Ie),d=a.length-1;if(d>0){n.textContent=gr?gr.emptyScript:"";for(let p=0;p<d;p++)n.append(a[p],Gr()),Ye.nextNode(),h.push({type:2,index:++o});n.append(a[d],Gr())}}}else if(n.nodeType===8)if(n.data===vh)h.push({type:2,index:o});else{let a=-1;for(;(a=n.data.indexOf(Ie,a+1))!==-1;)h.push({type:7,index:o}),a+=Ie.length-1}o++}}static createElement(t,e){const i=Je.createElement("template");return i.innerHTML=t,i}};function vr(r,t,e=r,i){var n,o,s,c;if(t===tr)return t;let h=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Yr(t)?void 0:t._$litDirective$;return(h==null?void 0:h.constructor)!==l&&((o=h==null?void 0:h._$AO)===null||o===void 0||o.call(h,!1),l===void 0?h=void 0:(h=new l(r),h._$AT(r,e,i)),i!==void 0?((s=(c=e)._$Co)!==null&&s!==void 0?s:c._$Co=[])[i]=h:e._$Cl=h),h!==void 0&&(t=vr(r,h._$AS(r,t.values),h,i)),t}let Qp=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:Je).importNode(i,!0);Ye.currentNode=o;let s=Ye.nextNode(),c=0,h=0,l=n[0];for(;l!==void 0;){if(c===l.index){let u;l.type===2?u=new Ga(s,s.nextSibling,this,t):l.type===1?u=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(u=new nf(s,this,t)),this._$AV.push(u),l=n[++h]}c!==(l==null?void 0:l.index)&&(s=Ye.nextNode(),c++)}return Ye.currentNode=Je,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Ga=class xh{constructor(t,e,i,n){var o;this.type=2,this._$AH=$t,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(o=n==null?void 0:n.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=vr(this,t,e),Yr(t)?t===$t||t==null||t===""?(this._$AH!==$t&&this._$AR(),this._$AH=$t):t!==this._$AH&&t!==tr&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Gp(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==$t&&Yr(this._$AH)?this._$AA.nextSibling.data=t:this.$(Je.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Ia.createElement(_h(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const s=new Qp(o,this),c=s.u(this.options);s.v(i),this.$(c),this._$AH=s}}_$AC(t){let e=Gl.get(t.strings);return e===void 0&&Gl.set(t.strings,e=new Ia(t)),e}T(t){bh(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new xh(this.k(Gr()),this.k(Gr()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},ji=class{constructor(t,e,i,n,o){this.type=1,this._$AH=$t,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$t}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let s=!1;if(o===void 0)t=vr(this,t,e,0),s=!Yr(t)||t!==this._$AH&&t!==tr,s&&(this._$AH=t);else{const c=t;let h,l;for(t=o[0],h=0;h<o.length-1;h++)l=vr(this,c[i+h],e,h),l===tr&&(l=this._$AH[h]),s||(s=!Yr(l)||l!==this._$AH[h]),l===$t?t=$t:t!==$t&&(t+=(l??"")+o[h+1]),this._$AH[h]=l}s&&!n&&this.j(t)}j(t){t===$t?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Jp=class extends ji{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$t?void 0:t}};const tf=gr?gr.emptyScript:"";let ef=class extends ji{constructor(){super(...arguments),this.type=4}j(t){t&&t!==$t?this.element.setAttribute(this.name,tf):this.element.removeAttribute(this.name)}},rf=class extends ji{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=vr(this,t,e,0))!==null&&i!==void 0?i:$t)===tr)return;const n=this._$AH,o=t===$t&&n!==$t||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==$t&&(n===$t||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}};class nf{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){vr(this,t)}}const Yl=Li.litHtmlPolyfillSupport;Yl==null||Yl(Ia,Ga),(($n=Li.litHtmlVersions)!==null&&$n!==void 0?$n:Li.litHtmlVersions=[]).push("2.8.0");const of=(r,t,e)=>{var i,n;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let s=o._$litPart$;if(s===void 0){const c=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;o._$litPart$=s=new Ga(t.insertBefore(Gr(),c),c,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Tn,In;let ae=class extends hr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=of(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return tr}};ae.finalized=!0,ae._$litElement$=!0,(Tn=globalThis.litElementHydrateSupport)===null||Tn===void 0||Tn.call(globalThis,{LitElement:ae});const Zl=globalThis.litElementPolyfillSupport;Zl==null||Zl({LitElement:ae});((In=globalThis.litElementVersions)!==null&&In!==void 0?In:globalThis.litElementVersions=[]).push("3.3.3");try{self["workbox:window:7.2.0"]&&_()}catch{}function Ra(r,t){return new Promise(function(e){var i=new MessageChannel;i.port1.onmessage=function(n){e(n.data)},r.postMessage(t,[i.port2])})}function sf(r){var t=function(e,i){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,i);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r,"string");return typeof t=="symbol"?t:t+""}function af(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,sf(i.key),i)}}function Oa(r,t){return Oa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,i){return e.__proto__=i,e},Oa(r,t)}function Ql(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=r[e];return i}function lf(r,t){var e=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(e)return(e=e.call(r)).next.bind(e);if(Array.isArray(r)||(e=function(n,o){if(n){if(typeof n=="string")return Ql(n,o);var s=Object.prototype.toString.call(n).slice(8,-1);return s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set"?Array.from(n):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?Ql(n,o):void 0}}(r))||t){e&&(r=e);var i=0;return function(){return i>=r.length?{done:!0}:{done:!1,value:r[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}try{self["workbox:core:7.2.0"]&&_()}catch{}var Rn=function(){var r=this;this.promise=new Promise(function(t,e){r.resolve=t,r.reject=e})};function On(r,t){var e=location.href;return new URL(r,e).href===new URL(t,e).href}var Rr=function(r,t){this.type=r,Object.assign(this,t)};function Pe(r,t,e){return e?t?t(r):r:(r&&r.then||(r=Promise.resolve(r)),t?r.then(t):r)}function cf(){}var df={type:"SKIP_WAITING"};function Jl(r,t){return r&&r.then?r.then(cf):Promise.resolve()}var uf=function(r){function t(c,h){var l,u;return h===void 0&&(h={}),(l=r.call(this)||this).nn={},l.tn=0,l.rn=new Rn,l.en=new Rn,l.on=new Rn,l.un=0,l.an=new Set,l.cn=function(){var a=l.fn,d=a.installing;l.tn>0||!On(d.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=d,a.removeEventListener("updatefound",l.cn)):(l.hn=d,l.an.add(d),l.rn.resolve(d)),++l.tn,d.addEventListener("statechange",l.ln)},l.ln=function(a){var d=l.fn,p=a.target,f=p.state,v=p===l.vn,b={sw:p,isExternal:v,originalEvent:a};!v&&l.mn&&(b.isUpdate=!0),l.dispatchEvent(new Rr(f,b)),f==="installed"?l.wn=self.setTimeout(function(){f==="installed"&&d.waiting===p&&l.dispatchEvent(new Rr("waiting",b))},200):f==="activating"&&(clearTimeout(l.wn),v||l.en.resolve(p))},l.yn=function(a){var d=l.hn,p=d!==navigator.serviceWorker.controller;l.dispatchEvent(new Rr("controlling",{isExternal:p,originalEvent:a,sw:d,isUpdate:l.mn})),p||l.on.resolve(d)},l.gn=(u=function(a){var d=a.data,p=a.ports,f=a.source;return Pe(l.getSW(),function(){l.an.has(f)&&l.dispatchEvent(new Rr("message",{data:d,originalEvent:a,ports:p,sw:f}))})},function(){for(var a=[],d=0;d<arguments.length;d++)a[d]=arguments[d];try{return Promise.resolve(u.apply(this,a))}catch(p){return Promise.reject(p)}}),l.sn=c,l.nn=h,navigator.serviceWorker.addEventListener("message",l.gn),l}var e,i;i=r,(e=t).prototype=Object.create(i.prototype),e.prototype.constructor=e,Oa(e,i);var n,o,s=t.prototype;return s.register=function(c){var h=(c===void 0?{}:c).immediate,l=h!==void 0&&h;try{var u=this;return Pe(function(a,d){var p=a();return p&&p.then?p.then(d):d(p)}(function(){if(!l&&document.readyState!=="complete")return Jl(new Promise(function(a){return window.addEventListener("load",a)}))},function(){return u.mn=!!navigator.serviceWorker.controller,u.dn=u.pn(),Pe(u.bn(),function(a){u.fn=a,u.dn&&(u.hn=u.dn,u.en.resolve(u.dn),u.on.resolve(u.dn),u.dn.addEventListener("statechange",u.ln,{once:!0}));var d=u.fn.waiting;return d&&On(d.scriptURL,u.sn.toString())&&(u.hn=d,Promise.resolve().then(function(){u.dispatchEvent(new Rr("waiting",{sw:d,wasWaitingBeforeRegister:!0}))}).then(function(){})),u.hn&&(u.rn.resolve(u.hn),u.an.add(u.hn)),u.fn.addEventListener("updatefound",u.cn),navigator.serviceWorker.addEventListener("controllerchange",u.yn),u.fn})}))}catch(a){return Promise.reject(a)}},s.update=function(){try{return this.fn?Pe(Jl(this.fn.update())):Pe()}catch(c){return Promise.reject(c)}},s.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},s.messageSW=function(c){try{return Pe(this.getSW(),function(h){return Ra(h,c)})}catch(h){return Promise.reject(h)}},s.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Ra(this.fn.waiting,df)},s.pn=function(){var c=navigator.serviceWorker.controller;return c&&On(c.scriptURL,this.sn.toString())?c:void 0},s.bn=function(){try{var c=this;return Pe(function(h,l){try{var u=h()}catch(a){return l(a)}return u&&u.then?u.then(void 0,l):u}(function(){return Pe(navigator.serviceWorker.register(c.sn,c.nn),function(h){return c.un=performance.now(),h})},function(h){throw h}))}catch(h){return Promise.reject(h)}},n=t,(o=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&af(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n}(function(){function r(){this.Pn=new Map}var t=r.prototype;return t.addEventListener=function(e,i){this.jn(e).add(i)},t.removeEventListener=function(e,i){this.jn(e).delete(i)},t.dispatchEvent=function(e){e.target=this;for(var i,n=lf(this.jn(e.type));!(i=n()).done;)(0,i.value)(e)},t.jn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},r}());/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $i=globalThis,Ya=$i.ShadowRoot&&($i.ShadyCSS===void 0||$i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Sh=Symbol(),tc=new WeakMap;let hf=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Sh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ya&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=tc.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&tc.set(e,t))}return t}toString(){return this.cssText}};const pf=r=>new hf(typeof r=="string"?r:r+"",void 0,Sh),ff=(r,t)=>{if(Ya)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),n=$i.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,r.appendChild(i)}},ec=Ya?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return pf(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mf,defineProperty:gf,getOwnPropertyDescriptor:vf,getOwnPropertyNames:bf,getOwnPropertySymbols:yf,getPrototypeOf:_f}=Object,Le=globalThis,rc=Le.trustedTypes,wf=rc?rc.emptyScript:"",Ln=Le.reactiveElementPolyfillSupport,Fr=(r,t)=>r,Mi={toAttribute(r,t){switch(t){case Boolean:r=r?wf:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Za=(r,t)=>!mf(r,t),ic={attribute:!0,type:String,converter:Mi,reflect:!1,hasChanged:Za};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Le.litPropertyMetadata??(Le.litPropertyMetadata=new WeakMap);let Or=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ic){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&gf(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=vf(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get(){return n==null?void 0:n.call(this)},set(s){const c=n==null?void 0:n.call(this);o.call(this,s),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ic}static _$Ei(){if(this.hasOwnProperty(Fr("elementProperties")))return;const t=_f(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Fr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Fr("properties"))){const e=this.properties,i=[...bf(e),...yf(e)];for(const n of i)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(ec(n))}else t!==void 0&&e.push(ec(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ff(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var o;const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const s=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:Mi).toAttribute(e,i.type);this._$Em=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){var o;const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const s=i.getPropertyOptions(n),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:Mi;this._$Em=n,this[n]=c.fromAttribute(e,s.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Za)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,s]of n)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(e)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}};Or.elementStyles=[],Or.shadowRootOptions={mode:"open"},Or[Fr("elementProperties")]=new Map,Or[Fr("finalized")]=new Map,Ln==null||Ln({ReactiveElement:Or}),(Le.reactiveElementVersions??(Le.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vr=globalThis,Ni=Vr.trustedTypes,nc=Ni?Ni.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ch="$lit$",Re=`lit$${Math.random().toFixed(9).slice(2)}$`,Eh="?"+Re,xf=`<${Eh}>`,er=document,Zr=()=>er.createComment(""),Qr=r=>r===null||typeof r!="object"&&typeof r!="function",Qa=Array.isArray,Sf=r=>Qa(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Mn=`[ 	
\f\r]`,Lr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oc=/-->/g,sc=/>/g,Xe=RegExp(`>|${Mn}(?:([^\\s"'>=/]+)(${Mn}*=${Mn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ac=/'/g,lc=/"/g,Ah=/^(?:script|style|textarea|title)$/i,Cf=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),H=Cf(1),Zt=Symbol.for("lit-noChange"),wt=Symbol.for("lit-nothing"),cc=new WeakMap,Ze=er.createTreeWalker(er,129);function kh(r,t){if(!Qa(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return nc!==void 0?nc.createHTML(t):t}const Ef=(r,t)=>{const e=r.length-1,i=[];let n,o=t===2?"<svg>":t===3?"<math>":"",s=Lr;for(let c=0;c<e;c++){const h=r[c];let l,u,a=-1,d=0;for(;d<h.length&&(s.lastIndex=d,u=s.exec(h),u!==null);)d=s.lastIndex,s===Lr?u[1]==="!--"?s=oc:u[1]!==void 0?s=sc:u[2]!==void 0?(Ah.test(u[2])&&(n=RegExp("</"+u[2],"g")),s=Xe):u[3]!==void 0&&(s=Xe):s===Xe?u[0]===">"?(s=n??Lr,a=-1):u[1]===void 0?a=-2:(a=s.lastIndex-u[2].length,l=u[1],s=u[3]===void 0?Xe:u[3]==='"'?lc:ac):s===lc||s===ac?s=Xe:s===oc||s===sc?s=Lr:(s=Xe,n=void 0);const p=s===Xe&&r[c+1].startsWith("/>")?" ":"";o+=s===Lr?h+xf:a>=0?(i.push(l),h.slice(0,a)+Ch+h.slice(a)+Re+p):h+Re+(a===-2?c:p)}return[kh(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Jr{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,s=0;const c=t.length-1,h=this.parts,[l,u]=Ef(t,e);if(this.el=Jr.createElement(l,i),Ze.currentNode=this.el.content,e===2||e===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(n=Ze.nextNode())!==null&&h.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const a of n.getAttributeNames())if(a.endsWith(Ch)){const d=u[s++],p=n.getAttribute(a).split(Re),f=/([.?@])?(.*)/.exec(d);h.push({type:1,index:o,name:f[2],strings:p,ctor:f[1]==="."?kf:f[1]==="?"?$f:f[1]==="@"?Pf:Ki}),n.removeAttribute(a)}else a.startsWith(Re)&&(h.push({type:6,index:o}),n.removeAttribute(a));if(Ah.test(n.tagName)){const a=n.textContent.split(Re),d=a.length-1;if(d>0){n.textContent=Ni?Ni.emptyScript:"";for(let p=0;p<d;p++)n.append(a[p],Zr()),Ze.nextNode(),h.push({type:2,index:++o});n.append(a[d],Zr())}}}else if(n.nodeType===8)if(n.data===Eh)h.push({type:2,index:o});else{let a=-1;for(;(a=n.data.indexOf(Re,a+1))!==-1;)h.push({type:7,index:o}),a+=Re.length-1}o++}}static createElement(t,e){const i=er.createElement("template");return i.innerHTML=t,i}}function br(r,t,e=r,i){var s,c;if(t===Zt)return t;let n=i!==void 0?(s=e._$Co)==null?void 0:s[i]:e._$Cl;const o=Qr(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==o&&((c=n==null?void 0:n._$AO)==null||c.call(n,!1),o===void 0?n=void 0:(n=new o(r),n._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=n:e._$Cl=n),n!==void 0&&(t=br(r,n._$AS(r,t.values),n,i)),t}class Af{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=((t==null?void 0:t.creationScope)??er).importNode(e,!0);Ze.currentNode=n;let o=Ze.nextNode(),s=0,c=0,h=i[0];for(;h!==void 0;){if(s===h.index){let l;h.type===2?l=new ri(o,o.nextSibling,this,t):h.type===1?l=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(l=new Tf(o,this,t)),this._$AV.push(l),h=i[++c]}s!==(h==null?void 0:h.index)&&(o=Ze.nextNode(),s++)}return Ze.currentNode=er,n}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class ri{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=wt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=br(this,t,e),Qr(t)?t===wt||t==null||t===""?(this._$AH!==wt&&this._$AR(),this._$AH=wt):t!==this._$AH&&t!==Zt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Sf(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==wt&&Qr(this._$AH)?this._$AA.nextSibling.data=t:this.T(er.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Jr.createElement(kh(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===n)this._$AH.p(e);else{const s=new Af(n,this),c=s.u(this.options);s.p(e),this.T(c),this._$AH=s}}_$AC(t){let e=cc.get(t.strings);return e===void 0&&cc.set(t.strings,e=new Jr(t)),e}k(t){Qa(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new ri(this.O(Zr()),this.O(Zr()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Ki{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=wt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=wt}_$AI(t,e=this,i,n){const o=this.strings;let s=!1;if(o===void 0)t=br(this,t,e,0),s=!Qr(t)||t!==this._$AH&&t!==Zt,s&&(this._$AH=t);else{const c=t;let h,l;for(t=o[0],h=0;h<o.length-1;h++)l=br(this,c[i+h],e,h),l===Zt&&(l=this._$AH[h]),s||(s=!Qr(l)||l!==this._$AH[h]),l===wt?t=wt:t!==wt&&(t+=(l??"")+o[h+1]),this._$AH[h]=l}s&&!n&&this.j(t)}j(t){t===wt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class kf extends Ki{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===wt?void 0:t}}class $f extends Ki{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==wt)}}class Pf extends Ki{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=br(this,t,e,0)??wt)===Zt)return;const i=this._$AH,n=t===wt&&i!==wt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==wt&&(i===wt||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Tf{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){br(this,t)}}const Nn=Vr.litHtmlPolyfillSupport;Nn==null||Nn(Jr,ri),(Vr.litHtmlVersions??(Vr.litHtmlVersions=[])).push("3.2.1");const If=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let n=i._$litPart$;if(n===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=n=new ri(t.insertBefore(Zr(),o),o,void 0,e??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pi=globalThis,Ja=Pi.ShadowRoot&&(Pi.ShadyCSS===void 0||Pi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tl=Symbol(),dc=new WeakMap;let $h=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==tl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ja&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=dc.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&dc.set(e,t))}return t}toString(){return this.cssText}};const Rf=r=>new $h(typeof r=="string"?r:r+"",void 0,tl),pt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,n,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[o+1],r[0]);return new $h(e,r,tl)},Of=(r,t)=>{if(Ja)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),n=Pi.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,r.appendChild(i)}},uc=Ja?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Rf(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Lf,defineProperty:Mf,getOwnPropertyDescriptor:Nf,getOwnPropertyNames:zf,getOwnPropertySymbols:Df,getPrototypeOf:qf}=Object,Me=globalThis,hc=Me.trustedTypes,Uf=hc?hc.emptyScript:"",zn=Me.reactiveElementPolyfillSupport,Br=(r,t)=>r,ti={toAttribute(r,t){switch(t){case Boolean:r=r?Uf:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Ph=(r,t)=>!Lf(r,t),pc={attribute:!0,type:String,converter:ti,reflect:!1,hasChanged:Ph};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Me.litPropertyMetadata??(Me.litPropertyMetadata=new WeakMap);class pr extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=pc){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Mf(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=Nf(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get(){return n==null?void 0:n.call(this)},set(s){const c=n==null?void 0:n.call(this);o.call(this,s),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??pc}static _$Ei(){if(this.hasOwnProperty(Br("elementProperties")))return;const t=qf(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Br("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Br("properties"))){const e=this.properties,i=[...zf(e),...Df(e)];for(const n of i)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(uc(n))}else t!==void 0&&e.push(uc(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Of(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var o;const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const s=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:ti).toAttribute(e,i.type);this._$Em=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){var o;const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const s=i.getPropertyOptions(n),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:ti;this._$Em=n,this[n]=c.fromAttribute(e,s.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Ph)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,s]of n)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(e)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}pr.elementStyles=[],pr.shadowRootOptions={mode:"open"},pr[Br("elementProperties")]=new Map,pr[Br("finalized")]=new Map,zn==null||zn({ReactiveElement:pr}),(Me.reactiveElementVersions??(Me.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Hr=class extends pr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=If(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Zt}};var fh;Hr._$litElement$=!0,Hr.finalized=!0,(fh=globalThis.litElementHydrateSupport)==null||fh.call(globalThis,{LitElement:Hr});const Dn=globalThis.litElementPolyfillSupport;Dn==null||Dn({LitElement:Hr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");var Wf=pt`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,fc=new WeakMap;function Th(r){let t=fc.get(r);return t||(t=window.getComputedStyle(r,null),fc.set(r,t)),t}function Ff(r){if(typeof r.checkVisibility=="function")return r.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=Th(r);return t.visibility!=="hidden"&&t.display!=="none"}function Vf(r){const t=Th(r),{overflowY:e,overflowX:i}=t;return e==="scroll"||i==="scroll"?!0:e!=="auto"||i!=="auto"?!1:r.scrollHeight>r.clientHeight&&e==="auto"||r.scrollWidth>r.clientWidth&&i==="auto"}function Bf(r){const t=r.tagName.toLowerCase(),e=Number(r.getAttribute("tabindex"));return r.hasAttribute("tabindex")&&(isNaN(e)||e<=-1)||r.hasAttribute("disabled")||r.closest("[inert]")||t==="input"&&r.getAttribute("type")==="radio"&&!r.hasAttribute("checked")||!Ff(r)?!1:(t==="audio"||t==="video")&&r.hasAttribute("controls")||r.hasAttribute("tabindex")||r.hasAttribute("contenteditable")&&r.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:Vf(r)}function Hf(r){var t,e;const i=La(r),n=(t=i[0])!=null?t:null,o=(e=i[i.length-1])!=null?e:null;return{start:n,end:o}}function jf(r,t){var e;return((e=r.getRootNode({composed:!0}))==null?void 0:e.host)!==t}function La(r){const t=new WeakMap,e=[];function i(n){if(n instanceof Element){if(n.hasAttribute("inert")||n.closest("[inert]")||t.has(n))return;t.set(n,!0),!e.includes(n)&&Bf(n)&&e.push(n),n instanceof HTMLSlotElement&&jf(n,r)&&n.assignedElements({flatten:!0}).forEach(o=>{i(o)}),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&i(n.shadowRoot)}for(const o of n.children)i(o)}return i(r),e.sort((n,o)=>{const s=Number(n.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-s})}var Ih=Object.defineProperty,Kf=Object.defineProperties,Xf=Object.getOwnPropertyDescriptor,Gf=Object.getOwnPropertyDescriptors,mc=Object.getOwnPropertySymbols,Yf=Object.prototype.hasOwnProperty,Zf=Object.prototype.propertyIsEnumerable,qn=(r,t)=>(t=Symbol[r])?t:Symbol.for("Symbol."+r),el=r=>{throw TypeError(r)},gc=(r,t,e)=>t in r?Ih(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Ue=(r,t)=>{for(var e in t||(t={}))Yf.call(t,e)&&gc(r,e,t[e]);if(mc)for(var e of mc(t))Zf.call(t,e)&&gc(r,e,t[e]);return r},Xi=(r,t)=>Kf(r,Gf(t)),x=(r,t,e,i)=>{for(var n=i>1?void 0:i?Xf(t,e):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(n=(i?s(t,e,n):s(n))||n);return i&&n&&Ih(t,e,n),n},Rh=(r,t,e)=>t.has(r)||el("Cannot "+e),Qf=(r,t,e)=>(Rh(r,t,"read from private field"),t.get(r)),Jf=(r,t,e)=>t.has(r)?el("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),tm=(r,t,e,i)=>(Rh(r,t,"write to private field"),t.set(r,e),e),em=function(r,t){this[0]=r,this[1]=t},rm=r=>{var t=r[qn("asyncIterator")],e=!1,i,n={};return t==null?(t=r[qn("iterator")](),i=o=>n[o]=s=>t[o](s)):(t=t.call(r),i=o=>n[o]=s=>{if(e){if(e=!1,o==="throw")throw s;return s}return e=!0,{done:!1,value:new em(new Promise(c=>{var h=t[o](s);h instanceof Object||el("Object expected"),c(h)}),1)}}),n[qn("iterator")]=()=>n,i("next"),"throw"in t?i("throw"):n.throw=o=>{throw o},"return"in t&&i("return"),n};function*rl(r=document.activeElement){r!=null&&(yield r,"shadowRoot"in r&&r.shadowRoot&&r.shadowRoot.mode!=="closed"&&(yield*rm(rl(r.shadowRoot.activeElement))))}function im(){return[...rl()].pop()}var Mr=[],Oh=class{constructor(r){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var e;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=im();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const n=La(this.element);let o=n.findIndex(c=>c===i);this.previousFocus=this.currentFocus;const s=this.tabDirection==="forward"?1:-1;for(;;){o+s>=n.length?o=0:o+s<0?o=n.length-1:o+=s,this.previousFocus=this.currentFocus;const c=n[o];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||c&&this.possiblyHasTabbableChildren(c))return;t.preventDefault(),this.currentFocus=c,(e=this.currentFocus)==null||e.focus({preventScroll:!1});const h=[...rl()];if(h.includes(this.currentFocus)||!h.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=r,this.elementsWithTabbableControls=["iframe"]}activate(){Mr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Mr=Mr.filter(r=>r!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Mr[Mr.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const r=La(this.element);if(!this.element.matches(":focus-within")){const t=r[0],e=r[r.length-1],i=this.tabDirection==="forward"?t:e;typeof(i==null?void 0:i.focus)=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(r){return this.elementsWithTabbableControls.includes(r.tagName.toLowerCase())||r.hasAttribute("controls")}};function nm(r,t){return{top:Math.round(r.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(r.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var Ma=new Set;function om(){const r=document.documentElement.clientWidth;return Math.abs(window.innerWidth-r)}function sm(){const r=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(r)||!r?0:r}function jr(r){if(Ma.add(r),!document.documentElement.classList.contains("sl-scroll-lock")){const t=om()+sm();let e=getComputedStyle(document.documentElement).scrollbarGutter;(!e||e==="auto")&&(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",e),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Kr(r){Ma.delete(r),Ma.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Na(r,t,e="vertical",i="smooth"){const n=nm(r,t),o=n.top+t.scrollTop,s=n.left+t.scrollLeft,c=t.scrollLeft,h=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(e==="horizontal"||e==="both")&&(s<c?t.scrollTo({left:s,behavior:i}):s+r.clientWidth>h&&t.scrollTo({left:s-t.offsetWidth+r.clientWidth,behavior:i})),(e==="vertical"||e==="both")&&(o<l?t.scrollTo({top:o,behavior:i}):o+r.clientHeight>u&&t.scrollTo({top:o-t.offsetHeight+r.clientHeight,behavior:i}))}var am=pt`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,lm=pt`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,za="";function Da(r){za=r}function cm(r=""){if(!za){const t=[...document.getElementsByTagName("script")],e=t.find(i=>i.hasAttribute("data-shoelace"));if(e)Da(e.getAttribute("data-shoelace"));else{const i=t.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let n="";i&&(n=i.getAttribute("src")),Da(n.split("/").slice(0,-1).join("/"))}}return za.replace(/\/$/,"")+(r?`/${r.replace(/^\//,"")}`:"")}var dm={name:"default",resolver:r=>cm(`assets/icons/${r}.svg`)},um=dm,vc={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},hm={name:"system",resolver:r=>r in vc?`data:image/svg+xml,${encodeURIComponent(vc[r])}`:""},pm=hm,zi=[um,pm],Di=[];function fm(r){Di.push(r)}function mm(r){Di=Di.filter(t=>t!==r)}function bc(r){return zi.find(t=>t.name===r)}function gm(r,t){vm(r),zi.push({name:r,resolver:t.resolver,mutator:t.mutator,spriteSheet:t.spriteSheet}),Di.forEach(e=>{e.library===r&&e.setIcon()})}function vm(r){zi=zi.filter(t=>t.name!==r)}function tt(r,t){const e=Ue({waitUntilFirstUpdate:!1},t);return(i,n)=>{const{update:o}=i,s=Array.isArray(r)?r:[r];i.update=function(c){s.forEach(h=>{const l=h;if(c.has(l)){const u=c.get(l),a=this[l];u!==a&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[n](u,a)}}),o.call(this,c)}}}var bt=pt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bm={attribute:!0,type:String,converter:Mi,reflect:!1,hasChanged:Za},ym=(r=bm,t,e)=>{const{kind:i,metadata:n}=e;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(e.name,r),i==="accessor"){const{name:s}=e;return{set(c){const h=t.get.call(this);t.set.call(this,c),this.requestUpdate(s,h,r)},init(c){return c!==void 0&&this.P(s,void 0,r),c}}}if(i==="setter"){const{name:s}=e;return function(c){const h=this[s];t.call(this,c),this.requestUpdate(s,h,r)}}throw Error("Unsupported decorator location: "+i)};function A(r){return(t,e)=>typeof e=="object"?ym(r,t,e):((i,n,o)=>{const s=n.hasOwnProperty(o);return n.constructor.createProperty(o,s?{...i,wrapped:!0}:i),s?Object.getOwnPropertyDescriptor(n,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(r){return A({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function il(r){return(t,e)=>{const i=typeof t=="function"?t:t[e];Object.assign(i,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _m=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Y(r,t){return(e,i,n)=>{const o=s=>{var c;return((c=s.renderRoot)==null?void 0:c.querySelector(r))??null};return _m(e,i,{get(){return o(this)}})}}var Ti,ct=class extends Hr{constructor(){super(),Jf(this,Ti,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([r,t])=>{this.constructor.define(r,t)})}emit(r,t){const e=new CustomEvent(r,Ue({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(e),e}static define(r,t=this,e={}){const i=customElements.get(r);if(!i){try{customElements.define(r,t,e)}catch{customElements.define(r,class extends t{},e)}return}let n=" (unknown version)",o=n;"version"in t&&t.version&&(n=" v"+t.version),"version"in i&&i.version&&(o=" v"+i.version),!(n&&o&&n===o)&&console.warn(`Attempted to register <${r}>${n}, but <${r}>${o} has already been registered.`)}attributeChangedCallback(r,t,e){Qf(this,Ti)||(this.constructor.elementProperties.forEach((i,n)=>{i.reflect&&this[n]!=null&&this.initialReflectedProperties.set(n,this[n])}),tm(this,Ti,!0)),super.attributeChangedCallback(r,t,e)}willUpdate(r){super.willUpdate(r),this.initialReflectedProperties.forEach((t,e)=>{r.has(e)&&this[e]==null&&(this[e]=t)})}};Ti=new WeakMap;ct.version="2.19.1";ct.dependencies={};x([A()],ct.prototype,"dir",2);x([A()],ct.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wm=(r,t)=>(r==null?void 0:r._$litType$)!==void 0,Lh=r=>r.strings===void 0,xm={},Sm=(r,t=xm)=>r._$AH=t;var Nr=Symbol(),_i=Symbol(),Un,Wn=new Map,jt=class extends ct{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(r,t){var e;let i;if(t!=null&&t.spriteSheet)return this.svg=H`<svg part="svg">
        <use part="use" href="${r}"></use>
      </svg>`,this.svg;try{if(i=await fetch(r,{mode:"cors"}),!i.ok)return i.status===410?Nr:_i}catch{return _i}try{const n=document.createElement("div");n.innerHTML=await i.text();const o=n.firstElementChild;if(((e=o==null?void 0:o.tagName)==null?void 0:e.toLowerCase())!=="svg")return Nr;Un||(Un=new DOMParser);const c=Un.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):Nr}catch{return Nr}}connectedCallback(){super.connectedCallback(),fm(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),mm(this)}getIconSource(){const r=bc(this.library);return this.name&&r?{url:r.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var r;const{url:t,fromLibrary:e}=this.getIconSource(),i=e?bc(this.library):void 0;if(!t){this.svg=null;return}let n=Wn.get(t);if(n||(n=this.resolveIcon(t,i),Wn.set(t,n)),!this.initialRender)return;const o=await n;if(o===_i&&Wn.delete(t),t===this.getIconSource().url){if(wm(o)){if(this.svg=o,i){await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&s&&i.mutator(s)}return}switch(o){case _i:case Nr:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(r=i==null?void 0:i.mutator)==null||r.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};jt.styles=[bt,lm];x([dt()],jt.prototype,"svg",2);x([A({reflect:!0})],jt.prototype,"name",2);x([A()],jt.prototype,"src",2);x([A()],jt.prototype,"label",2);x([A({reflect:!0})],jt.prototype,"library",2);x([tt("label")],jt.prototype,"handleLabelChange",1);x([tt(["name","src","library"])],jt.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ii=r=>(...t)=>({_$litDirective$:r,values:t});let ni=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=ii(class extends ni{constructor(r){var t;if(super(r),r.type!==ge.ATTRIBUTE||r.name!=="class"||((t=r.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var i,n;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((i=this.nt)!=null&&i.has(o))&&this.st.add(o);return this.render(t)}const e=r.element.classList;for(const o of this.st)o in t||(e.remove(o),this.st.delete(o));for(const o in t){const s=!!t[o];s===this.st.has(o)||(n=this.nt)!=null&&n.has(o)||(s?(e.add(o),this.st.add(o)):(e.remove(o),this.st.delete(o)))}return Zt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mh=Symbol.for(""),Cm=r=>{if((r==null?void 0:r.r)===Mh)return r==null?void 0:r._$litStatic$},qi=(r,...t)=>({_$litStatic$:t.reduce((e,i,n)=>e+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+r[n+1],r[0]),r:Mh}),yc=new Map,Em=r=>(t,...e)=>{const i=e.length;let n,o;const s=[],c=[];let h,l=0,u=!1;for(;l<i;){for(h=t[l];l<i&&(o=e[l],(n=Cm(o))!==void 0);)h+=n+t[++l],u=!0;l!==i&&c.push(o),s.push(h),l++}if(l===i&&s.push(t[i]),u){const a=s.join("$$lit$$");(t=yc.get(a))===void 0&&(s.raw=s,yc.set(a,t=s)),e=c}return r(t,...e)},Ii=Em(H);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=r=>r??wt;var kt=class extends ct{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(r){this.disabled&&(r.preventDefault(),r.stopPropagation())}click(){this.button.click()}focus(r){this.button.focus(r)}blur(){this.button.blur()}render(){const r=!!this.href,t=r?qi`a`:qi`button`;return Ii`
      <${t}
        part="base"
        class=${lt({"icon-button":!0,"icon-button--disabled":!r&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${X(r?void 0:this.disabled)}
        type=${X(r?void 0:"button")}
        href=${X(r?this.href:void 0)}
        target=${X(r?this.target:void 0)}
        download=${X(r?this.download:void 0)}
        rel=${X(r&&this.target?"noreferrer noopener":void 0)}
        role=${X(r?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${X(this.name)}
          library=${X(this.library)}
          src=${X(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};kt.styles=[bt,am];kt.dependencies={"sl-icon":jt};x([Y(".icon-button")],kt.prototype,"button",2);x([dt()],kt.prototype,"hasFocus",2);x([A()],kt.prototype,"name",2);x([A()],kt.prototype,"library",2);x([A()],kt.prototype,"src",2);x([A()],kt.prototype,"href",2);x([A()],kt.prototype,"target",2);x([A()],kt.prototype,"download",2);x([A()],kt.prototype,"label",2);x([A({type:Boolean,reflect:!0})],kt.prototype,"disabled",2);var Nh=new Map,Am=new WeakMap;function km(r){return r??{keyframes:[],options:{duration:0}}}function _c(r,t){return t.toLowerCase()==="rtl"?{keyframes:r.rtlKeyframes||r.keyframes,options:r.options}:r}function xt(r,t){Nh.set(r,km(t))}function Pt(r,t,e){const i=Am.get(r);if(i!=null&&i[t])return _c(i[t],e.dir);const n=Nh.get(t);return n?_c(n,e.dir):{keyframes:[],options:{duration:0}}}function le(r,t){return new Promise(e=>{function i(n){n.target===r&&(r.removeEventListener(t,i),e())}r.addEventListener(t,i)})}function Tt(r,t,e){return new Promise(i=>{if((e==null?void 0:e.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=r.animate(t,Xi(Ue({},e),{duration:$m()?0:e.duration}));n.addEventListener("cancel",i,{once:!0}),n.addEventListener("finish",i,{once:!0})})}function wc(r){return r=r.toString().toLowerCase(),r.indexOf("ms")>-1?parseFloat(r):r.indexOf("s")>-1?parseFloat(r)*1e3:parseFloat(r)}function $m(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Dt(r){return Promise.all(r.getAnimations().map(t=>new Promise(e=>{t.cancel(),requestAnimationFrame(e)})))}var he=class{constructor(r,...t){this.slotNames=[],this.handleSlotChange=e=>{const i=e.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=r).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent.trim()!=="")return!0;if(r.nodeType===r.ELEMENT_NODE){const t=r;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(r){return this.host.querySelector(`:scope > [slot="${r}"]`)!==null}test(r){return r==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(r)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Pm(r){if(!r)return"";const t=r.assignedNodes({flatten:!0});let e="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(e+=i.textContent)}),e}const qa=new Set,fr=new Map;let Ge,nl="ltr",ol="en";const zh=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(zh){const r=new MutationObserver(qh);nl=document.documentElement.dir||"ltr",ol=document.documentElement.lang||navigator.language,r.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Dh(...r){r.map(t=>{const e=t.$code.toLowerCase();fr.has(e)?fr.set(e,Object.assign(Object.assign({},fr.get(e)),t)):fr.set(e,t),Ge||(Ge=t)}),qh()}function qh(){zh&&(nl=document.documentElement.dir||"ltr",ol=document.documentElement.lang||navigator.language),[...qa.keys()].map(r=>{typeof r.requestUpdate=="function"&&r.requestUpdate()})}let Tm=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){qa.add(this.host)}hostDisconnected(){qa.delete(this.host)}dir(){return`${this.host.dir||nl}`.toLowerCase()}lang(){return`${this.host.lang||ol}`.toLowerCase()}getTranslationData(t){var e,i;const n=new Intl.Locale(t.replace(/_/g,"-")),o=n==null?void 0:n.language.toLowerCase(),s=(i=(e=n==null?void 0:n.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&i!==void 0?i:"",c=fr.get(`${o}-${s}`),h=fr.get(o);return{locale:n,language:o,region:s,primary:c,secondary:h}}exists(t,e){var i;const{primary:n,secondary:o}=this.getTranslationData((i=e.lang)!==null&&i!==void 0?i:this.lang());return e=Object.assign({includeFallback:!1},e),!!(n&&n[t]||o&&o[t]||e.includeFallback&&Ge&&Ge[t])}term(t,...e){const{primary:i,secondary:n}=this.getTranslationData(this.lang());let o;if(i&&i[t])o=i[t];else if(n&&n[t])o=n[t];else if(Ge&&Ge[t])o=Ge[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof o=="function"?o(...e):o}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}};var Uh={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(r,t)=>`Go to slide ${r} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:r=>r===0?"No options selected":r===1?"1 option selected":`${r} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:r=>`Slide ${r}`,toggleColorFormat:"Toggle color format"};Dh(Uh);var Im=Uh,qt=class extends Tm{};Dh(Im);function xc(r){return r.charAt(0).toUpperCase()+r.slice(1)}var Jt=class extends ct{constructor(){super(...arguments),this.hasSlotController=new he(this,"footer"),this.localize=new qt(this),this.modal=new Oh(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=r=>{this.contained||r.key==="Escape"&&this.modal.isActive()&&this.open&&(r.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),jr(this)))}disconnectedCallback(){super.disconnectedCallback(),Kr(this),this.removeOpenListeners()}requestClose(r){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:r}}).defaultPrevented){const e=Pt(this,"drawer.denyClose",{dir:this.localize.dir()});Tt(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){var r;"CloseWatcher"in window?((r=this.closeWatcher)==null||r.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var r;document.removeEventListener("keydown",this.handleDocumentKeyDown),(r=this.closeWatcher)==null||r.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),jr(this));const r=this.querySelector("[autofocus]");r&&r.removeAttribute("autofocus"),await Promise.all([Dt(this.drawer),Dt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(r?r.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),r&&r.setAttribute("autofocus","")});const t=Pt(this,`drawer.show${xc(this.placement)}`,{dir:this.localize.dir()}),e=Pt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Tt(this.panel,t.keyframes,t.options),Tt(this.overlay,e.keyframes,e.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Kr(this)),await Promise.all([Dt(this.drawer),Dt(this.overlay)]);const r=Pt(this,`drawer.hide${xc(this.placement)}`,{dir:this.localize.dir()}),t=Pt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Tt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Tt(this.panel,r.keyframes,r.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const e=this.originalTrigger;typeof(e==null?void 0:e.focus)=="function"&&setTimeout(()=>e.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),jr(this)),this.open&&this.contained&&(this.modal.deactivate(),Kr(this))}async show(){if(!this.open)return this.open=!0,le(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,le(this,"sl-after-hide")}render(){return H`
      <div
        part="base"
        class=${lt({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${X(this.noHeader?this.label:void 0)}
          aria-labelledby=${X(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":H`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Jt.styles=[bt,Wf];Jt.dependencies={"sl-icon-button":kt};x([Y(".drawer")],Jt.prototype,"drawer",2);x([Y(".drawer__panel")],Jt.prototype,"panel",2);x([Y(".drawer__overlay")],Jt.prototype,"overlay",2);x([A({type:Boolean,reflect:!0})],Jt.prototype,"open",2);x([A({reflect:!0})],Jt.prototype,"label",2);x([A({reflect:!0})],Jt.prototype,"placement",2);x([A({type:Boolean,reflect:!0})],Jt.prototype,"contained",2);x([A({attribute:"no-header",type:Boolean,reflect:!0})],Jt.prototype,"noHeader",2);x([tt("open",{waitUntilFirstUpdate:!0})],Jt.prototype,"handleOpenChange",1);x([tt("contained",{waitUntilFirstUpdate:!0})],Jt.prototype,"handleNoModalChange",1);xt("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});xt("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});xt("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});xt("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});xt("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});xt("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});xt("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});xt("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});xt("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});xt("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});xt("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Jt.define("sl-drawer");jt.define("sl-icon");var Rm=pt`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Om=pt`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Ne=Math.min,Yt=Math.max,Ui=Math.round,wi=Math.floor,be=r=>({x:r,y:r}),Lm={left:"right",right:"left",bottom:"top",top:"bottom"},Mm={start:"end",end:"start"};function Ua(r,t,e){return Yt(r,Ne(t,e))}function _r(r,t){return typeof r=="function"?r(t):r}function ze(r){return r.split("-")[0]}function wr(r){return r.split("-")[1]}function Wh(r){return r==="x"?"y":"x"}function sl(r){return r==="y"?"height":"width"}function rr(r){return["top","bottom"].includes(ze(r))?"y":"x"}function al(r){return Wh(rr(r))}function Nm(r,t,e){e===void 0&&(e=!1);const i=wr(r),n=al(r),o=sl(n);let s=n==="x"?i===(e?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=Wi(s)),[s,Wi(s)]}function zm(r){const t=Wi(r);return[Wa(r),t,Wa(t)]}function Wa(r){return r.replace(/start|end/g,t=>Mm[t])}function Dm(r,t,e){const i=["left","right"],n=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(r){case"top":case"bottom":return e?t?n:i:t?i:n;case"left":case"right":return t?o:s;default:return[]}}function qm(r,t,e,i){const n=wr(r);let o=Dm(ze(r),e==="start",i);return n&&(o=o.map(s=>s+"-"+n),t&&(o=o.concat(o.map(Wa)))),o}function Wi(r){return r.replace(/left|right|bottom|top/g,t=>Lm[t])}function Um(r){return{top:0,right:0,bottom:0,left:0,...r}}function Fh(r){return typeof r!="number"?Um(r):{top:r,right:r,bottom:r,left:r}}function Fi(r){const{x:t,y:e,width:i,height:n}=r;return{width:i,height:n,top:e,left:t,right:t+i,bottom:e+n,x:t,y:e}}function Sc(r,t,e){let{reference:i,floating:n}=r;const o=rr(t),s=al(t),c=sl(s),h=ze(t),l=o==="y",u=i.x+i.width/2-n.width/2,a=i.y+i.height/2-n.height/2,d=i[c]/2-n[c]/2;let p;switch(h){case"top":p={x:u,y:i.y-n.height};break;case"bottom":p={x:u,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:a};break;case"left":p={x:i.x-n.width,y:a};break;default:p={x:i.x,y:i.y}}switch(wr(t)){case"start":p[s]-=d*(e&&l?-1:1);break;case"end":p[s]+=d*(e&&l?-1:1);break}return p}const Wm=async(r,t,e)=>{const{placement:i="bottom",strategy:n="absolute",middleware:o=[],platform:s}=e,c=o.filter(Boolean),h=await(s.isRTL==null?void 0:s.isRTL(t));let l=await s.getElementRects({reference:r,floating:t,strategy:n}),{x:u,y:a}=Sc(l,i,h),d=i,p={},f=0;for(let v=0;v<c.length;v++){const{name:b,fn:S}=c[v],{x:y,y:E,data:k,reset:P}=await S({x:u,y:a,initialPlacement:i,placement:d,strategy:n,middlewareData:p,rects:l,platform:s,elements:{reference:r,floating:t}});u=y??u,a=E??a,p={...p,[b]:{...p[b],...k}},P&&f<=50&&(f++,typeof P=="object"&&(P.placement&&(d=P.placement),P.rects&&(l=P.rects===!0?await s.getElementRects({reference:r,floating:t,strategy:n}):P.rects),{x:u,y:a}=Sc(l,d,h)),v=-1)}return{x:u,y:a,placement:d,strategy:n,middlewareData:p}};async function ll(r,t){var e;t===void 0&&(t={});const{x:i,y:n,platform:o,rects:s,elements:c,strategy:h}=r,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:a="floating",altBoundary:d=!1,padding:p=0}=_r(t,r),f=Fh(p),b=c[d?a==="floating"?"reference":"floating":a],S=Fi(await o.getClippingRect({element:(e=await(o.isElement==null?void 0:o.isElement(b)))==null||e?b:b.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(c.floating)),boundary:l,rootBoundary:u,strategy:h})),y=a==="floating"?{x:i,y:n,width:s.floating.width,height:s.floating.height}:s.reference,E=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c.floating)),k=await(o.isElement==null?void 0:o.isElement(E))?await(o.getScale==null?void 0:o.getScale(E))||{x:1,y:1}:{x:1,y:1},P=Fi(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:E,strategy:h}):y);return{top:(S.top-P.top+f.top)/k.y,bottom:(P.bottom-S.bottom+f.bottom)/k.y,left:(S.left-P.left+f.left)/k.x,right:(P.right-S.right+f.right)/k.x}}const Fm=r=>({name:"arrow",options:r,async fn(t){const{x:e,y:i,placement:n,rects:o,platform:s,elements:c,middlewareData:h}=t,{element:l,padding:u=0}=_r(r,t)||{};if(l==null)return{};const a=Fh(u),d={x:e,y:i},p=al(n),f=sl(p),v=await s.getDimensions(l),b=p==="y",S=b?"top":"left",y=b?"bottom":"right",E=b?"clientHeight":"clientWidth",k=o.reference[f]+o.reference[p]-d[p]-o.floating[f],P=d[p]-o.reference[p],I=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let O=I?I[E]:0;(!O||!await(s.isElement==null?void 0:s.isElement(I)))&&(O=c.floating[E]||o.floating[f]);const N=k/2-P/2,U=O/2-v[f]/2-1,z=Ne(a[S],U),W=Ne(a[y],U),F=z,V=O-v[f]-W,G=O/2-v[f]/2+N,Q=Ua(F,G,V),et=!h.arrow&&wr(n)!=null&&G!==Q&&o.reference[f]/2-(G<F?z:W)-v[f]/2<0,Z=et?G<F?G-F:G-V:0;return{[p]:d[p]+Z,data:{[p]:Q,centerOffset:G-Q-Z,...et&&{alignmentOffset:Z}},reset:et}}}),Vm=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(t){var e,i;const{placement:n,middlewareData:o,rects:s,initialPlacement:c,platform:h,elements:l}=t,{mainAxis:u=!0,crossAxis:a=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:v=!0,...b}=_r(r,t);if((e=o.arrow)!=null&&e.alignmentOffset)return{};const S=ze(n),y=rr(c),E=ze(c)===c,k=await(h.isRTL==null?void 0:h.isRTL(l.floating)),P=d||(E||!v?[Wi(c)]:zm(c)),I=f!=="none";!d&&I&&P.push(...qm(c,v,f,k));const O=[c,...P],N=await ll(t,b),U=[];let z=((i=o.flip)==null?void 0:i.overflows)||[];if(u&&U.push(N[S]),a){const G=Nm(n,s,k);U.push(N[G[0]],N[G[1]])}if(z=[...z,{placement:n,overflows:U}],!U.every(G=>G<=0)){var W,F;const G=(((W=o.flip)==null?void 0:W.index)||0)+1,Q=O[G];if(Q)return{data:{index:G,overflows:z},reset:{placement:Q}};let et=(F=z.filter(Z=>Z.overflows[0]<=0).sort((Z,rt)=>Z.overflows[1]-rt.overflows[1])[0])==null?void 0:F.placement;if(!et)switch(p){case"bestFit":{var V;const Z=(V=z.filter(rt=>{if(I){const K=rr(rt.placement);return K===y||K==="y"}return!0}).map(rt=>[rt.placement,rt.overflows.filter(K=>K>0).reduce((K,j)=>K+j,0)]).sort((rt,K)=>rt[1]-K[1])[0])==null?void 0:V[0];Z&&(et=Z);break}case"initialPlacement":et=c;break}if(n!==et)return{reset:{placement:et}}}return{}}}};async function Bm(r,t){const{placement:e,platform:i,elements:n}=r,o=await(i.isRTL==null?void 0:i.isRTL(n.floating)),s=ze(e),c=wr(e),h=rr(e)==="y",l=["left","top"].includes(s)?-1:1,u=o&&h?-1:1,a=_r(t,r);let{mainAxis:d,crossAxis:p,alignmentAxis:f}=typeof a=="number"?{mainAxis:a,crossAxis:0,alignmentAxis:null}:{mainAxis:a.mainAxis||0,crossAxis:a.crossAxis||0,alignmentAxis:a.alignmentAxis};return c&&typeof f=="number"&&(p=c==="end"?f*-1:f),h?{x:p*u,y:d*l}:{x:d*l,y:p*u}}const Hm=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(t){var e,i;const{x:n,y:o,placement:s,middlewareData:c}=t,h=await Bm(t,r);return s===((e=c.offset)==null?void 0:e.placement)&&(i=c.arrow)!=null&&i.alignmentOffset?{}:{x:n+h.x,y:o+h.y,data:{...h,placement:s}}}}},jm=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(t){const{x:e,y:i,placement:n}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:b=>{let{x:S,y}=b;return{x:S,y}}},...h}=_r(r,t),l={x:e,y:i},u=await ll(t,h),a=rr(ze(n)),d=Wh(a);let p=l[d],f=l[a];if(o){const b=d==="y"?"top":"left",S=d==="y"?"bottom":"right",y=p+u[b],E=p-u[S];p=Ua(y,p,E)}if(s){const b=a==="y"?"top":"left",S=a==="y"?"bottom":"right",y=f+u[b],E=f-u[S];f=Ua(y,f,E)}const v=c.fn({...t,[d]:p,[a]:f});return{...v,data:{x:v.x-e,y:v.y-i,enabled:{[d]:o,[a]:s}}}}}},Km=function(r){return r===void 0&&(r={}),{name:"size",options:r,async fn(t){var e,i;const{placement:n,rects:o,platform:s,elements:c}=t,{apply:h=()=>{},...l}=_r(r,t),u=await ll(t,l),a=ze(n),d=wr(n),p=rr(n)==="y",{width:f,height:v}=o.floating;let b,S;a==="top"||a==="bottom"?(b=a,S=d===(await(s.isRTL==null?void 0:s.isRTL(c.floating))?"start":"end")?"left":"right"):(S=a,b=d==="end"?"top":"bottom");const y=v-u.top-u.bottom,E=f-u.left-u.right,k=Ne(v-u[b],y),P=Ne(f-u[S],E),I=!t.middlewareData.shift;let O=k,N=P;if((e=t.middlewareData.shift)!=null&&e.enabled.x&&(N=E),(i=t.middlewareData.shift)!=null&&i.enabled.y&&(O=y),I&&!d){const z=Yt(u.left,0),W=Yt(u.right,0),F=Yt(u.top,0),V=Yt(u.bottom,0);p?N=f-2*(z!==0||W!==0?z+W:Yt(u.left,u.right)):O=v-2*(F!==0||V!==0?F+V:Yt(u.top,u.bottom))}await h({...t,availableWidth:N,availableHeight:O});const U=await s.getDimensions(c.floating);return f!==U.width||v!==U.height?{reset:{rects:!0}}:{}}}};function Gi(){return typeof window<"u"}function xr(r){return Vh(r)?(r.nodeName||"").toLowerCase():"#document"}function Qt(r){var t;return(r==null||(t=r.ownerDocument)==null?void 0:t.defaultView)||window}function _e(r){var t;return(t=(Vh(r)?r.ownerDocument:r.document)||window.document)==null?void 0:t.documentElement}function Vh(r){return Gi()?r instanceof Node||r instanceof Qt(r).Node:!1}function de(r){return Gi()?r instanceof Element||r instanceof Qt(r).Element:!1}function ye(r){return Gi()?r instanceof HTMLElement||r instanceof Qt(r).HTMLElement:!1}function Cc(r){return!Gi()||typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof Qt(r).ShadowRoot}function oi(r){const{overflow:t,overflowX:e,overflowY:i,display:n}=ue(r);return/auto|scroll|overlay|hidden|clip/.test(t+i+e)&&!["inline","contents"].includes(n)}function Xm(r){return["table","td","th"].includes(xr(r))}function Yi(r){return[":popover-open",":modal"].some(t=>{try{return r.matches(t)}catch{return!1}})}function Zi(r){const t=cl(),e=de(r)?ue(r):r;return e.transform!=="none"||e.perspective!=="none"||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(e.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(e.contain||"").includes(i))}function Gm(r){let t=De(r);for(;ye(t)&&!yr(t);){if(Zi(t))return t;if(Yi(t))return null;t=De(t)}return null}function cl(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function yr(r){return["html","body","#document"].includes(xr(r))}function ue(r){return Qt(r).getComputedStyle(r)}function Qi(r){return de(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.scrollX,scrollTop:r.scrollY}}function De(r){if(xr(r)==="html")return r;const t=r.assignedSlot||r.parentNode||Cc(r)&&r.host||_e(r);return Cc(t)?t.host:t}function Bh(r){const t=De(r);return yr(t)?r.ownerDocument?r.ownerDocument.body:r.body:ye(t)&&oi(t)?t:Bh(t)}function ei(r,t,e){var i;t===void 0&&(t=[]),e===void 0&&(e=!0);const n=Bh(r),o=n===((i=r.ownerDocument)==null?void 0:i.body),s=Qt(n);if(o){const c=Fa(s);return t.concat(s,s.visualViewport||[],oi(n)?n:[],c&&e?ei(c):[])}return t.concat(n,ei(n,[],e))}function Fa(r){return r.parent&&Object.getPrototypeOf(r.parent)?r.frameElement:null}function Hh(r){const t=ue(r);let e=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const n=ye(r),o=n?r.offsetWidth:e,s=n?r.offsetHeight:i,c=Ui(e)!==o||Ui(i)!==s;return c&&(e=o,i=s),{width:e,height:i,$:c}}function dl(r){return de(r)?r:r.contextElement}function mr(r){const t=dl(r);if(!ye(t))return be(1);const e=t.getBoundingClientRect(),{width:i,height:n,$:o}=Hh(t);let s=(o?Ui(e.width):e.width)/i,c=(o?Ui(e.height):e.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const Ym=be(0);function jh(r){const t=Qt(r);return!cl()||!t.visualViewport?Ym:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Zm(r,t,e){return t===void 0&&(t=!1),!e||t&&e!==Qt(r)?!1:t}function ir(r,t,e,i){t===void 0&&(t=!1),e===void 0&&(e=!1);const n=r.getBoundingClientRect(),o=dl(r);let s=be(1);t&&(i?de(i)&&(s=mr(i)):s=mr(r));const c=Zm(o,e,i)?jh(o):be(0);let h=(n.left+c.x)/s.x,l=(n.top+c.y)/s.y,u=n.width/s.x,a=n.height/s.y;if(o){const d=Qt(o),p=i&&de(i)?Qt(i):i;let f=d,v=Fa(f);for(;v&&i&&p!==f;){const b=mr(v),S=v.getBoundingClientRect(),y=ue(v),E=S.left+(v.clientLeft+parseFloat(y.paddingLeft))*b.x,k=S.top+(v.clientTop+parseFloat(y.paddingTop))*b.y;h*=b.x,l*=b.y,u*=b.x,a*=b.y,h+=E,l+=k,f=Qt(v),v=Fa(f)}}return Fi({width:u,height:a,x:h,y:l})}function ul(r,t){const e=Qi(r).scrollLeft;return t?t.left+e:ir(_e(r)).left+e}function Kh(r,t,e){e===void 0&&(e=!1);const i=r.getBoundingClientRect(),n=i.left+t.scrollLeft-(e?0:ul(r,i)),o=i.top+t.scrollTop;return{x:n,y:o}}function Qm(r){let{elements:t,rect:e,offsetParent:i,strategy:n}=r;const o=n==="fixed",s=_e(i),c=t?Yi(t.floating):!1;if(i===s||c&&o)return e;let h={scrollLeft:0,scrollTop:0},l=be(1);const u=be(0),a=ye(i);if((a||!a&&!o)&&((xr(i)!=="body"||oi(s))&&(h=Qi(i)),ye(i))){const p=ir(i);l=mr(i),u.x=p.x+i.clientLeft,u.y=p.y+i.clientTop}const d=s&&!a&&!o?Kh(s,h,!0):be(0);return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-h.scrollLeft*l.x+u.x+d.x,y:e.y*l.y-h.scrollTop*l.y+u.y+d.y}}function Jm(r){return Array.from(r.getClientRects())}function tg(r){const t=_e(r),e=Qi(r),i=r.ownerDocument.body,n=Yt(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),o=Yt(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let s=-e.scrollLeft+ul(r);const c=-e.scrollTop;return ue(i).direction==="rtl"&&(s+=Yt(t.clientWidth,i.clientWidth)-n),{width:n,height:o,x:s,y:c}}function eg(r,t){const e=Qt(r),i=_e(r),n=e.visualViewport;let o=i.clientWidth,s=i.clientHeight,c=0,h=0;if(n){o=n.width,s=n.height;const l=cl();(!l||l&&t==="fixed")&&(c=n.offsetLeft,h=n.offsetTop)}return{width:o,height:s,x:c,y:h}}function rg(r,t){const e=ir(r,!0,t==="fixed"),i=e.top+r.clientTop,n=e.left+r.clientLeft,o=ye(r)?mr(r):be(1),s=r.clientWidth*o.x,c=r.clientHeight*o.y,h=n*o.x,l=i*o.y;return{width:s,height:c,x:h,y:l}}function Ec(r,t,e){let i;if(t==="viewport")i=eg(r,e);else if(t==="document")i=tg(_e(r));else if(de(t))i=rg(t,e);else{const n=jh(r);i={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Fi(i)}function Xh(r,t){const e=De(r);return e===t||!de(e)||yr(e)?!1:ue(e).position==="fixed"||Xh(e,t)}function ig(r,t){const e=t.get(r);if(e)return e;let i=ei(r,[],!1).filter(c=>de(c)&&xr(c)!=="body"),n=null;const o=ue(r).position==="fixed";let s=o?De(r):r;for(;de(s)&&!yr(s);){const c=ue(s),h=Zi(s);!h&&c.position==="fixed"&&(n=null),(o?!h&&!n:!h&&c.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||oi(s)&&!h&&Xh(r,s))?i=i.filter(u=>u!==s):n=c,s=De(s)}return t.set(r,i),i}function ng(r){let{element:t,boundary:e,rootBoundary:i,strategy:n}=r;const s=[...e==="clippingAncestors"?Yi(t)?[]:ig(t,this._c):[].concat(e),i],c=s[0],h=s.reduce((l,u)=>{const a=Ec(t,u,n);return l.top=Yt(a.top,l.top),l.right=Ne(a.right,l.right),l.bottom=Ne(a.bottom,l.bottom),l.left=Yt(a.left,l.left),l},Ec(t,c,n));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function og(r){const{width:t,height:e}=Hh(r);return{width:t,height:e}}function sg(r,t,e){const i=ye(t),n=_e(t),o=e==="fixed",s=ir(r,!0,o,t);let c={scrollLeft:0,scrollTop:0};const h=be(0);if(i||!i&&!o)if((xr(t)!=="body"||oi(n))&&(c=Qi(t)),i){const d=ir(t,!0,o,t);h.x=d.x+t.clientLeft,h.y=d.y+t.clientTop}else n&&(h.x=ul(n));const l=n&&!i&&!o?Kh(n,c):be(0),u=s.left+c.scrollLeft-h.x-l.x,a=s.top+c.scrollTop-h.y-l.y;return{x:u,y:a,width:s.width,height:s.height}}function Fn(r){return ue(r).position==="static"}function Ac(r,t){if(!ye(r)||ue(r).position==="fixed")return null;if(t)return t(r);let e=r.offsetParent;return _e(r)===e&&(e=e.ownerDocument.body),e}function Gh(r,t){const e=Qt(r);if(Yi(r))return e;if(!ye(r)){let n=De(r);for(;n&&!yr(n);){if(de(n)&&!Fn(n))return n;n=De(n)}return e}let i=Ac(r,t);for(;i&&Xm(i)&&Fn(i);)i=Ac(i,t);return i&&yr(i)&&Fn(i)&&!Zi(i)?e:i||Gm(r)||e}const ag=async function(r){const t=this.getOffsetParent||Gh,e=this.getDimensions,i=await e(r.floating);return{reference:sg(r.reference,await t(r.floating),r.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function lg(r){return ue(r).direction==="rtl"}const Ri={convertOffsetParentRelativeRectToViewportRelativeRect:Qm,getDocumentElement:_e,getClippingRect:ng,getOffsetParent:Gh,getElementRects:ag,getClientRects:Jm,getDimensions:og,getScale:mr,isElement:de,isRTL:lg};function cg(r,t){let e=null,i;const n=_e(r);function o(){var c;clearTimeout(i),(c=e)==null||c.disconnect(),e=null}function s(c,h){c===void 0&&(c=!1),h===void 0&&(h=1),o();const{left:l,top:u,width:a,height:d}=r.getBoundingClientRect();if(c||t(),!a||!d)return;const p=wi(u),f=wi(n.clientWidth-(l+a)),v=wi(n.clientHeight-(u+d)),b=wi(l),y={rootMargin:-p+"px "+-f+"px "+-v+"px "+-b+"px",threshold:Yt(0,Ne(1,h))||1};let E=!0;function k(P){const I=P[0].intersectionRatio;if(I!==h){if(!E)return s();I?s(!1,I):i=setTimeout(()=>{s(!1,1e-7)},1e3)}E=!1}try{e=new IntersectionObserver(k,{...y,root:n.ownerDocument})}catch{e=new IntersectionObserver(k,y)}e.observe(r)}return s(!0),o}function dg(r,t,e,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:h=!1}=i,l=dl(r),u=n||o?[...l?ei(l):[],...ei(t)]:[];u.forEach(S=>{n&&S.addEventListener("scroll",e,{passive:!0}),o&&S.addEventListener("resize",e)});const a=l&&c?cg(l,e):null;let d=-1,p=null;s&&(p=new ResizeObserver(S=>{let[y]=S;y&&y.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{var E;(E=p)==null||E.observe(t)})),e()}),l&&!h&&p.observe(l),p.observe(t));let f,v=h?ir(r):null;h&&b();function b(){const S=ir(r);v&&(S.x!==v.x||S.y!==v.y||S.width!==v.width||S.height!==v.height)&&e(),v=S,f=requestAnimationFrame(b)}return e(),()=>{var S;u.forEach(y=>{n&&y.removeEventListener("scroll",e),o&&y.removeEventListener("resize",e)}),a==null||a(),(S=p)==null||S.disconnect(),p=null,h&&cancelAnimationFrame(f)}}const ug=Hm,hg=jm,pg=Vm,kc=Km,fg=Fm,mg=(r,t,e)=>{const i=new Map,n={platform:Ri,...e},o={...n.platform,_c:i};return Wm(r,t,{...n,platform:o})};function gg(r){return vg(r)}function Vn(r){return r.assignedSlot?r.assignedSlot:r.parentNode instanceof ShadowRoot?r.parentNode.host:r.parentNode}function vg(r){for(let t=r;t;t=Vn(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Vn(r);t;t=Vn(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if(e.display!=="contents"&&(e.position!=="static"||Zi(e)||t.tagName==="BODY"))return t}return null}function bg(r){return r!==null&&typeof r=="object"&&"getBoundingClientRect"in r&&("contextElement"in r?r instanceof Element:!0)}var ft=class extends ct{constructor(){super(...arguments),this.localize=new qt(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const r=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),e=this.placement.includes("top")||this.placement.includes("bottom");let i=0,n=0,o=0,s=0,c=0,h=0,l=0,u=0;e?r.top<t.top?(i=r.left,n=r.bottom,o=r.right,s=r.bottom,c=t.left,h=t.top,l=t.right,u=t.top):(i=t.left,n=t.bottom,o=t.right,s=t.bottom,c=r.left,h=r.top,l=r.right,u=r.top):r.left<t.left?(i=r.right,n=r.top,o=t.left,s=t.top,c=r.right,h=r.bottom,l=t.left,u=t.bottom):(i=t.right,n=t.top,o=r.left,s=r.top,c=t.right,h=t.bottom,l=r.left,u=r.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(r){super.updated(r),r.has("active")&&(this.active?this.start():this.stop()),r.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const r=this.getRootNode();this.anchorEl=r.getElementById(this.anchor)}else this.anchor instanceof Element||bg(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=dg(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(r=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>r())):r()})}reposition(){if(!this.active||!this.anchorEl)return;const r=[ug({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?r.push(kc({apply:({rects:e})=>{const i=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${e.reference.width}px`:"",this.popup.style.height=n?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&r.push(pg({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&r.push(hg({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?r.push(kc({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&r.push(fg({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?e=>Ri.getOffsetParent(e,gg):Ri.getOffsetParent;mg(this.anchorEl,this.popup,{placement:this.placement,middleware:r,strategy:this.strategy,platform:Xi(Ue({},Ri),{getOffsetParent:t})}).then(({x:e,y:i,middlewareData:n,placement:o})=>{const s=this.localize.dir()==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${i}px`}),this.arrow){const h=n.arrow.x,l=n.arrow.y;let u="",a="",d="",p="";if(this.arrowPlacement==="start"){const f=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=s?f:"",p=s?"":f}else if(this.arrowPlacement==="end"){const f=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=s?"":f,p=s?f:"",d=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof h=="number"?`${h}px`:"",u=typeof l=="number"?`${l}px`:"");Object.assign(this.arrowEl.style,{top:u,right:a,bottom:d,left:p,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return H`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${lt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${lt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?H`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};ft.styles=[bt,Om];x([Y(".popup")],ft.prototype,"popup",2);x([Y(".popup__arrow")],ft.prototype,"arrowEl",2);x([A()],ft.prototype,"anchor",2);x([A({type:Boolean,reflect:!0})],ft.prototype,"active",2);x([A({reflect:!0})],ft.prototype,"placement",2);x([A({reflect:!0})],ft.prototype,"strategy",2);x([A({type:Number})],ft.prototype,"distance",2);x([A({type:Number})],ft.prototype,"skidding",2);x([A({type:Boolean})],ft.prototype,"arrow",2);x([A({attribute:"arrow-placement"})],ft.prototype,"arrowPlacement",2);x([A({attribute:"arrow-padding",type:Number})],ft.prototype,"arrowPadding",2);x([A({type:Boolean})],ft.prototype,"flip",2);x([A({attribute:"flip-fallback-placements",converter:{fromAttribute:r=>r.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:r=>r.join(" ")}})],ft.prototype,"flipFallbackPlacements",2);x([A({attribute:"flip-fallback-strategy"})],ft.prototype,"flipFallbackStrategy",2);x([A({type:Object})],ft.prototype,"flipBoundary",2);x([A({attribute:"flip-padding",type:Number})],ft.prototype,"flipPadding",2);x([A({type:Boolean})],ft.prototype,"shift",2);x([A({type:Object})],ft.prototype,"shiftBoundary",2);x([A({attribute:"shift-padding",type:Number})],ft.prototype,"shiftPadding",2);x([A({attribute:"auto-size"})],ft.prototype,"autoSize",2);x([A()],ft.prototype,"sync",2);x([A({type:Object})],ft.prototype,"autoSizeBoundary",2);x([A({attribute:"auto-size-padding",type:Number})],ft.prototype,"autoSizePadding",2);x([A({attribute:"hover-bridge",type:Boolean})],ft.prototype,"hoverBridge",2);var Ot=class extends ct{constructor(){super(),this.localize=new qt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=r=>{r.key==="Escape"&&(r.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const r=wc(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),r)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const r=wc(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),r)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.closeWatcher)==null||r.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(r){return this.trigger.split(" ").includes(r)}async handleOpenChange(){var r,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((r=this.closeWatcher)==null||r.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Dt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:i}=Pt(this,"tooltip.show",{dir:this.localize.dir()});await Tt(this.popup.popup,e,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Dt(this.body);const{keyframes:e,options:i}=Pt(this,"tooltip.hide",{dir:this.localize.dir()});await Tt(this.popup.popup,e,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,le(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,le(this,"sl-after-hide")}render(){return H`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${lt({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Ot.styles=[bt,Rm];Ot.dependencies={"sl-popup":ft};x([Y("slot:not([name])")],Ot.prototype,"defaultSlot",2);x([Y(".tooltip__body")],Ot.prototype,"body",2);x([Y("sl-popup")],Ot.prototype,"popup",2);x([A()],Ot.prototype,"content",2);x([A()],Ot.prototype,"placement",2);x([A({type:Boolean,reflect:!0})],Ot.prototype,"disabled",2);x([A({type:Number})],Ot.prototype,"distance",2);x([A({type:Boolean,reflect:!0})],Ot.prototype,"open",2);x([A({type:Number})],Ot.prototype,"skidding",2);x([A()],Ot.prototype,"trigger",2);x([A({type:Boolean})],Ot.prototype,"hoist",2);x([tt("open",{waitUntilFirstUpdate:!0})],Ot.prototype,"handleOpenChange",1);x([tt(["content","distance","hoist","placement","skidding"])],Ot.prototype,"handleOptionsChange",1);x([tt("disabled")],Ot.prototype,"handleDisabledChange",1);xt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});xt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Ot.define("sl-tooltip");var yg=pt`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,hl=class extends ct{constructor(){super(...arguments),this.localize=new qt(this)}render(){return H`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};hl.styles=[bt,yg];var zr=new WeakMap,Dr=new WeakMap,qr=new WeakMap,Bn=new WeakSet,xi=new WeakMap,nr=class{constructor(r,t){this.handleFormData=e=>{const i=this.options.disabled(this.host),n=this.options.name(this.host),o=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!s&&typeof n=="string"&&n.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(c=>{e.formData.append(n,c.toString())}):e.formData.append(n,o.toString()))},this.handleFormSubmit=e=>{var i;const n=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=zr.get(this.form))==null||i.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!n&&!o(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),xi.set(this.host,[])},this.handleInteraction=e=>{const i=xi.get(this.host);i.includes(e.type)||i.push(e.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const i of e)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const i of e)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=r).addController(this),this.options=Ue({form:e=>{const i=e.form;if(i){const o=e.getRootNode().querySelector(`#${i}`);if(o)return o}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var i;return(i=e.disabled)!=null?i:!1},reportValidity:e=>typeof e.reportValidity=="function"?e.reportValidity():!0,checkValidity:e=>typeof e.checkValidity=="function"?e.checkValidity():!0,setValue:(e,i)=>e.value=i,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const r=this.options.form(this.host);r&&this.attachForm(r),xi.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),xi.delete(this.host),this.options.assumeInteractionOn.forEach(r=>{this.host.removeEventListener(r,this.handleInteraction)})}hostUpdated(){const r=this.options.form(this.host);r||this.detachForm(),r&&this.form!==r&&(this.detachForm(),this.attachForm(r)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(r){r?(this.form=r,zr.has(this.form)?zr.get(this.form).add(this.host):zr.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Dr.has(this.form)||(Dr.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),qr.has(this.form)||(qr.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const r=zr.get(this.form);r&&(r.delete(this.host),r.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Dr.has(this.form)&&(this.form.reportValidity=Dr.get(this.form),Dr.delete(this.form)),qr.has(this.form)&&(this.form.checkValidity=qr.get(this.form),qr.delete(this.form)),this.form=void 0))}setUserInteracted(r,t){t?Bn.add(r):Bn.delete(r),r.requestUpdate()}doAction(r,t){if(this.form){const e=document.createElement("button");e.type=r,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",t&&(e.name=t.name,e.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&e.setAttribute(i,t.getAttribute(i))})),this.form.append(e),e.click(),e.remove()}}getForm(){var r;return(r=this.form)!=null?r:null}reset(r){this.doAction("reset",r)}submit(r){this.doAction("submit",r)}setValidity(r){const t=this.host,e=!!Bn.has(t),i=!!t.required;t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!r),t.toggleAttribute("data-valid",r),t.toggleAttribute("data-user-invalid",!r&&e),t.toggleAttribute("data-user-valid",r&&e)}updateValidity(){const r=this.host;this.setValidity(r.validity.valid)}emitInvalidEvent(r){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});r||t.preventDefault(),this.host.dispatchEvent(t)||r==null||r.preventDefault()}},Ji=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),_g=Object.freeze(Xi(Ue({},Ji),{valid:!1,valueMissing:!0})),wg=Object.freeze(Xi(Ue({},Ji),{valid:!1,customError:!0})),xg=pt`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,ut=class extends ct{constructor(){super(...arguments),this.formControlController=new nr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new he(this,"[default]","prefix","suffix"),this.localize=new qt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ji}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(r){this.button.focus(r)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(r){this.isButton()&&(this.button.setCustomValidity(r),this.formControlController.updateValidity())}render(){const r=this.isLink(),t=r?qi`a`:qi`button`;return Ii`
      <${t}
        part="base"
        class=${lt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${X(r?void 0:this.disabled)}
        type=${X(r?void 0:this.type)}
        title=${this.title}
        name=${X(r?void 0:this.name)}
        value=${X(r?void 0:this.value)}
        href=${X(r&&!this.disabled?this.href:void 0)}
        target=${X(r?this.target:void 0)}
        download=${X(r?this.download:void 0)}
        rel=${X(r?this.rel:void 0)}
        role=${X(r?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Ii` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Ii`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};ut.styles=[bt,xg];ut.dependencies={"sl-icon":jt,"sl-spinner":hl};x([Y(".button")],ut.prototype,"button",2);x([dt()],ut.prototype,"hasFocus",2);x([dt()],ut.prototype,"invalid",2);x([A()],ut.prototype,"title",2);x([A({reflect:!0})],ut.prototype,"variant",2);x([A({reflect:!0})],ut.prototype,"size",2);x([A({type:Boolean,reflect:!0})],ut.prototype,"caret",2);x([A({type:Boolean,reflect:!0})],ut.prototype,"disabled",2);x([A({type:Boolean,reflect:!0})],ut.prototype,"loading",2);x([A({type:Boolean,reflect:!0})],ut.prototype,"outline",2);x([A({type:Boolean,reflect:!0})],ut.prototype,"pill",2);x([A({type:Boolean,reflect:!0})],ut.prototype,"circle",2);x([A()],ut.prototype,"type",2);x([A()],ut.prototype,"name",2);x([A()],ut.prototype,"value",2);x([A()],ut.prototype,"href",2);x([A()],ut.prototype,"target",2);x([A()],ut.prototype,"rel",2);x([A()],ut.prototype,"download",2);x([A()],ut.prototype,"form",2);x([A({attribute:"formaction"})],ut.prototype,"formAction",2);x([A({attribute:"formenctype"})],ut.prototype,"formEnctype",2);x([A({attribute:"formmethod"})],ut.prototype,"formMethod",2);x([A({attribute:"formnovalidate",type:Boolean})],ut.prototype,"formNoValidate",2);x([A({attribute:"formtarget"})],ut.prototype,"formTarget",2);x([tt("disabled",{waitUntilFirstUpdate:!0})],ut.prototype,"handleDisabledChange",1);ut.define("sl-button");var Sg=pt`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,or=class extends ct{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(r){const t=Ur(r.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(r){const t=Ur(r.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(r){const t=Ur(r.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(r){const t=Ur(r.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const r=[...this.defaultSlot.assignedElements({flatten:!0})];r.forEach(t=>{const e=r.indexOf(t),i=Ur(t);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",e===0),i.toggleAttribute("data-sl-button-group__button--inner",e>0&&e<r.length-1),i.toggleAttribute("data-sl-button-group__button--last",e===r.length-1),i.toggleAttribute("data-sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return H`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};or.styles=[bt,Sg];x([Y("slot")],or.prototype,"defaultSlot",2);x([dt()],or.prototype,"disableRole",2);x([A()],or.prototype,"label",2);function Ur(r){var t;const e="sl-button, sl-radio-button";return(t=r.closest(e))!=null?t:r.querySelector(e)}or.define("sl-button-group");kt.define("sl-icon-button");var Cg=pt`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,ur=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),te=class extends ct{constructor(){super(...arguments),this.hasSlotController=new he(this,"icon","suffix"),this.localize=new qt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var r;(r=this.countdownAnimation)==null||r.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var r;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(r=this.countdownAnimation)==null||r.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:r}=this,t="100%",e="0";this.countdownAnimation=r.animate([{width:t},{width:e}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Dt(this.base),this.base.hidden=!1;const{keyframes:r,options:t}=Pt(this,"alert.show",{dir:this.localize.dir()});await Tt(this.base,r,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Dt(this.base);const{keyframes:r,options:t}=Pt(this,"alert.hide",{dir:this.localize.dir()});await Tt(this.base,r,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,le(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,le(this,"sl-after-hide")}async toast(){return new Promise(r=>{this.handleCountdownChange(),ur.parentElement===null&&document.body.append(ur),ur.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ur.removeChild(this),r(),ur.querySelector("sl-alert")===null&&ur.remove()},{once:!0})})}render(){return H`
      <div
        part="base"
        class=${lt({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?H`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?H`
              <div
                class=${lt({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};te.styles=[bt,Cg];te.dependencies={"sl-icon-button":kt};x([Y('[part~="base"]')],te.prototype,"base",2);x([Y(".alert__countdown-elapsed")],te.prototype,"countdownElement",2);x([A({type:Boolean,reflect:!0})],te.prototype,"open",2);x([A({type:Boolean,reflect:!0})],te.prototype,"closable",2);x([A({reflect:!0})],te.prototype,"variant",2);x([A({type:Number})],te.prototype,"duration",2);x([A({type:String,reflect:!0})],te.prototype,"countdown",2);x([dt()],te.prototype,"remainingTime",2);x([tt("open",{waitUntilFirstUpdate:!0})],te.prototype,"handleOpenChange",1);x([tt("duration")],te.prototype,"handleDurationChange",1);xt("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});xt("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});te.define("sl-alert");var Eg=pt`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Yh=class extends ct{constructor(){super(...arguments),this.hasSlotController=new he(this,"footer","header","image")}render(){return H`
      <div
        part="base"
        class=${lt({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Yh.styles=[bt,Eg];Yh.define("sl-card");class Zh extends ae{static get properties(){return{eventType:{type:String,reflectToAttribute:!0,attribute:!0},pointerType:{type:String,reflectToAttribute:!0,attribute:!0},pointerId:{type:Number,reflectToAttribute:!0,attribute:!0},isPrimary:{type:Boolean,reflectToAttribute:!0,attribute:!0},width:{type:Number,reflectToAttribute:!0,attribute:!0},height:{type:Number,reflectToAttribute:!0,attribute:!0},positionX:{type:Number,reflectToAttribute:!0,attribute:!0},positionY:{type:Number,reflectToAttribute:!0,attribute:!0},preferredColor:{type:String,reflectToAttribute:!0,attribute:!0},preferredStyle:{type:String,reflectToAttribute:!0,attribute:!0},preferredWidth:{type:Number,reflectToAttribute:!0,attribute:!0},pressure:{type:Number,reflectToAttribute:!0,attribute:!0},tangentialPressure:{type:Number,reflectToAttribute:!0,attribute:!0},tiltX:{type:Number,reflectToAttribute:!0,attribute:!0},tiltY:{type:Number,reflectToAttribute:!0,attribute:!0},twist:{type:Number,reflectToAttribute:!0,attribute:!0},avgLatency:{type:Number,reflectToAttribute:!0,attribute:!0}}}set eventType(t){let e=this._eventType;this._eventType=t,this.requestUpdate("eventType",e)}get eventType(){return this._eventType}set pointerType(t){let e=this._pointerType;this._pointerType=t,this.requestUpdate("pointerType",e)}get pointerType(){return this._pointerType}set pointerId(t){let e=this._pointerId;this._pointerId=t,this.requestUpdate("pointerId",e)}get pointerId(){return this._pointerId}set isPrimary(t){let e=this._isPrimary;this._isPrimary=t,this.requestUpdate("isPrimary",e)}get isPrimary(){return this._isPrimary}set width(t){let e=this._pointerId;this._width=t,this.requestUpdate("width",e)}get width(){return this._width}set height(t){let e=this._height;this._height=t,this.requestUpdate("height",e)}get height(){return this._height}set positionX(t){let e=this._positionX;this._positionX=t,this.requestUpdate("positionX",e)}get positionX(){return this._positionX}set positionY(t){let e=this._positionY;this._positionY=t,this.requestUpdate("positionY",e)}get positionY(){return this._positionY}set preferredColor(t){let e=this._preferredColor;this._preferredColor=t,this.requestUpdate("preferredColor",e)}get preferredColor(){return this._preferredColor}set preferredStyle(t){let e=this._preferredStyle;this._preferredStyle=t,this.requestUpdate("preferredStyle",e)}get preferredStyle(){return this._preferredStyle}set preferredWidth(t){let e=this._preferredWidth;this._preferredWidth=t,this.requestUpdate("preferredWidth",e)}get preferredWidth(){return this._preferredWidth}set pressure(t){let e=this._pressure;this._pressure=t,this.requestUpdate("pressure",e)}get pressure(){return this._pressure}set tangentialPressure(t){let e=this._tangentialPressure;this._tangentialPressure=t,this.requestUpdate("tangentialPressure",e)}get tangentialPressure(){return this._tangentialPressure}set tiltX(t){let e=this._tiltX;this._tiltX=t,this.requestUpdate("tiltX",e)}get tiltX(){return this._tiltX}set tiltY(t){let e=this._tiltY;this._tiltY=t,this.requestUpdate("tiltY",e)}get tiltY(){return this._tiltY}set twist(t){let e=this._twist;this._twist=t,this.requestUpdate("twist",e)}get twist(){return this._twist}set avgLatency(t){let e=this._avgLatency;this._avgLatency=t,this.requestUpdate("avgLatency",e)}get avgLatency(){return this._avgLatency}constructor(){super()}_closedClicked(){this.shadowRoot.host.style.visibility="hidden"}render(){return ve`
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
    `}}vt(Zh,"styles",qe`
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
  `);customElements.define("info-panel",Zh);var Hn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ag(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function kg(r){if(r.__esModule)return r;var t=r.default;if(typeof t=="function"){var e=function i(){return this instanceof i?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var n=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(e,i,n.get?n:{enumerable:!0,get:function(){return r[i]}})}),e}var jn,$c;function tn(){if($c)return jn;$c=1;const r={},t={};return jn={registerObservation(e,i){r[e]=i},registerDynamic(e,i){t[e]=i},buildObservation(e){if(typeof r[e.name]!="function")throw new TypeError(`The provided observation model name (${e.name}) is not registered`);return r[e.name](e)},buildDynamic(e,i){if(typeof t[e.name]!="function")throw new TypeError(`The provided dynamic model (${e.name}) name is not registered`);return t[e.name](e,i)}},jn}var Kn,Pc;function pl(){return Pc||(Pc=1,Kn=function(t,e){return t[0].map((i,n)=>i.map((o,s)=>{const c=t.map(h=>h[n][s]);return e(c,n,s)}))}),Kn}var Xn,Tc;function $g(){if(Tc)return Xn;Tc=1;const r=pl();return Xn=function(...e){return r(e,i=>i.reduce((n,o)=>n===null||o===null?null:n+o,0))},Xn}var Gn,Ic;function Qh(){return Ic||(Ic=1,Gn=function(t,e){if(t.length!==e.length)throw new Error("Lengths not maching");let i=0;for(const[n,o]of t.entries())i+=o*e[n];return i}),Gn}var Yn,Rc;function Jh(){return Rc||(Rc=1,Yn=function(t){let e=0;for(const i of t)e+=i*i;return Math.sqrt(e)}),Yn}var Zn,Oc;function Pg(){if(Oc)return Zn;Oc=1;const r=Qh(),t=Jh();return Zn=function(i,n){if(i.length!==n.length)throw new Error("The lengths of the vectors do not match");const o=t(i)*t(n);return o===0?0:r(i,n)/o},Zn}var Qn,Lc;function Tg(){return Lc||(Lc=1,Qn=function(t,e){if(t.length!==e.length)throw new Error("Invalid array lengths");if(!Array.isArray(t))throw console.log({array1:t}),new Error("Invalid array");const i=t.map((n,o)=>n-e[o]).map(n=>n*n);return Math.sqrt(i.reduce((n,o)=>n+o))}),Qn}var Jn,Mc;function tp(){return Mc||(Mc=1,Jn=function(t,e){return new Array(t).fill(1).map(()=>new Array(e).fill(0))}),Jn}var to,Nc;function Ig(){if(Nc)return to;Nc=1;const r=tp();return to=function(e){const i=r(e.length,e.length);for(const[n,o]of e.entries())i[n][n]=o;return i},to}var eo,zc;function ep(){return zc||(zc=1,eo=function(t){const e=[];for(let i=0;i<t;i++){const n=[];for(let o=0;o<t;o++)i===o?n.push(1):n.push(0);e.push(n)}return e}),eo}var ro,Dc;function Rg(){if(Dc)return ro;Dc=1;const r=ep();return ro=function({blocks:e,order:i=null}){const n=e.map(c=>c.length).reduce((c,h)=>c+h,0),o=r(n);let s=0;for(const c of e){for(const[h]of c.entries())for(const[l]of c.entries())o[h+s][l+s]=c[h][l];s+=c.length}return i?i.map(c=>i.map(h=>o[c][h])):o},ro}var io,qc;function rp(){return qc||(qc=1,io=function(t){let e=0;for(const[i,n]of t.entries())e+=n[i];return e}),io}var no,Uc;function ip(){return Uc||(Uc=1,no=function(t){return t[0].map((e,i)=>t.map(n=>n[i]))}),no}var oo,Wc;function np(){if(Wc)return oo;Wc=1;const r=pl();return oo=function(...e){return r(e,([i,n])=>i-n)},oo}var so,Fc;function op(){return Fc||(Fc=1,so=function(t,e){const i=[];for(let n=0;n<t.length;n++){i[n]=[];for(let o=0;o<e[0].length;o++){let s=0,c=!1;for(let h=0;h<t[0].length;h++){if(t[n][h]===null&&e[h][o]!==0||e[h][o]===null&&t[n][h]!==0){c=!0;break}s+=t[n][h]*e[h][o]}i[n][o]=c?null:s}}return i}),so}var ao,Vc;function sp(){return Vc||(Vc=1,ao=function(t){let e=0;for(const i of t)e+=i;return e}),ao}var lo,Bc;function ap(){if(Bc)return lo;Bc=1;const r=sp();return lo=function(e){let i=0;for(const n of e)i+=r(n);return i},lo}var co,Hc;function Og(){if(Hc)return co;Hc=1;const r=rp(),t=ip(),e=np(),i=op(),n=ap();return co=function(s,c){if(s===void 0)return n(c);if(c===void 0)return n(s);const h=e(s,c),l=i(t(h),h);return Math.sqrt(r(l))},co}var uo,jc;function Lg(){if(jc)return uo;jc=1;var r={};return r.Matrix=function(){},r.Matrix.create=function(t){var e=new r.Matrix;return e.setElements(t)},r.Matrix.I=function(t){for(var e=[],i=t,n;i--;)for(n=t,e[i]=[];n--;)e[i][n]=i===n?1:0;return r.Matrix.create(e)},r.Matrix.prototype={dup:function(){return r.Matrix.create(this.elements)},isSquare:function(){var t=this.elements.length===0?0:this.elements[0].length;return this.elements.length===t},toRightTriangular:function(){if(this.elements.length===0)return r.Matrix.create([]);var t=this.dup(),e,i=this.elements.length,n,o,s=this.elements[0].length,c;for(n=0;n<i;n++){if(t.elements[n][n]===0){for(o=n+1;o<i;o++)if(t.elements[o][n]!==0){for(e=[],c=0;c<s;c++)e.push(t.elements[n][c]+t.elements[o][c]);t.elements[n]=e;break}}if(t.elements[n][n]!==0)for(o=n+1;o<i;o++){var h=t.elements[o][n]/t.elements[n][n];for(e=[],c=0;c<s;c++)e.push(c<=n?0:t.elements[o][c]-t.elements[n][c]*h);t.elements[o]=e}}return t},determinant:function(){if(this.elements.length===0)return 1;if(!this.isSquare())return null;for(var t=this.toRightTriangular(),e=t.elements[0][0],i=t.elements.length,n=1;n<i;n++)e=e*t.elements[n][n];return e},isSingular:function(){return this.isSquare()&&this.determinant()===0},augment:function(t){if(this.elements.length===0)return this.dup();var e=t.elements||t;typeof e[0][0]>"u"&&(e=r.Matrix.create(e).elements);var i=this.dup(),n=i.elements[0].length,o=i.elements.length,s=e[0].length,c;if(o!==e.length)return null;for(;o--;)for(c=s;c--;)i.elements[o][n+c]=e[o][c];return i},inverse:function(){if(this.elements.length===0||!this.isSquare()||this.isSingular())return null;for(var t=this.elements.length,e=t,i,n=this.augment(r.Matrix.I(t)).toRightTriangular(),o=n.elements[0].length,s,c,h,l=[],u;e--;){for(c=[],l[e]=[],h=n.elements[e][e],s=0;s<o;s++)u=n.elements[e][s]/h,c.push(u),s>=t&&l[e].push(u);for(n.elements[e]=c,i=e;i--;){for(c=[],s=0;s<o;s++)c.push(n.elements[i][s]-n.elements[e][s]*n.elements[i][e]);n.elements[i]=c}}return r.Matrix.create(l)},setElements:function(t){var e,i,n=t.elements||t;if(n[0]&&typeof n[0][0]<"u"){for(e=n.length,this.elements=[];e--;)for(i=n[e].length,this.elements[e]=[];i--;)this.elements[e][i]=n[e][i];return this}var o=n.length;for(this.elements=[],e=0;e<o;e++)this.elements.push([n[e]]);return this}},uo=function(t){const e=r.Matrix.create(t).inverse();return e!==null?e.elements:null},uo}var ho,Kc;function Mg(){if(Kc)return ho;Kc=1;const r=Lg();return ho=function(e){return r(e)},ho}var po,Xc;function Ng(){return Xc||(Xc=1,po=function(t,e){return t.map((i,n)=>i.map((o,s)=>e(o,n,s)))}),po}var fo,Gc;function lp(){return Gc||(Gc=1,fo=function({matrix:t,outputSize:e,rowIndexes:i,colIndexes:n}){const[o,s]=e;if(!Array.isArray(i))throw new TypeError(`Invalid rowIndexes ${i}`);if(!Array.isArray(n))throw new TypeError(`Invalid colIndexes ${n}`);return new Array(o).fill(0).map((c,h)=>new Array(s).fill(0).map((l,u)=>n.includes(u)&&i.includes(h)?t[i.indexOf(h)][n.indexOf(u)]:0))}),fo}var mo,Yc;function zg(){if(Yc)return mo;Yc=1;const r=lp();return mo=function(t,{columns:e}){if(e<t[0].length)throw new TypeError(`Output columns ${e} is greater than input columns ${t[0].length}`);return r({matrix:t,outputSize:[t.length,e],rowIndexes:new Array(t.length).fill(0).map((i,n)=>n),colIndexes:new Array(t[0].length).fill(0).map((i,n)=>n)})},mo}var go,Zc;function Dg(){return Zc||(Zc=1,go=function(t,e){return e.map(i=>e.map(n=>t[i][n]))}),go}var vo,Qc;function qg(){return Qc||(Qc=1,vo={add:$g(),cosSimilarity:Pg(),euclideanDist:Tg(),diag:Ig(),diagBlock:Rg(),dotProduct:Qh(),elemWise:pl(),frobenius:Og(),identity:ep(),invert:Mg(),mapMatrix:Ng(),matMul:op(),matPermutation:lp(),padWithZeroCols:zg(),subtract:np(),subSquareMatrix:Dg(),sum:ap(),trace:rp(),transpose:ip(),zeros:tp(),norm:Jh(),sumVector:sp()}),vo}var bo,Jc;function It(){return Jc||(Jc=1,bo=qg()),bo}var yo,td;function Ug(){if(td)return yo;td=1;const{identity:r}=It();return yo=function(t,e){let{dimension:i}=t;const n=e.dimension,{observedProjection:o}=e,{stateProjection:s}=e;let{covariance:c}=t;t.dimension||(n?i=n:o?i=o[0].length:s&&(i=s[0].length));const h=r(i);return c=c||r(i),Object.assign({},t,{dimension:i,transition:h,covariance:c})},yo}var _o,ed;function Wg(){if(ed)return _o;ed=1;const{identity:r}=It();return _o=function(t,e){const i=t.timeStep||1,{observedProjection:n}=e,{stateProjection:o}=e,s=e.dimension;let c;if(o&&Number.isInteger(o[0].length/2))c=e.stateProjection[0].length;else if(n)c=n[0].length*2;else if(s)c=s*2;else throw new Error("observedProjection or stateProjection should be defined in observation in order to use constant-speed filter");const h=c/2,l=r(c);for(let d=0;d<h;d++)l[d][d+h]=i;const u=new Array(h).fill(1).concat(new Array(h).fill(i*i)),a=t.covariance||u;return Object.assign({},t,{dimension:c,transition:l,covariance:a})},_o}var wo,rd;function Fg(){if(rd)return wo;rd=1;const{identity:r}=It();return wo=function(t,e){const i=t.timeStep||1,{observedProjection:n}=e,{stateProjection:o}=e,s=e.dimension;let c;if(o&&Number.isInteger(o[0].length/3))c=e.stateProjection[0].length;else if(n)c=n[0].length*3;else if(s)c=s*3;else throw new Error("observedProjection or stateProjection should be defined in observation in order to use constant-speed filter");const h=c/3,l=r(c);for(let d=0;d<h;d++)l[d][d+h]=i,l[d][d+2*h]=.5*i**2,l[d+h][d+2*h]=i;const u=new Array(h).fill(1).concat(new Array(h).fill(i*i)).concat(new Array(h).fill(i**4)),a=t.covariance||u;return Object.assign({},t,{dimension:c,transition:l,covariance:a})},wo}var xo,id;function Vg(){if(id)return xo;id=1;const{buildDynamic:r}=tn();return xo=function({perName:t},e){const{observedProjection:i}=e,n=i[0].length,o=Object.keys(t),s={};let c=n,h=0;o.forEach(a=>{const d=t[a].obsDynaIndexes;if(typeof t[a].name=="string"&&t[a].name!==a)throw new Error(`${t[a].name} and "${a}" should match`);t[a].name=a;const{dimension:p,transition:f,covariance:v,init:b}=r(t[a],e),S=[];for(let y=0;y<p;y++){const E=y<d.length;let k;if(E){if(k=h,k!==d[y])throw new Error("thsoe should match");h++}else k=c,c++;S.push(k)}s[a]={dynamicIndexes:S,transition:f,dimension:p,covariance:v,init:b}});const l=o.map(a=>s[a].dimension).reduce((a,d)=>a+d,0);if(c!==l)throw new Error("miscalculation of transition");const u={index:-1,mean:new Array(l),covariance:new Array(l).fill(0).map(()=>new Array(l).fill(0))};return o.forEach(a=>{const{dynamicIndexes:d,init:p}=s[a];if(typeof p!="object")throw new TypeError("Init is mandatory");d.forEach((f,v)=>d.forEach((b,S)=>{u.covariance[f][b]=p.covariance[v][S]})),d.forEach((f,v)=>{u.mean[f]=p.mean[v]})}),{dimension:l,init:u,transition(a){const{previousCorrected:d}=a,p=new Array(l).fill().map(()=>new Array(l).fill(0));return o.forEach(f=>{const{dynamicIndexes:v,transition:b}=s[f],S=Object.assign({},a,{previousCorrected:d.subState(v)}),y=b(S);v.forEach((E,k)=>v.forEach((P,I)=>{p[E][P]=y[k][I]}))}),p},covariance(a){const{previousCorrected:d}=a,p=new Array(l).fill().map(()=>new Array(l).fill(0));return o.forEach(f=>{const{dynamicIndexes:v,covariance:b}=s[f],S=Object.assign({},a,{previousCorrected:d.subState(v)}),y=b(S);v.forEach((E,k)=>v.forEach((P,I)=>{p[E][P]=y[k][I]}))}),p}}},xo}var So,nd;function Bg(){if(nd)return So;nd=1;const{identity:r,diag:t}=It(),e=1e6;return So=function({staticCovariance:n,obsDynaIndexes:o,init:s}){const c=o.length;if(s||(s={mean:new Array(o.length).fill(0).map(()=>[0]),covariance:t(new Array(o.length).fill(e)),index:-1}),n&&n.length!==c)throw new Error("staticCovariance has wrong size");return{dimension:c,transition(){return r(c)},covariance({previousCorrected:h,index:l}){const u=l-h.index;return n?n.map(a=>a.map(d=>d*u)):r(c)},init:s}},So}var Co,od;function Hg(){if(od)return Co;od=1;const{identity:r,diag:t}=It(),e={linear(o){return o},one(){return 1},square(o){return o*o}},i=1e6;return Co=function({staticCovariance:o,obsDynaIndexes:s,nullGapModel:c=null,init:h},l){if(!s){const a=l.observedProjection[0].length;s=new Array(a).fill(0).map((d,p)=>p)}if(o&&Number.isNaN(o[0][0]))throw new Error("NaN staticCovariance");const u=2*s.length;return h||(h={mean:new Array(s.length*2).fill(0).map(()=>[0]),covariance:t(new Array(s.length*2).fill(i)),index:-1}),c||(c=new Array(u).fill(0).map(()=>"linear")),{dimension:u,init:h,transition({previousCorrected:a,index:d}){const p=d-a.index;if(Number.isNaN(p))throw new TypeError("diffBetweenIndexes is NaN");const f=new Array(u).fill(new Array(u).fill()),v=u/2;return f.map((S,y)=>S.map((E,k)=>y===k?1:y+v===k?d===0?0:p:0))},covariance({previousCorrected:a,index:d}){const p=d-a.index;return o?o.map((v,b)=>v.map((S,y)=>{const E=Math.sqrt(e[c[b]](p)*e[c[y]](p));return S*E})):r(u)}}},Co}var Eo,sd;function cp(){if(sd)return Eo;sd=1;const{diag:r}=It();return Eo=function({staticCovariance:e,avSpeed:i,center:n},o){const s=o.observedProjection[0].length,c=2*s;if(n===void 0)throw new TypeError("Center must be defined");if(n.length!==s)throw new TypeError(`Center size should be ${s}`);if(i.length!==s)throw new TypeError(`avSpeed size should be ${s}`);const h=r(n.map(d=>d*d/3).concat(i.map(d=>d*d/3)));return{init:{mean:n.map(d=>[d]).concat(n.map(()=>[0])),covariance:h,index:-1},dimension:c,transition:({getTime:d,index:p,previousCorrected:f})=>{const v=d(p)-d(f.index);if(typeof v!="number"||Number.isNaN(v))throw new TypeError(`dT (${v}) should be a number`);const b=r(n.map(()=>1).concat(n.map(()=>1)));for(let S=0;S<s;S++)b[S][s+S]=v;if(Number.isNaN(b[0][2]))throw new TypeError("nan mat");return b},covariance:({index:d,previousCorrected:p,getTime:f})=>{const v=f(d)-f(p.index);if(typeof v!="number")throw new TypeError(`dT (${v}) should be a number`);const b=Math.sqrt(v);if(Number.isNaN(b))throw console.log({lastPreviousIndex:p.index,index:d}),console.log(v,p.index,d,f(d),f(p.index)),new Error("Sqrt(dT) is NaN");return r(e.map(S=>S*b))}}},Eo}var Ao,ad;function jg(){if(ad)return Ao;ad=1;const{elemWise:r,diag:t}=It(),e=cp(),i=function(n,o){return n===0?0:o===0?1:n/o};return Ao=function(n,o){const{typicalTimes:s}=n;if(!Array.isArray(s))throw new TypeError("typicalTimes must be defined");const c=e(n,o),{dimension:h,init:l}=c;if(s.length!==h)throw new TypeError(`typicalTimes (${s.length}) length is not as expected (${h})`);const u=function({ratios:a,aMat:d,bMat:p}){return r([d,p],([f,v],b,S)=>{const y=b===S?a[b]:(a[b]+a[S])/2;return y*f+(1-y)*v})};return{dimension:h,init:l,transition(a){const d=c.transition(a),{getTime:p,index:f,previousCorrected:v}=a,b=p(f)-p(v.index),S=s.map(E=>Math.exp(-1*b/E)),y=t(r([l.mean,v.mean],([E,k])=>i(E,k)).reduce((E,k)=>E.concat(k)));return u({ratios:S,aMat:d,bMat:y})},covariance(a,d){const{getTime:p,index:f,previousCorrected:v}=a,b=p(f)-p(v.index),S=s.map(E=>Math.exp(-1*b/E)),y=c.covariance(a,d);return u({ratios:S,aMat:y,bMat:l.covariance})}}},Ao}var ko,ld;function Kg(){return ld||(ld=1,ko={"constant-position":Ug(),"constant-speed":Wg(),"constant-acceleration":Fg(),composition:Vg(),"constant-position-with-null":Bg(),"constant-speed-with-null":Hg(),"constant-speed-dynamic":cp(),"shortterm-constant-speed":jg()}),ko}var $o,cd;function Xg(){if(cd)return $o;cd=1;const r=function(t,e,i="checkShape"){if(t.length!==e[0])throw new Error(`[${i}] expected size (${e[0]}) and length (${t.length}) does not match`);if(e.length>1)return t.forEach(n=>r(n,e.slice(1),i))};return $o=r,$o}var Po,dd;function si(){if(dd)return Po;dd=1;const r=Xg();return Po=function(t,e,i="checkMatrix"){if(!Array.isArray(t))throw new TypeError(`[${i}] should be a 2-level array matrix and is ${t}`);for(const n of t)if(!Array.isArray(n))throw new TypeError(`[${i}] 1-level array should be a matrix ${JSON.stringify(t)}`);if(t.reduce((n,o)=>n.concat(o)).some(n=>Number.isNaN(n)))throw new Error(`[${i}] Matrix should not have a NaN
In : 
`+t.join(`
`));e&&r(t,e,i)},Po}var To,ud;function fl(){if(ud)return To;ud=1;const{diag:r}=It(),t=si();return To=function(e,{dimension:i,title:n="polymorph"}={}){if(typeof e=="number"||Array.isArray(e)){if(typeof e=="number"&&typeof i=="number")return r(new Array(i).fill(e));if(Array.isArray(e)&&Array.isArray(e[0])){let o;return typeof i=="number"&&(o=[i,i]),t(e,o,n),e}if(Array.isArray(e)&&typeof e[0]=="number")return r(e)}return e},To}var Io,hd;function Gg(){if(hd)return Io;hd=1;const{identity:r}=It(),t=fl(),e=si(),i=n=>n.map(o=>o.concat());return Io=function(n){const{sensorDimension:o=1,sensorCovariance:s=1,nSensors:c=1}=n,h=t(s,{dimension:o});e(h,[o,o],"observation.sensorCovariance");const l=r(o);let u=[];const a=o*c,d=r(a);for(let p=0;p<c;p++){u=u.concat(i(l));for(const[f,v]of h.entries())for(const[b,S]of v.entries())d[f+p*o][b+p*o]=S}return Object.assign({},n,{dimension:a,observedProjection:u,covariance:d})},Io}var Ro,pd;function Yg(){if(pd)return Ro;pd=1;const{identity:r}=It(),{buildObservation:t}=tn();return Ro=function(i){const{dimension:n,observedProjection:o,covariance:s}=t(Object.assign({},i,{name:"sensor"}));return{dimension:n,observedProjection:o,covariance(c){const h=r(n),{variance:l}=c;return l.forEach((u,a)=>{h[a][a]=u*s[a][a]}),h}}},Ro}var Oo,fd;function dp(){return fd||(fd=1,Oo=function(t){return Number.isFinite(t)}),Oo}var Lo,md;function Zg(){if(md)return Lo;md=1;var r=dp();return Lo=function(e){if(!Array.isArray(e))return!1;var i=e.length;if(i===0)return!0;var n=e[0];if(!Array.isArray(n))return!1;var o=n.length;if(o===0)return!1;for(var s=0;s<i;s++){var c=e[s];if(!Array.isArray(c)||c.length!==o)return!1;for(var h=0;h<o;h++)if(!r(c[h]))return!1}return!0},Lo}var Mo,gd;function mt(){return gd||(gd=1,Mo={INVALID_ARRAY:"Invalid argument: Received a non-array argument",INVALID_MATRIX:"Invalid argument: Received an invalid matrix",INVALID_SQUARE_MATRIX:"Invalid argument: Received a non-square matrix",INVALID_UPPER_TRIANGULAR_MATRIX:"Invalid argument: Received a non upper-triangular matrix",INVALID_LOWER_TRIANGULAR_MATRIX:"Invalid argument: Received a non lower-triangular matrix",INVALID_EXPONENT:"Invalid argument: Expected a non-negative integer exponent",INVALID_ROW_COL:"Invalid argument: Expected non-negative integer row and column",INVALID_ROW:"Invalid argument: Expected non-negative integer row",INVALID_COLUMN:"Invalid argument: Expected non-negative integer column",INVALID_ROWS_EXPRESSION:"Invalid argument: Received invalid rows expression",INVALID_COLUMNS_EXPRESSION:"Invalid argument: Received invalid columns expression",INVALID_P_NORM:"Invalid argument: Received invalid p-norm",OVERFLOW_INDEX:"Invalid argument: Matrix index overflow",OVERFLOW_COLUMN:"Invalid argument: Column index overflow",OVERFLOW_ROW:"Invalid argument: Row index overflow",NO_UNIQUE_SOLUTION:"Arithmetic Exception: The system has no unique solution",SIZE_INCOMPATIBLE:"Invalid argument: Matrix size-incompatible",SINGULAR_MATRIX:"Arithmetic Exception: The matrix is not invertible",EXPECTED_STRING_NUMBER_AT_POS_1_2:"Invalid argument: Expected a string or a number at arguments[1] and arguments[2]",EXPECTED_ARRAY_OF_NUMBERS_OR_MATRICES:"Invalid argument: Expected either an array of numbers or an array of square matrices"}),Mo}var No,vd;function Qg(){if(vd)return No;vd=1;function r(c,h){return o(c)||n(c,h)||e(c,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(c,h){if(c){if(typeof c=="string")return i(c,h);var l=Object.prototype.toString.call(c).slice(8,-1);if(l==="Object"&&c.constructor&&(l=c.constructor.name),l==="Map"||l==="Set")return Array.from(c);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return i(c,h)}}function i(c,h){(h==null||h>c.length)&&(h=c.length);for(var l=0,u=new Array(h);l<h;l++)u[l]=c[l];return u}function n(c,h){var l=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(l!=null){var u=[],a=!0,d=!1,p,f;try{for(l=l.call(c);!(a=(p=l.next()).done)&&(u.push(p.value),!(h&&u.length===h));a=!0);}catch(v){d=!0,f=v}finally{try{!a&&l.return!=null&&l.return()}finally{if(d)throw f}}return u}}function o(c){if(Array.isArray(c))return c}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isDiagonal!==void 0)return this._isDiagonal;var h=1/(Math.pow(10,c)*2),l=this._matrix,u=this.size(),a=r(u,2),d=a[0],p=a[1];if(d===0)return this._isDiagonal=!0,!0;for(var f=0;f<d;f++)for(var v=0;v<p;v++)if(f!==v&&Math.abs(l[f][v])>=h)return this.isDiagonal=!1,!1;return this._isDiagonal=!0,!0}return No=s,No}var zo,bd;function Jg(){if(bd)return zo;bd=1;function r(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isSkewSymmetric!==void 0)return this._isSkewSymmetric;if(!this.isSquare())return this._isSkewSymmetric=!1,!1;var e=this._matrix,i=1/(Math.pow(10,t)*2),n=e.length;if(n===0)return this._isSkewSymmetric=!0,!0;for(var o=0;o<n;o++)for(var s=0;s<o;s++)if(Math.abs(e[o][s]+e[s][o])>=i)return this._isSkewSymmetric=!1,!1;return this._isSkewSymmetric=!0,!0}return zo=r,zo}var Do,yd;function tv(){if(yd)return Do;yd=1;function r(){if(this._isSquare!==void 0)return this._isSquare;var t=this._matrix;return t.length===0?(this._isSquare=!0,!0):(this._isSquare=t.length===t[0].length,this._isSquare)}return Do=r,Do}var qo,_d;function ev(){if(_d)return qo;_d=1;function r(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isSymmetric!==void 0)return this._isSymmetric;if(!this.isSquare())return!1;for(var e=this._matrix,i=1/(Math.pow(10,t)*2),n=e.length,o=0;o<n;o++)for(var s=0;s<=o;s++)if(Math.abs(e[o][s]-e[s][o])>=i)return this._isSymmetric=!1,!1;return this._isSymmetric=!0,!0}return qo=r,qo}var Uo,wd;function rv(){if(wd)return Uo;wd=1;function r(c,h){return o(c)||n(c,h)||e(c,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(c,h){if(c){if(typeof c=="string")return i(c,h);var l=Object.prototype.toString.call(c).slice(8,-1);if(l==="Object"&&c.constructor&&(l=c.constructor.name),l==="Map"||l==="Set")return Array.from(c);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return i(c,h)}}function i(c,h){(h==null||h>c.length)&&(h=c.length);for(var l=0,u=new Array(h);l<h;l++)u[l]=c[l];return u}function n(c,h){var l=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(l!=null){var u=[],a=!0,d=!1,p,f;try{for(l=l.call(c);!(a=(p=l.next()).done)&&(u.push(p.value),!(h&&u.length===h));a=!0);}catch(v){d=!0,f=v}finally{try{!a&&l.return!=null&&l.return()}finally{if(d)throw f}}return u}}function o(c){if(Array.isArray(c))return c}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isLowerTriangular!==void 0)return this._isLowerTriangular;var h=1/(Math.pow(10,c)*2),l=this._matrix,u=this.size(),a=r(u,2),d=a[0],p=a[1];if(d===0)return this._isLowerTriangular=!0,!0;for(var f=0;f<d;f++)for(var v=f+1;v<p;v++)if(Math.abs(l[f][v])>=h)return this._isLowerTriangular=!1,!1;return this._isLowerTriangular=!0,!0}return Uo=s,Uo}var Wo,xd;function iv(){if(xd)return Wo;xd=1;function r(c,h){return o(c)||n(c,h)||e(c,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(c,h){if(c){if(typeof c=="string")return i(c,h);var l=Object.prototype.toString.call(c).slice(8,-1);if(l==="Object"&&c.constructor&&(l=c.constructor.name),l==="Map"||l==="Set")return Array.from(c);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return i(c,h)}}function i(c,h){(h==null||h>c.length)&&(h=c.length);for(var l=0,u=new Array(h);l<h;l++)u[l]=c[l];return u}function n(c,h){var l=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(l!=null){var u=[],a=!0,d=!1,p,f;try{for(l=l.call(c);!(a=(p=l.next()).done)&&(u.push(p.value),!(h&&u.length===h));a=!0);}catch(v){d=!0,f=v}finally{try{!a&&l.return!=null&&l.return()}finally{if(d)throw f}}return u}}function o(c){if(Array.isArray(c))return c}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isUpperTriangular!==void 0)return this._isUpperTriangular;var h=1/(Math.pow(10,c)*2),l=this._matrix,u=this.size(),a=r(u,2),d=a[0],p=a[1];if(d===0)return this._isUpperTriangular=!0,!0;for(var f=0;f<d;f++)for(var v=0;v<p;v++)if(!(f<=v)&&Math.abs(l[f][v])>=h)return this._isUpperTriangular=!1,!1;return this._isUpperTriangular=!0,!0}return Wo=s,Wo}var Fo,Sd;function nv(){if(Sd)return Fo;Sd=1;function r(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isOrthogonal!==void 0)return this._isOrthogonal;if(!this.isSquare())return this._isOrthogonal=!1,!1;for(var e=this._matrix,i=1/(Math.pow(10,t)*2),n=e.length,o=0;o<n;o++)for(var s=o;s<n;s++){for(var c=0,h=0;h<n;h++)c+=e[o][h]*e[s][h];if(o===s&&Math.abs(c-1)>=i)return this._isOrthogonal=!1,!1;if(o!==s&&Math.abs(c)>=i)return this._isOrthogonal=!1,!1}return this._isOrthogonal=!0,!0}return Fo=r,Fo}var Vo,Cd;function ov(){if(Cd)return Vo;Cd=1;var r=We(),t=mt(),e=t.INVALID_P_NORM,i=t.SINGULAR_MATRIX,n=t.INVALID_SQUARE_MATRIX;function o(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:2;if(s!==1&&s!==2&&s!==1/0&&s!=="F")throw new Error(e);if(!this.isSquare())throw new Error(n);try{var c=r.inverse(this);return c.norm(s)*this.norm(s)}catch(h){if(h.message===i)return 1/0;throw h}}return Vo=o,Vo}var Bo,Ed;function sv(){if(Ed)return Bo;Ed=1;function r(u,a){return o(u)||n(u,a)||e(u,a)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(u,a){if(u){if(typeof u=="string")return i(u,a);var d=Object.prototype.toString.call(u).slice(8,-1);if(d==="Object"&&u.constructor&&(d=u.constructor.name),d==="Map"||d==="Set")return Array.from(u);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return i(u,a)}}function i(u,a){(a==null||a>u.length)&&(a=u.length);for(var d=0,p=new Array(a);d<a;d++)p[d]=u[d];return p}function n(u,a){var d=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(d!=null){var p=[],f=!0,v=!1,b,S;try{for(d=d.call(u);!(f=(b=d.next()).done)&&(p.push(b.value),!(a&&p.length===a));f=!0);}catch(y){v=!0,S=y}finally{try{!f&&d.return!=null&&d.return()}finally{if(v)throw S}}return p}}function o(u){if(Array.isArray(u))return u}var s=We(),c=mt(),h=c.INVALID_SQUARE_MATRIX;function l(){if(!this.isSquare())throw new Error(h);if(this._det!==void 0)return this._det;var u=this._matrix,a=u.length;if(a===0)return this._det=1,1;if(a===1)return this._det=u[0][0],this._det;if(a===2)return this._det=u[0][0]*u[1][1]-u[0][1]*u[1][0],this._det;if(a===3)return this._det=u[0][0]*u[1][1]*u[2][2]+u[0][1]*u[1][2]*u[2][0]+u[0][2]*u[1][0]*u[2][1]-u[0][2]*u[1][1]*u[2][0]-u[0][1]*u[1][0]*u[2][2]-u[0][0]*u[1][2]*u[2][1],this._det;for(var d=s.LU(this,!0),p=r(d,2),f=p[0],v=p[1],b=v._matrix,S=0,y=0;y<a;y++)if(f[y]!==y)for(;f[y]!==y;){var E=f[y];f[y]=f[E],f[E]=E,S++}for(var k=1,P=0;P<a;P++)k*=b[P][P];return S%2===1?(this._det=k*-1,this._det):(this._det=k,k)}return Bo=l,Bo}var Ho,Ad;function av(){if(Ad)return Ho;Ad=1;function r(){return this.re}return Ho=r,Ho}var jo,kd;function lv(){if(kd)return jo;kd=1;function r(){return this.im}return jo=r,jo}var Ko,$d;function cv(){if($d)return Ko;$d=1;function r(){return Math.sqrt(Math.pow(this.re,2)+Math.pow(this.im,2))}return Ko=r,Ko}var Xo,Pd;function dv(){if(Pd)return Xo;Pd=1;function r(){var t=this.re,e=this.im,i=1/(Math.pow(10,15)*2);if(!(Math.abs(t)<i&&Math.abs(e)<i))return t===0?e>0?Math.PI*.5:Math.PI*1.5:e===0?t>0?0:Math.PI:t>0&&e>0?Math.atan(e/t):t<0&&e>0?Math.PI-Math.atan(e/(t*-1)):t<0&&e<0?Math.PI+Math.atan(e*-1/(t*-1)):Math.PI*2-Math.atan(e*-1/t)}return Xo=r,Xo}var Go,Td;function uv(){if(Td)return Go;Td=1;function r(){var t=this.re,e=this.im;return Number.isNaN(t)||Number.isNaN(e)?"NaN":t===0&&e===0?"0":t===0?e===1?"i":e===-1?"-i":"".concat(e,"i"):e===0?"".concat(t):e>0?e===1?"".concat(t," + i"):"".concat(t," + ").concat(e,"i"):e===-1?"".concat(t," - i"):"".concat(t," - ").concat(Math.abs(e),"i")}return Go=r,Go}var Yo,Id;function hv(){if(Id)return Yo;Id=1;function r(t){if(!(t instanceof this))return!1;var e=t.getReal(),i=t.getImaginary();return!!(Number.isNaN(e)||Number.isNaN(i))}return Yo=r,Yo}var Zo,Rd;function pv(){if(Rd)return Zo;Rd=1;function r(t,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:15;if(!(t instanceof this)||!(e instanceof this))return!1;if(!Number.isInteger(i)||i<0)throw new Error("Invalid argument: Expected a non-negative integer digit");var n=1/(Math.pow(10,i)*2),o=t.getReal(),s=t.getImaginary(),c=e.getReal(),h=e.getImaginary();return Number.isNaN(o)&&Number.isNaN(s)&&Number.isNaN(c)&&Number.isNaN(h)?!0:Math.abs(o-c)<n&&Math.abs(s-h)<n}return Zo=r,Zo}var Qo,Od;function fv(){if(Od)return Qo;Od=1;function r(t){return t instanceof this?new this(t.getReal(),t.getImaginary()*-1):this.NaN}return Qo=r,Qo}var Jo,Ld;function mv(){if(Ld)return Jo;Ld=1;function r(t){return t instanceof this?this.divide(this.ONE,t):this.NaN}return Jo=r,Jo}var ts,Md;function gv(){if(Md)return ts;Md=1;function r(t,e){return!(t instanceof this)||!(e instanceof this)?this.NaN:new this(t.re+e.re,t.im+e.im)}return ts=r,ts}var es,Nd;function vv(){if(Nd)return es;Nd=1;function r(t,e){return!(t instanceof this)||!(e instanceof this)?this.NaN:new this(t.re-e.re,t.im-e.im)}return es=r,es}var rs,zd;function bv(){if(zd)return rs;zd=1;function r(t,e){if(!(t instanceof this)||!(e instanceof this))return this.NaN;var i=t.re,n=t.im,o=e.re,s=e.im;return new this(i*o-n*s,i*s+n*o)}return rs=r,rs}var is,Dd;function yv(){if(Dd)return is;Dd=1;function r(t,e){if(!(t instanceof this)||!(e instanceof this))return this.NaN;var i=t.re,n=t.im,o=e.re,s=e.im;if(Math.abs(o)<this.EPSILON&&Math.abs(s)<this.EPSILON)return this.NaN;var c=Math.pow(o,2)+Math.pow(s,2);return new this((i*o+n*s)/c,(n*o-i*s)/c)}return is=r,is}var ns,qd;function _v(){if(qd)return ns;qd=1;function r(t){if(!(t instanceof this))return this.NaN;var e=t.getReal(),i=t.getImaginary(),n=Math.exp(e);return new this(n*Math.cos(i),n*Math.sin(i))}return ns=r,ns}var os,Ud;function wv(){if(Ud)return os;Ud=1;function r(t){if(!(t instanceof this))return this.NaN;var e=t.getModulus(),i=t.getArgument();return e<this.EPSILON||i===void 0?this.NaN:new this(Math.log(e),i)}return os=r,os}var ss,Wd;function xv(){if(Wd)return ss;Wd=1;function r(t,e){return!(t instanceof this)||typeof e!="number"&&!(e instanceof this)?this.NaN:typeof e=="number"?!Number.isFinite(e)||Number.isNaN(e)?this.NaN:e===0?this.ONE:this.isEqual(t,this.ZERO)?this.ZERO:this.exp(this.multiply(new this(e,0),this.log(t))):e instanceof this?this.exp(this.multiply(e,this.log(t))):this.NaN}return ss=r,ss}var as,Fd;function Sv(){if(Fd)return as;Fd=1;function r(t){if(!(t instanceof this))return this.NaN;var e=t.getReal(),i=t.getImaginary();return new this(Math.sin(e)*Math.cosh(i),Math.cos(e)*Math.sinh(i))}return as=r,as}var ls,Vd;function Cv(){if(Vd)return ls;Vd=1;function r(t){if(!(t instanceof this))return this.NaN;var e=t.getReal(),i=t.getImaginary();return new this(Math.cos(e)*Math.cosh(i),Math.sin(e)*Math.sinh(i)*-1)}return ls=r,ls}var cs,Bd;function Ev(){if(Bd)return cs;Bd=1;function r(t){return this.divide(this.sin(t),this.cos(t))}return cs=r,cs}var ds,Hd;function Av(){if(Hd)return ds;Hd=1;function r(t){return this.divide(this.ONE,this.sin(t))}return ds=r,ds}var us,jd;function kv(){if(jd)return us;jd=1;function r(t){return this.divide(this.ONE,this.cos(t))}return us=r,us}var hs,Kd;function $v(){if(Kd)return hs;Kd=1;function r(t){return this.divide(this.ONE,this.tan(t))}return hs=r,hs}var ps,Xd;function Pv(){if(Xd)return ps;Xd=1;function r(t){return this.multiply(new this(0,-1),this.log(this.add(this.multiply(new this(0,1),t),this.pow(this.subtract(this.ONE,this.pow(t,2)),.5))))}return ps=r,ps}var fs,Gd;function Tv(){if(Gd)return fs;Gd=1;function r(t){return this.subtract(new this(Math.PI/2),this.asin(t))}return fs=r,fs}var ms,Yd;function Iv(){if(Yd)return ms;Yd=1;function r(t){return this.multiply(new this(0,1/2),this.subtract(this.log(this.subtract(this.ONE,this.multiply(new this(0,1),t))),this.log(this.add(this.ONE,this.multiply(new this(0,1),t)))))}return ms=r,ms}var gs,Zd;function Rv(){if(Zd)return gs;Zd=1;function r(t){return this.asin(this.inverse(t))}return gs=r,gs}var vs,Qd;function Ov(){if(Qd)return vs;Qd=1;function r(t){return this.acos(this.inverse(t))}return vs=r,vs}var bs,Jd;function Lv(){if(Jd)return bs;Jd=1;function r(t){return this.atan(this.inverse(t))}return bs=r,bs}var ys,tu;function Mv(){if(tu)return ys;tu=1;function r(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?r=function(n){return typeof n}:r=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(e)}function t(e,i){var n=r(e),o=r(i);return n==="number"&&o==="undefined"?Number.isNaN(e)||!Number.isFinite(e)?(this.re=NaN,this.im=NaN,this):(this.re=e,this.im=0,this):n==="number"&&o==="number"?Number.isNaN(e)||Number.isNaN(i)||!Number.isFinite(e)||!Number.isFinite(i)?(this.re=NaN,this.im=NaN,this):(this.re=e,this.im=i,this):(this.re=NaN,this.im=NaN,this)}return t.prototype.getReal=av(),t.prototype.getImaginary=lv(),t.prototype.getModulus=cv(),t.prototype.getArgument=dv(),t.prototype.toString=uv(),t.isNaN=hv(),t.isEqual=pv(),t.conjugate=fv(),t.inverse=mv(),t.add=gv(),t.subtract=vv(),t.multiply=bv(),t.divide=yv(),t.exp=_v(),t.log=wv(),t.pow=xv(),t.sin=Sv(),t.cos=Cv(),t.tan=Ev(),t.csc=Av(),t.sec=kv(),t.cot=$v(),t.asin=Pv(),t.acos=Tv(),t.atan=Iv(),t.acsc=Rv(),t.asec=Ov(),t.acot=Lv(),t.NaN=new t(NaN),t.ONE=new t(1),t.ZERO=new t(0),t.PI=new t(Math.PI),t.E=new t(Math.E),t.EPSILON=1/(Math.pow(10,15)*2),ys=t,ys}var _s,eu;function Nv(){if(eu)return _s;eu=1;function r(f,v){return o(f)||n(f,v)||e(f,v)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(f,v){if(f){if(typeof f=="string")return i(f,v);var b=Object.prototype.toString.call(f).slice(8,-1);if(b==="Object"&&f.constructor&&(b=f.constructor.name),b==="Map"||b==="Set")return Array.from(f);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return i(f,v)}}function i(f,v){(v==null||v>f.length)&&(v=f.length);for(var b=0,S=new Array(v);b<v;b++)S[b]=f[b];return S}function n(f,v){var b=f==null?null:typeof Symbol<"u"&&f[Symbol.iterator]||f["@@iterator"];if(b!=null){var S=[],y=!0,E=!1,k,P;try{for(b=b.call(f);!(y=(k=b.next()).done)&&(S.push(k.value),!(v&&S.length===v));y=!0);}catch(I){E=!0,P=I}finally{try{!y&&b.return!=null&&b.return()}finally{if(E)throw P}}return S}}function o(f){if(Array.isArray(f))return f}var s=Mv(),c=We(),h=mt(),l=h.INVALID_SQUARE_MATRIX;function u(){if(!this.isSquare())throw new Error(l);if(this._eigenvalues!==void 0)return this._eigenvalues;var f=this.size()[0],v=[],b=this._digit,S=1/(Math.pow(10,b)*2),y=c.clone(this)._matrix,E=!0,k=!1;a(y,b);for(var P=f-1;P>0;P--){var I=0,O=void 0;if(k){k=!1;continue}for(var N=y[f-1][f-1];;){E?O=Math.abs(y[P][P-1]):O=p(y[P-1][P-1],y[P-1][P],y[P][P-1],y[P][P]).metric;for(var U=0;U<f;U++)y[U][U]-=N;d(y,b);for(var z=0;z<f;z++)y[z][z]+=N;if(E&&O<Math.abs(y[P][P-1])&&I++,E&&Math.abs(y[P][P-1])<S){v[P]=new s(y[P][P]);break}var W=p(y[P-1][P-1],y[P-1][P],y[P][P-1],y[P][P]),F=W.metric,V=W.eigen1,G=W.eigen2;if(!E&&Math.abs(O-F)<S){E=!0,k=!0;var Q=V.re,et=V.im,Z=G.re,rt=G.im;v[P]=new s(Q,et),v[P-1]=new s(Z,rt);break}I>3&&(E=!1)}}return k||(v[0]=new s(y[0][0])),this._eigenvalues=v,v}function a(f,v){for(var b=f.length,S=1/(Math.pow(10,v)*2),y=0;y<b-2;y++){for(var E=0,k=new Array(b-y-1),P=y+1;P<b;P++){var I=f[P][y];E+=Math.pow(I,2),k[P-y-1]=I}if(E=Math.sqrt(E),!(Math.abs(E)<S)){k[0]>=0?k[0]+=E:k[0]-=E;for(var O=0,N=0;N<k.length;N++)O+=Math.pow(k[N],2);O=Math.sqrt(O);for(var U=0;U<k.length;U++)k[U]/=O;for(var z=y;z<b;z++){for(var W=new Array(b-y-1),F=y+1;F<b;F++)W[F-y-1]=f[F][z];for(var V=0,G=0;G<W.length;G++)V+=W[G]*k[G];V*=2;for(var Q=y+1;Q<b;Q++)z===y&&Q!==y+1?f[Q][z]=0:f[Q][z]=W[Q-y-1]-V*k[Q-y-1]}for(var et=0;et<b;et++){for(var Z=new Array(b-y-1),rt=y+1;rt<b;rt++)Z[rt-y-1]=f[et][rt];for(var K=0,j=0;j<Z.length;j++)K+=Z[j]*k[j];K*=2;for(var yt=y+1;yt<b;yt++)f[et][yt]=Z[yt-y-1]-K*k[yt-y-1]}}}}function d(f,v){for(var b=f.length,S=1/(Math.pow(10,v)*2),y=new Array(b-1),E=0;E<b-1;E++){var k=f[E][E],P=f[E+1][E],I=Math.sqrt(Math.pow(k,2)+Math.pow(P,2));if(!(I<S)){var O=k/I,N=P*-1/I;y[E]=[N,O];for(var U=new Array(b-E),z=new Array(b-E),W=E;W<b;W++)U[W-E]=f[E][W],z[W-E]=f[E+1][W];for(var F=E;F<b;F++)f[E][F]=O*U[F-E]+N*-1*z[F-E],E===F?f[E+1][F]=0:f[E+1][F]=N*U[F-E]+O*z[F-E]}}for(var V=0;V<b-1;V++)if(y[V]){for(var G=r(y[V],2),Q=G[0],et=G[1],Z=new Array(V+2),rt=new Array(V+2),K=0;K<=V+1;K++)Z[K]=f[K][V],rt[K]=f[K][V+1];for(var j=0;j<=V+1;j++)f[j][V]=Z[j]*et-rt[j]*Q,f[j][V+1]=Z[j]*Q+rt[j]*et}}function p(f,v,b,S){var y=(f+S)*-1,E=f*S-b*v,k=Math.pow(y,2)-4*E,P,I,O,N;return k>=0?(I=0,N=0,y>=0?P=(y*-1-Math.sqrt(k))/2:P=(y*-1+Math.sqrt(k))/2,O=E/P):(P=-y/2,O=P,I=Math.sqrt(k*-1)/2,N=I*-1),{metric:Math.sqrt(Math.pow(P,2)+Math.pow(I,2)),eigen1:{re:P,im:I},eigen2:{re:O,im:N}}}return _s=u,_s}var ws,ru;function zv(){if(ru)return ws;ru=1;function r(){if(this._nullity!==void 0)return this._nullity;var t=this.size()[1],e=this.rank();return this._nullity=t-e,this._nullity}return ws=r,ws}var xs,iu;function Dv(){if(iu)return xs;iu=1;function r(u,a){return o(u)||n(u,a)||e(u,a)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(u,a){if(u){if(typeof u=="string")return i(u,a);var d=Object.prototype.toString.call(u).slice(8,-1);if(d==="Object"&&u.constructor&&(d=u.constructor.name),d==="Map"||d==="Set")return Array.from(u);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return i(u,a)}}function i(u,a){(a==null||a>u.length)&&(a=u.length);for(var d=0,p=new Array(a);d<a;d++)p[d]=u[d];return p}function n(u,a){var d=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(d!=null){var p=[],f=!0,v=!1,b,S;try{for(d=d.call(u);!(f=(b=d.next()).done)&&(p.push(b.value),!(a&&p.length===a));f=!0);}catch(y){v=!0,S=y}finally{try{!f&&d.return!=null&&d.return()}finally{if(v)throw S}}return p}}function o(u){if(Array.isArray(u))return u}var s=We(),c=mt(),h=c.INVALID_P_NORM;function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:2,a=this.size(),d=r(a,2),p=d[0],f=d[1];if(u!==1&&u!==2&&u!==1/0&&u!=="F")throw new Error(h);var v=this._matrix,b=0;if(u===1){for(var S=0;S<f;S++){for(var y=0,E=0;E<p;E++)y+=Math.abs(v[E][S]);y>b&&(b=y)}return b}if(u===2){for(var k=s.transpose(this),P=s.multiply(k,this),I=P.eigenvalues(),O=0;O<I.length;O++){var N=I[O].getModulus();N>b&&(b=N)}return Math.sqrt(b)}if(u===1/0){for(var U=0;U<p;U++){for(var z=0,W=0;W<f;W++)z+=Math.abs(v[U][W]);z>b&&(b=z)}return b}for(var F=0;F<p;F++)for(var V=0;V<f;V++)b+=Math.pow(v[F][V],2);return Math.sqrt(b)}return xs=l,xs}var Ss,nu;function qv(){if(nu)return Ss;nu=1;function r(h,l){return o(h)||n(h,l)||e(h,l)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(h,l){if(h){if(typeof h=="string")return i(h,l);var u=Object.prototype.toString.call(h).slice(8,-1);if(u==="Object"&&h.constructor&&(u=h.constructor.name),u==="Map"||u==="Set")return Array.from(h);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return i(h,l)}}function i(h,l){(l==null||l>h.length)&&(l=h.length);for(var u=0,a=new Array(l);u<l;u++)a[u]=h[u];return a}function n(h,l){var u=h==null?null:typeof Symbol<"u"&&h[Symbol.iterator]||h["@@iterator"];if(u!=null){var a=[],d=!0,p=!1,f,v;try{for(u=u.call(h);!(d=(f=u.next()).done)&&(a.push(f.value),!(l&&a.length===l));d=!0);}catch(b){p=!0,v=b}finally{try{!d&&u.return!=null&&u.return()}finally{if(p)throw v}}return a}}function o(h){if(Array.isArray(h))return h}var s=We();function c(){if(this._rank!==void 0)return this._rank;var h=1/(Math.pow(10,this._digit)*2),l=s.QR(this)[1],u=l._matrix,a=l.size(),d=r(a,2),p=d[0],f=d[1];if(p===0)return this._rank=1,1;for(var v=0,b=0;b<p;b++)for(var S=b;S<f;S++)if(Math.abs(u[b][S])>=h){v++;break}return this._rank=v,v}return Ss=c,Ss}var Cs,ou;function Uv(){if(ou)return Cs;ou=1;function r(){if(this._size!==void 0)return this._size;var t=this._matrix;return t.length===0?(this._size=[0,0],this._size):(this._size=[t.length,t[0].length],this._size)}return Cs=r,Cs}var Es,su;function Wv(){if(su)return Es;su=1;var r=mt(),t=r.INVALID_SQUARE_MATRIX;function e(){var i=this._isSquare!==void 0?this._isSquare:this.isSquare();if(!i)throw new Error(t);if(this._trace!==void 0)return this._trace;for(var n=this._matrix,o=n.length,s=0,c=0;c<o;c++)s+=n[c][c];return this._trace=s,s}return Es=e,Es}var As,au;function Fv(){if(au)return As;au=1;function r(u,a){return o(u)||n(u,a)||e(u,a)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(u,a){if(u){if(typeof u=="string")return i(u,a);var d=Object.prototype.toString.call(u).slice(8,-1);if(d==="Object"&&u.constructor&&(d=u.constructor.name),d==="Map"||d==="Set")return Array.from(u);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return i(u,a)}}function i(u,a){(a==null||a>u.length)&&(a=u.length);for(var d=0,p=new Array(a);d<a;d++)p[d]=u[d];return p}function n(u,a){var d=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(d!=null){var p=[],f=!0,v=!1,b,S;try{for(d=d.call(u);!(f=(b=d.next()).done)&&(p.push(b.value),!(a&&p.length===a));f=!0);}catch(y){v=!0,S=y}finally{try{!f&&d.return!=null&&d.return()}finally{if(v)throw S}}return p}}function o(u){if(Array.isArray(u))return u}var s=mt(),c=s.INVALID_MATRIX,h=s.SIZE_INCOMPATIBLE;function l(u,a){if(!(u instanceof this)||!(a instanceof this))throw new Error(c);var d=u.size(),p=r(d,2),f=p[0],v=p[1],b=a.size(),S=r(b,2),y=S[0],E=S[1];if(f!==y||v!==E)throw new Error(h);var k=u._matrix,P=a._matrix;return this.generate(f,v,function(I,O){return k[I][O]+P[I][O]})}return As=l,As}var ks,lu;function Vv(){if(lu)return ks;lu=1;var r=mt(),t=r.INVALID_MATRIX,e=r.INVALID_SQUARE_MATRIX,i=r.SINGULAR_MATRIX,n=We();function o(c){if(!(c instanceof this))throw new Error(t);if(!c.isSquare())throw new Error(e);var h=c.size()[0];if(h===0)return new n([]);for(var l=1/(Math.pow(10,c._digit)*2),u=this.identity(h)._matrix,a=this.clone(c)._matrix,d=s(h),p=0;p<h;p++){for(var f=p,v=a[d[p]][p];Math.abs(v)<l&&f<h-1;)f++,v=a[d[f]][p];if(Math.abs(v)<l)throw new Error(i);if(p!==f){var b=d[p];d[p]=d[f],d[f]=b}for(var S=d[p],y=0;y<h;y++){var E=d[y];if(y===p){for(var k=0;k<h;k++)k===p&&(a[E][k]=1),k>p&&(a[E][k]/=v),u[E][k]/=v;v=1}if(y!==p&&Math.abs(a[E][p])>=l)for(var P=a[E][p]/v,I=0;I<h;I++)I===p&&(a[E][I]=0),I>p&&(a[E][I]-=P*a[S][I]),u[E][I]-=P*u[S][I]}}for(var O=0;O<h;O++)a[O]=u[d[O]];return new this(a)}function s(c){for(var h=new Array(c),l=0;l<c;l++)h[l]=l;return h}return ks=o,ks}var $s,cu;function en(){if(cu)return $s;cu=1;var r=mt(),t=r.INVALID_ROW_COL;return $s=function(i,n){if(!Number.isInteger(i)||i<0||!Number.isInteger(n)||n<0)throw new Error(t);if(i===0||n===0)return[];for(var o=new Array(i),s=0;s<i;s++)o[s]=new Array(n);return o},$s}var Ps,du;function Bv(){if(du)return Ps;du=1;function r(a,d){return o(a)||n(a,d)||e(a,d)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(a,d){if(a){if(typeof a=="string")return i(a,d);var p=Object.prototype.toString.call(a).slice(8,-1);if(p==="Object"&&a.constructor&&(p=a.constructor.name),p==="Map"||p==="Set")return Array.from(a);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return i(a,d)}}function i(a,d){(d==null||d>a.length)&&(d=a.length);for(var p=0,f=new Array(d);p<d;p++)f[p]=a[p];return f}function n(a,d){var p=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(p!=null){var f=[],v=!0,b=!1,S,y;try{for(p=p.call(a);!(v=(S=p.next()).done)&&(f.push(S.value),!(d&&f.length===d));v=!0);}catch(E){b=!0,y=E}finally{try{!v&&p.return!=null&&p.return()}finally{if(b)throw y}}return f}}function o(a){if(Array.isArray(a))return a}var s=en(),c=mt(),h=c.INVALID_MATRIX,l=c.SIZE_INCOMPATIBLE;function u(a,d){if(!(a instanceof this)||!(d instanceof this))throw new Error(h);var p=a.size(),f=r(p,2),v=f[0],b=f[1],S=d.size(),y=r(S,2),E=y[0],k=y[1];if(b!==E)throw new Error(l);for(var P=a._matrix,I=d._matrix,O=s(v,k),N=0;N<v;N++)for(var U=0;U<k;U++){O[N][U]=0;for(var z=0;z<E;z++)O[N][U]+=P[N][z]*I[z][U]}return new this(O)}return Ps=u,Ps}var Ts,uu;function Hv(){if(uu)return Ts;uu=1;var r=mt(),t=r.INVALID_MATRIX,e=r.INVALID_SQUARE_MATRIX,i=r.INVALID_EXPONENT;function n(o,s){if(!(o instanceof this))throw new Error(t);if(!o.isSquare())throw new Error(e);if(!Number.isInteger(s)||s<0)throw new Error(i);var c=o.size()[0];if(s===0)return this.identity(c);if(s===1)return this.clone(o);if(s%2===0){var h=this.pow(o,s/2);return this.multiply(h,h)}var l=this.pow(o,(s-1)/2);return this.multiply(this.multiply(l,l),o)}return Ts=n,Ts}var Is,hu;function jv(){if(hu)return Is;hu=1;function r(l,u){return o(l)||n(l,u)||e(l,u)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(l,u){if(l){if(typeof l=="string")return i(l,u);var a=Object.prototype.toString.call(l).slice(8,-1);if(a==="Object"&&l.constructor&&(a=l.constructor.name),a==="Map"||a==="Set")return Array.from(l);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(l,u)}}function i(l,u){(u==null||u>l.length)&&(u=l.length);for(var a=0,d=new Array(u);a<u;a++)d[a]=l[a];return d}function n(l,u){var a=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(a!=null){var d=[],p=!0,f=!1,v,b;try{for(a=a.call(l);!(p=(v=a.next()).done)&&(d.push(v.value),!(u&&d.length===u));p=!0);}catch(S){f=!0,b=S}finally{try{!p&&a.return!=null&&a.return()}finally{if(f)throw b}}return d}}function o(l){if(Array.isArray(l))return l}var s=mt(),c=s.SIZE_INCOMPATIBLE,h=s.INVALID_MATRIX;return Is=function(u,a){if(!(u instanceof this)||!(a instanceof this))throw new Error(h);var d=u.size(),p=r(d,2),f=p[0],v=p[1],b=a.size(),S=r(b,2),y=S[0],E=S[1];if(f!==y||v!==E)throw new Error(c);var k=u._matrix,P=a._matrix;return this.generate(f,v,function(I,O){return k[I][O]-P[I][O]})},Is}var Rs,pu;function Kv(){if(pu)return Rs;pu=1;function r(l,u){return o(l)||n(l,u)||e(l,u)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(l,u){if(l){if(typeof l=="string")return i(l,u);var a=Object.prototype.toString.call(l).slice(8,-1);if(a==="Object"&&l.constructor&&(a=l.constructor.name),a==="Map"||a==="Set")return Array.from(l);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(l,u)}}function i(l,u){(u==null||u>l.length)&&(u=l.length);for(var a=0,d=new Array(u);a<u;a++)d[a]=l[a];return d}function n(l,u){var a=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(a!=null){var d=[],p=!0,f=!1,v,b;try{for(a=a.call(l);!(p=(v=a.next()).done)&&(d.push(v.value),!(u&&d.length===u));p=!0);}catch(S){f=!0,b=S}finally{try{!p&&a.return!=null&&a.return()}finally{if(f)throw b}}return d}}function o(l){if(Array.isArray(l))return l}var s=mt(),c=s.INVALID_MATRIX;function h(l){if(!(l instanceof this))throw new Error(c);var u=l.size(),a=r(u,2),d=a[0],p=a[1],f=l._matrix;return this.generate(p,d,function(v,b){return f[b][v]})}return Rs=h,Rs}var Os,fu;function Xv(){if(fu)return Os;fu=1;function r(f,v){return o(f)||n(f,v)||e(f,v)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(f,v){if(f){if(typeof f=="string")return i(f,v);var b=Object.prototype.toString.call(f).slice(8,-1);if(b==="Object"&&f.constructor&&(b=f.constructor.name),b==="Map"||b==="Set")return Array.from(f);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return i(f,v)}}function i(f,v){(v==null||v>f.length)&&(v=f.length);for(var b=0,S=new Array(v);b<v;b++)S[b]=f[b];return S}function n(f,v){var b=f==null?null:typeof Symbol<"u"&&f[Symbol.iterator]||f["@@iterator"];if(b!=null){var S=[],y=!0,E=!1,k,P;try{for(b=b.call(f);!(y=(k=b.next()).done)&&(S.push(k.value),!(v&&S.length===v));y=!0);}catch(I){E=!0,P=I}finally{try{!y&&b.return!=null&&b.return()}finally{if(E)throw P}}return S}}function o(f){if(Array.isArray(f))return f}var s=en(),c=mt(),h=c.INVALID_MATRIX,l=c.INVALID_UPPER_TRIANGULAR_MATRIX,u=c.INVALID_SQUARE_MATRIX,a=c.SIZE_INCOMPATIBLE,d=c.NO_UNIQUE_SOLUTION;function p(f,v){if(!(f instanceof this)||!(v instanceof this))throw new Error(h);if(!f.isUpperTriangular())throw new Error(l);if(!f.isSquare())throw new Error(u);var b=f.size()[0],S=v.size(),y=r(S,2),E=y[0],k=y[1],P=f._matrix,I=v._matrix;if(E!==b||k!==1)throw new Error(a);for(var O=1/(Math.pow(10,f._digit)*2),N=0;N<b;N++)if(Math.abs(P[N][N])<O)throw new Error(d);for(var U=s(b,1),z=b-1;z>=0;z--){for(var W=0,F=z+1;F<b;F++)W+=U[F][0]*P[z][F];U[z][0]=(I[z][0]-W)/P[z][z]}return new this(U)}return Os=p,Os}var Ls,mu;function Gv(){if(mu)return Ls;mu=1;function r(f,v){return o(f)||n(f,v)||e(f,v)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(f,v){if(f){if(typeof f=="string")return i(f,v);var b=Object.prototype.toString.call(f).slice(8,-1);if(b==="Object"&&f.constructor&&(b=f.constructor.name),b==="Map"||b==="Set")return Array.from(f);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return i(f,v)}}function i(f,v){(v==null||v>f.length)&&(v=f.length);for(var b=0,S=new Array(v);b<v;b++)S[b]=f[b];return S}function n(f,v){var b=f==null?null:typeof Symbol<"u"&&f[Symbol.iterator]||f["@@iterator"];if(b!=null){var S=[],y=!0,E=!1,k,P;try{for(b=b.call(f);!(y=(k=b.next()).done)&&(S.push(k.value),!(v&&S.length===v));y=!0);}catch(I){E=!0,P=I}finally{try{!y&&b.return!=null&&b.return()}finally{if(E)throw P}}return S}}function o(f){if(Array.isArray(f))return f}var s=en(),c=mt(),h=c.INVALID_MATRIX,l=c.INVALID_LOWER_TRIANGULAR_MATRIX,u=c.INVALID_SQUARE_MATRIX,a=c.SIZE_INCOMPATIBLE,d=c.NO_UNIQUE_SOLUTION;function p(f,v){if(!(f instanceof this)||!(v instanceof this))throw new Error(h);if(!f.isLowerTriangular())throw new Error(l);if(!f.isSquare())throw new Error(u);var b=f.size()[0],S=v.size(),y=r(S,2),E=y[0],k=y[1],P=f._matrix,I=v._matrix;if(b!==E||k!==1)throw new Error(a);for(var O=1/(Math.pow(10,f._digit)*2),N=0;N<b;N++)if(Math.abs(P[N][N])<O)throw new Error(d);for(var U=s(b,1),z=0;z<b;z++){for(var W=0,F=0;F<z;F++)W+=U[F][0]*P[z][F];U[z][0]=(I[z][0]-W)/P[z][z]}return new this(U)}return Ls=p,Ls}var Ms,gu;function Yv(){if(gu)return Ms;gu=1;function r(d,p){return o(d)||n(d,p)||e(d,p)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(d,p){if(d){if(typeof d=="string")return i(d,p);var f=Object.prototype.toString.call(d).slice(8,-1);if(f==="Object"&&d.constructor&&(f=d.constructor.name),f==="Map"||f==="Set")return Array.from(d);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return i(d,p)}}function i(d,p){(p==null||p>d.length)&&(p=d.length);for(var f=0,v=new Array(p);f<p;f++)v[f]=d[f];return v}function n(d,p){var f=d==null?null:typeof Symbol<"u"&&d[Symbol.iterator]||d["@@iterator"];if(f!=null){var v=[],b=!0,S=!1,y,E;try{for(f=f.call(d);!(b=(y=f.next()).done)&&(v.push(y.value),!(p&&v.length===p));b=!0);}catch(k){S=!0,E=k}finally{try{!b&&f.return!=null&&f.return()}finally{if(S)throw E}}return v}}function o(d){if(Array.isArray(d))return d}var s=mt(),c=s.INVALID_MATRIX,h=s.NO_UNIQUE_SOLUTION,l=s.INVALID_SQUARE_MATRIX,u=s.SIZE_INCOMPATIBLE;function a(d,p){if(!(d instanceof this)||!(p instanceof this))throw new Error(c);if(!d.isSquare())throw new Error(l);var f=d.size(),v=r(f,2),b=v[0],S=v[1],y=p.size(),E=r(y,2),k=E[0],P=E[1];if(S!==k||P!==1)throw new Error(u);for(var I=1/(Math.pow(10,d._digit)*2),O=this.LU(d,!0),N=r(O,2),U=N[0],z=N[1],W=z._matrix,F=p._matrix,V=b-1;V>=0;V--)if(Math.abs(W[V][V])<I)throw new Error(h);for(var G=new Array(k),Q=new Array(k),et=0;et<k;et++)G[et]=F[U[et]][0];for(var Z=0;Z<b;Z++){for(var rt=0,K=0;K<Z;K++)rt+=Q[K]*W[Z][K];Q[Z]=G[Z]-rt}for(var j=b-1;j>=0;j--){for(var yt=0,zt=j+1;zt<b;zt++)yt+=W[j][zt]*G[zt];G[j]=(Q[j]-yt)/W[j][j]}for(var _t=0;_t<k;_t++)Q[_t]=[G[_t]];return new this(Q)}return Ms=a,Ms}var Ns,vu;function Zv(){if(vu)return Ns;vu=1;function r(a,d){return o(a)||n(a,d)||e(a,d)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(a,d){if(a){if(typeof a=="string")return i(a,d);var p=Object.prototype.toString.call(a).slice(8,-1);if(p==="Object"&&a.constructor&&(p=a.constructor.name),p==="Map"||p==="Set")return Array.from(a);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return i(a,d)}}function i(a,d){(d==null||d>a.length)&&(d=a.length);for(var p=0,f=new Array(d);p<d;p++)f[p]=a[p];return f}function n(a,d){var p=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(p!=null){var f=[],v=!0,b=!1,S,y;try{for(p=p.call(a);!(v=(S=p.next()).done)&&(f.push(S.value),!(d&&f.length===d));v=!0);}catch(E){b=!0,y=E}finally{try{!v&&p.return!=null&&p.return()}finally{if(b)throw y}}return f}}function o(a){if(Array.isArray(a))return a}var s=mt(),c=s.INVALID_MATRIX;function h(a){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(!(a instanceof this))throw new Error(c);for(var p=a.size(),f=r(p,2),v=f[0],b=f[1],S=Math.min(v,b),y=1/(Math.pow(10,a._digit)*2),E=l(v),k=this.clone(a)._matrix,P=0;P<v-1;P++){var I=Math.min(P,b);u(k,E,I,v,b);var O=E[P],N=k[O][I];if(!(Math.abs(N)<y))for(var U=P+1;U<v;U++){var z=E[U],W=k[z][I];if(Math.abs(W)>=y){for(var F=W/N,V=I;V<b;V++)k[z][V]-=F*k[O][V];k[z][I]=F}}}for(var G=new Array(v),Q=0;Q<v;Q++)G[Q]=k[E[Q]];if(d)return[E,new this(G)];var et=this.generate(v,v,function(K,j){var yt=E[K];return j===yt?1:0}),Z=this.generate(v,S,function(K,j){return K===j?1:K<j?0:G[K][j]}),rt=this.generate(S,b,function(K,j){return K>j?0:G[K][j]});return[et,Z,rt]}function l(a){for(var d=new Array(a),p=0;p<a;p++)d[p]=p;return d}function u(a,d,p,f,v){for(var b=Math.min(p,v),S=p,y=Math.abs(a[d[p]][b]),E=p+1;E<f;E++){var k=Math.abs(a[d[E]][b]);k>y&&(S=E,y=k)}var P=d[p];d[p]=d[S],d[S]=P}return Ns=h,Ns}var zs,bu;function Qv(){if(bu)return zs;bu=1;function r(l,u){return o(l)||n(l,u)||e(l,u)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(l,u){if(l){if(typeof l=="string")return i(l,u);var a=Object.prototype.toString.call(l).slice(8,-1);if(a==="Object"&&l.constructor&&(a=l.constructor.name),a==="Map"||a==="Set")return Array.from(l);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(l,u)}}function i(l,u){(u==null||u>l.length)&&(u=l.length);for(var a=0,d=new Array(u);a<u;a++)d[a]=l[a];return d}function n(l,u){var a=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(a!=null){var d=[],p=!0,f=!1,v,b;try{for(a=a.call(l);!(p=(v=a.next()).done)&&(d.push(v.value),!(u&&d.length===u));p=!0);}catch(S){f=!0,b=S}finally{try{!p&&a.return!=null&&a.return()}finally{if(f)throw b}}return d}}function o(l){if(Array.isArray(l))return l}var s=mt(),c=s.INVALID_MATRIX;function h(l){if(!(l instanceof this))throw new Error(c);for(var u=l.size(),a=r(u,2),d=a[0],p=a[1],f=Math.min(d,p),v=1/(Math.pow(10,l._digit)*2),b=this.clone(l)._matrix,S=this.identity(d)._matrix,y=0;y<f;y++){for(var E=!0,k=y+1;k<d;k++)if(Math.abs(b[k][y])>=v){E=!1;break}if(!E){for(var P=0,I=y;I<d;I++)P+=Math.pow(b[I][y],2);P=Math.sqrt(P);var O=-1;b[y][y]<0&&(O=1);for(var N=b[y][y]-O*P,U=new Array(d-y),z=0;z<d-y;z++)U[z]=b[z+y][y]/N;U[0]=1;for(var W=-1*O*N/P,F=new Array(d-y),V=0;V<d-y;V++){for(var G=new Array(p),Q=0;Q<p;Q++)G[Q]=b[y+V][Q];F[V]=G}for(var et=y;et<d;et++)for(var Z=0;Z<p;Z++){for(var rt=0,K=0;K<d-y;K++)rt+=F[K][Z]*U[K];b[et][Z]=F[et-y][Z]-W*U[et-y]*rt}for(var j=new Array(d),yt=0;yt<d;yt++){for(var zt=new Array(d-y),_t=0;_t<d-y;_t++)zt[_t]=S[yt][y+_t];j[yt]=zt}for(var Et=0;Et<d;Et++)for(var Kt=y;Kt<d;Kt++){for(var Fe=0,xe=0;xe<d-y;xe++)Fe+=j[Et][xe]*U[xe];S[Et][Kt]=j[Et][Kt-y]-W*U[Kt-y]*Fe}}}for(var re=0;re<d;re++)for(var fe=0;fe<p;fe++)re>fe&&(b[re][fe]=0);return[new this(S),new this(b)]}return zs=h,zs}var Ds,yu;function Jv(){if(yu)return Ds;yu=1;function r(l,u){return o(l)||n(l,u)||e(l,u)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(l,u){if(l){if(typeof l=="string")return i(l,u);var a=Object.prototype.toString.call(l).slice(8,-1);if(a==="Object"&&l.constructor&&(a=l.constructor.name),a==="Map"||a==="Set")return Array.from(l);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(l,u)}}function i(l,u){(u==null||u>l.length)&&(u=l.length);for(var a=0,d=new Array(u);a<u;a++)d[a]=l[a];return d}function n(l,u){var a=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(a!=null){var d=[],p=!0,f=!1,v,b;try{for(a=a.call(l);!(p=(v=a.next()).done)&&(d.push(v.value),!(u&&d.length===u));p=!0);}catch(S){f=!0,b=S}finally{try{!p&&a.return!=null&&a.return()}finally{if(f)throw b}}return d}}function o(l){if(Array.isArray(l))return l}var s=mt(),c=s.INVALID_MATRIX;function h(l){if(!(l instanceof this))throw new Error(c);var u=l.size(),a=r(u,2),d=a[0],p=a[1],f=l._matrix;return this.generate(d,p,function(v,b){return f[v][b]})}return Ds=h,Ds}var qs,_u;function tb(){if(_u)return qs;_u=1;function r(a,d){return o(a)||n(a,d)||e(a,d)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(a,d){if(a){if(typeof a=="string")return i(a,d);var p=Object.prototype.toString.call(a).slice(8,-1);if(p==="Object"&&a.constructor&&(p=a.constructor.name),p==="Map"||p==="Set")return Array.from(a);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return i(a,d)}}function i(a,d){(d==null||d>a.length)&&(d=a.length);for(var p=0,f=new Array(d);p<d;p++)f[p]=a[p];return f}function n(a,d){var p=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(p!=null){var f=[],v=!0,b=!1,S,y;try{for(p=p.call(a);!(v=(S=p.next()).done)&&(f.push(S.value),!(d&&f.length===d));v=!0);}catch(E){b=!0,y=E}finally{try{!v&&p.return!=null&&p.return()}finally{if(b)throw y}}return f}}function o(a){if(Array.isArray(a))return a}var s=mt(),c=s.INVALID_ROW_COL,h=s.OVERFLOW_COLUMN,l=s.INVALID_MATRIX;function u(a,d){if(!(a instanceof this))throw new Error(l);if(!Number.isInteger(d)||d<0)throw new Error(c);var p=a.size(),f=r(p,2),v=f[0],b=f[1];if(d>=b)throw new Error(h);var S=a._matrix;return this.generate(v,1,function(y){return S[y][d]})}return qs=u,qs}var Us,wu;function eb(){if(wu)return Us;wu=1;var r=We(),t=dp(),e=mt(),i=e.INVALID_ARRAY,n=e.EXPECTED_ARRAY_OF_NUMBERS_OR_MATRICES,o=e.INVALID_SQUARE_MATRIX;function s(c){if(!Array.isArray(c))throw new Error(i);for(var h=c.length,l,u=0;u<h;u++){var a=c[u];if(!t(a)&&!(a instanceof r))throw new Error(n);if(t(a)){if(!l){l="number";continue}if(l!=="number")throw new Error(n)}else{if(!a.isSquare())throw new Error(o);if(!l){l="square";continue}if(l!=="square")throw new Error(n)}}if(l==="number")return r.generate(h,h,function(E,k){return E===k?c[E]:0});for(var d=0,p=new Array(h),f=0;f<h;f++){var v=c[f].size()[0];d+=v,p[f]=v}var b=0,S=0,y=p[b];return r.generate(d,d,function(E,k){E-S===y&&k-S===y&&(S+=y,b++);var P=E-S,I=k-S;for(y=p[b];y===0;)b++,y=p[b];return P<y&&P>=0&&I<y&&I>=0?c[b]._matrix[P][I]:0})}return Us=s,Us}var Ws,xu;function rb(){if(xu)return Ws;xu=1;function r(l,u){return o(l)||n(l,u)||e(l,u)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(l,u){if(l){if(typeof l=="string")return i(l,u);var a=Object.prototype.toString.call(l).slice(8,-1);if(a==="Object"&&l.constructor&&(a=l.constructor.name),a==="Map"||a==="Set")return Array.from(l);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(l,u)}}function i(l,u){(u==null||u>l.length)&&(u=l.length);for(var a=0,d=new Array(u);a<u;a++)d[a]=l[a];return d}function n(l,u){var a=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(a!=null){var d=[],p=!0,f=!1,v,b;try{for(a=a.call(l);!(p=(v=a.next()).done)&&(d.push(v.value),!(u&&d.length===u));p=!0);}catch(S){f=!0,b=S}finally{try{!p&&a.return!=null&&a.return()}finally{if(f)throw b}}return d}}function o(l){if(Array.isArray(l))return l}var s=mt(),c=s.INVALID_MATRIX;function h(l,u){if(!(l instanceof this))throw new Error(c);var a=l.size(),d=r(a,2),p=d[0],f=d[1],v=l._matrix;return this.generate(p,f,function(b,S){return u(v[b][S])})}return Ws=h,Ws}var Fs,Su;function ib(){if(Su)return Fs;Su=1;var r=en();function t(e,i,n){var o=r(e,i);if(e===0||i===0)return new this([]);for(var s=0;s<e;s++)for(var c=0;c<i;c++)o[s][c]=n(s,c);return new this(o)}return Fs=t,Fs}var Vs,Cu;function nb(){if(Cu)return Vs;Cu=1;function r(l,u){return o(l)||n(l,u)||e(l,u)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(l,u){if(l){if(typeof l=="string")return i(l,u);var a=Object.prototype.toString.call(l).slice(8,-1);if(a==="Object"&&l.constructor&&(a=l.constructor.name),a==="Map"||a==="Set")return Array.from(l);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(l,u)}}function i(l,u){(u==null||u>l.length)&&(u=l.length);for(var a=0,d=new Array(u);a<u;a++)d[a]=l[a];return d}function n(l,u){var a=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(a!=null){var d=[],p=!0,f=!1,v,b;try{for(a=a.call(l);!(p=(v=a.next()).done)&&(d.push(v.value),!(u&&d.length===u));p=!0);}catch(S){f=!0,b=S}finally{try{!p&&a.return!=null&&a.return()}finally{if(f)throw b}}return d}}function o(l){if(Array.isArray(l))return l}var s=mt(),c=s.INVALID_MATRIX;function h(l){if(!(l instanceof this))throw new Error(c);for(var u=l.size(),a=r(u,2),d=a[0],p=a[1],f=Math.min(d,p),v=l._matrix,b=new Array(f),S=0;S<f;S++)b[S]=v[S][S];return b}return Vs=h,Vs}var Bs,Eu;function ob(){if(Eu)return Bs;Eu=1;function r(t,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;return this.generate(t,e,function(){return Number.parseFloat((Math.random()*(n-i)+i).toFixed(o))})}return Bs=r,Bs}var Hs,Au;function sb(){if(Au)return Hs;Au=1;function r(t){return this.generate(t,t,function(e,i){return e===i?1:0})}return Hs=r,Hs}var js,ku;function ab(){if(ku)return js;ku=1;function r(l,u){return o(l)||n(l,u)||e(l,u)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(l,u){if(l){if(typeof l=="string")return i(l,u);var a=Object.prototype.toString.call(l).slice(8,-1);if(a==="Object"&&l.constructor&&(a=l.constructor.name),a==="Map"||a==="Set")return Array.from(l);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(l,u)}}function i(l,u){(u==null||u>l.length)&&(u=l.length);for(var a=0,d=new Array(u);a<u;a++)d[a]=l[a];return d}function n(l,u){var a=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(a!=null){var d=[],p=!0,f=!1,v,b;try{for(a=a.call(l);!(p=(v=a.next()).done)&&(d.push(v.value),!(u&&d.length===u));p=!0);}catch(S){f=!0,b=S}finally{try{!p&&a.return!=null&&a.return()}finally{if(f)throw b}}return d}}function o(l){if(Array.isArray(l))return l}var s=mt(),c=s.INVALID_MATRIX;function h(l,u){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5;if(!(l instanceof this)||!(u instanceof this))throw new Error(c);var d=l.size(),p=r(d,2),f=p[0],v=p[1],b=u.size(),S=r(b,2),y=S[0],E=S[1];if(f!==y||v!==E)return!1;for(var k=1/(Math.pow(10,a)*2),P=l._matrix,I=u._matrix,O=0;O<f;O++)for(var N=0;N<v;N++)if(Math.abs(P[O][N]-I[O][N])>=k)return!1;return!0}return js=h,js}var Ks,$u;function lb(){if($u)return Ks;$u=1;function r(a,d){return o(a)||n(a,d)||e(a,d)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(a,d){if(a){if(typeof a=="string")return i(a,d);var p=Object.prototype.toString.call(a).slice(8,-1);if(p==="Object"&&a.constructor&&(p=a.constructor.name),p==="Map"||p==="Set")return Array.from(a);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return i(a,d)}}function i(a,d){(d==null||d>a.length)&&(d=a.length);for(var p=0,f=new Array(d);p<d;p++)f[p]=a[p];return f}function n(a,d){var p=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(p!=null){var f=[],v=!0,b=!1,S,y;try{for(p=p.call(a);!(v=(S=p.next()).done)&&(f.push(S.value),!(d&&f.length===d));v=!0);}catch(E){b=!0,y=E}finally{try{!v&&p.return!=null&&p.return()}finally{if(b)throw y}}return f}}function o(a){if(Array.isArray(a))return a}var s=mt(),c=s.INVALID_ROW_COL,h=s.OVERFLOW_ROW,l=s.INVALID_MATRIX;function u(a,d){if(!(a instanceof this))throw new Error(l);if(!Number.isInteger(d)||d<0)throw new Error(c);var p=a.size(),f=r(p,2),v=f[0],b=f[1];if(d>=v)throw new Error(h);var S=a._matrix;return this.generate(1,b,function(y,E){return S[d][E]})}return Ks=u,Ks}var Xs,Pu;function cb(){if(Pu)return Xs;Pu=1;function r(S,y){return o(S)||n(S,y)||e(S,y)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(S,y){if(S){if(typeof S=="string")return i(S,y);var E=Object.prototype.toString.call(S).slice(8,-1);if(E==="Object"&&S.constructor&&(E=S.constructor.name),E==="Map"||E==="Set")return Array.from(S);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return i(S,y)}}function i(S,y){(y==null||y>S.length)&&(y=S.length);for(var E=0,k=new Array(y);E<y;E++)k[E]=S[E];return k}function n(S,y){var E=S==null?null:typeof Symbol<"u"&&S[Symbol.iterator]||S["@@iterator"];if(E!=null){var k=[],P=!0,I=!1,O,N;try{for(E=E.call(S);!(P=(O=E.next()).done)&&(k.push(O.value),!(y&&k.length===y));P=!0);}catch(U){I=!0,N=U}finally{try{!P&&E.return!=null&&E.return()}finally{if(I)throw N}}return k}}function o(S){if(Array.isArray(S))return S}function s(S){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(E){return typeof E}:s=function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},s(S)}var c=mt(),h=c.INVALID_MATRIX,l=c.EXPECTED_STRING_NUMBER_AT_POS_1_2,u=c.INVALID_ROW,a=c.INVALID_COLUMN,d=c.OVERFLOW_ROW,p=c.INVALID_ROWS_EXPRESSION,f=c.INVALID_COLUMNS_EXPRESSION,v=c.OVERFLOW_COLUMN;function b(S,y,E){if(!(S instanceof this))throw new Error(h);var k=s(y),P=s(E);if(k!=="string"&&k!=="number"||P!=="string"&&P!=="number")throw new Error(l);var I=S.size(),O=r(I,2),N=O[0],U=O[1],z,W,F,V;if(k==="number"){if(!Number.isInteger(y)||y<0)throw new Error(u);if(y>=N)throw new Error(d);z=y,W=y}else{var G=y.split(":");if(G.length!==2)throw new Error(p);var Q=r(G,2),et=Q[0],Z=Q[1];if(et==="")z=0;else{var rt=Number(et);if(!Number.isInteger(rt)||rt<0)throw new Error(u);if(rt>=N)throw new Error(d);z=rt}if(Z==="")W=N-1;else{var K=Number(Z);if(!Number.isInteger(K)||K<0)throw new Error(u);if(K>=N)throw new Error(d);W=K}if(z>W)throw new Error(p)}if(P==="number"){if(!Number.isInteger(E)||E<0)throw new Error(a);if(E>=U)throw new Error(v);F=E,V=E}else{var j=E.split(":");if(j.length!==2)throw new Error(f);var yt=r(j,2),zt=yt[0],_t=yt[1];if(zt==="")F=0;else{var Et=Number(zt);if(!Number.isInteger(Et)||Et<0)throw new Error(a);if(Et>=U)throw new Error(v);F=Et}if(_t==="")V=U-1;else{var Kt=Number(_t);if(!Number.isInteger(Kt)||Kt<0)throw new Error(a);if(Kt>=U)throw new Error(v);V=Kt}if(F>V)throw new Error(f)}for(var Fe=S._matrix,xe=W-z+1,re=V-F+1,fe=new Array(xe),Ve=z;Ve<=W;Ve++){for(var Cr=new Array(re),ar=F;ar<=V;ar++)Cr[ar-F]=Fe[Ve][ar];fe[Ve-z]=Cr}return new this(fe)}return Xs=b,Xs}var Gs,Tu;function db(){if(Tu)return Gs;Tu=1;function r(t,e){return e===void 0?this.generate(t,t,function(){return 0}):this.generate(t,e,function(){return 0})}return Gs=r,Gs}var Ys,Iu;function ub(){if(Iu)return Ys;Iu=1;var r=mt(),t=r.SIZE_INCOMPATIBLE;function e(i,n,o){if(n*o!==i.length)throw new Error(t);return this.generate(n,o,function(s,c){return i[s*o+c]})}return Ys=e,Ys}var Zs,Ru;function hb(){if(Ru)return Zs;Ru=1;function r(c,h){return o(c)||n(c,h)||e(c,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(c,h){if(c){if(typeof c=="string")return i(c,h);var l=Object.prototype.toString.call(c).slice(8,-1);if(l==="Object"&&c.constructor&&(l=c.constructor.name),l==="Map"||l==="Set")return Array.from(c);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return i(c,h)}}function i(c,h){(h==null||h>c.length)&&(h=c.length);for(var l=0,u=new Array(h);l<h;l++)u[l]=c[l];return u}function n(c,h){var l=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(l!=null){var u=[],a=!0,d=!1,p,f;try{for(l=l.call(c);!(a=(p=l.next()).done)&&(u.push(p.value),!(h&&u.length===h));a=!0);}catch(v){d=!0,f=v}finally{try{!a&&l.return!=null&&l.return()}finally{if(d)throw f}}return u}}function o(c){if(Array.isArray(c))return c}function s(){for(var c=this.size(),h=r(c,2),l=h[0],u=h[1],a=l*u,d=new Array(a),p=0;p<l;p++)for(var f=0;f<u;f++)d[p*u+f]=this._matrix[p][f];return d}return Zs=s,Zs}var Qs,Ou;function pb(){if(Ou)return Qs;Ou=1;function r(u,a){return o(u)||n(u,a)||e(u,a)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(u,a){if(u){if(typeof u=="string")return i(u,a);var d=Object.prototype.toString.call(u).slice(8,-1);if(d==="Object"&&u.constructor&&(d=u.constructor.name),d==="Map"||d==="Set")return Array.from(u);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return i(u,a)}}function i(u,a){(a==null||a>u.length)&&(a=u.length);for(var d=0,p=new Array(a);d<a;d++)p[d]=u[d];return p}function n(u,a){var d=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(d!=null){var p=[],f=!0,v=!1,b,S;try{for(d=d.call(u);!(f=(b=d.next()).done)&&(p.push(b.value),!(a&&p.length===a));f=!0);}catch(y){v=!0,S=y}finally{try{!f&&d.return!=null&&d.return()}finally{if(v)throw S}}return p}}function o(u){if(Array.isArray(u))return u}var s=mt(),c=s.INVALID_ROW_COL,h=s.OVERFLOW_INDEX;function l(u,a){if(!Number.isInteger(u)||u<0||!Number.isInteger(a)||a<0)throw new Error(c);var d=this._matrix,p=this.size(),f=r(p,2),v=f[0],b=f[1];if(u>=v||a>=b)throw new Error(h);return d[u][a]}return Qs=l,Qs}var Js,Lu;function fb(){if(Lu)return Js;Lu=1;function r(c,h){return o(c)||n(c,h)||e(c,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e(c,h){if(c){if(typeof c=="string")return i(c,h);var l=Object.prototype.toString.call(c).slice(8,-1);if(l==="Object"&&c.constructor&&(l=c.constructor.name),l==="Map"||l==="Set")return Array.from(c);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return i(c,h)}}function i(c,h){(h==null||h>c.length)&&(h=c.length);for(var l=0,u=new Array(h);l<h;l++)u[l]=c[l];return u}function n(c,h){var l=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(l!=null){var u=[],a=!0,d=!1,p,f;try{for(l=l.call(c);!(a=(p=l.next()).done)&&(u.push(p.value),!(h&&u.length===h));a=!0);}catch(v){d=!0,f=v}finally{try{!a&&l.return!=null&&l.return()}finally{if(d)throw f}}return u}}function o(c){if(Array.isArray(c))return c}function s(){for(var c=this._matrix,h=this.size(),l=r(h,2),u=l[0],a=l[1],d="",p=0;p<u;p++){for(var f=0;f<a;f++)d+=c[p][f].toString(),f!==a-1&&(d+=" ");p!==u-1&&(d+=`
`)}return d}return Js=s,Js}var ta,Mu;function We(){if(Mu)return ta;Mu=1;var r=Zg(),t=mt(),e=t.INVALID_MATRIX;function i(n){if(!r(n))throw new Error(e);this._matrix=n,this._digit=8}return ta=i,i.prototype.isDiagonal=Qg(),i.prototype.isSkewSymmetric=Jg(),i.prototype.isSquare=tv(),i.prototype.isSymmetric=ev(),i.prototype.isLowerTriangular=rv(),i.prototype.isUpperTriangular=iv(),i.prototype.isOrthogonal=nv(),i.prototype.cond=ov(),i.prototype.det=sv(),i.prototype.eigenvalues=Nv(),i.prototype.nullity=zv(),i.prototype.norm=Dv(),i.prototype.rank=qv(),i.prototype.size=Uv(),i.prototype.trace=Wv(),i.add=Fv(),i.inverse=Vv(),i.multiply=Bv(),i.pow=Hv(),i.subtract=jv(),i.transpose=Kv(),i.backward=Xv(),i.forward=Gv(),i.solve=Yv(),i.LU=Zv(),i.QR=Qv(),i.clone=Jv(),i.column=tb(),i.diag=eb(),i.elementwise=rb(),i.generate=ib(),i.getDiag=nb(),i.getRandomMatrix=ob(),i.identity=sb(),i.isEqual=ab(),i.row=lb(),i.submatrix=cb(),i.zero=db(),i.fromArray=ub(),i.prototype.flatten=hb(),i.prototype.entry=pb(),i.prototype.toString=fb(),ta}var ea,Nu;function rn(){if(Nu)return ea;Nu=1;const r=.1,t=We(),e=si(),i=function(o,s=1e-10){const h=new t(o).eigenvalues();for(const l of h)if(l<=-s)throw console.log(o,l),new Error(`Eigenvalue should be positive (actual: ${l})`);console.log("is definite positive",o)},n=function(o,s="checkSymetric"){for(const[c,h]of o.entries())for(const[l,u]of h.entries()){if(c===l&&u<0)throw new Error(`[${s}] Variance[${l}] should be positive (actual: ${u})`);if(Math.abs(u)>Math.sqrt(o[c][c]*o[l][l]))throw console.log(o),new Error(`[${s}] Covariance[${c}][${l}] should verify Cauchy Schwarz Inequality (expected: |x| <= sqrt(${o[c][c]} * ${o[l][l]}) actual: ${u})`);if(Math.abs(u-o[l][c])>r)throw new Error(`[${s}] Covariance[${c}][${l}] should equal Covariance[${l}][${c}]  (actual diff: ${Math.abs(u-o[l][c])})  = ${u} - ${o[l][c]}
${o.join(`
`)} is invalid`)}};return ea=function({covariance:o,eigen:s=!1}){e(o),n(o),s&&i(o)},ea}var ra,zu;function up(){if(zu)return ra;zu=1;const r=rn();return ra=function({correlation:t,variance:e}){return r({covariance:t}),t.map((i,n)=>i.map((o,s)=>o*Math.sqrt(e[s]*e[n])))},ra}var ia,Du;function hp(){if(Du)return ia;Du=1;const r=rn();return ia=function(t){r({covariance:t});const e=t.map((i,n)=>t[n][n]);return{variance:e,correlation:t.map((i,n)=>i.map((o,s)=>o/Math.sqrt(e[s]*e[n])))}},ia}var na,qu;function mb(){if(qu)return na;qu=1;const{identity:r,matPermutation:t}=It(),e=up(),i=hp();return na=function({selectedCovariance:o,totalDimension:s,obsIndexes:c,selectedStateProjection:h}){if(!h)h=new Array(c.length).fill(0).map(()=>new Array(c.length).fill(0)),c.forEach((f,v)=>{h[v][v]=1});else if(h.length!==c.length)throw new Error(`[Sensor-projected] Shape mismatch between ${h.length} and ${c.length}`);const l=r(s);c.forEach((f,v)=>{o&&c.forEach((b,S)=>{l[f][b]=o[v][S]})});const{correlation:u,variance:a}=i(l),d=h[0].length;if(h.length!==c.length)throw new Error(`shape mismatch (${h.length} vs ${c.length})`);const p=t({outputSize:[s,d],colIndexes:h[0].map((f,v)=>v),rowIndexes:c,matrix:h});return{dimension:s,observedProjection:p,covariance(f){const{variance:v}=f;if(!v)return l;if(v.length!==l.length)throw new Error("variance is difference size from baseCovariance");return e({correlation:u,variance:a.map((S,y)=>v[y]*S)})}}},na}var oa,Uu;function gb(){return Uu||(Uu=1,oa={sensor:Gg(),"sensor-local-variance":Yg(),"sensor-projected":mb()}),oa}var sa,Wu;function pp(){return Wu||(Wu=1,sa=function({observation:r,dimension:t}){if(!Array.isArray(r)){if(t===1&&typeof r=="number")return[[r]];throw new TypeError(`The observation (${r}) should be an array (dimension: ${t})`)}if(r.length!==t)throw new TypeError(`Observation (${r.length}) and dimension (${t}) not matching`);return typeof r[0]=="number"||r[0]===null?r.map(e=>[e]):r}),sa}var aa,Fu;function vb(){return Fu||(Fu=1,aa=function({observation:r,dynamic:t}){const{stateProjection:e}=r,{transition:i}=t,n=t.dimension,o=r.dimension;if(n&&o&&Array.isArray(e)&&(n!==e[0].length||o!==e.length))throw new TypeError("stateProjection dimensions not matching with observation and dynamic dimensions");if(n&&Array.isArray(i)&&n!==i.length)throw new TypeError("transition dimension not matching with dynamic dimension");return Array.isArray(e)?{observation:Object.assign({},r,{dimension:e.length}),dynamic:Object.assign({},t,{dimension:e[0].length})}:Array.isArray(i)?{observation:r,dynamic:Object.assign({},t,{dimension:i.length})}:{observation:r,dynamic:t}}),aa}var la,Vu;function bb(){return Vu||(Vu=1,la=function({observation:r,dynamic:t}){const e=t.dimension,i=r.dimension;if(!e||!i)throw new TypeError("Dimension is not set");return{observation:r,dynamic:t}}),la}var ca,Bu;function yb(){if(Bu)return ca;Bu=1;const{padWithZeroCols:r}=It(),{identity:t}=It();return ca=function({observation:e,dynamic:i}){const{observedProjection:n,stateProjection:o}=e,s=e.dimension,c=i.dimension;if(n&&o)throw new TypeError("You cannot use both observedProjection and stateProjection");if(n){const h=r(n,{columns:c});return{observation:Object.assign({},e,{stateProjection:h}),dynamic:i}}if(s&&c&&!o){const h=t(s);return{observation:Object.assign({},e,{stateProjection:r(h,{columns:c})}),dynamic:i}}return{observation:e,dynamic:i}},ca}var da,Hu;function _b(){if(Hu)return da;Hu=1;const{diag:r}=It(),t=fl();return da=function({observation:e,dynamic:i}){if(!i.init){const o=i.dimension,s=new Array(o).fill(0),c=new Array(o).fill(1e6);return{observation:e,dynamic:Object.assign({},i,{init:{mean:s.map(l=>[l]),covariance:r(c),index:-1}})}}if(i.init&&!i.init.mean)throw new Error("dynamic.init should have a mean key");return i.init=Object.assign({},i.init,{covariance:t(i.init.covariance,{dimension:i.dimension})}),{observation:e,dynamic:i}},da}var ua,ju;function wb(){return ju||(ju=1,ua=function(r,{label:t=null}={}){if(typeof r=="function"||Array.isArray(r))return r;throw new Error(`${t===null?"":t+" : "}Only arrays and functions are authorized (got: "${r}")`)}),ua}var ha,Ku;function xb(){return Ku||(Ku=1,ha=function(r){return r.filter((t,e)=>r.indexOf(t)===e)}),ha}var pa,Xu;function Sb(){if(Xu)return pa;Xu=1;const r=xb(),t=100,e=function(i,n){if(n>t)throw new Error(`In deepAssign, number of recursive call (${n}) reached limit (${t}), deepAssign is not working on  self-referencing objects`);const o=i.filter(a=>a!=null),s=o[o.length-1];if(o.length===1)return o[0];if(typeof s!="object"||Array.isArray(s))return s;if(o.length===0)return null;const c=o.filter(a=>typeof a=="object");let h=[];for(const a of c)h=h.concat(Object.keys(a));const l=r(h),u={};for(const a of l){const d=c.map(p=>p[a]);u[a]=e(d,n+1)}return u};return pa=(...i)=>e(i,0),pa}var fa,Gu;function ml(){if(Gu)return fa;Gu=1;const{subtract:r,transpose:t,matMul:e,invert:i,elemWise:n,subSquareMatrix:o}=It(),s=pp(),c=si(),h=rn();class l{constructor({mean:a,covariance:d,index:p}){this.mean=a,this.covariance=d,this.index=p}check(a){this.constructor.check(this,a)}static check(a,{dimension:d=null,title:p=null,eigen:f}={}){if(!(a instanceof l))throw new TypeError(`The argument is not a state 
Tips: maybe you are using 2 different version of kalman-filter in your npm deps tree`);const{mean:v,covariance:b}=a,S=v.length;if(typeof d=="number"&&S!==d)throw new Error(`[${p}] State.mean ${v} with dimension ${S} does not match expected dimension (${d})`);c(v,[S,1],p?p+".mean":"mean"),c(b,[S,S],p?p+".covariance":"covariance"),h({covariance:b,eigen:f},p?p+".covariance":"covariance")}static matMul({state:a,matrix:d}){const p=e(e(d,a.covariance),t(d)),f=e(d,a.mean);return new l({mean:f,covariance:p,index:a.index})}subState(a){return new l({mean:a.map(p=>this.mean[p]),covariance:o(this.covariance,a),index:this.index})}rawDetailedMahalanobis(a){const d=r(this.mean,a);this.check();const p=i(this.covariance);if(p===null)throw this.check({eigen:!0}),new Error(`Cannot invert covariance ${JSON.stringify(this.covariance)}`);const f=t(d),v=Math.sqrt(e(e(f,p),d));if(Number.isNaN(v))throw console.log({diff:d,covarianceInvert:p,this:this,point:a},e(e(f,p),d)),new Error("mahalanobis is NaN");return{diff:d,covarianceInvert:p,value:v}}detailedMahalanobis({kf:a,observation:d,obsIndexes:p}){if(d.length!==a.observation.dimension)throw new Error(`Mahalanobis observation ${d} (dimension: ${d.length}) does not match with kf observation dimension (${a.observation.dimension})`);let f=s({observation:d,dimension:d.length});const v=a.getValue(a.observation.stateProjection,{});let b=this.constructor.matMul({state:this,matrix:v});return Array.isArray(p)&&(b=b.subState(p),f=p.map(S=>f[S])),b.rawDetailedMahalanobis(f)}mahalanobis(a){const d=this.detailedMahalanobis(a).value;if(Number.isNaN(d))throw new TypeError("mahalanobis is NaN");return d}obsBhattacharyya({kf:a,state:d,obsIndexes:p}){const f=a.getValue(a.observation.stateProjection,{});let v=this.constructor.matMul({state:this,matrix:f}),b=this.constructor.matMul({state:d,matrix:f});return Array.isArray(p)&&(v=v.subState(p),b=b.subState(p)),v.bhattacharyya(b)}bhattacharyya(a){const{covariance:d,mean:p}=this,f=n([d,a.covariance],([S,y])=>(S+y)/2);let v;try{v=i(f)}catch(S){throw console.log("Cannot invert",f),S}const b=r(p,a.mean);return e(t(b),e(v,b))[0][0]}}return fa=l,fa}var ma,Yu;function Cb(){if(Yu)return ma;Yu=1;const{matMul:r,transpose:t,add:e,invert:i,subtract:n,identity:o}=It(),s=ml(),c=si(),h={info:(...u)=>console.log(...u),debug(){},warn:(...u)=>console.log(...u),error:(...u)=>console.log(...u)};class l{constructor(a){const{dynamic:d,observation:p,logger:f=h}=a;this.dynamic=d,this.observation=p,this.logger=f}getValue(a,d){return typeof a=="function"?a(d):a}getInitState(){const{mean:a,covariance:d,index:p}=this.dynamic.init,f=new s({mean:a,covariance:d,index:p});return s.check(f,{title:"dynamic.init"}),f}getPredictedCovariance(a={}){let{previousCorrected:d,index:p}=a;d=d||this.getInitState();const f=Object.assign({},{previousCorrected:d,index:p},a),v=this.getValue(this.dynamic.transition,f);c(v,[this.dynamic.dimension,this.dynamic.dimension],"dynamic.transition");const b=t(v),S=r(v,d.covariance),y=r(S,b),E=this.getValue(this.dynamic.covariance,f),k=e(E,y);return c(k,[this.dynamic.dimension,this.dynamic.dimension],"predicted.covariance"),k}predictMean(a){const d=this.predictMeanWithoutControl(a);if(!this.dynamic.constant)return d;const{opts:p}=a,f=this.dynamic.constant(p);return c(f,[this.dynamic.dimension,1],"dynamic.constant"),e(d,f)}predictMeanWithoutControl({opts:a,transition:d}){if(this.dynamic.fn)return this.dynamic.fn(a);const{previousCorrected:p}=a;return r(d,p.mean)}predict(a={}){let{previousCorrected:d,index:p}=a;d=d||this.getInitState(),typeof p!="number"&&typeof d.index=="number"&&(p=d.index+1),s.check(d,{dimension:this.dynamic.dimension});const f=Object.assign({},a,{previousCorrected:d,index:p}),v=this.getValue(this.dynamic.transition,f),b=this.predictMean({transition:v,opts:f}),S=this.getPredictedCovariance(f),y=new s({mean:b,covariance:S,index:p});if(this.logger.debug("Prediction done",y),Number.isNaN(y.mean[0][0]))throw new TypeError("nan");return y}getGain(a){let{predicted:d,stateProjection:p}=a;const f=Object.assign({},{index:d.index},a);p=p||this.getValue(this.observation.stateProjection,f);const v=this.getValue(this.observation.covariance,f);c(v,[this.observation.dimension,this.observation.dimension],"observation.covariance");const b=t(p);c(p,[this.observation.dimension,this.dynamic.dimension],"observation.stateProjection");const S=r(r(p,d.covariance),b),y=e(S,v);return r(r(d.covariance,b),i(y))}getCorrectedCovariance(a){let{predicted:d,optimalKalmanGain:p,stateProjection:f}=a;const v=o(d.covariance.length);if(!f){const b=Object.assign({},{index:d.index},a);f=this.getValue(this.observation.stateProjection,b)}return p||(p=this.getGain(Object.assign({stateProjection:f},a))),r(n(v,r(p,f)),d.covariance)}getPredictedObservation({opts:a,stateProjection:d}){if(this.observation.fn)return this.observation.fn(a);const{predicted:p}=a;return r(d,p.mean)}correct(a){const{predicted:d,observation:p}=a;if(s.check(d,{dimension:this.dynamic.dimension}),!p)throw new Error("no measure available");const f=Object.assign({},{observation:p,predicted:d,index:d.index},a),v=this.getValue(this.observation.stateProjection,f),b=this.getGain(Object.assign({predicted:d,stateProjection:v},a)),S=n(p,this.getPredictedObservation({stateProjection:v,opts:f})),y=e(d.mean,r(b,S));if(Number.isNaN(y[0][0]))throw console.log({optimalKalmanGain:b,innovation:S,predicted:d}),new TypeError("Mean is NaN after correction");const E=this.getCorrectedCovariance(Object.assign({predicted:d,optimalKalmanGain:b,stateProjection:v},a)),k=new s({mean:y,covariance:E,index:d.index});return this.logger.debug("Correction done",k),k}}return ma=l,ma}var ga,Zu;function Eb(){if(Zu)return ga;Zu=1;const{frobenius:r}=It(),t=pp(),e=vb(),i=bb(),n=yb(),o=_b(),s=wb(),c=Sb(),h=fl(),l=ml(),u=tn(),a=Cb(),d=function(S){return typeof S=="string"?{name:S}:{name:"constant-position"}},p=function(S){return typeof S=="number"?{name:"sensor",sensorDimension:S}:typeof S=="string"?{name:S}:{name:"sensor"}},f=function({observation:S,dynamic:y}){(typeof S!="object"||S===null)&&(S=p(S)),(typeof y!="object"||y===null)&&(y=d(y)),typeof S.name=="string"&&(S=u.buildObservation(S)),typeof y.name=="string"&&(y=u.buildDynamic(y,S));const E=e({observation:S,dynamic:y}),k=i(E),P=n(k);return o(P)},v=function(S){const{observation:y,dynamic:E}=S;return c(S,{observation:{stateProjection:s(h(y.stateProjection),{label:"observation.stateProjection"}),covariance:s(h(y.covariance,{dimension:y.dimension}),{label:"observation.covariance"})},dynamic:{transition:s(h(E.transition),{label:"dynamic.transition"}),covariance:s(h(E.covariance,{dimension:E.dimension}),{label:"dynamic.covariance"})}})};class b extends a{constructor(y={}){const E=f(y),k=v(E);super(Object.assign({},y,k))}correct(y){const E=t({observation:y.observation,dimension:this.observation.dimension});return super.correct(Object.assign({},y,{observation:E}))}filter(y){const E=super.predict(y);return this.correct(Object.assign({},y,{predicted:E}))}filterAll(y){let E=this.getInitState();const k=[];for(const P of y){const I=this.predict({previousCorrected:E});E=this.correct({predicted:I,observation:P}),k.push(E.mean.map(O=>O[0]))}return k}asymptoticStateCovariance({limitIterations:y=100,tolerance:E=1e-6}={}){let k=super.getInitState(),P;const I=[];for(let O=0;O<y;O++)if(P=new l({mean:null,covariance:super.getPredictedCovariance({previousCorrected:k})}),k=new l({mean:null,covariance:super.getCorrectedCovariance({predicted:P})}),I.push(k.covariance),r(k.covariance,I[O-1])<E)return I[O];throw new Error("The state covariance does not converge asymptotically")}asymptoticGain({tolerance:y=1e-6}={}){const E=this.asymptoticStateCovariance({tolerance:y}),k=new l({mean:Array.from({length:E.length}).fill(0).map(()=>[0]),covariance:E});return super.getGain({predicted:k})}}return ga=b,ga}var va,Qu;function Ab(){return Qu||(Qu=1,va=function({measures:r,averages:t}){const e=r.length,i=r[0].length;if(e===0)throw new Error("Cannot find covariance for empty sample");return new Array(i).fill(1).map((n,o)=>new Array(i).fill(1).map((s,c)=>{const l=r.map((u,a)=>(u[o]-t[a][o])*(u[c]-t[a][c])).reduce((u,a)=>u+a)/e;if(Number.isNaN(l))throw new TypeError("result is NaN");return l}))}),va}var ba,Ju;function kb(){if(Ju)return ba;Ju=1;const{matMul:r,invert:t}=It();return ba=function({observation:e,obsIndexes:i,selectedStateProjection:n,invertSelectedStateProjection:o}){if(!e)return null;const s=e.observation||e,c=i.map(u=>{if(s[u]===void 0)throw new TypeError(`obsIndexes (${i}) is not matching with observation (${e})`);return[s[u]]}),h=o||t(n);if(h===null)throw new Error("selectedStateProjection is not invertible, please provide invertSelectedStateProjection");return r(h,c).map(u=>u[0]).map(u=>{if(Number.isNaN(u))throw new TypeError("NaN in projection");return u})},ba}var ya,th;function $b(){if(th)return ya;th=1;const r=tn(),t=Kg(),e=gb();return Object.keys(t).forEach(i=>{r.registerDynamic(i,t[i])}),Object.keys(e).forEach(i=>{r.registerObservation(i,e[i])}),ya=Object.assign({KalmanFilter:Eb(),getCovariance:Ab(),State:ml(),checkCovariance:rn(),correlationToCovariance:up(),covarianceToCorrelation:hp(),projectObservation:kb()},r),ya}var eh=$b();class Pb{constructor(t){this._elements=[],this._maxSize=t}clear(){this._elements=[]}push(t){this._elements.length>=this._maxSize&&this._elements.shift(),this._elements.push(t)}avg(){return this._elements.length===0?0:this._elements.reduce(function(e,i){return e+i},0)/this._elements.length}}function fp(){return typeof new PointerEvent("pointerdown").penCustomizationsDetails<"u"}class gl extends ae{constructor(){super();vt(this,"_fetchPenCustomizations",async e=>{if(this.drawWithCustomizations&&fp()){let i=await e.penCustomizationsDetails.getPreferredInkingColor(),n=await e.penCustomizationsDetails.getPreferredInkingStyle(),o=await e.penCustomizationsDetails.getPreferredInkingWidth();if(n=n.toLowerCase(),i!=this.currentPreferredColor||o!=this.currentPreferredWidth||n!=this.currentPreferredStyle){let s=new CustomEvent("customizations-changed",{detail:{currentPreferredColor:i,currentPreferredWidth:o,currentPreferredStyle:n},bubbles:!0,composed:!0});this.dispatchEvent(s)}this.currentPreferredColor=i,this.currentPreferredWidth=o,this.currentPreferredStyle=n}return Promise.resolve()});vt(this,"_onPointerDown",async e=>{if(this._pointerDown&&e.pointerId!==this._pointerId)return;this._app.currentEvent=e,this._pointerDown=!0,this._pointerId=e.pointerId,await this._fetchPenCustomizations(e);let i=this._getPoint(e);this._renderer.beginPath(i),this._draw()});vt(this,"_onPointerMove",async e=>{if(e.clientY<0||e.clientX<0||e.clientX>window.innerWidth||e.clientY>window.innerHeight){this._pointerDown=!1;return}if(this._pointerDown&&e.pointerId===this._pointerId){let i=[],n=[];if(e.getCoalescedEvents&&this._drawCoalescedEvents)if(e.getCoalescedEvents().length>0)for(let o of e.getCoalescedEvents()){let s=this._getPoint(o);s.coalesced=!0,i.push(s)}else i.push(this._getPoint(e));else i.push(this._getPoint(e));if(i[i.length-1].coalesced=!1,this._drawPredictedEvents){for(let o of this._getPrediction(e))n.push(o);this._numOfPredictionPoints>0&&this._numOfPredictionPoints<=10&&(n=n.slice(0,this._numOfPredictionPoints))}this._renderer.addToPath(i,n),this._draw(),e.preventDefault()}this._app.currentEvent=e});vt(this,"_onPointerUp",async e=>{if(this._app.currentEvent=e,this._pointerDown){if(e.pointerId!==this._pointerId)return;this._renderer.endPath(this._getPoint(e)),this.paths=this._renderer.paths,this._pointerDown=!1,this._pointerId=null,this._currentPreferredColor=null,this._currentPreferredWidth=null,this._currentPreferredStyle=null,this._resetPrediction()}});vt(this,"_onResize",async e=>{const i=window.getComputedStyle(this),n=parseInt(i.width,10),o=parseInt(i.height,10);n>0&&o>0&&(this._canvas.width=this._predictionCanvas.width=n,this._canvas.height=this._predictionCanvas.height=o,this._renderer.resize(n,o))});this._app=null,this._canvas=null,this._predictionCanvas=null,this._desynchronized=!1,this._renderer=null,this._pointerRawUpdate=!1,this._pointerDown=!1,this._currentLineColor="#000000",this._currentLineStyle="INK",this._currentLineWidth=1,this._drawCoalescedEvents=!1,this._drawPointsOnly=!1,this._drawPredictedEvents=!1,this._drawWithCustomizations=!1,this._drawWithPressure=!1,this._highlightPredictedEvents=!1,this._predictionType="custom",this._numOfPredictionPoints=1,this._kalmanFilterDataSize=6,this._kalmanFilter=new eh.KalmanFilter({observation:this._kalmanFilterDataSize}),this._correctedPrediction=null}static get properties(){return{app:{type:Object,reflectToAttribute:!0,attribute:!0},canvas:{type:Object,reflectToAttribute:!0,attribute:!0},predictionCanvas:{type:Object,reflectToAttribute:!0,attribute:!0},desynchronized:{type:Boolean,reflectToAttribute:!0,attribute:!0},renderer:{type:Object,reflectToAttribute:!0,attribute:!0},pointerRawUpdate:{type:Boolean,reflectToAttribute:!0,attribute:!0},currentLineColor:{type:String,reflectToAttribute:!0,attribute:!0},currentLineStyle:{type:String,reflectToAttribute:!0,attribute:!0},currentLineWidth:{type:String,reflectToAttribute:!0,attribute:!0},drawCoalescedEvents:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawPointsOnly:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawPredictedEvents:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawWithCustomizations:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawWithPressure:{type:Boolean,reflectToAttribute:!0,attribute:!0},highlightPredictedEvents:{type:Boolean,reflectToAttribute:!0,attribute:!0},numOfPredictionPoints:{type:Number,reflectToAttribute:!0,attribute:!0}}}set app(e){let i=this._app;this._app=e,this.requestUpdate("app",i)}get app(){return this._app}set canvas(e){let i=this._canvas;this._canvas=e,this.requestUpdate("canvas",i)}get canvas(){return this._canvas}set predictionCanvas(e){let i=this._predictionCanvas;this._predictionCanvas=e,this.requestUpdate("predictionCanvas",i)}get predictionCanvas(){return this._predictionCanvas}set desynchronized(e){let i=this._desynchronized;this._desynchronized=e,this.requestUpdate("desynchronized",i)}get desynchronized(){return this._desynchronized}set renderer(e){let i=this._renderer;this._renderer=e,this.requestUpdate("renderer",i),this._renderer&&(this._renderer.currentLineColor=this._currentLineColor,this._renderer.currentLineStyle=this._currentLineStyle,this._renderer.currentLineWidth=this._currentLineWidth,this._renderer.drawCoalescedEvents=this._drawCoalescedEvents,this._renderer.drawPointsOnly=this._drawPointsOnly,this._renderer.drawPredictedEvents=this._drawPredictedEvents,this._renderer.drawWithCustomizations=this._drawWithCustomizations,this._renderer.drawWithPressure=this._drawWithPressure,this._renderer.highlightPredictedEvents=this._highlightPredictedEvents,this._renderer.predictionType=this._predictionType,this._renderer.numOfPredictionPoints=this._numOfPredictionPoints)}get renderer(){return this._renderer}set pointerRawUpdate(e){let i=this._pointerRawUpdate;this._pointerRawUpdate=e,this.requestUpdate("pointerRawUpdate",i),i!==e&&this._canvas&&(e?(this._canvas.onpointermove=null,this._canvas.onpointerrawupdate=this._onPointerMove.bind(this)):(this._canvas.onpointerrawupdate=null,this._canvas.onpointermove=this._onPointerMove.bind(this)))}get pointerRawUpdate(){return this._pointerRawUpdate}set currentLineColor(e){let i=this._currentLineColor;this._currentLineColor=e,this._renderer&&(this._renderer.currentLineColor=e),this.requestUpdate("currentLineColor",i)}get currentLineColor(){return this._currentLineColor}set currentLineStyle(e){let i=this._currentLineStyle;this._currentLineStyle=e,this._renderer&&(this._renderer.currentLineStyle=e),this.requestUpdate("currentLineStyle",i)}get currentLineStyle(){return this._currentLineStyle}set currentLineWidth(e){let i=this._currentLineWidth;this._currentLineWidth=e,this._renderer&&(this._renderer.currentLineWidth=e),this.requestUpdate("currentLineWidth",i)}get currentLineWidth(){return this._currentLineWidth}set drawCoalescedEvents(e){let i=this._drawCoalescedEvents;this._drawCoalescedEvents=e,this._renderer&&(this._renderer.drawCoalescedEvents=e),this.requestUpdate("drawCoalescedEvents",i)}get drawCoalescedEvents(){return this._drawCoalescedEvents}set drawPointsOnly(e){let i=this._drawPointsOnly;this._drawPointsOnly=e,this._renderer&&(this._renderer.drawPointsOnly=e),this.requestUpdate("drawPointsOnly",i)}get drawPointsOnly(){return this._drawPointsOnly}set drawPredictedEvents(e){let i=this._drawPredictedEvents;this._drawPredictedEvents=e,this._renderer&&(this._renderer.drawPredictedEvents=e),this.requestUpdate("drawPredictedEvents",i)}get drawPredictedEvents(){return this._drawPredictedEvents}set drawWithCustomizations(e){let i=this._drawWithCustomizations;this._drawWithCustomizations=e,this._renderer&&(this._renderer.drawWithCustomizations=e),this.requestUpdate("drawWithCustomizations",i)}get drawWithCustomizations(){return this._drawWithCustomizations}set drawWithPressure(e){let i=this._drawWithPressure;this._drawWithPressure=e,this._renderer&&(this._renderer.drawWithPressure=e),this.requestUpdate("drawWithPressure",i)}get drawWithPressure(){return this._drawWithPressure}set highlightPredictedEvents(e){let i=this._highlightPredictedEvents;this._highlightPredictedEvents=e,this._renderer&&(this._renderer.highlightPredictedEvents=e),this.requestUpdate("highlightPredictedEvents",i)}get highlightPredictedEvents(){return this._highlightPredictedEvents}set predictionType(e){let i=this._predictionType;this._predictionType=e,this._renderer&&(this._renderer.predictionType=e),this.requestUpdate("predictionType",i)}get predictionType(){return this._predictionType}set numOfPredictionPoints(e){let i=this._numOfPredictionPoints;this._numOfPredictionPoints=e,this._renderer&&(this._renderer.numOfPredictionPoints=e),this.requestUpdate("numOfPredictionPoints",i)}get numOfPredictionPoints(){return this._numOfPredictionPoints}set paths(e){let i=this._paths;this._paths=e;let n=new CustomEvent("paths-changed",{detail:{paths:e},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("paths",i)}get paths(){return this._paths}firstUpdated(){const e=window.getComputedStyle(this);this._canvas=this.shadowRoot.querySelector("#canvas"),this._predictionCanvas=this.shadowRoot.querySelector("#prediction-canvas"),this._canvas.width=this._predictionCanvas.width=parseInt(e.width,10),this._canvas.height=this._predictionCanvas.height=parseInt(e.height,10),this._canvas.style.left=this._predictionCanvas.style.left=e.left+"px",this._canvas.style.top=this._predictionCanvas.style.top=e.top+"px",this._canvas.onpointerdown=this._onPointerDown.bind(this),this._pointerRawUpdate?this._canvas.onpointerrawupdate=this._onPointerMove.bind(this):this._canvas.onpointermove=this._onPointerMove.bind(this),this._canvas.onpointerup=this._onPointerUp.bind(this),window.addEventListener("resize",this._onResize)}undoPath(){this._renderer.undoPath(),this.paths=this._renderer.paths,this._draw()}redoPath(){this._renderer.redoPath(),this.paths=this._renderer.paths,this._draw()}deleteAllPaths(){this._renderer.deleteAllPaths(),this.paths=this._renderer.paths,this._draw()}_getPrediction(e){let i=[];if(this._predictionType==="browser"&&e.getPredictedEvents){for(let n of e.getPredictedEvents())i.push(this._getPoint(n));return i}else return this._getCustomPrediction(e)}_getCustomPrediction(e){let i=e.getCoalescedEvents();if(i.length<1)return[];let n=[],o=this._getPoint(this._app.currentEvent),s=0,c=0,h=0,l=0,u=0,a=0,d=0,p=0,f=null;for(let v of i){if(f=this._getPoint(v),f.timeStamp===o.timeStamp)break;let b=f.timeStamp-o.timeStamp;h=f.x-o.x,l=f.y-o.y,u=h/b,a=l/b,d=u/b,p=a/b,h<5&&l<5?s=0:h<10&&l<10?s=1:h<20&&l<20?s=8:s=10;let S=this._correctedPrediction,y=this._kalmanFilter.predict({previousCorrected:S});this._correctedPrediction=this._kalmanFilter.correct({predicted:y,observation:[s,b,u,a,d,p]}),S=this._correctedPrediction,o=f}s=Math.ceil(this._correctedPrediction.mean[0][0]),c=this._correctedPrediction.mean[1][0],u=this._correctedPrediction.mean[2][0],a=this._correctedPrediction.mean[3][0],d=this._correctedPrediction.mean[4][0],p=this._correctedPrediction.mean[5][0];for(let v=1;v<=s;v++){let b={type:e.type,timeStamp:e.timeStamp+c*v,x:f.x+u*c*v,y:f.y+a*c*v,pressure:e.pressure,lineColor:this._currentLineColor,lineStyle:this._currentLineStyle,lineWidth:this._currentLineWidth};n.push(b)}return n}_resetPrediction(){this._kalmanFilter=new eh.KalmanFilter({observation:this._kalmanFilterDataSize}),this._correctedPrediction=null}_draw(){this._renderer.render()}_getPoint(e){const i=this._canvas.getBoundingClientRect();return{timeStamp:e.timeStamp,type:e.type,x:e.clientX-i.left,y:e.clientY-i.top,pressure:e.pressure,preferredColor:this._currentPreferredColor,preferredStyle:this._currentPreferredStyle,preferredWidth:this._currentPreferredWidth,lineColor:this._currentLineColor,lineStyle:this._currentLineStyle,lineWidth:this._currentLineWidth}}render(){return ve`
    <canvas id="canvas"></canvas>
    <canvas id="prediction-canvas"></canvas>`}}vt(gl,"styles",qe`
    :host {
    }

    #canvas {
      position: absolute;
      user-select: none;
      touch-action: none;
      z-index: 1;
    }

    #prediction-canvas {
      position: absolute;
      pointer-events: none;
      user-select: none;
      touch-action: none;
      z-index: 2;
    }
  `);class mp{set paths(t){this._paths=t,this.updateProperty("paths",t)}get paths(){return this._paths}set currentLineColor(t){this._currentLineColor=t,this.updateProperty("currentLineColor",t)}get currentLineColor(){return this._currentLineColor}set currentLineStyle(t){this._currentLineStyle=t,this.updateProperty("currentLineStyle",t)}get currentLineStyle(){return this._currentLineStyle}set currentLineWidth(t){this._currentLineWidth=t,this.updateProperty("currentLineWidth",t)}get currentLineWidth(){return this._currentLineWidth}set drawCoalescedEvents(t){this._drawCoalescedEvents=t,this.updateProperty("drawCoalescedEvents",t)}get drawCoalescedEvents(){return this._drawCoalescedEvents}set drawPointsOnly(t){this._drawPointsOnly=t,this.updateProperty("drawPointsOnly",t)}get drawPointsOnly(){return this._drawPointsOnly}set drawPredictedEvents(t){this._drawPredictedEvents=t,this.updateProperty("drawPredictedEvents",t)}get drawPredictedEvents(){return this._drawPredictedEvents}set drawWithCustomizations(t){this._drawWithCustomizations=t,this.updateProperty("drawWithCustomizations",t)}get drawWithCustomizations(){return this._drawWithCustomizations}set drawWithPressure(t){this._drawWithPressure=t,this.updateProperty("drawWithPressure",t)}get drawWithPressure(){return this._drawWithPressure}set highlightPredictedEvents(t){this._highlightPredictedEvents=t,this.updateProperty("highlightPredictedEvents",t)}get highlightPredictedEvents(){return this._highlightPredictedEvents}set predictionType(t){this._predictionType=t,this.updateProperty("predictionType",t)}get predictionType(){return this._predictionType}set numOfPredictionPoints(t){this._numOfPredictionPoints=t,this.updateProperty("numOfPredictionPoints",t)}get numOfPredictionPoints(){return this._numOfPredictionPoints}constructor(t,e){this._canvas=t,this._predictionCanvas=e,this._paths=[],this._currentPath=null,this._currentLineColor="#000000",this._currentLineStyle="INK",this._currentLineWidth=1,this._drawCoalescedEvents=!1,this._drawPointsOnly=!1,this._drawPredictedEvents=!1,this._drawWithCustomizations=!1,this._drawWithPressure=!1,this._highlightPredictedEvents=!1,this._predictionType="custom",this._numOfPredictionPoints=1}getCurrentLineColor(t){return t.preferredColor&&this._drawWithCustomizations?t.preferredColor:t.lineColor}getCurrentLineStyle(t){return t.preferredStyle&&this._drawWithCustomizations?t.preferredStyle:t.lineStyle}getCurrentLineWidth(t){return t.preferredWidth&&this._drawWithCustomizations?t.preferredWidth:t.lineWidth}updateProperty(t,e){console.log("renderer property",t,"set to",e)}resize(t,e){this._canvas.width=this._predictionCanvas.width=t,this._canvas.height=this._predictionCanvas.height=e}undoPath(){this.clearCanvas(),this.clearPredictionCanvas();let t=!1;for(let e=this._paths.length-1;e>=0;e--)this._paths[e].rendered=!1,!t&&this._paths[e].display&&(this._paths[e].display=!1,t=!0)}redoPath(){this.clearCanvas(),this.clearPredictionCanvas();let t=!1;for(let e=0;e<this._paths.length;e++)this._paths[e].rendered=!1,!t&&!this._paths[e].display&&(this._paths[e].display=!0,t=!0)}beginPath(t){this._currentPath||(this._currentPath=new Tb),this._currentPath.points.push(t);let e=-1;for(let i=this._paths.length-1;i>=0;i--)this._paths[i].display||(e=i);e>=0&&this._paths.splice(e,this._paths.length)}addToPath(t,e){!t||!this._currentPath||(this._currentPath.points.push(...t),this._currentPath.predictedPoints=e)}endPath(t){this._drawPredictedEvents&&this.clearPredictionCanvas(),this._currentPath&&(this._currentPath.predictedPoints=[],this._currentPath.display=!0,this._currentPath.rendered=!0,this._paths.push(this._currentPath)),this._currentPath=null}deleteAllPaths(){this.clearCanvas(),this.clearPredictionCanvas(),this._paths=[],this._currentPath=null,this._points=[],this._predictedPoints=[]}clearCanvas(){console.error("base implementation not provided, must overwrite")}clearPredictionCanvas(){console.error("base implementation not provided, must overwrite")}render(){console.error("base implementation not provided, must overwrite")}}class Tb{set points(t){this._points=t}get points(){return this._points}set predictedPoints(t){this._predictedPoints=t}get predictedPoints(){return this._predictedPoints}set display(t){this._display=t}get display(){return this._display}set rendered(t){this._rendered=t}get rendered(){return this._rendered}constructor(){this._points=[],this._predictedPoints=[],this._display=!1,this._rendered=!1}}class Ib extends mp{constructor(t,e,i){if(super(t,e),this._context=this._canvas.getContext("2d",{desynchronized:i}),this._predictionContext=this._predictionCanvas.getContext("2d",{desynchronized:i}),!this._context||!this._predictionContext){console.error("Your browser doesn't support canvas, this demo won't work");return}console.log("Canvas2D loaded, desynchronized:",i)}clearCanvas(){this._context.clearRect(0,0,this._canvas.width,this._canvas.height)}clearPredictionCanvas(){this._predictionContext.clearRect(0,0,this._predictionContext.canvas.width,this._predictionContext.canvas.height)}render(){if(this._paths.forEach(t=>{t.display&&!t.rendered&&(this._drawPointsOnly?this._drawPoints(this._context,t.points):this.getCurrentLineStyle(t.points[0])==="highlighter"?this._drawLine(this._context,t.points):this._drawStroke(this._context,t.points),t.rendered=!0)}),this._currentPath&&this._currentPath.points.length>0&&!this._currentPath.points[this._currentPath.points.length-1].rendered){let t=[...this._currentPath.points];for(let e=t.length-1;e>=0;e--)if(t[e].rendered){t.splice(0,e);break}this._drawPointsOnly?this._drawPoints(this._context,t):this.getCurrentLineStyle(t[0])==="highlighter"?this._drawLine(this._context,t):this._drawStroke(this._context,t),this._drawPredictedEvents&&(this._predictionContext.clearRect(0,0,this._predictionContext.canvas.width,this._predictionContext.canvas.height),this._currentPath.predictedPoints.length>0&&(this._drawPointsOnly?this._strokePredictedPoints(this._predictionContext,this._currentPath.predictedPoints):this.getCurrentLineStyle(this._currentPath.points[0])!=="brush"&&this.getCurrentLineStyle(this._currentPath.points[0])!=="highlighter"&&this._strokePredictedEvents(this._predictionContext,this._currentPath.predictedPoints))),this._currentPath.points.forEach(e=>{e.rendered=!0}),this._currentPath.predictedPoints=[]}}_hexToRgbColor(t){return{r:"0x"+t[1]+t[2]|0,g:"0x"+t[3]+t[4]|0,b:"0x"+t[5]+t[6]|0}}_drawStroke(t,e){let i=this.getCurrentLineColor(e[0]),n=this.getCurrentLineStyle(e[0]),o=this.getCurrentLineWidth(e[0]),s,c,h;for(e[0].type==="pointerdown"&&(s=this.getCurrentLineWidth(e[0]),c=this.getCurrentLineWidth(e[0]),t.fillStyle=i,t.strokeStyle="none"),h=0;h<e.length-1;h++){this._drawWithPressure&&e[h].type!=="pointerdown"?(s=this.getCurrentLineWidth(e[h])*e[h].pressure*2,c=this.getCurrentLineWidth(e[h])*e[h+1].pressure*2):s=c=this.getCurrentLineWidth(e[h]);let l=this._createPath(e[h].x,e[h].y,e[h+1].x,e[h+1].y,s,c);switch(n){case"brush":t.filter="blur("+o+"px)";break;default:t.filter="none";break}t.fill(l)}}_drawLine(t,e){if(e.length<2)return;let i=this.getCurrentLineColor(e[0]),n=this._hexToRgbColor(i);e[0].type==="pointerdown"&&(t.beginPath(),t.lineCap="round",t.lineJoin="round",t.fillStyle="none",t.strokeStyle="rgba("+n.r+","+n.g+","+n.b+",0.01)",t.filter="none"),t.lineWidth=this.getCurrentLineWidth(e[0]),t.moveTo(e[0].x,e[0].y),t.lineTo(e[1].x,e[1].y);let o;for(o=1;o<e.length-2;o++){const s=(e[o].x+e[o+1].x)/2,c=(e[o].y+e[o+1].y)/2;t.quadraticCurveTo(e[o].x,e[o].y,Math.round(s),Math.round(c))}e.length>2&&t.quadraticCurveTo(e[o].x,e[o].y,e[o+1].x,e[o+1].y),t.stroke()}_drawPoints(t,e){for(let i=0;i<e.length;i++)t.beginPath(),t.fillStyle=this.getCurrentLineColor(e[i]),e[i].coalesced?(t.arc(e[i].x,e[i].y,this.getCurrentLineWidth(e[i])/2,0,Math.PI*2,!0),t.stroke()):(t.arc(e[i].x,e[i].y,this.getCurrentLineWidth(e[i]),0,Math.PI*2,!0),t.fill())}_createPath(t,e,i,n,o,s){const c=i-t,h=n-e,l=Math.atan2(h,c)+Math.PI/2,u=new Path2D;return u.arc(t,e,o/2,l,l+Math.PI,!1),u.arc(i,n,s/2,l+Math.PI,l,!1),u.closePath(),u}_strokePredictedEvents(t,e,i){if(e.length>0&&this._currentPath.points.length>0){let n=this._currentPath.points[this._currentPath.points.length-1],o,s;this._drawWithPressure?o=s=this.getCurrentLineWidth(n)*n.pressure*2:o=s=this.getCurrentLineWidth(n);let c=this._createPath(n.x,n.y,e[0].x,e[0].y,o,s);this._highlightPredictedEvents?t.fillStyle="red":t.fillStyle=this.getCurrentLineColor(n),t.fill(c);let h;for(h=0;h<e.length-1;h++){let l=this._createPath(e[h].x,e[h].y,e[h+1].x,e[h+1].y,o,s);t.fill(l)}}}_strokePredictedPoints(t,e){let i,n=this._currentPath.points[this._currentPath.points.length-1];for(i=0;i<e.length;i++)t.beginPath(),this._highlightPredictedEvents?t.fillStyle="red":t.fillStyle=this.getCurrentLineColor(n),t.arc(e[i].x,e[i].y,3,0,Math.PI*2,!0),t.fill()}}class Rb extends gl{firstUpdated(){super.firstUpdated(),this.renderer=new Ib(this.canvas,this.predictionCanvas,this.desynchronized)}constructor(){super()}}customElements.define("js-canvas",Rb);var _a={exports:{}};const Ob={},Lb=Object.freeze(Object.defineProperty({__proto__:null,default:Ob},Symbol.toStringTag,{value:"Module"})),wa=kg(Lb);var rh;function Mb(){return rh||(rh=1,function(r,t){var e=(()=>{var i=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return typeof __filename<"u"&&(i=i||__filename),function(n){n=n||{};var o;o||(o=typeof n<"u"?n:{});var s=Object.assign,c,h;o.ready=new Promise(function(g,m){c=g,h=m}),function(g){var m={};g.loadCmdsTypedArray=function(R){for(var M=0,D=0;D<R.length;D++)M+=R[D].length;if(m[M])var q=m[M];else q=new Float32Array(M),m[M]=q;var B=0;for(D=0;D<R.length;D++)for(var st=0;st<R[D].length;st++){var gt=R[D][st];typeof gt=="string"&&(gt=g.SkBits2FloatUnsigned(parseInt(gt))),q[B]=gt,B++}return R=g._malloc(q.length*q.BYTES_PER_ELEMENT),g.HEAPF32.set(q,R/q.BYTES_PER_ELEMENT),[R,M]},g.FromCmds=function(R){R=g.loadCmdsTypedArray(R);var M=g._FromCmds(R[0],R[1]);return g._free(R[0]),M};var w,C,$,T,L;g.cubicYFromX=function(R,M,D,q,B){return w&&C===R&&$===M&&T===D&&L===q||(w&&w.delete(),w=new g._SkCubicMap([R,M],[D,q]),C=R,$=M,T=D,L=q),w.computeYFromX(B)},g.cubicPtFromT=function(R,M,D,q,B){return w&&C===R&&$===M&&T===D&&L===q||(w&&w.delete(),w=new g._SkCubicMap([R,M],[D,q]),C=R,$=M,T=D,L=q),w.computePtFromT(B)}}(o),function(g){g.onRuntimeInitialized=function(){g.SkPath.prototype.addPath=function(){var m=arguments[0];if(arguments.length===1)this._addPath(m,1,0,0,0,1,0,0,0,1);else if(arguments.length===2){var w=arguments[1];this._addPath(m,w.a,w.c,w.e,w.b,w.d,w.f,0,0,1)}else if(arguments.length===7)w=arguments,this._addPath(m,w[1],w[3],w[5],w[2],w[4],w[6],0,0,1);else if(arguments.length===10)w=arguments,this._addPath(m,w[1],w[2],w[3],w[4],w[5],w[6],w[7],w[8],w[9]);else return console.Ma("addPath expected to take 1, 2, 7, or 10 args. Got "+arguments.length),null;return this},g.SkPath.prototype.arc=function(m,w,C,$,T,L){return this._arc(m,w,C,$,T,!!L),this},g.SkPath.prototype.arcTo=function(m,w,C,$,T){return this._arcTo(m,w,C,$,T),this},g.SkPath.prototype.bezierCurveTo=function(m,w,C,$,T,L){return this._cubicTo(m,w,C,$,T,L),this},g.SkPath.prototype.close=function(){return this._close(),this},g.SkPath.prototype.closePath=function(){return this._close(),this},g.SkPath.prototype.conicTo=function(m,w,C,$,T){return this._conicTo(m,w,C,$,T),this},g.SkPath.prototype.cubicTo=function(m,w,C,$,T,L){return this._cubicTo(m,w,C,$,T,L),this},g.SkPath.prototype.dash=function(m,w,C){return this._dash(m,w,C)?this:null},g.SkPath.prototype.ellipse=function(m,w,C,$,T,L,R,M){return this._ellipse(m,w,C,$,T,L,R,!!M),this},g.SkPath.prototype.lineTo=function(m,w){return this._lineTo(m,w),this},g.SkPath.prototype.moveTo=function(m,w){return this._moveTo(m,w),this},g.SkPath.prototype.op=function(m,w){return this._op(m,w)?this:null},g.SkPath.prototype.quadraticCurveTo=function(m,w,C,$){return this._quadTo(m,w,C,$),this},g.SkPath.prototype.quadTo=function(m,w,C,$){return this._quadTo(m,w,C,$),this},g.SkPath.prototype.rect=function(m,w,C,$){return this._rect(m,w,C,$),this},g.SkPath.prototype.simplify=function(){return this._simplify()?this:null},g.SkPath.prototype.stroke=function(m){return m=m||{},m.width=m.width||1,m.miter_limit=m.miter_limit||4,m.cap=m.cap||g.StrokeCap.BUTT,m.join=m.join||g.StrokeJoin.MITER,this._stroke(m)?this:null},g.SkPath.prototype.transform=function(){if(arguments.length===1)this._transform(arguments[0]);else if(arguments.length===9){var m=arguments;this._transform(m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8])}else return console.Ma("transform expected to take 1 or 9 arguments. Got "+arguments.length),null;return this},g.SkPath.prototype.trim=function(m,w,C){return this._trim(m,w,!!C)?this:null}}}(o);var l=s({},o),u=typeof window=="object",a=typeof importScripts=="function",d="",p,f,v,b,S,y;typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"?(d=a?wa.dirname(d)+"/":__dirname+"/",y=()=>{S||(b=wa,S=wa)},p=function(g,m){return y(),g=S.normalize(g),b.readFileSync(g,m?null:"utf8")},v=g=>(g=p(g,!0),g.buffer||(g=new Uint8Array(g)),g),f=(g,m,w)=>{y(),g=S.normalize(g),b.readFile(g,function(C,$){C?w(C):m($.buffer)})},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(g){throw g}),process.on("unhandledRejection",function(g){throw g}),o.inspect=function(){return"[Emscripten Module object]"}):(u||a)&&(a?d=self.location.href:typeof document<"u"&&document.currentScript&&(d=document.currentScript.src),i&&(d=i),d.indexOf("blob:")!==0?d=d.substr(0,d.replace(/[?#].*/,"").lastIndexOf("/")+1):d="",p=g=>{var m=new XMLHttpRequest;return m.open("GET",g,!1),m.send(null),m.responseText},a&&(v=g=>{var m=new XMLHttpRequest;return m.open("GET",g,!1),m.responseType="arraybuffer",m.send(null),new Uint8Array(m.response)}),f=(g,m,w)=>{var C=new XMLHttpRequest;C.open("GET",g,!0),C.responseType="arraybuffer",C.onload=()=>{C.status==200||C.status==0&&C.response?m(C.response):w()},C.onerror=w,C.send(null)});var E=o.print||console.log.bind(console),k=o.printErr||console.warn.bind(console);s(o,l),l=null;var P;o.wasmBinary&&(P=o.wasmBinary),o.noExitRuntime,typeof WebAssembly!="object"&&Ar("no native wasm support detected");var I,O=!1,N=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function U(g,m,w){var C=m+w;for(w=m;g[w]&&!(w>=C);)++w;if(16<w-m&&g.subarray&&N)return N.decode(g.subarray(m,w));for(C="";m<w;){var $=g[m++];if($&128){var T=g[m++]&63;if(($&224)==192)C+=String.fromCharCode(($&31)<<6|T);else{var L=g[m++]&63;$=($&240)==224?($&15)<<12|T<<6|L:($&7)<<18|T<<12|L<<6|g[m++]&63,65536>$?C+=String.fromCharCode($):($-=65536,C+=String.fromCharCode(55296|$>>10,56320|$&1023))}}else C+=String.fromCharCode($)}return C}function z(g,m,w){var C=j;if(0<w){w=m+w-1;for(var $=0;$<g.length;++$){var T=g.charCodeAt($);if(55296<=T&&57343>=T){var L=g.charCodeAt(++$);T=65536+((T&1023)<<10)|L&1023}if(127>=T){if(m>=w)break;C[m++]=T}else{if(2047>=T){if(m+1>=w)break;C[m++]=192|T>>6}else{if(65535>=T){if(m+2>=w)break;C[m++]=224|T>>12}else{if(m+3>=w)break;C[m++]=240|T>>18,C[m++]=128|T>>12&63}C[m++]=128|T>>6&63}C[m++]=128|T&63}}C[m]=0}}var W=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function F(g,m){for(var w=g>>1,C=w+m/2;!(w>=C)&&zt[w];)++w;if(w<<=1,32<w-g&&W)return W.decode(j.subarray(g,w));for(w="",C=0;!(C>=m/2);++C){var $=yt[g+2*C>>1];if($==0)break;w+=String.fromCharCode($)}return w}function V(g,m,w){if(w===void 0&&(w=2147483647),2>w)return 0;w-=2;var C=m;w=w<2*g.length?w/2:g.length;for(var $=0;$<w;++$)yt[m>>1]=g.charCodeAt($),m+=2;return yt[m>>1]=0,m-C}function G(g){return 2*g.length}function Q(g,m){for(var w=0,C="";!(w>=m/4);){var $=_t[g+4*w>>2];if($==0)break;++w,65536<=$?($-=65536,C+=String.fromCharCode(55296|$>>10,56320|$&1023)):C+=String.fromCharCode($)}return C}function et(g,m,w){if(w===void 0&&(w=2147483647),4>w)return 0;var C=m;w=C+w-4;for(var $=0;$<g.length;++$){var T=g.charCodeAt($);if(55296<=T&&57343>=T){var L=g.charCodeAt(++$);T=65536+((T&1023)<<10)|L&1023}if(_t[m>>2]=T,m+=4,m+4>w)break}return _t[m>>2]=0,m-C}function Z(g){for(var m=0,w=0;w<g.length;++w){var C=g.charCodeAt(w);55296<=C&&57343>=C&&++w,m+=4}return m}var rt,K,j,yt,zt,_t,Et,Kt,Fe;function xe(){var g=I.buffer;rt=g,o.HEAP8=K=new Int8Array(g),o.HEAP16=yt=new Int16Array(g),o.HEAP32=_t=new Int32Array(g),o.HEAPU8=j=new Uint8Array(g),o.HEAPU16=zt=new Uint16Array(g),o.HEAPU32=Et=new Uint32Array(g),o.HEAPF32=Kt=new Float32Array(g),o.HEAPF64=Fe=new Float64Array(g)}var re,fe=[],Ve=[],Cr=[];function ar(){var g=o.preRun.shift();fe.unshift(g)}var Be=0,Er=null;o.preloadedImages={},o.preloadedAudios={};function Ar(g){throw o.onAbort&&o.onAbort(g),g="Aborted("+g+")",k(g),O=!0,g=new WebAssembly.RuntimeError(g+". Build with -s ASSERTIONS=1 for more info."),h(g),g}function bl(){return ie.startsWith("data:application/octet-stream;base64,")}var ie;if(ie="pathkit.wasm",!bl()){var yl=ie;ie=o.locateFile?o.locateFile(yl,d):d+yl}function _l(){var g=ie;try{if(g==ie&&P)return new Uint8Array(P);if(v)return v(g);throw"both async and sync fetching of the wasm failed"}catch(m){Ar(m)}}function kp(){if(!P&&(u||a)){if(typeof fetch=="function"&&!ie.startsWith("file://"))return fetch(ie,{credentials:"same-origin"}).then(function(g){if(!g.ok)throw"failed to load wasm binary file at '"+ie+"'";return g.arrayBuffer()}).catch(function(){return _l()});if(f)return new Promise(function(g,m){f(ie,function(w){g(new Uint8Array(w))},m)})}return Promise.resolve().then(function(){return _l()})}function ln(g){for(;0<g.length;){var m=g.shift();if(typeof m=="function")m(o);else{var w=m.Wa;typeof w=="number"?m.xa===void 0?re.get(w)():re.get(w)(m.xa):w(m.xa===void 0?null:m.xa)}}}var di={};function cn(g){for(;g.length;){var m=g.pop();g.pop()(m)}}function lr(g){return this.fromWireType(Et[g>>2])}var cr={},He={},ui={};function wl(g){if(g===void 0)return"_unknown";g=g.replace(/[^a-zA-Z0-9_]/g,"$");var m=g.charCodeAt(0);return 48<=m&&57>=m?"_"+g:g}function dn(g,m){return g=wl(g),function(){return m.apply(this,arguments)}}function un(g){var m=Error,w=dn(g,function(C){this.name=g,this.message=C,C=Error(C).stack,C!==void 0&&(this.stack=this.toString()+`
`+C.replace(/^Error(:[^\n]*)?\n/,""))});return w.prototype=Object.create(m.prototype),w.prototype.constructor=w,w.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},w}var xl=void 0;function hi(g){throw new xl(g)}function Se(g,m,w){function C(R){R=w(R),R.length!==g.length&&hi("Mismatched type converter count");for(var M=0;M<g.length;++M)me(g[M],R[M])}g.forEach(function(R){ui[R]=m});var $=Array(m.length),T=[],L=0;m.forEach(function(R,M){He.hasOwnProperty(R)?$[M]=He[R]:(T.push(R),cr.hasOwnProperty(R)||(cr[R]=[]),cr[R].push(function(){$[M]=He[R],++L,L===T.length&&C($)}))}),T.length===0&&C($)}var pi={};function fi(g){switch(g){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+g)}}var Sl=void 0;function At(g){for(var m="";j[g];)m+=Sl[j[g++]];return m}var dr=void 0;function ot(g){throw new dr(g)}function me(g,m,w={}){if(!("argPackAdvance"in m))throw new TypeError("registerType registeredInstance requires argPackAdvance");var C=m.name;if(g||ot('type "'+C+'" must have a positive integer typeid pointer'),He.hasOwnProperty(g)){if(w.Qa)return;ot("Cannot register type '"+C+"' twice")}He[g]=m,delete ui[g],cr.hasOwnProperty(g)&&(m=cr[g],delete cr[g],m.forEach(function($){$()}))}function hn(g){ot(g.ea.ha.fa.name+" instance already deleted")}var pn=!1;function Cl(){}function El(g){--g.count.value,g.count.value===0&&(g.ka?g.ma.la(g.ka):g.ha.fa.la(g.ga))}function kr(g){return typeof FinalizationGroup>"u"?(kr=m=>m,g):(pn=new FinalizationGroup(function(m){for(var w=m.next();!w.done;w=m.next())w=w.value,w.ga?El(w):console.warn("object already deleted: "+w.ga)}),kr=m=>(pn.register(m,m.ea,m.ea),m),Cl=m=>{pn.unregister(m.ea)},kr(g))}var $r=void 0,Pr=[];function fn(){for(;Pr.length;){var g=Pr.pop();g.ea.pa=!1,g.delete()}}function ke(){}var Al={};function kl(g,m,w){if(g[m].ia===void 0){var C=g[m];g[m]=function(){return g[m].ia.hasOwnProperty(arguments.length)||ot("Function '"+w+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+g[m].ia+")!"),g[m].ia[arguments.length].apply(this,arguments)},g[m].ia=[],g[m].ia[C.ua]=C}}function mn(g,m,w){o.hasOwnProperty(g)?((w===void 0||o[g].ia!==void 0&&o[g].ia[w]!==void 0)&&ot("Cannot register public name '"+g+"' twice"),kl(o,g,g),o.hasOwnProperty(w)&&ot("Cannot register multiple overloads of a function with the same number of arguments ("+w+")!"),o[g].ia[w]=m):(o[g]=m,w!==void 0&&(o[g].Xa=w))}function $p(g,m,w,C,$,T,L,R){this.name=g,this.constructor=m,this.qa=w,this.la=C,this.na=$,this.Oa=T,this.ta=L,this.La=R,this.Ta=[]}function gn(g,m,w){for(;m!==w;)m.ta||ot("Expected null or instance of "+w.name+", got an instance of "+m.name),g=m.ta(g),m=m.na;return g}function Pp(g,m){return m===null?(this.Ba&&ot("null is not a valid "+this.name),0):(m.ea||ot('Cannot pass "'+wn(m)+'" as a '+this.name),m.ea.ga||ot("Cannot pass deleted object as a pointer of type "+this.name),gn(m.ea.ga,m.ea.ha.fa,this.fa))}function Tp(g,m){if(m===null){if(this.Ba&&ot("null is not a valid "+this.name),this.wa){var w=this.sa();return g!==null&&g.push(this.la,w),w}return 0}if(m.ea||ot('Cannot pass "'+wn(m)+'" as a '+this.name),m.ea.ga||ot("Cannot pass deleted object as a pointer of type "+this.name),!this.va&&m.ea.ha.va&&ot("Cannot convert argument of type "+(m.ea.ma?m.ea.ma.name:m.ea.ha.name)+" to parameter type "+this.name),w=gn(m.ea.ga,m.ea.ha.fa,this.fa),this.wa)switch(m.ea.ka===void 0&&ot("Passing raw pointer to smart pointer is illegal"),this.Va){case 0:m.ea.ma===this?w=m.ea.ka:ot("Cannot convert argument of type "+(m.ea.ma?m.ea.ma.name:m.ea.ha.name)+" to parameter type "+this.name);break;case 1:w=m.ea.ka;break;case 2:if(m.ea.ma===this)w=m.ea.ka;else{var C=m.clone();w=this.Ua(w,$e(function(){C.delete()})),g!==null&&g.push(this.la,w)}break;default:ot("Unsupporting sharing policy")}return w}function Ip(g,m){return m===null?(this.Ba&&ot("null is not a valid "+this.name),0):(m.ea||ot('Cannot pass "'+wn(m)+'" as a '+this.name),m.ea.ga||ot("Cannot pass deleted object as a pointer of type "+this.name),m.ea.ha.va&&ot("Cannot convert argument of type "+m.ea.ha.name+" to parameter type "+this.name),gn(m.ea.ga,m.ea.ha.fa,this.fa))}function $l(g,m,w){return m===w?g:w.na===void 0?null:(g=$l(g,m,w.na),g===null?null:w.La(g))}var Tr={};function Rp(g,m){for(m===void 0&&ot("ptr should not be undefined");g.na;)m=g.ta(m),g=g.na;return Tr[m]}function mi(g,m){return m.ha&&m.ga||hi("makeClassHandle requires ptr and ptrType"),!!m.ma!=!!m.ka&&hi("Both smartPtrType and smartPtr must be specified"),m.count={value:1},kr(Object.create(g,{ea:{value:m}}))}function Ce(g,m,w,C){this.name=g,this.fa=m,this.Ba=w,this.va=C,this.wa=!1,this.la=this.Ua=this.sa=this.Ia=this.Va=this.Sa=void 0,m.na!==void 0?this.toWireType=Tp:(this.toWireType=C?Pp:Ip,this.ja=null)}function Pl(g,m,w){o.hasOwnProperty(g)||hi("Replacing nonexistant public symbol"),o[g].ia!==void 0&&w!==void 0?o[g].ia[w]=m:(o[g]=m,o[g].ua=w)}function Op(g,m){var w=[];return function(){w.length=arguments.length;for(var C=0;C<arguments.length;C++)w[C]=arguments[C];return g.includes("j")?(C=o["dynCall_"+g],C=w&&w.length?C.apply(null,[m].concat(w)):C.call(null,m)):C=re.get(m).apply(null,w),C}}function Vt(g,m){g=At(g);var w=g.includes("j")?Op(g,m):re.get(m);return typeof w!="function"&&ot("unknown function pointer with signature "+g+": "+m),w}var Tl=void 0;function Il(g){g=zl(g);var m=At(g);return Ee(g),m}function gi(g,m){function w(T){$[T]||He[T]||(ui[T]?ui[T].forEach(w):(C.push(T),$[T]=!0))}var C=[],$={};throw m.forEach(w),new Tl(g+": "+C.map(Il).join([", "]))}function vn(g,m){for(var w=[],C=0;C<g;C++)w.push(_t[(m>>2)+C]);return w}function bn(g,m,w,C,$){var T=m.length;2>T&&ot("argTypes array size mismatch! Must at least get return value and 'this' types!");var L=m[1]!==null&&w!==null,R=!1;for(w=1;w<m.length;++w)if(m[w]!==null&&m[w].ja===void 0){R=!0;break}var M=m[0].name!=="void",D=T-2,q=Array(D),B=[],st=[];return function(){if(arguments.length!==D&&ot("function "+g+" called with "+arguments.length+" arguments, expected "+D+" args!"),st.length=0,B.length=L?2:1,B[0]=$,L){var gt=m[1].toWireType(st,this);B[1]=gt}for(var at=0;at<D;++at)q[at]=m[at+2].toWireType(st,arguments[at]),B.push(q[at]);if(at=C.apply(null,B),R)cn(st);else for(var Bt=L?1:2;Bt<m.length;Bt++){var Ht=Bt===1?gt:q[Bt-2];m[Bt].ja!==null&&m[Bt].ja(Ht)}return gt=M?m[0].fromWireType(at):void 0,gt}}var yn=[],ce=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Rl(g){4<g&&--ce[g].Ca===0&&(ce[g]=void 0,yn.push(g))}function _n(g){return g||ot("Cannot use deleted val. handle = "+g),ce[g].value}function $e(g){switch(g){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var m=yn.length?yn.pop():ce.length;return ce[m]={Ca:1,value:g},m}}function Lp(g,m,w){switch(m){case 0:return function(C){return this.fromWireType((w?K:j)[C])};case 1:return function(C){return this.fromWireType((w?yt:zt)[C>>1])};case 2:return function(C){return this.fromWireType((w?_t:Et)[C>>2])};default:throw new TypeError("Unknown integer type: "+g)}}function vi(g,m){var w=He[g];return w===void 0&&ot(m+" has unknown type "+Il(g)),w}function wn(g){if(g===null)return"null";var m=typeof g;return m==="object"||m==="array"||m==="function"?g.toString():""+g}function Mp(g,m){switch(m){case 2:return function(w){return this.fromWireType(Kt[w>>2])};case 3:return function(w){return this.fromWireType(Fe[w>>3])};default:throw new TypeError("Unknown float type: "+g)}}function Np(g,m,w){switch(m){case 0:return w?function(C){return K[C]}:function(C){return j[C]};case 1:return w?function(C){return yt[C>>1]}:function(C){return zt[C>>1]};case 2:return w?function(C){return _t[C>>2]}:function(C){return Et[C>>2]};default:throw new TypeError("Unknown integer type: "+g)}}var zp={};function xn(g){var m=zp[g];return m===void 0?At(g):m}var Sn=[];function Ol(){function g(m){m.$$$embind_global$$$=m;var w=typeof $$$embind_global$$$=="object"&&m.$$$embind_global$$$===m;return w||delete m.$$$embind_global$$$,w}if(typeof globalThis=="object")return globalThis;if(typeof $$$embind_global$$$=="object"||(typeof Hn=="object"&&g(Hn)?$$$embind_global$$$=Hn:typeof self=="object"&&g(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")}function Dp(g){var m=Sn.length;return Sn.push(g),m}function qp(g,m){for(var w=Array(g),C=0;C<g;++C)w[C]=vi(_t[(m>>2)+C],"parameter "+C);return w}var Ll=[];function Up(g){var m=Array(g+1);return function(w,C,$){m[0]=w;for(var T=0;T<g;++T){var L=vi(_t[(C>>2)+T],"parameter "+T);m[T+1]=L.readValueFromPointer($),$+=L.argPackAdvance}return w=new(w.bind.apply(w,m)),$e(w)}}var Ml={},Wp=[null,[],[]];xl=o.InternalError=un("InternalError");for(var Nl=Array(256),bi=0;256>bi;++bi)Nl[bi]=String.fromCharCode(bi);Sl=Nl,dr=o.BindingError=un("BindingError"),ke.prototype.isAliasOf=function(g){if(!(this instanceof ke&&g instanceof ke))return!1;var m=this.ea.ha.fa,w=this.ea.ga,C=g.ea.ha.fa;for(g=g.ea.ga;m.na;)w=m.ta(w),m=m.na;for(;C.na;)g=C.ta(g),C=C.na;return m===C&&w===g},ke.prototype.clone=function(){if(this.ea.ga||hn(this),this.ea.ra)return this.ea.count.value+=1,this;var g=kr,m=Object,w=m.create,C=Object.getPrototypeOf(this),$=this.ea;return g=g(w.call(m,C,{ea:{value:{count:$.count,pa:$.pa,ra:$.ra,ga:$.ga,ha:$.ha,ka:$.ka,ma:$.ma}}})),g.ea.count.value+=1,g.ea.pa=!1,g},ke.prototype.delete=function(){this.ea.ga||hn(this),this.ea.pa&&!this.ea.ra&&ot("Object already scheduled for deletion"),Cl(this),El(this.ea),this.ea.ra||(this.ea.ka=void 0,this.ea.ga=void 0)},ke.prototype.isDeleted=function(){return!this.ea.ga},ke.prototype.deleteLater=function(){return this.ea.ga||hn(this),this.ea.pa&&!this.ea.ra&&ot("Object already scheduled for deletion"),Pr.push(this),Pr.length===1&&$r&&$r(fn),this.ea.pa=!0,this},Ce.prototype.Pa=function(g){return this.Ia&&(g=this.Ia(g)),g},Ce.prototype.Ga=function(g){this.la&&this.la(g)},Ce.prototype.argPackAdvance=8,Ce.prototype.readValueFromPointer=lr,Ce.prototype.deleteObject=function(g){g!==null&&g.delete()},Ce.prototype.fromWireType=function(g){function m(){return this.wa?mi(this.fa.qa,{ha:this.Sa,ga:w,ma:this,ka:g}):mi(this.fa.qa,{ha:this,ga:g})}var w=this.Pa(g);if(!w)return this.Ga(g),null;var C=Rp(this.fa,w);if(C!==void 0)return C.ea.count.value===0?(C.ea.ga=w,C.ea.ka=g,C.clone()):(C=C.clone(),this.Ga(g),C);if(C=this.fa.Oa(w),C=Al[C],!C)return m.call(this);C=this.va?C.Ja:C.pointerType;var $=$l(w,this.fa,C.fa);return $===null?m.call(this):this.wa?mi(C.fa.qa,{ha:C,ga:$,ma:this,ka:g}):mi(C.fa.qa,{ha:C,ga:$})},o.getInheritedInstanceCount=function(){return Object.keys(Tr).length},o.getLiveInheritedInstances=function(){var g=[],m;for(m in Tr)Tr.hasOwnProperty(m)&&g.push(Tr[m]);return g},o.flushPendingDeletes=fn,o.setDelayFunction=function(g){$r=g,Pr.length&&$r&&$r(fn)},Tl=o.UnboundTypeError=un("UnboundTypeError"),o.count_emval_handles=function(){for(var g=0,m=5;m<ce.length;++m)ce[m]!==void 0&&++g;return g},o.get_first_emval=function(){for(var g=5;g<ce.length;++g)if(ce[g]!==void 0)return ce[g];return null};var Fp={r:function(g){var m=di[g];delete di[g];var w=m.elements,C=w.length,$=w.map(function(R){return R.Aa}).concat(w.map(function(R){return R.Ea})),T=m.sa,L=m.la;Se([g],$,function(R){return w.forEach(function(M,D){var q=R[D],B=M.ya,st=M.za,gt=R[D+C],at=M.Da,Bt=M.Fa;M.read=Ht=>q.fromWireType(B(st,Ht)),M.write=(Ht,je)=>{var ne=[];at(Bt,Ht,gt.toWireType(ne,je)),cn(ne)}}),[{name:m.name,fromWireType:function(M){for(var D=Array(C),q=0;q<C;++q)D[q]=w[q].read(M);return L(M),D},toWireType:function(M,D){if(C!==D.length)throw new TypeError("Incorrect number of tuple elements for "+m.name+": expected="+C+", actual="+D.length);for(var q=T(),B=0;B<C;++B)w[B].write(q,D[B]);return M!==null&&M.push(L,q),q},argPackAdvance:8,readValueFromPointer:lr,ja:L}]})},u:function(g){var m=pi[g];delete pi[g];var w=m.sa,C=m.la,$=m.Ha,T=$.map(function(L){return L.Aa}).concat($.map(function(L){return L.Ea}));Se([g],T,function(L){var R={};return $.forEach(function(M,D){var q=L[D],B=M.ya,st=M.za,gt=L[D+$.length],at=M.Da,Bt=M.Fa;R[M.Na]={read:function(Ht){return q.fromWireType(B(st,Ht))},write:function(Ht,je){var ne=[];at(Bt,Ht,gt.toWireType(ne,je)),cn(ne)}}}),[{name:m.name,fromWireType:function(M){var D={},q;for(q in R)D[q]=R[q].read(M);return C(M),D},toWireType:function(M,D){for(var q in R)if(!(q in D))throw new TypeError('Missing field:  "'+q+'"');var B=w();for(q in R)R[q].write(B,D[q]);return M!==null&&M.push(C,B),B},argPackAdvance:8,readValueFromPointer:lr,ja:C}]})},z:function(){},F:function(g,m,w,C,$){var T=fi(w);m=At(m),me(g,{name:m,fromWireType:function(L){return!!L},toWireType:function(L,R){return R?C:$},argPackAdvance:8,readValueFromPointer:function(L){if(w===1)var R=K;else if(w===2)R=yt;else if(w===4)R=_t;else throw new TypeError("Unknown boolean type size: "+m);return this.fromWireType(R[L>>T])},ja:null})},l:function(g,m,w,C,$,T,L,R,M,D,q,B,st){q=At(q),T=Vt($,T),R&&(R=Vt(L,R)),D&&(D=Vt(M,D)),st=Vt(B,st);var gt=wl(q);mn(gt,function(){gi("Cannot construct "+q+" due to unbound types",[C])}),Se([g,m,w],C?[C]:[],function(at){if(at=at[0],C)var Bt=at.fa,Ht=Bt.qa;else Ht=ke.prototype;at=dn(gt,function(){if(Object.getPrototypeOf(this)!==je)throw new dr("Use 'new' to construct "+q);if(ne.oa===void 0)throw new dr(q+" has no accessible constructor");var ql=ne.oa[arguments.length];if(ql===void 0)throw new dr("Tried to invoke ctor of "+q+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(ne.oa).toString()+") parameters instead!");return ql.apply(this,arguments)});var je=Object.create(Ht,{constructor:{value:at}});at.prototype=je;var ne=new $p(q,at,je,st,Bt,T,R,D);Bt=new Ce(q,ne,!0,!1),Ht=new Ce(q+"*",ne,!1,!1);var Dl=new Ce(q+" const*",ne,!1,!0);return Al[g]={pointerType:Ht,Ja:Dl},Pl(gt,at),[Bt,Ht,Dl]})},i:function(g,m,w,C,$,T){0<m||Ar(void 0);var L=vn(m,w);$=Vt(C,$),Se([],[g],function(R){R=R[0];var M="constructor "+R.name;if(R.fa.oa===void 0&&(R.fa.oa=[]),R.fa.oa[m-1]!==void 0)throw new dr("Cannot register multiple constructors with identical number of parameters ("+(m-1)+") for class '"+R.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return R.fa.oa[m-1]=()=>{gi("Cannot construct "+R.name+" due to unbound types",L)},Se([],L,function(D){return D.splice(1,0,null),R.fa.oa[m-1]=bn(M,D,null,$,T),[]}),[]})},a:function(g,m,w,C,$,T,L,R){var M=vn(w,C);m=At(m),T=Vt($,T),Se([],[g],function(D){function q(){gi("Cannot call "+B+" due to unbound types",M)}D=D[0];var B=D.name+"."+m;m.startsWith("@@")&&(m=Symbol[m.substring(2)]),R&&D.fa.Ta.push(m);var st=D.fa.qa,gt=st[m];return gt===void 0||gt.ia===void 0&&gt.className!==D.name&&gt.ua===w-2?(q.ua=w-2,q.className=D.name,st[m]=q):(kl(st,m,B),st[m].ia[w-2]=q),Se([],M,function(at){return at=bn(B,at,D,T,L),st[m].ia===void 0?(at.ua=w-2,st[m]=at):st[m].ia[w-2]=at,[]}),[]})},I:function(g,m,w){g=At(g),Se([],[m],function(C){return C=C[0],o[g]=C.fromWireType(w),[]})},E:function(g,m){m=At(m),me(g,{name:m,fromWireType:function(w){var C=_n(w);return Rl(w),C},toWireType:function(w,C){return $e(C)},argPackAdvance:8,readValueFromPointer:lr,ja:null})},h:function(g,m,w,C){function $(){}w=fi(w),m=At(m),$.values={},me(g,{name:m,constructor:$,fromWireType:function(T){return this.constructor.values[T]},toWireType:function(T,L){return L.value},argPackAdvance:8,readValueFromPointer:Lp(m,w,C),ja:null}),mn(m,$)},k:function(g,m,w){var C=vi(g,"enum");m=At(m),g=C.constructor,C=Object.create(C.constructor.prototype,{value:{value:w},constructor:{value:dn(C.name+"_"+m,function(){})}}),g.values[w]=C,g[m]=C},q:function(g,m,w){w=fi(w),m=At(m),me(g,{name:m,fromWireType:function(C){return C},toWireType:function(C,$){return $},argPackAdvance:8,readValueFromPointer:Mp(m,w),ja:null})},f:function(g,m,w,C,$,T){var L=vn(m,w);g=At(g),$=Vt(C,$),mn(g,function(){gi("Cannot call "+g+" due to unbound types",L)},m-1),Se([],L,function(R){return R=[R[0],null].concat(R.slice(1)),Pl(g,bn(g,R,null,$,T),m-1),[]})},e:function(g,m,w,C,$){m=At(m),$===-1&&($=4294967295),$=fi(w);var T=R=>R;if(C===0){var L=32-8*w;T=R=>R<<L>>>L}w=m.includes("unsigned")?function(R,M){return M>>>0}:function(R,M){return M},me(g,{name:m,fromWireType:T,toWireType:w,argPackAdvance:8,readValueFromPointer:Np(m,$,C!==0),ja:null})},b:function(g,m,w){function C(T){T>>=2;var L=Et;return new $(rt,L[T+1],L[T])}var $=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][m];w=At(w),me(g,{name:w,fromWireType:C,argPackAdvance:8,readValueFromPointer:C},{Qa:!0})},p:function(g,m){m=At(m);var w=m==="std::string";me(g,{name:m,fromWireType:function(C){var $=Et[C>>2];if(w)for(var T=C+4,L=0;L<=$;++L){var R=C+4+L;if(L==$||j[R]==0){if(T=T?U(j,T,R-T):"",M===void 0)var M=T;else M+="\0",M+=T;T=R+1}}else{for(M=Array($),L=0;L<$;++L)M[L]=String.fromCharCode(j[C+4+L]);M=M.join("")}return Ee(C),M},toWireType:function(C,$){$ instanceof ArrayBuffer&&($=new Uint8Array($));var T=typeof $=="string";T||$ instanceof Uint8Array||$ instanceof Uint8ClampedArray||$ instanceof Int8Array||ot("Cannot pass non-string to std::string");var L=(w&&T?()=>{for(var D=0,q=0;q<$.length;++q){var B=$.charCodeAt(q);55296<=B&&57343>=B&&(B=65536+((B&1023)<<10)|$.charCodeAt(++q)&1023),127>=B?++D:D=2047>=B?D+2:65535>=B?D+3:D+4}return D}:()=>$.length)(),R=Cn(4+L+1);if(Et[R>>2]=L,w&&T)z($,R+4,L+1);else if(T)for(T=0;T<L;++T){var M=$.charCodeAt(T);255<M&&(Ee(R),ot("String has UTF-16 code units that do not fit in 8 bits")),j[R+4+T]=M}else for(T=0;T<L;++T)j[R+4+T]=$[T];return C!==null&&C.push(Ee,R),R},argPackAdvance:8,readValueFromPointer:lr,ja:function(C){Ee(C)}})},m:function(g,m,w){if(w=At(w),m===2)var C=F,$=V,T=G,L=()=>zt,R=1;else m===4&&(C=Q,$=et,T=Z,L=()=>Et,R=2);me(g,{name:w,fromWireType:function(M){for(var D=Et[M>>2],q=L(),B,st=M+4,gt=0;gt<=D;++gt){var at=M+4+gt*m;(gt==D||q[at>>R]==0)&&(st=C(st,at-st),B===void 0?B=st:(B+="\0",B+=st),st=at+m)}return Ee(M),B},toWireType:function(M,D){typeof D!="string"&&ot("Cannot pass non-string to C++ string type "+w);var q=T(D),B=Cn(4+q+m);return Et[B>>2]=q>>R,$(D,B+4,q+m),M!==null&&M.push(Ee,B),B},argPackAdvance:8,readValueFromPointer:lr,ja:function(M){Ee(M)}})},t:function(g,m,w,C,$,T){di[g]={name:At(m),sa:Vt(w,C),la:Vt($,T),elements:[]}},s:function(g,m,w,C,$,T,L,R,M){di[g].elements.push({Aa:m,ya:Vt(w,C),za:$,Ea:T,Da:Vt(L,R),Fa:M})},v:function(g,m,w,C,$,T){pi[g]={name:At(m),sa:Vt(w,C),la:Vt($,T),Ha:[]}},j:function(g,m,w,C,$,T,L,R,M,D){pi[g].Ha.push({Na:At(m),Aa:w,ya:Vt(C,$),za:T,Ea:L,Da:Vt(R,M),Fa:D})},G:function(g,m){m=At(m),me(g,{Ra:!0,name:m,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},d:function(g,m,w,C){g=Sn[g],m=_n(m),w=xn(w),g(m,w,null,C)},J:Rl,x:function(g){return g===0?$e(Ol()):(g=xn(g),$e(Ol()[g]))},c:function(g,m){var w=qp(g,m),C=w[0];m=C.name+"_$"+w.slice(1).map(function(L){return L.name}).join("_")+"$";var $=Ll[m];if($!==void 0)return $;var T=Array(g-1);return $=Dp((L,R,M,D)=>{for(var q=0,B=0;B<g-1;++B)T[B]=w[B+1].readValueFromPointer(D+q),q+=w[B+1].argPackAdvance;for(L=L[R].apply(L,T),B=0;B<g-1;++B)w[B+1].Ka&&w[B+1].Ka(T[B]);if(!C.Ra)return C.toWireType(M,L)}),Ll[m]=$},n:function(g){4<g&&(ce[g].Ca+=1)},w:function(g,m,w,C){g=_n(g);var $=Ml[m];return $||($=Up(m),Ml[m]=$),$(g,w,C)},K:function(){return $e([])},D:function(g){return $e(xn(g))},H:function(g,m){return g=vi(g,"_emval_take_value"),g=g.readValueFromPointer(m),$e(g)},g:function(){Ar("")},B:function(g){var m=j.length;if(g>>>=0,2147483648<g)return!1;for(var w=1;4>=w;w*=2){var C=m*(1+.2/w);C=Math.min(C,g+100663296),C=Math.max(g,C),0<C%65536&&(C+=65536-C%65536);t:{try{I.grow(Math.min(2147483648,C)-rt.byteLength+65535>>>16),xe();var $=1;break t}catch{}$=void 0}if($)return!0}return!1},C:function(){return 0},y:function(){},o:function(g,m,w,C){for(var $=0,T=0;T<w;T++){var L=_t[m>>2],R=_t[m+4>>2];m+=8;for(var M=0;M<R;M++){var D=j[L+M],q=Wp[g];D===0||D===10?((g===1?E:k)(U(q,0)),q.length=0):q.push(D)}$+=R}return _t[C>>2]=$,0},A:function(){}};(function(){function g($){o.asm=$.exports,I=o.asm.L,xe(),re=o.asm._,Ve.unshift(o.asm.M),Be--,o.monitorRunDependencies&&o.monitorRunDependencies(Be),Be==0&&Er&&($=Er,Er=null,$())}function m($){g($.instance)}function w($){return kp().then(function(T){return WebAssembly.instantiate(T,C)}).then(function(T){return T}).then($,function(T){k("failed to asynchronously prepare wasm: "+T),Ar(T)})}var C={a:Fp};if(Be++,o.monitorRunDependencies&&o.monitorRunDependencies(Be),o.instantiateWasm)try{return o.instantiateWasm(C,g)}catch($){return k("Module.instantiateWasm callback failed with error: "+$),!1}return function(){return P||typeof WebAssembly.instantiateStreaming!="function"||bl()||ie.startsWith("file://")||typeof fetch!="function"?w(m):fetch(ie,{credentials:"same-origin"}).then(function($){return WebAssembly.instantiateStreaming($,C).then(m,function(T){return k("wasm streaming compile failed: "+T),k("falling back to ArrayBuffer instantiation"),w(m)})})}().catch(h),{}})(),o.___wasm_call_ctors=function(){return(o.___wasm_call_ctors=o.asm.M).apply(null,arguments)},o.__Z6ToCmdsRK6SkPath=function(){return(o.__Z6ToCmdsRK6SkPath=o.asm.N).apply(null,arguments)},o.__Z8FromCmdsmi=function(){return(o.__Z8FromCmdsmi=o.asm.O).apply(null,arguments)},o.__Z7NewPathv=function(){return(o.__Z7NewPathv=o.asm.P).apply(null,arguments)},o.__Z8CopyPathRK6SkPath=function(){return(o.__Z8CopyPathRK6SkPath=o.asm.Q).apply(null,arguments)},o.__Z6EqualsRK6SkPathS1_=function(){return(o.__Z6EqualsRK6SkPathS1_=o.asm.R).apply(null,arguments)},o.__Z11ToSVGStringRK6SkPath=function(){return(o.__Z11ToSVGStringRK6SkPath=o.asm.S).apply(null,arguments)},o.__Z13FromSVGStringNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE=function(){return(o.__Z13FromSVGStringNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE=o.asm.T).apply(null,arguments)},o.__Z13ApplySimplifyR6SkPath=function(){return(o.__Z13ApplySimplifyR6SkPath=o.asm.U).apply(null,arguments)},o.__Z11ApplyPathOpR6SkPathRKS_8SkPathOp=function(){return(o.__Z11ApplyPathOpR6SkPathRKS_8SkPathOp=o.asm.V).apply(null,arguments)},o.__Z10MakeFromOpRK6SkPathS1_8SkPathOp=function(){return(o.__Z10MakeFromOpRK6SkPathS1_8SkPathOp=o.asm.W).apply(null,arguments)},o.__Z14ResolveBuilderR11SkOpBuilder=function(){return(o.__Z14ResolveBuilderR11SkOpBuilder=o.asm.X).apply(null,arguments)},o.__Z8ToCanvasRK6SkPathN10emscripten3valE=function(){return(o.__Z8ToCanvasRK6SkPathN10emscripten3valE=o.asm.Y).apply(null,arguments)},o.__Z8ToPath2DRK6SkPath=function(){return(o.__Z8ToPath2DRK6SkPath=o.asm.Z).apply(null,arguments)};var Ee=o._free=function(){return(Ee=o._free=o.asm.$).apply(null,arguments)},Cn=o._malloc=function(){return(Cn=o._malloc=o.asm.aa).apply(null,arguments)},zl=o.___getTypeName=function(){return(zl=o.___getTypeName=o.asm.ba).apply(null,arguments)};o.___embind_register_native_and_builtin_types=function(){return(o.___embind_register_native_and_builtin_types=o.asm.ca).apply(null,arguments)},o.dynCall_jiji=function(){return(o.dynCall_jiji=o.asm.da).apply(null,arguments)};var yi;Er=function g(){yi||En(),yi||(Er=g)};function En(){function g(){if(!yi&&(yi=!0,o.calledRun=!0,!O)){if(ln(Ve),c(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),o.postRun)for(typeof o.postRun=="function"&&(o.postRun=[o.postRun]);o.postRun.length;){var m=o.postRun.shift();Cr.unshift(m)}ln(Cr)}}if(!(0<Be)){if(o.preRun)for(typeof o.preRun=="function"&&(o.preRun=[o.preRun]);o.preRun.length;)ar();ln(fe),0<Be||(o.setStatus?(o.setStatus("Running..."),setTimeout(function(){setTimeout(function(){o.setStatus("")},1),g()},1)):g())}}if(o.run=En,o.preInit)for(typeof o.preInit=="function"&&(o.preInit=[o.preInit]);0<o.preInit.length;)o.preInit.pop()();return En(),n.ready}})();r.exports=e}(_a)),_a.exports}var Nb=Mb();const zb=Ag(Nb);let ih=null;class Db extends mp{constructor(t,e,i){if(super(t,e),this._context=this._canvas.getContext("2d",{desynchronized:i}),this._predictionContext=this._predictionCanvas.getContext("2d",{desynchronized:i}),!this._context||!this._predictionContext){console.error("Your browser doesn't support canvas, this demo won't work");return}this._context.lineCap=this._predictionContext.lineCap="round",this._context.lineJoin=this._predictionContext.lineJoin="round",this._context.shadowBlur=this._predictionContext.shadowBlur=2,zb({locateFile:n=>"./wasm/"+n}).then(n=>{ih=n,console.log("Canvas2D with PathKit loaded, desynchronized:",i)})}clearCanvas(){this._context.clearRect(0,0,this._canvas.width,this._canvas.height)}clearPredictionCanvas(){this._predictionContext.clearRect(0,0,this._predictionContext.canvas.width,this._predictionContext.canvas.height)}render(){if(this._paths.forEach(t=>{t.display&&!t.rendered&&(this._drawPointsOnly?this._drawPoints(this._context,t.points):this._drawStroke(this._context,t.points),t.rendered=!0)}),this._currentPath&&this._currentPath.points.length>0&&!this._currentPath.points[this._currentPath.points.length-1].rendered){let t=[...this._currentPath.points];for(let e=t.length-1;e>=0;e--)if(t[e].rendered){t.splice(0,e);break}this._drawPointsOnly?this._drawPoints(this._context,t):this._drawStroke(this._context,t),this._drawPredictedEvents&&(this._predictionContext.clearRect(0,0,this._predictionContext.canvas.width,this._predictionContext.canvas.height),this._currentPath.predictedPoints.length>0&&(this._drawPointsOnly?this._strokePredictedPoints(this._predictionContext,this._currentPath.predictedPoints):this.getCurrentLineStyle(this._currentPath.points[0])!=="brush"&&this.getCurrentLineStyle(this._currentPath.points[0])!=="highlighter"&&this._strokePredictedEvents(this._predictionContext,this._currentPath.predictedPoints))),this._currentPath.points.forEach(e=>{e.rendered=!0}),this._currentPath.predictedPoints=[]}}_hexToRgbColor(t){return{r:"0x"+t[1]+t[2]|0,g:"0x"+t[3]+t[4]|0,b:"0x"+t[5]+t[6]|0}}_drawStroke(t,e){let i=this.getCurrentLineColor(e[0]),n=this._hexToRgbColor(i),o=this.getCurrentLineStyle(e[0]),s=this.getCurrentLineWidth(e[0]),c;switch(e[0].type==="pointerdown"&&(t.lineCap=this._predictionContext.lineCap="round",t.lineJoin=this._predictionContext.lineJoin="round"),o){case"brush":t.filter="blur("+s+"px)",t.strokeStyle=i;break;case"highlighter":t.filter="none",t.strokeStyle="rgba("+n.r+","+n.g+","+n.b+",0.01)";break;default:t.filter="none",t.strokeStyle=i;break}for(c=0;c<e.length-1;c++){let h=this._createPath(e[c].x,e[c].y,e[c+1].x,e[c+1].y);this._drawWithPressure?t.lineWidth=this.getCurrentLineWidth(e[c])*e[c].pressure*2:t.lineWidth=this.getCurrentLineWidth(e[c]),t.stroke(h.toPath2D()),h.delete()}}_drawPoints(t,e){for(let i=0;i<e.length;i++)t.beginPath(),t.fillStyle=this.getCurrentLineColor(e[i]),e[i].coalesced?(t.arc(e[i].x,e[i].y,this.getCurrentLineWidth(e[i])/2,0,Math.PI*2,!0),t.stroke()):(t.arc(e[i].x,e[i].y,this.getCurrentLineWidth(e[i]),0,Math.PI*2,!0),t.fill())}_createPath(t,e,i,n){const o=ih.NewPath();return o.moveTo(t,e),o.lineTo(i,n),o}_strokePredictedEvents(t,e){if(e.length>0&&this._currentPath.points.length>0){let i=this._currentPath.points[this._currentPath.points.length-1];this._drawWithPressure?t.lineWidth=this.getCurrentLineWidth(i)*i.pressure*2:t.lineWidth=this.getCurrentLineWidth(i),t.lineCap="round",this._highlightPredictedEvents?t.strokeStyle="red":t.strokeStyle=this.getCurrentLineColor(i);let n=this._createPath(i.x,i.y,this._currentPath.predictedPoints[0].x,this._currentPath.predictedPoints[0].y);t.stroke(n.toPath2D()),n.delete();let o;for(o=0;o<this._currentPath.predictedPoints.length-1;o++)n=this._createPath(this._currentPath.predictedPoints[o].x,this._currentPath.predictedPoints[o].y,this._currentPath.predictedPoints[o+1].x,this._currentPath.predictedPoints[o+1].y),t.stroke(n.toPath2D()),n.delete()}}_strokePredictedPoints(t,e){let i,n=this._currentPath.points[this._currentPath.points.length-1];for(i=0;i<e.length;i++)t.beginPath(),this._highlightPredictedEvents?t.fillStyle="red":t.fillStyle=this.getCurrentLineColor(n),t.arc(e[i].x,e[i].y,3,0,Math.PI*2,!0),t.fill()}}class qb extends gl{firstUpdated(){super.firstUpdated(),this.renderer=new Db(this.canvas,this.predictionCanvas,this.desynchronized)}constructor(){super()}}customElements.define("pathkit-canvas",qb);var Ub=pt`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,we=class extends ct{constructor(){super(...arguments),this.hasSlotController=new he(this,"footer"),this.localize=new qt(this),this.modal=new Oh(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=r=>{r.key==="Escape"&&this.modal.isActive()&&this.open&&(r.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),jr(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Kr(this),this.removeOpenListeners()}requestClose(r){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:r}}).defaultPrevented){const e=Pt(this,"dialog.denyClose",{dir:this.localize.dir()});Tt(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){var r;"CloseWatcher"in window?((r=this.closeWatcher)==null||r.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var r;(r=this.closeWatcher)==null||r.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),jr(this);const r=this.querySelector("[autofocus]");r&&r.removeAttribute("autofocus"),await Promise.all([Dt(this.dialog),Dt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(r?r.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),r&&r.setAttribute("autofocus","")});const t=Pt(this,"dialog.show",{dir:this.localize.dir()}),e=Pt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Tt(this.panel,t.keyframes,t.options),Tt(this.overlay,e.keyframes,e.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Dt(this.dialog),Dt(this.overlay)]);const r=Pt(this,"dialog.hide",{dir:this.localize.dir()}),t=Pt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Tt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Tt(this.panel,r.keyframes,r.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Kr(this);const e=this.originalTrigger;typeof(e==null?void 0:e.focus)=="function"&&setTimeout(()=>e.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,le(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,le(this,"sl-after-hide")}render(){return H`
      <div
        part="base"
        class=${lt({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${X(this.noHeader?this.label:void 0)}
          aria-labelledby=${X(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":H`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};we.styles=[bt,Ub];we.dependencies={"sl-icon-button":kt};x([Y(".dialog")],we.prototype,"dialog",2);x([Y(".dialog__panel")],we.prototype,"panel",2);x([Y(".dialog__overlay")],we.prototype,"overlay",2);x([A({type:Boolean,reflect:!0})],we.prototype,"open",2);x([A({reflect:!0})],we.prototype,"label",2);x([A({attribute:"no-header",type:Boolean,reflect:!0})],we.prototype,"noHeader",2);x([tt("open",{waitUntilFirstUpdate:!0})],we.prototype,"handleOpenChange",1);xt("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});xt("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});xt("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});xt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});xt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});we.define("sl-dialog");var Wb=pt`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,nn=class extends ct{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};nn.styles=[bt,Wb];x([A({type:Boolean,reflect:!0})],nn.prototype,"vertical",2);x([tt("vertical")],nn.prototype,"handleVerticalChange",1);nn.define("sl-divider");var Fb=pt`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xr=(r,t)=>{var i;const e=r._$AN;if(e===void 0)return!1;for(const n of e)(i=n._$AO)==null||i.call(n,t,!1),Xr(n,t);return!0},Vi=r=>{let t,e;do{if((t=r._$AM)===void 0)break;e=t._$AN,e.delete(r),r=t}while((e==null?void 0:e.size)===0)},gp=r=>{for(let t;t=r._$AM;r=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(r))break;e.add(r),Hb(t)}};function Vb(r){this._$AN!==void 0?(Vi(this),this._$AM=r,gp(this)):this._$AM=r}function Bb(r,t=!1,e=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(i))for(let o=e;o<i.length;o++)Xr(i[o],!1),Vi(i[o]);else i!=null&&(Xr(i,!1),Vi(i));else Xr(this,r)}const Hb=r=>{r.type==ge.CHILD&&(r._$AP??(r._$AP=Bb),r._$AQ??(r._$AQ=Vb))};class jb extends ni{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),gp(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,n;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),e&&(Xr(this,t),Vi(this))}setValue(t){if(Lh(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kb=()=>new Xb;class Xb{}const xa=new WeakMap,Gb=ii(class extends jb{render(r){return wt}update(r,[t]){var i;const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),wt}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=xa.get(t);e===void 0&&(e=new WeakMap,xa.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,t;return typeof this.Y=="function"?(r=xa.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Yb=class{constructor(r,t){this.popupRef=Kb(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=e=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${e.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${e.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=e=>{switch(e.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(e);break}},this.handleClick=e=>{var i;e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&(e.target.tagName==="sl-menu-item"||(i=e.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=e=>{e.stopPropagation()},this.handlePopupReposition=()=>{const e=this.host.renderRoot.querySelector("slot[name='submenu']"),i=e==null?void 0:e.assignedElements({flatten:!0}).filter(l=>l.localName==="sl-menu")[0],n=getComputedStyle(this.host).direction==="rtl";if(!i)return;const{left:o,top:s,width:c,height:h}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${n?o+c:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${n?o+c:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${s+h}px`)},(this.host=r).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(r){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let e=null;for(const i of t.assignedElements())if(e=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),e.length!==0)break;if(!(!e||e.length===0)){e[0].setAttribute("tabindex","0");for(let i=1;i!==e.length;++i)e[i].setAttribute("tabindex","-1");this.popupRef.value&&(r.preventDefault(),r.stopPropagation(),this.popupRef.value.active?e[0]instanceof HTMLElement&&e[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{e[0]instanceof HTMLElement&&e[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(r){this.popupRef.value&&this.popupRef.value.active!==r&&(this.popupRef.value.active=r,this.host.requestUpdate())}enableSubmenu(r=!0){r?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var r;if(!((r=this.host.parentElement)!=null&&r.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((n,o)=>{var s;const c=(s=t.get(o))!=null?s:new CSSUnitValue(0,"px"),l=(c instanceof CSSUnitValue?c:new CSSUnitValue(0,"px")).to("px");return n-l.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const r=getComputedStyle(this.host).direction==="rtl";return this.isConnected?H`
      <sl-popup
        ${Gb(this.popupRef)}
        placement=${r?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:H` <slot name="submenu" hidden></slot> `}},ee=class extends ct{constructor(){super(...arguments),this.localize=new qt(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new he(this,"submenu"),this.submenuController=new Yb(this,this.hasSlotController),this.handleHostClick=r=>{this.disabled&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleMouseOver=r=>{this.focus(),r.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const r=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=r;return}r!==this.cachedTextLabel&&(this.cachedTextLabel=r,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Pm(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const r=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return H`
      <div
        id="anchor"
        part="base"
        class=${lt({"menu-item":!0,"menu-item--rtl":r,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${r?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?H` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};ee.styles=[bt,Fb];ee.dependencies={"sl-icon":jt,"sl-popup":ft,"sl-spinner":hl};x([Y("slot:not([name])")],ee.prototype,"defaultSlot",2);x([Y(".menu-item")],ee.prototype,"menuItem",2);x([A()],ee.prototype,"type",2);x([A({type:Boolean,reflect:!0})],ee.prototype,"checked",2);x([A()],ee.prototype,"value",2);x([A({type:Boolean,reflect:!0})],ee.prototype,"loading",2);x([A({type:Boolean,reflect:!0})],ee.prototype,"disabled",2);x([tt("checked")],ee.prototype,"handleCheckedChange",1);x([tt("disabled")],ee.prototype,"handleDisabledChange",1);x([tt("type")],ee.prototype,"handleTypeChange",1);ee.define("sl-menu-item");var Zb=pt`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,ai=pt`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Lt=class extends ct{constructor(){super(...arguments),this.formControlController=new nr(this),this.hasSlotController=new he(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const r=this.required&&!this.value;return this.customValidityMessage!==""?wg:r?_g:Ji}get validationMessage(){const r=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:r?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(r){const t=r.target.closest("sl-radio, sl-radio-button"),e=this.getAllRadios(),i=this.value;!t||t.disabled||(this.value=t.value,e.forEach(n=>n.checked=n===t),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(r){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(r.key))return;const e=this.getAllRadios().filter(c=>!c.disabled),i=(t=e.find(c=>c.checked))!=null?t:e[0],n=r.key===" "?0:["ArrowUp","ArrowLeft"].includes(r.key)?-1:1,o=this.value;let s=e.indexOf(i)+n;s<0&&(s=e.length-1),s>e.length-1&&(s=0),this.getAllRadios().forEach(c=>{c.checked=!1,this.hasButtonGroup||c.setAttribute("tabindex","-1")}),this.value=e[s].value,e[s].checked=!0,this.hasButtonGroup?e[s].shadowRoot.querySelector("button").focus():(e[s].setAttribute("tabindex","0"),e[s].focus()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")),r.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}async syncRadioElements(){var r,t;const e=this.getAllRadios();if(await Promise.all(e.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=e.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),e.length>0&&!e.some(i=>i.checked))if(this.hasButtonGroup){const i=(r=e[0].shadowRoot)==null?void 0:r.querySelector("button");i&&i.setAttribute("tabindex","0")}else e[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const i=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const r=this.required&&!this.value,t=this.customValidityMessage!=="";return r||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const r=this.validity.valid;return this.errorMessage=this.customValidityMessage||r?"":this.validationInput.validationMessage,this.formControlController.setValidity(r),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),r||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),r}setCustomValidity(r=""){this.customValidityMessage=r,this.errorMessage=r,this.validationInput.setCustomValidity(r),this.formControlController.updateValidity()}focus(r){const t=this.getAllRadios(),e=t.find(o=>o.checked),i=t.find(o=>!o.disabled),n=e||i;n&&n.focus(r)}render(){const r=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),e=this.label?!0:!!r,i=this.helpText?!0:!!t,n=H`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return H`
      <fieldset
        part="form-control"
        class=${lt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":e,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${e?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?H`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${n}
                </sl-button-group>
              `:n}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Lt.styles=[bt,ai,Zb];Lt.dependencies={"sl-button-group":or};x([Y("slot:not([name])")],Lt.prototype,"defaultSlot",2);x([Y(".radio-group__validation-input")],Lt.prototype,"validationInput",2);x([dt()],Lt.prototype,"hasButtonGroup",2);x([dt()],Lt.prototype,"errorMessage",2);x([dt()],Lt.prototype,"defaultValue",2);x([A()],Lt.prototype,"label",2);x([A({attribute:"help-text"})],Lt.prototype,"helpText",2);x([A()],Lt.prototype,"name",2);x([A({reflect:!0})],Lt.prototype,"value",2);x([A({reflect:!0})],Lt.prototype,"size",2);x([A({reflect:!0})],Lt.prototype,"form",2);x([A({type:Boolean,reflect:!0})],Lt.prototype,"required",2);x([tt("size",{waitUntilFirstUpdate:!0})],Lt.prototype,"handleSizeChange",1);x([tt("value")],Lt.prototype,"handleValueChange",1);Lt.define("sl-radio-group");var Qb=pt`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,sr=class extends ct{constructor(){super(...arguments),this.localize=new qt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return H`
      <span
        part="base"
        class=${lt({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?H`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};sr.styles=[bt,Qb];sr.dependencies={"sl-icon-button":kt};x([A({reflect:!0})],sr.prototype,"variant",2);x([A({reflect:!0})],sr.prototype,"size",2);x([A({type:Boolean,reflect:!0})],sr.prototype,"pill",2);x([A({type:Boolean})],sr.prototype,"removable",2);var Jb=pt`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Va=class extends ni{constructor(t){if(super(t),this.it=wt,t.type!==ge.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===wt||t==null)return this._t=void 0,this.it=t;if(t===Zt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Va.directiveName="unsafeHTML",Va.resultType=1;const ty=ii(Va);var it=class extends ct{constructor(){super(...arguments),this.formControlController=new nr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new he(this,"help-text","label"),this.localize=new qt(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=r=>H`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,r)}
      >
        ${r.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=r=>{const t=r.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=r=>{const t=r.target,e=t.closest(".select__clear")!==null,i=t.closest("sl-icon-button")!==null;if(!(e||i)){if(r.key==="Escape"&&this.open&&!this.closeWatcher&&(r.preventDefault(),r.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),r.key==="Enter"||r.key===" "&&this.typeToSelectString===""){if(r.preventDefault(),r.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(r.key)){const n=this.getAllOptions(),o=n.indexOf(this.currentOption);let s=Math.max(0,o);if(r.preventDefault(),!this.open&&(this.show(),this.currentOption))return;r.key==="ArrowDown"?(s=o+1,s>n.length-1&&(s=0)):r.key==="ArrowUp"?(s=o-1,s<0&&(s=n.length-1)):r.key==="Home"?s=0:r.key==="End"&&(s=n.length-1),this.setCurrentOption(n[s])}if(r.key&&r.key.length===1||r.key==="Backspace"){const n=this.getAllOptions();if(r.metaKey||r.ctrlKey||r.altKey)return;if(!this.open){if(r.key==="Backspace")return;this.show()}r.stopPropagation(),r.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),r.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=r.key.toLowerCase();for(const o of n)if(o.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(o);break}}}},this.handleDocumentMouseDown=r=>{const t=r.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(r){this.multiple?r=Array.isArray(r)?r:r.split(" "):r=Array.isArray(r)?r.join(" "):r,this._value!==r&&(this.valueHasChanged=!0,this._value=r)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var r;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((r=this.closeWatcher)==null||r.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var r;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(r=this.closeWatcher)==null||r.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(r){const e=r.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||e||(r.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(r){r.key!=="Tab"&&(r.stopPropagation(),this.handleDocumentKeyDown(r))}handleClearClick(r){r.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(r){r.stopPropagation(),r.preventDefault()}handleOptionClick(r){const e=r.target.closest("sl-option"),i=this.value;e&&!e.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const r=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,e=Array.isArray(t)?t:[t],i=[];r.forEach(n=>i.push(n.value)),this.setSelectedOptions(r.filter(n=>e.includes(n.value)))}handleTagRemove(r,t){r.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(r){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),r&&(this.currentOption=r,r.current=!0,r.tabIndex=0,r.focus())}setSelectedOptions(r){const t=this.getAllOptions(),e=Array.isArray(r)?r:[r];t.forEach(i=>i.selected=!1),e.length&&e.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(r,t){t===!0||t===!1?r.selected=t:r.selected=!r.selected,this.selectionChanged()}selectionChanged(){var r,t,e;const i=this.getAllOptions();this.selectedOptions=i.filter(o=>o.selected);const n=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const o=this.selectedOptions[0];this.value=(r=o==null?void 0:o.value)!=null?r:"",this.displayLabel=(e=(t=o==null?void 0:o.getTextLabel)==null?void 0:t.call(o))!=null?e:""}this.valueHasChanged=n,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((r,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const e=this.getTag(r,t);return H`<div @sl-remove=${i=>this.handleTagRemove(i,r)}>
          ${typeof e=="string"?ty(e):e}
        </div>`}else if(t===this.maxOptionsVisible)return H`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return H``})}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(r,t,e){if(super.attributeChangedCallback(r,t,e),r==="value"){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}}handleValueChange(){if(!this.valueHasChanged){const e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}const r=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(r.filter(e=>t.includes(e.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Dt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:r,options:t}=Pt(this,"select.show",{dir:this.localize.dir()});await Tt(this.popup.popup,r,t),this.currentOption&&Na(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Dt(this);const{keyframes:r,options:t}=Pt(this,"select.hide",{dir:this.localize.dir()});await Tt(this.popup.popup,r,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,le(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,le(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(r){this.valueInput.setCustomValidity(r),this.formControlController.updateValidity()}focus(r){this.displayInput.focus(r)}blur(){this.displayInput.blur()}render(){const r=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),e=this.label?!0:!!r,i=this.helpText?!0:!!t,n=this.clearable&&!this.disabled&&this.value.length>0,o=this.placeholder&&this.value&&this.value.length<=0;return H`
      <div
        part="form-control"
        class=${lt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":e,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${e?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${lt({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":o,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?H`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${n?H`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};it.styles=[bt,ai,Jb];it.dependencies={"sl-icon":jt,"sl-popup":ft,"sl-tag":sr};x([Y(".select")],it.prototype,"popup",2);x([Y(".select__combobox")],it.prototype,"combobox",2);x([Y(".select__display-input")],it.prototype,"displayInput",2);x([Y(".select__value-input")],it.prototype,"valueInput",2);x([Y(".select__listbox")],it.prototype,"listbox",2);x([dt()],it.prototype,"hasFocus",2);x([dt()],it.prototype,"displayLabel",2);x([dt()],it.prototype,"currentOption",2);x([dt()],it.prototype,"selectedOptions",2);x([dt()],it.prototype,"valueHasChanged",2);x([A()],it.prototype,"name",2);x([dt()],it.prototype,"value",1);x([A({attribute:"value"})],it.prototype,"defaultValue",2);x([A({reflect:!0})],it.prototype,"size",2);x([A()],it.prototype,"placeholder",2);x([A({type:Boolean,reflect:!0})],it.prototype,"multiple",2);x([A({attribute:"max-options-visible",type:Number})],it.prototype,"maxOptionsVisible",2);x([A({type:Boolean,reflect:!0})],it.prototype,"disabled",2);x([A({type:Boolean})],it.prototype,"clearable",2);x([A({type:Boolean,reflect:!0})],it.prototype,"open",2);x([A({type:Boolean})],it.prototype,"hoist",2);x([A({type:Boolean,reflect:!0})],it.prototype,"filled",2);x([A({type:Boolean,reflect:!0})],it.prototype,"pill",2);x([A()],it.prototype,"label",2);x([A({reflect:!0})],it.prototype,"placement",2);x([A({attribute:"help-text"})],it.prototype,"helpText",2);x([A({reflect:!0})],it.prototype,"form",2);x([A({type:Boolean,reflect:!0})],it.prototype,"required",2);x([A()],it.prototype,"getTag",2);x([tt("disabled",{waitUntilFirstUpdate:!0})],it.prototype,"handleDisabledChange",1);x([tt(["defaultValue","value"],{waitUntilFirstUpdate:!0})],it.prototype,"handleValueChange",1);x([tt("open",{waitUntilFirstUpdate:!0})],it.prototype,"handleOpenChange",1);xt("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});xt("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});it.define("sl-select");var ey=pt`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,on=(r="value")=>(t,e)=>{const i=t.constructor,n=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(o,s,c){var h;const l=i.getPropertyOptions(r),u=typeof l.attribute=="string"?l.attribute:r;if(o===u){const a=l.converter||ti,p=(typeof a=="function"?a:(h=a==null?void 0:a.fromAttribute)!=null?h:ti.fromAttribute)(c,l.type);this[r]!==p&&(this[e]=p)}n.call(this,o,s,c)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vl=ii(class extends ni{constructor(r){if(super(r),r.type!==ge.PROPERTY&&r.type!==ge.ATTRIBUTE&&r.type!==ge.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Lh(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[t]){if(t===Zt||t===wt)return t;const e=r.element,i=r.name;if(r.type===ge.PROPERTY){if(t===e[i])return Zt}else if(r.type===ge.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(i))return Zt}else if(r.type===ge.ATTRIBUTE&&e.getAttribute(i)===t+"")return Zt;return Sm(r),t}});var St=class extends ct{constructor(){super(...arguments),this.formControlController=new nr(this),this.hasSlotController=new he(this,"help-text","label"),this.localize=new qt(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=r=>r.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.resizeObserver)==null||r.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(r){this.input.style.setProperty("--percent",`${r*100}%`)}syncTooltip(r){if(this.output!==null){const t=this.input.offsetWidth,e=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),n=this.localize.dir()==="rtl",o=t*r;if(n){const s=`${t-o}px + ${r} * ${i}`;this.output.style.translate=`calc((${s} - ${e/2}px - ${i} / 2))`}else{const s=`${o}px - ${r} * ${i}`;this.output.style.translate=`calc(${s} - ${e/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const r=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(r),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(r))}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}focus(r){this.input.focus(r)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.formControlController.updateValidity()}render(){const r=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),e=this.label?!0:!!r,i=this.helpText?!0:!!t;return H`
      <div
        part="form-control"
        class=${lt({"form-control":!0,"form-control--medium":!0,"form-control--has-label":e,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${e?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${lt({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${X(this.name)}
              ?disabled=${this.disabled}
              min=${X(this.min)}
              max=${X(this.max)}
              step=${X(this.step)}
              .value=${vl(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?H`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};St.styles=[bt,ai,ey];x([Y(".range__control")],St.prototype,"input",2);x([Y(".range__tooltip")],St.prototype,"output",2);x([dt()],St.prototype,"hasFocus",2);x([dt()],St.prototype,"hasTooltip",2);x([A()],St.prototype,"title",2);x([A()],St.prototype,"name",2);x([A({type:Number})],St.prototype,"value",2);x([A()],St.prototype,"label",2);x([A({attribute:"help-text"})],St.prototype,"helpText",2);x([A({type:Boolean,reflect:!0})],St.prototype,"disabled",2);x([A({type:Number})],St.prototype,"min",2);x([A({type:Number})],St.prototype,"max",2);x([A({type:Number})],St.prototype,"step",2);x([A()],St.prototype,"tooltip",2);x([A({attribute:!1})],St.prototype,"tooltipFormatter",2);x([A({reflect:!0})],St.prototype,"form",2);x([on()],St.prototype,"defaultValue",2);x([il({passive:!0})],St.prototype,"handleThumbDragStart",1);x([tt("value",{waitUntilFirstUpdate:!0})],St.prototype,"handleValueChange",1);x([tt("disabled",{waitUntilFirstUpdate:!0})],St.prototype,"handleDisabledChange",1);x([tt("hasTooltip",{waitUntilFirstUpdate:!0})],St.prototype,"syncRange",1);St.define("sl-range");var ry=pt`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,Ut=class extends ct{constructor(){super(...arguments),this.formControlController=new nr(this,{value:r=>r.checked?r.value||"on":void 0,defaultValue:r=>r.defaultChecked,setValue:(r,t)=>r.checked=t}),this.hasSlotController=new he(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(r){r.key==="ArrowLeft"&&(r.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),r.key==="ArrowRight"&&(r.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(r){this.input.focus(r)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.formControlController.updateValidity()}render(){const r=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!r;return H`
      <div
        class=${lt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${lt({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${X(this.value)}
            .checked=${vl(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Ut.styles=[bt,ai,ry];x([Y('input[type="checkbox"]')],Ut.prototype,"input",2);x([dt()],Ut.prototype,"hasFocus",2);x([A()],Ut.prototype,"title",2);x([A()],Ut.prototype,"name",2);x([A()],Ut.prototype,"value",2);x([A({reflect:!0})],Ut.prototype,"size",2);x([A({type:Boolean,reflect:!0})],Ut.prototype,"disabled",2);x([A({type:Boolean,reflect:!0})],Ut.prototype,"checked",2);x([on("checked")],Ut.prototype,"defaultChecked",2);x([A({reflect:!0})],Ut.prototype,"form",2);x([A({type:Boolean,reflect:!0})],Ut.prototype,"required",2);x([A({attribute:"help-text"})],Ut.prototype,"helpText",2);x([tt("checked",{waitUntilFirstUpdate:!0})],Ut.prototype,"handleCheckedChange",1);x([tt("disabled",{waitUntilFirstUpdate:!0})],Ut.prototype,"handleDisabledChange",1);Ut.define("sl-switch");var iy=pt`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,ny=0,pe=class extends ct{constructor(){super(...arguments),this.localize=new qt(this),this.attrId=++ny,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(r){r.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,H`
      <div
        part="base"
        class=${lt({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?H`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};pe.styles=[bt,iy];pe.dependencies={"sl-icon-button":kt};x([Y(".tab")],pe.prototype,"tab",2);x([A({reflect:!0})],pe.prototype,"panel",2);x([A({type:Boolean,reflect:!0})],pe.prototype,"active",2);x([A({type:Boolean,reflect:!0})],pe.prototype,"closable",2);x([A({type:Boolean,reflect:!0})],pe.prototype,"disabled",2);x([A({type:Number,reflect:!0})],pe.prototype,"tabIndex",2);x([tt("active")],pe.prototype,"handleActiveChange",1);x([tt("disabled")],pe.prototype,"handleDisabledChange",1);pe.define("sl-tab");var oy=pt`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,sy=pt`
  :host {
    display: contents;
  }
`,sn=class extends ct{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(r=>{this.emit("sl-resize",{detail:{entries:r}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const r=this.shadowRoot.querySelector("slot");if(r!==null){const t=r.assignedElements({flatten:!0});this.observedElements.forEach(e=>this.resizeObserver.unobserve(e)),this.observedElements=[],t.forEach(e=>{this.resizeObserver.observe(e),this.observedElements.push(e)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return H` <slot @slotchange=${this.handleSlotChange}></slot> `}};sn.styles=[bt,sy];x([A({type:Boolean,reflect:!0})],sn.prototype,"disabled",2);x([tt("disabled",{waitUntilFirstUpdate:!0})],sn.prototype,"handleDisabledChange",1);var Mt=class extends ct{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new qt(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const r=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{if(t.some(e=>!["aria-labelledby","aria-controls"].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(e=>e.attributeName==="disabled"))this.syncTabsAndPanels();else if(t.some(e=>e.attributeName==="active")){const i=t.filter(n=>n.attributeName==="active"&&n.target.tagName.toLowerCase()==="sl-tab").map(n=>n.target).find(n=>n.active);i&&this.setActiveTab(i)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),r.then(()=>{new IntersectionObserver((e,i)=>{var n;e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((n=this.getActiveTab())!=null?n:this.tabs[0],{emitEvents:!1}),i.unobserve(e[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var r,t;super.disconnectedCallback(),(r=this.mutationObserver)==null||r.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(r=>r.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(r=>r.active)}handleClick(r){const e=r.target.closest("sl-tab");(e==null?void 0:e.closest("sl-tab-group"))===this&&e!==null&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(r){const e=r.target.closest("sl-tab");if((e==null?void 0:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(r.key)&&e!==null&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),r.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(r.key))){const n=this.tabs.find(c=>c.matches(":focus")),o=this.localize.dir()==="rtl";let s=null;if((n==null?void 0:n.tagName.toLowerCase())==="sl-tab"){if(r.key==="Home")s=this.focusableTabs[0];else if(r.key==="End")s=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&r.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&r.key==="ArrowUp"){const c=this.tabs.findIndex(h=>h===n);s=this.findNextFocusableTab(c,"backward")}else if(["top","bottom"].includes(this.placement)&&r.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&r.key==="ArrowDown"){const c=this.tabs.findIndex(h=>h===n);s=this.findNextFocusableTab(c,"forward")}if(!s)return;s.tabIndex=0,s.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(s,{scrollBehavior:"smooth"}):this.tabs.forEach(c=>{c.tabIndex=c===s?0:-1}),["top","bottom"].includes(this.placement)&&Na(s,this.nav,"horizontal"),r.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(r,t){if(t=Ue({emitEvents:!0,scrollBehavior:"auto"},t),r!==this.activeTab&&!r.disabled){const e=this.activeTab;this.activeTab=r,this.tabs.forEach(i=>{i.active=i===this.activeTab,i.tabIndex=i===this.activeTab?0:-1}),this.panels.forEach(i=>{var n;return i.active=i.name===((n=this.activeTab)==null?void 0:n.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Na(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(e&&this.emit("sl-tab-hide",{detail:{name:e.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(r=>{const t=this.panels.find(e=>e.name===r.panel);t&&(r.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",r.getAttribute("id")))})}repositionIndicator(){const r=this.getActiveTab();if(!r)return;const t=r.clientWidth,e=r.clientHeight,i=this.localize.dir()==="rtl",n=this.getAllTabs(),s=n.slice(0,n.indexOf(r)).reduce((c,h)=>({left:c.left+h.clientWidth,top:c.top+h.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*s.left}px`:`${s.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${e}px`,this.indicator.style.translate=`0 ${s.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(r=>!r.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(r,t){let e=null;const i=t==="forward"?1:-1;let n=r+i;for(;r<this.tabs.length;){if(e=this.tabs[n]||null,e===null){t==="forward"?e=this.focusableTabs[0]:e=this.focusableTabs[this.focusableTabs.length-1];break}if(!e.disabled)break;n+=i}return e}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(r){const t=this.tabs.find(e=>e.panel===r);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const r=this.localize.dir()==="rtl";return H`
      <div
        part="base"
        class=${lt({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?H`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${lt({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${r?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?H`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${lt({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${r?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};Mt.styles=[bt,oy];Mt.dependencies={"sl-icon-button":kt,"sl-resize-observer":sn};x([Y(".tab-group")],Mt.prototype,"tabGroup",2);x([Y(".tab-group__body")],Mt.prototype,"body",2);x([Y(".tab-group__nav")],Mt.prototype,"nav",2);x([Y(".tab-group__indicator")],Mt.prototype,"indicator",2);x([dt()],Mt.prototype,"hasScrollControls",2);x([dt()],Mt.prototype,"shouldHideScrollStartButton",2);x([dt()],Mt.prototype,"shouldHideScrollEndButton",2);x([A()],Mt.prototype,"placement",2);x([A()],Mt.prototype,"activation",2);x([A({attribute:"no-scroll-controls",type:Boolean})],Mt.prototype,"noScrollControls",2);x([A({attribute:"fixed-scroll-controls",type:Boolean})],Mt.prototype,"fixedScrollControls",2);x([il({passive:!0})],Mt.prototype,"updateScrollButtons",1);x([tt("noScrollControls",{waitUntilFirstUpdate:!0})],Mt.prototype,"updateScrollControls",1);x([tt("placement",{waitUntilFirstUpdate:!0})],Mt.prototype,"syncIndicator",1);Mt.define("sl-tab-group");var ay=(r,t)=>{let e=0;return function(...i){window.clearTimeout(e),e=window.setTimeout(()=>{r.call(this,...i)},t)}},nh=(r,t,e)=>{const i=r[t];r[t]=function(...n){i.call(this,...n),e.call(this,i,...n)}},ly="onscrollend"in window;if(!ly){const r=new Set,t=new WeakMap,e=n=>{for(const o of n.changedTouches)r.add(o.identifier)},i=n=>{for(const o of n.changedTouches)r.delete(o.identifier)};document.addEventListener("touchstart",e,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),nh(EventTarget.prototype,"addEventListener",function(n,o){if(o!=="scrollend")return;const s=ay(()=>{r.size?s():this.dispatchEvent(new Event("scrollend"))},100);n.call(this,"scroll",s,{passive:!0}),t.set(this,s)}),nh(EventTarget.prototype,"removeEventListener",function(n,o){if(o!=="scrollend")return;const s=t.get(this);s&&n.call(this,"scroll",s,{passive:!0})})}var cy=pt`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,dy=0,li=class extends ct{constructor(){super(...arguments),this.attrId=++dy,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return H`
      <slot
        part="base"
        class=${lt({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};li.styles=[bt,cy];x([A({reflect:!0})],li.prototype,"name",2);x([A({type:Boolean,reflect:!0})],li.prototype,"active",2);x([tt("active")],li.prototype,"handleActiveChange",1);li.define("sl-tab-panel");class vp extends ae{static get properties(){return{renderingType:{type:String,reflectToAttribute:!0,attribute:!0},desynchronizedEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},pointerRawUpdateEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},pressureEventsEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},predictedEventsEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},predictedEventsHighlightEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},predictedType:{type:String,reflectToAttribute:!0,attribute:!0},numOfPredictionPoints:{type:Number,reflectToAttribute:!0,attribute:!0},coalescedEventsEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawPointsOnlyEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}set renderingType(t){let e=this._renderingType;this._renderingType=t;let i=new CustomEvent("renderingType-changed",{detail:{renderingType:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("renderingType",e)}get renderingType(){return this._renderingType}set desynchronizedEnabled(t){let e=this._desynchronizedEnabled;this._desynchronizedEnabled=t;let i=new CustomEvent("desynchronizedEnabled-changed",{detail:{desynchronizedEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("desynchronizedEnabled",e)}get desynchronizedEnabled(){return this._desynchronizedEnabled}set pointerRawUpdateEnabled(t){let e=this._pointerRawUpdateEnabled;this._pointerRawUpdateEnabled=t;let i=new CustomEvent("pointerRawUpdateEnabled-changed",{detail:{pointerRawUpdateEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("pointerRawUpdateEnabled",e)}get pointerRawUpdateEnabled(){return this._pointerRawUpdateEnabled}set pressureEventsEnabled(t){let e=this._pressureEventsEnabled;this._pressureEventsEnabled=t;let i=new CustomEvent("pressureEventsEnabled-changed",{detail:{pressureEventsEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("pressureEventsEnabled",e)}get pressureEventsEnabled(){return this._pressureEventsEnabled}set predictedEventsEnabled(t){let e=this._predictedEventsEnabled;this._predictedEventsEnabled=t;let i=new CustomEvent("predictedEventsEnabled-changed",{detail:{predictedEventsEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("predictedEventsEnabled",e)}get predictedEventsEnabled(){return this._predictedEventsEnabled}set predictedEventsHighlightEnabled(t){let e=this._predictedEventsHighlightEnabled;this._predictedEventsHighlightEnabled=t;let i=new CustomEvent("predictedEventsHighlightEnabled-changed",{detail:{predictedEventsHighlightEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("predictedEventsHighlightEnabled",e)}get predictedEventsHighlightEnabled(){return this._predictedEventsHighlightEnabled}set predictionType(t){let e=this._predictionType;this._predictionType=t;let i=new CustomEvent("predictionType-changed",{detail:{predictionType:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("predictionType",e)}get predictionType(){return this._predictionType}set numOfPredictionPoints(t){let e=this._numOfPredictionPoints;this._numOfPredictionPoints=t;let i=new CustomEvent("numOfPredictionPoints-changed",{detail:{numOfPredictionPoints:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("numOfPredictionPoints",e)}get numOfPredictionPoints(){return this._numOfPredictionPoints}set coalescedEventsEnabled(t){let e=this._coalescedEventsEnabled;this._coalescedEventsEnabled=t;let i=new CustomEvent("coalescedEventsEnabled-changed",{detail:{coalescedEventsEnabled:t,bubbles:!0,composed:!0}});this.dispatchEvent(i),this.requestUpdate("coalescedEventsEnabled",e)}get coalescedEventsEnabled(){return this._coalescedEventsEnabled}set drawPointsOnlyEnabled(t){let e=this._drawPointsOnlyEnabled;this._drawPointsOnlyEnabled=t;let i=new CustomEvent("drawPointsOnlyEnabled-changed",{detail:{drawPointsOnlyEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("drawPointsOnlyEnabled",e)}get drawPointsOnlyEnabled(){return this._drawPointsOnlyEnabled}show(){this._dialog.show()}_triggerPropertyUpdate(){this.desynchronizedEnabled=this.desynchronizedEnabled,this.pointerRawUpdateEnabled=this.pointerRawUpdateEnabled,this.pressureEventsEnabled=this.pressureEventsEnabled,this.predictedEventsEnabled=this.predictedEventsEnabled,this.predictedEventsHighlightEnabled=this.predictedEventsHighlightEnabled,this.predictionType=this.predictionType,this.numOfPredictionPoints=this.numOfPredictionPoints,this.coalescedEventsEnabled=this.coalescedEventsEnabled,this.drawPointsOnlyEnabled=this.drawPointsOnlyEnabled}_renderingTypeModeChanged(){this.renderingType=this._renderingModeSelect.value,this._triggerPropertyUpdate()}_desynchronizedSwitchChanged(){this.desynchronizedEnabled=this._desynchronizedSwitch.checked}_isPointerRawUpdateSupported(){return typeof this.onpointerrawupdate<"u"}_pointerRawSwitchChanged(){this.pointerRawUpdateEnabled=this._pointerRawSwitch.checked,this._pointerRawSwitch.checked&&(this.predictedEventsEnabled=this._predictionSwitch.checked=!1,this.predictedEventsHighlightEnabled=this._predictionHighlightSwitch.checked=!1,this._predictionModeSelect.disabled=this._predictionPointsRange.disabled=!this._predictionSwitch.checked)}_drawPointsOnlyChanged(){this.drawPointsOnlyEnabled=this._drawPointsSwitch.checked}_coalescedEventsSwitchChanged(){this.coalescedEventsEnabled=this._coalescedEventsSwitch.checked}_pressureEventsSwitchChanged(){this.pressureEventsEnabled=this._penPressureSwitch.checked}_predictedEventsSwitchChanged(){this.predictedEventsEnabled=this._predictionSwitch.checked,this._predictionHighlightSwitch.disabled=!this._predictionSwitch.checked,this._predictionSwitch.checked?this.pointerRawUpdateEnabled=this._pointerRawSwitch.checked=!1:this.predictedEventsHighlightEnabled=this._predictionHighlightSwitch.checked=!1,this._predictionModeSelect.disabled=this._predictionPointsRange.disabled=!this._predictionSwitch.checked}_predictedEventsHighlightSwitchChanged(){this.predictedEventsHighlightEnabled=this._predictionHighlightSwitch.checked}_predictionTypeSwitchChanged(){this.predictionType=this._predictionModeSelect.value}_predictionPointsRangeChanged(){this.numOfPredictionPoints=this._predictionPointsRange.value}firstUpdated(){this._dialog=this.shadowRoot.querySelector("#dialog"),this._dialog.querySelector('sl-button[slot="footer"]').addEventListener("click",()=>this._dialog.hide()),this._renderingModeSelect=this.shadowRoot.querySelector("#rendering-mode-select"),this._desynchronizedSwitch=this.shadowRoot.querySelector("#desynchronized-switch"),this._drawPointsSwitch=this.shadowRoot.querySelector("#draw-points-switch"),this._pointerRawSwitch=this.shadowRoot.querySelector("#pointerraw-switch"),this._coalescedEventsSwitch=this.shadowRoot.querySelector("#coalesced-switch"),this._penPressureSwitch=this.shadowRoot.querySelector("#pen-pressure-switch"),this._predictionSwitch=this.shadowRoot.querySelector("#predictions-switch"),this._predictionHighlightSwitch=this.shadowRoot.querySelector("#predictions-highlight-switch"),this._predictionModeSelect=this.shadowRoot.querySelector("#prediction-mode-select"),this._predictionPointsRange=this.shadowRoot.querySelector("#prediction-points-range"),this.desynchronizedEnabled=this._desynchronizedSwitch.checked=!0,this.predictedEventsEnabled=this._predictionSwitch.checked=!0,this.predictedEventsHighlightEnabled=this._predictionHighlightSwitch.checked=!1,this.pressureEventsEnabled=this._penPressureSwitch.checked=!0,this.coalescedEventsEnabled=this._coalescedEventsSwitch.checked=!0,this._isPointerRawUpdateSupported()||(this._pointerRawSwitch.disabled=!0),this._triggerPropertyUpdate()}constructor(){super(),this._desynchronizedEnabled=!1,this._drawingPreferencesCheckbox=!1,this._pointerRawUpdateEnabled=!1,this._pressureEventsEnabled=!1,this._predictedEventsEnabled=!1,this._predictedEventsHighlightEnabled=!1,this._predictionType="custom",this._coalescedEventsEnabled=!1,this._drawPointsOnlyEnabled=!1,this._numOfPredictionPoints=1}render(){return ve`
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
        `}}vt(vp,"styles",qe`
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
    `);customElements.define("settings-dialog",vp);var uy=pt`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,ci=class extends ct{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return H`
      <span
        part="base"
        class=${lt({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};ci.styles=[bt,uy];x([A({reflect:!0})],ci.prototype,"variant",2);x([A({type:Boolean,reflect:!0})],ci.prototype,"pill",2);x([A({type:Boolean,reflect:!0})],ci.prototype,"pulse",2);ci.define("sl-badge");var hy=pt`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,bp=class extends ct{render(){return H` <slot></slot> `}};bp.styles=[bt,hy];var py=pt`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,J=class extends ct{constructor(){super(...arguments),this.formControlController=new nr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new he(this,"help-text","label"),this.localize=new qt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var r;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((r=this.input)==null?void 0:r.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(r){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=r,this.value=this.__dateInput.value}get valueAsNumber(){var r;return this.__numberInput.value=this.value,((r=this.input)==null?void 0:r.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(r){this.__numberInput.valueAsNumber=r,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(r){r.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}handleKeyDown(r){const t=r.metaKey||r.ctrlKey||r.shiftKey||r.altKey;r.key==="Enter"&&!t&&setTimeout(()=>{!r.defaultPrevented&&!r.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(r){this.input.focus(r)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(r,t,e="none"){this.input.setSelectionRange(r,t,e)}setRangeText(r,t,e,i="preserve"){const n=t??this.input.selectionStart,o=e??this.input.selectionEnd;this.input.setRangeText(r,n,o,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.formControlController.updateValidity()}render(){const r=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),e=this.label?!0:!!r,i=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return H`
      <div
        part="form-control"
        class=${lt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":e,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${e?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${lt({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${X(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${X(this.placeholder)}
              minlength=${X(this.minlength)}
              maxlength=${X(this.maxlength)}
              min=${X(this.min)}
              max=${X(this.max)}
              step=${X(this.step)}
              .value=${vl(this.value)}
              autocapitalize=${X(this.autocapitalize)}
              autocomplete=${X(this.autocomplete)}
              autocorrect=${X(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${X(this.pattern)}
              enterkeyhint=${X(this.enterkeyhint)}
              inputmode=${X(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?H`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?H`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?H`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:H`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};J.styles=[bt,ai,py];J.dependencies={"sl-icon":jt};x([Y(".input__control")],J.prototype,"input",2);x([dt()],J.prototype,"hasFocus",2);x([A()],J.prototype,"title",2);x([A({reflect:!0})],J.prototype,"type",2);x([A()],J.prototype,"name",2);x([A()],J.prototype,"value",2);x([on()],J.prototype,"defaultValue",2);x([A({reflect:!0})],J.prototype,"size",2);x([A({type:Boolean,reflect:!0})],J.prototype,"filled",2);x([A({type:Boolean,reflect:!0})],J.prototype,"pill",2);x([A()],J.prototype,"label",2);x([A({attribute:"help-text"})],J.prototype,"helpText",2);x([A({type:Boolean})],J.prototype,"clearable",2);x([A({type:Boolean,reflect:!0})],J.prototype,"disabled",2);x([A()],J.prototype,"placeholder",2);x([A({type:Boolean,reflect:!0})],J.prototype,"readonly",2);x([A({attribute:"password-toggle",type:Boolean})],J.prototype,"passwordToggle",2);x([A({attribute:"password-visible",type:Boolean})],J.prototype,"passwordVisible",2);x([A({attribute:"no-spin-buttons",type:Boolean})],J.prototype,"noSpinButtons",2);x([A({reflect:!0})],J.prototype,"form",2);x([A({type:Boolean,reflect:!0})],J.prototype,"required",2);x([A()],J.prototype,"pattern",2);x([A({type:Number})],J.prototype,"minlength",2);x([A({type:Number})],J.prototype,"maxlength",2);x([A()],J.prototype,"min",2);x([A()],J.prototype,"max",2);x([A()],J.prototype,"step",2);x([A()],J.prototype,"autocapitalize",2);x([A()],J.prototype,"autocorrect",2);x([A()],J.prototype,"autocomplete",2);x([A({type:Boolean})],J.prototype,"autofocus",2);x([A()],J.prototype,"enterkeyhint",2);x([A({type:Boolean,converter:{fromAttribute:r=>!(!r||r==="false"),toAttribute:r=>r?"true":"false"}})],J.prototype,"spellcheck",2);x([A()],J.prototype,"inputmode",2);x([tt("disabled",{waitUntilFirstUpdate:!0})],J.prototype,"handleDisabledChange",1);x([tt("step",{waitUntilFirstUpdate:!0})],J.prototype,"handleStepChange",1);x([tt("value",{waitUntilFirstUpdate:!0})],J.prototype,"handleValueChange",1);function Sa(r,t){function e(n){const o=r.getBoundingClientRect(),s=r.ownerDocument.defaultView,c=o.left+s.scrollX,h=o.top+s.scrollY,l=n.pageX-c,u=n.pageY-h;t!=null&&t.onMove&&t.onMove(l,u)}function i(){document.removeEventListener("pointermove",e),document.removeEventListener("pointerup",i),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",e,{passive:!0}),document.addEventListener("pointerup",i),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&e(t.initialEvent)}var fy=pt`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Nt=class extends ct{constructor(){super(...arguments),this.localize=new qt(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=r=>{this.open&&r.key==="Escape"&&(r.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=r=>{var t;if(r.key==="Escape"&&this.open&&!this.closeWatcher){r.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(r.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){r.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var e,i,n;const o=((e=this.containingElement)==null?void 0:e.getRootNode())instanceof ShadowRoot?(n=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:n.activeElement:document.activeElement;(!this.containingElement||(o==null?void 0:o.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=r=>{const t=r.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=r=>{const t=r.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const r=this.trigger.assignedElements({flatten:!0})[0];typeof(r==null?void 0:r.focus)=="function"&&r.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(r=>r.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(r){if([" ","Enter"].includes(r.key)){r.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const e=t.getAllItems(),i=e[0],n=e[e.length-1];["ArrowDown","ArrowUp","Home","End"].includes(r.key)&&(r.preventDefault(),this.open||(this.show(),await this.updateComplete),e.length>0&&this.updateComplete.then(()=>{(r.key==="ArrowDown"||r.key==="Home")&&(t.setCurrentItem(i),i.focus()),(r.key==="ArrowUp"||r.key==="End")&&(t.setCurrentItem(n),n.focus())}))}}handleTriggerKeyUp(r){r.key===" "&&r.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>Hf(i).start);let e;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":e=t.button;break;default:e=t}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,le(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,le(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var r;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((r=this.closeWatcher)==null||r.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var r;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(r=this.closeWatcher)==null||r.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Dt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:r,options:t}=Pt(this,"dropdown.show",{dir:this.localize.dir()});await Tt(this.popup.popup,r,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Dt(this);const{keyframes:r,options:t}=Pt(this,"dropdown.hide",{dir:this.localize.dir()});await Tt(this.popup.popup,r,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return H`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${X(this.sync?this.sync:void 0)}
        class=${lt({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Nt.styles=[bt,fy];Nt.dependencies={"sl-popup":ft};x([Y(".dropdown")],Nt.prototype,"popup",2);x([Y(".dropdown__trigger")],Nt.prototype,"trigger",2);x([Y(".dropdown__panel")],Nt.prototype,"panel",2);x([A({type:Boolean,reflect:!0})],Nt.prototype,"open",2);x([A({reflect:!0})],Nt.prototype,"placement",2);x([A({type:Boolean,reflect:!0})],Nt.prototype,"disabled",2);x([A({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Nt.prototype,"stayOpenOnSelect",2);x([A({attribute:!1})],Nt.prototype,"containingElement",2);x([A({type:Number})],Nt.prototype,"distance",2);x([A({type:Number})],Nt.prototype,"skidding",2);x([A({type:Boolean})],Nt.prototype,"hoist",2);x([A({reflect:!0})],Nt.prototype,"sync",2);x([tt("open",{waitUntilFirstUpdate:!0})],Nt.prototype,"handleOpenChange",1);xt("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});xt("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var my=pt`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function oe(r,t,e){const i=n=>Object.is(n,-0)?0:n;return r<t?i(t):r>e?i(e):i(r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yp="important",gy=" !"+yp,Te=ii(class extends ni{constructor(r){var t;if(super(r),r.type!==ge.ATTRIBUTE||r.name!=="style"||((t=r.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,e)=>{const i=r[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(r,[t]){const{style:e}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(const i in t){const n=t[i];if(n!=null){this.ft.add(i);const o=typeof n=="string"&&n.endsWith(gy);i.includes("-")||o?e.setProperty(i,o?n.slice(0,-11):n,o?yp:""):e[i]=n}}return Zt}});function Rt(r,t){vy(r)&&(r="100%");const e=by(r);return r=t===360?r:Math.min(t,Math.max(0,parseFloat(r))),e&&(r=parseInt(String(r*t),10)/100),Math.abs(r-t)<1e-6?1:(t===360?r=(r<0?r%t+t:r%t)/parseFloat(String(t)):r=r%t/parseFloat(String(t)),r)}function Si(r){return Math.min(1,Math.max(0,r))}function vy(r){return typeof r=="string"&&r.indexOf(".")!==-1&&parseFloat(r)===1}function by(r){return typeof r=="string"&&r.indexOf("%")!==-1}function _p(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function Ci(r){return Number(r)<=1?`${Number(r)*100}%`:r}function Qe(r){return r.length===1?"0"+r:String(r)}function yy(r,t,e){return{r:Rt(r,255)*255,g:Rt(t,255)*255,b:Rt(e,255)*255}}function oh(r,t,e){r=Rt(r,255),t=Rt(t,255),e=Rt(e,255);const i=Math.max(r,t,e),n=Math.min(r,t,e);let o=0,s=0;const c=(i+n)/2;if(i===n)s=0,o=0;else{const h=i-n;switch(s=c>.5?h/(2-i-n):h/(i+n),i){case r:o=(t-e)/h+(t<e?6:0);break;case t:o=(e-r)/h+2;break;case e:o=(r-t)/h+4;break}o/=6}return{h:o,s,l:c}}function Ca(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*(6*e):e<1/2?t:e<2/3?r+(t-r)*(2/3-e)*6:r}function _y(r,t,e){let i,n,o;if(r=Rt(r,360),t=Rt(t,100),e=Rt(e,100),t===0)n=e,o=e,i=e;else{const s=e<.5?e*(1+t):e+t-e*t,c=2*e-s;i=Ca(c,s,r+1/3),n=Ca(c,s,r),o=Ca(c,s,r-1/3)}return{r:i*255,g:n*255,b:o*255}}function sh(r,t,e){r=Rt(r,255),t=Rt(t,255),e=Rt(e,255);const i=Math.max(r,t,e),n=Math.min(r,t,e);let o=0;const s=i,c=i-n,h=i===0?0:c/i;if(i===n)o=0;else{switch(i){case r:o=(t-e)/c+(t<e?6:0);break;case t:o=(e-r)/c+2;break;case e:o=(r-t)/c+4;break}o/=6}return{h:o,s:h,v:s}}function wy(r,t,e){r=Rt(r,360)*6,t=Rt(t,100),e=Rt(e,100);const i=Math.floor(r),n=r-i,o=e*(1-t),s=e*(1-n*t),c=e*(1-(1-n)*t),h=i%6,l=[e,s,o,o,c,e][h],u=[c,e,e,s,o,o][h],a=[o,o,c,e,e,s][h];return{r:l*255,g:u*255,b:a*255}}function ah(r,t,e,i){const n=[Qe(Math.round(r).toString(16)),Qe(Math.round(t).toString(16)),Qe(Math.round(e).toString(16))];return i&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function xy(r,t,e,i,n){const o=[Qe(Math.round(r).toString(16)),Qe(Math.round(t).toString(16)),Qe(Math.round(e).toString(16)),Qe(Cy(i))];return n&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function Sy(r,t,e,i){const n=r/100,o=t/100,s=e/100,c=i/100,h=255*(1-n)*(1-c),l=255*(1-o)*(1-c),u=255*(1-s)*(1-c);return{r:h,g:l,b:u}}function lh(r,t,e){let i=1-r/255,n=1-t/255,o=1-e/255,s=Math.min(i,n,o);return s===1?(i=0,n=0,o=0):(i=(i-s)/(1-s)*100,n=(n-s)/(1-s)*100,o=(o-s)/(1-s)*100),s*=100,{c:Math.round(i),m:Math.round(n),y:Math.round(o),k:Math.round(s)}}function Cy(r){return Math.round(parseFloat(r)*255).toString(16)}function ch(r){return Gt(r)/255}function Gt(r){return parseInt(r,16)}function Ey(r){return{r:r>>16,g:(r&65280)>>8,b:r&255}}const Ba={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Ay(r){let t={r:0,g:0,b:0},e=1,i=null,n=null,o=null,s=!1,c=!1;return typeof r=="string"&&(r=Py(r)),typeof r=="object"&&(Xt(r.r)&&Xt(r.g)&&Xt(r.b)?(t=yy(r.r,r.g,r.b),s=!0,c=String(r.r).substr(-1)==="%"?"prgb":"rgb"):Xt(r.h)&&Xt(r.s)&&Xt(r.v)?(i=Ci(r.s),n=Ci(r.v),t=wy(r.h,i,n),s=!0,c="hsv"):Xt(r.h)&&Xt(r.s)&&Xt(r.l)?(i=Ci(r.s),o=Ci(r.l),t=_y(r.h,i,o),s=!0,c="hsl"):Xt(r.c)&&Xt(r.m)&&Xt(r.y)&&Xt(r.k)&&(t=Sy(r.c,r.m,r.y,r.k),s=!0,c="cmyk"),Object.prototype.hasOwnProperty.call(r,"a")&&(e=r.a)),e=_p(e),{ok:s,format:r.format||c,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:e}}const ky="[-\\+]?\\d+%?",$y="[-\\+]?\\d*\\.\\d+%?",Oe="(?:"+$y+")|(?:"+ky+")",Ea="[\\s|\\(]+("+Oe+")[,|\\s]+("+Oe+")[,|\\s]+("+Oe+")\\s*\\)?",Ei="[\\s|\\(]+("+Oe+")[,|\\s]+("+Oe+")[,|\\s]+("+Oe+")[,|\\s]+("+Oe+")\\s*\\)?",se={CSS_UNIT:new RegExp(Oe),rgb:new RegExp("rgb"+Ea),rgba:new RegExp("rgba"+Ei),hsl:new RegExp("hsl"+Ea),hsla:new RegExp("hsla"+Ei),hsv:new RegExp("hsv"+Ea),hsva:new RegExp("hsva"+Ei),cmyk:new RegExp("cmyk"+Ei),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Py(r){if(r=r.trim().toLowerCase(),r.length===0)return!1;let t=!1;if(Ba[r])r=Ba[r],t=!0;else if(r==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let e=se.rgb.exec(r);return e?{r:e[1],g:e[2],b:e[3]}:(e=se.rgba.exec(r),e?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=se.hsl.exec(r),e?{h:e[1],s:e[2],l:e[3]}:(e=se.hsla.exec(r),e?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=se.hsv.exec(r),e?{h:e[1],s:e[2],v:e[3]}:(e=se.hsva.exec(r),e?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=se.cmyk.exec(r),e?{c:e[1],m:e[2],y:e[3],k:e[4]}:(e=se.hex8.exec(r),e?{r:Gt(e[1]),g:Gt(e[2]),b:Gt(e[3]),a:ch(e[4]),format:t?"name":"hex8"}:(e=se.hex6.exec(r),e?{r:Gt(e[1]),g:Gt(e[2]),b:Gt(e[3]),format:t?"name":"hex"}:(e=se.hex4.exec(r),e?{r:Gt(e[1]+e[1]),g:Gt(e[2]+e[2]),b:Gt(e[3]+e[3]),a:ch(e[4]+e[4]),format:t?"name":"hex8"}:(e=se.hex3.exec(r),e?{r:Gt(e[1]+e[1]),g:Gt(e[2]+e[2]),b:Gt(e[3]+e[3]),format:t?"name":"hex"}:!1))))))))))}function Xt(r){return typeof r=="number"?!Number.isNaN(r):se.CSS_UNIT.test(r)}class Ct{constructor(t="",e={}){if(t instanceof Ct)return t;typeof t=="number"&&(t=Ey(t)),this.originalInput=t;const i=Ay(t);this.originalInput=t,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=e.format??i.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let e,i,n;const o=t.r/255,s=t.g/255,c=t.b/255;return o<=.03928?e=o/12.92:e=Math.pow((o+.055)/1.055,2.4),s<=.03928?i=s/12.92:i=Math.pow((s+.055)/1.055,2.4),c<=.03928?n=c/12.92:n=Math.pow((c+.055)/1.055,2.4),.2126*e+.7152*i+.0722*n}getAlpha(){return this.a}setAlpha(t){return this.a=_p(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=sh(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=sh(this.r,this.g,this.b),e=Math.round(t.h*360),i=Math.round(t.s*100),n=Math.round(t.v*100);return this.a===1?`hsv(${e}, ${i}%, ${n}%)`:`hsva(${e}, ${i}%, ${n}%, ${this.roundA})`}toHsl(){const t=oh(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=oh(this.r,this.g,this.b),e=Math.round(t.h*360),i=Math.round(t.s*100),n=Math.round(t.l*100);return this.a===1?`hsl(${e}, ${i}%, ${n}%)`:`hsla(${e}, ${i}%, ${n}%, ${this.roundA})`}toHex(t=!1){return ah(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return xy(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),e=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${t}, ${e}, ${i})`:`rgba(${t}, ${e}, ${i}, ${this.roundA})`}toPercentageRgb(){const t=e=>`${Math.round(Rt(e,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=e=>Math.round(Rt(e,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...lh(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:e,y:i,k:n}=lh(this.r,this.g,this.b);return`cmyk(${t}, ${e}, ${i}, ${n})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+ah(this.r,this.g,this.b,!1);for(const[e,i]of Object.entries(Ba))if(t===i)return e;return!1}toString(t){const e=!!t;t=t??this.format;let i=!1;const n=this.a<1&&this.a>=0;return!e&&n&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(i=this.toRgbString()),t==="prgb"&&(i=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(i=this.toHexString()),t==="hex3"&&(i=this.toHexString(!0)),t==="hex4"&&(i=this.toHex8String(!0)),t==="hex8"&&(i=this.toHex8String()),t==="name"&&(i=this.toName()),t==="hsl"&&(i=this.toHslString()),t==="hsv"&&(i=this.toHsvString()),t==="cmyk"&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new Ct(this.toString())}lighten(t=10){const e=this.toHsl();return e.l+=t/100,e.l=Si(e.l),new Ct(e)}brighten(t=10){const e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(255*-(t/100)))),e.g=Math.max(0,Math.min(255,e.g-Math.round(255*-(t/100)))),e.b=Math.max(0,Math.min(255,e.b-Math.round(255*-(t/100)))),new Ct(e)}darken(t=10){const e=this.toHsl();return e.l-=t/100,e.l=Si(e.l),new Ct(e)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const e=this.toHsl();return e.s-=t/100,e.s=Si(e.s),new Ct(e)}saturate(t=10){const e=this.toHsl();return e.s+=t/100,e.s=Si(e.s),new Ct(e)}greyscale(){return this.desaturate(100)}spin(t){const e=this.toHsl(),i=(e.h+t)%360;return e.h=i<0?360+i:i,new Ct(e)}mix(t,e=50){const i=this.toRgb(),n=new Ct(t).toRgb(),o=e/100,s={r:(n.r-i.r)*o+i.r,g:(n.g-i.g)*o+i.g,b:(n.b-i.b)*o+i.b,a:(n.a-i.a)*o+i.a};return new Ct(s)}analogous(t=6,e=30){const i=this.toHsl(),n=360/e,o=[this];for(i.h=(i.h-(n*t>>1)+720)%360;--t;)i.h=(i.h+n)%360,o.push(new Ct(i));return o}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new Ct(t)}monochromatic(t=6){const e=this.toHsv(),{h:i}=e,{s:n}=e;let{v:o}=e;const s=[],c=1/t;for(;t--;)s.push(new Ct({h:i,s:n,v:o})),o=(o+c)%1;return s}splitcomplement(){const t=this.toHsl(),{h:e}=t;return[this,new Ct({h:(e+72)%360,s:t.s,l:t.l}),new Ct({h:(e+216)%360,s:t.s,l:t.l})]}onBackground(t){const e=this.toRgb(),i=new Ct(t).toRgb(),n=e.a+i.a*(1-e.a);return new Ct({r:(e.r*e.a+i.r*i.a*(1-e.a))/n,g:(e.g*e.a+i.g*i.a*(1-e.a))/n,b:(e.b*e.a+i.b*i.a*(1-e.a))/n,a:n})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const e=this.toHsl(),{h:i}=e,n=[this],o=360/t;for(let s=1;s<t;s++)n.push(new Ct({h:(i+s*o)%360,s:e.s,l:e.l}));return n}equals(t){const e=new Ct(t);return this.format==="cmyk"||e.format==="cmyk"?this.toCmykString()===e.toCmykString():this.toRgbString()===e.toRgbString()}}var dh="EyeDropper"in window,nt=class extends ct{constructor(){super(),this.formControlController=new nr(this),this.isSafeValue=!1,this.localize=new qt(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const r=["hex","rgb","hsl","hsv"],t=(r.indexOf(this.format)+1)%r.length;this.format=r[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(r){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),e=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let n=this.value,o=this.value;e.focus(),r.preventDefault(),Sa(t,{onMove:s=>{this.alpha=oe(s/i*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==n&&(n=this.value,this.emit("sl-change"))},initialEvent:r})}handleHueDrag(r){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),e=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let n=this.value,o=this.value;e.focus(),r.preventDefault(),Sa(t,{onMove:s=>{this.hue=oe(s/i*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==n&&(n=this.value,this.emit("sl-change"))},initialEvent:r})}handleGridDrag(r){const t=this.shadowRoot.querySelector(".color-picker__grid"),e=t.querySelector(".color-picker__grid-handle"),{width:i,height:n}=t.getBoundingClientRect();let o=this.value,s=this.value;e.focus(),r.preventDefault(),this.isDraggingGridHandle=!0,Sa(t,{onMove:(c,h)=>{this.saturation=oe(c/i*100,0,100),this.brightness=oe(100-h/n*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:r})}handleAlphaKeyDown(r){const t=r.shiftKey?10:1,e=this.value;r.key==="ArrowLeft"&&(r.preventDefault(),this.alpha=oe(this.alpha-t,0,100),this.syncValues()),r.key==="ArrowRight"&&(r.preventDefault(),this.alpha=oe(this.alpha+t,0,100),this.syncValues()),r.key==="Home"&&(r.preventDefault(),this.alpha=0,this.syncValues()),r.key==="End"&&(r.preventDefault(),this.alpha=100,this.syncValues()),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(r){const t=r.shiftKey?10:1,e=this.value;r.key==="ArrowLeft"&&(r.preventDefault(),this.hue=oe(this.hue-t,0,360),this.syncValues()),r.key==="ArrowRight"&&(r.preventDefault(),this.hue=oe(this.hue+t,0,360),this.syncValues()),r.key==="Home"&&(r.preventDefault(),this.hue=0,this.syncValues()),r.key==="End"&&(r.preventDefault(),this.hue=360,this.syncValues()),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(r){const t=r.shiftKey?10:1,e=this.value;r.key==="ArrowLeft"&&(r.preventDefault(),this.saturation=oe(this.saturation-t,0,100),this.syncValues()),r.key==="ArrowRight"&&(r.preventDefault(),this.saturation=oe(this.saturation+t,0,100),this.syncValues()),r.key==="ArrowUp"&&(r.preventDefault(),this.brightness=oe(this.brightness+t,0,100),this.syncValues()),r.key==="ArrowDown"&&(r.preventDefault(),this.brightness=oe(this.brightness-t,0,100),this.syncValues()),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(r){const t=r.target,e=this.value;r.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(r){this.formControlController.updateValidity(),r.stopPropagation()}handleInputKeyDown(r){if(r.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}handleTouchMove(r){r.preventDefault()}parseColor(r){const t=new Ct(r);if(!t.isValid)return null;const e=t.toHsl(),i={h:e.h,s:e.s*100,l:e.l*100,a:e.a},n=t.toRgb(),o=t.toHexString(),s=t.toHex8String(),c=t.toHsv(),h={h:c.h,s:c.s*100,v:c.v*100,a:c.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:h.h,s:h.s,v:h.v,string:this.setLetterCase(`hsv(${Math.round(h.h)}, ${Math.round(h.s)}%, ${Math.round(h.v)}%)`)},hsva:{h:h.h,s:h.s,v:h.v,a:h.a,string:this.setLetterCase(`hsva(${Math.round(h.h)}, ${Math.round(h.s)}%, ${Math.round(h.v)}%, ${h.a.toFixed(2).toString()})`)},rgb:{r:n.r,g:n.g,b:n.b,string:this.setLetterCase(`rgb(${Math.round(n.r)}, ${Math.round(n.g)}, ${Math.round(n.b)})`)},rgba:{r:n.r,g:n.g,b:n.b,a:n.a,string:this.setLetterCase(`rgba(${Math.round(n.r)}, ${Math.round(n.g)}, ${Math.round(n.b)}, ${n.a.toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(s)}}setColor(r){const t=this.parseColor(r);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(r){return typeof r!="string"?"":this.uppercase?r.toUpperCase():r.toLowerCase()}async syncValues(){const r=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);r!==null&&(this.format==="hsl"?this.inputValue=this.opacity?r.hsla.string:r.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?r.rgba.string:r.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?r.hsva.string:r.hsv.string:this.inputValue=this.opacity?r.hexa:r.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!dh)return;new EyeDropper().open().then(t=>{const e=this.value;this.setColor(t.sRGBHex),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(r){const t=this.value;this.disabled||(this.setColor(r),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(r,t,e,i=100){const n=new Ct(`hsva(${r}, ${t}%, ${e}%, ${i/100})`);return n.isValid?n.toHex8String():""}stopNestedEventPropagation(r){r.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(r,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const e=this.parseColor(t);e!==null?(this.inputValue=this.value,this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=e.hsva.a*100,this.syncValues()):this.inputValue=r??""}}focus(r){this.inline?this.base.focus(r):this.trigger.focus(r)}blur(){var r;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(r=this.dropdown)!=null&&r.open&&this.dropdown.hide()}getFormattedValue(r="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(r){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.formControlController.updateValidity()}render(){const r=this.saturation,t=100-this.brightness,e=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(n=>n.trim()!==""),i=H`
      <div
        part="base"
        class=${lt({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?H`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Te({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${lt({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Te({top:`${t}%`,left:`${r}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${X(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${Te({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${X(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?H`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Te({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Te({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${X(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${Te({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":H`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${dh?H`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${e.length>0?H`
              <div part="swatches" class="color-picker__swatches">
                ${e.map(n=>{const o=this.parseColor(n);return o?H`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${X(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${n}
                      @click=${()=>this.selectSwatch(n)}
                      @keydown=${s=>!this.disabled&&s.key==="Enter"&&this.setColor(o.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Te({backgroundColor:o.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${n}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?i:H`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${lt({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Te({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};nt.styles=[bt,my];nt.dependencies={"sl-button-group":or,"sl-button":ut,"sl-dropdown":Nt,"sl-icon":jt,"sl-input":J,"sl-visually-hidden":bp};x([Y('[part~="base"]')],nt.prototype,"base",2);x([Y('[part~="input"]')],nt.prototype,"input",2);x([Y(".color-dropdown")],nt.prototype,"dropdown",2);x([Y('[part~="preview"]')],nt.prototype,"previewButton",2);x([Y('[part~="trigger"]')],nt.prototype,"trigger",2);x([dt()],nt.prototype,"hasFocus",2);x([dt()],nt.prototype,"isDraggingGridHandle",2);x([dt()],nt.prototype,"isEmpty",2);x([dt()],nt.prototype,"inputValue",2);x([dt()],nt.prototype,"hue",2);x([dt()],nt.prototype,"saturation",2);x([dt()],nt.prototype,"brightness",2);x([dt()],nt.prototype,"alpha",2);x([A()],nt.prototype,"value",2);x([on()],nt.prototype,"defaultValue",2);x([A()],nt.prototype,"label",2);x([A()],nt.prototype,"format",2);x([A({type:Boolean,reflect:!0})],nt.prototype,"inline",2);x([A({reflect:!0})],nt.prototype,"size",2);x([A({attribute:"no-format-toggle",type:Boolean})],nt.prototype,"noFormatToggle",2);x([A()],nt.prototype,"name",2);x([A({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);x([A({type:Boolean})],nt.prototype,"hoist",2);x([A({type:Boolean})],nt.prototype,"opacity",2);x([A({type:Boolean})],nt.prototype,"uppercase",2);x([A()],nt.prototype,"swatches",2);x([A({reflect:!0})],nt.prototype,"form",2);x([A({type:Boolean,reflect:!0})],nt.prototype,"required",2);x([il({passive:!1})],nt.prototype,"handleTouchMove",1);x([tt("format",{waitUntilFirstUpdate:!0})],nt.prototype,"handleFormatChange",1);x([tt("opacity",{waitUntilFirstUpdate:!0})],nt.prototype,"handleOpacityChange",1);x([tt("value")],nt.prototype,"handleValueChange",1);nt.define("sl-color-picker");Nt.define("sl-dropdown");class wp extends ae{static get properties(){return{selected:{type:Boolean,reflectToAttribute:!0,attribute:!0},name:{type:String,reflectToAttribute:!0,attribute:!0},label:{type:String,reflectToAttribute:!0,attribute:!0},library:{type:String,reflectToAttribute:!0,attribute:!0}}}set selected(t){let e=this._selected;this._selected=t,this.requestUpdate("selected",e)}get selected(){return this._selected}set name(t){let e=this._name;this._name=t,this.requestUpdate("name",e)}get name(){return this._name}set label(t){let e=this._label;this._label=t,this.requestUpdate("label",e)}get label(){return this._label}set library(t){this._library,this._library=t,this.requestUpdate("library",this._library)}get library(){return this._library}constructor(){super(),this._selected=!1,this._label="",this._name="",this._library="default"}render(){return ve`
            <div class="${this.selected?"selected":""}">
                <sl-icon-button 
                    library="${this.library}"
                    name="${this.name}" label="${this.label}">
                </sl-icon-button>
            </div>`}}vt(wp,"styles",qe`
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
    `);customElements.define("drawing-button",wp);class xp extends ae{constructor(){super();vt(this,"_updateLineColorCustomization",async e=>{this._drawWithCustomizations&&this.preferredColor!=this.currentLineColor&&await this._writePreferredColor(e,!1)});vt(this,"_updateLineWidthCustomization",async e=>{await this._writePreferredWidth(e,!1)});vt(this,"_readAndSetPreferredColor",async e=>{try{this.preferredColor=await e.penCustomizationsDetails.getPreferredInkingColor(),this.currentLineColor=this.preferredColor}catch{this._emitErrorToast("Couldn't read the preferred color from the stylus.")}});vt(this,"_readAndSetPreferredStyle",async e=>{try{this.preferredStyle=await e.penCustomizationsDetails.getPreferredInkingStyle(),this.preferredStyle=this.preferredStyle.toLowerCase(),this.currentLineStyle=this.preferredStyle}catch{this._emitErrorToast("Couldn't read the preferred style from the stylus.")}});vt(this,"_readAndSetPreferredWidth",async e=>{try{this.preferredWidth=await e.penCustomizationsDetails.getPreferredInkingWidth(),this.currentLineWidth=this.preferredWidth}catch{this._emitErrorToast("Couldn't read the preferred width from the stylus.")}});vt(this,"_writePreferredColor",async(e,i=!0)=>{try{this.preferredColor=await e.penCustomizationsDetails.setPreferredInkingColor(this.currentLineColor),this.preferredColor!=this.currentLineColor?(i&&this._emitWarningToast("The color was written successfully but was adjusted to work with the pen."),console.log("Wrote the following color to the stylus : "+this.preferredColor+", original color was : "+this.currentLineColor)):(i&&this._emitSuccessToast("The current color was written successfully."),console.log("Wrote the following color to the stylus : "+this.preferredColor))}catch{i&&this._emitErrorToast("The current color could not be written on the stylus."),console.log("Could not write the preferred color to the stylus.")}});vt(this,"_writePreferredWidth",async(e,i=!0)=>{try{this.preferredWidth=await e.penCustomizationsDetails.setPreferredInkingWidth(this.currentLineWidth),i&&this._emitSuccessToast("The current width was written successfully."),console.log("Wrote to following preferred width to the stylus : "+this.preferredWidth)}catch{i&&this._emitErrorToast("The current width could not be written on the stylus."),console.log("Could not write the preferred width to the stylus.")}});vt(this,"_writePreferredStyle",async(e,i=!0)=>{try{let n=await e.penCustomizationsDetails.setPreferredInkingStyle(this.currentLineStyle.toUpperCase());this.preferredStyle=n.toLowerCase(),i&&this._emitSuccessToast("The current style was written successfully."),console.log("Wrote to following preferred width to the stylus : "+this.preferredStyle)}catch{i&&this._emitErrorToast("The current style could not be written on the stylus."),console.log("Could not write the preferred style to the stylus.")}});vt(this,"_readStylusCustomizations",async(e,i=!1)=>{let n=this.shadowRoot.querySelectorAll(".preferred");try{const o=await e.penCustomizationsDetails.getPreferredInkingColor(),s=await e.penCustomizationsDetails.getPreferredInkingStyle(),c=await e.penCustomizationsDetails.getPreferredInkingWidth();this.preferredColor=o,this.preferredStyle=s.toLowerCase(),this.preferredWidth=c,this._readStylusPanel.style.display="none",n.forEach(h=>{h.style.display="flex"})}catch{this._readStylusPanel.style.display="flex",n.forEach(s=>{s.style.display="none"}),i&&this._emitErrorToast("Could not read the customizations from the stylus.")}});vt(this,"_showStylusCustomizationsDrawer",async e=>{this._readStylusCustomizations(e,!1),this._drawer.show()});this._currentLineStyle="pencil",this._currentLineColor="#000000",this._currentLineWidth=1,this._preferredWidth=1,this._preferredColor="#000000",this._preferredStyle="pencil",this._drawWithCustomizations=!1,gm("my-icons",{resolver:e=>`icons/${e}.svg`,mutator:e=>e.setAttribute("fill","currentColor")})}static get properties(){return{currentLineStyle:{type:String,reflectToAttribute:!0,attribute:!0},currentLineColor:{type:String,reflectToAttribute:!0,attribute:!0},currentLineWidth:{type:Number,reflectToAttribute:!0,attribute:!0},preferredStyle:{type:String,reflectToAttribute:!0,attribute:!0},preferredColor:{type:String,reflectToAttribute:!0,attribute:!0},preferredWidth:{type:Number,reflectToAttribute:!0,attribute:!0},drawWithCustomizations:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}firstUpdated(){this._colorPicker=this.shadowRoot.querySelector("#color-picker"),this._drawer=this.shadowRoot.querySelector("#drawer"),this._lineWidthRange=this.shadowRoot.querySelector("#line-width-range"),this._penCustomizationsButton=this.shadowRoot.querySelector("#pen-customizations-button"),this._customizationsSwitch=this.shadowRoot.querySelector("#draw-customizations-switch"),fp()?console.log("Pen Customizations are supported."):(console.log("Pen Customizations are not supported."),this._penCustomizationsButton.style.display="none"),this._readStylusPanel=this.shadowRoot.querySelector("#read-stylus-panel")}_styleSelected(e,i){switch(this.currentLineStyle=e,e){case"ink":this.currentLineWidth=6;break;case"pencil":this.currentLineWidth=1;break;case"marker":this.currentLineWidth=12;break;case"highlighter":this.currentLineWidth=24,this.currentLineColor="#FFFF00";break;case"brush":this.currentLineWidth=14;break;default:console.log("Unsupported pen style ",e)}this._drawWithCustomizations&&(this.preferredStyle!=this.currentLineStyle&&this._writePreferredStyle(i,!1),this._updateLineColorCustomization(i,!1),this._updateLineWidthCustomization(i,!1))}_colorSelected(e){this.currentLineColor=this._colorPicker.value.toUpperCase(),this._pendingWriteEvent&&this._updateLineColorCustomization(this._pendingWriteEvent,!1)}_savePointerEventToWrite(e){this._pendingWriteEvent=e}_clearPointerEventToWrite(){this._pendingWriteEvent=null,this._drawWithCustomizations&&(this.currentLineColor=this.preferredColor)}set currentLineColor(e){let i=this._currentLineColor;this._currentLineColor=e,this._colorPicker.value!=e&&(this._colorPicker.value=e);let n=new CustomEvent("lineColor-changed",{detail:{lineColor:e},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("currentLineColor",i)}get currentLineColor(){return this._currentLineColor}set currentLineStyle(e){let i=this._currentLineStyle;this._currentLineStyle=e;let n=new CustomEvent("lineStyle-changed",{detail:{lineStyle:e},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("currentLineStyle",i)}get currentLineStyle(){return this._currentLineStyle}set currentLineWidth(e){let i=this._currentLineWidth;this._currentLineWidth=e,this._lineWidthRange.value=e;let n=new CustomEvent("lineWidth-changed",{detail:{lineWidth:e},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("currentLineWidth",i)}get currentLineWidth(){return this._currentLineWidth}set preferredColor(e){let i=this._preferredColor;this._preferredColor=e;let n=new CustomEvent("preferredColor-changed",{detail:{preferredColor:e},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("preferredColor",i)}get preferredColor(){return this._preferredColor}set preferredStyle(e){let i=this._preferredStyle;this._preferredStyle=e;let n=new CustomEvent("preferredStyle-changed",{detail:{preferredStyle:e},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("preferredStyle",i)}get preferredStyle(){return this._preferredStyle}set preferredWidth(e){let i=this._preferredWidth;this._preferredWidth=e;let n=new CustomEvent("preferredWidth-changed",{detail:{preferredWidth:e},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("preferredWidth",i)}get preferredWidth(){return this._preferredWidth}set drawWithCustomizations(e){let i=this._drawWithCustomizations;this._drawWithCustomizations=e;let n=new CustomEvent("drawWithCustomizations-changed",{detail:{drawWithCustomizations:e},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("drawWithCustomizations",i)}get drawWithCustomizations(){return this._drawWithCustomizations}_lineWidthChanged(){this.currentLineWidth=this._lineWidthRange.value,this._drawWithCustomizations&&this._pendingWriteEvent&&this._updateLineWidthCustomization(this._pendingWriteEvent,!1)}_escapeHtml(e){const i=document.createElement("div");return i.textContent=e,i.innerHTML}_createToastNotification(e,i="success",n="check2-circle",o=4e3){const s=Object.assign(document.createElement("sl-alert"),{variant:i,closable:!0,duration:o,innerHTML:`
                <sl-icon name="${n}" slot="icon"></sl-icon>
                ${this._escapeHtml(e)}
            `});return this.shadowRoot.append(s),s.toast()}_emitSuccessToast(e){this._createToastNotification(e)}_emitWarningToast(e){this._createToastNotification(e,"warning","exclamation-triangle")}_emitErrorToast(e){this._createToastNotification(e,"danger","exclamation-octagon")}_drawWithCustomizationsSwitchChanged(){this.drawWithCustomizations=this._customizationsSwitch.checked,this.drawWithCustomizations&&(this.currentLineColor=this.preferredColor,this.currentLineStyle=this.preferredStyle,this.currentLineWidth=this.preferredWidth)}render(){return ve`
            <div class="content">
                <drawing-button name="pencil" label="pencil"
                    ?selected="${this.currentLineStyle==="pencil"}"
                    @pointerdown="${e=>this._styleSelected("pencil",e)}">
                </drawing-button>
                <drawing-button name="pen" label="pen"
                    ?selected="${this.currentLineStyle==="ink"}"
                    @pointerdown="${e=>this._styleSelected("ink",e)}">
                </drawing-button>
                <drawing-button name="brush" label="brush"
                    ?selected="${this.currentLineStyle==="brush"}"
                    @pointerdown="${e=>this._styleSelected("brush",e)}">
                </drawing-button>
                <drawing-button name="marker" library="my-icons"
                    ?selected="${this.currentLineStyle==="marker"}"
                    @pointerdown="${e=>this._styleSelected("marker",e)}">
                </drawing-button>
                <drawing-button library="my-icons" name="highlighter"
                    ?selected="${this.currentLineStyle==="highlighter"}"
                    @pointerdown="${e=>this._styleSelected("highlighter",e)}">
                </drawing-button>
                <sl-color-picker
                    id="color-picker"
                    format="hex" size="small" label="Select a color" value="#000000"
                    @sl-change="${()=>this._colorSelected()}"
                    @pointerdown="${e=>this._savePointerEventToWrite(e)}"
                    @pointerup="${()=>this._clearPointerEventToWrite()}">
                </sl-color-picker>
                <sl-dropdown placement="right-start" distance=10>
                    <drawing-button slot="trigger" caret class="line-width-button" 
                            name="border-width" label="drawing line width">
                    </drawing-button>
                    <div class="line-width-panel">
                        <div class="line-width-title"> Drawing Line Width</div>
                        <sl-range id="line-width-range" min="1" max="50" 
                            @sl-change="${()=>this._lineWidthChanged()}"
                            @pointerdown="${e=>this._savePointerEventToWrite(e)}"
                            @pointerup="${()=>this._clearPointerEventToWrite()}">
                        </sl-range>
                        Current width: ${this.currentLineWidth} px
                    </div>
                </sl-dropdown>
                <div class="expand"></div>
                <drawing-button id="pen-customizations-button"
                    library="my-icons" name="pen_customizations"
                    @pointerdown="${e=>this._showStylusCustomizationsDrawer(e)}">
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
                                            @pointerdown="${e=>this._readStylusCustomizations(e,!0)}"></sl-icon>
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
        `}}vt(xp,"styles",qe`
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
    `);customElements.define("drawing-toolbar",xp);var Ha=function(r,t){return Ha=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])},Ha(r,t)};function Ty(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Ha(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Bi=function(){return Bi=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++){e=arguments[i];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},Bi.apply(this,arguments)};function Wt(r,t,e,i){var n=arguments.length,o=n<3?t:i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var c=r.length-1;c>=0;c--)(s=r[c])&&(o=(n<3?s(o):n>3?s(t,e,o):s(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Iy=r=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(r,t):((e,i)=>{const{kind:n,elements:o}=i;return{kind:n,elements:o,finisher(s){customElements.define(e,s)}}})(r,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ry=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function Ae(r){return(t,e)=>e!==void 0?((i,n,o)=>{n.constructor.createProperty(o,i)})(r,t,e):Ry(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oy=({finisher:r,descriptor:t})=>(e,i)=>{var n;if(i===void 0){const o=(n=e.originalKey)!==null&&n!==void 0?n:e.key,s=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(e.key)}:{...e,key:o};return r!=null&&(s.finisher=function(c){r(c,o)}),s}{const o=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),r==null||r(o,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Sr(r,t){return Oy({descriptor:e=>({get(){var n,o;return(o=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(r))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Aa;((Aa=window.HTMLSlotElement)===null||Aa===void 0?void 0:Aa.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(()=>{var r,t,e;const i=Symbol(),n=Symbol(),o=Symbol(),s=Symbol(),c=Symbol(),h=Symbol(),l=Symbol(),u=Symbol(),a=Symbol(),d=Symbol(),p=Symbol(),f=Symbol(),v=Symbol();class b{constructor(){this[r]=[],this[t]=[],this[e]=new Set}destructor(){this[a](this[o]);const y=this;y[i]=null,y[o]=null,y[n]=null}get top(){const y=this[i];return y[y.length-1]||null}push(y){!y||y===this.top||(this.remove(y),this[h](y),this[i].push(y))}remove(y){const E=this[i].indexOf(y);return E===-1?!1:(this[i].splice(E,1),E===this[i].length&&this[h](this.top),!0)}pop(){const y=this.top;return y&&this.remove(y),y}has(y){return this[i].indexOf(y)!==-1}[(r=i,t=o,e=n,h)](y){const E=this[n],k=this[o];if(!y){this[a](k),E.clear(),this[o]=[];return}const P=this[d](y);if(P[P.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[o]=P;const I=this[p](y);if(!k.length){this[u](P,I,E);return}let O=k.length-1,N=P.length-1;for(;O>0&&N>0&&k[O]===P[N];)O--,N--;k[O]!==P[N]&&this[l](k[O],P[N]),O>0&&this[a](k.slice(0,O)),N>0&&this[u](P.slice(0,N),I,null)}[l](y,E){const k=y[s];this[f](y)&&!y.inert&&(y.inert=!0,k.add(y)),k.has(E)&&(E.inert=!1,k.delete(E)),E[c]=y[c],E[s]=k,y[c]=void 0,y[s]=void 0}[a](y){for(const E of y){E[c].disconnect(),E[c]=void 0;const P=E[s];for(const I of P)I.inert=!1;E[s]=void 0}}[u](y,E,k){for(const P of y){const I=P.parentNode,O=I.children,N=new Set;for(let F=0;F<O.length;F++){const V=O[F];V===P||!this[f](V)||E&&E.has(V)||(k&&V.inert?k.add(V):(V.inert=!0,N.add(V)))}P[s]=N;const U=new MutationObserver(this[v].bind(this));P[c]=U;let z=I;const W=z;W.__shady&&W.host&&(z=W.host),U.observe(z,{childList:!0})}}[v](y){const E=this[o],k=this[n];for(const P of y){const I=P.target.host||P.target,O=I===document.body?E.length:E.indexOf(I),N=E[O-1],U=N[s];for(let z=0;z<P.removedNodes.length;z++){const W=P.removedNodes[z];if(W===N){console.info("Detected removal of the top Blocking Element."),this.pop();return}U.has(W)&&(W.inert=!1,U.delete(W))}for(let z=0;z<P.addedNodes.length;z++){const W=P.addedNodes[z];this[f](W)&&(k&&W.inert?k.add(W):(W.inert=!0,U.add(W)))}}}[f](y){return/^(style|template|script)$/.test(y.localName)===!1}[d](y){const E=[];let k=y;for(;k&&k!==document.body;){if(k.nodeType===Node.ELEMENT_NODE&&E.push(k),k.assignedSlot){for(;k=k.assignedSlot;)E.push(k);k=E.pop();continue}k=k.parentNode||k.host}return E}[p](y){const E=y.shadowRoot;if(!E)return null;const k=new Set;let P,I,O;const N=E.querySelectorAll("slot");if(N.length&&N[0].assignedNodes)for(P=0;P<N.length;P++)for(O=N[P].assignedNodes({flatten:!0}),I=0;I<O.length;I++)O[I].nodeType===Node.ELEMENT_NODE&&k.add(O[I]);return k}}document.$blockingElements=new b})();var uh={},hh;function Ly(){if(hh)return uh;hh=1;var r=function(){function e(i,n){for(var o=0;o<n.length;o++){var s=n[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}return function(i,n,o){return n&&e(i.prototype,n),o&&e(i,o),i}}();function t(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}return function(){if(typeof window>"u")return;var e=Array.prototype.slice,i=Element.prototype.matches||Element.prototype.msMatchesSelector,n=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),o=function(){function a(d,p){t(this,a),this._inertManager=p,this._rootElement=d,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return r(a,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(this._savedAriaHidden!==null?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach(function(p){this._unmanageNode(p.node)},this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(p){var f=this;h(p,function(y){return f._visitNode(y)});var v=document.activeElement;if(!document.body.contains(p)){for(var b=p,S=void 0;b;){if(b.nodeType===Node.DOCUMENT_FRAGMENT_NODE){S=b;break}b=b.parentNode}S&&(v=S.activeElement)}p.contains(v)&&(v.blur(),v===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(p){if(p.nodeType===Node.ELEMENT_NODE){var f=p;f!==this._rootElement&&f.hasAttribute("inert")&&this._adoptInertRoot(f),(i.call(f,n)||f.hasAttribute("tabindex"))&&this._manageNode(f)}}},{key:"_manageNode",value:function(p){var f=this._inertManager.register(p,this);this._managedNodes.add(f)}},{key:"_unmanageNode",value:function(p){var f=this._inertManager.deregister(p,this);f&&this._managedNodes.delete(f)}},{key:"_unmanageSubtree",value:function(p){var f=this;h(p,function(v){return f._unmanageNode(v)})}},{key:"_adoptInertRoot",value:function(p){var f=this._inertManager.getInertRoot(p);f||(this._inertManager.setInert(p,!0),f=this._inertManager.getInertRoot(p)),f.managedNodes.forEach(function(v){this._manageNode(v.node)},this)}},{key:"_onMutation",value:function(p,f){p.forEach(function(v){var b=v.target;if(v.type==="childList")e.call(v.addedNodes).forEach(function(y){this._makeSubtreeUnfocusable(y)},this),e.call(v.removedNodes).forEach(function(y){this._unmanageSubtree(y)},this);else if(v.type==="attributes"){if(v.attributeName==="tabindex")this._manageNode(b);else if(b!==this._rootElement&&v.attributeName==="inert"&&b.hasAttribute("inert")){this._adoptInertRoot(b);var S=this._inertManager.getInertRoot(b);this._managedNodes.forEach(function(y){b.contains(y.node)&&S._manageNode(y.node)})}}},this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return this._savedAriaHidden!==null}},{key:"savedAriaHidden",set:function(p){this._savedAriaHidden=p},get:function(){return this._savedAriaHidden}}]),a}(),s=function(){function a(d,p){t(this,a),this._node=d,this._overrodeFocusMethod=!1,this._inertRoots=new Set([p]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}return r(a,[{key:"destructor",value:function(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){var p=this._node;this._savedTabIndex!==null?p.setAttribute("tabindex",this._savedTabIndex):p.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete p.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){if(this.node.nodeType===Node.ELEMENT_NODE){var p=this.node;if(i.call(p,n)){if(p.tabIndex===-1&&this.hasSavedTabIndex)return;p.hasAttribute("tabindex")&&(this._savedTabIndex=p.tabIndex),p.setAttribute("tabindex","-1"),p.nodeType===Node.ELEMENT_NODE&&(p.focus=function(){},this._overrodeFocusMethod=!0)}else p.hasAttribute("tabindex")&&(this._savedTabIndex=p.tabIndex,p.removeAttribute("tabindex"))}}},{key:"addInertRoot",value:function(p){this._throwIfDestroyed(),this._inertRoots.add(p)}},{key:"removeInertRoot",value:function(p){this._throwIfDestroyed(),this._inertRoots.delete(p),this._inertRoots.size===0&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return this._savedTabIndex!==null}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(p){this._throwIfDestroyed(),this._savedTabIndex=p},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),a}(),c=function(){function a(d){if(t(this,a),!d)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=d,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),l(d.head||d.body||d.documentElement),d.readyState==="loading"?d.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return r(a,[{key:"setInert",value:function(p,f){if(f){if(this._inertRoots.has(p))return;var v=new o(p,this);if(p.setAttribute("inert",""),this._inertRoots.set(p,v),!this._document.body.contains(p))for(var b=p.parentNode;b;)b.nodeType===11&&l(b),b=b.parentNode}else{if(!this._inertRoots.has(p))return;var S=this._inertRoots.get(p);S.destructor(),this._inertRoots.delete(p),p.removeAttribute("inert")}}},{key:"getInertRoot",value:function(p){return this._inertRoots.get(p)}},{key:"register",value:function(p,f){var v=this._managedNodes.get(p);return v!==void 0?v.addInertRoot(f):v=new s(p,f),this._managedNodes.set(p,v),v}},{key:"deregister",value:function(p,f){var v=this._managedNodes.get(p);return v?(v.removeInertRoot(f),v.destroyed&&this._managedNodes.delete(p),v):null}},{key:"_onDocumentLoaded",value:function(){var p=e.call(this._document.querySelectorAll("[inert]"));p.forEach(function(f){this.setInert(f,!0)},this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(p,f){var v=this;p.forEach(function(b){switch(b.type){case"childList":e.call(b.addedNodes).forEach(function(E){if(E.nodeType===Node.ELEMENT_NODE){var k=e.call(E.querySelectorAll("[inert]"));i.call(E,"[inert]")&&k.unshift(E),k.forEach(function(P){this.setInert(P,!0)},v)}},v);break;case"attributes":if(b.attributeName!=="inert")return;var S=b.target,y=S.hasAttribute("inert");v.setInert(S,y);break}},this)}}]),a}();function h(a,d,p){if(a.nodeType==Node.ELEMENT_NODE){var f=a;d&&d(f);var v=f.shadowRoot;if(v){h(v,d);return}if(f.localName=="content"){for(var b=f,S=b.getDistributedNodes?b.getDistributedNodes():[],y=0;y<S.length;y++)h(S[y],d);return}if(f.localName=="slot"){for(var E=f,k=E.assignedNodes?E.assignedNodes({flatten:!0}):[],P=0;P<k.length;P++)h(k[P],d);return}}for(var I=a.firstChild;I!=null;)h(I,d),I=I.nextSibling}function l(a){if(!a.querySelector("style#inert-style, link#inert-style")){var d=document.createElement("style");d.setAttribute("id","inert-style"),d.textContent=`
[inert] {
  pointer-events: none;
  cursor: default;
}

[inert], [inert] * {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`,a.appendChild(d)}}if(!HTMLElement.prototype.hasOwnProperty("inert")){var u=new c(document);Object.defineProperty(HTMLElement.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(d){u.setInert(this,d)}})}}(),uh}Ly();/**
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
 */var ht={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},Wr={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},ka={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var My=function(){function r(){this.rafIDs=new Map}return r.prototype.request=function(t,e){var i=this;this.cancel(t);var n=requestAnimationFrame(function(o){i.rafIDs.delete(t),e(o)});this.rafIDs.set(t,n)},r.prototype.cancel=function(t){var e=this.rafIDs.get(t);e&&(cancelAnimationFrame(e),this.rafIDs.delete(t))},r.prototype.cancelAll=function(){var t=this;this.rafIDs.forEach(function(e,i){t.cancel(i)})},r.prototype.getQueue=function(){var t=[];return this.rafIDs.forEach(function(e,i){t.push(i)}),t},r}();/**
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
 */var Ny=function(){function r(t){t===void 0&&(t={}),this.adapter=t}return Object.defineProperty(r,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),r.prototype.init=function(){},r.prototype.destroy=function(){},r}();/**
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
 */var Hi;(function(r){r.POLL_SCROLL_POS="poll_scroll_position",r.POLL_LAYOUT_CHANGE="poll_layout_change"})(Hi||(Hi={}));var zy=function(r){Ty(t,r);function t(e){var i=r.call(this,Bi(Bi({},t.defaultAdapter),e))||this;return i.dialogOpen=!1,i.isFullscreen=!1,i.animationFrame=0,i.animationTimer=0,i.escapeKeyAction=Wr.CLOSE_ACTION,i.scrimClickAction=Wr.CLOSE_ACTION,i.autoStackButtons=!0,i.areButtonsStacked=!1,i.suppressDefaultPressSelector=Wr.SUPPRESS_DEFAULT_PRESS_SELECTOR,i.animFrame=new My,i.contentScrollHandler=function(){i.handleScrollEvent()},i.windowResizeHandler=function(){i.layout()},i.windowOrientationChangeHandler=function(){i.layout()},i}return Object.defineProperty(t,"cssClasses",{get:function(){return ht},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Wr},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return ka},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.hasClass(ht.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(ht.FULLSCREEN)},t.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},t.prototype.open=function(e){var i=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(ht.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),e&&e.isAboveFullscreenDialog&&this.adapter.addClass(ht.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame(function(){i.adapter.addClass(ht.OPEN),i.adapter.addBodyClass(ht.SCROLL_LOCK),i.layout(),i.animationTimer=setTimeout(function(){i.handleAnimationTimerEnd(),i.adapter.trapFocus(i.adapter.getInitialFocusEl()),i.adapter.notifyOpened()},ka.DIALOG_ANIMATION_OPEN_TIME_MS)})},t.prototype.close=function(e){var i=this;e===void 0&&(e=""),this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(e),this.adapter.addClass(ht.CLOSING),this.adapter.removeClass(ht.OPEN),this.adapter.removeBodyClass(ht.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){i.adapter.releaseFocus(),i.handleAnimationTimerEnd(),i.adapter.notifyClosed(e)},ka.DIALOG_ANIMATION_CLOSE_TIME_MS))},t.prototype.showSurfaceScrim=function(){var e=this;this.adapter.addClass(ht.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame(function(){e.adapter.addClass(ht.SURFACE_SCRIM_SHOWN)})},t.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(ht.SURFACE_SCRIM_SHOWN),this.adapter.addClass(ht.SURFACE_SCRIM_HIDING)},t.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(ht.SURFACE_SCRIM_HIDING),this.adapter.removeClass(ht.SURFACE_SCRIM_SHOWING)},t.prototype.isOpen=function(){return this.dialogOpen},t.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},t.prototype.setEscapeKeyAction=function(e){this.escapeKeyAction=e},t.prototype.getScrimClickAction=function(){return this.scrimClickAction},t.prototype.setScrimClickAction=function(e){this.scrimClickAction=e},t.prototype.getAutoStackButtons=function(){return this.autoStackButtons},t.prototype.setAutoStackButtons=function(e){this.autoStackButtons=e},t.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},t.prototype.setSuppressDefaultPressSelector=function(e){this.suppressDefaultPressSelector=e},t.prototype.layout=function(){var e=this;this.animFrame.request(Hi.POLL_LAYOUT_CHANGE,function(){e.layoutInternal()})},t.prototype.handleClick=function(e){var i=this.adapter.eventTargetMatches(e.target,Wr.SCRIM_SELECTOR);if(i&&this.scrimClickAction!=="")this.close(this.scrimClickAction);else{var n=this.adapter.getActionFromEvent(e);n&&this.close(n)}},t.prototype.handleKeydown=function(e){var i=e.key==="Enter"||e.keyCode===13;if(i){var n=this.adapter.getActionFromEvent(e);if(!n){var o=e.composedPath?e.composedPath()[0]:e.target,s=this.suppressDefaultPressSelector?!this.adapter.eventTargetMatches(o,this.suppressDefaultPressSelector):!0;i&&s&&this.adapter.clickDefaultButton()}}},t.prototype.handleDocumentKeydown=function(e){var i=e.key==="Escape"||e.keyCode===27;i&&this.escapeKeyAction!==""&&this.close(this.escapeKeyAction)},t.prototype.handleScrollEvent=function(){var e=this;this.animFrame.request(Hi.POLL_SCROLL_POS,function(){e.toggleScrollDividerHeader(),e.toggleScrollDividerFooter()})},t.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},t.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(ht.OPENING),this.adapter.removeClass(ht.CLOSING)},t.prototype.runNextAnimationFrame=function(e){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(e,0)})},t.prototype.detectStackedButtons=function(){this.adapter.removeClass(ht.STACKED);var e=this.adapter.areButtonsStacked();e&&this.adapter.addClass(ht.STACKED),e!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=e)},t.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(ht.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(ht.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},t.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(ht.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(ht.SCROLL_DIVIDER_HEADER):this.adapter.addClass(ht.SCROLL_DIVIDER_HEADER)},t.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(ht.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(ht.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(ht.SCROLL_DIVIDER_FOOTER)},t}(Ny);/**
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
 */function Ai(r){return r===void 0&&(r=window),Dy(r)?{passive:!0}:!1}function Dy(r){r===void 0&&(r=window);var t=!1;try{var e={get passive(){return t=!0,!1}},i=function(){};r.document.addEventListener("test",i,e),r.document.removeEventListener("test",i,e)}catch{t=!1}return t}/**
 * @license
 * Copyright 2018 Google Inc.
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
 */function qy(r,t){if(r.closest)return r.closest(t);for(var e=r;e;){if(Sp(e,t))return e;e=e.parentElement}return null}function Sp(r,t){var e=r.matches||r.webkitMatchesSelector||r.msMatchesSelector;return e.call(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Uy(r){return{addClass:t=>{r.classList.add(t)},removeClass:t=>{r.classList.remove(t)},hasClass:t=>r.classList.contains(t)}}const Cp=()=>{},Wy={get passive(){return!1}};document.addEventListener("x",Cp,Wy);document.removeEventListener("x",Cp);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Fy extends ae{click(){if(this.mdcRoot){this.mdcRoot.focus(),this.mdcRoot.click();return}super.click()}createFoundation(){this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const an=r=>(t,e)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const i=t.constructor._observers;t.constructor._observers=new Map,i.forEach((n,o)=>t.constructor._observers.set(o,n))}}else{t.constructor._observers=new Map;const i=t.updated;t.updated=function(n){i.call(this,n),n.forEach((o,s)=>{const h=this.constructor._observers.get(s);h!==void 0&&h.call(this,this[s],o)})}}t.constructor._observers.set(e,r)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vy={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},By=r=>(...t)=>({_$litDirective$:r,values:t});class Hy{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ph=By(class extends Hy{constructor(r){var t;if(super(r),r.type!==Vy.ATTRIBUTE||r.name!=="class"||((t=r.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var e,i;if(this.it===void 0){this.it=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((e=this.nt)===null||e===void 0)&&e.has(o))&&this.it.add(o);return this.render(t)}const n=r.element.classList;this.it.forEach(o=>{o in t||(n.remove(o),this.it.delete(o))});for(const o in t){const s=!!t[o];s===this.it.has(o)||!((i=this.nt)===null||i===void 0)&&i.has(o)||(s?(n.add(o),this.it.add(o)):(n.remove(o),this.it.delete(o)))}return tr}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $a=document.$blockingElements;class Ft extends Fy{constructor(){super(...arguments),this.hideActions=!1,this.stacked=!1,this.heading="",this.scrimClickAction="close",this.escapeKeyAction="close",this.open=!1,this.defaultAction="close",this.actionAttribute="dialogAction",this.initialFocusAttribute="dialogInitialFocus",this.initialSupressDefaultPressSelector="",this.mdcFoundationClass=zy,this.boundHandleClick=null,this.boundHandleKeydown=null,this.boundHandleDocumentKeydown=null}set suppressDefaultPressSelector(t){this.mdcFoundation?this.mdcFoundation.setSuppressDefaultPressSelector(t):this.initialSupressDefaultPressSelector=t}get suppressDefaultPressSelector(){return this.mdcFoundation?this.mdcFoundation.getSuppressDefaultPressSelector():this.initialSupressDefaultPressSelector}get primaryButton(){let t=this.primarySlot.assignedNodes();t=t.filter(i=>i instanceof HTMLElement);const e=t[0];return e||null}emitNotification(t,e){const i={detail:e?{action:e}:{}},n=new CustomEvent(t,i);this.dispatchEvent(n)}getInitialFocusEl(){const t=`[${this.initialFocusAttribute}]`,e=this.querySelector(t);if(e)return e;const n=this.primarySlot.assignedNodes({flatten:!0}),o=this.searchNodeTreesForAttribute(n,this.initialFocusAttribute);if(o)return o;const c=this.secondarySlot.assignedNodes({flatten:!0}),h=this.searchNodeTreesForAttribute(c,this.initialFocusAttribute);if(h)return h;const u=this.contentSlot.assignedNodes({flatten:!0});return this.searchNodeTreesForAttribute(u,this.initialFocusAttribute)}searchNodeTreesForAttribute(t,e){for(const i of t)if(i instanceof HTMLElement){if(i.hasAttribute(e))return i;{const n=i.querySelector(`[${e}]`);if(n)return n}}return null}createAdapter(){return Object.assign(Object.assign({},Uy(this.mdcRoot)),{addBodyClass:()=>document.body.style.overflow="hidden",removeBodyClass:()=>document.body.style.overflow="",areButtonsStacked:()=>this.stacked,clickDefaultButton:()=>{const t=this.primaryButton;t&&t.click()},eventTargetMatches:(t,e)=>t?Sp(t,e):!1,getActionFromEvent:t=>{if(!t.target)return"";const e=qy(t.target,`[${this.actionAttribute}]`);return e&&e.getAttribute(this.actionAttribute)},getInitialFocusEl:()=>this.getInitialFocusEl(),isContentScrollable:()=>{const t=this.contentElement;return t?t.scrollHeight>t.offsetHeight:!1},notifyClosed:t=>this.emitNotification("closed",t),notifyClosing:t=>{this.closingDueToDisconnect||(this.open=!1),this.emitNotification("closing",t)},notifyOpened:()=>this.emitNotification("opened"),notifyOpening:()=>{this.open=!0,this.emitNotification("opening")},reverseButtons:()=>{},releaseFocus:()=>{$a.remove(this)},trapFocus:t=>{this.isConnected&&($a.push(this),t&&t.focus())},registerContentEventHandler:(t,e)=>{this.contentElement.addEventListener(t,e)},deregisterContentEventHandler:(t,e)=>{this.contentElement.removeEventListener(t,e)},isScrollableContentAtTop:()=>{const t=this.contentElement;return t?t.scrollTop===0:!1},isScrollableContentAtBottom:()=>{const t=this.contentElement;return t?Math.ceil(t.scrollHeight-t.scrollTop)===t.clientHeight:!1},registerWindowEventHandler:(t,e)=>{window.addEventListener(t,e,Ai())},deregisterWindowEventHandler:(t,e)=>{window.removeEventListener(t,e,Ai())}})}render(){const t={[ht.STACKED]:this.stacked};let e=ve``;this.heading&&(e=this.renderHeading());const i={"mdc-dialog__actions":!this.hideActions};return ve`
    <div class="mdc-dialog ${ph(t)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${e}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${ph(i)}">
            <span>
              <slot name="secondaryAction"></slot>
            </span>
            <span>
             <slot name="primaryAction"></slot>
            </span>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`}renderHeading(){return ve`
      <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`}firstUpdated(){super.firstUpdated(),this.mdcFoundation.setAutoStackButtons(!0),this.initialSupressDefaultPressSelector?this.suppressDefaultPressSelector=this.initialSupressDefaultPressSelector:this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,"mwc-textarea","mwc-menu mwc-list-item","mwc-select mwc-list-item"].join(", "),this.boundHandleClick=this.mdcFoundation.handleClick.bind(this.mdcFoundation),this.boundHandleKeydown=this.mdcFoundation.handleKeydown.bind(this.mdcFoundation),this.boundHandleDocumentKeydown=this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation)}connectedCallback(){super.connectedCallback(),this.open&&this.mdcFoundation&&!this.mdcFoundation.isOpen()&&(this.setEventListeners(),this.mdcFoundation.open())}disconnectedCallback(){super.disconnectedCallback(),this.open&&this.mdcFoundation&&(this.removeEventListeners(),this.closingDueToDisconnect=!0,this.mdcFoundation.close(this.currentAction||this.defaultAction),this.closingDueToDisconnect=!1,this.currentAction=void 0,$a.remove(this))}forceLayout(){this.mdcFoundation.layout()}focus(){const t=this.getInitialFocusEl();t&&t.focus()}blur(){if(!this.shadowRoot)return;const t=this.shadowRoot.activeElement;if(t)t instanceof HTMLElement&&t.blur();else{const e=this.getRootNode(),i=e instanceof Document?e.activeElement:null;i instanceof HTMLElement&&i.blur()}}setEventListeners(){this.boundHandleClick&&this.mdcRoot.addEventListener("click",this.boundHandleClick),this.boundHandleKeydown&&this.mdcRoot.addEventListener("keydown",this.boundHandleKeydown,Ai()),this.boundHandleDocumentKeydown&&document.addEventListener("keydown",this.boundHandleDocumentKeydown,Ai())}removeEventListeners(){this.boundHandleClick&&this.mdcRoot.removeEventListener("click",this.boundHandleClick),this.boundHandleKeydown&&this.mdcRoot.removeEventListener("keydown",this.boundHandleKeydown),this.boundHandleDocumentKeydown&&document.removeEventListener("keydown",this.boundHandleDocumentKeydown)}close(){this.open=!1}show(){this.open=!0}}Wt([Sr(".mdc-dialog")],Ft.prototype,"mdcRoot",void 0);Wt([Sr('slot[name="primaryAction"]')],Ft.prototype,"primarySlot",void 0);Wt([Sr('slot[name="secondaryAction"]')],Ft.prototype,"secondarySlot",void 0);Wt([Sr("#contentSlot")],Ft.prototype,"contentSlot",void 0);Wt([Sr(".mdc-dialog__content")],Ft.prototype,"contentElement",void 0);Wt([Sr(".mdc-container")],Ft.prototype,"conatinerElement",void 0);Wt([Ae({type:Boolean})],Ft.prototype,"hideActions",void 0);Wt([Ae({type:Boolean}),an(function(){this.forceLayout()})],Ft.prototype,"stacked",void 0);Wt([Ae({type:String})],Ft.prototype,"heading",void 0);Wt([Ae({type:String}),an(function(r){this.mdcFoundation.setScrimClickAction(r)})],Ft.prototype,"scrimClickAction",void 0);Wt([Ae({type:String}),an(function(r){this.mdcFoundation.setEscapeKeyAction(r)})],Ft.prototype,"escapeKeyAction",void 0);Wt([Ae({type:Boolean,reflect:!0}),an(function(r){this.mdcFoundation&&this.isConnected&&(r?(this.setEventListeners(),this.mdcFoundation.open()):(this.removeEventListeners(),this.mdcFoundation.close(this.currentAction||this.defaultAction),this.currentAction=void 0))})],Ft.prototype,"open",void 0);Wt([Ae()],Ft.prototype,"defaultAction",void 0);Wt([Ae()],Ft.prototype,"actionAttribute",void 0);Wt([Ae()],Ft.prototype,"initialFocusAttribute",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const jy=qe`.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__surface{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12)}.mdc-dialog__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(max-width: 600px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid transparent;display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){margin-left:0;margin-right:8px}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:.000000001px;margin-top:12px}`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ja=class extends Ft{};ja.styles=[jy];ja=Wt([Iy("mwc-dialog")],ja);class Ep extends ae{static get properties(){return{firmwareVersion:{type:String,reflectToAttribute:!0,attribute:!0},preferredColor:{type:String,reflectToAttribute:!0,attribute:!0},preferredWidth:{type:Number,reflectToAttribute:!0,attribute:!0},productId:{type:String,reflectToAttribute:!0,attribute:!0},protocolVersion:{type:String,reflectToAttribute:!0,attribute:!0},style:{type:String,reflectToAttribute:!0,attribute:!0},vendorId:{type:String,reflectToAttribute:!0,attribute:!0}}}set firmwareVersion(t){let e=this._firmwareVersion;this._firmwareVersion=t,this.requestUpdate("firmwareVersion",e)}get firmwareVersion(){return this._firmwareVersion}set preferredColor(t){let e=this.preferredColor;this._preferredColor=t,this.requestUpdate("preferredColor",e)}get preferredColor(){return this._preferredColor}set preferredWidth(t){let e=this._preferredWidth;this._preferredWidth=t,this.requestUpdate("preferredWidth",e)}get preferredWidth(){return this._preferredWidth}set productId(t){let e=this._productId;this._productId=t,this.requestUpdate("productId",e)}get productId(){return this._productId}set protocolVersion(t){let e=this._protocolVersion;this._protocolVersion=t,this.requestUpdate("protocolVersion",e)}get protocolVersion(){return this._protocolVersion}set style(t){let e=this._style;this._style=t,this.requestUpdate("style",e)}get style(){return this._style}set vendorId(t){let e=this._vendorId;this._vendorId=t,this.requestUpdate("vendorId",e)}get vendorId(){return this._vendorId}constructor(){super()}show(t){t&&(this.vendorId=t.firmware.vendorId,this.productId=t.firmware.productId,this.firmwareVersion=t.firmware.firmwareVersion,this.protocolVersion=t.protocol.protocolVersion,this.preferredColor=t.preferredColor,this.preferredWidth=t.preferredWidth,this.style=t.style,this.shadowRoot.getElementById("usi-mwc-dialog").show())}render(){return ve`
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
  </mwc-dialog>`}}vt(Ep,"styles",qe`
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
  `);customElements.define("usi-dialog",Ep);Da("/tiny-canvas/");class Ap extends ae{constructor(){super();vt(this,"_deleteAllPaths",async e=>{this._mainCanvas.deleteAllPaths()});vt(this,"_onDragStart",async e=>{this._initialX=e.x-this._xOffset,this._initialY=e.y-this._yOffset,e.target===this._infoPanel&&(this._dragActive=!0)});vt(this,"_onDrag",async e=>{this._dragActive&&(e.preventDefault(),this._currentX=e.clientX-this._initialX,this._currentY=e.clientY-this._initialY,this._xOffset=this._currentX,this._yOffset=this._currentY,this._infoPanel.style.transform="translate3d("+this._currentX+"px, "+this._currentY+"px, 0)")});vt(this,"_onDragEnd",async e=>{this._initialX=this._currentX,this._initialY=this._currentY,this._dragActive=!1});this._renderingType=null,this._rafId=null,this._dragActive=!1,this._currentX=0,this._currentY=0,this._initialX=0,this._initialY=0,this._xOffset=0,this._yOffset=0,this._defaultIdleTimeout=50,this._currentEvent=null,this._previousEvent=null,this._pointerLatencySamples=new Pb(60)}set currentEvent(e){this._previousEvent=this._currentEvent,this._currentEvent=e,this._isIdle=!1,clearTimeout(this._idleTimer),this._idleTimer=setTimeout(this._onIdle.bind(this),this._defaultIdleTimeout)}get currentEvent(){return this._currentEvent}firstUpdated(){const e=this.shadowRoot.querySelector("#settings-button"),i=this.shadowRoot.querySelector("#settings-dialog");e.addEventListener("click",()=>i.show()),this._swAlert=this.shadowRoot.querySelector("#sw-alert"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new uf("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()}),this._switchRenderingType("js-canvas",!0),this._usiDialog=this.shadowRoot.querySelector("#usi-dialog"),this._infoButton=this.shadowRoot.querySelector("#info-button"),this._infoButton.onpointerdown=this._toggleInfoPanel.bind(this),this._undoButton=this.shadowRoot.querySelector("#undo-button"),this._undoButton.onpointerdown=this._undoPath.bind(this),this._redoButton=this.shadowRoot.querySelector("#redo-button"),this._redoButton.onpointerdown=this._redoPath.bind(this),this._deleteButton=this.shadowRoot.querySelector("#delete-button"),this._deleteButton.onpointerdown=this._deleteAllPaths.bind(this),this._undoButton.disabled=!0,this._redoButton.disabled=!0,this._infoPanel=this.shadowRoot.querySelector("#info-panel"),this._infoPanel.style.visibility="hidden",this._infoPanel.onpointerdown=this._onDragStart.bind(this),this._infoPanel.onpointermove=this._onDrag.bind(this),this._infoPanel.onpointerup=this._onDragEnd.bind(this),this._toolbar=this.shadowRoot.querySelector("#toolbar")}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&Ra(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}_toggleInfoPanel(){this._infoPanel.style.visibility==="hidden"?(this._infoPanel.style.visibility="visible",this._rafId=window.requestAnimationFrame(this._onFrame.bind(this))):(this._infoPanel.style.visibility="hidden",this._rafId&&(window.cancelAnimationFrame(this._rafId),this._rafId=null))}_undoPath(){this._mainCanvas.undoPath()}_redoPath(){this._mainCanvas.redoPath()}_onFrame(e){if(!this._isIdle&&this._currentEvent){let i=performance.now()-this._currentEvent.timeStamp;this._pointerLatencySamples.push(i),this._updateInfoPanel(this._currentEvent)}this._rafId=window.requestAnimationFrame(this._onFrame.bind(this))}_onIdle(){this._isIdle=!0,this._pointerLatencySamples.clear()}_updateInfoPanel(e){if(this._infoPanel.eventType=e.type,this._infoPanel.pointerType=e.pointerType,this._infoPanel.pointerId=e.pointerId,this._infoPanel.isPrimary=e.isPrimary,this._infoPanel.width=e.width,this._infoPanel.height=e.height,this._infoPanel.positionX=this._roundDecimal(e.x,4),this._infoPanel.positionY=this._roundDecimal(e.y,4),typeof e.penCustomizationsDetails<"u")try{e.penCustomizationsDetails.getPreferredInkingColor().then(i=>{this._infoPanel.preferredColor=i}),e.penCustomizationsDetails.getPreferredInkingStyle().then(i=>{this._infoPanel.preferredStyle=i}),e.penCustomizationsDetails.getPreferredInkingWidth().then(i=>{this._infoPanel.preferredWidth=i})}catch{this._infoPanel.preferredColor=this._infoPanel.preferredWidth=this._infoPanel.preferredWidth="unavailable"}this._infoPanel.pressure=this._roundDecimal(e.pressure,4),this._infoPanel.tangentialPressure=this._roundDecimal(e.tangentialPressure,4),this._infoPanel.tiltX=this._roundDecimal(e.tiltX,4),this._infoPanel.tiltY=this._roundDecimal(e.tiltY,4),this._infoPanel.twist=this._roundDecimal(e.twist,4),this._infoPanel.avgLatency=this._pointerLatencySamples.avg().toFixed(1)}_roundDecimal(e,i){const n=Math.pow(10,i);return Math.round(e*n)/n}_switchRenderingType(e,i){if(this._renderingType===e&&this._mainCanvas._desynchronized===i)return;let n=document.createElement(e);this._mainCanvas&&(n.currentLineColor=this._mainCanvas.currentLineColor,n.currentLineStye=this._mainCanvas.currentLineStyle,n.currentLineWidth=this._mainCanvas.currentLineWidth,n.drawCoalescedEvents=this._mainCanvas.drawCoalescedEvents,n.drawPointsOnly=this._mainCanvas.drawPointsOnly,n.drawPredictedEvents=this._mainCanvas.drawPredictedEvents,n.drawWithCustomizations=this._mainCanvas.drawWithCustomizations,n.drawWithPressure=this._mainCanvas.drawWithPressure,n.highlightPredictedEvents=this._mainCanvas.highlightPredictedEvents,n.numOfPredictionPoints=this._mainCanvas.numOfPredictionPoints,n.pointerRawUpdate=this._mainCanvas.pointerRawUpdate,this._mainCanvas.remove()),this._mainCanvas=n,this._mainCanvas.app=this,this._mainCanvas.desynchronized=i,this._renderingType=e,this.shadowRoot.getElementById("main-canvas").appendChild(n)}_renderingTypeChanged(e){this._switchRenderingType(e.detail.renderingType,this._mainCanvas._desynchronized)}_desynchronizedEnabledChanged(e){this._renderingType&&this._mainCanvas._desynchronized!==e.detail.desynchronizedEnabled&&this._switchRenderingType(this._renderingType,e.detail.desynchronizedEnabled)}_lineColorChanged(e){this._mainCanvas.currentLineColor=e.detail.lineColor}_lineStyleChanged(e){this._mainCanvas.currentLineStyle=e.detail.lineStyle}_lineWidthChanged(e){this._mainCanvas.currentLineWidth=e.detail.lineWidth}_drawWithCustomizationsChanged(e){this._mainCanvas.drawWithCustomizations=e.detail.drawWithCustomizations}_pointerRawUpdateEnabledChanged(e){this._mainCanvas.pointerRawUpdate=e.detail.pointerRawUpdateEnabled}_pressureEventsEnabledChanged(e){this._mainCanvas.drawWithPressure=e.detail.pressureEventsEnabled}_predictedEventsEnabledChanged(e){this._mainCanvas.drawPredictedEvents=e.detail.predictedEventsEnabled}_predictedEventsHighlightEnabledChanged(e){this._mainCanvas.highlightPredictedEvents=e.detail.predictedEventsHighlightEnabled}_predictionTypeChanged(e){this._mainCanvas.predictionType=e.detail.predictionType}_numOfPredictionPointsChanged(e){this._mainCanvas.numOfPredictionPoints=e.detail.numOfPredictionPoints}_coalescedEventsEnabledChanged(e){this._mainCanvas.drawCoalescedEvents=e.detail.coalescedEventsEnabled}_drawPointsOnlyEnabledChanged(e){this._mainCanvas.drawPointsOnly=e.detail.drawPointsOnlyEnabled}_usiInfoDialogPressed(e){this._usiDialog.show(e.detail.usiInfo)}_pathsChanged(e){let i=e.detail.paths;i.length===0?(this._undoButton.disabled=!0,this._redoButton.disabled=!0,this._redoButton.closest("sl-tooltip").disabled=!0,this._undoButton.closest("sl-tooltip").disabled=!0):(this._undoButton.disabled=!i[0].display,this._redoButton.disabled=!!i[i.length-1].display,this._undoButton.closest("sl-tooltip").disabled=this._undoButton.disabled,this._redoButton.closest("sl-tooltip").disabled=this._redoButton.disabled)}_customizationsChanged(e){this._toolbar.currentLineColor=e.detail.currentPreferredColor,this._toolbar.currentLineStyle=e.detail.currentPreferredStyle,this._toolbar.currentLineWidth=e.detail.currentPreferredWidth}render(){return ve`
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
            id="toolbar"
            @lineColor-changed=${this._lineColorChanged}
            @lineStyle-changed=${this._lineStyleChanged}
            @lineWidth-changed=${this._lineWidthChanged}
            @drawWithCustomizations-changed=${this._drawWithCustomizationsChanged}>
          </drawing-toolbar>
          <main-canvas id="main-canvas" @paths-changed="${this._pathsChanged}" @customizations-changed="${this._customizationsChanged}"></main-canvas>
        </div>
    </div>
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
    </div>`}}vt(Ap,"styles",qe`
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
      z-index: 5;
    }

    .text-sw {
      padding-bottom: 10px;
    }

    .reload {
      margin-left: 5px;
    }
  `);customElements.define("main-application",Ap);
