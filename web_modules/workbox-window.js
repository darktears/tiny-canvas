try{self["workbox:window:5.1.3"]&&_()}catch(e){}function e(e,t){return new Promise((function(r){var n=new MessageChannel;n.port1.onmessage=function(e){r(e.data)},e.postMessage(t,[n.port2])}))}try{self["workbox:core:5.1.3"]&&_()}catch(e){}var t=function(){var e=this;this.promise=new Promise((function(t,r){e.resolve=t,e.reject=r}))};function r(e,t){var r=location.href;return new URL(e,r).href===new URL(t,r).href}var n=function(e,t){this.type=e,Object.assign(this,t)};function i(e,t,r){return r?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function o(){}var a=function(o){var a,c;function u(e,a){var s,c;return void 0===a&&(a={}),(s=o.call(this)||this).t={},s.i=0,s.o=new t,s.u=new t,s.s=new t,s.v=0,s.h=new Set,s.l=function(){var e=s.g,t=e.installing;s.i>0||!r(t.scriptURL,s.m)||performance.now()>s.v+6e4?(s.P=t,e.removeEventListener("updatefound",s.l)):(s.p=t,s.h.add(t),s.o.resolve(t)),++s.i,t.addEventListener("statechange",s.k)},s.k=function(e){var t=s.g,r=e.target,i=r.state,o=r===s.P,a=o?"external":"",c={sw:r,originalEvent:e};!o&&s.j&&(c.isUpdate=!0),s.dispatchEvent(new n(a+i,c)),"installed"===i?s.O=self.setTimeout((function(){"installed"===i&&t.waiting===r&&s.dispatchEvent(new n(a+"waiting",c))}),200):"activating"===i&&(clearTimeout(s.O),o||s.u.resolve(r))},s.R=function(e){var t=s.p;t===navigator.serviceWorker.controller&&(s.dispatchEvent(new n("controlling",{sw:t,originalEvent:e,isUpdate:s.j})),s.s.resolve(t))},s.S=(c=function(e){var t=e.data,r=e.source;return i(s.getSW(),(function(){s.h.has(r)&&s.dispatchEvent(new n("message",{data:t,sw:r,originalEvent:e}))}))},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(c.apply(this,e))}catch(e){return Promise.reject(e)}}),s.m=e,s.t=a,navigator.serviceWorker.addEventListener("message",s.S),s}c=o,(a=u).prototype=Object.create(c.prototype),a.prototype.constructor=a,a.__proto__=c;var v,h=u.prototype;return h.register=function(e){var t=(void 0===e?{}:e).immediate,o=void 0!==t&&t;try{var a=this;return function(e,t){var r=e();return r&&r.then?r.then(t):t()}((function(){if(!o&&"complete"!==document.readyState)return s(new Promise((function(e){return window.addEventListener("load",e)})))}),(function(){return a.j=Boolean(navigator.serviceWorker.controller),a.U=a.B(),i(a.L(),(function(e){a.g=e,a.U&&(a.p=a.U,a.u.resolve(a.U),a.s.resolve(a.U),a.U.addEventListener("statechange",a.k,{once:!0}));var t=a.g.waiting;return t&&r(t.scriptURL,a.m)&&(a.p=t,Promise.resolve().then((function(){a.dispatchEvent(new n("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),a.p&&(a.o.resolve(a.p),a.h.add(a.p)),a.g.addEventListener("updatefound",a.l),navigator.serviceWorker.addEventListener("controllerchange",a.R,{once:!0}),a.g}))}))}catch(e){return Promise.reject(e)}},h.update=function(){try{return this.g?s(this.g.update()):void 0}catch(e){return Promise.reject(e)}},h.getSW=function(){try{return void 0!==this.p?this.p:this.o.promise}catch(e){return Promise.reject(e)}},h.messageSW=function(t){try{return i(this.getSW(),(function(r){return e(r,t)}))}catch(e){return Promise.reject(e)}},h.B=function(){var e=navigator.serviceWorker.controller;return e&&r(e.scriptURL,this.m)?e:void 0},h.L=function(){try{var e=this;return function(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}((function(){return i(navigator.serviceWorker.register(e.m,e.t),(function(t){return e.v=performance.now(),t}))}),(function(e){throw e}))}catch(e){return Promise.reject(e)}},(v=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(u.prototype,v),u}(function(){function e(){this.M=new Map}var t=e.prototype;return t.addEventListener=function(e,t){this._(e).add(t)},t.removeEventListener=function(e,t){this._(e).delete(t)},t.dispatchEvent=function(e){e.target=this;var t=this._(e.type),r=Array.isArray(t),n=0;for(t=r?t:t[Symbol.iterator]();;){var i;if(r){if(n>=t.length)break;i=t[n++]}else{if((n=t.next()).done)break;i=n.value}i(e)}},t._=function(e){return this.M.has(e)||this.M.set(e,new Set),this.M.get(e)},e}());function s(e,t){if(!t)return e&&e.then?e.then(o):Promise.resolve()}export{a as Workbox,e as messageSW};
//# sourceMappingURL=workbox-window.js.map
