try{self["workbox:core:6.5.3"]&&_()}catch(t){}const t=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class e extends Error{constructor(e,s){super(t(e,s)),this.name=e,this.details=s}}try{self["workbox:routing:6.5.3"]&&_()}catch(t){}const s=t=>t&&"object"==typeof t?t:{handle:t};class n{constructor(t,e,n="GET"){this.handler=s(e),this.match=t,this.method=n}setCatchHandler(t){this.catchHandler=s(t)}}class i extends n{constructor(t,e,s){super((({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)}),e,s)}}class r{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const s=new Request(...e);return this.handleRequest({request:s,event:t})})));t.waitUntil(s),t.ports&&t.ports[0]&&s.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:e,request:t,sameOrigin:n,url:s});let a=r&&r.handler;const o=t.method;if(!a&&this.i.has(o)&&(a=this.i.get(o)),!a)return;let c;try{c=a.handle({url:s,request:t,event:e,params:i})}catch(t){c=Promise.reject(t)}const h=r&&r.catchHandler;return c instanceof Promise&&(this.o||h)&&(c=c.catch((async n=>{if(h)try{return await h.handle({url:s,request:t,event:e,params:i})}catch(t){t instanceof Error&&(n=t)}if(this.o)return this.o.handle({url:s,request:t,event:e});throw n}))),c}findMatchingRoute({url:t,sameOrigin:e,request:s,event:n}){const i=this.t.get(s.method)||[];for(const r of i){let i;const a=r.match({url:t,sameOrigin:e,request:s,event:n});if(a)return i=a,(Array.isArray(i)&&0===i.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(t,e="GET"){this.i.set(e,s(t))}setCatchHandler(t){this.o=s(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this.t.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this.t.get(t.method).splice(s,1)}}let a;const o=()=>(a||(a=new r,a.addFetchListener(),a.addCacheListener()),a);function c(t,s,r){let a;if("string"==typeof t){const e=new URL(t,location.href);a=new n((({url:t})=>t.href===e.href),s,r)}else if(t instanceof RegExp)a=new i(t,s,r);else if("function"==typeof t)a=new n(t,s,r);else{if(!(t instanceof n))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=t}return o().registerRoute(a),a}const h={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},u=t=>[h.prefix,t,h.suffix].filter((t=>t&&t.length>0)).join("-"),l=t=>t||u(h.precache),f=t=>t||u(h.runtime);function w(t){t.then((()=>{}))}const d=new Set;function p(){return p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},p.apply(this,arguments)}let y,g;const m=new WeakMap,b=new WeakMap,v=new WeakMap,R=new WeakMap,q=new WeakMap;let D={get(t,e,s){if(t instanceof IDBTransaction){if("done"===e)return b.get(t);if("objectStoreNames"===e)return t.objectStoreNames||v.get(t);if("store"===e)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return I(t[e])},set:(t,e,s)=>(t[e]=s,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function U(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(g||(g=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(L(this),e),I(m.get(this))}:function(...e){return I(t.apply(L(this),e))}:function(e,...s){const n=t.call(L(this),e,...s);return v.set(n,e.sort?e.sort():[e]),I(n)}}function x(t){return"function"==typeof t?U(t):(t instanceof IDBTransaction&&function(t){if(b.has(t))return;const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),n()},r=()=>{s(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));b.set(t,e)}(t),e=t,(y||(y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,D):t);var e}function I(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(I(t.result)),n()},r=()=>{s(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&m.set(e,t)})).catch((()=>{})),q.set(e,t),e}(t);if(R.has(t))return R.get(t);const e=x(t);return e!==t&&(R.set(t,e),q.set(e,t)),e}const L=t=>q.get(t);const E=["get","getKey","getAll","getAllKeys","count"],N=["put","add","delete","clear"],C=new Map;function O(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(C.get(e))return C.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,i=N.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!i&&!E.includes(s))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let a=r.store;return n&&(a=a.index(e.shift())),(await Promise.all([a[s](...e),i&&r.done]))[0]};return C.set(e,r),r}D=(t=>p({},t,{get:(e,s,n)=>O(e,s)||t.get(e,s,n),has:(e,s)=>!!O(e,s)||t.has(e,s)}))(D);try{self["workbox:expiration:6.5.3"]&&_()}catch(t){}const B=t=>{const e=new URL(t,location.href);return e.hash="",e.href};class k{constructor(t){this.h=null,this.u=t}l(t){const e=t.createObjectStore("cache-entries",{keyPath:"id"});e.createIndex("cacheName","cacheName",{unique:!1}),e.createIndex("timestamp","timestamp",{unique:!1})}p(t){this.l(t),this.u&&function(t,{blocked:e}={}){const s=indexedDB.deleteDatabase(t);e&&s.addEventListener("blocked",(t=>e(t.oldVersion,t))),I(s).then((()=>{}))}(this.u)}async setTimestamp(t,e){const s={url:t=B(t),timestamp:e,cacheName:this.u,id:this.g(t)},n=(await this.getDb()).transaction("cache-entries","readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(t){const e=await this.getDb(),s=await e.get("cache-entries",this.g(t));return null==s?void 0:s.timestamp}async expireEntries(t,e){const s=await this.getDb();let n=await s.transaction("cache-entries").store.index("timestamp").openCursor(null,"prev");const i=[];let r=0;for(;n;){const s=n.value;s.cacheName===this.u&&(t&&s.timestamp<t||e&&r>=e?i.push(n.value):r++),n=await n.continue()}const a=[];for(const t of i)await s.delete("cache-entries",t.id),a.push(t.url);return a}g(t){return this.u+"|"+B(t)}async getDb(){return this.h||(this.h=await function(t,e,{blocked:s,upgrade:n,blocking:i,terminated:r}={}){const a=indexedDB.open(t,e),o=I(a);return n&&a.addEventListener("upgradeneeded",(t=>{n(I(a.result),t.oldVersion,t.newVersion,I(a.transaction),t)})),s&&a.addEventListener("blocked",(t=>s(t.oldVersion,t.newVersion,t))),o.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),o}("workbox-expiration",1,{upgrade:this.p.bind(this)})),this.h}}class T{constructor(t,e={}){this.m=!1,this.v=!1,this.R=e.maxEntries,this.q=e.maxAgeSeconds,this.D=e.matchOptions,this.u=t,this.U=new k(t)}async expireEntries(){if(this.m)return void(this.v=!0);this.m=!0;const t=this.q?Date.now()-1e3*this.q:0,e=await this.U.expireEntries(t,this.R),s=await self.caches.open(this.u);for(const t of e)await s.delete(t,this.D);this.m=!1,this.v&&(this.v=!1,w(this.expireEntries()))}async updateTimestamp(t){await this.U.setTimestamp(t,Date.now())}async isURLExpired(t){if(this.q){const e=await this.U.getTimestamp(t),s=Date.now()-1e3*this.q;return void 0===e||e<s}return!1}async delete(){this.v=!1,await this.U.expireEntries(1/0)}}function j(t,e){const s=new URL(t);for(const t of e)s.searchParams.delete(t);return s.href}class M{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}try{self["workbox:strategies:6.5.3"]&&_()}catch(t){}function W(t){return"string"==typeof t?new Request(t):t}class P{constructor(t,e){this.I={},Object.assign(this,e),this.event=e.event,this.L=t,this._=new M,this.N=[],this.C=[...t.plugins],this.O=new Map;for(const t of this.C)this.O.set(t,{});this.event.waitUntil(this._.promise)}async fetch(t){const{event:s}=this;let n=W(t);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const t=await s.preloadResponse;if(t)return t}const i=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))n=await t({request:n.clone(),event:s})}catch(t){if(t instanceof Error)throw new e("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const r=n.clone();try{let t;t=await fetch(n,"navigate"===n.mode?void 0:this.L.fetchOptions);for(const e of this.iterateCallbacks("fetchDidSucceed"))t=await e({event:s,request:r,response:t});return t}catch(t){throw i&&await this.runCallbacks("fetchDidFail",{error:t,event:s,originalRequest:i.clone(),request:r.clone()}),t}}async fetchAndCachePut(t){const e=await this.fetch(t),s=e.clone();return this.waitUntil(this.cachePut(t,s)),e}async cacheMatch(t){const e=W(t);let s;const{cacheName:n,matchOptions:i}=this.L,r=await this.getCacheKey(e,"read"),a=Object.assign(Object.assign({},i),{cacheName:n});s=await caches.match(r,a);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await t({cacheName:n,matchOptions:i,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(t,s){const n=W(t);var i;await(i=0,new Promise((t=>setTimeout(t,i))));const r=await this.getCacheKey(n,"write");if(!s)throw new e("cache-put-with-no-response",{url:(a=r.url,new URL(String(a),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var a;const o=await this.B(s);if(!o)return!1;const{cacheName:c,matchOptions:h}=this.L,u=await self.caches.open(c),l=this.hasCallback("cacheDidUpdate"),f=l?await async function(t,e,s,n){const i=j(e.url,s);if(e.url===i)return t.match(e,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),a=await t.keys(e,r);for(const e of a)if(i===j(e.url,s))return t.match(e,n)}(u,r.clone(),["__WB_REVISION__"],h):null;try{await u.put(r,l?o.clone():o)}catch(t){if(t instanceof Error)throw"QuotaExceededError"===t.name&&await async function(){for(const t of d)await t()}(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:c,oldResponse:f,newResponse:o.clone(),request:r,event:this.event});return!0}async getCacheKey(t,e){const s=`${t.url} | ${e}`;if(!this.I[s]){let n=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))n=W(await t({mode:e,request:n,event:this.event,params:this.params}));this.I[s]=n}return this.I[s]}hasCallback(t){for(const e of this.L.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const s of this.iterateCallbacks(t))await s(e)}*iterateCallbacks(t){for(const e of this.L.plugins)if("function"==typeof e[t]){const s=this.O.get(e),n=n=>{const i=Object.assign(Object.assign({},n),{state:s});return e[t](i)};yield n}}waitUntil(t){return this.N.push(t),t}async doneWaiting(){let t;for(;t=this.N.shift();)await t}destroy(){this._.resolve(null)}async B(t){let e=t,s=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,s=!0,!e)break;return s||e&&200!==e.status&&(e=void 0),e}}class S{constructor(t={}){this.cacheName=f(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,s="string"==typeof t.request?new Request(t.request):t.request,n="params"in t?t.params:void 0,i=new P(this,{event:e,request:s,params:n}),r=this.k(i,s,e);return[r,this.T(r,i,s,e)]}async k(t,s,n){let i;await t.runCallbacks("handlerWillStart",{event:n,request:s});try{if(i=await this.j(s,t),!i||"error"===i.type)throw new e("no-response",{url:s.url})}catch(e){if(e instanceof Error)for(const r of t.iterateCallbacks("handlerDidError"))if(i=await r({error:e,event:n,request:s}),i)break;if(!i)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))i=await e({event:n,request:s,response:i});return i}async T(t,e,s,n){let i,r;try{i=await t}catch(r){}try{await e.runCallbacks("handlerDidRespond",{event:n,request:s,response:i}),await e.doneWaiting()}catch(t){t instanceof Error&&(r=t)}if(await e.runCallbacks("handlerDidComplete",{event:n,request:s,response:i,error:r}),e.destroy(),r)throw r}}function K(t,e){const s=e();return t.waitUntil(s),s}try{self["workbox:precaching:6.5.3"]&&_()}catch(t){}function A(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:n}=t;if(!n)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:r.href}}class F{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:t,state:e})=>{e&&(e.originalRequest=t)},this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:s})=>{if("install"===t.type&&e&&e.originalRequest&&e.originalRequest instanceof Request){const t=e.originalRequest.url;s?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return s}}}class ${constructor({precacheController:t}){this.cacheKeyWillBeUsed=async({request:t,params:e})=>{const s=(null==e?void 0:e.cacheKey)||this.M.getCacheKeyForURL(t.url);return s?new Request(s,{headers:t.headers}):t},this.M=t}}let H,G;async function V(t,s){let n=null;if(t.url){n=new URL(t.url).origin}if(n!==self.location.origin)throw new e("cross-origin-copy-response",{origin:n});const i=t.clone(),r={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},a=s?s(r):r,o=function(){if(void 0===H){const t=new Response("");if("body"in t)try{new Response(t.body),H=!0}catch(t){H=!1}H=!1}return H}()?i.body:await i.blob();return new Response(o,a)}class J extends S{constructor(t={}){t.cacheName=l(t.cacheName),super(t),this.W=!1!==t.fallbackToNetwork,this.plugins.push(J.copyRedirectedCacheableResponsesPlugin)}async j(t,e){const s=await e.cacheMatch(t);return s||(e.event&&"install"===e.event.type?await this.P(t,e):await this.S(t,e))}async S(t,s){let n;const i=s.params||{};if(!this.W)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const e=i.integrity,r=t.integrity,a=!r||r===e;n=await s.fetch(new Request(t,{integrity:"no-cors"!==t.mode?r||e:void 0})),e&&a&&"no-cors"!==t.mode&&(this.K(),await s.cachePut(t,n.clone()))}return n}async P(t,s){this.K();const n=await s.fetch(t);if(!await s.cachePut(t,n.clone()))throw new e("bad-precaching-response",{url:t.url,status:n.status});return n}K(){let t=null,e=0;for(const[s,n]of this.plugins.entries())n!==J.copyRedirectedCacheableResponsesPlugin&&(n===J.defaultPrecacheCacheabilityPlugin&&(t=s),n.cacheWillUpdate&&e++);0===e?this.plugins.push(J.defaultPrecacheCacheabilityPlugin):e>1&&null!==t&&this.plugins.splice(t,1)}}J.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:t})=>!t||t.status>=400?null:t},J.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await V(t):t};class Q{constructor({cacheName:t,plugins:e=[],fallbackToNetwork:s=!0}={}){this.A=new Map,this.F=new Map,this.$=new Map,this.L=new J({cacheName:l(t),plugins:[...e,new $({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.L}precache(t){this.addToCacheList(t),this.H||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.H=!0)}addToCacheList(t){const s=[];for(const n of t){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:t,url:i}=A(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.A.has(i)&&this.A.get(i)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this.A.get(i),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this.$.has(t)&&this.$.get(t)!==n.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:i});this.$.set(t,n.integrity)}if(this.A.set(i,t),this.F.set(i,r),s.length>0){const t=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}install(t){return K(t,(async()=>{const e=new F;this.strategy.plugins.push(e);for(const[e,s]of this.A){const n=this.$.get(s),i=this.F.get(e),r=new Request(e,{integrity:n,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:t}))}const{updatedURLs:s,notUpdatedURLs:n}=e;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(t){return K(t,(async()=>{const t=await self.caches.open(this.strategy.cacheName),e=await t.keys(),s=new Set(this.A.values()),n=[];for(const i of e)s.has(i.url)||(await t.delete(i),n.push(i.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.A}getCachedURLs(){return[...this.A.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this.A.get(e.href)}getIntegrityForCacheKey(t){return this.$.get(t)}async matchPrecache(t){const e=t instanceof Request?t.url:t,s=this.getCacheKeyForURL(e);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(t){const s=this.getCacheKeyForURL(t);if(!s)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params=Object.assign({cacheKey:s},e.params),this.strategy.handle(e))}}const z=()=>(G||(G=new Q),G);class X extends n{constructor(t,e){super((({request:s})=>{const n=t.getURLsToCacheKeys();for(const i of function*(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const r=new URL(t,location.href);r.hash="",yield r.href;const a=function(t,e=[]){for(const s of[...t.searchParams.keys()])e.some((t=>t.test(s)))&&t.searchParams.delete(s);return t}(r,e);if(yield a.href,s&&a.pathname.endsWith("/")){const t=new URL(a.href);t.pathname+=s,yield t.href}if(n){const t=new URL(a.href);t.pathname+=".html",yield t.href}if(i){const t=i({url:r});for(const e of t)yield e.href}}(s.url,e)){const e=n.get(i);if(e){return{cacheKey:e,integrity:t.getIntegrityForCacheKey(e)}}}}),t.strategy)}}var Y;self.addEventListener("message",(t=>{t.data&&"SKIP_WAITING"===t.data.type&&self.skipWaiting()})),Y={},function(t){z().precache(t)}([{url:"assets/index.36269498.css",revision:"f29d20bba5eef06c4ee6375abceab796"},{url:"favicon.ico",revision:"9fd07861b525cd43e21979cfcb056a0c"},{url:"index.html",revision:"b6275eab3e894703f78b758d4e664a34"},{url:"assets/index.8a1ddbe1.js",revision:"a90c383863711bf393382803ade0cecf"}]),function(t){const e=z();c(new X(e,t))}(Y),c(/\.(?:png|jpg|jpeg|svg|webp)$/,new class extends S{async j(t,s){let n,i=await s.cacheMatch(t);if(!i)try{i=await s.fetchAndCachePut(t)}catch(t){t instanceof Error&&(n=t)}if(!i)throw new e("no-response",{url:t.url,error:n});return i}}({cacheName:"images",plugins:[new class{constructor(t={}){this.cachedResponseWillBeUsed=async({event:t,request:e,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.G(n),r=this.V(s);w(r.expireEntries());const a=r.updateTimestamp(e.url);if(t)try{t.waitUntil(a)}catch(t){}return i?n:null},this.cacheDidUpdate=async({cacheName:t,request:e})=>{const s=this.V(t);await s.updateTimestamp(e.url),await s.expireEntries()},this.J=t,this.q=t.maxAgeSeconds,this.X=new Map,t.purgeOnQuotaError&&function(t){d.add(t)}((()=>this.deleteCacheAndMetadata()))}V(t){if(t===f())throw new e("expire-custom-caches-only");let s=this.X.get(t);return s||(s=new T(t,this.J),this.X.set(t,s)),s}G(t){if(!this.q)return!0;const e=this.Y(t);if(null===e)return!0;return e>=Date.now()-1e3*this.q}Y(t){if(!t.headers.has("date"))return null;const e=t.headers.get("date"),s=new Date(e).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[t,e]of this.X)await self.caches.delete(t),await e.delete();this.X=new Map}}({maxEntries:15})]}),"GET");
//# sourceMappingURL=sw.js.map
