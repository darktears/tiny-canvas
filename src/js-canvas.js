import { BaseCanvas } from './base-canvas.js';
import { JSCanvasRenderer } from './js-canvas-renderer.js';

export class JSCanvas extends BaseCanvas {

  firstUpdated() {
    super.firstUpdated();
    this.renderer = new JSCanvasRenderer(this.canvas, this.predictionCanvas, this.desynchronized);
  }

  constructor() {
    super();
  }
}

customElements.define('js-canvas', JSCanvas);
