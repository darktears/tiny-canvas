function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}import{LitElement as j,html as k,css as l}from"../web_modules/lit-element.js";import{Workbox as m,messageSW as n}from"../web_modules/workbox-window.js";import"../web_modules/@material/mwc-snackbar.js";import"./toolbar.js";export class MainApplication extends j{firstUpdated(){this._canvas=this.shadowRoot.querySelector("#canvas"),this._canvas&&this._canvas.getContext&&(this._context=this._canvas.getContext("2d"));if(!this._context){console.error("Your browser doesn't support canvas, this demo won't work");return}this._snackbar=this.shadowRoot.querySelector("#snackbar"),this._snackbar.addEventListener("MDCSnackbar:closed",b=>{b.detail.reason==="action"&&(this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&n(this._wbRegistration.waiting,{type:"SKIP_WAITING"}))}),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new m("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSnackbar()),this._wb.addEventListener("externalwaiting",()=>this._showSnackbar()),this._wbRegistration=await this._wb.register()}),this._canvas.onpointerdown=this._onPointerDown.bind(this),this._canvas.onpointermove=this._onPointerMove.bind(this),this._canvas.onpointerup=this._onPointerUp.bind(this);const a=window.getComputedStyle(this._canvas);this._canvas.width=parseInt(a.width,10),this._canvas.height=parseInt(a.height,10),this._offscreenCanvas=document.createElement("canvas"),this._offscreenCanvas.width=this._canvas.width,this._offscreenCanvas.height=this._canvas.height,this._offscreenCanvasContext=this._offscreenCanvas.getContext("2d",{desynchronized:!0}),this._context.lineCap=this._offscreenCanvasContext.lineCap="round",this._context.lineJoin=this._offscreenCanvasContext.lineJoin="round",this._context.shadowBlur=this._offscreenCanvasContext.shadowBlur=2,window.addEventListener("resize",this._onResize),console.log(window.navigator.usi)}constructor(){super();e(this,"_pointerDown",!1),e(this,"_pointerMoved",!1),e(this,"_currentColor","#000000"),e(this,"_points",[]),e(this,"_predicted_points",[]),e(this,"_onPointerDown",async a=>{this._pointerDown=!0,this._pointerId=a.pointerId,this._canvas.setPointerCapture(this._pointerId),a.preventDefault(),this._points.push(this._getRelativeCoordinates(a))}),e(this,"_onPointerMove",async a=>{if(a.clientY<0||a.clientX<0||a.clientX>window.innerWidth||a.clientY>window.innerHeight){this._pointerDown=!1;return}if(this._pointerDown){this._pointerMoved=!0,this._drawPredictedEvents&&this._context.clearRect(0,0,this._context.canvas.width,this._context.canvas.height);if(a.getCoalescedEvents)if(a.getCoalescedEvents().length>0)for(let b of a.getCoalescedEvents())this._points.push(this._getRelativeCoordinates(b));else this._points.push(this._getRelativeCoordinates(a));else this._points.push(this._getRelativeCoordinates(a));this._drawStroke(a,this._offscreenCanvasContext),this._context.clearRect(0,0,this._context.canvas.width,this._context.canvas.height),this._context.drawImage(this._offscreenCanvas,0,0),this._drawPredictedEvents&&a.getPredictedEvents&&(this._predicted_points=a.getPredictedEvents().slice(0,2),this._predicted_points.length>0&&this._strokePredictedEvents(a,this._context)),this._points=[],this._predicted_points=[],this._points.push(this._getRelativeCoordinates(a)),a.preventDefault()}}),e(this,"_onPointerUp",async a=>{this._drawPredictedEvents&&this._context.clearRect(0,0,this._context.canvas.width,this._context.canvas.height),this._pointerMoved?this._pointerMoved=!1:this._drawStroke(a,this._offscreenCanvasContext),this._pointerDown=!1,this._canvas.releasePointerCapture(this._pointerId),this._predicted_points=[],this._points=[],this._context.clearRect(0,0,this._context.canvas.width,this._context.canvas.height),this._context.drawImage(this._offscreenCanvas,0,0)}),e(this,"_onResize",async a=>{const b=window.getComputedStyle(this._canvas);this._canvas.width=this._offscreenCanvas.width=parseInt(b.width,10),this._canvas.height=this._offscreenCanvas.height=parseInt(b.height,10)}),this._drawWithPreferredColor=!1,this._drawWithPressure=!1,this._drawPredictedEvents=!1,this._highlightPredictedEvents=!1,this._currentLineWidth=8}_showSnackbar(){this._snackbar.show()}_getRelativeCoordinates(a){const b=this._canvas.getBoundingClientRect();return{x:a.clientX-b.left,y:a.clientY-b.top,pressure:a.pressure}}_drawStroke(a,b){if(this._points.length<2){b.beginPath(),b.fillStyle=this._getCurrentColor(a);let d;this._drawWithPressure?d=this._currentLineWidth*a.pressure*2:d=this._currentLineWidth/2,b.arc(this._getRelativeCoordinates(a).x,this._getRelativeCoordinates(a).y,this._currentLineWidth/2,0,Math.PI*2,!0),b.fill();return}let c;for(c=0;c<this._points.length-1;c++){let d,f;this._drawWithPressure?(d=this._currentLineWidth*this._points[c].pressure*2,f=this._currentLineWidth*this._points[c+1].pressure*2):d=f=this._currentLineWidth;let i=this._createPath(this._points[c].x,this._points[c].y,this._points[c+1].x,this._points[c+1].y,d,f);b.fillStyle=this._getCurrentColor(a),b.fill(i)}}_createPath(a,b,c,d,f,i){const o=c-a,p=d-b,g=Math.atan2(p,o)+Math.PI/2,h=new Path2D();return h.arc(a,b,f/2,g,g+Math.PI),h.arc(c,d,i/2,g+Math.PI,g),h.closePath(),h}_strokePredictedEvents(a,b){b.lineWidth=this._currentLineWidth,b.beginPath(),b.moveTo(this._points[this._points.length-1].x,this._points[this._points.length-1].y),this._highlightPredictedEvents?b.strokeStyle="red":b.strokeStyle=this._getCurrentColor(a);for(let c of this._predicted_points){const d=this._getRelativeCoordinates(c);b.lineTo(d.x,d.y)}b.stroke()}_getCurrentColor(a){return a.preferredColor&&this._drawWithPreferredColor?a.preferredColor:this._currentColor}_colorChanged(a){this._currentColor=a.detail.color,this._drawWithPreferredColor=!1}_lineWidthChanged(a){this._currentLineWidth=a.detail.lineWidth}_drawWithPreferredColorChanged(a){this._drawWithPreferredColor=a.detail.drawWithPreferredColor}_pressureEventsEnabledChanged(a){this._drawWithPressure=a.detail.pressureEventsEnabled}_predictedEventsEnabledChanged(a){this._drawPredictedEvents=a.detail.predictedEventsEnabled}_predictedEventsHighlightEnabledChanged(a){this._highlightPredictedEvents=a.detail.predictedEventsHighlightEnabled}render(){return k`
    <div class="main-layout">
      <tiny-toolbar @color-changed=${this._colorChanged}
        @lineWidth-changed=${this._lineWidthChanged}
        @drawWithPreferredColor-changed=${this._drawWithPreferredColorChanged}
        @pressureEventsEnabled-changed=${this._pressureEventsEnabledChanged}
        @predictedEventsEnabled-changed=${this._predictedEventsEnabledChanged}
        @predictedEventsHighlightEnabled-changed=${this._predictedEventsHighlightEnabledChanged}></tiny-toolbar>
        <canvas id="canvas"></canvas>
    </div>
    <mwc-snackbar id="snackbar" labelText="A newer version of the application is available.">
    <mwc-button slot="action">RELOAD</mwc-button>
      <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
    </mwc-snackbar>`}}e(MainApplication,"styles",l`
    :host {
      width: 100vw;
      height: 100vh;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    mwc-snackbar {
        --mdc-snackbar-action-color: #2d89ef;
    }

    .main-layout {
       display: flex;
       justify-content: flex-start;
       flex-direction: row;
    }

    tiny-toolbar{
      width: 20vw;
      height: 100vh;
    }

    #canvas {
      width: 80%;
      height: 100vh;
      user-select: none;
      touch-action: none;
    }
  `),customElements.define("main-application",MainApplication);
