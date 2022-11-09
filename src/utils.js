export class DataSamples {
  constructor(size) {
    this._elements = [];
    this._maxSize = size;
  }

  clear() {
    this._elements = [];
  }

  push(value) {
    if (this._elements.length >= this._maxSize) {
      this._elements.shift();
    }
    this._elements.push(value);
  }

  avg() {
    if (this._elements.length === 0)
      return 0;

    let sum = this._elements.reduce(function(a, b){
      return a + b;
    }, 0);
    return sum / this._elements.length;
  }
}