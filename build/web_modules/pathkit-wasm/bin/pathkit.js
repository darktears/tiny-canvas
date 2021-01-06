var __filename = '/home/jimmy/projects/usi/tiny-canvas/node_modules/pathkit-wasm/bin';

var __dirname = '/home/jimmy/projects/usi/tiny-canvas/node_modules/pathkit-wasm/bin';

/* SNOWPACK PROCESS POLYFILL (based on https://github.com/calvinmetcalf/node-process-es6) */
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
var globalContext;
if (typeof window !== 'undefined') {
    globalContext = window;
} else if (typeof self !== 'undefined') {
    globalContext = self;
} else {
    globalContext = {};
}
if (typeof globalContext.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof globalContext.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = globalContext.performance || {};
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var process = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: {"NODE_ENV":"production"},
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
function resolve() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : '/';

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
}
// path.normalize(path)
// posix version
function normalize(path) {
  var isPathAbsolute = isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isPathAbsolute).join('/');

  if (!path && !isPathAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isPathAbsolute ? '/' : '') + path;
}
// posix version
function isAbsolute(path) {
  return path.charAt(0) === '/';
}

// posix version
function join() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
}


// path.relative(from, to)
// posix version
function relative(from, to) {
  from = resolve(from).substr(1);
  to = resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
}

var sep = '/';
var delimiter = ':';

function dirname(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
}

function basename(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
}


function extname(path) {
  return splitPath(path)[3];
}
var path = {
  extname: extname,
  basename: basename,
  dirname: dirname,
  sep: sep,
  delimiter: delimiter,
  relative: relative,
  join: join,
  isAbsolute: isAbsolute,
  normalize: normalize,
  resolve: resolve
};
function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b' ?
    function (str, start, len) { return str.substr(start, len) } :
    function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

var path$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  resolve: resolve,
  normalize: normalize,
  isAbsolute: isAbsolute,
  join: join,
  relative: relative,
  sep: sep,
  delimiter: delimiter,
  dirname: dirname,
  basename: basename,
  extname: extname,
  'default': path
});

var require$$1 = {};

