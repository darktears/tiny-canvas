/**
*Returns the corresponding matrix in dim*1, given an dim matrix, and checks
* if corresponding with the observation dimension
*@param {Array.<Number> | Array.<Array.<Number>>} observation
*@param {Number} dimension
*@returns {Array.<Array.<Number>>}
*/

var arrayToMatrix = function ({observation, dimension}) {
	if (!Array.isArray(observation)) {
		if (dimension === 1 && typeof (observation) === 'number') {
			return [[observation]];
		}

		throw (new TypeError(`The observation (${observation}) should be an array (dimension: ${dimension})`));
	}

	if (observation.length !== dimension) {
		throw (new TypeError(`Observation (${observation.length}) and dimension (${dimension}) not matching`));
	}

	if (typeof (observation[0]) === 'number' || observation[0] === null) {
		return observation.map(element => [element]);
	}

	return observation;
};

/**
*Verifies that dimensions are matching and set dynamic.dimension and observation.dimension
* with respect of stateProjection and transition dimensions
*@param {ObservationConfig} observation
*@param {DynamicConfig} dynamic
*@returns {ObservationConfig, DynamicConfig}
*/

var setDimensions = function ({observation, dynamic}) {
	const {stateProjection} = observation;
	const {transition} = dynamic;
	const dynamicDimension = dynamic.dimension;
	const observationDimension = observation.dimension;

	if (dynamicDimension && observationDimension && Array.isArray(stateProjection) && (dynamicDimension !== stateProjection[0].length || observationDimension !== stateProjection.length)) {
		throw (new TypeError('stateProjection dimensions not matching with observation and dynamic dimensions'));
	}

	if (dynamicDimension && Array.isArray(transition) && dynamicDimension !== transition.length) {
		throw (new TypeError('transition dimension not matching with dynamic dimension'));
	}

	if (Array.isArray(stateProjection)) {
		return {
			observation: Object.assign({}, observation, {
				dimension: stateProjection.length
			}),
			dynamic: Object.assign({}, dynamic, {
				dimension: stateProjection[0].length
			})
		};
	}

	if (Array.isArray(transition)) {
		return {
			observation,
			dynamic: Object.assign({}, dynamic, {
				dimension: transition.length
			})
		};
	}

	return {observation, dynamic};
};

/**
*Verifies that dynamic.dimension and observation.dimension are set
*@param {ObservationConfig} observation
*@param {DynamicConfig} dynamic
*/

var checkDimensions = function ({observation, dynamic}) {
	const dynamicDimension = dynamic.dimension;
	const observationDimension = observation.dimension;
	if (!dynamicDimension || !observationDimension) {
		throw (new TypeError('Dimension is not set'));
	}

	return {observation, dynamic};
};

/**
*This function returns the stateProjection paded with zeros with respect to a given
*observedProjection
*@param {Array.<Number> | Array.<Array.<Number>>} array the array we need to pad
*@param {Number} dimension in our case, the dynamic dimension
*@returns {Array.<Number> | Array.<Array.<Number>>} paded array
*/
var padWithZeros = function (array, {dimension}) {
	const l1 = array.length;
	const l = array[0].length;
	const result = array.map(a => a.concat());

	if (dimension < l) {
		throw (new TypeError(`Dynamic dimension ${dimension} does not match with observedProjection ${l}`));
	}

	for (let i = 0; i < l1; i++) {
		for (let j = 0; j < dimension - l; j++) {
			result[i].push(0);
		}
	}

	return result;
};

var identity = function (stateSize) {
	const identityArray = [];
	for (let i = 0; i < stateSize; i++) {
		const rowIdentity = [];
		for (let j = 0; j < stateSize; j++) {
			if (i === j) {
				rowIdentity.push(1);
			} else {
				rowIdentity.push(0);
			}
		}

		identityArray.push(rowIdentity);
	}

	return identityArray;
};

/**
*Builds the stateProjection given an observedProjection
*@param {ObservationConfig} observation
*@param {DynamicConfig} dynamic
*@returns {ObservationConfig, DynamicConfig} the model containing the created stateProjection
*/

var buildStateProjection = function ({observation, dynamic}) {
	const {observedProjection, stateProjection} = observation;
	const observationDimension = observation.dimension;
	const dynamicDimension = dynamic.dimension;
	if (observedProjection && stateProjection) {
		throw (new TypeError('You cannot use both observedProjection and stateProjection'));
	}

	if (observedProjection) {
		const stateProjection = padWithZeros(observedProjection, {dimension: dynamicDimension});
		return {
			observation: Object.assign({}, observation, {
				stateProjection
			}),
			dynamic
		};
	}

	if (observationDimension && dynamicDimension) {
		const observationMatrix = identity(observationDimension);
		return {
			observation: Object.assign({}, observation, {
				stateProjection: padWithZeros(observationMatrix, {dimension: dynamicDimension})
			}),
			dynamic
		};
	}

	return {observation, dynamic};
};

var zeros = function (rows, cols) {
	return new Array(rows).fill(1).map(() => new Array(cols).fill(0));
};

var diag = function (mat) {
	const result = zeros(mat.length, mat.length);

	for (const [i, element] of mat.entries()) {
		result[i][i] = element;
	}

	return result;
};

/**
*Initializes the dynamic.init when not given
*@param {ObservationConfig} observation
*@param {DynamicConfig} dynamic
*@returns {ObservationConfig, DynamicConfig}
*/

var extendDynamicInit = function ({observation, dynamic}) {
	if (!dynamic.init) {
		const huge = 1e6;
		const dynamicDimension = dynamic.dimension;
		const meanArray = new Array(dynamicDimension).fill(0);
		const covarianceArray = new Array(dynamicDimension).fill(huge);
		const withInitOptions = {
			observation,
			dynamic: Object.assign({}, dynamic, {
				init: {
					mean: meanArray.map(element => [element]),
					covariance: diag(covarianceArray),
					index: -1
				}
			})
		};
		return withInitOptions;
	}

	return {observation, dynamic};
};

// Const diag = require('../linalgebra/diag.js');

/**
* @callback MatrixCallback
* @returns <Array.<Array.<Number>>
*/

/**
* Tranforms:
** a 2d array into a function (() => array)
** a 1d array into a function (() => diag(array))
*@param {Array.<Number> | Array.<Array.<Number>>} array
*@returns {MatrixCallback}
*/

var toFunction = function (array) {
	if (typeof (array) === 'function') {
		return array;
	}

	if (Array.isArray(array)) {
		return array;
	}

	throw (new Error('Only arrays and functions are authorized'));
};

var uniq = function (array) {
	return array.filter((value, index) =>
		array.indexOf(value) === index
	);
};

const limit = 100;

/**
*Equivalent to the Object.assign methode, takes several arguments and creates a new object corresponding to the assignment of the arguments
* @param {Object} args
* @param {Number} step
*/
const deepAssign = function (args, step) {
	if (step > limit) {
		throw (new Error(`In deepAssign, number of recursive call (${step}) reached limit (${limit}), deepAssign is not working on  self-referencing objects`));
	}

	const filterArguments = args.filter(arg => typeof (arg) !== 'undefined' && arg !== null);
	const lastArgument = filterArguments[filterArguments.length - 1];
	if (filterArguments.length === 1) {
		return filterArguments[0];
	}

	if (typeof (lastArgument) !== 'object' || Array.isArray(lastArgument)) {
		return lastArgument;
	}

	if (filterArguments.length === 0) {
		return null;
	}

	const objectsArguments = filterArguments.filter(arg => typeof (arg) === 'object');
	let keys = [];
	objectsArguments.forEach(arg => {
		keys = keys.concat(Object.keys(arg));
	});
	const uniqKeys = uniq(keys);
	const result = {};
	uniqKeys.forEach(key => {
		const values = objectsArguments.map(arg => arg[key]);
		result[key] = deepAssign(values, step + 1);
	});
	return result;
};

var deepAssign_1 = ((...args) => deepAssign(args, 0));

const checkShape = function (matrix, shape, title = 'checkShape') {
	if (matrix.length !== shape[0]) {
		throw (new Error(`[${title}] expected size (${shape[0]}) and length (${matrix.length}) does not match`));
	}

	if (shape.length > 1) {
		return matrix.forEach(m => checkShape(m, shape.slice(1), title));
	}
};

var checkShape_1 = checkShape;

var checkMatrix = function (matrix, shape, title = 'checkMatrix') {
	if (matrix.reduce((a, b) => a.concat(b)).filter(a => Number.isNaN(a)).length > 0) {
		throw (new Error(
			`[${title}] Matrix should not have a NaN\nIn : \n` +
			matrix.join('\n')
		));
	}

	if (shape) {
		checkShape_1(matrix, shape, title);
	}
};

/**
* @typedef {Number | Array.<Number> | Array.<Array.<Number>>} CovarianceParam
*/


/**
* If cov is a number, result will be Identity*cov
* If cov is an Array.<Number>, result will be diag(cov)
* If cov is an Array.<Array.<Number>>, result will be cov
* @param {CovarianceParam} cov
* @param {Number} dimension
* @returns {Array.<Array.<Number>>}
*/
var polymorphMatrix = function (array, {dimension, title = 'polymorph'} = {}) {
	if (typeof (array) === 'number' || Array.isArray(array)) {
		if (typeof (array) === 'number' && typeof (dimension) === 'number') {
			return diag(new Array(dimension).fill(array));
		}

		if ((Array.isArray(array)) && (Array.isArray(array[0]))) {
			let shape;
			if (typeof (dimension) === 'number') {
				shape = [dimension, dimension];
			}

			checkMatrix(array, shape, title);
			return array;
		}

		if ((Array.isArray(array)) && (typeof (array[0]) === 'number')) {
			return diag(array);
		}
	}

	return array;
};

var trace = function (array) {
	let diag = 0;
	for (const [row, element] of array.entries()) {
		diag += element[row];
	}

	return diag;
};

var transpose = function (array) {
	return array[0].map((col, i) => array.map(row => row[i]));
};

/**
* @callback elemWiseCb
* @param {Array.<Number>} arr
* @param {Number} rowId
* @param {Number} colId
*/
/**
* run a function on cell per cell for each Matrixes
* @param {<Array.<Array.<Array.<Number>>>} arrMatrixes list of matrixes
* @param {elemWiseCb} fn
* @returns {Array.<Array.<Number>>} resulting matrix
* @example
// this will do m1 + m2 + m3 + m4 on matrixes
elemWise([m1, m2, m3, m4], args2 => {
	return args2.reduce((a, b) => a + b, 0);
});
*/

var elemWise = function (arrayMatrixes, fn) {
	return arrayMatrixes[0].map((row, rowId) => {
		return row.map((cell, colId) => {
			const array = arrayMatrixes.map(m => m[rowId][colId]);
			return fn(array, rowId, colId);
		});
	});
};

var sub = function (...args) {
	return elemWise(args, ([a, b]) => a - b);
};

/**
* Multiply 2 matrixes together
* @param {<Array.<Array.<Number>>} m1
* @param {<Array.<Array.<Number>>} m2
* @returns {Array.<Array.<Number>>}
*/
var matMul = function (m1, m2) {
	// Console.log({m1, m2});
	const result = [];
	for (let i = 0; i < m1.length; i++) {
		result[i] = [];
		for (let j = 0; j < m2[0].length; j++) {
			let sum = 0;
			let isNull = false;
			for (let k = 0; k < m1[0].length; k++) {
				if ((m1[i][k] === null && m2[k][j] !== 0) || (m2[k][j] === null && m1[i][k] !== 0)) {
					isNull = true;
				}

				sum += m1[i][k] * m2[k][j];
			}

			result[i][j] = isNull ? null : sum;
		}
	}

	return result;
};

// Sum all the terms of a given matrix
var sum = function (array) {
	let s = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			s += array[i][j];
		}
	}

	return s;
};

// [Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm )
var distanceMat = function (array1, array2) {
	if (typeof (array1) === 'undefined') {
		return sum(array2);
	}

	if (typeof (array2) === 'undefined') {
		return sum(array1);
	}

	const m = sub(array1, array2);
	const p = matMul(transpose(m), m);
	return Math.sqrt(trace(p));
};

var Sylvester = {};

Sylvester.Matrix = function () {};

Sylvester.Matrix.create = function (elements) {
  var M = new Sylvester.Matrix();
  return M.setElements(elements)
};

Sylvester.Matrix.I = function (n) {
  var els = [],
    i = n,
    j;
  while (i--) {
    j = n;
    els[i] = [];
    while (j--) {
      els[i][j] = i === j ? 1 : 0;
    }
  }
  return Sylvester.Matrix.create(els)
};

Sylvester.Matrix.prototype = {
  dup: function () {
    return Sylvester.Matrix.create(this.elements)
  },

  isSquare: function () {
    var cols = this.elements.length === 0 ? 0 : this.elements[0].length;
    return this.elements.length === cols
  },

  toRightTriangular: function () {
    if (this.elements.length === 0) return Sylvester.Matrix.create([])
    var M = this.dup(),
      els;
    var n = this.elements.length,
      i,
      j,
      np = this.elements[0].length,
      p;
    for (i = 0; i < n; i++) {
      if (M.elements[i][i] === 0) {
        for (j = i + 1; j < n; j++) {
          if (M.elements[j][i] !== 0) {
            els = [];
            for (p = 0; p < np; p++) {
              els.push(M.elements[i][p] + M.elements[j][p]);
            }
            M.elements[i] = els;
            break
          }
        }
      }
      if (M.elements[i][i] !== 0) {
        for (j = i + 1; j < n; j++) {
          var multiplier = M.elements[j][i] / M.elements[i][i];
          els = [];
          for (p = 0; p < np; p++) {
            // Elements with column numbers up to an including the number of the
            // row that we're subtracting can safely be set straight to zero,
            // since that's the point of this routine and it avoids having to
            // loop over and correct rounding errors later
            els.push(
              p <= i ? 0 : M.elements[j][p] - M.elements[i][p] * multiplier
            );
          }
          M.elements[j] = els;
        }
      }
    }
    return M
  },

  determinant: function () {
    if (this.elements.length === 0) {
      return 1
    }
    if (!this.isSquare()) {
      return null
    }
    var M = this.toRightTriangular();
    var det = M.elements[0][0],
      n = M.elements.length;
    for (var i = 1; i < n; i++) {
      det = det * M.elements[i][i];
    }
    return det
  },

  isSingular: function () {
    return this.isSquare() && this.determinant() === 0
  },

  augment: function (matrix) {
    if (this.elements.length === 0) {
      return this.dup()
    }
    var M = matrix.elements || matrix;
    if (typeof M[0][0] === 'undefined') {
      M = Sylvester.Matrix.create(M).elements;
    }
    var T = this.dup(),
      cols = T.elements[0].length;
    var i = T.elements.length,
      nj = M[0].length,
      j;
    if (i !== M.length) {
      return null
    }
    while (i--) {
      j = nj;
      while (j--) {
        T.elements[i][cols + j] = M[i][j];
      }
    }
    return T
  },

  inverse: function () {
    if (this.elements.length === 0) {
      return null
    }
    if (!this.isSquare() || this.isSingular()) {
      return null
    }
    var n = this.elements.length,
      i = n,
      j;
    var M = this.augment(Sylvester.Matrix.I(n)).toRightTriangular();
    var np = M.elements[0].length,
      p,
      els,
      divisor;
    var inverse_elements = [],
      new_element;
    // Sylvester.Matrix is non-singular so there will be no zeros on the
    // diagonal. Cycle through rows from last to first.
    while (i--) {
      // First, normalise diagonal elements to 1
      els = [];
      inverse_elements[i] = [];
      divisor = M.elements[i][i];
      for (p = 0; p < np; p++) {
        new_element = M.elements[i][p] / divisor;
        els.push(new_element);
        // Shuffle off the current row of the right hand side into the results
        // array as it will not be modified by later runs through this loop
        if (p >= n) {
          inverse_elements[i].push(new_element);
        }
      }
      M.elements[i] = els;
      // Then, subtract this row from those above it to give the identity matrix
      // on the left hand side
      j = i;
      while (j--) {
        els = [];
        for (p = 0; p < np; p++) {
          els.push(M.elements[j][p] - M.elements[i][p] * M.elements[j][i]);
        }
        M.elements[j] = els;
      }
    }
    return Sylvester.Matrix.create(inverse_elements)
  },

  setElements: function (els) {
    var i,
      j,
      elements = els.elements || els;
    if (elements[0] && typeof elements[0][0] !== 'undefined') {
      i = elements.length;
      this.elements = [];
      while (i--) {
        j = elements[i].length;
        this.elements[i] = [];
        while (j--) {
          this.elements[i][j] = elements[i][j];
        }
      }
      return this
    }
    var n = elements.length;
    this.elements = [];
    for (i = 0; i < n; i++) {
      this.elements.push([elements[i]]);
    }
    return this
  },
};

var matrixInverse = function (elements) {
  const mat = Sylvester.Matrix.create(elements).inverse();
  if (mat !== null) {
    return mat.elements
  } else {
    return null
  }
};

var invert = function (m) {
	return matrixInverse(m);
};

var subSquareMatrix = (mat, obsIndexes) => {
	return obsIndexes.map(s1 => obsIndexes.map(s2 => mat[s1][s2]));
};

var isNumber = function isNumber(_int) {
  return Number.isFinite(_int);
};

var isMatrix = function isMatrix(matrix) {
  if (!Array.isArray(matrix)) {
    return false;
  }

  var height = matrix.length;

  if (height === 0) {
    return true; // [] represents empty matrix (0 x 0 matrix)
  }

  var firstRow = matrix[0];

  if (!Array.isArray(firstRow)) {
    return false;
  }

  var width = firstRow.length;

  if (width === 0) {
    return false; // [ [] ] is not allowed
  }

  for (var i = 0; i < height; i++) {
    var row = matrix[i];

    if (!Array.isArray(row) || row.length !== width) {
      return false;
    }

    for (var j = 0; j < width; j++) {
      if (!isNumber(row[j])) {
        return false;
      }
    }
  }

  return true;
};

