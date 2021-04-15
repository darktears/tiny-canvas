try{self["workbox:core:6.0.0-rc.0"]&&_()}catch(t){}const t=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class e extends Error{constructor(e,s){super(t(e,s)),this.name=e,this.details=s}}try{self["workbox:routing:6.0.0-rc.0"]&&_()}catch(t){}const s=t=>t&&"object"==typeof t?t:{handle:t};class n{constructor(t,e,n="GET"){this.handler=s(e),this.match=t,this.method=n}}class i extends n{constructor(t,e,s){super((({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)}),e,s)}}class r{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const s=new Request(...e);return this.handleRequest({request:s,event:t})})));t.waitUntil(s),t.ports&&t.ports[0]&&s.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:e,request:t,sameOrigin:n,url:s});let a=r&&r.handler;const c=t.method;if(!a&&this.i.has(c)&&(a=this.i.get(c)),!a)return;let o;try{o=a.handle({url:s,request:t,event:e,params:i})}catch(t){o=Promise.reject(t)}return o instanceof Promise&&this.o&&(o=o.catch((n=>this.o.handle({url:s,request:t,event:e})))),o}findMatchingRoute({url:t,sameOrigin:e,request:s,event:n}){const i=this.t.get(s.method)||[];for(const r of i){let i;const a=r.match({url:t,sameOrigin:e,request:s,event:n});if(a)return i=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(t,e="GET"){this.i.set(e,s(t))}setCatchHandler(t){this.o=s(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this.t.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this.t.get(t.method).splice(s,1)}}let a;const c=()=>(a||(a=new r,a.addFetchListener(),a.addCacheListener()),a);function o(t,s,r){let a;if("string"==typeof t){const e=new URL(t,location.href);a=new n((({url:t})=>t.href===e.href),s,r)}else if(t instanceof RegExp)a=new i(t,s,r);else if("function"==typeof t)a=new n(t,s,r);else{if(!(t instanceof n))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=t}return c().registerRoute(a),a}try{self["workbox:core:6.0.0-rc.0"]&&_()}catch(t){}const h=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class u extends Error{constructor(t,e){super(h(t,e)),this.name=t,this.details=e}}const l={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},f=t=>[l.prefix,t,l.suffix].filter((t=>t&&t.length>0)).join("-"),d=t=>t||f(l.runtime);function w(t){t.then((()=>{}))}const p=new Set;class y{constructor(t,e,{onupgradeneeded:s,onversionchange:n}={}){this.h=null,this.u=t,this.l=e,this.p=s,this.g=n||(()=>this.close())}get db(){return this.h}async open(){if(!this.h)return this.h=await new Promise(((t,e)=>{let s=!1;setTimeout((()=>{s=!0,e(new Error("The open request was blocked and timed out"))}),this.OPEN_TIMEOUT);const n=indexedDB.open(this.u,this.l);n.onerror=()=>e(n.error),n.onupgradeneeded=t=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.p&&this.p(t)},n.onsuccess=()=>{const e=n.result;s?e.close():(e.onversionchange=this.g.bind(this),t(e))}})),this}async getKey(t,e){return(await this.getAllKeys(t,e,1))[0]}async getAll(t,e,s){return await this.getAllMatching(t,{query:e,count:s})}async getAllKeys(t,e,s){return(await this.getAllMatching(t,{query:e,count:s,includeKeys:!0})).map((t=>t.key))}async getAllMatching(t,{index:e,query:s=null,direction:n="next",count:i,includeKeys:r=!1}={}){return await this.transaction([t],"readonly",((a,c)=>{const o=a.objectStore(t),h=e?o.index(e):o,u=[],l=h.openCursor(s,n);l.onsuccess=()=>{const t=l.result;t?(u.push(r?t:t.value),i&&u.length>=i?c(u):t.continue()):c(u)}}))}async transaction(t,e,s){return await this.open(),await new Promise(((n,i)=>{const r=this.h.transaction(t,e);r.onabort=()=>i(r.error),r.oncomplete=()=>n(),s(r,(t=>n(t)))}))}async m(t,e,s,...n){return await this.transaction([e],s,((s,i)=>{const r=s.objectStore(e),a=r[t].apply(r,n);a.onsuccess=()=>i(a.result)}))}close(){this.h&&(this.h.close(),this.h=null)}}y.prototype.OPEN_TIMEOUT=2e3;const g={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[t,e]of Object.entries(g))for(const s of e)s in IDBObjectStore.prototype&&(y.prototype[s]=async function(e,...n){return await this.m(s,e,t,...n)});try{self["workbox:expiration:6.0.0-rc.0"]&&_()}catch(t){}const m=t=>{const e=new URL(t,location.href);return e.hash="",e.href};class v{constructor(t){this.v=t,this.h=new y("workbox-expiration",1,{onupgradeneeded:t=>this.R(t)})}R(t){const e=t.target.result.createObjectStore("cache-entries",{keyPath:"id"});e.createIndex("cacheName","cacheName",{unique:!1}),e.createIndex("timestamp","timestamp",{unique:!1}),(async t=>{await new Promise(((e,s)=>{const n=indexedDB.deleteDatabase(t);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{e()}}))})(this.v)}async setTimestamp(t,e){const s={url:t=m(t),timestamp:e,cacheName:this.v,id:this.q(t)};await this.h.put("cache-entries",s)}async getTimestamp(t){return(await this.h.get("cache-entries",this.q(t))).timestamp}async expireEntries(t,e){const s=await this.h.transaction("cache-entries","readwrite",((s,n)=>{const i=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),r=[];let a=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this.v&&(t&&n.timestamp<t||e&&a>=e?r.push(s.value):a++),s.continue()}else n(r)}})),n=[];for(const t of s)await this.h.delete("cache-entries",t.id),n.push(t.url);return n}q(t){return this.v+"|"+m(t)}}class b{constructor(t,e={}){this.U=!1,this._=!1,this.L=e.maxEntries,this.N=e.maxAgeSeconds,this.j=e.matchOptions,this.v=t,this.C=new v(t)}async expireEntries(){if(this.U)return void(this._=!0);this.U=!0;const t=this.N?Date.now()-1e3*this.N:0,e=await this.C.expireEntries(t,this.L),s=await self.caches.open(this.v);for(const t of e)await s.delete(t,this.j);this.U=!1,this._&&(this._=!1,w(this.expireEntries()))}async updateTimestamp(t){await this.C.setTimestamp(t,Date.now())}async isURLExpired(t){if(this.N){return await this.C.getTimestamp(t)<Date.now()-1e3*this.N}return!1}async delete(){this._=!1,await this.C.expireEntries(1/0)}}try{self["workbox:core:6.0.0-rc.0"]&&_()}catch(t){}const R=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class q extends Error{constructor(t,e){super(R(t,e)),this.name=t,this.details=e}}const x={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},U=t=>[x.prefix,t,x.suffix].filter((t=>t&&t.length>0)).join("-"),L=t=>t||U(x.runtime);function N(){return(N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}).apply(this,arguments)}function E(t,e){const s=new URL(t);for(const t of e)s.searchParams.delete(t);return s.href}class j{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}const C=new Set;try{self["workbox:strategies:6.0.0-rc.0"]&&_()}catch(t){}function O(t){return"string"==typeof t?new Request(t):t}class k{constructor(t,e){this.O={},Object.assign(this,e),this.event=e.event,this.k=t,this.D=new j,this.T=[],this.K=[...t.plugins],this.A=new Map;for(const t of this.K)this.A.set(t,{});this.event.waitUntil(this.D.promise)}fetch(t){return this.waitUntil((async()=>{const{event:e}=this;let s=O(t);if("navigate"===s.mode&&e instanceof FetchEvent&&e.preloadResponse){const t=await e.preloadResponse;if(t)return t}const n=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))s=await t({request:s.clone(),event:e})}catch(t){throw new q("plugin-error-request-will-fetch",{thrownError:t})}const i=s.clone();try{let t;t=await fetch(s,"navigate"===s.mode?void 0:this.k.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))t=await s({event:e,request:i,response:t});return t}catch(t){throw n&&await this.runCallbacks("fetchDidFail",{error:t,event:e,originalRequest:n.clone(),request:i.clone()}),t}})())}async fetchAndCachePut(t){const e=await this.fetch(t),s=e.clone();return this.waitUntil(this.cachePut(t,s)),e}cacheMatch(t){return this.waitUntil((async()=>{const e=O(t);let s;const{cacheName:n,matchOptions:i}=this.k,r=await this.getCacheKey(e,"read"),a=N({},i,{cacheName:n});s=await caches.match(r,a);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await t({cacheName:n,matchOptions:i,cachedResponse:s,request:r,event:this.event})||void 0;return s})())}async cachePut(t,e){const s=O(t);var n;await(n=0,new Promise((t=>setTimeout(t,n))));const i=await this.getCacheKey(s,"write");if(!e)throw new q("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const a=await this.S(e);if(!a)return;const{cacheName:c,matchOptions:o}=this.k,h=await self.caches.open(c),u=this.hasCallback("cacheDidUpdate"),l=u?await async function(t,e,s,n){const i=E(e.url,s);if(e.url===i)return t.match(e,n);const r=N({},n,{ignoreSearch:!0}),a=await t.keys(e,r);for(const e of a)if(i===E(e.url,s))return t.match(e,n)}(h,i.clone(),["__WB_REVISION__"],o):null;try{await h.put(i,u?a.clone():a)}catch(t){throw"QuotaExceededError"===t.name&&await async function(){for(const t of C)await t()}(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:c,oldResponse:l,newResponse:a.clone(),request:i,event:this.event})}async getCacheKey(t,e){if(!this.O[e]){let s=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))s=O(await t({mode:e,request:s,event:this.event,params:this.params}));this.O[e]=s}return this.O[e]}hasCallback(t){for(const e of this.k.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const s of this.iterateCallbacks(t))await s(e)}*iterateCallbacks(t){for(const e of this.k.plugins)if("function"==typeof e[t]){const s=this.A.get(e),n=n=>{const i=N({},n,{state:s});return e[t](i)};yield n}}waitUntil(t){return this.T.push(t),t}async doneWaiting(){let t;for(;t=this.T.shift();)await t}destroy(){this.D.resolve()}async S(t){let e=t,s=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,s=!0,!e)break;return s||e&&200!==e.status&&(e=void 0),e}}class D{constructor(t={}){this.cacheName=L(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,s="string"==typeof t.request?new Request(t.request):t.request,n="params"in t?t.params:void 0,i=new k(this,{event:e,request:s,params:n}),r=this.P(i,s,e);return[r,this.M(r,i,s,e)]}async P(t,e,s){let n;await t.runCallbacks("handlerWillStart",{event:s,request:e});try{if(n=await this.W(e,t),!n||"error"===n.type)throw new q("no-response",{url:e.url})}catch(i){for(const r of t.iterateCallbacks("handlerDidError"))if(n=await r({error:i,event:s,request:e}),n)break;if(!n)throw i}for(const i of t.iterateCallbacks("handlerWillRespond"))n=await i({event:s,request:e,response:n});return n}async M(t,e,s,n){let i,r;try{i=await t}catch(r){}try{await e.runCallbacks("handlerDidRespond",{event:n,request:s,response:i}),await e.doneWaiting()}catch(t){r=t}if(await e.runCallbacks("handlerDidComplete",{event:n,request:s,response:i,error:r}),e.destroy(),r)throw r}}try{self["workbox:core:6.0.0-rc.0"]&&_()}catch(t){}const T=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class K extends Error{constructor(t,e){super(T(t,e)),this.name=t,this.details=e}}const A={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},S=t=>[A.prefix,t,A.suffix].filter((t=>t&&t.length>0)).join("-"),P=t=>t||S(A.precache);function M(t,e){const s=e();return t.waitUntil(s),s}try{self["workbox:precaching:6.0.0-rc.0"]&&_()}catch(t){}function W(t){if(!t)throw new K("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:e,url:s}=t;if(!s)throw new K("add-to-cache-list-unexpected-type",{entry:t});if(!e){const t=new URL(s,location.href);return{cacheKey:t.href,url:t.href}}const n=new URL(s,location.href),i=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",e),{cacheKey:n.href,url:i.href}}class I{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:t,state:e})=>{e&&(e.originalRequest=t)},this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:s})=>{if("install"===t.type){const t=e.originalRequest.url;s?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return s}}}class B{constructor({precacheController:t}){this.cacheKeyWillBeUsed=async({request:t,params:e})=>{const s=e&&e.cacheKey||this.I.getCacheKeyForURL(t.url);return s?new Request(s):t},this.I=t}}let F;async function $(t,e){let s=null;if(t.url){s=new URL(t.url).origin}if(s!==self.location.origin)throw new K("cross-origin-copy-response",{origin:s});const n=t.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=e?e(i):i,a=function(){if(void 0===F){const t=new Response("");if("body"in t)try{new Response(t.body),F=!0}catch(t){F=!1}F=!1}return F}()?n.body:await n.blob();return new Response(a,r)}const H={cacheWillUpdate:async({response:t})=>t.redirected?await $(t):t};class G extends D{constructor(t={}){t.cacheName=P(t.cacheName),super(t),this.B=!1!==t.fallbackToNetwork,this.plugins.push(H)}async W(t,e){const s=await e.cacheMatch(t);return s||(e.event&&"install"===e.event.type?await this.F(t,e):await this.$(t,e))}async $(t,e){let s;if(!this.B)throw new K("missing-precache-entry",{cacheName:this.cacheName,url:t.url});return s=await e.fetch(t),s}async F(t,e){const s=await e.fetchAndCachePut(t);let n=Boolean(s);if(s&&s.status>=400&&!this.H()&&(n=!1),!n)throw new K("bad-precaching-response",{url:t.url,status:s.status});return s}H(){return this.plugins.some((t=>t.cacheWillUpdate&&t!==H))}}class J{constructor({cacheName:t,plugins:e=[],fallbackToNetwork:s=!0}={}){this.G=new Map,this.J=new Map,this.V=new Map,this.k=new G({cacheName:P(t),plugins:[...e,new B({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.k}precache(t){this.addToCacheList(t),this.X||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.X=!0)}addToCacheList(t){const e=[];for(const s of t){"string"==typeof s?e.push(s):s&&void 0===s.revision&&e.push(s.url);const{cacheKey:t,url:n}=W(s),i="string"!=typeof s&&s.revision?"reload":"default";if(this.G.has(n)&&this.G.get(n)!==t)throw new K("add-to-cache-list-conflicting-entries",{firstEntry:this.G.get(n),secondEntry:t});if("string"!=typeof s&&s.integrity){if(this.V.has(t)&&this.V.get(t)!==s.integrity)throw new K("add-to-cache-list-conflicting-integrities",{url:n});this.V.set(t,s.integrity)}if(this.G.set(n,t),this.J.set(n,i),e.length>0){const t=`Workbox is precaching URLs without revision info: ${e.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}install(t){return M(t,(async()=>{const e=new I;this.strategy.plugins.push(e);for(const[e,s]of this.G){const n=this.V.get(s),i=this.J.get(e),r=new Request(e,{integrity:n,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:t}))}const{updatedURLs:s,notUpdatedURLs:n}=e;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(t){return M(t,(async()=>{const t=await self.caches.open(this.strategy.cacheName),e=await t.keys(),s=new Set(this.G.values()),n=[];for(const i of e)s.has(i.url)||(await t.delete(i),n.push(i.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.G}getCachedURLs(){return[...this.G.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this.G.get(e.href)}async matchPrecache(t){const e=t instanceof Request?t.url:t,s=this.getCacheKeyForURL(e);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(t){const e=this.getCacheKeyForURL(t);if(!e)throw new K("non-precached-url",{url:t});return s=>(s.request=new Request(t),s.params=N({cacheKey:e},s.params),this.strategy.handle(s))}}let Q;const V=()=>(Q||(Q=new J),Q);class z extends n{constructor(t,e){super((({request:s})=>{const n=t.getURLsToCacheKeys();for(const t of function*(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const r=new URL(t,location.href);r.hash="",yield r.href;const a=function(t,e=[]){for(const s of[...t.searchParams.keys()])e.some((t=>t.test(s)))&&t.searchParams.delete(s);return t}(r,e);if(yield a.href,s&&a.pathname.endsWith("/")){const t=new URL(a.href);t.pathname+=s,yield t.href}if(n){const t=new URL(a.href);t.pathname+=".html",yield t.href}if(i){const t=i({url:r});for(const e of t)yield e.href}}(s.url,e)){const e=n.get(t);if(e)return{cacheKey:e}}}),t.strategy)}}var X;self.addEventListener("message",(t=>{t.data&&"SKIP_WAITING"===t.data.type&&self.skipWaiting()})),X={},function(t){V().precache(t)}([{url:"favicon.ico",revision:"9fd07861b525cd43e21979cfcb056a0c"},{url:"index.html",revision:"6e90ea7daa8dab99b72797ebef64757e"},{url:"style.css",revision:"42aac98f41ad1b32267853a68234ca33"},{url:"web_modules/import-map.json",revision:"39b651f22e2234df3c07483b72187234"},{url:"dist/base-canvas-renderer.js",revision:"091e0e1a72b25af578c5d6c529c663d1"},{url:"dist/base-canvas.js",revision:"ff3006c980e04515b5065f80fc048321"},{url:"dist/hid-usi.js",revision:"ad6b500654dd621a01897253aeb8c52e"},{url:"dist/info-panel.js",revision:"61e811400c88495c0c7126a39a7fb3f0"},{url:"dist/js-canvas-renderer.js",revision:"f470da61fd7070ea6e511b84f871b08d"},{url:"dist/js-canvas.js",revision:"73fa1a4a8e560cb389a061eacf77c0eb"},{url:"dist/main-application.js",revision:"e348e5d08ebc9cd8583c747a216f38b4"},{url:"dist/pathkit-canvas-renderer.js",revision:"ce62b12cd184f0d3d807a33327f7bec1"},{url:"dist/pathkit-canvas.js",revision:"17f09d0377eef3994e53c151dc0ff7a4"},{url:"dist/toolbar.js",revision:"d988236dbf45c5b1c42f97a357eb816b"},{url:"dist/usi-dialog.js",revision:"f1c7de86d53727008c84ad072f75347b"}]),function(t){const e=V();o(new z(e,t))}(X),o(/\.(?:png|jpg|jpeg|svg|webp)$/,new class extends D{async W(t,e){let s,n=await e.cacheMatch(t);if(!n)try{n=await e.fetchAndCachePut(t)}catch(t){s=t}if(!n)throw new q("no-response",{url:t.url,error:s});return n}}({cacheName:"images",plugins:[new class{constructor(t={}){var e;this.cachedResponseWillBeUsed=async({event:t,request:e,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.Y(n),r=this.Z(s);w(r.expireEntries());const a=r.updateTimestamp(e.url);if(t)try{t.waitUntil(a)}catch(t){}return i?n:null},this.cacheDidUpdate=async({cacheName:t,request:e})=>{const s=this.Z(t);await s.updateTimestamp(e.url),await s.expireEntries()},this.tt=t,this.N=t.maxAgeSeconds,this.et=new Map,t.purgeOnQuotaError&&(e=()=>this.deleteCacheAndMetadata(),p.add(e))}Z(t){if(t===d())throw new u("expire-custom-caches-only");let e=this.et.get(t);return e||(e=new b(t,this.tt),this.et.set(t,e)),e}Y(t){if(!this.N)return!0;const e=this.st(t);if(null===e)return!0;return e>=Date.now()-1e3*this.N}st(t){if(!t.headers.has("date"))return null;const e=t.headers.get("date"),s=new Date(e).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[t,e]of this.et)await self.caches.delete(t),await e.delete();this.et=new Map}}({maxEntries:15,purgeOnQuotaError:!0})]}),"GET");
//# sourceMappingURL=sw.js.map