var pathkit = createCommonjsModule(function (module, exports) {
var PathKitInit = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  _scriptDir = _scriptDir || __filename;
  return (
function(PathKitInit) {
  PathKitInit = PathKitInit || {};
var d;d||(d=typeof PathKitInit !== 'undefined' ? PathKitInit : {});var aa;d.ready=new Promise(function(a){aa=a;});
(function(a){var b={};a.loadCmdsTypedArray=function(h){for(var k=0,l=0;l<h.length;l++)k+=h[l].length;if(b[k])var n=b[k];else n=new Float32Array(k),b[k]=n;var p=0;for(l=0;l<h.length;l++)for(var q=0;q<h[l].length;q++){var t=h[l][q];"string"===typeof t&&(t=a.SkBits2FloatUnsigned(parseInt(t)));n[p]=t;p++;}h=a._malloc(n.length*n.BYTES_PER_ELEMENT);a.HEAPF32.set(n,h/n.BYTES_PER_ELEMENT);return [h,k]};a.FromCmds=function(h){h=a.loadCmdsTypedArray(h);var k=a._FromCmds(h[0],h[1]);a._free(h[0]);return k};var c,
e,f,g,m;a.cubicYFromX=function(h,k,l,n,p){c&&e===h&&f===k&&g===l&&m===n||(c&&c.delete(),c=new a._SkCubicMap([h,k],[l,n]),e=h,f=k,g=l,m=n);return c.computeYFromX(p)};a.cubicPtFromT=function(h,k,l,n,p){c&&e===h&&f===k&&g===l&&m===n||(c&&c.delete(),c=new a._SkCubicMap([h,k],[l,n]),e=h,f=k,g=l,m=n);return c.computePtFromT(p)};})(d);
(function(a){a.onRuntimeInitialized=function(){a.SkPath.prototype.addPath=function(){var b=arguments[0];if(1===arguments.length)this._addPath(b,1,0,0,0,1,0,0,0,1);else if(2===arguments.length){var c=arguments[1];this._addPath(b,c.a,c.c,c.e,c.b,c.d,c.f,0,0,1);}else if(7===arguments.length)c=arguments,this._addPath(b,c[1],c[3],c[5],c[2],c[4],c[6],0,0,1);else if(10===arguments.length)c=arguments,this._addPath(b,c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9]);else return console.Fb("addPath expected to take 1, 2, 7, or 10 args. Got "+
arguments.length),null;return this};a.SkPath.prototype.arc=function(b,c,e,f,g,m){this._arc(b,c,e,f,g,!!m);return this};a.SkPath.prototype.arcTo=function(b,c,e,f,g){this._arcTo(b,c,e,f,g);return this};a.SkPath.prototype.bezierCurveTo=function(b,c,e,f,g,m){this._cubicTo(b,c,e,f,g,m);return this};a.SkPath.prototype.close=function(){this._close();return this};a.SkPath.prototype.closePath=function(){this._close();return this};a.SkPath.prototype.conicTo=function(b,c,e,f,g){this._conicTo(b,c,e,f,g);return this};
a.SkPath.prototype.cubicTo=function(b,c,e,f,g,m){this._cubicTo(b,c,e,f,g,m);return this};a.SkPath.prototype.dash=function(b,c,e){return this._dash(b,c,e)?this:null};a.SkPath.prototype.ellipse=function(b,c,e,f,g,m,h,k){this._ellipse(b,c,e,f,g,m,h,!!k);return this};a.SkPath.prototype.lineTo=function(b,c){this._lineTo(b,c);return this};a.SkPath.prototype.moveTo=function(b,c){this._moveTo(b,c);return this};a.SkPath.prototype.op=function(b,c){return this._op(b,c)?this:null};a.SkPath.prototype.quadraticCurveTo=
function(b,c,e,f){this._quadTo(b,c,e,f);return this};a.SkPath.prototype.quadTo=function(b,c,e,f){this._quadTo(b,c,e,f);return this};a.SkPath.prototype.rect=function(b,c,e,f){this._rect(b,c,e,f);return this};a.SkPath.prototype.simplify=function(){return this._simplify()?this:null};a.SkPath.prototype.stroke=function(b){b=b||{};b.width=b.width||1;b.miter_limit=b.miter_limit||4;b.cap=b.cap||a.StrokeCap.BUTT;b.join=b.join||a.StrokeJoin.MITER;return this._stroke(b)?this:null};a.SkPath.prototype.transform=
function(){if(1===arguments.length)this._transform(arguments[0]);else if(9===arguments.length){var b=arguments;this._transform(b[0],b[1],b[2],b[3],b[4],b[5],b[6],b[7],b[8]);}else return console.Fb("transform expected to take 1 or 9 arguments. Got "+arguments.length),null;return this};a.SkPath.prototype.trim=function(b,c,e){return this._trim(b,c,!!e)?this:null};};})(d);var r={},v;for(v in d)d.hasOwnProperty(v)&&(r[v]=d[v]);var ba=!1,w=!1,ca=!1,da=!1;ba="object"===typeof window;w="function"===typeof importScripts;
ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!w;var x="",ea,fa,ha,ia;
if(ca)x=w?path$1.dirname(x)+"/":__dirname+"/",ea=function(a,b){ha||(ha=require$$1);ia||(ia=path$1);a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},fa=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",y),d.inspect=function(){return "[Emscripten Module object]"};else if(da)"undefined"!=
typeof read&&(ea=function(a){return read(a)}),fa=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||w)w?x=self.location.href:document.currentScript&&(x=document.currentScript.src),_scriptDir&&(x=_scriptDir),0!==x.indexOf("blob:")?x=x.substr(0,
x.lastIndexOf("/")+1):x="",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},w&&(fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var ja=d.print||console.log.bind(console),z=d.printErr||console.warn.bind(console);for(v in r)r.hasOwnProperty(v)&&(d[v]=r[v]);r=null;var ka;d.wasmBinary&&(ka=d.wasmBinary);var noExitRuntime;d.noExitRuntime&&(noExitRuntime=d.noExitRuntime);
"object"!==typeof WebAssembly&&z("no native wasm support detected");var la,ma=new WebAssembly.Table({initial:309,maximum:309,element:"anyfunc"}),na=!1;function assert(a,b){a||y("Assertion failed: "+b);}var oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function pa(a,b,c){var e=b+c;for(c=b;a[c]&&!(c>=e);)++c;if(16<c-b&&a.subarray&&oa)return oa.decode(a.subarray(b,c));for(e="";b<c;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))e+=String.fromCharCode((f&31)<<6|g);else {var m=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|m:(f&7)<<18|g<<12|m<<6|a[b++]&63;65536>f?e+=String.fromCharCode(f):(f-=65536,e+=String.fromCharCode(55296|f>>10,56320|f&1023));}}else e+=String.fromCharCode(f);}return e}
function qa(a,b,c){var e=B;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var m=a.charCodeAt(++f);g=65536+((g&1023)<<10)|m&1023;}if(127>=g){if(b>=c)break;e[b++]=g;}else {if(2047>=g){if(b+1>=c)break;e[b++]=192|g>>6;}else {if(65535>=g){if(b+2>=c)break;e[b++]=224|g>>12;}else {if(b+3>=c)break;e[b++]=240|g>>18;e[b++]=128|g>>12&63;}e[b++]=128|g>>6&63;}e[b++]=128|g&63;}}e[b]=0;}}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;
function sa(a,b){var c=a>>1;for(var e=c+b/2;!(c>=e)&&ta[c];)++c;c<<=1;if(32<c-a&&ra)return ra.decode(B.subarray(a,c));c=0;for(e="";;){var f=D[a+2*c>>1];if(0==f||c==b/2)return e;++c;e+=String.fromCharCode(f);}}function ua(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var e=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)D[b>>1]=a.charCodeAt(f),b+=2;D[b>>1]=0;return b-e}function va(a){return 2*a.length}
function wa(a,b){for(var c=0,e="";!(c>=b/4);){var f=E[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,e+=String.fromCharCode(55296|f>>10,56320|f&1023)):e+=String.fromCharCode(f);}return e}function xa(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var e=b;c=e+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var m=a.charCodeAt(++f);g=65536+((g&1023)<<10)|m&1023;}E[b>>2]=g;b+=4;if(b+4>c)break}E[b>>2]=0;return b-e}
function ya(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&++c;b+=4;}return b}var za,Aa,B,D,ta,E,F,Ba,Ca,Da=d.INITIAL_MEMORY||16777216;d.wasmMemory?la=d.wasmMemory:la=new WebAssembly.Memory({initial:Da/65536,maximum:Da/65536});la&&(za=la.buffer);Da=za.byteLength;var G=za;za=G;d.HEAP8=Aa=new Int8Array(G);d.HEAP16=D=new Int16Array(G);d.HEAP32=E=new Int32Array(G);d.HEAPU8=B=new Uint8Array(G);d.HEAPU16=ta=new Uint16Array(G);d.HEAPU32=F=new Uint32Array(G);d.HEAPF32=Ba=new Float32Array(G);
d.HEAPF64=Ca=new Float64Array(G);E[3E3]=5255040;function Ea(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(d);else {var c=b.Jb;"number"===typeof c?void 0===b.tb?d.dynCall_v(c):d.dynCall_vi(c,b.tb):c(void 0===b.tb?null:b.tb);}}}var Fa=[],Ga=[],Ha=[],Ia=[];function Ja(){var a=d.preRun.shift();Fa.unshift(a);}var H=0,La=null;d.preloadedImages={};d.preloadedAudios={};
function y(a){if(d.onAbort)d.onAbort(a);ja(a);z(a);na=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ma(a){var b=I;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Na(){return Ma("data:application/octet-stream;base64,")}var I="pathkit.wasm";if(!Na()){var Oa=I;I=d.locateFile?d.locateFile(Oa,x):x+Oa;}
function Pa(){try{if(ka)return new Uint8Array(ka);if(fa)return fa(I);throw "both async and sync fetching of the wasm failed";}catch(a){y(a);}}function Qa(){return ka||!ba&&!w||"function"!==typeof fetch||Ma("file://")?new Promise(function(a){a(Pa());}):fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw "failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Pa()})}Ga.push({Jb:function(){Ra();}});var Sa={};
function Ta(a){for(;a.length;){var b=a.pop();a.pop()(b);}}function J(a){return this.fromWireType(F[a>>2])}var K={},L={},Ua={};function Va(a){if(void 0===a)return "_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Wa(a,b){a=Va(a);return (new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Xa(a){var b=Error,c=Wa(a,function(e){this.name=a;this.message=e;e=Error(e).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""));});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Ya=void 0;function Za(a){throw new Ya(a);}
function N(a,b,c){function e(h){h=c(h);h.length!==a.length&&Za("Mismatched type converter count");for(var k=0;k<a.length;++k)O(a[k],h[k]);}a.forEach(function(h){Ua[h]=b;});var f=Array(b.length),g=[],m=0;b.forEach(function(h,k){L.hasOwnProperty(h)?f[k]=L[h]:(g.push(h),K.hasOwnProperty(h)||(K[h]=[]),K[h].push(function(){f[k]=L[h];++m;m===g.length&&e(f);}));});0===g.length&&e(f);}var $a={};
function ab(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var bb=void 0;function P(a){for(var b="";B[a];)b+=bb[B[a++]];return b}var Q=void 0;function R(a){throw new Q(a);}
function O(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=b.name;a||R('type "'+e+'" must have a positive integer typeid pointer');if(L.hasOwnProperty(a)){if(c.Mb)return;R("Cannot register type '"+e+"' twice");}L[a]=b;delete Ua[a];K.hasOwnProperty(a)&&(b=K[a],delete K[a],b.forEach(function(f){f();}));}function cb(a){return {count:a.count,lb:a.lb,nb:a.nb,bb:a.bb,cb:a.cb,gb:a.gb,ib:a.ib}}
function db(a){R(a.$a.cb.ab.name+" instance already deleted");}var eb=!1;function fb(){}function gb(a){--a.count.value;0===a.count.value&&(a.gb?a.ib.hb(a.gb):a.cb.ab.hb(a.bb));}
function hb(a){if("undefined"===typeof FinalizationGroup)return hb=function(b){return b},a;eb=new FinalizationGroup(function(b){for(var c=b.next();!c.done;c=b.next())c=c.value,c.bb?gb(c):console.warn("object already deleted: "+c.bb);});hb=function(b){eb.register(b,b.$a,b.$a);return b};fb=function(b){eb.unregister(b.$a);};return hb(a)}var ib=void 0,jb=[];function kb(){for(;jb.length;){var a=jb.pop();a.$a.lb=!1;a["delete"]();}}function S(){}var lb={};
function mb(a,b,c){if(void 0===a[b].eb){var e=a[b];a[b]=function(){a[b].eb.hasOwnProperty(arguments.length)||R("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].eb+")!");return a[b].eb[arguments.length].apply(this,arguments)};a[b].eb=[];a[b].eb[e.qb]=e;}}
function nb(a,b,c){d.hasOwnProperty(a)?((void 0===c||void 0!==d[a].eb&&void 0!==d[a].eb[c])&&R("Cannot register public name '"+a+"' twice"),mb(d,a,a),d.hasOwnProperty(c)&&R("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),d[a].eb[c]=b):(d[a]=b,void 0!==c&&(d[a].Sb=c));}function ob(a,b,c,e,f,g,m,h){this.name=a;this.constructor=b;this.mb=c;this.hb=e;this.jb=f;this.Kb=g;this.pb=m;this.Hb=h;this.Pb=[];}
function pb(a,b,c){for(;b!==c;)b.pb||R("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.pb(a),b=b.jb;return a}function qb(a,b){if(null===b)return this.xb&&R("null is not a valid "+this.name),0;b.$a||R('Cannot pass "'+U(b)+'" as a '+this.name);b.$a.bb||R("Cannot pass deleted object as a pointer of type "+this.name);return pb(b.$a.bb,b.$a.cb.ab,this.ab)}
function rb(a,b){if(null===b){this.xb&&R("null is not a valid "+this.name);if(this.sb){var c=this.ob();null!==a&&a.push(this.hb,c);return c}return 0}b.$a||R('Cannot pass "'+U(b)+'" as a '+this.name);b.$a.bb||R("Cannot pass deleted object as a pointer of type "+this.name);!this.rb&&b.$a.cb.rb&&R("Cannot convert argument of type "+(b.$a.ib?b.$a.ib.name:b.$a.cb.name)+" to parameter type "+this.name);c=pb(b.$a.bb,b.$a.cb.ab,this.ab);if(this.sb)switch(void 0===b.$a.gb&&R("Passing raw pointer to smart pointer is illegal"),
this.Rb){case 0:b.$a.ib===this?c=b.$a.gb:R("Cannot convert argument of type "+(b.$a.ib?b.$a.ib.name:b.$a.cb.name)+" to parameter type "+this.name);break;case 1:c=b.$a.gb;break;case 2:if(b.$a.ib===this)c=b.$a.gb;else {var e=b.clone();c=this.Qb(c,V(function(){e["delete"]();}));null!==a&&a.push(this.hb,c);}break;default:R("Unsupporting sharing policy");}return c}
function sb(a,b){if(null===b)return this.xb&&R("null is not a valid "+this.name),0;b.$a||R('Cannot pass "'+U(b)+'" as a '+this.name);b.$a.bb||R("Cannot pass deleted object as a pointer of type "+this.name);b.$a.cb.rb&&R("Cannot convert argument of type "+b.$a.cb.name+" to parameter type "+this.name);return pb(b.$a.bb,b.$a.cb.ab,this.ab)}function tb(a,b,c){if(b===c)return a;if(void 0===c.jb)return null;a=tb(a,b,c.jb);return null===a?null:c.Hb(a)}var ub={};
function vb(a,b){for(void 0===b&&R("ptr should not be undefined");a.jb;)b=a.pb(b),a=a.jb;return ub[b]}function wb(a,b){b.cb&&b.bb||Za("makeClassHandle requires ptr and ptrType");!!b.ib!==!!b.gb&&Za("Both smartPtrType and smartPtr must be specified");b.count={value:1};return hb(Object.create(a,{$a:{value:b}}))}
function W(a,b,c,e){this.name=a;this.ab=b;this.xb=c;this.rb=e;this.sb=!1;this.hb=this.Qb=this.ob=this.Eb=this.Rb=this.Ob=void 0;void 0!==b.jb?this.toWireType=rb:(this.toWireType=e?qb:sb,this.fb=null);}function xb(a,b,c){d.hasOwnProperty(a)||Za("Replacing nonexistant public symbol");void 0!==d[a].eb&&void 0!==c?d[a].eb[c]=b:(d[a]=b,d[a].qb=c);}
function X(a,b){a=P(a);var c=d["dynCall_"+a];for(var e=[],f=1;f<a.length;++f)e.push("a"+f);f="return function dynCall_"+(a+"_"+b)+"("+e.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(e.length?", ":"")+e.join(", ")+");\n";c=(new Function("dynCall","rawFunction",f+"};\n"))(c,b);"function"!==typeof c&&R("unknown function pointer with signature "+a+": "+b);return c}var yb=void 0;function zb(a){a=Ab(a);var b=P(a);Y(a);return b}
function Db(a,b){function c(g){f[g]||L[g]||(Ua[g]?Ua[g].forEach(c):(e.push(g),f[g]=!0));}var e=[],f={};b.forEach(c);throw new yb(a+": "+e.map(zb).join([", "]));}function Eb(a,b){for(var c=[],e=0;e<a;e++)c.push(E[(b>>2)+e]);return c}
function Fb(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Wa(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function Gb(a,b,c,e,f){var g=b.length;2>g&&R("argTypes array size mismatch! Must at least get return value and 'this' types!");var m=null!==b[1]&&null!==c,h=!1;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].fb){h=!0;break}var k="void"!==b[0].name,l="",n="";for(c=0;c<g-2;++c)l+=(0!==c?", ":"")+"arg"+c,n+=(0!==c?", ":"")+"arg"+c+"Wired";a="return function "+Va(a)+"("+l+") {\nif (arguments.length !== "+(g-2)+") {\nthrowBindingError('function "+a+" called with ' + arguments.length + ' arguments, expected "+
(g-2)+" args!');\n}\n";h&&(a+="var destructors = [];\n");var p=h?"destructors":"null";l="throwBindingError invoker fn runDestructors retType classParam".split(" ");e=[R,e,f,Ta,b[0],b[1]];m&&(a+="var thisWired = classParam.toWireType("+p+", this);\n");for(c=0;c<g-2;++c)a+="var arg"+c+"Wired = argType"+c+".toWireType("+p+", arg"+c+"); // "+b[c+2].name+"\n",l.push("argType"+c),e.push(b[c+2]);m&&(n="thisWired"+(0<n.length?", ":"")+n);a+=(k?"var rv = ":"")+"invoker(fn"+(0<n.length?", ":"")+n+");\n";if(h)a+=
"runDestructors(destructors);\n";else for(c=m?1:2;c<b.length;++c)g=1===c?"thisWired":"arg"+(c-2)+"Wired",null!==b[c].fb&&(a+=g+"_dtor("+g+"); // "+b[c].name+"\n",l.push(g+"_dtor"),e.push(b[c].fb));k&&(a+="var ret = retType.fromWireType(rv);\nreturn ret;\n");l.push(a+"}\n");return Fb(l).apply(null,e)}var Hb=[],Z=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Ib(a){4<a&&0===--Z[a].yb&&(Z[a]=void 0,Hb.push(a));}
function V(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Hb.length?Hb.pop():Z.length;Z[b]={yb:1,value:a};return b}}function Jb(a,b,c){switch(b){case 0:return function(e){return this.fromWireType((c?Aa:B)[e])};case 1:return function(e){return this.fromWireType((c?D:ta)[e>>1])};case 2:return function(e){return this.fromWireType((c?E:F)[e>>2])};default:throw new TypeError("Unknown integer type: "+a);}}
function Kb(a,b){var c=L[a];void 0===c&&R(b+" has unknown type "+zb(a));return c}function U(a){if(null===a)return "null";var b=typeof a;return "object"===b||"array"===b||"function"===b?a.toString():""+a}function Lb(a,b){switch(b){case 2:return function(c){return this.fromWireType(Ba[c>>2])};case 3:return function(c){return this.fromWireType(Ca[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function Mb(a,b,c){switch(b){case 0:return c?function(e){return Aa[e]}:function(e){return B[e]};case 1:return c?function(e){return D[e>>1]}:function(e){return ta[e>>1]};case 2:return c?function(e){return E[e>>2]}:function(e){return F[e>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var Nb={};function Ob(a){var b=Nb[a];return void 0===b?P(a):b}var Pb=[];function Qb(a){a||R("Cannot use deleted val. handle = "+a);return Z[a].value}
function Rb(){return "object"===typeof globalThis?globalThis:Function("return this")()}function Sb(a){var b=Pb.length;Pb.push(a);return b}function Tb(a,b){for(var c=Array(a),e=0;e<a;++e)c[e]=Kb(E[(b>>2)+e],"parameter "+e);return c}var Ub={},Vb=[null,[],[]];Ya=d.InternalError=Xa("InternalError");for(var Wb=Array(256),Xb=0;256>Xb;++Xb)Wb[Xb]=String.fromCharCode(Xb);bb=Wb;Q=d.BindingError=Xa("BindingError");
S.prototype.isAliasOf=function(a){if(!(this instanceof S&&a instanceof S))return !1;var b=this.$a.cb.ab,c=this.$a.bb,e=a.$a.cb.ab;for(a=a.$a.bb;b.jb;)c=b.pb(c),b=b.jb;for(;e.jb;)a=e.pb(a),e=e.jb;return b===e&&c===a};S.prototype.clone=function(){this.$a.bb||db(this);if(this.$a.nb)return this.$a.count.value+=1,this;var a=hb(Object.create(Object.getPrototypeOf(this),{$a:{value:cb(this.$a)}}));a.$a.count.value+=1;a.$a.lb=!1;return a};
S.prototype["delete"]=function(){this.$a.bb||db(this);this.$a.lb&&!this.$a.nb&&R("Object already scheduled for deletion");fb(this);gb(this.$a);this.$a.nb||(this.$a.gb=void 0,this.$a.bb=void 0);};S.prototype.isDeleted=function(){return !this.$a.bb};S.prototype.deleteLater=function(){this.$a.bb||db(this);this.$a.lb&&!this.$a.nb&&R("Object already scheduled for deletion");jb.push(this);1===jb.length&&ib&&ib(kb);this.$a.lb=!0;return this};W.prototype.Lb=function(a){this.Eb&&(a=this.Eb(a));return a};
W.prototype.Cb=function(a){this.hb&&this.hb(a);};W.prototype.argPackAdvance=8;W.prototype.readValueFromPointer=J;W.prototype.deleteObject=function(a){if(null!==a)a["delete"]();};
W.prototype.fromWireType=function(a){function b(){return this.sb?wb(this.ab.mb,{cb:this.Ob,bb:c,ib:this,gb:a}):wb(this.ab.mb,{cb:this,bb:a})}var c=this.Lb(a);if(!c)return this.Cb(a),null;var e=vb(this.ab,c);if(void 0!==e){if(0===e.$a.count.value)return e.$a.bb=c,e.$a.gb=a,e.clone();e=e.clone();this.Cb(a);return e}e=this.ab.Kb(c);e=lb[e];if(!e)return b.call(this);e=this.rb?e.Gb:e.pointerType;var f=tb(c,this.ab,e.ab);return null===f?b.call(this):this.sb?wb(e.ab.mb,{cb:e,bb:f,ib:this,gb:a}):wb(e.ab.mb,
{cb:e,bb:f})};d.getInheritedInstanceCount=function(){return Object.keys(ub).length};d.getLiveInheritedInstances=function(){var a=[],b;for(b in ub)ub.hasOwnProperty(b)&&a.push(ub[b]);return a};d.flushPendingDeletes=kb;d.setDelayFunction=function(a){ib=a;jb.length&&ib&&ib(kb);};yb=d.UnboundTypeError=Xa("UnboundTypeError");d.count_emval_handles=function(){for(var a=0,b=5;b<Z.length;++b)void 0!==Z[b]&&++a;return a};d.get_first_emval=function(){for(var a=5;a<Z.length;++a)if(void 0!==Z[a])return Z[a];return null};
var Zb={s:function(a){var b=Sa[a];delete Sa[a];var c=b.elements,e=c.length,f=c.map(function(h){return h.wb}).concat(c.map(function(h){return h.Ab})),g=b.ob,m=b.hb;N([a],f,function(h){c.forEach(function(k,l){var n=h[l],p=k.ub,q=k.vb,t=h[l+e],u=k.zb,M=k.Bb;k.read=function(A){return n.fromWireType(p(q,A))};k.write=function(A,T){var C=[];u(M,A,t.toWireType(C,T));Ta(C);};});return [{name:b.name,fromWireType:function(k){for(var l=Array(e),n=0;n<e;++n)l[n]=c[n].read(k);m(k);return l},toWireType:function(k,
l){if(e!==l.length)throw new TypeError("Incorrect number of tuple elements for "+b.name+": expected="+e+", actual="+l.length);for(var n=g(),p=0;p<e;++p)c[p].write(n,l[p]);null!==k&&k.push(m,n);return n},argPackAdvance:8,readValueFromPointer:J,fb:m}]});},v:function(a){var b=$a[a];delete $a[a];var c=b.ob,e=b.hb,f=b.Db,g=f.map(function(m){return m.wb}).concat(f.map(function(m){return m.Ab}));N([a],g,function(m){var h={};f.forEach(function(k,l){var n=m[l],p=k.ub,q=k.vb,t=m[l+f.length],u=k.zb,M=k.Bb;h[k.Ib]=
{read:function(A){return n.fromWireType(p(q,A))},write:function(A,T){var C=[];u(M,A,t.toWireType(C,T));Ta(C);}};});return [{name:b.name,fromWireType:function(k){var l={},n;for(n in h)l[n]=h[n].read(k);e(k);return l},toWireType:function(k,l){for(var n in h)if(!(n in l))throw new TypeError("Missing field");var p=c();for(n in h)h[n].write(p,l[n]);null!==k&&k.push(e,p);return p},argPackAdvance:8,readValueFromPointer:J,fb:e}]});},G:function(a,b,c,e,f){var g=ab(c);b=P(b);O(a,{name:b,fromWireType:function(m){return !!m},
toWireType:function(m,h){return h?e:f},argPackAdvance:8,readValueFromPointer:function(m){if(1===c)var h=Aa;else if(2===c)h=D;else if(4===c)h=E;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[m>>g])},fb:null});},k:function(a,b,c,e,f,g,m,h,k,l,n,p,q){n=P(n);g=X(f,g);h&&(h=X(m,h));l&&(l=X(k,l));q=X(p,q);var t=Va(n);nb(t,function(){Db("Cannot construct "+n+" due to unbound types",[e]);});N([a,b,c],e?[e]:[],function(u){u=u[0];if(e){var M=u.ab;var A=M.mb;}else A=S.prototype;
u=Wa(t,function(){if(Object.getPrototypeOf(this)!==T)throw new Q("Use 'new' to construct "+n);if(void 0===C.kb)throw new Q(n+" has no accessible constructor");var Bb=C.kb[arguments.length];if(void 0===Bb)throw new Q("Tried to invoke ctor of "+n+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(C.kb).toString()+") parameters instead!");return Bb.apply(this,arguments)});var T=Object.create(A,{constructor:{value:u}});u.prototype=T;var C=new ob(n,u,T,q,M,g,h,l);M=new W(n,
C,!0,!1);A=new W(n+"*",C,!1,!1);var Cb=new W(n+" const*",C,!1,!0);lb[a]={pointerType:A,Gb:Cb};xb(t,u);return [M,A,Cb]});},h:function(a,b,c,e,f,g){assert(0<b);var m=Eb(b,c);f=X(e,f);var h=[g],k=[];N([],[a],function(l){l=l[0];var n="constructor "+l.name;void 0===l.ab.kb&&(l.ab.kb=[]);if(void 0!==l.ab.kb[b-1])throw new Q("Cannot register multiple constructors with identical number of parameters ("+(b-1)+") for class '"+l.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");
l.ab.kb[b-1]=function(){Db("Cannot construct "+l.name+" due to unbound types",m);};N([],m,function(p){l.ab.kb[b-1]=function(){arguments.length!==b-1&&R(n+" called with "+arguments.length+" arguments, expected "+(b-1));k.length=0;h.length=b;for(var q=1;q<b;++q)h[q]=p[q].toWireType(k,arguments[q-1]);q=f.apply(null,h);Ta(k);return p[0].fromWireType(q)};return []});return []});},a:function(a,b,c,e,f,g,m,h){var k=Eb(c,e);b=P(b);g=X(f,g);N([],[a],function(l){function n(){Db("Cannot call "+p+" due to unbound types",
k);}l=l[0];var p=l.name+"."+b;h&&l.ab.Pb.push(b);var q=l.ab.mb,t=q[b];void 0===t||void 0===t.eb&&t.className!==l.name&&t.qb===c-2?(n.qb=c-2,n.className=l.name,q[b]=n):(mb(q,b,p),q[b].eb[c-2]=n);N([],k,function(u){u=Gb(p,u,l,g,m);void 0===q[b].eb?(u.qb=c-2,q[b]=u):q[b].eb[c-2]=u;return []});return []});},M:function(a,b,c){a=P(a);N([],[b],function(e){e=e[0];d[a]=e.fromWireType(c);return []});},E:function(a,b){b=P(b);O(a,{name:b,fromWireType:function(c){var e=Z[c].value;Ib(c);return e},toWireType:function(c,
e){return V(e)},argPackAdvance:8,readValueFromPointer:J,fb:null});},g:function(a,b,c,e){function f(){}c=ab(c);b=P(b);f.values={};O(a,{name:b,constructor:f,fromWireType:function(g){return this.constructor.values[g]},toWireType:function(g,m){return m.value},argPackAdvance:8,readValueFromPointer:Jb(b,c,e),fb:null});nb(b,f);},j:function(a,b,c){var e=Kb(a,"enum");b=P(b);a=e.constructor;e=Object.create(e.constructor.prototype,{value:{value:c},constructor:{value:Wa(e.name+"_"+b,function(){})}});a.values[c]=
e;a[b]=e;},p:function(a,b,c){c=ab(c);b=P(b);O(a,{name:b,fromWireType:function(e){return e},toWireType:function(e,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError('Cannot convert "'+U(f)+'" to '+this.name);return f},argPackAdvance:8,readValueFromPointer:Lb(b,c),fb:null});},f:function(a,b,c,e,f,g){var m=Eb(b,c);a=P(a);f=X(e,f);nb(a,function(){Db("Cannot call "+a+" due to unbound types",m);},b-1);N([],m,function(h){h=[h[0],null].concat(h.slice(1));xb(a,Gb(a,h,null,f,g),b-1);return []});},
e:function(a,b,c,e,f){function g(l){return l}b=P(b);-1===f&&(f=4294967295);var m=ab(c);if(0===e){var h=32-8*c;g=function(l){return l<<h>>>h};}var k=-1!=b.indexOf("unsigned");O(a,{name:b,fromWireType:g,toWireType:function(l,n){if("number"!==typeof n&&"boolean"!==typeof n)throw new TypeError('Cannot convert "'+U(n)+'" to '+this.name);if(n<e||n>f)throw new TypeError('Passing a number "'+U(n)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+e+", "+f+"]!");
return k?n>>>0:n|0},argPackAdvance:8,readValueFromPointer:Mb(b,m,0!==e),fb:null});},b:function(a,b,c){function e(g){g>>=2;return new f(za,F[g+1],F[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=P(c);O(a,{name:c,fromWireType:e,argPackAdvance:8,readValueFromPointer:e},{Mb:!0});},q:function(a,b){b=P(b);var c="std::string"===b;O(a,{name:b,fromWireType:function(e){var f=F[e>>2];if(c)for(var g=e+4,m=0;m<=f;++m){var h=e+4+m;if(0==B[h]||m==f){g=
g?pa(B,g,h-g):"";if(void 0===k)var k=g;else k+=String.fromCharCode(0),k+=g;g=h+1;}}else {k=Array(f);for(m=0;m<f;++m)k[m]=String.fromCharCode(B[e+4+m]);k=k.join("");}Y(e);return k},toWireType:function(e,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||R("Cannot pass non-string to std::string");var m=(c&&g?function(){for(var l=0,n=0;n<f.length;++n){var p=f.charCodeAt(n);55296<=p&&57343>=p&&(p=
65536+((p&1023)<<10)|f.charCodeAt(++n)&1023);127>=p?++l:l=2047>=p?l+2:65535>=p?l+3:l+4;}return l}:function(){return f.length})(),h=Yb(4+m+1);F[h>>2]=m;if(c&&g)qa(f,h+4,m+1);else if(g)for(g=0;g<m;++g){var k=f.charCodeAt(g);255<k&&(Y(h),R("String has UTF-16 code units that do not fit in 8 bits"));B[h+4+g]=k;}else for(g=0;g<m;++g)B[h+4+g]=f[g];null!==e&&e.push(Y,h);return h},argPackAdvance:8,readValueFromPointer:J,fb:function(e){Y(e);}});},l:function(a,b,c){c=P(c);if(2===b){var e=sa;var f=ua;var g=va;var m=
function(){return ta};var h=1;}else 4===b&&(e=wa,f=xa,g=ya,m=function(){return F},h=2);O(a,{name:c,fromWireType:function(k){for(var l=F[k>>2],n=m(),p,q=k+4,t=0;t<=l;++t){var u=k+4+t*b;if(0==n[u>>h]||t==l)q=e(q,u-q),void 0===p?p=q:(p+=String.fromCharCode(0),p+=q),q=u+b;}Y(k);return p},toWireType:function(k,l){"string"!==typeof l&&R("Cannot pass non-string to C++ string type "+c);var n=g(l),p=Yb(4+n+b);F[p>>2]=n>>h;f(l,p+4,n+b);null!==k&&k.push(Y,p);return p},argPackAdvance:8,readValueFromPointer:J,fb:function(k){Y(k);}});},
u:function(a,b,c,e,f,g){Sa[a]={name:P(b),ob:X(c,e),hb:X(f,g),elements:[]};},t:function(a,b,c,e,f,g,m,h,k){Sa[a].elements.push({wb:b,ub:X(c,e),vb:f,Ab:g,zb:X(m,h),Bb:k});},w:function(a,b,c,e,f,g){$a[a]={name:P(b),ob:X(c,e),hb:X(f,g),Db:[]};},i:function(a,b,c,e,f,g,m,h,k,l){$a[a].Db.push({Ib:P(b),wb:c,ub:X(e,f),vb:g,Ab:m,zb:X(h,k),Bb:l});},H:function(a,b){b=P(b);O(a,{Nb:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}});},d:function(a,b,c,e){a=Pb[a];b=Qb(b);c=Ob(c);a(b,c,null,
e);},N:Ib,z:function(a){if(0===a)return V(Rb());a=Ob(a);return V(Rb()[a])},c:function(a,b){b=Tb(a,b);for(var c=b[0],e=c.name+"_$"+b.slice(1).map(function(l){return l.name}).join("_")+"$",f=["retType"],g=[c],m="",h=0;h<a-1;++h)m+=(0!==h?", ":"")+"arg"+h,f.push("argType"+h),g.push(b[1+h]);e="return function "+Va("methodCaller_"+e)+"(handle, name, destructors, args) {\n";var k=0;for(h=0;h<a-1;++h)e+="    var arg"+h+" = argType"+h+".readValueFromPointer(args"+(k?"+"+k:"")+");\n",k+=b[h+1].argPackAdvance;
e+="    var rv = handle[name]("+m+");\n";for(h=0;h<a-1;++h)b[h+1].deleteObject&&(e+="    argType"+h+".deleteObject(arg"+h+");\n");c.Nb||(e+="    return retType.toWireType(destructors, rv);\n");f.push(e+"};\n");a=Fb(f).apply(null,g);return Sb(a)},n:function(a){4<a&&(Z[a].yb+=1);},x:function(a,b,c,e){a=Qb(a);var f=Ub[b];if(!f){f="";for(var g=0;g<b;++g)f+=(0!==g?", ":"")+"arg"+g;var m="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)m+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+
g+'], "parameter '+g+'");\nvar arg'+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";f=(new Function("requireRegisteredType","Module","__emval_register",m+("var obj = new constructor("+f+");\nreturn __emval_register(obj);\n}\n")))(Kb,d,V);Ub[b]=f;}return f(a,c,e)},O:function(){return V([])},F:function(a){return V(Ob(a))},L:function(a,b){a=Kb(a,"_emval_take_value");a=a.readValueFromPointer(b);return V(a)},m:function(){y();},B:function(a,b,c){B.copyWithin(a,b,
b+c);},C:function(){y("OOM");},D:function(){return 0},y:function(){},o:function(a,b,c,e){for(var f=0,g=0;g<c;g++){for(var m=E[b+8*g>>2],h=E[b+(8*g+4)>>2],k=0;k<h;k++){var l=B[m+k],n=Vb[a];0===l||10===l?((1===a?ja:z)(pa(n,0)),n.length=0):n.push(l);}f+=h;}E[e>>2]=f;return 0},memory:la,K:function(){},r:function(){},J:function(){},I:function(){},A:function(){},table:ma},$b=function(){function a(f){d.asm=f.exports;H--;d.monitorRunDependencies&&d.monitorRunDependencies(H);0==H&&(La&&(f=La,La=null,f()));}function b(f){a(f.instance);}function c(f){return Qa().then(function(g){return WebAssembly.instantiate(g,e)}).then(f,function(g){z("failed to asynchronously prepare wasm: "+g);y(g);})}var e={a:Zb};H++;d.monitorRunDependencies&&d.monitorRunDependencies(H);if(d.instantiateWasm)try{return d.instantiateWasm(e,a)}catch(f){return z("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(ka||"function"!==typeof WebAssembly.instantiateStreaming||Na()||Ma("file://")||
"function"!==typeof fetch)return c(b);fetch(I,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,e).then(b,function(g){z("wasm streaming compile failed: "+g);z("falling back to ArrayBuffer instantiation");c(b);})});})();return {}}();d.asm=$b;var Ra=d.___wasm_call_ctors=function(){return (Ra=d.___wasm_call_ctors=d.asm.P).apply(null,arguments)};d.__Z6ToCmdsRK6SkPath=function(){return (d.__Z6ToCmdsRK6SkPath=d.asm.Q).apply(null,arguments)};
d.__Z8FromCmdsmi=function(){return (d.__Z8FromCmdsmi=d.asm.R).apply(null,arguments)};d.__Z7NewPathv=function(){return (d.__Z7NewPathv=d.asm.S).apply(null,arguments)};d.__Z8CopyPathRK6SkPath=function(){return (d.__Z8CopyPathRK6SkPath=d.asm.T).apply(null,arguments)};d.__Z6EqualsRK6SkPathS1_=function(){return (d.__Z6EqualsRK6SkPathS1_=d.asm.U).apply(null,arguments)};d.__Z11ToSVGStringRK6SkPath=function(){return (d.__Z11ToSVGStringRK6SkPath=d.asm.V).apply(null,arguments)};
d.__Z13FromSVGStringNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE=function(){return (d.__Z13FromSVGStringNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE=d.asm.W).apply(null,arguments)};d.__Z13ApplySimplifyR6SkPath=function(){return (d.__Z13ApplySimplifyR6SkPath=d.asm.X).apply(null,arguments)};d.__Z11ApplyPathOpR6SkPathRKS_8SkPathOp=function(){return (d.__Z11ApplyPathOpR6SkPathRKS_8SkPathOp=d.asm.Y).apply(null,arguments)};
d.__Z10MakeFromOpRK6SkPathS1_8SkPathOp=function(){return (d.__Z10MakeFromOpRK6SkPathS1_8SkPathOp=d.asm.Z).apply(null,arguments)};d.__Z14ResolveBuilderR11SkOpBuilder=function(){return (d.__Z14ResolveBuilderR11SkOpBuilder=d.asm._).apply(null,arguments)};d.__Z8ToCanvasRK6SkPathN10emscripten3valE=function(){return (d.__Z8ToCanvasRK6SkPathN10emscripten3valE=d.asm.$).apply(null,arguments)};d.__Z8ToPath2DRK6SkPath=function(){return (d.__Z8ToPath2DRK6SkPath=d.asm.aa).apply(null,arguments)};
var Y=d._free=function(){return (Y=d._free=d.asm.ba).apply(null,arguments)},Yb=d._malloc=function(){return (Yb=d._malloc=d.asm.ca).apply(null,arguments)},Ab=d.___getTypeName=function(){return (Ab=d.___getTypeName=d.asm.da).apply(null,arguments)};d.___embind_register_native_and_builtin_types=function(){return (d.___embind_register_native_and_builtin_types=d.asm.ea).apply(null,arguments)};d.dynCall_vi=function(){return (d.dynCall_vi=d.asm.fa).apply(null,arguments)};
d.dynCall_iiiii=function(){return (d.dynCall_iiiii=d.asm.ga).apply(null,arguments)};d.dynCall_ii=function(){return (d.dynCall_ii=d.asm.ha).apply(null,arguments)};d.dynCall_i=function(){return (d.dynCall_i=d.asm.ia).apply(null,arguments)};d.dynCall_viifffffffff=function(){return (d.dynCall_viifffffffff=d.asm.ja).apply(null,arguments)};d.dynCall_vifffffi=function(){return (d.dynCall_vifffffi=d.asm.ka).apply(null,arguments)};d.dynCall_vifffff=function(){return (d.dynCall_vifffff=d.asm.la).apply(null,arguments)};
d.dynCall_viffffff=function(){return (d.dynCall_viffffff=d.asm.ma).apply(null,arguments)};d.dynCall_vifffffffi=function(){return (d.dynCall_vifffffffi=d.asm.na).apply(null,arguments)};d.dynCall_viff=function(){return (d.dynCall_viff=d.asm.oa).apply(null,arguments)};d.dynCall_viffff=function(){return (d.dynCall_viffff=d.asm.pa).apply(null,arguments)};d.dynCall_vii=function(){return (d.dynCall_vii=d.asm.qa).apply(null,arguments)};d.dynCall_iii=function(){return (d.dynCall_iii=d.asm.ra).apply(null,arguments)};
d.dynCall_iifff=function(){return (d.dynCall_iifff=d.asm.sa).apply(null,arguments)};d.dynCall_iiffi=function(){return (d.dynCall_iiffi=d.asm.ta).apply(null,arguments)};d.dynCall_vifffffffff=function(){return (d.dynCall_vifffffffff=d.asm.ua).apply(null,arguments)};d.dynCall_iiii=function(){return (d.dynCall_iiii=d.asm.va).apply(null,arguments)};d.dynCall_viii=function(){return (d.dynCall_viii=d.asm.wa).apply(null,arguments)};d.dynCall_viiii=function(){return (d.dynCall_viiii=d.asm.xa).apply(null,arguments)};
d.dynCall_fif=function(){return (d.dynCall_fif=d.asm.ya).apply(null,arguments)};d.dynCall_viif=function(){return (d.dynCall_viif=d.asm.za).apply(null,arguments)};d.dynCall_fi=function(){return (d.dynCall_fi=d.asm.Aa).apply(null,arguments)};d.dynCall_viiifffffffff=function(){return (d.dynCall_viiifffffffff=d.asm.Ba).apply(null,arguments)};d.dynCall_viifffffi=function(){return (d.dynCall_viifffffi=d.asm.Ca).apply(null,arguments)};
d.dynCall_viifffff=function(){return (d.dynCall_viifffff=d.asm.Da).apply(null,arguments)};d.dynCall_viiffffff=function(){return (d.dynCall_viiffffff=d.asm.Ea).apply(null,arguments)};d.dynCall_viifffffffi=function(){return (d.dynCall_viifffffffi=d.asm.Fa).apply(null,arguments)};d.dynCall_viiff=function(){return (d.dynCall_viiff=d.asm.Ga).apply(null,arguments)};d.dynCall_viiffff=function(){return (d.dynCall_viiffff=d.asm.Ha).apply(null,arguments)};
d.dynCall_iiifff=function(){return (d.dynCall_iiifff=d.asm.Ia).apply(null,arguments)};d.dynCall_iiiffi=function(){return (d.dynCall_iiiffi=d.asm.Ja).apply(null,arguments)};d.dynCall_fii=function(){return (d.dynCall_fii=d.asm.Ka).apply(null,arguments)};d.dynCall_iiffff=function(){return (d.dynCall_iiffff=d.asm.La).apply(null,arguments)};d.dynCall_fiif=function(){return (d.dynCall_fiif=d.asm.Ma).apply(null,arguments)};d.dynCall_iiif=function(){return (d.dynCall_iiif=d.asm.Na).apply(null,arguments)};
d.dynCall_vifii=function(){return (d.dynCall_vifii=d.asm.Oa).apply(null,arguments)};d.dynCall_viifd=function(){return (d.dynCall_viifd=d.asm.Pa).apply(null,arguments)};d.dynCall_viid=function(){return (d.dynCall_viid=d.asm.Qa).apply(null,arguments)};d.dynCall_viddi=function(){return (d.dynCall_viddi=d.asm.Ra).apply(null,arguments)};d.dynCall_iidi=function(){return (d.dynCall_iidi=d.asm.Sa).apply(null,arguments)};d.dynCall_viffi=function(){return (d.dynCall_viffi=d.asm.Ta).apply(null,arguments)};
d.dynCall_fffff=function(){return (d.dynCall_fffff=d.asm.Ua).apply(null,arguments)};d.dynCall_viiiii=function(){return (d.dynCall_viiiii=d.asm.Va).apply(null,arguments)};d.dynCall_viiiiiffii=function(){return (d.dynCall_viiiiiffii=d.asm.Wa).apply(null,arguments)};d.dynCall_iiiiii=function(){return (d.dynCall_iiiiii=d.asm.Xa).apply(null,arguments)};d.dynCall_iiiiiii=function(){return (d.dynCall_iiiiiii=d.asm.Ya).apply(null,arguments)};
d.dynCall_iidiiii=function(){return (d.dynCall_iidiiii=d.asm.Za).apply(null,arguments)};d.dynCall_jiji=function(){return (d.dynCall_jiji=d.asm._a).apply(null,arguments)};d.asm=$b;var ac;La=function bc(){ac||cc();ac||(La=bc);};
function cc(){function a(){if(!ac&&(ac=!0,d.calledRun=!0,!na)){Ea(Ga);Ea(Ha);aa(d);if(d.onRuntimeInitialized)d.onRuntimeInitialized();if(d.postRun)for("function"==typeof d.postRun&&(d.postRun=[d.postRun]);d.postRun.length;){var b=d.postRun.shift();Ia.unshift(b);}Ea(Ia);}}if(!(0<H)){if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;)Ja();Ea(Fa);0<H||(d.setStatus?(d.setStatus("Running..."),setTimeout(function(){setTimeout(function(){d.setStatus("");},1);a();},1)):a());}}
d.run=cc;if(d.preInit)for("function"==typeof d.preInit&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();noExitRuntime=!0;cc();


  return PathKitInit.ready
}
);
})();
module.exports = PathKitInit;
});

export default pathkit;