var _Error = {
  INVALID_ARRAY: 'Invalid argument: Received a non-array argument',
  INVALID_MATRIX: 'Invalid argument: Received an invalid matrix',
  INVALID_SQUARE_MATRIX: 'Invalid argument: Received a non-square matrix',
  INVALID_UPPER_TRIANGULAR_MATRIX: 'Invalid argument: Received a non upper-triangular matrix',
  INVALID_LOWER_TRIANGULAR_MATRIX: 'Invalid argument: Received a non lower-triangular matrix',
  INVALID_EXPONENT: 'Invalid argument: Expected a non-negative integer exponent',
  INVALID_ROW_COL: 'Invalid argument: Expected non-negative integer row and column',
  INVALID_ROW: 'Invalid argument: Expected non-negative integer row',
  INVALID_COLUMN: 'Invalid argument: Expected non-negative integer column',
  INVALID_ROWS_EXPRESSION: 'Invalid argument: Received invalid rows expression',
  INVALID_COLUMNS_EXPRESSION: 'Invalid argument: Received invalid columns expression',
  INVALID_P_NORM: 'Invalid argument: Received invalid p-norm',
  OVERFLOW_INDEX: 'Invalid argument: Matrix index overflow',
  OVERFLOW_COLUMN: 'Invalid argument: Column index overflow',
  OVERFLOW_ROW: 'Invalid argument: Row index overflow',
  NO_UNIQUE_SOLUTION: 'Arithmetic Exception: The system has no unique solution',
  SIZE_INCOMPATIBLE: 'Invalid argument: Matrix size-incompatible',
  SINGULAR_MATRIX: 'Arithmetic Exception: The matrix is not invertible',
  EXPECTED_STRING_NUMBER_AT_POS_1_2: 'Invalid argument: Expected a string or a number at arguments[1] and arguments[2]',
  EXPECTED_ARRAY_OF_NUMBERS_OR_MATRICES: 'Invalid argument: Expected either an array of numbers or an array of square matrices'
};

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Determines whether a Matrix is diagonal or not.<br><br>
 * 
 * Diagonal Matrix is a Matrix in which the entries outside the main diagonal
 * are all zero. Note that the term diagonal refers to rectangular diagonal.<br><br>
 * 
 * The result is cached.
 * @memberof Matrix
 * @instance
 * @param {number} [digit=8] - Number of significant digits
 * @returns {boolean} Returns rue if the Matrix is diagonal Matrix
 */
function isDiagonal() {
  var digit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._digit;

  if (this._isDiagonal !== undefined) {
    return this._isDiagonal;
  }

  var EPSILON = 1 / (Math.pow(10, digit) * 2);
  var A = this._matrix;

  var _this$size = this.size(),
      _this$size2 = _slicedToArray(_this$size, 2),
      row = _this$size2[0],
      col = _this$size2[1];

  if (row === 0) {
    this._isDiagonal = true;
    return true;
  }

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (i !== j && Math.abs(A[i][j]) >= EPSILON) {
        this.isDiagonal = false;
        return false;
      }
    }
  }

  this._isDiagonal = true;
  return true;
}
var isDiagonal_1 = isDiagonal;

/**
 * Determines whether a square Matrix is skew symmetric or not.<br><br>
 * 
 * Skew symmetric Matrix is a square Matrix whose transpose equals its negative.<br><br>
 * 
 * The result is cached.
 * @memberof Matrix
 * @instance
 * @param {number} [digit=8] - Number of significant digits
 * @returns {boolean} Returns true if the square Matrix is skew symmetric
 */
function isSkewSymmetric() {
  var digit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._digit;

  if (this._isSkewSymmetric !== undefined) {
    return this._isSkewSymmetric;
  }

  if (!this.isSquare()) {
    this._isSkewSymmetric = false;
    return false;
  }

  var A = this._matrix;
  var EPSILON = 1 / (Math.pow(10, digit) * 2);
  var size = A.length;

  if (size === 0) {
    this._isSkewSymmetric = true;
    return true; // []
  }

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < i; j++) {
      if (Math.abs(A[i][j] + A[j][i]) >= EPSILON) {
        this._isSkewSymmetric = false;
        return false;
      }
    }
  }

  this._isSkewSymmetric = true;
  return true;
}
var isSkewSymmetric_1 = isSkewSymmetric;

/**
 * Determines whether a Matrix is square or not.<br><br>
 * 
 * Square Matrix is a Matrix with same number of rows and columns.<br><br>
 * 
 * The result is cached.
 * @memberof Matrix
 * @instance
 * @returns {boolean} Returns true if the Matrix is square
 */
function isSquare() {
  if (this._isSquare !== undefined) {
    return this._isSquare;
  }

  var A = this._matrix;

  if (A.length === 0) {
    // 0x0 matrix
    this._isSquare = true;
    return true;
  }

  this._isSquare = A.length === A[0].length;
  return this._isSquare;
}
var isSquare_1 = isSquare;

/**
 * Determines whether a square Matrix is symmetric or not.<br><br>
 * 
 * Symmetric Matrix is a square Matrix that is equal to its transpose.<br><br>
 * 
 * The result is cached.
 * @memberof Matrix
 * @instance
 * @param {number} [digit=8] - Number of significant digits
 * @returns {boolean} Returns true if the square Matrix is symmetric
 */
