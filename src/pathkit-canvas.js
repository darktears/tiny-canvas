import { BaseCanvas } from './base-canvas.js';
import { PathKitCanvasRenderer } from './pathkit-canvas-renderer.js';

export class PathKitCanvas extends BaseCanvas {

  firstUpdated() {
    super.firstUpdated();
    this.renderer = new PathKitCanvasRenderer(this.canvas, this.predictionCanvas, this.desynchronized);
  }

  constructor() {
    super();
  }
}

customElements.define('pathkit-canvas', PathKitCanvas);
