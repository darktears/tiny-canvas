var ru=Object.defineProperty;var iu=(e,t,r)=>t in e?ru(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var gt=(e,t,r)=>(iu(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=window,Ls=yi.ShadowRoot&&(yi.ShadyCSS===void 0||yi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rs=Symbol(),pa=new WeakMap;class Fc{constructor(t,r,i){if(this._$cssResult$=!0,i!==Rs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ls&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=pa.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&pa.set(r,t))}return t}toString(){return this.cssText}}const nu=e=>new Fc(typeof e=="string"?e:e+"",void 0,Rs),Ne=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,o)=>i+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new Fc(r,e,Rs)},ou=(e,t)=>{Ls?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const i=document.createElement("style"),n=yi.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)})},fa=Ls?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return nu(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mn;const xi=window,ga=xi.trustedTypes,su=ga?ga.emptyScript:"",va=xi.reactiveElementPolyfillSupport,gs={toAttribute(e,t){switch(t){case Boolean:e=e?su:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Vc=(e,t)=>t!==e&&(t==t||e==e),bn={attribute:!0,type:String,converter:gs,reflect:!1,hasChanged:Vc};class ir extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,i)=>{const n=this._$Ep(i,r);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,r=bn){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){return{get(){return this[r]},set(n){const o=this[t];this[r]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||bn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,i=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const n of i)this.createProperty(n,r[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(fa(n))}else t!==void 0&&r.push(fa(t));return r}static _$Ep(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,i;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ou(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostConnected)===null||i===void 0?void 0:i.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostDisconnected)===null||i===void 0?void 0:i.call(r)})}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$EO(t,r,i=bn){var n;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const l=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:gs).toAttribute(r,i.type);this._$El=t,l==null?this.removeAttribute(o):this.setAttribute(o,l),this._$El=null}}_$AK(t,r){var i;const n=this.constructor,o=n._$Ev.get(t);if(o!==void 0&&this._$El!==o){const l=n.getPropertyOptions(o),c=typeof l.converter=="function"?{fromAttribute:l.converter}:((i=l.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?l.converter:gs;this._$El=o,this[o]=c.fromAttribute(r,l.type),this._$El=null}}requestUpdate(t,r,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Vc)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,o)=>this[o]=n),this._$Ei=void 0);let r=!1;const i=this._$AL;try{r=this.shouldUpdate(i),r?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var o;return(o=n.hostUpdate)===null||o===void 0?void 0:o.call(n)}),this.update(i)):this._$Ek()}catch(n){throw r=!1,this._$Ek(),n}r&&this._$AE(i)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,i)=>this._$EO(i,this[i],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}ir.finalized=!0,ir.elementProperties=new Map,ir.elementStyles=[],ir.shadowRootOptions={mode:"open"},va==null||va({ReactiveElement:ir}),((mn=xi.reactiveElementVersions)!==null&&mn!==void 0?mn:xi.reactiveElementVersions=[]).push("1.4.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yn;const Si=window,lr=Si.trustedTypes,ma=lr?lr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Le=`lit$${(Math.random()+"").slice(9)}$`,Bc="?"+Le,au=`<${Bc}>`,cr=document,Fr=(e="")=>cr.createComment(e),Vr=e=>e===null||typeof e!="object"&&typeof e!="function",Hc=Array.isArray,lu=e=>Hc(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Cr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ba=/-->/g,ya=/>/g,Be=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_a=/'/g,wa=/"/g,jc=/^(?:script|style|textarea|title)$/i,cu=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ae=cu(1),Xe=Symbol.for("lit-noChange"),$t=Symbol.for("lit-nothing"),xa=new WeakMap,sr=cr.createTreeWalker(cr,129,null,!1),du=(e,t)=>{const r=e.length-1,i=[];let n,o=t===2?"<svg>":"",l=Cr;for(let h=0;h<r;h++){const a=e[h];let d,s,u=-1,v=0;for(;v<a.length&&(l.lastIndex=v,s=l.exec(a),s!==null);)v=l.lastIndex,l===Cr?s[1]==="!--"?l=ba:s[1]!==void 0?l=ya:s[2]!==void 0?(jc.test(s[2])&&(n=RegExp("</"+s[2],"g")),l=Be):s[3]!==void 0&&(l=Be):l===Be?s[0]===">"?(l=n!=null?n:Cr,u=-1):s[1]===void 0?u=-2:(u=l.lastIndex-s[2].length,d=s[1],l=s[3]===void 0?Be:s[3]==='"'?wa:_a):l===wa||l===_a?l=Be:l===ba||l===ya?l=Cr:(l=Be,n=void 0);const g=l===Be&&e[h+1].startsWith("/>")?" ":"";o+=l===Cr?a+au:u>=0?(i.push(d),a.slice(0,u)+"$lit$"+a.slice(u)+Le+g):a+Le+(u===-2?(i.push(void 0),h):g)}const c=o+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ma!==void 0?ma.createHTML(c):c,i]};class Br{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let o=0,l=0;const c=t.length-1,h=this.parts,[a,d]=du(t,r);if(this.el=Br.createElement(a,i),sr.currentNode=this.el.content,r===2){const s=this.el.content,u=s.firstChild;u.remove(),s.append(...u.childNodes)}for(;(n=sr.nextNode())!==null&&h.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const s=[];for(const u of n.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(Le)){const v=d[l++];if(s.push(u),v!==void 0){const g=n.getAttribute(v.toLowerCase()+"$lit$").split(Le),y=/([.?@])?(.*)/.exec(v);h.push({type:1,index:o,name:y[2],strings:g,ctor:y[1]==="."?hu:y[1]==="?"?fu:y[1]==="@"?gu:Ni})}else h.push({type:6,index:o})}for(const u of s)n.removeAttribute(u)}if(jc.test(n.tagName)){const s=n.textContent.split(Le),u=s.length-1;if(u>0){n.textContent=lr?lr.emptyScript:"";for(let v=0;v<u;v++)n.append(s[v],Fr()),sr.nextNode(),h.push({type:2,index:++o});n.append(s[u],Fr())}}}else if(n.nodeType===8)if(n.data===Bc)h.push({type:2,index:o});else{let s=-1;for(;(s=n.data.indexOf(Le,s+1))!==-1;)h.push({type:7,index:o}),s+=Le.length-1}o++}}static createElement(t,r){const i=cr.createElement("template");return i.innerHTML=t,i}}function dr(e,t,r=e,i){var n,o,l,c;if(t===Xe)return t;let h=i!==void 0?(n=r._$Co)===null||n===void 0?void 0:n[i]:r._$Cl;const a=Vr(t)?void 0:t._$litDirective$;return(h==null?void 0:h.constructor)!==a&&((o=h==null?void 0:h._$AO)===null||o===void 0||o.call(h,!1),a===void 0?h=void 0:(h=new a(e),h._$AT(e,r,i)),i!==void 0?((l=(c=r)._$Co)!==null&&l!==void 0?l:c._$Co=[])[i]=h:r._$Cl=h),h!==void 0&&(t=dr(e,h._$AS(e,t.values),h,i)),t}class uu{constructor(t,r){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var r;const{el:{content:i},parts:n}=this._$AD,o=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:cr).importNode(i,!0);sr.currentNode=o;let l=sr.nextNode(),c=0,h=0,a=n[0];for(;a!==void 0;){if(c===a.index){let d;a.type===2?d=new Yr(l,l.nextSibling,this,t):a.type===1?d=new a.ctor(l,a.name,a.strings,this,t):a.type===6&&(d=new vu(l,this,t)),this.u.push(d),a=n[++h]}c!==(a==null?void 0:a.index)&&(l=sr.nextNode(),c++)}return o}p(t){let r=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class Yr{constructor(t,r,i,n){var o;this.type=2,this._$AH=$t,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cm=(o=n==null?void 0:n.isConnected)===null||o===void 0||o}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=dr(this,t,r),Vr(t)?t===$t||t==null||t===""?(this._$AH!==$t&&this._$AR(),this._$AH=$t):t!==this._$AH&&t!==Xe&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):lu(t)?this.k(t):this.g(t)}O(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==$t&&Vr(this._$AH)?this._$AA.nextSibling.data=t:this.T(cr.createTextNode(t)),this._$AH=t}$(t){var r;const{values:i,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Br.createElement(n.h,this.options)),n);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===o)this._$AH.p(i);else{const l=new uu(o,this),c=l.v(this.options);l.p(i),this.T(c),this._$AH=l}}_$AC(t){let r=xa.get(t.strings);return r===void 0&&xa.set(t.strings,r=new Br(t)),r}k(t){Hc(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const o of t)n===r.length?r.push(i=new Yr(this.O(Fr()),this.O(Fr()),this,this.options)):i=r[n],i._$AI(o),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var r;this._$AM===void 0&&(this._$Cm=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class Ni{constructor(t,r,i,n,o){this.type=1,this._$AH=$t,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$t}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,i,n){const o=this.strings;let l=!1;if(o===void 0)t=dr(this,t,r,0),l=!Vr(t)||t!==this._$AH&&t!==Xe,l&&(this._$AH=t);else{const c=t;let h,a;for(t=o[0],h=0;h<o.length-1;h++)a=dr(this,c[i+h],r,h),a===Xe&&(a=this._$AH[h]),l||(l=!Vr(a)||a!==this._$AH[h]),a===$t?t=$t:t!==$t&&(t+=(a!=null?a:"")+o[h+1]),this._$AH[h]=a}l&&!n&&this.j(t)}j(t){t===$t?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class hu extends Ni{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$t?void 0:t}}const pu=lr?lr.emptyScript:"";class fu extends Ni{constructor(){super(...arguments),this.type=4}j(t){t&&t!==$t?this.element.setAttribute(this.name,pu):this.element.removeAttribute(this.name)}}class gu extends Ni{constructor(t,r,i,n,o){super(t,r,i,n,o),this.type=5}_$AI(t,r=this){var i;if((t=(i=dr(this,t,r,0))!==null&&i!==void 0?i:$t)===Xe)return;const n=this._$AH,o=t===$t&&n!==$t||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,l=t!==$t&&(n===$t||o);o&&this.element.removeEventListener(this.name,this,n),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,i;typeof this._$AH=="function"?this._$AH.call((i=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class vu{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){dr(this,t)}}const Sa=Si.litHtmlPolyfillSupport;Sa==null||Sa(Br,Yr),((yn=Si.litHtmlVersions)!==null&&yn!==void 0?yn:Si.litHtmlVersions=[]).push("2.4.0");const mu=(e,t,r)=>{var i,n;const o=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:t;let l=o._$litPart$;if(l===void 0){const c=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;o._$litPart$=l=new Yr(t.insertBefore(Fr(),c),c,void 0,r!=null?r:{})}return l._$AI(e),l};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _n,wn;class ee extends ir{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const i=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=i.firstChild),i}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=mu(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Xe}}ee.finalized=!0,ee._$litElement$=!0,(_n=globalThis.litElementHydrateSupport)===null||_n===void 0||_n.call(globalThis,{LitElement:ee});const Ea=globalThis.litElementPolyfillSupport;Ea==null||Ea({LitElement:ee});((wn=globalThis.litElementVersions)!==null&&wn!==void 0?wn:globalThis.litElementVersions=[]).push("3.2.2");try{self["workbox:window:6.5.3"]&&_()}catch{}function vs(e,t){return new Promise(function(r){var i=new MessageChannel;i.port1.onmessage=function(n){r(n.data)},e.postMessage(t,[i.port2])})}function bu(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Aa(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function yu(e,t){var r;if(typeof Symbol>"u"||e[Symbol.iterator]==null){if(Array.isArray(e)||(r=function(n,o){if(n){if(typeof n=="string")return Aa(n,o);var l=Object.prototype.toString.call(n).slice(8,-1);return l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set"?Array.from(n):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?Aa(n,o):void 0}}(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(r=e[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.5.3"]&&_()}catch{}var xn=function(){var e=this;this.promise=new Promise(function(t,r){e.resolve=t,e.reject=r})};function Sn(e,t){var r=location.href;return new URL(e,r).href===new URL(t,r).href}var kr=function(e,t){this.type=e,Object.assign(this,t)};function ui(e,t,r){return r?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function _u(){}var wu={type:"SKIP_WAITING"};function Ca(e,t){if(!t)return e&&e.then?e.then(_u):Promise.resolve()}var xu=function(e){var t,r;function i(c,h){var a,d;return h===void 0&&(h={}),(a=e.call(this)||this).nn={},a.tn=0,a.rn=new xn,a.en=new xn,a.on=new xn,a.un=0,a.an=new Set,a.cn=function(){var s=a.fn,u=s.installing;a.tn>0||!Sn(u.scriptURL,a.sn.toString())||performance.now()>a.un+6e4?(a.vn=u,s.removeEventListener("updatefound",a.cn)):(a.hn=u,a.an.add(u),a.rn.resolve(u)),++a.tn,u.addEventListener("statechange",a.ln)},a.ln=function(s){var u=a.fn,v=s.target,g=v.state,y=v===a.vn,w={sw:v,isExternal:y,originalEvent:s};!y&&a.mn&&(w.isUpdate=!0),a.dispatchEvent(new kr(g,w)),g==="installed"?a.wn=self.setTimeout(function(){g==="installed"&&u.waiting===v&&a.dispatchEvent(new kr("waiting",w))},200):g==="activating"&&(clearTimeout(a.wn),y||a.en.resolve(v))},a.dn=function(s){var u=a.hn,v=u!==navigator.serviceWorker.controller;a.dispatchEvent(new kr("controlling",{isExternal:v,originalEvent:s,sw:u,isUpdate:a.mn})),v||a.on.resolve(u)},a.gn=(d=function(s){var u=s.data,v=s.ports,g=s.source;return ui(a.getSW(),function(){a.an.has(g)&&a.dispatchEvent(new kr("message",{data:u,originalEvent:s,ports:v,sw:g}))})},function(){for(var s=[],u=0;u<arguments.length;u++)s[u]=arguments[u];try{return Promise.resolve(d.apply(this,s))}catch(v){return Promise.reject(v)}}),a.sn=c,a.nn=h,navigator.serviceWorker.addEventListener("message",a.gn),a}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var n,o,l=i.prototype;return l.register=function(c){var h=(c===void 0?{}:c).immediate,a=h!==void 0&&h;try{var d=this;return function(s,u){var v=s();return v&&v.then?v.then(u):u(v)}(function(){if(!a&&document.readyState!=="complete")return Ca(new Promise(function(s){return window.addEventListener("load",s)}))},function(){return d.mn=Boolean(navigator.serviceWorker.controller),d.yn=d.pn(),ui(d.bn(),function(s){d.fn=s,d.yn&&(d.hn=d.yn,d.en.resolve(d.yn),d.on.resolve(d.yn),d.yn.addEventListener("statechange",d.ln,{once:!0}));var u=d.fn.waiting;return u&&Sn(u.scriptURL,d.sn.toString())&&(d.hn=u,Promise.resolve().then(function(){d.dispatchEvent(new kr("waiting",{sw:u,wasWaitingBeforeRegister:!0}))}).then(function(){})),d.hn&&(d.rn.resolve(d.hn),d.an.add(d.hn)),d.fn.addEventListener("updatefound",d.cn),navigator.serviceWorker.addEventListener("controllerchange",d.dn),d.fn})})}catch(s){return Promise.reject(s)}},l.update=function(){try{return this.fn?Ca(this.fn.update()):void 0}catch(c){return Promise.reject(c)}},l.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},l.messageSW=function(c){try{return ui(this.getSW(),function(h){return vs(h,c)})}catch(h){return Promise.reject(h)}},l.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&vs(this.fn.waiting,wu)},l.pn=function(){var c=navigator.serviceWorker.controller;return c&&Sn(c.scriptURL,this.sn.toString())?c:void 0},l.bn=function(){try{var c=this;return function(h,a){try{var d=h()}catch(s){return a(s)}return d&&d.then?d.then(void 0,a):d}(function(){return ui(navigator.serviceWorker.register(c.sn,c.nn),function(h){return c.un=performance.now(),h})},function(h){throw h})}catch(h){return Promise.reject(h)}},n=i,(o=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&bu(n.prototype,o),i}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(r,i){this.Sn(r).add(i)},t.removeEventListener=function(r,i){this.Sn(r).delete(i)},t.dispatchEvent=function(r){r.target=this;for(var i,n=yu(this.Sn(r.type));!(i=n()).done;)(0,i.value)(r)},t.Sn=function(r){return this.Pn.has(r)||this.Pn.set(r,new Set),this.Pn.get(r)},e}());var _i=window,Os=_i.ShadowRoot&&(_i.ShadyCSS===void 0||_i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ms=Symbol(),ka=new WeakMap,Kc=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Ms)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Os&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=ka.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ka.set(t,e))}return e}toString(){return this.cssText}},Su=e=>new Kc(typeof e=="string"?e:e+"",void 0,Ms),lt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,o)=>i+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new Kc(r,e,Ms)},Eu=(e,t)=>{Os?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const i=document.createElement("style"),n=_i.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)})},$a=Os?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Su(r)})(e):e,En,Ei=window,Pa=Ei.trustedTypes,Au=Pa?Pa.emptyScript:"",Ta=Ei.reactiveElementPolyfillSupport,Hr={toAttribute(e,t){switch(t){case Boolean:e=e?Au:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Xc=(e,t)=>t!==e&&(t==t||e==e),An={attribute:!0,type:String,converter:Hr,reflect:!1,hasChanged:Xc},nr=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const i=this._$Ep(r,t);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,t=An){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||An}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of r)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift($a(i))}else e!==void 0&&t.push($a(e));return t}static _$Ep(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Eu(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=An){var i;const n=this.constructor._$Ep(e,r);if(n!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Hr).toAttribute(t,r.type);this._$El=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(e,t){var r;const i=this.constructor,n=i._$Ev.get(e);if(n!==void 0&&this._$El!==n){const o=i.getPropertyOptions(n),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Hr;this._$El=n,this[n]=l.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Xc)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(r)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};nr.finalized=!0,nr.elementProperties=new Map,nr.elementStyles=[],nr.shadowRootOptions={mode:"open"},Ta==null||Ta({ReactiveElement:nr}),((En=Ei.reactiveElementVersions)!==null&&En!==void 0?En:Ei.reactiveElementVersions=[]).push("1.4.2");var Cn,Ai=window,ur=Ai.trustedTypes,Ia=ur?ur.createPolicy("lit-html",{createHTML:e=>e}):void 0,Re=`lit$${(Math.random()+"").slice(9)}$`,Gc="?"+Re,Cu=`<${Gc}>`,hr=document,jr=(e="")=>hr.createComment(e),Kr=e=>e===null||typeof e!="object"&&typeof e!="function",Yc=Array.isArray,ku=e=>Yc(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",$r=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,La=/-->/g,Ra=/>/g,He=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oa=/'/g,Ma=/"/g,Zc=/^(?:script|style|textarea|title)$/i,$u=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),j=$u(1),Kt=Symbol.for("lit-noChange"),St=Symbol.for("lit-nothing"),za=new WeakMap,ar=hr.createTreeWalker(hr,129,null,!1),Pu=(e,t)=>{const r=e.length-1,i=[];let n,o=t===2?"<svg>":"",l=$r;for(let h=0;h<r;h++){const a=e[h];let d,s,u=-1,v=0;for(;v<a.length&&(l.lastIndex=v,s=l.exec(a),s!==null);)v=l.lastIndex,l===$r?s[1]==="!--"?l=La:s[1]!==void 0?l=Ra:s[2]!==void 0?(Zc.test(s[2])&&(n=RegExp("</"+s[2],"g")),l=He):s[3]!==void 0&&(l=He):l===He?s[0]===">"?(l=n!=null?n:$r,u=-1):s[1]===void 0?u=-2:(u=l.lastIndex-s[2].length,d=s[1],l=s[3]===void 0?He:s[3]==='"'?Ma:Oa):l===Ma||l===Oa?l=He:l===La||l===Ra?l=$r:(l=He,n=void 0);const g=l===He&&e[h+1].startsWith("/>")?" ":"";o+=l===$r?a+Cu:u>=0?(i.push(d),a.slice(0,u)+"$lit$"+a.slice(u)+Re+g):a+Re+(u===-2?(i.push(void 0),h):g)}const c=o+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ia!==void 0?Ia.createHTML(c):c,i]},Ci=class{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,o=0;const l=e.length-1,c=this.parts,[h,a]=Pu(e,t);if(this.el=Ci.createElement(h,r),ar.currentNode=this.el.content,t===2){const d=this.el.content,s=d.firstChild;s.remove(),d.append(...s.childNodes)}for(;(i=ar.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const s of i.getAttributeNames())if(s.endsWith("$lit$")||s.startsWith(Re)){const u=a[o++];if(d.push(s),u!==void 0){const v=i.getAttribute(u.toLowerCase()+"$lit$").split(Re),g=/([.?@])?(.*)/.exec(u);c.push({type:1,index:n,name:g[2],strings:v,ctor:g[1]==="."?Iu:g[1]==="?"?Ru:g[1]==="@"?Ou:Ui})}else c.push({type:6,index:n})}for(const s of d)i.removeAttribute(s)}if(Zc.test(i.tagName)){const d=i.textContent.split(Re),s=d.length-1;if(s>0){i.textContent=ur?ur.emptyScript:"";for(let u=0;u<s;u++)i.append(d[u],jr()),ar.nextNode(),c.push({type:2,index:++n});i.append(d[s],jr())}}}else if(i.nodeType===8)if(i.data===Gc)c.push({type:2,index:n});else{let d=-1;for(;(d=i.data.indexOf(Re,d+1))!==-1;)c.push({type:7,index:n}),d+=Re.length-1}n++}}static createElement(e,t){const r=hr.createElement("template");return r.innerHTML=e,r}};function pr(e,t,r=e,i){var n,o,l,c;if(t===Kt)return t;let h=i!==void 0?(n=r._$Co)===null||n===void 0?void 0:n[i]:r._$Cl;const a=Kr(t)?void 0:t._$litDirective$;return(h==null?void 0:h.constructor)!==a&&((o=h==null?void 0:h._$AO)===null||o===void 0||o.call(h,!1),a===void 0?h=void 0:(h=new a(e),h._$AT(e,r,i)),i!==void 0?((l=(c=r)._$Co)!==null&&l!==void 0?l:c._$Co=[])[i]=h:r._$Cl=h),h!==void 0&&(t=pr(e,h._$AS(e,t.values),h,i)),t}var Tu=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:r},parts:i}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:hr).importNode(r,!0);ar.currentNode=n;let o=ar.nextNode(),l=0,c=0,h=i[0];for(;h!==void 0;){if(l===h.index){let a;h.type===2?a=new Di(o,o.nextSibling,this,e):h.type===1?a=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(a=new Mu(o,this,e)),this.u.push(a),h=i[++c]}l!==(h==null?void 0:h.index)&&(o=ar.nextNode(),l++)}return n}p(e){let t=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Di=class{constructor(e,t,r,i){var n;this.type=2,this._$AH=St,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cm=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=pr(this,e,t),Kr(e)?e===St||e==null||e===""?(this._$AH!==St&&this._$AR(),this._$AH=St):e!==this._$AH&&e!==Kt&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ku(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==St&&Kr(this._$AH)?this._$AA.nextSibling.data=e:this.T(hr.createTextNode(e)),this._$AH=e}$(e){var t;const{values:r,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ci.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.p(r);else{const o=new Tu(n,this),l=o.v(this.options);o.p(r),this.T(l),this._$AH=o}}_$AC(e){let t=za.get(e.strings);return t===void 0&&za.set(e.strings,t=new Ci(e)),t}k(e){Yc(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const n of e)i===t.length?t.push(r=new Di(this.O(jr()),this.O(jr()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ui=class{constructor(e,t,r,i,n){this.type=1,this._$AH=St,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=St}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){const n=this.strings;let o=!1;if(n===void 0)e=pr(this,e,t,0),o=!Kr(e)||e!==this._$AH&&e!==Kt,o&&(this._$AH=e);else{const l=e;let c,h;for(e=n[0],c=0;c<n.length-1;c++)h=pr(this,l[r+c],t,c),h===Kt&&(h=this._$AH[c]),o||(o=!Kr(h)||h!==this._$AH[c]),h===St?e=St:e!==St&&(e+=(h!=null?h:"")+n[c+1]),this._$AH[c]=h}o&&!i&&this.j(e)}j(e){e===St?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},Iu=class extends Ui{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===St?void 0:e}},Lu=ur?ur.emptyScript:"",Ru=class extends Ui{constructor(){super(...arguments),this.type=4}j(e){e&&e!==St?this.element.setAttribute(this.name,Lu):this.element.removeAttribute(this.name)}},Ou=class extends Ui{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){var r;if((e=(r=pr(this,e,t,0))!==null&&r!==void 0?r:St)===Kt)return;const i=this._$AH,n=e===St&&i!==St||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==St&&(i===St||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Mu=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){pr(this,e)}},Na=Ai.litHtmlPolyfillSupport;Na==null||Na(Ci,Di),((Cn=Ai.litHtmlVersions)!==null&&Cn!==void 0?Cn:Ai.litHtmlVersions=[]).push("2.4.0");var zu=(e,t,r)=>{var i,n;const o=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:t;let l=o._$litPart$;if(l===void 0){const c=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;o._$litPart$=l=new Di(t.insertBefore(jr(),c),c,void 0,r!=null?r:{})}return l._$AI(e),l},kn,$n,Mr=class extends nr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=zu(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Kt}};Mr.finalized=!0,Mr._$litElement$=!0,(kn=globalThis.litElementHydrateSupport)===null||kn===void 0||kn.call(globalThis,{LitElement:Mr});var Da=globalThis.litElementPolyfillSupport;Da==null||Da({LitElement:Mr});(($n=globalThis.litElementVersions)!==null&&$n!==void 0?$n:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vt=lt`
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
`,Nu=lt`
  ${vt}

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
`;function Ua(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function Qc(e){var t,r;const i=[];function n(c){c instanceof HTMLElement&&(i.push(c),c.shadowRoot!==null&&c.shadowRoot.mode==="open"&&n(c.shadowRoot)),[...c.children].forEach(h=>n(h))}n(e);const o=(t=i.find(c=>Ua(c)))!=null?t:null,l=(r=i.reverse().find(c=>Ua(c)))!=null?r:null;return{start:o,end:l}}var Pr=[],Jc=class{constructor(e){this.tabDirection="forward",this.element=e,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Pr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Pr=Pr.filter(e=>e!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Pr[Pr.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:e,end:t}=Qc(this.element),r=this.tabDirection==="forward"?e:t;typeof(r==null?void 0:r.focus)=="function"&&r.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(e){e.key==="Tab"&&e.shiftKey&&(this.tabDirection="backward",requestAnimationFrame(()=>this.checkFocus()))}handleKeyUp(){this.tabDirection="forward"}};function Du(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var ms=new Set;function zr(e){ms.add(e),document.body.classList.add("sl-scroll-lock")}function Nr(e){ms.delete(e),ms.size===0&&document.body.classList.remove("sl-scroll-lock")}function bs(e,t,r="vertical",i="smooth"){const n=Du(e,t),o=n.top+t.scrollTop,l=n.left+t.scrollLeft,c=t.scrollLeft,h=t.scrollLeft+t.offsetWidth,a=t.scrollTop,d=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(l<c?t.scrollTo({left:l,behavior:i}):l+e.clientWidth>h&&t.scrollTo({left:l-t.offsetWidth+e.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(o<a?t.scrollTo({top:o,behavior:i}):o+e.clientHeight>d&&t.scrollTo({top:o-t.offsetHeight+e.clientHeight,behavior:i}))}function le(e,t){return new Promise(r=>{function i(n){n.target===e&&(e.removeEventListener(t,i),r())}e.addEventListener(t,i)})}var td=Object.defineProperty,Uu=Object.defineProperties,qu=Object.getOwnPropertyDescriptor,Wu=Object.getOwnPropertyDescriptors,ki=Object.getOwnPropertySymbols,ed=Object.prototype.hasOwnProperty,rd=Object.prototype.propertyIsEnumerable,qa=(e,t,r)=>t in e?td(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Et=(e,t)=>{for(var r in t||(t={}))ed.call(t,r)&&qa(e,r,t[r]);if(ki)for(var r of ki(t))rd.call(t,r)&&qa(e,r,t[r]);return e},ce=(e,t)=>Uu(e,Wu(t)),zs=(e,t)=>{var r={};for(var i in e)ed.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&ki)for(var i of ki(e))t.indexOf(i)<0&&rd.call(e,i)&&(r[i]=e[i]);return r},b=(e,t,r,i)=>{for(var n=i>1?void 0:i?qu(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&td(t,r,n),n};function Lt(e,t,r){return new Promise(i=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,ce(Et({},r),{duration:Fu()?0:r.duration}));n.addEventListener("cancel",i,{once:!0}),n.addEventListener("finish",i,{once:!0})})}function Wa(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function Fu(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Vt(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const i=requestAnimationFrame(r);t.addEventListener("cancel",()=>i,{once:!0}),t.addEventListener("finish",()=>i,{once:!0}),t.cancel()})))}var id=new Map,Vu=new WeakMap;function Bu(e){return e!=null?e:{keyframes:[],options:{duration:0}}}function Fa(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function At(e,t){id.set(e,Bu(t))}function Rt(e,t,r){const i=Vu.get(e);if(i!=null&&i[t])return Fa(i[t],r.dir);const n=id.get(t);return n?Fa(n,r.dir):{keyframes:[],options:{duration:0}}}var ys=new Set,Hu=new MutationObserver(sd),or=new Map,nd=document.documentElement.dir||"ltr",od=document.documentElement.lang||navigator.language,Dr;Hu.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function ju(...e){e.map(t=>{const r=t.$code.toLowerCase();or.has(r)?or.set(r,Object.assign(Object.assign({},or.get(r)),t)):or.set(r,t),Dr||(Dr=t)}),sd()}function sd(){nd=document.documentElement.dir||"ltr",od=document.documentElement.lang||navigator.language,[...ys.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Ku=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ys.add(this.host)}hostDisconnected(){ys.delete(this.host)}dir(){return`${this.host.dir||nd}`.toLowerCase()}lang(){return`${this.host.lang||od}`.toLowerCase()}term(e,...t){var r,i;const n=new Intl.Locale(this.lang()),o=n==null?void 0:n.language.toLowerCase(),l=(i=(r=n==null?void 0:n.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&i!==void 0?i:"",c=or.get(`${o}-${l}`),h=or.get(o);let a;if(c&&c[e])a=c[e];else if(h&&h[e])a=h[e];else if(Dr&&Dr[e])a=Dr[e];else return console.error(`No translation found for: ${String(e)}`),e;return typeof a=="function"?a(...t):a}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},Bt=class extends Ku{},Xu={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};ju(Xu);var Ce=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}};function ad(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(r+=i.textContent)}),r}var K=e=>e!=null?e:St;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var we={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qi=e=>(...t)=>({_$litDirective$:e,values:t}),Wi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _t=qi(class extends Wi{constructor(e){var t;if(super(e),e.type!==we.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((r=this.st)===null||r===void 0)&&r.has(o))&&this.nt.add(o);return this.render(t)}const n=e.element.classList;this.nt.forEach(o=>{o in t||(n.remove(o),this.nt.delete(o))});for(const o in t){const l=!!t[o];l===this.nt.has(o)||((i=this.st)===null||i===void 0?void 0:i.has(o))||(l?(n.add(o),this.nt.add(o)):(n.remove(o),this.nt.delete(o)))}return Kt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function X(e,t){const r=Et({waitUntilFirstUpdate:!1},t);return(i,n)=>{const{update:o}=i;if(e in i){const l=e;i.update=function(c){if(c.has(l)){const h=c.get(l),a=this[l];h!==a&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[n](h,a)}o.call(this,c)}}}}var mt=e=>t=>typeof t=="function"?((r,i)=>(customElements.define(r,i),i))(e,t):((r,i)=>{const{kind:n,elements:o}=i;return{kind:n,elements:o,finisher(l){customElements.define(r,l)}}})(e,t),Gu=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?ce(Et({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function C(e){return(t,r)=>r!==void 0?((i,n,o)=>{n.constructor.createProperty(o,i)})(e,t,r):Gu(e,t)}function et(e){return C(ce(Et({},e),{state:!0}))}var Yu=({finisher:e,descriptor:t})=>(r,i)=>{var n;if(i===void 0){const o=(n=r.originalKey)!==null&&n!==void 0?n:r.key,l=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(r.key)}:ce(Et({},r),{key:o});return e!=null&&(l.finisher=function(c){e(c,o)}),l}{const o=r.constructor;t!==void 0&&Object.defineProperty(r,i,t(i)),e==null||e(o,i)}};function Z(e,t){return Yu({descriptor:r=>{const i={get(){var n,o;return(o=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const n=typeof r=="symbol"?Symbol():"__"+r;i.get=function(){var o,l;return this[n]===void 0&&(this[n]=(l=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&l!==void 0?l:null),this[n]}}return i}})}var Pn;((Pn=window.HTMLSlotElement)===null||Pn===void 0?void 0:Pn.prototype.assignedElements)!=null;var ct=class extends Mr{emit(e,t){const r=new CustomEvent(e,Et({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}};b([C()],ct.prototype,"dir",2);b([C()],ct.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Va(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Xt=class extends ct{constructor(){super(...arguments),this.hasSlotController=new Ce(this,"footer"),this.localize=new Bt(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new Jc(this)}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),zr(this)))}disconnectedCallback(){super.disconnectedCallback(),Nr(this)}async show(){if(!this.open)return this.open=!0,le(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,le(this,"sl-after-hide")}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=Rt(this,"drawer.denyClose",{dir:this.localize.dir()});Lt(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(e){this.open&&!this.contained&&e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),zr(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Vt(this.drawer),Vt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Rt(this,`drawer.show${Va(this.placement)}`,{dir:this.localize.dir()}),r=Rt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Lt(this.panel,t.keyframes,t.options),Lt(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Nr(this)),await Promise.all([Vt(this.drawer),Vt(this.overlay)]);const e=Rt(this,`drawer.hide${Va(this.placement)}`,{dir:this.localize.dir()}),t=Rt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Lt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Lt(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),zr(this)),this.open&&this.contained&&(this.modal.deactivate(),Nr(this))}render(){return j`
      <div
        part="base"
        class=${_t({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${K(this.noHeader?this.label:void 0)}
          aria-labelledby=${K(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":j`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
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
    `}};Xt.styles=Nu;b([Z(".drawer")],Xt.prototype,"drawer",2);b([Z(".drawer__panel")],Xt.prototype,"panel",2);b([Z(".drawer__overlay")],Xt.prototype,"overlay",2);b([C({type:Boolean,reflect:!0})],Xt.prototype,"open",2);b([C({reflect:!0})],Xt.prototype,"label",2);b([C({reflect:!0})],Xt.prototype,"placement",2);b([C({type:Boolean,reflect:!0})],Xt.prototype,"contained",2);b([C({attribute:"no-header",type:Boolean,reflect:!0})],Xt.prototype,"noHeader",2);b([X("open",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleOpenChange",1);b([X("contained",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleNoModalChange",1);Xt=b([mt("sl-drawer")],Xt);At("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});At("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});At("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});At("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});At("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});At("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});At("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});At("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});At("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});At("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});At("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Zu=lt`
  ${vt}

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
    transition: var(--sl-transition-medium) color;
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
`,ld=Symbol.for(""),Qu=e=>{if((e==null?void 0:e.r)===ld)return e==null?void 0:e._$litStatic$},$i=(e,...t)=>({_$litStatic$:t.reduce((r,i,n)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[n+1],e[0]),r:ld}),Ba=new Map,Ju=e=>(t,...r)=>{const i=r.length;let n,o;const l=[],c=[];let h,a=0,d=!1;for(;a<i;){for(h=t[a];a<i&&(o=r[a],(n=Qu(o))!==void 0);)h+=n+t[++a],d=!0;c.push(o),l.push(h),a++}if(a===i&&l.push(t[i]),d){const s=l.join("$$lit$$");(t=Ba.get(s))===void 0&&(l.raw=l,Ba.set(s,t=l)),r=c}return e(t,...r)},wi=Ju(j);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gt=class extends ct{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}render(){const e=!!this.href,t=e?$i`a`:$i`button`;return wi`
      <${t}
        part="base"
        class=${_t({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${K(e?void 0:this.disabled)}
        type=${K(e?void 0:"button")}
        href=${K(e?this.href:void 0)}
        target=${K(e?this.target:void 0)}
        download=${K(e?this.download:void 0)}
        rel=${K(e&&this.target?"noreferrer noopener":void 0)}
        role=${K(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${K(this.name)}
          library=${K(this.library)}
          src=${K(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Gt.styles=Zu;b([et()],Gt.prototype,"hasFocus",2);b([Z(".icon-button")],Gt.prototype,"button",2);b([C()],Gt.prototype,"name",2);b([C()],Gt.prototype,"library",2);b([C()],Gt.prototype,"src",2);b([C()],Gt.prototype,"href",2);b([C()],Gt.prototype,"target",2);b([C()],Gt.prototype,"download",2);b([C()],Gt.prototype,"label",2);b([C({type:Boolean,reflect:!0})],Gt.prototype,"disabled",2);Gt=b([mt("sl-icon-button")],Gt);var _s="";function ws(e){_s=e}function th(){if(!_s){const e=[...document.getElementsByTagName("script")],t=e.find(r=>r.hasAttribute("data-shoelace"));if(t)ws(t.getAttribute("data-shoelace"));else{const r=e.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src));let i="";r&&(i=r.getAttribute("src")),ws(i.split("/").slice(0,-1).join("/"))}}return _s.replace(/\/$/,"")}var eh={name:"default",resolver:e=>`${th()}/assets/icons/${e}.svg`},rh=eh,Ha={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
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
  `},ih={name:"system",resolver:e=>e in Ha?`data:image/svg+xml,${encodeURIComponent(Ha[e])}`:""},nh=ih,Pi=[rh,nh],Ti=[];function oh(e){Ti.push(e)}function sh(e){Ti=Ti.filter(t=>t!==e)}function ja(e){return Pi.find(t=>t.name===e)}function ah(e,t){lh(e),Pi.push({name:e,resolver:t.resolver,mutator:t.mutator}),Ti.forEach(r=>{r.library===e&&r.redraw()})}function lh(e){Pi=Pi.filter(t=>t.name!==e)}var Tn=new Map;function ch(e,t="cors"){if(Tn.has(e))return Tn.get(e);const r=fetch(e,{mode:t}).then(async i=>({ok:i.ok,status:i.status,html:await i.text()}));return Tn.set(e,r),r}var In=new Map;async function dh(e){if(In.has(e))return In.get(e);const t=await ch(e),r={ok:t.ok,status:t.status,svg:null};if(t.ok){const i=document.createElement("div");i.innerHTML=t.html;const n=i.firstElementChild;r.svg=(n==null?void 0:n.tagName.toLowerCase())==="svg"?n.outerHTML:""}return In.set(e,r),r}var uh=lt`
  ${vt}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,xs=class extends Wi{constructor(e){if(super(e),this.it=St,e.type!==we.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===St||e==null)return this._t=void 0,this.it=e;if(e===Kt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};xs.directiveName="unsafeHTML",xs.resultType=1;var Ss=class extends xs{};Ss.directiveName="unsafeSVG",Ss.resultType=2;var hh=qi(Ss),Ln,de=class extends ct{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),oh(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),sh(this)}getUrl(){const e=ja(this.library);return this.name&&e?e.resolver(this.name):this.src}redraw(){this.setIcon()}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=ja(this.library),r=this.getUrl();if(Ln||(Ln=new DOMParser),r)try{const i=await dh(r);if(r!==this.getUrl())return;if(i.ok){const o=Ln.parseFromString(i.svg,"text/html").body.querySelector("svg");o!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,o),this.svg=o.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){return j` ${hh(this.svg)} `}};de.styles=uh;b([et()],de.prototype,"svg",2);b([C({reflect:!0})],de.prototype,"name",2);b([C()],de.prototype,"src",2);b([C()],de.prototype,"label",2);b([C({reflect:!0})],de.prototype,"library",2);b([X("label")],de.prototype,"handleLabelChange",1);b([X("name"),X("src"),X("library")],de.prototype,"setIcon",1);de=b([mt("sl-icon")],de);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ph=lt`
  ${vt}

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
    pointer-events: none;
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
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
  }
`,Tt=class extends ct{constructor(){super(...arguments),this.localize=new Bt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.updateComplete.then(()=>{this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)})}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",this.handleBlur,!0),this.removeEventListener("focus",this.handleFocus,!0),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut)}async show(){if(!this.open)return this.open=!0,le(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,le(this,"sl-after-hide")}getTarget(){const e=[...this.children].find(t=>t.tagName.toLowerCase()!=="style"&&t.getAttribute("slot")!=="content");if(!e)throw new Error("Invalid tooltip target: no child element was found.");return e}handleBlur(){this.hasTrigger("focus")&&this.hide()}handleClick(){this.hasTrigger("click")&&(this.open?this.hide():this.show())}handleFocus(){this.hasTrigger("focus")&&this.show()}handleKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide())}handleMouseOver(){if(this.hasTrigger("hover")){const e=Wa(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}}handleMouseOut(){if(this.hasTrigger("hover")){const e=Wa(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await Vt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Rt(this,"tooltip.show",{dir:this.localize.dir()});await Lt(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),await Vt(this.body);const{keyframes:e,options:t}=Rt(this,"tooltip.hide",{dir:this.localize.dir()});await Lt(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}hasTrigger(e){return this.trigger.split(" ").includes(e)}render(){return j`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${_t({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        <slot
          name="content"
          part="body"
          id="tooltip"
          class="tooltip__body"
          role="tooltip"
          aria-live=${this.open?"polite":"off"}
        >
          ${this.content}
        </slot>
      </sl-popup>
    `}};Tt.styles=ph;b([Z("slot:not([name])")],Tt.prototype,"defaultSlot",2);b([Z(".tooltip__body")],Tt.prototype,"body",2);b([Z("sl-popup")],Tt.prototype,"popup",2);b([C()],Tt.prototype,"content",2);b([C()],Tt.prototype,"placement",2);b([C({type:Boolean,reflect:!0})],Tt.prototype,"disabled",2);b([C({type:Number})],Tt.prototype,"distance",2);b([C({type:Boolean,reflect:!0})],Tt.prototype,"open",2);b([C({type:Number})],Tt.prototype,"skidding",2);b([C()],Tt.prototype,"trigger",2);b([C({type:Boolean})],Tt.prototype,"hoist",2);b([X("open",{waitUntilFirstUpdate:!0})],Tt.prototype,"handleOpenChange",1);b([X("content"),X("distance"),X("hoist"),X("placement"),X("skidding")],Tt.prototype,"handleOptionsChange",1);b([X("disabled")],Tt.prototype,"handleDisabledChange",1);Tt=b([mt("sl-tooltip")],Tt);At("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});At("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var fh=lt`
  ${vt}

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
`;function mr(e){return e.split("-")[0]}function Zr(e){return e.split("-")[1]}function Qr(e){return["top","bottom"].includes(mr(e))?"x":"y"}function Ns(e){return e==="y"?"height":"width"}function Ka(e,t,r){let{reference:i,floating:n}=e;const o=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2,c=Qr(t),h=Ns(c),a=i[h]/2-n[h]/2,d=c==="x";let s;switch(mr(t)){case"top":s={x:o,y:i.y-n.height};break;case"bottom":s={x:o,y:i.y+i.height};break;case"right":s={x:i.x+i.width,y:l};break;case"left":s={x:i.x-n.width,y:l};break;default:s={x:i.x,y:i.y}}switch(Zr(t)){case"start":s[c]-=a*(r&&d?-1:1);break;case"end":s[c]+=a*(r&&d?-1:1)}return s}var gh=async(e,t,r)=>{const{placement:i="bottom",strategy:n="absolute",middleware:o=[],platform:l}=r,c=o.filter(Boolean),h=await(l.isRTL==null?void 0:l.isRTL(t));let a=await l.getElementRects({reference:e,floating:t,strategy:n}),{x:d,y:s}=Ka(a,i,h),u=i,v={},g=0;for(let y=0;y<c.length;y++){const{name:w,fn:A}=c[y],{x,y:E,data:$,reset:P}=await A({x:d,y:s,initialPlacement:i,placement:u,strategy:n,middlewareData:v,rects:a,platform:l,elements:{reference:e,floating:t}});d=x!=null?x:d,s=E!=null?E:s,v=ce(Et({},v),{[w]:Et(Et({},v[w]),$)}),P&&g<=50&&(g++,typeof P=="object"&&(P.placement&&(u=P.placement),P.rects&&(a=P.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:n}):P.rects),{x:d,y:s}=Ka(a,u,h)),y=-1)}return{x:d,y:s,placement:u,strategy:n,middlewareData:v}};function cd(e){return typeof e!="number"?function(t){return Et({top:0,right:0,bottom:0,left:0},t)}(e):{top:e,right:e,bottom:e,left:e}}function Ii(e){return ce(Et({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}async function Ds(e,t){var r;t===void 0&&(t={});const{x:i,y:n,platform:o,rects:l,elements:c,strategy:h}=e,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:s="floating",altBoundary:u=!1,padding:v=0}=t,g=cd(v),y=c[u?s==="floating"?"reference":"floating":s],w=Ii(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(y)))==null||r?y:y.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(c.floating)),boundary:a,rootBoundary:d,strategy:h})),A=Ii(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:s==="floating"?ce(Et({},l.floating),{x:i,y:n}):l.reference,offsetParent:await(o.getOffsetParent==null?void 0:o.getOffsetParent(c.floating)),strategy:h}):l[s]);return{top:w.top-A.top+g.top,bottom:A.bottom-w.bottom+g.bottom,left:w.left-A.left+g.left,right:A.right-w.right+g.right}}var vh=Math.min,je=Math.max;function Es(e,t,r){return je(e,vh(t,r))}var mh=e=>({name:"arrow",options:e,async fn(t){const{element:r,padding:i=0}=e!=null?e:{},{x:n,y:o,placement:l,rects:c,platform:h}=t;if(r==null)return{};const a=cd(i),d={x:n,y:o},s=Qr(l),u=Zr(l),v=Ns(s),g=await h.getDimensions(r),y=s==="y"?"top":"left",w=s==="y"?"bottom":"right",A=c.reference[v]+c.reference[s]-d[s]-c.floating[v],x=d[s]-c.reference[s],E=await(h.getOffsetParent==null?void 0:h.getOffsetParent(r));let $=E?s==="y"?E.clientHeight||0:E.clientWidth||0:0;$===0&&($=c.floating[v]);const P=A/2-x/2,L=a[y],M=$-g[v]-a[w],z=$/2-g[v]/2+P,q=Es(L,z,M),N=(u==="start"?a[y]:a[w])>0&&z!==q&&c.reference[v]<=c.floating[v];return{[s]:d[s]-(N?z<L?L-z:M-z:0),data:{[s]:q,centerOffset:z-q}}}}),bh={left:"right",right:"left",bottom:"top",top:"bottom"};function Li(e){return e.replace(/left|right|bottom|top/g,t=>bh[t])}function yh(e,t,r){r===void 0&&(r=!1);const i=Zr(e),n=Qr(e),o=Ns(n);let l=n==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(l=Li(l)),{main:l,cross:Li(l)}}var _h={start:"end",end:"start"};function Xa(e){return e.replace(/start|end/g,t=>_h[t])}var wh=["top","right","bottom","left"];wh.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);var xh=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r;const{placement:i,middlewareData:n,rects:o,initialPlacement:l,platform:c,elements:h}=t,a=e,{mainAxis:d=!0,crossAxis:s=!0,fallbackPlacements:u,fallbackStrategy:v="bestFit",flipAlignment:g=!0}=a,y=zs(a,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),w=mr(i),A=u||(w===l||!g?[Li(l)]:function(q){const N=Li(q);return[Xa(q),N,Xa(N)]}(l)),x=[l,...A],E=await Ds(t,y),$=[];let P=((r=n.flip)==null?void 0:r.overflows)||[];if(d&&$.push(E[w]),s){const{main:q,cross:N}=yh(i,o,await(c.isRTL==null?void 0:c.isRTL(h.floating)));$.push(E[q],E[N])}if(P=[...P,{placement:i,overflows:$}],!$.every(q=>q<=0)){var L,M;const q=((L=(M=n.flip)==null?void 0:M.index)!=null?L:0)+1,N=x[q];if(N)return{data:{index:q,overflows:P},reset:{placement:N}};let W="bottom";switch(v){case"bestFit":{var z;const B=(z=P.map(V=>[V,V.overflows.filter(Q=>Q>0).reduce((Q,J)=>Q+J,0)]).sort((V,Q)=>V[1]-Q[1])[0])==null?void 0:z[0].placement;B&&(W=B);break}case"initialPlacement":W=l}if(i!==W)return{reset:{placement:W}}}return{}}}},Sh=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:r,y:i}=t,n=await async function(o,l){const{placement:c,platform:h,elements:a}=o,d=await(h.isRTL==null?void 0:h.isRTL(a.floating)),s=mr(c),u=Zr(c),v=Qr(c)==="x",g=["left","top"].includes(s)?-1:1,y=d&&v?-1:1,w=typeof l=="function"?l(o):l;let{mainAxis:A,crossAxis:x,alignmentAxis:E}=typeof w=="number"?{mainAxis:w,crossAxis:0,alignmentAxis:null}:Et({mainAxis:0,crossAxis:0,alignmentAxis:null},w);return u&&typeof E=="number"&&(x=u==="end"?-1*E:E),v?{x:x*y,y:A*g}:{x:A*g,y:x*y}}(t,e);return{x:r+n.x,y:i+n.y,data:n}}}};function Eh(e){return e==="x"?"y":"x"}var Ah=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:i,placement:n}=t,o=e,{mainAxis:l=!0,crossAxis:c=!1,limiter:h={fn:A=>{let{x,y:E}=A;return{x,y:E}}}}=o,a=zs(o,["mainAxis","crossAxis","limiter"]),d={x:r,y:i},s=await Ds(t,a),u=Qr(mr(n)),v=Eh(u);let g=d[u],y=d[v];if(l){const A=u==="y"?"bottom":"right";g=Es(g+s[u==="y"?"top":"left"],g,g-s[A])}if(c){const A=v==="y"?"bottom":"right";y=Es(y+s[v==="y"?"top":"left"],y,y-s[A])}const w=h.fn(ce(Et({},t),{[u]:g,[v]:y}));return ce(Et({},w),{data:{x:w.x-r,y:w.y-i}})}}},Ga=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:i,platform:n,elements:o}=t,l=e,{apply:c=()=>{}}=l,h=zs(l,["apply"]),a=await Ds(t,h),d=mr(r),s=Zr(r);let u,v;d==="top"||d==="bottom"?(u=d,v=s===(await(n.isRTL==null?void 0:n.isRTL(o.floating))?"start":"end")?"left":"right"):(v=d,u=s==="end"?"top":"bottom");const g=je(a.left,0),y=je(a.right,0),w=je(a.top,0),A=je(a.bottom,0),x={availableHeight:i.floating.height-(["left","right"].includes(r)?2*(w!==0||A!==0?w+A:je(a.top,a.bottom)):a[u]),availableWidth:i.floating.width-(["top","bottom"].includes(r)?2*(g!==0||y!==0?g+y:je(a.left,a.right)):a[v])};await c(Et(Et({},t),x));const E=await n.getDimensions(o.floating);return i.floating.width!==E.width||i.floating.height!==E.height?{reset:{rects:!0}}:{}}}};function dd(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function ke(e){if(e==null)return window;if(!dd(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function xe(e){return ke(e).getComputedStyle(e)}function ze(e){return dd(e)?"":e?(e.nodeName||"").toLowerCase():""}function ud(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function Se(e){return e instanceof ke(e).HTMLElement}function Ee(e){return e instanceof ke(e).Element}function Ya(e){return typeof ShadowRoot>"u"?!1:e instanceof ke(e).ShadowRoot||e instanceof ShadowRoot}function Fi(e){const{overflow:t,overflowX:r,overflowY:i,display:n}=xe(e);return/auto|scroll|overlay|hidden/.test(t+i+r)&&!["inline","contents"].includes(n)}function Ch(e){return["table","td","th"].includes(ze(e))}function As(e){const t=/firefox/i.test(ud()),r=xe(e),i=r.backdropFilter||r.WebkitBackdropFilter;return r.transform!=="none"||r.perspective!=="none"||!!i&&i!=="none"||t&&r.willChange==="filter"||t&&!!r.filter&&r.filter!=="none"||["transform","perspective"].some(n=>r.willChange.includes(n))||["paint","layout","strict","content"].some(n=>{const o=r.contain;return o!=null&&o.includes(n)})}function hd(){return!/^((?!chrome|android).)*safari/i.test(ud())}function Us(e){return["html","body","#document"].includes(ze(e))}var Za=Math.min,Ur=Math.max,Ri=Math.round;function Ae(e,t,r){var i,n,o,l;t===void 0&&(t=!1),r===void 0&&(r=!1);const c=e.getBoundingClientRect();let h=1,a=1;t&&Se(e)&&(h=e.offsetWidth>0&&Ri(c.width)/e.offsetWidth||1,a=e.offsetHeight>0&&Ri(c.height)/e.offsetHeight||1);const d=Ee(e)?ke(e):window,s=!hd()&&r,u=(c.left+(s&&(i=(n=d.visualViewport)==null?void 0:n.offsetLeft)!=null?i:0))/h,v=(c.top+(s&&(o=(l=d.visualViewport)==null?void 0:l.offsetTop)!=null?o:0))/a,g=c.width/h,y=c.height/a;return{width:g,height:y,top:v,right:u+g,bottom:v+y,left:u,x:u,y:v}}function Me(e){return(t=e,(t instanceof ke(t).Node?e.ownerDocument:e.document)||window.document).documentElement;var t}function Vi(e){return Ee(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function pd(e){return Ae(Me(e)).left+Vi(e).scrollLeft}function kh(e,t,r){const i=Se(t),n=Me(t),o=Ae(e,i&&function(h){const a=Ae(h);return Ri(a.width)!==h.offsetWidth||Ri(a.height)!==h.offsetHeight}(t),r==="fixed");let l={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if(i||!i&&r!=="fixed")if((ze(t)!=="body"||Fi(n))&&(l=Vi(t)),Se(t)){const h=Ae(t,!0);c.x=h.x+t.clientLeft,c.y=h.y+t.clientTop}else n&&(c.x=pd(n));return{x:o.left+l.scrollLeft-c.x,y:o.top+l.scrollTop-c.y,width:o.width,height:o.height}}function Xr(e){if(ze(e)==="html")return e;const t=e.assignedSlot||e.parentNode||(Ya(e)?e.host:null)||Me(e);return Ya(t)?t.host:t}function Qa(e){return Se(e)&&xe(e).position!=="fixed"?e.offsetParent:null}function Ja(e){const t=ke(e);let r=Qa(e);for(;r&&Ch(r)&&xe(r).position==="static";)r=Qa(r);return r&&(ze(r)==="html"||ze(r)==="body"&&xe(r).position==="static"&&!As(r))?t:r||function(i){let n=Xr(i);for(;Se(n)&&!Us(n);){if(As(n))return n;n=Xr(n)}return null}(e)||t}function fd(e){const t=Xr(e);return Us(t)?e.ownerDocument.body:Se(t)&&Fi(t)?t:fd(t)}function qr(e,t){var r;t===void 0&&(t=[]);const i=fd(e),n=i===((r=e.ownerDocument)==null?void 0:r.body),o=ke(i),l=n?[o].concat(o.visualViewport||[],Fi(i)?i:[]):i,c=t.concat(l);return n?c:c.concat(qr(l))}function tl(e,t,r){return t==="viewport"?Ii(function(i,n){const o=ke(i),l=Me(i),c=o.visualViewport;let h=l.clientWidth,a=l.clientHeight,d=0,s=0;if(c){h=c.width,a=c.height;const u=hd();(u||!u&&n==="fixed")&&(d=c.offsetLeft,s=c.offsetTop)}return{width:h,height:a,x:d,y:s}}(e,r)):Ee(t)?function(i,n){const o=Ae(i,!1,n==="fixed"),l=o.top+i.clientTop,c=o.left+i.clientLeft;return{top:l,left:c,x:c,y:l,right:c+i.clientWidth,bottom:l+i.clientHeight,width:i.clientWidth,height:i.clientHeight}}(t,r):Ii(function(i){var n;const o=Me(i),l=Vi(i),c=(n=i.ownerDocument)==null?void 0:n.body,h=Ur(o.scrollWidth,o.clientWidth,c?c.scrollWidth:0,c?c.clientWidth:0),a=Ur(o.scrollHeight,o.clientHeight,c?c.scrollHeight:0,c?c.clientHeight:0);let d=-l.scrollLeft+pd(i);const s=-l.scrollTop;return xe(c||o).direction==="rtl"&&(d+=Ur(o.clientWidth,c?c.clientWidth:0)-h),{width:h,height:a,x:d,y:s}}(Me(e)))}var $h={getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:i,strategy:n}=e;const o=r==="clippingAncestors"?function(a){let d=qr(a).filter(g=>Ee(g)&&ze(g)!=="body"),s=null;const u=xe(a).position==="fixed";let v=u?Xr(a):a;for(;Ee(v)&&!Us(v);){const g=xe(v),y=As(v);(u?y||s:y||g.position!=="static"||!s||!["absolute","fixed"].includes(s.position))?s=g:d=d.filter(w=>w!==v),v=Xr(v)}return d}(t):[].concat(r),l=[...o,i],c=l[0],h=l.reduce((a,d)=>{const s=tl(t,d,n);return a.top=Ur(s.top,a.top),a.right=Za(s.right,a.right),a.bottom=Za(s.bottom,a.bottom),a.left=Ur(s.left,a.left),a},tl(t,c,n));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:r,strategy:i}=e;const n=Se(r),o=Me(r);if(r===o)return t;let l={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if((n||!n&&i!=="fixed")&&((ze(r)!=="body"||Fi(o))&&(l=Vi(r)),Se(r))){const h=Ae(r,!0);c.x=h.x+r.clientLeft,c.y=h.y+r.clientTop}return ce(Et({},t),{x:t.x-l.scrollLeft+c.x,y:t.y-l.scrollTop+c.y})},isElement:Ee,getDimensions:function(e){if(Se(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=Ae(e);return{width:t.width,height:t.height}},getOffsetParent:Ja,getDocumentElement:Me,async getElementRects(e){let{reference:t,floating:r,strategy:i}=e;const n=this.getOffsetParent||Ja,o=this.getDimensions;return{reference:kh(t,await n(r),i),floating:Et({x:0,y:0},await o(r))}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>xe(e).direction==="rtl"};function Ph(e,t,r,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:o=!0,elementResize:l=!0,animationFrame:c=!1}=i,h=n&&!c,a=h||o?[...Ee(e)?qr(e):e.contextElement?qr(e.contextElement):[],...qr(t)]:[];a.forEach(v=>{h&&v.addEventListener("scroll",r,{passive:!0}),o&&v.addEventListener("resize",r)});let d,s=null;if(l){let v=!0;s=new ResizeObserver(()=>{v||r(),v=!1}),Ee(e)&&!c&&s.observe(e),Ee(e)||!e.contextElement||c||s.observe(e.contextElement),s.observe(t)}let u=c?Ae(e):null;return c&&function v(){const g=Ae(e);!u||g.x===u.x&&g.y===u.y&&g.width===u.width&&g.height===u.height||r(),u=g,d=requestAnimationFrame(v)}(),r(),()=>{var v;a.forEach(g=>{h&&g.removeEventListener("scroll",r),o&&g.removeEventListener("resize",r)}),(v=s)==null||v.disconnect(),s=null,c&&cancelAnimationFrame(d)}}var Th=(e,t,r)=>gh(e,t,Et({platform:$h},r)),wt=class extends ct{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof HTMLElement?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){!this.anchorEl||(this.cleanup=Ph(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}reposition(){if(!this.active||!this.anchorEl)return;const e=[Sh({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Ga({apply:({rects:t})=>{const r=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${t.reference.width}px`:"",this.popup.style.height=i?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(xh({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Ah({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Ga({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(mh({element:this.arrowEl,padding:this.arrowPadding})),Th(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy}).then(({x:t,y:r,middlewareData:i,placement:n})=>{const o=getComputedStyle(this).direction==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${t}px`,top:`${r}px`}),this.arrow){const c=i.arrow.x,h=i.arrow.y;let a="",d="",s="",u="";if(this.arrowPlacement==="start"){const v=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=o?v:"",u=o?"":v}else if(this.arrowPlacement==="end"){const v=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=o?"":v,u=o?v:"",s=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(u=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",a=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(u=typeof c=="number"?`${c}px`:"",a=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:a,right:d,bottom:s,left:u,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return j`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${_t({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?j`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};wt.styles=fh;b([Z(".popup")],wt.prototype,"popup",2);b([Z(".popup__arrow")],wt.prototype,"arrowEl",2);b([C()],wt.prototype,"anchor",2);b([C({type:Boolean,reflect:!0})],wt.prototype,"active",2);b([C({reflect:!0})],wt.prototype,"placement",2);b([C({reflect:!0})],wt.prototype,"strategy",2);b([C({type:Number})],wt.prototype,"distance",2);b([C({type:Number})],wt.prototype,"skidding",2);b([C({type:Boolean})],wt.prototype,"arrow",2);b([C({attribute:"arrow-placement"})],wt.prototype,"arrowPlacement",2);b([C({attribute:"arrow-padding",type:Number})],wt.prototype,"arrowPadding",2);b([C({type:Boolean})],wt.prototype,"flip",2);b([C({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],wt.prototype,"flipFallbackPlacements",2);b([C({attribute:"flip-fallback-strategy"})],wt.prototype,"flipFallbackStrategy",2);b([C({type:Object})],wt.prototype,"flipBoundary",2);b([C({attribute:"flip-padding",type:Number})],wt.prototype,"flipPadding",2);b([C({type:Boolean})],wt.prototype,"shift",2);b([C({type:Object})],wt.prototype,"shiftBoundary",2);b([C({attribute:"shift-padding",type:Number})],wt.prototype,"shiftPadding",2);b([C({attribute:"auto-size"})],wt.prototype,"autoSize",2);b([C()],wt.prototype,"sync",2);b([C({type:Object})],wt.prototype,"autoSizeBoundary",2);b([C({attribute:"auto-size-padding",type:Number})],wt.prototype,"autoSizePadding",2);wt=b([mt("sl-popup")],wt);var Ih=lt`
  ${vt}

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
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
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

  /* When disabled, prevent mouse events from bubbling up */
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
    border-color: var(--sl-color-neutral-300);
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
    border-color: var(--sl-color-neutral-300);
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
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
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

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover))
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
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Tr=new WeakMap,el=new WeakMap,Ir=new WeakMap,Ye=class{constructor(e,t){(this.host=e).addController(this),this.options=Et({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var i;return(i=r.disabled)!=null?i:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,i)=>r.value=i},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(Tr.has(this.form)?Tr.get(this.form).add(this.host):Tr.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Ir.has(this.form)||(Ir.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){var e;this.form&&((e=Tr.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Ir.has(this.form)&&(this.form.reportValidity=Ir.get(this.form),Ir.delete(this.form)),this.form=void 0),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){var e;const t=this.host,r=Boolean(el.get(t)),i=Boolean(t.invalid),n=Boolean(t.required);(e=this.form)!=null&&e.noValidate?(t.removeAttribute("data-required"),t.removeAttribute("data-optional"),t.removeAttribute("data-invalid"),t.removeAttribute("data-valid"),t.removeAttribute("data-user-invalid"),t.removeAttribute("data-user-valid")):(t.toggleAttribute("data-required",n),t.toggleAttribute("data-optional",!n),t.toggleAttribute("data-invalid",i),t.toggleAttribute("data-valid",!i),t.toggleAttribute("data-user-invalid",i&&r),t.toggleAttribute("data-user-valid",!i&&r))}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),i=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";!t&&!n&&typeof r=="string"&&typeof i<"u"&&(Array.isArray(i)?i.forEach(o=>{e.formData.append(r,o.toString())}):e.formData.append(r,i.toString()))}handleFormSubmit(e){var t;const r=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=Tr.get(this.form))==null||t.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!i(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){el.set(e,t),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&r.setAttribute(i,t.getAttribute(i))})),this.form.append(r),r.click(),r.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}},dt=class extends ct{constructor(){super(...arguments),this.formSubmitController=new Ye(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")}}),this.hasSlotController=new Ce(this,"[default]","prefix","suffix"),this.localize=new Bt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href=""}firstUpdated(){this.isButton()&&(this.invalid=!this.button.checkValidity())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.invalid=!this.button.checkValidity())}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}handleDisabledChange(){this.isButton()&&(this.button.disabled=this.disabled,this.invalid=!this.button.checkValidity())}isButton(){return!this.href}isLink(){return!!this.href}render(){const e=this.isLink(),t=e?$i`a`:$i`button`;return wi`
      <${t}
        part="base"
        class=${_t({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${K(e?void 0:this.disabled)}
        type=${K(e?void 0:this.type)}
        title=${this.title}
        name=${K(e?void 0:this.name)}
        value=${K(e?void 0:this.value)}
        href=${K(e?this.href:void 0)}
        target=${K(e?this.target:void 0)}
        download=${K(e?this.download:void 0)}
        rel=${K(e&&this.target?"noreferrer noopener":void 0)}
        role=${K(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?wi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?wi`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};dt.styles=Ih;b([Z(".button")],dt.prototype,"button",2);b([et()],dt.prototype,"hasFocus",2);b([et()],dt.prototype,"invalid",2);b([C()],dt.prototype,"title",2);b([C({reflect:!0})],dt.prototype,"variant",2);b([C({reflect:!0})],dt.prototype,"size",2);b([C({type:Boolean,reflect:!0})],dt.prototype,"caret",2);b([C({type:Boolean,reflect:!0})],dt.prototype,"disabled",2);b([C({type:Boolean,reflect:!0})],dt.prototype,"loading",2);b([C({type:Boolean,reflect:!0})],dt.prototype,"outline",2);b([C({type:Boolean,reflect:!0})],dt.prototype,"pill",2);b([C({type:Boolean,reflect:!0})],dt.prototype,"circle",2);b([C()],dt.prototype,"type",2);b([C()],dt.prototype,"name",2);b([C()],dt.prototype,"value",2);b([C()],dt.prototype,"href",2);b([C()],dt.prototype,"target",2);b([C()],dt.prototype,"download",2);b([C()],dt.prototype,"form",2);b([C({attribute:"formaction"})],dt.prototype,"formAction",2);b([C({attribute:"formenctype"})],dt.prototype,"formEnctype",2);b([C({attribute:"formmethod"})],dt.prototype,"formMethod",2);b([C({attribute:"formnovalidate",type:Boolean})],dt.prototype,"formNoValidate",2);b([C({attribute:"formtarget"})],dt.prototype,"formTarget",2);b([X("disabled",{waitUntilFirstUpdate:!0})],dt.prototype,"handleDisabledChange",1);dt=b([mt("sl-button")],dt);var Lh=lt`
  ${vt}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
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
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      rotate: 0deg;
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      rotate: 450deg;
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      rotate: 1080deg;
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Cs=class extends ct{constructor(){super(...arguments),this.localize=new Bt(this)}render(){return j`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Cs.styles=Lh;Cs=b([mt("sl-spinner")],Cs);var Rh=lt`
  ${vt}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,fr=class extends ct{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Lr(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=Lr(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=Lr(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=Lr(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),i=Lr(t);i!==null&&(i.classList.add("sl-button-group__button"),i.classList.toggle("sl-button-group__button--first",r===0),i.classList.toggle("sl-button-group__button--inner",r>0&&r<e.length-1),i.classList.toggle("sl-button-group__button--last",r===e.length-1),i.classList.toggle("sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return j`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};fr.styles=Rh;b([Z("slot")],fr.prototype,"defaultSlot",2);b([et()],fr.prototype,"disableRole",2);b([C()],fr.prototype,"label",2);fr=b([mt("sl-button-group")],fr);function Lr(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}var Oh=lt`
  ${vt}

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
`,rr=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),ue=class extends ct{constructor(){super(...arguments),this.hasSlotController=new Ce(this,"icon","suffix"),this.localize=new Bt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}async show(){if(!this.open)return this.open=!0,le(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,le(this,"sl-after-hide")}async toast(){return new Promise(e=>{rr.parentElement===null&&document.body.append(rr),rr.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{rr.removeChild(this),e(),rr.querySelector("sl-alert")===null&&rr.remove()},{once:!0})})}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Vt(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=Rt(this,"alert.show",{dir:this.localize.dir()});await Lt(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Vt(this.base);const{keyframes:e,options:t}=Rt(this,"alert.hide",{dir:this.localize.dir()});await Lt(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}render(){return j`
      <div
        part="base"
        class=${_t({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="alert__icon"></slot>

        <slot part="message" class="alert__message" aria-live="polite"></slot>

        ${this.closable?j`
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
      </div>
    `}};ue.styles=Oh;b([Z('[part~="base"]')],ue.prototype,"base",2);b([C({type:Boolean,reflect:!0})],ue.prototype,"open",2);b([C({type:Boolean,reflect:!0})],ue.prototype,"closable",2);b([C({reflect:!0})],ue.prototype,"variant",2);b([C({type:Number})],ue.prototype,"duration",2);b([X("open",{waitUntilFirstUpdate:!0})],ue.prototype,"handleOpenChange",1);b([X("duration")],ue.prototype,"handleDurationChange",1);ue=b([mt("sl-alert")],ue);At("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});At("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var Mh=lt`
  ${vt}

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
`,ks=class extends ct{constructor(){super(...arguments),this.hasSlotController=new Ce(this,"footer","header","image")}render(){return j`
      <div
        part="base"
        class=${_t({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};ks.styles=Mh;ks=b([mt("sl-card")],ks);class gd extends ee{static get properties(){return{eventType:{type:String,reflectToAttribute:!0,attribute:!0},pointerType:{type:String,reflectToAttribute:!0,attribute:!0},pointerId:{type:Number,reflectToAttribute:!0,attribute:!0},isPrimary:{type:Boolean,reflectToAttribute:!0,attribute:!0},width:{type:Number,reflectToAttribute:!0,attribute:!0},height:{type:Number,reflectToAttribute:!0,attribute:!0},positionX:{type:Number,reflectToAttribute:!0,attribute:!0},positionY:{type:Number,reflectToAttribute:!0,attribute:!0},preferredColor:{type:String,reflectToAttribute:!0,attribute:!0},preferredStyle:{type:String,reflectToAttribute:!0,attribute:!0},preferredWidth:{type:Number,reflectToAttribute:!0,attribute:!0},pressure:{type:Number,reflectToAttribute:!0,attribute:!0},tangentialPressure:{type:Number,reflectToAttribute:!0,attribute:!0},tiltX:{type:Number,reflectToAttribute:!0,attribute:!0},tiltY:{type:Number,reflectToAttribute:!0,attribute:!0},twist:{type:Number,reflectToAttribute:!0,attribute:!0},avgLatency:{type:Number,reflectToAttribute:!0,attribute:!0}}}set eventType(t){let r=this._eventType;this._eventType=t,this.requestUpdate("eventType",r)}get eventType(){return this._eventType}set pointerType(t){let r=this._pointerType;this._pointerType=t,this.requestUpdate("pointerType",r)}get pointerType(){return this._pointerType}set pointerId(t){let r=this._pointerId;this._pointerId=t,this.requestUpdate("pointerId",r)}get pointerId(){return this._pointerId}set isPrimary(t){let r=this._isPrimary;this._isPrimary=t,this.requestUpdate("isPrimary",r)}get isPrimary(){return this._isPrimary}set width(t){let r=this._pointerId;this._width=t,this.requestUpdate("width",r)}get width(){return this._width}set height(t){let r=this._height;this._height=t,this.requestUpdate("height",r)}get height(){return this._height}set positionX(t){let r=this._positionX;this._positionX=t,this.requestUpdate("positionX",r)}get positionX(){return this._positionX}set positionY(t){let r=this._positionY;this._positionY=t,this.requestUpdate("positionY",r)}get positionY(){return this._positionY}set preferredColor(t){let r=this._preferredColor;this._preferredColor=t,this.requestUpdate("preferredColor",r)}get preferredColor(){return this._preferredColor}set preferredStyle(t){let r=this._preferredStyle;this._preferredStyle=t,this.requestUpdate("preferredStyle",r)}get preferredStyle(){return this._preferredStyle}set preferredWidth(t){let r=this._preferredWidth;this._preferredWidth=t,this.requestUpdate("preferredWidth",r)}get preferredWidth(){return this._preferredWidth}set pressure(t){let r=this._pressure;this._pressure=t,this.requestUpdate("pressure",r)}get pressure(){return this._pressure}set tangentialPressure(t){let r=this._tangentialPressure;this._tangentialPressure=t,this.requestUpdate("tangentialPressure",r)}get tangentialPressure(){return this._tangentialPressure}set tiltX(t){let r=this._tiltX;this._tiltX=t,this.requestUpdate("tiltX",r)}get tiltX(){return this._tiltX}set tiltY(t){let r=this._tiltY;this._tiltY=t,this.requestUpdate("tiltY",r)}get tiltY(){return this._tiltY}set twist(t){let r=this._twist;this._twist=t,this.requestUpdate("twist",r)}get twist(){return this._twist}set avgLatency(t){let r=this._avgLatency;this._avgLatency=t,this.requestUpdate("avgLatency",r)}get avgLatency(){return this._avgLatency}constructor(){super()}_closedClicked(){this.shadowRoot.host.style.visibility="hidden"}render(){return ae`
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
    `}}gt(gd,"styles",Ne`
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
  `);customElements.define("info-panel",gd);var Rn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zh(e){var t=e.default;if(typeof t=="function"){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var n=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(r,i,n.get?n:{enumerable:!0,get:function(){return e[i]}})}),r}var Ze=function(e){const t=[];for(let r=0;r<e;r++){const i=[];for(let n=0;n<e;n++)r===n?i.push(1):i.push(0);t.push(i)}return t};const rl=Ze;var Nh=function(e,t){let{dimension:r}=e;const i=t.dimension,{observedProjection:n}=t,{stateProjection:o}=t;let{covariance:l}=e;e.dimension||(i?r=i:n?r=n[0].length:o&&(r=o[0].length));const c=rl(r);return l=l||rl(r),Object.assign({},e,{dimension:r,transition:c,covariance:l})};const Dh=Ze;var Uh=function(e,t){const r=e.timeStep||1,{observedProjection:i}=t,{stateProjection:n}=t,o=t.dimension;let l;if(n&&Number.isInteger(n[0].length/2))l=t.stateProjection[0].length;else if(i)l=i[0].length*2;else if(o)l=o*2;else throw new Error("observedProjection or stateProjection should be defined in observation in order to use constant-speed filter");const c=l/2,h=Dh(l);for(let s=0;s<c;s++)h[s][s+c]=r;const a=new Array(c).fill(1).concat(new Array(c).fill(r*r)),d=e.covariance||a;return Object.assign({},e,{dimension:l,transition:h,covariance:d})};const qh=Ze;var Wh=function(e,t){const r=e.timeStep||1,{observedProjection:i}=t,{stateProjection:n}=t,o=t.dimension;let l;if(n&&Number.isInteger(n[0].length/3))l=t.stateProjection[0].length;else if(i)l=i[0].length*3;else if(o)l=o*3;else throw new Error("observedProjection or stateProjection should be defined in observation in order to use constant-speed filter");const c=l/3,h=qh(l);for(let s=0;s<c;s++)h[s][s+c]=r,h[s][s+2*c]=.5*r**2,h[s+c][s+2*c]=r;const a=new Array(c).fill(1).concat(new Array(c).fill(r*r)).concat(new Array(c).fill(r**4)),d=e.covariance||a;return Object.assign({},e,{dimension:l,transition:h,covariance:d})},vd=function(e,t){return new Array(e).fill(1).map(()=>new Array(t).fill(0))};const Fh=vd;var qs=function(e){const t=Fh(e.length,e.length);for(const[r,i]of e.entries())t[r][r]=i;return t};const md=function(e,t,r="checkShape"){if(e.length!==t[0])throw new Error(`[${r}] expected size (${t[0]}) and length (${e.length}) does not match`);if(t.length>1)return e.forEach(i=>md(i,t.slice(1),r))};var Vh=md;const Bh=Vh;var Jr=function(e,t,r="checkMatrix"){if(e.reduce((i,n)=>i.concat(n)).filter(i=>Number.isNaN(i)).length>0)throw new Error(`[${r}] Matrix should not have a NaN
In : 
`+e.join(`
`));t&&Bh(e,t,r)};const il=qs,Hh=Jr;var bd=function(e,{dimension:t,title:r="polymorph"}={}){if(typeof e=="number"||Array.isArray(e)){if(typeof e=="number"&&typeof t=="number")return il(new Array(t).fill(e));if(Array.isArray(e)&&Array.isArray(e[0])){let i;return typeof t=="number"&&(i=[t,t]),Hh(e,i,r),e}if(Array.isArray(e)&&typeof e[0]=="number")return il(e)}return e};const nl=Ze,jh=bd,Kh=Jr,Xh=e=>e.map(t=>t.concat());var Gh=function(e){const{sensorDimension:t=1,sensorCovariance:r=1,nSensors:i=1}=e,n=jh(r,{dimension:t});Kh(n,[t,t],"observation.sensorCovariance");const o=nl(t);let l=[];const c=t*i,h=nl(c);for(let a=0;a<i;a++)l=l.concat(Xh(o)),n.forEach((d,s)=>d.forEach((u,v)=>{h[s+a*t][v+a*t]=u}));return Object.assign({},e,{dimension:c,observedProjection:l,covariance:h})};const On={"constant-position":Nh,"constant-speed":Uh,"constant-acceleration":Wh},Mn={sensor:Gh};var yd={registerObservation:(e,t)=>{Mn[e]=t},registerDynamic:(e,t)=>{On[e]=t},buildObservation:e=>{if(!Mn[e.name])throw new Error(`The provided observation model name (${e.name}) is not registered`);return Mn[e.name](e)},buildDynamic:(e,t)=>{if(!On[e.name])throw new Error(`The provided dynamic model (${e.name}) name is not registered`);return On[e.name](e,t)}},_d=function({observation:e,dimension:t}){if(!Array.isArray(e)){if(t===1&&typeof e=="number")return[[e]];throw new TypeError(`The observation (${e}) should be an array (dimension: ${t})`)}if(e.length!==t)throw new TypeError(`Observation (${e.length}) and dimension (${t}) not matching`);return typeof e[0]=="number"||e[0]===null?e.map(r=>[r]):e},Yh=function({observation:e,dynamic:t}){const{stateProjection:r}=e,{transition:i}=t,n=t.dimension,o=e.dimension;if(n&&o&&Array.isArray(r)&&(n!==r[0].length||o!==r.length))throw new TypeError("stateProjection dimensions not matching with observation and dynamic dimensions");if(n&&Array.isArray(i)&&n!==i.length)throw new TypeError("transition dimension not matching with dynamic dimension");return Array.isArray(r)?{observation:Object.assign({},e,{dimension:r.length}),dynamic:Object.assign({},t,{dimension:r[0].length})}:Array.isArray(i)?{observation:e,dynamic:Object.assign({},t,{dimension:i.length})}:{observation:e,dynamic:t}},Zh=function({observation:e,dynamic:t}){const r=t.dimension,i=e.dimension;if(!r||!i)throw new TypeError("Dimension is not set");return{observation:e,dynamic:t}},wd=function(e,{dimension:t}){const r=e.length,i=e[0].length,n=e.map(o=>o.concat());if(t<i)throw new TypeError(`Dynamic dimension ${t} does not match with observedProjection ${i}`);for(let o=0;o<r;o++)for(let l=0;l<t-i;l++)n[o].push(0);return n};const ol=wd,Qh=Ze;var Jh=function({observation:e,dynamic:t}){const{observedProjection:r,stateProjection:i}=e,n=e.dimension,o=t.dimension;if(r&&i)throw new TypeError("You cannot use both observedProjection and stateProjection");if(r){const l=ol(r,{dimension:o});return{observation:Object.assign({},e,{stateProjection:l}),dynamic:t}}if(n&&o&&!i){const l=Qh(n);return{observation:Object.assign({},e,{stateProjection:ol(l,{dimension:o})}),dynamic:t}}return{observation:e,dynamic:t}};const tp=qs;var ep=function({observation:e,dynamic:t}){if(!t.init){const i=t.dimension,n=new Array(i).fill(0),o=new Array(i).fill(1e6);return{observation:e,dynamic:Object.assign({},t,{init:{mean:n.map(c=>[c]),covariance:tp(o),index:-1}})}}return{observation:e,dynamic:t}},rp=function(e){if(typeof e=="function"||Array.isArray(e))return e;throw new Error("Only arrays and functions are authorized")},ip=function(e){return e.filter((t,r)=>e.indexOf(t)===r)};const np=ip,sl=100,xd=function(e,t){if(t>sl)throw new Error(`In deepAssign, number of recursive call (${t}) reached limit (${sl}), deepAssign is not working on  self-referencing objects`);const r=e.filter(h=>typeof h<"u"&&h!==null),i=r[r.length-1];if(r.length===1)return r[0];if(typeof i!="object"||Array.isArray(i))return i;if(r.length===0)return null;const n=r.filter(h=>typeof h=="object");let o=[];n.forEach(h=>{o=o.concat(Object.keys(h))});const l=np(o),c={};return l.forEach(h=>{const a=n.map(d=>d[h]);c[h]=xd(a,t+1)}),c};var op=(...e)=>xd(e,0),Sd=function(e){let t=0;for(const[r,i]of e.entries())t+=i[r];return t},Bi=function(e){return e[0].map((t,r)=>e.map(i=>i[r]))},Hi=function(e,t){return e[0].map((r,i)=>r.map((n,o)=>{const l=e.map(c=>c[i][o]);return t(l,i,o)}))};const sp=Hi;var ji=function(...e){return sp(e,([t,r])=>t-r)},Ki=function(e,t){const r=[];for(let i=0;i<e.length;i++){r[i]=[];for(let n=0;n<t[0].length;n++){let o=0,l=!1;for(let c=0;c<e[0].length;c++)(e[i][c]===null&&t[c][n]!==0||t[c][n]===null&&e[i][c]!==0)&&(l=!0),o+=e[i][c]*t[c][n];r[i][n]=l?null:o}}return r},Ed=function(e){let t=0;for(let r=0;r<e.length;r++)for(let i=0;i<e.length;i++)t+=e[r][i];return t};const ap=Sd,lp=Bi,cp=ji,dp=Ki,al=Ed;var Ad=function(e,t){if(typeof e>"u")return al(t);if(typeof t>"u")return al(e);const r=cp(e,t),i=dp(lp(r),r);return Math.sqrt(ap(i))},te={};te.Matrix=function(){};te.Matrix.create=function(e){var t=new te.Matrix;return t.setElements(e)};te.Matrix.I=function(e){for(var t=[],r=e,i;r--;)for(i=e,t[r]=[];i--;)t[r][i]=r===i?1:0;return te.Matrix.create(t)};te.Matrix.prototype={dup:function(){return te.Matrix.create(this.elements)},isSquare:function(){var e=this.elements.length===0?0:this.elements[0].length;return this.elements.length===e},toRightTriangular:function(){if(this.elements.length===0)return te.Matrix.create([]);var e=this.dup(),t,r=this.elements.length,i,n,o=this.elements[0].length,l;for(i=0;i<r;i++){if(e.elements[i][i]===0){for(n=i+1;n<r;n++)if(e.elements[n][i]!==0){for(t=[],l=0;l<o;l++)t.push(e.elements[i][l]+e.elements[n][l]);e.elements[i]=t;break}}if(e.elements[i][i]!==0)for(n=i+1;n<r;n++){var c=e.elements[n][i]/e.elements[i][i];for(t=[],l=0;l<o;l++)t.push(l<=i?0:e.elements[n][l]-e.elements[i][l]*c);e.elements[n]=t}}return e},determinant:function(){if(this.elements.length===0)return 1;if(!this.isSquare())return null;for(var e=this.toRightTriangular(),t=e.elements[0][0],r=e.elements.length,i=1;i<r;i++)t=t*e.elements[i][i];return t},isSingular:function(){return this.isSquare()&&this.determinant()===0},augment:function(e){if(this.elements.length===0)return this.dup();var t=e.elements||e;typeof t[0][0]>"u"&&(t=te.Matrix.create(t).elements);var r=this.dup(),i=r.elements[0].length,n=r.elements.length,o=t[0].length,l;if(n!==t.length)return null;for(;n--;)for(l=o;l--;)r.elements[n][i+l]=t[n][l];return r},inverse:function(){if(this.elements.length===0||!this.isSquare()||this.isSingular())return null;for(var e=this.elements.length,t=e,r,i=this.augment(te.Matrix.I(e)).toRightTriangular(),n=i.elements[0].length,o,l,c,h=[],a;t--;){for(l=[],h[t]=[],c=i.elements[t][t],o=0;o<n;o++)a=i.elements[t][o]/c,l.push(a),o>=e&&h[t].push(a);for(i.elements[t]=l,r=t;r--;){for(l=[],o=0;o<n;o++)l.push(i.elements[r][o]-i.elements[t][o]*i.elements[r][t]);i.elements[r]=l}}return te.Matrix.create(h)},setElements:function(e){var t,r,i=e.elements||e;if(i[0]&&typeof i[0][0]<"u"){for(t=i.length,this.elements=[];t--;)for(r=i[t].length,this.elements[t]=[];r--;)this.elements[t][r]=i[t][r];return this}var n=i.length;for(this.elements=[],t=0;t<n;t++)this.elements.push([i[t]]);return this}};var up=function(e){const t=te.Matrix.create(e).inverse();return t!==null?t.elements:null};const hp=up;var Ws=function(e){return hp(e)},Cd=(e,t)=>t.map(r=>t.map(i=>e[r][i])),kd=function(t){return Number.isFinite(t)},pp=kd,fp=function(t){if(!Array.isArray(t))return!1;var r=t.length;if(r===0)return!0;var i=t[0];if(!Array.isArray(i))return!1;var n=i.length;if(n===0)return!1;for(var o=0;o<r;o++){var l=t[o];if(!Array.isArray(l)||l.length!==n)return!1;for(var c=0;c<n;c++)if(!pp(l[c]))return!1}return!0},ut={INVALID_ARRAY:"Invalid argument: Received a non-array argument",INVALID_MATRIX:"Invalid argument: Received an invalid matrix",INVALID_SQUARE_MATRIX:"Invalid argument: Received a non-square matrix",INVALID_UPPER_TRIANGULAR_MATRIX:"Invalid argument: Received a non upper-triangular matrix",INVALID_LOWER_TRIANGULAR_MATRIX:"Invalid argument: Received a non lower-triangular matrix",INVALID_EXPONENT:"Invalid argument: Expected a non-negative integer exponent",INVALID_ROW_COL:"Invalid argument: Expected non-negative integer row and column",INVALID_ROW:"Invalid argument: Expected non-negative integer row",INVALID_COLUMN:"Invalid argument: Expected non-negative integer column",INVALID_ROWS_EXPRESSION:"Invalid argument: Received invalid rows expression",INVALID_COLUMNS_EXPRESSION:"Invalid argument: Received invalid columns expression",INVALID_P_NORM:"Invalid argument: Received invalid p-norm",OVERFLOW_INDEX:"Invalid argument: Matrix index overflow",OVERFLOW_COLUMN:"Invalid argument: Column index overflow",OVERFLOW_ROW:"Invalid argument: Row index overflow",NO_UNIQUE_SOLUTION:"Arithmetic Exception: The system has no unique solution",SIZE_INCOMPATIBLE:"Invalid argument: Matrix size-incompatible",SINGULAR_MATRIX:"Arithmetic Exception: The matrix is not invertible",EXPECTED_STRING_NUMBER_AT_POS_1_2:"Invalid argument: Expected a string or a number at arguments[1] and arguments[2]",EXPECTED_ARRAY_OF_NUMBERS_OR_MATRICES:"Invalid argument: Expected either an array of numbers or an array of square matrices"},zn,ll;function gp(){if(ll)return zn;ll=1;function e(c,h){return o(c)||n(c,h)||r(c,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(c,h){if(!!c){if(typeof c=="string")return i(c,h);var a=Object.prototype.toString.call(c).slice(8,-1);if(a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set")return Array.from(c);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(c,h)}}function i(c,h){(h==null||h>c.length)&&(h=c.length);for(var a=0,d=new Array(h);a<h;a++)d[a]=c[a];return d}function n(c,h){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var d=[],s=!0,u=!1,v,g;try{for(a=a.call(c);!(s=(v=a.next()).done)&&(d.push(v.value),!(h&&d.length===h));s=!0);}catch(y){u=!0,g=y}finally{try{!s&&a.return!=null&&a.return()}finally{if(u)throw g}}return d}}function o(c){if(Array.isArray(c))return c}function l(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isDiagonal!==void 0)return this._isDiagonal;var h=1/(Math.pow(10,c)*2),a=this._matrix,d=this.size(),s=e(d,2),u=s[0],v=s[1];if(u===0)return this._isDiagonal=!0,!0;for(var g=0;g<u;g++)for(var y=0;y<v;y++)if(g!==y&&Math.abs(a[g][y])>=h)return this.isDiagonal=!1,!1;return this._isDiagonal=!0,!0}return zn=l,zn}var Nn,cl;function vp(){if(cl)return Nn;cl=1;function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isSkewSymmetric!==void 0)return this._isSkewSymmetric;if(!this.isSquare())return this._isSkewSymmetric=!1,!1;var r=this._matrix,i=1/(Math.pow(10,t)*2),n=r.length;if(n===0)return this._isSkewSymmetric=!0,!0;for(var o=0;o<n;o++)for(var l=0;l<o;l++)if(Math.abs(r[o][l]+r[l][o])>=i)return this._isSkewSymmetric=!1,!1;return this._isSkewSymmetric=!0,!0}return Nn=e,Nn}var Dn,dl;function mp(){if(dl)return Dn;dl=1;function e(){if(this._isSquare!==void 0)return this._isSquare;var t=this._matrix;return t.length===0?(this._isSquare=!0,!0):(this._isSquare=t.length===t[0].length,this._isSquare)}return Dn=e,Dn}var Un,ul;function bp(){if(ul)return Un;ul=1;function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isSymmetric!==void 0)return this._isSymmetric;if(!this.isSquare())return!1;for(var r=this._matrix,i=1/(Math.pow(10,t)*2),n=r.length,o=0;o<n;o++)for(var l=0;l<=o;l++)if(Math.abs(r[o][l]-r[l][o])>=i)return this._isSymmetric=!1,!1;return this._isSymmetric=!0,!0}return Un=e,Un}var qn,hl;function yp(){if(hl)return qn;hl=1;function e(c,h){return o(c)||n(c,h)||r(c,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(c,h){if(!!c){if(typeof c=="string")return i(c,h);var a=Object.prototype.toString.call(c).slice(8,-1);if(a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set")return Array.from(c);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(c,h)}}function i(c,h){(h==null||h>c.length)&&(h=c.length);for(var a=0,d=new Array(h);a<h;a++)d[a]=c[a];return d}function n(c,h){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var d=[],s=!0,u=!1,v,g;try{for(a=a.call(c);!(s=(v=a.next()).done)&&(d.push(v.value),!(h&&d.length===h));s=!0);}catch(y){u=!0,g=y}finally{try{!s&&a.return!=null&&a.return()}finally{if(u)throw g}}return d}}function o(c){if(Array.isArray(c))return c}function l(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isLowerTriangular!==void 0)return this._isLowerTriangular;var h=1/(Math.pow(10,c)*2),a=this._matrix,d=this.size(),s=e(d,2),u=s[0],v=s[1];if(u===0)return this._isLowerTriangular=!0,!0;for(var g=0;g<u;g++)for(var y=g+1;y<v;y++)if(Math.abs(a[g][y])>=h)return this._isLowerTriangular=!1,!1;return this._isLowerTriangular=!0,!0}return qn=l,qn}var Wn,pl;function _p(){if(pl)return Wn;pl=1;function e(c,h){return o(c)||n(c,h)||r(c,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(c,h){if(!!c){if(typeof c=="string")return i(c,h);var a=Object.prototype.toString.call(c).slice(8,-1);if(a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set")return Array.from(c);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(c,h)}}function i(c,h){(h==null||h>c.length)&&(h=c.length);for(var a=0,d=new Array(h);a<h;a++)d[a]=c[a];return d}function n(c,h){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var d=[],s=!0,u=!1,v,g;try{for(a=a.call(c);!(s=(v=a.next()).done)&&(d.push(v.value),!(h&&d.length===h));s=!0);}catch(y){u=!0,g=y}finally{try{!s&&a.return!=null&&a.return()}finally{if(u)throw g}}return d}}function o(c){if(Array.isArray(c))return c}function l(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isUpperTriangular!==void 0)return this._isUpperTriangular;var h=1/(Math.pow(10,c)*2),a=this._matrix,d=this.size(),s=e(d,2),u=s[0],v=s[1];if(u===0)return this._isUpperTriangular=!0,!0;for(var g=0;g<u;g++)for(var y=0;y<v;y++)if(!(g<=y)&&Math.abs(a[g][y])>=h)return this._isUpperTriangular=!1,!1;return this._isUpperTriangular=!0,!0}return Wn=l,Wn}var Fn,fl;function wp(){if(fl)return Fn;fl=1;function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isOrthogonal!==void 0)return this._isOrthogonal;if(!this.isSquare())return this._isOrthogonal=!1,!1;for(var r=this._matrix,i=1/(Math.pow(10,t)*2),n=r.length,o=0;o<n;o++)for(var l=o;l<n;l++){for(var c=0,h=0;h<n;h++)c+=r[o][h]*r[l][h];if(o===l&&Math.abs(c-1)>=i)return this._isOrthogonal=!1,!1;if(o!==l&&Math.abs(c)>=i)return this._isOrthogonal=!1,!1}return this._isOrthogonal=!0,!0}return Fn=e,Fn}var Vn,gl;function xp(){if(gl)return Vn;gl=1;var e=De(),t=ut,r=t.INVALID_P_NORM,i=t.SINGULAR_MATRIX,n=t.INVALID_SQUARE_MATRIX;function o(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:2;if(l!==1&&l!==2&&l!==1/0&&l!=="F")throw new Error(r);if(!this.isSquare())throw new Error(n);try{var c=e.inverse(this);return c.norm(l)*this.norm(l)}catch(h){if(h.message===i)return 1/0;throw h}}return Vn=o,Vn}var Bn,vl;function Sp(){if(vl)return Bn;vl=1;function e(d,s){return o(d)||n(d,s)||r(d,s)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(d,s){if(!!d){if(typeof d=="string")return i(d,s);var u=Object.prototype.toString.call(d).slice(8,-1);if(u==="Object"&&d.constructor&&(u=d.constructor.name),u==="Map"||u==="Set")return Array.from(d);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return i(d,s)}}function i(d,s){(s==null||s>d.length)&&(s=d.length);for(var u=0,v=new Array(s);u<s;u++)v[u]=d[u];return v}function n(d,s){var u=d==null?null:typeof Symbol<"u"&&d[Symbol.iterator]||d["@@iterator"];if(u!=null){var v=[],g=!0,y=!1,w,A;try{for(u=u.call(d);!(g=(w=u.next()).done)&&(v.push(w.value),!(s&&v.length===s));g=!0);}catch(x){y=!0,A=x}finally{try{!g&&u.return!=null&&u.return()}finally{if(y)throw A}}return v}}function o(d){if(Array.isArray(d))return d}var l=De(),c=ut,h=c.INVALID_SQUARE_MATRIX;function a(){if(!this.isSquare())throw new Error(h);if(this._det!==void 0)return this._det;var d=this._matrix,s=d.length;if(s===0)return this._det=1,1;if(s===1)return this._det=d[0][0],this._det;if(s===2)return this._det=d[0][0]*d[1][1]-d[0][1]*d[1][0],this._det;if(s===3)return this._det=d[0][0]*d[1][1]*d[2][2]+d[0][1]*d[1][2]*d[2][0]+d[0][2]*d[1][0]*d[2][1]-d[0][2]*d[1][1]*d[2][0]-d[0][1]*d[1][0]*d[2][2]-d[0][0]*d[1][2]*d[2][1],this._det;for(var u=l.LU(this,!0),v=e(u,2),g=v[0],y=v[1],w=y._matrix,A=0,x=0;x<s;x++)if(g[x]!==x)for(;g[x]!==x;){var E=g[x];g[x]=g[E],g[E]=E,A++}for(var $=1,P=0;P<s;P++)$*=w[P][P];return A%2===1?(this._det=$*-1,this._det):(this._det=$,$)}return Bn=a,Bn}var Hn,ml;function Ep(){if(ml)return Hn;ml=1;function e(){return this.re}return Hn=e,Hn}var jn,bl;function Ap(){if(bl)return jn;bl=1;function e(){return this.im}return jn=e,jn}var Kn,yl;function Cp(){if(yl)return Kn;yl=1;function e(){return Math.sqrt(Math.pow(this.re,2)+Math.pow(this.im,2))}return Kn=e,Kn}var Xn,_l;function kp(){if(_l)return Xn;_l=1;function e(){var t=this.re,r=this.im,i=1/(Math.pow(10,15)*2);if(!(Math.abs(t)<i&&Math.abs(r)<i))return t===0?r>0?Math.PI*.5:Math.PI*1.5:r===0?t>0?0:Math.PI:t>0&&r>0?Math.atan(r/t):t<0&&r>0?Math.PI-Math.atan(r/(t*-1)):t<0&&r<0?Math.PI+Math.atan(r*-1/(t*-1)):Math.PI*2-Math.atan(r*-1/t)}return Xn=e,Xn}var Gn,wl;function $p(){if(wl)return Gn;wl=1;function e(){var t=this.re,r=this.im;return Number.isNaN(t)||Number.isNaN(r)?"NaN":t===0&&r===0?"0":t===0?r===1?"i":r===-1?"-i":"".concat(r,"i"):r===0?"".concat(t):r>0?r===1?"".concat(t," + i"):"".concat(t," + ").concat(r,"i"):r===-1?"".concat(t," - i"):"".concat(t," - ").concat(Math.abs(r),"i")}return Gn=e,Gn}var Yn,xl;function Pp(){if(xl)return Yn;xl=1;function e(t){if(!(t instanceof this))return!1;var r=t.getReal(),i=t.getImaginary();return!!(Number.isNaN(r)||Number.isNaN(i))}return Yn=e,Yn}var Zn,Sl;function Tp(){if(Sl)return Zn;Sl=1;function e(t,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:15;if(!(t instanceof this)||!(r instanceof this))return!1;if(!Number.isInteger(i)||i<0)throw new Error("Invalid argument: Expected a non-negative integer digit");var n=1/(Math.pow(10,i)*2),o=t.getReal(),l=t.getImaginary(),c=r.getReal(),h=r.getImaginary();return Number.isNaN(o)&&Number.isNaN(l)&&Number.isNaN(c)&&Number.isNaN(h)?!0:Math.abs(o-c)<n&&Math.abs(l-h)<n}return Zn=e,Zn}var Qn,El;function Ip(){if(El)return Qn;El=1;function e(t){return t instanceof this?new this(t.getReal(),t.getImaginary()*-1):this.NaN}return Qn=e,Qn}var Jn,Al;function Lp(){if(Al)return Jn;Al=1;function e(t){return t instanceof this?this.divide(this.ONE,t):this.NaN}return Jn=e,Jn}var to,Cl;function Rp(){if(Cl)return to;Cl=1;function e(t,r){return!(t instanceof this)||!(r instanceof this)?this.NaN:new this(t.re+r.re,t.im+r.im)}return to=e,to}var eo,kl;function Op(){if(kl)return eo;kl=1;function e(t,r){return!(t instanceof this)||!(r instanceof this)?this.NaN:new this(t.re-r.re,t.im-r.im)}return eo=e,eo}var ro,$l;function Mp(){if($l)return ro;$l=1;function e(t,r){if(!(t instanceof this)||!(r instanceof this))return this.NaN;var i=t.re,n=t.im,o=r.re,l=r.im;return new this(i*o-n*l,i*l+n*o)}return ro=e,ro}var io,Pl;function zp(){if(Pl)return io;Pl=1;function e(t,r){if(!(t instanceof this)||!(r instanceof this))return this.NaN;var i=t.re,n=t.im,o=r.re,l=r.im;if(Math.abs(o)<this.EPSILON&&Math.abs(l)<this.EPSILON)return this.NaN;var c=Math.pow(o,2)+Math.pow(l,2);return new this((i*o+n*l)/c,(n*o-i*l)/c)}return io=e,io}var no,Tl;function Np(){if(Tl)return no;Tl=1;function e(t){if(!(t instanceof this))return this.NaN;var r=t.getReal(),i=t.getImaginary(),n=Math.exp(r);return new this(n*Math.cos(i),n*Math.sin(i))}return no=e,no}var oo,Il;function Dp(){if(Il)return oo;Il=1;function e(t){if(!(t instanceof this))return this.NaN;var r=t.getModulus(),i=t.getArgument();return r<this.EPSILON||i===void 0?this.NaN:new this(Math.log(r),i)}return oo=e,oo}var so,Ll;function Up(){if(Ll)return so;Ll=1;function e(t,r){return!(t instanceof this)||typeof r!="number"&&!(r instanceof this)?this.NaN:typeof r=="number"?!Number.isFinite(r)||Number.isNaN(r)?this.NaN:r===0?this.ONE:this.isEqual(t,this.ZERO)?this.ZERO:this.exp(this.multiply(new this(r,0),this.log(t))):r instanceof this?this.exp(this.multiply(r,this.log(t))):this.NaN}return so=e,so}var ao,Rl;function qp(){if(Rl)return ao;Rl=1;function e(t){if(!(t instanceof this))return this.NaN;var r=t.getReal(),i=t.getImaginary();return new this(Math.sin(r)*Math.cosh(i),Math.cos(r)*Math.sinh(i))}return ao=e,ao}var lo,Ol;function Wp(){if(Ol)return lo;Ol=1;function e(t){if(!(t instanceof this))return this.NaN;var r=t.getReal(),i=t.getImaginary();return new this(Math.cos(r)*Math.cosh(i),Math.sin(r)*Math.sinh(i)*-1)}return lo=e,lo}var co,Ml;function Fp(){if(Ml)return co;Ml=1;function e(t){return this.divide(this.sin(t),this.cos(t))}return co=e,co}var uo,zl;function Vp(){if(zl)return uo;zl=1;function e(t){return this.divide(this.ONE,this.sin(t))}return uo=e,uo}var ho,Nl;function Bp(){if(Nl)return ho;Nl=1;function e(t){return this.divide(this.ONE,this.cos(t))}return ho=e,ho}var po,Dl;function Hp(){if(Dl)return po;Dl=1;function e(t){return this.divide(this.ONE,this.tan(t))}return po=e,po}var fo,Ul;function jp(){if(Ul)return fo;Ul=1;function e(t){return this.multiply(new this(0,-1),this.log(this.add(this.multiply(new this(0,1),t),this.pow(this.subtract(this.ONE,this.pow(t,2)),.5))))}return fo=e,fo}var go,ql;function Kp(){if(ql)return go;ql=1;function e(t){return this.subtract(new this(Math.PI/2),this.asin(t))}return go=e,go}var vo,Wl;function Xp(){if(Wl)return vo;Wl=1;function e(t){return this.multiply(new this(0,1/2),this.subtract(this.log(this.subtract(this.ONE,this.multiply(new this(0,1),t))),this.log(this.add(this.ONE,this.multiply(new this(0,1),t)))))}return vo=e,vo}var mo,Fl;function Gp(){if(Fl)return mo;Fl=1;function e(t){return this.asin(this.inverse(t))}return mo=e,mo}var bo,Vl;function Yp(){if(Vl)return bo;Vl=1;function e(t){return this.acos(this.inverse(t))}return bo=e,bo}var yo,Bl;function Zp(){if(Bl)return yo;Bl=1;function e(t){return this.atan(this.inverse(t))}return yo=e,yo}var _o,Hl;function Qp(){if(Hl)return _o;Hl=1;function e(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(n){return typeof n}:e=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(r)}function t(r,i){var n=e(r),o=e(i);return n==="number"&&o==="undefined"?Number.isNaN(r)||!Number.isFinite(r)?(this.re=NaN,this.im=NaN,this):(this.re=r,this.im=0,this):n==="number"&&o==="number"?Number.isNaN(r)||Number.isNaN(i)||!Number.isFinite(r)||!Number.isFinite(i)?(this.re=NaN,this.im=NaN,this):(this.re=r,this.im=i,this):(this.re=NaN,this.im=NaN,this)}return t.prototype.getReal=Ep(),t.prototype.getImaginary=Ap(),t.prototype.getModulus=Cp(),t.prototype.getArgument=kp(),t.prototype.toString=$p(),t.isNaN=Pp(),t.isEqual=Tp(),t.conjugate=Ip(),t.inverse=Lp(),t.add=Rp(),t.subtract=Op(),t.multiply=Mp(),t.divide=zp(),t.exp=Np(),t.log=Dp(),t.pow=Up(),t.sin=qp(),t.cos=Wp(),t.tan=Fp(),t.csc=Vp(),t.sec=Bp(),t.cot=Hp(),t.asin=jp(),t.acos=Kp(),t.atan=Xp(),t.acsc=Gp(),t.asec=Yp(),t.acot=Zp(),t.NaN=new t(NaN),t.ONE=new t(1),t.ZERO=new t(0),t.PI=new t(Math.PI),t.E=new t(Math.E),t.EPSILON=1/(Math.pow(10,15)*2),_o=t,_o}var wo,jl;function Jp(){if(jl)return wo;jl=1;function e(g,y){return o(g)||n(g,y)||r(g,y)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(g,y){if(!!g){if(typeof g=="string")return i(g,y);var w=Object.prototype.toString.call(g).slice(8,-1);if(w==="Object"&&g.constructor&&(w=g.constructor.name),w==="Map"||w==="Set")return Array.from(g);if(w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))return i(g,y)}}function i(g,y){(y==null||y>g.length)&&(y=g.length);for(var w=0,A=new Array(y);w<y;w++)A[w]=g[w];return A}function n(g,y){var w=g==null?null:typeof Symbol<"u"&&g[Symbol.iterator]||g["@@iterator"];if(w!=null){var A=[],x=!0,E=!1,$,P;try{for(w=w.call(g);!(x=($=w.next()).done)&&(A.push($.value),!(y&&A.length===y));x=!0);}catch(L){E=!0,P=L}finally{try{!x&&w.return!=null&&w.return()}finally{if(E)throw P}}return A}}function o(g){if(Array.isArray(g))return g}var l=Qp(),c=De(),h=ut,a=h.INVALID_SQUARE_MATRIX;function d(){if(!this.isSquare())throw new Error(a);if(this._eigenvalues!==void 0)return this._eigenvalues;var g=this.size()[0],y=[],w=this._digit,A=1/(Math.pow(10,w)*2),x=c.clone(this)._matrix,E=!0,$=!1;s(x,w);for(var P=g-1;P>0;P--){var L=0,M=void 0;if($){$=!1;continue}for(var z=x[g-1][g-1];;){E?M=Math.abs(x[P][P-1]):M=v(x[P-1][P-1],x[P-1][P],x[P][P-1],x[P][P]).metric;for(var q=0;q<g;q++)x[q][q]-=z;u(x,w);for(var N=0;N<g;N++)x[N][N]+=z;if(E&&M<Math.abs(x[P][P-1])&&L++,E&&Math.abs(x[P][P-1])<A){y[P]=new l(x[P][P]);break}var W=v(x[P-1][P-1],x[P-1][P],x[P][P-1],x[P][P]),B=W.metric,V=W.eigen1,Q=W.eigen2;if(!E&&Math.abs(M-B)<A){E=!0,$=!0;var J=V.re,ht=V.im,st=Q.re,pt=Q.im;y[P]=new l(J,ht),y[P-1]=new l(st,pt);break}L>3&&(E=!1)}}return $||(y[0]=new l(x[0][0])),this._eigenvalues=y,y}function s(g,y){for(var w=g.length,A=1/(Math.pow(10,y)*2),x=0;x<w-2;x++){for(var E=0,$=new Array(w-x-1),P=x+1;P<w;P++){var L=g[P][x];E+=Math.pow(L,2),$[P-x-1]=L}if(E=Math.sqrt(E),!(Math.abs(E)<A)){$[0]>=0?$[0]+=E:$[0]-=E;for(var M=0,z=0;z<$.length;z++)M+=Math.pow($[z],2);M=Math.sqrt(M);for(var q=0;q<$.length;q++)$[q]/=M;for(var N=x;N<w;N++){for(var W=new Array(w-x-1),B=x+1;B<w;B++)W[B-x-1]=g[B][N];for(var V=0,Q=0;Q<W.length;Q++)V+=W[Q]*$[Q];V*=2;for(var J=x+1;J<w;J++)N===x&&J!==x+1?g[J][N]=0:g[J][N]=W[J-x-1]-V*$[J-x-1]}for(var ht=0;ht<w;ht++){for(var st=new Array(w-x-1),pt=x+1;pt<w;pt++)st[pt-x-1]=g[ht][pt];for(var Y=0,H=0;H<st.length;H++)Y+=st[H]*$[H];Y*=2;for(var bt=x+1;bt<w;bt++)g[ht][bt]=st[bt-x-1]-Y*$[bt-x-1]}}}}function u(g,y){for(var w=g.length,A=1/(Math.pow(10,y)*2),x=new Array(w-1),E=0;E<w-1;E++){var $=g[E][E],P=g[E+1][E],L=Math.sqrt(Math.pow($,2)+Math.pow(P,2));if(!(L<A)){var M=$/L,z=P*-1/L;x[E]=[z,M];for(var q=new Array(w-E),N=new Array(w-E),W=E;W<w;W++)q[W-E]=g[E][W],N[W-E]=g[E+1][W];for(var B=E;B<w;B++)g[E][B]=M*q[B-E]+z*-1*N[B-E],E===B?g[E+1][B]=0:g[E+1][B]=z*q[B-E]+M*N[B-E]}}for(var V=0;V<w-1;V++)if(!!x[V]){for(var Q=e(x[V],2),J=Q[0],ht=Q[1],st=new Array(V+2),pt=new Array(V+2),Y=0;Y<=V+1;Y++)st[Y]=g[Y][V],pt[Y]=g[Y][V+1];for(var H=0;H<=V+1;H++)g[H][V]=st[H]*ht-pt[H]*J,g[H][V+1]=st[H]*J+pt[H]*ht}}function v(g,y,w,A){var x=(g+A)*-1,E=g*A-w*y,$=Math.pow(x,2)-4*E,P,L,M,z;return $>=0?(L=0,z=0,x>=0?P=(x*-1-Math.sqrt($))/2:P=(x*-1+Math.sqrt($))/2,M=E/P):(P=-x/2,M=P,L=Math.sqrt($*-1)/2,z=L*-1),{metric:Math.sqrt(Math.pow(P,2)+Math.pow(L,2)),eigen1:{re:P,im:L},eigen2:{re:M,im:z}}}return wo=d,wo}var xo,Kl;function tf(){if(Kl)return xo;Kl=1;function e(){if(this._nullity!==void 0)return this._nullity;var t=this.size()[1],r=this.rank();return this._nullity=t-r,this._nullity}return xo=e,xo}var So,Xl;function ef(){if(Xl)return So;Xl=1;function e(d,s){return o(d)||n(d,s)||r(d,s)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(d,s){if(!!d){if(typeof d=="string")return i(d,s);var u=Object.prototype.toString.call(d).slice(8,-1);if(u==="Object"&&d.constructor&&(u=d.constructor.name),u==="Map"||u==="Set")return Array.from(d);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return i(d,s)}}function i(d,s){(s==null||s>d.length)&&(s=d.length);for(var u=0,v=new Array(s);u<s;u++)v[u]=d[u];return v}function n(d,s){var u=d==null?null:typeof Symbol<"u"&&d[Symbol.iterator]||d["@@iterator"];if(u!=null){var v=[],g=!0,y=!1,w,A;try{for(u=u.call(d);!(g=(w=u.next()).done)&&(v.push(w.value),!(s&&v.length===s));g=!0);}catch(x){y=!0,A=x}finally{try{!g&&u.return!=null&&u.return()}finally{if(y)throw A}}return v}}function o(d){if(Array.isArray(d))return d}var l=De(),c=ut,h=c.INVALID_P_NORM;function a(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:2,s=this.size(),u=e(s,2),v=u[0],g=u[1];if(d!==1&&d!==2&&d!==1/0&&d!=="F")throw new Error(h);var y=this._matrix,w=0;if(d===1){for(var A=0;A<g;A++){for(var x=0,E=0;E<v;E++)x+=Math.abs(y[E][A]);x>w&&(w=x)}return w}if(d===2){for(var $=l.transpose(this),P=l.multiply($,this),L=P.eigenvalues(),M=0;M<L.length;M++){var z=L[M].getModulus();z>w&&(w=z)}return Math.sqrt(w)}if(d===1/0){for(var q=0;q<v;q++){for(var N=0,W=0;W<g;W++)N+=Math.abs(y[q][W]);N>w&&(w=N)}return w}for(var B=0;B<v;B++)for(var V=0;V<g;V++)w+=Math.pow(y[B][V],2);return Math.sqrt(w)}return So=a,So}var Eo,Gl;function rf(){if(Gl)return Eo;Gl=1;function e(h,a){return o(h)||n(h,a)||r(h,a)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(h,a){if(!!h){if(typeof h=="string")return i(h,a);var d=Object.prototype.toString.call(h).slice(8,-1);if(d==="Object"&&h.constructor&&(d=h.constructor.name),d==="Map"||d==="Set")return Array.from(h);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return i(h,a)}}function i(h,a){(a==null||a>h.length)&&(a=h.length);for(var d=0,s=new Array(a);d<a;d++)s[d]=h[d];return s}function n(h,a){var d=h==null?null:typeof Symbol<"u"&&h[Symbol.iterator]||h["@@iterator"];if(d!=null){var s=[],u=!0,v=!1,g,y;try{for(d=d.call(h);!(u=(g=d.next()).done)&&(s.push(g.value),!(a&&s.length===a));u=!0);}catch(w){v=!0,y=w}finally{try{!u&&d.return!=null&&d.return()}finally{if(v)throw y}}return s}}function o(h){if(Array.isArray(h))return h}var l=De();function c(){if(this._rank!==void 0)return this._rank;var h=1/(Math.pow(10,this._digit)*2),a=l.QR(this)[1],d=a._matrix,s=a.size(),u=e(s,2),v=u[0],g=u[1];if(v===0)return this._rank=1,1;for(var y=0,w=0;w<v;w++)for(var A=w;A<g;A++)if(Math.abs(d[w][A])>=h){y++;break}return this._rank=y,y}return Eo=c,Eo}var Ao,Yl;function nf(){if(Yl)return Ao;Yl=1;function e(){if(this._size!==void 0)return this._size;var t=this._matrix;return t.length===0?(this._size=[0,0],this._size):(this._size=[t.length,t[0].length],this._size)}return Ao=e,Ao}var Co,Zl;function of(){if(Zl)return Co;Zl=1;var e=ut,t=e.INVALID_SQUARE_MATRIX;function r(){var i=this._isSquare!==void 0?this._isSquare:this.isSquare();if(!i)throw new Error(t);if(this._trace!==void 0)return this._trace;for(var n=this._matrix,o=n.length,l=0,c=0;c<o;c++)l+=n[c][c];return this._trace=l,l}return Co=r,Co}var ko,Ql;function sf(){if(Ql)return ko;Ql=1;function e(d,s){return o(d)||n(d,s)||r(d,s)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(d,s){if(!!d){if(typeof d=="string")return i(d,s);var u=Object.prototype.toString.call(d).slice(8,-1);if(u==="Object"&&d.constructor&&(u=d.constructor.name),u==="Map"||u==="Set")return Array.from(d);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return i(d,s)}}function i(d,s){(s==null||s>d.length)&&(s=d.length);for(var u=0,v=new Array(s);u<s;u++)v[u]=d[u];return v}function n(d,s){var u=d==null?null:typeof Symbol<"u"&&d[Symbol.iterator]||d["@@iterator"];if(u!=null){var v=[],g=!0,y=!1,w,A;try{for(u=u.call(d);!(g=(w=u.next()).done)&&(v.push(w.value),!(s&&v.length===s));g=!0);}catch(x){y=!0,A=x}finally{try{!g&&u.return!=null&&u.return()}finally{if(y)throw A}}return v}}function o(d){if(Array.isArray(d))return d}var l=ut,c=l.INVALID_MATRIX,h=l.SIZE_INCOMPATIBLE;function a(d,s){if(!(d instanceof this)||!(s instanceof this))throw new Error(c);var u=d.size(),v=e(u,2),g=v[0],y=v[1],w=s.size(),A=e(w,2),x=A[0],E=A[1];if(g!==x||y!==E)throw new Error(h);var $=d._matrix,P=s._matrix;return this.generate(g,y,function(L,M){return $[L][M]+P[L][M]})}return ko=a,ko}var $o,Jl;function af(){if(Jl)return $o;Jl=1;var e=ut,t=e.INVALID_MATRIX,r=e.INVALID_SQUARE_MATRIX,i=e.SINGULAR_MATRIX,n=De();function o(c){if(!(c instanceof this))throw new Error(t);if(!c.isSquare())throw new Error(r);var h=c.size()[0];if(h===0)return new n([]);for(var a=1/(Math.pow(10,c._digit)*2),d=this.identity(h)._matrix,s=this.clone(c)._matrix,u=l(h),v=0;v<h;v++){for(var g=v,y=s[u[v]][v];Math.abs(y)<a&&g<h-1;)g++,y=s[u[g]][v];if(Math.abs(y)<a)throw new Error(i);if(v!==g){var w=u[v];u[v]=u[g],u[g]=w}for(var A=u[v],x=0;x<h;x++){var E=u[x];if(x===v){for(var $=0;$<h;$++)$===v&&(s[E][$]=1),$>v&&(s[E][$]/=y),d[E][$]/=y;y=1}if(x!==v&&Math.abs(s[E][v])>=a)for(var P=s[E][v]/y,L=0;L<h;L++)L===v&&(s[E][L]=0),L>v&&(s[E][L]-=P*s[A][L]),d[E][L]-=P*d[A][L]}}for(var M=0;M<h;M++)s[M]=d[u[M]];return new this(s)}function l(c){for(var h=new Array(c),a=0;a<c;a++)h[a]=a;return h}return $o=o,$o}var Po,tc;function Xi(){if(tc)return Po;tc=1;var e=ut,t=e.INVALID_ROW_COL;return Po=function(i,n){if(!Number.isInteger(i)||i<0||!Number.isInteger(n)||n<0)throw new Error(t);if(i===0||n===0)return[];for(var o=new Array(i),l=0;l<i;l++)o[l]=new Array(n);return o},Po}var To,ec;function lf(){if(ec)return To;ec=1;function e(s,u){return o(s)||n(s,u)||r(s,u)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(s,u){if(!!s){if(typeof s=="string")return i(s,u);var v=Object.prototype.toString.call(s).slice(8,-1);if(v==="Object"&&s.constructor&&(v=s.constructor.name),v==="Map"||v==="Set")return Array.from(s);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return i(s,u)}}function i(s,u){(u==null||u>s.length)&&(u=s.length);for(var v=0,g=new Array(u);v<u;v++)g[v]=s[v];return g}function n(s,u){var v=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(v!=null){var g=[],y=!0,w=!1,A,x;try{for(v=v.call(s);!(y=(A=v.next()).done)&&(g.push(A.value),!(u&&g.length===u));y=!0);}catch(E){w=!0,x=E}finally{try{!y&&v.return!=null&&v.return()}finally{if(w)throw x}}return g}}function o(s){if(Array.isArray(s))return s}var l=Xi(),c=ut,h=c.INVALID_MATRIX,a=c.SIZE_INCOMPATIBLE;function d(s,u){if(!(s instanceof this)||!(u instanceof this))throw new Error(h);var v=s.size(),g=e(v,2),y=g[0],w=g[1],A=u.size(),x=e(A,2),E=x[0],$=x[1];if(w!==E)throw new Error(a);for(var P=s._matrix,L=u._matrix,M=l(y,$),z=0;z<y;z++)for(var q=0;q<$;q++){M[z][q]=0;for(var N=0;N<E;N++)M[z][q]+=P[z][N]*L[N][q]}return new this(M)}return To=d,To}var Io,rc;function cf(){if(rc)return Io;rc=1;var e=ut,t=e.INVALID_MATRIX,r=e.INVALID_SQUARE_MATRIX,i=e.INVALID_EXPONENT;function n(o,l){if(!(o instanceof this))throw new Error(t);if(!o.isSquare())throw new Error(r);if(!Number.isInteger(l)||l<0)throw new Error(i);var c=o.size()[0];if(l===0)return this.identity(c);if(l===1)return this.clone(o);if(l%2===0){var h=this.pow(o,l/2);return this.multiply(h,h)}var a=this.pow(o,(l-1)/2);return this.multiply(this.multiply(a,a),o)}return Io=n,Io}var Lo,ic;function df(){if(ic)return Lo;ic=1;function e(a,d){return o(a)||n(a,d)||r(a,d)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(a,d){if(!!a){if(typeof a=="string")return i(a,d);var s=Object.prototype.toString.call(a).slice(8,-1);if(s==="Object"&&a.constructor&&(s=a.constructor.name),s==="Map"||s==="Set")return Array.from(a);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return i(a,d)}}function i(a,d){(d==null||d>a.length)&&(d=a.length);for(var s=0,u=new Array(d);s<d;s++)u[s]=a[s];return u}function n(a,d){var s=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(s!=null){var u=[],v=!0,g=!1,y,w;try{for(s=s.call(a);!(v=(y=s.next()).done)&&(u.push(y.value),!(d&&u.length===d));v=!0);}catch(A){g=!0,w=A}finally{try{!v&&s.return!=null&&s.return()}finally{if(g)throw w}}return u}}function o(a){if(Array.isArray(a))return a}var l=ut,c=l.SIZE_INCOMPATIBLE,h=l.INVALID_MATRIX;return Lo=function(d,s){if(!(d instanceof this)||!(s instanceof this))throw new Error(h);var u=d.size(),v=e(u,2),g=v[0],y=v[1],w=s.size(),A=e(w,2),x=A[0],E=A[1];if(g!==x||y!==E)throw new Error(c);var $=d._matrix,P=s._matrix;return this.generate(g,y,function(L,M){return $[L][M]-P[L][M]})},Lo}var Ro,nc;function uf(){if(nc)return Ro;nc=1;function e(a,d){return o(a)||n(a,d)||r(a,d)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(a,d){if(!!a){if(typeof a=="string")return i(a,d);var s=Object.prototype.toString.call(a).slice(8,-1);if(s==="Object"&&a.constructor&&(s=a.constructor.name),s==="Map"||s==="Set")return Array.from(a);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return i(a,d)}}function i(a,d){(d==null||d>a.length)&&(d=a.length);for(var s=0,u=new Array(d);s<d;s++)u[s]=a[s];return u}function n(a,d){var s=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(s!=null){var u=[],v=!0,g=!1,y,w;try{for(s=s.call(a);!(v=(y=s.next()).done)&&(u.push(y.value),!(d&&u.length===d));v=!0);}catch(A){g=!0,w=A}finally{try{!v&&s.return!=null&&s.return()}finally{if(g)throw w}}return u}}function o(a){if(Array.isArray(a))return a}var l=ut,c=l.INVALID_MATRIX;function h(a){if(!(a instanceof this))throw new Error(c);var d=a.size(),s=e(d,2),u=s[0],v=s[1],g=a._matrix;return this.generate(v,u,function(y,w){return g[w][y]})}return Ro=h,Ro}var Oo,oc;function hf(){if(oc)return Oo;oc=1;function e(g,y){return o(g)||n(g,y)||r(g,y)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(g,y){if(!!g){if(typeof g=="string")return i(g,y);var w=Object.prototype.toString.call(g).slice(8,-1);if(w==="Object"&&g.constructor&&(w=g.constructor.name),w==="Map"||w==="Set")return Array.from(g);if(w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))return i(g,y)}}function i(g,y){(y==null||y>g.length)&&(y=g.length);for(var w=0,A=new Array(y);w<y;w++)A[w]=g[w];return A}function n(g,y){var w=g==null?null:typeof Symbol<"u"&&g[Symbol.iterator]||g["@@iterator"];if(w!=null){var A=[],x=!0,E=!1,$,P;try{for(w=w.call(g);!(x=($=w.next()).done)&&(A.push($.value),!(y&&A.length===y));x=!0);}catch(L){E=!0,P=L}finally{try{!x&&w.return!=null&&w.return()}finally{if(E)throw P}}return A}}function o(g){if(Array.isArray(g))return g}var l=Xi(),c=ut,h=c.INVALID_MATRIX,a=c.INVALID_UPPER_TRIANGULAR_MATRIX,d=c.INVALID_SQUARE_MATRIX,s=c.SIZE_INCOMPATIBLE,u=c.NO_UNIQUE_SOLUTION;function v(g,y){if(!(g instanceof this)||!(y instanceof this))throw new Error(h);if(!g.isUpperTriangular())throw new Error(a);if(!g.isSquare())throw new Error(d);var w=g.size()[0],A=y.size(),x=e(A,2),E=x[0],$=x[1],P=g._matrix,L=y._matrix;if(E!==w||$!==1)throw new Error(s);for(var M=1/(Math.pow(10,g._digit)*2),z=0;z<w;z++)if(Math.abs(P[z][z])<M)throw new Error(u);for(var q=l(w,1),N=w-1;N>=0;N--){for(var W=0,B=N+1;B<w;B++)W+=q[B][0]*P[N][B];q[N][0]=(L[N][0]-W)/P[N][N]}return new this(q)}return Oo=v,Oo}var Mo,sc;function pf(){if(sc)return Mo;sc=1;function e(g,y){return o(g)||n(g,y)||r(g,y)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(g,y){if(!!g){if(typeof g=="string")return i(g,y);var w=Object.prototype.toString.call(g).slice(8,-1);if(w==="Object"&&g.constructor&&(w=g.constructor.name),w==="Map"||w==="Set")return Array.from(g);if(w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))return i(g,y)}}function i(g,y){(y==null||y>g.length)&&(y=g.length);for(var w=0,A=new Array(y);w<y;w++)A[w]=g[w];return A}function n(g,y){var w=g==null?null:typeof Symbol<"u"&&g[Symbol.iterator]||g["@@iterator"];if(w!=null){var A=[],x=!0,E=!1,$,P;try{for(w=w.call(g);!(x=($=w.next()).done)&&(A.push($.value),!(y&&A.length===y));x=!0);}catch(L){E=!0,P=L}finally{try{!x&&w.return!=null&&w.return()}finally{if(E)throw P}}return A}}function o(g){if(Array.isArray(g))return g}var l=Xi(),c=ut,h=c.INVALID_MATRIX,a=c.INVALID_LOWER_TRIANGULAR_MATRIX,d=c.INVALID_SQUARE_MATRIX,s=c.SIZE_INCOMPATIBLE,u=c.NO_UNIQUE_SOLUTION;function v(g,y){if(!(g instanceof this)||!(y instanceof this))throw new Error(h);if(!g.isLowerTriangular())throw new Error(a);if(!g.isSquare())throw new Error(d);var w=g.size()[0],A=y.size(),x=e(A,2),E=x[0],$=x[1],P=g._matrix,L=y._matrix;if(w!==E||$!==1)throw new Error(s);for(var M=1/(Math.pow(10,g._digit)*2),z=0;z<w;z++)if(Math.abs(P[z][z])<M)throw new Error(u);for(var q=l(w,1),N=0;N<w;N++){for(var W=0,B=0;B<N;B++)W+=q[B][0]*P[N][B];q[N][0]=(L[N][0]-W)/P[N][N]}return new this(q)}return Mo=v,Mo}var zo,ac;function ff(){if(ac)return zo;ac=1;function e(u,v){return o(u)||n(u,v)||r(u,v)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(u,v){if(!!u){if(typeof u=="string")return i(u,v);var g=Object.prototype.toString.call(u).slice(8,-1);if(g==="Object"&&u.constructor&&(g=u.constructor.name),g==="Map"||g==="Set")return Array.from(u);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return i(u,v)}}function i(u,v){(v==null||v>u.length)&&(v=u.length);for(var g=0,y=new Array(v);g<v;g++)y[g]=u[g];return y}function n(u,v){var g=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(g!=null){var y=[],w=!0,A=!1,x,E;try{for(g=g.call(u);!(w=(x=g.next()).done)&&(y.push(x.value),!(v&&y.length===v));w=!0);}catch($){A=!0,E=$}finally{try{!w&&g.return!=null&&g.return()}finally{if(A)throw E}}return y}}function o(u){if(Array.isArray(u))return u}var l=ut,c=l.INVALID_MATRIX,h=l.NO_UNIQUE_SOLUTION,a=l.INVALID_SQUARE_MATRIX,d=l.SIZE_INCOMPATIBLE;function s(u,v){if(!(u instanceof this)||!(v instanceof this))throw new Error(c);if(!u.isSquare())throw new Error(a);var g=u.size(),y=e(g,2),w=y[0],A=y[1],x=v.size(),E=e(x,2),$=E[0],P=E[1];if(A!==$||P!==1)throw new Error(d);for(var L=1/(Math.pow(10,u._digit)*2),M=this.LU(u,!0),z=e(M,2),q=z[0],N=z[1],W=N._matrix,B=v._matrix,V=w-1;V>=0;V--)if(Math.abs(W[V][V])<L)throw new Error(h);for(var Q=new Array($),J=new Array($),ht=0;ht<$;ht++)Q[ht]=B[q[ht]][0];for(var st=0;st<w;st++){for(var pt=0,Y=0;Y<st;Y++)pt+=J[Y]*W[st][Y];J[st]=Q[st]-pt}for(var H=w-1;H>=0;H--){for(var bt=0,It=H+1;It<w;It++)bt+=W[H][It]*Q[It];Q[H]=(J[H]-bt)/W[H][H]}for(var yt=0;yt<$;yt++)J[yt]=[Q[yt]];return new this(J)}return zo=s,zo}var No,lc;function gf(){if(lc)return No;lc=1;function e(s,u){return o(s)||n(s,u)||r(s,u)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(s,u){if(!!s){if(typeof s=="string")return i(s,u);var v=Object.prototype.toString.call(s).slice(8,-1);if(v==="Object"&&s.constructor&&(v=s.constructor.name),v==="Map"||v==="Set")return Array.from(s);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return i(s,u)}}function i(s,u){(u==null||u>s.length)&&(u=s.length);for(var v=0,g=new Array(u);v<u;v++)g[v]=s[v];return g}function n(s,u){var v=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(v!=null){var g=[],y=!0,w=!1,A,x;try{for(v=v.call(s);!(y=(A=v.next()).done)&&(g.push(A.value),!(u&&g.length===u));y=!0);}catch(E){w=!0,x=E}finally{try{!y&&v.return!=null&&v.return()}finally{if(w)throw x}}return g}}function o(s){if(Array.isArray(s))return s}var l=ut,c=l.INVALID_MATRIX;function h(s){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(!(s instanceof this))throw new Error(c);for(var v=s.size(),g=e(v,2),y=g[0],w=g[1],A=Math.min(y,w),x=1/(Math.pow(10,s._digit)*2),E=a(y),$=this.clone(s)._matrix,P=0;P<y-1;P++){var L=Math.min(P,w);d($,E,L,y,w);var M=E[P],z=$[M][L];if(!(Math.abs(z)<x))for(var q=P+1;q<y;q++){var N=E[q],W=$[N][L];if(Math.abs(W)>=x){for(var B=W/z,V=L;V<w;V++)$[N][V]-=B*$[M][V];$[N][L]=B}}}for(var Q=new Array(y),J=0;J<y;J++)Q[J]=$[E[J]];if(u)return[E,new this(Q)];var ht=this.generate(y,y,function(Y,H){var bt=E[Y];return H===bt?1:0}),st=this.generate(y,A,function(Y,H){return Y===H?1:Y<H?0:Q[Y][H]}),pt=this.generate(A,w,function(Y,H){return Y>H?0:Q[Y][H]});return[ht,st,pt]}function a(s){for(var u=new Array(s),v=0;v<s;v++)u[v]=v;return u}function d(s,u,v,g,y){for(var w=Math.min(v,y),A=v,x=Math.abs(s[u[v]][w]),E=v+1;E<g;E++){var $=Math.abs(s[u[E]][w]);$>x&&(A=E,x=$)}var P=u[v];u[v]=u[A],u[A]=P}return No=h,No}var Do,cc;function vf(){if(cc)return Do;cc=1;function e(a,d){return o(a)||n(a,d)||r(a,d)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(a,d){if(!!a){if(typeof a=="string")return i(a,d);var s=Object.prototype.toString.call(a).slice(8,-1);if(s==="Object"&&a.constructor&&(s=a.constructor.name),s==="Map"||s==="Set")return Array.from(a);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return i(a,d)}}function i(a,d){(d==null||d>a.length)&&(d=a.length);for(var s=0,u=new Array(d);s<d;s++)u[s]=a[s];return u}function n(a,d){var s=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(s!=null){var u=[],v=!0,g=!1,y,w;try{for(s=s.call(a);!(v=(y=s.next()).done)&&(u.push(y.value),!(d&&u.length===d));v=!0);}catch(A){g=!0,w=A}finally{try{!v&&s.return!=null&&s.return()}finally{if(g)throw w}}return u}}function o(a){if(Array.isArray(a))return a}var l=ut,c=l.INVALID_MATRIX;function h(a){if(!(a instanceof this))throw new Error(c);for(var d=a.size(),s=e(d,2),u=s[0],v=s[1],g=Math.min(u,v),y=1/(Math.pow(10,a._digit)*2),w=this.clone(a)._matrix,A=this.identity(u)._matrix,x=0;x<g;x++){for(var E=!0,$=x+1;$<u;$++)if(Math.abs(w[$][x])>=y){E=!1;break}if(!E){for(var P=0,L=x;L<u;L++)P+=Math.pow(w[L][x],2);P=Math.sqrt(P);var M=-1;w[x][x]<0&&(M=1);for(var z=w[x][x]-M*P,q=new Array(u-x),N=0;N<u-x;N++)q[N]=w[N+x][x]/z;q[0]=1;for(var W=-1*M*z/P,B=new Array(u-x),V=0;V<u-x;V++){for(var Q=new Array(v),J=0;J<v;J++)Q[J]=w[x+V][J];B[V]=Q}for(var ht=x;ht<u;ht++)for(var st=0;st<v;st++){for(var pt=0,Y=0;Y<u-x;Y++)pt+=B[Y][st]*q[Y];w[ht][st]=B[ht-x][st]-W*q[ht-x]*pt}for(var H=new Array(u),bt=0;bt<u;bt++){for(var It=new Array(u-x),yt=0;yt<u-x;yt++)It[yt]=A[bt][x+yt];H[bt]=It}for(var Ct=0;Ct<u;Ct++)for(var Ht=x;Ht<u;Ht++){for(var Ue=0,ge=0;ge<u-x;ge++)Ue+=H[Ct][ge]*q[ge];A[Ct][Ht]=H[Ct][Ht-x]-W*q[Ht-x]*Ue}}}for(var Zt=0;Zt<u;Zt++)for(var oe=0;oe<v;oe++)Zt>oe&&(w[Zt][oe]=0);return[new this(A),new this(w)]}return Do=h,Do}var Uo,dc;function mf(){if(dc)return Uo;dc=1;function e(a,d){return o(a)||n(a,d)||r(a,d)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(a,d){if(!!a){if(typeof a=="string")return i(a,d);var s=Object.prototype.toString.call(a).slice(8,-1);if(s==="Object"&&a.constructor&&(s=a.constructor.name),s==="Map"||s==="Set")return Array.from(a);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return i(a,d)}}function i(a,d){(d==null||d>a.length)&&(d=a.length);for(var s=0,u=new Array(d);s<d;s++)u[s]=a[s];return u}function n(a,d){var s=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(s!=null){var u=[],v=!0,g=!1,y,w;try{for(s=s.call(a);!(v=(y=s.next()).done)&&(u.push(y.value),!(d&&u.length===d));v=!0);}catch(A){g=!0,w=A}finally{try{!v&&s.return!=null&&s.return()}finally{if(g)throw w}}return u}}function o(a){if(Array.isArray(a))return a}var l=ut,c=l.INVALID_MATRIX;function h(a){if(!(a instanceof this))throw new Error(c);var d=a.size(),s=e(d,2),u=s[0],v=s[1],g=a._matrix;return this.generate(u,v,function(y,w){return g[y][w]})}return Uo=h,Uo}var qo,uc;function bf(){if(uc)return qo;uc=1;function e(s,u){return o(s)||n(s,u)||r(s,u)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(s,u){if(!!s){if(typeof s=="string")return i(s,u);var v=Object.prototype.toString.call(s).slice(8,-1);if(v==="Object"&&s.constructor&&(v=s.constructor.name),v==="Map"||v==="Set")return Array.from(s);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return i(s,u)}}function i(s,u){(u==null||u>s.length)&&(u=s.length);for(var v=0,g=new Array(u);v<u;v++)g[v]=s[v];return g}function n(s,u){var v=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(v!=null){var g=[],y=!0,w=!1,A,x;try{for(v=v.call(s);!(y=(A=v.next()).done)&&(g.push(A.value),!(u&&g.length===u));y=!0);}catch(E){w=!0,x=E}finally{try{!y&&v.return!=null&&v.return()}finally{if(w)throw x}}return g}}function o(s){if(Array.isArray(s))return s}var l=ut,c=l.INVALID_ROW_COL,h=l.OVERFLOW_COLUMN,a=l.INVALID_MATRIX;function d(s,u){if(!(s instanceof this))throw new Error(a);if(!Number.isInteger(u)||u<0)throw new Error(c);var v=s.size(),g=e(v,2),y=g[0],w=g[1];if(u>=w)throw new Error(h);var A=s._matrix;return this.generate(y,1,function(x){return A[x][u]})}return qo=d,qo}var Wo,hc;function yf(){if(hc)return Wo;hc=1;var e=De(),t=kd,r=ut,i=r.INVALID_ARRAY,n=r.EXPECTED_ARRAY_OF_NUMBERS_OR_MATRICES,o=r.INVALID_SQUARE_MATRIX;function l(c){if(!Array.isArray(c))throw new Error(i);for(var h=c.length,a,d=0;d<h;d++){var s=c[d];if(!t(s)&&!(s instanceof e))throw new Error(n);if(t(s)){if(!a){a="number";continue}if(a!=="number")throw new Error(n)}else{if(!s.isSquare())throw new Error(o);if(!a){a="square";continue}if(a!=="square")throw new Error(n)}}if(a==="number")return e.generate(h,h,function(E,$){return E===$?c[E]:0});for(var u=0,v=new Array(h),g=0;g<h;g++){var y=c[g].size()[0];u+=y,v[g]=y}var w=0,A=0,x=v[w];return e.generate(u,u,function(E,$){E-A===x&&$-A===x&&(A+=x,w++);var P=E-A,L=$-A;for(x=v[w];x===0;)w++,x=v[w];return P<x&&P>=0&&L<x&&L>=0?c[w]._matrix[P][L]:0})}return Wo=l,Wo}var Fo,pc;function _f(){if(pc)return Fo;pc=1;function e(a,d){return o(a)||n(a,d)||r(a,d)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(a,d){if(!!a){if(typeof a=="string")return i(a,d);var s=Object.prototype.toString.call(a).slice(8,-1);if(s==="Object"&&a.constructor&&(s=a.constructor.name),s==="Map"||s==="Set")return Array.from(a);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return i(a,d)}}function i(a,d){(d==null||d>a.length)&&(d=a.length);for(var s=0,u=new Array(d);s<d;s++)u[s]=a[s];return u}function n(a,d){var s=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(s!=null){var u=[],v=!0,g=!1,y,w;try{for(s=s.call(a);!(v=(y=s.next()).done)&&(u.push(y.value),!(d&&u.length===d));v=!0);}catch(A){g=!0,w=A}finally{try{!v&&s.return!=null&&s.return()}finally{if(g)throw w}}return u}}function o(a){if(Array.isArray(a))return a}var l=ut,c=l.INVALID_MATRIX;function h(a,d){if(!(a instanceof this))throw new Error(c);var s=a.size(),u=e(s,2),v=u[0],g=u[1],y=a._matrix;return this.generate(v,g,function(w,A){return d(y[w][A])})}return Fo=h,Fo}var Vo,fc;function wf(){if(fc)return Vo;fc=1;var e=Xi();function t(r,i,n){var o=e(r,i);if(r===0||i===0)return new this([]);for(var l=0;l<r;l++)for(var c=0;c<i;c++)o[l][c]=n(l,c);return new this(o)}return Vo=t,Vo}var Bo,gc;function xf(){if(gc)return Bo;gc=1;function e(a,d){return o(a)||n(a,d)||r(a,d)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(a,d){if(!!a){if(typeof a=="string")return i(a,d);var s=Object.prototype.toString.call(a).slice(8,-1);if(s==="Object"&&a.constructor&&(s=a.constructor.name),s==="Map"||s==="Set")return Array.from(a);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return i(a,d)}}function i(a,d){(d==null||d>a.length)&&(d=a.length);for(var s=0,u=new Array(d);s<d;s++)u[s]=a[s];return u}function n(a,d){var s=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(s!=null){var u=[],v=!0,g=!1,y,w;try{for(s=s.call(a);!(v=(y=s.next()).done)&&(u.push(y.value),!(d&&u.length===d));v=!0);}catch(A){g=!0,w=A}finally{try{!v&&s.return!=null&&s.return()}finally{if(g)throw w}}return u}}function o(a){if(Array.isArray(a))return a}var l=ut,c=l.INVALID_MATRIX;function h(a){if(!(a instanceof this))throw new Error(c);for(var d=a.size(),s=e(d,2),u=s[0],v=s[1],g=Math.min(u,v),y=a._matrix,w=new Array(g),A=0;A<g;A++)w[A]=y[A][A];return w}return Bo=h,Bo}var Ho,vc;function Sf(){if(vc)return Ho;vc=1;function e(t,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;return this.generate(t,r,function(){return Number.parseFloat((Math.random()*(n-i)+i).toFixed(o))})}return Ho=e,Ho}var jo,mc;function Ef(){if(mc)return jo;mc=1;function e(t){return this.generate(t,t,function(r,i){return r===i?1:0})}return jo=e,jo}var Ko,bc;function Af(){if(bc)return Ko;bc=1;function e(a,d){return o(a)||n(a,d)||r(a,d)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(a,d){if(!!a){if(typeof a=="string")return i(a,d);var s=Object.prototype.toString.call(a).slice(8,-1);if(s==="Object"&&a.constructor&&(s=a.constructor.name),s==="Map"||s==="Set")return Array.from(a);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return i(a,d)}}function i(a,d){(d==null||d>a.length)&&(d=a.length);for(var s=0,u=new Array(d);s<d;s++)u[s]=a[s];return u}function n(a,d){var s=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(s!=null){var u=[],v=!0,g=!1,y,w;try{for(s=s.call(a);!(v=(y=s.next()).done)&&(u.push(y.value),!(d&&u.length===d));v=!0);}catch(A){g=!0,w=A}finally{try{!v&&s.return!=null&&s.return()}finally{if(g)throw w}}return u}}function o(a){if(Array.isArray(a))return a}var l=ut,c=l.INVALID_MATRIX;function h(a,d){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5;if(!(a instanceof this)||!(d instanceof this))throw new Error(c);var u=a.size(),v=e(u,2),g=v[0],y=v[1],w=d.size(),A=e(w,2),x=A[0],E=A[1];if(g!==x||y!==E)return!1;for(var $=1/(Math.pow(10,s)*2),P=a._matrix,L=d._matrix,M=0;M<g;M++)for(var z=0;z<y;z++)if(Math.abs(P[M][z]-L[M][z])>=$)return!1;return!0}return Ko=h,Ko}var Xo,yc;function Cf(){if(yc)return Xo;yc=1;function e(s,u){return o(s)||n(s,u)||r(s,u)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(s,u){if(!!s){if(typeof s=="string")return i(s,u);var v=Object.prototype.toString.call(s).slice(8,-1);if(v==="Object"&&s.constructor&&(v=s.constructor.name),v==="Map"||v==="Set")return Array.from(s);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return i(s,u)}}function i(s,u){(u==null||u>s.length)&&(u=s.length);for(var v=0,g=new Array(u);v<u;v++)g[v]=s[v];return g}function n(s,u){var v=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(v!=null){var g=[],y=!0,w=!1,A,x;try{for(v=v.call(s);!(y=(A=v.next()).done)&&(g.push(A.value),!(u&&g.length===u));y=!0);}catch(E){w=!0,x=E}finally{try{!y&&v.return!=null&&v.return()}finally{if(w)throw x}}return g}}function o(s){if(Array.isArray(s))return s}var l=ut,c=l.INVALID_ROW_COL,h=l.OVERFLOW_ROW,a=l.INVALID_MATRIX;function d(s,u){if(!(s instanceof this))throw new Error(a);if(!Number.isInteger(u)||u<0)throw new Error(c);var v=s.size(),g=e(v,2),y=g[0],w=g[1];if(u>=y)throw new Error(h);var A=s._matrix;return this.generate(1,w,function(x,E){return A[u][E]})}return Xo=d,Xo}var Go,_c;function kf(){if(_c)return Go;_c=1;function e(A,x){return o(A)||n(A,x)||r(A,x)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(A,x){if(!!A){if(typeof A=="string")return i(A,x);var E=Object.prototype.toString.call(A).slice(8,-1);if(E==="Object"&&A.constructor&&(E=A.constructor.name),E==="Map"||E==="Set")return Array.from(A);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return i(A,x)}}function i(A,x){(x==null||x>A.length)&&(x=A.length);for(var E=0,$=new Array(x);E<x;E++)$[E]=A[E];return $}function n(A,x){var E=A==null?null:typeof Symbol<"u"&&A[Symbol.iterator]||A["@@iterator"];if(E!=null){var $=[],P=!0,L=!1,M,z;try{for(E=E.call(A);!(P=(M=E.next()).done)&&($.push(M.value),!(x&&$.length===x));P=!0);}catch(q){L=!0,z=q}finally{try{!P&&E.return!=null&&E.return()}finally{if(L)throw z}}return $}}function o(A){if(Array.isArray(A))return A}function l(A){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?l=function(E){return typeof E}:l=function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},l(A)}var c=ut,h=c.INVALID_MATRIX,a=c.EXPECTED_STRING_NUMBER_AT_POS_1_2,d=c.INVALID_ROW,s=c.INVALID_COLUMN,u=c.OVERFLOW_ROW,v=c.INVALID_ROWS_EXPRESSION,g=c.INVALID_COLUMNS_EXPRESSION,y=c.OVERFLOW_COLUMN;function w(A,x,E){if(!(A instanceof this))throw new Error(h);var $=l(x),P=l(E);if($!=="string"&&$!=="number"||P!=="string"&&P!=="number")throw new Error(a);var L=A.size(),M=e(L,2),z=M[0],q=M[1],N,W,B,V;if($==="number"){if(!Number.isInteger(x)||x<0)throw new Error(d);if(x>=z)throw new Error(u);N=x,W=x}else{var Q=x.split(":");if(Q.length!==2)throw new Error(v);var J=e(Q,2),ht=J[0],st=J[1];if(ht==="")N=0;else{var pt=Number(ht);if(!Number.isInteger(pt)||pt<0)throw new Error(d);if(pt>=z)throw new Error(u);N=pt}if(st==="")W=z-1;else{var Y=Number(st);if(!Number.isInteger(Y)||Y<0)throw new Error(d);if(Y>=z)throw new Error(u);W=Y}if(N>W)throw new Error(v)}if(P==="number"){if(!Number.isInteger(E)||E<0)throw new Error(s);if(E>=q)throw new Error(y);B=E,V=E}else{var H=E.split(":");if(H.length!==2)throw new Error(g);var bt=e(H,2),It=bt[0],yt=bt[1];if(It==="")B=0;else{var Ct=Number(It);if(!Number.isInteger(Ct)||Ct<0)throw new Error(s);if(Ct>=q)throw new Error(y);B=Ct}if(yt==="")V=q-1;else{var Ht=Number(yt);if(!Number.isInteger(Ht)||Ht<0)throw new Error(s);if(Ht>=q)throw new Error(y);V=Ht}if(B>V)throw new Error(g)}for(var Ue=A._matrix,ge=W-N+1,Zt=V-B+1,oe=new Array(ge),qe=N;qe<=W;qe++){for(var yr=new Array(Zt),Qe=B;Qe<=V;Qe++)yr[Qe-B]=Ue[qe][Qe];oe[qe-N]=yr}return new this(oe)}return Go=w,Go}var Yo,wc;function $f(){if(wc)return Yo;wc=1;function e(t,r){return r===void 0?this.generate(t,t,function(){return 0}):this.generate(t,r,function(){return 0})}return Yo=e,Yo}var Zo,xc;function Pf(){if(xc)return Zo;xc=1;var e=ut,t=e.SIZE_INCOMPATIBLE;function r(i,n,o){if(n*o!==i.length)throw new Error(t);return this.generate(n,o,function(l,c){return i[l*o+c]})}return Zo=r,Zo}var Qo,Sc;function Tf(){if(Sc)return Qo;Sc=1;function e(c,h){return o(c)||n(c,h)||r(c,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(c,h){if(!!c){if(typeof c=="string")return i(c,h);var a=Object.prototype.toString.call(c).slice(8,-1);if(a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set")return Array.from(c);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(c,h)}}function i(c,h){(h==null||h>c.length)&&(h=c.length);for(var a=0,d=new Array(h);a<h;a++)d[a]=c[a];return d}function n(c,h){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var d=[],s=!0,u=!1,v,g;try{for(a=a.call(c);!(s=(v=a.next()).done)&&(d.push(v.value),!(h&&d.length===h));s=!0);}catch(y){u=!0,g=y}finally{try{!s&&a.return!=null&&a.return()}finally{if(u)throw g}}return d}}function o(c){if(Array.isArray(c))return c}function l(){for(var c=this.size(),h=e(c,2),a=h[0],d=h[1],s=a*d,u=new Array(s),v=0;v<a;v++)for(var g=0;g<d;g++)u[v*d+g]=this._matrix[v][g];return u}return Qo=l,Qo}var Jo,Ec;function If(){if(Ec)return Jo;Ec=1;function e(d,s){return o(d)||n(d,s)||r(d,s)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(d,s){if(!!d){if(typeof d=="string")return i(d,s);var u=Object.prototype.toString.call(d).slice(8,-1);if(u==="Object"&&d.constructor&&(u=d.constructor.name),u==="Map"||u==="Set")return Array.from(d);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return i(d,s)}}function i(d,s){(s==null||s>d.length)&&(s=d.length);for(var u=0,v=new Array(s);u<s;u++)v[u]=d[u];return v}function n(d,s){var u=d==null?null:typeof Symbol<"u"&&d[Symbol.iterator]||d["@@iterator"];if(u!=null){var v=[],g=!0,y=!1,w,A;try{for(u=u.call(d);!(g=(w=u.next()).done)&&(v.push(w.value),!(s&&v.length===s));g=!0);}catch(x){y=!0,A=x}finally{try{!g&&u.return!=null&&u.return()}finally{if(y)throw A}}return v}}function o(d){if(Array.isArray(d))return d}var l=ut,c=l.INVALID_ROW_COL,h=l.OVERFLOW_INDEX;function a(d,s){if(!Number.isInteger(d)||d<0||!Number.isInteger(s)||s<0)throw new Error(c);var u=this._matrix,v=this.size(),g=e(v,2),y=g[0],w=g[1];if(d>=y||s>=w)throw new Error(h);return u[d][s]}return Jo=a,Jo}var ts,Ac;function Lf(){if(Ac)return ts;Ac=1;function e(c,h){return o(c)||n(c,h)||r(c,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(c,h){if(!!c){if(typeof c=="string")return i(c,h);var a=Object.prototype.toString.call(c).slice(8,-1);if(a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set")return Array.from(c);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(c,h)}}function i(c,h){(h==null||h>c.length)&&(h=c.length);for(var a=0,d=new Array(h);a<h;a++)d[a]=c[a];return d}function n(c,h){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var d=[],s=!0,u=!1,v,g;try{for(a=a.call(c);!(s=(v=a.next()).done)&&(d.push(v.value),!(h&&d.length===h));s=!0);}catch(y){u=!0,g=y}finally{try{!s&&a.return!=null&&a.return()}finally{if(u)throw g}}return d}}function o(c){if(Array.isArray(c))return c}function l(){for(var c=this._matrix,h=this.size(),a=e(h,2),d=a[0],s=a[1],u="",v=0;v<d;v++){for(var g=0;g<s;g++)u+=c[v][g].toString(),g!==s-1&&(u+=" ");v!==d-1&&(u+=`
`)}return u}return ts=l,ts}var es,Cc;function De(){if(Cc)return es;Cc=1;var e=fp,t=ut,r=t.INVALID_MATRIX;function i(n){if(!e(n))throw new Error(r);this._matrix=n,this._digit=8}return es=i,i.prototype.isDiagonal=gp(),i.prototype.isSkewSymmetric=vp(),i.prototype.isSquare=mp(),i.prototype.isSymmetric=bp(),i.prototype.isLowerTriangular=yp(),i.prototype.isUpperTriangular=_p(),i.prototype.isOrthogonal=wp(),i.prototype.cond=xp(),i.prototype.det=Sp(),i.prototype.eigenvalues=Jp(),i.prototype.nullity=tf(),i.prototype.norm=ef(),i.prototype.rank=rf(),i.prototype.size=nf(),i.prototype.trace=of(),i.add=sf(),i.inverse=af(),i.multiply=lf(),i.pow=cf(),i.subtract=df(),i.transpose=uf(),i.backward=hf(),i.forward=pf(),i.solve=ff(),i.LU=gf(),i.QR=vf(),i.clone=mf(),i.column=bf(),i.diag=yf(),i.elementwise=_f(),i.generate=wf(),i.getDiag=xf(),i.getRandomMatrix=Sf(),i.identity=Ef(),i.isEqual=Af(),i.row=Cf(),i.submatrix=kf(),i.zero=$f(),i.fromArray=Pf(),i.prototype.flatten=Tf(),i.prototype.entry=If(),i.prototype.toString=Lf(),es}const Rf=.1,Of=De(),Mf=Jr,zf=function(e,t=1e-10){new Of(e).eigenvalues().forEach(n=>{if(n<=-t)throw console.log(e,n),new Error(`Eigenvalue should be positive (actual: ${n})`)}),console.log("is definite positive",e)},Nf=function(e,t="checkSymetric"){e.forEach((r,i)=>r.forEach((n,o)=>{if(i===o&&n<0)throw new Error(`[${t}] Variance[${o}] should be positive (actual: ${n})`);if(Math.abs(n)>Math.sqrt(e[i][i]*e[o][o]))throw console.log(e),new Error(`[${t}] Covariance[${i}][${o}] should verify Cauchy Schwarz Inequality (expected: |x| <= sqrt(${e[i][i]} * ${e[o][o]}) actual: ${n})`);if(Math.abs(n-e[o][i])>Rf)throw new Error(`[${t}] Covariance[${i}][${o}] should equal Covariance[${o}][${i}]  (actual diff: ${Math.abs(n-e[o][i])})  = ${n} - ${e[o][i]}
${e.join(`
`)} is invalid`)}))};var Gi=function({covariance:e,eigen:t=!1}){Mf(e),Nf(e),t&&zf(e)};const kc=ji,rs=Bi,ye=Ki,$c=Ws,Df=Hi,Uf=Cd,qf=_d,Pc=Jr,Wf=Gi;class Wr{constructor({mean:t,covariance:r,index:i}){this.mean=t,this.covariance=r,this.index=i}check(t){this.constructor.check(this,t)}static check(t,{dimension:r=null,title:i=null,eigen:n}={}){if(!(t instanceof Wr))throw new TypeError(`The argument is not a state 
Tips: maybe you are using 2 different version of kalman-filter in your npm deps tree`);const{mean:o,covariance:l}=t,c=o.length;if(typeof r=="number"&&c!==r)throw new Error(`[${i}] State.mean ${o} with dimension ${c} does not match expected dimension (${r})`);Pc(o,[c,1],i?i+"-mean":"mean"),Pc(l,[c,c],i?i+"-covariance":"covariance"),Wf({covariance:l,eigen:n})}static matMul({state:t,matrix:r}){const i=ye(ye(r,t.covariance),rs(r)),n=ye(r,t.mean);return new Wr({mean:n,covariance:i,index:t.index})}subState(t){return new Wr({mean:t.map(i=>this.mean[i]),covariance:Uf(this.covariance,t),index:this.index})}rawDetailedMahalanobis(t){const r=kc(this.mean,t);this.check();const i=$c(this.covariance);if(i===null)throw this.check({eigen:!0}),new Error(`Cannot invert covariance ${JSON.stringify(this.covariance)}`);const n=rs(r),o=Math.sqrt(ye(ye(n,i),r));if(Number.isNaN(o))throw console.log({diff:r,covarianceInvert:i,this:this,point:t},ye(ye(n,i),r)),new Error("mahalanobis is NaN");return{diff:r,covarianceInvert:i,value:o}}detailedMahalanobis({kf:t,observation:r,obsIndexes:i}){if(r.length!==t.observation.dimension)throw new Error(`Mahalanobis observation ${r} (dimension: ${r.length}) does not match with kf observation dimension (${t.observation.dimension})`);let n=qf({observation:r,dimension:r.length});const o=t.getValue(t.observation.stateProjection,{});let l=this.constructor.matMul({state:this,matrix:o});return Array.isArray(i)&&(l=l.subState(i),n=i.map(c=>n[c])),l.rawDetailedMahalanobis(n)}mahalanobis(t){const r=this.detailedMahalanobis(t).value;if(Number.isNaN(r))throw new TypeError("mahalanobis is NaN");return r}obsBhattacharyya({kf:t,state:r,obsIndexes:i}){const n=t.getValue(t.observation.stateProjection,{});let o=this.constructor.matMul({state:this,matrix:n}),l=this.constructor.matMul({state:r,matrix:n});return Array.isArray(i)&&(o=o.subState(i),l=l.subState(i)),o.bhattacharyya(l)}bhattacharyya(t){const r=this,i=Df([r.covariance,t.covariance],([l,c])=>(l+c)/2);let n;try{n=$c(i)}catch(l){throw console.log("Cannot invert",i),l}const o=kc(r.mean,t.mean);return ye(rs(o),ye(n,o))[0][0]}}var Fs=Wr;const Ff=Hi;var $d=function(...e){return Ff(e,t=>t.reduce((r,i)=>r===null||i===null?null:r+i,0))};const ie=Ki,Tc=Bi,is=$d,Vf=Ws,Ic=ji,Bf=Ze,Rr=Fs,ns=Jr,Hf={info:(...e)=>console.log(...e),debug:()=>{},warn:(...e)=>console.log(...e),error:(...e)=>console.log(...e)};class jf{constructor({dynamic:t,observation:r,logger:i=Hf}){this.dynamic=t,this.observation=r,this.logger=i}getValue(t,r){return typeof t=="function"?t(r):t}getInitState(){const{mean:t,covariance:r,index:i}=this.dynamic.init;return new Rr({mean:t,covariance:r,index:i})}getPredictedCovariance(t={}){let{previousCorrected:r,index:i}=t;r=r||this.getInitState();const n=Object.assign({},{previousCorrected:r,index:i},t),o=this.getValue(this.dynamic.transition,n),l=Tc(o),c=ie(o,r.covariance),h=ie(c,l),a=this.getValue(this.dynamic.covariance,n),d=is(a,h);return ns(d,[this.dynamic.dimension,this.dynamic.dimension],"predicted.covariance"),d}predict(t={}){let{previousCorrected:r,index:i}=t;r=r||this.getInitState(),typeof i!="number"&&typeof r.index=="number"&&(i=r.index+1),Rr.check(r,{dimension:this.dynamic.dimension});const n=Object.assign({},{previousCorrected:r,index:i},t),o=this.getValue(this.dynamic.transition,n);ns(o,[this.dynamic.dimension,this.dynamic.dimension],"dynamic.transition");const l=ie(o,r.mean),c=this.getPredictedCovariance(n),h=new Rr({mean:l,covariance:c,index:i});return this.logger.debug("Prediction done",h),h}getGain(t){let{predicted:r,stateProjection:i}=t;const n=Object.assign({},{index:r.index},t);i=i||this.getValue(this.observation.stateProjection,n);const o=this.getValue(this.observation.covariance,n);ns(o,[this.observation.dimension,this.observation.dimension],"observation.covariance");const l=Tc(i),c=ie(ie(i,r.covariance),l),h=is(c,o);return ie(ie(r.covariance,l),Vf(h))}getCorrectedCovariance(t){let{predicted:r,optimalKalmanGain:i,stateProjection:n}=t;const o=Bf(r.covariance.length);if(!n){const l=Object.assign({},{index:r.index},t);n=this.getValue(this.observation.stateProjection,l)}return i||(i=this.getGain(Object.assign({stateProjection:n},t))),ie(Ic(o,ie(i,n)),r.covariance)}correct(t){const{predicted:r,observation:i}=t;if(Rr.check(r,{dimension:this.dynamic.dimension}),!i)throw new Error("no measure available");const n=Object.assign({},{observation:i,predicted:r,index:r.index},t),o=this.getValue(this.observation.stateProjection,n),l=this.getGain(Object.assign({predicted:r,stateProjection:o},t)),c=Ic(i,ie(o,r.mean)),h=is(r.mean,ie(l,c));if(Number.isNaN(h[0][0]))throw console.log({optimalKalmanGain:l,innovation:c,predicted:r}),new TypeError("Mean is NaN after correction");const a=this.getCorrectedCovariance(Object.assign({predicted:r,optimalKalmanGain:l,stateProjection:o},t)),d=new Rr({mean:h,covariance:a,index:r.index});return this.logger.debug("Correction done",d),d}}var Kf=jf;const Xf=_d,Gf=Yh,Yf=Zh,Zf=Jh,Qf=ep,hi=rp,Jf=op,pi=bd,tg=Ad,fi=Fs,Lc=yd,eg=Kf,rg=function(e){return typeof e=="string"?{name:e}:{name:"constant-position"}},ig=function(e){return typeof e=="number"?{name:"sensor",sensorDimension:e}:typeof e=="string"?{name:e}:{name:"sensor"}},ng=function({observation:e,dynamic:t}){(typeof e!="object"||e===null)&&(e=ig(e)),(typeof t!="object"||t===null)&&(t=rg(t)),typeof e.name=="string"&&(e=Lc.buildObservation(e)),typeof t.name=="string"&&(t=Lc.buildDynamic(t,e));const r=Gf({observation:e,dynamic:t}),i=Yf(r),n=Zf(i);return Qf(n)},og=function(e){const{observation:t,dynamic:r}=e;return Jf(e,{observation:{stateProjection:hi(pi(t.stateProjection)),covariance:hi(pi(t.covariance,{dimension:t.dimension}))},dynamic:{transition:hi(pi(r.transition)),covariance:hi(pi(r.covariance,{dimension:r.dimension}))}})};class sg extends eg{constructor(t={}){const r=ng(t),i=og(r);super(Object.assign({},t,i))}correct(t){const r=Xf({observation:t.observation,dimension:this.observation.dimension});return super.correct(Object.assign({},t,{observation:r}))}filter(t){const r=super.predict(t);return this.correct(Object.assign({},t,{predicted:r}))}filterAll(t){const{mean:r,covariance:i,index:n}=this.dynamic.init;let o=new fi({mean:r,covariance:i,index:n});const l=[];for(const c of t){const h=this.predict({previousCorrected:o});o=this.correct({predicted:h,observation:c}),l.push(o.mean.map(a=>a[0]))}return l}asymptoticStateCovariance(t=100,r=1e-6){let i=super.getInitState(),n;const o=[];for(let l=0;l<t;l++)if(n=new fi({mean:null,covariance:super.getPredictedCovariance({previousCorrected:i})}),i=new fi({mean:null,covariance:super.getCorrectedCovariance({predicted:n})}),o.push(i.covariance),tg(i.covariance,o[l-1])<r)return o[l];throw new Error("The state covariance does not converge asymptotically")}asymptoticGain(t=1e-6){const r=this.asymptoticStateCovariance(t),i=new fi({mean:new Array(r.length).fill(0).map(()=>[0]),covariance:r});return super.getGain({previousCorrected:i})}}var ag=sg,lg=function({measures:e,averages:t}){const r=e.length,i=e[0].length;if(r===0)throw new Error("Cannot find covariance for empty sample");return new Array(i).fill(1).map((n,o)=>new Array(i).fill(1).map((l,c)=>{const a=e.map((d,s)=>(d[o]-t[s][o])*(d[c]-t[s][c])).reduce((d,s)=>d+s)/r;if(Number.isNaN(a))throw new TypeError("result is NaN");return a}))};const cg=Gi;var dg=function({correlation:e,variance:t}){return cg({covariance:e}),e.map((r,i)=>r.map((n,o)=>n*Math.sqrt(t[o]*t[i])))};const ug=Gi;var hg=function(e){ug({covariance:e});const t=e.map((r,i)=>e[i][i]);return{variance:t,correlation:e.map((r,i)=>r.map((n,o)=>n/Math.sqrt(t[o]*t[i])))}},pg={add:$d,diag:qs,"distance-mat":Ad,"elem-wise":Hi,identity:Ze,invert:Ws,"mat-mul":Ki,"pad-with-zeros":wd,sub:ji,"sub-square-matrix":Cd,sum:Ed,trace:Sd,transpose:Bi,zeros:vd};const gi=yd;var Rc={registerDynamic:gi.registerDynamic,KalmanFilter:ag,registerObservation:gi.registerObservation,buildObservation:gi.buildObservation,buildDynamic:gi.buildDynamic,getCovariance:lg,State:Fs,checkCovariance:Gi,correlationToCovariance:dg,covarianceToCorrelation:hg,linalgebra:pg};class fg{constructor(t){this._elements=[],this._maxSize=t}clear(){this._elements=[]}push(t){this._elements.length>=this._maxSize&&this._elements.shift(),this._elements.push(t)}avg(){return this._elements.length===0?0:this._elements.reduce(function(r,i){return r+i},0)/this._elements.length}}function Pd(){return typeof new PointerEvent("pointerdown").penCustomizationsDetails<"u"}class Vs extends ee{constructor(){super();gt(this,"_fetchPenCustomizations",async r=>{if(this.drawWithCustomizations&&Pd()){let i=await r.penCustomizationsDetails.getPreferredInkingColor(),n=await r.penCustomizationsDetails.getPreferredInkingStyle(),o=await r.penCustomizationsDetails.getPreferredInkingWidth();if(n=n.toLowerCase(),i!=this.currentPreferredColor||o!=this.currentPreferredWidth||n!=this.currentPreferredStyle){let l=new CustomEvent("customizations-changed",{detail:{currentPreferredColor:i,currentPreferredWidth:o,currentPreferredStyle:n},bubbles:!0,composed:!0});this.dispatchEvent(l)}this.currentPreferredColor=i,this.currentPreferredWidth=o,this.currentPreferredStyle=n}return Promise.resolve()});gt(this,"_onPointerDown",async r=>{if(this._pointerDown&&r.pointerId!==this._pointerId)return;this._app.currentEvent=r,this._pointerDown=!0,this._pointerId=r.pointerId,await this._fetchPenCustomizations(r);let i=this._getPoint(r);this._renderer.beginPath(i),this._draw()});gt(this,"_onPointerMove",async r=>{if(r.clientY<0||r.clientX<0||r.clientX>window.innerWidth||r.clientY>window.innerHeight){this._pointerDown=!1;return}if(this._pointerDown&&r.pointerId===this._pointerId){let i=[],n=[];if(r.getCoalescedEvents&&this._drawCoalescedEvents)if(r.getCoalescedEvents().length>0)for(let o of r.getCoalescedEvents()){let l=this._getPoint(o);l.coalesced=!0,i.push(l)}else i.push(this._getPoint(r));else i.push(this._getPoint(r));if(i[i.length-1].coalesced=!1,this._drawPredictedEvents){for(let o of this._getPrediction(r))n.push(o);this._numOfPredictionPoints>0&&this._numOfPredictionPoints<=10&&(n=n.slice(0,this._numOfPredictionPoints))}this._renderer.addToPath(i,n),this._draw(),r.preventDefault()}this._app.currentEvent=r});gt(this,"_onPointerUp",async r=>{if(this._app.currentEvent=r,this._pointerDown){if(r.pointerId!==this._pointerId)return;this._renderer.endPath(this._getPoint(r)),this.paths=this._renderer.paths,this._pointerDown=!1,this._pointerId=null,this._currentPreferredColor=null,this._currentPreferredWidth=null,this._currentPreferredStyle=null,this._resetPrediction()}});gt(this,"_onResize",async r=>{const i=window.getComputedStyle(this),n=parseInt(i.width,10),o=parseInt(i.height,10);n>0&&o>0&&(this._canvas.width=this._predictionCanvas.width=n,this._canvas.height=this._predictionCanvas.height=o,this._renderer.resize(n,o))});this._app=null,this._canvas=null,this._predictionCanvas=null,this._desynchronized=!1,this._renderer=null,this._pointerRawUpdate=!1,this._pointerDown=!1,this._currentLineColor="#000000",this._currentLineStyle="INK",this._currentLineWidth=1,this._drawCoalescedEvents=!1,this._drawPointsOnly=!1,this._drawPredictedEvents=!1,this._drawWithCustomizations=!1,this._drawWithPressure=!1,this._highlightPredictedEvents=!1,this._predictionType="custom",this._numOfPredictionPoints=1,this._kalmanFilterDataSize=6,this._kalmanFilter=new Rc.KalmanFilter({observation:this._kalmanFilterDataSize}),this._correctedPrediction=null}static get properties(){return{app:{type:Object,reflectToAttribute:!0,attribute:!0},canvas:{type:Object,reflectToAttribute:!0,attribute:!0},predictionCanvas:{type:Object,reflectToAttribute:!0,attribute:!0},desynchronized:{type:Boolean,reflectToAttribute:!0,attribute:!0},renderer:{type:Object,reflectToAttribute:!0,attribute:!0},pointerRawUpdate:{type:Boolean,reflectToAttribute:!0,attribute:!0},currentLineColor:{type:String,reflectToAttribute:!0,attribute:!0},currentLineStyle:{type:String,reflectToAttribute:!0,attribute:!0},currentLineWidth:{type:String,reflectToAttribute:!0,attribute:!0},drawCoalescedEvents:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawPointsOnly:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawPredictedEvents:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawWithCustomizations:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawWithPressure:{type:Boolean,reflectToAttribute:!0,attribute:!0},highlightPredictedEvents:{type:Boolean,reflectToAttribute:!0,attribute:!0},numOfPredictionPoints:{type:Number,reflectToAttribute:!0,attribute:!0}}}set app(r){let i=this._app;this._app=r,this.requestUpdate("app",i)}get app(){return this._app}set canvas(r){let i=this._canvas;this._canvas=r,this.requestUpdate("canvas",i)}get canvas(){return this._canvas}set predictionCanvas(r){let i=this._predictionCanvas;this._predictionCanvas=r,this.requestUpdate("predictionCanvas",i)}get predictionCanvas(){return this._predictionCanvas}set desynchronized(r){let i=this._desynchronized;this._desynchronized=r,this.requestUpdate("desynchronized",i)}get desynchronized(){return this._desynchronized}set renderer(r){let i=this._renderer;this._renderer=r,this.requestUpdate("renderer",i),this._renderer&&(this._renderer.currentLineColor=this._currentLineColor,this._renderer.currentLineStyle=this._currentLineStyle,this._renderer.currentLineWidth=this._currentLineWidth,this._renderer.drawCoalescedEvents=this._drawCoalescedEvents,this._renderer.drawPointsOnly=this._drawPointsOnly,this._renderer.drawPredictedEvents=this._drawPredictedEvents,this._renderer.drawWithCustomizations=this._drawWithCustomizations,this._renderer.drawWithPressure=this._drawWithPressure,this._renderer.highlightPredictedEvents=this._highlightPredictedEvents,this._renderer.predictionType=this._predictionType,this._renderer.numOfPredictionPoints=this._numOfPredictionPoints)}get renderer(){return this._renderer}set pointerRawUpdate(r){let i=this._pointerRawUpdate;this._pointerRawUpdate=r,this.requestUpdate("pointerRawUpdate",i),i!==r&&this._canvas&&(r?(this._canvas.onpointermove=null,this._canvas.onpointerrawupdate=this._onPointerMove.bind(this)):(this._canvas.onpointerrawupdate=null,this._canvas.onpointermove=this._onPointerMove.bind(this)))}get pointerRawUpdate(){return this._pointerRawUpdate}set currentLineColor(r){let i=this._currentLineColor;this._currentLineColor=r,this._renderer&&(this._renderer.currentLineColor=r),this.requestUpdate("currentLineColor",i)}get currentLineColor(){return this._currentLineColor}set currentLineStyle(r){let i=this._currentLineStyle;this._currentLineStyle=r,this._renderer&&(this._renderer.currentLineStyle=r),this.requestUpdate("currentLineStyle",i)}get currentLineStyle(){return this._currentLineStyle}set currentLineWidth(r){let i=this._currentLineWidth;this._currentLineWidth=r,this._renderer&&(this._renderer.currentLineWidth=r),this.requestUpdate("currentLineWidth",i)}get currentLineWidth(){return this._currentLineWidth}set drawCoalescedEvents(r){let i=this._drawCoalescedEvents;this._drawCoalescedEvents=r,this._renderer&&(this._renderer.drawCoalescedEvents=r),this.requestUpdate("drawCoalescedEvents",i)}get drawCoalescedEvents(){return this._drawCoalescedEvents}set drawPointsOnly(r){let i=this._drawPointsOnly;this._drawPointsOnly=r,this._renderer&&(this._renderer.drawPointsOnly=r),this.requestUpdate("drawPointsOnly",i)}get drawPointsOnly(){return this._drawPointsOnly}set drawPredictedEvents(r){let i=this._drawPredictedEvents;this._drawPredictedEvents=r,this._renderer&&(this._renderer.drawPredictedEvents=r),this.requestUpdate("drawPredictedEvents",i)}get drawPredictedEvents(){return this._drawPredictedEvents}set drawWithCustomizations(r){let i=this._drawWithCustomizations;this._drawWithCustomizations=r,this._renderer&&(this._renderer.drawWithCustomizations=r),this.requestUpdate("drawWithCustomizations",i)}get drawWithCustomizations(){return this._drawWithCustomizations}set drawWithPressure(r){let i=this._drawWithPressure;this._drawWithPressure=r,this._renderer&&(this._renderer.drawWithPressure=r),this.requestUpdate("drawWithPressure",i)}get drawWithPressure(){return this._drawWithPressure}set highlightPredictedEvents(r){let i=this._highlightPredictedEvents;this._highlightPredictedEvents=r,this._renderer&&(this._renderer.highlightPredictedEvents=r),this.requestUpdate("highlightPredictedEvents",i)}get highlightPredictedEvents(){return this._highlightPredictedEvents}set predictionType(r){let i=this._predictionType;this._predictionType=r,this._renderer&&(this._renderer.predictionType=r),this.requestUpdate("predictionType",i)}get predictionType(){return this._predictionType}set numOfPredictionPoints(r){let i=this._numOfPredictionPoints;this._numOfPredictionPoints=r,this._renderer&&(this._renderer.numOfPredictionPoints=r),this.requestUpdate("numOfPredictionPoints",i)}get numOfPredictionPoints(){return this._numOfPredictionPoints}set paths(r){let i=this._paths;this._paths=r;let n=new CustomEvent("paths-changed",{detail:{paths:r},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("paths",i)}get paths(){return this._paths}firstUpdated(){const r=window.getComputedStyle(this);this._canvas=this.shadowRoot.querySelector("#canvas"),this._predictionCanvas=this.shadowRoot.querySelector("#prediction-canvas"),this._canvas.width=this._predictionCanvas.width=parseInt(r.width,10),this._canvas.height=this._predictionCanvas.height=parseInt(r.height,10),this._canvas.style.left=this._predictionCanvas.style.left=r.left+"px",this._canvas.style.top=this._predictionCanvas.style.top=r.top+"px",this._canvas.onpointerdown=this._onPointerDown.bind(this),this._pointerRawUpdate?this._canvas.onpointerrawupdate=this._onPointerMove.bind(this):this._canvas.onpointermove=this._onPointerMove.bind(this),this._canvas.onpointerup=this._onPointerUp.bind(this),window.addEventListener("resize",this._onResize)}undoPath(){this._renderer.undoPath(),this.paths=this._renderer.paths,this._draw()}redoPath(){this._renderer.redoPath(),this.paths=this._renderer.paths,this._draw()}deleteAllPaths(){this._renderer.deleteAllPaths(),this.paths=this._renderer.paths,this._draw()}_getPrediction(r){let i=[];if(this._predictionType==="browser"&&r.getPredictedEvents){for(let n of r.getPredictedEvents())i.push(this._getPoint(n));return i}else return this._getCustomPrediction(r)}_getCustomPrediction(r){let i=r.getCoalescedEvents();if(i.length<1)return[];let n=[],o=this._getPoint(this._app.currentEvent),l=0,c=0,h=0,a=0,d=0,s=0,u=0,v=0,g=null;for(let y of i){if(g=this._getPoint(y),g.timeStamp===o.timeStamp)break;let w=g.timeStamp-o.timeStamp;h=g.x-o.x,a=g.y-o.y,d=h/w,s=a/w,u=d/w,v=s/w,h<5&&a<5?l=0:h<10&&a<10?l=1:h<20&&a<20?l=8:l=10;let A=this._correctedPrediction,x=this._kalmanFilter.predict({previousCorrected:A});this._correctedPrediction=this._kalmanFilter.correct({predicted:x,observation:[l,w,d,s,u,v]}),A=this._correctedPrediction,o=g}l=Math.ceil(this._correctedPrediction.mean[0][0]),c=this._correctedPrediction.mean[1][0],d=this._correctedPrediction.mean[2][0],s=this._correctedPrediction.mean[3][0],u=this._correctedPrediction.mean[4][0],v=this._correctedPrediction.mean[5][0];for(let y=1;y<=l;y++){let w={type:r.type,timeStamp:r.timeStamp+c*y,x:g.x+d*c*y,y:g.y+s*c*y,pressure:r.pressure,lineColor:this._currentLineColor,lineStyle:this._currentLineStyle,lineWidth:this._currentLineWidth};n.push(w)}return n}_resetPrediction(){this._kalmanFilter=new Rc.KalmanFilter({observation:this._kalmanFilterDataSize}),this._correctedPrediction=null}_draw(){this._renderer.render()}_getPoint(r){const i=this._canvas.getBoundingClientRect();return{timeStamp:r.timeStamp,type:r.type,x:r.clientX-i.left,y:r.clientY-i.top,pressure:r.pressure,preferredColor:this._currentPreferredColor,preferredStyle:this._currentPreferredStyle,preferredWidth:this._currentPreferredWidth,lineColor:this._currentLineColor,lineStyle:this._currentLineStyle,lineWidth:this._currentLineWidth}}render(){return ae`
    <canvas id="canvas"></canvas>
    <canvas id="prediction-canvas"></canvas>`}}gt(Vs,"styles",Ne`
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
  `);class Td{set paths(t){this._paths=t,this.updateProperty("paths",t)}get paths(){return this._paths}set currentLineColor(t){this._currentLineColor=t,this.updateProperty("currentLineColor",t)}get currentLineColor(){return this._currentLineColor}set currentLineStyle(t){this._currentLineStyle=t,this.updateProperty("currentLineStyle",t)}get currentLineStyle(){return this._currentLineStyle}set currentLineWidth(t){this._currentLineWidth=t,this.updateProperty("currentLineWidth",t)}get currentLineWidth(){return this._currentLineWidth}set drawCoalescedEvents(t){this._drawCoalescedEvents=t,this.updateProperty("drawCoalescedEvents",t)}get drawCoalescedEvents(){return this._drawCoalescedEvents}set drawPointsOnly(t){this._drawPointsOnly=t,this.updateProperty("drawPointsOnly",t)}get drawPointsOnly(){return this._drawPointsOnly}set drawPredictedEvents(t){this._drawPredictedEvents=t,this.updateProperty("drawPredictedEvents",t)}get drawPredictedEvents(){return this._drawPredictedEvents}set drawWithCustomizations(t){this._drawWithCustomizations=t,this.updateProperty("drawWithCustomizations",t)}get drawWithCustomizations(){return this._drawWithCustomizations}set drawWithPressure(t){this._drawWithPressure=t,this.updateProperty("drawWithPressure",t)}get drawWithPressure(){return this._drawWithPressure}set highlightPredictedEvents(t){this._highlightPredictedEvents=t,this.updateProperty("highlightPredictedEvents",t)}get highlightPredictedEvents(){return this._highlightPredictedEvents}set predictionType(t){this._predictionType=t,this.updateProperty("predictionType",t)}get predictionType(){return this._predictionType}set numOfPredictionPoints(t){this._numOfPredictionPoints=t,this.updateProperty("numOfPredictionPoints",t)}get numOfPredictionPoints(){return this._numOfPredictionPoints}constructor(t,r){this._canvas=t,this._predictionCanvas=r,this._paths=[],this._currentPath=null,this._currentLineColor="#000000",this._currentLineStyle="INK",this._currentLineWidth=1,this._drawCoalescedEvents=!1,this._drawPointsOnly=!1,this._drawPredictedEvents=!1,this._drawWithCustomizations=!1,this._drawWithPressure=!1,this._highlightPredictedEvents=!1,this._predictionType="custom",this._numOfPredictionPoints=1}getCurrentLineColor(t){return t.preferredColor&&this._drawWithCustomizations?t.preferredColor:t.lineColor}getCurrentLineStyle(t){return t.preferredStyle&&this._drawWithCustomizations?t.preferredStyle:t.lineStyle}getCurrentLineWidth(t){return t.preferredWidth&&this._drawWithCustomizations?t.preferredWidth:t.lineWidth}updateProperty(t,r){console.log("renderer property",t,"set to",r)}resize(t,r){this._canvas.width=this._predictionCanvas.width=t,this._canvas.height=this._predictionCanvas.height=r}undoPath(){this.clearCanvas(),this.clearPredictionCanvas();let t=!1;for(let r=this._paths.length-1;r>=0;r--)this._paths[r].rendered=!1,!t&&this._paths[r].display&&(this._paths[r].display=!1,t=!0)}redoPath(){this.clearCanvas(),this.clearPredictionCanvas();let t=!1;for(let r=0;r<this._paths.length;r++)this._paths[r].rendered=!1,!t&&!this._paths[r].display&&(this._paths[r].display=!0,t=!0)}beginPath(t){this._currentPath||(this._currentPath=new gg),this._currentPath.points.push(t);let r=-1;for(let i=this._paths.length-1;i>=0;i--)this._paths[i].display||(r=i);r>=0&&this._paths.splice(r,this._paths.length)}addToPath(t,r){!t||!this._currentPath||(this._currentPath.points.push(...t),this._currentPath.predictedPoints=r)}endPath(t){this._drawPredictedEvents&&this.clearPredictionCanvas(),this._currentPath&&(this._currentPath.predictedPoints=[],this._currentPath.display=!0,this._currentPath.rendered=!0,this._paths.push(this._currentPath)),this._currentPath=null}deleteAllPaths(){this.clearCanvas(),this.clearPredictionCanvas(),this._paths=[],this._currentPath=null,this._points=[],this._predictedPoints=[]}clearCanvas(){console.error("base implementation not provided, must overwrite")}clearPredictionCanvas(){console.error("base implementation not provided, must overwrite")}render(){console.error("base implementation not provided, must overwrite")}}class gg{set points(t){this._points=t}get points(){return this._points}set predictedPoints(t){this._predictedPoints=t}get predictedPoints(){return this._predictedPoints}set display(t){this._display=t}get display(){return this._display}set rendered(t){this._rendered=t}get rendered(){return this._rendered}constructor(){this._points=[],this._predictedPoints=[],this._display=!1,this._rendered=!1}}class vg extends Td{constructor(t,r,i){if(super(t,r),this._context=this._canvas.getContext("2d",{desynchronized:i}),this._predictionContext=this._predictionCanvas.getContext("2d",{desynchronized:i}),!this._context||!this._predictionContext){console.error("Your browser doesn't support canvas, this demo won't work");return}console.log("Canvas2D loaded, desynchronized:",i)}clearCanvas(){this._context.clearRect(0,0,this._canvas.width,this._canvas.height)}clearPredictionCanvas(){this._predictionContext.clearRect(0,0,this._predictionContext.canvas.width,this._predictionContext.canvas.height)}render(){if(this._paths.forEach(t=>{t.display&&!t.rendered&&(this._drawPointsOnly?this._drawPoints(this._context,t.points):this.getCurrentLineStyle(t.points[0])==="highlighter"?this._drawLine(this._context,t.points):this._drawStroke(this._context,t.points),t.rendered=!0)}),this._currentPath&&this._currentPath.points.length>0&&!this._currentPath.points[this._currentPath.points.length-1].rendered){let t=[...this._currentPath.points];for(let r=t.length-1;r>=0;r--)if(t[r].rendered){t.splice(0,r);break}this._drawPointsOnly?this._drawPoints(this._context,t):this.getCurrentLineStyle(t[0])==="highlighter"?this._drawLine(this._context,t):this._drawStroke(this._context,t),this._drawPredictedEvents&&(this._predictionContext.clearRect(0,0,this._predictionContext.canvas.width,this._predictionContext.canvas.height),this._currentPath.predictedPoints.length>0&&(this._drawPointsOnly?this._strokePredictedPoints(this._predictionContext,this._currentPath.predictedPoints):this.getCurrentLineStyle(this._currentPath.points[0])!=="brush"&&this.getCurrentLineStyle(this._currentPath.points[0])!=="highlighter"&&this._strokePredictedEvents(this._predictionContext,this._currentPath.predictedPoints))),this._currentPath.points.forEach(r=>{r.rendered=!0}),this._currentPath.predictedPoints=[]}}_hexToRgbColor(t){return{r:"0x"+t[1]+t[2]|0,g:"0x"+t[3]+t[4]|0,b:"0x"+t[5]+t[6]|0}}_drawStroke(t,r){let i=this.getCurrentLineColor(r[0]),n=this.getCurrentLineStyle(r[0]),o=this.getCurrentLineWidth(r[0]),l,c,h;for(r[0].type==="pointerdown"&&(l=this.getCurrentLineWidth(r[0]),c=this.getCurrentLineWidth(r[0]),t.fillStyle=i,t.strokeStyle="none"),h=0;h<r.length-1;h++){this._drawWithPressure&&r[h].type!=="pointerdown"?(l=this.getCurrentLineWidth(r[h])*r[h].pressure*2,c=this.getCurrentLineWidth(r[h])*r[h+1].pressure*2):l=c=this.getCurrentLineWidth(r[h]);let a=this._createPath(r[h].x,r[h].y,r[h+1].x,r[h+1].y,l,c);switch(n){case"brush":t.filter="blur("+o+"px)";break;default:t.filter="none";break}t.fill(a)}}_drawLine(t,r){if(r.length<2)return;let i=this.getCurrentLineColor(r[0]),n=this._hexToRgbColor(i);r[0].type==="pointerdown"&&(t.beginPath(),t.lineCap="round",t.lineJoin="round",t.fillStyle="none",t.strokeStyle="rgba("+n.r+","+n.g+","+n.b+",0.01)",t.filter="none"),t.lineWidth=this.getCurrentLineWidth(r[0]),t.moveTo(r[0].x,r[0].y),t.lineTo(r[1].x,r[1].y);let o;for(o=1;o<r.length-2;o++){const l=(r[o].x+r[o+1].x)/2,c=(r[o].y+r[o+1].y)/2;t.quadraticCurveTo(r[o].x,r[o].y,Math.round(l),Math.round(c))}r.length>2&&t.quadraticCurveTo(r[o].x,r[o].y,r[o+1].x,r[o+1].y),t.stroke()}_drawPoints(t,r){for(let i=0;i<r.length;i++)t.beginPath(),t.fillStyle=this.getCurrentLineColor(r[i]),r[i].coalesced?(t.arc(r[i].x,r[i].y,this.getCurrentLineWidth(r[i])/2,0,Math.PI*2,!0),t.stroke()):(t.arc(r[i].x,r[i].y,this.getCurrentLineWidth(r[i]),0,Math.PI*2,!0),t.fill())}_createPath(t,r,i,n,o,l){const c=i-t,h=n-r,a=Math.atan2(h,c)+Math.PI/2,d=new Path2D;return d.arc(t,r,o/2,a,a+Math.PI,!1),d.arc(i,n,l/2,a+Math.PI,a,!1),d.closePath(),d}_strokePredictedEvents(t,r,i){if(r.length>0&&this._currentPath.points.length>0){let n=this._currentPath.points[this._currentPath.points.length-1],o,l;this._drawWithPressure?o=l=this.getCurrentLineWidth(n)*n.pressure*2:o=l=this.getCurrentLineWidth(n);let c=this._createPath(n.x,n.y,r[0].x,r[0].y,o,l);this._highlightPredictedEvents?t.fillStyle="red":t.fillStyle=this.getCurrentLineColor(n),t.fill(c);let h;for(h=0;h<r.length-1;h++){let a=this._createPath(r[h].x,r[h].y,r[h+1].x,r[h+1].y,o,l);t.fill(a)}}}_strokePredictedPoints(t,r){let i,n=this._currentPath.points[this._currentPath.points.length-1];for(i=0;i<r.length;i++)t.beginPath(),this._highlightPredictedEvents?t.fillStyle="red":t.fillStyle=this.getCurrentLineColor(n),t.arc(r[i].x,r[i].y,3,0,Math.PI*2,!0),t.fill()}}class mg extends Vs{firstUpdated(){super.firstUpdated(),this.renderer=new vg(this.canvas,this.predictionCanvas,this.desynchronized)}constructor(){super()}}customElements.define("js-canvas",mg);var Id={exports:{}};const bg={},yg=Object.freeze(Object.defineProperty({__proto__:null,default:bg},Symbol.toStringTag,{value:"Module"})),os=zh(yg);(function(e,t){var r=(()=>{var i=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return typeof __filename<"u"&&(i=i||__filename),function(n){n=n||{};var o;o||(o=typeof n<"u"?n:{});var l=Object.assign,c,h;o.ready=new Promise(function(f,p){c=f,h=p}),function(f){var p={};f.loadCmdsTypedArray=function(I){for(var O=0,D=0;D<I.length;D++)O+=I[D].length;if(p[O])var U=p[O];else U=new Float32Array(O),p[O]=U;var F=0;for(D=0;D<I.length;D++)for(var rt=0;rt<I[D].length;rt++){var ft=I[D][rt];typeof ft=="string"&&(ft=f.SkBits2FloatUnsigned(parseInt(ft))),U[F]=ft,F++}return I=f._malloc(U.length*U.BYTES_PER_ELEMENT),f.HEAPF32.set(U,I/U.BYTES_PER_ELEMENT),[I,O]},f.FromCmds=function(I){I=f.loadCmdsTypedArray(I);var O=f._FromCmds(I[0],I[1]);return f._free(I[0]),O};var m,S,k,T,R;f.cubicYFromX=function(I,O,D,U,F){return m&&S===I&&k===O&&T===D&&R===U||(m&&m.delete(),m=new f._SkCubicMap([I,O],[D,U]),S=I,k=O,T=D,R=U),m.computeYFromX(F)},f.cubicPtFromT=function(I,O,D,U,F){return m&&S===I&&k===O&&T===D&&R===U||(m&&m.delete(),m=new f._SkCubicMap([I,O],[D,U]),S=I,k=O,T=D,R=U),m.computePtFromT(F)}}(o),function(f){f.onRuntimeInitialized=function(){f.SkPath.prototype.addPath=function(){var p=arguments[0];if(arguments.length===1)this._addPath(p,1,0,0,0,1,0,0,0,1);else if(arguments.length===2){var m=arguments[1];this._addPath(p,m.a,m.c,m.e,m.b,m.d,m.f,0,0,1)}else if(arguments.length===7)m=arguments,this._addPath(p,m[1],m[3],m[5],m[2],m[4],m[6],0,0,1);else if(arguments.length===10)m=arguments,this._addPath(p,m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9]);else return console.Ma("addPath expected to take 1, 2, 7, or 10 args. Got "+arguments.length),null;return this},f.SkPath.prototype.arc=function(p,m,S,k,T,R){return this._arc(p,m,S,k,T,!!R),this},f.SkPath.prototype.arcTo=function(p,m,S,k,T){return this._arcTo(p,m,S,k,T),this},f.SkPath.prototype.bezierCurveTo=function(p,m,S,k,T,R){return this._cubicTo(p,m,S,k,T,R),this},f.SkPath.prototype.close=function(){return this._close(),this},f.SkPath.prototype.closePath=function(){return this._close(),this},f.SkPath.prototype.conicTo=function(p,m,S,k,T){return this._conicTo(p,m,S,k,T),this},f.SkPath.prototype.cubicTo=function(p,m,S,k,T,R){return this._cubicTo(p,m,S,k,T,R),this},f.SkPath.prototype.dash=function(p,m,S){return this._dash(p,m,S)?this:null},f.SkPath.prototype.ellipse=function(p,m,S,k,T,R,I,O){return this._ellipse(p,m,S,k,T,R,I,!!O),this},f.SkPath.prototype.lineTo=function(p,m){return this._lineTo(p,m),this},f.SkPath.prototype.moveTo=function(p,m){return this._moveTo(p,m),this},f.SkPath.prototype.op=function(p,m){return this._op(p,m)?this:null},f.SkPath.prototype.quadraticCurveTo=function(p,m,S,k){return this._quadTo(p,m,S,k),this},f.SkPath.prototype.quadTo=function(p,m,S,k){return this._quadTo(p,m,S,k),this},f.SkPath.prototype.rect=function(p,m,S,k){return this._rect(p,m,S,k),this},f.SkPath.prototype.simplify=function(){return this._simplify()?this:null},f.SkPath.prototype.stroke=function(p){return p=p||{},p.width=p.width||1,p.miter_limit=p.miter_limit||4,p.cap=p.cap||f.StrokeCap.BUTT,p.join=p.join||f.StrokeJoin.MITER,this._stroke(p)?this:null},f.SkPath.prototype.transform=function(){if(arguments.length===1)this._transform(arguments[0]);else if(arguments.length===9){var p=arguments;this._transform(p[0],p[1],p[2],p[3],p[4],p[5],p[6],p[7],p[8])}else return console.Ma("transform expected to take 1 or 9 arguments. Got "+arguments.length),null;return this},f.SkPath.prototype.trim=function(p,m,S){return this._trim(p,m,!!S)?this:null}}}(o);var a=l({},o),d=typeof window=="object",s=typeof importScripts=="function",u="",v,g,y,w,A,x;typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"?(u=s?os.dirname(u)+"/":__dirname+"/",x=()=>{A||(w=os,A=os)},v=function(f,p){return x(),f=A.normalize(f),w.readFileSync(f,p?null:"utf8")},y=f=>(f=v(f,!0),f.buffer||(f=new Uint8Array(f)),f),g=(f,p,m)=>{x(),f=A.normalize(f),w.readFile(f,function(S,k){S?m(S):p(k.buffer)})},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(f){throw f}),process.on("unhandledRejection",function(f){throw f}),o.inspect=function(){return"[Emscripten Module object]"}):(d||s)&&(s?u=self.location.href:typeof document<"u"&&document.currentScript&&(u=document.currentScript.src),i&&(u=i),u.indexOf("blob:")!==0?u=u.substr(0,u.replace(/[?#].*/,"").lastIndexOf("/")+1):u="",v=f=>{var p=new XMLHttpRequest;return p.open("GET",f,!1),p.send(null),p.responseText},s&&(y=f=>{var p=new XMLHttpRequest;return p.open("GET",f,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),g=(f,p,m)=>{var S=new XMLHttpRequest;S.open("GET",f,!0),S.responseType="arraybuffer",S.onload=()=>{S.status==200||S.status==0&&S.response?p(S.response):m()},S.onerror=m,S.send(null)});var E=o.print||console.log.bind(console),$=o.printErr||console.warn.bind(console);l(o,a),a=null;var P;o.wasmBinary&&(P=o.wasmBinary),o.noExitRuntime,typeof WebAssembly!="object"&&wr("no native wasm support detected");var L,M=!1,z=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function q(f,p,m){var S=p+m;for(m=p;f[m]&&!(m>=S);)++m;if(16<m-p&&f.subarray&&z)return z.decode(f.subarray(p,m));for(S="";p<m;){var k=f[p++];if(k&128){var T=f[p++]&63;if((k&224)==192)S+=String.fromCharCode((k&31)<<6|T);else{var R=f[p++]&63;k=(k&240)==224?(k&15)<<12|T<<6|R:(k&7)<<18|T<<12|R<<6|f[p++]&63,65536>k?S+=String.fromCharCode(k):(k-=65536,S+=String.fromCharCode(55296|k>>10,56320|k&1023))}}else S+=String.fromCharCode(k)}return S}function N(f,p,m){var S=H;if(0<m){m=p+m-1;for(var k=0;k<f.length;++k){var T=f.charCodeAt(k);if(55296<=T&&57343>=T){var R=f.charCodeAt(++k);T=65536+((T&1023)<<10)|R&1023}if(127>=T){if(p>=m)break;S[p++]=T}else{if(2047>=T){if(p+1>=m)break;S[p++]=192|T>>6}else{if(65535>=T){if(p+2>=m)break;S[p++]=224|T>>12}else{if(p+3>=m)break;S[p++]=240|T>>18,S[p++]=128|T>>12&63}S[p++]=128|T>>6&63}S[p++]=128|T&63}}S[p]=0}}var W=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function B(f,p){for(var m=f>>1,S=m+p/2;!(m>=S)&&It[m];)++m;if(m<<=1,32<m-f&&W)return W.decode(H.subarray(f,m));for(m="",S=0;!(S>=p/2);++S){var k=bt[f+2*S>>1];if(k==0)break;m+=String.fromCharCode(k)}return m}function V(f,p,m){if(m===void 0&&(m=2147483647),2>m)return 0;m-=2;var S=p;m=m<2*f.length?m/2:f.length;for(var k=0;k<m;++k)bt[p>>1]=f.charCodeAt(k),p+=2;return bt[p>>1]=0,p-S}function Q(f){return 2*f.length}function J(f,p){for(var m=0,S="";!(m>=p/4);){var k=yt[f+4*m>>2];if(k==0)break;++m,65536<=k?(k-=65536,S+=String.fromCharCode(55296|k>>10,56320|k&1023)):S+=String.fromCharCode(k)}return S}function ht(f,p,m){if(m===void 0&&(m=2147483647),4>m)return 0;var S=p;m=S+m-4;for(var k=0;k<f.length;++k){var T=f.charCodeAt(k);if(55296<=T&&57343>=T){var R=f.charCodeAt(++k);T=65536+((T&1023)<<10)|R&1023}if(yt[p>>2]=T,p+=4,p+4>m)break}return yt[p>>2]=0,p-S}function st(f){for(var p=0,m=0;m<f.length;++m){var S=f.charCodeAt(m);55296<=S&&57343>=S&&++m,p+=4}return p}var pt,Y,H,bt,It,yt,Ct,Ht,Ue;function ge(){var f=L.buffer;pt=f,o.HEAP8=Y=new Int8Array(f),o.HEAP16=bt=new Int16Array(f),o.HEAP32=yt=new Int32Array(f),o.HEAPU8=H=new Uint8Array(f),o.HEAPU16=It=new Uint16Array(f),o.HEAPU32=Ct=new Uint32Array(f),o.HEAPF32=Ht=new Float32Array(f),o.HEAPF64=Ue=new Float64Array(f)}var Zt,oe=[],qe=[],yr=[];function Qe(){var f=o.preRun.shift();oe.unshift(f)}var We=0,_r=null;o.preloadedImages={},o.preloadedAudios={};function wr(f){throw o.onAbort&&o.onAbort(f),f="Aborted("+f+")",$(f),M=!0,f=new WebAssembly.RuntimeError(f+". Build with -s ASSERTIONS=1 for more info."),h(f),f}function Hs(){return Qt.startsWith("data:application/octet-stream;base64,")}var Qt;if(Qt="pathkit.wasm",!Hs()){var js=Qt;Qt=o.locateFile?o.locateFile(js,u):u+js}function Ks(){var f=Qt;try{if(f==Qt&&P)return new Uint8Array(P);if(y)return y(f);throw"both async and sync fetching of the wasm failed"}catch(p){wr(p)}}function qd(){if(!P&&(d||s)){if(typeof fetch=="function"&&!Qt.startsWith("file://"))return fetch(Qt,{credentials:"same-origin"}).then(function(f){if(!f.ok)throw"failed to load wasm binary file at '"+Qt+"'";return f.arrayBuffer()}).catch(function(){return Ks()});if(g)return new Promise(function(f,p){g(Qt,function(m){f(new Uint8Array(m))},p)})}return Promise.resolve().then(function(){return Ks()})}function Qi(f){for(;0<f.length;){var p=f.shift();if(typeof p=="function")p(o);else{var m=p.Wa;typeof m=="number"?p.xa===void 0?Zt.get(m)():Zt.get(m)(p.xa):m(p.xa===void 0?null:p.xa)}}}var ei={};function Ji(f){for(;f.length;){var p=f.pop();f.pop()(p)}}function Je(f){return this.fromWireType(Ct[f>>2])}var tr={},Fe={},ri={};function Xs(f){if(f===void 0)return"_unknown";f=f.replace(/[^a-zA-Z0-9_]/g,"$");var p=f.charCodeAt(0);return 48<=p&&57>=p?"_"+f:f}function tn(f,p){return f=Xs(f),function(){return p.apply(this,arguments)}}function en(f){var p=Error,m=tn(f,function(S){this.name=f,this.message=S,S=Error(S).stack,S!==void 0&&(this.stack=this.toString()+`
`+S.replace(/^Error(:[^\n]*)?\n/,""))});return m.prototype=Object.create(p.prototype),m.prototype.constructor=m,m.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},m}var Gs=void 0;function ii(f){throw new Gs(f)}function ve(f,p,m){function S(I){I=m(I),I.length!==f.length&&ii("Mismatched type converter count");for(var O=0;O<f.length;++O)se(f[O],I[O])}f.forEach(function(I){ri[I]=p});var k=Array(p.length),T=[],R=0;p.forEach(function(I,O){Fe.hasOwnProperty(I)?k[O]=Fe[I]:(T.push(I),tr.hasOwnProperty(I)||(tr[I]=[]),tr[I].push(function(){k[O]=Fe[I],++R,R===T.length&&S(k)}))}),T.length===0&&S(k)}var ni={};function oi(f){switch(f){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+f)}}var Ys=void 0;function kt(f){for(var p="";H[f];)p+=Ys[H[f++]];return p}var er=void 0;function tt(f){throw new er(f)}function se(f,p,m={}){if(!("argPackAdvance"in p))throw new TypeError("registerType registeredInstance requires argPackAdvance");var S=p.name;if(f||tt('type "'+S+'" must have a positive integer typeid pointer'),Fe.hasOwnProperty(f)){if(m.Qa)return;tt("Cannot register type '"+S+"' twice")}Fe[f]=p,delete ri[f],tr.hasOwnProperty(f)&&(p=tr[f],delete tr[f],p.forEach(function(k){k()}))}function rn(f){tt(f.ea.ha.fa.name+" instance already deleted")}var nn=!1;function Zs(){}function Qs(f){--f.count.value,f.count.value===0&&(f.ka?f.ma.la(f.ka):f.ha.fa.la(f.ga))}function xr(f){return typeof FinalizationGroup>"u"?(xr=p=>p,f):(nn=new FinalizationGroup(function(p){for(var m=p.next();!m.done;m=p.next())m=m.value,m.ga?Qs(m):console.warn("object already deleted: "+m.ga)}),xr=p=>(nn.register(p,p.ea,p.ea),p),Zs=p=>{nn.unregister(p.ea)},xr(f))}var Sr=void 0,Er=[];function on(){for(;Er.length;){var f=Er.pop();f.ea.pa=!1,f.delete()}}function Pe(){}var Js={};function ta(f,p,m){if(f[p].ia===void 0){var S=f[p];f[p]=function(){return f[p].ia.hasOwnProperty(arguments.length)||tt("Function '"+m+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+f[p].ia+")!"),f[p].ia[arguments.length].apply(this,arguments)},f[p].ia=[],f[p].ia[S.ua]=S}}function sn(f,p,m){o.hasOwnProperty(f)?((m===void 0||o[f].ia!==void 0&&o[f].ia[m]!==void 0)&&tt("Cannot register public name '"+f+"' twice"),ta(o,f,f),o.hasOwnProperty(m)&&tt("Cannot register multiple overloads of a function with the same number of arguments ("+m+")!"),o[f].ia[m]=p):(o[f]=p,m!==void 0&&(o[f].Xa=m))}function Wd(f,p,m,S,k,T,R,I){this.name=f,this.constructor=p,this.qa=m,this.la=S,this.na=k,this.Oa=T,this.ta=R,this.La=I,this.Ta=[]}function an(f,p,m){for(;p!==m;)p.ta||tt("Expected null or instance of "+m.name+", got an instance of "+p.name),f=p.ta(f),p=p.na;return f}function Fd(f,p){return p===null?(this.Ba&&tt("null is not a valid "+this.name),0):(p.ea||tt('Cannot pass "'+hn(p)+'" as a '+this.name),p.ea.ga||tt("Cannot pass deleted object as a pointer of type "+this.name),an(p.ea.ga,p.ea.ha.fa,this.fa))}function Vd(f,p){if(p===null){if(this.Ba&&tt("null is not a valid "+this.name),this.wa){var m=this.sa();return f!==null&&f.push(this.la,m),m}return 0}if(p.ea||tt('Cannot pass "'+hn(p)+'" as a '+this.name),p.ea.ga||tt("Cannot pass deleted object as a pointer of type "+this.name),!this.va&&p.ea.ha.va&&tt("Cannot convert argument of type "+(p.ea.ma?p.ea.ma.name:p.ea.ha.name)+" to parameter type "+this.name),m=an(p.ea.ga,p.ea.ha.fa,this.fa),this.wa)switch(p.ea.ka===void 0&&tt("Passing raw pointer to smart pointer is illegal"),this.Va){case 0:p.ea.ma===this?m=p.ea.ka:tt("Cannot convert argument of type "+(p.ea.ma?p.ea.ma.name:p.ea.ha.name)+" to parameter type "+this.name);break;case 1:m=p.ea.ka;break;case 2:if(p.ea.ma===this)m=p.ea.ka;else{var S=p.clone();m=this.Ua(m,Te(function(){S.delete()})),f!==null&&f.push(this.la,m)}break;default:tt("Unsupporting sharing policy")}return m}function Bd(f,p){return p===null?(this.Ba&&tt("null is not a valid "+this.name),0):(p.ea||tt('Cannot pass "'+hn(p)+'" as a '+this.name),p.ea.ga||tt("Cannot pass deleted object as a pointer of type "+this.name),p.ea.ha.va&&tt("Cannot convert argument of type "+p.ea.ha.name+" to parameter type "+this.name),an(p.ea.ga,p.ea.ha.fa,this.fa))}function ea(f,p,m){return p===m?f:m.na===void 0?null:(f=ea(f,p,m.na),f===null?null:m.La(f))}var Ar={};function Hd(f,p){for(p===void 0&&tt("ptr should not be undefined");f.na;)p=f.ta(p),f=f.na;return Ar[p]}function si(f,p){return p.ha&&p.ga||ii("makeClassHandle requires ptr and ptrType"),!!p.ma!=!!p.ka&&ii("Both smartPtrType and smartPtr must be specified"),p.count={value:1},xr(Object.create(f,{ea:{value:p}}))}function me(f,p,m,S){this.name=f,this.fa=p,this.Ba=m,this.va=S,this.wa=!1,this.la=this.Ua=this.sa=this.Ia=this.Va=this.Sa=void 0,p.na!==void 0?this.toWireType=Vd:(this.toWireType=S?Fd:Bd,this.ja=null)}function ra(f,p,m){o.hasOwnProperty(f)||ii("Replacing nonexistant public symbol"),o[f].ia!==void 0&&m!==void 0?o[f].ia[m]=p:(o[f]=p,o[f].ua=m)}function jd(f,p){var m=[];return function(){m.length=arguments.length;for(var S=0;S<arguments.length;S++)m[S]=arguments[S];return f.includes("j")?(S=o["dynCall_"+f],S=m&&m.length?S.apply(null,[p].concat(m)):S.call(null,p)):S=Zt.get(p).apply(null,m),S}}function Dt(f,p){f=kt(f);var m=f.includes("j")?jd(f,p):Zt.get(p);return typeof m!="function"&&tt("unknown function pointer with signature "+f+": "+p),m}var ia=void 0;function na(f){f=da(f);var p=kt(f);return be(f),p}function ai(f,p){function m(T){k[T]||Fe[T]||(ri[T]?ri[T].forEach(m):(S.push(T),k[T]=!0))}var S=[],k={};throw p.forEach(m),new ia(f+": "+S.map(na).join([", "]))}function ln(f,p){for(var m=[],S=0;S<f;S++)m.push(yt[(p>>2)+S]);return m}function cn(f,p,m,S,k){var T=p.length;2>T&&tt("argTypes array size mismatch! Must at least get return value and 'this' types!");var R=p[1]!==null&&m!==null,I=!1;for(m=1;m<p.length;++m)if(p[m]!==null&&p[m].ja===void 0){I=!0;break}var O=p[0].name!=="void",D=T-2,U=Array(D),F=[],rt=[];return function(){if(arguments.length!==D&&tt("function "+f+" called with "+arguments.length+" arguments, expected "+D+" args!"),rt.length=0,F.length=R?2:1,F[0]=k,R){var ft=p[1].toWireType(rt,this);F[1]=ft}for(var it=0;it<D;++it)U[it]=p[it+2].toWireType(rt,arguments[it]),F.push(U[it]);if(it=S.apply(null,F),I)Ji(rt);else for(var Ut=R?1:2;Ut<p.length;Ut++){var qt=Ut===1?ft:U[Ut-2];p[Ut].ja!==null&&p[Ut].ja(qt)}return ft=O?p[0].fromWireType(it):void 0,ft}}var dn=[],re=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function oa(f){4<f&&--re[f].Ca===0&&(re[f]=void 0,dn.push(f))}function un(f){return f||tt("Cannot use deleted val. handle = "+f),re[f].value}function Te(f){switch(f){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var p=dn.length?dn.pop():re.length;return re[p]={Ca:1,value:f},p}}function Kd(f,p,m){switch(p){case 0:return function(S){return this.fromWireType((m?Y:H)[S])};case 1:return function(S){return this.fromWireType((m?bt:It)[S>>1])};case 2:return function(S){return this.fromWireType((m?yt:Ct)[S>>2])};default:throw new TypeError("Unknown integer type: "+f)}}function li(f,p){var m=Fe[f];return m===void 0&&tt(p+" has unknown type "+na(f)),m}function hn(f){if(f===null)return"null";var p=typeof f;return p==="object"||p==="array"||p==="function"?f.toString():""+f}function Xd(f,p){switch(p){case 2:return function(m){return this.fromWireType(Ht[m>>2])};case 3:return function(m){return this.fromWireType(Ue[m>>3])};default:throw new TypeError("Unknown float type: "+f)}}function Gd(f,p,m){switch(p){case 0:return m?function(S){return Y[S]}:function(S){return H[S]};case 1:return m?function(S){return bt[S>>1]}:function(S){return It[S>>1]};case 2:return m?function(S){return yt[S>>2]}:function(S){return Ct[S>>2]};default:throw new TypeError("Unknown integer type: "+f)}}var Yd={};function pn(f){var p=Yd[f];return p===void 0?kt(f):p}var fn=[];function sa(){function f(p){p.$$$embind_global$$$=p;var m=typeof $$$embind_global$$$=="object"&&p.$$$embind_global$$$===p;return m||delete p.$$$embind_global$$$,m}if(typeof globalThis=="object")return globalThis;if(typeof $$$embind_global$$$=="object"||(typeof Rn=="object"&&f(Rn)?$$$embind_global$$$=Rn:typeof self=="object"&&f(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")}function Zd(f){var p=fn.length;return fn.push(f),p}function Qd(f,p){for(var m=Array(f),S=0;S<f;++S)m[S]=li(yt[(p>>2)+S],"parameter "+S);return m}var aa=[];function Jd(f){var p=Array(f+1);return function(m,S,k){p[0]=m;for(var T=0;T<f;++T){var R=li(yt[(S>>2)+T],"parameter "+T);p[T+1]=R.readValueFromPointer(k),k+=R.argPackAdvance}return m=new(m.bind.apply(m,p)),Te(m)}}var la={},tu=[null,[],[]];Gs=o.InternalError=en("InternalError");for(var ca=Array(256),ci=0;256>ci;++ci)ca[ci]=String.fromCharCode(ci);Ys=ca,er=o.BindingError=en("BindingError"),Pe.prototype.isAliasOf=function(f){if(!(this instanceof Pe&&f instanceof Pe))return!1;var p=this.ea.ha.fa,m=this.ea.ga,S=f.ea.ha.fa;for(f=f.ea.ga;p.na;)m=p.ta(m),p=p.na;for(;S.na;)f=S.ta(f),S=S.na;return p===S&&m===f},Pe.prototype.clone=function(){if(this.ea.ga||rn(this),this.ea.ra)return this.ea.count.value+=1,this;var f=xr,p=Object,m=p.create,S=Object.getPrototypeOf(this),k=this.ea;return f=f(m.call(p,S,{ea:{value:{count:k.count,pa:k.pa,ra:k.ra,ga:k.ga,ha:k.ha,ka:k.ka,ma:k.ma}}})),f.ea.count.value+=1,f.ea.pa=!1,f},Pe.prototype.delete=function(){this.ea.ga||rn(this),this.ea.pa&&!this.ea.ra&&tt("Object already scheduled for deletion"),Zs(this),Qs(this.ea),this.ea.ra||(this.ea.ka=void 0,this.ea.ga=void 0)},Pe.prototype.isDeleted=function(){return!this.ea.ga},Pe.prototype.deleteLater=function(){return this.ea.ga||rn(this),this.ea.pa&&!this.ea.ra&&tt("Object already scheduled for deletion"),Er.push(this),Er.length===1&&Sr&&Sr(on),this.ea.pa=!0,this},me.prototype.Pa=function(f){return this.Ia&&(f=this.Ia(f)),f},me.prototype.Ga=function(f){this.la&&this.la(f)},me.prototype.argPackAdvance=8,me.prototype.readValueFromPointer=Je,me.prototype.deleteObject=function(f){f!==null&&f.delete()},me.prototype.fromWireType=function(f){function p(){return this.wa?si(this.fa.qa,{ha:this.Sa,ga:m,ma:this,ka:f}):si(this.fa.qa,{ha:this,ga:f})}var m=this.Pa(f);if(!m)return this.Ga(f),null;var S=Hd(this.fa,m);if(S!==void 0)return S.ea.count.value===0?(S.ea.ga=m,S.ea.ka=f,S.clone()):(S=S.clone(),this.Ga(f),S);if(S=this.fa.Oa(m),S=Js[S],!S)return p.call(this);S=this.va?S.Ja:S.pointerType;var k=ea(m,this.fa,S.fa);return k===null?p.call(this):this.wa?si(S.fa.qa,{ha:S,ga:k,ma:this,ka:f}):si(S.fa.qa,{ha:S,ga:k})},o.getInheritedInstanceCount=function(){return Object.keys(Ar).length},o.getLiveInheritedInstances=function(){var f=[],p;for(p in Ar)Ar.hasOwnProperty(p)&&f.push(Ar[p]);return f},o.flushPendingDeletes=on,o.setDelayFunction=function(f){Sr=f,Er.length&&Sr&&Sr(on)},ia=o.UnboundTypeError=en("UnboundTypeError"),o.count_emval_handles=function(){for(var f=0,p=5;p<re.length;++p)re[p]!==void 0&&++f;return f},o.get_first_emval=function(){for(var f=5;f<re.length;++f)if(re[f]!==void 0)return re[f];return null};var eu={r:function(f){var p=ei[f];delete ei[f];var m=p.elements,S=m.length,k=m.map(function(I){return I.Aa}).concat(m.map(function(I){return I.Ea})),T=p.sa,R=p.la;ve([f],k,function(I){return m.forEach(function(O,D){var U=I[D],F=O.ya,rt=O.za,ft=I[D+S],it=O.Da,Ut=O.Fa;O.read=qt=>U.fromWireType(F(rt,qt)),O.write=(qt,Ve)=>{var Jt=[];it(Ut,qt,ft.toWireType(Jt,Ve)),Ji(Jt)}}),[{name:p.name,fromWireType:function(O){for(var D=Array(S),U=0;U<S;++U)D[U]=m[U].read(O);return R(O),D},toWireType:function(O,D){if(S!==D.length)throw new TypeError("Incorrect number of tuple elements for "+p.name+": expected="+S+", actual="+D.length);for(var U=T(),F=0;F<S;++F)m[F].write(U,D[F]);return O!==null&&O.push(R,U),U},argPackAdvance:8,readValueFromPointer:Je,ja:R}]})},u:function(f){var p=ni[f];delete ni[f];var m=p.sa,S=p.la,k=p.Ha,T=k.map(function(R){return R.Aa}).concat(k.map(function(R){return R.Ea}));ve([f],T,function(R){var I={};return k.forEach(function(O,D){var U=R[D],F=O.ya,rt=O.za,ft=R[D+k.length],it=O.Da,Ut=O.Fa;I[O.Na]={read:function(qt){return U.fromWireType(F(rt,qt))},write:function(qt,Ve){var Jt=[];it(Ut,qt,ft.toWireType(Jt,Ve)),Ji(Jt)}}}),[{name:p.name,fromWireType:function(O){var D={},U;for(U in I)D[U]=I[U].read(O);return S(O),D},toWireType:function(O,D){for(var U in I)if(!(U in D))throw new TypeError('Missing field:  "'+U+'"');var F=m();for(U in I)I[U].write(F,D[U]);return O!==null&&O.push(S,F),F},argPackAdvance:8,readValueFromPointer:Je,ja:S}]})},z:function(){},F:function(f,p,m,S,k){var T=oi(m);p=kt(p),se(f,{name:p,fromWireType:function(R){return!!R},toWireType:function(R,I){return I?S:k},argPackAdvance:8,readValueFromPointer:function(R){if(m===1)var I=Y;else if(m===2)I=bt;else if(m===4)I=yt;else throw new TypeError("Unknown boolean type size: "+p);return this.fromWireType(I[R>>T])},ja:null})},l:function(f,p,m,S,k,T,R,I,O,D,U,F,rt){U=kt(U),T=Dt(k,T),I&&(I=Dt(R,I)),D&&(D=Dt(O,D)),rt=Dt(F,rt);var ft=Xs(U);sn(ft,function(){ai("Cannot construct "+U+" due to unbound types",[S])}),ve([f,p,m],S?[S]:[],function(it){if(it=it[0],S)var Ut=it.fa,qt=Ut.qa;else qt=Pe.prototype;it=tn(ft,function(){if(Object.getPrototypeOf(this)!==Ve)throw new er("Use 'new' to construct "+U);if(Jt.oa===void 0)throw new er(U+" has no accessible constructor");var ha=Jt.oa[arguments.length];if(ha===void 0)throw new er("Tried to invoke ctor of "+U+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(Jt.oa).toString()+") parameters instead!");return ha.apply(this,arguments)});var Ve=Object.create(qt,{constructor:{value:it}});it.prototype=Ve;var Jt=new Wd(U,it,Ve,rt,Ut,T,I,D);Ut=new me(U,Jt,!0,!1),qt=new me(U+"*",Jt,!1,!1);var ua=new me(U+" const*",Jt,!1,!0);return Js[f]={pointerType:qt,Ja:ua},ra(ft,it),[Ut,qt,ua]})},i:function(f,p,m,S,k,T){0<p||wr(void 0);var R=ln(p,m);k=Dt(S,k),ve([],[f],function(I){I=I[0];var O="constructor "+I.name;if(I.fa.oa===void 0&&(I.fa.oa=[]),I.fa.oa[p-1]!==void 0)throw new er("Cannot register multiple constructors with identical number of parameters ("+(p-1)+") for class '"+I.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return I.fa.oa[p-1]=()=>{ai("Cannot construct "+I.name+" due to unbound types",R)},ve([],R,function(D){return D.splice(1,0,null),I.fa.oa[p-1]=cn(O,D,null,k,T),[]}),[]})},a:function(f,p,m,S,k,T,R,I){var O=ln(m,S);p=kt(p),T=Dt(k,T),ve([],[f],function(D){function U(){ai("Cannot call "+F+" due to unbound types",O)}D=D[0];var F=D.name+"."+p;p.startsWith("@@")&&(p=Symbol[p.substring(2)]),I&&D.fa.Ta.push(p);var rt=D.fa.qa,ft=rt[p];return ft===void 0||ft.ia===void 0&&ft.className!==D.name&&ft.ua===m-2?(U.ua=m-2,U.className=D.name,rt[p]=U):(ta(rt,p,F),rt[p].ia[m-2]=U),ve([],O,function(it){return it=cn(F,it,D,T,R),rt[p].ia===void 0?(it.ua=m-2,rt[p]=it):rt[p].ia[m-2]=it,[]}),[]})},I:function(f,p,m){f=kt(f),ve([],[p],function(S){return S=S[0],o[f]=S.fromWireType(m),[]})},E:function(f,p){p=kt(p),se(f,{name:p,fromWireType:function(m){var S=un(m);return oa(m),S},toWireType:function(m,S){return Te(S)},argPackAdvance:8,readValueFromPointer:Je,ja:null})},h:function(f,p,m,S){function k(){}m=oi(m),p=kt(p),k.values={},se(f,{name:p,constructor:k,fromWireType:function(T){return this.constructor.values[T]},toWireType:function(T,R){return R.value},argPackAdvance:8,readValueFromPointer:Kd(p,m,S),ja:null}),sn(p,k)},k:function(f,p,m){var S=li(f,"enum");p=kt(p),f=S.constructor,S=Object.create(S.constructor.prototype,{value:{value:m},constructor:{value:tn(S.name+"_"+p,function(){})}}),f.values[m]=S,f[p]=S},q:function(f,p,m){m=oi(m),p=kt(p),se(f,{name:p,fromWireType:function(S){return S},toWireType:function(S,k){return k},argPackAdvance:8,readValueFromPointer:Xd(p,m),ja:null})},f:function(f,p,m,S,k,T){var R=ln(p,m);f=kt(f),k=Dt(S,k),sn(f,function(){ai("Cannot call "+f+" due to unbound types",R)},p-1),ve([],R,function(I){return I=[I[0],null].concat(I.slice(1)),ra(f,cn(f,I,null,k,T),p-1),[]})},e:function(f,p,m,S,k){p=kt(p),k===-1&&(k=4294967295),k=oi(m);var T=I=>I;if(S===0){var R=32-8*m;T=I=>I<<R>>>R}m=p.includes("unsigned")?function(I,O){return O>>>0}:function(I,O){return O},se(f,{name:p,fromWireType:T,toWireType:m,argPackAdvance:8,readValueFromPointer:Gd(p,k,S!==0),ja:null})},b:function(f,p,m){function S(T){T>>=2;var R=Ct;return new k(pt,R[T+1],R[T])}var k=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][p];m=kt(m),se(f,{name:m,fromWireType:S,argPackAdvance:8,readValueFromPointer:S},{Qa:!0})},p:function(f,p){p=kt(p);var m=p==="std::string";se(f,{name:p,fromWireType:function(S){var k=Ct[S>>2];if(m)for(var T=S+4,R=0;R<=k;++R){var I=S+4+R;if(R==k||H[I]==0){if(T=T?q(H,T,I-T):"",O===void 0)var O=T;else O+=String.fromCharCode(0),O+=T;T=I+1}}else{for(O=Array(k),R=0;R<k;++R)O[R]=String.fromCharCode(H[S+4+R]);O=O.join("")}return be(S),O},toWireType:function(S,k){k instanceof ArrayBuffer&&(k=new Uint8Array(k));var T=typeof k=="string";T||k instanceof Uint8Array||k instanceof Uint8ClampedArray||k instanceof Int8Array||tt("Cannot pass non-string to std::string");var R=(m&&T?()=>{for(var D=0,U=0;U<k.length;++U){var F=k.charCodeAt(U);55296<=F&&57343>=F&&(F=65536+((F&1023)<<10)|k.charCodeAt(++U)&1023),127>=F?++D:D=2047>=F?D+2:65535>=F?D+3:D+4}return D}:()=>k.length)(),I=gn(4+R+1);if(Ct[I>>2]=R,m&&T)N(k,I+4,R+1);else if(T)for(T=0;T<R;++T){var O=k.charCodeAt(T);255<O&&(be(I),tt("String has UTF-16 code units that do not fit in 8 bits")),H[I+4+T]=O}else for(T=0;T<R;++T)H[I+4+T]=k[T];return S!==null&&S.push(be,I),I},argPackAdvance:8,readValueFromPointer:Je,ja:function(S){be(S)}})},m:function(f,p,m){if(m=kt(m),p===2)var S=B,k=V,T=Q,R=()=>It,I=1;else p===4&&(S=J,k=ht,T=st,R=()=>Ct,I=2);se(f,{name:m,fromWireType:function(O){for(var D=Ct[O>>2],U=R(),F,rt=O+4,ft=0;ft<=D;++ft){var it=O+4+ft*p;(ft==D||U[it>>I]==0)&&(rt=S(rt,it-rt),F===void 0?F=rt:(F+=String.fromCharCode(0),F+=rt),rt=it+p)}return be(O),F},toWireType:function(O,D){typeof D!="string"&&tt("Cannot pass non-string to C++ string type "+m);var U=T(D),F=gn(4+U+p);return Ct[F>>2]=U>>I,k(D,F+4,U+p),O!==null&&O.push(be,F),F},argPackAdvance:8,readValueFromPointer:Je,ja:function(O){be(O)}})},t:function(f,p,m,S,k,T){ei[f]={name:kt(p),sa:Dt(m,S),la:Dt(k,T),elements:[]}},s:function(f,p,m,S,k,T,R,I,O){ei[f].elements.push({Aa:p,ya:Dt(m,S),za:k,Ea:T,Da:Dt(R,I),Fa:O})},v:function(f,p,m,S,k,T){ni[f]={name:kt(p),sa:Dt(m,S),la:Dt(k,T),Ha:[]}},j:function(f,p,m,S,k,T,R,I,O,D){ni[f].Ha.push({Na:kt(p),Aa:m,ya:Dt(S,k),za:T,Ea:R,Da:Dt(I,O),Fa:D})},G:function(f,p){p=kt(p),se(f,{Ra:!0,name:p,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},d:function(f,p,m,S){f=fn[f],p=un(p),m=pn(m),f(p,m,null,S)},J:oa,x:function(f){return f===0?Te(sa()):(f=pn(f),Te(sa()[f]))},c:function(f,p){var m=Qd(f,p),S=m[0];p=S.name+"_$"+m.slice(1).map(function(R){return R.name}).join("_")+"$";var k=aa[p];if(k!==void 0)return k;var T=Array(f-1);return k=Zd((R,I,O,D)=>{for(var U=0,F=0;F<f-1;++F)T[F]=m[F+1].readValueFromPointer(D+U),U+=m[F+1].argPackAdvance;for(R=R[I].apply(R,T),F=0;F<f-1;++F)m[F+1].Ka&&m[F+1].Ka(T[F]);if(!S.Ra)return S.toWireType(O,R)}),aa[p]=k},n:function(f){4<f&&(re[f].Ca+=1)},w:function(f,p,m,S){f=un(f);var k=la[p];return k||(k=Jd(p),la[p]=k),k(f,m,S)},K:function(){return Te([])},D:function(f){return Te(pn(f))},H:function(f,p){return f=li(f,"_emval_take_value"),f=f.readValueFromPointer(p),Te(f)},g:function(){wr("")},B:function(f){var p=H.length;if(f>>>=0,2147483648<f)return!1;for(var m=1;4>=m;m*=2){var S=p*(1+.2/m);S=Math.min(S,f+100663296),S=Math.max(f,S),0<S%65536&&(S+=65536-S%65536);t:{try{L.grow(Math.min(2147483648,S)-pt.byteLength+65535>>>16),ge();var k=1;break t}catch{}k=void 0}if(k)return!0}return!1},C:function(){return 0},y:function(){},o:function(f,p,m,S){for(var k=0,T=0;T<m;T++){var R=yt[p>>2],I=yt[p+4>>2];p+=8;for(var O=0;O<I;O++){var D=H[R+O],U=tu[f];D===0||D===10?((f===1?E:$)(q(U,0)),U.length=0):U.push(D)}k+=I}return yt[S>>2]=k,0},A:function(){}};(function(){function f(k){o.asm=k.exports,L=o.asm.L,ge(),Zt=o.asm._,qe.unshift(o.asm.M),We--,o.monitorRunDependencies&&o.monitorRunDependencies(We),We==0&&_r&&(k=_r,_r=null,k())}function p(k){f(k.instance)}function m(k){return qd().then(function(T){return WebAssembly.instantiate(T,S)}).then(function(T){return T}).then(k,function(T){$("failed to asynchronously prepare wasm: "+T),wr(T)})}var S={a:eu};if(We++,o.monitorRunDependencies&&o.monitorRunDependencies(We),o.instantiateWasm)try{return o.instantiateWasm(S,f)}catch(k){return $("Module.instantiateWasm callback failed with error: "+k),!1}return function(){return P||typeof WebAssembly.instantiateStreaming!="function"||Hs()||Qt.startsWith("file://")||typeof fetch!="function"?m(p):fetch(Qt,{credentials:"same-origin"}).then(function(k){return WebAssembly.instantiateStreaming(k,S).then(p,function(T){return $("wasm streaming compile failed: "+T),$("falling back to ArrayBuffer instantiation"),m(p)})})}().catch(h),{}})(),o.___wasm_call_ctors=function(){return(o.___wasm_call_ctors=o.asm.M).apply(null,arguments)},o.__Z6ToCmdsRK6SkPath=function(){return(o.__Z6ToCmdsRK6SkPath=o.asm.N).apply(null,arguments)},o.__Z8FromCmdsmi=function(){return(o.__Z8FromCmdsmi=o.asm.O).apply(null,arguments)},o.__Z7NewPathv=function(){return(o.__Z7NewPathv=o.asm.P).apply(null,arguments)},o.__Z8CopyPathRK6SkPath=function(){return(o.__Z8CopyPathRK6SkPath=o.asm.Q).apply(null,arguments)},o.__Z6EqualsRK6SkPathS1_=function(){return(o.__Z6EqualsRK6SkPathS1_=o.asm.R).apply(null,arguments)},o.__Z11ToSVGStringRK6SkPath=function(){return(o.__Z11ToSVGStringRK6SkPath=o.asm.S).apply(null,arguments)},o.__Z13FromSVGStringNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE=function(){return(o.__Z13FromSVGStringNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE=o.asm.T).apply(null,arguments)},o.__Z13ApplySimplifyR6SkPath=function(){return(o.__Z13ApplySimplifyR6SkPath=o.asm.U).apply(null,arguments)},o.__Z11ApplyPathOpR6SkPathRKS_8SkPathOp=function(){return(o.__Z11ApplyPathOpR6SkPathRKS_8SkPathOp=o.asm.V).apply(null,arguments)},o.__Z10MakeFromOpRK6SkPathS1_8SkPathOp=function(){return(o.__Z10MakeFromOpRK6SkPathS1_8SkPathOp=o.asm.W).apply(null,arguments)},o.__Z14ResolveBuilderR11SkOpBuilder=function(){return(o.__Z14ResolveBuilderR11SkOpBuilder=o.asm.X).apply(null,arguments)},o.__Z8ToCanvasRK6SkPathN10emscripten3valE=function(){return(o.__Z8ToCanvasRK6SkPathN10emscripten3valE=o.asm.Y).apply(null,arguments)},o.__Z8ToPath2DRK6SkPath=function(){return(o.__Z8ToPath2DRK6SkPath=o.asm.Z).apply(null,arguments)};var be=o._free=function(){return(be=o._free=o.asm.$).apply(null,arguments)},gn=o._malloc=function(){return(gn=o._malloc=o.asm.aa).apply(null,arguments)},da=o.___getTypeName=function(){return(da=o.___getTypeName=o.asm.ba).apply(null,arguments)};o.___embind_register_native_and_builtin_types=function(){return(o.___embind_register_native_and_builtin_types=o.asm.ca).apply(null,arguments)},o.dynCall_jiji=function(){return(o.dynCall_jiji=o.asm.da).apply(null,arguments)};var di;_r=function f(){di||vn(),di||(_r=f)};function vn(){function f(){if(!di&&(di=!0,o.calledRun=!0,!M)){if(Qi(qe),c(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),o.postRun)for(typeof o.postRun=="function"&&(o.postRun=[o.postRun]);o.postRun.length;){var p=o.postRun.shift();yr.unshift(p)}Qi(yr)}}if(!(0<We)){if(o.preRun)for(typeof o.preRun=="function"&&(o.preRun=[o.preRun]);o.preRun.length;)Qe();Qi(oe),0<We||(o.setStatus?(o.setStatus("Running..."),setTimeout(function(){setTimeout(function(){o.setStatus("")},1),f()},1)):f())}}if(o.run=vn,o.preInit)for(typeof o.preInit=="function"&&(o.preInit=[o.preInit]);0<o.preInit.length;)o.preInit.pop()();return vn(),n.ready}})();e.exports=r})(Id);const _g=Id.exports;let Oc=null;class wg extends Td{constructor(t,r,i){if(super(t,r),this._context=this._canvas.getContext("2d",{desynchronized:i}),this._predictionContext=this._predictionCanvas.getContext("2d",{desynchronized:i}),!this._context||!this._predictionContext){console.error("Your browser doesn't support canvas, this demo won't work");return}this._context.lineCap=this._predictionContext.lineCap="round",this._context.lineJoin=this._predictionContext.lineJoin="round",this._context.shadowBlur=this._predictionContext.shadowBlur=2,_g({locateFile:n=>"./wasm/"+n}).then(n=>{Oc=n,console.log("Canvas2D with PathKit loaded, desynchronized:",i)})}clearCanvas(){this._context.clearRect(0,0,this._canvas.width,this._canvas.height)}clearPredictionCanvas(){this._predictionContext.clearRect(0,0,this._predictionContext.canvas.width,this._predictionContext.canvas.height)}render(){if(this._paths.forEach(t=>{t.display&&!t.rendered&&(this._drawPointsOnly?this._drawPoints(this._context,t.points):this._drawStroke(this._context,t.points),t.rendered=!0)}),this._currentPath&&this._currentPath.points.length>0&&!this._currentPath.points[this._currentPath.points.length-1].rendered){let t=[...this._currentPath.points];for(let r=t.length-1;r>=0;r--)if(t[r].rendered){t.splice(0,r);break}this._drawPointsOnly?this._drawPoints(this._context,t):this._drawStroke(this._context,t),this._drawPredictedEvents&&(this._predictionContext.clearRect(0,0,this._predictionContext.canvas.width,this._predictionContext.canvas.height),this._currentPath.predictedPoints.length>0&&(this._drawPointsOnly?this._strokePredictedPoints(this._predictionContext,this._currentPath.predictedPoints):this.getCurrentLineStyle(this._currentPath.points[0])!=="brush"&&this.getCurrentLineStyle(this._currentPath.points[0])!=="highlighter"&&this._strokePredictedEvents(this._predictionContext,this._currentPath.predictedPoints))),this._currentPath.points.forEach(r=>{r.rendered=!0}),this._currentPath.predictedPoints=[]}}_hexToRgbColor(t){return{r:"0x"+t[1]+t[2]|0,g:"0x"+t[3]+t[4]|0,b:"0x"+t[5]+t[6]|0}}_drawStroke(t,r){let i=this.getCurrentLineColor(r[0]),n=this._hexToRgbColor(i),o=this.getCurrentLineStyle(r[0]),l=this.getCurrentLineWidth(r[0]),c;switch(r[0].type==="pointerdown"&&(t.lineCap=this._predictionContext.lineCap="round",t.lineJoin=this._predictionContext.lineJoin="round"),o){case"brush":t.filter="blur("+l+"px)",t.strokeStyle=i;break;case"highlighter":t.filter="none",t.strokeStyle="rgba("+n.r+","+n.g+","+n.b+",0.01)";break;default:t.filter="none",t.strokeStyle=i;break}for(c=0;c<r.length-1;c++){let h=this._createPath(r[c].x,r[c].y,r[c+1].x,r[c+1].y);this._drawWithPressure?t.lineWidth=this.getCurrentLineWidth(r[c])*r[c].pressure*2:t.lineWidth=this.getCurrentLineWidth(r[c]),t.stroke(h.toPath2D()),h.delete()}}_drawPoints(t,r){for(let i=0;i<r.length;i++)t.beginPath(),t.fillStyle=this.getCurrentLineColor(r[i]),r[i].coalesced?(t.arc(r[i].x,r[i].y,this.getCurrentLineWidth(r[i])/2,0,Math.PI*2,!0),t.stroke()):(t.arc(r[i].x,r[i].y,this.getCurrentLineWidth(r[i]),0,Math.PI*2,!0),t.fill())}_createPath(t,r,i,n){const o=Oc.NewPath();return o.moveTo(t,r),o.lineTo(i,n),o}_strokePredictedEvents(t,r){if(r.length>0&&this._currentPath.points.length>0){let i=this._currentPath.points[this._currentPath.points.length-1];this._drawWithPressure?t.lineWidth=this.getCurrentLineWidth(i)*i.pressure*2:t.lineWidth=this.getCurrentLineWidth(i),t.lineCap="round",this._highlightPredictedEvents?t.strokeStyle="red":t.strokeStyle=this.getCurrentLineColor(i);let n=this._createPath(i.x,i.y,this._currentPath.predictedPoints[0].x,this._currentPath.predictedPoints[0].y);t.stroke(n.toPath2D()),n.delete();let o;for(o=0;o<this._currentPath.predictedPoints.length-1;o++)n=this._createPath(this._currentPath.predictedPoints[o].x,this._currentPath.predictedPoints[o].y,this._currentPath.predictedPoints[o+1].x,this._currentPath.predictedPoints[o+1].y),t.stroke(n.toPath2D()),n.delete()}}_strokePredictedPoints(t,r){let i,n=this._currentPath.points[this._currentPath.points.length-1];for(i=0;i<r.length;i++)t.beginPath(),this._highlightPredictedEvents?t.fillStyle="red":t.fillStyle=this.getCurrentLineColor(n),t.arc(r[i].x,r[i].y,3,0,Math.PI*2,!0),t.fill()}}class xg extends Vs{firstUpdated(){super.firstUpdated(),this.renderer=new wg(this.canvas,this.predictionCanvas,this.desynchronized)}constructor(){super()}}customElements.define("pathkit-canvas",xg);var Sg=lt`
  ${vt}

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
`,he=class extends ct{constructor(){super(...arguments),this.hasSlotController=new Ce(this,"footer"),this.localize=new Bt(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new Jc(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),zr(this))}disconnectedCallback(){super.disconnectedCallback(),Nr(this)}async show(){if(!this.open)return this.open=!0,le(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,le(this,"sl-after-hide")}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=Rt(this,"dialog.denyClose",{dir:this.localize.dir()});Lt(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),zr(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Vt(this.dialog),Vt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Rt(this,"dialog.show",{dir:this.localize.dir()}),r=Rt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Lt(this.panel,t.keyframes,t.options),Lt(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Vt(this.dialog),Vt(this.overlay)]);const e=Rt(this,"dialog.hide",{dir:this.localize.dir()}),t=Rt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Lt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Lt(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Nr(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}render(){return j`
      <div
        part="base"
        class=${_t({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${K(this.noHeader?this.label:void 0)}
          aria-labelledby=${K(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":j`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
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

          <slot part="body" class="dialog__body"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};he.styles=Sg;b([Z(".dialog")],he.prototype,"dialog",2);b([Z(".dialog__panel")],he.prototype,"panel",2);b([Z(".dialog__overlay")],he.prototype,"overlay",2);b([C({type:Boolean,reflect:!0})],he.prototype,"open",2);b([C({reflect:!0})],he.prototype,"label",2);b([C({attribute:"no-header",type:Boolean,reflect:!0})],he.prototype,"noHeader",2);b([X("open",{waitUntilFirstUpdate:!0})],he.prototype,"handleOpenChange",1);he=b([mt("sl-dialog")],he);At("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});At("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});At("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});At("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});At("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Eg=lt`
  ${vt}

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
`,Gr=class extends ct{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Gr.styles=Eg;b([C({type:Boolean,reflect:!0})],Gr.prototype,"vertical",2);b([X("vertical")],Gr.prototype,"handleVerticalChange",1);Gr=b([mt("sl-divider")],Gr);var Ag=lt`
  ${vt}

  :host {
    display: block;
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
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
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

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(:focus-visible:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
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

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,pe=class extends ct{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}getTextLabel(){return ad(this.defaultSlot)}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("sl-label-change"))}render(){return j`
      <div
        part="base"
        class=${_t({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};pe.styles=Ag;b([Z("slot:not([name])")],pe.prototype,"defaultSlot",2);b([Z(".menu-item")],pe.prototype,"menuItem",2);b([C({type:Boolean,reflect:!0})],pe.prototype,"checked",2);b([C()],pe.prototype,"value",2);b([C({type:Boolean,reflect:!0})],pe.prototype,"disabled",2);b([X("checked")],pe.prototype,"handleCheckedChange",1);b([X("disabled")],pe.prototype,"handleDisabledChange",1);pe=b([mt("sl-menu-item")],pe);var Yi=lt`
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

  .form-control--has-label.form-control--large .form-control_label {
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
`,Cg=lt`
  ${vt}
  ${Yi}

  :host {
    display: block;
  }

  .form-control {
    border: none;
    padding: 0;
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
`,Ot=class extends ct{constructor(){super(...arguments),this.formSubmitController=new Ye(this,{defaultValue:e=>e.defaultValue}),this.hasSlotController=new Ce(this,"help-text","label"),this.hasButtonGroup=!1,this.errorMessage="",this.customErrorMessage="",this.defaultValue="",this.invalid=!1,this.label="",this.helpText="",this.name="option",this.value="",this.required=!1}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.invalid=!this.validity.valid}checkValidity(){return this.validity.valid}setCustomValidity(e=""){this.customErrorMessage=e,this.errorMessage=e,e?(this.invalid=!0,this.input.setCustomValidity(e)):this.invalid=!1}get validity(){const e=!(this.value&&this.required||!this.required),t=this.customErrorMessage!=="";return{badInput:!1,customError:t,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!(e||t),valueMissing:!e}}reportValidity(){const e=this.validity;return this.errorMessage=this.customErrorMessage||e.valid?"":this.input.validationMessage,this.invalid=!e.valid,e.valid||this.showNativeErrorMessage(),!this.invalid}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target,r=this.getAllRadios(),i=this.value;t.disabled||(this.value=t.value,r.forEach(n=>n.checked=n===t),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(c=>!c.disabled),i=(t=r.find(c=>c.checked))!=null?t:r[0],n=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,o=this.value;let l=r.indexOf(i)+n;l<0&&(l=r.length-1),l>r.length-1&&(l=0),this.getAllRadios().forEach(c=>{c.checked=!1,this.hasButtonGroup||(c.tabIndex=-1)}),this.value=r[l].value,r[l].checked=!0,this.hasButtonGroup?r[l].shadowRoot.querySelector("button").focus():(r[l].tabIndex=0,r[l].focus()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),r=e.find(i=>i.checked)||e[0];r&&r.focus()}handleSlotChange(){var e;const t=this.getAllRadios();if(t.forEach(r=>r.checked=r.value===this.value),this.hasButtonGroup=t.some(r=>r.tagName.toLowerCase()==="sl-radio-button"),!t.some(r=>r.checked))if(this.hasButtonGroup){const r=t[0].shadowRoot.querySelector("button");r.tabIndex=0}else t[0].tabIndex=0;if(this.hasButtonGroup){const r=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");r&&(r.disableRole=!0)}}showNativeErrorMessage(){this.input.hidden=!1,this.input.reportValidity(),setTimeout(()=>this.input.hidden=!0,1e4)}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.invalid=!this.validity.valid}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,n=j`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.handleSlotChange}
        role="presentation"
      ></slot>
    `;return j`
      <fieldset
        part="form-control"
        class=${_t({"form-control":!0,"form-control--medium":!0,"form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
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
              />
            </label>
          </div>

          ${this.hasButtonGroup?j`
                <sl-button-group part="button-group" exportparts="base:button-group__base">
                  ${n}
                </sl-button-group>
              `:n}
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </fieldset>
    `}};Ot.styles=Cg;b([Z("slot:not([name])")],Ot.prototype,"defaultSlot",2);b([Z(".radio-group__validation-input")],Ot.prototype,"input",2);b([et()],Ot.prototype,"hasButtonGroup",2);b([et()],Ot.prototype,"errorMessage",2);b([et()],Ot.prototype,"customErrorMessage",2);b([et()],Ot.prototype,"defaultValue",2);b([et()],Ot.prototype,"invalid",2);b([C()],Ot.prototype,"label",2);b([C({attribute:"help-text"})],Ot.prototype,"helpText",2);b([C()],Ot.prototype,"name",2);b([C({reflect:!0})],Ot.prototype,"value",2);b([C({type:Boolean,reflect:!0})],Ot.prototype,"required",2);b([X("value")],Ot.prototype,"handleValueChange",1);Ot=b([mt("sl-radio-group")],Ot);var kg=lt`
  ${vt}
  ${Yi}

  :host {
    display: block;
  }

  .select {
    display: block;
  }

  .select::part(panel) {
    overflow: hidden;
  }

  .select__control {
    display: inline-flex;
    align-items: center;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .select::part(panel) {
    border-radius: var(--sl-border-radius-medium);
  }

  /* Standard selects */
  .select--standard .select__control {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    color: var(--sl-input-color);
  }

  .select--standard:not(.select--disabled) .select__control:hover {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
    color: var(--sl-input-color-hover);
  }

  .select--standard.select--focused:not(.select--disabled) .select__control {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
    outline: none;
  }

  .select--standard.select--disabled .select__control {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  /* Filled selects */
  .select--filled .select__control {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__control {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--focused:not(.select--disabled) .select__control {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .select--filled.select--disabled .select__control {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--disabled .select__tags,
  .select--disabled .select__clear {
    pointer-events: none;
  }

  .select__prefix {
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__label {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    user-select: none;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .select__label::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .select__clear {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    width: 1.25em;
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

  .select__suffix {
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__icon {
    flex: 0 0 auto;
    display: inline-flex;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .select--open .select__icon {
    rotate: -180deg;
  }

  /* Placeholder */
  .select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color);
  }

  .select--disabled.select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Tags */
  .select__tags {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: left;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  /* Hidden input (for form control validation to show) */
  .select__hidden-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  /*
   * Size modifiers
   */

  /* Small */
  .select--small .select__control {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__label {
    margin: 0 var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__icon {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__tags {
    padding-bottom: 2px;
  }

  .select--small .select__tags sl-tag {
    padding-top: 2px;
  }

  .select--small .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--small.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /* Medium */
  .select--medium .select__control {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__label {
    margin: 0 var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__icon {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__tags {
    padding-bottom: 3px;
  }

  .select--medium .select__tags sl-tag {
    padding-top: 3px;
  }

  .select--medium .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--medium.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /* Large */
  .select--large .select__control {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__label {
    margin: 0 var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__icon {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__tags {
    padding-bottom: 4px;
  }
  .select--large .select__tags sl-tag {
    padding-top: 4px;
  }

  .select--large .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--large.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /*
   * Pill modifier
   */
  .select--pill.select--small .select__control {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__control {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__control {
    border-radius: var(--sl-input-height-large);
  }
`,ti=(e="value")=>(t,r)=>{const i=t.constructor,n=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(o,l,c){var h;const a=i.getPropertyOptions(e),d=typeof a.attribute=="string"?a.attribute:e;if(o===d){const s=a.converter||Hr,v=(typeof s=="function"?s:(h=s==null?void 0:s.fromAttribute)!=null?h:Hr.fromAttribute)(c,a.type);this[e]!==v&&(this[r]=v)}n.call(this,o,l,c)}},nt=class extends ct{constructor(){super(...arguments),this.formSubmitController=new Ye(this),this.hasSlotController=new Ce(this,"help-text","label"),this.localize=new Bt(this),this.menuItems=[],this.hasFocus=!1,this.isOpen=!1,this.displayLabel="",this.displayTags=[],this.invalid=!1,this.multiple=!1,this.maxTagsVisible=3,this.disabled=!1,this.name="",this.value="",this.placeholder="",this.size="medium",this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.required=!1,this.clearable=!1,this.defaultValue=""}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.resizeMenu()),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.syncItemsFromValue()})}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}getValueAsArray(){return this.multiple&&this.value===""?[]:Array.isArray(this.value)?this.value:[this.value]}focus(e){this.control.focus(e)}blur(){this.control.blur()}handleBlur(){this.isOpen||(this.hasFocus=!1,this.emit("sl-blur"))}handleClearClick(e){const t=this.value;e.stopPropagation(),this.value=this.multiple?[]:"",this.value!==t&&(this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.syncItemsFromValue()}handleDisabledChange(){this.disabled&&this.isOpen&&this.dropdown.hide(),this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus||(this.hasFocus=!0,this.emit("sl-focus"))}handleKeyDown(e){const t=e.target,r=this.menuItems[0],i=this.menuItems[this.menuItems.length-1];if(t.tagName.toLowerCase()!=="sl-tag"){if(e.key==="Tab"){this.isOpen&&this.dropdown.hide();return}if(["ArrowDown","ArrowUp"].includes(e.key)){if(e.preventDefault(),this.isOpen||this.dropdown.show(),e.key==="ArrowDown"){this.menu.setCurrentItem(r),r.focus();return}if(e.key==="ArrowUp"){this.menu.setCurrentItem(i),i.focus();return}}e.ctrlKey||e.metaKey||!this.isOpen&&e.key.length===1&&(e.stopPropagation(),e.preventDefault(),this.dropdown.show(),this.menu.typeToSelect(e))}}handleLabelClick(){this.focus()}handleMenuSelect(e){const t=e.detail.item,r=this.value;this.multiple?this.value=this.value.includes(t.value)?this.value.filter(i=>i!==t.value):[...this.value,t.value]:this.value=t.value,this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")),this.syncItemsFromValue()}handleMenuShow(){this.resizeMenu(),this.isOpen=!0}handleMenuHide(){this.isOpen=!1,this.control.focus()}handleMenuItemLabelChange(){if(!this.multiple){const e=this.menuItems.find(t=>t.value===this.value);this.displayLabel=e?e.getTextLabel():""}}handleMultipleChange(){var e;const t=this.getValueAsArray();this.value=this.multiple?t:(e=t[0])!=null?e:"",this.syncItemsFromValue()}async handleMenuSlotChange(){this.menuItems=[...this.querySelectorAll("sl-menu-item")];const e=[];this.menuItems.forEach(t=>{e.includes(t.value)&&console.error(`Duplicate value found in <sl-select> menu item: '${t.value}'`,t),e.push(t.value)}),await Promise.all(this.menuItems.map(t=>t.render)),this.syncItemsFromValue()}handleTagInteraction(e){e.composedPath().find(i=>i instanceof HTMLElement?i.classList.contains("tag__remove"):!1)&&e.stopPropagation()}async handleValueChange(){this.syncItemsFromValue(),await this.updateComplete,this.invalid=!this.input.checkValidity()}resizeMenu(){this.menu.style.width=`${this.control.clientWidth}px`,requestAnimationFrame(()=>this.dropdown.reposition())}syncItemsFromValue(){const e=this.getValueAsArray();if(this.menuItems.forEach(t=>t.checked=e.includes(t.value)),this.multiple){const t=this.menuItems.filter(r=>e.includes(r.value));if(this.displayLabel=t.length>0?t[0].getTextLabel():"",this.displayTags=t.map(r=>j`
          <sl-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button
            "
            variant="neutral"
            size=${this.size}
            ?pill=${this.pill}
            removable
            @click=${this.handleTagInteraction}
            @keydown=${this.handleTagInteraction}
            @sl-remove=${i=>{i.stopPropagation(),this.disabled||(r.checked=!1,this.syncValueFromItems())}}
          >
            ${r.getTextLabel()}
          </sl-tag>
        `),this.maxTagsVisible>0&&this.displayTags.length>this.maxTagsVisible){const r=this.displayTags.length;this.displayLabel="",this.displayTags=this.displayTags.slice(0,this.maxTagsVisible),this.displayTags.push(j`
          <sl-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button
            "
            variant="neutral"
            size=${this.size}
          >
            +${r-this.maxTagsVisible}
          </sl-tag>
        `)}}else{const t=this.menuItems.find(r=>r.value===e[0]);this.displayLabel=t?t.getTextLabel():"",this.displayTags=[]}}syncValueFromItems(){const t=this.menuItems.filter(i=>i.checked).map(i=>i.value),r=this.value;this.multiple?this.value=this.value.filter(i=>t.includes(i)):this.value=t.length>0?t[0]:"",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.multiple?this.value.length>0:this.value!=="",i=this.label?!0:!!e,n=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&r;return j`
      <div
        part="form-control"
        class=${_t({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-dropdown
            part="base"
            .hoist=${this.hoist}
            .placement=${this.placement==="bottom"?"bottom-start":"top-start"}
            .stayOpenOnSelect=${this.multiple}
            .containingElement=${this}
            ?disabled=${this.disabled}
            class=${_t({select:!0,"select--open":this.isOpen,"select--empty":!this.value,"select--focused":this.hasFocus,"select--clearable":this.clearable,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--standard":!this.filled,"select--filled":this.filled,"select--has-tags":this.multiple&&this.displayTags.length>0,"select--placeholder-visible":this.displayLabel==="","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large","select--pill":this.pill,"select--invalid":this.invalid})}
            @sl-show=${this.handleMenuShow}
            @sl-hide=${this.handleMenuHide}
          >
            <div
              part="control"
              slot="trigger"
              id="input"
              class="select__control"
              role="combobox"
              aria-describedby="help-text"
              aria-haspopup="true"
              aria-disabled=${this.disabled?"true":"false"}
              aria-expanded=${this.isOpen?"true":"false"}
              aria-controls="menu"
              tabindex=${this.disabled?"-1":"0"}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            >
              <slot name="prefix" part="prefix" class="select__prefix"></slot>

              <div part="display-label" class="select__label">
                ${this.displayTags.length>0?j` <span part="tags" class="select__tags"> ${this.displayTags} </span> `:this.displayLabel.length>0?this.displayLabel:this.placeholder}
              </div>

              ${o?j`
                    <button
                      part="clear-button"
                      class="select__clear"
                      @click=${this.handleClearClick}
                      aria-label=${this.localize.term("clearEntry")}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <span part="icon" class="select__icon" aria-hidden="true">
                <sl-icon name="chevron-down" library="system"></sl-icon>
              </span>

              <!-- The hidden input tricks the browser's built-in validation so it works as expected. We use an input
              instead of a select because, otherwise, iOS will show a list of options during validation. The focus
              handler is used to move focus to the primary control when it's marked invalid.  -->
              <input
                class="select__hidden-select"
                aria-hidden="true"
                ?required=${this.required}
                .value=${r?"1":""}
                tabindex="-1"
                @focus=${()=>this.control.focus()}
              />
            </div>

            <sl-menu part="menu" id="menu" class="select__menu" @sl-select=${this.handleMenuSelect}>
              <slot @slotchange=${this.handleMenuSlotChange} @sl-label-change=${this.handleMenuItemLabelChange}></slot>
            </sl-menu>
          </sl-dropdown>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};nt.styles=kg;b([Z(".select")],nt.prototype,"dropdown",2);b([Z(".select__control")],nt.prototype,"control",2);b([Z(".select__hidden-select")],nt.prototype,"input",2);b([Z(".select__menu")],nt.prototype,"menu",2);b([et()],nt.prototype,"hasFocus",2);b([et()],nt.prototype,"isOpen",2);b([et()],nt.prototype,"displayLabel",2);b([et()],nt.prototype,"displayTags",2);b([et()],nt.prototype,"invalid",2);b([C({type:Boolean,reflect:!0})],nt.prototype,"multiple",2);b([C({attribute:"max-tags-visible",type:Number})],nt.prototype,"maxTagsVisible",2);b([C({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);b([C()],nt.prototype,"name",2);b([C()],nt.prototype,"value",2);b([C()],nt.prototype,"placeholder",2);b([C()],nt.prototype,"size",2);b([C({type:Boolean})],nt.prototype,"hoist",2);b([C({type:Boolean,reflect:!0})],nt.prototype,"filled",2);b([C({type:Boolean,reflect:!0})],nt.prototype,"pill",2);b([C()],nt.prototype,"label",2);b([C()],nt.prototype,"placement",2);b([C({attribute:"help-text"})],nt.prototype,"helpText",2);b([C({type:Boolean,reflect:!0})],nt.prototype,"required",2);b([C({type:Boolean})],nt.prototype,"clearable",2);b([ti()],nt.prototype,"defaultValue",2);b([X("disabled",{waitUntilFirstUpdate:!0})],nt.prototype,"handleDisabledChange",1);b([X("multiple")],nt.prototype,"handleMultipleChange",1);b([X("value",{waitUntilFirstUpdate:!0})],nt.prototype,"handleValueChange",1);nt=b([mt("sl-select")],nt);var $g=lt`
  ${vt}

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
    cursor: default;
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

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
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
`,Ge=class extends ct{constructor(){super(...arguments),this.localize=new Bt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return j`
      <span
        part="base"
        class=${_t({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?j`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
              ></sl-icon-button>
            `:""}
      </span>
    `}};Ge.styles=$g;b([C({reflect:!0})],Ge.prototype,"variant",2);b([C({reflect:!0})],Ge.prototype,"size",2);b([C({type:Boolean,reflect:!0})],Ge.prototype,"pill",2);b([C({type:Boolean})],Ge.prototype,"removable",2);Ge=b([mt("sl-tag")],Ge);var Pg=lt`
  ${vt}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Oi=class extends ct{constructor(){super(...arguments),this.typeToSelectString=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}getAllItems(e={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.getAttribute("role")!=="menuitem"||!e.includeDisabled&&t.disabled))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){const t=this.getAllItems({includeDisabled:!1}),r=e.disabled?t[0]:e;t.forEach(i=>{i.setAttribute("tabindex",i===r?"0":"-1")})}typeToSelect(e){var t;const r=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?e.metaKey||e.ctrlKey?this.typeToSelectString="":this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const i of r){const n=(t=i.shadowRoot)==null?void 0:t.querySelector("slot:not([name])");if(ad(n).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(i),i.focus();break}}}handleClick(e){const r=e.target.closest("sl-menu-item");(r==null?void 0:r.disabled)===!1&&this.emit("sl-select",{detail:{item:r}})}handleKeyDown(e){if(e.key==="Enter"){const t=this.getCurrentItem();e.preventDefault(),t==null||t.click()}if(e.key===" "&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems({includeDisabled:!1}),r=this.getCurrentItem();let i=r?t.indexOf(r):0;if(t.length>0){e.preventDefault(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus();return}}this.typeToSelect(e)}handleMouseDown(e){const t=e.target;t.getAttribute("role")==="menuitem"&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems({includeDisabled:!1});e.length>0&&this.setCurrentItem(e[0])}render(){return j`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Oi.styles=Pg;b([Z("slot")],Oi.prototype,"defaultSlot",2);Oi=b([mt("sl-menu")],Oi);var Tg=lt`
  ${vt}

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
    color: var(--color);
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
`,Wt=class extends ct{constructor(){super(...arguments),this.localize=new Bt(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())}handleDocumentKeyDown(e){var t;if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,i,n;const o=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(n=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:n.activeElement:document.activeElement;(!this.containingElement||(o==null?void 0:o.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}}handleDocumentMouseDown(e){const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(e){const t=e.target;bs(t,this.panel)}handlePanelSelect(e){const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(e){if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.defaultSlot.assignedElements({flatten:!0}),i=r[0],n=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||this.show(),r.length>0&&requestAnimationFrame(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(n),n.focus())}));const o=["Tab","Shift","Meta","Ctrl","Alt"];this.open&&!o.includes(e.key)&&t.typeToSelect(e)}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>Qc(i).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,le(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,le(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Vt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Rt(this,"dropdown.show",{dir:this.localize.dir()});await Lt(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Vt(this);const{keyframes:e,options:t}=Rt(this,"dropdown.hide",{dir:this.localize.dir()});await Lt(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return j`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${_t({dropdown:!0,"dropdown--open":this.open})}
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

        <slot
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open?"false":"true"}
          aria-labelledby="dropdown"
        ></slot>
      </sl-popup>
    `}};Wt.styles=Tg;b([Z(".dropdown")],Wt.prototype,"popup",2);b([Z(".dropdown__trigger")],Wt.prototype,"trigger",2);b([Z(".dropdown__panel")],Wt.prototype,"panel",2);b([C({type:Boolean,reflect:!0})],Wt.prototype,"open",2);b([C({reflect:!0})],Wt.prototype,"placement",2);b([C({type:Boolean,reflect:!0})],Wt.prototype,"disabled",2);b([C({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Wt.prototype,"stayOpenOnSelect",2);b([C({attribute:!1})],Wt.prototype,"containingElement",2);b([C({type:Number})],Wt.prototype,"distance",2);b([C({type:Number})],Wt.prototype,"skidding",2);b([C({type:Boolean})],Wt.prototype,"hoist",2);b([X("open",{waitUntilFirstUpdate:!0})],Wt.prototype,"handleOpenChange",1);Wt=b([mt("sl-dropdown")],Wt);At("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});At("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Ig=lt`
  ${vt}
  ${Yi}

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
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
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
`,Lg=e=>e.strings===void 0,Rg={},Og=(e,t=Rg)=>e._$AH=t,Bs=qi(class extends Wi{constructor(e){if(super(e),e.type!==we.PROPERTY&&e.type!==we.ATTRIBUTE&&e.type!==we.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Lg(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Kt||t===St)return t;const r=e.element,i=e.name;if(e.type===we.PROPERTY){if(t===r[i])return Kt}else if(e.type===we.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(i))return Kt}else if(e.type===we.ATTRIBUTE&&r.getAttribute(i)===t+"")return Kt;return Og(e),t}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xt=class extends ct{constructor(){super(...arguments),this.formSubmitController=new Ye(this),this.hasSlotController=new Ce(this,"help-text","label"),this.localize=new Bt(this),this.hasFocus=!1,this.hasTooltip=!1,this.invalid=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleValueChange(){this.invalid=!this.input.checkValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),n=this.localize.dir()==="rtl",o=t*e;if(n){const l=`${t-o}px + ${e} * ${i}`;this.output.style.translate=`calc((${l} - ${r/2}px - ${i} / 2))`}else{const l=`${o}px - ${e} * ${i}`;this.output.style.translate=`calc(${l} - ${r/2}px + ${i} / 2)`}}}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t;return j`
      <div
        part="form-control"
        class=${_t({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${_t({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${K(this.name)}
              ?disabled=${this.disabled}
              min=${K(this.min)}
              max=${K(this.max)}
              step=${K(this.step)}
              .value=${Bs(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?j`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};xt.styles=Ig;b([Z(".range__control")],xt.prototype,"input",2);b([Z(".range__tooltip")],xt.prototype,"output",2);b([et()],xt.prototype,"hasFocus",2);b([et()],xt.prototype,"hasTooltip",2);b([et()],xt.prototype,"invalid",2);b([C()],xt.prototype,"title",2);b([C()],xt.prototype,"name",2);b([C({type:Number})],xt.prototype,"value",2);b([C()],xt.prototype,"label",2);b([C({attribute:"help-text"})],xt.prototype,"helpText",2);b([C({type:Boolean,reflect:!0})],xt.prototype,"disabled",2);b([C({type:Number})],xt.prototype,"min",2);b([C({type:Number})],xt.prototype,"max",2);b([C({type:Number})],xt.prototype,"step",2);b([C()],xt.prototype,"tooltip",2);b([C({attribute:!1})],xt.prototype,"tooltipFormatter",2);b([ti()],xt.prototype,"defaultValue",2);b([X("value",{waitUntilFirstUpdate:!0})],xt.prototype,"handleValueChange",1);b([X("disabled",{waitUntilFirstUpdate:!0})],xt.prototype,"handleDisabledChange",1);b([X("hasTooltip",{waitUntilFirstUpdate:!0})],xt.prototype,"syncRange",1);xt=b([mt("sl-range")],xt);var Mg=lt`
  ${vt}

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
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
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
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color, var(--sl-transition-fast) box-shadow;
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
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Mt=class extends ct{constructor(){super(...arguments),this.formSubmitController=new Ye(this,{value:e=>e.checked?e.value:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.invalid=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.required=!1,this.checked=!1,this.defaultChecked=!1}firstUpdated(){this.invalid=!this.input.checkValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleCheckedChange(){this.input.checked=this.checked,this.invalid=!this.input.checkValidity()}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}render(){return j`
      <label
        part="base"
        class=${_t({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${K(this.value)}
          .checked=${Bs(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <slot part="label" class="switch__label"></slot>
      </label>
    `}};Mt.styles=Mg;b([Z('input[type="checkbox"]')],Mt.prototype,"input",2);b([et()],Mt.prototype,"hasFocus",2);b([et()],Mt.prototype,"invalid",2);b([C()],Mt.prototype,"title",2);b([C()],Mt.prototype,"name",2);b([C()],Mt.prototype,"value",2);b([C({reflect:!0})],Mt.prototype,"size",2);b([C({type:Boolean,reflect:!0})],Mt.prototype,"disabled",2);b([C({type:Boolean,reflect:!0})],Mt.prototype,"required",2);b([C({type:Boolean,reflect:!0})],Mt.prototype,"checked",2);b([ti("checked")],Mt.prototype,"defaultChecked",2);b([X("checked",{waitUntilFirstUpdate:!0})],Mt.prototype,"handleCheckedChange",1);b([X("disabled",{waitUntilFirstUpdate:!0})],Mt.prototype,"handleDisabledChange",1);Mt=b([mt("sl-switch")],Mt);var zg=lt`
  ${vt}

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
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
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
`,Ng=0,fe=class extends ct{constructor(){super(...arguments),this.localize=new Bt(this),this.attrId=++Ng,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}handleCloseClick(){this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return this.id=this.id.length>0?this.id:this.componentId,j`
      <div
        part="base"
        class=${_t({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?j`
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
    `}};fe.styles=zg;b([Z(".tab")],fe.prototype,"tab",2);b([C({reflect:!0})],fe.prototype,"panel",2);b([C({type:Boolean,reflect:!0})],fe.prototype,"active",2);b([C({type:Boolean})],fe.prototype,"closable",2);b([C({type:Boolean,reflect:!0})],fe.prototype,"disabled",2);b([X("active")],fe.prototype,"handleActiveChange",1);b([X("disabled")],fe.prototype,"handleDisabledChange",1);fe=b([mt("sl-tab")],fe);var Dg=lt`
  ${vt}

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
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
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
`,Yt=class extends ct{constructor(){super(...arguments),this.localize=new Bt(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(t=>!["aria-labelledby","aria-controls"].includes(t.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(t=>t.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((t,r)=>{var i;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((i=this.getActiveTab())!=null?i:this.tabs[0],{emitEvents:!1}),r.unobserve(t[0].target))}).observe(this.tabGroup)})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(r=>e.includeDisabled?r.tagName.toLowerCase()==="sl-tab":r.tagName.toLowerCase()==="sl-tab"&&!r.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const n=this.tabs.find(l=>l.matches(":focus")),o=this.localize.dir()==="rtl";if((n==null?void 0:n.tagName.toLowerCase())==="sl-tab"){let l=this.tabs.indexOf(n);e.key==="Home"?l=0:e.key==="End"?l=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?l--:(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&l++,l<0&&(l=this.tabs.length-1),l>this.tabs.length-1&&(l=0),this.tabs[l].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[l],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&bs(this.tabs[l],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}setActiveTab(e,t){if(t=Et({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.map(i=>i.active=i===this.activeTab),this.panels.map(i=>{var n;return i.active=i.name===((n=this.activeTab)==null?void 0:n.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&bs(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,i=this.localize.dir()==="rtl",n=this.getAllTabs(),l=n.slice(0,n.indexOf(e)).reduce((c,h)=>({left:c.left+h.clientWidth,top:c.top+h.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*l.left}px`:`${l.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${l.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator()}render(){const e=this.localize.dir()==="rtl";return j`
      <div
        part="base"
        class=${_t({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?j`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?j`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};Yt.styles=Dg;b([Z(".tab-group")],Yt.prototype,"tabGroup",2);b([Z(".tab-group__body")],Yt.prototype,"body",2);b([Z(".tab-group__nav")],Yt.prototype,"nav",2);b([Z(".tab-group__indicator")],Yt.prototype,"indicator",2);b([et()],Yt.prototype,"hasScrollControls",2);b([C()],Yt.prototype,"placement",2);b([C()],Yt.prototype,"activation",2);b([C({attribute:"no-scroll-controls",type:Boolean})],Yt.prototype,"noScrollControls",2);b([X("noScrollControls",{waitUntilFirstUpdate:!0})],Yt.prototype,"updateScrollControls",1);b([X("placement",{waitUntilFirstUpdate:!0})],Yt.prototype,"syncIndicator",1);Yt=b([mt("sl-tab-group")],Yt);var Ug=lt`
  ${vt}

  :host {
    --padding: 0;

    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }

  .tab-panel:not(.tab-panel--active) {
    display: none;
  }
`,qg=0,gr=class extends ct{constructor(){super(...arguments),this.attrId=++qg,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return j`
      <slot
        part="base"
        class=${_t({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};gr.styles=Ug;b([C({reflect:!0})],gr.prototype,"name",2);b([C({type:Boolean,reflect:!0})],gr.prototype,"active",2);b([X("active")],gr.prototype,"handleActiveChange",1);gr=b([mt("sl-tab-panel")],gr);class Ld extends ee{static get properties(){return{renderingType:{type:String,reflectToAttribute:!0,attribute:!0},desynchronizedEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},pointerRawUpdateEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},pressureEventsEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},predictedEventsEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},predictedEventsHighlightEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},predictedType:{type:String,reflectToAttribute:!0,attribute:!0},numOfPredictionPoints:{type:Number,reflectToAttribute:!0,attribute:!0},coalescedEventsEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawPointsOnlyEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}set renderingType(t){let r=this._renderingType;this._renderingType=t;let i=new CustomEvent("renderingType-changed",{detail:{renderingType:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("renderingType",r)}get renderingType(){return this._renderingType}set desynchronizedEnabled(t){let r=this._desynchronizedEnabled;this._desynchronizedEnabled=t;let i=new CustomEvent("desynchronizedEnabled-changed",{detail:{desynchronizedEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("desynchronizedEnabled",r)}get desynchronizedEnabled(){return this._desynchronizedEnabled}set pointerRawUpdateEnabled(t){let r=this._pointerRawUpdateEnabled;this._pointerRawUpdateEnabled=t;let i=new CustomEvent("pointerRawUpdateEnabled-changed",{detail:{pointerRawUpdateEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("pointerRawUpdateEnabled",r)}get pointerRawUpdateEnabled(){return this._pointerRawUpdateEnabled}set pressureEventsEnabled(t){let r=this._pressureEventsEnabled;this._pressureEventsEnabled=t;let i=new CustomEvent("pressureEventsEnabled-changed",{detail:{pressureEventsEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("pressureEventsEnabled",r)}get pressureEventsEnabled(){return this._pressureEventsEnabled}set predictedEventsEnabled(t){let r=this._predictedEventsEnabled;this._predictedEventsEnabled=t;let i=new CustomEvent("predictedEventsEnabled-changed",{detail:{predictedEventsEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("predictedEventsEnabled",r)}get predictedEventsEnabled(){return this._predictedEventsEnabled}set predictedEventsHighlightEnabled(t){let r=this._predictedEventsHighlightEnabled;this._predictedEventsHighlightEnabled=t;let i=new CustomEvent("predictedEventsHighlightEnabled-changed",{detail:{predictedEventsHighlightEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("predictedEventsHighlightEnabled",r)}get predictedEventsHighlightEnabled(){return this._predictedEventsHighlightEnabled}set predictionType(t){let r=this._predictionType;this._predictionType=t;let i=new CustomEvent("predictionType-changed",{detail:{predictionType:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("predictionType",r)}get predictionType(){return this._predictionType}set numOfPredictionPoints(t){let r=this._numOfPredictionPoints;this._numOfPredictionPoints=t;let i=new CustomEvent("numOfPredictionPoints-changed",{detail:{numOfPredictionPoints:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("numOfPredictionPoints",r)}get numOfPredictionPoints(){return this._numOfPredictionPoints}set coalescedEventsEnabled(t){let r=this._coalescedEventsEnabled;this._coalescedEventsEnabled=t;let i=new CustomEvent("coalescedEventsEnabled-changed",{detail:{coalescedEventsEnabled:t,bubbles:!0,composed:!0}});this.dispatchEvent(i),this.requestUpdate("coalescedEventsEnabled",r)}get coalescedEventsEnabled(){return this._coalescedEventsEnabled}set drawPointsOnlyEnabled(t){let r=this._drawPointsOnlyEnabled;this._drawPointsOnlyEnabled=t;let i=new CustomEvent("drawPointsOnlyEnabled-changed",{detail:{drawPointsOnlyEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("drawPointsOnlyEnabled",r)}get drawPointsOnlyEnabled(){return this._drawPointsOnlyEnabled}show(){this._dialog.show()}_triggerPropertyUpdate(){this.desynchronizedEnabled=this.desynchronizedEnabled,this.pointerRawUpdateEnabled=this.pointerRawUpdateEnabled,this.pressureEventsEnabled=this.pressureEventsEnabled,this.predictedEventsEnabled=this.predictedEventsEnabled,this.predictedEventsHighlightEnabled=this.predictedEventsHighlightEnabled,this.predictionType=this.predictionType,this.numOfPredictionPoints=this.numOfPredictionPoints,this.coalescedEventsEnabled=this.coalescedEventsEnabled,this.drawPointsOnlyEnabled=this.drawPointsOnlyEnabled}_renderingTypeModeChanged(){this.renderingType=this._renderingModeSelect.value,this._triggerPropertyUpdate()}_desynchronizedSwitchChanged(){this.desynchronizedEnabled=this._desynchronizedSwitch.checked}_isPointerRawUpdateSupported(){return typeof this.onpointerrawupdate<"u"}_pointerRawSwitchChanged(){this.pointerRawUpdateEnabled=this._pointerRawSwitch.checked,this._pointerRawSwitch.checked&&(this.predictedEventsEnabled=this._predictionSwitch.checked=!1,this.predictedEventsHighlightEnabled=this._predictionHighlightSwitch.checked=!1,this._predictionModeSelect.disabled=this._predictionPointsRange.disabled=!this._predictionSwitch.checked)}_drawPointsOnlyChanged(){this.drawPointsOnlyEnabled=this._drawPointsSwitch.checked}_coalescedEventsSwitchChanged(){this.coalescedEventsEnabled=this._coalescedEventsSwitch.checked}_pressureEventsSwitchChanged(){this.pressureEventsEnabled=this._penPressureSwitch.checked}_predictedEventsSwitchChanged(){this.predictedEventsEnabled=this._predictionSwitch.checked,this._predictionHighlightSwitch.disabled=!this._predictionSwitch.checked,this._predictionSwitch.checked?this.pointerRawUpdateEnabled=this._pointerRawSwitch.checked=!1:this.predictedEventsHighlightEnabled=this._predictionHighlightSwitch.checked=!1,this._predictionModeSelect.disabled=this._predictionPointsRange.disabled=!this._predictionSwitch.checked}_predictedEventsHighlightSwitchChanged(){this.predictedEventsHighlightEnabled=this._predictionHighlightSwitch.checked}_predictionTypeSwitchChanged(){this.predictionType=this._predictionModeSelect.value}_predictionPointsRangeChanged(){this.numOfPredictionPoints=this._predictionPointsRange.value}firstUpdated(){this._dialog=this.shadowRoot.querySelector("#dialog"),this._dialog.querySelector('sl-button[slot="footer"]').addEventListener("click",()=>this._dialog.hide()),this._renderingModeSelect=this.shadowRoot.querySelector("#rendering-mode-select"),this._desynchronizedSwitch=this.shadowRoot.querySelector("#desynchronized-switch"),this._drawPointsSwitch=this.shadowRoot.querySelector("#draw-points-switch"),this._pointerRawSwitch=this.shadowRoot.querySelector("#pointerraw-switch"),this._coalescedEventsSwitch=this.shadowRoot.querySelector("#coalesced-switch"),this._penPressureSwitch=this.shadowRoot.querySelector("#pen-pressure-switch"),this._predictionSwitch=this.shadowRoot.querySelector("#predictions-switch"),this._predictionHighlightSwitch=this.shadowRoot.querySelector("#predictions-highlight-switch"),this._predictionModeSelect=this.shadowRoot.querySelector("#prediction-mode-select"),this._predictionPointsRange=this.shadowRoot.querySelector("#prediction-points-range"),this.desynchronizedEnabled=this._desynchronizedSwitch.checked=!0,this.predictedEventsEnabled=this._predictionSwitch.checked=!0,this.predictedEventsHighlightEnabled=this._predictionHighlightSwitch.checked=!1,this.pressureEventsEnabled=this._penPressureSwitch.checked=!0,this.coalescedEventsEnabled=this._coalescedEventsSwitch.checked=!0,this._isPointerRawUpdateSupported()||(this._pointerRawSwitch.disabled=!0),this._triggerPropertyUpdate()}constructor(){super(),this._desynchronizedEnabled=!1,this._drawingPreferencesCheckbox=!1,this._pointerRawUpdateEnabled=!1,this._pressureEventsEnabled=!1,this._predictedEventsEnabled=!1,this._predictedEventsHighlightEnabled=!1,this._predictionType="custom",this._coalescedEventsEnabled=!1,this._drawPointsOnlyEnabled=!1,this._numOfPredictionPoints=1}render(){return ae`
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
        `}}gt(Ld,"styles",Ne`
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
    `);customElements.define("settings-dialog",Ld);var Wg=lt`
  ${vt}

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
`,vr=class extends ct{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return j`
      <slot
        part="base"
        class=${_t({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      ></slot>
    `}};vr.styles=Wg;b([C({reflect:!0})],vr.prototype,"variant",2);b([C({type:Boolean,reflect:!0})],vr.prototype,"pill",2);b([C({type:Boolean,reflect:!0})],vr.prototype,"pulse",2);vr=b([mt("sl-badge")],vr);function ss(e,t){function r(n){const o=e.getBoundingClientRect(),l=e.ownerDocument.defaultView,c=o.left+l.pageXOffset,h=o.top+l.pageYOffset,a=n.pageX-c,d=n.pageY-h;t!=null&&t.onMove&&t.onMove(a,d)}function i(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",i),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&r(t.initialEvent)}function Ft(e,t,r){return e<t?t:e>r?r:e}var Ie=qi(class extends Wi{constructor(e){var t;if(super(e),e.type!==we.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const i=e[r];return i==null?t:t+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:r}=e.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?r.removeProperty(i):r[i]="")});for(const i in t){const n=t[i];n!=null&&(this.vt.add(i),i.includes("-")?r.setProperty(i,n):r[i]=n)}return Kt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Fg=lt`
  ${vt}

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
    background-position: 0 0, 0 0, -5px -5px, 5px 5px;
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
    box-shadow: inset 0 0 0 2px var(--sl-input-border-color), inset 0 0 0 4px var(--sl-color-neutral-0);
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
`;function Pt(e,t){Vg(e)&&(e="100%");var r=Bg(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function vi(e){return Math.min(1,Math.max(0,e))}function Vg(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Bg(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Rd(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function mi(e){return e<=1?"".concat(Number(e)*100,"%"):e}function Ke(e){return e.length===1?"0"+e:String(e)}function Hg(e,t,r){return{r:Pt(e,255)*255,g:Pt(t,255)*255,b:Pt(r,255)*255}}function Mc(e,t,r){e=Pt(e,255),t=Pt(t,255),r=Pt(r,255);var i=Math.max(e,t,r),n=Math.min(e,t,r),o=0,l=0,c=(i+n)/2;if(i===n)l=0,o=0;else{var h=i-n;switch(l=c>.5?h/(2-i-n):h/(i+n),i){case e:o=(t-r)/h+(t<r?6:0);break;case t:o=(r-e)/h+2;break;case r:o=(e-t)/h+4;break}o/=6}return{h:o,s:l,l:c}}function as(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function jg(e,t,r){var i,n,o;if(e=Pt(e,360),t=Pt(t,100),r=Pt(r,100),t===0)n=r,o=r,i=r;else{var l=r<.5?r*(1+t):r+t-r*t,c=2*r-l;i=as(c,l,e+1/3),n=as(c,l,e),o=as(c,l,e-1/3)}return{r:i*255,g:n*255,b:o*255}}function zc(e,t,r){e=Pt(e,255),t=Pt(t,255),r=Pt(r,255);var i=Math.max(e,t,r),n=Math.min(e,t,r),o=0,l=i,c=i-n,h=i===0?0:c/i;if(i===n)o=0;else{switch(i){case e:o=(t-r)/c+(t<r?6:0);break;case t:o=(r-e)/c+2;break;case r:o=(e-t)/c+4;break}o/=6}return{h:o,s:h,v:l}}function Kg(e,t,r){e=Pt(e,360)*6,t=Pt(t,100),r=Pt(r,100);var i=Math.floor(e),n=e-i,o=r*(1-t),l=r*(1-n*t),c=r*(1-(1-n)*t),h=i%6,a=[r,l,o,o,c,r][h],d=[c,r,r,l,o,o][h],s=[o,o,c,r,r,l][h];return{r:a*255,g:d*255,b:s*255}}function Nc(e,t,r,i){var n=[Ke(Math.round(e).toString(16)),Ke(Math.round(t).toString(16)),Ke(Math.round(r).toString(16))];return i&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function Xg(e,t,r,i,n){var o=[Ke(Math.round(e).toString(16)),Ke(Math.round(t).toString(16)),Ke(Math.round(r).toString(16)),Ke(Gg(i))];return n&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function Gg(e){return Math.round(parseFloat(e)*255).toString(16)}function Dc(e){return jt(e)/255}function jt(e){return parseInt(e,16)}function Yg(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var $s={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Zg(e){var t={r:0,g:0,b:0},r=1,i=null,n=null,o=null,l=!1,c=!1;return typeof e=="string"&&(e=tv(e)),typeof e=="object"&&(_e(e.r)&&_e(e.g)&&_e(e.b)?(t=Hg(e.r,e.g,e.b),l=!0,c=String(e.r).substr(-1)==="%"?"prgb":"rgb"):_e(e.h)&&_e(e.s)&&_e(e.v)?(i=mi(e.s),n=mi(e.v),t=Kg(e.h,i,n),l=!0,c="hsv"):_e(e.h)&&_e(e.s)&&_e(e.l)&&(i=mi(e.s),o=mi(e.l),t=jg(e.h,i,o),l=!0,c="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=Rd(r),{ok:l,format:e.format||c,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}var Qg="[-\\+]?\\d+%?",Jg="[-\\+]?\\d*\\.\\d+%?",Oe="(?:".concat(Jg,")|(?:").concat(Qg,")"),ls="[\\s|\\(]+(".concat(Oe,")[,|\\s]+(").concat(Oe,")[,|\\s]+(").concat(Oe,")\\s*\\)?"),cs="[\\s|\\(]+(".concat(Oe,")[,|\\s]+(").concat(Oe,")[,|\\s]+(").concat(Oe,")[,|\\s]+(").concat(Oe,")\\s*\\)?"),ne={CSS_UNIT:new RegExp(Oe),rgb:new RegExp("rgb"+ls),rgba:new RegExp("rgba"+cs),hsl:new RegExp("hsl"+ls),hsla:new RegExp("hsla"+cs),hsv:new RegExp("hsv"+ls),hsva:new RegExp("hsva"+cs),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function tv(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if($s[e])e=$s[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var r=ne.rgb.exec(e);return r?{r:r[1],g:r[2],b:r[3]}:(r=ne.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=ne.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=ne.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=ne.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=ne.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=ne.hex8.exec(e),r?{r:jt(r[1]),g:jt(r[2]),b:jt(r[3]),a:Dc(r[4]),format:t?"name":"hex8"}:(r=ne.hex6.exec(e),r?{r:jt(r[1]),g:jt(r[2]),b:jt(r[3]),format:t?"name":"hex"}:(r=ne.hex4.exec(e),r?{r:jt(r[1]+r[1]),g:jt(r[2]+r[2]),b:jt(r[3]+r[3]),a:Dc(r[4]+r[4]),format:t?"name":"hex8"}:(r=ne.hex3.exec(e),r?{r:jt(r[1]+r[1]),g:jt(r[2]+r[2]),b:jt(r[3]+r[3]),format:t?"name":"hex"}:!1)))))))))}function _e(e){return Boolean(ne.CSS_UNIT.exec(String(e)))}var ev=function(){function e(t,r){t===void 0&&(t=""),r===void 0&&(r={});var i;if(t instanceof e)return t;typeof t=="number"&&(t=Yg(t)),this.originalInput=t;var n=Zg(t);this.originalInput=t,this.r=n.r,this.g=n.g,this.b=n.b,this.a=n.a,this.roundA=Math.round(100*this.a)/100,this.format=(i=r.format)!==null&&i!==void 0?i:n.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=n.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),r,i,n,o=t.r/255,l=t.g/255,c=t.b/255;return o<=.03928?r=o/12.92:r=Math.pow((o+.055)/1.055,2.4),l<=.03928?i=l/12.92:i=Math.pow((l+.055)/1.055,2.4),c<=.03928?n=c/12.92:n=Math.pow((c+.055)/1.055,2.4),.2126*r+.7152*i+.0722*n},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=Rd(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},e.prototype.toHsv=function(){var t=zc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=zc(this.r,this.g,this.b),r=Math.round(t.h*360),i=Math.round(t.s*100),n=Math.round(t.v*100);return this.a===1?"hsv(".concat(r,", ").concat(i,"%, ").concat(n,"%)"):"hsva(".concat(r,", ").concat(i,"%, ").concat(n,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=Mc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=Mc(this.r,this.g,this.b),r=Math.round(t.h*360),i=Math.round(t.s*100),n=Math.round(t.l*100);return this.a===1?"hsl(".concat(r,", ").concat(i,"%, ").concat(n,"%)"):"hsla(".concat(r,", ").concat(i,"%, ").concat(n,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),Nc(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),Xg(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),r=Math.round(this.g),i=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(r,", ").concat(i,")"):"rgba(".concat(t,", ").concat(r,", ").concat(i,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(r){return"".concat(Math.round(Pt(r,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(r){return Math.round(Pt(r,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+Nc(this.r,this.g,this.b,!1),r=0,i=Object.entries($s);r<i.length;r++){var n=i[r],o=n[0],l=n[1];if(t===l)return o}return!1},e.prototype.toString=function(t){var r=Boolean(t);t=t!=null?t:this.format;var i=!1,n=this.a<1&&this.a>=0,o=!r&&n&&(t.startsWith("hex")||t==="name");return o?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(i=this.toRgbString()),t==="prgb"&&(i=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(i=this.toHexString()),t==="hex3"&&(i=this.toHexString(!0)),t==="hex4"&&(i=this.toHex8String(!0)),t==="hex8"&&(i=this.toHex8String()),t==="name"&&(i=this.toName()),t==="hsl"&&(i=this.toHslString()),t==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.l+=t/100,r.l=vi(r.l),new e(r)},e.prototype.brighten=function(t){t===void 0&&(t=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new e(r)},e.prototype.darken=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.l-=t/100,r.l=vi(r.l),new e(r)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.s-=t/100,r.s=vi(r.s),new e(r)},e.prototype.saturate=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.s+=t/100,r.s=vi(r.s),new e(r)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var r=this.toHsl(),i=(r.h+t)%360;return r.h=i<0?360+i:i,new e(r)},e.prototype.mix=function(t,r){r===void 0&&(r=50);var i=this.toRgb(),n=new e(t).toRgb(),o=r/100,l={r:(n.r-i.r)*o+i.r,g:(n.g-i.g)*o+i.g,b:(n.b-i.b)*o+i.b,a:(n.a-i.a)*o+i.a};return new e(l)},e.prototype.analogous=function(t,r){t===void 0&&(t=6),r===void 0&&(r=30);var i=this.toHsl(),n=360/r,o=[this];for(i.h=(i.h-(n*t>>1)+720)%360;--t;)i.h=(i.h+n)%360,o.push(new e(i));return o},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var r=this.toHsv(),i=r.h,n=r.s,o=r.v,l=[],c=1/t;t--;)l.push(new e({h:i,s:n,v:o})),o=(o+c)%1;return l},e.prototype.splitcomplement=function(){var t=this.toHsl(),r=t.h;return[this,new e({h:(r+72)%360,s:t.s,l:t.l}),new e({h:(r+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var r=this.toRgb(),i=new e(t).toRgb();return new e({r:i.r+(r.r-i.r)*r.a,g:i.g+(r.g-i.g)*r.a,b:i.b+(r.b-i.b)*r.a})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var r=this.toHsl(),i=r.h,n=[this],o=360/t,l=1;l<t;l++)n.push(new e({h:(i+l*o)%360,s:r.s,l:r.l}));return n},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}(),Uc="EyeDropper"in window,ot=class extends ct{constructor(){super(...arguments),this.formSubmitController=new Ye(this),this.isSafeValue=!1,this.localize=new Bt(this),this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.lightness=100,this.brightness=100,this.alpha=100,this.invalid=!1,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches=["#d0021b","#f5a623","#f8e71c","#8b572a","#7ed321","#417505","#bd10e0","#9013fe","#4a90e2","#50e3c2","#b8e986","#000","#444","#888","#ccc","#fff"]}connectedCallback(){super.connectedCallback(),this.value?(this.setColor(this.value),this.inputValue=this.value,this.lastValueEmitted=this.value,this.syncValues()):(this.isEmpty=!0,this.inputValue="",this.lastValueEmitted="")}getFormattedValue(e="hex"){const t=this.parseColor(`hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}getBrightness(e){return Ft(-1*(200*e/(this.saturation-200)),0,100)}getLightness(e){return Ft((200-this.saturation)*e/100*5/10,0,100)}checkValidity(){return this.input.checkValidity()}reportValidity(){return!this.inline&&this.input.invalid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.checkValidity()):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=this.input.invalid}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let n=this.value;r.focus(),e.preventDefault(),ss(t,{onMove:o=>{this.alpha=Ft(o/i*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let n=this.value;r.focus(),e.preventDefault(),ss(t,{onMove:o=>{this.hue=Ft(o/i*360,0,360),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:i,height:n}=t.getBoundingClientRect();let o=this.value;r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,ss(t,{onMove:(l,c)=>{this.saturation=Ft(l/i*100,0,100),this.brightness=Ft(100-c/n*100,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Ft(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Ft(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Ft(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Ft(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Ft(this.saturation-t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Ft(this.saturation+t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Ft(this.brightness+t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Ft(this.brightness-t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,r=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new ev(e);if(!t.isValid)return null;const r=t.toHsl(),i={h:r.h,s:r.s*100,l:r.l*100,a:r.a},n=t.toRgb(),o=t.toHexString(),l=t.toHex8String(),c=t.toHsv(),h={h:c.h,s:c.s*100,v:c.v*100,a:c.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:h.h,s:h.s,v:h.v,string:this.setLetterCase(`hsv(${Math.round(h.h)}, ${Math.round(h.s)}%, ${Math.round(h.v)}%)`)},hsva:{h:h.h,s:h.s,v:h.v,a:h.a,string:this.setLetterCase(`hsva(${Math.round(h.h)}, ${Math.round(h.s)}%, ${Math.round(h.v)}%, ${h.a.toFixed(2).toString()})`)},rgb:{r:n.r,g:n.g,b:n.b,string:this.setLetterCase(`rgb(${Math.round(n.r)}, ${Math.round(n.g)}, ${Math.round(n.b)})`)},rgba:{r:n.r,g:n.g,b:n.b,a:n.a,string:this.setLetterCase(`rgba(${Math.round(n.r)}, ${Math.round(n.g)}, ${Math.round(n.b)}, ${n.a.toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(l)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsla.h,this.saturation=t.hsla.s,this.lightness=t.hsla.l,this.brightness=this.getBrightness(t.hsla.l),this.alpha=this.opacity?t.hsla.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Uc)return;new EyeDropper().open().then(t=>this.setColor(t.sRGBHex)).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=100,this.brightness=100,this.lightness=this.getLightness(this.brightness),this.alpha=100),!this.isSafeValue&&e!==void 0){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsla.h,this.saturation=r.hsla.s,this.lightness=r.hsla.l,this.brightness=this.getBrightness(r.hsla.l),this.alpha=r.hsla.a*100):this.inputValue=e}this.value!==this.lastValueEmitted&&(this.lastValueEmitted=this.value)}render(){const e=this.saturation,t=100-this.brightness,r=j`
      <div
        part="base"
        class=${_t({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?j`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Ie({backgroundColor:`hsl(${this.hue}deg, 100%, 50%)`})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${_t({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Ie({top:`${t}%`,left:`${e}%`,backgroundColor:`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%)`})}
            role="application"
            aria-label="HSL"
            tabindex=${K(this.disabled?void 0:"0")}
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
                part="slider-handle"
                class="color-picker__slider-handle"
                style=${Ie({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${K(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?j`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Ie({backgroundImage:`linear-gradient(
                          to right,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, 0%) 0%,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%) 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle"
                      class="color-picker__slider-handle"
                      style=${Ie({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${K(this.disabled?void 0:"0")}
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
            style=${Ie({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
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
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":j`
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
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Uc?j`
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

        ${this.swatches.length>0?j`
              <div part="swatches" class="color-picker__swatches">
                ${this.swatches.map(i=>j`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${K(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${i}
                      @click=${()=>this.selectSwatch(i)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(i)}
                    >
                      <div class="color-picker__swatch-color" style=${Ie({backgroundColor:i})}></div>
                    </div>
                  `)}
              </div>
            `:""}
      </div>
    `;return this.inline?r:j`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${_t({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-picker__transparent-bg":!0})}
          style=${Ie({color:`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};ot.styles=Fg;b([Z('[part~="input"]')],ot.prototype,"input",2);b([Z('[part~="preview"]')],ot.prototype,"previewButton",2);b([Z(".color-dropdown")],ot.prototype,"dropdown",2);b([et()],ot.prototype,"isDraggingGridHandle",2);b([et()],ot.prototype,"isEmpty",2);b([et()],ot.prototype,"inputValue",2);b([et()],ot.prototype,"hue",2);b([et()],ot.prototype,"saturation",2);b([et()],ot.prototype,"lightness",2);b([et()],ot.prototype,"brightness",2);b([et()],ot.prototype,"alpha",2);b([et()],ot.prototype,"invalid",2);b([C()],ot.prototype,"value",2);b([ti()],ot.prototype,"defaultValue",2);b([C()],ot.prototype,"label",2);b([C()],ot.prototype,"format",2);b([C({type:Boolean,reflect:!0})],ot.prototype,"inline",2);b([C()],ot.prototype,"size",2);b([C({attribute:"no-format-toggle",type:Boolean})],ot.prototype,"noFormatToggle",2);b([C()],ot.prototype,"name",2);b([C({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);b([C({type:Boolean})],ot.prototype,"hoist",2);b([C({type:Boolean})],ot.prototype,"opacity",2);b([C({type:Boolean})],ot.prototype,"uppercase",2);b([C({attribute:!1})],ot.prototype,"swatches",2);b([X("format",{waitUntilFirstUpdate:!0})],ot.prototype,"handleFormatChange",1);b([X("opacity",{waitUntilFirstUpdate:!0})],ot.prototype,"handleOpacityChange",1);b([X("value")],ot.prototype,"handleValueChange",1);ot=b([mt("sl-color-picker")],ot);var rv=lt`
  ${vt}

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
`,Ps=class extends ct{render(){return j` <slot></slot> `}};Ps.styles=rv;Ps=b([mt("sl-visually-hidden")],Ps);var iv=lt`
  ${vt}
  ${Yi}

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
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
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
    background: none;
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

  .input__prefix::slotted(sl-icon),
  .input__suffix::slotted(sl-icon) {
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

  .input--small .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix::slotted(*) {
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

  .input--medium .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix::slotted(*) {
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

  .input--large .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix::slotted(*) {
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

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide Firefox's clear button on date and time inputs */
  .input--is-firefox input[type='date'],
  .input--is-firefox input[type='time'] {
    clip-path: inset(0 2em 0 0);
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
`,qc,nv=(qc=navigator.userAgentData)==null?void 0:qc.brands.some(e=>e.brand.includes("Chromium")),ov=nv?!1:navigator.userAgent.includes("Firefox"),G=class extends ct{constructor(){super(...arguments),this.formSubmitController=new Ye(this),this.hasSlotController=new Ce(this,"help-text","label"),this.localize=new Bt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.type="text",this.size="medium",this.name="",this.value="",this.defaultValue="",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.placeholder="",this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0}get valueAsDate(){var e,t;return(t=(e=this.input)==null?void 0:e.valueAsDate)!=null?t:null}set valueAsDate(e){const t=document.createElement("input");t.type="date",t.valueAsDate=e,this.value=t.value}get valueAsNumber(){var e,t;return(t=(e=this.input)==null?void 0:e.valueAsNumber)!=null?t:parseFloat(this.value)}set valueAsNumber(e){const t=document.createElement("input");t.type="number",t.valueAsNumber=e,this.value=t.value}firstUpdated(){this.invalid=!this.input.checkValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,i){this.input.setRangeText(e,t,r,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleStepChange(){this.input.step=String(this.step),this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(){this.invalid=!0}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formSubmitController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleValueChange(){this.input.value=this.value,this.invalid=!this.input.checkValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,n=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return j`
      <div
        part="form-control"
        class=${_t({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${_t({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--invalid":this.invalid,"input--no-spin-buttons":this.noSpinButtons,"input--is-firefox":ov})}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${K(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${K(this.placeholder)}
              minlength=${K(this.minlength)}
              maxlength=${K(this.maxlength)}
              min=${K(this.min)}
              max=${K(this.max)}
              step=${K(this.step)}
              .value=${Bs(this.value)}
              autocapitalize=${K(this.type==="password"?"off":this.autocapitalize)}
              autocomplete=${K(this.type==="password"?"off":this.autocomplete)}
              autocorrect=${K(this.type==="password"?"off":this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${K(this.pattern)}
              enterkeyhint=${K(this.enterkeyhint)}
              inputmode=${K(this.inputmode)}
              aria-describedby="help-text"
              aria-invalid=${this.invalid?"true":"false"}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${n?j`
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
            ${this.passwordToggle&&!this.disabled?j`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible?j`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          `:j`
                            <slot name="hide-password-icon">
                              <sl-icon name="eye" library="system"></sl-icon>
                            </slot>
                          `}
                    </button>
                  `:""}

            <slot name="suffix" part="suffix" class="input__suffix"></slot>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `}};G.styles=iv;b([Z(".input__control")],G.prototype,"input",2);b([et()],G.prototype,"hasFocus",2);b([et()],G.prototype,"invalid",2);b([C()],G.prototype,"title",2);b([C({reflect:!0})],G.prototype,"type",2);b([C({reflect:!0})],G.prototype,"size",2);b([C()],G.prototype,"name",2);b([C()],G.prototype,"value",2);b([ti()],G.prototype,"defaultValue",2);b([C({type:Boolean,reflect:!0})],G.prototype,"filled",2);b([C({type:Boolean,reflect:!0})],G.prototype,"pill",2);b([C()],G.prototype,"label",2);b([C({attribute:"help-text"})],G.prototype,"helpText",2);b([C({type:Boolean})],G.prototype,"clearable",2);b([C({attribute:"password-toggle",type:Boolean})],G.prototype,"passwordToggle",2);b([C({attribute:"password-visible",type:Boolean})],G.prototype,"passwordVisible",2);b([C({attribute:"no-spin-buttons",type:Boolean})],G.prototype,"noSpinButtons",2);b([C()],G.prototype,"placeholder",2);b([C({type:Boolean,reflect:!0})],G.prototype,"disabled",2);b([C({type:Boolean,reflect:!0})],G.prototype,"readonly",2);b([C({type:Number})],G.prototype,"minlength",2);b([C({type:Number})],G.prototype,"maxlength",2);b([C()],G.prototype,"min",2);b([C()],G.prototype,"max",2);b([C()],G.prototype,"step",2);b([C()],G.prototype,"pattern",2);b([C({type:Boolean,reflect:!0})],G.prototype,"required",2);b([C()],G.prototype,"autocapitalize",2);b([C()],G.prototype,"autocorrect",2);b([C()],G.prototype,"autocomplete",2);b([C({type:Boolean})],G.prototype,"autofocus",2);b([C()],G.prototype,"enterkeyhint",2);b([C({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],G.prototype,"spellcheck",2);b([C()],G.prototype,"inputmode",2);b([X("disabled",{waitUntilFirstUpdate:!0})],G.prototype,"handleDisabledChange",1);b([X("step",{waitUntilFirstUpdate:!0})],G.prototype,"handleStepChange",1);b([X("value",{waitUntilFirstUpdate:!0})],G.prototype,"handleValueChange",1);G=b([mt("sl-input")],G);class Od extends ee{static get properties(){return{selected:{type:Boolean,reflectToAttribute:!0,attribute:!0},name:{type:String,reflectToAttribute:!0,attribute:!0},label:{type:String,reflectToAttribute:!0,attribute:!0},library:{type:String,reflectToAttribute:!0,attribute:!0}}}set selected(t){let r=this._selected;this._selected=t,this.requestUpdate("selected",r)}get selected(){return this._selected}set name(t){let r=this._name;this._name=t,this.requestUpdate("name",r)}get name(){return this._name}set label(t){let r=this._label;this._label=t,this.requestUpdate("label",r)}get label(){return this._label}set library(t){this._library,this._library=t,this.requestUpdate("library",this._library)}get library(){return this._library}constructor(){super(),this._selected=!1,this._label="",this._name="",this._library="default"}render(){return ae`
            <div class="${this.selected?"selected":""}">
                <sl-icon-button 
                    library="${this.library}"
                    name="${this.name}" label="${this.label}">
                </sl-icon-button>
            </div>`}}gt(Od,"styles",Ne`
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
    `);customElements.define("drawing-button",Od);class Md extends ee{constructor(){super();gt(this,"_updateLineColorCustomization",async r=>{this._drawWithCustomizations&&this.preferredColor!=this.currentLineColor&&await this._writePreferredColor(r,!1)});gt(this,"_updateLineWidthCustomization",async r=>{await this._writePreferredWidth(r,!1)});gt(this,"_readAndSetPreferredColor",async r=>{try{this.preferredColor=await r.penCustomizationsDetails.getPreferredInkingColor(),this.currentLineColor=this.preferredColor}catch{this._emitErrorToast("Couldn't read the preferred color from the stylus.")}});gt(this,"_readAndSetPreferredStyle",async r=>{try{this.preferredStyle=await r.penCustomizationsDetails.getPreferredInkingStyle(),this.preferredStyle=this.preferredStyle.toLowerCase(),this.currentLineStyle=this.preferredStyle}catch{this._emitErrorToast("Couldn't read the preferred style from the stylus.")}});gt(this,"_readAndSetPreferredWidth",async r=>{try{this.preferredWidth=await r.penCustomizationsDetails.getPreferredInkingWidth(),this.currentLineWidth=this.preferredWidth}catch{this._emitErrorToast("Couldn't read the preferred width from the stylus.")}});gt(this,"_writePreferredColor",async(r,i=!0)=>{try{this.preferredColor=await r.penCustomizationsDetails.setPreferredInkingColor(this.currentLineColor),this.preferredColor!=this.currentLineColor?(i&&this._emitWarningToast("The color was written successfully but was adjusted to work with the pen."),console.log("Wrote the following color to the stylus : "+this.preferredColor+", original color was : "+this.currentLineColor)):(i&&this._emitSuccessToast("The current color was written successfully."),console.log("Wrote the following color to the stylus : "+this.preferredColor))}catch{i&&this._emitErrorToast("The current color could not be written on the stylus."),console.log("Could not write the preferred color to the stylus.")}});gt(this,"_writePreferredWidth",async(r,i=!0)=>{try{this.preferredWidth=await r.penCustomizationsDetails.setPreferredInkingWidth(this.currentLineWidth),i&&this._emitSuccessToast("The current width was written successfully."),console.log("Wrote to following preferred width to the stylus : "+this.preferredWidth)}catch{i&&this._emitErrorToast("The current width could not be written on the stylus."),console.log("Could not write the preferred width to the stylus.")}});gt(this,"_writePreferredStyle",async(r,i=!0)=>{try{let n=await r.penCustomizationsDetails.setPreferredInkingStyle(this.currentLineStyle.toUpperCase());this.preferredStyle=n.toLowerCase(),i&&this._emitSuccessToast("The current style was written successfully."),console.log("Wrote to following preferred width to the stylus : "+this.preferredStyle)}catch{i&&this._emitErrorToast("The current style could not be written on the stylus."),console.log("Could not write the preferred style to the stylus.")}});gt(this,"_readStylusCustomizations",async(r,i=!1)=>{let n=this.shadowRoot.querySelectorAll(".preferred");try{const o=await r.penCustomizationsDetails.getPreferredInkingColor(),l=await r.penCustomizationsDetails.getPreferredInkingStyle(),c=await r.penCustomizationsDetails.getPreferredInkingWidth();this.preferredColor=o,this.preferredStyle=l.toLowerCase(),this.preferredWidth=c,this._readStylusPanel.style.display="none",n.forEach(h=>{h.style.display="flex"})}catch{this._readStylusPanel.style.display="flex",n.forEach(l=>{l.style.display="none"}),i&&this._emitErrorToast("Could not read the customizations from the stylus.")}});gt(this,"_showStylusCustomizationsDrawer",async r=>{this._readStylusCustomizations(r,!1),this._drawer.show()});this._currentLineStyle="pencil",this._currentLineColor="#000000",this._currentLineWidth=1,this._preferredWidth=1,this._preferredColor="#000000",this._preferredStyle="pencil",this._drawWithCustomizations=!1,ah("my-icons",{resolver:r=>`icons/${r}.svg`,mutator:r=>r.setAttribute("fill","currentColor")})}static get properties(){return{currentLineStyle:{type:String,reflectToAttribute:!0,attribute:!0},currentLineColor:{type:String,reflectToAttribute:!0,attribute:!0},currentLineWidth:{type:Number,reflectToAttribute:!0,attribute:!0},preferredStyle:{type:String,reflectToAttribute:!0,attribute:!0},preferredColor:{type:String,reflectToAttribute:!0,attribute:!0},preferredWidth:{type:Number,reflectToAttribute:!0,attribute:!0},drawWithCustomizations:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}firstUpdated(){this._colorPicker=this.shadowRoot.querySelector("#color-picker"),this._drawer=this.shadowRoot.querySelector("#drawer"),this._lineWidthRange=this.shadowRoot.querySelector("#line-width-range"),this._penCustomizationsButton=this.shadowRoot.querySelector("#pen-customizations-button"),this._customizationsSwitch=this.shadowRoot.querySelector("#draw-customizations-switch"),Pd()?console.log("Pen Customizations are supported."):(console.log("Pen Customizations are not supported."),this._penCustomizationsButton.style.display="none"),this._readStylusPanel=this.shadowRoot.querySelector("#read-stylus-panel")}_styleSelected(r,i){switch(this.currentLineStyle=r,r){case"ink":this.currentLineWidth=6;break;case"pencil":this.currentLineWidth=1;break;case"marker":this.currentLineWidth=12;break;case"highlighter":this.currentLineWidth=24,this.currentLineColor="#FFFF00";break;case"brush":this.currentLineWidth=14;break;default:console.log("Unsupported pen style ",r)}this._drawWithCustomizations&&(this.preferredStyle!=this.currentLineStyle&&this._writePreferredStyle(i,!1),this._updateLineColorCustomization(i,!1),this._updateLineWidthCustomization(i,!1))}_colorSelected(r){this.currentLineColor=this._colorPicker.value.toUpperCase(),this._pendingWriteEvent&&this._updateLineColorCustomization(this._pendingWriteEvent,!1)}_savePointerEventToWrite(r){this._pendingWriteEvent=r}_clearPointerEventToWrite(){this._pendingWriteEvent=null,this._drawWithCustomizations&&(this.currentLineColor=this.preferredColor)}set currentLineColor(r){let i=this._currentLineColor;this._currentLineColor=r,this._colorPicker.value!=r&&(this._colorPicker.value=r);let n=new CustomEvent("lineColor-changed",{detail:{lineColor:r},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("currentLineColor",i)}get currentLineColor(){return this._currentLineColor}set currentLineStyle(r){let i=this._currentLineStyle;this._currentLineStyle=r;let n=new CustomEvent("lineStyle-changed",{detail:{lineStyle:r},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("currentLineStyle",i)}get currentLineStyle(){return this._currentLineStyle}set currentLineWidth(r){let i=this._currentLineWidth;this._currentLineWidth=r,this._lineWidthRange.value=r;let n=new CustomEvent("lineWidth-changed",{detail:{lineWidth:r},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("currentLineWidth",i)}get currentLineWidth(){return this._currentLineWidth}set preferredColor(r){let i=this._preferredColor;this._preferredColor=r;let n=new CustomEvent("preferredColor-changed",{detail:{preferredColor:r},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("preferredColor",i)}get preferredColor(){return this._preferredColor}set preferredStyle(r){let i=this._preferredStyle;this._preferredStyle=r;let n=new CustomEvent("preferredStyle-changed",{detail:{preferredStyle:r},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("preferredStyle",i)}get preferredStyle(){return this._preferredStyle}set preferredWidth(r){let i=this._preferredWidth;this._preferredWidth=r;let n=new CustomEvent("preferredWidth-changed",{detail:{preferredWidth:r},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("preferredWidth",i)}get preferredWidth(){return this._preferredWidth}set drawWithCustomizations(r){let i=this._drawWithCustomizations;this._drawWithCustomizations=r;let n=new CustomEvent("drawWithCustomizations-changed",{detail:{drawWithCustomizations:r},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("drawWithCustomizations",i)}get drawWithCustomizations(){return this._drawWithCustomizations}_lineWidthChanged(){this.currentLineWidth=this._lineWidthRange.value,this._drawWithCustomizations&&this._pendingWriteEvent&&this._updateLineWidthCustomization(this._pendingWriteEvent,!1)}_escapeHtml(r){const i=document.createElement("div");return i.textContent=r,i.innerHTML}_createToastNotification(r,i="success",n="check2-circle",o=4e3){const l=Object.assign(document.createElement("sl-alert"),{variant:i,closable:!0,duration:o,innerHTML:`
                <sl-icon name="${n}" slot="icon"></sl-icon>
                ${this._escapeHtml(r)}
            `});return this.shadowRoot.append(l),l.toast()}_emitSuccessToast(r){this._createToastNotification(r)}_emitWarningToast(r){this._createToastNotification(r,"warning","exclamation-triangle")}_emitErrorToast(r){this._createToastNotification(r,"danger","exclamation-octagon")}_drawWithCustomizationsSwitchChanged(){this.drawWithCustomizations=this._customizationsSwitch.checked,this.drawWithCustomizations&&(this.currentLineColor=this.preferredColor,this.currentLineStyle=this.preferredStyle,this.currentLineWidth=this.preferredWidth)}render(){return ae`
            <div class="content">
                <drawing-button name="pencil" label="pencil"
                    ?selected="${this.currentLineStyle==="pencil"}"
                    @pointerdown="${r=>this._styleSelected("pencil",r)}">
                </drawing-button>
                <drawing-button name="pen" label="pen"
                    ?selected="${this.currentLineStyle==="ink"}"
                    @pointerdown="${r=>this._styleSelected("ink",r)}">
                </drawing-button>
                <drawing-button name="brush" label="brush"
                    ?selected="${this.currentLineStyle==="brush"}"
                    @pointerdown="${r=>this._styleSelected("brush",r)}">
                </drawing-button>
                <drawing-button name="marker" library="my-icons"
                    ?selected="${this.currentLineStyle==="marker"}"
                    @pointerdown="${r=>this._styleSelected("marker",r)}">
                </drawing-button>
                <drawing-button library="my-icons" name="highlighter"
                    ?selected="${this.currentLineStyle==="highlighter"}"
                    @pointerdown="${r=>this._styleSelected("highlighter",r)}">
                </drawing-button>
                <sl-color-picker
                    id="color-picker"
                    format="hex" size="small" label="Select a color" value="#000000"
                    @sl-change="${()=>this._colorSelected()}"
                    @pointerdown="${r=>this._savePointerEventToWrite(r)}"
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
                            @pointerdown="${r=>this._savePointerEventToWrite(r)}"
                            @pointerup="${()=>this._clearPointerEventToWrite()}">
                        </sl-range>
                        Current width: ${this.currentLineWidth} px
                    </div>
                </sl-dropdown>
                <div class="expand"></div>
                <drawing-button id="pen-customizations-button"
                    library="my-icons" name="pen_customizations"
                    @pointerdown="${r=>this._showStylusCustomizationsDrawer(r)}">
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
                                            @pointerdown="${r=>this._readStylusCustomizations(r,!0)}"></sl-icon>
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
        `}}gt(Md,"styles",Ne`
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
    `);customElements.define("drawing-toolbar",Md);var Ts=function(e,t){return Ts=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r[n]=i[n])},Ts(e,t)};function sv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Ts(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var Mi=function(){return Mi=Object.assign||function(t){for(var r,i=1,n=arguments.length;i<n;i++){r=arguments[i];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Mi.apply(this,arguments)};function zt(e,t,r,i){var n=arguments.length,o=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,r,i);else for(var c=e.length-1;c>=0;c--)(l=e[c])&&(o=(n<3?l(o):n>3?l(t,r,o):l(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const av=e=>t=>typeof t=="function"?((r,i)=>(customElements.define(r,i),i))(e,t):((r,i)=>{const{kind:n,elements:o}=i;return{kind:n,elements:o,finisher(l){customElements.define(r,l)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lv=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function $e(e){return(t,r)=>r!==void 0?((i,n,o)=>{n.constructor.createProperty(o,i)})(e,t,r):lv(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cv=({finisher:e,descriptor:t})=>(r,i)=>{var n;if(i===void 0){const o=(n=r.originalKey)!==null&&n!==void 0?n:r.key,l=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(r.key)}:{...r,key:o};return e!=null&&(l.finisher=function(c){e(c,o)}),l}{const o=r.constructor;t!==void 0&&Object.defineProperty(r,i,t(i)),e==null||e(o,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function br(e,t){return cv({descriptor:r=>{const i={get(){var n,o;return(o=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const n=typeof r=="symbol"?Symbol():"__"+r;i.get=function(){var o,l;return this[n]===void 0&&(this[n]=(l=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&l!==void 0?l:null),this[n]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ds;((ds=window.HTMLSlotElement)===null||ds===void 0?void 0:ds.prototype.assignedElements)!=null;/**
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
 */(()=>{var e,t,r;const i=Symbol(),n=Symbol(),o=Symbol(),l=Symbol(),c=Symbol(),h=Symbol(),a=Symbol(),d=Symbol(),s=Symbol(),u=Symbol(),v=Symbol(),g=Symbol(),y=Symbol();class w{constructor(){this[e]=[],this[t]=[],this[r]=new Set}destructor(){this[s](this[o]);const x=this;x[i]=null,x[o]=null,x[n]=null}get top(){const x=this[i];return x[x.length-1]||null}push(x){!x||x===this.top||(this.remove(x),this[h](x),this[i].push(x))}remove(x){const E=this[i].indexOf(x);return E===-1?!1:(this[i].splice(E,1),E===this[i].length&&this[h](this.top),!0)}pop(){const x=this.top;return x&&this.remove(x),x}has(x){return this[i].indexOf(x)!==-1}[(e=i,t=o,r=n,h)](x){const E=this[n],$=this[o];if(!x){this[s]($),E.clear(),this[o]=[];return}const P=this[u](x);if(P[P.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[o]=P;const L=this[v](x);if(!$.length){this[d](P,L,E);return}let M=$.length-1,z=P.length-1;for(;M>0&&z>0&&$[M]===P[z];)M--,z--;$[M]!==P[z]&&this[a]($[M],P[z]),M>0&&this[s]($.slice(0,M)),z>0&&this[d](P.slice(0,z),L,null)}[a](x,E){const $=x[l];this[g](x)&&!x.inert&&(x.inert=!0,$.add(x)),$.has(E)&&(E.inert=!1,$.delete(E)),E[c]=x[c],E[l]=$,x[c]=void 0,x[l]=void 0}[s](x){for(const E of x){E[c].disconnect(),E[c]=void 0;const P=E[l];for(const L of P)L.inert=!1;E[l]=void 0}}[d](x,E,$){for(const P of x){const L=P.parentNode,M=L.children,z=new Set;for(let B=0;B<M.length;B++){const V=M[B];V===P||!this[g](V)||E&&E.has(V)||($&&V.inert?$.add(V):(V.inert=!0,z.add(V)))}P[l]=z;const q=new MutationObserver(this[y].bind(this));P[c]=q;let N=L;const W=N;W.__shady&&W.host&&(N=W.host),q.observe(N,{childList:!0})}}[y](x){const E=this[o],$=this[n];for(const P of x){const L=P.target.host||P.target,M=L===document.body?E.length:E.indexOf(L),z=E[M-1],q=z[l];for(let N=0;N<P.removedNodes.length;N++){const W=P.removedNodes[N];if(W===z){console.info("Detected removal of the top Blocking Element."),this.pop();return}q.has(W)&&(W.inert=!1,q.delete(W))}for(let N=0;N<P.addedNodes.length;N++){const W=P.addedNodes[N];!this[g](W)||($&&W.inert?$.add(W):(W.inert=!0,q.add(W)))}}}[g](x){return/^(style|template|script)$/.test(x.localName)===!1}[u](x){const E=[];let $=x;for(;$&&$!==document.body;){if($.nodeType===Node.ELEMENT_NODE&&E.push($),$.assignedSlot){for(;$=$.assignedSlot;)E.push($);$=E.pop();continue}$=$.parentNode||$.host}return E}[v](x){const E=x.shadowRoot;if(!E)return null;const $=new Set;let P,L,M;const z=E.querySelectorAll("slot");if(z.length&&z[0].assignedNodes)for(P=0;P<z.length;P++)for(M=z[P].assignedNodes({flatten:!0}),L=0;L<M.length;L++)M[L].nodeType===Node.ELEMENT_NODE&&$.add(M[L]);return $}}document.$blockingElements=new w})();var us=function(){function e(t,r){for(var i=0;i<r.length;i++){var n=r[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();function hs(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(function(){if(typeof window>"u")return;var e=Array.prototype.slice,t=Element.prototype.matches||Element.prototype.msMatchesSelector,r=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),i=function(){function a(d,s){hs(this,a),this._inertManager=s,this._rootElement=d,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return us(a,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(this._savedAriaHidden!==null?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach(function(s){this._unmanageNode(s.node)},this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(s){var u=this;l(s,function(w){return u._visitNode(w)});var v=document.activeElement;if(!document.body.contains(s)){for(var g=s,y=void 0;g;){if(g.nodeType===Node.DOCUMENT_FRAGMENT_NODE){y=g;break}g=g.parentNode}y&&(v=y.activeElement)}s.contains(v)&&(v.blur(),v===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(s){if(s.nodeType===Node.ELEMENT_NODE){var u=s;u!==this._rootElement&&u.hasAttribute("inert")&&this._adoptInertRoot(u),(t.call(u,r)||u.hasAttribute("tabindex"))&&this._manageNode(u)}}},{key:"_manageNode",value:function(s){var u=this._inertManager.register(s,this);this._managedNodes.add(u)}},{key:"_unmanageNode",value:function(s){var u=this._inertManager.deregister(s,this);u&&this._managedNodes.delete(u)}},{key:"_unmanageSubtree",value:function(s){var u=this;l(s,function(v){return u._unmanageNode(v)})}},{key:"_adoptInertRoot",value:function(s){var u=this._inertManager.getInertRoot(s);u||(this._inertManager.setInert(s,!0),u=this._inertManager.getInertRoot(s)),u.managedNodes.forEach(function(v){this._manageNode(v.node)},this)}},{key:"_onMutation",value:function(s,u){s.forEach(function(v){var g=v.target;if(v.type==="childList")e.call(v.addedNodes).forEach(function(w){this._makeSubtreeUnfocusable(w)},this),e.call(v.removedNodes).forEach(function(w){this._unmanageSubtree(w)},this);else if(v.type==="attributes"){if(v.attributeName==="tabindex")this._manageNode(g);else if(g!==this._rootElement&&v.attributeName==="inert"&&g.hasAttribute("inert")){this._adoptInertRoot(g);var y=this._inertManager.getInertRoot(g);this._managedNodes.forEach(function(w){g.contains(w.node)&&y._manageNode(w.node)})}}},this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return this._savedAriaHidden!==null}},{key:"savedAriaHidden",set:function(s){this._savedAriaHidden=s},get:function(){return this._savedAriaHidden}}]),a}(),n=function(){function a(d,s){hs(this,a),this._node=d,this._overrodeFocusMethod=!1,this._inertRoots=new Set([s]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}return us(a,[{key:"destructor",value:function(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){var s=this._node;this._savedTabIndex!==null?s.setAttribute("tabindex",this._savedTabIndex):s.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete s.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){if(this.node.nodeType===Node.ELEMENT_NODE){var s=this.node;if(t.call(s,r)){if(s.tabIndex===-1&&this.hasSavedTabIndex)return;s.hasAttribute("tabindex")&&(this._savedTabIndex=s.tabIndex),s.setAttribute("tabindex","-1"),s.nodeType===Node.ELEMENT_NODE&&(s.focus=function(){},this._overrodeFocusMethod=!0)}else s.hasAttribute("tabindex")&&(this._savedTabIndex=s.tabIndex,s.removeAttribute("tabindex"))}}},{key:"addInertRoot",value:function(s){this._throwIfDestroyed(),this._inertRoots.add(s)}},{key:"removeInertRoot",value:function(s){this._throwIfDestroyed(),this._inertRoots.delete(s),this._inertRoots.size===0&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return this._savedTabIndex!==null}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(s){this._throwIfDestroyed(),this._savedTabIndex=s},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),a}(),o=function(){function a(d){if(hs(this,a),!d)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=d,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),c(d.head||d.body||d.documentElement),d.readyState==="loading"?d.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return us(a,[{key:"setInert",value:function(s,u){if(u){if(this._inertRoots.has(s))return;var v=new i(s,this);if(s.setAttribute("inert",""),this._inertRoots.set(s,v),!this._document.body.contains(s))for(var g=s.parentNode;g;)g.nodeType===11&&c(g),g=g.parentNode}else{if(!this._inertRoots.has(s))return;var y=this._inertRoots.get(s);y.destructor(),this._inertRoots.delete(s),s.removeAttribute("inert")}}},{key:"getInertRoot",value:function(s){return this._inertRoots.get(s)}},{key:"register",value:function(s,u){var v=this._managedNodes.get(s);return v!==void 0?v.addInertRoot(u):v=new n(s,u),this._managedNodes.set(s,v),v}},{key:"deregister",value:function(s,u){var v=this._managedNodes.get(s);return v?(v.removeInertRoot(u),v.destroyed&&this._managedNodes.delete(s),v):null}},{key:"_onDocumentLoaded",value:function(){var s=e.call(this._document.querySelectorAll("[inert]"));s.forEach(function(u){this.setInert(u,!0)},this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(s,u){var v=this;s.forEach(function(g){switch(g.type){case"childList":e.call(g.addedNodes).forEach(function(A){if(A.nodeType===Node.ELEMENT_NODE){var x=e.call(A.querySelectorAll("[inert]"));t.call(A,"[inert]")&&x.unshift(A),x.forEach(function(E){this.setInert(E,!0)},v)}},v);break;case"attributes":if(g.attributeName!=="inert")return;var y=g.target,w=y.hasAttribute("inert");v.setInert(y,w);break}},this)}}]),a}();function l(a,d,s){if(a.nodeType==Node.ELEMENT_NODE){var u=a;d&&d(u);var v=u.shadowRoot;if(v){l(v,d);return}if(u.localName=="content"){for(var g=u,y=g.getDistributedNodes?g.getDistributedNodes():[],w=0;w<y.length;w++)l(y[w],d);return}if(u.localName=="slot"){for(var A=u,x=A.assignedNodes?A.assignedNodes({flatten:!0}):[],E=0;E<x.length;E++)l(x[E],d);return}}for(var $=a.firstChild;$!=null;)l($,d),$=$.nextSibling}function c(a){if(!a.querySelector("style#inert-style, link#inert-style")){var d=document.createElement("style");d.setAttribute("id","inert-style"),d.textContent=`
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
`,a.appendChild(d)}}if(!HTMLElement.prototype.hasOwnProperty("inert")){var h=new o(document);Object.defineProperty(HTMLElement.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(d){h.setInert(this,d)}})}})();/**
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
 */var at={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},Or={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},ps={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};/**
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
 */var dv=function(){function e(){this.rafIDs=new Map}return e.prototype.request=function(t,r){var i=this;this.cancel(t);var n=requestAnimationFrame(function(o){i.rafIDs.delete(t),r(o)});this.rafIDs.set(t,n)},e.prototype.cancel=function(t){var r=this.rafIDs.get(t);r&&(cancelAnimationFrame(r),this.rafIDs.delete(t))},e.prototype.cancelAll=function(){var t=this;this.rafIDs.forEach(function(r,i){t.cancel(i)})},e.prototype.getQueue=function(){var t=[];return this.rafIDs.forEach(function(r,i){t.push(i)}),t},e}();/**
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
 */var uv=function(){function e(t){t===void 0&&(t={}),this.adapter=t}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}();/**
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
 */var zi;(function(e){e.POLL_SCROLL_POS="poll_scroll_position",e.POLL_LAYOUT_CHANGE="poll_layout_change"})(zi||(zi={}));var hv=function(e){sv(t,e);function t(r){var i=e.call(this,Mi(Mi({},t.defaultAdapter),r))||this;return i.dialogOpen=!1,i.isFullscreen=!1,i.animationFrame=0,i.animationTimer=0,i.escapeKeyAction=Or.CLOSE_ACTION,i.scrimClickAction=Or.CLOSE_ACTION,i.autoStackButtons=!0,i.areButtonsStacked=!1,i.suppressDefaultPressSelector=Or.SUPPRESS_DEFAULT_PRESS_SELECTOR,i.animFrame=new dv,i.contentScrollHandler=function(){i.handleScrollEvent()},i.windowResizeHandler=function(){i.layout()},i.windowOrientationChangeHandler=function(){i.layout()},i}return Object.defineProperty(t,"cssClasses",{get:function(){return at},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Or},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return ps},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.hasClass(at.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(at.FULLSCREEN)},t.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},t.prototype.open=function(r){var i=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(at.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),r&&r.isAboveFullscreenDialog&&this.adapter.addClass(at.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame(function(){i.adapter.addClass(at.OPEN),i.adapter.addBodyClass(at.SCROLL_LOCK),i.layout(),i.animationTimer=setTimeout(function(){i.handleAnimationTimerEnd(),i.adapter.trapFocus(i.adapter.getInitialFocusEl()),i.adapter.notifyOpened()},ps.DIALOG_ANIMATION_OPEN_TIME_MS)})},t.prototype.close=function(r){var i=this;r===void 0&&(r=""),this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(r),this.adapter.addClass(at.CLOSING),this.adapter.removeClass(at.OPEN),this.adapter.removeBodyClass(at.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){i.adapter.releaseFocus(),i.handleAnimationTimerEnd(),i.adapter.notifyClosed(r)},ps.DIALOG_ANIMATION_CLOSE_TIME_MS))},t.prototype.showSurfaceScrim=function(){var r=this;this.adapter.addClass(at.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame(function(){r.adapter.addClass(at.SURFACE_SCRIM_SHOWN)})},t.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(at.SURFACE_SCRIM_SHOWN),this.adapter.addClass(at.SURFACE_SCRIM_HIDING)},t.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(at.SURFACE_SCRIM_HIDING),this.adapter.removeClass(at.SURFACE_SCRIM_SHOWING)},t.prototype.isOpen=function(){return this.dialogOpen},t.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},t.prototype.setEscapeKeyAction=function(r){this.escapeKeyAction=r},t.prototype.getScrimClickAction=function(){return this.scrimClickAction},t.prototype.setScrimClickAction=function(r){this.scrimClickAction=r},t.prototype.getAutoStackButtons=function(){return this.autoStackButtons},t.prototype.setAutoStackButtons=function(r){this.autoStackButtons=r},t.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},t.prototype.setSuppressDefaultPressSelector=function(r){this.suppressDefaultPressSelector=r},t.prototype.layout=function(){var r=this;this.animFrame.request(zi.POLL_LAYOUT_CHANGE,function(){r.layoutInternal()})},t.prototype.handleClick=function(r){var i=this.adapter.eventTargetMatches(r.target,Or.SCRIM_SELECTOR);if(i&&this.scrimClickAction!=="")this.close(this.scrimClickAction);else{var n=this.adapter.getActionFromEvent(r);n&&this.close(n)}},t.prototype.handleKeydown=function(r){var i=r.key==="Enter"||r.keyCode===13;if(!!i){var n=this.adapter.getActionFromEvent(r);if(!n){var o=r.composedPath?r.composedPath()[0]:r.target,l=this.suppressDefaultPressSelector?!this.adapter.eventTargetMatches(o,this.suppressDefaultPressSelector):!0;i&&l&&this.adapter.clickDefaultButton()}}},t.prototype.handleDocumentKeydown=function(r){var i=r.key==="Escape"||r.keyCode===27;i&&this.escapeKeyAction!==""&&this.close(this.escapeKeyAction)},t.prototype.handleScrollEvent=function(){var r=this;this.animFrame.request(zi.POLL_SCROLL_POS,function(){r.toggleScrollDividerHeader(),r.toggleScrollDividerFooter()})},t.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},t.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(at.OPENING),this.adapter.removeClass(at.CLOSING)},t.prototype.runNextAnimationFrame=function(r){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(r,0)})},t.prototype.detectStackedButtons=function(){this.adapter.removeClass(at.STACKED);var r=this.adapter.areButtonsStacked();r&&this.adapter.addClass(at.STACKED),r!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=r)},t.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(at.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(at.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},t.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(at.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(at.SCROLL_DIVIDER_HEADER):this.adapter.addClass(at.SCROLL_DIVIDER_HEADER)},t.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(at.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(at.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(at.SCROLL_DIVIDER_FOOTER)},t}(uv);const pv=hv;/**
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
 */function bi(e){return e===void 0&&(e=window),fv(e)?{passive:!0}:!1}function fv(e){e===void 0&&(e=window);var t=!1;try{var r={get passive(){return t=!0,!1}},i=function(){};e.document.addEventListener("test",i,r),e.document.removeEventListener("test",i,r)}catch{t=!1}return t}/**
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
 */function gv(e,t){if(e.closest)return e.closest(t);for(var r=e;r;){if(zd(r,t))return r;r=r.parentElement}return null}function zd(e,t){var r=e.matches||e.webkitMatchesSelector||e.msMatchesSelector;return r.call(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function vv(e){return{addClass:t=>{e.classList.add(t)},removeClass:t=>{e.classList.remove(t)},hasClass:t=>e.classList.contains(t)}}const Nd=()=>{},mv={get passive(){return!1}};document.addEventListener("x",Nd,mv);document.removeEventListener("x",Nd);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class bv extends ee{click(){if(this.mdcRoot){this.mdcRoot.focus(),this.mdcRoot.click();return}super.click()}createFoundation(){this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Zi=e=>(t,r)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const i=t.constructor._observers;t.constructor._observers=new Map,i.forEach((n,o)=>t.constructor._observers.set(o,n))}}else{t.constructor._observers=new Map;const i=t.updated;t.updated=function(n){i.call(this,n),n.forEach((o,l)=>{const h=this.constructor._observers.get(l);h!==void 0&&h.call(this,this[l],o)})}}t.constructor._observers.set(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yv={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_v=e=>(...t)=>({_$litDirective$:e,values:t});class wv{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wc=_v(class extends wv{constructor(e){var t;if(super(e),e.type!==yv.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((r=this.st)===null||r===void 0)&&r.has(o))&&this.nt.add(o);return this.render(t)}const n=e.element.classList;this.nt.forEach(o=>{o in t||(n.remove(o),this.nt.delete(o))});for(const o in t){const l=!!t[o];l===this.nt.has(o)||((i=this.st)===null||i===void 0?void 0:i.has(o))||(l?(n.add(o),this.nt.add(o)):(n.remove(o),this.nt.delete(o)))}return Xe}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const fs=document.$blockingElements;class Nt extends bv{constructor(){super(...arguments),this.hideActions=!1,this.stacked=!1,this.heading="",this.scrimClickAction="close",this.escapeKeyAction="close",this.open=!1,this.defaultAction="close",this.actionAttribute="dialogAction",this.initialFocusAttribute="dialogInitialFocus",this.initialSupressDefaultPressSelector="",this.mdcFoundationClass=pv,this.boundHandleClick=null,this.boundHandleKeydown=null,this.boundHandleDocumentKeydown=null}set suppressDefaultPressSelector(t){this.mdcFoundation?this.mdcFoundation.setSuppressDefaultPressSelector(t):this.initialSupressDefaultPressSelector=t}get suppressDefaultPressSelector(){return this.mdcFoundation?this.mdcFoundation.getSuppressDefaultPressSelector():this.initialSupressDefaultPressSelector}get primaryButton(){let t=this.primarySlot.assignedNodes();t=t.filter(i=>i instanceof HTMLElement);const r=t[0];return r||null}emitNotification(t,r){const i={detail:r?{action:r}:{}},n=new CustomEvent(t,i);this.dispatchEvent(n)}getInitialFocusEl(){const t=`[${this.initialFocusAttribute}]`,r=this.querySelector(t);if(r)return r;const n=this.primarySlot.assignedNodes({flatten:!0}),o=this.searchNodeTreesForAttribute(n,this.initialFocusAttribute);if(o)return o;const c=this.secondarySlot.assignedNodes({flatten:!0}),h=this.searchNodeTreesForAttribute(c,this.initialFocusAttribute);if(h)return h;const d=this.contentSlot.assignedNodes({flatten:!0});return this.searchNodeTreesForAttribute(d,this.initialFocusAttribute)}searchNodeTreesForAttribute(t,r){for(const i of t)if(i instanceof HTMLElement){if(i.hasAttribute(r))return i;{const n=i.querySelector(`[${r}]`);if(n)return n}}return null}createAdapter(){return Object.assign(Object.assign({},vv(this.mdcRoot)),{addBodyClass:()=>document.body.style.overflow="hidden",removeBodyClass:()=>document.body.style.overflow="",areButtonsStacked:()=>this.stacked,clickDefaultButton:()=>{const t=this.primaryButton;t&&t.click()},eventTargetMatches:(t,r)=>t?zd(t,r):!1,getActionFromEvent:t=>{if(!t.target)return"";const r=gv(t.target,`[${this.actionAttribute}]`);return r&&r.getAttribute(this.actionAttribute)},getInitialFocusEl:()=>this.getInitialFocusEl(),isContentScrollable:()=>{const t=this.contentElement;return t?t.scrollHeight>t.offsetHeight:!1},notifyClosed:t=>this.emitNotification("closed",t),notifyClosing:t=>{this.closingDueToDisconnect||(this.open=!1),this.emitNotification("closing",t)},notifyOpened:()=>this.emitNotification("opened"),notifyOpening:()=>{this.open=!0,this.emitNotification("opening")},reverseButtons:()=>{},releaseFocus:()=>{fs.remove(this)},trapFocus:t=>{!this.isConnected||(fs.push(this),t&&t.focus())},registerContentEventHandler:(t,r)=>{this.contentElement.addEventListener(t,r)},deregisterContentEventHandler:(t,r)=>{this.contentElement.removeEventListener(t,r)},isScrollableContentAtTop:()=>{const t=this.contentElement;return t?t.scrollTop===0:!1},isScrollableContentAtBottom:()=>{const t=this.contentElement;return t?Math.ceil(t.scrollHeight-t.scrollTop)===t.clientHeight:!1},registerWindowEventHandler:(t,r)=>{window.addEventListener(t,r,bi())},deregisterWindowEventHandler:(t,r)=>{window.removeEventListener(t,r,bi())}})}render(){const t={[at.STACKED]:this.stacked};let r=ae``;this.heading&&(r=this.renderHeading());const i={"mdc-dialog__actions":!this.hideActions};return ae`
    <div class="mdc-dialog ${Wc(t)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${r}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${Wc(i)}">
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
    </div>`}renderHeading(){return ae`
      <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`}firstUpdated(){super.firstUpdated(),this.mdcFoundation.setAutoStackButtons(!0),this.initialSupressDefaultPressSelector?this.suppressDefaultPressSelector=this.initialSupressDefaultPressSelector:this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,"mwc-textarea","mwc-menu mwc-list-item","mwc-select mwc-list-item"].join(", "),this.boundHandleClick=this.mdcFoundation.handleClick.bind(this.mdcFoundation),this.boundHandleKeydown=this.mdcFoundation.handleKeydown.bind(this.mdcFoundation),this.boundHandleDocumentKeydown=this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation)}connectedCallback(){super.connectedCallback(),this.open&&this.mdcFoundation&&!this.mdcFoundation.isOpen()&&(this.setEventListeners(),this.mdcFoundation.open())}disconnectedCallback(){super.disconnectedCallback(),this.open&&this.mdcFoundation&&(this.removeEventListeners(),this.closingDueToDisconnect=!0,this.mdcFoundation.close(this.currentAction||this.defaultAction),this.closingDueToDisconnect=!1,this.currentAction=void 0,fs.remove(this))}forceLayout(){this.mdcFoundation.layout()}focus(){const t=this.getInitialFocusEl();t&&t.focus()}blur(){if(!this.shadowRoot)return;const t=this.shadowRoot.activeElement;if(t)t instanceof HTMLElement&&t.blur();else{const r=this.getRootNode(),i=r instanceof Document?r.activeElement:null;i instanceof HTMLElement&&i.blur()}}setEventListeners(){this.boundHandleClick&&this.mdcRoot.addEventListener("click",this.boundHandleClick),this.boundHandleKeydown&&this.mdcRoot.addEventListener("keydown",this.boundHandleKeydown,bi()),this.boundHandleDocumentKeydown&&document.addEventListener("keydown",this.boundHandleDocumentKeydown,bi())}removeEventListeners(){this.boundHandleClick&&this.mdcRoot.removeEventListener("click",this.boundHandleClick),this.boundHandleKeydown&&this.mdcRoot.removeEventListener("keydown",this.boundHandleKeydown),this.boundHandleDocumentKeydown&&document.removeEventListener("keydown",this.boundHandleDocumentKeydown)}close(){this.open=!1}show(){this.open=!0}}zt([br(".mdc-dialog")],Nt.prototype,"mdcRoot",void 0);zt([br('slot[name="primaryAction"]')],Nt.prototype,"primarySlot",void 0);zt([br('slot[name="secondaryAction"]')],Nt.prototype,"secondarySlot",void 0);zt([br("#contentSlot")],Nt.prototype,"contentSlot",void 0);zt([br(".mdc-dialog__content")],Nt.prototype,"contentElement",void 0);zt([br(".mdc-container")],Nt.prototype,"conatinerElement",void 0);zt([$e({type:Boolean})],Nt.prototype,"hideActions",void 0);zt([$e({type:Boolean}),Zi(function(){this.forceLayout()})],Nt.prototype,"stacked",void 0);zt([$e({type:String})],Nt.prototype,"heading",void 0);zt([$e({type:String}),Zi(function(e){this.mdcFoundation.setScrimClickAction(e)})],Nt.prototype,"scrimClickAction",void 0);zt([$e({type:String}),Zi(function(e){this.mdcFoundation.setEscapeKeyAction(e)})],Nt.prototype,"escapeKeyAction",void 0);zt([$e({type:Boolean,reflect:!0}),Zi(function(e){this.mdcFoundation&&this.isConnected&&(e?(this.setEventListeners(),this.mdcFoundation.open()):(this.removeEventListeners(),this.mdcFoundation.close(this.currentAction||this.defaultAction),this.currentAction=void 0))})],Nt.prototype,"open",void 0);zt([$e()],Nt.prototype,"defaultAction",void 0);zt([$e()],Nt.prototype,"actionAttribute",void 0);zt([$e()],Nt.prototype,"initialFocusAttribute",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const xv=Ne`.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__surface{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12)}.mdc-dialog__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(max-width: 600px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid transparent;display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){margin-left:0;margin-right:8px}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:.000000001px;margin-top:12px}`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Is=class extends Nt{};Is.styles=[xv];Is=zt([av("mwc-dialog")],Is);class Dd extends ee{static get properties(){return{firmwareVersion:{type:String,reflectToAttribute:!0,attribute:!0},preferredColor:{type:String,reflectToAttribute:!0,attribute:!0},preferredWidth:{type:Number,reflectToAttribute:!0,attribute:!0},productId:{type:String,reflectToAttribute:!0,attribute:!0},protocolVersion:{type:String,reflectToAttribute:!0,attribute:!0},style:{type:String,reflectToAttribute:!0,attribute:!0},vendorId:{type:String,reflectToAttribute:!0,attribute:!0}}}set firmwareVersion(t){let r=this._firmwareVersion;this._firmwareVersion=t,this.requestUpdate("firmwareVersion",r)}get firmwareVersion(){return this._firmwareVersion}set preferredColor(t){let r=this.preferredColor;this._preferredColor=t,this.requestUpdate("preferredColor",r)}get preferredColor(){return this._preferredColor}set preferredWidth(t){let r=this._preferredWidth;this._preferredWidth=t,this.requestUpdate("preferredWidth",r)}get preferredWidth(){return this._preferredWidth}set productId(t){let r=this._productId;this._productId=t,this.requestUpdate("productId",r)}get productId(){return this._productId}set protocolVersion(t){let r=this._protocolVersion;this._protocolVersion=t,this.requestUpdate("protocolVersion",r)}get protocolVersion(){return this._protocolVersion}set style(t){let r=this._style;this._style=t,this.requestUpdate("style",r)}get style(){return this._style}set vendorId(t){let r=this._vendorId;this._vendorId=t,this.requestUpdate("vendorId",r)}get vendorId(){return this._vendorId}constructor(){super()}show(t){t&&(this.vendorId=t.firmware.vendorId,this.productId=t.firmware.productId,this.firmwareVersion=t.firmware.firmwareVersion,this.protocolVersion=t.protocol.protocolVersion,this.preferredColor=t.preferredColor,this.preferredWidth=t.preferredWidth,this.style=t.style,this.shadowRoot.getElementById("usi-mwc-dialog").show())}render(){return ae`
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
  </mwc-dialog>`}}gt(Dd,"styles",Ne`
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
  `);customElements.define("usi-dialog",Dd);ws("/tiny-canvas/");class Ud extends ee{constructor(){super();gt(this,"_deleteAllPaths",async r=>{this._mainCanvas.deleteAllPaths()});gt(this,"_onDragStart",async r=>{this._initialX=r.x-this._xOffset,this._initialY=r.y-this._yOffset,r.target===this._infoPanel&&(this._dragActive=!0)});gt(this,"_onDrag",async r=>{this._dragActive&&(r.preventDefault(),this._currentX=r.clientX-this._initialX,this._currentY=r.clientY-this._initialY,this._xOffset=this._currentX,this._yOffset=this._currentY,this._infoPanel.style.transform="translate3d("+this._currentX+"px, "+this._currentY+"px, 0)")});gt(this,"_onDragEnd",async r=>{this._initialX=this._currentX,this._initialY=this._currentY,this._dragActive=!1});this._renderingType=null,this._rafId=null,this._dragActive=!1,this._currentX=0,this._currentY=0,this._initialX=0,this._initialY=0,this._xOffset=0,this._yOffset=0,this._defaultIdleTimeout=50,this._currentEvent=null,this._previousEvent=null,this._pointerLatencySamples=new fg(60)}set currentEvent(r){this._previousEvent=this._currentEvent,this._currentEvent=r,this._isIdle=!1,clearTimeout(this._idleTimer),this._idleTimer=setTimeout(this._onIdle.bind(this),this._defaultIdleTimeout)}get currentEvent(){return this._currentEvent}firstUpdated(){const r=this.shadowRoot.querySelector("#settings-button"),i=this.shadowRoot.querySelector("#settings-dialog");r.addEventListener("click",()=>i.show()),this._swAlert=this.shadowRoot.querySelector("#sw-alert"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new xu("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()}),this._switchRenderingType("js-canvas",!0),this._usiDialog=this.shadowRoot.querySelector("#usi-dialog"),this._infoButton=this.shadowRoot.querySelector("#info-button"),this._infoButton.onpointerdown=this._toggleInfoPanel.bind(this),this._undoButton=this.shadowRoot.querySelector("#undo-button"),this._undoButton.onpointerdown=this._undoPath.bind(this),this._redoButton=this.shadowRoot.querySelector("#redo-button"),this._redoButton.onpointerdown=this._redoPath.bind(this),this._deleteButton=this.shadowRoot.querySelector("#delete-button"),this._deleteButton.onpointerdown=this._deleteAllPaths.bind(this),this._undoButton.disabled=!0,this._redoButton.disabled=!0,this._infoPanel=this.shadowRoot.querySelector("#info-panel"),this._infoPanel.style.visibility="hidden",this._infoPanel.onpointerdown=this._onDragStart.bind(this),this._infoPanel.onpointermove=this._onDrag.bind(this),this._infoPanel.onpointerup=this._onDragEnd.bind(this),this._toolbar=this.shadowRoot.querySelector("#toolbar")}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&vs(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}_toggleInfoPanel(){this._infoPanel.style.visibility==="hidden"?(this._infoPanel.style.visibility="visible",this._rafId=window.requestAnimationFrame(this._onFrame.bind(this))):(this._infoPanel.style.visibility="hidden",this._rafId&&(window.cancelAnimationFrame(this._rafId),this._rafId=null))}_undoPath(){this._mainCanvas.undoPath()}_redoPath(){this._mainCanvas.redoPath()}_onFrame(r){if(!this._isIdle&&this._currentEvent){let i=performance.now()-this._currentEvent.timeStamp;this._pointerLatencySamples.push(i),this._updateInfoPanel(this._currentEvent)}this._rafId=window.requestAnimationFrame(this._onFrame.bind(this))}_onIdle(){this._isIdle=!0,this._pointerLatencySamples.clear()}_updateInfoPanel(r){if(this._infoPanel.eventType=r.type,this._infoPanel.pointerType=r.pointerType,this._infoPanel.pointerId=r.pointerId,this._infoPanel.isPrimary=r.isPrimary,this._infoPanel.width=r.width,this._infoPanel.height=r.height,this._infoPanel.positionX=this._roundDecimal(r.x,4),this._infoPanel.positionY=this._roundDecimal(r.y,4),typeof r.penCustomizationsDetails<"u")try{r.penCustomizationsDetails.getPreferredInkingStyle().then(i=>{this._infoPanel.preferredStyle=i})}catch{this._infoPanel.preferredColor=this._infoPanel.preferredWidth=this._infoPanel.preferredWidth="unavailable"}this._infoPanel.pressure=this._roundDecimal(r.pressure,4),this._infoPanel.tangentialPressure=this._roundDecimal(r.tangentialPressure,4),this._infoPanel.tiltX=this._roundDecimal(r.tiltX,4),this._infoPanel.tiltY=this._roundDecimal(r.tiltY,4),this._infoPanel.twist=this._roundDecimal(r.twist,4),this._infoPanel.avgLatency=this._pointerLatencySamples.avg().toFixed(1)}_roundDecimal(r,i){const n=Math.pow(10,i);return Math.round(r*n)/n}_switchRenderingType(r,i){if(this._renderingType===r&&this._mainCanvas._desynchronized===i)return;let n=document.createElement(r);this._mainCanvas&&(n.currentLineColor=this._mainCanvas.currentLineColor,n.currentLineStye=this._mainCanvas.currentLineStyle,n.currentLineWidth=this._mainCanvas.currentLineWidth,n.drawCoalescedEvents=this._mainCanvas.drawCoalescedEvents,n.drawPointsOnly=this._mainCanvas.drawPointsOnly,n.drawPredictedEvents=this._mainCanvas.drawPredictedEvents,n.drawWithCustomizations=this._mainCanvas.drawWithCustomizations,n.drawWithPressure=this._mainCanvas.drawWithPressure,n.highlightPredictedEvents=this._mainCanvas.highlightPredictedEvents,n.numOfPredictionPoints=this._mainCanvas.numOfPredictionPoints,n.pointerRawUpdate=this._mainCanvas.pointerRawUpdate,this._mainCanvas.remove()),this._mainCanvas=n,this._mainCanvas.app=this,this._mainCanvas.desynchronized=i,this._renderingType=r,this.shadowRoot.getElementById("main-canvas").appendChild(n)}_renderingTypeChanged(r){this._switchRenderingType(r.detail.renderingType,this._mainCanvas._desynchronized)}_desynchronizedEnabledChanged(r){this._renderingType&&this._mainCanvas._desynchronized!==r.detail.desynchronizedEnabled&&this._switchRenderingType(this._renderingType,r.detail.desynchronizedEnabled)}_lineColorChanged(r){this._mainCanvas.currentLineColor=r.detail.lineColor}_lineStyleChanged(r){this._mainCanvas.currentLineStyle=r.detail.lineStyle}_lineWidthChanged(r){this._mainCanvas.currentLineWidth=r.detail.lineWidth}_drawWithCustomizationsChanged(r){this._mainCanvas.drawWithCustomizations=r.detail.drawWithCustomizations}_pointerRawUpdateEnabledChanged(r){this._mainCanvas.pointerRawUpdate=r.detail.pointerRawUpdateEnabled}_pressureEventsEnabledChanged(r){this._mainCanvas.drawWithPressure=r.detail.pressureEventsEnabled}_predictedEventsEnabledChanged(r){this._mainCanvas.drawPredictedEvents=r.detail.predictedEventsEnabled}_predictedEventsHighlightEnabledChanged(r){this._mainCanvas.highlightPredictedEvents=r.detail.predictedEventsHighlightEnabled}_predictionTypeChanged(r){this._mainCanvas.predictionType=r.detail.predictionType}_numOfPredictionPointsChanged(r){this._mainCanvas.numOfPredictionPoints=r.detail.numOfPredictionPoints}_coalescedEventsEnabledChanged(r){this._mainCanvas.drawCoalescedEvents=r.detail.coalescedEventsEnabled}_drawPointsOnlyEnabledChanged(r){this._mainCanvas.drawPointsOnly=r.detail.drawPointsOnlyEnabled}_usiInfoDialogPressed(r){this._usiDialog.show(r.detail.usiInfo)}_pathsChanged(r){let i=r.detail.paths;i.length===0?(this._undoButton.disabled=!0,this._redoButton.disabled=!0,this._redoButton.closest("sl-tooltip").disabled=!0,this._undoButton.closest("sl-tooltip").disabled=!0):(this._undoButton.disabled=!i[0].display,this._redoButton.disabled=!!i[i.length-1].display,this._undoButton.closest("sl-tooltip").disabled=this._undoButton.disabled,this._redoButton.closest("sl-tooltip").disabled=this._redoButton.disabled)}_customizationsChanged(r){this._toolbar.currentLineColor=r.detail.currentPreferredColor,this._toolbar.currentLineStyle=r.detail.currentPreferredStyle,this._toolbar.currentLineWidth=r.detail.currentPreferredWidth}render(){return ae`
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
    </div>`}}gt(Ud,"styles",Ne`
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
  `);customElements.define("main-application",Ud);