function isSymmetric() {
  var digit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._digit;

  if (this._isSymmetric !== undefined) {
    return this._isSymmetric;
  }

  if (!this.isSquare()) {
    return false;
  }

  var A = this._matrix;
  var EPSILON = 1 / (Math.pow(10, digit) * 2);
  var size = A.length;

  for (var i = 0; i < size; i++) {
    for (var j = 0; j <= i; j++) {
      if (Math.abs(A[i][j] - A[j][i]) >= EPSILON) {
        this._isSymmetric = false;
        return false;
      }
    }
  }

  this._isSymmetric = true;
  return true;
}
var isSymmetric_1 = isSymmetric;

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$1(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Determines whether a Matrix is lower triangular Matrix or not.<br><br>
 * 
 * Lower triangular Matrix is a Matrix in which all the entries
 * above the main diagonal are zero. Note that it can be applied
 * to any non-square Matrix.<br><br>
 * 
 * The result is cached.
 * @memberof Matrix
 * @instance
 * @param {number} [digit=8] - Number of significant digits
 * @returns {boolean} Returns true if the Matrix is lower triangular
 */
function isLowerTriangular() {
  var digit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._digit;

  if (this._isLowerTriangular !== undefined) {
    return this._isLowerTriangular;
  }

  var EPSILON = 1 / (Math.pow(10, digit) * 2);
  var A = this._matrix;

  var _this$size = this.size(),
      _this$size2 = _slicedToArray$1(_this$size, 2),
      row = _this$size2[0],
      col = _this$size2[1];

  if (row === 0) {
    // []
    this._isLowerTriangular = true;
    return true;
  }

  for (var i = 0; i < row; i++) {
    for (var j = i + 1; j < col; j++) {
      if (Math.abs(A[i][j]) >= EPSILON) {
        this._isLowerTriangular = false;
        return false;
      }
    }
  }

  this._isLowerTriangular = true;
  return true;
}
var isLowerTriangular_1 = isLowerTriangular;

function _slicedToArray$2(arr, i) { return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2(); }

function _nonIterableRest$2() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$2(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$2(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Determines whether a Matrix is upper triangular Matrix or not.<br><br>
 * 
 * Upper triangular Matrix is a Matrix in which all the entries below the
 * main diagonal are zero. Note that it can be applied to any non-square Matrix.<br><br>
 *  
 * The result is cached.
 * @memberof Matrix
 * @instance
 * @param {number} [digit=8] - Number of significant digits
 * @returns {boolean} Returns true if the Matrix is upper triangular
 */
function isUpperTriangular() {
  var digit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._digit;

  if (this._isUpperTriangular !== undefined) {
    return this._isUpperTriangular;
  }

  var EPSILON = 1 / (Math.pow(10, digit) * 2);
  var A = this._matrix;

  var _this$size = this.size(),
      _this$size2 = _slicedToArray$2(_this$size, 2),
      row = _this$size2[0],
      col = _this$size2[1];

  if (row === 0) {
    // []
    this._isUpperTriangular = true;
    return true;
  }

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (i <= j) {
        continue;
      }

      if (Math.abs(A[i][j]) >= EPSILON) {
        this._isUpperTriangular = false;
        return false;
      }
    }
  }

  this._isUpperTriangular = true;
  return true;
}
var isUpperTriangular_1 = isUpperTriangular;

/**
 * Determines whether a square Matrix is orthogonal or not.<br><br>
 * 
 * Orthogonal Matrix is a Matrix in which all rows and columns are
 * orthonormal vectors.<br><br>
 * 
 * The result is cached.
 * @memberof Matrix
 * @instance
 * @param {number} [digit=8] - Number of significant digits
 * @returns {boolean} Returns true if the square Matrix is orthogonal
 */
function isOrthogonal() {
  var digit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._digit;

  if (this._isOrthogonal !== undefined) {
    return this._isOrthogonal;
  }

  if (!this.isSquare()) {
    this._isOrthogonal = false;
    return false;
  }

  var A = this._matrix;
  var EPSILON = 1 / (Math.pow(10, digit) * 2);
  var size = A.length;

  for (var i = 0; i < size; i++) {
    for (var j = i; j < size; j++) {
      var entry = 0;

      for (var k = 0; k < size; k++) {
        entry += A[i][k] * A[j][k];
      }

      if (i === j && Math.abs(entry - 1) >= EPSILON) {
        this._isOrthogonal = false;
        return false;
      }

      if (i !== j && Math.abs(entry) >= EPSILON) {
        this._isOrthogonal = false;
        return false;
      }
    }
  }

  this._isOrthogonal = true;
  return true;
}
var isOrthogonal_1 = isOrthogonal;

var INVALID_P_NORM = _Error.INVALID_P_NORM,
    SINGULAR_MATRIX = _Error.SINGULAR_MATRIX,
    INVALID_SQUARE_MATRIX = _Error.INVALID_SQUARE_MATRIX;
/**
 * Calculations the condition number of square Matrix
 * with respect to the choice of Matrix norm. 
 * If the Matrix is singular, returns Infinity.<br><br>
 * The condition number is not cached.
 * @memberof Matrix
 * @instance
 * @param {(1|2|Infinity|'F')} p - Type of Matrix norm
 * @returns {number} The condition number of Matrix
 */


function cond() {
  var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

  if (p !== 1 && p !== 2 && p !== Infinity && p !== 'F') {
    throw new Error(INVALID_P_NORM);
  }

  if (!this.isSquare()) {
    throw new Error(INVALID_SQUARE_MATRIX);
  }

  try {
    var inverse = lib$1.inverse(this);
    return inverse.norm(p) * this.norm(p);
  } catch (error) {
    if (error.message === SINGULAR_MATRIX) {
      return Infinity;
    }

    throw error;
  }
}
var cond_1 = cond;

function _slicedToArray$3(arr, i) { return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$3(); }

function _nonIterableRest$3() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$3(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$3(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable prefer-destructuring */


var INVALID_SQUARE_MATRIX$1 = _Error.INVALID_SQUARE_MATRIX;
/**
 * Calculates the determinant of square Matrix.
 * If the Matrix size is larger than 3, it calculates the determinant using
 * LU decomposition, otherwise, using Leibniz Formula.<br><br>
 * The determinant is cached.
 * @memberof Matrix
 * @instance
 * @returns {number} Returns the determinant of square matrirx
 */


function det() {
  if (!this.isSquare()) {
    throw new Error(INVALID_SQUARE_MATRIX$1);
  }

  if (this._det !== undefined) {
    return this._det;
  }

  var matrix = this._matrix;
  var size = matrix.length;

  if (size === 0) {
    this._det = 1;
    return 1; // the determinant of 0x0 matrix must be 1
  }

  if (size === 1) {
    this._det = matrix[0][0];
    return this._det;
  }

  if (size === 2) {
    this._det = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    return this._det;
  }

  if (size === 3) {
    this._det = matrix[0][0] * matrix[1][1] * matrix[2][2] + matrix[0][1] * matrix[1][2] * matrix[2][0] + matrix[0][2] * matrix[1][0] * matrix[2][1] - matrix[0][2] * matrix[1][1] * matrix[2][0] - matrix[0][1] * matrix[1][0] * matrix[2][2] - matrix[0][0] * matrix[1][2] * matrix[2][1];
    return this._det;
  }

  var _Matrix$LU = lib$1.LU(this, true),
      _Matrix$LU2 = _slicedToArray$3(_Matrix$LU, 2),
      P = _Matrix$LU2[0],
      LU = _Matrix$LU2[1];

  var matrixLU = LU._matrix; // count whether the number of permutations <swap> is odd or even
  // O(n^2)

  var swap = 0;

  for (var i = 0; i < size; i++) {
    if (P[i] === i) {
      continue;
    }

    while (P[i] !== i) {
      var target = P[i];
      P[i] = P[target];
      P[target] = target;
      swap++;
    }
  }

  var result = 1;

  for (var _i2 = 0; _i2 < size; _i2++) {
    result *= matrixLU[_i2][_i2];
  }

  if (swap % 2 === 1) {
    this._det = result * -1;
    return this._det;
  }

  this._det = result;
  return result;
}
var det_1 = det;

/**
 * Gets the real part of a Complex Number.
 * @memberof Complex
 * @instance
 * @returns {number} The real part of the Complex Number
 */
function getReal() {
  return this.re;
}

var getReal_1 = getReal;

/**
 * Gets the imaginary part of a Complex Number.
 * @memberof Complex
 * @instance
 * @returns {number} The imaginary part of the Complex Number
 */
function getImaginary() {
  return this.im;
}

var getImaginary_1 = getImaginary;

/**
 * Calculates the modulus of a Complex Number.<br><br>
 * 
 * The modulus of the complex number is the length of the vector
 * representing the complex number on complex plane.
 * @memberof Complex
 * @instance
 * @returns {number} The modulus of the Complex Number
 */
function getModulus() {
  return Math.sqrt(Math.pow(this.re, 2) + Math.pow(this.im, 2));
}

var getModulus_1 = getModulus;

/**
 * Calculates the argument of a Complex Number which is restricted to the interval [ 0, 2π ).<br><br>
 * 
 * The argument of the Complex Number is the angle between positive real-axis
 * and the vector representing the Complex Number on Complex plane.<br><br>
 * 
 * If the given Complex Number is considered as 0, returns undefined.
 * @memberof Complex
 * @instance
 * @returns {number} The argument of the Complex Number
 */
function getArgument() {
  var x = this.re;
  var y = this.im;
  var epsilon = 1 / (Math.pow(10, 15) * 2);

  if (Math.abs(x) < epsilon && Math.abs(y) < epsilon) {
    return undefined;
  }

  if (x === 0) {
    if (y > 0) {
      return Math.PI * 0.5;
    }

    return Math.PI * 1.5;
  }

  if (y === 0) {
    if (x > 0) {
      return 0;
    }

    return Math.PI;
  }

  if (x > 0 && y > 0) {
    return Math.atan(y / x);
  }

  if (x < 0 && y > 0) {
    return Math.PI - Math.atan(y / (x * -1));
  }

  if (x < 0 && y < 0) {
    return Math.PI + Math.atan(y * -1 / (x * -1));
  }

  return Math.PI * 2 - Math.atan(y * -1 / x);
}

var getArgument_1 = getArgument;

/**
 * Gets the stringified and formatted Complex Number.
 * @memberof Complex
 * @instance
 * @returns {string} The stringified and formatted Complex Number
 */
function toString() {
  var re = this.re,
      im = this.im;

  if (Number.isNaN(re) || Number.isNaN(im)) {
    return 'NaN';
  }

  if (re === 0 && im === 0) {
    return '0';
  }

  if (re === 0) {
    if (im === 1) {
      return 'i';
    }

    if (im === -1) {
      return '-i';
    }

    return "".concat(im, "i");
  }

  if (im === 0) {
    return "".concat(re);
  }

  if (im > 0) {
    if (im === 1) {
      return "".concat(re, " + i");
    }

    return "".concat(re, " + ").concat(im, "i");
  }

  if (im === -1) {
    return "".concat(re, " - i");
  }

  return "".concat(re, " - ").concat(Math.abs(im), "i");
}

var toString_1 = toString;

/**
 * Determines whether the Complex Number is NaN or not.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex number
 * @returns {boolean} Returns true if one of real and imaginary part are NaN
 */
function isNaN(num) {
  if (!(num instanceof this)) {
    return false;
  }

  var re = num.getReal();
  var im = num.getImaginary();

  if (Number.isNaN(re) || Number.isNaN(im)) {
    return true;
  }

  return false;
}

var _isNaN = isNaN;

/**
 * Determines whether two Complex Numbers are considered as identical.<br><br>
 * 
 * Two Complex Numbers are considered as identical if either
 * both are NaN or both real and imaginary parts are extremely closed.<br><br>
 * 
 * The test criterion is Math.abs(x - y) < 1 / (10 ** digit * 2).
 * For default value 15, it should be 5e-16.
 * That means if the difference of two numbers is less than 5e-16,
 * they are considered as same value.
 * @memberof Complex
 * @static
 * @param {Complex} num1 - Complex Number
 * @param {Complex} num2 - Complex Number
 * @param {number} [digit=15] - Number of significant digits
 * @returns {boolean} Returns true if two Complex Numbers are considered as identical
 */
function isEqual(num1, num2) {
  var digit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 15;

  if (!(num1 instanceof this) || !(num2 instanceof this)) {
    return false;
  }

  if (!Number.isInteger(digit) || digit < 0) {
    throw new Error('Invalid argument: Expected a non-negative integer digit');
  }

  var EPSILON = 1 / (Math.pow(10, digit) * 2);
  var a = num1.getReal();
  var b = num1.getImaginary();
  var c = num2.getReal();
  var d = num2.getImaginary();

  if (Number.isNaN(a) && Number.isNaN(b) && Number.isNaN(c) && Number.isNaN(d)) {
    return true;
  }

  return Math.abs(a - c) < EPSILON && Math.abs(b - d) < EPSILON;
}

var isEqual_1 = isEqual;

/**
 * Calculates the complex conjugate of the Complex Number.
 * @memberof Complex
 * @static
 * @param {Complex} num - Complex number
 * @returns {Complex} The complex conjugate of the Complex Number
 */
function conjugate(num) {
  if (!(num instanceof this)) {
    return this.NaN;
  }

  return new this(num.getReal(), num.getImaginary() * -1);
}

var conjugate_1 = conjugate;

/**
 * Calculates the inverse of the Complex Number.
 * @memberof Complex
 * @static
 * @param {Complex} num - Complex Number
 * @returns {number} Inverse of the Complex Number
 */
function inverse(num) {
  if (!(num instanceof this)) {
    return this.NaN;
  }

  return this.divide(this.ONE, num);
}

var inverse_1 = inverse;

/**
 * Calculates the sum of two Complex Number.
 * @memberof Complex
 * @static
 * @param {Complex} num1 - The Complex Number on the left of '+' operator.
 * @param {Complex} num2 - The Complex Number on the right of '+' operator.
 * @returns {Complex} The sum of two Complex Numbers
 */
function add(num1, num2) {
  if (!(num1 instanceof this) || !(num2 instanceof this)) {
    return this.NaN;
  }

  return new this(num1.re + num2.re, num1.im + num2.im);
}

var add_1 = add;

/**
 * Calculates the difference of two Complex Number.
 * @memberof Complex
 * @static
 * @param {Complex} num1 - The Complex Number on the left of '-' operator.
 * @param {Complex} num2 - The Complex Number on the right of '-' operator.
 * @returns {Complex} The difference of two Complex Numbers
 */
function subtract(num1, num2) {
  if (!(num1 instanceof this) || !(num2 instanceof this)) {
    return this.NaN;
  }

  return new this(num1.re - num2.re, num1.im - num2.im);
}

var subtract_1 = subtract;

/**
 * Calculates the product of two Complex Number.
 * @memberof Complex
 * @static
 * @param {Complex} num1 - The Complex Number on the left of '*' operator.
 * @param {Complex} num2 - The Complex Number on the right of '*' operator.
 * @returns {Complex} The product of two Complex Numbers
 */
function multiply(num1, num2) {
  if (!(num1 instanceof this) || !(num2 instanceof this)) {
    return this.NaN;
  }

  var a = num1.re;
  var b = num1.im;
  var c = num2.re;
  var d = num2.im;
  return new this(a * c - b * d, a * d + b * c);
}

var multiply_1 = multiply;

/**
 * Calculates the quotient of two Complex Number.<br><br>
 * 
 * Note that if the denominator is considered as 0,
 * returns Complex.NaN instead of Infinity.
 * @memberof Complex
 * @static
 * @param {Complex} num1 - The Complex Number on the left of '/' operator.
 * @param {Complex} num2 - The Complex Number on the right of '/' operator.
 * @returns {Complex} The quotient of two Complex Numbers
 */
function divide(num1, num2) {
  if (!(num1 instanceof this) || !(num2 instanceof this)) {
    return this.NaN;
  }

  var a = num1.re;
  var b = num1.im;
  var c = num2.re;
  var d = num2.im;

  if (Math.abs(c) < this.EPSILON && Math.abs(d) < this.EPSILON) {
    return this.NaN;
  }

  var denominator = Math.pow(c, 2) + Math.pow(d, 2);
  return new this((a * c + b * d) / denominator, (b * c - a * d) / denominator);
}

var divide_1 = divide;

/**
 * Calculates the exponential function with base E.
 * @memberof Complex
 * @static
 * @param {Complex} num - Exponent
 * @returns {Complex} The value of E to the power of num
 */
function exp(num) {
  if (!(num instanceof this)) {
    return this.NaN;
  }

  var re = num.getReal();
  var theta = num.getImaginary();
  var r = Math.exp(re);
  return new this(r * Math.cos(theta), r * Math.sin(theta));
}

var exp_1 = exp;

/**
 * Calculates the natural log of the Complex Number.<br><br>
 * 
 * Note that complex log is a multivalued function,
 * and this function only provides the principal value by
 * restricting the imaginary part to the interval [0, 2π).
 * @memberof Complex
 * @static
 * @param {Complex} num - Complex Number
 * @returns {number} Natural log of the Complex Number
 */
function log(num) {
  if (!(num instanceof this)) {
    return this.NaN;
  }

  var r = num.getModulus();
  var theta = num.getArgument();

  if (r < this.EPSILON || theta === undefined) {
    return this.NaN;
  }

  return new this(Math.log(r), theta);
}

var log_1 = log;

/**
 * Calculates the power of the Complex Number.
 * The exponent can be any real number or Complex Number<br><br>
 * 
 * You can find the k-th root of complex number by setting the exponent to 1 / k.
 * But you should know that it only returns one out of k possible solutions.
 * @memberof Complex
 * @static
 * @param {Complex} num - Base
 * @param {Complex|number} n - Exponent
 * @returns {Complex} The result of the exponentiation
 */
function pow(num, n) {
  if (!(num instanceof this) || typeof n !== 'number' && !(n instanceof this)) {
    return this.NaN;
  }

  if (typeof n === 'number') {
    if (!Number.isFinite(n) || Number.isNaN(n)) {
      return this.NaN;
    }

    if (n === 0) {
      return this.ONE;
    }

    if (this.isEqual(num, this.ZERO)) {
      return this.ZERO;
    }

    return this.exp(this.multiply(new this(n, 0), this.log(num)));
  }

  if (n instanceof this) {
    return this.exp(this.multiply(n, this.log(num)));
  }

  return this.NaN;
}

var pow_1 = pow;

/**
 * Calculates the sine of a Complex Number.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex Number
 * @returns {Complex} The result of sine function
 */
function sin(num) {
  if (!(num instanceof this)) {
    return this.NaN;
  }

  var a = num.getReal();
  var b = num.getImaginary();
  return new this(Math.sin(a) * Math.cosh(b), Math.cos(a) * Math.sinh(b));
}

var sin_1 = sin;

/**
 * Calculates the cosine of a Complex Number.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex Number
 * @returns {Complex} The result of cosine function
 */
function cos(num) {
  if (!(num instanceof this)) {
    return this.NaN;
  }

  var a = num.getReal();
  var b = num.getImaginary();
  return new this(Math.cos(a) * Math.cosh(b), Math.sin(a) * Math.sinh(b) * -1);
}

var cos_1 = cos;

/**
 * Calculates the tangent of a Complex Number.
 * The domain of this function is C / { (k + 0.5)π : k is any integer }.<br><br>
 * 
 * If the argument is out of its domain, it returns Complex.NaN.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex Number which is not in the form of (k + 0.5)π
 * @returns {Complex} The result of tangent function
 */
function tan(num) {
  return this.divide(this.sin(num), this.cos(num));
}

var tan_1 = tan;

/**
 * Calculates the cosecant of a Complex Number.
 * The domain of this function is C / { kπ : k is any integer }.<br><br>
 * 
 * If the argument is out of its domain, it returns Complex.NaN.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex Number which is not the multiple of π
 * @returns {Complex} The result of cosecant function
 */
function csc(num) {
  return this.divide(this.ONE, this.sin(num));
}

var csc_1 = csc;

/**
 * Calculates the secant of a Complex Number.
 * The domain of this function is C / { (k + 0.5)π : k is any integer }.<br><br>
 * 
 * If the argument is out of its domain, it returns Complex.NaN.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex Number which is not in the form of (k + 0.5)π
 * @returns {Complex} The result of secant function
 */
function sec(num) {
  return this.divide(this.ONE, this.cos(num));
}

var sec_1 = sec;

/**
 * Calculates the cotangent of a Complex Number.
 * The domain of this function is C / { kπ/2 : k is any integer }.<br><br>
 * 
 * If the argument is out of its domain, it returns Complex.NaN.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex Number which is not the multiple of π/2
 * @returns {Complex} The result of cotangent function
 */
function cot(num) {
  return this.divide(this.ONE, this.tan(num));
}

var cot_1 = cot;

/**
 * Calculates the inverse sine of a Complex Number.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex Number
 * @returns {Complex} The result of inverse sine function
 */
function asin(num) {
  return this.multiply(new this(0, -1), this.log(this.add(this.multiply(new this(0, 1), num), this.pow(this.subtract(this.ONE, this.pow(num, 2)), 0.5))));
}

var asin_1 = asin;

/**
 * Calculates the inverse cosine of a Complex Number.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex Number
 * @returns {Complex} The result of inverse cosine function
 */
function acos(num) {
  return this.subtract(new this(Math.PI / 2), this.asin(num));
}

var acos_1 = acos;

/**
 * Calculates the inverse tangent of a Complex Number.
 * The domain of this function is C / { i , -i }.<br><br>
 * 
 * If the argument is out of its domain, it returns Complex.NaN.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex Number except i and -i
 * @returns {Complex} The result of inverse tangent function
 */
function atan(num) {
  return this.multiply(new this(0, 1 / 2), this.subtract(this.log(this.subtract(this.ONE, this.multiply(new this(0, 1), num))), this.log(this.add(this.ONE, this.multiply(new this(0, 1), num)))));
}

var atan_1 = atan;

/**
 * Calculates the inverse cosecant of a Complex Number.
 * The domain of this function is C / { 0 }.<br><br>
 * 
 * If the argument is out of its domain, it returns Complex.NaN.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex Number except 0
 * @returns {Complex} The result of inverse cosecant function
 */
function acsc(num) {
  return this.asin(this.inverse(num));
}

var acsc_1 = acsc;

/**
 * Calculates the inverse secant of a Complex Number.
 * The domain of this function is C / { 0 }.<br><br>
 * 
 * If the argument is out of its domain, it returns Complex.NaN.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex Number except 0
 * @returns {Complex} The result of inverse secant function
 */
function asec(num) {
  return this.acos(this.inverse(num));
}

var asec_1 = asec;

/**
 * Calculates the inverse cotangent of a Complex Number.
 * The domain of this function is C / { i , -i , 0 }.<br><br>
 * 
 * If the argument is out of its domain, it returns Complex.NaN.
 * @memberof Complex
 * @static
 * @param {Complex} num - Any Complex Number except i, -i and 0
 * @returns {Complex} The result of inverse cotangent function
 */
function acot(num) {
  return this.atan(this.inverse(num));
}

var acot_1 = acot;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Creates a new Complex Number.
 * @namespace Complex
 * @class
 * @param {number} arg1 - The real part of the Complex Number
 * @param {number} arg2 - The imaginary part of the Complex Number
 */
function Complex(arg1, arg2) {
  var type1 = _typeof(arg1);

  var type2 = _typeof(arg2);

  if (type1 === 'number' && type2 === 'undefined') {
    if (Number.isNaN(arg1) || !Number.isFinite(arg1)) {
      this.re = NaN;
      this.im = NaN;
      return this;
    }

    this.re = arg1;
    this.im = 0;
    return this;
  }

  if (type1 === 'number' && type2 === 'number') {
    if (Number.isNaN(arg1) || Number.isNaN(arg2) || !Number.isFinite(arg1) || !Number.isFinite(arg2)) {
      this.re = NaN;
      this.im = NaN;
      return this;
    }

    this.re = arg1;
    this.im = arg2;
    return this;
  }

  this.re = NaN;
  this.im = NaN;
  return this;
}

var lib = Complex;
Complex.prototype.getReal = getReal_1;
Complex.prototype.getImaginary = getImaginary_1;
Complex.prototype.getModulus = getModulus_1;
Complex.prototype.getArgument = getArgument_1;
Complex.prototype.toString = toString_1;
Complex.isNaN = _isNaN;
Complex.isEqual = isEqual_1;
Complex.conjugate = conjugate_1;
Complex.inverse = inverse_1;
Complex.add = add_1;
Complex.subtract = subtract_1;
Complex.multiply = multiply_1;
Complex.divide = divide_1;
Complex.exp = exp_1;
Complex.log = log_1;
Complex.pow = pow_1;
Complex.sin = sin_1;
Complex.cos = cos_1;
Complex.tan = tan_1;
Complex.csc = csc_1;
Complex.sec = sec_1;
Complex.cot = cot_1;
Complex.asin = asin_1;
Complex.acos = acos_1;
Complex.atan = atan_1;
Complex.acsc = acsc_1;
Complex.asec = asec_1;
Complex.acot = acot_1;
/**
 * It represents NaN in this library. It is equivalent to new Complex(NaN).<br><br>
 * 
 * It is important to know that this library does not introduce the concept of Complex Infinity,
 * all Infinity in this library are represented by Complex.NaN.
 * @static
 */

Complex.NaN = new Complex(NaN);
/** @static */

Complex.ONE = new Complex(1);
/** @static */

Complex.ZERO = new Complex(0);
/** @static */

Complex.PI = new Complex(Math.PI);
/** @static */

Complex.E = new Complex(Math.E);
/**
 * It represents the value of 5e-16, which is the smallest number considered as non-zero in this library.
 * In the other words, any number less than Complex.EPSILON is considered as 0.<br><br>
 * 
 * Note that Complex.EPSILON is number instead of instance of Complex.
 * @static
 */

Complex.EPSILON = 1 / (Math.pow(10, 15) * 2);

function _slicedToArray$4(arr, i) { return _arrayWithHoles$4(arr) || _iterableToArrayLimit$4(arr, i) || _unsupportedIterableToArray$4(arr, i) || _nonIterableRest$4(); }

function _nonIterableRest$4() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }

function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$4(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$4(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-param-reassign */
// reference: https://people.inf.ethz.ch/arbenz/ewp/Lnotes/chapter4.pdf




var INVALID_SQUARE_MATRIX$2 = _Error.INVALID_SQUARE_MATRIX;
/**
 * Calculates the eigenvalues of any square Matrix using QR Algorithm.<br><br>
 * 
 * The eigenvalues can be either real number or complex number.
 * Note that all eigenvalues are instance of Complex,
 * for more details please visit [Complex.js]{@link https://rayyamhk.github.io/Complex.js}.<br><br>
 * 
 * The eigenvalues are cached.
 * @memberof Matrix
 * @instance
 * @returns {Complex[]} Array of eigenvalues
 */


function eigenvalues() {
  if (!this.isSquare()) {
    throw new Error(INVALID_SQUARE_MATRIX$2);
  }

  if (this._eigenvalues !== undefined) {
    return this._eigenvalues;
  }

  var size = this.size()[0];
  var values = [];
  var digit = this._digit;
  var EPSILON = 1 / (Math.pow(10, digit) * 2);

  var clone = lib$1.clone(this)._matrix;

  var isConvergent = true; // flag

  var skip = false; // Transform matrix to Hessenberg matrix

  HouseholderTransform(clone, digit);

  for (var i = size - 1; i > 0; i--) {
    var divergenceCount = 0;
    var prev = void 0; // used to determine convergence
    // if obtains complex eigenvalues pair in previous iteration, skip current round

    if (skip) {
      skip = false;
      continue;
    }

    var shift = clone[size - 1][size - 1]; // eslint-disable-next-line no-constant-condition

    while (true) {
      if (!isConvergent) {
        // if the current eigenvalue is not real
        prev = size2Eigenvalues(clone[i - 1][i - 1], clone[i - 1][i], clone[i][i - 1], clone[i][i]).metric;
      } else {
        // if the current eigenvalue is real
        prev = Math.abs(clone[i][i - 1]);
      } // apply single shift


      for (var j = 0; j < size; j++) {
        clone[j][j] -= shift;
      } // Apply QR Algorithm


      HessenbergQR(clone, digit);

      for (var _j = 0; _j < size; _j++) {
        clone[_j][_j] += shift;
      }

      if (isConvergent && prev < Math.abs(clone[i][i - 1])) {
        divergenceCount++;
      } // if the current eigenvalue is real and the entry is almost ZERO => break;


      if (isConvergent && Math.abs(clone[i][i - 1]) < EPSILON) {
        values[i] = new lib(clone[i][i]);
        break;
      } // if the current eigenvalues pair is complex, if the difference of the previous eiganvalues and the
      // eigenvalues of submatrix is almost ZERO => break


      var _size2Eigenvalues = size2Eigenvalues(clone[i - 1][i - 1], clone[i - 1][i], clone[i][i - 1], clone[i][i]),
          metric = _size2Eigenvalues.metric,
          eigen1 = _size2Eigenvalues.eigen1,
          eigen2 = _size2Eigenvalues.eigen2;

      if (!isConvergent && Math.abs(prev - metric) < EPSILON) {
        isConvergent = true; // re-initialize

        skip = true;
        var re1 = eigen1.re,
            im1 = eigen1.im;
        var re2 = eigen2.re,
            im2 = eigen2.im;
        values[i] = new lib(re1, im1);
        values[i - 1] = new lib(re2, im2);
        break;
      } // if the entry doesn't converge => complex eigenvalues pair


      if (divergenceCount > 3) {
        isConvergent = false;
      }
    }
  }

  if (!skip) {
    values[0] = new lib(clone[0][0]);
  }

  this._eigenvalues = values;
  return values;
}

function HouseholderTransform(A, digit) {
  var size = A.length;
  var EPSILON = 1 / (Math.pow(10, digit) * 2);

  for (var j = 0; j < size - 2; j++) {
    var xNorm = 0;
    var u = new Array(size - j - 1);

    for (var i = j + 1; i < size; i++) {
      var entry = A[i][j];
      xNorm += Math.pow(entry, 2);
      u[i - j - 1] = entry;
    }

    xNorm = Math.sqrt(xNorm);

    if (Math.abs(xNorm) < EPSILON) {
      continue;
    }

    if (u[0] >= 0) {
      u[0] += xNorm;
    } else {
      u[0] -= xNorm;
    } // Make 'u' unit vector


    var uNorm = 0;

    for (var _i = 0; _i < u.length; _i++) {
      uNorm += Math.pow(u[_i], 2);
    }

    uNorm = Math.sqrt(uNorm);

    for (var _i2 = 0; _i2 < u.length; _i2++) {
      u[_i2] /= uNorm;
    } // update the matrix, multiply P from left


    for (var n = j; n < size; n++) {
      // column
      var v = new Array(size - j - 1);

      for (var m = j + 1; m < size; m++) {
        v[m - j - 1] = A[m][n];
      }

      var scaler = 0;

      for (var _m = 0; _m < v.length; _m++) {
        scaler += v[_m] * u[_m];
      }

      scaler *= 2;

      for (var _m2 = j + 1; _m2 < size; _m2++) {
        // row
        if (n === j && _m2 !== j + 1) {
          A[_m2][n] = 0;
        } else {
          A[_m2][n] = v[_m2 - j - 1] - scaler * u[_m2 - j - 1];
        }
      }
    } // update the matrix, multiply P from right


    for (var _m3 = 0; _m3 < size; _m3++) {
      // row
      var _v = new Array(size - j - 1);

      for (var _n = j + 1; _n < size; _n++) {
        _v[_n - j - 1] = A[_m3][_n];
      }

      var _scaler = 0;

      for (var _n2 = 0; _n2 < _v.length; _n2++) {
        _scaler += _v[_n2] * u[_n2];
      }

      _scaler *= 2;

      for (var _n3 = j + 1; _n3 < size; _n3++) {
        // column
        A[_m3][_n3] = _v[_n3 - j - 1] - _scaler * u[_n3 - j - 1];
      }
    }
  }
}

function HessenbergQR(H, digit) {
  var size = H.length;
  var EPSILON = 1 / (Math.pow(10, digit) * 2);
  var sincos = new Array(size - 1);

  for (var i = 0; i < size - 1; i++) {
    var a = H[i][i];
    var c = H[i + 1][i];
    var norm = Math.sqrt(Math.pow(a, 2) + Math.pow(c, 2));

    if (norm < EPSILON) {
      continue;
    }

    var cos = a / norm;
    var sin = c * -1 / norm;
    sincos[i] = [sin, cos];
    var row1 = new Array(size - i);
    var row2 = new Array(size - i);

    for (var j = i; j < size; j++) {
      row1[j - i] = H[i][j];
      row2[j - i] = H[i + 1][j];
    }

    for (var _j2 = i; _j2 < size; _j2++) {
      H[i][_j2] = cos * row1[_j2 - i] + sin * -1 * row2[_j2 - i];

      if (i === _j2) {
        H[i + 1][_j2] = 0;
      } else {
        H[i + 1][_j2] = sin * row1[_j2 - i] + cos * row2[_j2 - i];
      }
    }
  }

  for (var _j3 = 0; _j3 < size - 1; _j3++) {
    if (!sincos[_j3]) {
      continue;
    }

    var _sincos$_j = _slicedToArray$4(sincos[_j3], 2),
        _sin = _sincos$_j[0],
        _cos = _sincos$_j[1];

    var col1 = new Array(_j3 + 2);
    var col2 = new Array(_j3 + 2);

    for (var _i3 = 0; _i3 <= _j3 + 1; _i3++) {
      col1[_i3] = H[_i3][_j3];
      col2[_i3] = H[_i3][_j3 + 1];
    }

    for (var _i4 = 0; _i4 <= _j3 + 1; _i4++) {
      H[_i4][_j3] = col1[_i4] * _cos - col2[_i4] * _sin;
      H[_i4][_j3 + 1] = col1[_i4] * _sin + col2[_i4] * _cos;
    }
  }
} // find the eigenvalues of 2x2 matrix


function size2Eigenvalues(e11, e12, e21, e22) {
  var b = (e11 + e22) * -1;
  var c = e11 * e22 - e21 * e12;
  var delta = Math.pow(b, 2) - 4 * c;
  var re1;
  var im1;
  var re2;
  var im2;

  if (delta >= 0) {
    im1 = 0;
    im2 = 0;

    if (b >= 0) {
      re1 = (b * -1 - Math.sqrt(delta)) / 2;
    } else {
      re1 = (b * -1 + Math.sqrt(delta)) / 2;
    }

    re2 = c / re1;
  } else {
    re1 = -b / 2;
    re2 = re1;
    im1 = Math.sqrt(delta * -1) / 2;
    im2 = im1 * -1;
  }

  return {
    metric: Math.sqrt(Math.pow(re1, 2) + Math.pow(im1, 2)),
    eigen1: {
      re: re1,
      im: im1
    },
    eigen2: {
      re: re2,
      im: im2
    }
  };
}

var eigenvalues_1 = eigenvalues;

/**
 * Calculates the nullity of any Matrix, which is the dimension
 * of the nullspace.<br><br>
 * 
 * The nullity is cached.
 * @memberof Matrix
 * @instance
 * @returns {number} The nullity of the matrix
 */
function nullity() {
  if (this._nullity !== undefined) {
    return this._nullity;
  }

  var col = this.size()[1];
  var rank = this.rank();
  this._nullity = col - rank;
  return this._nullity;
}
var nullity_1 = nullity;

function _slicedToArray$5(arr, i) { return _arrayWithHoles$5(arr) || _iterableToArrayLimit$5(arr, i) || _unsupportedIterableToArray$5(arr, i) || _nonIterableRest$5(); }

function _nonIterableRest$5() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$5(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$5(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen); }

function _arrayLikeToArray$5(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$5(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$5(arr) { if (Array.isArray(arr)) return arr; }



var INVALID_P_NORM$1 = _Error.INVALID_P_NORM;
/**
 * Calculates the Matrix norm of any Matrix with respect to the choice of norm.<br><br>
 * 
 * 1-norm: Maximum absolute column sum of the Matrix.<br>
 * 2-norm: The largest singular value of Matrix.<br>
 * Infinity-norm: Maximum absolute row sum of the Matrix.<br>
 * Frobenius-norm: Euclidean norm invloving all entries.<br><br>
 * 
 * The norms are not cached.
 * @memberof Matrix
 * @instance
 * @param {(1|2|Infinity|'F')} p - The choice of Matrix norm
 * @returns {number} The norm of the Matrix.
 */


function norm() {
  var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

  var _this$size = this.size(),
      _this$size2 = _slicedToArray$5(_this$size, 2),
      row = _this$size2[0],
      col = _this$size2[1];

  if (p !== 1 && p !== 2 && p !== Infinity && p !== 'F') {
    throw new Error(INVALID_P_NORM$1);
  }

  var matrix = this._matrix;
  var result = 0;

  if (p === 1) {
    // max of column sum
    for (var j = 0; j < col; j++) {
      var columnSum = 0;

      for (var i = 0; i < row; i++) {
        columnSum += Math.abs(matrix[i][j]);
      }

      if (columnSum > result) {
        result = columnSum;
      }
    }

    return result;
  } // largest singular value


  if (p === 2) {
    var transpose = lib$1.transpose(this);
    var M = lib$1.multiply(transpose, this);
    var eigenvalues = M.eigenvalues();

    for (var _i2 = 0; _i2 < eigenvalues.length; _i2++) {
      var value = eigenvalues[_i2].getModulus();

      if (value > result) {
        result = value;
      }
    }

    return Math.sqrt(result);
  }

  if (p === Infinity) {
    // max of row sum
    for (var _i3 = 0; _i3 < row; _i3++) {
      var rowSum = 0;

      for (var _j = 0; _j < col; _j++) {
        rowSum += Math.abs(matrix[_i3][_j]);
      }

      if (rowSum > result) {
        result = rowSum;
      }
    }

    return result;
  } // F


  for (var _i4 = 0; _i4 < row; _i4++) {
    for (var _j2 = 0; _j2 < col; _j2++) {
      result += Math.pow(matrix[_i4][_j2], 2);
    }
  }

  return Math.sqrt(result);
}
var norm_1 = norm;

function _slicedToArray$6(arr, i) { return _arrayWithHoles$6(arr) || _iterableToArrayLimit$6(arr, i) || _unsupportedIterableToArray$6(arr, i) || _nonIterableRest$6(); }

function _nonIterableRest$6() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$6(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$6(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$6(o, minLen); }

function _arrayLikeToArray$6(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$6(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$6(arr) { if (Array.isArray(arr)) return arr; }


/**
 * Calculates the rank of any Matrix,
 * which is the dimension of the row space.<br><br>
 * 
 * The rank is cached.
 * @memberof Matrix
 * @instance
 * @returns {number} The rank of the Matrix
 */


function rank() {
  if (this._rank !== undefined) {
    return this._rank;
  }

  var EPSILON = 1 / (Math.pow(10, this._digit) * 2);
  var R = lib$1.QR(this)[1];
  var matrixR = R._matrix;

  var _R$size = R.size(),
      _R$size2 = _slicedToArray$6(_R$size, 2),
      row = _R$size2[0],
      col = _R$size2[1];

  if (row === 0) {
    this._rank = 1;
    return 1;
  }

  var rk = 0;

  for (var i = 0; i < row; i++) {
    for (var j = i; j < col; j++) {
      if (Math.abs(matrixR[i][j]) >= EPSILON) {
        rk++;
        break;
      }
    }
  }

  this._rank = rk;
  return rk;
}
var rank_1 = rank;

/**
 * Calculates the size of any Matrix,
 * which is in the form of [row, column].<br><br>
 * 
 * The size of Matrix is cached.
 * @memberof Matrix
 * @instance
 * @returns {number[]} The number of rows and columns of a Matrix
 */
function size() {
  if (this._size !== undefined) {
    return this._size;
  }

  var A = this._matrix;

  if (A.length === 0) {
    this._size = [0, 0];
    return this._size;
  }

  this._size = [A.length, A[0].length];
  return this._size;
}
var size_1 = size;

var INVALID_SQUARE_MATRIX$3 = _Error.INVALID_SQUARE_MATRIX;
/**
 * Calculates the trace of any square Matrix,
 * which is the sum of all entries on the main diagonal.<br><br>
 * 
 * The trace is cached.
 * @memberof Matrix
 * @instance
 * @returns {number} The trace of the square Matrix.
 */


function trace$1() {
  var isSquare = this._isSquare !== undefined ? this._isSquare : this.isSquare();

  if (!isSquare) {
    throw new Error(INVALID_SQUARE_MATRIX$3);
  }

  if (this._trace !== undefined) {
    return this._trace;
  }

  var A = this._matrix;
  var size = A.length;
  var tr = 0;

  for (var i = 0; i < size; i++) {
    tr += A[i][i];
  }

  this._trace = tr;
  return tr;
}
var trace_1 = trace$1;

function _slicedToArray$7(arr, i) { return _arrayWithHoles$7(arr) || _iterableToArrayLimit$7(arr, i) || _unsupportedIterableToArray$7(arr, i) || _nonIterableRest$7(); }

function _nonIterableRest$7() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$7(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$7(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$7(o, minLen); }

function _arrayLikeToArray$7(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$7(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$7(arr) { if (Array.isArray(arr)) return arr; }

var INVALID_MATRIX = _Error.INVALID_MATRIX,
    SIZE_INCOMPATIBLE = _Error.SIZE_INCOMPATIBLE;
/**
 * Calculates the sum of two Matrices.
 * @memberof Matrix
 * @static
 * @param {Matrix} A - Any Matrix
 * @param {Matrix} B - Any Matrix that has same size with A
 * @returns {Matrix} The sum of two Matrices
 */


function add$1(A, B) {
  if (!(A instanceof this) || !(B instanceof this)) {
    throw new Error(INVALID_MATRIX);
  }

  var _A$size = A.size(),
      _A$size2 = _slicedToArray$7(_A$size, 2),
      row = _A$size2[0],
      col = _A$size2[1];

  var _B$size = B.size(),
      _B$size2 = _slicedToArray$7(_B$size, 2),
      row2 = _B$size2[0],
      col2 = _B$size2[1];

  if (row !== row2 || col !== col2) {
    throw new Error(SIZE_INCOMPATIBLE);
  }

  var matrix1 = A._matrix;
  var matrix2 = B._matrix;
  return this.generate(row, col, function (i, j) {
    return matrix1[i][j] + matrix2[i][j];
  });
}
var add_1$1 = add$1;

var INVALID_MATRIX$1 = _Error.INVALID_MATRIX,
    INVALID_SQUARE_MATRIX$4 = _Error.INVALID_SQUARE_MATRIX,
    SINGULAR_MATRIX$1 = _Error.SINGULAR_MATRIX;


/**
 * Find the inverse of non-singular matrix using Elementary Row Operations.
 * If the matrix is singular, an error is thrown.
 * @memberof Matrix
 * @static
 * @param {Matrix} A - Any square Matrix
 * @returns {Matrix} The inverse of A
 */


function inverse$1(A) {
  if (!(A instanceof this)) {
    throw new Error(INVALID_MATRIX$1);
  }

  if (!A.isSquare()) {
    throw new Error(INVALID_SQUARE_MATRIX$4);
  }

  var size = A.size()[0];

  if (size === 0) {
    // inverse of 0x0 matrix is itself
    return new lib$1([]);
  }

  var EPSILON = 1 / (Math.pow(10, A._digit) * 2);

  var inv = this.identity(size)._matrix;

  var clone = this.clone(A)._matrix;

  var permutation = initPermutation(size); // iterate each column

  for (var j = 0; j < size; j++) {
    var pivotIdx = j;
    var pivot = clone[permutation[j]][j];

    while (Math.abs(pivot) < EPSILON && pivotIdx < size - 1) {
      pivotIdx++;
      pivot = clone[permutation[pivotIdx]][j];
    }

    if (Math.abs(pivot) < EPSILON) {
      throw new Error(SINGULAR_MATRIX$1);
    }

    if (j !== pivotIdx) {
      var temp = permutation[j];
      permutation[j] = permutation[pivotIdx];
      permutation[pivotIdx] = temp;
    }

    var pivotRow = permutation[j]; // the pivot is guaranteed to be non-zero

    for (var i = 0; i < size; i++) {
      var ith = permutation[i];

      if (i === j) {
        for (var k = 0; k < size; k++) {
          if (k === j) {
            clone[ith][k] = 1;
          }

          if (k > j) {
            clone[ith][k] /= pivot;
          }

          inv[ith][k] /= pivot;
        }

        pivot = 1;
      }

      if (i !== j && Math.abs(clone[ith][j]) >= EPSILON) {
        var factor = clone[ith][j] / pivot;

        for (var _k = 0; _k < size; _k++) {
          if (_k === j) {
            clone[ith][_k] = 0;
          }

          if (_k > j) {
            clone[ith][_k] -= factor * clone[pivotRow][_k];
          }

          inv[ith][_k] -= factor * inv[pivotRow][_k];
        }
      }
    }
  }

  for (var _i = 0; _i < size; _i++) {
    clone[_i] = inv[permutation[_i]];
  }

  return new this(clone);
}

function initPermutation(size) {
  var permutation = new Array(size);

  for (var i = 0; i < size; i++) {
    permutation[i] = i;
  }

  return permutation;
}

var inverse_1$1 = inverse$1;

var INVALID_ROW_COL = _Error.INVALID_ROW_COL;

var empty = function empty(row, col) {
  if (!Number.isInteger(row) || row < 0 || !Number.isInteger(col) || col < 0) {
    throw new Error(INVALID_ROW_COL);
  }

  if (row === 0 || col === 0) {
    return [];
  }

  var matrix = new Array(row);

  for (var i = 0; i < row; i++) {
    matrix[i] = new Array(col);
  }

  return matrix;
};

function _slicedToArray$8(arr, i) { return _arrayWithHoles$8(arr) || _iterableToArrayLimit$8(arr, i) || _unsupportedIterableToArray$8(arr, i) || _nonIterableRest$8(); }

function _nonIterableRest$8() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$8(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$8(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$8(o, minLen); }

function _arrayLikeToArray$8(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$8(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$8(arr) { if (Array.isArray(arr)) return arr; }



var INVALID_MATRIX$2 = _Error.INVALID_MATRIX,
    SIZE_INCOMPATIBLE$1 = _Error.SIZE_INCOMPATIBLE;
/**
 * Calculates the product of two Matrices.
 * @memberof Matrix
 * @static
 * @param {Matrix} A - Any Matrix
 * @param {Matrix} B - Any Matrix that is size-compatible with A
 * @returns {Matrix} The product of two Matrices
 */


function multiply$1(A, B) {
  if (!(A instanceof this) || !(B instanceof this)) {
    throw new Error(INVALID_MATRIX$2);
  }

  var _A$size = A.size(),
      _A$size2 = _slicedToArray$8(_A$size, 2),
      Arow = _A$size2[0],
      Acol = _A$size2[1];

  var _B$size = B.size(),
      _B$size2 = _slicedToArray$8(_B$size, 2),
      Brow = _B$size2[0],
      Bcol = _B$size2[1];

  if (Acol !== Brow) {
    throw new Error(SIZE_INCOMPATIBLE$1);
  }

  var matrixA = A._matrix;
  var matrixB = B._matrix;
  var result = empty(Arow, Bcol);

  for (var i = 0; i < Arow; i++) {
    for (var j = 0; j < Bcol; j++) {
      result[i][j] = 0;

      for (var k = 0; k < Brow; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  return new this(result);
}
var multiply_1$1 = multiply$1;

var INVALID_MATRIX$3 = _Error.INVALID_MATRIX,
    INVALID_SQUARE_MATRIX$5 = _Error.INVALID_SQUARE_MATRIX,
    INVALID_EXPONENT = _Error.INVALID_EXPONENT;
/**
 * Calculates the power of any square matrix.
 * The algorithm is implemented recursively.
 * @memberof Matrix
 * @static
 * @param {Matrix} A - Any square Matrix
 * @param {number} exponent - Any Non-negative integer
 * @returns {Matrix} The power of A
 */


function pow$1(A, exponent) {
  if (!(A instanceof this)) {
    throw new Error(INVALID_MATRIX$3);
  }

  if (!A.isSquare()) {
    throw new Error(INVALID_SQUARE_MATRIX$5);
  }

  if (!Number.isInteger(exponent) || exponent < 0) {
    throw new Error(INVALID_EXPONENT);
  }

  var size = A.size()[0];

  if (exponent === 0) {
    return this.identity(size);
  }

  if (exponent === 1) {
    return this.clone(A);
  }

  if (exponent % 2 === 0) {
    var _temp = this.pow(A, exponent / 2);

    return this.multiply(_temp, _temp);
  }

  var temp = this.pow(A, (exponent - 1) / 2);
  return this.multiply(this.multiply(temp, temp), A);
}
var pow_1$1 = pow$1;

function _slicedToArray$9(arr, i) { return _arrayWithHoles$9(arr) || _iterableToArrayLimit$9(arr, i) || _unsupportedIterableToArray$9(arr, i) || _nonIterableRest$9(); }

function _nonIterableRest$9() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$9(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$9(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$9(o, minLen); }

function _arrayLikeToArray$9(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$9(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$9(arr) { if (Array.isArray(arr)) return arr; }

var SIZE_INCOMPATIBLE$2 = _Error.SIZE_INCOMPATIBLE,
    INVALID_MATRIX$4 = _Error.INVALID_MATRIX;
/**
 * Calculates the difference of two Matrices.
 * @memberof Matrix
 * @static
 * @param {Matrix} A - Any Matrix
 * @param {Matrix} B - Any Matrix that has same size with A
 * @returns {Matrix} The difference of two Matrices
 */


var subtract$1 = function subtract(A, B) {
  if (!(A instanceof this) || !(B instanceof this)) {
    throw new Error(INVALID_MATRIX$4);
  }

  var _A$size = A.size(),
      _A$size2 = _slicedToArray$9(_A$size, 2),
      row = _A$size2[0],
      col = _A$size2[1];

  var _B$size = B.size(),
      _B$size2 = _slicedToArray$9(_B$size, 2),
      row2 = _B$size2[0],
      col2 = _B$size2[1];

  if (row !== row2 || col !== col2) {
    throw new Error(SIZE_INCOMPATIBLE$2);
  }

  var matrix1 = A._matrix;
  var matrix2 = B._matrix;
  return this.generate(row, col, function (i, j) {
    return matrix1[i][j] - matrix2[i][j];
  });
};

function _slicedToArray$a(arr, i) { return _arrayWithHoles$a(arr) || _iterableToArrayLimit$a(arr, i) || _unsupportedIterableToArray$a(arr, i) || _nonIterableRest$a(); }

function _nonIterableRest$a() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$a(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$a(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$a(o, minLen); }

function _arrayLikeToArray$a(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$a(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$a(arr) { if (Array.isArray(arr)) return arr; }

var INVALID_MATRIX$5 = _Error.INVALID_MATRIX;
/**
 * Find the transpose of a matrix.
 * @memberof Matrix
 * @static
 * @param { Matrix } A - Any Matrix
 * @returns { Matrix } Returns transpose of A
 */


function transpose$1(A) {
  if (!(A instanceof this)) {
    throw new Error(INVALID_MATRIX$5);
  }

  var _A$size = A.size(),
      _A$size2 = _slicedToArray$a(_A$size, 2),
      row = _A$size2[0],
      col = _A$size2[1];

  var matrix = A._matrix;
  return this.generate(col, row, function (i, j) {
    return matrix[j][i];
  });
}
var transpose_1 = transpose$1;

function _slicedToArray$b(arr, i) { return _arrayWithHoles$b(arr) || _iterableToArrayLimit$b(arr, i) || _unsupportedIterableToArray$b(arr, i) || _nonIterableRest$b(); }

function _nonIterableRest$b() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$b(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$b(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$b(o, minLen); }

function _arrayLikeToArray$b(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$b(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$b(arr) { if (Array.isArray(arr)) return arr; }



var INVALID_MATRIX$6 = _Error.INVALID_MATRIX,
    INVALID_UPPER_TRIANGULAR_MATRIX = _Error.INVALID_UPPER_TRIANGULAR_MATRIX,
    INVALID_SQUARE_MATRIX$6 = _Error.INVALID_SQUARE_MATRIX,
    SIZE_INCOMPATIBLE$3 = _Error.SIZE_INCOMPATIBLE,
    NO_UNIQUE_SOLUTION = _Error.NO_UNIQUE_SOLUTION;
/**
* Solve system of linear equations Ux = y using backward substitution,
* where U is an upper triangular matrix.
* If there is no unique solutions, an error is thrown.
* @memberof Matrix
* @static
* @param {Matrix} U - Any n x n upper triangular Matrix
* @param {Matrix} y - Any n x 1 Matrix
* @returns {Matrix} n x 1 Matrix which is the solution of Ux = y
*/


function backward(U, y) {
  if (!(U instanceof this) || !(y instanceof this)) {
    throw new Error(INVALID_MATRIX$6);
  }

  if (!U.isUpperTriangular()) {
    throw new Error(INVALID_UPPER_TRIANGULAR_MATRIX);
  }

  if (!U.isSquare()) {
    throw new Error(INVALID_SQUARE_MATRIX$6);
  }

  var size = U.size()[0];

  var _y$size = y.size(),
      _y$size2 = _slicedToArray$b(_y$size, 2),
      yrow = _y$size2[0],
      ycol = _y$size2[1];

  var matrixU = U._matrix;
  var matrixY = y._matrix;

  if (yrow !== size || ycol !== 1) {
    throw new Error(SIZE_INCOMPATIBLE$3);
  }

  var EPSILON = 1 / (Math.pow(10, U._digit) * 2);

  for (var i = 0; i < size; i++) {
    if (Math.abs(matrixU[i][i]) < EPSILON) {
      throw new Error(NO_UNIQUE_SOLUTION);
    }
  }

  var coefficients = empty(size, 1);

  for (var _i2 = size - 1; _i2 >= 0; _i2--) {
    var summation = 0;

    for (var j = _i2 + 1; j < size; j++) {
      summation += coefficients[j][0] * matrixU[_i2][j];
    }

    coefficients[_i2][0] = (matrixY[_i2][0] - summation) / matrixU[_i2][_i2];
  }

  return new this(coefficients);
}
var backward_1 = backward;

function _slicedToArray$c(arr, i) { return _arrayWithHoles$c(arr) || _iterableToArrayLimit$c(arr, i) || _unsupportedIterableToArray$c(arr, i) || _nonIterableRest$c(); }

function _nonIterableRest$c() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$c(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$c(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$c(o, minLen); }

function _arrayLikeToArray$c(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$c(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$c(arr) { if (Array.isArray(arr)) return arr; }



var INVALID_MATRIX$7 = _Error.INVALID_MATRIX,
    INVALID_LOWER_TRIANGULAR_MATRIX = _Error.INVALID_LOWER_TRIANGULAR_MATRIX,
    INVALID_SQUARE_MATRIX$7 = _Error.INVALID_SQUARE_MATRIX,
    SIZE_INCOMPATIBLE$4 = _Error.SIZE_INCOMPATIBLE,
    NO_UNIQUE_SOLUTION$1 = _Error.NO_UNIQUE_SOLUTION;
/**
 * Solve system of linear equations Lx = y using forward substitution,
 * where L is a lower triangular matrix.
 * If there is no unique solutions, an error is thrown.
 * @memberof Matrix
 * @static
 * @param {Matrix} L - Any n x n lower triangular Matrix
 * @param {Matrix} y - Any n x 1 Matrix
 * @returns {Matrix} n x 1 Matrix which is the solution of Lx = y
 */


function forward(L, y) {
  if (!(L instanceof this) || !(y instanceof this)) {
    throw new Error(INVALID_MATRIX$7);
  }

  if (!L.isLowerTriangular()) {
    throw new Error(INVALID_LOWER_TRIANGULAR_MATRIX);
  }

  if (!L.isSquare()) {
    throw new Error(INVALID_SQUARE_MATRIX$7);
  }

  var size = L.size()[0];

  var _y$size = y.size(),
      _y$size2 = _slicedToArray$c(_y$size, 2),
      yrow = _y$size2[0],
      ycol = _y$size2[1];

  var matrixL = L._matrix;
  var matrixY = y._matrix;

  if (size !== yrow || ycol !== 1) {
    throw new Error(SIZE_INCOMPATIBLE$4);
  }

  var EPSILON = 1 / (Math.pow(10, L._digit) * 2);

  for (var i = 0; i < size; i++) {
    if (Math.abs(matrixL[i][i]) < EPSILON) {
      throw new Error(NO_UNIQUE_SOLUTION$1);
    }
  }

  var coefficients = empty(size, 1);

  for (var _i2 = 0; _i2 < size; _i2++) {
    var summation = 0;

    for (var j = 0; j < _i2; j++) {
      summation += coefficients[j][0] * matrixL[_i2][j];
    }

    coefficients[_i2][0] = (matrixY[_i2][0] - summation) / matrixL[_i2][_i2];
  }

  return new this(coefficients);
}
var forward_1 = forward;

function _slicedToArray$d(arr, i) { return _arrayWithHoles$d(arr) || _iterableToArrayLimit$d(arr, i) || _unsupportedIterableToArray$d(arr, i) || _nonIterableRest$d(); }

function _nonIterableRest$d() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$d(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$d(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$d(o, minLen); }

function _arrayLikeToArray$d(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$d(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$d(arr) { if (Array.isArray(arr)) return arr; }

var INVALID_MATRIX$8 = _Error.INVALID_MATRIX,
    NO_UNIQUE_SOLUTION$2 = _Error.NO_UNIQUE_SOLUTION,
    INVALID_SQUARE_MATRIX$8 = _Error.INVALID_SQUARE_MATRIX,
    SIZE_INCOMPATIBLE$5 = _Error.SIZE_INCOMPATIBLE;
/**
 * Solve system of linear equations Ax = y using LU decomposition.
 * If there is no unique solutions, an error is thrown.
 * @memberof Matrix
 * @static
 * @param {Matrix} L - Any n x n square Matrix
 * @param {Matrix} y - Any n x 1 Matrix
 * @returns {Matrix} n x 1 Matrix which is the solution of Ax = y
 */


function solve(A, b) {
  if (!(A instanceof this) || !(b instanceof this)) {
    throw new Error(INVALID_MATRIX$8);
  }

  if (!A.isSquare()) {
    throw new Error(INVALID_SQUARE_MATRIX$8);
  }

  var _A$size = A.size(),
      _A$size2 = _slicedToArray$d(_A$size, 2),
      aRow = _A$size2[0],
      aCol = _A$size2[1];

  var _b$size = b.size(),
      _b$size2 = _slicedToArray$d(_b$size, 2),
      bRow = _b$size2[0],
      bCol = _b$size2[1];

  if (aCol !== bRow || bCol !== 1) {
    throw new Error(SIZE_INCOMPATIBLE$5);
  }

  var EPSILON = 1 / (Math.pow(10, A._digit) * 2);

  var _this$LU = this.LU(A, true),
      _this$LU2 = _slicedToArray$d(_this$LU, 2),
      P = _this$LU2[0],
      LU = _this$LU2[1];

  var matrixLU = LU._matrix;
  var matrixB = b._matrix;

  for (var i = aRow - 1; i >= 0; i--) {
    if (Math.abs(matrixLU[i][i]) < EPSILON) {
      throw new Error(NO_UNIQUE_SOLUTION$2);
    }
  }

  var clonedVector = new Array(bRow);
  var coefficients = new Array(bRow);

  for (var _i2 = 0; _i2 < bRow; _i2++) {
    // eslint-disable-next-line prefer-destructuring
    clonedVector[_i2] = matrixB[P[_i2]][0];
  }

  for (var _i3 = 0; _i3 < aRow; _i3++) {
    var summation = 0;

    for (var j = 0; j < _i3; j++) {
      summation += coefficients[j] * matrixLU[_i3][j];
    }

    coefficients[_i3] = clonedVector[_i3] - summation;
  }

  for (var _i4 = aRow - 1; _i4 >= 0; _i4--) {
    var _summation = 0;

    for (var _j = _i4 + 1; _j < aRow; _j++) {
      _summation += matrixLU[_i4][_j] * clonedVector[_j];
    }

    clonedVector[_i4] = (coefficients[_i4] - _summation) / matrixLU[_i4][_i4];
  }

  for (var _i5 = 0; _i5 < bRow; _i5++) {
    coefficients[_i5] = [clonedVector[_i5]];
  }

  return new this(coefficients);
}
var solve_1 = solve;

function _slicedToArray$e(arr, i) { return _arrayWithHoles$e(arr) || _iterableToArrayLimit$e(arr, i) || _unsupportedIterableToArray$e(arr, i) || _nonIterableRest$e(); }

function _nonIterableRest$e() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$e(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$e(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$e(o, minLen); }

function _arrayLikeToArray$e(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$e(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$e(arr) { if (Array.isArray(arr)) return arr; }

var INVALID_MATRIX$9 = _Error.INVALID_MATRIX;
/**
 * Calculates the LUP decomposition of the Matrix,
 * where L is lower triangular matrix which diagonal entries are always 1,
 * U is upper triangular matrix, and P is permutation matrix.<br><br>
 * 
 * It is implemented using Gaussian Elimination with Partial Pivoting in order to
 * reduce the error caused by floating-point arithmetic.<br><br>
 * 
 * Note that if optimized is true, P is a Permutation Array and both L and U are merged
 * into one matrix in order to improve performance.
 * @memberof Matrix
 * @static
 * @param {Matrix} A - Any matrix
 * @param {boolean} [optimized=false] - Returns [P, LU] if it is true, [P, L, U] if it is false
 * @returns {Matrix[]} The LUP decomposition of Matrix
 */


function LU(A) {
  var optimized = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!(A instanceof this)) {
    throw new Error(INVALID_MATRIX$9);
  }

  var _A$size = A.size(),
      _A$size2 = _slicedToArray$e(_A$size, 2),
      row = _A$size2[0],
      col = _A$size2[1];

  var size = Math.min(row, col);
  var EPSILON = 1 / (Math.pow(10, A._digit) * 2);
  var permutation = initPermutation$1(row);

  var copy = this.clone(A)._matrix;

  for (var i = 0; i < row - 1; i++) {
    var currentCol = Math.min(i, col); // apply Partial Pivoting

    PartialPivoting(copy, permutation, currentCol, row, col);
    var ith = permutation[i];
    var pivot = copy[ith][currentCol];

    if (Math.abs(pivot) < EPSILON) {
      continue;
    }

    for (var j = i + 1; j < row; j++) {
      var jth = permutation[j];
      var entry = copy[jth][currentCol];

      if (Math.abs(entry) >= EPSILON) {
        var factor = entry / pivot;

        for (var k = currentCol; k < col; k++) {
          copy[jth][k] -= factor * copy[ith][k];
        }

        copy[jth][currentCol] = factor;
      }
    }
  }

  var result = new Array(row);

  for (var _i2 = 0; _i2 < row; _i2++) {
    result[_i2] = copy[permutation[_i2]];
  }

  if (optimized) {
    return [permutation, new this(result)];
  }

  var P = this.generate(row, row, function (i, j) {
    var idx = permutation[i];

    if (j === idx) {
      return 1;
    }

    return 0;
  });
  var L = this.generate(row, size, function (i, j) {
    if (i === j) {
      return 1;
    }

    if (i < j) {
      return 0;
    }

    return result[i][j];
  });
  var U = this.generate(size, col, function (i, j) {
    if (i > j) {
      return 0;
    }

    return result[i][j];
  });
  return [P, L, U];
}

function initPermutation$1(size) {
  var permutation = new Array(size);

  for (var i = 0; i < size; i++) {
    permutation[i] = i;
  }

  return permutation;
}

function PartialPivoting(matrix, permutation, pos, row, col) {
  var currentCol = Math.min(pos, col);
  var maxIdx = pos;
  var max = Math.abs(matrix[permutation[pos]][currentCol]);

  for (var i = pos + 1; i < row; i++) {
    var value = Math.abs(matrix[permutation[i]][currentCol]);

    if (value > max) {
      maxIdx = i;
      max = value;
    }
  }

  var t = permutation[pos];
  permutation[pos] = permutation[maxIdx];
  permutation[maxIdx] = t;
}

var LU_1 = LU;

function _slicedToArray$f(arr, i) { return _arrayWithHoles$f(arr) || _iterableToArrayLimit$f(arr, i) || _unsupportedIterableToArray$f(arr, i) || _nonIterableRest$f(); }

function _nonIterableRest$f() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$f(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$f(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$f(o, minLen); }

function _arrayLikeToArray$f(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$f(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$f(arr) { if (Array.isArray(arr)) return arr; }

var INVALID_MATRIX$a = _Error.INVALID_MATRIX;
/**
 * Calculates the QR decomposition of the Matrix
 * where Q is orthogonal matrix, R is upper triangular matrix.<br><br>
 * 
 * The algorithm is implemented using Householder Transform instead of Gram–Schmidt process
 * because the Householder Transform is more numerically stable.
 * @memberof Matrix
 * @static
 * @param {Matrix} A - Any matrix
 * @returns {Matrix[]} The QR decomposition of matrix in the form of [Q, R]
 */


function QR(A) {
  if (!(A instanceof this)) {
    throw new Error(INVALID_MATRIX$a);
  }

  var _A$size = A.size(),
      _A$size2 = _slicedToArray$f(_A$size, 2),
      row = _A$size2[0],
      col = _A$size2[1];

  var size = Math.min(row, col);
  var EPSILON = 1 / (Math.pow(10, A._digit) * 2);

  var matrixR = this.clone(A)._matrix;

  var matrixQ = this.identity(row)._matrix;

  for (var j = 0; j < size; j++) {
    // if all entries below main diagonal are considered as zero, skip this round
    var skip = true;

    for (var i = j + 1; i < row; i++) {
      if (Math.abs(matrixR[i][j]) >= EPSILON) {
        skip = false;
        break;
      }
    }

    if (!skip) {
      // Apply Householder transform
      var norm = 0;

      for (var _i2 = j; _i2 < row; _i2++) {
        norm += Math.pow(matrixR[_i2][j], 2);
      }

      norm = Math.sqrt(norm); // reduce floating point arithmatic error

      var s = -1;

      if (matrixR[j][j] < 0) {
        s = 1;
      }

      var u1 = matrixR[j][j] - s * norm;
      var w = new Array(row - j);

      for (var _i3 = 0; _i3 < row - j; _i3++) {
        w[_i3] = matrixR[_i3 + j][j] / u1;
      }

      w[0] = 1;
      var tau = -1 * s * u1 / norm;
      var subR = new Array(row - j);

      for (var _i4 = 0; _i4 < row - j; _i4++) {
        var newRow = new Array(col);

        for (var k = 0; k < col; k++) {
          newRow[k] = matrixR[j + _i4][k];
        }

        subR[_i4] = newRow;
      }

      for (var _i5 = j; _i5 < row; _i5++) {
        for (var _k = 0; _k < col; _k++) {
          var summation = 0;

          for (var m = 0; m < row - j; m++) {
            summation += subR[m][_k] * w[m];
          }

          matrixR[_i5][_k] = subR[_i5 - j][_k] - tau * w[_i5 - j] * summation;
        }
      }

      var subQ = new Array(row);

      for (var _i6 = 0; _i6 < row; _i6++) {
        var _newRow = new Array(row - j);

        for (var _k2 = 0; _k2 < row - j; _k2++) {
          _newRow[_k2] = matrixQ[_i6][j + _k2];
        }

        subQ[_i6] = _newRow;
      }

      for (var _i7 = 0; _i7 < row; _i7++) {
        for (var _k3 = j; _k3 < row; _k3++) {
          var _summation = 0;

          for (var _m = 0; _m < row - j; _m++) {
            _summation += subQ[_i7][_m] * w[_m];
          }

          matrixQ[_i7][_k3] = subQ[_i7][_k3 - j] - tau * w[_k3 - j] * _summation;
        }
      }
    }
  }

  for (var _i8 = 0; _i8 < row; _i8++) {
    for (var _j = 0; _j < col; _j++) {
      if (_i8 > _j) {
        matrixR[_i8][_j] = 0;
      }
    }
  }

  return [new this(matrixQ), new this(matrixR)];
}
var QR_1 = QR;

function _slicedToArray$g(arr, i) { return _arrayWithHoles$g(arr) || _iterableToArrayLimit$g(arr, i) || _unsupportedIterableToArray$g(arr, i) || _nonIterableRest$g(); }

function _nonIterableRest$g() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$g(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$g(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$g(o, minLen); }

function _arrayLikeToArray$g(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$g(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$g(arr) { if (Array.isArray(arr)) return arr; }

var INVALID_MATRIX$b = _Error.INVALID_MATRIX;
/**
 * Creates a copy of Matrix. Note that it resets the cached data.
 * @memberof Matrix
 * @static
 * @param {Matrix} A - Any Matrix
 * @returns {Matrix} Copy of A
 */


function clone(A) {
  if (!(A instanceof this)) {
    throw new Error(INVALID_MATRIX$b);
  }

  var _A$size = A.size(),
      _A$size2 = _slicedToArray$g(_A$size, 2),
      row = _A$size2[0],
      col = _A$size2[1];

  var matrix = A._matrix;
  return this.generate(row, col, function (i, j) {
    return matrix[i][j];
  });
}
var clone_1 = clone;

function _slicedToArray$h(arr, i) { return _arrayWithHoles$h(arr) || _iterableToArrayLimit$h(arr, i) || _unsupportedIterableToArray$h(arr, i) || _nonIterableRest$h(); }

function _nonIterableRest$h() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$h(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$h(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$h(o, minLen); }

function _arrayLikeToArray$h(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$h(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$h(arr) { if (Array.isArray(arr)) return arr; }

var INVALID_ROW_COL$1 = _Error.INVALID_ROW_COL,
    OVERFLOW_COLUMN = _Error.OVERFLOW_COLUMN,
    INVALID_MATRIX$c = _Error.INVALID_MATRIX;
/**
 * Gets the column of a Matrix with valid index.
 * @memberof Matrix
 * @static
 * @param {Matrix} A - Any Matrix
 * @param {number} index - Any valid column index
 * @returns {Matrix} Column of A
 */


function column(A, index) {
  if (!(A instanceof this)) {
    throw new Error(INVALID_MATRIX$c);
  }

  if (!Number.isInteger(index) || index < 0) {
    throw new Error(INVALID_ROW_COL$1);
  }

  var _A$size = A.size(),
      _A$size2 = _slicedToArray$h(_A$size, 2),
      r = _A$size2[0],
      c = _A$size2[1];

  if (index >= c) {
    throw new Error(OVERFLOW_COLUMN);
  }

  var matrix = A._matrix;
  return this.generate(r, 1, function (i) {
    return matrix[i][index];
  });
}
var column_1 = column;

var INVALID_ARRAY = _Error.INVALID_ARRAY,
    EXPECTED_ARRAY_OF_NUMBERS_OR_MATRICES = _Error.EXPECTED_ARRAY_OF_NUMBERS_OR_MATRICES,
    INVALID_SQUARE_MATRIX$9 = _Error.INVALID_SQUARE_MATRIX;
/**
 * Generates diagonal Matrix if the argument is an array of numbers,
 * generates block diagonal Matrix if the argument is an array of Matrices.
 * @memberof Matrix
 * @static
 * @param {(number[]|Matrix[])} values - Array of numbers or Matrices
 * @returns {Matrix} Block diagonal Matrix
 */


function diag$1(values) {
  if (!Array.isArray(values)) {
    throw new Error(INVALID_ARRAY);
  }

  var argsNum = values.length;
  var variant;

  for (var i = 0; i < argsNum; i++) {
    var entry = values[i];

    if (!isNumber(entry) && !(entry instanceof lib$1)) {
      throw new Error(EXPECTED_ARRAY_OF_NUMBERS_OR_MATRICES);
    }

    if (isNumber(entry)) {
      if (!variant) {
        variant = 'number';
        continue;
      }

      if (variant !== 'number') {
        throw new Error(EXPECTED_ARRAY_OF_NUMBERS_OR_MATRICES);
      }
    } else {
      if (!entry.isSquare()) {
        throw new Error(INVALID_SQUARE_MATRIX$9);
      }

      if (!variant) {
        variant = 'square';
        continue;
      }

      if (variant !== 'square') {
        throw new Error(EXPECTED_ARRAY_OF_NUMBERS_OR_MATRICES);
      }
    }
  } // HERE: variant should be either 'number' or 'square'


  if (variant === 'number') {
    return lib$1.generate(argsNum, argsNum, function (i, j) {
      if (i === j) {
        return values[i];
      }

      return 0;
    });
  } // Guaranteed that [values] is a list of square matrices


  var size = 0;
  var temp = new Array(argsNum);

  for (var _i = 0; _i < argsNum; _i++) {
    var _len = values[_i].size()[0];

    size += _len;
    temp[_i] = _len;
  }

  var idx = 0;
  var start = 0;
  var len = temp[idx];
  return lib$1.generate(size, size, function (i, j) {
    if (i - start === len && j - start === len) {
      start += len;
      idx++;
    }

    var ith = i - start; // ith < 0 if below main diagonal

    var jth = j - start; // jth < 0 if above main diagonal
    // skip 0x0 matrices

    len = temp[idx];

    while (len === 0) {
      idx++;
      len = temp[idx];
    }

    if (ith < len && ith >= 0 && jth < len && jth >= 0) {
      return values[idx]._matrix[ith][jth];
    }

    return 0;
  });
}
var diag_1 = diag$1;

function _slicedToArray$i(arr, i) { return _arrayWithHoles$i(arr) || _iterableToArrayLimit$i(arr, i) || _unsupportedIterableToArray$i(arr, i) || _nonIterableRest$i(); }

function _nonIterableRest$i() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$i(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$i(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$i(o, minLen); }

function _arrayLikeToArray$i(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$i(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$i(arr) { if (Array.isArray(arr)) return arr; }

var INVALID_MATRIX$d = _Error.INVALID_MATRIX;
/**
 * This callback applies on each entry of a Matrix
 * @callback entryCallback
 * @param {number} entry - Entry of a Matrix
 * @returns {number} New entry value
 */

/**
 * Applys a function over each entry of a Matrix and returns
 * a new copy of the new Matrix.
 * @memberof Matrix
 * @static
 * @param {Matrix} A - Any Matrix
 * @param {entryCallback} cb - Callback function which applies on each entry of A
 * @returns {Matrix} A copy of new Matrix
 */


function elementwise(A, cb) {
  if (!(A instanceof this)) {
    throw new Error(INVALID_MATRIX$d);
  }

  var _A$size = A.size(),
      _A$size2 = _slicedToArray$i(_A$size, 2),
      row = _A$size2[0],
      col = _A$size2[1];

  var matrix = A._matrix;
  return this.generate(row, col, function (i, j) {
    return cb(matrix[i][j]);
  });
}
var elementwise_1 = elementwise;

/**
 * This callback generates each entry of a Matrix
 * @callback generateCallback
 * @param {number} i - The i-th row of Matrix 
 * @param {number} j - The j-th column of Matrix 
 * @returns {number} Entry of Matrix
 */

/**
 * Generates a Matrix which entries are the returned value of callback function.
 * @memberof Matrix
 * @static
 * @param {number} row - Number of rows of Matrix
 * @param {number} col - Number of columns of Matrix
 * @param {generateCallback} cb - Callback function which takes row and column as arguments
 * and generates the corresponding entry
 * @returns {Matrix} - Generated Matrix
 */


function generate(row, col, cb) {
  var matrix = empty(row, col);

  if (row === 0 || col === 0) {
    return new this([]);
  }

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      matrix[i][j] = cb(i, j);
    }
  }

  return new this(matrix);
}
var generate_1 = generate;

function _slicedToArray$j(arr, i) { return _arrayWithHoles$j(arr) || _iterableToArrayLimit$j(arr, i) || _unsupportedIterableToArray$j(arr, i) || _nonIterableRest$j(); }

function _nonIterableRest$j() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$j(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$j(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$j(o, minLen); }

function _arrayLikeToArray$j(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$j(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$j(arr) { if (Array.isArray(arr)) return arr; }

var INVALID_MATRIX$e = _Error.INVALID_MATRIX;
/**
 * Gets the entries on the main diagonal.
 * @memberof Matrix
 * @static
 * @param {Matrix} A - Any Matrix
 * @returns {number[]} Array of entries of A on the main diagonal
 */


function getDiag(A) {
  if (!(A instanceof this)) {
    throw new Error(INVALID_MATRIX$e);
  }

  var _A$size = A.size(),
      _A$size2 = _slicedToArray$j(_A$size, 2),
      row = _A$size2[0],
      col = _A$size2[1];

  var size = Math.min(row, col);
  var matrix = A._matrix;
  var diags = new Array(size);

  for (var i = 0; i < size; i++) {
    diags[i] = matrix[i][i];
  }

  return diags;
}
var getDiag_1 = getDiag;

/**
 * Generates a random Matrix.
 * @memberof Matrix
 * @static
 * @param {number} row - Number of rows of a Matrix
 * @param {number} col - Number of columns of a Matrix
 * @param {number} min - Lower bound of each entry
 * @param {number} max - Upper bound of each entry
 * @param {number} toFixed - Number of decimal places
 * @returns {Matrix} Generated random Matrix
 */
function getRandomMatrix(row, col) {
  var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var max = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var toFixed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  return this.generate(row, col, function () {
    return Number.parseFloat((Math.random() * (max - min) + min).toFixed(toFixed));
  });
}
var getRandomMatrix_1 = getRandomMatrix;

/**
 * Generates identity Matrix with given size.
 * @memberof Matrix
 * @static
 * @param {number} size - The size of Matrix
 * @returns {Matrix} Identity Matrix
 */
function identity$1(size) {
  return this.generate(size, size, function (i, j) {
    if (i === j) {
      return 1;
    }

    return 0;
  });
}
var identity_1 = identity$1;

function _slicedToArray$k(arr, i) { return _arrayWithHoles$k(arr) || _iterableToArrayLimit$k(arr, i) || _unsupportedIterableToArray$k(arr, i) || _nonIterableRest$k(); }

function _nonIterableRest$k() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$k(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$k(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$k(o, minLen); }

function _arrayLikeToArray$k(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$k(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$k(arr) { if (Array.isArray(arr)) return arr; }

var INVALID_MATRIX$f = _Error.INVALID_MATRIX;
/**
 * Determines whether two Matrices are considered as equal.<br><br>
 * 
 * The test criterion is Math.abs(x - y) < 1 / (10 ** digit * 2).
 * For default value 5, it should be 5e-5.
 * That means if the difference of two numbers is less than 5e-5,
 * they are considered as same value.
 * @memberof Matrix
 * @static
 * @param {Matrix} A - Any Matrix
 * @param {Matrix} B - Any Matrix
 * @param {number} digit - Number of significant digits
 * @returns {boolean} Returns true if two Matrices are considered as same
 */


function isEqual$1(A, B) {
  var digit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;

  if (!(A instanceof this) || !(B instanceof this)) {
    throw new Error(INVALID_MATRIX$f);
  }

  var _A$size = A.size(),
      _A$size2 = _slicedToArray$k(_A$size, 2),
      Arow = _A$size2[0],
      Acol = _A$size2[1];

  var _B$size = B.size(),
      _B$size2 = _slicedToArray$k(_B$size, 2),
      Brow = _B$size2[0],
      Bcol = _B$size2[1];

  if (Arow !== Brow || Acol !== Bcol) {
    return false;
  }

  var EPISILON = 1 / (Math.pow(10, digit) * 2);
  var matrixA = A._matrix;
  var matrixB = B._matrix;

  for (var i = 0; i < Arow; i++) {
    for (var j = 0; j < Acol; j++) {
      if (Math.abs(matrixA[i][j] - matrixB[i][j]) >= EPISILON) {
        return false;
      }
    }
  }

  return true;
}
var isEqual_1$1 = isEqual$1;

function _slicedToArray$l(arr, i) { return _arrayWithHoles$l(arr) || _iterableToArrayLimit$l(arr, i) || _unsupportedIterableToArray$l(arr, i) || _nonIterableRest$l(); }

function _nonIterableRest$l() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$l(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$l(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$l(o, minLen); }

function _arrayLikeToArray$l(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$l(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$l(arr) { if (Array.isArray(arr)) return arr; }

var INVALID_ROW_COL$2 = _Error.INVALID_ROW_COL,
    OVERFLOW_ROW = _Error.OVERFLOW_ROW,
    INVALID_MATRIX$g = _Error.INVALID_MATRIX;
/**
 * Gets the row of a Matrix with valid index.
 * @memberof Matrix
 * @static
 * @param {Matrix} A - Any Matrix
 * @param {number} index - Any valid row index
 * @returns {Matrix} Row of A
 */


function row(A, index) {
  if (!(A instanceof this)) {
    throw new Error(INVALID_MATRIX$g);
  }

  if (!Number.isInteger(index) || index < 0) {
    throw new Error(INVALID_ROW_COL$2);
  }

  var _A$size = A.size(),
      _A$size2 = _slicedToArray$l(_A$size, 2),
      r = _A$size2[0],
      c = _A$size2[1];

  if (index >= r) {
    throw new Error(OVERFLOW_ROW);
  }

  var matrix = A._matrix;
  return this.generate(1, c, function (i, j) {
    return matrix[index][j];
  });
}
var row_1 = row;

function _slicedToArray$m(arr, i) { return _arrayWithHoles$m(arr) || _iterableToArrayLimit$m(arr, i) || _unsupportedIterableToArray$m(arr, i) || _nonIterableRest$m(); }

function _nonIterableRest$m() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$m(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$m(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$m(o, minLen); }

function _arrayLikeToArray$m(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$m(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$m(arr) { if (Array.isArray(arr)) return arr; }

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

var INVALID_MATRIX$h = _Error.INVALID_MATRIX,
    EXPECTED_STRING_NUMBER_AT_POS_1_2 = _Error.EXPECTED_STRING_NUMBER_AT_POS_1_2,
    INVALID_ROW = _Error.INVALID_ROW,
    INVALID_COLUMN = _Error.INVALID_COLUMN,
    OVERFLOW_ROW$1 = _Error.OVERFLOW_ROW,
    INVALID_ROWS_EXPRESSION = _Error.INVALID_ROWS_EXPRESSION,
    INVALID_COLUMNS_EXPRESSION = _Error.INVALID_COLUMNS_EXPRESSION,
    OVERFLOW_COLUMN$1 = _Error.OVERFLOW_COLUMN;
/**
 * Generates a submatrix of a matrix.
 * @memberof Matrix
 * @static
 * @param {Matrix} A - Any matrix
 * @param {string|number} rows - Rows expression
 * @param {string|number} cols - Columns expression
 * @returns {Matrix} Submatrix of A
 */


function submatrix(A, rows, cols) {
  if (!(A instanceof this)) {
    throw new Error(INVALID_MATRIX$h);
  }

  var arg1Type = _typeof$1(rows);

  var arg2Type = _typeof$1(cols);

  if (arg1Type !== 'string' && arg1Type !== 'number' || arg2Type !== 'string' && arg2Type !== 'number') {
    throw new Error(EXPECTED_STRING_NUMBER_AT_POS_1_2);
  }

  var _A$size = A.size(),
      _A$size2 = _slicedToArray$m(_A$size, 2),
      row = _A$size2[0],
      col = _A$size2[1];

  var rowStart;
  var rowEnd;
  var colStart;
  var colEnd;

  if (arg1Type === 'number') {
    if (!Number.isInteger(rows) || rows < 0) {
      throw new Error(INVALID_ROW);
    }

    if (rows >= row) {
      throw new Error(OVERFLOW_ROW$1);
    }

    rowStart = rows;
    rowEnd = rows;
  } else {
    // string
    var arg = rows.split(':');

    if (arg.length !== 2) {
      throw new Error(INVALID_ROWS_EXPRESSION);
    }

    var _arg = _slicedToArray$m(arg, 2),
        r1 = _arg[0],
        r2 = _arg[1];

    if (r1 === '') {
      rowStart = 0;
    } else {
      var r = Number(r1);

      if (!Number.isInteger(r) || r < 0) {
        throw new Error(INVALID_ROW);
      }

      if (r >= row) {
        throw new Error(OVERFLOW_ROW$1);
      }

      rowStart = r;
    }

    if (r2 === '') {
      rowEnd = row - 1;
    } else {
      var _r = Number(r2);

      if (!Number.isInteger(_r) || _r < 0) {
        throw new Error(INVALID_ROW);
      }

      if (_r >= row) {
        throw new Error(OVERFLOW_ROW$1);
      }

      rowEnd = _r;
    }

    if (rowStart > rowEnd) {
      throw new Error(INVALID_ROWS_EXPRESSION);
    }
  }

  if (arg2Type === 'number') {
    if (!Number.isInteger(cols) || cols < 0) {
      throw new Error(INVALID_COLUMN);
    }

    if (cols >= col) {
      throw new Error(OVERFLOW_COLUMN$1);
    }

    colStart = cols;
    colEnd = cols;
  } else {
    // string
    var _arg2 = cols.split(':');

    if (_arg2.length !== 2) {
      throw new Error(INVALID_COLUMNS_EXPRESSION);
    }

    var _arg3 = _slicedToArray$m(_arg2, 2),
        c1 = _arg3[0],
        c2 = _arg3[1];

    if (c1 === '') {
      colStart = 0;
    } else {
      var c = Number(c1);

      if (!Number.isInteger(c) || c < 0) {
        throw new Error(INVALID_COLUMN);
      }

      if (c >= col) {
        throw new Error(OVERFLOW_COLUMN$1);
      }

      colStart = c;
    }

    if (c2 === '') {
      colEnd = col - 1;
    } else {
      var _c = Number(c2);

      if (!Number.isInteger(_c) || _c < 0) {
        throw new Error(INVALID_COLUMN);
      }

      if (_c >= col) {
        throw new Error(OVERFLOW_COLUMN$1);
      }

      colEnd = _c;
    }

    if (colStart > colEnd) {
      throw new Error(INVALID_COLUMNS_EXPRESSION);
    }
  }

  var matrix = A._matrix;
  var subRow = rowEnd - rowStart + 1;
  var subCol = colEnd - colStart + 1;
  var subMatrix = new Array(subRow);

  for (var i = rowStart; i <= rowEnd; i++) {
    var newRow = new Array(subCol);

    for (var j = colStart; j <= colEnd; j++) {
      newRow[j - colStart] = matrix[i][j];
    }

    subMatrix[i - rowStart] = newRow;
  }

  return new this(subMatrix);
}
var submatrix_1 = submatrix;

/**
 * Generates a zero Matrix
 * @memberof Matrix
 * @static
 * @param {number} row - Number of rows of the Matrix
 * @param {number} col - Number of columns of the Matrix
 * @returns {Matrix} Zero Matrix
 */
function zero(row, col) {
  if (col === undefined) {
    return this.generate(row, row, function () {
      return 0;
    });
  }

  return this.generate(row, col, function () {
    return 0;
  });
}
var zero_1 = zero;

function _slicedToArray$n(arr, i) { return _arrayWithHoles$n(arr) || _iterableToArrayLimit$n(arr, i) || _unsupportedIterableToArray$n(arr, i) || _nonIterableRest$n(); }

function _nonIterableRest$n() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$n(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$n(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$n(o, minLen); }

function _arrayLikeToArray$n(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$n(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$n(arr) { if (Array.isArray(arr)) return arr; }

var INVALID_ROW_COL$3 = _Error.INVALID_ROW_COL,
    OVERFLOW_INDEX = _Error.OVERFLOW_INDEX;
/**
 * Gets the entry of a Matrix.
 * @memberof Matrix
 * @instance
 * @param {number} row - Any valid row index
 * @param {number} col - Any valid column index
 * @returns {number} Entry of the Matrix
 */


function entry(row, col) {
  if (!Number.isInteger(row) || row < 0 || !Number.isInteger(col) || col < 0) {
    throw new Error(INVALID_ROW_COL$3);
  }

  var A = this._matrix;

  var _this$size = this.size(),
      _this$size2 = _slicedToArray$n(_this$size, 2),
      r = _this$size2[0],
      c = _this$size2[1];

  if (row >= r || col >= c) {
    throw new Error(OVERFLOW_INDEX);
  }

  return A[row][col];
}
var entry_1 = entry;

function _slicedToArray$o(arr, i) { return _arrayWithHoles$o(arr) || _iterableToArrayLimit$o(arr, i) || _unsupportedIterableToArray$o(arr, i) || _nonIterableRest$o(); }

function _nonIterableRest$o() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$o(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$o(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$o(o, minLen); }

function _arrayLikeToArray$o(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$o(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$o(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Gets the stringified Matrix
 * @memberof Matrix
 * @instance
 * @returns {string} Stringified Matrix
 */
function toString$1() {
  var matrix = this._matrix;

  var _this$size = this.size(),
      _this$size2 = _slicedToArray$o(_this$size, 2),
      row = _this$size2[0],
      col = _this$size2[1];

  var str = '';

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      str += matrix[i][j].toString();

      if (j !== col - 1) {
        str += ' ';
      }
    }

    if (i !== row - 1) {
      str += '\n';
    }
  }

  return str;
}
var toString_1$1 = toString$1;

var INVALID_MATRIX$i = _Error.INVALID_MATRIX;
/**
 * Creates a new Matrix
 * @namespace Matrix
 * @class
 * @param {number[][]} A - Two dimensional array where
 * A[i][j] represents the i-th row and j-th column of a matrix
 */


function Matrix(A) {
  if (!isMatrix(A)) {
    throw new Error(INVALID_MATRIX$i);
  }

  this._matrix = A;
  this._digit = 8;
}

var lib$1 = Matrix; // structure

Matrix.prototype.isDiagonal = isDiagonal_1;
Matrix.prototype.isSkewSymmetric = isSkewSymmetric_1;
Matrix.prototype.isSquare = isSquare_1;
Matrix.prototype.isSymmetric = isSymmetric_1;
Matrix.prototype.isLowerTriangular = isLowerTriangular_1;
Matrix.prototype.isUpperTriangular = isUpperTriangular_1;
Matrix.prototype.isOrthogonal = isOrthogonal_1; // property

Matrix.prototype.cond = cond_1;
Matrix.prototype.det = det_1;
Matrix.prototype.eigenvalues = eigenvalues_1;
Matrix.prototype.nullity = nullity_1;
Matrix.prototype.norm = norm_1;
Matrix.prototype.rank = rank_1;
Matrix.prototype.size = size_1;
Matrix.prototype.trace = trace_1; // operations

Matrix.add = add_1$1;
Matrix.inverse = inverse_1$1;
Matrix.multiply = multiply_1$1;
Matrix.pow = pow_1$1;
Matrix.subtract = subtract$1;
Matrix.transpose = transpose_1; // Linear-equations

Matrix.backward = backward_1;
Matrix.forward = forward_1;
Matrix.solve = solve_1; // decompositions

Matrix.LU = LU_1;
Matrix.QR = QR_1; // utils

Matrix.clone = clone_1;
Matrix.column = column_1;
Matrix.diag = diag_1;
Matrix.elementwise = elementwise_1;
Matrix.generate = generate_1;
Matrix.getDiag = getDiag_1;
Matrix.getRandomMatrix = getRandomMatrix_1;
Matrix.identity = identity_1;
Matrix.isEqual = isEqual_1$1;
Matrix.row = row_1;
Matrix.submatrix = submatrix_1;
Matrix.zero = zero_1;
Matrix.prototype.entry = entry_1;
Matrix.prototype.toString = toString_1$1;

const tolerance = 0.1;



const checkDefinitePositive = function (covariance, tolerance = 1e-10) {
	const covarianceMatrix = new lib$1(covariance);
	const eigenvalues = covarianceMatrix.eigenvalues();
	eigenvalues.forEach(eigenvalue => {
		if (eigenvalue <= -tolerance) {
			console.log(covariance, eigenvalue);
			throw new Error(`Eigenvalue should be positive (actual: ${eigenvalue})`);
		}
	});
	console.log('is definite positive', covariance);
};

const checkSymetric = function (covariance, title = 'checkSymetric') {
	covariance.forEach((row, rowId) => row.forEach((item, colId) => {
		if (rowId === colId && item < 0) {
			throw new Error(`[${title}] Variance[${colId}] should be positive (actual: ${item})`);
		} else if (Math.abs(item) > Math.sqrt(covariance[rowId][rowId] * covariance[colId][colId])) {
			console.log(covariance);
			throw new Error(`[${title}] Covariance[${rowId}][${colId}] should verify Cauchy Schwarz Inequality ` +
				`(expected: |x| <= sqrt(${covariance[rowId][rowId]} * ${covariance[colId][colId]})` +
				` actual: ${item})`);
		} else if (Math.abs(item - covariance[colId][rowId]) > tolerance) {
			throw new Error(`[${title}] Covariance[${rowId}][${colId}] should equal Covariance[${colId}][${rowId}] ` +
			` (actual diff: ${Math.abs(item - covariance[colId][rowId])})  = ${item} - ${covariance[colId][rowId]}\n` +
			`${covariance.join('\n')} is invalid`
			);
		}
	}));
};

var checkCovariance = function ({covariance, eigen = false}) {
	checkMatrix(covariance);
	checkSymetric(covariance);
	if (eigen) {
		checkDefinitePositive(covariance);
	}
};

/**
 * @class
 * Class representing a multi dimensionnal gaussian, with his mean and his covariance
 * @property {Number} [index=0] the index of the State in the process, this is not mandatory for simple Kalman Filter, but is needed for most of the use case of extended kalman filter
 * @property {Array.<Array.<Number>>} covariance square matrix of size dimension
 * @property {Array.<Array<Number>>} mean column matrix of size dimension x 1
 */
class State {
	constructor({mean, covariance, index}) {
		this.mean = mean;
		this.covariance = covariance;
		this.index = index;
	}

	/**
	* Check the consistency of the State
	*/
	check(options) {
		this.constructor.check(this, options);
	}

	/**
	* Check the consistency of the State's attributes
	*/

	static check(state, {dimension = null, title = null, eigen} = {}) {
		if (!(state instanceof State)) {
			throw (new TypeError(
				'The argument is not a state \n' +
        'Tips: maybe you are using 2 different version of kalman-filter in your npm deps tree'
			));
		}

		const {mean, covariance} = state; // Index
		const meanDimension = mean.length;
		if (typeof (dimension) === 'number' && meanDimension !== dimension) {
			throw (new Error(`[${title}] State.mean ${mean} with dimension ${meanDimension} does not match expected dimension (${dimension})`));
		}

		checkMatrix(mean, [meanDimension, 1], title ? title + '-mean' : 'mean');
		checkMatrix(covariance, [meanDimension, meanDimension], title ? title + '-covariance' : 'covariance');
		checkCovariance({covariance, eigen});
		// If (typeof (index) !== 'number') {
		// 	throw (new TypeError('t must be a number'));
		// }
	}

	static matMul({state, matrix}) {
		const covariance = matMul(
			matMul(matrix, state.covariance),
			transpose(matrix)
		);
		const mean = matMul(matrix, state.mean);

		return new State({
			mean,
			covariance,
			index: state.index
		});
	}

	/**
	* From a state in n-dimension create a state in a subspace
	* If you see the state as a N-dimension gaussian,
	* this can be viewed as the sub M-dimension gaussian (M < N)
	* @param {Array.<Number>} obsIndexes list of dimension to extract,  (M < N <=> obsIndexes.length < this.mean.length)
	* @returns {State} subState in subspace, with subState.mean.length === obsIndexes.length
	*/
	subState(obsIndexes) {
		const state = new State({
			mean: obsIndexes.map(i => this.mean[i]),
			covariance: subSquareMatrix(this.covariance, obsIndexes),
			index: this.index
		});
		return state;
	}

	/**
	* Simple Malahanobis distance between the distribution (this) and a point
	* @param {Array.<[Number]>} point a Nx1 matrix representing a point
	*/
	rawDetailedMahalanobis(point) {
		const diff = sub(this.mean, point);
		this.check();
		const covarianceInvert = invert(this.covariance);
		if (covarianceInvert === null) {
			this.check({eigen: true});
			throw (new Error(`Cannot invert covariance ${JSON.stringify(this.covariance)}`));
		}

		const diffTransposed = transpose(diff);

		// Console.log('covariance in obs space', covarianceInObservationSpace);

		const value = Math.sqrt(
			matMul(
				matMul(
					diffTransposed,
					covarianceInvert
				),
				diff
			)
		);
		if (Number.isNaN(value)) {
			console.log({diff, covarianceInvert, this: this, point}, matMul(
				matMul(
					diffTransposed,
					covarianceInvert
				),
				diff
			));
			throw (new Error('mahalanobis is NaN'));
		}

		return {
			diff,
			covarianceInvert,
			value
		};
	}

	/**
	* Malahanobis distance is made against an observation, so the mean and covariance
	* are projected into the observation space
	* @param {KalmanFilter} kf kalman filter use to project the state in observation's space
	* @param {Observation} observation
	* @param {Array.<Number>} obsIndexes list of indexes of observation state to use for the mahalanobis distance
	*/
	detailedMahalanobis({kf, observation, obsIndexes}) {
		if (observation.length !== kf.observation.dimension) {
			throw (new Error(`Mahalanobis observation ${observation} (dimension: ${observation.length}) does not match with kf observation dimension (${kf.observation.dimension})`));
		}

		let correctlySizedObservation = arrayToMatrix({observation, dimension: observation.length});

		const stateProjection = kf.getValue(kf.observation.stateProjection, {});

		let projectedState = this.constructor.matMul({state: this, matrix: stateProjection});

		if (Array.isArray(obsIndexes)) {
			projectedState = projectedState.subState(obsIndexes);
			correctlySizedObservation = obsIndexes.map(i => correctlySizedObservation[i]);
		}

		return projectedState.rawDetailedMahalanobis(correctlySizedObservation);
	}

	/**
	* @param {KalmanFilter} kf kalman filter use to project the state in observation's space
	* @param {Observation} observation
	* @param {Array.<Number>} obsIndexes list of indexes of observation state to use for the mahalanobis distance
	* @returns {Number}
	*/
	mahalanobis(options) {
		const result = this.detailedMahalanobis(options).value;
		if (Number.isNaN(result)) {
			throw (new TypeError('mahalanobis is NaN'));
		}

		return result;
	}

	/**
	* Bhattacharyya distance is made against in the observation space
	* to do it in the normal space see state.bhattacharyya
	* @param {KalmanFilter} kf kalman filter use to project the state in observation's space
	* @param {State} state
	* @param {Array.<Number>} obsIndexes list of indexes of observation state to use for the bhattacharyya distance
	* @returns {Number}
	*/
	obsBhattacharyya({kf, state, obsIndexes}) {
		const stateProjection = kf.getValue(kf.observation.stateProjection, {});

		let projectedSelfState = this.constructor.matMul({state: this, matrix: stateProjection});
		let projectedOtherState = this.constructor.matMul({state, matrix: stateProjection});

		if (Array.isArray(obsIndexes)) {
			projectedSelfState = projectedSelfState.subState(obsIndexes);
			projectedOtherState = projectedOtherState.subState(obsIndexes);
		}

		return projectedSelfState.bhattacharyya(projectedOtherState);
	}

	/**
	* @param {State} otherState other state to compare with
	* @returns {Number}
	*/
	bhattacharyya(otherState) {
		const state = this;
		const average = elemWise([state.covariance, otherState.covariance], ([a, b]) => (a + b) / 2);

		let covarInverted;
		try {
			covarInverted = invert(average);
		} catch (error) {
			console.log('Cannot invert', average);
			throw (error);
		}

		const diff = sub(state.mean, otherState.mean);

		return matMul(transpose(diff), matMul(covarInverted, diff))[0][0];
	}
}

var state = State;

/**
*Creates a dynamic model, following constant position model with respect with the dimensions provided in the observation parameters
* @param {DynamicConfig} dynamic
* @param {ObservationConfig} observation
* @returns {DynamicConfig}
*/

var constantPosition = function (dynamic, observation) {
	let {dimension} = dynamic;
	const observationDimension = observation.dimension;
	const {observedProjection} = observation;
	const {stateProjection} = observation;
	let {covariance} = dynamic;

	if (!dynamic.dimension) {
		if (observationDimension) {
			dimension = observationDimension;
		} else if (observedProjection) {
			dimension = observedProjection[0].length;
		} else if (stateProjection) {
			dimension = stateProjection[0].length;
		}
	}

	const transition = identity(dimension);
	covariance = covariance || identity(dimension);
	return Object.assign({}, dynamic, {dimension, transition, covariance});
};

/**
*Creates a dynamic model, following constant position model with respect with the dimensions provided in the observation parameters
* @param {DynamicConfig} dynamic
* @param {ObservationConfig} observation
* @returns {DynamicConfig}
*/

var constantSpeed = function (dynamic, observation) {
	const timeStep = dynamic.timeStep || 1;
	const {observedProjection} = observation;
	const {stateProjection} = observation;
	const observationDimension = observation.dimension;
	let dimension;

	if (stateProjection && Number.isInteger(stateProjection[0].length / 2)) {
		dimension = observation.stateProjection[0].length;
	} else if (observedProjection) {
		dimension = observedProjection[0].length * 2;
	} else if (observationDimension) {
		dimension = observationDimension * 2;
	} else {
		throw (new Error('observedProjection or stateProjection should be defined in observation in order to use constant-speed filter'));
	}

	const baseDimension = dimension / 2;
	// We construct the transition and covariance matrices
	const transition = identity(dimension);
	for (let i = 0; i < baseDimension; i++) {
		transition[i][i + baseDimension] = timeStep;
	}

	const arrayCovariance = new Array(baseDimension).fill(1).concat(new Array(baseDimension).fill(timeStep * timeStep));
	const covariance = dynamic.covariance || arrayCovariance;
	return Object.assign({}, dynamic, {dimension, transition, covariance});
};

/**
*Creates a dynamic model, following constant acceleration model with respect with the dimensions provided in the observation parameters
* @param {DynamicConfig} dynamic
* @param {ObservationConfig} observation
* @returns {DynamicConfig}
*/

var constantAcceleration = function (dynamic, observation) {
	const timeStep = dynamic.timeStep || 1;
	const {observedProjection} = observation;
	const {stateProjection} = observation;
	const observationDimension = observation.dimension;
	let dimension;

	if (stateProjection && Number.isInteger(stateProjection[0].length / 3)) {
		dimension = observation.stateProjection[0].length;
	} else if (observedProjection) {
		dimension = observedProjection[0].length * 3;
	} else if (observationDimension) {
		dimension = observationDimension * 3;
	} else {
		throw (new Error('observedProjection or stateProjection should be defined in observation in order to use constant-speed filter'));
	}

	const baseDimension = dimension / 3;
	// We construct the transition and covariance matrices
	const transition = identity(dimension);
	for (let i = 0; i < baseDimension; i++) {
		transition[i][i + baseDimension] = timeStep;
		transition[i][i + (2 * baseDimension)] = 0.5 * (timeStep ** 2);
		transition[i + baseDimension][i + (2 * baseDimension)] = timeStep;
	}

	const arrayCovariance = new Array(baseDimension).fill(1)
		.concat(new Array(baseDimension).fill(timeStep * timeStep))
		.concat(new Array(baseDimension).fill(timeStep ** 4));
	const covariance = dynamic.covariance || arrayCovariance;
	return Object.assign({}, dynamic, {dimension, transition, covariance});
};

/**
* @param {Number} sensorDimension
* @param {CovarianceParam} sensorCovariance
* @param {Number} nSensors
* @returns {ObservationConfig}
*/

const copy = mat => mat.map(a => a.concat());

var sensor = function (options) {
	const {sensorDimension = 1, sensorCovariance = 1, nSensors = 1} = options;
	const sensorCovarianceFormatted = polymorphMatrix(sensorCovariance, {dimension: sensorDimension});
	checkMatrix(sensorCovarianceFormatted, [sensorDimension, sensorDimension], 'observation.sensorCovariance');
	const oneSensorObservedProjection = identity(sensorDimension);
	let concatenatedObservedProjection = [];
	const dimension = sensorDimension * nSensors;
	const concatenatedCovariance = identity(dimension);
	for (let i = 0; i < nSensors; i++) {
		concatenatedObservedProjection = concatenatedObservedProjection.concat(copy(oneSensorObservedProjection));

		sensorCovarianceFormatted.forEach((r, rIndex) => r.forEach((c, cIndex) => {
			concatenatedCovariance[rIndex + (i * sensorDimension)][cIndex + (i * sensorDimension)] = c;
		}));
	}

	return Object.assign({}, options, {
		dimension,
		observedProjection: concatenatedObservedProjection,
		covariance: concatenatedCovariance
	});
};

const registeredDynamicModels = {
	'constant-position': constantPosition,
	'constant-speed': constantSpeed,
	'constant-acceleration': constantAcceleration
};
const registeredObservationModels = {
	sensor: sensor
};

/**
*RegisterObservation enables to create a new observation model and stock it
* @param {String} name
* @callback fn the function corresponding to the desired model
*/

/**
*registerDynamic enables to create a new dynamic model and stocks it
* @param {String} name
* @callback fn the function corresponding to the desired model
*/

/**
*buildObservation enables to build a model given an observation configuration
* @param {ObservationConfig} observation
* @returns {ObservationConfig} the configuration with respect to the model
*/

/**
*buildDynamic enables to build a model given dynamic and observation configurations
* @param {DynamicConfig} dynamic
* @param {ObservationConfig} observation
* @returns {DynamicConfig} the dynamic configuration with respect to the model
*/

var modelCollection = {
	registerObservation: (name, fn) => {
		registeredObservationModels[name] = fn;
	},
	registerDynamic: (name, fn) => {
		registeredDynamicModels[name] = fn;
	},
	buildObservation: observation => {
		if (!registeredObservationModels[observation.name]) {
			throw (new Error(`The provided observation model name (${observation.name}) is not registered`));
		}

		return registeredObservationModels[observation.name](observation);
	},
	buildDynamic: (dynamic, observation) => {
		if (!registeredDynamicModels[dynamic.name]) {
			throw (new Error(`The provided dynamic model (${dynamic.name}) name is not registered`));
		}

		return registeredDynamicModels[dynamic.name](dynamic, observation);
	}
};

/**
* Add matrixes together
* @param {...<Array.<Array.<Number>>} args list of matrix
* @returns {Array.<Array.<Number>>} sum
*/
var add$2 = function (...args) {
	return elemWise(args, args2 => {
		return args2.reduce((a, b) => {
			if (a === null || b === null) {
				return null;
			}

			return a + b;
		}, 0);
	});
};

/**
* @callback ObservationCallback
* @param {Object} opts
* @param {Number} opts.index
* @param {Number} opts.previousCorrected
*/

/**
* @typedef {Object} ObservationConfig
* @property {Number} dimension
* @property {Array.Array.<Number>> | ObservationCallback} stateProjection,
* @property {Array.Array.<Number>> | ObservationCallback} covariance
*/

/**
* @callback DynamicCallback
* @param {Object} opts
* @param {Number} opts.index
* @param {State} opts.predicted
* @param {Observation} opts.observation
*/

/**
* @typedef {Object} DynamicConfig
* @property {Number} dimension
* @property {Array.Array.<Number>> | DynamicCallback} transition,
* @property {Array.Array.<Number>> | DynamicCallback} covariance
*/

const defaultLogger = {
	info: (...args) => console.log(...args),
	debug: () => {},
	warn: (...args) => console.log(...args),
	error: (...args) => console.log(...args)
};

/**
* @class
* @property {DynamicConfig} dynamic the system's dynamic model
* @property {ObservationConfig} observation the system's observation model
*@property logger a Winston-like logger
*/
class CoreKalmanFilter {
	/**
	* @param {DynamicConfig} dynamic
	* @param {ObservationConfig} observation the system's observation model
	*/

	constructor({dynamic, observation, logger = defaultLogger}) {
		this.dynamic = dynamic;
		this.observation = observation;
		this.logger = logger;
	}

	getValue(fn, options) {
		return (typeof (fn) === 'function' ? fn(options) : fn);
	}

	getInitState() {
		const {mean: meanInit, covariance: covarianceInit, index: indexInit} = this.dynamic.init;
		const initState = new state({
			mean: meanInit,
			covariance: covarianceInit,
			index: indexInit
		});
		return initState;
	}

	/**
	This will return the predicted covariance of a given previousCorrected State, this will help us to build the asymptoticState.
	* @param {State} previousCorrected
	* @returns{Array.<Array.<Number>>}
	*/

	getPredictedCovariance(options = {}) {
		let {previousCorrected, index} = options;
		previousCorrected = previousCorrected || this.getInitState();

		const getValueOptions = Object.assign({}, {previousCorrected, index}, options);
		const d = this.getValue(this.dynamic.transition, getValueOptions);
		const dTransposed = transpose(d);
		const covarianceInter = matMul(d, previousCorrected.covariance);
		const covariancePrevious = matMul(covarianceInter, dTransposed);
		const dynCov = this.getValue(this.dynamic.covariance, getValueOptions);

		const covariance = add$2(
			dynCov,
			covariancePrevious
		);
		checkMatrix(covariance, [this.dynamic.dimension, this.dynamic.dimension], 'predicted.covariance');

		return covariance;
	}

	/**
	This will return the new prediction, relatively to the dynamic model chosen
	* @param {State} previousCorrected State relative to our dynamic model
	* @returns{State} predicted State
	*/

	predict(options = {}) {
		let {previousCorrected, index} = options;
		previousCorrected = previousCorrected || this.getInitState();

		if (typeof (index) !== 'number' && typeof (previousCorrected.index) === 'number') {
			index = previousCorrected.index + 1;
		}

		state.check(previousCorrected, {dimension: this.dynamic.dimension});

		const getValueOptions = Object.assign({}, {
			previousCorrected,
			index
		}, options);
		const d = this.getValue(this.dynamic.transition, getValueOptions);

		checkMatrix(d, [this.dynamic.dimension, this.dynamic.dimension], 'dynamic.transition');

		const mean = matMul(d, previousCorrected.mean);

		const covariance = this.getPredictedCovariance(getValueOptions);

		const predicted = new state({mean, covariance, index});
		this.logger.debug('Prediction done', predicted);

		return predicted;
	}
	/**
	This will return the new correction, taking into account the prediction made
	and the observation of the sensor
	* @param {State} predicted the previous State
	* @returns{Array<Array>} kalmanGain
	*/

	getGain(options) {
		let {predicted, stateProjection} = options;
		const getValueOptions = Object.assign({}, {index: predicted.index}, options);
		stateProjection = stateProjection || this.getValue(this.observation.stateProjection, getValueOptions);
		const obsCovariance = this.getValue(this.observation.covariance, getValueOptions);
		checkMatrix(obsCovariance, [this.observation.dimension, this.observation.dimension], 'observation.covariance');

		const stateProjTransposed = transpose(stateProjection);
		const noiselessInnovation = matMul(
			matMul(stateProjection, predicted.covariance),
			stateProjTransposed
		);

		const innovationCovariance = add$2(noiselessInnovation, obsCovariance);

		const optimalKalmanGain = matMul(
			matMul(predicted.covariance, stateProjTransposed),
			invert(innovationCovariance)
		);

		return optimalKalmanGain;
	}

	/**
	This will return the corrected covariance of a given predicted State, this will help us to build the asymptoticState.
	* @param {State} predicted the previous State
	* @returns{Array.<Array.<Number>>}
	*/

	getCorrectedCovariance(options) {
		let {predicted, optimalKalmanGain, stateProjection} = options;
		const identity$1 = identity(predicted.covariance.length);
		if (!stateProjection) {
			const getValueOptions = Object.assign({}, {index: predicted.index}, options);
			stateProjection = this.getValue(this.observation.stateProjection, getValueOptions);
		}

		if (!optimalKalmanGain) {
			optimalKalmanGain = this.getGain(Object.assign({stateProjection}, options));
		}

		return matMul(
			sub(identity$1, matMul(optimalKalmanGain, stateProjection)),
			predicted.covariance
		);
	}

	/**
	This will return the new correction, taking into account the prediction made
	and the observation of the sensor
	* @param {State} predicted the previous State
	* @param {Array} observation the observation of the sensor
	* @returns{State} corrected State of the Kalman Filter
	*/

	correct(options) {
		const {predicted, observation} = options;
		state.check(predicted, {dimension: this.dynamic.dimension});
		if (!observation) {
			throw (new Error('no measure available'));
		}

		const getValueOptions = Object.assign({}, {observation, predicted, index: predicted.index}, options);
		const stateProjection = this.getValue(this.observation.stateProjection, getValueOptions);

		const optimalKalmanGain = this.getGain(Object.assign({predicted, stateProjection}, options));

		const innovation = sub(
			observation,
			matMul(stateProjection, predicted.mean)
		);
		const mean = add$2(
			predicted.mean,
			matMul(optimalKalmanGain, innovation)
		);
		if (Number.isNaN(mean[0][0])) {
			console.log({optimalKalmanGain, innovation, predicted});
			throw (new TypeError('Mean is NaN after correction'));
		}

		const covariance = this.getCorrectedCovariance(Object.assign({predicted, optimalKalmanGain, stateProjection}, options));
		const corrected = new state({mean, covariance, index: predicted.index});
		this.logger.debug('Correction done', corrected);
		return corrected;
	}
}

var coreKalmanFilter = CoreKalmanFilter;

const buildDefaultDynamic = function (dynamic) {
	if (typeof (dynamic) === 'string') {
		return {name: dynamic};
	}

	return {name: 'constant-position'};
};

const buildDefaultObservation = function (observation) {
	if (typeof (observation) === 'number') {
		return {name: 'sensor', sensorDimension: observation};
	}

	if (typeof (observation) === 'string') {
		return {name: observation};
	}

	return {name: 'sensor'};
};
/**
*This function fills the given options by successively checking if it uses a registered model,
* it builds and checks the dynamic and observation dimensions, build the stateProjection if only observedProjection
*is given, and initialize dynamic.init
*@param {DynamicConfig} options.dynamic
*@param {ObservationConfig} options.observation
*/

const setupModelsParameters = function ({observation, dynamic}) {
	if (typeof (observation) !== 'object' || observation === null) {
		observation = buildDefaultObservation(observation);
	}

	if (typeof (dynamic) !== 'object' || dynamic === null) {
		dynamic = buildDefaultDynamic(dynamic);
	}

	if (typeof (observation.name) === 'string') {
		observation = modelCollection.buildObservation(observation);
	}

	if (typeof (dynamic.name) === 'string') {
		dynamic = modelCollection.buildDynamic(dynamic, observation);
	}

	const withDimensionOptions = setDimensions({observation, dynamic});
	const checkedDimensionOptions = checkDimensions(withDimensionOptions);
	const buildStateProjectionOptions = buildStateProjection(checkedDimensionOptions);
	return extendDynamicInit(buildStateProjectionOptions);
};

/**
*Returns the corresponding model without arrays as values but only functions
*@param {ObservationConfig} observation
*@param {DynamicConfig} dynamic
*@returns {ObservationConfig, DynamicConfig} model with respect of the Core Kalman Filter properties
*/
const modelsParametersToCoreOptions = function (modelToBeChanged) {
	const {observation, dynamic} = modelToBeChanged;
	return deepAssign_1(modelToBeChanged, {
		observation: {
			stateProjection: toFunction(polymorphMatrix(observation.stateProjection)),
			covariance: toFunction(polymorphMatrix(observation.covariance, {dimension: observation.dimension}))
		},
		dynamic: {
			transition: toFunction(polymorphMatrix(dynamic.transition)),
			covariance: toFunction(polymorphMatrix(dynamic.covariance, {dimension: dynamic.dimension}))
		}
	});
};

class KalmanFilter extends coreKalmanFilter {
	/**
	* @param {DynamicConfig} options.dynamic
	* @param {ObservationConfig} options.observation the system's observation model
	*/
	constructor(options = {}) {
		const modelsParameters = setupModelsParameters(options);
		const coreOptions = modelsParametersToCoreOptions(modelsParameters);

		super(Object.assign({}, options, coreOptions));
	}

	correct(options) {
		const coreObservation = arrayToMatrix({observation: options.observation, dimension: this.observation.dimension});
		return super.correct(Object.assign({}, options, {observation: coreObservation}));
	}

	/**
	*Performs the prediction and the correction steps
	*@param {State} previousCorrected
	*@param {<Array.<Number>>} observation
	*@returns {Array.<Number>} the mean of the corrections
	*/

	filter(options) {
		const predicted = super.predict(options);
		return this.correct(Object.assign({}, options, {predicted}));
	}

	/**
*Filters all the observations
*@param {Array.<Array.<Number>>} observations
*@returns {Array.<Array.<Number>>} the mean of the corrections
*/
	filterAll(observations) {
		const {mean: meanInit, covariance: covarianceInit, index: indexInit} = this.dynamic.init;
		let previousCorrected = new state({
			mean: meanInit,
			covariance: covarianceInit,
			index: indexInit});
		const results = [];
		for (const observation of observations) {
			const predicted = this.predict({previousCorrected});
			previousCorrected = this.correct({
				predicted,
				observation
			});
			results.push(previousCorrected.mean.map(m => m[0]));
		}

		return results;
	}

	/**
	* Returns an estimation of the asymptotic state covariance as explained in https://en.wikipedia.org/wiki/Kalman_filter#Asymptotic_form
	* in practice this can be used as a init.covariance value but is very costful calculation (that's why this is not made by default)
	* @param {Number} [tolerance=1e-6] returns when the last values differences are less than tolerance
	* @return {<Array.<Array.<Number>>>} covariance
	*/
	asymptoticStateCovariance(limitIterations = 1e2, tolerance = 1e-6) {
		let previousCorrected = super.getInitState();
		let predicted;
		const results = [];
		for (let i = 0; i < limitIterations; i++) {
			// We create a fake mean that will not be used in order to keep coherence
			predicted = new state({
				mean: null,
				covariance: super.getPredictedCovariance({previousCorrected})
			});
			previousCorrected = new state({
				mean: null,
				covariance: super.getCorrectedCovariance({predicted})
			});
			results.push(previousCorrected.covariance);
			if (distanceMat(previousCorrected.covariance, results[i - 1]) < tolerance) {
				return results[i];
			}
		}

		throw (new Error('The state covariance does not converge asymptotically'));
	}

	/**
	* Returns an estimation of the asymptotic gain, as explained in https://en.wikipedia.org/wiki/Kalman_filter#Asymptotic_form
	* @param {Number} [tolerance=1e-6] returns when the last values differences are less than tolerance
	* @return {<Array.<Array.<Number>>>} gain
	*/
	asymptoticGain(tolerance = 1e-6) {
		const covariance = this.asymptoticStateCovariance(tolerance);

		const asymptoticState = new state({
			// We create a fake mean that will not be used in order to keep coherence
			mean: new Array(covariance.length).fill(0).map(() => [0]),
			covariance
		});

		return super.getGain({previousCorrected: asymptoticState});
	}
}

var kalmanFilter = KalmanFilter;

export default kalmanFilter;
