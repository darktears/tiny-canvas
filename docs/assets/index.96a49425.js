var Kd=Object.defineProperty;var Gd=(r,t,i)=>t in r?Kd(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var xt=(r,t,i)=>(Gd(r,typeof t!="symbol"?t+"":t,i),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hi=window,Ss=hi.ShadowRoot&&(hi.ShadyCSS===void 0||hi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Cs=Symbol(),sa=new WeakMap;class Lc{constructor(t,i,n){if(this._$cssResult$=!0,n!==Cs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(Ss&&t===void 0){const n=i!==void 0&&i.length===1;n&&(t=sa.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&sa.set(i,t))}return t}toString(){return this.cssText}}const Yd=r=>new Lc(typeof r=="string"?r:r+"",void 0,Cs),Re=(r,...t)=>{const i=r.length===1?r[0]:t.reduce((n,o,a)=>n+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[a+1],r[0]);return new Lc(i,r,Cs)},Zd=(r,t)=>{Ss?r.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{const n=document.createElement("style"),o=hi.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,r.appendChild(n)})},aa=Ss?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return Yd(i)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fn;const gi=window,la=gi.trustedTypes,Qd=la?la.emptyScript:"",ca=gi.reactiveElementPolyfillSupport,cs={toAttribute(r,t){switch(t){case Boolean:r=r?Qd:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let i=r;switch(t){case Boolean:i=r!==null;break;case Number:i=r===null?null:Number(r);break;case Object:case Array:try{i=JSON.parse(r)}catch{i=null}}return i}},Rc=(r,t)=>t!==r&&(t==t||r==r),gn={attribute:!0,type:String,converter:cs,reflect:!1,hasChanged:Rc};class Je extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,n)=>{const o=this._$Ep(n,i);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,i=gn){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,i);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,i,n){return{get(){return this[i]},set(o){const a=this[t];this[i]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||gn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,n=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const o of n)this.createProperty(o,i[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)i.unshift(aa(o))}else t!==void 0&&i.push(aa(t));return i}static _$Ep(t,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,n;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Zd(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostConnected)===null||n===void 0?void 0:n.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostDisconnected)===null||n===void 0?void 0:n.call(i)})}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$EO(t,i,n=gn){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const d=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:cs).toAttribute(i,n.type);this._$El=t,d==null?this.removeAttribute(a):this.setAttribute(a,d),this._$El=null}}_$AK(t,i){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const d=o.getPropertyOptions(a),u=typeof d.converter=="function"?{fromAttribute:d.converter}:((n=d.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?d.converter:cs;this._$El=a,this[a]=u.fromAttribute(i,d.type),this._$El=null}}requestUpdate(t,i,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Rc)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let i=!1;const n=this._$AL;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw i=!1,this._$Ek(),o}i&&this._$AE(n)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,n)=>this._$EO(n,this[n],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Je.finalized=!0,Je.elementProperties=new Map,Je.elementStyles=[],Je.shadowRootOptions={mode:"open"},ca==null||ca({ReactiveElement:Je}),((fn=gi.reactiveElementVersions)!==null&&fn!==void 0?fn:gi.reactiveElementVersions=[]).push("1.4.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mn;const mi=window,nr=mi.trustedTypes,da=nr?nr.createPolicy("lit-html",{createHTML:r=>r}):void 0,Pe=`lit$${(Math.random()+"").slice(9)}$`,Oc="?"+Pe,Jd=`<${Oc}>`,or=document,zr=(r="")=>or.createComment(r),Nr=r=>r===null||typeof r!="object"&&typeof r!="function",Mc=Array.isArray,tu=r=>Mc(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",xr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ua=/-->/g,ha=/>/g,Fe=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pa=/'/g,fa=/"/g,zc=/^(?:script|style|textarea|title)$/i,eu=r=>(t,...i)=>({_$litType$:r,strings:t,values:i}),oe=eu(1),Be=Symbol.for("lit-noChange"),Pt=Symbol.for("lit-nothing"),ga=new WeakMap,rr=or.createTreeWalker(or,129,null,!1),ru=(r,t)=>{const i=r.length-1,n=[];let o,a=t===2?"<svg>":"",d=xr;for(let p=0;p<i;p++){const l=r[p];let c,s,h=-1,f=0;for(;f<l.length&&(d.lastIndex=f,s=d.exec(l),s!==null);)f=d.lastIndex,d===xr?s[1]==="!--"?d=ua:s[1]!==void 0?d=ha:s[2]!==void 0?(zc.test(s[2])&&(o=RegExp("</"+s[2],"g")),d=Fe):s[3]!==void 0&&(d=Fe):d===Fe?s[0]===">"?(d=o!=null?o:xr,h=-1):s[1]===void 0?h=-2:(h=d.lastIndex-s[2].length,c=s[1],d=s[3]===void 0?Fe:s[3]==='"'?fa:pa):d===fa||d===pa?d=Fe:d===ua||d===ha?d=xr:(d=Fe,o=void 0);const g=d===Fe&&r[p+1].startsWith("/>")?" ":"";a+=d===xr?l+Jd:h>=0?(n.push(c),l.slice(0,h)+"$lit$"+l.slice(h)+Pe+g):l+Pe+(h===-2?(n.push(void 0),p):g)}const u=a+(r[i]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[da!==void 0?da.createHTML(u):u,n]};class Dr{constructor({strings:t,_$litType$:i},n){let o;this.parts=[];let a=0,d=0;const u=t.length-1,p=this.parts,[l,c]=ru(t,i);if(this.el=Dr.createElement(l,n),rr.currentNode=this.el.content,i===2){const s=this.el.content,h=s.firstChild;h.remove(),s.append(...h.childNodes)}for(;(o=rr.nextNode())!==null&&p.length<u;){if(o.nodeType===1){if(o.hasAttributes()){const s=[];for(const h of o.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(Pe)){const f=c[d++];if(s.push(h),f!==void 0){const g=o.getAttribute(f.toLowerCase()+"$lit$").split(Pe),m=/([.?@])?(.*)/.exec(f);p.push({type:1,index:a,name:m[2],strings:g,ctor:m[1]==="."?nu:m[1]==="?"?su:m[1]==="@"?au:Li})}else p.push({type:6,index:a})}for(const h of s)o.removeAttribute(h)}if(zc.test(o.tagName)){const s=o.textContent.split(Pe),h=s.length-1;if(h>0){o.textContent=nr?nr.emptyScript:"";for(let f=0;f<h;f++)o.append(s[f],zr()),rr.nextNode(),p.push({type:2,index:++a});o.append(s[h],zr())}}}else if(o.nodeType===8)if(o.data===Oc)p.push({type:2,index:a});else{let s=-1;for(;(s=o.data.indexOf(Pe,s+1))!==-1;)p.push({type:7,index:a}),s+=Pe.length-1}a++}}static createElement(t,i){const n=or.createElement("template");return n.innerHTML=t,n}}function sr(r,t,i=r,n){var o,a,d,u;if(t===Be)return t;let p=n!==void 0?(o=i._$Co)===null||o===void 0?void 0:o[n]:i._$Cl;const l=Nr(t)?void 0:t._$litDirective$;return(p==null?void 0:p.constructor)!==l&&((a=p==null?void 0:p._$AO)===null||a===void 0||a.call(p,!1),l===void 0?p=void 0:(p=new l(r),p._$AT(r,i,n)),n!==void 0?((d=(u=i)._$Co)!==null&&d!==void 0?d:u._$Co=[])[n]=p:i._$Cl=p),p!==void 0&&(t=sr(r,p._$AS(r,t.values),p,n)),t}class iu{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:n},parts:o}=this._$AD,a=((i=t==null?void 0:t.creationScope)!==null&&i!==void 0?i:or).importNode(n,!0);rr.currentNode=a;let d=rr.nextNode(),u=0,p=0,l=o[0];for(;l!==void 0;){if(u===l.index){let c;l.type===2?c=new Br(d,d.nextSibling,this,t):l.type===1?c=new l.ctor(d,l.name,l.strings,this,t):l.type===6&&(c=new lu(d,this,t)),this.u.push(c),l=o[++p]}u!==(l==null?void 0:l.index)&&(d=rr.nextNode(),u++)}return a}p(t){let i=0;for(const n of this.u)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class Br{constructor(t,i,n,o){var a;this.type=2,this._$AH=Pt,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=o,this._$Cm=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=sr(this,t,i),Nr(t)?t===Pt||t==null||t===""?(this._$AH!==Pt&&this._$AR(),this._$AH=Pt):t!==this._$AH&&t!==Be&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):tu(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==Pt&&Nr(this._$AH)?this._$AA.nextSibling.data=t:this.T(or.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Dr.createElement(o.h,this.options)),o);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===a)this._$AH.p(n);else{const d=new iu(a,this),u=d.v(this.options);d.p(n),this.T(u),this._$AH=d}}_$AC(t){let i=ga.get(t.strings);return i===void 0&&ga.set(t.strings,i=new Dr(t)),i}k(t){Mc(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const a of t)o===i.length?i.push(n=new Br(this.O(zr()),this.O(zr()),this,this.options)):n=i[o],n._$AI(a),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cm=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}}class Li{constructor(t,i,n,o,a){this.type=1,this._$AH=Pt,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Pt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,n,o){const a=this.strings;let d=!1;if(a===void 0)t=sr(this,t,i,0),d=!Nr(t)||t!==this._$AH&&t!==Be,d&&(this._$AH=t);else{const u=t;let p,l;for(t=a[0],p=0;p<a.length-1;p++)l=sr(this,u[n+p],i,p),l===Be&&(l=this._$AH[p]),d||(d=!Nr(l)||l!==this._$AH[p]),l===Pt?t=Pt:t!==Pt&&(t+=(l!=null?l:"")+a[p+1]),this._$AH[p]=l}d&&!o&&this.j(t)}j(t){t===Pt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class nu extends Li{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Pt?void 0:t}}const ou=nr?nr.emptyScript:"";class su extends Li{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Pt?this.element.setAttribute(this.name,ou):this.element.removeAttribute(this.name)}}class au extends Li{constructor(t,i,n,o,a){super(t,i,n,o,a),this.type=5}_$AI(t,i=this){var n;if((t=(n=sr(this,t,i,0))!==null&&n!==void 0?n:Pt)===Be)return;const o=this._$AH,a=t===Pt&&o!==Pt||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,d=t!==Pt&&(o===Pt||a);a&&this.element.removeEventListener(this.name,this,o),d&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,n;typeof this._$AH=="function"?this._$AH.call((n=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class lu{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){sr(this,t)}}const ma=mi.litHtmlPolyfillSupport;ma==null||ma(Dr,Br),((mn=mi.litHtmlVersions)!==null&&mn!==void 0?mn:mi.litHtmlVersions=[]).push("2.4.0");const cu=(r,t,i)=>{var n,o;const a=(n=i==null?void 0:i.renderBefore)!==null&&n!==void 0?n:t;let d=a._$litPart$;if(d===void 0){const u=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=d=new Br(t.insertBefore(zr(),u),u,void 0,i!=null?i:{})}return d._$AI(r),d};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vn,bn;class Jt extends Je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const n=super.createRenderRoot();return(t=(i=this.renderOptions).renderBefore)!==null&&t!==void 0||(i.renderBefore=n.firstChild),n}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=cu(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Be}}Jt.finalized=!0,Jt._$litElement$=!0,(vn=globalThis.litElementHydrateSupport)===null||vn===void 0||vn.call(globalThis,{LitElement:Jt});const va=globalThis.litElementPolyfillSupport;va==null||va({LitElement:Jt});((bn=globalThis.litElementVersions)!==null&&bn!==void 0?bn:globalThis.litElementVersions=[]).push("3.2.2");try{self["workbox:window:6.5.3"]&&_()}catch{}function ds(r,t){return new Promise(function(i){var n=new MessageChannel;n.port1.onmessage=function(o){i(o.data)},r.postMessage(t,[n.port2])})}function du(r,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function ba(r,t){(t==null||t>r.length)&&(t=r.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=r[i];return n}function uu(r,t){var i;if(typeof Symbol>"u"||r[Symbol.iterator]==null){if(Array.isArray(r)||(i=function(o,a){if(o){if(typeof o=="string")return ba(o,a);var d=Object.prototype.toString.call(o).slice(8,-1);return d==="Object"&&o.constructor&&(d=o.constructor.name),d==="Map"||d==="Set"?Array.from(o):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?ba(o,a):void 0}}(r))||t&&r&&typeof r.length=="number"){i&&(r=i);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(i=r[Symbol.iterator]()).next.bind(i)}try{self["workbox:core:6.5.3"]&&_()}catch{}var yn=function(){var r=this;this.promise=new Promise(function(t,i){r.resolve=t,r.reject=i})};function _n(r,t){var i=location.href;return new URL(r,i).href===new URL(t,i).href}var Er=function(r,t){this.type=r,Object.assign(this,t)};function oi(r,t,i){return i?t?t(r):r:(r&&r.then||(r=Promise.resolve(r)),t?r.then(t):r)}function hu(){}var pu={type:"SKIP_WAITING"};function ya(r,t){if(!t)return r&&r.then?r.then(hu):Promise.resolve()}var fu=function(r){var t,i;function n(u,p){var l,c;return p===void 0&&(p={}),(l=r.call(this)||this).nn={},l.tn=0,l.rn=new yn,l.en=new yn,l.on=new yn,l.un=0,l.an=new Set,l.cn=function(){var s=l.fn,h=s.installing;l.tn>0||!_n(h.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=h,s.removeEventListener("updatefound",l.cn)):(l.hn=h,l.an.add(h),l.rn.resolve(h)),++l.tn,h.addEventListener("statechange",l.ln)},l.ln=function(s){var h=l.fn,f=s.target,g=f.state,m=f===l.vn,y={sw:f,isExternal:m,originalEvent:s};!m&&l.mn&&(y.isUpdate=!0),l.dispatchEvent(new Er(g,y)),g==="installed"?l.wn=self.setTimeout(function(){g==="installed"&&h.waiting===f&&l.dispatchEvent(new Er("waiting",y))},200):g==="activating"&&(clearTimeout(l.wn),m||l.en.resolve(f))},l.dn=function(s){var h=l.hn,f=h!==navigator.serviceWorker.controller;l.dispatchEvent(new Er("controlling",{isExternal:f,originalEvent:s,sw:h,isUpdate:l.mn})),f||l.on.resolve(h)},l.gn=(c=function(s){var h=s.data,f=s.ports,g=s.source;return oi(l.getSW(),function(){l.an.has(g)&&l.dispatchEvent(new Er("message",{data:h,originalEvent:s,ports:f,sw:g}))})},function(){for(var s=[],h=0;h<arguments.length;h++)s[h]=arguments[h];try{return Promise.resolve(c.apply(this,s))}catch(f){return Promise.reject(f)}}),l.sn=u,l.nn=p,navigator.serviceWorker.addEventListener("message",l.gn),l}i=r,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var o,a,d=n.prototype;return d.register=function(u){var p=(u===void 0?{}:u).immediate,l=p!==void 0&&p;try{var c=this;return function(s,h){var f=s();return f&&f.then?f.then(h):h(f)}(function(){if(!l&&document.readyState!=="complete")return ya(new Promise(function(s){return window.addEventListener("load",s)}))},function(){return c.mn=Boolean(navigator.serviceWorker.controller),c.yn=c.pn(),oi(c.bn(),function(s){c.fn=s,c.yn&&(c.hn=c.yn,c.en.resolve(c.yn),c.on.resolve(c.yn),c.yn.addEventListener("statechange",c.ln,{once:!0}));var h=c.fn.waiting;return h&&_n(h.scriptURL,c.sn.toString())&&(c.hn=h,Promise.resolve().then(function(){c.dispatchEvent(new Er("waiting",{sw:h,wasWaitingBeforeRegister:!0}))}).then(function(){})),c.hn&&(c.rn.resolve(c.hn),c.an.add(c.hn)),c.fn.addEventListener("updatefound",c.cn),navigator.serviceWorker.addEventListener("controllerchange",c.dn),c.fn})})}catch(s){return Promise.reject(s)}},d.update=function(){try{return this.fn?ya(this.fn.update()):void 0}catch(u){return Promise.reject(u)}},d.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},d.messageSW=function(u){try{return oi(this.getSW(),function(p){return ds(p,u)})}catch(p){return Promise.reject(p)}},d.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&ds(this.fn.waiting,pu)},d.pn=function(){var u=navigator.serviceWorker.controller;return u&&_n(u.scriptURL,this.sn.toString())?u:void 0},d.bn=function(){try{var u=this;return function(p,l){try{var c=p()}catch(s){return l(s)}return c&&c.then?c.then(void 0,l):c}(function(){return oi(navigator.serviceWorker.register(u.sn,u.nn),function(p){return u.un=performance.now(),p})},function(p){throw p})}catch(p){return Promise.reject(p)}},o=n,(a=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&du(o.prototype,a),n}(function(){function r(){this.Pn=new Map}var t=r.prototype;return t.addEventListener=function(i,n){this.Sn(i).add(n)},t.removeEventListener=function(i,n){this.Sn(i).delete(n)},t.dispatchEvent=function(i){i.target=this;for(var n,o=uu(this.Sn(i.type));!(n=o()).done;)(0,n.value)(i)},t.Sn=function(i){return this.Pn.has(i)||this.Pn.set(i,new Set),this.Pn.get(i)},r}());var pi=window,ks=pi.ShadowRoot&&(pi.ShadyCSS===void 0||pi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$s=Symbol(),_a=new WeakMap,Nc=class{constructor(r,t,i){if(this._$cssResult$=!0,i!==$s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=t}get styleSheet(){let r=this.o;const t=this.t;if(ks&&r===void 0){const i=t!==void 0&&t.length===1;i&&(r=_a.get(t)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),i&&_a.set(t,r))}return r}toString(){return this.cssText}},gu=r=>new Nc(typeof r=="string"?r:r+"",void 0,$s),ct=(r,...t)=>{const i=r.length===1?r[0]:t.reduce((n,o,a)=>n+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[a+1],r[0]);return new Nc(i,r,$s)},mu=(r,t)=>{ks?r.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{const n=document.createElement("style"),o=pi.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,r.appendChild(n)})},wa=ks?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return gu(i)})(r):r,wn,vi=window,xa=vi.trustedTypes,vu=xa?xa.emptyScript:"",Ea=vi.reactiveElementPolyfillSupport,Ur={toAttribute(r,t){switch(t){case Boolean:r=r?vu:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let i=r;switch(t){case Boolean:i=r!==null;break;case Number:i=r===null?null:Number(r);break;case Object:case Array:try{i=JSON.parse(r)}catch{i=null}}return i}},Dc=(r,t)=>t!==r&&(t==t||r==r),xn={attribute:!0,type:String,converter:Ur,reflect:!1,hasChanged:Dc},tr=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(r){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(r)}static get observedAttributes(){this.finalize();const r=[];return this.elementProperties.forEach((t,i)=>{const n=this._$Ep(i,t);n!==void 0&&(this._$Ev.set(n,i),r.push(n))}),r}static createProperty(r,t=xn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(r,t),!t.noAccessor&&!this.prototype.hasOwnProperty(r)){const i=typeof r=="symbol"?Symbol():"__"+r,n=this.getPropertyDescriptor(r,i,t);n!==void 0&&Object.defineProperty(this.prototype,r,n)}}static getPropertyDescriptor(r,t,i){return{get(){return this[t]},set(n){const o=this[r];this[t]=n,this.requestUpdate(r,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)||xn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const r=Object.getPrototypeOf(this);if(r.finalize(),r.h!==void 0&&(this.h=[...r.h]),this.elementProperties=new Map(r.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of i)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(r){const t=[];if(Array.isArray(r)){const i=new Set(r.flat(1/0).reverse());for(const n of i)t.unshift(wa(n))}else r!==void 0&&t.push(wa(r));return t}static _$Ep(r,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof r=="string"?r.toLowerCase():void 0}u(){var r;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(r=this.constructor.h)===null||r===void 0||r.forEach(t=>t(this))}addController(r){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(r),this.renderRoot!==void 0&&this.isConnected&&((i=r.hostConnected)===null||i===void 0||i.call(r))}removeController(r){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(r)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((r,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var r;const t=(r=this.shadowRoot)!==null&&r!==void 0?r:this.attachShadow(this.constructor.shadowRootOptions);return mu(t,this.constructor.elementStyles),t}connectedCallback(){var r;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$ES)===null||r===void 0||r.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(r){}disconnectedCallback(){var r;(r=this._$ES)===null||r===void 0||r.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(r,t,i){this._$AK(r,i)}_$EO(r,t,i=xn){var n;const o=this.constructor._$Ep(r,i);if(o!==void 0&&i.reflect===!0){const a=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Ur).toAttribute(t,i.type);this._$El=r,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$El=null}}_$AK(r,t){var i;const n=this.constructor,o=n._$Ev.get(r);if(o!==void 0&&this._$El!==o){const a=n.getPropertyOptions(o),d=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?a.converter:Ur;this._$El=o,this[o]=d.fromAttribute(t,a.type),this._$El=null}}requestUpdate(r,t,i){let n=!0;r!==void 0&&(((i=i||this.constructor.getPropertyOptions(r)).hasChanged||Dc)(this[r],t)?(this._$AL.has(r)||this._$AL.set(r,t),i.reflect===!0&&this._$El!==r&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(r,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,o)=>this[o]=n),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdate)===null||o===void 0?void 0:o.call(n)}),this.update(i)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(i)}willUpdate(r){}_$AE(r){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(r){return!0}update(r){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(r){}firstUpdated(r){}};tr.finalized=!0,tr.elementProperties=new Map,tr.elementStyles=[],tr.shadowRootOptions={mode:"open"},Ea==null||Ea({ReactiveElement:tr}),((wn=vi.reactiveElementVersions)!==null&&wn!==void 0?wn:vi.reactiveElementVersions=[]).push("1.4.2");var En,bi=window,ar=bi.trustedTypes,Aa=ar?ar.createPolicy("lit-html",{createHTML:r=>r}):void 0,Te=`lit$${(Math.random()+"").slice(9)}$`,Uc="?"+Te,bu=`<${Uc}>`,lr=document,qr=(r="")=>lr.createComment(r),Fr=r=>r===null||typeof r!="object"&&typeof r!="function",qc=Array.isArray,yu=r=>qc(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Ar=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Sa=/-->/g,Ca=/>/g,We=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ka=/'/g,$a=/"/g,Fc=/^(?:script|style|textarea|title)$/i,_u=r=>(t,...i)=>({_$litType$:r,strings:t,values:i}),X=_u(1),jt=Symbol.for("lit-noChange"),Et=Symbol.for("lit-nothing"),Pa=new WeakMap,ir=lr.createTreeWalker(lr,129,null,!1),wu=(r,t)=>{const i=r.length-1,n=[];let o,a=t===2?"<svg>":"",d=Ar;for(let p=0;p<i;p++){const l=r[p];let c,s,h=-1,f=0;for(;f<l.length&&(d.lastIndex=f,s=d.exec(l),s!==null);)f=d.lastIndex,d===Ar?s[1]==="!--"?d=Sa:s[1]!==void 0?d=Ca:s[2]!==void 0?(Fc.test(s[2])&&(o=RegExp("</"+s[2],"g")),d=We):s[3]!==void 0&&(d=We):d===We?s[0]===">"?(d=o!=null?o:Ar,h=-1):s[1]===void 0?h=-2:(h=d.lastIndex-s[2].length,c=s[1],d=s[3]===void 0?We:s[3]==='"'?$a:ka):d===$a||d===ka?d=We:d===Sa||d===Ca?d=Ar:(d=We,o=void 0);const g=d===We&&r[p+1].startsWith("/>")?" ":"";a+=d===Ar?l+bu:h>=0?(n.push(c),l.slice(0,h)+"$lit$"+l.slice(h)+Te+g):l+Te+(h===-2?(n.push(void 0),p):g)}const u=a+(r[i]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Aa!==void 0?Aa.createHTML(u):u,n]},yi=class{constructor({strings:r,_$litType$:t},i){let n;this.parts=[];let o=0,a=0;const d=r.length-1,u=this.parts,[p,l]=wu(r,t);if(this.el=yi.createElement(p,i),ir.currentNode=this.el.content,t===2){const c=this.el.content,s=c.firstChild;s.remove(),c.append(...s.childNodes)}for(;(n=ir.nextNode())!==null&&u.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const s of n.getAttributeNames())if(s.endsWith("$lit$")||s.startsWith(Te)){const h=l[a++];if(c.push(s),h!==void 0){const f=n.getAttribute(h.toLowerCase()+"$lit$").split(Te),g=/([.?@])?(.*)/.exec(h);u.push({type:1,index:o,name:g[2],strings:f,ctor:g[1]==="."?Eu:g[1]==="?"?Su:g[1]==="@"?Cu:Oi})}else u.push({type:6,index:o})}for(const s of c)n.removeAttribute(s)}if(Fc.test(n.tagName)){const c=n.textContent.split(Te),s=c.length-1;if(s>0){n.textContent=ar?ar.emptyScript:"";for(let h=0;h<s;h++)n.append(c[h],qr()),ir.nextNode(),u.push({type:2,index:++o});n.append(c[s],qr())}}}else if(n.nodeType===8)if(n.data===Uc)u.push({type:2,index:o});else{let c=-1;for(;(c=n.data.indexOf(Te,c+1))!==-1;)u.push({type:7,index:o}),c+=Te.length-1}o++}}static createElement(r,t){const i=lr.createElement("template");return i.innerHTML=r,i}};function cr(r,t,i=r,n){var o,a,d,u;if(t===jt)return t;let p=n!==void 0?(o=i._$Co)===null||o===void 0?void 0:o[n]:i._$Cl;const l=Fr(t)?void 0:t._$litDirective$;return(p==null?void 0:p.constructor)!==l&&((a=p==null?void 0:p._$AO)===null||a===void 0||a.call(p,!1),l===void 0?p=void 0:(p=new l(r),p._$AT(r,i,n)),n!==void 0?((d=(u=i)._$Co)!==null&&d!==void 0?d:u._$Co=[])[n]=p:i._$Cl=p),p!==void 0&&(t=cr(r,p._$AS(r,t.values),p,n)),t}var xu=class{constructor(r,t){this.u=[],this._$AN=void 0,this._$AD=r,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(r){var t;const{el:{content:i},parts:n}=this._$AD,o=((t=r==null?void 0:r.creationScope)!==null&&t!==void 0?t:lr).importNode(i,!0);ir.currentNode=o;let a=ir.nextNode(),d=0,u=0,p=n[0];for(;p!==void 0;){if(d===p.index){let l;p.type===2?l=new Ri(a,a.nextSibling,this,r):p.type===1?l=new p.ctor(a,p.name,p.strings,this,r):p.type===6&&(l=new ku(a,this,r)),this.u.push(l),p=n[++u]}d!==(p==null?void 0:p.index)&&(a=ir.nextNode(),d++)}return o}p(r){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(r,i,t),t+=i.strings.length-2):i._$AI(r[t])),t++}},Ri=class{constructor(r,t,i,n){var o;this.type=2,this._$AH=Et,this._$AN=void 0,this._$AA=r,this._$AB=t,this._$AM=i,this.options=n,this._$Cm=(o=n==null?void 0:n.isConnected)===null||o===void 0||o}get _$AU(){var r,t;return(t=(r=this._$AM)===null||r===void 0?void 0:r._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let r=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&r.nodeType===11&&(r=t.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,t=this){r=cr(this,r,t),Fr(r)?r===Et||r==null||r===""?(this._$AH!==Et&&this._$AR(),this._$AH=Et):r!==this._$AH&&r!==jt&&this.g(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):yu(r)?this.k(r):this.g(r)}O(r,t=this._$AB){return this._$AA.parentNode.insertBefore(r,t)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}g(r){this._$AH!==Et&&Fr(this._$AH)?this._$AA.nextSibling.data=r:this.T(lr.createTextNode(r)),this._$AH=r}$(r){var t;const{values:i,_$litType$:n}=r,o=typeof n=="number"?this._$AC(r):(n.el===void 0&&(n.el=yi.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.p(i);else{const a=new xu(o,this),d=a.v(this.options);a.p(i),this.T(d),this._$AH=a}}_$AC(r){let t=Pa.get(r.strings);return t===void 0&&Pa.set(r.strings,t=new yi(r)),t}k(r){qc(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const o of r)n===t.length?t.push(i=new Ri(this.O(qr()),this.O(qr()),this,this.options)):i=t[n],i._$AI(o),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(r=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);r&&r!==this._$AB;){const n=r.nextSibling;r.remove(),r=n}}setConnected(r){var t;this._$AM===void 0&&(this._$Cm=r,(t=this._$AP)===null||t===void 0||t.call(this,r))}},Oi=class{constructor(r,t,i,n,o){this.type=1,this._$AH=Et,this._$AN=void 0,this.element=r,this.name=t,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Et}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(r,t=this,i,n){const o=this.strings;let a=!1;if(o===void 0)r=cr(this,r,t,0),a=!Fr(r)||r!==this._$AH&&r!==jt,a&&(this._$AH=r);else{const d=r;let u,p;for(r=o[0],u=0;u<o.length-1;u++)p=cr(this,d[i+u],t,u),p===jt&&(p=this._$AH[u]),a||(a=!Fr(p)||p!==this._$AH[u]),p===Et?r=Et:r!==Et&&(r+=(p!=null?p:"")+o[u+1]),this._$AH[u]=p}a&&!n&&this.j(r)}j(r){r===Et?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r!=null?r:"")}},Eu=class extends Oi{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===Et?void 0:r}},Au=ar?ar.emptyScript:"",Su=class extends Oi{constructor(){super(...arguments),this.type=4}j(r){r&&r!==Et?this.element.setAttribute(this.name,Au):this.element.removeAttribute(this.name)}},Cu=class extends Oi{constructor(r,t,i,n,o){super(r,t,i,n,o),this.type=5}_$AI(r,t=this){var i;if((r=(i=cr(this,r,t,0))!==null&&i!==void 0?i:Et)===jt)return;const n=this._$AH,o=r===Et&&n!==Et||r.capture!==n.capture||r.once!==n.once||r.passive!==n.passive,a=r!==Et&&(n===Et||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,r):this._$AH.handleEvent(r)}},ku=class{constructor(r,t,i){this.element=r,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(r){cr(this,r)}},Ta=bi.litHtmlPolyfillSupport;Ta==null||Ta(yi,Ri),((En=bi.litHtmlVersions)!==null&&En!==void 0?En:bi.litHtmlVersions=[]).push("2.4.0");var $u=(r,t,i)=>{var n,o;const a=(n=i==null?void 0:i.renderBefore)!==null&&n!==void 0?n:t;let d=a._$litPart$;if(d===void 0){const u=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=d=new Ri(t.insertBefore(qr(),u),u,void 0,i!=null?i:{})}return d._$AI(r),d},An,Sn,Ir=class extends tr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var r,t;const i=super.createRenderRoot();return(r=(t=this.renderOptions).renderBefore)!==null&&r!==void 0||(t.renderBefore=i.firstChild),i}update(r){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Dt=$u(t,this.renderRoot,this.renderOptions)}connectedCallback(){var r;super.connectedCallback(),(r=this._$Dt)===null||r===void 0||r.setConnected(!0)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this._$Dt)===null||r===void 0||r.setConnected(!1)}render(){return jt}};Ir.finalized=!0,Ir._$litElement$=!0,(An=globalThis.litElementHydrateSupport)===null||An===void 0||An.call(globalThis,{LitElement:Ir});var Ia=globalThis.litElementPolyfillSupport;Ia==null||Ia({LitElement:Ir});((Sn=globalThis.litElementVersions)!==null&&Sn!==void 0?Sn:globalThis.litElementVersions=[]).push("3.2.0");/**
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
 */var mt=ct`
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
`,Pu=ct`
  ${mt}

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
    transition: var(--sl-transition-medium) transform;
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

  .drawer__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .drawer__body {
    flex: 1 1 auto;
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
    position: absolute;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function La(r){const t=r.tagName.toLowerCase();return r.getAttribute("tabindex")==="-1"||r.hasAttribute("disabled")||r.hasAttribute("aria-disabled")&&r.getAttribute("aria-disabled")!=="false"||t==="input"&&r.getAttribute("type")==="radio"&&!r.hasAttribute("checked")||r.offsetParent===null||window.getComputedStyle(r).visibility==="hidden"?!1:(t==="audio"||t==="video")&&r.hasAttribute("controls")||r.hasAttribute("tabindex")||r.hasAttribute("contenteditable")&&r.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function Wc(r){var t,i;const n=[];function o(u){u instanceof HTMLElement&&(n.push(u),u.shadowRoot!==null&&u.shadowRoot.mode==="open"&&o(u.shadowRoot)),[...u.children].forEach(p=>o(p))}o(r);const a=(t=n.find(u=>La(u)))!=null?t:null,d=(i=n.reverse().find(u=>La(u)))!=null?i:null;return{start:a,end:d}}var Sr=[],Vc=class{constructor(r){this.tabDirection="forward",this.element=r,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Sr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Sr=Sr.filter(r=>r!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Sr[Sr.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:r,end:t}=Wc(this.element),i=this.tabDirection==="forward"?r:t;typeof(i==null?void 0:i.focus)=="function"&&i.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(r){r.key==="Tab"&&r.shiftKey&&(this.tabDirection="backward",requestAnimationFrame(()=>this.checkFocus()))}handleKeyUp(){this.tabDirection="forward"}};function Tu(r,t){return{top:Math.round(r.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(r.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var us=new Set;function _i(r){us.add(r),document.body.classList.add("sl-scroll-lock")}function wi(r){us.delete(r),us.size===0&&document.body.classList.remove("sl-scroll-lock")}function hs(r,t,i="vertical",n="smooth"){const o=Tu(r,t),a=o.top+t.scrollTop,d=o.left+t.scrollLeft,u=t.scrollLeft,p=t.scrollLeft+t.offsetWidth,l=t.scrollTop,c=t.scrollTop+t.offsetHeight;(i==="horizontal"||i==="both")&&(d<u?t.scrollTo({left:d,behavior:n}):d+r.clientWidth>p&&t.scrollTo({left:d-t.offsetWidth+r.clientWidth,behavior:n})),(i==="vertical"||i==="both")&&(a<l?t.scrollTo({top:a,behavior:n}):a+r.clientHeight>c&&t.scrollTo({top:a-t.offsetHeight+r.clientHeight,behavior:n}))}function se(r,t){return new Promise(i=>{function n(o){o.target===r&&(r.removeEventListener(t,n),i())}r.addEventListener(t,n)})}var Iu=Object.create,Mi=Object.defineProperty,Lu=Object.defineProperties,Bc=Object.getOwnPropertyDescriptor,Ru=Object.getOwnPropertyDescriptors,Hc=Object.getOwnPropertyNames,xi=Object.getOwnPropertySymbols,Ou=Object.getPrototypeOf,Ps=Object.prototype.hasOwnProperty,jc=Object.prototype.propertyIsEnumerable,Ra=(r,t,i)=>t in r?Mi(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,At=(r,t)=>{for(var i in t||(t={}))Ps.call(t,i)&&Ra(r,i,t[i]);if(xi)for(var i of xi(t))jc.call(t,i)&&Ra(r,i,t[i]);return r},ae=(r,t)=>Lu(r,Ru(t)),Ts=(r,t)=>{var i={};for(var n in r)Ps.call(r,n)&&t.indexOf(n)<0&&(i[n]=r[n]);if(r!=null&&xi)for(var n of xi(r))t.indexOf(n)<0&&jc.call(r,n)&&(i[n]=r[n]);return i},Oe=(r,t)=>function(){return t||(0,r[Hc(r)[0]])((t={exports:{}}).exports,t),t.exports},Mu=(r,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Hc(t))!Ps.call(r,o)&&o!==i&&Mi(r,o,{get:()=>t[o],enumerable:!(n=Bc(t,o))||n.enumerable});return r},zu=(r,t,i)=>(i=r!=null?Iu(Ou(r)):{},Mu(t||!r||!r.__esModule?Mi(i,"default",{value:r,enumerable:!0}):i,r)),E=(r,t,i,n)=>{for(var o=n>1?void 0:n?Bc(t,i):t,a=r.length-1,d;a>=0;a--)(d=r[a])&&(o=(n?d(t,i,o):d(o))||o);return n&&o&&Mi(t,i,o),o};function Lt(r,t,i){return new Promise(n=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=r.animate(t,ae(At({},i),{duration:Nu()?0:i.duration}));o.addEventListener("cancel",n,{once:!0}),o.addEventListener("finish",n,{once:!0})})}function Oa(r){return r=r.toString().toLowerCase(),r.indexOf("ms")>-1?parseFloat(r):r.indexOf("s")>-1?parseFloat(r)*1e3:parseFloat(r)}function Nu(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Wt(r){return Promise.all(r.getAnimations().map(t=>new Promise(i=>{const n=requestAnimationFrame(i);t.addEventListener("cancel",()=>n,{once:!0}),t.addEventListener("finish",()=>n,{once:!0}),t.cancel()})))}var Xc=new Map,Du=new WeakMap;function Uu(r){return r!=null?r:{keyframes:[],options:{duration:0}}}function Ma(r,t){return t.toLowerCase()==="rtl"?{keyframes:r.rtlKeyframes||r.keyframes,options:r.options}:r}function Ct(r,t){Xc.set(r,Uu(t))}function Rt(r,t,i){const n=Du.get(r);if(n!=null&&n[t])return Ma(n[t],i.dir);const o=Xc.get(t);return o?Ma(o,i.dir):{keyframes:[],options:{duration:0}}}var Ee=class{constructor(r,...t){this.slotNames=[],(this.host=r).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent.trim()!=="")return!0;if(r.nodeType===r.ELEMENT_NODE){const t=r;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(r){return this.host.querySelector(`:scope > [slot="${r}"]`)!==null}test(r){return r==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(r)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(r){const t=r.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}};function Kc(r){if(!r)return"";const t=r.assignedNodes({flatten:!0});let i="";return[...t].forEach(n=>{n.nodeType===Node.TEXT_NODE&&(i+=n.textContent)}),i}var K=r=>r!=null?r:Et;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ps=new Set,qu=new MutationObserver(Zc),er=new Map,Gc=document.documentElement.dir||"ltr",Yc=document.documentElement.lang||navigator.language,Lr;qu.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Fu(...r){r.map(t=>{const i=t.$code.toLowerCase();er.has(i)?er.set(i,Object.assign(Object.assign({},er.get(i)),t)):er.set(i,t),Lr||(Lr=t)}),Zc()}function Zc(){Gc=document.documentElement.dir||"ltr",Yc=document.documentElement.lang||navigator.language,[...ps.keys()].map(r=>{typeof r.requestUpdate=="function"&&r.requestUpdate()})}var Wu=class{constructor(r){this.host=r,this.host.addController(this)}hostConnected(){ps.add(this.host)}hostDisconnected(){ps.delete(this.host)}dir(){return`${this.host.dir||Gc}`.toLowerCase()}lang(){return`${this.host.lang||Yc}`.toLowerCase()}term(r,...t){var i,n;const o=new Intl.Locale(this.lang()),a=o==null?void 0:o.language.toLowerCase(),d=(n=(i=o==null?void 0:o.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&n!==void 0?n:"",u=er.get(`${a}-${d}`),p=er.get(a);let l;if(u&&u[r])l=u[r];else if(p&&p[r])l=p[r];else if(Lr&&Lr[r])l=Lr[r];else return console.error(`No translation found for: ${String(r)}`),r;return typeof l=="function"?l(...t):l}date(r,t){return r=new Date(r),new Intl.DateTimeFormat(this.lang(),t).format(r)}number(r,t){return r=Number(r),isNaN(r)?"":new Intl.NumberFormat(this.lang(),t).format(r)}relativeTime(r,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(r,t)}},Bt=class extends Wu{},Vu={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};Fu(Vu);function G(r,t){const i=At({waitUntilFirstUpdate:!1},t);return(n,o)=>{const{update:a}=n;if(r in n){const d=r;n.update=function(u){if(u.has(d)){const p=u.get(d),l=this[d];p!==l&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](p,l)}a.call(this,u)}}}}var be={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zi=r=>(...t)=>({_$litDirective$:r,values:t}),Ni=class{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,t,i){this._$Ct=r,this._$AM=t,this._$Ci=i}_$AS(r,t){return this.update(r,t)}update(r,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _t=zi(class extends Ni{constructor(r){var t;if(super(r),r.type!==be.ATTRIBUTE||r.name!=="class"||((t=r.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var i,n;if(this.nt===void 0){this.nt=new Set,r.strings!==void 0&&(this.st=new Set(r.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((i=this.st)===null||i===void 0)&&i.has(a))&&this.nt.add(a);return this.render(t)}const o=r.element.classList;this.nt.forEach(a=>{a in t||(o.remove(a),this.nt.delete(a))});for(const a in t){const d=!!t[a];d===this.nt.has(a)||((n=this.st)===null||n===void 0?void 0:n.has(a))||(d?(o.add(a),this.nt.add(a)):(o.remove(a),this.nt.delete(a)))}return jt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vt=r=>t=>typeof t=="function"?((i,n)=>(customElements.define(i,n),n))(r,t):((i,n)=>{const{kind:o,elements:a}=n;return{kind:o,elements:a,finisher(d){customElements.define(i,d)}}})(r,t),Bu=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?ae(At({},t),{finisher(i){i.createProperty(t.key,r)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,r)}};function $(r){return(t,i)=>i!==void 0?((n,o,a)=>{o.constructor.createProperty(a,n)})(r,t,i):Bu(r,t)}function rt(r){return $(ae(At({},r),{state:!0}))}var Hu=({finisher:r,descriptor:t})=>(i,n)=>{var o;if(n===void 0){const a=(o=i.originalKey)!==null&&o!==void 0?o:i.key,d=t!=null?{kind:"method",placement:"prototype",key:a,descriptor:t(i.key)}:ae(At({},i),{key:a});return r!=null&&(d.finisher=function(u){r(u,a)}),d}{const a=i.constructor;t!==void 0&&Object.defineProperty(i,n,t(n)),r==null||r(a,n)}};function Q(r,t){return Hu({descriptor:i=>{const n={get(){var o,a;return(a=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(r))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0};if(t){const o=typeof i=="symbol"?Symbol():"__"+i;n.get=function(){var a,d;return this[o]===void 0&&(this[o]=(d=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(r))!==null&&d!==void 0?d:null),this[o]}}return n}})}var Cn;((Cn=window.HTMLSlotElement)===null||Cn===void 0?void 0:Cn.prototype.assignedElements)!=null;var dt=class extends Ir{emit(r,t){const i=new CustomEvent(r,At({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}};E([$()],dt.prototype,"dir",2);E([$()],dt.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function za(r){return r.charAt(0).toUpperCase()+r.slice(1)}var te=class extends dt{constructor(){super(...arguments),this.hasSlotController=new Ee(this,"footer"),this.localize=new Bt(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new Vc(this)}firstUpdated(){this.drawer.hidden=!this.open,this.open&&!this.contained&&(this.addOpenListeners(),this.modal.activate(),_i(this))}disconnectedCallback(){super.disconnectedCallback(),wi(this)}async show(){if(!this.open)return this.open=!0,se(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,se(this,"sl-after-hide")}requestClose(r){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:r}}).defaultPrevented){const i=Rt(this,"drawer.denyClose",{dir:this.localize.dir()});Lt(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(r){this.open&&r.key==="Escape"&&(r.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),_i(this));const r=this.querySelector("[autofocus]");r&&r.removeAttribute("autofocus"),await Promise.all([Wt(this.drawer),Wt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(r?r.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),r&&r.setAttribute("autofocus","")});const t=Rt(this,`drawer.show${za(this.placement)}`,{dir:this.localize.dir()}),i=Rt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Lt(this.panel,t.keyframes,t.options),Lt(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),wi(this),await Promise.all([Wt(this.drawer),Wt(this.overlay)]);const r=Rt(this,`drawer.hide${za(this.placement)}`,{dir:this.localize.dir()}),t=Rt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Lt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Lt(this.panel,r.keyframes,r.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;typeof(i==null?void 0:i.focus)=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}render(){return X`
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
          ${this.noHeader?"":X`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <sl-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="drawer__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click=${()=>this.requestClose("close-button")}
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="drawer__body">
            <slot></slot>
          </div>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};te.styles=Pu;E([Q(".drawer")],te.prototype,"drawer",2);E([Q(".drawer__panel")],te.prototype,"panel",2);E([Q(".drawer__overlay")],te.prototype,"overlay",2);E([$({type:Boolean,reflect:!0})],te.prototype,"open",2);E([$({reflect:!0})],te.prototype,"label",2);E([$({reflect:!0})],te.prototype,"placement",2);E([$({type:Boolean,reflect:!0})],te.prototype,"contained",2);E([$({attribute:"no-header",type:Boolean,reflect:!0})],te.prototype,"noHeader",2);E([G("open",{waitUntilFirstUpdate:!0})],te.prototype,"handleOpenChange",1);te=E([vt("sl-drawer")],te);Ct("drawer.showTop",{keyframes:[{opacity:0,transform:"translateY(-100%)"},{opacity:1,transform:"translateY(0)"}],options:{duration:250,easing:"ease"}});Ct("drawer.hideTop",{keyframes:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-100%)"}],options:{duration:250,easing:"ease"}});Ct("drawer.showEnd",{keyframes:[{opacity:0,transform:"translateX(100%)"},{opacity:1,transform:"translateX(0)"}],rtlKeyframes:[{opacity:0,transform:"translateX(-100%)"},{opacity:1,transform:"translateX(0)"}],options:{duration:250,easing:"ease"}});Ct("drawer.hideEnd",{keyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(100%)"}],rtlKeyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-100%)"}],options:{duration:250,easing:"ease"}});Ct("drawer.showBottom",{keyframes:[{opacity:0,transform:"translateY(100%)"},{opacity:1,transform:"translateY(0)"}],options:{duration:250,easing:"ease"}});Ct("drawer.hideBottom",{keyframes:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(100%)"}],options:{duration:250,easing:"ease"}});Ct("drawer.showStart",{keyframes:[{opacity:0,transform:"translateX(-100%)"},{opacity:1,transform:"translateX(0)"}],rtlKeyframes:[{opacity:0,transform:"translateX(100%)"},{opacity:1,transform:"translateX(0)"}],options:{duration:250,easing:"ease"}});Ct("drawer.hideStart",{keyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-100%)"}],rtlKeyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(100%)"}],options:{duration:250,easing:"ease"}});Ct("drawer.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.01)"},{transform:"scale(1)"}],options:{duration:250}});Ct("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Ct("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var ju=ct`
  ${mt}

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
  .icon-button:focus:not(.icon-button--disabled) {
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
`,Qc=Symbol.for(""),Xu=r=>{if((r==null?void 0:r.r)===Qc)return r==null?void 0:r._$litStatic$},Ei=(r,...t)=>({_$litStatic$:t.reduce((i,n,o)=>i+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+r[o+1],r[0]),r:Qc}),Na=new Map,Ku=r=>(t,...i)=>{const n=i.length;let o,a;const d=[],u=[];let p,l=0,c=!1;for(;l<n;){for(p=t[l];l<n&&(a=i[l],(o=Xu(a))!==void 0);)p+=o+t[++l],c=!0;u.push(a),d.push(p),l++}if(l===n&&d.push(t[n]),c){const s=d.join("$$lit$$");(t=Na.get(s))===void 0&&(d.raw=d,Na.set(s,t=d)),i=u}return r(t,...i)},fi=Ku(X);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xt=class extends dt{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}click(){this.button.click()}focus(r){this.button.focus(r)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(r){this.disabled&&(r.preventDefault(),r.stopPropagation())}render(){const r=!!this.href,t=r?Ei`a`:Ei`button`;return fi`
      <${t}
        part="base"
        class=${_t({"icon-button":!0,"icon-button--disabled":!r&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${K(r?void 0:this.disabled)}
        type=${K(r?void 0:"button")}
        href=${K(r?this.href:void 0)}
        target=${K(r?this.target:void 0)}
        download=${K(r?this.download:void 0)}
        rel=${K(r&&this.target?"noreferrer noopener":void 0)}
        role=${K(r?void 0:"button")}
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
    `}};Xt.styles=ju;E([rt()],Xt.prototype,"hasFocus",2);E([Q(".icon-button")],Xt.prototype,"button",2);E([$()],Xt.prototype,"name",2);E([$()],Xt.prototype,"library",2);E([$()],Xt.prototype,"src",2);E([$()],Xt.prototype,"href",2);E([$()],Xt.prototype,"target",2);E([$()],Xt.prototype,"download",2);E([$()],Xt.prototype,"label",2);E([$({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);Xt=E([vt("sl-icon-button")],Xt);var fs="";function gs(r){fs=r}function Gu(){if(!fs){const r=[...document.getElementsByTagName("script")],t=r.find(i=>i.hasAttribute("data-shoelace"));if(t)gs(t.getAttribute("data-shoelace"));else{const i=r.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src));let n="";i&&(n=i.getAttribute("src")),gs(n.split("/").slice(0,-1).join("/"))}}return fs.replace(/\/$/,"")}var Yu={name:"default",resolver:r=>`${Gu()}/assets/icons/${r}.svg`},Zu=Yu,Da={caret:`
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
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Qu={name:"system",resolver:r=>r in Da?`data:image/svg+xml,${encodeURIComponent(Da[r])}`:""},Ju=Qu,Ai=[Zu,Ju],Si=[];function th(r){Si.push(r)}function eh(r){Si=Si.filter(t=>t!==r)}function Ua(r){return Ai.find(t=>t.name===r)}function rh(r,t){ih(r),Ai.push({name:r,resolver:t.resolver,mutator:t.mutator}),Si.forEach(i=>{i.library===r&&i.redraw()})}function ih(r){Ai=Ai.filter(t=>t.name!==r)}var kn=new Map;function nh(r,t="cors"){if(kn.has(r))return kn.get(r);const i=fetch(r,{mode:t}).then(async n=>({ok:n.ok,status:n.status,html:await n.text()}));return kn.set(r,i),i}var $n=new Map;async function oh(r){if($n.has(r))return $n.get(r);const t=await nh(r),i={ok:t.ok,status:t.status,svg:null};if(t.ok){const n=document.createElement("div");n.innerHTML=t.html;const o=n.firstElementChild;i.svg=(o==null?void 0:o.tagName.toLowerCase())==="svg"?o.outerHTML:""}return $n.set(r,i),i}var sh=ct`
  ${mt}

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
`,ms=class extends Ni{constructor(r){if(super(r),this.it=Et,r.type!==be.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===Et||r==null)return this._t=void 0,this.it=r;if(r===jt)return r;if(typeof r!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const t=[r];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};ms.directiveName="unsafeHTML",ms.resultType=1;var vs=class extends ms{};vs.directiveName="unsafeSVG",vs.resultType=2;var ah=zi(vs),Pn,le=class extends dt{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),th(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),eh(this)}getUrl(){const r=Ua(this.library);return this.name&&r?r.resolver(this.name):this.src}redraw(){this.setIcon()}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var r;const t=Ua(this.library),i=this.getUrl();if(Pn||(Pn=new DOMParser),i)try{const n=await oh(i);if(i!==this.getUrl())return;if(n.ok){const a=Pn.parseFromString(n.svg,"text/html").body.querySelector("svg");a!==null?((r=t==null?void 0:t.mutator)==null||r.call(t,a),this.svg=a.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){return X` ${ah(this.svg)} `}};le.styles=sh;E([rt()],le.prototype,"svg",2);E([$({reflect:!0})],le.prototype,"name",2);E([$()],le.prototype,"src",2);E([$()],le.prototype,"label",2);E([$({reflect:!0})],le.prototype,"library",2);E([G("label")],le.prototype,"handleLabelChange",1);E([G("name"),G("src"),G("library")],le.prototype,"setIcon",1);le=E([vt("sl-icon")],le);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lh=ct`
  ${mt}

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
`,Tt=class extends dt{constructor(){super(...arguments),this.localize=new Bt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.updateComplete.then(()=>{this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)})}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",this.handleBlur,!0),this.removeEventListener("focus",this.handleFocus,!0),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut)}async show(){if(!this.open)return this.open=!0,se(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,se(this,"sl-after-hide")}getTarget(){const r=[...this.children].find(t=>t.tagName.toLowerCase()!=="style"&&t.getAttribute("slot")!=="content");if(!r)throw new Error("Invalid tooltip target: no child element was found.");return r}handleBlur(){this.hasTrigger("focus")&&this.hide()}handleClick(){this.hasTrigger("click")&&(this.open?this.hide():this.show())}handleFocus(){this.hasTrigger("focus")&&this.show()}handleKeyDown(r){this.open&&r.key==="Escape"&&(r.stopPropagation(),this.hide())}handleMouseOver(){if(this.hasTrigger("hover")){const r=Oa(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),r)}}handleMouseOut(){if(this.hasTrigger("hover")){const r=Oa(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),r)}}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await Wt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:r,options:t}=Rt(this,"tooltip.show",{dir:this.localize.dir()});await Lt(this.popup.popup,r,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),await Wt(this.body);const{keyframes:r,options:t}=Rt(this,"tooltip.hide",{dir:this.localize.dir()});await Lt(this.popup.popup,r,t),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}hasTrigger(r){return this.trigger.split(" ").includes(r)}render(){return X`
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

        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-hidden=${this.open?"false":"true"}>
          <slot name="content" aria-live=${this.open?"polite":"off"}> ${this.content} </slot>
        </div>
      </sl-popup>
    `}};Tt.styles=lh;E([Q("slot:not([name])")],Tt.prototype,"defaultSlot",2);E([Q(".tooltip__body")],Tt.prototype,"body",2);E([Q("sl-popup")],Tt.prototype,"popup",2);E([$()],Tt.prototype,"content",2);E([$()],Tt.prototype,"placement",2);E([$({type:Boolean,reflect:!0})],Tt.prototype,"disabled",2);E([$({type:Number})],Tt.prototype,"distance",2);E([$({type:Boolean,reflect:!0})],Tt.prototype,"open",2);E([$({type:Number})],Tt.prototype,"skidding",2);E([$()],Tt.prototype,"trigger",2);E([$({type:Boolean})],Tt.prototype,"hoist",2);E([G("open",{waitUntilFirstUpdate:!0})],Tt.prototype,"handleOpenChange",1);E([G("content"),G("distance"),G("hoist"),G("placement"),G("skidding")],Tt.prototype,"handleOptionsChange",1);E([G("disabled")],Tt.prototype,"handleDisabledChange",1);Tt=E([vt("sl-tooltip")],Tt);Ct("tooltip.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:150,easing:"ease"}});Ct("tooltip.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:150,easing:"ease"}});var ch=ct`
  ${mt}

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
    transform: rotate(45deg);
    background: var(--arrow-color);
    z-index: -1;
  }
`;function pr(r){return r.split("-")[0]}function Hr(r){return r.split("-")[1]}function jr(r){return["top","bottom"].includes(pr(r))?"x":"y"}function Is(r){return r==="y"?"height":"width"}function qa(r,t,i){let{reference:n,floating:o}=r;const a=n.x+n.width/2-o.width/2,d=n.y+n.height/2-o.height/2,u=jr(t),p=Is(u),l=n[p]/2-o[p]/2,c=u==="x";let s;switch(pr(t)){case"top":s={x:a,y:n.y-o.height};break;case"bottom":s={x:a,y:n.y+n.height};break;case"right":s={x:n.x+n.width,y:d};break;case"left":s={x:n.x-o.width,y:d};break;default:s={x:n.x,y:n.y}}switch(Hr(t)){case"start":s[u]-=l*(i&&c?-1:1);break;case"end":s[u]+=l*(i&&c?-1:1)}return s}var dh=async(r,t,i)=>{const{placement:n="bottom",strategy:o="absolute",middleware:a=[],platform:d}=i,u=a.filter(Boolean),p=await(d.isRTL==null?void 0:d.isRTL(t));let l=await d.getElementRects({reference:r,floating:t,strategy:o}),{x:c,y:s}=qa(l,n,p),h=n,f={},g=0;for(let m=0;m<u.length;m++){const{name:y,fn:A}=u[m],{x,y:C,data:P,reset:T}=await A({x:c,y:s,initialPlacement:n,placement:h,strategy:o,middlewareData:f,rects:l,platform:d,elements:{reference:r,floating:t}});c=x!=null?x:c,s=C!=null?C:s,f=ae(At({},f),{[y]:At(At({},f[y]),P)}),T&&g<=50&&(g++,typeof T=="object"&&(T.placement&&(h=T.placement),T.rects&&(l=T.rects===!0?await d.getElementRects({reference:r,floating:t,strategy:o}):T.rects),{x:c,y:s}=qa(l,h,p)),m=-1)}return{x:c,y:s,placement:h,strategy:o,middlewareData:f}};function Jc(r){return typeof r!="number"?function(t){return At({top:0,right:0,bottom:0,left:0},t)}(r):{top:r,right:r,bottom:r,left:r}}function Ci(r){return ae(At({},r),{top:r.y,left:r.x,right:r.x+r.width,bottom:r.y+r.height})}async function Ls(r,t){var i;t===void 0&&(t={});const{x:n,y:o,platform:a,rects:d,elements:u,strategy:p}=r,{boundary:l="clippingAncestors",rootBoundary:c="viewport",elementContext:s="floating",altBoundary:h=!1,padding:f=0}=t,g=Jc(f),m=u[h?s==="floating"?"reference":"floating":s],y=Ci(await a.getClippingRect({element:(i=await(a.isElement==null?void 0:a.isElement(m)))==null||i?m:m.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(u.floating)),boundary:l,rootBoundary:c,strategy:p})),A=Ci(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:s==="floating"?ae(At({},d.floating),{x:n,y:o}):d.reference,offsetParent:await(a.getOffsetParent==null?void 0:a.getOffsetParent(u.floating)),strategy:p}):d[s]);return{top:y.top-A.top+g.top,bottom:A.bottom-y.bottom+g.bottom,left:y.left-A.left+g.left,right:A.right-y.right+g.right}}var uh=Math.min,Ve=Math.max;function bs(r,t,i){return Ve(r,uh(t,i))}var hh=r=>({name:"arrow",options:r,async fn(t){const{element:i,padding:n=0}=r!=null?r:{},{x:o,y:a,placement:d,rects:u,platform:p}=t;if(i==null)return{};const l=Jc(n),c={x:o,y:a},s=jr(d),h=Hr(d),f=Is(s),g=await p.getDimensions(i),m=s==="y"?"top":"left",y=s==="y"?"bottom":"right",A=u.reference[f]+u.reference[s]-c[s]-u.floating[f],x=c[s]-u.reference[s],C=await(p.getOffsetParent==null?void 0:p.getOffsetParent(i));let P=C?s==="y"?C.clientHeight||0:C.clientWidth||0:0;P===0&&(P=u.floating[f]);const T=A/2-x/2,R=l[m],z=P-g[f]-l[y],N=P/2-g[f]/2+T,F=bs(R,N,z),D=(h==="start"?l[m]:l[y])>0&&N!==F&&u.reference[f]<=u.floating[f];return{[s]:c[s]-(D?N<R?R-N:z-N:0),data:{[s]:F,centerOffset:N-F}}}}),ph={left:"right",right:"left",bottom:"top",top:"bottom"};function ki(r){return r.replace(/left|right|bottom|top/g,t=>ph[t])}function fh(r,t,i){i===void 0&&(i=!1);const n=Hr(r),o=jr(r),a=Is(o);let d=o==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(d=ki(d)),{main:d,cross:ki(d)}}var gh={start:"end",end:"start"};function Fa(r){return r.replace(/start|end/g,t=>gh[t])}var mh=["top","right","bottom","left"];mh.reduce((r,t)=>r.concat(t,t+"-start",t+"-end"),[]);var vh=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(t){var i;const{placement:n,middlewareData:o,rects:a,initialPlacement:d,platform:u,elements:p}=t,l=r,{mainAxis:c=!0,crossAxis:s=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",flipAlignment:g=!0}=l,m=Ts(l,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),y=pr(n),A=h||(y===d||!g?[ki(d)]:function(F){const D=ki(F);return[Fa(F),D,Fa(D)]}(d)),x=[d,...A],C=await Ls(t,m),P=[];let T=((i=o.flip)==null?void 0:i.overflows)||[];if(c&&P.push(C[y]),s){const{main:F,cross:D}=fh(n,a,await(u.isRTL==null?void 0:u.isRTL(p.floating)));P.push(C[F],C[D])}if(T=[...T,{placement:n,overflows:P}],!P.every(F=>F<=0)){var R,z;const F=((R=(z=o.flip)==null?void 0:z.index)!=null?R:0)+1,D=x[F];if(D)return{data:{index:F,overflows:T},reset:{placement:D}};let W="bottom";switch(f){case"bestFit":{var N;const H=(N=T.map(B=>[B,B.overflows.filter(J=>J>0).reduce((J,tt)=>J+tt,0)]).sort((B,J)=>B[1]-J[1])[0])==null?void 0:N[0].placement;H&&(W=H);break}case"initialPlacement":W=d}if(n!==W)return{reset:{placement:W}}}return{}}}},bh=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(t){const{x:i,y:n}=t,o=await async function(a,d){const{placement:u,platform:p,elements:l}=a,c=await(p.isRTL==null?void 0:p.isRTL(l.floating)),s=pr(u),h=Hr(u),f=jr(u)==="x",g=["left","top"].includes(s)?-1:1,m=c&&f?-1:1,y=typeof d=="function"?d(a):d;let{mainAxis:A,crossAxis:x,alignmentAxis:C}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:At({mainAxis:0,crossAxis:0,alignmentAxis:null},y);return h&&typeof C=="number"&&(x=h==="end"?-1*C:C),f?{x:x*m,y:A*g}:{x:A*g,y:x*m}}(t,r);return{x:i+o.x,y:n+o.y,data:o}}}};function yh(r){return r==="x"?"y":"x"}var _h=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(t){const{x:i,y:n,placement:o}=t,a=r,{mainAxis:d=!0,crossAxis:u=!1,limiter:p={fn:A=>{let{x,y:C}=A;return{x,y:C}}}}=a,l=Ts(a,["mainAxis","crossAxis","limiter"]),c={x:i,y:n},s=await Ls(t,l),h=jr(pr(o)),f=yh(h);let g=c[h],m=c[f];if(d){const A=h==="y"?"bottom":"right";g=bs(g+s[h==="y"?"top":"left"],g,g-s[A])}if(u){const A=f==="y"?"bottom":"right";m=bs(m+s[f==="y"?"top":"left"],m,m-s[A])}const y=p.fn(ae(At({},t),{[h]:g,[f]:m}));return ae(At({},y),{data:{x:y.x-i,y:y.y-n}})}}},Wa=function(r){return r===void 0&&(r={}),{name:"size",options:r,async fn(t){const{placement:i,rects:n,platform:o,elements:a}=t,d=r,{apply:u=()=>{}}=d,p=Ts(d,["apply"]),l=await Ls(t,p),c=pr(i),s=Hr(i);let h,f;c==="top"||c==="bottom"?(h=c,f=s===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(f=c,h=s==="end"?"top":"bottom");const g=Ve(l.left,0),m=Ve(l.right,0),y=Ve(l.top,0),A=Ve(l.bottom,0),x={availableHeight:n.floating.height-(["left","right"].includes(i)?2*(y!==0||A!==0?y+A:Ve(l.top,l.bottom)):l[h]),availableWidth:n.floating.width-(["top","bottom"].includes(i)?2*(g!==0||m!==0?g+m:Ve(l.left,l.right)):l[f])};await u(At(At({},t),x));const C=await o.getDimensions(a.floating);return n.floating.width!==C.width||n.floating.height!==C.height?{reset:{rects:!0}}:{}}}};function td(r){return r&&r.document&&r.location&&r.alert&&r.setInterval}function Ae(r){if(r==null)return window;if(!td(r)){const t=r.ownerDocument;return t&&t.defaultView||window}return r}function ye(r){return Ae(r).getComputedStyle(r)}function Le(r){return td(r)?"":r?(r.nodeName||"").toLowerCase():""}function ed(){const r=navigator.userAgentData;return r&&Array.isArray(r.brands)?r.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function _e(r){return r instanceof Ae(r).HTMLElement}function we(r){return r instanceof Ae(r).Element}function Va(r){return typeof ShadowRoot>"u"?!1:r instanceof Ae(r).ShadowRoot||r instanceof ShadowRoot}function Di(r){const{overflow:t,overflowX:i,overflowY:n,display:o}=ye(r);return/auto|scroll|overlay|hidden/.test(t+n+i)&&!["inline","contents"].includes(o)}function wh(r){return["table","td","th"].includes(Le(r))}function ys(r){const t=/firefox/i.test(ed()),i=ye(r),n=i.backdropFilter||i.WebkitBackdropFilter;return i.transform!=="none"||i.perspective!=="none"||!!n&&n!=="none"||t&&i.willChange==="filter"||t&&!!i.filter&&i.filter!=="none"||["transform","perspective"].some(o=>i.willChange.includes(o))||["paint","layout","strict","content"].some(o=>{const a=i.contain;return a!=null&&a.includes(o)})}function rd(){return!/^((?!chrome|android).)*safari/i.test(ed())}function Rs(r){return["html","body","#document"].includes(Le(r))}var Ba=Math.min,Rr=Math.max,$i=Math.round;function xe(r,t,i){var n,o,a,d;t===void 0&&(t=!1),i===void 0&&(i=!1);const u=r.getBoundingClientRect();let p=1,l=1;t&&_e(r)&&(p=r.offsetWidth>0&&$i(u.width)/r.offsetWidth||1,l=r.offsetHeight>0&&$i(u.height)/r.offsetHeight||1);const c=we(r)?Ae(r):window,s=!rd()&&i,h=(u.left+(s&&(n=(o=c.visualViewport)==null?void 0:o.offsetLeft)!=null?n:0))/p,f=(u.top+(s&&(a=(d=c.visualViewport)==null?void 0:d.offsetTop)!=null?a:0))/l,g=u.width/p,m=u.height/l;return{width:g,height:m,top:f,right:h+g,bottom:f+m,left:h,x:h,y:f}}function Ie(r){return(t=r,(t instanceof Ae(t).Node?r.ownerDocument:r.document)||window.document).documentElement;var t}function Ui(r){return we(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.pageXOffset,scrollTop:r.pageYOffset}}function id(r){return xe(Ie(r)).left+Ui(r).scrollLeft}function xh(r,t,i){const n=_e(t),o=Ie(t),a=xe(r,n&&function(p){const l=xe(p);return $i(l.width)!==p.offsetWidth||$i(l.height)!==p.offsetHeight}(t),i==="fixed");let d={scrollLeft:0,scrollTop:0};const u={x:0,y:0};if(n||!n&&i!=="fixed")if((Le(t)!=="body"||Di(o))&&(d=Ui(t)),_e(t)){const p=xe(t,!0);u.x=p.x+t.clientLeft,u.y=p.y+t.clientTop}else o&&(u.x=id(o));return{x:a.left+d.scrollLeft-u.x,y:a.top+d.scrollTop-u.y,width:a.width,height:a.height}}function Wr(r){if(Le(r)==="html")return r;const t=r.assignedSlot||r.parentNode||(Va(r)?r.host:null)||Ie(r);return Va(t)?t.host:t}function Ha(r){return _e(r)&&ye(r).position!=="fixed"?r.offsetParent:null}function ja(r){const t=Ae(r);let i=Ha(r);for(;i&&wh(i)&&ye(i).position==="static";)i=Ha(i);return i&&(Le(i)==="html"||Le(i)==="body"&&ye(i).position==="static"&&!ys(i))?t:i||function(n){let o=Wr(n);for(;_e(o)&&!Rs(o);){if(ys(o))return o;o=Wr(o)}return null}(r)||t}function nd(r){const t=Wr(r);return Rs(t)?r.ownerDocument.body:_e(t)&&Di(t)?t:nd(t)}function Or(r,t){var i;t===void 0&&(t=[]);const n=nd(r),o=n===((i=r.ownerDocument)==null?void 0:i.body),a=Ae(n),d=o?[a].concat(a.visualViewport||[],Di(n)?n:[]):n,u=t.concat(d);return o?u:u.concat(Or(d))}function Xa(r,t,i){return t==="viewport"?Ci(function(n,o){const a=Ae(n),d=Ie(n),u=a.visualViewport;let p=d.clientWidth,l=d.clientHeight,c=0,s=0;if(u){p=u.width,l=u.height;const h=rd();(h||!h&&o==="fixed")&&(c=u.offsetLeft,s=u.offsetTop)}return{width:p,height:l,x:c,y:s}}(r,i)):we(t)?function(n,o){const a=xe(n,!1,o==="fixed"),d=a.top+n.clientTop,u=a.left+n.clientLeft;return{top:d,left:u,x:u,y:d,right:u+n.clientWidth,bottom:d+n.clientHeight,width:n.clientWidth,height:n.clientHeight}}(t,i):Ci(function(n){var o;const a=Ie(n),d=Ui(n),u=(o=n.ownerDocument)==null?void 0:o.body,p=Rr(a.scrollWidth,a.clientWidth,u?u.scrollWidth:0,u?u.clientWidth:0),l=Rr(a.scrollHeight,a.clientHeight,u?u.scrollHeight:0,u?u.clientHeight:0);let c=-d.scrollLeft+id(n);const s=-d.scrollTop;return ye(u||a).direction==="rtl"&&(c+=Rr(a.clientWidth,u?u.clientWidth:0)-p),{width:p,height:l,x:c,y:s}}(Ie(r)))}var Eh={getClippingRect:function(r){let{element:t,boundary:i,rootBoundary:n,strategy:o}=r;const a=i==="clippingAncestors"?function(l){let c=Or(l).filter(g=>we(g)&&Le(g)!=="body"),s=null;const h=ye(l).position==="fixed";let f=h?Wr(l):l;for(;we(f)&&!Rs(f);){const g=ye(f),m=ys(f);(h?m||s:m||g.position!=="static"||!s||!["absolute","fixed"].includes(s.position))?s=g:c=c.filter(y=>y!==f),f=Wr(f)}return c}(t):[].concat(i),d=[...a,n],u=d[0],p=d.reduce((l,c)=>{const s=Xa(t,c,o);return l.top=Rr(s.top,l.top),l.right=Ba(s.right,l.right),l.bottom=Ba(s.bottom,l.bottom),l.left=Rr(s.left,l.left),l},Xa(t,u,o));return{width:p.right-p.left,height:p.bottom-p.top,x:p.left,y:p.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(r){let{rect:t,offsetParent:i,strategy:n}=r;const o=_e(i),a=Ie(i);if(i===a)return t;let d={scrollLeft:0,scrollTop:0};const u={x:0,y:0};if((o||!o&&n!=="fixed")&&((Le(i)!=="body"||Di(a))&&(d=Ui(i)),_e(i))){const p=xe(i,!0);u.x=p.x+i.clientLeft,u.y=p.y+i.clientTop}return ae(At({},t),{x:t.x-d.scrollLeft+u.x,y:t.y-d.scrollTop+u.y})},isElement:we,getDimensions:function(r){if(_e(r))return{width:r.offsetWidth,height:r.offsetHeight};const t=xe(r);return{width:t.width,height:t.height}},getOffsetParent:ja,getDocumentElement:Ie,async getElementRects(r){let{reference:t,floating:i,strategy:n}=r;const o=this.getOffsetParent||ja,a=this.getDimensions;return{reference:xh(t,await o(i),n),floating:At({x:0,y:0},await a(i))}},getClientRects:r=>Array.from(r.getClientRects()),isRTL:r=>ye(r).direction==="rtl"};function Ah(r,t,i,n){n===void 0&&(n={});const{ancestorScroll:o=!0,ancestorResize:a=!0,elementResize:d=!0,animationFrame:u=!1}=n,p=o&&!u,l=p||a?[...we(r)?Or(r):r.contextElement?Or(r.contextElement):[],...Or(t)]:[];l.forEach(f=>{p&&f.addEventListener("scroll",i,{passive:!0}),a&&f.addEventListener("resize",i)});let c,s=null;if(d){let f=!0;s=new ResizeObserver(()=>{f||i(),f=!1}),we(r)&&!u&&s.observe(r),we(r)||!r.contextElement||u||s.observe(r.contextElement),s.observe(t)}let h=u?xe(r):null;return u&&function f(){const g=xe(r);!h||g.x===h.x&&g.y===h.y&&g.width===h.width&&g.height===h.height||i(),h=g,c=requestAnimationFrame(f)}(),i(),()=>{var f;l.forEach(g=>{p&&g.removeEventListener("scroll",i),a&&g.removeEventListener("resize",i)}),(f=s)==null||f.disconnect(),s=null,u&&cancelAnimationFrame(c)}}var Sh=(r,t,i)=>dh(r,t,At({platform:Eh},i)),wt=class extends dt{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="initial",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const r=this.getRootNode();this.anchorEl=r.getElementById(this.anchor)}else this.anchor instanceof HTMLElement?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){!this.anchorEl||(this.cleanup=Ah(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(r=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>r())):r()})}async updated(r){super.updated(r),r.has("active")&&(this.active?this.start():this.stop()),r.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}reposition(){if(!this.active||!this.anchorEl)return;const r=[bh({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?r.push(Wa({apply:({rects:t})=>{const i=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${t.reference.width}px`:"",this.popup.style.height=n?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&r.push(vh({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&r.push(_h({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?r.push(Wa({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&r.push(hh({element:this.arrowEl,padding:this.arrowPadding})),Sh(this.anchorEl,this.popup,{placement:this.placement,middleware:r,strategy:this.strategy}).then(({x:t,y:i,middlewareData:n,placement:o})=>{const a=getComputedStyle(this).direction==="rtl",d={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${t}px`,top:`${i}px`}),this.arrow){const u=n.arrow.x,p=n.arrow.y;let l="",c="",s="",h="";if(this.arrowPlacement==="start"){const f=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";l=typeof p=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",c=a?f:"",h=a?"":f}else if(this.arrowPlacement==="end"){const f=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";c=a?"":f,h=a?f:"",s=typeof p=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(h=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":"",l=typeof p=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(h=typeof u=="number"?`${u}px`:"",l=typeof p=="number"?`${p}px`:"");Object.assign(this.arrowEl.style,{top:l,right:c,bottom:s,left:h,[d]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return X`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${_t({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?X`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};wt.styles=ch;E([Q(".popup")],wt.prototype,"popup",2);E([Q(".popup__arrow")],wt.prototype,"arrowEl",2);E([$()],wt.prototype,"anchor",2);E([$({type:Boolean,reflect:!0})],wt.prototype,"active",2);E([$({reflect:!0})],wt.prototype,"placement",2);E([$({reflect:!0})],wt.prototype,"strategy",2);E([$({type:Number})],wt.prototype,"distance",2);E([$({type:Number})],wt.prototype,"skidding",2);E([$({type:Boolean})],wt.prototype,"arrow",2);E([$({attribute:"arrow-placement"})],wt.prototype,"arrowPlacement",2);E([$({attribute:"arrow-padding",type:Number})],wt.prototype,"arrowPadding",2);E([$({type:Boolean})],wt.prototype,"flip",2);E([$({attribute:"flip-fallback-placements",converter:{fromAttribute:r=>r.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:r=>r.join(" ")}})],wt.prototype,"flipFallbackPlacements",2);E([$({attribute:"flip-fallback-strategy"})],wt.prototype,"flipFallbackStrategy",2);E([$({type:Object})],wt.prototype,"flipBoundary",2);E([$({attribute:"flip-padding",type:Number})],wt.prototype,"flipPadding",2);E([$({type:Boolean})],wt.prototype,"shift",2);E([$({type:Object})],wt.prototype,"shiftBoundary",2);E([$({attribute:"shift-padding",type:Number})],wt.prototype,"shiftPadding",2);E([$({attribute:"auto-size"})],wt.prototype,"autoSize",2);E([$()],wt.prototype,"sync",2);E([$({type:Object})],wt.prototype,"autoSizeBoundary",2);E([$({attribute:"auto-size-padding",type:Number})],wt.prototype,"autoSizePadding",2);wt=E([vt("sl-popup")],wt);var Ch=ct`
  ${mt}

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

  .button__label ::slotted(sl-icon) {
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
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
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

  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,kh=class extends Event{constructor(r){super("formdata"),this.formData=r}},$h=class extends FormData{constructor(r){var t=(...i)=>{super(...i)};r?(t(r),this.form=r,r.dispatchEvent(new kh(this))):t()}append(r,t){if(!this.form)return super.append(r,t);let i=this.form.elements[r];if(i||(i=document.createElement("input"),i.type="hidden",i.name=r,this.form.appendChild(i)),this.has(r)){const n=this.getAll(r),o=n.indexOf(i.value);o!==-1&&n.splice(o,1),n.push(t),this.set(r,n)}else super.append(r,t);i.value=t}};function Ph(){const r=document.createElement("form");let t=!1;return document.body.append(r),r.addEventListener("submit",i=>{new FormData(i.target),i.preventDefault()}),r.addEventListener("formdata",()=>t=!0),r.dispatchEvent(new Event("submit",{cancelable:!0})),r.remove(),t}function Ka(){!window.FormData||Ph()||(window.FormData=$h,window.addEventListener("submit",r=>{r.defaultPrevented||new FormData(r.target)}))}document.readyState==="complete"?Ka():window.addEventListener("DOMContentLoaded",()=>Ka());var Cr=new WeakMap,Ga=new WeakMap,kr=new WeakMap,je=class{constructor(r,t){(this.host=r).addController(this),this.options=At({form:i=>i.closest("form"),name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var n;return(n=i.disabled)!=null?n:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,setValue:(i,n)=>i.value=n},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(Cr.has(this.form)?Cr.get(this.form).add(this.host):Cr.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),kr.has(this.form)||(kr.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){var r;this.form&&((r=Cr.get(this.form))==null||r.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),kr.has(this.form)&&(this.form.reportValidity=kr.get(this.form),kr.delete(this.form)),this.form=void 0),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){var r;const t=this.host,i=Boolean(Ga.get(t)),n=Boolean(t.invalid),o=Boolean(t.required);(r=this.form)!=null&&r.noValidate?(t.removeAttribute("data-required"),t.removeAttribute("data-optional"),t.removeAttribute("data-invalid"),t.removeAttribute("data-valid"),t.removeAttribute("data-user-invalid"),t.removeAttribute("data-user-valid")):(t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",n),t.toggleAttribute("data-valid",!n),t.toggleAttribute("data-user-invalid",n&&i),t.toggleAttribute("data-user-valid",!n&&i))}handleFormData(r){const t=this.options.disabled(this.host),i=this.options.name(this.host),n=this.options.value(this.host);!t&&typeof i=="string"&&typeof n<"u"&&(Array.isArray(n)?n.forEach(o=>{r.formData.append(i,o.toString())}):r.formData.append(i,n.toString()))}handleFormSubmit(r){var t;const i=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=Cr.get(this.form))==null||t.forEach(o=>{this.setUserInteracted(o,!0)})),this.form&&!this.form.noValidate&&!i&&!n(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const t of r)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(r,t){Ga.set(r,t),r.requestUpdate()}doAction(r,t){if(this.form){const i=document.createElement("button");i.type=r,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(n=>{t.hasAttribute(n)&&i.setAttribute(n,t.getAttribute(n))}),this.form.append(i),i.click(),i.remove()}}reset(r){this.doAction("reset",r)}submit(r){this.doAction("submit",r)}},gt=class extends dt{constructor(){super(...arguments),this.formSubmitController=new je(this,{form:r=>{if(r.hasAttribute("form")){const t=r.getRootNode(),i=r.getAttribute("form");return t.getElementById(i)}return r.closest("form")}}),this.hasSlotController=new Ee(this,"[default]","prefix","suffix"),this.localize=new Bt(this),this.hasFocus=!1,this.invalid=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href=""}firstUpdated(){this.isButton()&&(this.invalid=!this.button.checkValidity())}click(){this.button.click()}focus(r){this.button.focus(r)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(r){this.isButton()&&(this.button.setCustomValidity(r),this.invalid=!this.button.checkValidity())}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(r){if(this.disabled||this.loading){r.preventDefault(),r.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}handleDisabledChange(){this.isButton()&&(this.button.disabled=this.disabled,this.invalid=!this.button.checkValidity())}isButton(){return!this.href}isLink(){return!!this.href}render(){const r=this.isLink(),t=r?Ei`a`:Ei`button`;return fi`
      <${t}
        part="base"
        class=${_t({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${K(r?void 0:this.disabled)}
        type=${K(r?void 0:this.type)}
        name=${K(r?void 0:this.name)}
        value=${K(r?void 0:this.value)}
        href=${K(r?this.href:void 0)}
        target=${K(r?this.target:void 0)}
        download=${K(r?this.download:void 0)}
        rel=${K(r&&this.target?"noreferrer noopener":void 0)}
        role=${K(r?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?fi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?fi`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};gt.styles=Ch;E([Q(".button")],gt.prototype,"button",2);E([rt()],gt.prototype,"hasFocus",2);E([rt()],gt.prototype,"invalid",2);E([$({reflect:!0})],gt.prototype,"variant",2);E([$({reflect:!0})],gt.prototype,"size",2);E([$({type:Boolean,reflect:!0})],gt.prototype,"caret",2);E([$({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);E([$({type:Boolean,reflect:!0})],gt.prototype,"loading",2);E([$({type:Boolean,reflect:!0})],gt.prototype,"outline",2);E([$({type:Boolean,reflect:!0})],gt.prototype,"pill",2);E([$({type:Boolean,reflect:!0})],gt.prototype,"circle",2);E([$()],gt.prototype,"type",2);E([$()],gt.prototype,"name",2);E([$()],gt.prototype,"value",2);E([$()],gt.prototype,"href",2);E([$()],gt.prototype,"target",2);E([$()],gt.prototype,"download",2);E([$()],gt.prototype,"form",2);E([$({attribute:"formaction"})],gt.prototype,"formAction",2);E([$({attribute:"formenctype"})],gt.prototype,"formEnctype",2);E([$({attribute:"formmethod"})],gt.prototype,"formMethod",2);E([$({attribute:"formnovalidate",type:Boolean})],gt.prototype,"formNoValidate",2);E([$({attribute:"formtarget"})],gt.prototype,"formTarget",2);E([G("disabled",{waitUntilFirstUpdate:!0})],gt.prototype,"handleDisabledChange",1);gt=E([vt("sl-button")],gt);var Th=ct`
  ${mt}

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
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,_s=class extends dt{constructor(){super(...arguments),this.localize=new Bt(this)}render(){return X`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};_s.styles=Th;_s=E([vt("sl-spinner")],_s);var Ih=ct`
  ${mt}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,dr=class extends dt{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(r){const t=$r(r.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(r){const t=$r(r.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(r){const t=$r(r.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(r){const t=$r(r.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const r=[...this.defaultSlot.assignedElements({flatten:!0})];r.forEach(t=>{const i=r.indexOf(t),n=$r(t);n!==null&&(n.classList.add("sl-button-group__button"),n.classList.toggle("sl-button-group__button--first",i===0),n.classList.toggle("sl-button-group__button--inner",i>0&&i<r.length-1),n.classList.toggle("sl-button-group__button--last",i===r.length-1),n.classList.toggle("sl-button-group__button--radio",n.tagName.toLowerCase()==="sl-radio-button"))})}render(){return X`
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
        <slot @slotchange=${this.handleSlotChange} role="none"></slot>
      </div>
    `}};dr.styles=Ih;E([Q("slot")],dr.prototype,"defaultSlot",2);E([rt()],dr.prototype,"disableRole",2);E([$()],dr.prototype,"label",2);dr=E([vt("sl-button-group")],dr);function $r(r){const t=["sl-button","sl-radio-button"];return t.includes(r.tagName.toLowerCase())?r:r.querySelector(t.join(","))}var Lh=ct`
  ${mt}

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
    box-shadow: var(--box-shadow);
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
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,Qe=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),ce=class extends dt{constructor(){super(...arguments),this.hasSlotController=new Ee(this,"icon","suffix"),this.localize=new Bt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}async show(){if(!this.open)return this.open=!0,se(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,se(this,"sl-after-hide")}async toast(){return new Promise(r=>{Qe.parentElement===null&&document.body.append(Qe),Qe.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Qe.removeChild(this),r(),Qe.querySelector("sl-alert")===null&&Qe.remove()},{once:!0})})}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Wt(this.base),this.base.hidden=!1;const{keyframes:r,options:t}=Rt(this,"alert.show",{dir:this.localize.dir()});await Lt(this.base,r,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Wt(this.base);const{keyframes:r,options:t}=Rt(this,"alert.hide",{dir:this.localize.dir()});await Lt(this.base,r,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}render(){return X`
      <div
        part="base"
        class=${_t({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <span part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </span>

        <span part="message" class="alert__message">
          <slot></slot>
        </span>

        ${this.closable?X`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x"
                library="system"
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};ce.styles=Lh;E([Q('[part~="base"]')],ce.prototype,"base",2);E([$({type:Boolean,reflect:!0})],ce.prototype,"open",2);E([$({type:Boolean,reflect:!0})],ce.prototype,"closable",2);E([$({reflect:!0})],ce.prototype,"variant",2);E([$({type:Number})],ce.prototype,"duration",2);E([G("open",{waitUntilFirstUpdate:!0})],ce.prototype,"handleOpenChange",1);E([G("duration")],ce.prototype,"handleDurationChange",1);ce=E([vt("sl-alert")],ce);Ct("alert.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});Ct("alert.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});var Rh=ct`
  ${mt}

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
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
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
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,ws=class extends dt{constructor(){super(...arguments),this.hasSlotController=new Ee(this,"footer","header","image")}render(){return X`
      <div
        part="base"
        class=${_t({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <div part="image" class="card__image">
          <slot name="image"></slot>
        </div>

        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>

        <div part="body" class="card__body">
          <slot></slot>
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};ws.styles=Rh;ws=E([vt("sl-card")],ws);class od extends Jt{static get properties(){return{eventType:{type:String,reflectToAttribute:!0,attribute:!0},pointerType:{type:String,reflectToAttribute:!0,attribute:!0},pointerId:{type:Number,reflectToAttribute:!0,attribute:!0},isPrimary:{type:Boolean,reflectToAttribute:!0,attribute:!0},width:{type:Number,reflectToAttribute:!0,attribute:!0},height:{type:Number,reflectToAttribute:!0,attribute:!0},positionX:{type:Number,reflectToAttribute:!0,attribute:!0},positionY:{type:Number,reflectToAttribute:!0,attribute:!0},preferredColor:{type:String,reflectToAttribute:!0,attribute:!0},preferredStyle:{type:String,reflectToAttribute:!0,attribute:!0},preferredWidth:{type:Number,reflectToAttribute:!0,attribute:!0},pressure:{type:Number,reflectToAttribute:!0,attribute:!0},tangentialPressure:{type:Number,reflectToAttribute:!0,attribute:!0},tiltX:{type:Number,reflectToAttribute:!0,attribute:!0},tiltY:{type:Number,reflectToAttribute:!0,attribute:!0},twist:{type:Number,reflectToAttribute:!0,attribute:!0},avgLatency:{type:Number,reflectToAttribute:!0,attribute:!0}}}set eventType(t){let i=this._eventType;this._eventType=t,this.requestUpdate("eventType",i)}get eventType(){return this._eventType}set pointerType(t){let i=this._pointerType;this._pointerType=t,this.requestUpdate("pointerType",i)}get pointerType(){return this._pointerType}set pointerId(t){let i=this._pointerId;this._pointerId=t,this.requestUpdate("pointerId",i)}get pointerId(){return this._pointerId}set isPrimary(t){let i=this._isPrimary;this._isPrimary=t,this.requestUpdate("isPrimary",i)}get isPrimary(){return this._isPrimary}set width(t){let i=this._pointerId;this._width=t,this.requestUpdate("width",i)}get width(){return this._width}set height(t){let i=this._height;this._height=t,this.requestUpdate("height",i)}get height(){return this._height}set positionX(t){let i=this._positionX;this._positionX=t,this.requestUpdate("positionX",i)}get positionX(){return this._positionX}set positionY(t){let i=this._positionY;this._positionY=t,this.requestUpdate("positionY",i)}get positionY(){return this._positionY}set preferredColor(t){let i=this._preferredColor;this._preferredColor=t,this.requestUpdate("preferredColor",i)}get preferredColor(){return this._preferredColor}set preferredStyle(t){let i=this._preferredStyle;this._preferredStyle=t,this.requestUpdate("preferredStyle",i)}get preferredStyle(){return this._preferredStyle}set preferredWidth(t){let i=this._preferredWidth;this._preferredWidth=t,this.requestUpdate("preferredWidth",i)}get preferredWidth(){return this._preferredWidth}set pressure(t){let i=this._pressure;this._pressure=t,this.requestUpdate("pressure",i)}get pressure(){return this._pressure}set tangentialPressure(t){let i=this._tangentialPressure;this._tangentialPressure=t,this.requestUpdate("tangentialPressure",i)}get tangentialPressure(){return this._tangentialPressure}set tiltX(t){let i=this._tiltX;this._tiltX=t,this.requestUpdate("tiltX",i)}get tiltX(){return this._tiltX}set tiltY(t){let i=this._tiltY;this._tiltY=t,this.requestUpdate("tiltY",i)}get tiltY(){return this._tiltY}set twist(t){let i=this._twist;this._twist=t,this.requestUpdate("twist",i)}get twist(){return this._twist}set avgLatency(t){let i=this._avgLatency;this._avgLatency=t,this.requestUpdate("avgLatency",i)}get avgLatency(){return this._avgLatency}constructor(){super()}_closedClicked(){this.shadowRoot.host.style.visibility="hidden"}render(){return oe`
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
    `}}xt(od,"styles",Re`
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
  `);customElements.define("info-panel",od);var Tn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Oh(r){var t=r.default;if(typeof t=="function"){var i=function(){return t.apply(this,arguments)};i.prototype=t.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var o=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(i,n,o.get?o:{enumerable:!0,get:function(){return r[n]}})}),i}var Xe=function(r){const t=[];for(let i=0;i<r;i++){const n=[];for(let o=0;o<r;o++)i===o?n.push(1):n.push(0);t.push(n)}return t};const Ya=Xe;var Mh=function(r,t){let{dimension:i}=r;const n=t.dimension,{observedProjection:o}=t,{stateProjection:a}=t;let{covariance:d}=r;r.dimension||(n?i=n:o?i=o[0].length:a&&(i=a[0].length));const u=Ya(i);return d=d||Ya(i),Object.assign({},r,{dimension:i,transition:u,covariance:d})};const zh=Xe;var Nh=function(r,t){const i=r.timeStep||1,{observedProjection:n}=t,{stateProjection:o}=t,a=t.dimension;let d;if(o&&Number.isInteger(o[0].length/2))d=t.stateProjection[0].length;else if(n)d=n[0].length*2;else if(a)d=a*2;else throw new Error("observedProjection or stateProjection should be defined in observation in order to use constant-speed filter");const u=d/2,p=zh(d);for(let s=0;s<u;s++)p[s][s+u]=i;const l=new Array(u).fill(1).concat(new Array(u).fill(i*i)),c=r.covariance||l;return Object.assign({},r,{dimension:d,transition:p,covariance:c})};const Dh=Xe;var Uh=function(r,t){const i=r.timeStep||1,{observedProjection:n}=t,{stateProjection:o}=t,a=t.dimension;let d;if(o&&Number.isInteger(o[0].length/3))d=t.stateProjection[0].length;else if(n)d=n[0].length*3;else if(a)d=a*3;else throw new Error("observedProjection or stateProjection should be defined in observation in order to use constant-speed filter");const u=d/3,p=Dh(d);for(let s=0;s<u;s++)p[s][s+u]=i,p[s][s+2*u]=.5*i**2,p[s+u][s+2*u]=i;const l=new Array(u).fill(1).concat(new Array(u).fill(i*i)).concat(new Array(u).fill(i**4)),c=r.covariance||l;return Object.assign({},r,{dimension:d,transition:p,covariance:c})},sd=function(r,t){return new Array(r).fill(1).map(()=>new Array(t).fill(0))};const qh=sd;var Os=function(r){const t=qh(r.length,r.length);for(const[i,n]of r.entries())t[i][i]=n;return t};const ad=function(r,t,i="checkShape"){if(r.length!==t[0])throw new Error(`[${i}] expected size (${t[0]}) and length (${r.length}) does not match`);if(t.length>1)return r.forEach(n=>ad(n,t.slice(1),i))};var Fh=ad;const Wh=Fh;var Xr=function(r,t,i="checkMatrix"){if(r.reduce((n,o)=>n.concat(o)).filter(n=>Number.isNaN(n)).length>0)throw new Error(`[${i}] Matrix should not have a NaN
In : 
`+r.join(`
`));t&&Wh(r,t,i)};const Za=Os,Vh=Xr;var ld=function(r,{dimension:t,title:i="polymorph"}={}){if(typeof r=="number"||Array.isArray(r)){if(typeof r=="number"&&typeof t=="number")return Za(new Array(t).fill(r));if(Array.isArray(r)&&Array.isArray(r[0])){let n;return typeof t=="number"&&(n=[t,t]),Vh(r,n,i),r}if(Array.isArray(r)&&typeof r[0]=="number")return Za(r)}return r};const Qa=Xe,Bh=ld,Hh=Xr,jh=r=>r.map(t=>t.concat());var Xh=function(r){const{sensorDimension:t=1,sensorCovariance:i=1,nSensors:n=1}=r,o=Bh(i,{dimension:t});Hh(o,[t,t],"observation.sensorCovariance");const a=Qa(t);let d=[];const u=t*n,p=Qa(u);for(let l=0;l<n;l++)d=d.concat(jh(a)),o.forEach((c,s)=>c.forEach((h,f)=>{p[s+l*t][f+l*t]=h}));return Object.assign({},r,{dimension:u,observedProjection:d,covariance:p})};const In={"constant-position":Mh,"constant-speed":Nh,"constant-acceleration":Uh},Ln={sensor:Xh};var cd={registerObservation:(r,t)=>{Ln[r]=t},registerDynamic:(r,t)=>{In[r]=t},buildObservation:r=>{if(!Ln[r.name])throw new Error(`The provided observation model name (${r.name}) is not registered`);return Ln[r.name](r)},buildDynamic:(r,t)=>{if(!In[r.name])throw new Error(`The provided dynamic model (${r.name}) name is not registered`);return In[r.name](r,t)}},dd=function({observation:r,dimension:t}){if(!Array.isArray(r)){if(t===1&&typeof r=="number")return[[r]];throw new TypeError(`The observation (${r}) should be an array (dimension: ${t})`)}if(r.length!==t)throw new TypeError(`Observation (${r.length}) and dimension (${t}) not matching`);return typeof r[0]=="number"||r[0]===null?r.map(i=>[i]):r},Kh=function({observation:r,dynamic:t}){const{stateProjection:i}=r,{transition:n}=t,o=t.dimension,a=r.dimension;if(o&&a&&Array.isArray(i)&&(o!==i[0].length||a!==i.length))throw new TypeError("stateProjection dimensions not matching with observation and dynamic dimensions");if(o&&Array.isArray(n)&&o!==n.length)throw new TypeError("transition dimension not matching with dynamic dimension");return Array.isArray(i)?{observation:Object.assign({},r,{dimension:i.length}),dynamic:Object.assign({},t,{dimension:i[0].length})}:Array.isArray(n)?{observation:r,dynamic:Object.assign({},t,{dimension:n.length})}:{observation:r,dynamic:t}},Gh=function({observation:r,dynamic:t}){const i=t.dimension,n=r.dimension;if(!i||!n)throw new TypeError("Dimension is not set");return{observation:r,dynamic:t}},ud=function(r,{dimension:t}){const i=r.length,n=r[0].length,o=r.map(a=>a.concat());if(t<n)throw new TypeError(`Dynamic dimension ${t} does not match with observedProjection ${n}`);for(let a=0;a<i;a++)for(let d=0;d<t-n;d++)o[a].push(0);return o};const Ja=ud,Yh=Xe;var Zh=function({observation:r,dynamic:t}){const{observedProjection:i,stateProjection:n}=r,o=r.dimension,a=t.dimension;if(i&&n)throw new TypeError("You cannot use both observedProjection and stateProjection");if(i){const d=Ja(i,{dimension:a});return{observation:Object.assign({},r,{stateProjection:d}),dynamic:t}}if(o&&a&&!n){const d=Yh(o);return{observation:Object.assign({},r,{stateProjection:Ja(d,{dimension:a})}),dynamic:t}}return{observation:r,dynamic:t}};const Qh=Os;var Jh=function({observation:r,dynamic:t}){if(!t.init){const n=t.dimension,o=new Array(n).fill(0),a=new Array(n).fill(1e6);return{observation:r,dynamic:Object.assign({},t,{init:{mean:o.map(u=>[u]),covariance:Qh(a),index:-1}})}}return{observation:r,dynamic:t}},tp=function(r){if(typeof r=="function"||Array.isArray(r))return r;throw new Error("Only arrays and functions are authorized")},ep=function(r){return r.filter((t,i)=>r.indexOf(t)===i)};const rp=ep,tl=100,hd=function(r,t){if(t>tl)throw new Error(`In deepAssign, number of recursive call (${t}) reached limit (${tl}), deepAssign is not working on  self-referencing objects`);const i=r.filter(p=>typeof p<"u"&&p!==null),n=i[i.length-1];if(i.length===1)return i[0];if(typeof n!="object"||Array.isArray(n))return n;if(i.length===0)return null;const o=i.filter(p=>typeof p=="object");let a=[];o.forEach(p=>{a=a.concat(Object.keys(p))});const d=rp(a),u={};return d.forEach(p=>{const l=o.map(c=>c[p]);u[p]=hd(l,t+1)}),u};var ip=(...r)=>hd(r,0),pd=function(r){let t=0;for(const[i,n]of r.entries())t+=n[i];return t},qi=function(r){return r[0].map((t,i)=>r.map(n=>n[i]))},Fi=function(r,t){return r[0].map((i,n)=>i.map((o,a)=>{const d=r.map(u=>u[n][a]);return t(d,n,a)}))};const np=Fi;var Wi=function(...r){return np(r,([t,i])=>t-i)},Vi=function(r,t){const i=[];for(let n=0;n<r.length;n++){i[n]=[];for(let o=0;o<t[0].length;o++){let a=0,d=!1;for(let u=0;u<r[0].length;u++)(r[n][u]===null&&t[u][o]!==0||t[u][o]===null&&r[n][u]!==0)&&(d=!0),a+=r[n][u]*t[u][o];i[n][o]=d?null:a}}return i},fd=function(r){let t=0;for(let i=0;i<r.length;i++)for(let n=0;n<r.length;n++)t+=r[i][n];return t};const op=pd,sp=qi,ap=Wi,lp=Vi,el=fd;var gd=function(r,t){if(typeof r>"u")return el(t);if(typeof t>"u")return el(r);const i=ap(r,t),n=lp(sp(i),i);return Math.sqrt(op(n))},Qt={};Qt.Matrix=function(){};Qt.Matrix.create=function(r){var t=new Qt.Matrix;return t.setElements(r)};Qt.Matrix.I=function(r){for(var t=[],i=r,n;i--;)for(n=r,t[i]=[];n--;)t[i][n]=i===n?1:0;return Qt.Matrix.create(t)};Qt.Matrix.prototype={dup:function(){return Qt.Matrix.create(this.elements)},isSquare:function(){var r=this.elements.length===0?0:this.elements[0].length;return this.elements.length===r},toRightTriangular:function(){if(this.elements.length===0)return Qt.Matrix.create([]);var r=this.dup(),t,i=this.elements.length,n,o,a=this.elements[0].length,d;for(n=0;n<i;n++){if(r.elements[n][n]===0){for(o=n+1;o<i;o++)if(r.elements[o][n]!==0){for(t=[],d=0;d<a;d++)t.push(r.elements[n][d]+r.elements[o][d]);r.elements[n]=t;break}}if(r.elements[n][n]!==0)for(o=n+1;o<i;o++){var u=r.elements[o][n]/r.elements[n][n];for(t=[],d=0;d<a;d++)t.push(d<=n?0:r.elements[o][d]-r.elements[n][d]*u);r.elements[o]=t}}return r},determinant:function(){if(this.elements.length===0)return 1;if(!this.isSquare())return null;for(var r=this.toRightTriangular(),t=r.elements[0][0],i=r.elements.length,n=1;n<i;n++)t=t*r.elements[n][n];return t},isSingular:function(){return this.isSquare()&&this.determinant()===0},augment:function(r){if(this.elements.length===0)return this.dup();var t=r.elements||r;typeof t[0][0]>"u"&&(t=Qt.Matrix.create(t).elements);var i=this.dup(),n=i.elements[0].length,o=i.elements.length,a=t[0].length,d;if(o!==t.length)return null;for(;o--;)for(d=a;d--;)i.elements[o][n+d]=t[o][d];return i},inverse:function(){if(this.elements.length===0||!this.isSquare()||this.isSingular())return null;for(var r=this.elements.length,t=r,i,n=this.augment(Qt.Matrix.I(r)).toRightTriangular(),o=n.elements[0].length,a,d,u,p=[],l;t--;){for(d=[],p[t]=[],u=n.elements[t][t],a=0;a<o;a++)l=n.elements[t][a]/u,d.push(l),a>=r&&p[t].push(l);for(n.elements[t]=d,i=t;i--;){for(d=[],a=0;a<o;a++)d.push(n.elements[i][a]-n.elements[t][a]*n.elements[i][t]);n.elements[i]=d}}return Qt.Matrix.create(p)},setElements:function(r){var t,i,n=r.elements||r;if(n[0]&&typeof n[0][0]<"u"){for(t=n.length,this.elements=[];t--;)for(i=n[t].length,this.elements[t]=[];i--;)this.elements[t][i]=n[t][i];return this}var o=n.length;for(this.elements=[],t=0;t<o;t++)this.elements.push([n[t]]);return this}};var cp=function(r){const t=Qt.Matrix.create(r).inverse();return t!==null?t.elements:null};const dp=cp;var Ms=function(r){return dp(r)},md=(r,t)=>t.map(i=>t.map(n=>r[i][n])),vd=function(t){return Number.isFinite(t)},up=vd,hp=function(t){if(!Array.isArray(t))return!1;var i=t.length;if(i===0)return!0;var n=t[0];if(!Array.isArray(n))return!1;var o=n.length;if(o===0)return!1;for(var a=0;a<i;a++){var d=t[a];if(!Array.isArray(d)||d.length!==o)return!1;for(var u=0;u<o;u++)if(!up(d[u]))return!1}return!0},ut={INVALID_ARRAY:"Invalid argument: Received a non-array argument",INVALID_MATRIX:"Invalid argument: Received an invalid matrix",INVALID_SQUARE_MATRIX:"Invalid argument: Received a non-square matrix",INVALID_UPPER_TRIANGULAR_MATRIX:"Invalid argument: Received a non upper-triangular matrix",INVALID_LOWER_TRIANGULAR_MATRIX:"Invalid argument: Received a non lower-triangular matrix",INVALID_EXPONENT:"Invalid argument: Expected a non-negative integer exponent",INVALID_ROW_COL:"Invalid argument: Expected non-negative integer row and column",INVALID_ROW:"Invalid argument: Expected non-negative integer row",INVALID_COLUMN:"Invalid argument: Expected non-negative integer column",INVALID_ROWS_EXPRESSION:"Invalid argument: Received invalid rows expression",INVALID_COLUMNS_EXPRESSION:"Invalid argument: Received invalid columns expression",INVALID_P_NORM:"Invalid argument: Received invalid p-norm",OVERFLOW_INDEX:"Invalid argument: Matrix index overflow",OVERFLOW_COLUMN:"Invalid argument: Column index overflow",OVERFLOW_ROW:"Invalid argument: Row index overflow",NO_UNIQUE_SOLUTION:"Arithmetic Exception: The system has no unique solution",SIZE_INCOMPATIBLE:"Invalid argument: Matrix size-incompatible",SINGULAR_MATRIX:"Arithmetic Exception: The matrix is not invertible",EXPECTED_STRING_NUMBER_AT_POS_1_2:"Invalid argument: Expected a string or a number at arguments[1] and arguments[2]",EXPECTED_ARRAY_OF_NUMBERS_OR_MATRICES:"Invalid argument: Expected either an array of numbers or an array of square matrices"},Rn,rl;function pp(){if(rl)return Rn;rl=1;function r(u,p){return a(u)||o(u,p)||i(u,p)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(u,p){if(!!u){if(typeof u=="string")return n(u,p);var l=Object.prototype.toString.call(u).slice(8,-1);if(l==="Object"&&u.constructor&&(l=u.constructor.name),l==="Map"||l==="Set")return Array.from(u);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return n(u,p)}}function n(u,p){(p==null||p>u.length)&&(p=u.length);for(var l=0,c=new Array(p);l<p;l++)c[l]=u[l];return c}function o(u,p){var l=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(l!=null){var c=[],s=!0,h=!1,f,g;try{for(l=l.call(u);!(s=(f=l.next()).done)&&(c.push(f.value),!(p&&c.length===p));s=!0);}catch(m){h=!0,g=m}finally{try{!s&&l.return!=null&&l.return()}finally{if(h)throw g}}return c}}function a(u){if(Array.isArray(u))return u}function d(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isDiagonal!==void 0)return this._isDiagonal;var p=1/(Math.pow(10,u)*2),l=this._matrix,c=this.size(),s=r(c,2),h=s[0],f=s[1];if(h===0)return this._isDiagonal=!0,!0;for(var g=0;g<h;g++)for(var m=0;m<f;m++)if(g!==m&&Math.abs(l[g][m])>=p)return this.isDiagonal=!1,!1;return this._isDiagonal=!0,!0}return Rn=d,Rn}var On,il;function fp(){if(il)return On;il=1;function r(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isSkewSymmetric!==void 0)return this._isSkewSymmetric;if(!this.isSquare())return this._isSkewSymmetric=!1,!1;var i=this._matrix,n=1/(Math.pow(10,t)*2),o=i.length;if(o===0)return this._isSkewSymmetric=!0,!0;for(var a=0;a<o;a++)for(var d=0;d<a;d++)if(Math.abs(i[a][d]+i[d][a])>=n)return this._isSkewSymmetric=!1,!1;return this._isSkewSymmetric=!0,!0}return On=r,On}var Mn,nl;function gp(){if(nl)return Mn;nl=1;function r(){if(this._isSquare!==void 0)return this._isSquare;var t=this._matrix;return t.length===0?(this._isSquare=!0,!0):(this._isSquare=t.length===t[0].length,this._isSquare)}return Mn=r,Mn}var zn,ol;function mp(){if(ol)return zn;ol=1;function r(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isSymmetric!==void 0)return this._isSymmetric;if(!this.isSquare())return!1;for(var i=this._matrix,n=1/(Math.pow(10,t)*2),o=i.length,a=0;a<o;a++)for(var d=0;d<=a;d++)if(Math.abs(i[a][d]-i[d][a])>=n)return this._isSymmetric=!1,!1;return this._isSymmetric=!0,!0}return zn=r,zn}var Nn,sl;function vp(){if(sl)return Nn;sl=1;function r(u,p){return a(u)||o(u,p)||i(u,p)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(u,p){if(!!u){if(typeof u=="string")return n(u,p);var l=Object.prototype.toString.call(u).slice(8,-1);if(l==="Object"&&u.constructor&&(l=u.constructor.name),l==="Map"||l==="Set")return Array.from(u);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return n(u,p)}}function n(u,p){(p==null||p>u.length)&&(p=u.length);for(var l=0,c=new Array(p);l<p;l++)c[l]=u[l];return c}function o(u,p){var l=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(l!=null){var c=[],s=!0,h=!1,f,g;try{for(l=l.call(u);!(s=(f=l.next()).done)&&(c.push(f.value),!(p&&c.length===p));s=!0);}catch(m){h=!0,g=m}finally{try{!s&&l.return!=null&&l.return()}finally{if(h)throw g}}return c}}function a(u){if(Array.isArray(u))return u}function d(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isLowerTriangular!==void 0)return this._isLowerTriangular;var p=1/(Math.pow(10,u)*2),l=this._matrix,c=this.size(),s=r(c,2),h=s[0],f=s[1];if(h===0)return this._isLowerTriangular=!0,!0;for(var g=0;g<h;g++)for(var m=g+1;m<f;m++)if(Math.abs(l[g][m])>=p)return this._isLowerTriangular=!1,!1;return this._isLowerTriangular=!0,!0}return Nn=d,Nn}var Dn,al;function bp(){if(al)return Dn;al=1;function r(u,p){return a(u)||o(u,p)||i(u,p)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(u,p){if(!!u){if(typeof u=="string")return n(u,p);var l=Object.prototype.toString.call(u).slice(8,-1);if(l==="Object"&&u.constructor&&(l=u.constructor.name),l==="Map"||l==="Set")return Array.from(u);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return n(u,p)}}function n(u,p){(p==null||p>u.length)&&(p=u.length);for(var l=0,c=new Array(p);l<p;l++)c[l]=u[l];return c}function o(u,p){var l=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(l!=null){var c=[],s=!0,h=!1,f,g;try{for(l=l.call(u);!(s=(f=l.next()).done)&&(c.push(f.value),!(p&&c.length===p));s=!0);}catch(m){h=!0,g=m}finally{try{!s&&l.return!=null&&l.return()}finally{if(h)throw g}}return c}}function a(u){if(Array.isArray(u))return u}function d(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isUpperTriangular!==void 0)return this._isUpperTriangular;var p=1/(Math.pow(10,u)*2),l=this._matrix,c=this.size(),s=r(c,2),h=s[0],f=s[1];if(h===0)return this._isUpperTriangular=!0,!0;for(var g=0;g<h;g++)for(var m=0;m<f;m++)if(!(g<=m)&&Math.abs(l[g][m])>=p)return this._isUpperTriangular=!1,!1;return this._isUpperTriangular=!0,!0}return Dn=d,Dn}var Un,ll;function yp(){if(ll)return Un;ll=1;function r(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isOrthogonal!==void 0)return this._isOrthogonal;if(!this.isSquare())return this._isOrthogonal=!1,!1;for(var i=this._matrix,n=1/(Math.pow(10,t)*2),o=i.length,a=0;a<o;a++)for(var d=a;d<o;d++){for(var u=0,p=0;p<o;p++)u+=i[a][p]*i[d][p];if(a===d&&Math.abs(u-1)>=n)return this._isOrthogonal=!1,!1;if(a!==d&&Math.abs(u)>=n)return this._isOrthogonal=!1,!1}return this._isOrthogonal=!0,!0}return Un=r,Un}var qn,cl;function _p(){if(cl)return qn;cl=1;var r=Me(),t=ut,i=t.INVALID_P_NORM,n=t.SINGULAR_MATRIX,o=t.INVALID_SQUARE_MATRIX;function a(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:2;if(d!==1&&d!==2&&d!==1/0&&d!=="F")throw new Error(i);if(!this.isSquare())throw new Error(o);try{var u=r.inverse(this);return u.norm(d)*this.norm(d)}catch(p){if(p.message===n)return 1/0;throw p}}return qn=a,qn}var Fn,dl;function wp(){if(dl)return Fn;dl=1;function r(c,s){return a(c)||o(c,s)||i(c,s)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(c,s){if(!!c){if(typeof c=="string")return n(c,s);var h=Object.prototype.toString.call(c).slice(8,-1);if(h==="Object"&&c.constructor&&(h=c.constructor.name),h==="Map"||h==="Set")return Array.from(c);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return n(c,s)}}function n(c,s){(s==null||s>c.length)&&(s=c.length);for(var h=0,f=new Array(s);h<s;h++)f[h]=c[h];return f}function o(c,s){var h=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(h!=null){var f=[],g=!0,m=!1,y,A;try{for(h=h.call(c);!(g=(y=h.next()).done)&&(f.push(y.value),!(s&&f.length===s));g=!0);}catch(x){m=!0,A=x}finally{try{!g&&h.return!=null&&h.return()}finally{if(m)throw A}}return f}}function a(c){if(Array.isArray(c))return c}var d=Me(),u=ut,p=u.INVALID_SQUARE_MATRIX;function l(){if(!this.isSquare())throw new Error(p);if(this._det!==void 0)return this._det;var c=this._matrix,s=c.length;if(s===0)return this._det=1,1;if(s===1)return this._det=c[0][0],this._det;if(s===2)return this._det=c[0][0]*c[1][1]-c[0][1]*c[1][0],this._det;if(s===3)return this._det=c[0][0]*c[1][1]*c[2][2]+c[0][1]*c[1][2]*c[2][0]+c[0][2]*c[1][0]*c[2][1]-c[0][2]*c[1][1]*c[2][0]-c[0][1]*c[1][0]*c[2][2]-c[0][0]*c[1][2]*c[2][1],this._det;for(var h=d.LU(this,!0),f=r(h,2),g=f[0],m=f[1],y=m._matrix,A=0,x=0;x<s;x++)if(g[x]!==x)for(;g[x]!==x;){var C=g[x];g[x]=g[C],g[C]=C,A++}for(var P=1,T=0;T<s;T++)P*=y[T][T];return A%2===1?(this._det=P*-1,this._det):(this._det=P,P)}return Fn=l,Fn}var Wn,ul;function xp(){if(ul)return Wn;ul=1;function r(){return this.re}return Wn=r,Wn}var Vn,hl;function Ep(){if(hl)return Vn;hl=1;function r(){return this.im}return Vn=r,Vn}var Bn,pl;function Ap(){if(pl)return Bn;pl=1;function r(){return Math.sqrt(Math.pow(this.re,2)+Math.pow(this.im,2))}return Bn=r,Bn}var Hn,fl;function Sp(){if(fl)return Hn;fl=1;function r(){var t=this.re,i=this.im,n=1/(Math.pow(10,15)*2);if(!(Math.abs(t)<n&&Math.abs(i)<n))return t===0?i>0?Math.PI*.5:Math.PI*1.5:i===0?t>0?0:Math.PI:t>0&&i>0?Math.atan(i/t):t<0&&i>0?Math.PI-Math.atan(i/(t*-1)):t<0&&i<0?Math.PI+Math.atan(i*-1/(t*-1)):Math.PI*2-Math.atan(i*-1/t)}return Hn=r,Hn}var jn,gl;function Cp(){if(gl)return jn;gl=1;function r(){var t=this.re,i=this.im;return Number.isNaN(t)||Number.isNaN(i)?"NaN":t===0&&i===0?"0":t===0?i===1?"i":i===-1?"-i":"".concat(i,"i"):i===0?"".concat(t):i>0?i===1?"".concat(t," + i"):"".concat(t," + ").concat(i,"i"):i===-1?"".concat(t," - i"):"".concat(t," - ").concat(Math.abs(i),"i")}return jn=r,jn}var Xn,ml;function kp(){if(ml)return Xn;ml=1;function r(t){if(!(t instanceof this))return!1;var i=t.getReal(),n=t.getImaginary();return!!(Number.isNaN(i)||Number.isNaN(n))}return Xn=r,Xn}var Kn,vl;function $p(){if(vl)return Kn;vl=1;function r(t,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:15;if(!(t instanceof this)||!(i instanceof this))return!1;if(!Number.isInteger(n)||n<0)throw new Error("Invalid argument: Expected a non-negative integer digit");var o=1/(Math.pow(10,n)*2),a=t.getReal(),d=t.getImaginary(),u=i.getReal(),p=i.getImaginary();return Number.isNaN(a)&&Number.isNaN(d)&&Number.isNaN(u)&&Number.isNaN(p)?!0:Math.abs(a-u)<o&&Math.abs(d-p)<o}return Kn=r,Kn}var Gn,bl;function Pp(){if(bl)return Gn;bl=1;function r(t){return t instanceof this?new this(t.getReal(),t.getImaginary()*-1):this.NaN}return Gn=r,Gn}var Yn,yl;function Tp(){if(yl)return Yn;yl=1;function r(t){return t instanceof this?this.divide(this.ONE,t):this.NaN}return Yn=r,Yn}var Zn,_l;function Ip(){if(_l)return Zn;_l=1;function r(t,i){return!(t instanceof this)||!(i instanceof this)?this.NaN:new this(t.re+i.re,t.im+i.im)}return Zn=r,Zn}var Qn,wl;function Lp(){if(wl)return Qn;wl=1;function r(t,i){return!(t instanceof this)||!(i instanceof this)?this.NaN:new this(t.re-i.re,t.im-i.im)}return Qn=r,Qn}var Jn,xl;function Rp(){if(xl)return Jn;xl=1;function r(t,i){if(!(t instanceof this)||!(i instanceof this))return this.NaN;var n=t.re,o=t.im,a=i.re,d=i.im;return new this(n*a-o*d,n*d+o*a)}return Jn=r,Jn}var to,El;function Op(){if(El)return to;El=1;function r(t,i){if(!(t instanceof this)||!(i instanceof this))return this.NaN;var n=t.re,o=t.im,a=i.re,d=i.im;if(Math.abs(a)<this.EPSILON&&Math.abs(d)<this.EPSILON)return this.NaN;var u=Math.pow(a,2)+Math.pow(d,2);return new this((n*a+o*d)/u,(o*a-n*d)/u)}return to=r,to}var eo,Al;function Mp(){if(Al)return eo;Al=1;function r(t){if(!(t instanceof this))return this.NaN;var i=t.getReal(),n=t.getImaginary(),o=Math.exp(i);return new this(o*Math.cos(n),o*Math.sin(n))}return eo=r,eo}var ro,Sl;function zp(){if(Sl)return ro;Sl=1;function r(t){if(!(t instanceof this))return this.NaN;var i=t.getModulus(),n=t.getArgument();return i<this.EPSILON||n===void 0?this.NaN:new this(Math.log(i),n)}return ro=r,ro}var io,Cl;function Np(){if(Cl)return io;Cl=1;function r(t,i){return!(t instanceof this)||typeof i!="number"&&!(i instanceof this)?this.NaN:typeof i=="number"?!Number.isFinite(i)||Number.isNaN(i)?this.NaN:i===0?this.ONE:this.isEqual(t,this.ZERO)?this.ZERO:this.exp(this.multiply(new this(i,0),this.log(t))):i instanceof this?this.exp(this.multiply(i,this.log(t))):this.NaN}return io=r,io}var no,kl;function Dp(){if(kl)return no;kl=1;function r(t){if(!(t instanceof this))return this.NaN;var i=t.getReal(),n=t.getImaginary();return new this(Math.sin(i)*Math.cosh(n),Math.cos(i)*Math.sinh(n))}return no=r,no}var oo,$l;function Up(){if($l)return oo;$l=1;function r(t){if(!(t instanceof this))return this.NaN;var i=t.getReal(),n=t.getImaginary();return new this(Math.cos(i)*Math.cosh(n),Math.sin(i)*Math.sinh(n)*-1)}return oo=r,oo}var so,Pl;function qp(){if(Pl)return so;Pl=1;function r(t){return this.divide(this.sin(t),this.cos(t))}return so=r,so}var ao,Tl;function Fp(){if(Tl)return ao;Tl=1;function r(t){return this.divide(this.ONE,this.sin(t))}return ao=r,ao}var lo,Il;function Wp(){if(Il)return lo;Il=1;function r(t){return this.divide(this.ONE,this.cos(t))}return lo=r,lo}var co,Ll;function Vp(){if(Ll)return co;Ll=1;function r(t){return this.divide(this.ONE,this.tan(t))}return co=r,co}var uo,Rl;function Bp(){if(Rl)return uo;Rl=1;function r(t){return this.multiply(new this(0,-1),this.log(this.add(this.multiply(new this(0,1),t),this.pow(this.subtract(this.ONE,this.pow(t,2)),.5))))}return uo=r,uo}var ho,Ol;function Hp(){if(Ol)return ho;Ol=1;function r(t){return this.subtract(new this(Math.PI/2),this.asin(t))}return ho=r,ho}var po,Ml;function jp(){if(Ml)return po;Ml=1;function r(t){return this.multiply(new this(0,1/2),this.subtract(this.log(this.subtract(this.ONE,this.multiply(new this(0,1),t))),this.log(this.add(this.ONE,this.multiply(new this(0,1),t)))))}return po=r,po}var fo,zl;function Xp(){if(zl)return fo;zl=1;function r(t){return this.asin(this.inverse(t))}return fo=r,fo}var go,Nl;function Kp(){if(Nl)return go;Nl=1;function r(t){return this.acos(this.inverse(t))}return go=r,go}var mo,Dl;function Gp(){if(Dl)return mo;Dl=1;function r(t){return this.atan(this.inverse(t))}return mo=r,mo}var vo,Ul;function Yp(){if(Ul)return vo;Ul=1;function r(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?r=function(o){return typeof o}:r=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},r(i)}function t(i,n){var o=r(i),a=r(n);return o==="number"&&a==="undefined"?Number.isNaN(i)||!Number.isFinite(i)?(this.re=NaN,this.im=NaN,this):(this.re=i,this.im=0,this):o==="number"&&a==="number"?Number.isNaN(i)||Number.isNaN(n)||!Number.isFinite(i)||!Number.isFinite(n)?(this.re=NaN,this.im=NaN,this):(this.re=i,this.im=n,this):(this.re=NaN,this.im=NaN,this)}return t.prototype.getReal=xp(),t.prototype.getImaginary=Ep(),t.prototype.getModulus=Ap(),t.prototype.getArgument=Sp(),t.prototype.toString=Cp(),t.isNaN=kp(),t.isEqual=$p(),t.conjugate=Pp(),t.inverse=Tp(),t.add=Ip(),t.subtract=Lp(),t.multiply=Rp(),t.divide=Op(),t.exp=Mp(),t.log=zp(),t.pow=Np(),t.sin=Dp(),t.cos=Up(),t.tan=qp(),t.csc=Fp(),t.sec=Wp(),t.cot=Vp(),t.asin=Bp(),t.acos=Hp(),t.atan=jp(),t.acsc=Xp(),t.asec=Kp(),t.acot=Gp(),t.NaN=new t(NaN),t.ONE=new t(1),t.ZERO=new t(0),t.PI=new t(Math.PI),t.E=new t(Math.E),t.EPSILON=1/(Math.pow(10,15)*2),vo=t,vo}var bo,ql;function Zp(){if(ql)return bo;ql=1;function r(g,m){return a(g)||o(g,m)||i(g,m)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(g,m){if(!!g){if(typeof g=="string")return n(g,m);var y=Object.prototype.toString.call(g).slice(8,-1);if(y==="Object"&&g.constructor&&(y=g.constructor.name),y==="Map"||y==="Set")return Array.from(g);if(y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))return n(g,m)}}function n(g,m){(m==null||m>g.length)&&(m=g.length);for(var y=0,A=new Array(m);y<m;y++)A[y]=g[y];return A}function o(g,m){var y=g==null?null:typeof Symbol<"u"&&g[Symbol.iterator]||g["@@iterator"];if(y!=null){var A=[],x=!0,C=!1,P,T;try{for(y=y.call(g);!(x=(P=y.next()).done)&&(A.push(P.value),!(m&&A.length===m));x=!0);}catch(R){C=!0,T=R}finally{try{!x&&y.return!=null&&y.return()}finally{if(C)throw T}}return A}}function a(g){if(Array.isArray(g))return g}var d=Yp(),u=Me(),p=ut,l=p.INVALID_SQUARE_MATRIX;function c(){if(!this.isSquare())throw new Error(l);if(this._eigenvalues!==void 0)return this._eigenvalues;var g=this.size()[0],m=[],y=this._digit,A=1/(Math.pow(10,y)*2),x=u.clone(this)._matrix,C=!0,P=!1;s(x,y);for(var T=g-1;T>0;T--){var R=0,z=void 0;if(P){P=!1;continue}for(var N=x[g-1][g-1];;){C?z=Math.abs(x[T][T-1]):z=f(x[T-1][T-1],x[T-1][T],x[T][T-1],x[T][T]).metric;for(var F=0;F<g;F++)x[F][F]-=N;h(x,y);for(var D=0;D<g;D++)x[D][D]+=N;if(C&&z<Math.abs(x[T][T-1])&&R++,C&&Math.abs(x[T][T-1])<A){m[T]=new d(x[T][T]);break}var W=f(x[T-1][T-1],x[T-1][T],x[T][T-1],x[T][T]),H=W.metric,B=W.eigen1,J=W.eigen2;if(!C&&Math.abs(z-H)<A){C=!0,P=!0;var tt=B.re,ht=B.im,at=J.re,pt=J.im;m[T]=new d(tt,ht),m[T-1]=new d(at,pt);break}R>3&&(C=!1)}}return P||(m[0]=new d(x[0][0])),this._eigenvalues=m,m}function s(g,m){for(var y=g.length,A=1/(Math.pow(10,m)*2),x=0;x<y-2;x++){for(var C=0,P=new Array(y-x-1),T=x+1;T<y;T++){var R=g[T][x];C+=Math.pow(R,2),P[T-x-1]=R}if(C=Math.sqrt(C),!(Math.abs(C)<A)){P[0]>=0?P[0]+=C:P[0]-=C;for(var z=0,N=0;N<P.length;N++)z+=Math.pow(P[N],2);z=Math.sqrt(z);for(var F=0;F<P.length;F++)P[F]/=z;for(var D=x;D<y;D++){for(var W=new Array(y-x-1),H=x+1;H<y;H++)W[H-x-1]=g[H][D];for(var B=0,J=0;J<W.length;J++)B+=W[J]*P[J];B*=2;for(var tt=x+1;tt<y;tt++)D===x&&tt!==x+1?g[tt][D]=0:g[tt][D]=W[tt-x-1]-B*P[tt-x-1]}for(var ht=0;ht<y;ht++){for(var at=new Array(y-x-1),pt=x+1;pt<y;pt++)at[pt-x-1]=g[ht][pt];for(var Y=0,j=0;j<at.length;j++)Y+=at[j]*P[j];Y*=2;for(var bt=x+1;bt<y;bt++)g[ht][bt]=at[bt-x-1]-Y*P[bt-x-1]}}}}function h(g,m){for(var y=g.length,A=1/(Math.pow(10,m)*2),x=new Array(y-1),C=0;C<y-1;C++){var P=g[C][C],T=g[C+1][C],R=Math.sqrt(Math.pow(P,2)+Math.pow(T,2));if(!(R<A)){var z=P/R,N=T*-1/R;x[C]=[N,z];for(var F=new Array(y-C),D=new Array(y-C),W=C;W<y;W++)F[W-C]=g[C][W],D[W-C]=g[C+1][W];for(var H=C;H<y;H++)g[C][H]=z*F[H-C]+N*-1*D[H-C],C===H?g[C+1][H]=0:g[C+1][H]=N*F[H-C]+z*D[H-C]}}for(var B=0;B<y-1;B++)if(!!x[B]){for(var J=r(x[B],2),tt=J[0],ht=J[1],at=new Array(B+2),pt=new Array(B+2),Y=0;Y<=B+1;Y++)at[Y]=g[Y][B],pt[Y]=g[Y][B+1];for(var j=0;j<=B+1;j++)g[j][B]=at[j]*ht-pt[j]*tt,g[j][B+1]=at[j]*tt+pt[j]*ht}}function f(g,m,y,A){var x=(g+A)*-1,C=g*A-y*m,P=Math.pow(x,2)-4*C,T,R,z,N;return P>=0?(R=0,N=0,x>=0?T=(x*-1-Math.sqrt(P))/2:T=(x*-1+Math.sqrt(P))/2,z=C/T):(T=-x/2,z=T,R=Math.sqrt(P*-1)/2,N=R*-1),{metric:Math.sqrt(Math.pow(T,2)+Math.pow(R,2)),eigen1:{re:T,im:R},eigen2:{re:z,im:N}}}return bo=c,bo}var yo,Fl;function Qp(){if(Fl)return yo;Fl=1;function r(){if(this._nullity!==void 0)return this._nullity;var t=this.size()[1],i=this.rank();return this._nullity=t-i,this._nullity}return yo=r,yo}var _o,Wl;function Jp(){if(Wl)return _o;Wl=1;function r(c,s){return a(c)||o(c,s)||i(c,s)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(c,s){if(!!c){if(typeof c=="string")return n(c,s);var h=Object.prototype.toString.call(c).slice(8,-1);if(h==="Object"&&c.constructor&&(h=c.constructor.name),h==="Map"||h==="Set")return Array.from(c);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return n(c,s)}}function n(c,s){(s==null||s>c.length)&&(s=c.length);for(var h=0,f=new Array(s);h<s;h++)f[h]=c[h];return f}function o(c,s){var h=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(h!=null){var f=[],g=!0,m=!1,y,A;try{for(h=h.call(c);!(g=(y=h.next()).done)&&(f.push(y.value),!(s&&f.length===s));g=!0);}catch(x){m=!0,A=x}finally{try{!g&&h.return!=null&&h.return()}finally{if(m)throw A}}return f}}function a(c){if(Array.isArray(c))return c}var d=Me(),u=ut,p=u.INVALID_P_NORM;function l(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:2,s=this.size(),h=r(s,2),f=h[0],g=h[1];if(c!==1&&c!==2&&c!==1/0&&c!=="F")throw new Error(p);var m=this._matrix,y=0;if(c===1){for(var A=0;A<g;A++){for(var x=0,C=0;C<f;C++)x+=Math.abs(m[C][A]);x>y&&(y=x)}return y}if(c===2){for(var P=d.transpose(this),T=d.multiply(P,this),R=T.eigenvalues(),z=0;z<R.length;z++){var N=R[z].getModulus();N>y&&(y=N)}return Math.sqrt(y)}if(c===1/0){for(var F=0;F<f;F++){for(var D=0,W=0;W<g;W++)D+=Math.abs(m[F][W]);D>y&&(y=D)}return y}for(var H=0;H<f;H++)for(var B=0;B<g;B++)y+=Math.pow(m[H][B],2);return Math.sqrt(y)}return _o=l,_o}var wo,Vl;function tf(){if(Vl)return wo;Vl=1;function r(p,l){return a(p)||o(p,l)||i(p,l)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(p,l){if(!!p){if(typeof p=="string")return n(p,l);var c=Object.prototype.toString.call(p).slice(8,-1);if(c==="Object"&&p.constructor&&(c=p.constructor.name),c==="Map"||c==="Set")return Array.from(p);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return n(p,l)}}function n(p,l){(l==null||l>p.length)&&(l=p.length);for(var c=0,s=new Array(l);c<l;c++)s[c]=p[c];return s}function o(p,l){var c=p==null?null:typeof Symbol<"u"&&p[Symbol.iterator]||p["@@iterator"];if(c!=null){var s=[],h=!0,f=!1,g,m;try{for(c=c.call(p);!(h=(g=c.next()).done)&&(s.push(g.value),!(l&&s.length===l));h=!0);}catch(y){f=!0,m=y}finally{try{!h&&c.return!=null&&c.return()}finally{if(f)throw m}}return s}}function a(p){if(Array.isArray(p))return p}var d=Me();function u(){if(this._rank!==void 0)return this._rank;var p=1/(Math.pow(10,this._digit)*2),l=d.QR(this)[1],c=l._matrix,s=l.size(),h=r(s,2),f=h[0],g=h[1];if(f===0)return this._rank=1,1;for(var m=0,y=0;y<f;y++)for(var A=y;A<g;A++)if(Math.abs(c[y][A])>=p){m++;break}return this._rank=m,m}return wo=u,wo}var xo,Bl;function ef(){if(Bl)return xo;Bl=1;function r(){if(this._size!==void 0)return this._size;var t=this._matrix;return t.length===0?(this._size=[0,0],this._size):(this._size=[t.length,t[0].length],this._size)}return xo=r,xo}var Eo,Hl;function rf(){if(Hl)return Eo;Hl=1;var r=ut,t=r.INVALID_SQUARE_MATRIX;function i(){var n=this._isSquare!==void 0?this._isSquare:this.isSquare();if(!n)throw new Error(t);if(this._trace!==void 0)return this._trace;for(var o=this._matrix,a=o.length,d=0,u=0;u<a;u++)d+=o[u][u];return this._trace=d,d}return Eo=i,Eo}var Ao,jl;function nf(){if(jl)return Ao;jl=1;function r(c,s){return a(c)||o(c,s)||i(c,s)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(c,s){if(!!c){if(typeof c=="string")return n(c,s);var h=Object.prototype.toString.call(c).slice(8,-1);if(h==="Object"&&c.constructor&&(h=c.constructor.name),h==="Map"||h==="Set")return Array.from(c);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return n(c,s)}}function n(c,s){(s==null||s>c.length)&&(s=c.length);for(var h=0,f=new Array(s);h<s;h++)f[h]=c[h];return f}function o(c,s){var h=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(h!=null){var f=[],g=!0,m=!1,y,A;try{for(h=h.call(c);!(g=(y=h.next()).done)&&(f.push(y.value),!(s&&f.length===s));g=!0);}catch(x){m=!0,A=x}finally{try{!g&&h.return!=null&&h.return()}finally{if(m)throw A}}return f}}function a(c){if(Array.isArray(c))return c}var d=ut,u=d.INVALID_MATRIX,p=d.SIZE_INCOMPATIBLE;function l(c,s){if(!(c instanceof this)||!(s instanceof this))throw new Error(u);var h=c.size(),f=r(h,2),g=f[0],m=f[1],y=s.size(),A=r(y,2),x=A[0],C=A[1];if(g!==x||m!==C)throw new Error(p);var P=c._matrix,T=s._matrix;return this.generate(g,m,function(R,z){return P[R][z]+T[R][z]})}return Ao=l,Ao}var So,Xl;function of(){if(Xl)return So;Xl=1;var r=ut,t=r.INVALID_MATRIX,i=r.INVALID_SQUARE_MATRIX,n=r.SINGULAR_MATRIX,o=Me();function a(u){if(!(u instanceof this))throw new Error(t);if(!u.isSquare())throw new Error(i);var p=u.size()[0];if(p===0)return new o([]);for(var l=1/(Math.pow(10,u._digit)*2),c=this.identity(p)._matrix,s=this.clone(u)._matrix,h=d(p),f=0;f<p;f++){for(var g=f,m=s[h[f]][f];Math.abs(m)<l&&g<p-1;)g++,m=s[h[g]][f];if(Math.abs(m)<l)throw new Error(n);if(f!==g){var y=h[f];h[f]=h[g],h[g]=y}for(var A=h[f],x=0;x<p;x++){var C=h[x];if(x===f){for(var P=0;P<p;P++)P===f&&(s[C][P]=1),P>f&&(s[C][P]/=m),c[C][P]/=m;m=1}if(x!==f&&Math.abs(s[C][f])>=l)for(var T=s[C][f]/m,R=0;R<p;R++)R===f&&(s[C][R]=0),R>f&&(s[C][R]-=T*s[A][R]),c[C][R]-=T*c[A][R]}}for(var z=0;z<p;z++)s[z]=c[h[z]];return new this(s)}function d(u){for(var p=new Array(u),l=0;l<u;l++)p[l]=l;return p}return So=a,So}var Co,Kl;function Bi(){if(Kl)return Co;Kl=1;var r=ut,t=r.INVALID_ROW_COL;return Co=function(n,o){if(!Number.isInteger(n)||n<0||!Number.isInteger(o)||o<0)throw new Error(t);if(n===0||o===0)return[];for(var a=new Array(n),d=0;d<n;d++)a[d]=new Array(o);return a},Co}var ko,Gl;function sf(){if(Gl)return ko;Gl=1;function r(s,h){return a(s)||o(s,h)||i(s,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(s,h){if(!!s){if(typeof s=="string")return n(s,h);var f=Object.prototype.toString.call(s).slice(8,-1);if(f==="Object"&&s.constructor&&(f=s.constructor.name),f==="Map"||f==="Set")return Array.from(s);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return n(s,h)}}function n(s,h){(h==null||h>s.length)&&(h=s.length);for(var f=0,g=new Array(h);f<h;f++)g[f]=s[f];return g}function o(s,h){var f=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(f!=null){var g=[],m=!0,y=!1,A,x;try{for(f=f.call(s);!(m=(A=f.next()).done)&&(g.push(A.value),!(h&&g.length===h));m=!0);}catch(C){y=!0,x=C}finally{try{!m&&f.return!=null&&f.return()}finally{if(y)throw x}}return g}}function a(s){if(Array.isArray(s))return s}var d=Bi(),u=ut,p=u.INVALID_MATRIX,l=u.SIZE_INCOMPATIBLE;function c(s,h){if(!(s instanceof this)||!(h instanceof this))throw new Error(p);var f=s.size(),g=r(f,2),m=g[0],y=g[1],A=h.size(),x=r(A,2),C=x[0],P=x[1];if(y!==C)throw new Error(l);for(var T=s._matrix,R=h._matrix,z=d(m,P),N=0;N<m;N++)for(var F=0;F<P;F++){z[N][F]=0;for(var D=0;D<C;D++)z[N][F]+=T[N][D]*R[D][F]}return new this(z)}return ko=c,ko}var $o,Yl;function af(){if(Yl)return $o;Yl=1;var r=ut,t=r.INVALID_MATRIX,i=r.INVALID_SQUARE_MATRIX,n=r.INVALID_EXPONENT;function o(a,d){if(!(a instanceof this))throw new Error(t);if(!a.isSquare())throw new Error(i);if(!Number.isInteger(d)||d<0)throw new Error(n);var u=a.size()[0];if(d===0)return this.identity(u);if(d===1)return this.clone(a);if(d%2===0){var p=this.pow(a,d/2);return this.multiply(p,p)}var l=this.pow(a,(d-1)/2);return this.multiply(this.multiply(l,l),a)}return $o=o,$o}var Po,Zl;function lf(){if(Zl)return Po;Zl=1;function r(l,c){return a(l)||o(l,c)||i(l,c)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(l,c){if(!!l){if(typeof l=="string")return n(l,c);var s=Object.prototype.toString.call(l).slice(8,-1);if(s==="Object"&&l.constructor&&(s=l.constructor.name),s==="Map"||s==="Set")return Array.from(l);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return n(l,c)}}function n(l,c){(c==null||c>l.length)&&(c=l.length);for(var s=0,h=new Array(c);s<c;s++)h[s]=l[s];return h}function o(l,c){var s=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(s!=null){var h=[],f=!0,g=!1,m,y;try{for(s=s.call(l);!(f=(m=s.next()).done)&&(h.push(m.value),!(c&&h.length===c));f=!0);}catch(A){g=!0,y=A}finally{try{!f&&s.return!=null&&s.return()}finally{if(g)throw y}}return h}}function a(l){if(Array.isArray(l))return l}var d=ut,u=d.SIZE_INCOMPATIBLE,p=d.INVALID_MATRIX;return Po=function(c,s){if(!(c instanceof this)||!(s instanceof this))throw new Error(p);var h=c.size(),f=r(h,2),g=f[0],m=f[1],y=s.size(),A=r(y,2),x=A[0],C=A[1];if(g!==x||m!==C)throw new Error(u);var P=c._matrix,T=s._matrix;return this.generate(g,m,function(R,z){return P[R][z]-T[R][z]})},Po}var To,Ql;function cf(){if(Ql)return To;Ql=1;function r(l,c){return a(l)||o(l,c)||i(l,c)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(l,c){if(!!l){if(typeof l=="string")return n(l,c);var s=Object.prototype.toString.call(l).slice(8,-1);if(s==="Object"&&l.constructor&&(s=l.constructor.name),s==="Map"||s==="Set")return Array.from(l);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return n(l,c)}}function n(l,c){(c==null||c>l.length)&&(c=l.length);for(var s=0,h=new Array(c);s<c;s++)h[s]=l[s];return h}function o(l,c){var s=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(s!=null){var h=[],f=!0,g=!1,m,y;try{for(s=s.call(l);!(f=(m=s.next()).done)&&(h.push(m.value),!(c&&h.length===c));f=!0);}catch(A){g=!0,y=A}finally{try{!f&&s.return!=null&&s.return()}finally{if(g)throw y}}return h}}function a(l){if(Array.isArray(l))return l}var d=ut,u=d.INVALID_MATRIX;function p(l){if(!(l instanceof this))throw new Error(u);var c=l.size(),s=r(c,2),h=s[0],f=s[1],g=l._matrix;return this.generate(f,h,function(m,y){return g[y][m]})}return To=p,To}var Io,Jl;function df(){if(Jl)return Io;Jl=1;function r(g,m){return a(g)||o(g,m)||i(g,m)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(g,m){if(!!g){if(typeof g=="string")return n(g,m);var y=Object.prototype.toString.call(g).slice(8,-1);if(y==="Object"&&g.constructor&&(y=g.constructor.name),y==="Map"||y==="Set")return Array.from(g);if(y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))return n(g,m)}}function n(g,m){(m==null||m>g.length)&&(m=g.length);for(var y=0,A=new Array(m);y<m;y++)A[y]=g[y];return A}function o(g,m){var y=g==null?null:typeof Symbol<"u"&&g[Symbol.iterator]||g["@@iterator"];if(y!=null){var A=[],x=!0,C=!1,P,T;try{for(y=y.call(g);!(x=(P=y.next()).done)&&(A.push(P.value),!(m&&A.length===m));x=!0);}catch(R){C=!0,T=R}finally{try{!x&&y.return!=null&&y.return()}finally{if(C)throw T}}return A}}function a(g){if(Array.isArray(g))return g}var d=Bi(),u=ut,p=u.INVALID_MATRIX,l=u.INVALID_UPPER_TRIANGULAR_MATRIX,c=u.INVALID_SQUARE_MATRIX,s=u.SIZE_INCOMPATIBLE,h=u.NO_UNIQUE_SOLUTION;function f(g,m){if(!(g instanceof this)||!(m instanceof this))throw new Error(p);if(!g.isUpperTriangular())throw new Error(l);if(!g.isSquare())throw new Error(c);var y=g.size()[0],A=m.size(),x=r(A,2),C=x[0],P=x[1],T=g._matrix,R=m._matrix;if(C!==y||P!==1)throw new Error(s);for(var z=1/(Math.pow(10,g._digit)*2),N=0;N<y;N++)if(Math.abs(T[N][N])<z)throw new Error(h);for(var F=d(y,1),D=y-1;D>=0;D--){for(var W=0,H=D+1;H<y;H++)W+=F[H][0]*T[D][H];F[D][0]=(R[D][0]-W)/T[D][D]}return new this(F)}return Io=f,Io}var Lo,tc;function uf(){if(tc)return Lo;tc=1;function r(g,m){return a(g)||o(g,m)||i(g,m)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(g,m){if(!!g){if(typeof g=="string")return n(g,m);var y=Object.prototype.toString.call(g).slice(8,-1);if(y==="Object"&&g.constructor&&(y=g.constructor.name),y==="Map"||y==="Set")return Array.from(g);if(y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))return n(g,m)}}function n(g,m){(m==null||m>g.length)&&(m=g.length);for(var y=0,A=new Array(m);y<m;y++)A[y]=g[y];return A}function o(g,m){var y=g==null?null:typeof Symbol<"u"&&g[Symbol.iterator]||g["@@iterator"];if(y!=null){var A=[],x=!0,C=!1,P,T;try{for(y=y.call(g);!(x=(P=y.next()).done)&&(A.push(P.value),!(m&&A.length===m));x=!0);}catch(R){C=!0,T=R}finally{try{!x&&y.return!=null&&y.return()}finally{if(C)throw T}}return A}}function a(g){if(Array.isArray(g))return g}var d=Bi(),u=ut,p=u.INVALID_MATRIX,l=u.INVALID_LOWER_TRIANGULAR_MATRIX,c=u.INVALID_SQUARE_MATRIX,s=u.SIZE_INCOMPATIBLE,h=u.NO_UNIQUE_SOLUTION;function f(g,m){if(!(g instanceof this)||!(m instanceof this))throw new Error(p);if(!g.isLowerTriangular())throw new Error(l);if(!g.isSquare())throw new Error(c);var y=g.size()[0],A=m.size(),x=r(A,2),C=x[0],P=x[1],T=g._matrix,R=m._matrix;if(y!==C||P!==1)throw new Error(s);for(var z=1/(Math.pow(10,g._digit)*2),N=0;N<y;N++)if(Math.abs(T[N][N])<z)throw new Error(h);for(var F=d(y,1),D=0;D<y;D++){for(var W=0,H=0;H<D;H++)W+=F[H][0]*T[D][H];F[D][0]=(R[D][0]-W)/T[D][D]}return new this(F)}return Lo=f,Lo}var Ro,ec;function hf(){if(ec)return Ro;ec=1;function r(h,f){return a(h)||o(h,f)||i(h,f)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(h,f){if(!!h){if(typeof h=="string")return n(h,f);var g=Object.prototype.toString.call(h).slice(8,-1);if(g==="Object"&&h.constructor&&(g=h.constructor.name),g==="Map"||g==="Set")return Array.from(h);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return n(h,f)}}function n(h,f){(f==null||f>h.length)&&(f=h.length);for(var g=0,m=new Array(f);g<f;g++)m[g]=h[g];return m}function o(h,f){var g=h==null?null:typeof Symbol<"u"&&h[Symbol.iterator]||h["@@iterator"];if(g!=null){var m=[],y=!0,A=!1,x,C;try{for(g=g.call(h);!(y=(x=g.next()).done)&&(m.push(x.value),!(f&&m.length===f));y=!0);}catch(P){A=!0,C=P}finally{try{!y&&g.return!=null&&g.return()}finally{if(A)throw C}}return m}}function a(h){if(Array.isArray(h))return h}var d=ut,u=d.INVALID_MATRIX,p=d.NO_UNIQUE_SOLUTION,l=d.INVALID_SQUARE_MATRIX,c=d.SIZE_INCOMPATIBLE;function s(h,f){if(!(h instanceof this)||!(f instanceof this))throw new Error(u);if(!h.isSquare())throw new Error(l);var g=h.size(),m=r(g,2),y=m[0],A=m[1],x=f.size(),C=r(x,2),P=C[0],T=C[1];if(A!==P||T!==1)throw new Error(c);for(var R=1/(Math.pow(10,h._digit)*2),z=this.LU(h,!0),N=r(z,2),F=N[0],D=N[1],W=D._matrix,H=f._matrix,B=y-1;B>=0;B--)if(Math.abs(W[B][B])<R)throw new Error(p);for(var J=new Array(P),tt=new Array(P),ht=0;ht<P;ht++)J[ht]=H[F[ht]][0];for(var at=0;at<y;at++){for(var pt=0,Y=0;Y<at;Y++)pt+=tt[Y]*W[at][Y];tt[at]=J[at]-pt}for(var j=y-1;j>=0;j--){for(var bt=0,It=j+1;It<y;It++)bt+=W[j][It]*J[It];J[j]=(tt[j]-bt)/W[j][j]}for(var yt=0;yt<P;yt++)tt[yt]=[J[yt]];return new this(tt)}return Ro=s,Ro}var Oo,rc;function pf(){if(rc)return Oo;rc=1;function r(s,h){return a(s)||o(s,h)||i(s,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(s,h){if(!!s){if(typeof s=="string")return n(s,h);var f=Object.prototype.toString.call(s).slice(8,-1);if(f==="Object"&&s.constructor&&(f=s.constructor.name),f==="Map"||f==="Set")return Array.from(s);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return n(s,h)}}function n(s,h){(h==null||h>s.length)&&(h=s.length);for(var f=0,g=new Array(h);f<h;f++)g[f]=s[f];return g}function o(s,h){var f=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(f!=null){var g=[],m=!0,y=!1,A,x;try{for(f=f.call(s);!(m=(A=f.next()).done)&&(g.push(A.value),!(h&&g.length===h));m=!0);}catch(C){y=!0,x=C}finally{try{!m&&f.return!=null&&f.return()}finally{if(y)throw x}}return g}}function a(s){if(Array.isArray(s))return s}var d=ut,u=d.INVALID_MATRIX;function p(s){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(!(s instanceof this))throw new Error(u);for(var f=s.size(),g=r(f,2),m=g[0],y=g[1],A=Math.min(m,y),x=1/(Math.pow(10,s._digit)*2),C=l(m),P=this.clone(s)._matrix,T=0;T<m-1;T++){var R=Math.min(T,y);c(P,C,R,m,y);var z=C[T],N=P[z][R];if(!(Math.abs(N)<x))for(var F=T+1;F<m;F++){var D=C[F],W=P[D][R];if(Math.abs(W)>=x){for(var H=W/N,B=R;B<y;B++)P[D][B]-=H*P[z][B];P[D][R]=H}}}for(var J=new Array(m),tt=0;tt<m;tt++)J[tt]=P[C[tt]];if(h)return[C,new this(J)];var ht=this.generate(m,m,function(Y,j){var bt=C[Y];return j===bt?1:0}),at=this.generate(m,A,function(Y,j){return Y===j?1:Y<j?0:J[Y][j]}),pt=this.generate(A,y,function(Y,j){return Y>j?0:J[Y][j]});return[ht,at,pt]}function l(s){for(var h=new Array(s),f=0;f<s;f++)h[f]=f;return h}function c(s,h,f,g,m){for(var y=Math.min(f,m),A=f,x=Math.abs(s[h[f]][y]),C=f+1;C<g;C++){var P=Math.abs(s[h[C]][y]);P>x&&(A=C,x=P)}var T=h[f];h[f]=h[A],h[A]=T}return Oo=p,Oo}var Mo,ic;function ff(){if(ic)return Mo;ic=1;function r(l,c){return a(l)||o(l,c)||i(l,c)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(l,c){if(!!l){if(typeof l=="string")return n(l,c);var s=Object.prototype.toString.call(l).slice(8,-1);if(s==="Object"&&l.constructor&&(s=l.constructor.name),s==="Map"||s==="Set")return Array.from(l);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return n(l,c)}}function n(l,c){(c==null||c>l.length)&&(c=l.length);for(var s=0,h=new Array(c);s<c;s++)h[s]=l[s];return h}function o(l,c){var s=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(s!=null){var h=[],f=!0,g=!1,m,y;try{for(s=s.call(l);!(f=(m=s.next()).done)&&(h.push(m.value),!(c&&h.length===c));f=!0);}catch(A){g=!0,y=A}finally{try{!f&&s.return!=null&&s.return()}finally{if(g)throw y}}return h}}function a(l){if(Array.isArray(l))return l}var d=ut,u=d.INVALID_MATRIX;function p(l){if(!(l instanceof this))throw new Error(u);for(var c=l.size(),s=r(c,2),h=s[0],f=s[1],g=Math.min(h,f),m=1/(Math.pow(10,l._digit)*2),y=this.clone(l)._matrix,A=this.identity(h)._matrix,x=0;x<g;x++){for(var C=!0,P=x+1;P<h;P++)if(Math.abs(y[P][x])>=m){C=!1;break}if(!C){for(var T=0,R=x;R<h;R++)T+=Math.pow(y[R][x],2);T=Math.sqrt(T);var z=-1;y[x][x]<0&&(z=1);for(var N=y[x][x]-z*T,F=new Array(h-x),D=0;D<h-x;D++)F[D]=y[D+x][x]/N;F[0]=1;for(var W=-1*z*N/T,H=new Array(h-x),B=0;B<h-x;B++){for(var J=new Array(f),tt=0;tt<f;tt++)J[tt]=y[x+B][tt];H[B]=J}for(var ht=x;ht<h;ht++)for(var at=0;at<f;at++){for(var pt=0,Y=0;Y<h-x;Y++)pt+=H[Y][at]*F[Y];y[ht][at]=H[ht-x][at]-W*F[ht-x]*pt}for(var j=new Array(h),bt=0;bt<h;bt++){for(var It=new Array(h-x),yt=0;yt<h-x;yt++)It[yt]=A[bt][x+yt];j[bt]=It}for(var kt=0;kt<h;kt++)for(var Ht=x;Ht<h;Ht++){for(var ze=0,pe=0;pe<h-x;pe++)ze+=j[kt][pe]*F[pe];A[kt][Ht]=j[kt][Ht-x]-W*F[Ht-x]*ze}}}for(var Gt=0;Gt<h;Gt++)for(var ie=0;ie<f;ie++)Gt>ie&&(y[Gt][ie]=0);return[new this(A),new this(y)]}return Mo=p,Mo}var zo,nc;function gf(){if(nc)return zo;nc=1;function r(l,c){return a(l)||o(l,c)||i(l,c)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(l,c){if(!!l){if(typeof l=="string")return n(l,c);var s=Object.prototype.toString.call(l).slice(8,-1);if(s==="Object"&&l.constructor&&(s=l.constructor.name),s==="Map"||s==="Set")return Array.from(l);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return n(l,c)}}function n(l,c){(c==null||c>l.length)&&(c=l.length);for(var s=0,h=new Array(c);s<c;s++)h[s]=l[s];return h}function o(l,c){var s=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(s!=null){var h=[],f=!0,g=!1,m,y;try{for(s=s.call(l);!(f=(m=s.next()).done)&&(h.push(m.value),!(c&&h.length===c));f=!0);}catch(A){g=!0,y=A}finally{try{!f&&s.return!=null&&s.return()}finally{if(g)throw y}}return h}}function a(l){if(Array.isArray(l))return l}var d=ut,u=d.INVALID_MATRIX;function p(l){if(!(l instanceof this))throw new Error(u);var c=l.size(),s=r(c,2),h=s[0],f=s[1],g=l._matrix;return this.generate(h,f,function(m,y){return g[m][y]})}return zo=p,zo}var No,oc;function mf(){if(oc)return No;oc=1;function r(s,h){return a(s)||o(s,h)||i(s,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(s,h){if(!!s){if(typeof s=="string")return n(s,h);var f=Object.prototype.toString.call(s).slice(8,-1);if(f==="Object"&&s.constructor&&(f=s.constructor.name),f==="Map"||f==="Set")return Array.from(s);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return n(s,h)}}function n(s,h){(h==null||h>s.length)&&(h=s.length);for(var f=0,g=new Array(h);f<h;f++)g[f]=s[f];return g}function o(s,h){var f=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(f!=null){var g=[],m=!0,y=!1,A,x;try{for(f=f.call(s);!(m=(A=f.next()).done)&&(g.push(A.value),!(h&&g.length===h));m=!0);}catch(C){y=!0,x=C}finally{try{!m&&f.return!=null&&f.return()}finally{if(y)throw x}}return g}}function a(s){if(Array.isArray(s))return s}var d=ut,u=d.INVALID_ROW_COL,p=d.OVERFLOW_COLUMN,l=d.INVALID_MATRIX;function c(s,h){if(!(s instanceof this))throw new Error(l);if(!Number.isInteger(h)||h<0)throw new Error(u);var f=s.size(),g=r(f,2),m=g[0],y=g[1];if(h>=y)throw new Error(p);var A=s._matrix;return this.generate(m,1,function(x){return A[x][h]})}return No=c,No}var Do,sc;function vf(){if(sc)return Do;sc=1;var r=Me(),t=vd,i=ut,n=i.INVALID_ARRAY,o=i.EXPECTED_ARRAY_OF_NUMBERS_OR_MATRICES,a=i.INVALID_SQUARE_MATRIX;function d(u){if(!Array.isArray(u))throw new Error(n);for(var p=u.length,l,c=0;c<p;c++){var s=u[c];if(!t(s)&&!(s instanceof r))throw new Error(o);if(t(s)){if(!l){l="number";continue}if(l!=="number")throw new Error(o)}else{if(!s.isSquare())throw new Error(a);if(!l){l="square";continue}if(l!=="square")throw new Error(o)}}if(l==="number")return r.generate(p,p,function(C,P){return C===P?u[C]:0});for(var h=0,f=new Array(p),g=0;g<p;g++){var m=u[g].size()[0];h+=m,f[g]=m}var y=0,A=0,x=f[y];return r.generate(h,h,function(C,P){C-A===x&&P-A===x&&(A+=x,y++);var T=C-A,R=P-A;for(x=f[y];x===0;)y++,x=f[y];return T<x&&T>=0&&R<x&&R>=0?u[y]._matrix[T][R]:0})}return Do=d,Do}var Uo,ac;function bf(){if(ac)return Uo;ac=1;function r(l,c){return a(l)||o(l,c)||i(l,c)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(l,c){if(!!l){if(typeof l=="string")return n(l,c);var s=Object.prototype.toString.call(l).slice(8,-1);if(s==="Object"&&l.constructor&&(s=l.constructor.name),s==="Map"||s==="Set")return Array.from(l);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return n(l,c)}}function n(l,c){(c==null||c>l.length)&&(c=l.length);for(var s=0,h=new Array(c);s<c;s++)h[s]=l[s];return h}function o(l,c){var s=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(s!=null){var h=[],f=!0,g=!1,m,y;try{for(s=s.call(l);!(f=(m=s.next()).done)&&(h.push(m.value),!(c&&h.length===c));f=!0);}catch(A){g=!0,y=A}finally{try{!f&&s.return!=null&&s.return()}finally{if(g)throw y}}return h}}function a(l){if(Array.isArray(l))return l}var d=ut,u=d.INVALID_MATRIX;function p(l,c){if(!(l instanceof this))throw new Error(u);var s=l.size(),h=r(s,2),f=h[0],g=h[1],m=l._matrix;return this.generate(f,g,function(y,A){return c(m[y][A])})}return Uo=p,Uo}var qo,lc;function yf(){if(lc)return qo;lc=1;var r=Bi();function t(i,n,o){var a=r(i,n);if(i===0||n===0)return new this([]);for(var d=0;d<i;d++)for(var u=0;u<n;u++)a[d][u]=o(d,u);return new this(a)}return qo=t,qo}var Fo,cc;function _f(){if(cc)return Fo;cc=1;function r(l,c){return a(l)||o(l,c)||i(l,c)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(l,c){if(!!l){if(typeof l=="string")return n(l,c);var s=Object.prototype.toString.call(l).slice(8,-1);if(s==="Object"&&l.constructor&&(s=l.constructor.name),s==="Map"||s==="Set")return Array.from(l);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return n(l,c)}}function n(l,c){(c==null||c>l.length)&&(c=l.length);for(var s=0,h=new Array(c);s<c;s++)h[s]=l[s];return h}function o(l,c){var s=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(s!=null){var h=[],f=!0,g=!1,m,y;try{for(s=s.call(l);!(f=(m=s.next()).done)&&(h.push(m.value),!(c&&h.length===c));f=!0);}catch(A){g=!0,y=A}finally{try{!f&&s.return!=null&&s.return()}finally{if(g)throw y}}return h}}function a(l){if(Array.isArray(l))return l}var d=ut,u=d.INVALID_MATRIX;function p(l){if(!(l instanceof this))throw new Error(u);for(var c=l.size(),s=r(c,2),h=s[0],f=s[1],g=Math.min(h,f),m=l._matrix,y=new Array(g),A=0;A<g;A++)y[A]=m[A][A];return y}return Fo=p,Fo}var Wo,dc;function wf(){if(dc)return Wo;dc=1;function r(t,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;return this.generate(t,i,function(){return Number.parseFloat((Math.random()*(o-n)+n).toFixed(a))})}return Wo=r,Wo}var Vo,uc;function xf(){if(uc)return Vo;uc=1;function r(t){return this.generate(t,t,function(i,n){return i===n?1:0})}return Vo=r,Vo}var Bo,hc;function Ef(){if(hc)return Bo;hc=1;function r(l,c){return a(l)||o(l,c)||i(l,c)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(l,c){if(!!l){if(typeof l=="string")return n(l,c);var s=Object.prototype.toString.call(l).slice(8,-1);if(s==="Object"&&l.constructor&&(s=l.constructor.name),s==="Map"||s==="Set")return Array.from(l);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return n(l,c)}}function n(l,c){(c==null||c>l.length)&&(c=l.length);for(var s=0,h=new Array(c);s<c;s++)h[s]=l[s];return h}function o(l,c){var s=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(s!=null){var h=[],f=!0,g=!1,m,y;try{for(s=s.call(l);!(f=(m=s.next()).done)&&(h.push(m.value),!(c&&h.length===c));f=!0);}catch(A){g=!0,y=A}finally{try{!f&&s.return!=null&&s.return()}finally{if(g)throw y}}return h}}function a(l){if(Array.isArray(l))return l}var d=ut,u=d.INVALID_MATRIX;function p(l,c){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5;if(!(l instanceof this)||!(c instanceof this))throw new Error(u);var h=l.size(),f=r(h,2),g=f[0],m=f[1],y=c.size(),A=r(y,2),x=A[0],C=A[1];if(g!==x||m!==C)return!1;for(var P=1/(Math.pow(10,s)*2),T=l._matrix,R=c._matrix,z=0;z<g;z++)for(var N=0;N<m;N++)if(Math.abs(T[z][N]-R[z][N])>=P)return!1;return!0}return Bo=p,Bo}var Ho,pc;function Af(){if(pc)return Ho;pc=1;function r(s,h){return a(s)||o(s,h)||i(s,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(s,h){if(!!s){if(typeof s=="string")return n(s,h);var f=Object.prototype.toString.call(s).slice(8,-1);if(f==="Object"&&s.constructor&&(f=s.constructor.name),f==="Map"||f==="Set")return Array.from(s);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return n(s,h)}}function n(s,h){(h==null||h>s.length)&&(h=s.length);for(var f=0,g=new Array(h);f<h;f++)g[f]=s[f];return g}function o(s,h){var f=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(f!=null){var g=[],m=!0,y=!1,A,x;try{for(f=f.call(s);!(m=(A=f.next()).done)&&(g.push(A.value),!(h&&g.length===h));m=!0);}catch(C){y=!0,x=C}finally{try{!m&&f.return!=null&&f.return()}finally{if(y)throw x}}return g}}function a(s){if(Array.isArray(s))return s}var d=ut,u=d.INVALID_ROW_COL,p=d.OVERFLOW_ROW,l=d.INVALID_MATRIX;function c(s,h){if(!(s instanceof this))throw new Error(l);if(!Number.isInteger(h)||h<0)throw new Error(u);var f=s.size(),g=r(f,2),m=g[0],y=g[1];if(h>=m)throw new Error(p);var A=s._matrix;return this.generate(1,y,function(x,C){return A[h][C]})}return Ho=c,Ho}var jo,fc;function Sf(){if(fc)return jo;fc=1;function r(A,x){return a(A)||o(A,x)||i(A,x)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(A,x){if(!!A){if(typeof A=="string")return n(A,x);var C=Object.prototype.toString.call(A).slice(8,-1);if(C==="Object"&&A.constructor&&(C=A.constructor.name),C==="Map"||C==="Set")return Array.from(A);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return n(A,x)}}function n(A,x){(x==null||x>A.length)&&(x=A.length);for(var C=0,P=new Array(x);C<x;C++)P[C]=A[C];return P}function o(A,x){var C=A==null?null:typeof Symbol<"u"&&A[Symbol.iterator]||A["@@iterator"];if(C!=null){var P=[],T=!0,R=!1,z,N;try{for(C=C.call(A);!(T=(z=C.next()).done)&&(P.push(z.value),!(x&&P.length===x));T=!0);}catch(F){R=!0,N=F}finally{try{!T&&C.return!=null&&C.return()}finally{if(R)throw N}}return P}}function a(A){if(Array.isArray(A))return A}function d(A){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(C){return typeof C}:d=function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},d(A)}var u=ut,p=u.INVALID_MATRIX,l=u.EXPECTED_STRING_NUMBER_AT_POS_1_2,c=u.INVALID_ROW,s=u.INVALID_COLUMN,h=u.OVERFLOW_ROW,f=u.INVALID_ROWS_EXPRESSION,g=u.INVALID_COLUMNS_EXPRESSION,m=u.OVERFLOW_COLUMN;function y(A,x,C){if(!(A instanceof this))throw new Error(p);var P=d(x),T=d(C);if(P!=="string"&&P!=="number"||T!=="string"&&T!=="number")throw new Error(l);var R=A.size(),z=r(R,2),N=z[0],F=z[1],D,W,H,B;if(P==="number"){if(!Number.isInteger(x)||x<0)throw new Error(c);if(x>=N)throw new Error(h);D=x,W=x}else{var J=x.split(":");if(J.length!==2)throw new Error(f);var tt=r(J,2),ht=tt[0],at=tt[1];if(ht==="")D=0;else{var pt=Number(ht);if(!Number.isInteger(pt)||pt<0)throw new Error(c);if(pt>=N)throw new Error(h);D=pt}if(at==="")W=N-1;else{var Y=Number(at);if(!Number.isInteger(Y)||Y<0)throw new Error(c);if(Y>=N)throw new Error(h);W=Y}if(D>W)throw new Error(f)}if(T==="number"){if(!Number.isInteger(C)||C<0)throw new Error(s);if(C>=F)throw new Error(m);H=C,B=C}else{var j=C.split(":");if(j.length!==2)throw new Error(g);var bt=r(j,2),It=bt[0],yt=bt[1];if(It==="")H=0;else{var kt=Number(It);if(!Number.isInteger(kt)||kt<0)throw new Error(s);if(kt>=F)throw new Error(m);H=kt}if(yt==="")B=F-1;else{var Ht=Number(yt);if(!Number.isInteger(Ht)||Ht<0)throw new Error(s);if(Ht>=F)throw new Error(m);B=Ht}if(H>B)throw new Error(g)}for(var ze=A._matrix,pe=W-D+1,Gt=B-H+1,ie=new Array(pe),Ne=D;Ne<=W;Ne++){for(var gr=new Array(Gt),Ke=H;Ke<=B;Ke++)gr[Ke-H]=ze[Ne][Ke];ie[Ne-D]=gr}return new this(ie)}return jo=y,jo}var Xo,gc;function Cf(){if(gc)return Xo;gc=1;function r(t,i){return i===void 0?this.generate(t,t,function(){return 0}):this.generate(t,i,function(){return 0})}return Xo=r,Xo}var Ko,mc;function kf(){if(mc)return Ko;mc=1;var r=ut,t=r.SIZE_INCOMPATIBLE;function i(n,o,a){if(o*a!==n.length)throw new Error(t);return this.generate(o,a,function(d,u){return n[d*a+u]})}return Ko=i,Ko}var Go,vc;function $f(){if(vc)return Go;vc=1;function r(u,p){return a(u)||o(u,p)||i(u,p)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(u,p){if(!!u){if(typeof u=="string")return n(u,p);var l=Object.prototype.toString.call(u).slice(8,-1);if(l==="Object"&&u.constructor&&(l=u.constructor.name),l==="Map"||l==="Set")return Array.from(u);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return n(u,p)}}function n(u,p){(p==null||p>u.length)&&(p=u.length);for(var l=0,c=new Array(p);l<p;l++)c[l]=u[l];return c}function o(u,p){var l=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(l!=null){var c=[],s=!0,h=!1,f,g;try{for(l=l.call(u);!(s=(f=l.next()).done)&&(c.push(f.value),!(p&&c.length===p));s=!0);}catch(m){h=!0,g=m}finally{try{!s&&l.return!=null&&l.return()}finally{if(h)throw g}}return c}}function a(u){if(Array.isArray(u))return u}function d(){for(var u=this.size(),p=r(u,2),l=p[0],c=p[1],s=l*c,h=new Array(s),f=0;f<l;f++)for(var g=0;g<c;g++)h[f*c+g]=this._matrix[f][g];return h}return Go=d,Go}var Yo,bc;function Pf(){if(bc)return Yo;bc=1;function r(c,s){return a(c)||o(c,s)||i(c,s)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(c,s){if(!!c){if(typeof c=="string")return n(c,s);var h=Object.prototype.toString.call(c).slice(8,-1);if(h==="Object"&&c.constructor&&(h=c.constructor.name),h==="Map"||h==="Set")return Array.from(c);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return n(c,s)}}function n(c,s){(s==null||s>c.length)&&(s=c.length);for(var h=0,f=new Array(s);h<s;h++)f[h]=c[h];return f}function o(c,s){var h=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(h!=null){var f=[],g=!0,m=!1,y,A;try{for(h=h.call(c);!(g=(y=h.next()).done)&&(f.push(y.value),!(s&&f.length===s));g=!0);}catch(x){m=!0,A=x}finally{try{!g&&h.return!=null&&h.return()}finally{if(m)throw A}}return f}}function a(c){if(Array.isArray(c))return c}var d=ut,u=d.INVALID_ROW_COL,p=d.OVERFLOW_INDEX;function l(c,s){if(!Number.isInteger(c)||c<0||!Number.isInteger(s)||s<0)throw new Error(u);var h=this._matrix,f=this.size(),g=r(f,2),m=g[0],y=g[1];if(c>=m||s>=y)throw new Error(p);return h[c][s]}return Yo=l,Yo}var Zo,yc;function Tf(){if(yc)return Zo;yc=1;function r(u,p){return a(u)||o(u,p)||i(u,p)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(u,p){if(!!u){if(typeof u=="string")return n(u,p);var l=Object.prototype.toString.call(u).slice(8,-1);if(l==="Object"&&u.constructor&&(l=u.constructor.name),l==="Map"||l==="Set")return Array.from(u);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return n(u,p)}}function n(u,p){(p==null||p>u.length)&&(p=u.length);for(var l=0,c=new Array(p);l<p;l++)c[l]=u[l];return c}function o(u,p){var l=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(l!=null){var c=[],s=!0,h=!1,f,g;try{for(l=l.call(u);!(s=(f=l.next()).done)&&(c.push(f.value),!(p&&c.length===p));s=!0);}catch(m){h=!0,g=m}finally{try{!s&&l.return!=null&&l.return()}finally{if(h)throw g}}return c}}function a(u){if(Array.isArray(u))return u}function d(){for(var u=this._matrix,p=this.size(),l=r(p,2),c=l[0],s=l[1],h="",f=0;f<c;f++){for(var g=0;g<s;g++)h+=u[f][g].toString(),g!==s-1&&(h+=" ");f!==c-1&&(h+=`
`)}return h}return Zo=d,Zo}var Qo,_c;function Me(){if(_c)return Qo;_c=1;var r=hp,t=ut,i=t.INVALID_MATRIX;function n(o){if(!r(o))throw new Error(i);this._matrix=o,this._digit=8}return Qo=n,n.prototype.isDiagonal=pp(),n.prototype.isSkewSymmetric=fp(),n.prototype.isSquare=gp(),n.prototype.isSymmetric=mp(),n.prototype.isLowerTriangular=vp(),n.prototype.isUpperTriangular=bp(),n.prototype.isOrthogonal=yp(),n.prototype.cond=_p(),n.prototype.det=wp(),n.prototype.eigenvalues=Zp(),n.prototype.nullity=Qp(),n.prototype.norm=Jp(),n.prototype.rank=tf(),n.prototype.size=ef(),n.prototype.trace=rf(),n.add=nf(),n.inverse=of(),n.multiply=sf(),n.pow=af(),n.subtract=lf(),n.transpose=cf(),n.backward=df(),n.forward=uf(),n.solve=hf(),n.LU=pf(),n.QR=ff(),n.clone=gf(),n.column=mf(),n.diag=vf(),n.elementwise=bf(),n.generate=yf(),n.getDiag=_f(),n.getRandomMatrix=wf(),n.identity=xf(),n.isEqual=Ef(),n.row=Af(),n.submatrix=Sf(),n.zero=Cf(),n.fromArray=kf(),n.prototype.flatten=$f(),n.prototype.entry=Pf(),n.prototype.toString=Tf(),Qo}const If=.1,Lf=Me(),Rf=Xr,Of=function(r,t=1e-10){new Lf(r).eigenvalues().forEach(o=>{if(o<=-t)throw console.log(r,o),new Error(`Eigenvalue should be positive (actual: ${o})`)}),console.log("is definite positive",r)},Mf=function(r,t="checkSymetric"){r.forEach((i,n)=>i.forEach((o,a)=>{if(n===a&&o<0)throw new Error(`[${t}] Variance[${a}] should be positive (actual: ${o})`);if(Math.abs(o)>Math.sqrt(r[n][n]*r[a][a]))throw console.log(r),new Error(`[${t}] Covariance[${n}][${a}] should verify Cauchy Schwarz Inequality (expected: |x| <= sqrt(${r[n][n]} * ${r[a][a]}) actual: ${o})`);if(Math.abs(o-r[a][n])>If)throw new Error(`[${t}] Covariance[${n}][${a}] should equal Covariance[${a}][${n}]  (actual diff: ${Math.abs(o-r[a][n])})  = ${o} - ${r[a][n]}
${r.join(`
`)} is invalid`)}))};var Hi=function({covariance:r,eigen:t=!1}){Rf(r),Mf(r),t&&Of(r)};const wc=Wi,Jo=qi,ve=Vi,xc=Ms,zf=Fi,Nf=md,Df=dd,Ec=Xr,Uf=Hi;class Mr{constructor({mean:t,covariance:i,index:n}){this.mean=t,this.covariance=i,this.index=n}check(t){this.constructor.check(this,t)}static check(t,{dimension:i=null,title:n=null,eigen:o}={}){if(!(t instanceof Mr))throw new TypeError(`The argument is not a state 
Tips: maybe you are using 2 different version of kalman-filter in your npm deps tree`);const{mean:a,covariance:d}=t,u=a.length;if(typeof i=="number"&&u!==i)throw new Error(`[${n}] State.mean ${a} with dimension ${u} does not match expected dimension (${i})`);Ec(a,[u,1],n?n+"-mean":"mean"),Ec(d,[u,u],n?n+"-covariance":"covariance"),Uf({covariance:d,eigen:o})}static matMul({state:t,matrix:i}){const n=ve(ve(i,t.covariance),Jo(i)),o=ve(i,t.mean);return new Mr({mean:o,covariance:n,index:t.index})}subState(t){return new Mr({mean:t.map(n=>this.mean[n]),covariance:Nf(this.covariance,t),index:this.index})}rawDetailedMahalanobis(t){const i=wc(this.mean,t);this.check();const n=xc(this.covariance);if(n===null)throw this.check({eigen:!0}),new Error(`Cannot invert covariance ${JSON.stringify(this.covariance)}`);const o=Jo(i),a=Math.sqrt(ve(ve(o,n),i));if(Number.isNaN(a))throw console.log({diff:i,covarianceInvert:n,this:this,point:t},ve(ve(o,n),i)),new Error("mahalanobis is NaN");return{diff:i,covarianceInvert:n,value:a}}detailedMahalanobis({kf:t,observation:i,obsIndexes:n}){if(i.length!==t.observation.dimension)throw new Error(`Mahalanobis observation ${i} (dimension: ${i.length}) does not match with kf observation dimension (${t.observation.dimension})`);let o=Df({observation:i,dimension:i.length});const a=t.getValue(t.observation.stateProjection,{});let d=this.constructor.matMul({state:this,matrix:a});return Array.isArray(n)&&(d=d.subState(n),o=n.map(u=>o[u])),d.rawDetailedMahalanobis(o)}mahalanobis(t){const i=this.detailedMahalanobis(t).value;if(Number.isNaN(i))throw new TypeError("mahalanobis is NaN");return i}obsBhattacharyya({kf:t,state:i,obsIndexes:n}){const o=t.getValue(t.observation.stateProjection,{});let a=this.constructor.matMul({state:this,matrix:o}),d=this.constructor.matMul({state:i,matrix:o});return Array.isArray(n)&&(a=a.subState(n),d=d.subState(n)),a.bhattacharyya(d)}bhattacharyya(t){const i=this,n=zf([i.covariance,t.covariance],([d,u])=>(d+u)/2);let o;try{o=xc(n)}catch(d){throw console.log("Cannot invert",n),d}const a=wc(i.mean,t.mean);return ve(Jo(a),ve(o,a))[0][0]}}var zs=Mr;const qf=Fi;var bd=function(...r){return qf(r,t=>t.reduce((i,n)=>i===null||n===null?null:i+n,0))};const re=Vi,Ac=qi,ts=bd,Ff=Ms,Sc=Wi,Wf=Xe,Pr=zs,es=Xr,Vf={info:(...r)=>console.log(...r),debug:()=>{},warn:(...r)=>console.log(...r),error:(...r)=>console.log(...r)};class Bf{constructor({dynamic:t,observation:i,logger:n=Vf}){this.dynamic=t,this.observation=i,this.logger=n}getValue(t,i){return typeof t=="function"?t(i):t}getInitState(){const{mean:t,covariance:i,index:n}=this.dynamic.init;return new Pr({mean:t,covariance:i,index:n})}getPredictedCovariance(t={}){let{previousCorrected:i,index:n}=t;i=i||this.getInitState();const o=Object.assign({},{previousCorrected:i,index:n},t),a=this.getValue(this.dynamic.transition,o),d=Ac(a),u=re(a,i.covariance),p=re(u,d),l=this.getValue(this.dynamic.covariance,o),c=ts(l,p);return es(c,[this.dynamic.dimension,this.dynamic.dimension],"predicted.covariance"),c}predict(t={}){let{previousCorrected:i,index:n}=t;i=i||this.getInitState(),typeof n!="number"&&typeof i.index=="number"&&(n=i.index+1),Pr.check(i,{dimension:this.dynamic.dimension});const o=Object.assign({},{previousCorrected:i,index:n},t),a=this.getValue(this.dynamic.transition,o);es(a,[this.dynamic.dimension,this.dynamic.dimension],"dynamic.transition");const d=re(a,i.mean),u=this.getPredictedCovariance(o),p=new Pr({mean:d,covariance:u,index:n});return this.logger.debug("Prediction done",p),p}getGain(t){let{predicted:i,stateProjection:n}=t;const o=Object.assign({},{index:i.index},t);n=n||this.getValue(this.observation.stateProjection,o);const a=this.getValue(this.observation.covariance,o);es(a,[this.observation.dimension,this.observation.dimension],"observation.covariance");const d=Ac(n),u=re(re(n,i.covariance),d),p=ts(u,a);return re(re(i.covariance,d),Ff(p))}getCorrectedCovariance(t){let{predicted:i,optimalKalmanGain:n,stateProjection:o}=t;const a=Wf(i.covariance.length);if(!o){const d=Object.assign({},{index:i.index},t);o=this.getValue(this.observation.stateProjection,d)}return n||(n=this.getGain(Object.assign({stateProjection:o},t))),re(Sc(a,re(n,o)),i.covariance)}correct(t){const{predicted:i,observation:n}=t;if(Pr.check(i,{dimension:this.dynamic.dimension}),!n)throw new Error("no measure available");const o=Object.assign({},{observation:n,predicted:i,index:i.index},t),a=this.getValue(this.observation.stateProjection,o),d=this.getGain(Object.assign({predicted:i,stateProjection:a},t)),u=Sc(n,re(a,i.mean)),p=ts(i.mean,re(d,u));if(Number.isNaN(p[0][0]))throw console.log({optimalKalmanGain:d,innovation:u,predicted:i}),new TypeError("Mean is NaN after correction");const l=this.getCorrectedCovariance(Object.assign({predicted:i,optimalKalmanGain:d,stateProjection:a},t)),c=new Pr({mean:p,covariance:l,index:i.index});return this.logger.debug("Correction done",c),c}}var Hf=Bf;const jf=dd,Xf=Kh,Kf=Gh,Gf=Zh,Yf=Jh,si=tp,Zf=ip,ai=ld,Qf=gd,li=zs,Cc=cd,Jf=Hf,tg=function(r){return typeof r=="string"?{name:r}:{name:"constant-position"}},eg=function(r){return typeof r=="number"?{name:"sensor",sensorDimension:r}:typeof r=="string"?{name:r}:{name:"sensor"}},rg=function({observation:r,dynamic:t}){(typeof r!="object"||r===null)&&(r=eg(r)),(typeof t!="object"||t===null)&&(t=tg(t)),typeof r.name=="string"&&(r=Cc.buildObservation(r)),typeof t.name=="string"&&(t=Cc.buildDynamic(t,r));const i=Xf({observation:r,dynamic:t}),n=Kf(i),o=Gf(n);return Yf(o)},ig=function(r){const{observation:t,dynamic:i}=r;return Zf(r,{observation:{stateProjection:si(ai(t.stateProjection)),covariance:si(ai(t.covariance,{dimension:t.dimension}))},dynamic:{transition:si(ai(i.transition)),covariance:si(ai(i.covariance,{dimension:i.dimension}))}})};class ng extends Jf{constructor(t={}){const i=rg(t),n=ig(i);super(Object.assign({},t,n))}correct(t){const i=jf({observation:t.observation,dimension:this.observation.dimension});return super.correct(Object.assign({},t,{observation:i}))}filter(t){const i=super.predict(t);return this.correct(Object.assign({},t,{predicted:i}))}filterAll(t){const{mean:i,covariance:n,index:o}=this.dynamic.init;let a=new li({mean:i,covariance:n,index:o});const d=[];for(const u of t){const p=this.predict({previousCorrected:a});a=this.correct({predicted:p,observation:u}),d.push(a.mean.map(l=>l[0]))}return d}asymptoticStateCovariance(t=100,i=1e-6){let n=super.getInitState(),o;const a=[];for(let d=0;d<t;d++)if(o=new li({mean:null,covariance:super.getPredictedCovariance({previousCorrected:n})}),n=new li({mean:null,covariance:super.getCorrectedCovariance({predicted:o})}),a.push(n.covariance),Qf(n.covariance,a[d-1])<i)return a[d];throw new Error("The state covariance does not converge asymptotically")}asymptoticGain(t=1e-6){const i=this.asymptoticStateCovariance(t),n=new li({mean:new Array(i.length).fill(0).map(()=>[0]),covariance:i});return super.getGain({previousCorrected:n})}}var og=ng,sg=function({measures:r,averages:t}){const i=r.length,n=r[0].length;if(i===0)throw new Error("Cannot find covariance for empty sample");return new Array(n).fill(1).map((o,a)=>new Array(n).fill(1).map((d,u)=>{const l=r.map((c,s)=>(c[a]-t[s][a])*(c[u]-t[s][u])).reduce((c,s)=>c+s)/i;if(Number.isNaN(l))throw new TypeError("result is NaN");return l}))};const ag=Hi;var lg=function({correlation:r,variance:t}){return ag({covariance:r}),r.map((i,n)=>i.map((o,a)=>o*Math.sqrt(t[a]*t[n])))};const cg=Hi;var dg=function(r){cg({covariance:r});const t=r.map((i,n)=>r[n][n]);return{variance:t,correlation:r.map((i,n)=>i.map((o,a)=>o/Math.sqrt(t[a]*t[n])))}},ug={add:bd,diag:Os,"distance-mat":gd,"elem-wise":Fi,identity:Xe,invert:Ms,"mat-mul":Vi,"pad-with-zeros":ud,sub:Wi,"sub-square-matrix":md,sum:fd,trace:pd,transpose:qi,zeros:sd};const ci=cd;var kc={registerDynamic:ci.registerDynamic,KalmanFilter:og,registerObservation:ci.registerObservation,buildObservation:ci.buildObservation,buildDynamic:ci.buildDynamic,getCovariance:sg,State:zs,checkCovariance:Hi,correlationToCovariance:lg,covarianceToCorrelation:dg,linalgebra:ug};class hg{constructor(t){this._elements=[],this._maxSize=t}clear(){this._elements=[]}push(t){this._elements.length>=this._maxSize&&this._elements.shift(),this._elements.push(t)}avg(){return this._elements.length===0?0:this._elements.reduce(function(i,n){return i+n},0)/this._elements.length}}function yd(){return typeof new PointerEvent("pointerdown").penCustomizationsDetails<"u"}class Ns extends Jt{constructor(){super();xt(this,"_addPenCustomizations",async(i,n)=>{let o=n;return this.drawWithCustomizations&&yd()&&(o.preferredColor=await i.penCustomizationsDetails.getPreferredInkingColor(),o.preferredStyle=await i.penCustomizationsDetails.getPreferredInkingStyle(),o.preferredWidth=await i.penCustomizationsDetails.getPreferredInkingWidth()),Promise.resolve(o)});xt(this,"_onPointerDown",async i=>{if(this._pointerDown&&i.pointerId!==this._pointerId)return;this._app.currentEvent=i,this._pointerDown=!0,this._pointerId=i.pointerId;let n=this._getPoint(i);n=await this._addPenCustomizations(i,n),this._renderer.beginPath(n),this._draw()});xt(this,"_onPointerMove",async i=>{if(i.clientY<0||i.clientX<0||i.clientX>window.innerWidth||i.clientY>window.innerHeight){this._pointerDown=!1;return}if(this._pointerDown&&i.pointerId===this._pointerId){let n=[],o=[];if(i.getCoalescedEvents&&this._drawCoalescedEvents)if(i.getCoalescedEvents().length>0)for(let a of i.getCoalescedEvents()){let d=this._getPoint(a);d.coalesced=!0,d=await this._addPenCustomizations(a,d),n.push(d)}else{let a=this._getPoint(e);a=await this._addPenCustomizations(i,a),n.push(a)}else{let a=this._getPoint(i);a=await this._addPenCustomizations(i,a),n.push(a)}if(n[n.length-1].coalesced=!1,this._drawPredictedEvents){for(let a of this._getPrediction(i))o.push(a);this._numOfPredictionPoints>0&&this._numOfPredictionPoints<=10&&(o=o.slice(0,this._numOfPredictionPoints))}this._renderer.addToPath(n,o),this._draw(),i.preventDefault()}this._app.currentEvent=i});xt(this,"_onPointerUp",async i=>{if(this._app.currentEvent=i,this._pointerDown){if(i.pointerId!==this._pointerId)return;let n=this._getPoint(i);n=await this._addPenCustomizations(i,n),this._renderer.endPath(),this.paths=this._renderer.paths,this._pointerDown=!1,this._pointerId=null,this._resetPrediction()}});xt(this,"_onResize",async i=>{const n=window.getComputedStyle(this),o=parseInt(n.width,10),a=parseInt(n.height,10);o>0&&a>0&&(this._canvas.width=this._predictionCanvas.width=o,this._canvas.height=this._predictionCanvas.height=a,this._renderer.resize(o,a))});this._app=null,this._canvas=null,this._predictionCanvas=null,this._desynchronized=!1,this._renderer=null,this._pointerRawUpdate=!1,this._pointerDown=!1,this._currentLineColor="#000000",this._currentLineStyle="INK",this._currentLineWidth=1,this._drawCoalescedEvents=!1,this._drawPointsOnly=!1,this._drawPredictedEvents=!1,this._drawWithCustomizations=!1,this._drawWithPressure=!1,this._highlightPredictedEvents=!1,this._predictionType="custom",this._numOfPredictionPoints=1,this._kalmanFilterDataSize=6,this._kalmanFilter=new kc.KalmanFilter({observation:this._kalmanFilterDataSize}),this._correctedPrediction=null}static get properties(){return{app:{type:Object,reflectToAttribute:!0,attribute:!0},canvas:{type:Object,reflectToAttribute:!0,attribute:!0},predictionCanvas:{type:Object,reflectToAttribute:!0,attribute:!0},desynchronized:{type:Boolean,reflectToAttribute:!0,attribute:!0},renderer:{type:Object,reflectToAttribute:!0,attribute:!0},pointerRawUpdate:{type:Boolean,reflectToAttribute:!0,attribute:!0},currentLineColor:{type:String,reflectToAttribute:!0,attribute:!0},currentLineStyle:{type:String,reflectToAttribute:!0,attribute:!0},currentLineWidth:{type:String,reflectToAttribute:!0,attribute:!0},drawCoalescedEvents:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawPointsOnly:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawPredictedEvents:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawWithCustomizations:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawWithPressure:{type:Boolean,reflectToAttribute:!0,attribute:!0},highlightPredictedEvents:{type:Boolean,reflectToAttribute:!0,attribute:!0},numOfPredictionPoints:{type:Number,reflectToAttribute:!0,attribute:!0}}}set app(i){let n=this._app;this._app=i,this.requestUpdate("app",n)}get app(){return this._app}set canvas(i){let n=this._canvas;this._canvas=i,this.requestUpdate("canvas",n)}get canvas(){return this._canvas}set predictionCanvas(i){let n=this._predictionCanvas;this._predictionCanvas=i,this.requestUpdate("predictionCanvas",n)}get predictionCanvas(){return this._predictionCanvas}set desynchronized(i){let n=this._desynchronized;this._desynchronized=i,this.requestUpdate("desynchronized",n)}get desynchronized(){return this._desynchronized}set renderer(i){let n=this._renderer;this._renderer=i,this.requestUpdate("renderer",n),this._renderer&&(this._renderer.currentLineColor=this._currentLineColor,this._renderer.currentLineStyle=this._currentLineStyle,this._renderer.currentLineWidth=this._currentLineWidth,this._renderer.drawCoalescedEvents=this._drawCoalescedEvents,this._renderer.drawPointsOnly=this._drawPointsOnly,this._renderer.drawPredictedEvents=this._drawPredictedEvents,this._renderer.drawWithCustomizations=this._drawWithCustomizations,this._renderer.drawWithPressure=this._drawWithPressure,this._renderer.highlightPredictedEvents=this._highlightPredictedEvents,this._renderer.predictionType=this._predictionType,this._renderer.numOfPredictionPoints=this._numOfPredictionPoints)}get renderer(){return this._renderer}set pointerRawUpdate(i){let n=this._pointerRawUpdate;this._pointerRawUpdate=i,this.requestUpdate("pointerRawUpdate",n),n!==i&&this._canvas&&(i?(this._canvas.onpointermove=null,this._canvas.onpointerrawupdate=this._onPointerMove.bind(this)):(this._canvas.onpointerrawupdate=null,this._canvas.onpointermove=this._onPointerMove.bind(this)))}get pointerRawUpdate(){return this._pointerRawUpdate}set currentLineColor(i){let n=this._currentLineColor;this._currentLineColor=i,this._renderer&&(this._renderer.currentLineColor=i),this.requestUpdate("currentLineColor",n)}get currentLineColor(){return this._currentLineColor}set currentLineStyle(i){let n=this._currentLineStyle;this._currentLineStyle=i,this._renderer&&(this._renderer.currentLineStyle=i),this.requestUpdate("currentLineStyle",n)}get currentLineStyle(){return this._currentLineStyle}set currentLineWidth(i){let n=this._currentLineWidth;this._currentLineWidth=i,this._renderer&&(this._renderer.currentLineWidth=i),this.requestUpdate("currentLineWidth",n)}get currentLineWidth(){return this._currentLineWidth}set drawCoalescedEvents(i){let n=this._drawCoalescedEvents;this._drawCoalescedEvents=i,this._renderer&&(this._renderer.drawCoalescedEvents=i),this.requestUpdate("drawCoalescedEvents",n)}get drawCoalescedEvents(){return this._drawCoalescedEvents}set drawPointsOnly(i){let n=this._drawPointsOnly;this._drawPointsOnly=i,this._renderer&&(this._renderer.drawPointsOnly=i),this.requestUpdate("drawPointsOnly",n)}get drawPointsOnly(){return this._drawPointsOnly}set drawPredictedEvents(i){let n=this._drawPredictedEvents;this._drawPredictedEvents=i,this._renderer&&(this._renderer.drawPredictedEvents=i),this.requestUpdate("drawPredictedEvents",n)}get drawPredictedEvents(){return this._drawPredictedEvents}set drawWithCustomizations(i){let n=this._drawWithCustomizations;this._drawWithCustomizations=i,this._renderer&&(this._renderer.drawWithCustomizations=i),this.requestUpdate("drawWithCustomizations",n)}get drawWithCustomizations(){return this._drawWithCustomizations}set drawWithPressure(i){let n=this._drawWithPressure;this._drawWithPressure=i,this._renderer&&(this._renderer.drawWithPressure=i),this.requestUpdate("drawWithPressure",n)}get drawWithPressure(){return this._drawWithPressure}set highlightPredictedEvents(i){let n=this._highlightPredictedEvents;this._highlightPredictedEvents=i,this._renderer&&(this._renderer.highlightPredictedEvents=i),this.requestUpdate("highlightPredictedEvents",n)}get highlightPredictedEvents(){return this._highlightPredictedEvents}set predictionType(i){let n=this._predictionType;this._predictionType=i,this._renderer&&(this._renderer.predictionType=i),this.requestUpdate("predictionType",n)}get predictionType(){return this._predictionType}set numOfPredictionPoints(i){let n=this._numOfPredictionPoints;this._numOfPredictionPoints=i,this._renderer&&(this._renderer.numOfPredictionPoints=i),this.requestUpdate("numOfPredictionPoints",n)}get numOfPredictionPoints(){return this._numOfPredictionPoints}set paths(i){let n=this._paths;this._paths=i;let o=new CustomEvent("paths-changed",{detail:{paths:i},bubbles:!0,composed:!0});this.dispatchEvent(o),this.requestUpdate("paths",n)}get paths(){return this._paths}firstUpdated(){const i=window.getComputedStyle(this);this._canvas=this.shadowRoot.querySelector("#canvas"),this._predictionCanvas=this.shadowRoot.querySelector("#prediction-canvas"),this._canvas.width=this._predictionCanvas.width=parseInt(i.width,10),this._canvas.height=this._predictionCanvas.height=parseInt(i.height,10),this._canvas.style.left=this._predictionCanvas.style.left=i.left+"px",this._canvas.style.top=this._predictionCanvas.style.top=i.top+"px",this._canvas.onpointerdown=this._onPointerDown.bind(this),this._pointerRawUpdate?this._canvas.onpointerrawupdate=this._onPointerMove.bind(this):this._canvas.onpointermove=this._onPointerMove.bind(this),this._canvas.onpointerup=this._onPointerUp.bind(this),window.addEventListener("resize",this._onResize)}undoPath(){this._renderer.undoPath(),this.paths=this._renderer.paths,this._draw()}redoPath(){this._renderer.redoPath(),this.paths=this._renderer.paths,this._draw()}deleteAllPaths(){this._renderer.deleteAllPaths(),this.paths=this._renderer.paths,this._draw()}_getPrediction(i){let n=[];if(this._predictionType==="browser"&&i.getPredictedEvents){for(let o of i.getPredictedEvents())n.push(this._getPoint(o));return n}else return this._getCustomPrediction(i)}_getCustomPrediction(i){let n=i.getCoalescedEvents();if(n.length<1)return[];let o=[],a=this._getPoint(this._app.currentEvent),d=0,u=0,p=0,l=0,c=0,s=0,h=0,f=0,g=null;for(let m of n){if(g=this._getPoint(m),g.timeStamp===a.timeStamp)break;let y=g.timeStamp-a.timeStamp;p=g.x-a.x,l=g.y-a.y,c=p/y,s=l/y,h=c/y,f=s/y,p<5&&l<5?d=0:p<10&&l<10?d=1:p<20&&l<20?d=8:d=10;let A=this._correctedPrediction,x=this._kalmanFilter.predict({previousCorrected:A});this._correctedPrediction=this._kalmanFilter.correct({predicted:x,observation:[d,y,c,s,h,f]}),A=this._correctedPrediction,a=g}d=Math.ceil(this._correctedPrediction.mean[0][0]),u=this._correctedPrediction.mean[1][0],c=this._correctedPrediction.mean[2][0],s=this._correctedPrediction.mean[3][0],h=this._correctedPrediction.mean[4][0],f=this._correctedPrediction.mean[5][0];for(let m=1;m<=d;m++){let y={type:i.type,timeStamp:i.timeStamp+u*m,x:g.x+c*u*m,y:g.y+s*u*m,pressure:i.pressure,lineColor:this._currentLineColor,lineStyle:this._currentLineStyle,lineWidth:this._currentLineWidth};o.push(y)}return o}_resetPrediction(){this._kalmanFilter=new kc.KalmanFilter({observation:this._kalmanFilterDataSize}),this._correctedPrediction=null}_draw(){this._renderer.render()}_getPoint(i){const n=this._canvas.getBoundingClientRect();return{timeStamp:i.timeStamp,type:i.type,x:i.clientX-n.left,y:i.clientY-n.top,pressure:i.pressure,preferredColor:null,preferredStyle:null,preferredWidth:null,lineColor:this._currentLineColor,lineStyle:this._currentLineStyle,lineWidth:this._currentLineWidth}}render(){return oe`
    <canvas id="canvas"></canvas>
    <canvas id="prediction-canvas"></canvas>`}}xt(Ns,"styles",Re`
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
  `);class _d{set paths(t){this._paths=t,this.updateProperty("paths",t)}get paths(){return this._paths}set currentLineColor(t){this._currentLineColor=t,this.updateProperty("currentLineColor",t)}get currentLineColor(){return this._currentLineColor}set currentLineStyle(t){this._currentLineStyle=t,this.updateProperty("currentLineStyle",t)}get currentLineStyle(){return this._currentLineStyle}set currentLineWidth(t){this._currentLineWidth=t,this.updateProperty("currentLineWidth",t)}get currentLineWidth(){return this._currentLineWidth}set drawCoalescedEvents(t){this._drawCoalescedEvents=t,this.updateProperty("drawCoalescedEvents",t)}get drawCoalescedEvents(){return this._drawCoalescedEvents}set drawPointsOnly(t){this._drawPointsOnly=t,this.updateProperty("drawPointsOnly",t)}get drawPointsOnly(){return this._drawPointsOnly}set drawPredictedEvents(t){this._drawPredictedEvents=t,this.updateProperty("drawPredictedEvents",t)}get drawPredictedEvents(){return this._drawPredictedEvents}set drawWithCustomizations(t){this._drawWithCustomizations=t,this.updateProperty("drawWithCustomizations",t)}get drawWithCustomizations(){return this._drawWithCustomizations}set drawWithPressure(t){this._drawWithPressure=t,this.updateProperty("drawWithPressure",t)}get drawWithPressure(){return this._drawWithPressure}set highlightPredictedEvents(t){this._highlightPredictedEvents=t,this.updateProperty("highlightPredictedEvents",t)}get highlightPredictedEvents(){return this._highlightPredictedEvents}set predictionType(t){this._predictionType=t,this.updateProperty("predictionType",t)}get predictionType(){return this._predictionType}set numOfPredictionPoints(t){this._numOfPredictionPoints=t,this.updateProperty("numOfPredictionPoints",t)}get numOfPredictionPoints(){return this._numOfPredictionPoints}constructor(t,i){this._canvas=t,this._predictionCanvas=i,this._paths=[],this._currentPath=null,this._currentLineColor="#000000",this._currentLineStyle="INK",this._currentLineWidth=1,this._drawCoalescedEvents=!1,this._drawPointsOnly=!1,this._drawPredictedEvents=!1,this._drawWithCustomizations=!1,this._drawWithPressure=!1,this._highlightPredictedEvents=!1,this._predictionType="custom",this._numOfPredictionPoints=1}getCurrentLineColor(t){return t.preferredColor&&this._drawWithCustomizations?t.preferredColor:t.lineColor}getCurrentLineStyle(t){return t.preferredStyle&&this._drawWithCustomizations?t.preferredStyle:t.lineStyle}getCurrentLineWidth(t){return t.preferredWidth&&this._drawWithCustomizations?t.preferredWidth:t.lineWidth}updateProperty(t,i){console.log("renderer property",t,"set to",i)}resize(t,i){this._canvas.width=this._predictionCanvas.width=t,this._canvas.height=this._predictionCanvas.height=i}undoPath(){this.clearCanvas(),this.clearPredictionCanvas();let t=!1;for(let i=this._paths.length-1;i>=0;i--)this._paths[i].rendered=!1,!t&&this._paths[i].display&&(this._paths[i].display=!1,t=!0)}redoPath(){this.clearCanvas(),this.clearPredictionCanvas();let t=!1;for(let i=0;i<this._paths.length;i++)this._paths[i].rendered=!1,!t&&!this._paths[i].display&&(this._paths[i].display=!0,t=!0)}beginPath(t){this._currentPath||(this._currentPath=new pg),this._currentPath.points.push(t);let i=-1;for(let n=this._paths.length-1;n>=0;n--)this._paths[n].display||(i=n);i>=0&&this._paths.splice(i,this._paths.length)}addToPath(t,i){!t||!this._currentPath||(this._currentPath.points.push(...t),this._currentPath.predictedPoints=i)}endPath(t){this._drawPredictedEvents&&this.clearPredictionCanvas(),this._currentPath.predictedPoints=[],this._currentPath.display=!0,this._currentPath.rendered=!0,this._paths.push(this._currentPath),this._currentPath=null}deleteAllPaths(){this.clearCanvas(),this.clearPredictionCanvas(),this._paths=[],this._currentPath=null,this._points=[],this._predictedPoints=[]}clearCanvas(){console.error("base implementation not provided, must overwrite")}clearPredictionCanvas(){console.error("base implementation not provided, must overwrite")}render(){console.error("base implementation not provided, must overwrite")}}class pg{set points(t){this._points=t}get points(){return this._points}set predictedPoints(t){this._predictedPoints=t}get predictedPoints(){return this._predictedPoints}set display(t){this._display=t}get display(){return this._display}set rendered(t){this._rendered=t}get rendered(){return this._rendered}constructor(){this._points=[],this._predictedPoints=[],this._display=!1,this._rendered=!1}}class fg extends _d{constructor(t,i,n){if(super(t,i),this._context=this._canvas.getContext("2d",{desynchronized:n}),this._predictionContext=this._predictionCanvas.getContext("2d",{desynchronized:n}),!this._context||!this._predictionContext){console.error("Your browser doesn't support canvas, this demo won't work");return}console.log("Canvas2D loaded, desynchronized:",n)}clearCanvas(){this._context.clearRect(0,0,this._canvas.width,this._canvas.height)}clearPredictionCanvas(){this._predictionContext.clearRect(0,0,this._predictionContext.canvas.width,this._predictionContext.canvas.height)}render(){if(this._paths.forEach(t=>{t.display&&!t.rendered&&(this._drawPointsOnly?this._drawPoints(this._context,t.points):this.getCurrentLineStyle(t.points[0])==="highlighter"?this._drawLine(this._context,t.points):this._drawStroke(this._context,t.points),t.rendered=!0)}),this._currentPath&&this._currentPath.points.length>0&&!this._currentPath.points[this._currentPath.points.length-1].rendered){let t=[...this._currentPath.points];for(let i=t.length-1;i>=0;i--)if(t[i].rendered){t.splice(0,i);break}this._drawPointsOnly?this._drawPoints(this._context,t):this.getCurrentLineStyle(t[0])==="highlighter"?this._drawLine(this._context,t):this._drawStroke(this._context,t),this._drawPredictedEvents&&(this._predictionContext.clearRect(0,0,this._predictionContext.canvas.width,this._predictionContext.canvas.height),this._currentPath.predictedPoints.length>0&&(this._drawPointsOnly?this._strokePredictedPoints(this._predictionContext,this._currentPath.predictedPoints):this.getCurrentLineStyle(this._currentPath.points[0])!=="brush"&&this.getCurrentLineStyle(this._currentPath.points[0])!=="highlighter"&&this._strokePredictedEvents(this._predictionContext,this._currentPath.predictedPoints))),this._currentPath.points.forEach(i=>{i.rendered=!0}),this._currentPath.predictedPoints=[]}}_hexToRgbColor(t){return{r:"0x"+t[1]+t[2]|0,g:"0x"+t[3]+t[4]|0,b:"0x"+t[5]+t[6]|0}}_drawStroke(t,i){let n=this.getCurrentLineColor(i[0]),o=this.getCurrentLineStyle(i[0]),a=this.getCurrentLineWidth(i[0]),d,u,p;for(i[0].type==="pointerdown"&&(d=this.getCurrentLineWidth(i[0]),u=this.getCurrentLineWidth(i[0]),t.fillStyle=n,t.strokeStyle="none"),p=0;p<i.length-1;p++){this._drawWithPressure&&i[p].type!=="pointerdown"?(d=this.getCurrentLineWidth(i[p])*i[p].pressure*2,u=this.getCurrentLineWidth(i[p])*i[p+1].pressure*2):d=u=this.getCurrentLineWidth(i[p]);let l=this._createPath(i[p].x,i[p].y,i[p+1].x,i[p+1].y,d,u);switch(o){case"brush":t.filter="blur("+a+"px)";break;default:t.filter="none";break}t.fill(l)}}_drawLine(t,i){if(i.length<2)return;let n=this.getCurrentLineColor(i[0]),o=this._hexToRgbColor(n);i[0].type==="pointerdown"&&(t.beginPath(),t.lineCap="round",t.lineJoin="round",t.fillStyle="none",t.strokeStyle="rgba("+o.r+","+o.g+","+o.b+",0.01)",t.filter="none"),t.lineWidth=this.getCurrentLineWidth(i[0]),t.moveTo(i[0].x,i[0].y),t.lineTo(i[1].x,i[1].y);let a;for(a=1;a<i.length-2;a++){const d=(i[a].x+i[a+1].x)/2,u=(i[a].y+i[a+1].y)/2;t.quadraticCurveTo(i[a].x,i[a].y,Math.round(d),Math.round(u))}i.length>2&&t.quadraticCurveTo(i[a].x,i[a].y,i[a+1].x,i[a+1].y),t.stroke()}_drawPoints(t,i){for(let n=0;n<i.length;n++)t.beginPath(),t.fillStyle=this.getCurrentLineColor(i[n]),i[n].coalesced?(t.arc(i[n].x,i[n].y,this.getCurrentLineWidth(i[n])/2,0,Math.PI*2,!0),t.stroke()):(t.arc(i[n].x,i[n].y,this.getCurrentLineWidth(i[n]),0,Math.PI*2,!0),t.fill())}_createPath(t,i,n,o,a,d){const u=n-t,p=o-i,l=Math.atan2(p,u)+Math.PI/2,c=new Path2D;return c.arc(t,i,a/2,l,l+Math.PI,!1),c.arc(n,o,d/2,l+Math.PI,l,!1),c.closePath(),c}_strokePredictedEvents(t,i,n){if(i.length>0&&this._currentPath.points.length>0){let o=this._currentPath.points[this._currentPath.points.length-1],a,d;this._drawWithPressure?a=d=this.getCurrentLineWidth(o)*o.pressure*2:a=d=this.getCurrentLineWidth(o);let u=this._createPath(o.x,o.y,i[0].x,i[0].y,a,d);this._highlightPredictedEvents?t.fillStyle="red":t.fillStyle=this.getCurrentLineColor(o),t.fill(u);let p;for(p=0;p<i.length-1;p++){let l=this._createPath(i[p].x,i[p].y,i[p+1].x,i[p+1].y,a,d);t.fill(l)}}}_strokePredictedPoints(t,i){let n,o=this._currentPath.points[this._currentPath.points.length-1];for(n=0;n<i.length;n++)t.beginPath(),this._highlightPredictedEvents?t.fillStyle="red":t.fillStyle=this.getCurrentLineColor(o),t.arc(i[n].x,i[n].y,3,0,Math.PI*2,!0),t.fill()}}class gg extends Ns{firstUpdated(){super.firstUpdated(),this.renderer=new fg(this.canvas,this.predictionCanvas,this.desynchronized)}constructor(){super()}}customElements.define("js-canvas",gg);var wd={exports:{}};const mg={},vg=Object.freeze(Object.defineProperty({__proto__:null,default:mg},Symbol.toStringTag,{value:"Module"})),rs=Oh(vg);(function(r,t){var i=(()=>{var n=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return typeof __filename<"u"&&(n=n||__filename),function(o){o=o||{};var a;a||(a=typeof o<"u"?o:{});var d=Object.assign,u,p;a.ready=new Promise(function(b,v){u=b,p=v}),function(b){var v={};b.loadCmdsTypedArray=function(L){for(var M=0,U=0;U<L.length;U++)M+=L[U].length;if(v[M])var q=v[M];else q=new Float32Array(M),v[M]=q;var V=0;for(U=0;U<L.length;U++)for(var it=0;it<L[U].length;it++){var ft=L[U][it];typeof ft=="string"&&(ft=b.SkBits2FloatUnsigned(parseInt(ft))),q[V]=ft,V++}return L=b._malloc(q.length*q.BYTES_PER_ELEMENT),b.HEAPF32.set(q,L/q.BYTES_PER_ELEMENT),[L,M]},b.FromCmds=function(L){L=b.loadCmdsTypedArray(L);var M=b._FromCmds(L[0],L[1]);return b._free(L[0]),M};var w,S,k,I,O;b.cubicYFromX=function(L,M,U,q,V){return w&&S===L&&k===M&&I===U&&O===q||(w&&w.delete(),w=new b._SkCubicMap([L,M],[U,q]),S=L,k=M,I=U,O=q),w.computeYFromX(V)},b.cubicPtFromT=function(L,M,U,q,V){return w&&S===L&&k===M&&I===U&&O===q||(w&&w.delete(),w=new b._SkCubicMap([L,M],[U,q]),S=L,k=M,I=U,O=q),w.computePtFromT(V)}}(a),function(b){b.onRuntimeInitialized=function(){b.SkPath.prototype.addPath=function(){var v=arguments[0];if(arguments.length===1)this._addPath(v,1,0,0,0,1,0,0,0,1);else if(arguments.length===2){var w=arguments[1];this._addPath(v,w.a,w.c,w.e,w.b,w.d,w.f,0,0,1)}else if(arguments.length===7)w=arguments,this._addPath(v,w[1],w[3],w[5],w[2],w[4],w[6],0,0,1);else if(arguments.length===10)w=arguments,this._addPath(v,w[1],w[2],w[3],w[4],w[5],w[6],w[7],w[8],w[9]);else return console.Ma("addPath expected to take 1, 2, 7, or 10 args. Got "+arguments.length),null;return this},b.SkPath.prototype.arc=function(v,w,S,k,I,O){return this._arc(v,w,S,k,I,!!O),this},b.SkPath.prototype.arcTo=function(v,w,S,k,I){return this._arcTo(v,w,S,k,I),this},b.SkPath.prototype.bezierCurveTo=function(v,w,S,k,I,O){return this._cubicTo(v,w,S,k,I,O),this},b.SkPath.prototype.close=function(){return this._close(),this},b.SkPath.prototype.closePath=function(){return this._close(),this},b.SkPath.prototype.conicTo=function(v,w,S,k,I){return this._conicTo(v,w,S,k,I),this},b.SkPath.prototype.cubicTo=function(v,w,S,k,I,O){return this._cubicTo(v,w,S,k,I,O),this},b.SkPath.prototype.dash=function(v,w,S){return this._dash(v,w,S)?this:null},b.SkPath.prototype.ellipse=function(v,w,S,k,I,O,L,M){return this._ellipse(v,w,S,k,I,O,L,!!M),this},b.SkPath.prototype.lineTo=function(v,w){return this._lineTo(v,w),this},b.SkPath.prototype.moveTo=function(v,w){return this._moveTo(v,w),this},b.SkPath.prototype.op=function(v,w){return this._op(v,w)?this:null},b.SkPath.prototype.quadraticCurveTo=function(v,w,S,k){return this._quadTo(v,w,S,k),this},b.SkPath.prototype.quadTo=function(v,w,S,k){return this._quadTo(v,w,S,k),this},b.SkPath.prototype.rect=function(v,w,S,k){return this._rect(v,w,S,k),this},b.SkPath.prototype.simplify=function(){return this._simplify()?this:null},b.SkPath.prototype.stroke=function(v){return v=v||{},v.width=v.width||1,v.miter_limit=v.miter_limit||4,v.cap=v.cap||b.StrokeCap.BUTT,v.join=v.join||b.StrokeJoin.MITER,this._stroke(v)?this:null},b.SkPath.prototype.transform=function(){if(arguments.length===1)this._transform(arguments[0]);else if(arguments.length===9){var v=arguments;this._transform(v[0],v[1],v[2],v[3],v[4],v[5],v[6],v[7],v[8])}else return console.Ma("transform expected to take 1 or 9 arguments. Got "+arguments.length),null;return this},b.SkPath.prototype.trim=function(v,w,S){return this._trim(v,w,!!S)?this:null}}}(a);var l=d({},a),c=typeof window=="object",s=typeof importScripts=="function",h="",f,g,m,y,A,x;typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"?(h=s?rs.dirname(h)+"/":__dirname+"/",x=()=>{A||(y=rs,A=rs)},f=function(b,v){return x(),b=A.normalize(b),y.readFileSync(b,v?null:"utf8")},m=b=>(b=f(b,!0),b.buffer||(b=new Uint8Array(b)),b),g=(b,v,w)=>{x(),b=A.normalize(b),y.readFile(b,function(S,k){S?w(S):v(k.buffer)})},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(b){throw b}),process.on("unhandledRejection",function(b){throw b}),a.inspect=function(){return"[Emscripten Module object]"}):(c||s)&&(s?h=self.location.href:typeof document<"u"&&document.currentScript&&(h=document.currentScript.src),n&&(h=n),h.indexOf("blob:")!==0?h=h.substr(0,h.replace(/[?#].*/,"").lastIndexOf("/")+1):h="",f=b=>{var v=new XMLHttpRequest;return v.open("GET",b,!1),v.send(null),v.responseText},s&&(m=b=>{var v=new XMLHttpRequest;return v.open("GET",b,!1),v.responseType="arraybuffer",v.send(null),new Uint8Array(v.response)}),g=(b,v,w)=>{var S=new XMLHttpRequest;S.open("GET",b,!0),S.responseType="arraybuffer",S.onload=()=>{S.status==200||S.status==0&&S.response?v(S.response):w()},S.onerror=w,S.send(null)});var C=a.print||console.log.bind(console),P=a.printErr||console.warn.bind(console);d(a,l),l=null;var T;a.wasmBinary&&(T=a.wasmBinary),a.noExitRuntime,typeof WebAssembly!="object"&&vr("no native wasm support detected");var R,z=!1,N=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function F(b,v,w){var S=v+w;for(w=v;b[w]&&!(w>=S);)++w;if(16<w-v&&b.subarray&&N)return N.decode(b.subarray(v,w));for(S="";v<w;){var k=b[v++];if(k&128){var I=b[v++]&63;if((k&224)==192)S+=String.fromCharCode((k&31)<<6|I);else{var O=b[v++]&63;k=(k&240)==224?(k&15)<<12|I<<6|O:(k&7)<<18|I<<12|O<<6|b[v++]&63,65536>k?S+=String.fromCharCode(k):(k-=65536,S+=String.fromCharCode(55296|k>>10,56320|k&1023))}}else S+=String.fromCharCode(k)}return S}function D(b,v,w){var S=j;if(0<w){w=v+w-1;for(var k=0;k<b.length;++k){var I=b.charCodeAt(k);if(55296<=I&&57343>=I){var O=b.charCodeAt(++k);I=65536+((I&1023)<<10)|O&1023}if(127>=I){if(v>=w)break;S[v++]=I}else{if(2047>=I){if(v+1>=w)break;S[v++]=192|I>>6}else{if(65535>=I){if(v+2>=w)break;S[v++]=224|I>>12}else{if(v+3>=w)break;S[v++]=240|I>>18,S[v++]=128|I>>12&63}S[v++]=128|I>>6&63}S[v++]=128|I&63}}S[v]=0}}var W=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function H(b,v){for(var w=b>>1,S=w+v/2;!(w>=S)&&It[w];)++w;if(w<<=1,32<w-b&&W)return W.decode(j.subarray(b,w));for(w="",S=0;!(S>=v/2);++S){var k=bt[b+2*S>>1];if(k==0)break;w+=String.fromCharCode(k)}return w}function B(b,v,w){if(w===void 0&&(w=2147483647),2>w)return 0;w-=2;var S=v;w=w<2*b.length?w/2:b.length;for(var k=0;k<w;++k)bt[v>>1]=b.charCodeAt(k),v+=2;return bt[v>>1]=0,v-S}function J(b){return 2*b.length}function tt(b,v){for(var w=0,S="";!(w>=v/4);){var k=yt[b+4*w>>2];if(k==0)break;++w,65536<=k?(k-=65536,S+=String.fromCharCode(55296|k>>10,56320|k&1023)):S+=String.fromCharCode(k)}return S}function ht(b,v,w){if(w===void 0&&(w=2147483647),4>w)return 0;var S=v;w=S+w-4;for(var k=0;k<b.length;++k){var I=b.charCodeAt(k);if(55296<=I&&57343>=I){var O=b.charCodeAt(++k);I=65536+((I&1023)<<10)|O&1023}if(yt[v>>2]=I,v+=4,v+4>w)break}return yt[v>>2]=0,v-S}function at(b){for(var v=0,w=0;w<b.length;++w){var S=b.charCodeAt(w);55296<=S&&57343>=S&&++w,v+=4}return v}var pt,Y,j,bt,It,yt,kt,Ht,ze;function pe(){var b=R.buffer;pt=b,a.HEAP8=Y=new Int8Array(b),a.HEAP16=bt=new Int16Array(b),a.HEAP32=yt=new Int32Array(b),a.HEAPU8=j=new Uint8Array(b),a.HEAPU16=It=new Uint16Array(b),a.HEAPU32=kt=new Uint32Array(b),a.HEAPF32=Ht=new Float32Array(b),a.HEAPF64=ze=new Float64Array(b)}var Gt,ie=[],Ne=[],gr=[];function Ke(){var b=a.preRun.shift();ie.unshift(b)}var De=0,mr=null;a.preloadedImages={},a.preloadedAudios={};function vr(b){throw a.onAbort&&a.onAbort(b),b="Aborted("+b+")",P(b),z=!0,b=new WebAssembly.RuntimeError(b+". Build with -s ASSERTIONS=1 for more info."),p(b),b}function Ds(){return Yt.startsWith("data:application/octet-stream;base64,")}var Yt;if(Yt="pathkit.wasm",!Ds()){var Us=Yt;Yt=a.locateFile?a.locateFile(Us,h):h+Us}function qs(){var b=Yt;try{if(b==Yt&&T)return new Uint8Array(T);if(m)return m(b);throw"both async and sync fetching of the wasm failed"}catch(v){vr(v)}}function Ld(){if(!T&&(c||s)){if(typeof fetch=="function"&&!Yt.startsWith("file://"))return fetch(Yt,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+Yt+"'";return b.arrayBuffer()}).catch(function(){return qs()});if(g)return new Promise(function(b,v){g(Yt,function(w){b(new Uint8Array(w))},v)})}return Promise.resolve().then(function(){return qs()})}function Gi(b){for(;0<b.length;){var v=b.shift();if(typeof v=="function")v(a);else{var w=v.Wa;typeof w=="number"?v.xa===void 0?Gt.get(w)():Gt.get(w)(v.xa):w(v.xa===void 0?null:v.xa)}}}var Gr={};function Yi(b){for(;b.length;){var v=b.pop();b.pop()(v)}}function Ge(b){return this.fromWireType(kt[b>>2])}var Ye={},Ue={},Yr={};function Fs(b){if(b===void 0)return"_unknown";b=b.replace(/[^a-zA-Z0-9_]/g,"$");var v=b.charCodeAt(0);return 48<=v&&57>=v?"_"+b:b}function Zi(b,v){return b=Fs(b),function(){return v.apply(this,arguments)}}function Qi(b){var v=Error,w=Zi(b,function(S){this.name=b,this.message=S,S=Error(S).stack,S!==void 0&&(this.stack=this.toString()+`
`+S.replace(/^Error(:[^\n]*)?\n/,""))});return w.prototype=Object.create(v.prototype),w.prototype.constructor=w,w.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},w}var Ws=void 0;function Zr(b){throw new Ws(b)}function fe(b,v,w){function S(L){L=w(L),L.length!==b.length&&Zr("Mismatched type converter count");for(var M=0;M<b.length;++M)ne(b[M],L[M])}b.forEach(function(L){Yr[L]=v});var k=Array(v.length),I=[],O=0;v.forEach(function(L,M){Ue.hasOwnProperty(L)?k[M]=Ue[L]:(I.push(L),Ye.hasOwnProperty(L)||(Ye[L]=[]),Ye[L].push(function(){k[M]=Ue[L],++O,O===I.length&&S(k)}))}),I.length===0&&S(k)}var Qr={};function Jr(b){switch(b){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+b)}}var Vs=void 0;function $t(b){for(var v="";j[b];)v+=Vs[j[b++]];return v}var Ze=void 0;function et(b){throw new Ze(b)}function ne(b,v,w={}){if(!("argPackAdvance"in v))throw new TypeError("registerType registeredInstance requires argPackAdvance");var S=v.name;if(b||et('type "'+S+'" must have a positive integer typeid pointer'),Ue.hasOwnProperty(b)){if(w.Qa)return;et("Cannot register type '"+S+"' twice")}Ue[b]=v,delete Yr[b],Ye.hasOwnProperty(b)&&(v=Ye[b],delete Ye[b],v.forEach(function(k){k()}))}function Ji(b){et(b.ea.ha.fa.name+" instance already deleted")}var tn=!1;function Bs(){}function Hs(b){--b.count.value,b.count.value===0&&(b.ka?b.ma.la(b.ka):b.ha.fa.la(b.ga))}function br(b){return typeof FinalizationGroup>"u"?(br=v=>v,b):(tn=new FinalizationGroup(function(v){for(var w=v.next();!w.done;w=v.next())w=w.value,w.ga?Hs(w):console.warn("object already deleted: "+w.ga)}),br=v=>(tn.register(v,v.ea,v.ea),v),Bs=v=>{tn.unregister(v.ea)},br(b))}var yr=void 0,_r=[];function en(){for(;_r.length;){var b=_r.pop();b.ea.pa=!1,b.delete()}}function Ce(){}var js={};function Xs(b,v,w){if(b[v].ia===void 0){var S=b[v];b[v]=function(){return b[v].ia.hasOwnProperty(arguments.length)||et("Function '"+w+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+b[v].ia+")!"),b[v].ia[arguments.length].apply(this,arguments)},b[v].ia=[],b[v].ia[S.ua]=S}}function rn(b,v,w){a.hasOwnProperty(b)?((w===void 0||a[b].ia!==void 0&&a[b].ia[w]!==void 0)&&et("Cannot register public name '"+b+"' twice"),Xs(a,b,b),a.hasOwnProperty(w)&&et("Cannot register multiple overloads of a function with the same number of arguments ("+w+")!"),a[b].ia[w]=v):(a[b]=v,w!==void 0&&(a[b].Xa=w))}function Rd(b,v,w,S,k,I,O,L){this.name=b,this.constructor=v,this.qa=w,this.la=S,this.na=k,this.Oa=I,this.ta=O,this.La=L,this.Ta=[]}function nn(b,v,w){for(;v!==w;)v.ta||et("Expected null or instance of "+w.name+", got an instance of "+v.name),b=v.ta(b),v=v.na;return b}function Od(b,v){return v===null?(this.Ba&&et("null is not a valid "+this.name),0):(v.ea||et('Cannot pass "'+cn(v)+'" as a '+this.name),v.ea.ga||et("Cannot pass deleted object as a pointer of type "+this.name),nn(v.ea.ga,v.ea.ha.fa,this.fa))}function Md(b,v){if(v===null){if(this.Ba&&et("null is not a valid "+this.name),this.wa){var w=this.sa();return b!==null&&b.push(this.la,w),w}return 0}if(v.ea||et('Cannot pass "'+cn(v)+'" as a '+this.name),v.ea.ga||et("Cannot pass deleted object as a pointer of type "+this.name),!this.va&&v.ea.ha.va&&et("Cannot convert argument of type "+(v.ea.ma?v.ea.ma.name:v.ea.ha.name)+" to parameter type "+this.name),w=nn(v.ea.ga,v.ea.ha.fa,this.fa),this.wa)switch(v.ea.ka===void 0&&et("Passing raw pointer to smart pointer is illegal"),this.Va){case 0:v.ea.ma===this?w=v.ea.ka:et("Cannot convert argument of type "+(v.ea.ma?v.ea.ma.name:v.ea.ha.name)+" to parameter type "+this.name);break;case 1:w=v.ea.ka;break;case 2:if(v.ea.ma===this)w=v.ea.ka;else{var S=v.clone();w=this.Ua(w,ke(function(){S.delete()})),b!==null&&b.push(this.la,w)}break;default:et("Unsupporting sharing policy")}return w}function zd(b,v){return v===null?(this.Ba&&et("null is not a valid "+this.name),0):(v.ea||et('Cannot pass "'+cn(v)+'" as a '+this.name),v.ea.ga||et("Cannot pass deleted object as a pointer of type "+this.name),v.ea.ha.va&&et("Cannot convert argument of type "+v.ea.ha.name+" to parameter type "+this.name),nn(v.ea.ga,v.ea.ha.fa,this.fa))}function Ks(b,v,w){return v===w?b:w.na===void 0?null:(b=Ks(b,v,w.na),b===null?null:w.La(b))}var wr={};function Nd(b,v){for(v===void 0&&et("ptr should not be undefined");b.na;)v=b.ta(v),b=b.na;return wr[v]}function ti(b,v){return v.ha&&v.ga||Zr("makeClassHandle requires ptr and ptrType"),!!v.ma!=!!v.ka&&Zr("Both smartPtrType and smartPtr must be specified"),v.count={value:1},br(Object.create(b,{ea:{value:v}}))}function ge(b,v,w,S){this.name=b,this.fa=v,this.Ba=w,this.va=S,this.wa=!1,this.la=this.Ua=this.sa=this.Ia=this.Va=this.Sa=void 0,v.na!==void 0?this.toWireType=Md:(this.toWireType=S?Od:zd,this.ja=null)}function Gs(b,v,w){a.hasOwnProperty(b)||Zr("Replacing nonexistant public symbol"),a[b].ia!==void 0&&w!==void 0?a[b].ia[w]=v:(a[b]=v,a[b].ua=w)}function Dd(b,v){var w=[];return function(){w.length=arguments.length;for(var S=0;S<arguments.length;S++)w[S]=arguments[S];return b.includes("j")?(S=a["dynCall_"+b],S=w&&w.length?S.apply(null,[v].concat(w)):S.call(null,v)):S=Gt.get(v).apply(null,w),S}}function Nt(b,v){b=$t(b);var w=b.includes("j")?Dd(b,v):Gt.get(v);return typeof w!="function"&&et("unknown function pointer with signature "+b+": "+v),w}var Ys=void 0;function Zs(b){b=ia(b);var v=$t(b);return me(b),v}function ei(b,v){function w(I){k[I]||Ue[I]||(Yr[I]?Yr[I].forEach(w):(S.push(I),k[I]=!0))}var S=[],k={};throw v.forEach(w),new Ys(b+": "+S.map(Zs).join([", "]))}function on(b,v){for(var w=[],S=0;S<b;S++)w.push(yt[(v>>2)+S]);return w}function sn(b,v,w,S,k){var I=v.length;2>I&&et("argTypes array size mismatch! Must at least get return value and 'this' types!");var O=v[1]!==null&&w!==null,L=!1;for(w=1;w<v.length;++w)if(v[w]!==null&&v[w].ja===void 0){L=!0;break}var M=v[0].name!=="void",U=I-2,q=Array(U),V=[],it=[];return function(){if(arguments.length!==U&&et("function "+b+" called with "+arguments.length+" arguments, expected "+U+" args!"),it.length=0,V.length=O?2:1,V[0]=k,O){var ft=v[1].toWireType(it,this);V[1]=ft}for(var nt=0;nt<U;++nt)q[nt]=v[nt+2].toWireType(it,arguments[nt]),V.push(q[nt]);if(nt=S.apply(null,V),L)Yi(it);else for(var Dt=O?1:2;Dt<v.length;Dt++){var Ut=Dt===1?ft:q[Dt-2];v[Dt].ja!==null&&v[Dt].ja(Ut)}return ft=M?v[0].fromWireType(nt):void 0,ft}}var an=[],ee=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Qs(b){4<b&&--ee[b].Ca===0&&(ee[b]=void 0,an.push(b))}function ln(b){return b||et("Cannot use deleted val. handle = "+b),ee[b].value}function ke(b){switch(b){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var v=an.length?an.pop():ee.length;return ee[v]={Ca:1,value:b},v}}function Ud(b,v,w){switch(v){case 0:return function(S){return this.fromWireType((w?Y:j)[S])};case 1:return function(S){return this.fromWireType((w?bt:It)[S>>1])};case 2:return function(S){return this.fromWireType((w?yt:kt)[S>>2])};default:throw new TypeError("Unknown integer type: "+b)}}function ri(b,v){var w=Ue[b];return w===void 0&&et(v+" has unknown type "+Zs(b)),w}function cn(b){if(b===null)return"null";var v=typeof b;return v==="object"||v==="array"||v==="function"?b.toString():""+b}function qd(b,v){switch(v){case 2:return function(w){return this.fromWireType(Ht[w>>2])};case 3:return function(w){return this.fromWireType(ze[w>>3])};default:throw new TypeError("Unknown float type: "+b)}}function Fd(b,v,w){switch(v){case 0:return w?function(S){return Y[S]}:function(S){return j[S]};case 1:return w?function(S){return bt[S>>1]}:function(S){return It[S>>1]};case 2:return w?function(S){return yt[S>>2]}:function(S){return kt[S>>2]};default:throw new TypeError("Unknown integer type: "+b)}}var Wd={};function dn(b){var v=Wd[b];return v===void 0?$t(b):v}var un=[];function Js(){function b(v){v.$$$embind_global$$$=v;var w=typeof $$$embind_global$$$=="object"&&v.$$$embind_global$$$===v;return w||delete v.$$$embind_global$$$,w}if(typeof globalThis=="object")return globalThis;if(typeof $$$embind_global$$$=="object"||(typeof Tn=="object"&&b(Tn)?$$$embind_global$$$=Tn:typeof self=="object"&&b(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")}function Vd(b){var v=un.length;return un.push(b),v}function Bd(b,v){for(var w=Array(b),S=0;S<b;++S)w[S]=ri(yt[(v>>2)+S],"parameter "+S);return w}var ta=[];function Hd(b){var v=Array(b+1);return function(w,S,k){v[0]=w;for(var I=0;I<b;++I){var O=ri(yt[(S>>2)+I],"parameter "+I);v[I+1]=O.readValueFromPointer(k),k+=O.argPackAdvance}return w=new(w.bind.apply(w,v)),ke(w)}}var ea={},jd=[null,[],[]];Ws=a.InternalError=Qi("InternalError");for(var ra=Array(256),ii=0;256>ii;++ii)ra[ii]=String.fromCharCode(ii);Vs=ra,Ze=a.BindingError=Qi("BindingError"),Ce.prototype.isAliasOf=function(b){if(!(this instanceof Ce&&b instanceof Ce))return!1;var v=this.ea.ha.fa,w=this.ea.ga,S=b.ea.ha.fa;for(b=b.ea.ga;v.na;)w=v.ta(w),v=v.na;for(;S.na;)b=S.ta(b),S=S.na;return v===S&&w===b},Ce.prototype.clone=function(){if(this.ea.ga||Ji(this),this.ea.ra)return this.ea.count.value+=1,this;var b=br,v=Object,w=v.create,S=Object.getPrototypeOf(this),k=this.ea;return b=b(w.call(v,S,{ea:{value:{count:k.count,pa:k.pa,ra:k.ra,ga:k.ga,ha:k.ha,ka:k.ka,ma:k.ma}}})),b.ea.count.value+=1,b.ea.pa=!1,b},Ce.prototype.delete=function(){this.ea.ga||Ji(this),this.ea.pa&&!this.ea.ra&&et("Object already scheduled for deletion"),Bs(this),Hs(this.ea),this.ea.ra||(this.ea.ka=void 0,this.ea.ga=void 0)},Ce.prototype.isDeleted=function(){return!this.ea.ga},Ce.prototype.deleteLater=function(){return this.ea.ga||Ji(this),this.ea.pa&&!this.ea.ra&&et("Object already scheduled for deletion"),_r.push(this),_r.length===1&&yr&&yr(en),this.ea.pa=!0,this},ge.prototype.Pa=function(b){return this.Ia&&(b=this.Ia(b)),b},ge.prototype.Ga=function(b){this.la&&this.la(b)},ge.prototype.argPackAdvance=8,ge.prototype.readValueFromPointer=Ge,ge.prototype.deleteObject=function(b){b!==null&&b.delete()},ge.prototype.fromWireType=function(b){function v(){return this.wa?ti(this.fa.qa,{ha:this.Sa,ga:w,ma:this,ka:b}):ti(this.fa.qa,{ha:this,ga:b})}var w=this.Pa(b);if(!w)return this.Ga(b),null;var S=Nd(this.fa,w);if(S!==void 0)return S.ea.count.value===0?(S.ea.ga=w,S.ea.ka=b,S.clone()):(S=S.clone(),this.Ga(b),S);if(S=this.fa.Oa(w),S=js[S],!S)return v.call(this);S=this.va?S.Ja:S.pointerType;var k=Ks(w,this.fa,S.fa);return k===null?v.call(this):this.wa?ti(S.fa.qa,{ha:S,ga:k,ma:this,ka:b}):ti(S.fa.qa,{ha:S,ga:k})},a.getInheritedInstanceCount=function(){return Object.keys(wr).length},a.getLiveInheritedInstances=function(){var b=[],v;for(v in wr)wr.hasOwnProperty(v)&&b.push(wr[v]);return b},a.flushPendingDeletes=en,a.setDelayFunction=function(b){yr=b,_r.length&&yr&&yr(en)},Ys=a.UnboundTypeError=Qi("UnboundTypeError"),a.count_emval_handles=function(){for(var b=0,v=5;v<ee.length;++v)ee[v]!==void 0&&++b;return b},a.get_first_emval=function(){for(var b=5;b<ee.length;++b)if(ee[b]!==void 0)return ee[b];return null};var Xd={r:function(b){var v=Gr[b];delete Gr[b];var w=v.elements,S=w.length,k=w.map(function(L){return L.Aa}).concat(w.map(function(L){return L.Ea})),I=v.sa,O=v.la;fe([b],k,function(L){return w.forEach(function(M,U){var q=L[U],V=M.ya,it=M.za,ft=L[U+S],nt=M.Da,Dt=M.Fa;M.read=Ut=>q.fromWireType(V(it,Ut)),M.write=(Ut,qe)=>{var Zt=[];nt(Dt,Ut,ft.toWireType(Zt,qe)),Yi(Zt)}}),[{name:v.name,fromWireType:function(M){for(var U=Array(S),q=0;q<S;++q)U[q]=w[q].read(M);return O(M),U},toWireType:function(M,U){if(S!==U.length)throw new TypeError("Incorrect number of tuple elements for "+v.name+": expected="+S+", actual="+U.length);for(var q=I(),V=0;V<S;++V)w[V].write(q,U[V]);return M!==null&&M.push(O,q),q},argPackAdvance:8,readValueFromPointer:Ge,ja:O}]})},u:function(b){var v=Qr[b];delete Qr[b];var w=v.sa,S=v.la,k=v.Ha,I=k.map(function(O){return O.Aa}).concat(k.map(function(O){return O.Ea}));fe([b],I,function(O){var L={};return k.forEach(function(M,U){var q=O[U],V=M.ya,it=M.za,ft=O[U+k.length],nt=M.Da,Dt=M.Fa;L[M.Na]={read:function(Ut){return q.fromWireType(V(it,Ut))},write:function(Ut,qe){var Zt=[];nt(Dt,Ut,ft.toWireType(Zt,qe)),Yi(Zt)}}}),[{name:v.name,fromWireType:function(M){var U={},q;for(q in L)U[q]=L[q].read(M);return S(M),U},toWireType:function(M,U){for(var q in L)if(!(q in U))throw new TypeError('Missing field:  "'+q+'"');var V=w();for(q in L)L[q].write(V,U[q]);return M!==null&&M.push(S,V),V},argPackAdvance:8,readValueFromPointer:Ge,ja:S}]})},z:function(){},F:function(b,v,w,S,k){var I=Jr(w);v=$t(v),ne(b,{name:v,fromWireType:function(O){return!!O},toWireType:function(O,L){return L?S:k},argPackAdvance:8,readValueFromPointer:function(O){if(w===1)var L=Y;else if(w===2)L=bt;else if(w===4)L=yt;else throw new TypeError("Unknown boolean type size: "+v);return this.fromWireType(L[O>>I])},ja:null})},l:function(b,v,w,S,k,I,O,L,M,U,q,V,it){q=$t(q),I=Nt(k,I),L&&(L=Nt(O,L)),U&&(U=Nt(M,U)),it=Nt(V,it);var ft=Fs(q);rn(ft,function(){ei("Cannot construct "+q+" due to unbound types",[S])}),fe([b,v,w],S?[S]:[],function(nt){if(nt=nt[0],S)var Dt=nt.fa,Ut=Dt.qa;else Ut=Ce.prototype;nt=Zi(ft,function(){if(Object.getPrototypeOf(this)!==qe)throw new Ze("Use 'new' to construct "+q);if(Zt.oa===void 0)throw new Ze(q+" has no accessible constructor");var oa=Zt.oa[arguments.length];if(oa===void 0)throw new Ze("Tried to invoke ctor of "+q+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(Zt.oa).toString()+") parameters instead!");return oa.apply(this,arguments)});var qe=Object.create(Ut,{constructor:{value:nt}});nt.prototype=qe;var Zt=new Rd(q,nt,qe,it,Dt,I,L,U);Dt=new ge(q,Zt,!0,!1),Ut=new ge(q+"*",Zt,!1,!1);var na=new ge(q+" const*",Zt,!1,!0);return js[b]={pointerType:Ut,Ja:na},Gs(ft,nt),[Dt,Ut,na]})},i:function(b,v,w,S,k,I){0<v||vr(void 0);var O=on(v,w);k=Nt(S,k),fe([],[b],function(L){L=L[0];var M="constructor "+L.name;if(L.fa.oa===void 0&&(L.fa.oa=[]),L.fa.oa[v-1]!==void 0)throw new Ze("Cannot register multiple constructors with identical number of parameters ("+(v-1)+") for class '"+L.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return L.fa.oa[v-1]=()=>{ei("Cannot construct "+L.name+" due to unbound types",O)},fe([],O,function(U){return U.splice(1,0,null),L.fa.oa[v-1]=sn(M,U,null,k,I),[]}),[]})},a:function(b,v,w,S,k,I,O,L){var M=on(w,S);v=$t(v),I=Nt(k,I),fe([],[b],function(U){function q(){ei("Cannot call "+V+" due to unbound types",M)}U=U[0];var V=U.name+"."+v;v.startsWith("@@")&&(v=Symbol[v.substring(2)]),L&&U.fa.Ta.push(v);var it=U.fa.qa,ft=it[v];return ft===void 0||ft.ia===void 0&&ft.className!==U.name&&ft.ua===w-2?(q.ua=w-2,q.className=U.name,it[v]=q):(Xs(it,v,V),it[v].ia[w-2]=q),fe([],M,function(nt){return nt=sn(V,nt,U,I,O),it[v].ia===void 0?(nt.ua=w-2,it[v]=nt):it[v].ia[w-2]=nt,[]}),[]})},I:function(b,v,w){b=$t(b),fe([],[v],function(S){return S=S[0],a[b]=S.fromWireType(w),[]})},E:function(b,v){v=$t(v),ne(b,{name:v,fromWireType:function(w){var S=ln(w);return Qs(w),S},toWireType:function(w,S){return ke(S)},argPackAdvance:8,readValueFromPointer:Ge,ja:null})},h:function(b,v,w,S){function k(){}w=Jr(w),v=$t(v),k.values={},ne(b,{name:v,constructor:k,fromWireType:function(I){return this.constructor.values[I]},toWireType:function(I,O){return O.value},argPackAdvance:8,readValueFromPointer:Ud(v,w,S),ja:null}),rn(v,k)},k:function(b,v,w){var S=ri(b,"enum");v=$t(v),b=S.constructor,S=Object.create(S.constructor.prototype,{value:{value:w},constructor:{value:Zi(S.name+"_"+v,function(){})}}),b.values[w]=S,b[v]=S},q:function(b,v,w){w=Jr(w),v=$t(v),ne(b,{name:v,fromWireType:function(S){return S},toWireType:function(S,k){return k},argPackAdvance:8,readValueFromPointer:qd(v,w),ja:null})},f:function(b,v,w,S,k,I){var O=on(v,w);b=$t(b),k=Nt(S,k),rn(b,function(){ei("Cannot call "+b+" due to unbound types",O)},v-1),fe([],O,function(L){return L=[L[0],null].concat(L.slice(1)),Gs(b,sn(b,L,null,k,I),v-1),[]})},e:function(b,v,w,S,k){v=$t(v),k===-1&&(k=4294967295),k=Jr(w);var I=L=>L;if(S===0){var O=32-8*w;I=L=>L<<O>>>O}w=v.includes("unsigned")?function(L,M){return M>>>0}:function(L,M){return M},ne(b,{name:v,fromWireType:I,toWireType:w,argPackAdvance:8,readValueFromPointer:Fd(v,k,S!==0),ja:null})},b:function(b,v,w){function S(I){I>>=2;var O=kt;return new k(pt,O[I+1],O[I])}var k=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][v];w=$t(w),ne(b,{name:w,fromWireType:S,argPackAdvance:8,readValueFromPointer:S},{Qa:!0})},p:function(b,v){v=$t(v);var w=v==="std::string";ne(b,{name:v,fromWireType:function(S){var k=kt[S>>2];if(w)for(var I=S+4,O=0;O<=k;++O){var L=S+4+O;if(O==k||j[L]==0){if(I=I?F(j,I,L-I):"",M===void 0)var M=I;else M+=String.fromCharCode(0),M+=I;I=L+1}}else{for(M=Array(k),O=0;O<k;++O)M[O]=String.fromCharCode(j[S+4+O]);M=M.join("")}return me(S),M},toWireType:function(S,k){k instanceof ArrayBuffer&&(k=new Uint8Array(k));var I=typeof k=="string";I||k instanceof Uint8Array||k instanceof Uint8ClampedArray||k instanceof Int8Array||et("Cannot pass non-string to std::string");var O=(w&&I?()=>{for(var U=0,q=0;q<k.length;++q){var V=k.charCodeAt(q);55296<=V&&57343>=V&&(V=65536+((V&1023)<<10)|k.charCodeAt(++q)&1023),127>=V?++U:U=2047>=V?U+2:65535>=V?U+3:U+4}return U}:()=>k.length)(),L=hn(4+O+1);if(kt[L>>2]=O,w&&I)D(k,L+4,O+1);else if(I)for(I=0;I<O;++I){var M=k.charCodeAt(I);255<M&&(me(L),et("String has UTF-16 code units that do not fit in 8 bits")),j[L+4+I]=M}else for(I=0;I<O;++I)j[L+4+I]=k[I];return S!==null&&S.push(me,L),L},argPackAdvance:8,readValueFromPointer:Ge,ja:function(S){me(S)}})},m:function(b,v,w){if(w=$t(w),v===2)var S=H,k=B,I=J,O=()=>It,L=1;else v===4&&(S=tt,k=ht,I=at,O=()=>kt,L=2);ne(b,{name:w,fromWireType:function(M){for(var U=kt[M>>2],q=O(),V,it=M+4,ft=0;ft<=U;++ft){var nt=M+4+ft*v;(ft==U||q[nt>>L]==0)&&(it=S(it,nt-it),V===void 0?V=it:(V+=String.fromCharCode(0),V+=it),it=nt+v)}return me(M),V},toWireType:function(M,U){typeof U!="string"&&et("Cannot pass non-string to C++ string type "+w);var q=I(U),V=hn(4+q+v);return kt[V>>2]=q>>L,k(U,V+4,q+v),M!==null&&M.push(me,V),V},argPackAdvance:8,readValueFromPointer:Ge,ja:function(M){me(M)}})},t:function(b,v,w,S,k,I){Gr[b]={name:$t(v),sa:Nt(w,S),la:Nt(k,I),elements:[]}},s:function(b,v,w,S,k,I,O,L,M){Gr[b].elements.push({Aa:v,ya:Nt(w,S),za:k,Ea:I,Da:Nt(O,L),Fa:M})},v:function(b,v,w,S,k,I){Qr[b]={name:$t(v),sa:Nt(w,S),la:Nt(k,I),Ha:[]}},j:function(b,v,w,S,k,I,O,L,M,U){Qr[b].Ha.push({Na:$t(v),Aa:w,ya:Nt(S,k),za:I,Ea:O,Da:Nt(L,M),Fa:U})},G:function(b,v){v=$t(v),ne(b,{Ra:!0,name:v,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},d:function(b,v,w,S){b=un[b],v=ln(v),w=dn(w),b(v,w,null,S)},J:Qs,x:function(b){return b===0?ke(Js()):(b=dn(b),ke(Js()[b]))},c:function(b,v){var w=Bd(b,v),S=w[0];v=S.name+"_$"+w.slice(1).map(function(O){return O.name}).join("_")+"$";var k=ta[v];if(k!==void 0)return k;var I=Array(b-1);return k=Vd((O,L,M,U)=>{for(var q=0,V=0;V<b-1;++V)I[V]=w[V+1].readValueFromPointer(U+q),q+=w[V+1].argPackAdvance;for(O=O[L].apply(O,I),V=0;V<b-1;++V)w[V+1].Ka&&w[V+1].Ka(I[V]);if(!S.Ra)return S.toWireType(M,O)}),ta[v]=k},n:function(b){4<b&&(ee[b].Ca+=1)},w:function(b,v,w,S){b=ln(b);var k=ea[v];return k||(k=Hd(v),ea[v]=k),k(b,w,S)},K:function(){return ke([])},D:function(b){return ke(dn(b))},H:function(b,v){return b=ri(b,"_emval_take_value"),b=b.readValueFromPointer(v),ke(b)},g:function(){vr("")},B:function(b){var v=j.length;if(b>>>=0,2147483648<b)return!1;for(var w=1;4>=w;w*=2){var S=v*(1+.2/w);S=Math.min(S,b+100663296),S=Math.max(b,S),0<S%65536&&(S+=65536-S%65536);t:{try{R.grow(Math.min(2147483648,S)-pt.byteLength+65535>>>16),pe();var k=1;break t}catch{}k=void 0}if(k)return!0}return!1},C:function(){return 0},y:function(){},o:function(b,v,w,S){for(var k=0,I=0;I<w;I++){var O=yt[v>>2],L=yt[v+4>>2];v+=8;for(var M=0;M<L;M++){var U=j[O+M],q=jd[b];U===0||U===10?((b===1?C:P)(F(q,0)),q.length=0):q.push(U)}k+=L}return yt[S>>2]=k,0},A:function(){}};(function(){function b(k){a.asm=k.exports,R=a.asm.L,pe(),Gt=a.asm._,Ne.unshift(a.asm.M),De--,a.monitorRunDependencies&&a.monitorRunDependencies(De),De==0&&mr&&(k=mr,mr=null,k())}function v(k){b(k.instance)}function w(k){return Ld().then(function(I){return WebAssembly.instantiate(I,S)}).then(function(I){return I}).then(k,function(I){P("failed to asynchronously prepare wasm: "+I),vr(I)})}var S={a:Xd};if(De++,a.monitorRunDependencies&&a.monitorRunDependencies(De),a.instantiateWasm)try{return a.instantiateWasm(S,b)}catch(k){return P("Module.instantiateWasm callback failed with error: "+k),!1}return function(){return T||typeof WebAssembly.instantiateStreaming!="function"||Ds()||Yt.startsWith("file://")||typeof fetch!="function"?w(v):fetch(Yt,{credentials:"same-origin"}).then(function(k){return WebAssembly.instantiateStreaming(k,S).then(v,function(I){return P("wasm streaming compile failed: "+I),P("falling back to ArrayBuffer instantiation"),w(v)})})}().catch(p),{}})(),a.___wasm_call_ctors=function(){return(a.___wasm_call_ctors=a.asm.M).apply(null,arguments)},a.__Z6ToCmdsRK6SkPath=function(){return(a.__Z6ToCmdsRK6SkPath=a.asm.N).apply(null,arguments)},a.__Z8FromCmdsmi=function(){return(a.__Z8FromCmdsmi=a.asm.O).apply(null,arguments)},a.__Z7NewPathv=function(){return(a.__Z7NewPathv=a.asm.P).apply(null,arguments)},a.__Z8CopyPathRK6SkPath=function(){return(a.__Z8CopyPathRK6SkPath=a.asm.Q).apply(null,arguments)},a.__Z6EqualsRK6SkPathS1_=function(){return(a.__Z6EqualsRK6SkPathS1_=a.asm.R).apply(null,arguments)},a.__Z11ToSVGStringRK6SkPath=function(){return(a.__Z11ToSVGStringRK6SkPath=a.asm.S).apply(null,arguments)},a.__Z13FromSVGStringNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE=function(){return(a.__Z13FromSVGStringNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE=a.asm.T).apply(null,arguments)},a.__Z13ApplySimplifyR6SkPath=function(){return(a.__Z13ApplySimplifyR6SkPath=a.asm.U).apply(null,arguments)},a.__Z11ApplyPathOpR6SkPathRKS_8SkPathOp=function(){return(a.__Z11ApplyPathOpR6SkPathRKS_8SkPathOp=a.asm.V).apply(null,arguments)},a.__Z10MakeFromOpRK6SkPathS1_8SkPathOp=function(){return(a.__Z10MakeFromOpRK6SkPathS1_8SkPathOp=a.asm.W).apply(null,arguments)},a.__Z14ResolveBuilderR11SkOpBuilder=function(){return(a.__Z14ResolveBuilderR11SkOpBuilder=a.asm.X).apply(null,arguments)},a.__Z8ToCanvasRK6SkPathN10emscripten3valE=function(){return(a.__Z8ToCanvasRK6SkPathN10emscripten3valE=a.asm.Y).apply(null,arguments)},a.__Z8ToPath2DRK6SkPath=function(){return(a.__Z8ToPath2DRK6SkPath=a.asm.Z).apply(null,arguments)};var me=a._free=function(){return(me=a._free=a.asm.$).apply(null,arguments)},hn=a._malloc=function(){return(hn=a._malloc=a.asm.aa).apply(null,arguments)},ia=a.___getTypeName=function(){return(ia=a.___getTypeName=a.asm.ba).apply(null,arguments)};a.___embind_register_native_and_builtin_types=function(){return(a.___embind_register_native_and_builtin_types=a.asm.ca).apply(null,arguments)},a.dynCall_jiji=function(){return(a.dynCall_jiji=a.asm.da).apply(null,arguments)};var ni;mr=function b(){ni||pn(),ni||(mr=b)};function pn(){function b(){if(!ni&&(ni=!0,a.calledRun=!0,!z)){if(Gi(Ne),u(a),a.onRuntimeInitialized&&a.onRuntimeInitialized(),a.postRun)for(typeof a.postRun=="function"&&(a.postRun=[a.postRun]);a.postRun.length;){var v=a.postRun.shift();gr.unshift(v)}Gi(gr)}}if(!(0<De)){if(a.preRun)for(typeof a.preRun=="function"&&(a.preRun=[a.preRun]);a.preRun.length;)Ke();Gi(ie),0<De||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1),b()},1)):b())}}if(a.run=pn,a.preInit)for(typeof a.preInit=="function"&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();return pn(),o.ready}})();r.exports=i})(wd);const bg=wd.exports;let $c=null;class yg extends _d{constructor(t,i,n){if(super(t,i),this._context=this._canvas.getContext("2d",{desynchronized:n}),this._predictionContext=this._predictionCanvas.getContext("2d",{desynchronized:n}),!this._context||!this._predictionContext){console.error("Your browser doesn't support canvas, this demo won't work");return}this._context.lineCap=this._predictionContext.lineCap="round",this._context.lineJoin=this._predictionContext.lineJoin="round",this._context.shadowBlur=this._predictionContext.shadowBlur=2,bg({locateFile:o=>"./wasm/"+o}).then(o=>{$c=o,console.log("Canvas2D with PathKit loaded, desynchronized:",n)})}clearCanvas(){this._context.clearRect(0,0,this._canvas.width,this._canvas.height)}clearPredictionCanvas(){this._predictionContext.clearRect(0,0,this._predictionContext.canvas.width,this._predictionContext.canvas.height)}render(){if(this._paths.forEach(t=>{t.display&&!t.rendered&&(this._drawPointsOnly?this._drawPoints(this._context,t.points):this._drawStroke(this._context,t.points),t.rendered=!0)}),this._currentPath&&this._currentPath.points.length>0&&!this._currentPath.points[this._currentPath.points.length-1].rendered){let t=[...this._currentPath.points];for(let i=t.length-1;i>=0;i--)if(t[i].rendered){t.splice(0,i);break}this._drawPointsOnly?this._drawPoints(this._context,t):this._drawStroke(this._context,t),this._drawPredictedEvents&&(this._predictionContext.clearRect(0,0,this._predictionContext.canvas.width,this._predictionContext.canvas.height),this._currentPath.predictedPoints.length>0&&(this._drawPointsOnly?this._strokePredictedPoints(this._predictionContext,this._currentPath.predictedPoints):this.getCurrentLineStyle(this._currentPath.points[0])!=="brush"&&this.getCurrentLineStyle(this._currentPath.points[0])!=="highlighter"&&this._strokePredictedEvents(this._predictionContext,this._currentPath.predictedPoints))),this._currentPath.points.forEach(i=>{i.rendered=!0}),this._currentPath.predictedPoints=[]}}_hexToRgbColor(t){return{r:"0x"+t[1]+t[2]|0,g:"0x"+t[3]+t[4]|0,b:"0x"+t[5]+t[6]|0}}_drawStroke(t,i){let n=this.getCurrentLineColor(i[0]),o=this._hexToRgbColor(n),a=this.getCurrentLineStyle(i[0]),d=this.getCurrentLineWidth(i[0]),u;switch(i[0].type==="pointerdown"&&(t.lineCap=this._predictionContext.lineCap="round",t.lineJoin=this._predictionContext.lineJoin="round"),a){case"brush":t.filter="blur("+d+"px)",t.strokeStyle=n;break;case"highlighter":t.filter="none",t.strokeStyle="rgba("+o.r+","+o.g+","+o.b+",0.01)";break;default:t.filter="none",t.strokeStyle=n;break}for(u=0;u<i.length-1;u++){let p=this._createPath(i[u].x,i[u].y,i[u+1].x,i[u+1].y);this._drawWithPressure?t.lineWidth=this.getCurrentLineWidth(i[u])*i[u].pressure*2:t.lineWidth=this.getCurrentLineWidth(i[u]),t.stroke(p.toPath2D()),p.delete()}}_drawPoints(t,i){for(let n=0;n<i.length;n++)t.beginPath(),t.fillStyle=this.getCurrentLineColor(i[n]),i[n].coalesced?(t.arc(i[n].x,i[n].y,this.getCurrentLineWidth(i[n])/2,0,Math.PI*2,!0),t.stroke()):(t.arc(i[n].x,i[n].y,this.getCurrentLineWidth(i[n]),0,Math.PI*2,!0),t.fill())}_createPath(t,i,n,o){const a=$c.NewPath();return a.moveTo(t,i),a.lineTo(n,o),a}_strokePredictedEvents(t,i){if(i.length>0&&this._currentPath.points.length>0){let n=this._currentPath.points[this._currentPath.points.length-1];this._drawWithPressure?t.lineWidth=this.getCurrentLineWidth(n)*n.pressure*2:t.lineWidth=this.getCurrentLineWidth(n),t.lineCap="round",this._highlightPredictedEvents?t.strokeStyle="red":t.strokeStyle=this.getCurrentLineColor(n);let o=this._createPath(n.x,n.y,this._currentPath.predictedPoints[0].x,this._currentPath.predictedPoints[0].y);t.stroke(o.toPath2D()),o.delete();let a;for(a=0;a<this._currentPath.predictedPoints.length-1;a++)o=this._createPath(this._currentPath.predictedPoints[a].x,this._currentPath.predictedPoints[a].y,this._currentPath.predictedPoints[a+1].x,this._currentPath.predictedPoints[a+1].y),t.stroke(o.toPath2D()),o.delete()}}_strokePredictedPoints(t,i){let n,o=this._currentPath.points[this._currentPath.points.length-1];for(n=0;n<i.length;n++)t.beginPath(),this._highlightPredictedEvents?t.fillStyle="red":t.fillStyle=this.getCurrentLineColor(o),t.arc(i[n].x,i[n].y,3,0,Math.PI*2,!0),t.fill()}}class _g extends Ns{firstUpdated(){super.firstUpdated(),this.renderer=new yg(this.canvas,this.predictionCanvas,this.desynchronized)}constructor(){super()}}customElements.define("pathkit-canvas",_g);var wg=ct`
  ${mt}

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
    transform: none;
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

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .dialog__body {
    flex: 1 1 auto;
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
`,de=class extends dt{constructor(){super(...arguments),this.hasSlotController=new Ee(this,"footer"),this.localize=new Bt(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new Vc(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),_i(this))}disconnectedCallback(){super.disconnectedCallback(),wi(this)}async show(){if(!this.open)return this.open=!0,se(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,se(this,"sl-after-hide")}requestClose(r){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:r}}).defaultPrevented){const i=Rt(this,"dialog.denyClose",{dir:this.localize.dir()});Lt(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(r){this.open&&r.key==="Escape"&&(r.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),_i(this);const r=this.querySelector("[autofocus]");r&&r.removeAttribute("autofocus"),await Promise.all([Wt(this.dialog),Wt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(r?r.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),r&&r.setAttribute("autofocus","")});const t=Rt(this,"dialog.show",{dir:this.localize.dir()}),i=Rt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Lt(this.panel,t.keyframes,t.options),Lt(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Wt(this.dialog),Wt(this.overlay)]);const r=Rt(this,"dialog.hide",{dir:this.localize.dir()}),t=Rt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Lt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Lt(this.panel,r.keyframes,r.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,wi(this);const i=this.originalTrigger;typeof(i==null?void 0:i.focus)=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}render(){return X`
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
          ${this.noHeader?"":X`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <sl-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="dialog__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click="${()=>this.requestClose("close-button")}"
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};de.styles=wg;E([Q(".dialog")],de.prototype,"dialog",2);E([Q(".dialog__panel")],de.prototype,"panel",2);E([Q(".dialog__overlay")],de.prototype,"overlay",2);E([$({type:Boolean,reflect:!0})],de.prototype,"open",2);E([$({reflect:!0})],de.prototype,"label",2);E([$({attribute:"no-header",type:Boolean,reflect:!0})],de.prototype,"noHeader",2);E([G("open",{waitUntilFirstUpdate:!0})],de.prototype,"handleOpenChange",1);de=E([vt("sl-dialog")],de);Ct("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});Ct("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});Ct("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:250}});Ct("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Ct("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var xg=ct`
  ${mt}

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
`,Vr=class extends dt{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Vr.styles=xg;E([$({type:Boolean,reflect:!0})],Vr.prototype,"vertical",2);E([G("vertical")],Vr.prototype,"handleVerticalChange",1);Vr=E([vt("sl-divider")],Vr);var Eg=ct`
  ${mt}

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
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
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
`,ue=class extends dt{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}getTextLabel(){return Kc(this.defaultSlot)}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleDefaultSlotChange(){const r=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=r;return}r!==this.cachedTextLabel&&(this.cachedTextLabel=r,this.emit("sl-label-change"))}render(){return X`
      <div
        part="base"
        class=${_t({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};ue.styles=Eg;E([Q("slot:not([name])")],ue.prototype,"defaultSlot",2);E([Q(".menu-item")],ue.prototype,"menuItem",2);E([$({type:Boolean,reflect:!0})],ue.prototype,"checked",2);E([$()],ue.prototype,"value",2);E([$({type:Boolean,reflect:!0})],ue.prototype,"disabled",2);E([G("checked")],ue.prototype,"handleCheckedChange",1);E([G("disabled")],ue.prototype,"handleDisabledChange",1);ue=E([vt("sl-menu-item")],ue);var ji=ct`
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
  }

  .form-control--has-help-text .form-control__help-text ::slotted(*) {
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
`,Ag=ct`
  ${mt}
  ${ji}

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
`,Ot=class extends dt{constructor(){super(...arguments),this.formSubmitController=new je(this,{defaultValue:r=>r.defaultValue}),this.hasSlotController=new Ee(this,"help-text","label"),this.hasButtonGroup=!1,this.errorMessage="",this.customErrorMessage="",this.defaultValue="",this.invalid=!1,this.label="",this.helpText="",this.value="",this.name="option",this.required=!1}handleValueChange(){this.hasUpdated&&(this.emit("sl-change"),this.updateCheckedRadio())}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.invalid=!this.validity.valid}checkValidity(){return this.validity.valid}setCustomValidity(r=""){this.customErrorMessage=r,this.errorMessage=r,r?(this.invalid=!0,this.input.setCustomValidity(r)):this.invalid=!1}get validity(){const r=!(this.value&&this.required||!this.required),t=this.customErrorMessage!=="";return{badInput:!1,customError:t,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!(r||t),valueMissing:!r}}reportValidity(){const r=this.validity;return this.errorMessage=this.customErrorMessage||r.valid?"":this.input.validationMessage,this.invalid=!r.valid,r.valid||this.showNativeErrorMessage(),!this.invalid}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(r){const t=r.target;if(t.disabled)return;this.value=t.value,this.getAllRadios().forEach(n=>n.checked=n===t)}handleKeyDown(r){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(r.key))return;const i=this.getAllRadios().filter(d=>!d.disabled),n=(t=i.find(d=>d.checked))!=null?t:i[0],o=r.key===" "?0:["ArrowUp","ArrowLeft"].includes(r.key)?-1:1;let a=i.indexOf(n)+o;a<0&&(a=i.length-1),a>i.length-1&&(a=0),this.getAllRadios().forEach(d=>{d.checked=!1,this.hasButtonGroup||(d.tabIndex=-1)}),this.value=i[a].value,i[a].checked=!0,this.hasButtonGroup?i[a].shadowRoot.querySelector("button").focus():(i[a].tabIndex=0,i[a].focus()),r.preventDefault()}handleLabelClick(){const r=this.getAllRadios(),i=r.find(n=>n.checked)||r[0];i&&i.focus()}handleSlotChange(){var r;const t=this.getAllRadios();if(t.forEach(i=>i.checked=i.value===this.value),this.hasButtonGroup=t.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),!t.some(i=>i.checked))if(this.hasButtonGroup){const i=t[0].shadowRoot.querySelector("button");i.tabIndex=0}else t[0].tabIndex=0;if(this.hasButtonGroup){const i=(r=this.shadowRoot)==null?void 0:r.querySelector("sl-button-group");i&&(i.disableRole=!0)}}showNativeErrorMessage(){this.input.hidden=!1,this.input.reportValidity(),setTimeout(()=>this.input.hidden=!0,1e4)}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.invalid=!this.validity.valid}render(){const r=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!r,n=this.helpText?!0:!!t,o=X`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.handleSlotChange}
        role="presentation"
      ></slot>
    `;return X`
      <fieldset
        part="form-control"
        class=${_t({"form-control":!0,"form-control--medium":!0,"form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":n})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
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

          ${this.hasButtonGroup?X`
                <sl-button-group part="button-group" exportparts="base:button-group__base">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Ot.styles=Ag;E([Q("slot:not([name])")],Ot.prototype,"defaultSlot",2);E([Q(".radio-group__validation-input")],Ot.prototype,"input",2);E([rt()],Ot.prototype,"hasButtonGroup",2);E([rt()],Ot.prototype,"errorMessage",2);E([rt()],Ot.prototype,"customErrorMessage",2);E([rt()],Ot.prototype,"defaultValue",2);E([rt()],Ot.prototype,"invalid",2);E([$()],Ot.prototype,"label",2);E([$({attribute:"help-text"})],Ot.prototype,"helpText",2);E([$({reflect:!0})],Ot.prototype,"value",2);E([$()],Ot.prototype,"name",2);E([$({type:Boolean,reflect:!0})],Ot.prototype,"required",2);E([G("value")],Ot.prototype,"handleValueChange",1);Ot=E([vt("sl-radio-group")],Ot);var Sg=ct`
  ${mt}
  ${ji}

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
    transition: var(--sl-transition-medium) transform ease;
  }

  .select--open .select__icon {
    transform: rotate(-180deg);
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

  .select--small .select__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__label {
    margin: 0 var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__suffix ::slotted(*) {
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

  .select--medium .select__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__label {
    margin: 0 var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__suffix ::slotted(*) {
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

  .select--large .select__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__label {
    margin: 0 var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__suffix ::slotted(*) {
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
`,Kr=(r="value")=>(t,i)=>{const n=t.constructor,o=n.prototype.attributeChangedCallback;n.prototype.attributeChangedCallback=function(a,d,u){var p;const l=n.getPropertyOptions(r),c=typeof l.attribute=="string"?l.attribute:r;if(a===c){const s=l.converter||Ur,f=(typeof s=="function"?s:(p=s==null?void 0:s.fromAttribute)!=null?p:Ur.fromAttribute)(u,l.type);this[r]!==f&&(this[i]=f)}o.call(this,a,d,u)}},ot=class extends dt{constructor(){super(...arguments),this.formSubmitController=new je(this),this.hasSlotController=new Ee(this,"help-text","label"),this.localize=new Bt(this),this.menuItems=[],this.hasFocus=!1,this.isOpen=!1,this.displayLabel="",this.displayTags=[],this.invalid=!1,this.multiple=!1,this.maxTagsVisible=3,this.disabled=!1,this.name="",this.placeholder="",this.size="medium",this.hoist=!1,this.value="",this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.required=!1,this.clearable=!1,this.defaultValue=""}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.resizeMenu()),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.syncItemsFromValue()})}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.invalid=!this.input.checkValidity()}getValueAsArray(){return this.multiple&&this.value===""?[]:Array.isArray(this.value)?this.value:[this.value]}focus(r){this.control.focus(r)}blur(){this.control.blur()}handleBlur(){this.isOpen||(this.hasFocus=!1,this.emit("sl-blur"))}handleClearClick(r){r.stopPropagation(),this.value=this.multiple?[]:"",this.emit("sl-clear"),this.syncItemsFromValue()}handleDisabledChange(){this.disabled&&this.isOpen&&this.dropdown.hide(),this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus||(this.hasFocus=!0,this.emit("sl-focus"))}handleKeyDown(r){const t=r.target,i=this.menuItems[0],n=this.menuItems[this.menuItems.length-1];if(t.tagName.toLowerCase()!=="sl-tag"){if(r.key==="Tab"){this.isOpen&&this.dropdown.hide();return}if(["ArrowDown","ArrowUp"].includes(r.key)){if(r.preventDefault(),this.isOpen||this.dropdown.show(),r.key==="ArrowDown"){this.menu.setCurrentItem(i),i.focus();return}if(r.key==="ArrowUp"){this.menu.setCurrentItem(n),n.focus();return}}r.ctrlKey||r.metaKey||!this.isOpen&&r.key.length===1&&(r.stopPropagation(),r.preventDefault(),this.dropdown.show(),this.menu.typeToSelect(r))}}handleLabelClick(){this.focus()}handleMenuSelect(r){const t=r.detail.item;this.multiple?this.value=this.value.includes(t.value)?this.value.filter(i=>i!==t.value):[...this.value,t.value]:this.value=t.value,this.syncItemsFromValue()}handleMenuShow(){this.resizeMenu(),this.isOpen=!0}handleMenuHide(){this.isOpen=!1,this.control.focus()}handleMenuItemLabelChange(){if(!this.multiple){const r=this.menuItems.find(t=>t.value===this.value);this.displayLabel=r?r.getTextLabel():""}}handleMultipleChange(){var r;const t=this.getValueAsArray();this.value=this.multiple?t:(r=t[0])!=null?r:"",this.syncItemsFromValue()}async handleMenuSlotChange(){this.menuItems=[...this.querySelectorAll("sl-menu-item")];const r=[];this.menuItems.forEach(t=>{r.includes(t.value)&&console.error(`Duplicate value found in <sl-select> menu item: '${t.value}'`,t),r.push(t.value)}),await Promise.all(this.menuItems.map(t=>t.render)),this.syncItemsFromValue()}handleTagInteraction(r){r.composedPath().find(n=>n instanceof HTMLElement?n.classList.contains("tag__remove"):!1)&&r.stopPropagation()}async handleValueChange(){this.syncItemsFromValue(),await this.updateComplete,this.invalid=!this.input.checkValidity(),this.emit("sl-change"),this.emit("sl-input")}resizeMenu(){this.menu.style.width=`${this.control.clientWidth}px`,requestAnimationFrame(()=>this.dropdown.reposition())}syncItemsFromValue(){const r=this.getValueAsArray();if(this.menuItems.forEach(t=>t.checked=r.includes(t.value)),this.multiple){const t=this.menuItems.filter(i=>r.includes(i.value));if(this.displayLabel=t.length>0?t[0].getTextLabel():"",this.displayTags=t.map(i=>X`
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
            @sl-remove=${n=>{n.stopPropagation(),this.disabled||(i.checked=!1,this.syncValueFromItems())}}
          >
            ${i.getTextLabel()}
          </sl-tag>
        `),this.maxTagsVisible>0&&this.displayTags.length>this.maxTagsVisible){const i=this.displayTags.length;this.displayLabel="",this.displayTags=this.displayTags.slice(0,this.maxTagsVisible),this.displayTags.push(X`
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
            +${i-this.maxTagsVisible}
          </sl-tag>
        `)}}else{const t=this.menuItems.find(i=>i.value===r[0]);this.displayLabel=t?t.getTextLabel():"",this.displayTags=[]}}syncValueFromItems(){const t=this.menuItems.filter(i=>i.checked).map(i=>i.value);this.multiple?this.value=this.value.filter(i=>t.includes(i)):this.value=t.length>0?t[0]:""}render(){const r=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.multiple?this.value.length>0:this.value!=="",n=this.label?!0:!!r,o=this.helpText?!0:!!t,a=this.clearable&&!this.disabled&&i;return X`
      <div
        part="form-control"
        class=${_t({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?"false":"true"}
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
              <span part="prefix" class="select__prefix">
                <slot name="prefix"></slot>
              </span>

              <div part="display-label" class="select__label">
                ${this.displayTags.length>0?X` <span part="tags" class="select__tags"> ${this.displayTags} </span> `:this.displayLabel.length>0?this.displayLabel:this.placeholder}
              </div>

              ${a?X`
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

              <span part="suffix" class="select__suffix">
                <slot name="suffix"></slot>
              </span>

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
                .value=${i?"1":""}
                tabindex="-1"
                @focus=${()=>this.control.focus()}
              />
            </div>

            <sl-menu part="menu" id="menu" class="select__menu" @sl-select=${this.handleMenuSelect}>
              <slot @slotchange=${this.handleMenuSlotChange} @sl-label-change=${this.handleMenuItemLabelChange}></slot>
            </sl-menu>
          </sl-dropdown>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ot.styles=Sg;E([Q(".select")],ot.prototype,"dropdown",2);E([Q(".select__control")],ot.prototype,"control",2);E([Q(".select__hidden-select")],ot.prototype,"input",2);E([Q(".select__menu")],ot.prototype,"menu",2);E([rt()],ot.prototype,"hasFocus",2);E([rt()],ot.prototype,"isOpen",2);E([rt()],ot.prototype,"displayLabel",2);E([rt()],ot.prototype,"displayTags",2);E([rt()],ot.prototype,"invalid",2);E([$({type:Boolean,reflect:!0})],ot.prototype,"multiple",2);E([$({attribute:"max-tags-visible",type:Number})],ot.prototype,"maxTagsVisible",2);E([$({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);E([$()],ot.prototype,"name",2);E([$()],ot.prototype,"placeholder",2);E([$()],ot.prototype,"size",2);E([$({type:Boolean})],ot.prototype,"hoist",2);E([$()],ot.prototype,"value",2);E([$({type:Boolean,reflect:!0})],ot.prototype,"filled",2);E([$({type:Boolean,reflect:!0})],ot.prototype,"pill",2);E([$()],ot.prototype,"label",2);E([$()],ot.prototype,"placement",2);E([$({attribute:"help-text"})],ot.prototype,"helpText",2);E([$({type:Boolean,reflect:!0})],ot.prototype,"required",2);E([$({type:Boolean})],ot.prototype,"clearable",2);E([Kr()],ot.prototype,"defaultValue",2);E([G("disabled",{waitUntilFirstUpdate:!0})],ot.prototype,"handleDisabledChange",1);E([G("multiple")],ot.prototype,"handleMultipleChange",1);E([G("value",{waitUntilFirstUpdate:!0})],ot.prototype,"handleValueChange",1);ot=E([vt("sl-select")],ot);var Cg=ct`
  ${mt}

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

  .tag--small .tag__remove {
    margin-inline-start: var(--sl-spacing-2x-small);
    margin-right: calc(-1 * var(--sl-spacing-3x-small));
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
    font-size: 1.4em;
    margin-inline-start: var(--sl-spacing-2x-small);
    margin-inline-end: calc(-1 * var(--sl-spacing-x-small));
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,He=class extends dt{constructor(){super(...arguments),this.localize=new Bt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return X`
      <span
        part="base"
        class=${_t({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <span part="content" class="tag__content">
          <slot></slot>
        </span>

        ${this.removable?X`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
              ></sl-icon-button>
            `:""}
      </span>
    `}};He.styles=Cg;E([$({reflect:!0})],He.prototype,"variant",2);E([$({reflect:!0})],He.prototype,"size",2);E([$({type:Boolean,reflect:!0})],He.prototype,"pill",2);E([$({type:Boolean})],He.prototype,"removable",2);He=E([vt("sl-tag")],He);var kg=ct`
  ${mt}

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
`,Pi=class extends dt{constructor(){super(...arguments),this.typeToSelectString=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}getAllItems(r={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.getAttribute("role")!=="menuitem"||!r.includeDisabled&&t.disabled))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find(r=>r.getAttribute("tabindex")==="0")}setCurrentItem(r){const t=this.getAllItems({includeDisabled:!1}),i=r.disabled?t[0]:r;t.forEach(n=>{n.setAttribute("tabindex",n===i?"0":"-1")})}typeToSelect(r){var t;const i=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),r.key==="Backspace"?r.metaKey||r.ctrlKey?this.typeToSelectString="":this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=r.key.toLowerCase();for(const n of i){const o=(t=n.shadowRoot)==null?void 0:t.querySelector("slot:not([name])");if(Kc(o).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(n),n.focus();break}}}handleClick(r){const i=r.target.closest("sl-menu-item");(i==null?void 0:i.disabled)===!1&&this.emit("sl-select",{detail:{item:i}})}handleKeyDown(r){if(r.key==="Enter"){const t=this.getCurrentItem();r.preventDefault(),t==null||t.click()}if(r.key===" "&&r.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(r.key)){const t=this.getAllItems({includeDisabled:!1}),i=this.getCurrentItem();let n=i?t.indexOf(i):0;if(t.length>0){r.preventDefault(),r.key==="ArrowDown"?n++:r.key==="ArrowUp"?n--:r.key==="Home"?n=0:r.key==="End"&&(n=t.length-1),n<0&&(n=t.length-1),n>t.length-1&&(n=0),this.setCurrentItem(t[n]),t[n].focus();return}}this.typeToSelect(r)}handleMouseDown(r){const t=r.target;t.getAttribute("role")==="menuitem"&&this.setCurrentItem(t)}handleSlotChange(){const r=this.getAllItems({includeDisabled:!1});r.length>0&&this.setCurrentItem(r[0])}render(){return X`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Pi.styles=kg;E([Q("slot")],Pi.prototype,"defaultSlot",2);Pi=E([vt("sl-menu")],Pi);var $g=ct`
  ${mt}

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
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,qt=class extends dt{constructor(){super(...arguments),this.localize=new Bt(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleKeyDown(r){this.open&&r.key==="Escape"&&(r.stopPropagation(),this.hide(),this.focusOnTrigger())}handleDocumentKeyDown(r){var t;if(r.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){r.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var i,n,o;const a=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?(o=(n=document.activeElement)==null?void 0:n.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(a==null?void 0:a.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}}handleDocumentMouseDown(r){const t=r.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(r){const t=r.target;hs(t,this.panel)}handlePanelSelect(r){const t=r.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(r){if(r.key==="Escape"&&this.open){r.stopPropagation(),this.focusOnTrigger(),this.hide();return}if([" ","Enter"].includes(r.key)){r.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const i=t.defaultSlot.assignedElements({flatten:!0}),n=i[0],o=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(r.key)&&(r.preventDefault(),this.open||this.show(),i.length>0&&requestAnimationFrame(()=>{(r.key==="ArrowDown"||r.key==="Home")&&(t.setCurrentItem(n),n.focus()),(r.key==="ArrowUp"||r.key==="End")&&(t.setCurrentItem(o),o.focus())}));const a=["Tab","Shift","Meta","Ctrl","Alt"];this.open&&!a.includes(r.key)&&t.typeToSelect(r)}}handleTriggerKeyUp(r){r.key===" "&&r.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const i=this.trigger.querySelector("slot").assignedElements({flatten:!0}).find(o=>Wc(o).start);let n;if(i){switch(i.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":n=i.button;break;default:n=i}n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,se(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,se(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Wt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:r,options:t}=Rt(this,"dropdown.show",{dir:this.localize.dir()});await Lt(this.popup.popup,r,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Wt(this);const{keyframes:r,options:t}=Rt(this,"dropdown.hide",{dir:this.localize.dir()});await Lt(this.popup.popup,r,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return X`
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
        <span
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <div
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open?"false":"true"}
          aria-labelledby="dropdown"
        >
          <slot></slot>
        </div>
      </sl-popup>
    `}};qt.styles=$g;E([Q(".dropdown")],qt.prototype,"popup",2);E([Q(".dropdown__trigger")],qt.prototype,"trigger",2);E([Q(".dropdown__panel")],qt.prototype,"panel",2);E([$({type:Boolean,reflect:!0})],qt.prototype,"open",2);E([$({reflect:!0})],qt.prototype,"placement",2);E([$({type:Boolean,reflect:!0})],qt.prototype,"disabled",2);E([$({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],qt.prototype,"stayOpenOnSelect",2);E([$({attribute:!1})],qt.prototype,"containingElement",2);E([$({type:Number})],qt.prototype,"distance",2);E([$({type:Number})],qt.prototype,"skidding",2);E([$({type:Boolean})],qt.prototype,"hoist",2);E([G("open",{waitUntilFirstUpdate:!0})],qt.prototype,"handleOpenChange",1);qt=E([vt("sl-dropdown")],qt);Ct("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:100,easing:"ease"}});Ct("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:100,easing:"ease"}});var Pg=ct`
  ${mt}
  ${ji}

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
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow, var(--sl-transition-fast) transform;
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
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow, var(--sl-transition-fast) transform;
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
    transform: translateX(calc(-1 * var(--sl-tooltip-arrow-size)));
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
`,Tg=r=>r.strings===void 0,Ig={},Lg=(r,t=Ig)=>r._$AH=t,Xi=zi(class extends Ni{constructor(r){if(super(r),r.type!==be.PROPERTY&&r.type!==be.ATTRIBUTE&&r.type!==be.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Tg(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[t]){if(t===jt||t===Et)return t;const i=r.element,n=r.name;if(r.type===be.PROPERTY){if(t===i[n])return jt}else if(r.type===be.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(n))return jt}else if(r.type===be.ATTRIBUTE&&i.getAttribute(n)===t+"")return jt;return Lg(r),t}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var St=class extends dt{constructor(){super(...arguments),this.formSubmitController=new je(this),this.hasSlotController=new Ee(this,"help-text","label"),this.localize=new Bt(this),this.hasFocus=!1,this.hasTooltip=!1,this.invalid=!1,this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=r=>r.toString(),this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}focus(r){this.input.focus(r)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value),this.emit("sl-change"))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value),this.emit("sl-change"))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.invalid=!this.input.checkValidity()}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-change"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleValueChange(){this.invalid=!this.input.checkValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncRange(){const r=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(r),this.tooltip!=="none"&&this.syncTooltip(r)}syncProgress(r){this.input.style.setProperty("--percent",`${r*100}%`)}syncTooltip(r){if(this.output!==null){const t=this.input.offsetWidth,i=this.output.offsetWidth,n=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",a=t*r;if(o){const d=`${t-a}px + ${r} * ${n}`;this.output.style.transform=`translateX(calc((${d} - ${i/2}px - ${n} / 2)))`}else{const d=`${a}px - ${r} * ${n}`;this.output.style.transform=`translateX(calc(${d} - ${i/2}px + ${n} / 2))`}}}render(){const r=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!r,n=this.helpText?!0:!!t;return X`
      <div
        part="form-control"
        class=${_t({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
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
              type="range"
              class="range__control"
              name=${K(this.name)}
              ?disabled=${this.disabled}
              min=${K(this.min)}
              max=${K(this.max)}
              step=${K(this.step)}
              .value=${Xi(this.value.toString())}
              aria-describedby="help-text"
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?X`
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
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};St.styles=Pg;E([Q(".range__control")],St.prototype,"input",2);E([Q(".range__tooltip")],St.prototype,"output",2);E([rt()],St.prototype,"hasFocus",2);E([rt()],St.prototype,"hasTooltip",2);E([rt()],St.prototype,"invalid",2);E([$()],St.prototype,"name",2);E([$({type:Number})],St.prototype,"value",2);E([$()],St.prototype,"label",2);E([$({attribute:"help-text"})],St.prototype,"helpText",2);E([$({type:Boolean,reflect:!0})],St.prototype,"disabled",2);E([$({type:Number})],St.prototype,"min",2);E([$({type:Number})],St.prototype,"max",2);E([$({type:Number})],St.prototype,"step",2);E([$()],St.prototype,"tooltip",2);E([$({attribute:!1})],St.prototype,"tooltipFormatter",2);E([Kr()],St.prototype,"defaultValue",2);E([G("value",{waitUntilFirstUpdate:!0})],St.prototype,"handleValueChange",1);E([G("disabled",{waitUntilFirstUpdate:!0})],St.prototype,"handleDisabledChange",1);E([G("hasTooltip",{waitUntilFirstUpdate:!0})],St.prototype,"syncRange",1);St=E([vt("sl-range")],St);var Rg=ct`
  ${mt}

  :host {
    --height: var(--sl-toggle-size);
    --thumb-size: calc(var(--sl-toggle-size) + 4px);
    --width: calc(var(--height) * 2);

    display: inline-block;
  }

  .switch {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
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
    transform: translateX(calc((var(--width) - var(--height)) / -2));
    transition: var(--sl-transition-fast) transform ease, var(--sl-transition-fast) background-color,
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
    transform: translateX(calc((var(--width) - var(--height)) / 2));
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
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Vt=class extends dt{constructor(){super(...arguments),this.formSubmitController=new je(this,{value:r=>r.checked?r.value:void 0,defaultValue:r=>r.defaultChecked,setValue:(r,t)=>r.checked=t}),this.hasFocus=!1,this.invalid=!1,this.disabled=!1,this.required=!1,this.checked=!1,this.defaultChecked=!1}firstUpdated(){this.invalid=!this.input.checkValidity()}click(){this.input.click()}focus(r){this.input.focus(r)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleCheckedChange(){this.input.checked=this.checked,this.invalid=!this.input.checkValidity()}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(r){r.key==="ArrowLeft"&&(r.preventDefault(),this.checked=!1,this.emit("sl-change")),r.key==="ArrowRight"&&(r.preventDefault(),this.checked=!0,this.emit("sl-change"))}render(){return X`
      <label
        part="base"
        class=${_t({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus})}
      >
        <input
          class="switch__input"
          type="checkbox"
          name=${K(this.name)}
          value=${K(this.value)}
          .checked=${Xi(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <span part="label" class="switch__label">
          <slot></slot>
        </span>
      </label>
    `}};Vt.styles=Rg;E([Q('input[type="checkbox"]')],Vt.prototype,"input",2);E([rt()],Vt.prototype,"hasFocus",2);E([rt()],Vt.prototype,"invalid",2);E([$()],Vt.prototype,"name",2);E([$()],Vt.prototype,"value",2);E([$({type:Boolean,reflect:!0})],Vt.prototype,"disabled",2);E([$({type:Boolean,reflect:!0})],Vt.prototype,"required",2);E([$({type:Boolean,reflect:!0})],Vt.prototype,"checked",2);E([Kr("checked")],Vt.prototype,"defaultChecked",2);E([G("checked",{waitUntilFirstUpdate:!0})],Vt.prototype,"handleCheckedChange",1);E([G("disabled",{waitUntilFirstUpdate:!0})],Vt.prototype,"handleDisabledChange",1);Vt=E([vt("sl-switch")],Vt);var Og=0;function xd(){return++Og}var Mg=ct`
  ${mt}

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
    font-size: var(--sl-font-size-large);
    margin-inline-start: var(--sl-spacing-2x-small);
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
`,he=class extends dt{constructor(){super(...arguments),this.localize=new Bt(this),this.attrId=xd(),this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}focus(r){this.tab.focus(r)}blur(){this.tab.blur()}handleCloseClick(){this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return this.id=this.id.length>0?this.id:this.componentId,X`
      <div
        part="base"
        class=${_t({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?X`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};he.styles=Mg;E([Q(".tab")],he.prototype,"tab",2);E([$({reflect:!0})],he.prototype,"panel",2);E([$({type:Boolean,reflect:!0})],he.prototype,"active",2);E([$({type:Boolean})],he.prototype,"closable",2);E([$({type:Boolean,reflect:!0})],he.prototype,"disabled",2);E([G("active")],he.prototype,"handleActiveChange",1);E([G("disabled")],he.prototype,"handleDisabledChange",1);he=E([vt("sl-tab")],he);var zg=ct`
  ${mt}

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
    transition: var(--sl-transition-fast) transform ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
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
`,Kt=class extends dt{constructor(){super(...arguments),this.localize=new Bt(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.preventIndicatorTransition(),this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(r=>{r.some(t=>!["aria-labelledby","aria-controls"].includes(t.attributeName))&&setTimeout(()=>this.setAriaLabels()),r.some(t=>t.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((t,i)=>{var n;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((n=this.getActiveTab())!=null?n:this.tabs[0],{emitEvents:!1}),i.unobserve(t[0].target))}).observe(this.tabGroup)})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}show(r){const t=this.tabs.find(i=>i.panel===r);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}getAllTabs(r={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(i=>r.includeDisabled?i.tagName.toLowerCase()==="sl-tab":i.tagName.toLowerCase()==="sl-tab"&&!i.disabled)}getAllPanels(){return[...this.body.querySelector("slot").assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(r=>r.active)}handleClick(r){const i=r.target.closest("sl-tab");(i==null?void 0:i.closest("sl-tab-group"))===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(r){const i=r.target.closest("sl-tab");if((i==null?void 0:i.closest("sl-tab-group"))===this&&(["Enter"," "].includes(r.key)&&i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),r.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(r.key))){const o=this.tabs.find(d=>d.matches(":focus")),a=this.localize.dir()==="rtl";if((o==null?void 0:o.tagName.toLowerCase())==="sl-tab"){let d=this.tabs.indexOf(o);r.key==="Home"?d=0:r.key==="End"?d=this.tabs.length-1:["top","bottom"].includes(this.placement)&&r.key===(a?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&r.key==="ArrowUp"?d--:(["top","bottom"].includes(this.placement)&&r.key===(a?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&r.key==="ArrowDown")&&d++,d<0&&(d=this.tabs.length-1),d>this.tabs.length-1&&(d=0),this.tabs[d].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[d],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&hs(this.tabs[d],this.nav,"horizontal"),r.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}setActiveTab(r,t){if(t=At({emitEvents:!0,scrollBehavior:"auto"},t),r!==this.activeTab&&!r.disabled){const i=this.activeTab;this.activeTab=r,this.tabs.map(n=>n.active=n===this.activeTab),this.panels.map(n=>{var o;return n.active=n.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&hs(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(r=>{const t=this.panels.find(i=>i.name===r.panel);t&&(r.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",r.getAttribute("id")))})}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}repositionIndicator(){const r=this.getActiveTab();if(!r)return;const t=r.clientWidth,i=r.clientHeight,n=this.localize.dir()==="rtl",o=this.getAllTabs(),d=o.slice(0,o.indexOf(r)).reduce((u,p)=>({left:u.left+p.clientWidth,top:u.top+p.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.transform=n?`translateX(${-1*d.left}px)`:`translateX(${d.left}px)`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.transform=`translateY(${d.top}px)`;break}}preventIndicatorTransition(){const r=this.indicator.style.transition;this.indicator.style.transition="none",requestAnimationFrame(()=>{this.indicator.style.transition=r})}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator()}render(){const r=this.localize.dir()==="rtl";return X`
      <div
        part="base"
        class=${_t({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?X`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${r?"chevron-right":"chevron-left"}
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

          ${this.hasScrollControls?X`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${r?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <div part="body" class="tab-group__body">
          <slot @slotchange=${this.syncTabsAndPanels}></slot>
        </div>
      </div>
    `}};Kt.styles=zg;E([Q(".tab-group")],Kt.prototype,"tabGroup",2);E([Q(".tab-group__body")],Kt.prototype,"body",2);E([Q(".tab-group__nav")],Kt.prototype,"nav",2);E([Q(".tab-group__indicator")],Kt.prototype,"indicator",2);E([rt()],Kt.prototype,"hasScrollControls",2);E([$()],Kt.prototype,"placement",2);E([$()],Kt.prototype,"activation",2);E([$({attribute:"no-scroll-controls",type:Boolean})],Kt.prototype,"noScrollControls",2);E([G("noScrollControls",{waitUntilFirstUpdate:!0})],Kt.prototype,"updateScrollControls",1);E([G("placement",{waitUntilFirstUpdate:!0})],Kt.prototype,"syncIndicator",1);Kt=E([vt("sl-tab-group")],Kt);var Ng=ct`
  ${mt}

  :host {
    --padding: 0;

    display: block;
  }

  .tab-panel {
    padding: var(--padding);
  }

  .tab-panel:not(.tab-panel--active) {
    display: none;
  }
`,ur=class extends dt{constructor(){super(...arguments),this.attrId=xd(),this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return X`
      <div
        part="base"
        class=${_t({"tab-panel":!0,"tab-panel--active":this.active})}
      >
        <slot></slot>
      </div>
    `}};ur.styles=Ng;E([$({reflect:!0})],ur.prototype,"name",2);E([$({type:Boolean,reflect:!0})],ur.prototype,"active",2);E([G("active")],ur.prototype,"handleActiveChange",1);ur=E([vt("sl-tab-panel")],ur);class Ed extends Jt{static get properties(){return{renderingType:{type:String,reflectToAttribute:!0,attribute:!0},desynchronizedEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},pointerRawUpdateEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},pressureEventsEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},predictedEventsEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},predictedEventsHighlightEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},predictedType:{type:String,reflectToAttribute:!0,attribute:!0},numOfPredictionPoints:{type:Number,reflectToAttribute:!0,attribute:!0},coalescedEventsEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawPointsOnlyEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}set renderingType(t){let i=this._renderingType;this._renderingType=t;let n=new CustomEvent("renderingType-changed",{detail:{renderingType:t},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("renderingType",i)}get renderingType(){return this._renderingType}set desynchronizedEnabled(t){let i=this._desynchronizedEnabled;this._desynchronizedEnabled=t;let n=new CustomEvent("desynchronizedEnabled-changed",{detail:{desynchronizedEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("desynchronizedEnabled",i)}get desynchronizedEnabled(){return this._desynchronizedEnabled}set pointerRawUpdateEnabled(t){let i=this._pointerRawUpdateEnabled;this._pointerRawUpdateEnabled=t;let n=new CustomEvent("pointerRawUpdateEnabled-changed",{detail:{pointerRawUpdateEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("pointerRawUpdateEnabled",i)}get pointerRawUpdateEnabled(){return this._pointerRawUpdateEnabled}set pressureEventsEnabled(t){let i=this._pressureEventsEnabled;this._pressureEventsEnabled=t;let n=new CustomEvent("pressureEventsEnabled-changed",{detail:{pressureEventsEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("pressureEventsEnabled",i)}get pressureEventsEnabled(){return this._pressureEventsEnabled}set predictedEventsEnabled(t){let i=this._predictedEventsEnabled;this._predictedEventsEnabled=t;let n=new CustomEvent("predictedEventsEnabled-changed",{detail:{predictedEventsEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("predictedEventsEnabled",i)}get predictedEventsEnabled(){return this._predictedEventsEnabled}set predictedEventsHighlightEnabled(t){let i=this._predictedEventsHighlightEnabled;this._predictedEventsHighlightEnabled=t;let n=new CustomEvent("predictedEventsHighlightEnabled-changed",{detail:{predictedEventsHighlightEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("predictedEventsHighlightEnabled",i)}get predictedEventsHighlightEnabled(){return this._predictedEventsHighlightEnabled}set predictionType(t){let i=this._predictionType;this._predictionType=t;let n=new CustomEvent("predictionType-changed",{detail:{predictionType:t},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("predictionType",i)}get predictionType(){return this._predictionType}set numOfPredictionPoints(t){let i=this._numOfPredictionPoints;this._numOfPredictionPoints=t;let n=new CustomEvent("numOfPredictionPoints-changed",{detail:{numOfPredictionPoints:t},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("numOfPredictionPoints",i)}get numOfPredictionPoints(){return this._numOfPredictionPoints}set coalescedEventsEnabled(t){let i=this._coalescedEventsEnabled;this._coalescedEventsEnabled=t;let n=new CustomEvent("coalescedEventsEnabled-changed",{detail:{coalescedEventsEnabled:t,bubbles:!0,composed:!0}});this.dispatchEvent(n),this.requestUpdate("coalescedEventsEnabled",i)}get coalescedEventsEnabled(){return this._coalescedEventsEnabled}set drawPointsOnlyEnabled(t){let i=this._drawPointsOnlyEnabled;this._drawPointsOnlyEnabled=t;let n=new CustomEvent("drawPointsOnlyEnabled-changed",{detail:{drawPointsOnlyEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("drawPointsOnlyEnabled",i)}get drawPointsOnlyEnabled(){return this._drawPointsOnlyEnabled}show(){this._dialog.show()}_triggerPropertyUpdate(){this.desynchronizedEnabled=this.desynchronizedEnabled,this.pointerRawUpdateEnabled=this.pointerRawUpdateEnabled,this.pressureEventsEnabled=this.pressureEventsEnabled,this.predictedEventsEnabled=this.predictedEventsEnabled,this.predictedEventsHighlightEnabled=this.predictedEventsHighlightEnabled,this.predictionType=this.predictionType,this.numOfPredictionPoints=this.numOfPredictionPoints,this.coalescedEventsEnabled=this.coalescedEventsEnabled,this.drawPointsOnlyEnabled=this.drawPointsOnlyEnabled}_renderingTypeModeChanged(){this.renderingType=this._renderingModeSelect.value,this._triggerPropertyUpdate()}_desynchronizedSwitchChanged(){this.desynchronizedEnabled=this._desynchronizedSwitch.checked}_isPointerRawUpdateSupported(){return typeof this.onpointerrawupdate<"u"}_pointerRawSwitchChanged(){this.pointerRawUpdateEnabled=this._pointerRawSwitch.checked,this._pointerRawSwitch.checked&&(this.predictedEventsEnabled=this._predictionSwitch.checked=!1,this.predictedEventsHighlightEnabled=this._predictionHighlightSwitch.checked=!1,this._predictionModeSelect.disabled=this._predictionPointsRange.disabled=!this._predictionSwitch.checked)}_drawPointsOnlyChanged(){this.drawPointsOnlyEnabled=this._drawPointsSwitch.checked}_coalescedEventsSwitchChanged(){this.coalescedEventsEnabled=this._coalescedEventsSwitch.checked}_pressureEventsSwitchChanged(){this.pressureEventsEnabled=this._penPressureSwitch.checked}_predictedEventsSwitchChanged(){this.predictedEventsEnabled=this._predictionSwitch.checked,this._predictionHighlightSwitch.disabled=!this._predictionSwitch.checked,this._predictionSwitch.checked?this.pointerRawUpdateEnabled=this._pointerRawSwitch.checked=!1:this.predictedEventsHighlightEnabled=this._predictionHighlightSwitch.checked=!1,this._predictionModeSelect.disabled=this._predictionPointsRange.disabled=!this._predictionSwitch.checked}_predictedEventsHighlightSwitchChanged(){this.predictedEventsHighlightEnabled=this._predictionHighlightSwitch.checked}_predictionTypeSwitchChanged(){this.predictionType=this._predictionModeSelect.value}_predictionPointsRangeChanged(){this.numOfPredictionPoints=this._predictionPointsRange.value}firstUpdated(){this._dialog=this.shadowRoot.querySelector("#dialog"),this._dialog.querySelector('sl-button[slot="footer"]').addEventListener("click",()=>this._dialog.hide()),this._renderingModeSelect=this.shadowRoot.querySelector("#rendering-mode-select"),this._desynchronizedSwitch=this.shadowRoot.querySelector("#desynchronized-switch"),this._drawPointsSwitch=this.shadowRoot.querySelector("#draw-points-switch"),this._pointerRawSwitch=this.shadowRoot.querySelector("#pointerraw-switch"),this._coalescedEventsSwitch=this.shadowRoot.querySelector("#coalesced-switch"),this._penPressureSwitch=this.shadowRoot.querySelector("#pen-pressure-switch"),this._predictionSwitch=this.shadowRoot.querySelector("#predictions-switch"),this._predictionHighlightSwitch=this.shadowRoot.querySelector("#predictions-highlight-switch"),this._predictionModeSelect=this.shadowRoot.querySelector("#prediction-mode-select"),this._predictionPointsRange=this.shadowRoot.querySelector("#prediction-points-range"),this.desynchronizedEnabled=this._desynchronizedSwitch.checked=!0,this.predictedEventsEnabled=this._predictionSwitch.checked=!0,this.predictedEventsHighlightEnabled=this._predictionHighlightSwitch.checked=!1,this.pressureEventsEnabled=this._penPressureSwitch.checked=!0,this.coalescedEventsEnabled=this._coalescedEventsSwitch.checked=!0,this._isPointerRawUpdateSupported()||(this._pointerRawSwitch.disabled=!0),this._triggerPropertyUpdate()}constructor(){super(),this._desynchronizedEnabled=!1,this._drawingPreferencesCheckbox=!1,this._pointerRawUpdateEnabled=!1,this._pressureEventsEnabled=!1,this._predictedEventsEnabled=!1,this._predictedEventsHighlightEnabled=!1,this._predictionType="custom",this._coalescedEventsEnabled=!1,this._drawPointsOnlyEnabled=!1,this._numOfPredictionPoints=1}render(){return oe`
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
        `}}xt(Ed,"styles",Re`
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
    `);customElements.define("settings-dialog",Ed);var Dg=ct`
  ${mt}

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
`,hr=class extends dt{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return X`
      <span
        part="base"
        class=${_t({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};hr.styles=Dg;E([$({reflect:!0})],hr.prototype,"variant",2);E([$({type:Boolean,reflect:!0})],hr.prototype,"pill",2);E([$({type:Boolean,reflect:!0})],hr.prototype,"pulse",2);hr=E([vt("sl-badge")],hr);function is(r,t){var i;function n(a){const d=r.getBoundingClientRect(),u=r.ownerDocument.defaultView,p=d.left+u.pageXOffset,l=d.top+u.pageYOffset,c=a.pageX-p,s=a.pageY-l;t!=null&&t.onMove&&t.onMove(c,s)}function o(){document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",o),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",n,{passive:!0}),document.addEventListener("pointerup",o),((i=t==null?void 0:t.initialEvent)==null?void 0:i.type)==="pointermove"&&n(t.initialEvent)}function Ft(r,t,i){return r<t?t:r>i?i:r}var $e=zi(class extends Ni{constructor(r){var t;if(super(r),r.type!==be.ATTRIBUTE||r.name!=="style"||((t=r.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,i)=>{const n=r[i];return n==null?t:t+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(r,[t]){const{style:i}=r.element;if(this.vt===void 0){this.vt=new Set;for(const n in t)this.vt.add(n);return this.render(t)}this.vt.forEach(n=>{t[n]==null&&(this.vt.delete(n),n.includes("-")?i.removeProperty(n):i[n]="")});for(const n in t){const o=t[n];o!=null&&(this.vt.add(n),n.includes("-")?i.setProperty(n,o):i[n]=o)}return jt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ug=ct`
  ${mt}

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
    transition: var(--sl-transition-fast) transform;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    transform: scale(1.5);
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
`,Ad=Oe({"node_modules/color-name/index.js"(r,t){t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}}),qg=Oe({"node_modules/simple-swizzle/node_modules/is-arrayish/index.js"(r,t){t.exports=function(n){return!n||typeof n=="string"?!1:n instanceof Array||Array.isArray(n)||n.length>=0&&(n.splice instanceof Function||Object.getOwnPropertyDescriptor(n,n.length-1)&&n.constructor.name!=="String")}}}),Fg=Oe({"node_modules/simple-swizzle/index.js"(r,t){var i=qg(),n=Array.prototype.concat,o=Array.prototype.slice,a=t.exports=function(u){for(var p=[],l=0,c=u.length;l<c;l++){var s=u[l];i(s)?p=n.call(p,o.call(s)):p.push(s)}return p};a.wrap=function(d){return function(){return d(a(arguments))}}}}),Wg=Oe({"node_modules/color-string/index.js"(r,t){var i=Ad(),n=Fg(),o=Object.hasOwnProperty,a={};for(d in i)o.call(i,d)&&(a[i[d]]=d);var d,u=t.exports={to:{},get:{}};u.get=function(c){var s=c.substring(0,3).toLowerCase(),h,f;switch(s){case"hsl":h=u.get.hsl(c),f="hsl";break;case"hwb":h=u.get.hwb(c),f="hwb";break;default:h=u.get.rgb(c),f="rgb";break}return h?{model:f,value:h}:null},u.get.rgb=function(c){if(!c)return null;var s=/^#([a-f0-9]{3,4})$/i,h=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,f=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,g=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,m=/^(\w+)$/,y=[0,0,0,1],A,x,C;if(A=c.match(h)){for(C=A[2],A=A[1],x=0;x<3;x++){var P=x*2;y[x]=parseInt(A.slice(P,P+2),16)}C&&(y[3]=parseInt(C,16)/255)}else if(A=c.match(s)){for(A=A[1],C=A[3],x=0;x<3;x++)y[x]=parseInt(A[x]+A[x],16);C&&(y[3]=parseInt(C+C,16)/255)}else if(A=c.match(f)){for(x=0;x<3;x++)y[x]=parseInt(A[x+1],0);A[4]&&(A[5]?y[3]=parseFloat(A[4])*.01:y[3]=parseFloat(A[4]))}else if(A=c.match(g)){for(x=0;x<3;x++)y[x]=Math.round(parseFloat(A[x+1])*2.55);A[4]&&(A[5]?y[3]=parseFloat(A[4])*.01:y[3]=parseFloat(A[4]))}else return(A=c.match(m))?A[1]==="transparent"?[0,0,0,0]:o.call(i,A[1])?(y=i[A[1]],y[3]=1,y):null:null;for(x=0;x<3;x++)y[x]=p(y[x],0,255);return y[3]=p(y[3],0,1),y},u.get.hsl=function(c){if(!c)return null;var s=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,h=c.match(s);if(h){var f=parseFloat(h[4]),g=(parseFloat(h[1])%360+360)%360,m=p(parseFloat(h[2]),0,100),y=p(parseFloat(h[3]),0,100),A=p(isNaN(f)?1:f,0,1);return[g,m,y,A]}return null},u.get.hwb=function(c){if(!c)return null;var s=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,h=c.match(s);if(h){var f=parseFloat(h[4]),g=(parseFloat(h[1])%360+360)%360,m=p(parseFloat(h[2]),0,100),y=p(parseFloat(h[3]),0,100),A=p(isNaN(f)?1:f,0,1);return[g,m,y,A]}return null},u.to.hex=function(){var c=n(arguments);return"#"+l(c[0])+l(c[1])+l(c[2])+(c[3]<1?l(Math.round(c[3]*255)):"")},u.to.rgb=function(){var c=n(arguments);return c.length<4||c[3]===1?"rgb("+Math.round(c[0])+", "+Math.round(c[1])+", "+Math.round(c[2])+")":"rgba("+Math.round(c[0])+", "+Math.round(c[1])+", "+Math.round(c[2])+", "+c[3]+")"},u.to.rgb.percent=function(){var c=n(arguments),s=Math.round(c[0]/255*100),h=Math.round(c[1]/255*100),f=Math.round(c[2]/255*100);return c.length<4||c[3]===1?"rgb("+s+"%, "+h+"%, "+f+"%)":"rgba("+s+"%, "+h+"%, "+f+"%, "+c[3]+")"},u.to.hsl=function(){var c=n(arguments);return c.length<4||c[3]===1?"hsl("+c[0]+", "+c[1]+"%, "+c[2]+"%)":"hsla("+c[0]+", "+c[1]+"%, "+c[2]+"%, "+c[3]+")"},u.to.hwb=function(){var c=n(arguments),s="";return c.length>=4&&c[3]!==1&&(s=", "+c[3]),"hwb("+c[0]+", "+c[1]+"%, "+c[2]+"%"+s+")"},u.to.keyword=function(c){return a[c.slice(0,3)]};function p(c,s,h){return Math.min(Math.max(s,c),h)}function l(c){var s=Math.round(c).toString(16).toUpperCase();return s.length<2?"0"+s:s}}}),Sd=Oe({"node_modules/color-convert/conversions.js"(r,t){var i=Ad(),n={};for(const d of Object.keys(i))n[i[d]]=d;var o={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};t.exports=o;for(const d of Object.keys(o)){if(!("channels"in o[d]))throw new Error("missing channels property: "+d);if(!("labels"in o[d]))throw new Error("missing channel labels property: "+d);if(o[d].labels.length!==o[d].channels)throw new Error("channel and label counts mismatch: "+d);const{channels:u,labels:p}=o[d];delete o[d].channels,delete o[d].labels,Object.defineProperty(o[d],"channels",{value:u}),Object.defineProperty(o[d],"labels",{value:p})}o.rgb.hsl=function(d){const u=d[0]/255,p=d[1]/255,l=d[2]/255,c=Math.min(u,p,l),s=Math.max(u,p,l),h=s-c;let f,g;s===c?f=0:u===s?f=(p-l)/h:p===s?f=2+(l-u)/h:l===s&&(f=4+(u-p)/h),f=Math.min(f*60,360),f<0&&(f+=360);const m=(c+s)/2;return s===c?g=0:m<=.5?g=h/(s+c):g=h/(2-s-c),[f,g*100,m*100]},o.rgb.hsv=function(d){let u,p,l,c,s;const h=d[0]/255,f=d[1]/255,g=d[2]/255,m=Math.max(h,f,g),y=m-Math.min(h,f,g),A=function(x){return(m-x)/6/y+1/2};return y===0?(c=0,s=0):(s=y/m,u=A(h),p=A(f),l=A(g),h===m?c=l-p:f===m?c=1/3+u-l:g===m&&(c=2/3+p-u),c<0?c+=1:c>1&&(c-=1)),[c*360,s*100,m*100]},o.rgb.hwb=function(d){const u=d[0],p=d[1];let l=d[2];const c=o.rgb.hsl(d)[0],s=1/255*Math.min(u,Math.min(p,l));return l=1-1/255*Math.max(u,Math.max(p,l)),[c,s*100,l*100]},o.rgb.cmyk=function(d){const u=d[0]/255,p=d[1]/255,l=d[2]/255,c=Math.min(1-u,1-p,1-l),s=(1-u-c)/(1-c)||0,h=(1-p-c)/(1-c)||0,f=(1-l-c)/(1-c)||0;return[s*100,h*100,f*100,c*100]};function a(d,u){return(d[0]-u[0])**2+(d[1]-u[1])**2+(d[2]-u[2])**2}o.rgb.keyword=function(d){const u=n[d];if(u)return u;let p=1/0,l;for(const c of Object.keys(i)){const s=i[c],h=a(d,s);h<p&&(p=h,l=c)}return l},o.keyword.rgb=function(d){return i[d]},o.rgb.xyz=function(d){let u=d[0]/255,p=d[1]/255,l=d[2]/255;u=u>.04045?((u+.055)/1.055)**2.4:u/12.92,p=p>.04045?((p+.055)/1.055)**2.4:p/12.92,l=l>.04045?((l+.055)/1.055)**2.4:l/12.92;const c=u*.4124+p*.3576+l*.1805,s=u*.2126+p*.7152+l*.0722,h=u*.0193+p*.1192+l*.9505;return[c*100,s*100,h*100]},o.rgb.lab=function(d){const u=o.rgb.xyz(d);let p=u[0],l=u[1],c=u[2];p/=95.047,l/=100,c/=108.883,p=p>.008856?p**(1/3):7.787*p+16/116,l=l>.008856?l**(1/3):7.787*l+16/116,c=c>.008856?c**(1/3):7.787*c+16/116;const s=116*l-16,h=500*(p-l),f=200*(l-c);return[s,h,f]},o.hsl.rgb=function(d){const u=d[0]/360,p=d[1]/100,l=d[2]/100;let c,s,h;if(p===0)return h=l*255,[h,h,h];l<.5?c=l*(1+p):c=l+p-l*p;const f=2*l-c,g=[0,0,0];for(let m=0;m<3;m++)s=u+1/3*-(m-1),s<0&&s++,s>1&&s--,6*s<1?h=f+(c-f)*6*s:2*s<1?h=c:3*s<2?h=f+(c-f)*(2/3-s)*6:h=f,g[m]=h*255;return g},o.hsl.hsv=function(d){const u=d[0];let p=d[1]/100,l=d[2]/100,c=p;const s=Math.max(l,.01);l*=2,p*=l<=1?l:2-l,c*=s<=1?s:2-s;const h=(l+p)/2,f=l===0?2*c/(s+c):2*p/(l+p);return[u,f*100,h*100]},o.hsv.rgb=function(d){const u=d[0]/60,p=d[1]/100;let l=d[2]/100;const c=Math.floor(u)%6,s=u-Math.floor(u),h=255*l*(1-p),f=255*l*(1-p*s),g=255*l*(1-p*(1-s));switch(l*=255,c){case 0:return[l,g,h];case 1:return[f,l,h];case 2:return[h,l,g];case 3:return[h,f,l];case 4:return[g,h,l];case 5:return[l,h,f]}},o.hsv.hsl=function(d){const u=d[0],p=d[1]/100,l=d[2]/100,c=Math.max(l,.01);let s,h;h=(2-p)*l;const f=(2-p)*c;return s=p*c,s/=f<=1?f:2-f,s=s||0,h/=2,[u,s*100,h*100]},o.hwb.rgb=function(d){const u=d[0]/360;let p=d[1]/100,l=d[2]/100;const c=p+l;let s;c>1&&(p/=c,l/=c);const h=Math.floor(6*u),f=1-l;s=6*u-h,(h&1)!==0&&(s=1-s);const g=p+s*(f-p);let m,y,A;switch(h){default:case 6:case 0:m=f,y=g,A=p;break;case 1:m=g,y=f,A=p;break;case 2:m=p,y=f,A=g;break;case 3:m=p,y=g,A=f;break;case 4:m=g,y=p,A=f;break;case 5:m=f,y=p,A=g;break}return[m*255,y*255,A*255]},o.cmyk.rgb=function(d){const u=d[0]/100,p=d[1]/100,l=d[2]/100,c=d[3]/100,s=1-Math.min(1,u*(1-c)+c),h=1-Math.min(1,p*(1-c)+c),f=1-Math.min(1,l*(1-c)+c);return[s*255,h*255,f*255]},o.xyz.rgb=function(d){const u=d[0]/100,p=d[1]/100,l=d[2]/100;let c,s,h;return c=u*3.2406+p*-1.5372+l*-.4986,s=u*-.9689+p*1.8758+l*.0415,h=u*.0557+p*-.204+l*1.057,c=c>.0031308?1.055*c**(1/2.4)-.055:c*12.92,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,h=h>.0031308?1.055*h**(1/2.4)-.055:h*12.92,c=Math.min(Math.max(0,c),1),s=Math.min(Math.max(0,s),1),h=Math.min(Math.max(0,h),1),[c*255,s*255,h*255]},o.xyz.lab=function(d){let u=d[0],p=d[1],l=d[2];u/=95.047,p/=100,l/=108.883,u=u>.008856?u**(1/3):7.787*u+16/116,p=p>.008856?p**(1/3):7.787*p+16/116,l=l>.008856?l**(1/3):7.787*l+16/116;const c=116*p-16,s=500*(u-p),h=200*(p-l);return[c,s,h]},o.lab.xyz=function(d){const u=d[0],p=d[1],l=d[2];let c,s,h;s=(u+16)/116,c=p/500+s,h=s-l/200;const f=s**3,g=c**3,m=h**3;return s=f>.008856?f:(s-16/116)/7.787,c=g>.008856?g:(c-16/116)/7.787,h=m>.008856?m:(h-16/116)/7.787,c*=95.047,s*=100,h*=108.883,[c,s,h]},o.lab.lch=function(d){const u=d[0],p=d[1],l=d[2];let c;c=Math.atan2(l,p)*360/2/Math.PI,c<0&&(c+=360);const h=Math.sqrt(p*p+l*l);return[u,h,c]},o.lch.lab=function(d){const u=d[0],p=d[1],c=d[2]/360*2*Math.PI,s=p*Math.cos(c),h=p*Math.sin(c);return[u,s,h]},o.rgb.ansi16=function(d,u=null){const[p,l,c]=d;let s=u===null?o.rgb.hsv(d)[2]:u;if(s=Math.round(s/50),s===0)return 30;let h=30+(Math.round(c/255)<<2|Math.round(l/255)<<1|Math.round(p/255));return s===2&&(h+=60),h},o.hsv.ansi16=function(d){return o.rgb.ansi16(o.hsv.rgb(d),d[2])},o.rgb.ansi256=function(d){const u=d[0],p=d[1],l=d[2];return u===p&&p===l?u<8?16:u>248?231:Math.round((u-8)/247*24)+232:16+36*Math.round(u/255*5)+6*Math.round(p/255*5)+Math.round(l/255*5)},o.ansi16.rgb=function(d){let u=d%10;if(u===0||u===7)return d>50&&(u+=3.5),u=u/10.5*255,[u,u,u];const p=(~~(d>50)+1)*.5,l=(u&1)*p*255,c=(u>>1&1)*p*255,s=(u>>2&1)*p*255;return[l,c,s]},o.ansi256.rgb=function(d){if(d>=232){const s=(d-232)*10+8;return[s,s,s]}d-=16;let u;const p=Math.floor(d/36)/5*255,l=Math.floor((u=d%36)/6)/5*255,c=u%6/5*255;return[p,l,c]},o.rgb.hex=function(d){const p=(((Math.round(d[0])&255)<<16)+((Math.round(d[1])&255)<<8)+(Math.round(d[2])&255)).toString(16).toUpperCase();return"000000".substring(p.length)+p},o.hex.rgb=function(d){const u=d.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!u)return[0,0,0];let p=u[0];u[0].length===3&&(p=p.split("").map(f=>f+f).join(""));const l=parseInt(p,16),c=l>>16&255,s=l>>8&255,h=l&255;return[c,s,h]},o.rgb.hcg=function(d){const u=d[0]/255,p=d[1]/255,l=d[2]/255,c=Math.max(Math.max(u,p),l),s=Math.min(Math.min(u,p),l),h=c-s;let f,g;return h<1?f=s/(1-h):f=0,h<=0?g=0:c===u?g=(p-l)/h%6:c===p?g=2+(l-u)/h:g=4+(u-p)/h,g/=6,g%=1,[g*360,h*100,f*100]},o.hsl.hcg=function(d){const u=d[1]/100,p=d[2]/100,l=p<.5?2*u*p:2*u*(1-p);let c=0;return l<1&&(c=(p-.5*l)/(1-l)),[d[0],l*100,c*100]},o.hsv.hcg=function(d){const u=d[1]/100,p=d[2]/100,l=u*p;let c=0;return l<1&&(c=(p-l)/(1-l)),[d[0],l*100,c*100]},o.hcg.rgb=function(d){const u=d[0]/360,p=d[1]/100,l=d[2]/100;if(p===0)return[l*255,l*255,l*255];const c=[0,0,0],s=u%1*6,h=s%1,f=1-h;let g=0;switch(Math.floor(s)){case 0:c[0]=1,c[1]=h,c[2]=0;break;case 1:c[0]=f,c[1]=1,c[2]=0;break;case 2:c[0]=0,c[1]=1,c[2]=h;break;case 3:c[0]=0,c[1]=f,c[2]=1;break;case 4:c[0]=h,c[1]=0,c[2]=1;break;default:c[0]=1,c[1]=0,c[2]=f}return g=(1-p)*l,[(p*c[0]+g)*255,(p*c[1]+g)*255,(p*c[2]+g)*255]},o.hcg.hsv=function(d){const u=d[1]/100,p=d[2]/100,l=u+p*(1-u);let c=0;return l>0&&(c=u/l),[d[0],c*100,l*100]},o.hcg.hsl=function(d){const u=d[1]/100,l=d[2]/100*(1-u)+.5*u;let c=0;return l>0&&l<.5?c=u/(2*l):l>=.5&&l<1&&(c=u/(2*(1-l))),[d[0],c*100,l*100]},o.hcg.hwb=function(d){const u=d[1]/100,p=d[2]/100,l=u+p*(1-u);return[d[0],(l-u)*100,(1-l)*100]},o.hwb.hcg=function(d){const u=d[1]/100,l=1-d[2]/100,c=l-u;let s=0;return c<1&&(s=(l-c)/(1-c)),[d[0],c*100,s*100]},o.apple.rgb=function(d){return[d[0]/65535*255,d[1]/65535*255,d[2]/65535*255]},o.rgb.apple=function(d){return[d[0]/255*65535,d[1]/255*65535,d[2]/255*65535]},o.gray.rgb=function(d){return[d[0]/100*255,d[0]/100*255,d[0]/100*255]},o.gray.hsl=function(d){return[0,0,d[0]]},o.gray.hsv=o.gray.hsl,o.gray.hwb=function(d){return[0,100,d[0]]},o.gray.cmyk=function(d){return[0,0,0,d[0]]},o.gray.lab=function(d){return[d[0],0,0]},o.gray.hex=function(d){const u=Math.round(d[0]/100*255)&255,l=((u<<16)+(u<<8)+u).toString(16).toUpperCase();return"000000".substring(l.length)+l},o.rgb.gray=function(d){return[(d[0]+d[1]+d[2])/3/255*100]}}}),Vg=Oe({"node_modules/color-convert/route.js"(r,t){var i=Sd();function n(){const u={},p=Object.keys(i);for(let l=p.length,c=0;c<l;c++)u[p[c]]={distance:-1,parent:null};return u}function o(u){const p=n(),l=[u];for(p[u].distance=0;l.length;){const c=l.pop(),s=Object.keys(i[c]);for(let h=s.length,f=0;f<h;f++){const g=s[f],m=p[g];m.distance===-1&&(m.distance=p[c].distance+1,m.parent=c,l.unshift(g))}}return p}function a(u,p){return function(l){return p(u(l))}}function d(u,p){const l=[p[u].parent,u];let c=i[p[u].parent][u],s=p[u].parent;for(;p[s].parent;)l.unshift(p[s].parent),c=a(i[p[s].parent][s],c),s=p[s].parent;return c.conversion=l,c}t.exports=function(u){const p=o(u),l={},c=Object.keys(p);for(let s=c.length,h=0;h<s;h++){const f=c[h];p[f].parent!==null&&(l[f]=d(f,p))}return l}}}),Bg=Oe({"node_modules/color-convert/index.js"(r,t){var i=Sd(),n=Vg(),o={},a=Object.keys(i);function d(p){const l=function(...c){const s=c[0];return s==null?s:(s.length>1&&(c=s),p(c))};return"conversion"in p&&(l.conversion=p.conversion),l}function u(p){const l=function(...c){const s=c[0];if(s==null)return s;s.length>1&&(c=s);const h=p(c);if(typeof h=="object")for(let f=h.length,g=0;g<f;g++)h[g]=Math.round(h[g]);return h};return"conversion"in p&&(l.conversion=p.conversion),l}a.forEach(p=>{o[p]={},Object.defineProperty(o[p],"channels",{value:i[p].channels}),Object.defineProperty(o[p],"labels",{value:i[p].labels});const l=n(p);Object.keys(l).forEach(s=>{const h=l[s];o[p][s]=u(h),o[p][s].raw=d(h)})}),t.exports=o}}),Hg=Oe({"node_modules/color/index.js"(r,t){var i=Wg(),n=Bg(),o=[].slice,a=["keyword","gray","hex"],d={};for(const m of Object.keys(n))d[o.call(n[m].labels).sort().join("")]=m;var u={};function p(m,y){if(!(this instanceof p))return new p(m,y);if(y&&y in a&&(y=null),y&&!(y in n))throw new Error("Unknown model: "+y);let A,x;if(m==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(m instanceof p)this.model=m.model,this.color=m.color.slice(),this.valpha=m.valpha;else if(typeof m=="string"){const C=i.get(m);if(C===null)throw new Error("Unable to parse color from string: "+m);this.model=C.model,x=n[this.model].channels,this.color=C.value.slice(0,x),this.valpha=typeof C.value[x]=="number"?C.value[x]:1}else if(m.length>0){this.model=y||"rgb",x=n[this.model].channels;const C=o.call(m,0,x);this.color=g(C,x),this.valpha=typeof m[x]=="number"?m[x]:1}else if(typeof m=="number")this.model="rgb",this.color=[m>>16&255,m>>8&255,m&255],this.valpha=1;else{this.valpha=1;const C=Object.keys(m);"alpha"in m&&(C.splice(C.indexOf("alpha"),1),this.valpha=typeof m.alpha=="number"?m.alpha:0);const P=C.sort().join("");if(!(P in d))throw new Error("Unable to parse color from object: "+JSON.stringify(m));this.model=d[P];const T=n[this.model].labels,R=[];for(A=0;A<T.length;A++)R.push(m[T[A]]);this.color=g(R)}if(u[this.model])for(x=n[this.model].channels,A=0;A<x;A++){const C=u[this.model][A];C&&(this.color[A]=C(this.color[A]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}p.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(m){let y=this.model in i.to?this:this.rgb();y=y.round(typeof m=="number"?m:1);const A=y.valpha===1?y.color:y.color.concat(this.valpha);return i.to[y.model](A)},percentString(m){const y=this.rgb().round(typeof m=="number"?m:1),A=y.valpha===1?y.color:y.color.concat(this.valpha);return i.to.rgb.percent(A)},array(){return this.valpha===1?this.color.slice():this.color.concat(this.valpha)},object(){const m={},y=n[this.model].channels,A=n[this.model].labels;for(let x=0;x<y;x++)m[A[x]]=this.color[x];return this.valpha!==1&&(m.alpha=this.valpha),m},unitArray(){const m=this.rgb().color;return m[0]/=255,m[1]/=255,m[2]/=255,this.valpha!==1&&m.push(this.valpha),m},unitObject(){const m=this.rgb().object();return m.r/=255,m.g/=255,m.b/=255,this.valpha!==1&&(m.alpha=this.valpha),m},round(m){return m=Math.max(m||0,0),new p(this.color.map(c(m)).concat(this.valpha),this.model)},alpha(m){return arguments.length>0?new p(this.color.concat(Math.max(0,Math.min(1,m))),this.model):this.valpha},red:s("rgb",0,h(255)),green:s("rgb",1,h(255)),blue:s("rgb",2,h(255)),hue:s(["hsl","hsv","hsl","hwb","hcg"],0,m=>(m%360+360)%360),saturationl:s("hsl",1,h(100)),lightness:s("hsl",2,h(100)),saturationv:s("hsv",1,h(100)),value:s("hsv",2,h(100)),chroma:s("hcg",1,h(100)),gray:s("hcg",2,h(100)),white:s("hwb",1,h(100)),wblack:s("hwb",2,h(100)),cyan:s("cmyk",0,h(100)),magenta:s("cmyk",1,h(100)),yellow:s("cmyk",2,h(100)),black:s("cmyk",3,h(100)),x:s("xyz",0,h(100)),y:s("xyz",1,h(100)),z:s("xyz",2,h(100)),l:s("lab",0,h(100)),a:s("lab",1),b:s("lab",2),keyword(m){return arguments.length>0?new p(m):n[this.model].keyword(this.color)},hex(m){return arguments.length>0?new p(m):i.to.hex(this.rgb().round().color)},hexa(m){if(arguments.length>0)return new p(m);const y=this.rgb().round().color;let A=Math.round(this.valpha*255).toString(16).toUpperCase();return A.length===1&&(A="0"+A),i.to.hex(y)+A},rgbNumber(){const m=this.rgb().color;return(m[0]&255)<<16|(m[1]&255)<<8|m[2]&255},luminosity(){const m=this.rgb().color,y=[];for(const[A,x]of m.entries()){const C=x/255;y[A]=C<=.03928?C/12.92:((C+.055)/1.055)**2.4}return .2126*y[0]+.7152*y[1]+.0722*y[2]},contrast(m){const y=this.luminosity(),A=m.luminosity();return y>A?(y+.05)/(A+.05):(A+.05)/(y+.05)},level(m){const y=this.contrast(m);return y>=7.1?"AAA":y>=4.5?"AA":""},isDark(){const m=this.rgb().color;return(m[0]*299+m[1]*587+m[2]*114)/1e3<128},isLight(){return!this.isDark()},negate(){const m=this.rgb();for(let y=0;y<3;y++)m.color[y]=255-m.color[y];return m},lighten(m){const y=this.hsl();return y.color[2]+=y.color[2]*m,y},darken(m){const y=this.hsl();return y.color[2]-=y.color[2]*m,y},saturate(m){const y=this.hsl();return y.color[1]+=y.color[1]*m,y},desaturate(m){const y=this.hsl();return y.color[1]-=y.color[1]*m,y},whiten(m){const y=this.hwb();return y.color[1]+=y.color[1]*m,y},blacken(m){const y=this.hwb();return y.color[2]+=y.color[2]*m,y},grayscale(){const m=this.rgb().color,y=m[0]*.3+m[1]*.59+m[2]*.11;return p.rgb(y,y,y)},fade(m){return this.alpha(this.valpha-this.valpha*m)},opaquer(m){return this.alpha(this.valpha+this.valpha*m)},rotate(m){const y=this.hsl();let A=y.color[0];return A=(A+m)%360,A=A<0?360+A:A,y.color[0]=A,y},mix(m,y){if(!m||!m.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof m);const A=m.rgb(),x=this.rgb(),C=y===void 0?.5:y,P=2*C-1,T=A.alpha()-x.alpha(),R=((P*T===-1?P:(P+T)/(1+P*T))+1)/2,z=1-R;return p.rgb(R*A.red()+z*x.red(),R*A.green()+z*x.green(),R*A.blue()+z*x.blue(),A.alpha()*C+x.alpha()*(1-C))}};for(const m of Object.keys(n)){if(a.includes(m))continue;const y=n[m].channels;p.prototype[m]=function(){if(this.model===m)return new p(this);if(arguments.length>0)return new p(arguments,m);const A=typeof arguments[y]=="number"?y:this.valpha;return new p(f(n[this.model][m].raw(this.color)).concat(A),m)},p[m]=function(A){return typeof A=="number"&&(A=g(o.call(arguments),y)),new p(A,m)}}function l(m,y){return Number(m.toFixed(y))}function c(m){return function(y){return l(y,m)}}function s(m,y,A){m=Array.isArray(m)?m:[m];for(const x of m)(u[x]||(u[x]=[]))[y]=A;return m=m[0],function(x){let C;return arguments.length>0?(A&&(x=A(x)),C=this[m](),C.color[y]=x,C):(C=this[m]().color[y],A&&(C=A(C)),C)}}function h(m){return function(y){return Math.max(0,Math.min(m,y))}}function f(m){return Array.isArray(m)?m:[m]}function g(m,y){for(let A=0;A<y;A++)typeof m[A]!="number"&&(m[A]=0);return m}t.exports=p}}),jg=zu(Hg(),1),Pc="EyeDropper"in window,st=class extends dt{constructor(){super(...arguments),this.formSubmitController=new je(this),this.isSafeValue=!1,this.localize=new Bt(this),this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.lightness=100,this.brightness=100,this.alpha=100,this.invalid=!1,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches=["#d0021b","#f5a623","#f8e71c","#8b572a","#7ed321","#417505","#bd10e0","#9013fe","#4a90e2","#50e3c2","#b8e986","#000","#444","#888","#ccc","#fff"]}connectedCallback(){super.connectedCallback(),this.value?(this.setColor(this.value),this.inputValue=this.value,this.lastValueEmitted=this.value,this.syncValues()):(this.isEmpty=!0,this.inputValue="",this.lastValueEmitted="")}getFormattedValue(r="hex"){const t=this.parseColor(`hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`);if(t===null)return"";switch(r){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;default:return""}}getBrightness(r){return Ft(-1*(200*r/(this.saturation-200)),0,100)}getLightness(r){return Ft((200-this.saturation)*r/100*5/10,0,100)}checkValidity(){return this.input.checkValidity()}reportValidity(){return!this.inline&&this.input.invalid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.checkValidity()):this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.invalid=this.input.invalid}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const r=["hex","rgb","hsl"],t=(r.indexOf(this.format)+1)%r.length;this.format=r[t]}handleAlphaDrag(r){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=t.querySelector(".color-picker__slider-handle"),{width:n}=t.getBoundingClientRect();i.focus(),r.preventDefault(),is(t,{onMove:o=>{this.alpha=Ft(o/n*100,0,100),this.syncValues()},initialEvent:r})}handleHueDrag(r){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=t.querySelector(".color-picker__slider-handle"),{width:n}=t.getBoundingClientRect();i.focus(),r.preventDefault(),is(t,{onMove:o=>{this.hue=Ft(o/n*360,0,360),this.syncValues()},initialEvent:r})}handleGridDrag(r){const t=this.shadowRoot.querySelector(".color-picker__grid"),i=t.querySelector(".color-picker__grid-handle"),{width:n,height:o}=t.getBoundingClientRect();i.focus(),r.preventDefault(),this.isDraggingGridHandle=!0,is(t,{onMove:(a,d)=>{this.saturation=Ft(a/n*100,0,100),this.brightness=Ft(100-d/o*100,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:r})}handleAlphaKeyDown(r){const t=r.shiftKey?10:1;r.key==="ArrowLeft"&&(r.preventDefault(),this.alpha=Ft(this.alpha-t,0,100),this.syncValues()),r.key==="ArrowRight"&&(r.preventDefault(),this.alpha=Ft(this.alpha+t,0,100),this.syncValues()),r.key==="Home"&&(r.preventDefault(),this.alpha=0,this.syncValues()),r.key==="End"&&(r.preventDefault(),this.alpha=100,this.syncValues())}handleHueKeyDown(r){const t=r.shiftKey?10:1;r.key==="ArrowLeft"&&(r.preventDefault(),this.hue=Ft(this.hue-t,0,360),this.syncValues()),r.key==="ArrowRight"&&(r.preventDefault(),this.hue=Ft(this.hue+t,0,360),this.syncValues()),r.key==="Home"&&(r.preventDefault(),this.hue=0,this.syncValues()),r.key==="End"&&(r.preventDefault(),this.hue=360,this.syncValues())}handleGridKeyDown(r){const t=r.shiftKey?10:1;r.key==="ArrowLeft"&&(r.preventDefault(),this.saturation=Ft(this.saturation-t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),r.key==="ArrowRight"&&(r.preventDefault(),this.saturation=Ft(this.saturation+t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),r.key==="ArrowUp"&&(r.preventDefault(),this.brightness=Ft(this.brightness+t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),r.key==="ArrowDown"&&(r.preventDefault(),this.brightness=Ft(this.brightness-t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues())}handleInputChange(r){const t=r.target;this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",r.stopPropagation()}handleInputKeyDown(r){r.key==="Enter"&&(this.input.value?(this.setColor(this.input.value),this.input.value=this.value,setTimeout(()=>this.input.select())):this.hue=0)}normalizeColorString(r){if(/rgba?/i.test(r)){const t=r.replace(/[^\d.%]/g," ").split(" ").map(i=>i.trim()).filter(i=>i.length);return t.length<4&&(t[3]="1"),t[3].indexOf("%")>-1&&(t[3]=(parseFloat(t[3].replace(/%/g,""))/100).toString()),`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}if(/hsla?/i.test(r)){const t=r.replace(/[^\d.%]/g," ").split(" ").map(i=>i.trim()).filter(i=>i.length);return t.length<4&&(t[3]="1"),t[3].indexOf("%")>-1&&(t[3]=(parseFloat(t[3].replace(/%/g,""))/100).toString()),`hsla(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}return/^[0-9a-f]+$/i.test(r)?`#${r}`:r}parseColor(r){let t;r=this.normalizeColorString(r);try{t=(0,jg.default)(r)}catch{return null}const i=t.hsl(),n={h:i.hue(),s:i.saturationl(),l:i.lightness(),a:i.alpha()},o=t.rgb(),a={r:o.red(),g:o.green(),b:o.blue(),a:o.alpha()},d={r:di(a.r),g:di(a.g),b:di(a.b),a:di(a.a*255)};return{hsl:{h:n.h,s:n.s,l:n.l,string:this.setLetterCase(`hsl(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%)`)},hsla:{h:n.h,s:n.s,l:n.l,a:n.a,string:this.setLetterCase(`hsla(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%, ${n.a.toFixed(2).toString()})`)},rgb:{r:a.r,g:a.g,b:a.b,string:this.setLetterCase(`rgb(${Math.round(a.r)}, ${Math.round(a.g)}, ${Math.round(a.b)})`)},rgba:{r:a.r,g:a.g,b:a.b,a:a.a,string:this.setLetterCase(`rgba(${Math.round(a.r)}, ${Math.round(a.g)}, ${Math.round(a.b)}, ${a.a.toFixed(2).toString()})`)},hex:this.setLetterCase(`#${d.r}${d.g}${d.b}`),hexa:this.setLetterCase(`#${d.r}${d.g}${d.b}${d.a}`)}}setColor(r){const t=this.parseColor(r);return t===null?!1:(this.hue=t.hsla.h,this.saturation=t.hsla.s,this.lightness=t.hsla.l,this.brightness=this.getBrightness(t.hsla.l),this.alpha=this.opacity?t.hsla.a*100:100,this.syncValues(),!0)}setLetterCase(r){return typeof r!="string"?"":this.uppercase?r.toUpperCase():r.toLowerCase()}async syncValues(){const r=this.parseColor(`hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`);r!==null&&(this.format==="hsl"?this.inputValue=this.opacity?r.hsla.string:r.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?r.rgba.string:r.rgb.string:this.inputValue=this.opacity?r.hexa:r.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Pc)return;new EyeDropper().open().then(t=>this.setColor(t.sRGBHex)).catch(()=>{})}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(r,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=100,this.brightness=100,this.lightness=this.getLightness(this.brightness),this.alpha=100),!this.isSafeValue&&r!==void 0){const i=this.parseColor(t);i!==null?(this.inputValue=this.value,this.hue=i.hsla.h,this.saturation=i.hsla.s,this.lightness=i.hsla.l,this.brightness=this.getBrightness(i.hsla.l),this.alpha=i.hsla.a*100):this.inputValue=r}this.value!==this.lastValueEmitted&&(this.emit("sl-change"),this.lastValueEmitted=this.value)}render(){const r=this.saturation,t=100-this.brightness,i=X`
      <div
        part="base"
        class=${_t({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?X`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${$e({backgroundColor:`hsl(${this.hue}deg, 100%, 50%)`})}
          @mousedown=${this.handleGridDrag}
          @touchstart=${this.handleGridDrag}
        >
          <span
            part="grid-handle"
            class=${_t({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${$e({top:`${t}%`,left:`${r}%`,backgroundColor:`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%)`})}
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
              @mousedown=${this.handleHueDrag}
              @touchstart=${this.handleHueDrag}
            >
              <span
                part="slider-handle"
                class="color-picker__slider-handle"
                style=${$e({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
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

            ${this.opacity?X`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @mousedown="${this.handleAlphaDrag}"
                    @touchstart="${this.handleAlphaDrag}"
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${$e({backgroundImage:`linear-gradient(
                          to right,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, 0%) 0%,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%) 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle"
                      class="color-picker__slider-handle"
                      style=${$e({left:`${this.alpha}%`})}
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
            style=${$e({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
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
            .value=${Xi(this.isEmpty?"":this.inputValue)}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":X`
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
            ${Pc?X`
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

        ${this.swatches.length>0?X`
              <div part="swatches" class="color-picker__swatches">
                ${this.swatches.map(n=>X`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${K(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${n}
                      @click=${()=>!this.disabled&&this.setColor(n)}
                      @keydown=${o=>!this.disabled&&o.key==="Enter"&&this.setColor(n)}
                    >
                      <div class="color-picker__swatch-color" style=${$e({backgroundColor:n})}></div>
                    </div>
                  `)}
              </div>
            `:""}
      </div>
    `;return this.inline?i:X`
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
          style=${$e({color:`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};st.styles=Ug;E([Q('[part~="input"]')],st.prototype,"input",2);E([Q('[part~="preview"]')],st.prototype,"previewButton",2);E([Q(".color-dropdown")],st.prototype,"dropdown",2);E([rt()],st.prototype,"isDraggingGridHandle",2);E([rt()],st.prototype,"isEmpty",2);E([rt()],st.prototype,"inputValue",2);E([rt()],st.prototype,"hue",2);E([rt()],st.prototype,"saturation",2);E([rt()],st.prototype,"lightness",2);E([rt()],st.prototype,"brightness",2);E([rt()],st.prototype,"alpha",2);E([rt()],st.prototype,"invalid",2);E([$()],st.prototype,"value",2);E([Kr()],st.prototype,"defaultValue",2);E([$()],st.prototype,"label",2);E([$()],st.prototype,"format",2);E([$({type:Boolean,reflect:!0})],st.prototype,"inline",2);E([$()],st.prototype,"size",2);E([$({attribute:"no-format-toggle",type:Boolean})],st.prototype,"noFormatToggle",2);E([$()],st.prototype,"name",2);E([$({type:Boolean,reflect:!0})],st.prototype,"disabled",2);E([$({type:Boolean})],st.prototype,"hoist",2);E([$({type:Boolean})],st.prototype,"opacity",2);E([$({type:Boolean})],st.prototype,"uppercase",2);E([$({attribute:!1})],st.prototype,"swatches",2);E([G("format",{waitUntilFirstUpdate:!0})],st.prototype,"handleFormatChange",1);E([G("opacity",{waitUntilFirstUpdate:!0})],st.prototype,"handleOpacityChange",1);E([G("value")],st.prototype,"handleValueChange",1);st=E([vt("sl-color-picker")],st);function di(r){const t=Math.round(r).toString(16);return t.length===1?`0${t}`:t}var Xg=ct`
  ${mt}

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
`,xs=class extends dt{render(){return X` <slot></slot> `}};xs.styles=Xg;xs=E([vt("sl-visually-hidden")],xs);var Kg=ct`
  ${mt}
  ${ji}

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
`,Tc,Gg=(Tc=navigator.userAgentData)==null?void 0:Tc.brands.some(r=>r.brand.includes("Chromium")),Yg=Gg?!1:navigator.userAgent.includes("Firefox"),Z=class extends dt{constructor(){super(...arguments),this.formSubmitController=new je(this),this.hasSlotController=new Ee(this,"help-text","label"),this.localize=new Bt(this),this.hasFocus=!1,this.invalid=!1,this.type="text",this.size="medium",this.name="",this.value="",this.defaultValue="",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.placeholder="",this.disabled=!1,this.readonly=!1,this.required=!1}get valueAsDate(){var r,t;return(t=(r=this.input)==null?void 0:r.valueAsDate)!=null?t:null}set valueAsDate(r){const t=document.createElement("input");t.type="date",t.valueAsDate=r,this.value=t.value}get valueAsNumber(){var r,t;return(t=(r=this.input)==null?void 0:r.valueAsNumber)!=null?t:parseFloat(this.value)}set valueAsNumber(r){const t=document.createElement("input");t.type="number",t.valueAsNumber=r,this.value=t.value}firstUpdated(){this.invalid=!this.input.checkValidity()}focus(r){this.input.focus(r)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(r,t,i="none"){this.input.setSelectionRange(r,t,i)}setRangeText(r,t,i,n="preserve"){this.input.setRangeText(r,t,i,n),this.value!==this.input.value&&(this.value=this.input.value,this.emit("sl-input"),this.emit("sl-change"))}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value,this.emit("sl-input"),this.emit("sl-change"))}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value,this.emit("sl-input"),this.emit("sl-change"))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(r){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),r.stopPropagation()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleStepChange(){this.input.step=String(this.step),this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(){this.invalid=!0}handleKeyDown(r){const t=r.metaKey||r.ctrlKey||r.shiftKey||r.altKey;r.key==="Enter"&&!t&&setTimeout(()=>{!r.defaultPrevented&&!r.isComposing&&this.formSubmitController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleValueChange(){this.input.value=this.value,this.invalid=!this.input.checkValidity()}render(){const r=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!r,n=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return X`
      <div
        part="form-control"
        class=${_t({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${_t({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--invalid":this.invalid,"input--no-spin-buttons":this.noSpinButtons,"input--is-firefox":Yg})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
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
              .value=${Xi(this.value)}
              autocapitalize=${K(this.type==="password"?"off":this.autocapitalize)}
              autocomplete=${K(this.type==="password"?"off":this.autocomplete)}
              autocorrect=${K(this.type==="password"?"off":this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${K(this.spellcheck)}
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

            ${o?X`
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
            ${this.passwordToggle&&!this.disabled?X`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?X`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:X`
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
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Z.styles=Kg;E([Q(".input__control")],Z.prototype,"input",2);E([rt()],Z.prototype,"hasFocus",2);E([rt()],Z.prototype,"invalid",2);E([$({reflect:!0})],Z.prototype,"type",2);E([$({reflect:!0})],Z.prototype,"size",2);E([$()],Z.prototype,"name",2);E([$()],Z.prototype,"value",2);E([Kr()],Z.prototype,"defaultValue",2);E([$({type:Boolean,reflect:!0})],Z.prototype,"filled",2);E([$({type:Boolean,reflect:!0})],Z.prototype,"pill",2);E([$()],Z.prototype,"label",2);E([$({attribute:"help-text"})],Z.prototype,"helpText",2);E([$({type:Boolean})],Z.prototype,"clearable",2);E([$({attribute:"password-toggle",type:Boolean})],Z.prototype,"passwordToggle",2);E([$({attribute:"password-visible",type:Boolean})],Z.prototype,"passwordVisible",2);E([$({attribute:"no-spin-buttons",type:Boolean})],Z.prototype,"noSpinButtons",2);E([$()],Z.prototype,"placeholder",2);E([$({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);E([$({type:Boolean,reflect:!0})],Z.prototype,"readonly",2);E([$({type:Number})],Z.prototype,"minlength",2);E([$({type:Number})],Z.prototype,"maxlength",2);E([$()],Z.prototype,"min",2);E([$()],Z.prototype,"max",2);E([$()],Z.prototype,"step",2);E([$()],Z.prototype,"pattern",2);E([$({type:Boolean,reflect:!0})],Z.prototype,"required",2);E([$()],Z.prototype,"autocapitalize",2);E([$()],Z.prototype,"autocorrect",2);E([$()],Z.prototype,"autocomplete",2);E([$({type:Boolean})],Z.prototype,"autofocus",2);E([$()],Z.prototype,"enterkeyhint",2);E([$({type:Boolean})],Z.prototype,"spellcheck",2);E([$()],Z.prototype,"inputmode",2);E([G("disabled",{waitUntilFirstUpdate:!0})],Z.prototype,"handleDisabledChange",1);E([G("step",{waitUntilFirstUpdate:!0})],Z.prototype,"handleStepChange",1);E([G("value",{waitUntilFirstUpdate:!0})],Z.prototype,"handleValueChange",1);Z=E([vt("sl-input")],Z);class Cd extends Jt{static get properties(){return{selected:{type:Boolean,reflectToAttribute:!0,attribute:!0},name:{type:String,reflectToAttribute:!0,attribute:!0},label:{type:String,reflectToAttribute:!0,attribute:!0},library:{type:String,reflectToAttribute:!0,attribute:!0}}}set selected(t){let i=this._selected;this._selected=t,this.requestUpdate("selected",i)}get selected(){return this._selected}set name(t){let i=this._name;this._name=t,this.requestUpdate("name",i)}get name(){return this._name}set label(t){let i=this._label;this._label=t,this.requestUpdate("label",i)}get label(){return this._label}set library(t){this._library,this._library=t,this.requestUpdate("library",this._library)}get library(){return this._library}constructor(){super(),this._selected=!1,this._label="",this._name="",this._library="default"}render(){return oe`
            <div class="${this.selected?"selected":""}">
                <sl-icon-button 
                    library="${this.library}"
                    name="${this.name}" label="${this.label}">
                </sl-icon-button>
            </div>`}}xt(Cd,"styles",Re`
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
    `);customElements.define("drawing-button",Cd);class kd extends Jt{constructor(){super();xt(this,"_readAndSetPreferredColor",async i=>{try{this.preferredColor=await i.penCustomizationsDetails.getPreferredInkingColor(),this.currentLineColor=this.preferredColor}catch{this._emitErrorToast("Couldn't read the preferred color from the stylus.")}});xt(this,"_readAndSetPreferredStyle",async i=>{try{this.preferredStyle=await i.penCustomizationsDetails.getPreferredInkingStyle(),this.preferredStyle=this.preferredStyle.toLowerCase(),this.currentLineStyle=this.preferredStyle}catch{this._emitErrorToast("Couldn't read the preferred style from the stylus.")}});xt(this,"_readAndSetPreferredWidth",async i=>{try{this.preferredWidth=await i.penCustomizationsDetails.getPreferredInkingWidth(),this.currentLineWidth=this.preferredWidth}catch{this._emitErrorToast("Couldn't read the preferred width from the stylus.")}});xt(this,"_writePreferredColor",async i=>{try{this.preferredColor=await i.penCustomizationsDetails.setPreferredInkingColor(this.currentLineColor),this.preferredColor!=this.currentLineColor?this._emitWarningToast("The color was written successfully but was adjusted to work with the pen."):this._emitSuccessToast("The current color was written successfully.")}catch(n){console.log(n),this._emitErrorToast("The current color could not be written on the stylus.")}});xt(this,"_writePreferredWidth",async i=>{try{this.preferredWidth=await i.penCustomizationsDetails.setPreferredInkingWidth(this.currentLineWidth),this._emitSuccessToast("The current width was written successfully.")}catch{this._emitErrorToast("The current width could not be written on the stylus.")}});xt(this,"_writePreferredStyle",async i=>{try{let n=await i.penCustomizationsDetails.setPreferredInkingStyle(this.currentLineStyle.toUpperCase());this.preferredStyle=n.toLowerCase(),this._emitSuccessToast("The current style was written successfully.")}catch{this._emitErrorToast("The current style could not be written on the stylus.")}});xt(this,"_readStylusCustomizations",async(i,n=!1)=>{let o=this.shadowRoot.querySelectorAll(".preferred");try{const a=await i.penCustomizationsDetails.getPreferredInkingColor(),d=await i.penCustomizationsDetails.getPreferredInkingStyle(),u=await i.penCustomizationsDetails.getPreferredInkingWidth();this.preferredColor=a,this.preferredStyle=d.toLowerCase(),this.preferredWidth=u,this._readStylusPanel.style.display="none",o.forEach(p=>{p.style.display="flex"})}catch{this._readStylusPanel.style.display="flex",o.forEach(d=>{d.style.display="none"}),n&&this._emitErrorToast("Could not read the customizations from the stylus.")}});xt(this,"_showStylusCustomizationsDrawer",async i=>{this._readStylusCustomizations(i,!1),this._drawer.show()});this._currentLineStyle="pencil",this._currentLineColor="#000000",this._currentLineWidth=1,this._preferredWidth=1,this._preferredColor="#000000",this._preferredStyle="pencil",this._drawWithCustomizations=!1,rh("my-icons",{resolver:i=>`icons/${i}.svg`,mutator:i=>i.setAttribute("fill","currentColor")})}static get properties(){return{currentLineStyle:{type:String,reflectToAttribute:!0,attribute:!0},currentLineColor:{type:String,reflectToAttribute:!0,attribute:!0},currentLineWidth:{type:Number,reflectToAttribute:!0,attribute:!0},preferredStyle:{type:String,reflectToAttribute:!0,attribute:!0},preferredColor:{type:String,reflectToAttribute:!0,attribute:!0},preferredWidth:{type:Number,reflectToAttribute:!0,attribute:!0},drawWithCustomizations:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}firstUpdated(){this._colorPicker=this.shadowRoot.querySelector("#color-picker"),this._drawer=this.shadowRoot.querySelector("#drawer"),this._lineWidthRange=this.shadowRoot.querySelector("#line-width-range"),this._penCustomizationsButton=this.shadowRoot.querySelector("#pen-customizations-button"),this._customizationsSwitch=this.shadowRoot.querySelector("#draw-customizations-switch"),yd()?console.log("Pen Customizations are supported."):(console.log("Pen Customizations are not supported."),this._penCustomizationsButton.style.display="none"),this._readStylusPanel=this.shadowRoot.querySelector("#read-stylus-panel")}_styleSelected(i){switch(this.currentLineStyle=i,i){case"ink":this.currentLineWidth=6;break;case"pencil":this.currentLineWidth=1;break;case"marker":this.currentLineWidth=12;break;case"highlighter":this.currentLineWidth=24,this.currentLineColor="#FFFF00";break;case"brush":this.currentLineWidth=14;break;default:console.log("Unsupported pen style ",i)}}_colorSelected(i){this.currentLineColor=this._colorPicker.value.toUpperCase()}set currentLineColor(i){let n=this._currentLineColor;this._currentLineColor=i,this._colorPicker.value=i;let o=new CustomEvent("lineColor-changed",{detail:{lineColor:i},bubbles:!0,composed:!0});this.dispatchEvent(o),this.requestUpdate("currentLineColor",n)}get currentLineColor(){return this._currentLineColor}set currentLineStyle(i){let n=this._currentLineStyle;this._currentLineStyle=i;let o=new CustomEvent("lineStyle-changed",{detail:{lineStyle:i},bubbles:!0,composed:!0});this.dispatchEvent(o),this.requestUpdate("currentLineStyle",n)}get currentLineStyle(){return this._currentLineStyle}set currentLineWidth(i){let n=this._currentLineWidth;this._currentLineWidth=i,this._lineWidthRange.value=i;let o=new CustomEvent("lineWidth-changed",{detail:{lineWidth:i},bubbles:!0,composed:!0});this.dispatchEvent(o),this.requestUpdate("currentLineWidth",n)}get currentLineWidth(){return this._currentLineWidth}set preferredColor(i){let n=this._preferredColor;this._preferredColor=i;let o=new CustomEvent("preferredColor-changed",{detail:{preferredColor:i},bubbles:!0,composed:!0});this.dispatchEvent(o),this.requestUpdate("preferredColor",n)}get preferredColor(){return this._preferredColor}set preferredStyle(i){let n=this._preferredStyle;this._preferredStyle=i;let o=new CustomEvent("preferredStyle-changed",{detail:{preferredStyle:i},bubbles:!0,composed:!0});this.dispatchEvent(o),this.requestUpdate("preferredStyle",n)}get preferredStyle(){return this._preferredStyle}set preferredWidth(i){let n=this._preferredWidth;this._preferredWidth=i;let o=new CustomEvent("preferredWidth-changed",{detail:{preferredWidth:i},bubbles:!0,composed:!0});this.dispatchEvent(o),this.requestUpdate("preferredWidth",n)}get preferredWidth(){return this._preferredWidth}set drawWithCustomizations(i){let n=this._drawWithCustomizations;this._drawWithCustomizations=i;let o=new CustomEvent("drawWithCustomizations-changed",{detail:{drawWithCustomizations:i},bubbles:!0,composed:!0});this.dispatchEvent(o),this.requestUpdate("drawWithCustomizations",n)}get drawWithCustomizations(){return this._drawWithCustomizations}_lineWidthChanged(){this.currentLineWidth=this._lineWidthRange.value}_escapeHtml(i){const n=document.createElement("div");return n.textContent=i,n.innerHTML}_createToastNotification(i,n="success",o="check2-circle",a=4e3){const d=Object.assign(document.createElement("sl-alert"),{variant:n,closable:!0,duration:a,innerHTML:`
                <sl-icon name="${o}" slot="icon"></sl-icon>
                ${this._escapeHtml(i)}
            `});return this.shadowRoot.append(d),d.toast()}_emitSuccessToast(i){this._createToastNotification(i)}_emitWarningToast(i){this._createToastNotification(i,"warning","exclamation-triangle")}_emitErrorToast(i){this._createToastNotification(i,"danger","exclamation-octagon")}_drawWithCustomizationsSwitchChanged(){this.drawWithCustomizations=this._customizationsSwitch.checked}render(){return oe`
            <div class="content">
                <drawing-button name="pencil" label="pencil"
                    ?selected="${this.currentLineStyle==="pencil"}"
                    @pointerdown="${()=>this._styleSelected("pencil")}">
                </drawing-button>
                <drawing-button name="pen" label="pen"
                    ?selected="${this.currentLineStyle==="ink"}"
                    @pointerdown="${()=>this._styleSelected("ink")}">
                </drawing-button>
                <drawing-button name="brush" label="brush"
                    ?selected="${this.currentLineStyle==="brush"}"
                    @pointerdown="${()=>this._styleSelected("brush")}">
                </drawing-button>
                <drawing-button name="marker" library="my-icons"
                    ?selected="${this.currentLineStyle==="marker"}"
                    @pointerdown="${()=>this._styleSelected("marker")}">
                </drawing-button>
                <drawing-button library="my-icons" name="highlighter"
                    ?selected="${this.currentLineStyle==="highlighter"}"
                    @pointerdown="${()=>this._styleSelected("highlighter")}">
                </drawing-button>
                <sl-color-picker
                    id="color-picker"
                    format="hex" size="small" label="Select a color" value="#000000"
                    @sl-change="${()=>this._colorSelected()}">
                </sl-color-picker>
                <sl-dropdown placement="right-start" distance=10>
                    <drawing-button slot="trigger" caret class="line-width-button" 
                            name="border-width" label="drawing line width">
                    </drawing-button>
                    <div class="line-width-panel">
                        <div class="line-width-title"> Drawing Line Width</div>
                        <sl-range id="line-width-range" min="1" max="50" 
                            @sl-change="${()=>this._lineWidthChanged()}">
                        </sl-range>
                        Current width: ${this.currentLineWidth} px
                    </div>
                </sl-dropdown>
                <div class="expand"></div>
                <drawing-button id="pen-customizations-button"
                    library="my-icons" name="pen_customizations"
                    @pointerdown="${i=>this._showStylusCustomizationsDrawer(i)}">
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
                                            @pointerdown="${i=>this._readStylusCustomizations(i,!0)}"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                            </div>
                            <div class="category border preferred">
                                <div class="category-title">Preferred Color</div>
                                <div class="color-box" style="background-color: ${this._preferredColor}"></div>
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
        `}}xt(kd,"styles",Re`
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

        #read-stylus-panel {
            display: none;
            grid-row: span 3;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    `);customElements.define("drawing-toolbar",kd);var Es=function(r,t){return Es=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i[o]=n[o])},Es(r,t)};function Zg(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Es(r,t);function i(){this.constructor=r}r.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}var Ti=function(){return Ti=Object.assign||function(t){for(var i,n=1,o=arguments.length;n<o;n++){i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},Ti.apply(this,arguments)};function Mt(r,t,i,n){var o=arguments.length,a=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,t,i,n);else for(var u=r.length-1;u>=0;u--)(d=r[u])&&(a=(o<3?d(a):o>3?d(t,i,a):d(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qg=r=>t=>typeof t=="function"?((i,n)=>(customElements.define(i,n),n))(r,t):((i,n)=>{const{kind:o,elements:a}=n;return{kind:o,elements:a,finisher(d){customElements.define(i,d)}}})(r,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jg=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,r)}};function Se(r){return(t,i)=>i!==void 0?((n,o,a)=>{o.constructor.createProperty(a,n)})(r,t,i):Jg(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tm=({finisher:r,descriptor:t})=>(i,n)=>{var o;if(n===void 0){const a=(o=i.originalKey)!==null&&o!==void 0?o:i.key,d=t!=null?{kind:"method",placement:"prototype",key:a,descriptor:t(i.key)}:{...i,key:a};return r!=null&&(d.finisher=function(u){r(u,a)}),d}{const a=i.constructor;t!==void 0&&Object.defineProperty(i,n,t(n)),r==null||r(a,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fr(r,t){return tm({descriptor:i=>{const n={get(){var o,a;return(a=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(r))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0};if(t){const o=typeof i=="symbol"?Symbol():"__"+i;n.get=function(){var a,d;return this[o]===void 0&&(this[o]=(d=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(r))!==null&&d!==void 0?d:null),this[o]}}return n}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ns;((ns=window.HTMLSlotElement)===null||ns===void 0?void 0:ns.prototype.assignedElements)!=null;/**
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
 */(()=>{var r,t,i;const n=Symbol(),o=Symbol(),a=Symbol(),d=Symbol(),u=Symbol(),p=Symbol(),l=Symbol(),c=Symbol(),s=Symbol(),h=Symbol(),f=Symbol(),g=Symbol(),m=Symbol();class y{constructor(){this[r]=[],this[t]=[],this[i]=new Set}destructor(){this[s](this[a]);const x=this;x[n]=null,x[a]=null,x[o]=null}get top(){const x=this[n];return x[x.length-1]||null}push(x){!x||x===this.top||(this.remove(x),this[p](x),this[n].push(x))}remove(x){const C=this[n].indexOf(x);return C===-1?!1:(this[n].splice(C,1),C===this[n].length&&this[p](this.top),!0)}pop(){const x=this.top;return x&&this.remove(x),x}has(x){return this[n].indexOf(x)!==-1}[(r=n,t=a,i=o,p)](x){const C=this[o],P=this[a];if(!x){this[s](P),C.clear(),this[a]=[];return}const T=this[h](x);if(T[T.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[a]=T;const R=this[f](x);if(!P.length){this[c](T,R,C);return}let z=P.length-1,N=T.length-1;for(;z>0&&N>0&&P[z]===T[N];)z--,N--;P[z]!==T[N]&&this[l](P[z],T[N]),z>0&&this[s](P.slice(0,z)),N>0&&this[c](T.slice(0,N),R,null)}[l](x,C){const P=x[d];this[g](x)&&!x.inert&&(x.inert=!0,P.add(x)),P.has(C)&&(C.inert=!1,P.delete(C)),C[u]=x[u],C[d]=P,x[u]=void 0,x[d]=void 0}[s](x){for(const C of x){C[u].disconnect(),C[u]=void 0;const T=C[d];for(const R of T)R.inert=!1;C[d]=void 0}}[c](x,C,P){for(const T of x){const R=T.parentNode,z=R.children,N=new Set;for(let H=0;H<z.length;H++){const B=z[H];B===T||!this[g](B)||C&&C.has(B)||(P&&B.inert?P.add(B):(B.inert=!0,N.add(B)))}T[d]=N;const F=new MutationObserver(this[m].bind(this));T[u]=F;let D=R;const W=D;W.__shady&&W.host&&(D=W.host),F.observe(D,{childList:!0})}}[m](x){const C=this[a],P=this[o];for(const T of x){const R=T.target.host||T.target,z=R===document.body?C.length:C.indexOf(R),N=C[z-1],F=N[d];for(let D=0;D<T.removedNodes.length;D++){const W=T.removedNodes[D];if(W===N){console.info("Detected removal of the top Blocking Element."),this.pop();return}F.has(W)&&(W.inert=!1,F.delete(W))}for(let D=0;D<T.addedNodes.length;D++){const W=T.addedNodes[D];!this[g](W)||(P&&W.inert?P.add(W):(W.inert=!0,F.add(W)))}}}[g](x){return/^(style|template|script)$/.test(x.localName)===!1}[h](x){const C=[];let P=x;for(;P&&P!==document.body;){if(P.nodeType===Node.ELEMENT_NODE&&C.push(P),P.assignedSlot){for(;P=P.assignedSlot;)C.push(P);P=C.pop();continue}P=P.parentNode||P.host}return C}[f](x){const C=x.shadowRoot;if(!C)return null;const P=new Set;let T,R,z;const N=C.querySelectorAll("slot");if(N.length&&N[0].assignedNodes)for(T=0;T<N.length;T++)for(z=N[T].assignedNodes({flatten:!0}),R=0;R<z.length;R++)z[R].nodeType===Node.ELEMENT_NODE&&P.add(z[R]);return P}}document.$blockingElements=new y})();var os=function(){function r(t,i){for(var n=0;n<i.length;n++){var o=i[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,i,n){return i&&r(t.prototype,i),n&&r(t,n),t}}();function ss(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}(function(){if(typeof window>"u")return;var r=Array.prototype.slice,t=Element.prototype.matches||Element.prototype.msMatchesSelector,i=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),n=function(){function l(c,s){ss(this,l),this._inertManager=s,this._rootElement=c,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return os(l,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(this._savedAriaHidden!==null?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach(function(s){this._unmanageNode(s.node)},this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(s){var h=this;d(s,function(y){return h._visitNode(y)});var f=document.activeElement;if(!document.body.contains(s)){for(var g=s,m=void 0;g;){if(g.nodeType===Node.DOCUMENT_FRAGMENT_NODE){m=g;break}g=g.parentNode}m&&(f=m.activeElement)}s.contains(f)&&(f.blur(),f===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(s){if(s.nodeType===Node.ELEMENT_NODE){var h=s;h!==this._rootElement&&h.hasAttribute("inert")&&this._adoptInertRoot(h),(t.call(h,i)||h.hasAttribute("tabindex"))&&this._manageNode(h)}}},{key:"_manageNode",value:function(s){var h=this._inertManager.register(s,this);this._managedNodes.add(h)}},{key:"_unmanageNode",value:function(s){var h=this._inertManager.deregister(s,this);h&&this._managedNodes.delete(h)}},{key:"_unmanageSubtree",value:function(s){var h=this;d(s,function(f){return h._unmanageNode(f)})}},{key:"_adoptInertRoot",value:function(s){var h=this._inertManager.getInertRoot(s);h||(this._inertManager.setInert(s,!0),h=this._inertManager.getInertRoot(s)),h.managedNodes.forEach(function(f){this._manageNode(f.node)},this)}},{key:"_onMutation",value:function(s,h){s.forEach(function(f){var g=f.target;if(f.type==="childList")r.call(f.addedNodes).forEach(function(y){this._makeSubtreeUnfocusable(y)},this),r.call(f.removedNodes).forEach(function(y){this._unmanageSubtree(y)},this);else if(f.type==="attributes"){if(f.attributeName==="tabindex")this._manageNode(g);else if(g!==this._rootElement&&f.attributeName==="inert"&&g.hasAttribute("inert")){this._adoptInertRoot(g);var m=this._inertManager.getInertRoot(g);this._managedNodes.forEach(function(y){g.contains(y.node)&&m._manageNode(y.node)})}}},this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return this._savedAriaHidden!==null}},{key:"savedAriaHidden",set:function(s){this._savedAriaHidden=s},get:function(){return this._savedAriaHidden}}]),l}(),o=function(){function l(c,s){ss(this,l),this._node=c,this._overrodeFocusMethod=!1,this._inertRoots=new Set([s]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}return os(l,[{key:"destructor",value:function(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){var s=this._node;this._savedTabIndex!==null?s.setAttribute("tabindex",this._savedTabIndex):s.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete s.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){if(this.node.nodeType===Node.ELEMENT_NODE){var s=this.node;if(t.call(s,i)){if(s.tabIndex===-1&&this.hasSavedTabIndex)return;s.hasAttribute("tabindex")&&(this._savedTabIndex=s.tabIndex),s.setAttribute("tabindex","-1"),s.nodeType===Node.ELEMENT_NODE&&(s.focus=function(){},this._overrodeFocusMethod=!0)}else s.hasAttribute("tabindex")&&(this._savedTabIndex=s.tabIndex,s.removeAttribute("tabindex"))}}},{key:"addInertRoot",value:function(s){this._throwIfDestroyed(),this._inertRoots.add(s)}},{key:"removeInertRoot",value:function(s){this._throwIfDestroyed(),this._inertRoots.delete(s),this._inertRoots.size===0&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return this._savedTabIndex!==null}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(s){this._throwIfDestroyed(),this._savedTabIndex=s},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),l}(),a=function(){function l(c){if(ss(this,l),!c)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=c,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),u(c.head||c.body||c.documentElement),c.readyState==="loading"?c.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return os(l,[{key:"setInert",value:function(s,h){if(h){if(this._inertRoots.has(s))return;var f=new n(s,this);if(s.setAttribute("inert",""),this._inertRoots.set(s,f),!this._document.body.contains(s))for(var g=s.parentNode;g;)g.nodeType===11&&u(g),g=g.parentNode}else{if(!this._inertRoots.has(s))return;var m=this._inertRoots.get(s);m.destructor(),this._inertRoots.delete(s),s.removeAttribute("inert")}}},{key:"getInertRoot",value:function(s){return this._inertRoots.get(s)}},{key:"register",value:function(s,h){var f=this._managedNodes.get(s);return f!==void 0?f.addInertRoot(h):f=new o(s,h),this._managedNodes.set(s,f),f}},{key:"deregister",value:function(s,h){var f=this._managedNodes.get(s);return f?(f.removeInertRoot(h),f.destroyed&&this._managedNodes.delete(s),f):null}},{key:"_onDocumentLoaded",value:function(){var s=r.call(this._document.querySelectorAll("[inert]"));s.forEach(function(h){this.setInert(h,!0)},this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(s,h){var f=this;s.forEach(function(g){switch(g.type){case"childList":r.call(g.addedNodes).forEach(function(A){if(A.nodeType===Node.ELEMENT_NODE){var x=r.call(A.querySelectorAll("[inert]"));t.call(A,"[inert]")&&x.unshift(A),x.forEach(function(C){this.setInert(C,!0)},f)}},f);break;case"attributes":if(g.attributeName!=="inert")return;var m=g.target,y=m.hasAttribute("inert");f.setInert(m,y);break}},this)}}]),l}();function d(l,c,s){if(l.nodeType==Node.ELEMENT_NODE){var h=l;c&&c(h);var f=h.shadowRoot;if(f){d(f,c);return}if(h.localName=="content"){for(var g=h,m=g.getDistributedNodes?g.getDistributedNodes():[],y=0;y<m.length;y++)d(m[y],c);return}if(h.localName=="slot"){for(var A=h,x=A.assignedNodes?A.assignedNodes({flatten:!0}):[],C=0;C<x.length;C++)d(x[C],c);return}}for(var P=l.firstChild;P!=null;)d(P,c),P=P.nextSibling}function u(l){if(!l.querySelector("style#inert-style, link#inert-style")){var c=document.createElement("style");c.setAttribute("id","inert-style"),c.textContent=`
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
`,l.appendChild(c)}}if(!HTMLElement.prototype.hasOwnProperty("inert")){var p=new a(document);Object.defineProperty(HTMLElement.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(c){p.setInert(this,c)}})}})();/**
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
 */var lt={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},Tr={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},as={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};/**
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
 */var em=function(){function r(){this.rafIDs=new Map}return r.prototype.request=function(t,i){var n=this;this.cancel(t);var o=requestAnimationFrame(function(a){n.rafIDs.delete(t),i(a)});this.rafIDs.set(t,o)},r.prototype.cancel=function(t){var i=this.rafIDs.get(t);i&&(cancelAnimationFrame(i),this.rafIDs.delete(t))},r.prototype.cancelAll=function(){var t=this;this.rafIDs.forEach(function(i,n){t.cancel(n)})},r.prototype.getQueue=function(){var t=[];return this.rafIDs.forEach(function(i,n){t.push(n)}),t},r}();/**
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
 */var rm=function(){function r(t){t===void 0&&(t={}),this.adapter=t}return Object.defineProperty(r,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),r.prototype.init=function(){},r.prototype.destroy=function(){},r}();/**
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
 */var Ii;(function(r){r.POLL_SCROLL_POS="poll_scroll_position",r.POLL_LAYOUT_CHANGE="poll_layout_change"})(Ii||(Ii={}));var im=function(r){Zg(t,r);function t(i){var n=r.call(this,Ti(Ti({},t.defaultAdapter),i))||this;return n.dialogOpen=!1,n.isFullscreen=!1,n.animationFrame=0,n.animationTimer=0,n.escapeKeyAction=Tr.CLOSE_ACTION,n.scrimClickAction=Tr.CLOSE_ACTION,n.autoStackButtons=!0,n.areButtonsStacked=!1,n.suppressDefaultPressSelector=Tr.SUPPRESS_DEFAULT_PRESS_SELECTOR,n.animFrame=new em,n.contentScrollHandler=function(){n.handleScrollEvent()},n.windowResizeHandler=function(){n.layout()},n.windowOrientationChangeHandler=function(){n.layout()},n}return Object.defineProperty(t,"cssClasses",{get:function(){return lt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Tr},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return as},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.hasClass(lt.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(lt.FULLSCREEN)},t.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},t.prototype.open=function(i){var n=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(lt.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),i&&i.isAboveFullscreenDialog&&this.adapter.addClass(lt.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame(function(){n.adapter.addClass(lt.OPEN),n.adapter.addBodyClass(lt.SCROLL_LOCK),n.layout(),n.animationTimer=setTimeout(function(){n.handleAnimationTimerEnd(),n.adapter.trapFocus(n.adapter.getInitialFocusEl()),n.adapter.notifyOpened()},as.DIALOG_ANIMATION_OPEN_TIME_MS)})},t.prototype.close=function(i){var n=this;i===void 0&&(i=""),this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(i),this.adapter.addClass(lt.CLOSING),this.adapter.removeClass(lt.OPEN),this.adapter.removeBodyClass(lt.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){n.adapter.releaseFocus(),n.handleAnimationTimerEnd(),n.adapter.notifyClosed(i)},as.DIALOG_ANIMATION_CLOSE_TIME_MS))},t.prototype.showSurfaceScrim=function(){var i=this;this.adapter.addClass(lt.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame(function(){i.adapter.addClass(lt.SURFACE_SCRIM_SHOWN)})},t.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(lt.SURFACE_SCRIM_SHOWN),this.adapter.addClass(lt.SURFACE_SCRIM_HIDING)},t.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(lt.SURFACE_SCRIM_HIDING),this.adapter.removeClass(lt.SURFACE_SCRIM_SHOWING)},t.prototype.isOpen=function(){return this.dialogOpen},t.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},t.prototype.setEscapeKeyAction=function(i){this.escapeKeyAction=i},t.prototype.getScrimClickAction=function(){return this.scrimClickAction},t.prototype.setScrimClickAction=function(i){this.scrimClickAction=i},t.prototype.getAutoStackButtons=function(){return this.autoStackButtons},t.prototype.setAutoStackButtons=function(i){this.autoStackButtons=i},t.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},t.prototype.setSuppressDefaultPressSelector=function(i){this.suppressDefaultPressSelector=i},t.prototype.layout=function(){var i=this;this.animFrame.request(Ii.POLL_LAYOUT_CHANGE,function(){i.layoutInternal()})},t.prototype.handleClick=function(i){var n=this.adapter.eventTargetMatches(i.target,Tr.SCRIM_SELECTOR);if(n&&this.scrimClickAction!=="")this.close(this.scrimClickAction);else{var o=this.adapter.getActionFromEvent(i);o&&this.close(o)}},t.prototype.handleKeydown=function(i){var n=i.key==="Enter"||i.keyCode===13;if(!!n){var o=this.adapter.getActionFromEvent(i);if(!o){var a=i.composedPath?i.composedPath()[0]:i.target,d=this.suppressDefaultPressSelector?!this.adapter.eventTargetMatches(a,this.suppressDefaultPressSelector):!0;n&&d&&this.adapter.clickDefaultButton()}}},t.prototype.handleDocumentKeydown=function(i){var n=i.key==="Escape"||i.keyCode===27;n&&this.escapeKeyAction!==""&&this.close(this.escapeKeyAction)},t.prototype.handleScrollEvent=function(){var i=this;this.animFrame.request(Ii.POLL_SCROLL_POS,function(){i.toggleScrollDividerHeader(),i.toggleScrollDividerFooter()})},t.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},t.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(lt.OPENING),this.adapter.removeClass(lt.CLOSING)},t.prototype.runNextAnimationFrame=function(i){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(i,0)})},t.prototype.detectStackedButtons=function(){this.adapter.removeClass(lt.STACKED);var i=this.adapter.areButtonsStacked();i&&this.adapter.addClass(lt.STACKED),i!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=i)},t.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(lt.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(lt.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},t.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(lt.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(lt.SCROLL_DIVIDER_HEADER):this.adapter.addClass(lt.SCROLL_DIVIDER_HEADER)},t.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(lt.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(lt.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(lt.SCROLL_DIVIDER_FOOTER)},t}(rm);const nm=im;/**
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
 */function ui(r){return r===void 0&&(r=window),om(r)?{passive:!0}:!1}function om(r){r===void 0&&(r=window);var t=!1;try{var i={get passive(){return t=!0,!1}},n=function(){};r.document.addEventListener("test",n,i),r.document.removeEventListener("test",n,i)}catch{t=!1}return t}/**
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
 */function sm(r,t){if(r.closest)return r.closest(t);for(var i=r;i;){if($d(i,t))return i;i=i.parentElement}return null}function $d(r,t){var i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector;return i.call(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function am(r){return{addClass:t=>{r.classList.add(t)},removeClass:t=>{r.classList.remove(t)},hasClass:t=>r.classList.contains(t)}}const Pd=()=>{},lm={get passive(){return!1}};document.addEventListener("x",Pd,lm);document.removeEventListener("x",Pd);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class cm extends Jt{click(){if(this.mdcRoot){this.mdcRoot.focus(),this.mdcRoot.click();return}super.click()}createFoundation(){this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ki=r=>(t,i)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const n=t.constructor._observers;t.constructor._observers=new Map,n.forEach((o,a)=>t.constructor._observers.set(a,o))}}else{t.constructor._observers=new Map;const n=t.updated;t.updated=function(o){n.call(this,o),o.forEach((a,d)=>{const p=this.constructor._observers.get(d);p!==void 0&&p.call(this,this[d],a)})}}t.constructor._observers.set(i,r)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dm={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},um=r=>(...t)=>({_$litDirective$:r,values:t});class hm{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,n){this._$Ct=t,this._$AM=i,this._$Ci=n}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ic=um(class extends hm{constructor(r){var t;if(super(r),r.type!==dm.ATTRIBUTE||r.name!=="class"||((t=r.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var i,n;if(this.nt===void 0){this.nt=new Set,r.strings!==void 0&&(this.st=new Set(r.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((i=this.st)===null||i===void 0)&&i.has(a))&&this.nt.add(a);return this.render(t)}const o=r.element.classList;this.nt.forEach(a=>{a in t||(o.remove(a),this.nt.delete(a))});for(const a in t){const d=!!t[a];d===this.nt.has(a)||((n=this.st)===null||n===void 0?void 0:n.has(a))||(d?(o.add(a),this.nt.add(a)):(o.remove(a),this.nt.delete(a)))}return Be}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ls=document.$blockingElements;class zt extends cm{constructor(){super(...arguments),this.hideActions=!1,this.stacked=!1,this.heading="",this.scrimClickAction="close",this.escapeKeyAction="close",this.open=!1,this.defaultAction="close",this.actionAttribute="dialogAction",this.initialFocusAttribute="dialogInitialFocus",this.initialSupressDefaultPressSelector="",this.mdcFoundationClass=nm,this.boundHandleClick=null,this.boundHandleKeydown=null,this.boundHandleDocumentKeydown=null}set suppressDefaultPressSelector(t){this.mdcFoundation?this.mdcFoundation.setSuppressDefaultPressSelector(t):this.initialSupressDefaultPressSelector=t}get suppressDefaultPressSelector(){return this.mdcFoundation?this.mdcFoundation.getSuppressDefaultPressSelector():this.initialSupressDefaultPressSelector}get primaryButton(){let t=this.primarySlot.assignedNodes();t=t.filter(n=>n instanceof HTMLElement);const i=t[0];return i||null}emitNotification(t,i){const n={detail:i?{action:i}:{}},o=new CustomEvent(t,n);this.dispatchEvent(o)}getInitialFocusEl(){const t=`[${this.initialFocusAttribute}]`,i=this.querySelector(t);if(i)return i;const o=this.primarySlot.assignedNodes({flatten:!0}),a=this.searchNodeTreesForAttribute(o,this.initialFocusAttribute);if(a)return a;const u=this.secondarySlot.assignedNodes({flatten:!0}),p=this.searchNodeTreesForAttribute(u,this.initialFocusAttribute);if(p)return p;const c=this.contentSlot.assignedNodes({flatten:!0});return this.searchNodeTreesForAttribute(c,this.initialFocusAttribute)}searchNodeTreesForAttribute(t,i){for(const n of t)if(n instanceof HTMLElement){if(n.hasAttribute(i))return n;{const o=n.querySelector(`[${i}]`);if(o)return o}}return null}createAdapter(){return Object.assign(Object.assign({},am(this.mdcRoot)),{addBodyClass:()=>document.body.style.overflow="hidden",removeBodyClass:()=>document.body.style.overflow="",areButtonsStacked:()=>this.stacked,clickDefaultButton:()=>{const t=this.primaryButton;t&&t.click()},eventTargetMatches:(t,i)=>t?$d(t,i):!1,getActionFromEvent:t=>{if(!t.target)return"";const i=sm(t.target,`[${this.actionAttribute}]`);return i&&i.getAttribute(this.actionAttribute)},getInitialFocusEl:()=>this.getInitialFocusEl(),isContentScrollable:()=>{const t=this.contentElement;return t?t.scrollHeight>t.offsetHeight:!1},notifyClosed:t=>this.emitNotification("closed",t),notifyClosing:t=>{this.closingDueToDisconnect||(this.open=!1),this.emitNotification("closing",t)},notifyOpened:()=>this.emitNotification("opened"),notifyOpening:()=>{this.open=!0,this.emitNotification("opening")},reverseButtons:()=>{},releaseFocus:()=>{ls.remove(this)},trapFocus:t=>{!this.isConnected||(ls.push(this),t&&t.focus())},registerContentEventHandler:(t,i)=>{this.contentElement.addEventListener(t,i)},deregisterContentEventHandler:(t,i)=>{this.contentElement.removeEventListener(t,i)},isScrollableContentAtTop:()=>{const t=this.contentElement;return t?t.scrollTop===0:!1},isScrollableContentAtBottom:()=>{const t=this.contentElement;return t?Math.ceil(t.scrollHeight-t.scrollTop)===t.clientHeight:!1},registerWindowEventHandler:(t,i)=>{window.addEventListener(t,i,ui())},deregisterWindowEventHandler:(t,i)=>{window.removeEventListener(t,i,ui())}})}render(){const t={[lt.STACKED]:this.stacked};let i=oe``;this.heading&&(i=this.renderHeading());const n={"mdc-dialog__actions":!this.hideActions};return oe`
    <div class="mdc-dialog ${Ic(t)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${i}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${Ic(n)}">
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
    </div>`}renderHeading(){return oe`
      <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`}firstUpdated(){super.firstUpdated(),this.mdcFoundation.setAutoStackButtons(!0),this.initialSupressDefaultPressSelector?this.suppressDefaultPressSelector=this.initialSupressDefaultPressSelector:this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,"mwc-textarea","mwc-menu mwc-list-item","mwc-select mwc-list-item"].join(", "),this.boundHandleClick=this.mdcFoundation.handleClick.bind(this.mdcFoundation),this.boundHandleKeydown=this.mdcFoundation.handleKeydown.bind(this.mdcFoundation),this.boundHandleDocumentKeydown=this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation)}connectedCallback(){super.connectedCallback(),this.open&&this.mdcFoundation&&!this.mdcFoundation.isOpen()&&(this.setEventListeners(),this.mdcFoundation.open())}disconnectedCallback(){super.disconnectedCallback(),this.open&&this.mdcFoundation&&(this.removeEventListeners(),this.closingDueToDisconnect=!0,this.mdcFoundation.close(this.currentAction||this.defaultAction),this.closingDueToDisconnect=!1,this.currentAction=void 0,ls.remove(this))}forceLayout(){this.mdcFoundation.layout()}focus(){const t=this.getInitialFocusEl();t&&t.focus()}blur(){if(!this.shadowRoot)return;const t=this.shadowRoot.activeElement;if(t)t instanceof HTMLElement&&t.blur();else{const i=this.getRootNode(),n=i instanceof Document?i.activeElement:null;n instanceof HTMLElement&&n.blur()}}setEventListeners(){this.boundHandleClick&&this.mdcRoot.addEventListener("click",this.boundHandleClick),this.boundHandleKeydown&&this.mdcRoot.addEventListener("keydown",this.boundHandleKeydown,ui()),this.boundHandleDocumentKeydown&&document.addEventListener("keydown",this.boundHandleDocumentKeydown,ui())}removeEventListeners(){this.boundHandleClick&&this.mdcRoot.removeEventListener("click",this.boundHandleClick),this.boundHandleKeydown&&this.mdcRoot.removeEventListener("keydown",this.boundHandleKeydown),this.boundHandleDocumentKeydown&&document.removeEventListener("keydown",this.boundHandleDocumentKeydown)}close(){this.open=!1}show(){this.open=!0}}Mt([fr(".mdc-dialog")],zt.prototype,"mdcRoot",void 0);Mt([fr('slot[name="primaryAction"]')],zt.prototype,"primarySlot",void 0);Mt([fr('slot[name="secondaryAction"]')],zt.prototype,"secondarySlot",void 0);Mt([fr("#contentSlot")],zt.prototype,"contentSlot",void 0);Mt([fr(".mdc-dialog__content")],zt.prototype,"contentElement",void 0);Mt([fr(".mdc-container")],zt.prototype,"conatinerElement",void 0);Mt([Se({type:Boolean})],zt.prototype,"hideActions",void 0);Mt([Se({type:Boolean}),Ki(function(){this.forceLayout()})],zt.prototype,"stacked",void 0);Mt([Se({type:String})],zt.prototype,"heading",void 0);Mt([Se({type:String}),Ki(function(r){this.mdcFoundation.setScrimClickAction(r)})],zt.prototype,"scrimClickAction",void 0);Mt([Se({type:String}),Ki(function(r){this.mdcFoundation.setEscapeKeyAction(r)})],zt.prototype,"escapeKeyAction",void 0);Mt([Se({type:Boolean,reflect:!0}),Ki(function(r){this.mdcFoundation&&this.isConnected&&(r?(this.setEventListeners(),this.mdcFoundation.open()):(this.removeEventListeners(),this.mdcFoundation.close(this.currentAction||this.defaultAction),this.currentAction=void 0))})],zt.prototype,"open",void 0);Mt([Se()],zt.prototype,"defaultAction",void 0);Mt([Se()],zt.prototype,"actionAttribute",void 0);Mt([Se()],zt.prototype,"initialFocusAttribute",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const pm=Re`.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__surface{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12)}.mdc-dialog__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(max-width: 600px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid transparent;display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){margin-left:0;margin-right:8px}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:.000000001px;margin-top:12px}`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let As=class extends zt{};As.styles=[pm];As=Mt([Qg("mwc-dialog")],As);class Td extends Jt{static get properties(){return{firmwareVersion:{type:String,reflectToAttribute:!0,attribute:!0},preferredColor:{type:String,reflectToAttribute:!0,attribute:!0},preferredWidth:{type:Number,reflectToAttribute:!0,attribute:!0},productId:{type:String,reflectToAttribute:!0,attribute:!0},protocolVersion:{type:String,reflectToAttribute:!0,attribute:!0},style:{type:String,reflectToAttribute:!0,attribute:!0},vendorId:{type:String,reflectToAttribute:!0,attribute:!0}}}set firmwareVersion(t){let i=this._firmwareVersion;this._firmwareVersion=t,this.requestUpdate("firmwareVersion",i)}get firmwareVersion(){return this._firmwareVersion}set preferredColor(t){let i=this.preferredColor;this._preferredColor=t,this.requestUpdate("preferredColor",i)}get preferredColor(){return this._preferredColor}set preferredWidth(t){let i=this._preferredWidth;this._preferredWidth=t,this.requestUpdate("preferredWidth",i)}get preferredWidth(){return this._preferredWidth}set productId(t){let i=this._productId;this._productId=t,this.requestUpdate("productId",i)}get productId(){return this._productId}set protocolVersion(t){let i=this._protocolVersion;this._protocolVersion=t,this.requestUpdate("protocolVersion",i)}get protocolVersion(){return this._protocolVersion}set style(t){let i=this._style;this._style=t,this.requestUpdate("style",i)}get style(){return this._style}set vendorId(t){let i=this._vendorId;this._vendorId=t,this.requestUpdate("vendorId",i)}get vendorId(){return this._vendorId}constructor(){super()}show(t){t&&(this.vendorId=t.firmware.vendorId,this.productId=t.firmware.productId,this.firmwareVersion=t.firmware.firmwareVersion,this.protocolVersion=t.protocol.protocolVersion,this.preferredColor=t.preferredColor,this.preferredWidth=t.preferredWidth,this.style=t.style,this.shadowRoot.getElementById("usi-mwc-dialog").show())}render(){return oe`
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
  </mwc-dialog>`}}xt(Td,"styles",Re`
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
  `);customElements.define("usi-dialog",Td);gs("/tiny-canvas/");class Id extends Jt{constructor(){super();xt(this,"_deleteAllPaths",async i=>{this._mainCanvas.deleteAllPaths()});xt(this,"_onDragStart",async i=>{this._initialX=i.x-this._xOffset,this._initialY=i.y-this._yOffset,i.target===this._infoPanel&&(this._dragActive=!0)});xt(this,"_onDrag",async i=>{this._dragActive&&(i.preventDefault(),this._currentX=i.clientX-this._initialX,this._currentY=i.clientY-this._initialY,this._xOffset=this._currentX,this._yOffset=this._currentY,this._infoPanel.style.transform="translate3d("+this._currentX+"px, "+this._currentY+"px, 0)")});xt(this,"_onDragEnd",async i=>{this._initialX=this._currentX,this._initialY=this._currentY,this._dragActive=!1});this._renderingType=null,this._rafId=null,this._dragActive=!1,this._currentX=0,this._currentY=0,this._initialX=0,this._initialY=0,this._xOffset=0,this._yOffset=0,this._defaultIdleTimeout=50,this._currentEvent=null,this._previousEvent=null,this._pointerLatencySamples=new hg(60)}set currentEvent(i){this._previousEvent=this._currentEvent,this._currentEvent=i,this._isIdle=!1,clearTimeout(this._idleTimer),this._idleTimer=setTimeout(this._onIdle.bind(this),this._defaultIdleTimeout)}get currentEvent(){return this._currentEvent}firstUpdated(){const i=this.shadowRoot.querySelector("#settings-button"),n=this.shadowRoot.querySelector("#settings-dialog");i.addEventListener("click",()=>n.show()),this._swAlert=this.shadowRoot.querySelector("#sw-alert"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new fu("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()}),this._switchRenderingType("js-canvas",!0),this._usiDialog=this.shadowRoot.querySelector("#usi-dialog"),this._infoButton=this.shadowRoot.querySelector("#info-button"),this._infoButton.onpointerdown=this._toggleInfoPanel.bind(this),this._undoButton=this.shadowRoot.querySelector("#undo-button"),this._undoButton.onpointerdown=this._undoPath.bind(this),this._redoButton=this.shadowRoot.querySelector("#redo-button"),this._redoButton.onpointerdown=this._redoPath.bind(this),this._deleteButton=this.shadowRoot.querySelector("#delete-button"),this._deleteButton.onpointerdown=this._deleteAllPaths.bind(this),this._undoButton.disabled=!0,this._redoButton.disabled=!0,this._infoPanel=this.shadowRoot.querySelector("#info-panel"),this._infoPanel.style.visibility="hidden",this._infoPanel.onpointerdown=this._onDragStart.bind(this),this._infoPanel.onpointermove=this._onDrag.bind(this),this._infoPanel.onpointerup=this._onDragEnd.bind(this)}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&ds(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}_toggleInfoPanel(){this._infoPanel.style.visibility==="hidden"?(this._infoPanel.style.visibility="visible",this._rafId=window.requestAnimationFrame(this._onFrame.bind(this))):(this._infoPanel.style.visibility="hidden",this._rafId&&(window.cancelAnimationFrame(this._rafId),this._rafId=null))}_undoPath(){this._mainCanvas.undoPath()}_redoPath(){this._mainCanvas.redoPath()}_onFrame(i){if(!this._isIdle&&this._currentEvent){let n=performance.now()-this._currentEvent.timeStamp;this._pointerLatencySamples.push(n),this._updateInfoPanel(this._currentEvent)}this._rafId=window.requestAnimationFrame(this._onFrame.bind(this))}_onIdle(){this._isIdle=!0,this._pointerLatencySamples.clear()}_updateInfoPanel(i){if(this._infoPanel.eventType=i.type,this._infoPanel.pointerType=i.pointerType,this._infoPanel.pointerId=i.pointerId,this._infoPanel.isPrimary=i.isPrimary,this._infoPanel.width=i.width,this._infoPanel.height=i.height,this._infoPanel.positionX=this._roundDecimal(i.x,4),this._infoPanel.positionY=this._roundDecimal(i.y,4),typeof i.penCustomizationsDetails<"u")try{i.penCustomizationsDetails.getPreferredInkingColor().then(n=>{this._infoPanel.preferredColor=n}),i.penCustomizationsDetails.getPreferredInkingStyle().then(n=>{this._infoPanel.preferredStyle=n}),i.penCustomizationsDetails.getPreferredInkingWidth().then(n=>{this._infoPanel.preferredWidth=n})}catch{this._infoPanel.preferredColor=this._infoPanel.preferredWidth=this._infoPanel.preferredWidth="unavailable"}this._infoPanel.pressure=this._roundDecimal(i.pressure,4),this._infoPanel.tangentialPressure=this._roundDecimal(i.tangentialPressure,4),this._infoPanel.tiltX=this._roundDecimal(i.tiltX,4),this._infoPanel.tiltY=this._roundDecimal(i.tiltY,4),this._infoPanel.twist=this._roundDecimal(i.twist,4),this._infoPanel.avgLatency=this._pointerLatencySamples.avg().toFixed(1)}_roundDecimal(i,n){const o=Math.pow(10,n);return Math.round(i*o)/o}_switchRenderingType(i,n){if(this._renderingType===i&&this._mainCanvas._desynchronized===n)return;let o=document.createElement(i);this._mainCanvas&&(o.currentLineColor=this._mainCanvas.currentLineColor,o.currentLineStye=this._mainCanvas.currentLineStyle,o.currentLineWidth=this._mainCanvas.currentLineWidth,o.drawCoalescedEvents=this._mainCanvas.drawCoalescedEvents,o.drawPointsOnly=this._mainCanvas.drawPointsOnly,o.drawPredictedEvents=this._mainCanvas.drawPredictedEvents,o.drawWithCustomizations=this._mainCanvas.drawWithCustomizations,o.drawWithPressure=this._mainCanvas.drawWithPressure,o.highlightPredictedEvents=this._mainCanvas.highlightPredictedEvents,o.numOfPredictionPoints=this._mainCanvas.numOfPredictionPoints,o.pointerRawUpdate=this._mainCanvas.pointerRawUpdate,this._mainCanvas.remove()),this._mainCanvas=o,this._mainCanvas.app=this,this._mainCanvas.desynchronized=n,this._renderingType=i,this.shadowRoot.getElementById("main-canvas").appendChild(o)}_renderingTypeChanged(i){this._switchRenderingType(i.detail.renderingType,this._mainCanvas._desynchronized)}_desynchronizedEnabledChanged(i){this._renderingType&&this._mainCanvas._desynchronized!==i.detail.desynchronizedEnabled&&this._switchRenderingType(this._renderingType,i.detail.desynchronizedEnabled)}_lineColorChanged(i){this._mainCanvas.currentLineColor=i.detail.lineColor,this._mainCanvas.drawWithCustomizations=!1}_lineStyleChanged(i){this._mainCanvas.currentLineStyle=i.detail.lineStyle,this._mainCanvas.drawWithCustomizations=!1}_lineWidthChanged(i){this._mainCanvas.currentLineWidth=i.detail.lineWidth,this._mainCanvas.drawWithCustomizations=!1}_drawWithCustomizationsChanged(i){this._mainCanvas.drawWithCustomizations=i.detail.drawWithCustomizations}_pointerRawUpdateEnabledChanged(i){this._mainCanvas.pointerRawUpdate=i.detail.pointerRawUpdateEnabled}_pressureEventsEnabledChanged(i){this._mainCanvas.drawWithPressure=i.detail.pressureEventsEnabled}_predictedEventsEnabledChanged(i){this._mainCanvas.drawPredictedEvents=i.detail.predictedEventsEnabled}_predictedEventsHighlightEnabledChanged(i){this._mainCanvas.highlightPredictedEvents=i.detail.predictedEventsHighlightEnabled}_predictionTypeChanged(i){this._mainCanvas.predictionType=i.detail.predictionType}_numOfPredictionPointsChanged(i){this._mainCanvas.numOfPredictionPoints=i.detail.numOfPredictionPoints}_coalescedEventsEnabledChanged(i){this._mainCanvas.drawCoalescedEvents=i.detail.coalescedEventsEnabled}_drawPointsOnlyEnabledChanged(i){this._mainCanvas.drawPointsOnly=i.detail.drawPointsOnlyEnabled}_usiInfoDialogPressed(i){this._usiDialog.show(i.detail.usiInfo)}_pathsChanged(i){let n=i.detail.paths;n.length===0?(this._undoButton.disabled=!0,this._redoButton.disabled=!0,this._redoButton.closest("sl-tooltip").disabled=!0,this._undoButton.closest("sl-tooltip").disabled=!0):(this._undoButton.disabled=!n[0].display,this._redoButton.disabled=!!n[n.length-1].display,this._undoButton.closest("sl-tooltip").disabled=this._undoButton.disabled,this._redoButton.closest("sl-tooltip").disabled=this._redoButton.disabled)}render(){return oe`
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
            @lineColor-changed=${this._lineColorChanged}
            @lineStyle-changed=${this._lineStyleChanged}
            @lineWidth-changed=${this._lineWidthChanged}
            @drawWithCustomizations-changed=${this._drawWithCustomizationsChanged}>
          </drawing-toolbar>
          <main-canvas id="main-canvas" @paths-changed="${this._pathsChanged}"></main-canvas>
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
    </div>`}}xt(Id,"styles",Re`
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
  `);customElements.define("main-application",Id);
