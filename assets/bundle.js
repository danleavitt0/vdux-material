/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _domready = __webpack_require__(2);
	
	var _domready2 = _interopRequireDefault(_domready);
	
	var _element = __webpack_require__(4);
	
	var _element2 = _interopRequireDefault(_element);
	
	var _app = __webpack_require__(37);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _reducer = __webpack_require__(92);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _dom = __webpack_require__(93);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _reduxLogger = __webpack_require__(171);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hmr = undefined;
	(0, _domready2.default)(function () {
	  return hmr = (0, _dom2.default)({
	    reducer: _reducer2.default,
	    initialState: {},
	    middleware: [(0, _reduxLogger2.default)()],
	    app: function app(state) {
	      return (0, _element2.default)(_app2.default, { state: state });
	    }
	  });
	});
	
	if (false) {
	  module.hot.decline();
	  module.hot.accept(['./app', './reducer'], function () {
	    hmr.replace(require('./app').default, require('./reducer').default);
	  });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var isDomLoaded = __webpack_require__(3)
	
	/**
	 * Expose domready
	 */
	
	module.exports = domready
	
	/**
	 * Check whether the DOM is ready already, and setup
	 * a listener if necessary
	 */
	
	var loaded = isDomLoaded()
	var fns = []
	
	if (!loaded) {
	  document.addEventListener('DOMContentLoaded', function listener () {
	    document.removeEventListener('DOMContentLoaded', listener)
	    loaded = true
	    fns.forEach(function (fn) { fn() })
	    fns.length = 0
	  })
	}
	
	/**
	 * domready
	 */
	
	function domready (fn) {
	  loaded ? setTimeout(fn) : fns.push(fn)
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Expose isDomLoaded
	 */
	
	module.exports = isDomLoaded
	
	/**
	 * Ready states
	 */
	
	var readyStates = ['complete', 'loaded']
	
	if (!document.documentElement.doScroll) {
	  readyStates.push('interactive')
	}
	
	/**
	 * isDomLoaded
	 */
	
	function isDomLoaded () {
	  return readyStates.indexOf(document.readyState) !== -1
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Convenience for accessing element, so you can
	 * require('vdux/element')
	 */
	
	module.exports = __webpack_require__(5)


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _virtex = __webpack_require__(6);
	
	var _toInlineStyle = __webpack_require__(22);
	
	var _toInlineStyle2 = _interopRequireDefault(_toInlineStyle);
	
	var _capitalize = __webpack_require__(23);
	
	var _capitalize2 = _interopRequireDefault(_capitalize);
	
	var _focusElement = __webpack_require__(24);
	
	var _focusElement2 = _interopRequireDefault(_focusElement);
	
	var _classnames = __webpack_require__(25);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _isObject = __webpack_require__(26);
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	var _keychord = __webpack_require__(27);
	
	var _keychord2 = _interopRequireDefault(_keychord);
	
	var _domEvents = __webpack_require__(29);
	
	var _domEvents2 = _interopRequireDefault(_domEvents);
	
	var _foreach = __webpack_require__(30);
	
	var _foreach2 = _interopRequireDefault(_foreach);
	
	var _evStore = __webpack_require__(34);
	
	var _evStore2 = _interopRequireDefault(_evStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Constants
	 */
	
	/**
	 * Imports
	 */
	
	var eventRegex = new RegExp('^on(?:' + _domEvents2.default.join('|') + ')$', 'i');
	
	/**
	 * virtex-element
	 */
	
	function element(tag, attrs) {
	  // Only apply sugar to native elements
	  if (typeof tag === 'string' && attrs) {
	    (0, _foreach2.default)(function (val, key) {
	      return attrs[key] = sugar(val, key);
	    }, attrs);
	  }
	
	  return _virtex.element.apply(null, arguments);
	}
	
	function sugar(value, name) {
	  switch (name) {
	    case 'style':
	      if ((0, _isObject2.default)(value)) value = (0, _toInlineStyle2.default)(value);
	      return value;
	    case 'class':
	      return (0, _classnames2.default)(value);
	    case 'focused':
	      return value && function (node) {
	        return setTimeout(function () {
	          return (0, _focusElement2.default)(node);
	        });
	      };
	    default:
	      return eventRegex.test(name) ? bindEvent(name.slice(2).toLowerCase(), value) : value;
	  }
	}
	
	function bindEvent(name, fn) {
	  return function (node) {
	    return (0, _evStore2.default)(node)[name] = createHandler(fn);
	  };
	}
	
	function createHandler(fn) {
	  return function (e) {
	    var f = (0, _isObject2.default)(fn) ? fn[(0, _keychord2.default)(e)] : fn;
	
	    if (f) {
	      return Array.isArray(f) ? f.map(function (f) {
	        return f(e);
	      }) : f(e);
	    }
	  };
	}
	
	/**
	 * Exports
	 */
	
	exports.default = element;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.element = undefined;
	
	var _actions = __webpack_require__(7);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _update = __webpack_require__(8);
	
	var _update2 = _interopRequireDefault(_update);
	
	var _create = __webpack_require__(19);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _element = __webpack_require__(21);
	
	var _element2 = _interopRequireDefault(_element);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * Virtex
	 */
	
	/**
	 * Imports
	 */
	
	function virtex(effect) {
	  return {
	    create: (0, _create2.default)(effect),
	    update: (0, _update2.default)(effect)
	  };
	}
	
	/**
	 * Exports
	 */
	
	exports.default = virtex;
	exports.element = _element2.default;
	exports.actions = actions;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Action types
	 */
	
	var types = {
	  CREATE_NODE: 'CREATE_NODE',
	  UPDATE_NODE: 'UPDATE_NODE',
	  REPLACE_NODE: 'REPLACE_NODE',
	  REMOVE_NODE: 'REMOVE_NODE',
	  INSERT_NODE: 'INSERT_NODE',
	  CREATE_THUNK: 'CREATE_THUNK',
	  UPDATE_THUNK: 'UPDATE_THUNK',
	  DESTROY_THUNK: 'DESTROY_THUNK'
	};
	
	/**
	 * Action creators for effectful things
	 */
	
	function vnodeAction(type) {
	  return function (vnode, prev) {
	    return {
	      type: type,
	      vnode: vnode,
	      prev: prev
	    };
	  };
	}
	
	var createThunk = vnodeAction(types.CREATE_THUNK);
	var updateThunk = vnodeAction(types.UPDATE_THUNK);
	var destroyThunk = vnodeAction(types.DESTROY_THUNK);
	var updateNode = vnodeAction(types.UPDATE_NODE);
	var replaceNode = vnodeAction(types.REPLACE_NODE);
	var removeNode = vnodeAction(types.REMOVE_NODE);
	
	function createNode(vnode, children) {
	  return {
	    type: types.CREATE_NODE,
	    vnode: vnode,
	    children: children
	  };
	}
	
	function insertNode(vnode, newVnode, pos) {
	  return {
	    type: types.INSERT_NODE,
	    vnode: vnode,
	    newVnode: newVnode,
	    pos: pos
	  };
	}
	
	/**
	 * Exports
	 */
	
	exports.createNode = createNode;
	exports.insertNode = insertNode;
	exports.updateNode = updateNode;
	exports.replaceNode = replaceNode;
	exports.removeNode = removeNode;
	exports.createThunk = createThunk;
	exports.updateThunk = updateThunk;
	exports.destroyThunk = destroyThunk;
	exports.types = types;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(7);
	
	var _util = __webpack_require__(9);
	
	var _dift = __webpack_require__(12);
	
	var _dift2 = _interopRequireDefault(_dift);
	
	var _foreach = __webpack_require__(14);
	
	var _foreach2 = _interopRequireDefault(_foreach);
	
	var _create2 = __webpack_require__(19);
	
	var _create3 = _interopRequireDefault(_create2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Diff and render two vnode trees
	 */
	
	function update(effect) {
	  var create = (0, _create3.default)(effect);
	  return function (prev, next) {
	    return updateRecursive(prev, next, '0');
	  };
	
	  function updateRecursive(prev, next, path) {
	    next.path = path;
	
	    if (!(0, _util.isSameNode)(prev, next)) {
	      unrenderThunks(prev);
	
	      while ((0, _util.isThunk)(prev)) {
	        prev = effect((0, _actions.updateThunk)(prev));
	      }
	
	      next = create(next, path);
	      effect((0, _actions.replaceNode)(next, prev));
	    } else if ((0, _util.isThunk)(next)) {
	      next = effect((0, _actions.updateThunk)(next, prev));
	      prev = effect((0, _actions.updateThunk)(prev));
	
	      return updateRecursive(prev, next, (0, _util.createPath)(next, path, 0));
	    } else {
	      if (prev !== next) {
	        /**
	         * Diff children
	         */
	
	        (0, _dift2.default)(prev.children, next.children, function (type, pItem, nItem, pos) {
	          switch (type) {
	            case _dift.UPDATE:
	              return updateRecursive(pItem, nItem, (0, _util.createPath)(nItem, path, pos));
	            case _dift.CREATE:
	              return effect((0, _actions.insertNode)(prev, create(nItem, (0, _util.createPath)(nItem, path, pos)), pos));
	            case _dift.MOVE:
	              return effect((0, _actions.insertNode)(prev, updateRecursive(pItem, nItem, (0, _util.createPath)(nItem, path, pos)), pos));
	            case _dift.REMOVE:
	              return effect((0, _actions.removeNode)(unrenderThunks(pItem)));
	          }
	        }, _util.getKey);
	      }
	
	      effect((0, _actions.updateNode)(next, prev));
	    }
	
	    return next;
	  }
	
	  function unrenderThunks(vnode) {
	    while ((0, _util.isThunk)(vnode)) {
	      effect((0, _actions.destroyThunk)(vnode));
	      vnode = effect((0, _actions.updateThunk)(vnode));
	    }
	
	    (0, _foreach2.default)(unrenderThunks, vnode.children);
	    return vnode;
	  }
	}
	
	/**
	 * Exports
	 */
	
	/**
	 * Imports
	 */
	
	exports.default = update;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getKey = exports.createPath = exports.isSameNode = exports.isThunk = undefined;
	
	var _isString = __webpack_require__(10);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	var _isUndefined = __webpack_require__(11);
	
	var _isUndefined2 = _interopRequireDefault(_isUndefined);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Utilities
	 */
	
	/**
	 * Imports
	 */
	
	function isThunk(a) {
	  return !(0, _isString2.default)(a.type);
	}
	
	function isSameNode(a, b) {
	  return a.type === b.type;
	}
	
	function getKey(a) {
	  return a.key;
	}
	
	function createPath(vnode, path, pos) {
	  var key = getKey(vnode);
	  var part = (0, _isUndefined2.default)(key) ? pos : key;
	
	  return path + '.' + part;
	}
	
	/**
	 * Exports
	 */
	
	exports.isThunk = isThunk;
	exports.isSameNode = isSameNode;
	exports.createPath = createPath;
	exports.getKey = getKey;

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Expose isString
	 */
	
	module.exports = isString['default'] = isString
	
	/**
	 * Check if string
	 * @param  {Mixed}  value
	 * @return {Boolean}
	 */
	function isString (value) {
	  return typeof value === 'string'
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Expose isUndefined
	 */
	
	module.exports = isUndefined['default'] = isUndefined
	
	/**
	 * Check if undefined.
	 * @param  {Mixed}  value
	 * @return {Boolean}
	 */
	
	function isUndefined (value) {
	  return typeof value === 'undefined'
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.REMOVE = exports.MOVE = exports.UPDATE = exports.CREATE = undefined;
	
	var _bitVector = __webpack_require__(13);
	
	/**
	 * Actions
	 */
	
	var CREATE = 0; /**
	                 * Imports
	                 */
	
	var UPDATE = 1;
	var MOVE = 2;
	var REMOVE = 3;
	
	/**
	 * dift
	 */
	
	function dift(prev, next, effect, key) {
	  var pStartIdx = 0;
	  var nStartIdx = 0;
	  var pEndIdx = prev.length - 1;
	  var nEndIdx = next.length - 1;
	  var pStartItem = prev[pStartIdx];
	  var nStartItem = next[nStartIdx];
	
	  // List head is the same
	  while (pStartIdx <= pEndIdx && nStartIdx <= nEndIdx && equal(pStartItem, nStartItem)) {
	    effect(UPDATE, pStartItem, nStartItem, nStartIdx);
	    pStartItem = prev[++pStartIdx];
	    nStartItem = next[++nStartIdx];
	  }
	
	  // The above case is orders of magnitude more common than the others, so fast-path it
	  if (nStartIdx > nEndIdx && pStartIdx > pEndIdx) {
	    return;
	  }
	
	  var pEndItem = prev[pEndIdx];
	  var nEndItem = next[nEndIdx];
	  var movedFromFront = 0;
	
	  // Reversed
	  while (pStartIdx <= pEndIdx && nStartIdx <= nEndIdx && equal(pStartItem, nEndItem)) {
	    effect(MOVE, pStartItem, nEndItem, pEndIdx - movedFromFront + 1);
	    pStartItem = prev[++pStartIdx];
	    nEndItem = next[--nEndIdx];
	    ++movedFromFront;
	  }
	
	  // Reversed the other way (in case of e.g. reverse and append)
	  while (pEndIdx >= pStartIdx && nStartIdx <= nEndIdx && equal(nStartItem, pEndItem)) {
	    effect(MOVE, pEndItem, nStartItem, nStartIdx);
	    pEndItem = prev[--pEndIdx];
	    nStartItem = next[++nStartIdx];
	    --movedFromFront;
	  }
	
	  // List tail is the same
	  while (pEndIdx >= pStartIdx && nEndIdx >= nStartIdx && equal(pEndItem, nEndItem)) {
	    effect(UPDATE, pEndItem, nEndItem, nEndIdx);
	    pEndItem = prev[--pEndIdx];
	    nEndItem = next[--nEndIdx];
	  }
	
	  if (pStartIdx > pEndIdx) {
	    while (nStartIdx <= nEndIdx) {
	      effect(CREATE, null, nStartItem, nStartIdx);
	      nStartItem = next[++nStartIdx];
	    }
	
	    return;
	  }
	
	  if (nStartIdx > nEndIdx) {
	    while (pStartIdx <= pEndIdx) {
	      effect(REMOVE, pStartItem);
	      pStartItem = prev[++pStartIdx];
	    }
	
	    return;
	  }
	
	  var created = 0;
	  var pivotDest = null;
	  var pivotIdx = pStartIdx - movedFromFront;
	  var keepBase = pStartIdx;
	  var keep = (0, _bitVector.createBv)(pEndIdx - pStartIdx);
	
	  var prevMap = keyMap(prev, pStartIdx, pEndIdx + 1, key);
	
	  for (; nStartIdx <= nEndIdx; nStartItem = next[++nStartIdx]) {
	    var oldIdx = prevMap[key(nStartItem)];
	
	    if (isUndefined(oldIdx)) {
	      effect(CREATE, null, nStartItem, pivotIdx++);
	      ++created;
	    } else if (pStartIdx !== oldIdx) {
	      (0, _bitVector.setBit)(keep, oldIdx - keepBase);
	      effect(MOVE, prev[oldIdx], nStartItem, pivotIdx++);
	    } else {
	      pivotDest = nStartIdx;
	    }
	  }
	
	  if (pivotDest !== null) {
	    (0, _bitVector.setBit)(keep, 0);
	    effect(MOVE, prev[pStartIdx], next[pivotDest], pivotDest);
	  }
	
	  // If there are no creations, then you have to
	  // remove exactly max(prevLen - nextLen, 0) elements in this
	  // diff. You have to remove one more for each element
	  // that was created. This means once we have
	  // removed that many, we can stop.
	  var necessaryRemovals = prev.length - next.length + created;
	  for (var removals = 0; removals < necessaryRemovals; pStartItem = prev[++pStartIdx]) {
	    if (!(0, _bitVector.getBit)(keep, pStartIdx - keepBase)) {
	      effect(REMOVE, pStartItem);
	      ++removals;
	    }
	  }
	
	  function equal(a, b) {
	    return key(a) === key(b);
	  }
	}
	
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	function keyMap(items, start, end, key) {
	  var map = {};
	
	  for (var i = start; i < end; ++i) {
	    map[key(items[i])] = i;
	  }
	
	  return map;
	}
	
	/**
	 * Exports
	 */
	
	exports.default = dift;
	exports.CREATE = CREATE;
	exports.UPDATE = UPDATE;
	exports.MOVE = MOVE;
	exports.REMOVE = REMOVE;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Use typed arrays if we can
	 */
	
	var FastArray = typeof Uint32Array === 'undefined' ? Array : Uint32Array;
	
	/**
	 * Bit vector
	 */
	
	function createBv(sizeInBits) {
	  return new FastArray(Math.ceil(sizeInBits / 32));
	}
	
	function setBit(v, idx) {
	  var r = idx % 32;
	  var pos = (idx - r) / 32;
	
	  v[pos] |= 1 << r;
	}
	
	function clearBit(v, idx) {
	  var r = idx % 32;
	  var pos = (idx - r) / 32;
	
	  v[pos] &= ~(1 << r);
	}
	
	function getBit(v, idx) {
	  var r = idx % 32;
	  var pos = (idx - r) / 32;
	
	  return !!(v[pos] & 1 << r);
	}
	
	/**
	 * Exports
	 */
	
	exports.createBv = createBv;
	exports.setBit = setBit;
	exports.clearBit = clearBit;
	exports.getBit = getBit;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var isObject = __webpack_require__(15)
	var isArray = __webpack_require__(16)
	var forEachObj = __webpack_require__(17)
	var forEachArr = __webpack_require__(18)
	
	/**
	 * Expose foreach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * For each
	 * @param  {Function} fn  iterator
	 * @param  {Object}   obj object to iterate over
	 */
	
	function forEach (fn, a) {
	  if (isArray(a)) return forEachArr.call(this, fn, a)
	  if (isObject(a)) return forEachObj.call(this, fn, a)
	}


/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Expose isObject
	 */
	
	module.exports = isObject
	
	/**
	 * Constants
	 */
	
	var objString = toString(Object)
	
	/**
	 * Check for plain object.
	 *
	 * @param {Mixed} val
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject (val) {
	  return !!val && (val.constructor === Object || toString(val.constructor) === objString)
	}
	
	function toString (val) {
	  return Function.prototype.toString.call(val)
	}


/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Expose isArray
	 */
	
	module.exports = isArray['default'] = isArray
	
	/**
	 * isArray
	 */
	
	function isArray (val) {
	  return Array.isArray(val)
	}


/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Expose forEach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * forEach
	 */
	
	function forEach (fn, obj) {
	  if (!obj) return
	
	  var keys = Object.keys(obj)
	
	  for (var i = 0, len = keys.length; i < len; ++i) {
	    var key = keys[i]
	    fn.call(this, obj[key], key)
	  }
	}


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Expose forEach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * forEach
	 */
	
	function forEach (fn, arr) {
	  if (!arr) return
	
	  for (var i = 0, len = arr.length; i < len; ++i) {
	    fn.call(this, arr[i], i)
	  }
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(9);
	
	var _mapArray = __webpack_require__(20);
	
	var _mapArray2 = _interopRequireDefault(_mapArray);
	
	var _actions = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Create the initial document fragment
	 */
	
	function create(effect) {
	  return function (vnode) {
	    var path = arguments.length <= 1 || arguments[1] === undefined ? '0' : arguments[1];
	    return createRecursive(vnode, path);
	  };
	
	  function createRecursive(vnode, path) {
	    vnode.path = path;
	
	    if ((0, _util.isThunk)(vnode)) {
	      return createRecursive(effect((0, _actions.createThunk)(vnode)), (0, _util.createPath)(vnode, path, 0));
	    }
	
	    var children = (0, _mapArray2.default)(function (child, i) {
	      return createRecursive(child, (0, _util.createPath)(child, path, i));
	    }, vnode.children);
	    return effect((0, _actions.createNode)(vnode, children));
	  }
	}
	
	/**
	 * Exports
	 */
	
	/**
	 * Imports
	 */
	
	exports.default = create;

/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Expose map
	 */
	
	module.exports = map['default'] = map
	
	/**
	 * Map array
	 * @param  {Function} fn
	 * @param  {Array} arr
	 * @return {Array}
	 */
	
	function map (fn, arr) {
	  var len = arr.length
	  var result = new Array(len)
	  var self = this
	
	  for (var i = 0; i < len; ++i) {
	    result[i] = fn.call(self, arr[i], i)
	  }
	
	  return result
	}


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isUndefined = __webpack_require__(11);
	
	var _isUndefined2 = _interopRequireDefault(_isUndefined);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; } /**
	                                                                                                                              * Imports
	                                                                                                                              */
	
	/**
	 * Vnode creator
	 */
	
	function element(type, props) {
	  var len = arguments.length;
	  var children = [];
	
	  for (var i = 2, j = 0; i < len; ++i) {
	    j += filterFlatten(arguments[i], children, j);
	  }
	
	  var key = undefined;
	  if (props && !(0, _isUndefined2.default)(props.key)) {
	    key = props.key;
	    if (Object.keys(props).length === 1) {
	      props = undefined;
	    } else {
	      props.key = undefined;
	    }
	  }
	
	  return {
	    key: key,
	    type: type,
	    props: props,
	    children: children
	  };
	}
	
	/**
	 * Very fast in-place, single-pass filter/flatten
	 * algorithm
	 */
	
	function filterFlatten(item, arr, arrStart) {
	  var added = 0;
	
	  switch (type(item)) {
	    case 'array':
	      var len = item.length;
	      for (var i = 0; i < len; ++i) {
	        added += filterFlatten(item[i], arr, arrStart + added);
	      }
	      return added;
	    case 'null':
	    case 'undefined':
	      return 0;
	    case 'string':
	    case 'number':
	      arr[arrStart] = element('#text', { nodeValue: item });
	      break;
	    default:
	      arr[arrStart] = item;
	      break;
	  }
	
	  return 1;
	}
	
	function type(val) {
	  if (Array.isArray(val)) return 'array';
	  if (val === null) return 'null';
	  return typeof val === 'undefined' ? 'undefined' : _typeof(val);
	}
	
	/**
	 * Exports
	 */
	
	exports.default = element;

/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Modules
	 */
	
	/**
	 * Expose toInlineStyle
	 */
	
	module.exports = toInlineStyle['default'] = toInlineStyle
	
	/**
	 * Vars
	 */
	
	var upperCasePattern = /([A-Z])/g
	
	/**
	 * toInlineStyle
	 */
	
	function toInlineStyle (style) {
	  var str = ''
	
	  for (var key in style) {
	    str += format(key, style[key])
	  }
	
	  return hyphenate(str)
	}
	
	/**
	 * Hyphenate a given `str`
	 */
	
	function hyphenate (str) {
	  return str.replace(upperCasePattern, dashLower)
	}
	
	function dashLower (c) {
	  return '-' + c.toLowerCase()
	}
	
	/**
	 * Format a css key, value pair to their respective string representation
	 */
	
	function format (key, value) {
	  return key + ':' + value + ';'
	}


/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Expose capitalize
	 */
	
	module.exports = capitalize
	
	/**
	 * capitalize
	 */
	
	function capitalize (str) {
	  return str[0].toUpperCase() + str.slice(1)
	}


/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * Expose focusElement
	 */
	
	module.exports = focusElement
	
	/**
	 * focusElement
	 */
	
	 function focusElement (node) {
	   if (node.ownerDocument.activeElement !== node) {
	     node.focus()
	   }
	 }


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Expose isObject
	 */
	
	module.exports = isObject
	
	/**
	 * Constants
	 */
	
	var objString = toString(Object)
	
	/**
	 * Check for plain object.
	 *
	 * @param {Mixed} val
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject (val) {
	  return !!val && (val.constructor === Object || toString(val.constructor) === objString)
	}
	
	function toString (val) {
	  return Function.prototype.toString.call(val)
	}


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var keycodes = __webpack_require__(28)
	
	/**
	 * Expose keychord
	 */
	
	module.exports = keychord['default'] = keychord
	
	/**
	 * keychord
	 */
	
	function keychord (e) {
	  var chord = []
	
	  if (e.ctrlKey) chord.push('ctrl')
	  if (e.altKey) chord.push('alt')
	  if (e.metaKey) chord.push('command')
	  if (e.shiftKey) chord.push('shift')
	
	  var name = keycodes[e.which]
	  if (chord.indexOf(name) === -1) {
	    chord.push(name)
	  }
	
	  return chord.join('+')
	}


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Expose keycodes
	 */
	
	var keycodes = module.exports = {
	  8: 'backspace',
	  9: 'tab',
	  13: 'enter',
	  16: 'shift',
	  17: 'ctrl',
	  18: 'alt',
	  19: 'pause',
	  20: 'caps_lock',
	  27: 'esc',
	  32: 'space',
	  33: 'page_up',
	  34: 'page_down',
	  35: 'end',
	  36: 'home',
	  37: 'left',
	  38: 'up',
	  39: 'right',
	  40: 'down',
	  45: 'insert',
	  46: 'delete',
	  91: 'command',
	  93: 'right_click',
	  106: 'numpad_*',
	  107: 'numpad_+',
	  109: 'numpad_-',
	  110: 'numpad_.',
	  111: 'numpad_/',
	  144: 'num_lock',
	  145: 'scroll_lock',
	  182: 'my_computer',
	  183: 'my_calculator',
	  186: ';',
	  187: '=',
	  188: ',',
	  189: '-',
	  190: '.',
	  191: '/',
	  192: '`',
	  219: '[',
	  220: '\\',
	  221: ']',
	  222: "'"
	}
	
	// lower case chars
	for (var i = 97; i < 123; i++) {
	  keycodes[i - 32] = String.fromCharCode(i)
	}
	
	// numbers
	for (var j = 48; j < 58; j++) {
	  keycodes[j] = j - 48
	}
	
	// function keys
	for (var k = 1; k < 13; k++) {
	  keycodes[k + 111] = 'f' + k
	}
	
	// numpad keys
	for (var l = 0; l < 10; l++) {
	  keycodes[l + 96] = 'numpad_' + l
	}


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * domEvents
	 */
	
	var domEvents = [
	  'abort',
	  'animationend',
	  'animationiteration',
	  'animationstart',
	  'blur',
	  'canplay',
	  'canplaythrough',
	  'change',
	  'click',
	  'contextmenu',
	  'copy',
	  'cut',
	  'dblclick',
	  'drag',
	  'dragend',
	  'dragenter',
	  'dragexit',
	  'dragleave',
	  'dragover',
	  'dragstart',
	  'drop',
	  'durationchange',
	  'emptied',
	  'encrypted',
	  'ended',
	  'error',
	  'focus',
	  'focusin',
	  'focusout',
	  'input',
	  'invalid',
	  'keydown',
	  'keypress',
	  'keyup',
	  'load',
	  'loadeddata',
	  'loadedmetadata',
	  'loadstart',
	  'mousedown',
	  'mouseenter',
	  'mouseleave',
	  'mousemove',
	  'mouseout',
	  'mouseover',
	  'mouseup',
	  'paste',
	  'pause',
	  'play',
	  'playing',
	  'progress',
	  'ratechange',
	  'reset',
	  'resize',
	  'scroll',
	  'seeked',
	  'seeking',
	  'select',
	  'stalled',
	  'submit',
	  'suspend',
	  'timeupdate',
	  'touchcancel',
	  'touchend',
	  'touchmove',
	  'touchstart',
	  'transitionend',
	  'unload',
	  'volumechange',
	  'waiting',
	  'wheel'
	]
	
	/**
	 * Expose domEvents
	 */
	
	module.exports = domEvents


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var isObject = __webpack_require__(26)
	var isArray = __webpack_require__(31)
	var forEachObj = __webpack_require__(32)
	var forEachArr = __webpack_require__(33)
	
	/**
	 * Expose foreach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * For each
	 * @param  {Function} fn  iterator
	 * @param  {Object}   obj object to iterate over
	 */
	
	function forEach (fn, a) {
	  if (isArray(a)) return forEachArr.call(this, fn, a)
	  if (isObject(a)) return forEachObj.call(this, fn, a)
	}


/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Expose isArray
	 */
	
	module.exports = isArray['default'] = isArray
	
	/**
	 * isArray
	 */
	
	function isArray (val) {
	  return Array.isArray(val)
	}


/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * Expose forEach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * forEach
	 */
	
	function forEach (fn, obj) {
	  if (!obj) return
	
	  var keys = Object.keys(obj)
	
	  for (var i = 0, len = keys.length; i < len; ++i) {
	    var key = keys[i]
	    fn.call(this, obj[key], key)
	  }
	}


/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * Expose forEach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * forEach
	 */
	
	function forEach (fn, arr) {
	  if (!arr) return
	
	  for (var i = 0, len = arr.length; i < len; ++i) {
	    fn.call(this, arr[i], i)
	  }
	}


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var OneVersionConstraint = __webpack_require__(35);
	
	var MY_VERSION = '7';
	OneVersionConstraint('ev-store', MY_VERSION);
	
	var hashKey = '__EV_STORE_KEY@' + MY_VERSION;
	
	module.exports = EvStore;
	
	function EvStore(elem) {
	    var hash = elem[hashKey];
	
	    if (!hash) {
	        hash = elem[hashKey] = {};
	    }
	
	    return hash;
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Individual = __webpack_require__(36);
	
	module.exports = OneVersion;
	
	function OneVersion(moduleName, version, defaultValue) {
	    var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;
	    var enforceKey = key + '_ENFORCE_SINGLETON';
	
	    var versionValue = Individual(enforceKey, version);
	
	    if (versionValue !== version) {
	        throw new Error('Can only have one copy of ' +
	            moduleName + '.\n' +
	            'You already have version ' + versionValue +
	            ' installed.\n' +
	            'This means you cannot install version ' + version);
	    }
	
	    return Individual(key, defaultValue);
	}


/***/ },
/* 36 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/*global window, global*/
	
	var root = typeof window !== 'undefined' ?
	    window : typeof global !== 'undefined' ?
	    global : {};
	
	module.exports = Individual;
	
	function Individual(key, value) {
	    if (key in root) {
	        return root[key];
	    }
	
	    root[key] = value;
	
	    return value;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _element = __webpack_require__(4);
	
	var _element2 = _interopRequireDefault(_element);
	
	var _appbarExample = __webpack_require__(38);
	
	var _appbarExample2 = _interopRequireDefault(_appbarExample);
	
	var _cardExample = __webpack_require__(89);
	
	var _cardExample2 = _interopRequireDefault(_cardExample);
	
	var _buttonExample = __webpack_require__(91);
	
	var _buttonExample2 = _interopRequireDefault(_buttonExample);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function render(_ref) {
	  var props = _ref.props;
	
	  return (0, _element2.default)(
	    'div',
	    null,
	    (0, _element2.default)(_appbarExample2.default, null),
	    (0, _element2.default)(_cardExample2.default, null),
	    (0, _element2.default)(_buttonExample2.default, null)
	  );
	}
	
	exports.default = render;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _element = __webpack_require__(4);
	
	var _element2 = _interopRequireDefault(_element);
	
	var _src = __webpack_require__(39);
	
	var _combineReducers = __webpack_require__(72);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _handleActions2 = __webpack_require__(82);
	
	var _handleActions3 = _interopRequireDefault(_handleActions2);
	
	var _createAction = __webpack_require__(86);
	
	var _createAction2 = _interopRequireDefault(_createAction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var handleClick = (0, _createAction2.default)('HANDLE_CLICK');
	
	function initialState() {
	  return {
	    toggled: false
	  };
	}
	
	function render(_ref) {
	  var props = _ref.props;
	  var local = _ref.local;
	  var state = _ref.state;
	
	  return (0, _element2.default)(_src.AppBar, {
	    title: 'Components',
	    iconElementRight: (0, _element2.default)(_src.FlatButton, { label: 'hello' }),
	    onRightElementClick: local(handleClick) });
	}
	
	var reducer = (0, _combineReducers2.default)({
	  toggled: (0, _handleActions3.default)(_defineProperty({}, handleClick, function (toggled) {
	    return !toggled;
	  }))
	});
	
	exports.default = {
	  initialState: initialState,
	  render: render,
	  reducer: reducer
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FlatButton = exports.AppBar = undefined;
	
	var _components = __webpack_require__(40);
	
	exports.AppBar = _components.AppBar;
	exports.FlatButton = _components.FlatButton;
	exports.default = {
	  AppBar: _components.AppBar,
	  FlatButton: _components.FlatButton
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FlatButton = exports.CardTitle = exports.CardText = exports.Card = exports.AppBar = undefined;
	
	var _AppBar = __webpack_require__(41);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	var _Card = __webpack_require__(67);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	var _CardText = __webpack_require__(68);
	
	var _CardText2 = _interopRequireDefault(_CardText);
	
	var _CardTitle = __webpack_require__(69);
	
	var _CardTitle2 = _interopRequireDefault(_CardTitle);
	
	var _FlatButton = __webpack_require__(70);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.AppBar = _AppBar2.default;
	exports.Card = _Card2.default;
	exports.CardText = _CardText2.default;
	exports.CardTitle = _CardTitle2.default;
	exports.FlatButton = _FlatButton2.default;
	exports.default = {
	  AppBar: _AppBar2.default,
	  Card: _Card2.default,
	  CardText: _CardText2.default,
	  CardTitle: _CardTitle2.default,
	  FlatButton: _FlatButton2.default
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _element = __webpack_require__(4);
	
	var _element2 = _interopRequireDefault(_element);
	
	var _theme = __webpack_require__(42);
	
	var _theme2 = _interopRequireDefault(_theme);
	
	var _jssNested = __webpack_require__(45);
	
	var _jssNested2 = _interopRequireDefault(_jssNested);
	
	var _jssCamelCase = __webpack_require__(46);
	
	var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);
	
	var _jssVendorPrefixer = __webpack_require__(47);
	
	var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);
	
	var _jss = __webpack_require__(53);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var jss = (0, _jss.create)();
	
	var spacing = _theme2.default.spacing;
	var fontFamily = _theme2.default.fontFamily;
	var palette = _theme2.default.palette;
	
	var styles = jss.use((0, _jssNested2.default)()).use((0, _jssCamelCase2.default)()).use((0, _jssVendorPrefixer2.default)()).createStyleSheet({
	  container: {
	    display: 'flex',
	    alignItems: 'center',
	    paddingLeft: spacing.desktopGutter,
	    paddingRight: spacing.desktopGutter,
	    boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.2)',
	    backgroundColor: palette.primary1Color,
	    color: palette.alternateTextColor,
	    height: spacing.desktopKeylineIncrement,
	    lineHeight: 64,
	    fontSmoothing: 'antialiased'
	  },
	  title: {
	    fontFamily: fontFamily,
	    fontSize: 24,
	    fontWeight: 400,
	    flex: 1
	  },
	  iconLeft: {
	    marginRight: 12
	  }
	}).attach();
	
	function render(_ref) {
	  var props = _ref.props;
	  var children = _ref.children;
	  var title = props.title;
	  var style = props.style;
	  var iconElementLeft = props.iconElementLeft;
	  var iconElementRight = props.iconElementRight;
	  var onLeftElementClick = props.onLeftElementClick;
	  var onRightElementClick = props.onRightElementClick;
	
	  return (0, _element2.default)(
	    'div',
	    { 'class': styles.classes.container },
	    iconElementLeft && (0, _element2.default)(
	      'div',
	      { 'class': styles.classes.iconLeft, style: style.iconLeft, onClick: onLeftElementClick },
	      iconElementLeft
	    ),
	    title && (0, _element2.default)(
	      'h1',
	      { 'class': styles.classes.title, style: styles.title },
	      title
	    ),
	    children,
	    iconElementRight && (0, _element2.default)(
	      'div',
	      { onClick: onRightElementClick },
	      iconElementRight
	    )
	  );
	}
	
	exports.default = render;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(43);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _spacing = __webpack_require__(44);
	
	var _spacing2 = _interopRequireDefault(_spacing);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  spacing: _spacing2.default,
	  fontFamily: 'Roboto, sans-serif',
	  boxShadow: '0 0 5px 2px rgba(0,0,0,0.2)',
	  palette: {
	    primary1Color: _colors2.default.cyan500,
	    primary2Color: _colors2.default.cyan700,
	    primary3Color: _colors2.default.grey400,
	    accent1Color: _colors2.default.pinkA200,
	    accent2Color: _colors2.default.grey100,
	    accent3Color: _colors2.default.grey500,
	    textColor: _colors2.default.darkBlack,
	    alternateTextColor: _colors2.default.white,
	    canvasColor: _colors2.default.white,
	    borderColor: _colors2.default.grey300,
	    disabledColor: _colors2.default.darkBlack,
	    pickerHeaderColor: _colors2.default.cyan500,
	    clockCircleColor: _colors2.default.darkBlack
	  }
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  red50: '#ffebee',
	  red100: '#ffcdd2',
	  red200: '#ef9a9a',
	  red300: '#e57373',
	  red400: '#ef5350',
	  red500: '#f44336',
	  red600: '#e53935',
	  red700: '#d32f2f',
	  red800: '#c62828',
	  red900: '#b71c1c',
	  redA100: '#ff8a80',
	  redA200: '#ff5252',
	  redA400: '#ff1744',
	  redA700: '#d50000',
	
	  pink50: '#fce4ec',
	  pink100: '#f8bbd0',
	  pink200: '#f48fb1',
	  pink300: '#f06292',
	  pink400: '#ec407a',
	  pink500: '#e91e63',
	  pink600: '#d81b60',
	  pink700: '#c2185b',
	  pink800: '#ad1457',
	  pink900: '#880e4f',
	  pinkA100: '#ff80ab',
	  pinkA200: '#ff4081',
	  pinkA400: '#f50057',
	  pinkA700: '#c51162',
	
	  purple50: '#f3e5f5',
	  purple100: '#e1bee7',
	  purple200: '#ce93d8',
	  purple300: '#ba68c8',
	  purple400: '#ab47bc',
	  purple500: '#9c27b0',
	  purple600: '#8e24aa',
	  purple700: '#7b1fa2',
	  purple800: '#6a1b9a',
	  purple900: '#4a148c',
	  purpleA100: '#ea80fc',
	  purpleA200: '#e040fb',
	  purpleA400: '#d500f9',
	  purpleA700: '#aa00ff',
	
	  deepPurple50: '#ede7f6',
	  deepPurple100: '#d1c4e9',
	  deepPurple200: '#b39ddb',
	  deepPurple300: '#9575cd',
	  deepPurple400: '#7e57c2',
	  deepPurple500: '#673ab7',
	  deepPurple600: '#5e35b1',
	  deepPurple700: '#512da8',
	  deepPurple800: '#4527a0',
	  deepPurple900: '#311b92',
	  deepPurpleA100: '#b388ff',
	  deepPurpleA200: '#7c4dff',
	  deepPurpleA400: '#651fff',
	  deepPurpleA700: '#6200ea',
	
	  indigo50: '#e8eaf6',
	  indigo100: '#c5cae9',
	  indigo200: '#9fa8da',
	  indigo300: '#7986cb',
	  indigo400: '#5c6bc0',
	  indigo500: '#3f51b5',
	  indigo600: '#3949ab',
	  indigo700: '#303f9f',
	  indigo800: '#283593',
	  indigo900: '#1a237e',
	  indigoA100: '#8c9eff',
	  indigoA200: '#536dfe',
	  indigoA400: '#3d5afe',
	  indigoA700: '#304ffe',
	
	  blue50: '#e3f2fd',
	  blue100: '#bbdefb',
	  blue200: '#90caf9',
	  blue300: '#64b5f6',
	  blue400: '#42a5f5',
	  blue500: '#2196f3',
	  blue600: '#1e88e5',
	  blue700: '#1976d2',
	  blue800: '#1565c0',
	  blue900: '#0d47a1',
	  blueA100: '#82b1ff',
	  blueA200: '#448aff',
	  blueA400: '#2979ff',
	  blueA700: '#2962ff',
	
	  lightBlue50: '#e1f5fe',
	  lightBlue100: '#b3e5fc',
	  lightBlue200: '#81d4fa',
	  lightBlue300: '#4fc3f7',
	  lightBlue400: '#29b6f6',
	  lightBlue500: '#03a9f4',
	  lightBlue600: '#039be5',
	  lightBlue700: '#0288d1',
	  lightBlue800: '#0277bd',
	  lightBlue900: '#01579b',
	  lightBlueA100: '#80d8ff',
	  lightBlueA200: '#40c4ff',
	  lightBlueA400: '#00b0ff',
	  lightBlueA700: '#0091ea',
	
	  cyan50: '#e0f7fa',
	  cyan100: '#b2ebf2',
	  cyan200: '#80deea',
	  cyan300: '#4dd0e1',
	  cyan400: '#26c6da',
	  cyan500: '#00bcd4',
	  cyan600: '#00acc1',
	  cyan700: '#0097a7',
	  cyan800: '#00838f',
	  cyan900: '#006064',
	  cyanA100: '#84ffff',
	  cyanA200: '#18ffff',
	  cyanA400: '#00e5ff',
	  cyanA700: '#00b8d4',
	
	  teal50: '#e0f2f1',
	  teal100: '#b2dfdb',
	  teal200: '#80cbc4',
	  teal300: '#4db6ac',
	  teal400: '#26a69a',
	  teal500: '#009688',
	  teal600: '#00897b',
	  teal700: '#00796b',
	  teal800: '#00695c',
	  teal900: '#004d40',
	  tealA100: '#a7ffeb',
	  tealA200: '#64ffda',
	  tealA400: '#1de9b6',
	  tealA700: '#00bfa5',
	
	  green50: '#e8f5e9',
	  green100: '#c8e6c9',
	  green200: '#a5d6a7',
	  green300: '#81c784',
	  green400: '#66bb6a',
	  green500: '#4caf50',
	  green600: '#43a047',
	  green700: '#388e3c',
	  green800: '#2e7d32',
	  green900: '#1b5e20',
	  greenA100: '#b9f6ca',
	  greenA200: '#69f0ae',
	  greenA400: '#00e676',
	  greenA700: '#00c853',
	
	  lightGreen50: '#f1f8e9',
	  lightGreen100: '#dcedc8',
	  lightGreen200: '#c5e1a5',
	  lightGreen300: '#aed581',
	  lightGreen400: '#9ccc65',
	  lightGreen500: '#8bc34a',
	  lightGreen600: '#7cb342',
	  lightGreen700: '#689f38',
	  lightGreen800: '#558b2f',
	  lightGreen900: '#33691e',
	  lightGreenA100: '#ccff90',
	  lightGreenA200: '#b2ff59',
	  lightGreenA400: '#76ff03',
	  lightGreenA700: '#64dd17',
	
	  lime50: '#f9fbe7',
	  lime100: '#f0f4c3',
	  lime200: '#e6ee9c',
	  lime300: '#dce775',
	  lime400: '#d4e157',
	  lime500: '#cddc39',
	  lime600: '#c0ca33',
	  lime700: '#afb42b',
	  lime800: '#9e9d24',
	  lime900: '#827717',
	  limeA100: '#f4ff81',
	  limeA200: '#eeff41',
	  limeA400: '#c6ff00',
	  limeA700: '#aeea00',
	
	  yellow50: '#fffde7',
	  yellow100: '#fff9c4',
	  yellow200: '#fff59d',
	  yellow300: '#fff176',
	  yellow400: '#ffee58',
	  yellow500: '#ffeb3b',
	  yellow600: '#fdd835',
	  yellow700: '#fbc02d',
	  yellow800: '#f9a825',
	  yellow900: '#f57f17',
	  yellowA100: '#ffff8d',
	  yellowA200: '#ffff00',
	  yellowA400: '#ffea00',
	  yellowA700: '#ffd600',
	
	  amber50: '#fff8e1',
	  amber100: '#ffecb3',
	  amber200: '#ffe082',
	  amber300: '#ffd54f',
	  amber400: '#ffca28',
	  amber500: '#ffc107',
	  amber600: '#ffb300',
	  amber700: '#ffa000',
	  amber800: '#ff8f00',
	  amber900: '#ff6f00',
	  amberA100: '#ffe57f',
	  amberA200: '#ffd740',
	  amberA400: '#ffc400',
	  amberA700: '#ffab00',
	
	  orange50: '#fff3e0',
	  orange100: '#ffe0b2',
	  orange200: '#ffcc80',
	  orange300: '#ffb74d',
	  orange400: '#ffa726',
	  orange500: '#ff9800',
	  orange600: '#fb8c00',
	  orange700: '#f57c00',
	  orange800: '#ef6c00',
	  orange900: '#e65100',
	  orangeA100: '#ffd180',
	  orangeA200: '#ffab40',
	  orangeA400: '#ff9100',
	  orangeA700: '#ff6d00',
	
	  deepOrange50: '#fbe9e7',
	  deepOrange100: '#ffccbc',
	  deepOrange200: '#ffab91',
	  deepOrange300: '#ff8a65',
	  deepOrange400: '#ff7043',
	  deepOrange500: '#ff5722',
	  deepOrange600: '#f4511e',
	  deepOrange700: '#e64a19',
	  deepOrange800: '#d84315',
	  deepOrange900: '#bf360c',
	  deepOrangeA100: '#ff9e80',
	  deepOrangeA200: '#ff6e40',
	  deepOrangeA400: '#ff3d00',
	  deepOrangeA700: '#dd2c00',
	
	  brown50: '#efebe9',
	  brown100: '#d7ccc8',
	  brown200: '#bcaaa4',
	  brown300: '#a1887f',
	  brown400: '#8d6e63',
	  brown500: '#795548',
	  brown600: '#6d4c41',
	  brown700: '#5d4037',
	  brown800: '#4e342e',
	  brown900: '#3e2723',
	
	  blueGrey50: '#eceff1',
	  blueGrey100: '#cfd8dc',
	  blueGrey200: '#b0bec5',
	  blueGrey300: '#90a4ae',
	  blueGrey400: '#78909c',
	  blueGrey500: '#607d8b',
	  blueGrey600: '#546e7a',
	  blueGrey700: '#455a64',
	  blueGrey800: '#37474f',
	  blueGrey900: '#263238',
	
	  grey50: '#fafafa',
	  grey100: '#f5f5f5',
	  grey200: '#eeeeee',
	  grey300: '#e0e0e0',
	  grey400: '#bdbdbd',
	  grey500: '#9e9e9e',
	  grey600: '#757575',
	  grey700: '#616161',
	  grey800: '#424242',
	  grey900: '#212121',
	
	  black: '#000000',
	  white: '#ffffff',
	
	  transparent: 'rgba(0, 0, 0, 0)',
	  fullBlack: 'rgba(0, 0, 0, 1)',
	  darkBlack: 'rgba(0, 0, 0, 0.87)',
	  lightBlack: 'rgba(0, 0, 0, 0.54)',
	  minBlack: 'rgba(0, 0, 0, 0.26)',
	  faintBlack: 'rgba(0, 0, 0, 0.12)',
	  fullWhite: 'rgba(255, 255, 255, 1)',
	  darkWhite: 'rgba(255, 255, 255, 0.87)',
	  lightWhite: 'rgba(255, 255, 255, 0.54)'
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  iconSize: 24,
	
	  desktopGutter: 24,
	  desktopGutterMore: 32,
	  desktopGutterLess: 16,
	  desktopGutterMini: 8,
	  desktopKeylineIncrement: 64,
	  desktopDropDownMenuItemHeight: 32,
	  desktopDropDownMenuFontSize: 15,
	  desktopLeftNavMenuItemHeight: 48,
	  desktopSubheaderHeight: 48,
	  desktopToolbarHeight: 56
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = jssNested;
	var regExp = /&/gi;
	
	/**
	 * Convert nested rules to separate, remove them from original styles.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	
	function jssNested() {
	  return function (rule) {
	    if (rule.type !== 'regular') return;
	    var _rule$options = rule.options;
	    var sheet = _rule$options.sheet;
	    var jss = _rule$options.jss;
	
	    var container = sheet || jss;
	    var options = rule.options;
	
	    for (var prop in rule.style) {
	      if (prop[0] === '&') {
	        if (options.named) options = _extends({}, options, { named: false });
	        var selector = prop.replace(regExp, rule.selector);
	        container.createRule(selector, rule.style[prop], options);
	        delete rule.style[prop];
	      }
	    }
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = jssCamelCase;
	var regExp = /([A-Z])/g;
	
	/**
	 * Allow camel cased property names by converting them back to dasherized.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	
	function jssCamelCase() {
	  return function (rule) {
	    var style = rule.style;
	
	    if (!style) return;
	    rule.style = {};
	    for (var prop in style) {
	      var value = style[prop];
	      prop = prop.replace(regExp, replace);
	      rule.style[prop] = value;
	    }
	  };
	}
	
	function replace(c) {
	  return '-' + c.toLowerCase();
	}
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = jssVendorPrefixer;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _cssVendor = __webpack_require__(48);
	
	var vendor = _interopRequireWildcard(_cssVendor);
	
	/**
	 * Add vendor prefix to a property name when needed.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	
	function jssVendorPrefixer() {
	  return function (rule) {
	    if (rule.type === 'keyframe') {
	      rule.selector = '@' + vendor.prefix.css + 'keyframes' + rule.selector.substr(10);
	      return;
	    }
	
	    if (rule.type !== 'regular') return;
	
	    for (var prop in rule.style) {
	      var value = rule.style[prop];
	
	      var changeProp = false;
	      var supportedProp = vendor.supportedProperty(prop);
	      if (supportedProp && supportedProp !== prop) changeProp = true;
	
	      var changeValue = false;
	      var supportedValue = vendor.supportedValue(supportedProp, value);
	      if (supportedValue && supportedValue !== value) changeValue = true;
	
	      if (changeProp || changeValue) {
	        if (changeProp) delete rule.style[prop];
	        rule.style[supportedProp || prop] = supportedValue || value;
	      }
	    }
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * CSS Vendor prefix detection and property feature testing.
	 *
	 * @copyright Oleg Slobodskoi 2015
	 * @website https://github.com/jsstyles/css-vendor
	 * @license MIT
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _prefix2 = __webpack_require__(49);
	
	var _prefix3 = _interopRequireDefault(_prefix2);
	
	exports.prefix = _prefix3['default'];
	
	var _supportedProperty2 = __webpack_require__(50);
	
	var _supportedProperty3 = _interopRequireDefault(_supportedProperty2);
	
	exports.supportedProperty = _supportedProperty3['default'];
	
	var _supportedValue2 = __webpack_require__(52);
	
	var _supportedValue3 = _interopRequireDefault(_supportedValue2);
	
	exports.supportedValue = _supportedValue3['default'];

/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * Export javascript style and css style vendor prefixes.
	 * Based on "transform" support test.
	 */
	
	'use strict';
	
	exports.__esModule = true;
	var js = '';
	var css = '';
	
	// We should not do anything if required serverside.
	if (typeof document != 'undefined') {
	  var jsCssMap = {
	    Webkit: '-webkit-',
	    Moz: '-moz-',
	    // IE did it wrong again ...
	    ms: '-ms-',
	    O: '-o-'
	  };
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';
	
	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      js = key;
	      css = jsCssMap[key];
	      break;
	    }
	  }
	}
	
	/**
	 * Vendor prefix string for the current browser.
	 *
	 * @type {{js: String, css: String}}
	 * @api public
	 */
	exports['default'] = { js: js, css: css };
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = supportedProperty;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _prefix = __webpack_require__(49);
	
	var _prefix2 = _interopRequireDefault(_prefix);
	
	var _camelize = __webpack_require__(51);
	
	var _camelize2 = _interopRequireDefault(_camelize);
	
	var el = undefined;
	var cache = {};
	
	if (typeof document != 'undefined') {
	  el = document.createElement('p');
	
	  /**
	   * We test every property on vendor prefix requirement.
	   * Once tested, result is cached. It gives us up to 70% perf boost.
	   * http://jsperf.com/element-style-object-access-vs-plain-object
	   *
	   * Prefill cache with known css properties to reduce amount of
	   * properties we need to feature test at runtime.
	   * http://davidwalsh.name/vendor-prefix
	   */
	  var computed = window.getComputedStyle(document.documentElement, '');
	  for (var key in computed) {
	    cache[computed[key]] = computed[key];
	  }
	}
	
	/**
	 * Test if a property is supported, returns supported property with vendor
	 * prefix if required. Returns `false` if not supported.
	 *
	 * @param {String} prop dash separated
	 * @return {String|Boolean}
	 * @api public
	 */
	
	function supportedProperty(prop) {
	  // We have not tested this prop yet, lets do the test.
	  if (cache[prop] != null) return cache[prop];
	
	  // Camelization is required because we can't test using
	  // css syntax for e.g. in FF.
	  // Test if property is supported as it is.
	  if (_camelize2['default'](prop) in el.style) {
	    cache[prop] = prop;
	    // Test if property is supported with vendor prefix.
	  } else if (_prefix2['default'].js + _camelize2['default']('-' + prop) in el.style) {
	      cache[prop] = _prefix2['default'].css + prop;
	    } else {
	      cache[prop] = false;
	    }
	
	  return cache[prop];
	}
	
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = camelize;
	var regExp = /[-\s]+(.)?/g;
	
	/**
	 * Convert dash separated strings to camel cased.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	function camelize(str) {
	  return str.replace(regExp, toUpper);
	}
	
	function toUpper(match, c) {
	  return c ? c.toUpperCase() : '';
	}
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = supportedValue;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _prefix = __webpack_require__(49);
	
	var _prefix2 = _interopRequireDefault(_prefix);
	
	var cache = {};
	var el = undefined;
	
	if (typeof document != 'undefined') el = document.createElement('p');
	
	/**
	 * Returns prefixed value if needed. Returns `false` if value is not supported.
	 *
	 * @param {String} property
	 * @param {String} value
	 * @return {String|Boolean}
	 * @api public
	 */
	
	function supportedValue(property, value) {
	  if (typeof value != 'string' || !isNaN(parseInt(value, 10))) return value;
	
	  var cacheKey = property + value;
	
	  if (cache[cacheKey] != null) return cache[cacheKey];
	
	  // Test value as it is.
	  el.style[property] = value;
	
	  // Value is supported as it is.
	  if (el.style[property] === value) {
	    cache[cacheKey] = value;
	  } else {
	    // Test value with vendor prefix.
	    value = _prefix2['default'].css + value;
	
	    // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.
	    if (value === '-ms-flex') value = '-ms-flexbox';
	
	    el.style[property] = value;
	
	    // Value is supported with vendor prefix.
	    if (el.style[property] === value) cache[cacheKey] = value;
	  }
	
	  if (!cache[cacheKey]) cache[cacheKey] = false;
	
	  return cache[cacheKey];
	}
	
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * StyleSheets written in javascript.
	 *
	 * @copyright Oleg Slobodskoi 2015
	 * @website https://github.com/jsstyles/jss
	 * @license MIT
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Jss = __webpack_require__(54);
	
	var _Jss2 = _interopRequireDefault(_Jss);
	
	exports['default'] = new _Jss2['default']();
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _StyleSheet = __webpack_require__(55);
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	var _PluginsRegistry = __webpack_require__(66);
	
	var _PluginsRegistry2 = _interopRequireDefault(_PluginsRegistry);
	
	var _uid = __webpack_require__(58);
	
	var uid = _interopRequireWildcard(_uid);
	
	var _createRule2 = __webpack_require__(56);
	
	var _createRule3 = _interopRequireDefault(_createRule2);
	
	var _findRenderer = __webpack_require__(63);
	
	var _findRenderer2 = _interopRequireDefault(_findRenderer);
	
	/**
	 * Main Jss class.
	 *
	 * @api public
	 */
	
	var Jss = (function () {
	  function Jss() {
	    _classCallCheck(this, Jss);
	
	    this.plugins = new _PluginsRegistry2['default']();
	    this.uid = uid;
	  }
	
	  /**
	   * Creates a new instance of Jss.
	   *
	   * @see Jss
	   * @api public
	   */
	
	  Jss.prototype.create = function create() {
	    return new Jss();
	  };
	
	  /**
	   * Create a stylesheet.
	   *
	   * @see StyleSheet
	   * @api public
	   */
	
	  Jss.prototype.createStyleSheet = function createStyleSheet(rules, options) {
	    return new _StyleSheet2['default'](rules, _extends({}, options, { jss: this }));
	  };
	
	  /**
	   * Create a rule.
	   *
	   * @see createRule
	   * @api public
	   */
	
	  Jss.prototype.createRule = function createRule(selector, style, options) {
	    // Enable rule without selector.
	    if (typeof selector == 'object') {
	      options = style;
	      style = selector;
	      selector = null;
	    }
	    var rule = _createRule3['default'](selector, style, _extends({}, options, {
	      jss: this,
	      Renderer: _findRenderer2['default'](options)
	    }));
	    this.plugins.run(rule);
	    return rule;
	  };
	
	  /**
	   * Register plugin. Passed function will be invoked with a rule instance.
	   *
	   * @param {Function} fn
	   * @api public
	   */
	
	  Jss.prototype.use = function use(fn) {
	    this.plugins.use(fn);
	    return this;
	  };
	
	  return Jss;
	})();
	
	exports['default'] = Jss;
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _createRule2 = __webpack_require__(56);
	
	var _createRule3 = _interopRequireDefault(_createRule2);
	
	var _findRenderer = __webpack_require__(63);
	
	var _findRenderer2 = _interopRequireDefault(_findRenderer);
	
	/**
	 * StyleSheet model.
	 *
	 * Options:
	 *
	 *  - 'media' style element attribute
	 *  - 'title' style element attribute
	 *  - 'type' style element attribute
	 *  - 'named' true by default - keys are names, selectors will be generated,
	 *    if false - keys are global selectors
	 *  - 'link' link renderable CSS rules with their corresponding models, false
	 *    by default because fast by default
	 *
	 * @param {Object} [rules] object with selectors and declarations
	 * @param {Object} [options]
	 * @api public
	 */
	
	var StyleSheet = (function () {
	  function StyleSheet(rules, options) {
	    _classCallCheck(this, StyleSheet);
	
	    this.options = _extends({}, options);
	    if (this.options.named == null) this.options.named = true;
	    this.rules = Object.create(null);
	    this.classes = Object.create(null);
	    this.attached = false;
	    this.deployed = false;
	    this.linked = false;
	
	    var Renderer = _findRenderer2['default'](this.options);
	    this.options.Renderer = Renderer;
	    this.renderer = new Renderer(this.options);
	
	    for (var _name in rules) {
	      this.createRule(_name, rules[_name]);
	    }
	  }
	
	  /**
	   * Attach renderable to the render tree.
	   *
	   * @api public
	   * @return {StyleSheet}
	   */
	
	  StyleSheet.prototype.attach = function attach() {
	    if (this.attached) return this;
	    if (!this.deployed) this.deploy();
	    this.renderer.attach();
	    if (!this.linked && this.options.link) this.link();
	    this.attached = true;
	    return this;
	  };
	
	  /**
	   * Remove renderable from render tree.
	   *
	   * @return {StyleSheet}
	   * @api public
	   */
	
	  StyleSheet.prototype.detach = function detach() {
	    if (!this.attached) return this;
	    this.renderer.detach();
	    this.attached = false;
	    return this;
	  };
	
	  /**
	   * Add a rule to the current stylesheet. Will insert a rule also after the stylesheet
	   * has been rendered first time.
	   *
	   * @param {Object} [name] can be selector or name if ´options.named is true
	   * @param {Object} style property/value hash
	   * @return {Rule}
	   * @api public
	   */
	
	  StyleSheet.prototype.addRule = function addRule(name, style) {
	    var rule = this.createRule(name, style);
	    // Don't insert rule directly if there is no stringified version yet.
	    // It will be inserted all together when .attach is called.
	    if (this.deployed) {
	      var renderable = this.renderer.insertRule(rule);
	      if (this.options.link) rule.renderable = renderable;
	    }
	    return rule;
	  };
	
	  /**
	   * Create rules, will render also after stylesheet was rendered the first time.
	   *
	   * @param {Object} rules name:style hash.
	   * @return {Array} array of added rules
	   * @api public
	   */
	
	  StyleSheet.prototype.addRules = function addRules(rules) {
	    var added = [];
	    for (var _name2 in rules) {
	      added.push(this.addRule(_name2, rules[_name2]));
	    }
	    return added;
	  };
	
	  /**
	   * Get a rule.
	   *
	   * @param {String} name can be selector or name if `named` option is true.
	   * @return {Rule}
	   * @api public
	   */
	
	  StyleSheet.prototype.getRule = function getRule(name) {
	    return this.rules[name];
	  };
	
	  /**
	   * Convert rules to a CSS string.
	   *
	   * @param {Object} options
	   * @return {String}
	   * @api public
	   */
	
	  StyleSheet.prototype.toString = function toString(options) {
	    var rules = this.rules;
	
	    var stringified = Object.create(null);
	    var str = '';
	    for (var _name3 in rules) {
	      var rule = rules[_name3];
	      // We have the same rule referenced twice if using named rules.
	      // By name and by selector.
	      if (stringified[rule.id]) {
	        continue;
	      }
	      if (str) str += '\n';
	      str += rules[_name3].toString(options);
	      stringified[rule.id] = true;
	    }
	    return str;
	  };
	
	  /**
	   * Create a rule, will not render after stylesheet was rendered the first time.
	   * Will link the rule in `this.rules`.
	   *
	   * @see createRule
	   * @api private
	   */
	
	  StyleSheet.prototype.createRule = function createRule(name, style, options) {
	    options = _extends({}, options, {
	      sheet: this,
	      jss: this.options.jss,
	      Renderer: this.options.Renderer
	    });
	    // Scope options overwrite instance options.
	    if (options.named == null) options.named = this.options.named;
	    var rule = _createRule3['default'](name, style, options);
	    // Register conditional rule, it will stringify it's child rules properly.
	    if (rule.type === 'conditional') {
	      this.rules[rule.selector] = rule;
	    } else if (rule.type === 'simple') {
	      this.rules[rule.name] = rule;
	    }
	    // This is a rule which is a child of a condtional rule.
	    // We need to register its class name only.
	    else if (rule.options.parent && rule.options.parent.type === 'conditional') {
	        // Only named rules should be referenced in `classes`.
	        if (rule.options.named) this.classes[name] = rule.className;
	      } else {
	        this.rules[rule.selector] = rule;
	        if (options.named) {
	          this.rules[name] = rule;
	          this.classes[name] = rule.className;
	        }
	      }
	    options.jss.plugins.run(rule);
	    return rule;
	  };
	
	  /**
	   * Deploy pure CSS string to a renderable.
	   *
	   * @return {StyleSheet}
	   * @api private
	   */
	
	  StyleSheet.prototype.deploy = function deploy() {
	    this.renderer.deploy(this);
	    this.deployed = true;
	    return this;
	  };
	
	  /**
	   * Link renderable CSS rules with their corresponding models.
	   *
	   * @return {StyleSheet}
	   * @api private
	   */
	
	  StyleSheet.prototype.link = function link() {
	    var renderables = this.renderer.getRules();
	    for (var selector in renderables) {
	      var rule = this.rules[selector];
	      if (rule) rule.renderable = renderables[selector];
	    }
	    this.linked = true;
	    return this;
	  };
	
	  return StyleSheet;
	})();
	
	exports['default'] = StyleSheet;
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = createRule;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Rule = __webpack_require__(57);
	
	var _Rule2 = _interopRequireDefault(_Rule);
	
	var _SimpleRule = __webpack_require__(60);
	
	var _SimpleRule2 = _interopRequireDefault(_SimpleRule);
	
	var _KeyframeRule = __webpack_require__(61);
	
	var _KeyframeRule2 = _interopRequireDefault(_KeyframeRule);
	
	var _ConditionalRule = __webpack_require__(62);
	
	var _ConditionalRule2 = _interopRequireDefault(_ConditionalRule);
	
	/**
	 * Map of at rules to corresponding implementation class.
	 *
	 * @type {Object}
	 */
	var atRuleClassMap = {
	  '@charset': _SimpleRule2['default'],
	  '@import': _SimpleRule2['default'],
	  '@namespace': _SimpleRule2['default'],
	  '@keyframes': _KeyframeRule2['default'],
	  '@media': _ConditionalRule2['default'],
	  '@supports': _ConditionalRule2['default'],
	  '@font-face': _Rule2['default']
	};
	
	var atRuleNameRegExp = /^@[^ ]+/;
	
	/**
	 * Create rule factory.
	 *
	 * @param {Object} [selector] if you don't pass selector - it will be generated
	 * @param {Object} [style] declarations block
	 * @param {Object} [options] rule options
	 * @return {Object} rule
	 * @api private
	 */
	
	function createRule(selector) {
	  var style = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  // Is an at-rule.
	  if (selector && selector[0] === '@') {
	    var _name = atRuleNameRegExp.exec(selector)[0];
	    var AtRule = atRuleClassMap[_name];
	    // We use regular rule class to handle font rule,
	    // font-face rule should not be named.
	    if (_name === '@font-face' && options.named) {
	      options = _extends({}, options, { named: false });
	    }
	    return new AtRule(selector, style, options);
	  }
	  if (options.named == null) options.named = true;
	  return new _Rule2['default'](selector, style, options);
	}
	
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _uid = __webpack_require__(58);
	
	var uid = _interopRequireWildcard(_uid);
	
	var _clone = __webpack_require__(59);
	
	var _clone2 = _interopRequireDefault(_clone);
	
	/**
	 * Regular rules and font-face.
	 *
	 * @api private
	 */
	
	var Rule = (function () {
	  function Rule(selector, style, options) {
	    _classCallCheck(this, Rule);
	
	    this.id = uid.get();
	    this.type = 'regular';
	    this.options = options;
	    this.selector = selector;
	    if (options.named) {
	      this.name = selector;
	      this.className = options.className || (this.name ? this.name + '--' + this.id : this.id);
	      this.selector = '.' + this.className;
	    }
	    this.originalStyle = style;
	    // We expect style to be plain object.
	    this.style = _clone2['default'](style);
	  }
	
	  /**
	   * Indent a string.
	   *
	   * http://jsperf.com/array-join-vs-for
	   *
	   * @param {Number} level
	   * @param {String} str
	   * @return {String}
	   * @api private
	   */
	
	  /**
	   * Get or set a style property.
	   *
	   * @param {String} name
	   * @param {String|Number} [value]
	   * @return {Rule|String|Number}
	   * @api public
	   */
	
	  Rule.prototype.prop = function prop(name, value) {
	    var style = this.options.Renderer.style;
	
	    // Its a setter.
	    if (value != null) {
	      this.style[name] = value;
	      // If linked option in StyleSheet is not passed, renderable is not defined.
	      if (this.renderable) style(this.renderable, name, value);
	      return this;
	    }
	    // Its a getter, read the value from the DOM if its not cached.
	    if (this.renderable && this.style[name] == null) {
	      // Cache the value after we have got it from the DOM once.
	      this.style[name] = style(this.renderable, name);
	    }
	    return this.style[name];
	  };
	
	  /**
	   * Apply rule to an element inline.
	   *
	   * @param {Element} renderable
	   * @return {Rule}
	   * @api public
	   */
	
	  Rule.prototype.applyTo = function applyTo(renderable) {
	    for (var prop in this.style) {
	      var value = this.style[prop];
	      var style = this.options.Renderer.style;
	
	      if (Array.isArray(value)) {
	        for (var index = 0; index < value.length; index++) {
	          style(renderable, prop, value[index]);
	        }
	      } else style(renderable, prop, value);
	    }
	    return this;
	  };
	
	  /**
	   * Returns JSON representation of the rule.
	   * Nested rules, at-rules and array values are not supported.
	   *
	   * @return {Object}
	   * @api public
	   */
	
	  Rule.prototype.toJSON = function toJSON() {
	    var style = Object.create(null);
	    for (var prop in this.style) {
	      if (typeof this.style[prop] != 'object') {
	        style[prop] = this.style[prop];
	      }
	    }
	    return style;
	  };
	
	  /**
	   * Generates a CSS string.
	   *
	   * @param {Object} options
	   * @return {String}
	   * @api private
	   */
	
	  Rule.prototype.toString = function toString() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var selector = options.selector == null ? true : options.selector;
	    var indentationLevel = options.indentationLevel || 0;
	    var str = '';
	    if (selector) {
	      str += indent(indentationLevel, this.selector + ' {');
	      indentationLevel++;
	    }
	    for (var prop in this.style) {
	      var value = this.style[prop];
	      // We want to generate multiple style with identical property names.
	      if (Array.isArray(value)) {
	        for (var index = 0; index < value.length; index++) {
	          str += '\n' + indent(indentationLevel, prop + ': ' + value[index] + ';');
	        }
	      } else str += '\n' + indent(indentationLevel, prop + ': ' + value + ';');
	    }
	    if (selector) str += '\n' + indent(--indentationLevel, '}');
	    return str;
	  };
	
	  return Rule;
	})();
	
	exports['default'] = Rule;
	function indent(level, str) {
	  var indentStr = '';
	  for (var index = 0; index < level; index++) {
	    indentStr += '  ';
	  }return indentStr + str;
	}
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	exports.__esModule = true;
	exports.get = get;
	exports.reset = reset;
	var globalReference = typeof window == 'undefined' ? global : window;
	var namespace = '__JSS_VERSION_COUNTER__';
	if (globalReference[namespace] == null) globalReference[namespace] = 0;
	
	// In case we have more than one jss version.
	var versionCounter = globalReference[namespace]++;
	var ruleCounter = 0;
	
	/**
	 * Returns a uid.
	 * Ensures uniqueness if more than 1 jss version is used.
	 *
	 * @api private
	 * @return {String}
	 */
	
	function get() {
	  return 'jss-' + versionCounter + '-' + ruleCounter++;
	}
	
	/**
	 * Resets the counter.
	 *
	 * @api private
	 */
	
	function reset() {
	  ruleCounter = 0;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = clone;
	var stringify = JSON.stringify;
	var parse = JSON.parse;
	
	/**
	 * Deeply clone object using serialization.
	 * Expects object to be plain and without cyclic dependencies.
	 *
	 * http://jsperf.com/lodash-deepclone-vs-jquery-extend-deep/6
	 *
	 * @type {Object} obj
	 * @return {Object}
	 */
	
	function clone(obj) {
	  return parse(stringify(obj));
	}
	
	module.exports = exports["default"];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _uid = __webpack_require__(58);
	
	var uid = _interopRequireWildcard(_uid);
	
	/**
	 * Rule like @charset, @import, @namespace.
	 *
	 * @api private
	 */
	
	var SimpleRule = (function () {
	  function SimpleRule(name, value, options) {
	    _classCallCheck(this, SimpleRule);
	
	    this.id = uid.get();
	    this.type = 'simple';
	    this.name = name;
	    this.value = value;
	    this.options = options;
	  }
	
	  /**
	   * Generates a CSS string.
	   *
	   * @return {String}
	   * @api private
	   */
	
	  SimpleRule.prototype.toString = function toString() {
	    return this.name + ' ' + this.value + ';';
	  };
	
	  return SimpleRule;
	})();
	
	exports['default'] = SimpleRule;
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _uid = __webpack_require__(58);
	
	var uid = _interopRequireWildcard(_uid);
	
	/**
	 * Keyframe rule.
	 *
	 * @api private
	 */
	
	var KeyframeRule = (function () {
	  function KeyframeRule(selector, frames, options) {
	    _classCallCheck(this, KeyframeRule);
	
	    this.id = uid.get();
	    this.type = 'keyframe';
	    this.selector = selector;
	    this.options = options;
	    this.frames = this.formatFrames(frames);
	  }
	
	  /**
	   * Creates formatted frames where every frame value is a rule instance.
	   *
	   * @api private
	   */
	
	  KeyframeRule.prototype.formatFrames = function formatFrames(frames) {
	    var newFrames = Object.create(null);
	    for (var _name in frames) {
	      var options = _extends({}, this.options, { named: false, parent: this });
	      newFrames[_name] = this.options.jss.createRule(_name, frames[_name], options);
	    }
	    return newFrames;
	  };
	
	  /**
	   * Generates a CSS string.
	   *
	   * @return {String}
	   * @api private
	   */
	
	  KeyframeRule.prototype.toString = function toString() {
	    var str = this.selector + ' {\n';
	    var options = { indentationLevel: 1 };
	    for (var _name2 in this.frames) {
	      str += this.frames[_name2].toString(options) + '\n';
	    }
	    str += '}';
	    return str;
	  };
	
	  return KeyframeRule;
	})();
	
	exports['default'] = KeyframeRule;
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _uid = __webpack_require__(58);
	
	var uid = _interopRequireWildcard(_uid);
	
	/**
	 * Conditional rule for @media, @supports
	 *
	 * @api private
	 */
	
	var ConditionalRule = (function () {
	  function ConditionalRule(selector, styles, options) {
	    _classCallCheck(this, ConditionalRule);
	
	    this.id = uid.get();
	    this.type = 'conditional';
	    this.selector = selector;
	    this.options = _extends({}, options, { parent: this });
	    this.rules = this.createChildRules(styles);
	  }
	
	  /**
	   * A conditional rule always contains child rules.
	   *
	   * @param {Object} styles
	   * @return {Array} rules
	   * @api private
	   */
	
	  ConditionalRule.prototype.createChildRules = function createChildRules(styles) {
	    var rules = Object.create(null);
	    var _options = this.options;
	    var sheet = _options.sheet;
	    var jss = _options.jss;
	
	    for (var _name in styles) {
	      var localOptions = this.options;
	      // We have already a rule in the current style sheet with this name,
	      // This new rule is supposed to overwrite the first one, for this we need
	      // to ensure it will have the same className/selector.
	      var ruleToOverwrite = this.options.sheet && this.options.sheet.getRule(_name);
	      if (ruleToOverwrite) localOptions = _extends({}, this.options, { className: ruleToOverwrite.className });
	      rules[_name] = (sheet || jss).createRule(_name, styles[_name], localOptions);
	    }
	    return rules;
	  };
	
	  /**
	   * Generates a CSS string.
	   *
	   * @return {String}
	   * @api private
	   */
	
	  ConditionalRule.prototype.toString = function toString() {
	    var str = this.selector + ' {\n';
	    for (var _name2 in this.rules) {
	      var ruleStr = this.rules[_name2].toString({ indentationLevel: 1 });
	      str += ruleStr + '\n';
	    }
	    str += '}';
	    return str;
	  };
	
	  return ConditionalRule;
	})();
	
	exports['default'] = ConditionalRule;
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = findRenderer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _DomRenderer = __webpack_require__(64);
	
	var _DomRenderer2 = _interopRequireDefault(_DomRenderer);
	
	var _VirtualRenderer = __webpack_require__(65);
	
	var _VirtualRenderer2 = _interopRequireDefault(_VirtualRenderer);
	
	/**
	 * Find proper renderer.
	 * Option `virtual` is used to force use of VirtualRenderer even if DOM is
	 * detected, used for testing only.
	 *
	 * @param {Object} options
	 * @return {Renderer}
	 * @api private
	 */
	
	function findRenderer() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  if (options.Renderer) return options.Renderer;
	  return options.virtual || typeof document == 'undefined' ? _VirtualRenderer2['default'] : _DomRenderer2['default'];
	}
	
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports) {

	/**
	 * DOM rendering backend for StyleSheet.
	 *
	 * @api private
	 */
	'use strict';
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var DomRenderer = (function () {
	  DomRenderer.style = function style(element, name, value) {
	    try {
	      if (value == null) return element.style[name];
	      element.style[name] = value;
	    } catch (err) {
	      // IE8 may throw if property is unknown.
	    }
	  };
	
	  function DomRenderer(options) {
	    _classCallCheck(this, DomRenderer);
	
	    this.head = document.head || document.getElementsByTagName('head')[0];
	    this.element = document.createElement('style');
	    // IE8 will not have `styleSheet` prop without `type and `styleSheet.cssText`
	    // is the only way to render on IE8.
	    this.element.type = 'text/css';
	    if (options.media) this.element.setAttribute('media', options.media);
	    if (options.meta) this.element.setAttribute('data-meta', options.meta);
	  }
	
	  /**
	   * Insert style element into render tree.
	   *
	   * @api private
	   */
	
	  DomRenderer.prototype.attach = function attach() {
	    this.head.appendChild(this.element);
	  };
	
	  /**
	   * Remove style element from render tree.
	   *
	   * @api private
	   */
	
	  DomRenderer.prototype.detach = function detach() {
	    this.element.parentNode.removeChild(this.element);
	  };
	
	  /**
	   * Inject CSS string into element.
	   *
	   * @param {String} cssStr
	   * @api private
	   */
	
	  DomRenderer.prototype.deploy = function deploy(sheet) {
	    var css = '\n' + sheet.toString() + '\n';
	    if ('sheet' in this.element) this.element.innerHTML = css;
	    // On IE8 the only way to render is `styleSheet.cssText`
	    else if ('styleSheet' in this.element) this.element.styleSheet.cssText = css;
	  };
	
	  /**
	   * Insert a rule into element.
	   *
	   * @param {Rule} rule
	   * @return {CSSStyleRule}
	   * @api private
	   */
	
	  DomRenderer.prototype.insertRule = function insertRule(rule) {
	    // IE8 has only `styleSheet` and `styleSheet.rules`
	    var sheet = this.element.sheet || this.element.styleSheet;
	    var cssRules = sheet.cssRules || sheet.rules;
	    var nextIndex = cssRules.length;
	    if (sheet.insertRule) sheet.insertRule(rule.toString(), nextIndex);else sheet.addRule(rule.selector, rule.toString({ selector: false }), nextIndex);
	    return cssRules[nextIndex];
	  };
	
	  /**
	   * Get all rules elements.
	   *
	   * @return {Object} rules map, where key is selector, CSSStyleRule is value.
	   * @api private
	   */
	
	  DomRenderer.prototype.getRules = function getRules() {
	    // IE8 has only `styleSheet` and `styleSheet.rules`
	    var sheet = this.element.sheet || this.element.styleSheet;
	    var cssRules = sheet.rules || sheet.cssRules;
	    var rules = Object.create(null);
	    for (var index = 0; index < cssRules.length; index++) {
	      var CSSRule = cssRules[index];
	      rules[CSSRule.selectorText] = CSSRule;
	    }
	    return rules;
	  };
	
	  return DomRenderer;
	})();
	
	exports['default'] = DomRenderer;
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports) {

	/**
	 * Rendering backend to do nothing in nodejs.
	 */
	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var VirtualRenderer = (function () {
	  function VirtualRenderer() {
	    _classCallCheck(this, VirtualRenderer);
	  }
	
	  VirtualRenderer.style = function style() {};
	
	  VirtualRenderer.prototype.attach = function attach() {};
	
	  VirtualRenderer.prototype.detach = function detach() {};
	
	  VirtualRenderer.prototype.deploy = function deploy() {};
	
	  VirtualRenderer.prototype.insertRule = function insertRule() {};
	
	  VirtualRenderer.prototype.getRules = function getRules() {
	    return {};
	  };
	
	  return VirtualRenderer;
	})();
	
	exports["default"] = VirtualRenderer;
	module.exports = exports["default"];

/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * Register a plugin, run a plugin.
	 */
	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PluginsRegistry = (function () {
	  function PluginsRegistry() {
	    _classCallCheck(this, PluginsRegistry);
	
	    this.registry = [];
	  }
	
	  /**
	   * Register plugin. Passed function will be invoked with a rule instance.
	   *
	   * @param {Function} fn
	   * @api public
	   */
	
	  PluginsRegistry.prototype.use = function use(fn) {
	    this.registry.push(fn);
	  };
	
	  /**
	   * Execute all registered plugins.
	   *
	   * @param {Rule} rule
	   * @api private
	   */
	
	  PluginsRegistry.prototype.run = function run(rule) {
	    for (var index = 0; index < this.registry.length; index++) {
	      this.registry[index](rule);
	    }
	  };
	
	  return PluginsRegistry;
	})();
	
	exports["default"] = PluginsRegistry;
	module.exports = exports["default"];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _element = __webpack_require__(4);
	
	var _element2 = _interopRequireDefault(_element);
	
	var _theme = __webpack_require__(42);
	
	var _theme2 = _interopRequireDefault(_theme);
	
	var _jssNested = __webpack_require__(45);
	
	var _jssNested2 = _interopRequireDefault(_jssNested);
	
	var _jssCamelCase = __webpack_require__(46);
	
	var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);
	
	var _jssVendorPrefixer = __webpack_require__(47);
	
	var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);
	
	var _jss = __webpack_require__(53);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var jss = (0, _jss.create)();
	
	var spacing = _theme2.default.spacing;
	var fontFamily = _theme2.default.fontFamily;
	var palette = _theme2.default.palette;
	var boxShadow = _theme2.default.boxShadow;
	
	var styles = jss.use((0, _jssNested2.default)()).use((0, _jssCamelCase2.default)()).use((0, _jssVendorPrefixer2.default)()).createStyleSheet({
	  container: {
	    boxShadow: boxShadow
	  }
	}).attach();
	
	function render(_ref) {
	  var props = _ref.props;
	  var children = _ref.children;
	  var title = props.title;
	  var style = props.style;
	
	  return (0, _element2.default)(
	    'div',
	    { 'class': styles.classes.container, style: style },
	    children && children
	  );
	}
	
	exports.default = render;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _element = __webpack_require__(4);
	
	var _element2 = _interopRequireDefault(_element);
	
	var _theme = __webpack_require__(42);
	
	var _theme2 = _interopRequireDefault(_theme);
	
	var _jssNested = __webpack_require__(45);
	
	var _jssNested2 = _interopRequireDefault(_jssNested);
	
	var _jssCamelCase = __webpack_require__(46);
	
	var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);
	
	var _jssVendorPrefixer = __webpack_require__(47);
	
	var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);
	
	var _jss = __webpack_require__(53);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var jss = (0, _jss.create)();
	
	var spacing = _theme2.default.spacing;
	var fontFamily = _theme2.default.fontFamily;
	var palette = _theme2.default.palette;
	var boxShadow = _theme2.default.boxShadow;
	
	var styles = jss.use((0, _jssNested2.default)()).use((0, _jssCamelCase2.default)()).use((0, _jssVendorPrefixer2.default)()).createStyleSheet({
	  container: {
	    padding: 16,
	    fontFamily: fontFamily,
	    fontSize: 14
	  }
	}).attach();
	
	function render(_ref) {
	  var props = _ref.props;
	  var children = _ref.children;
	  var style = props.style;
	
	  return (0, _element2.default)(
	    'div',
	    { 'class': styles.classes.container, style: style },
	    children && children
	  );
	}
	
	exports.default = render;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _element = __webpack_require__(4);
	
	var _element2 = _interopRequireDefault(_element);
	
	var _theme = __webpack_require__(42);
	
	var _theme2 = _interopRequireDefault(_theme);
	
	var _colors = __webpack_require__(43);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _jssNested = __webpack_require__(45);
	
	var _jssNested2 = _interopRequireDefault(_jssNested);
	
	var _jssCamelCase = __webpack_require__(46);
	
	var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);
	
	var _jssVendorPrefixer = __webpack_require__(47);
	
	var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);
	
	var _jss = __webpack_require__(53);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var jss = (0, _jss.create)();
	
	var spacing = _theme2.default.spacing;
	var fontFamily = _theme2.default.fontFamily;
	var palette = _theme2.default.palette;
	var boxShadow = _theme2.default.boxShadow;
	
	var styles = jss.use((0, _jssNested2.default)()).use((0, _jssCamelCase2.default)()).use((0, _jssVendorPrefixer2.default)()).createStyleSheet({
	  base: {
	    padding: 16,
	    fontFamily: fontFamily
	  },
	  title: {
	    fontSize: 22,
	    color: _colors2.default.darkBlack
	  },
	  subtitle: {
	    fontSize: 16,
	    color: _colors2.default.lightBlack
	  }
	}).attach();
	
	function render(_ref) {
	  var props = _ref.props;
	  var children = _ref.children;
	  var style = props.style;
	  var title = props.title;
	  var titleStyle = props.titleStyle;
	  var subtitle = props.subtitle;
	  var subtitleStyle = props.subtitleStyle;
	
	  return (0, _element2.default)(
	    'div',
	    { 'class': styles.classes.base, style: style },
	    title && (0, _element2.default)(
	      'div',
	      { 'class': styles.classes.title, style: titleStyle },
	      title
	    ),
	    subtitle && (0, _element2.default)(
	      'div',
	      { 'class': styles.classes.subtitle, style: subtitleStyle },
	      subtitle
	    ),
	    children && children
	  );
	}
	
	exports.default = render;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _handleActions;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _element = __webpack_require__(4);
	
	var _element2 = _interopRequireDefault(_element);
	
	var _theme = __webpack_require__(42);
	
	var _theme2 = _interopRequireDefault(_theme);
	
	var _buttonStyles = __webpack_require__(71);
	
	var _buttonStyles2 = _interopRequireDefault(_buttonStyles);
	
	var _combineReducers = __webpack_require__(72);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _handleActions2 = __webpack_require__(82);
	
	var _handleActions3 = _interopRequireDefault(_handleActions2);
	
	var _createAction = __webpack_require__(86);
	
	var _createAction2 = _interopRequireDefault(_createAction);
	
	var _colorUtility = __webpack_require__(87);
	
	var _colorUtility2 = _interopRequireDefault(_colorUtility);
	
	var _colors = __webpack_require__(43);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _jssNested = __webpack_require__(45);
	
	var _jssNested2 = _interopRequireDefault(_jssNested);
	
	var _jssCamelCase = __webpack_require__(46);
	
	var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);
	
	var _jssVendorPrefixer = __webpack_require__(47);
	
	var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);
	
	var _jssExtend = __webpack_require__(88);
	
	var _jssExtend2 = _interopRequireDefault(_jssExtend);
	
	var _jss = __webpack_require__(53);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var jss = (0, _jss.create)();
	
	var mouseDown = (0, _createAction2.default)('MOUSE_DOWN');
	var mouseUp = (0, _createAction2.default)('MOUSE_UP');
	
	var spacing = _theme2.default.spacing;
	var fontFamily = _theme2.default.fontFamily;
	var palette = _theme2.default.palette;
	
	var styles = jss.use((0, _jssNested2.default)()).use((0, _jssCamelCase2.default)()).use((0, _jssVendorPrefixer2.default)()).createStyleSheet({
	  container: _extends({}, _buttonStyles2.default, {
	    display: 'inline-block',
	    fontFamily: fontFamily,
	    borderRadius: '2px',
	    boxSizing: 'border-box',
	    lineHeight: _buttonStyles2.default.height,
	    textAlign: 'center',
	    userSelect: 'none',
	    transition: 'all .2s ease-in-out',
	    '&:hover': {
	      background: (0, _colorUtility2.default)(_colors2.default.grey100, 0.2)
	    },
	    '&:active': {
	      background: (0, _colorUtility2.default)(_colors2.default.grey100, 0.3)
	    }
	  }),
	  primary: {
	    color: palette.primary1Color,
	    '&:hover': {
	      background: (0, _colorUtility2.default)(palette.primary1Color, 0.2)
	    },
	    '&:active': {
	      background: (0, _colorUtility2.default)(palette.primary1Color, 0.3)
	    }
	  }
	}).attach();
	
	function initialState() {
	  return {
	    clicked: false
	  };
	}
	
	function render(_ref) {
	  var props = _ref.props;
	  var local = _ref.local;
	  var state = _ref.state;
	  var children = _ref.children;
	  var hovering = state.hovering;
	  var clicked = state.clicked;
	  var label = props.label;
	  var style = props.style;
	  var onMouseOver = props.onMouseOver;
	  var onMouseOut = props.onMouseOut;
	  var primary = props.primary;
	
	  return (0, _element2.default)(
	    'div',
	    {
	      onMouseDown: local(mouseDown),
	      onMouseUp: local(mouseUp),
	      'class': [styles.classes.container, [primary && styles.classes.primary]],
	      style: style },
	    label && label
	  );
	}
	
	var reducer = (0, _combineReducers2.default)({
	  clicked: (0, _handleActions3.default)((_handleActions = {}, _defineProperty(_handleActions, mouseDown, function () {
	    return true;
	  }), _defineProperty(_handleActions, mouseUp, function () {
	    return false;
	  }), _handleActions))
	});
	
	exports.default = {
	  initialState: initialState,
	  render: render,
	  reducer: reducer
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _spacing = __webpack_require__(44);
	
	var _spacing2 = _interopRequireDefault(_spacing);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  position: 'relative',
	  paddingLeft: _spacing2.default.desktopGutterLess,
	  paddingRight: _spacing2.default.desktopGutterLess,
	  cursor: 'pointer',
	  height: '36px',
	  minWidth: '88px',
	  iconButtonSize: _spacing2.default.iconSize * 2,
	  '-webkit-touch-callout': 'none',
	  '-webkit-user-select': 'none',
	  '-khtml-user-select': 'none',
	  '-moz-user-select': 'none',
	  '-ms-user-select': 'none',
	  'user-select': 'none'
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var clone = __webpack_require__(73)
	var composeReducers = __webpack_require__(80)
	
	/**
	 * Expose combineReducers
	 */
	
	module.exports = combineReducers['default'] = combineReducers
	
	/**
	 * combineReducers
	 */
	
	function combineReducers (reducers) {
	  return composeReducers.apply(null, Object
	    .keys(reducers)
	    .map(function (key) {
	      return scopeReducer(reducers[key], key)
	    }))
	}
	
	function scopeReducer (reducer, prop) {
	  return function (state, action) {
	    var childState = reducer(state[prop], action)
	
	    if (childState !== state[prop]) {
	      state = clone(state)
	      state[prop] = childState
	    }
	
	    return state
	  }
	}


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var cloneObj = __webpack_require__(74)
	
	/**
	 * Expose cloneShallow
	 */
	
	module.exports = cloneShallow['default'] = cloneShallow
	
	/**
	 * Clone object or array shallow
	 * @param  {Object|Array} a object to copy
	 * @return {Object|Array}
	 */
	
	function cloneShallow (a) {
	  return Array.isArray(a)
	    ? a.slice()
	    : cloneObj(a)
	}


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var forEach = __webpack_require__(75)
	
	/**
	 * Expose cloneObj
	 */
	
	module.exports = cloneObj['default'] = cloneObj
	
	/**
	 * Clone an object.
	 * @param  {Object} obj Object to Clone
	 * @return {Object}
	 */
	
	function cloneObj (obj) {
	  var newObj = {}
	
	  forEach(function (val, key) {
	    newObj[key] = val
	  }, obj)
	
	  return newObj
	}


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var isObject = __webpack_require__(76)
	var isArray = __webpack_require__(77)
	var forEachObj = __webpack_require__(78)
	var forEachArr = __webpack_require__(79)
	
	/**
	 * Expose foreach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * For each
	 * @param  {Function} fn  iterator
	 * @param  {Object}   obj object to iterate over
	 */
	
	function forEach (fn, a) {
	  if (isArray(a)) return forEachArr.call(this, fn, a)
	  if (isObject(a)) return forEachObj.call(this, fn, a)
	}


/***/ },
/* 76 */
/***/ function(module, exports) {

	/**
	 * Expose isObject
	 */
	
	module.exports = isObject
	
	/**
	 * Constants
	 */
	
	var objString = toString(Object)
	
	/**
	 * Check for plain object.
	 *
	 * @param {Mixed} val
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject (val) {
	  return !!val && (val.constructor === Object || toString(val.constructor) === objString)
	}
	
	function toString (val) {
	  return Function.prototype.toString.call(val)
	}


/***/ },
/* 77 */
/***/ function(module, exports) {

	/**
	 * Expose isArray
	 */
	
	module.exports = isArray['default'] = isArray
	
	/**
	 * isArray
	 */
	
	function isArray (val) {
	  return Array.isArray(val)
	}


/***/ },
/* 78 */
/***/ function(module, exports) {

	/**
	 * Expose forEach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * forEach
	 */
	
	function forEach (fn, obj) {
	  if (!obj) return
	
	  var keys = Object.keys(obj)
	
	  for (var i = 0, len = keys.length; i < len; ++i) {
	    var key = keys[i]
	    fn.call(this, obj[key], key)
	  }
	}


/***/ },
/* 79 */
/***/ function(module, exports) {

	/**
	 * Expose forEach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * forEach
	 */
	
	function forEach (fn, arr) {
	  if (!arr) return
	
	  for (var i = 0, len = arr.length; i < len; ++i) {
	    fn.call(this, arr[i], i)
	  }
	}


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var toArray = __webpack_require__(81)
	
	/**
	 * Expose composeReducers
	 */
	
	module.exports = composeReducers['default'] = composeReducers
	
	/**
	 * composeReducers
	 */
	
	function composeReducers (/* arguments */) {
	  var args = toArray(arguments)
	  var len = args.length
	
	  return function (state, action) {
	    for (var i = 0; i < len; ++i) {
	      state = args[i](state, action)
	    }
	
	    return state
	  }
	}


/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * Expose toArray
	 */
	
	module.exports = toArray['default'] = toArray
	
	/**
	 * Convert to an array from array like
	 * @param  {ArrayLike} arr
	 * @return {Array}
	 */
	
	function toArray (arr) {
	  var len = arr.length
	  var idx = -1
	
	  var array = new Array(len)
	  while (++idx < len) {
	    array[idx] = arr[idx]
	  }
	  return array
	}


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var composeReducers = __webpack_require__(83)
	var isUndefined = __webpack_require__(85)
	
	/**
	 * Expose handleActions
	 */
	
	module.exports = handleActions['default'] = handleActions
	
	/**
	 * handleActions
	 */
	
	function handleActions (map, defaultState) {
	  return composeReducers.apply(null, Object
	    .keys(map)
	    .map(function (type) {
	      return scopeReducer(type, map[type], defaultState)
	    }))
	}
	
	function scopeReducer (type, reducer, defaultState) {
	  return function (state, action) {
	    return action.type === type
	      ? reducer(state, action.payload)
	      : (isUndefined(state) ? defaultState : state)
	  }
	}


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var toArray = __webpack_require__(84)
	
	/**
	 * Expose composeReducers
	 */
	
	module.exports = composeReducers['default'] = composeReducers
	
	/**
	 * composeReducers
	 */
	
	function composeReducers (/* arguments */) {
	  var args = toArray(arguments)
	  var len = args.length
	
	  return function (state, action) {
	    for (var i = 0; i < len; ++i) {
	      state = args[i](state, action)
	    }
	
	    return state
	  }
	}


/***/ },
/* 84 */
/***/ function(module, exports) {

	/**
	 * Expose toArray
	 */
	
	module.exports = toArray['default'] = toArray
	
	/**
	 * Convert to an array from array like
	 * @param  {ArrayLike} arr
	 * @return {Array}
	 */
	
	function toArray (arr) {
	  var len = arr.length
	  var idx = -1
	
	  var array = new Array(len)
	  while (++idx < len) {
	    array[idx] = arr[idx]
	  }
	  return array
	}


/***/ },
/* 85 */
/***/ function(module, exports) {

	/**
	 * Expose isUndefined
	 */
	
	module.exports = isUndefined['default'] = isUndefined
	
	/**
	 * Check if undefined.
	 * @param  {Mixed}  value
	 * @return {Boolean}
	 */
	
	function isUndefined (value) {
	  return typeof value === 'undefined'
	}


/***/ },
/* 86 */
/***/ function(module, exports) {

	/**
	 * Expose createAction
	 */
	
	module.exports = createAction['default'] = createAction
	
	/**
	 * createAction
	 */
	
	function createAction (type, payload, meta) {
	  function actionCreator () {
	    return {
	      type: type,
	      payload: payload ? payload.apply(this, arguments) : arguments[0],
	      meta: meta ? meta.apply(this, arguments) : meta
	    }
	  }
	
	  actionCreator.type = type
	  actionCreator.toString = toString
	
	  return actionCreator
	}
	
	// Allow the function to be used as an object
	// key for your reducer maps, obviating the
	// need for the additional variable.
	function toString () {
	  return this.type
	}


/***/ },
/* 87 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (hex, opacity) {
	  var splitHex = hex.split('#')[1].match(/.{2}/g).map(function (h) {
	    return parseInt(h, 16);
	  });
	  console.log(splitHex);
	  return 'rgba(' + splitHex[0] + ', ' + splitHex[1] + ', ' + splitHex[2] + ', ' + opacity + ')';
	};

/***/ },
/* 88 */
/***/ function(module, exports) {

	/**
	 * Handle `extend` property.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = jssExtend;
	
	function jssExtend() {
	  return function (rule) {
	    if (!rule.style || !rule.style.extend) return;
	
	    function extend(newStyle, style) {
	      if (typeof style.extend == 'string') {
	        if (rule.options && rule.options.sheet) {
	          var refRule = rule.options.sheet.getRule(style.extend);
	          if (refRule) extend(newStyle, refRule.originalStyle);
	        }
	      } else if (Array.isArray(style.extend)) {
	        for (var index = 0; index < style.extend.length; index++) {
	          extend(newStyle, style.extend[index]);
	        }
	      } else {
	        for (var prop in style.extend) {
	          if (prop === 'extend') extend(newStyle, style.extend.extend);else newStyle[prop] = style.extend[prop];
	        }
	      }
	
	      // Copy base style.
	      for (var prop in style) {
	        if (prop !== 'extend') newStyle[prop] = style[prop];
	      }
	
	      return newStyle;
	    }
	
	    rule.style = extend({}, rule.style);
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _card = __webpack_require__(90);
	
	var _combineReducers = __webpack_require__(72);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _handleActions = __webpack_require__(82);
	
	var _handleActions2 = _interopRequireDefault(_handleActions);
	
	var _createAction = __webpack_require__(86);
	
	var _createAction2 = _interopRequireDefault(_createAction);
	
	var _element = __webpack_require__(4);
	
	var _element2 = _interopRequireDefault(_element);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var style = {
	  base: {
	    width: 400,
	    margin: 15,
	    borderRadius: '2px'
	  },
	  titleBase: {
	    backgroundColor: 'white',
	    borderBottom: '1px solid rgba(0,0,0,0.2)'
	  }
	};
	
	function render(_ref) {
	  var props = _ref.props;
	
	  return (0, _element2.default)(
	    _card.Card,
	    { style: style.base },
	    (0, _element2.default)(_card.CardTitle, {
	      style: style.titleBase,
	      title: 'Card Title',
	      subtitle: 'Subtitle' }),
	    (0, _element2.default)(
	      _card.CardText,
	      null,
	      ' Stuff '
	    )
	  );
	}
	
	exports.default = render;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CardTitle = exports.CardText = exports.Card = undefined;
	
	var _Card = __webpack_require__(67);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	var _CardText = __webpack_require__(68);
	
	var _CardText2 = _interopRequireDefault(_CardText);
	
	var _CardTitle = __webpack_require__(69);
	
	var _CardTitle2 = _interopRequireDefault(_CardTitle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Card = _Card2.default;
	exports.CardText = _CardText2.default;
	exports.CardTitle = _CardTitle2.default;
	exports.default = {
	  Card: _Card2.default,
	  CardText: _CardText2.default,
	  CardTitle: _CardTitle2.default
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _element = __webpack_require__(4);
	
	var _element2 = _interopRequireDefault(_element);
	
	var _components = __webpack_require__(40);
	
	var _combineReducers = __webpack_require__(72);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _handleActions = __webpack_require__(82);
	
	var _handleActions2 = _interopRequireDefault(_handleActions);
	
	var _createAction = __webpack_require__(86);
	
	var _createAction2 = _interopRequireDefault(_createAction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mouseOver = (0, _createAction2.default)('MOUSE_OVER');
	var mouseOut = (0, _createAction2.default)('MOUSE_OUT');
	
	var style = {};
	
	function initialState() {
	  return {};
	}
	
	function render(_ref) {
	  var props = _ref.props;
	  var local = _ref.local;
	  var state = _ref.state;
	
	  return (0, _element2.default)(_components.FlatButton, {
	    onMouseOver: local(mouseOver),
	    onMouseOut: local(mouseOut),
	    primary: true,
	    label: 'Button' });
	}
	
	function reducer(state, action) {
	  return state;
	}
	
	exports.default = {
	  initialState: initialState,
	  render: render,
	  reducer: reducer
	};

/***/ },
/* 92 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function reducer(state, action) {
	  return state;
	}
	
	exports.default = reducer;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Convenience so that you can do
	 * require('vdux/dom')
	 */
	
	module.exports = __webpack_require__(94)


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _applyMiddleware = __webpack_require__(95);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _createStore = __webpack_require__(97);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _virtexComponent = __webpack_require__(99);
	
	var _virtexComponent2 = _interopRequireDefault(_virtexComponent);
	
	var _reduxEphemeral = __webpack_require__(108);
	
	var _reduxEphemeral2 = _interopRequireDefault(_reduxEphemeral);
	
	var _emptyElement = __webpack_require__(129);
	
	var _emptyElement2 = _interopRequireDefault(_emptyElement);
	
	var _virtexLocal = __webpack_require__(130);
	
	var _virtexLocal2 = _interopRequireDefault(_virtexLocal);
	
	var _delegant = __webpack_require__(135);
	
	var _delegant2 = _interopRequireDefault(_delegant);
	
	var _virtexDom = __webpack_require__(146);
	
	var _virtexDom2 = _interopRequireDefault(_virtexDom);
	
	var _virtex2 = __webpack_require__(6);
	
	var _virtex3 = _interopRequireDefault(_virtex2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * Imports
	                                                                                                                                                                                                     */
	
	/**
	 * vdux
	 */
	
	function vdux(_ref) {
	  var _ref$middleware = _ref.middleware;
	  var middleware = _ref$middleware === undefined ? [] : _ref$middleware;
	  var reducer = _ref.reducer;
	  var _ref$initialState = _ref.initialState;
	  var initialState = _ref$initialState === undefined ? {} : _ref$initialState;
	  var app = _ref.app;
	  var _ref$node = _ref.node;
	  var node = _ref$node === undefined ? document.body : _ref$node;
	  var vtree = _ref.vtree;
	
	  /**
	   * Create redux store
	   */
	
	  var store = _applyMiddleware2.default.apply(undefined, [_virtexDom2.default, (0, _virtexLocal2.default)('ui'), _virtexComponent2.default].concat(_toConsumableArray(middleware)))(_createStore2.default)((0, _reduxEphemeral2.default)('ui', reducer), initialState);
	
	  /**
	   * Initialize virtex
	   */
	
	  var _virtex = (0, _virtex3.default)(store.dispatch);
	
	  var create = _virtex.create;
	  var update = _virtex.update;
	
	  /**
	   * Empty the root node
	   */
	
	  if (!vtree) {
	    (0, _emptyElement2.default)(node);
	  }
	
	  /**
	   * Render the VDOM tree
	   */
	
	  if (vtree) {
	    (0, _virtexDom.reconstitute)(vtree, node.firstChild);
	    syncNow();
	  } else {
	    vtree = render();
	    node.appendChild(create(vtree).element);
	  }
	
	  /**
	   * Create the Virtual DOM <-> Redux cycle
	   */
	
	  var unsubscribe = store.subscribe(sync);
	  var undelegate = (0, _delegant2.default)(node, function (action) {
	    return action && store.dispatch(action);
	  });
	
	  return {
	    replace: function replace(_app, _reducer) {
	      app = _app;
	      reducer = _reducer;
	      store.replaceReducer((0, _reduxEphemeral2.default)('ui', reducer));
	      sync();
	    },
	    stop: function stop() {
	      unsubscribe();
	      undelegate();
	    }
	  };
	
	  /**
	   * Render a new virtual dom
	   */
	
	  function render() {
	    return app(store.getState());
	  }
	
	  /**
	   * Sync the virtual dom and the actual dom
	   */
	
	  var pending = false;
	
	  function sync() {
	    // Prevent re-entrant renders
	    if (pending) return;
	    pending = true;
	
	    setTimeout(syncNow);
	  }
	
	  function syncNow() {
	    pending = false;
	
	    var newTree = render();
	    update(vtree, newTree);
	    vtree = newTree;
	  }
	}
	
	/**
	 * Exports
	 */
	
	exports.default = vdux;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _compose = __webpack_require__(96);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (next) {
	    return function (reducer, initialState) {
	      var store = next(reducer, initialState);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * Composes single-argument functions from right to left.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing functions from right to
	 * left. For example, compose(f, g, h) is identical to arg => f(g(h(arg))).
	 */
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return function (arg) {
	    return funcs.reduceRight(function (composed, f) {
	      return f(composed);
	    }, arg);
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createStore;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsIsPlainObject = __webpack_require__(98);
	
	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	exports.ActionTypes = ActionTypes;
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	
	function createStore(reducer, initialState) {
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = initialState;
	  var listeners = [];
	  var isDispatching = false;
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    listeners.push(listener);
	    var isSubscribed = true;
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	      var index = listeners.indexOf(listener);
	      listeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!_utilsIsPlainObject2['default'](action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    listeners.slice().forEach(function (listener) {
	      return listener();
	    });
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  };
	}

/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};
	var objStringValue = fnToString(Object);
	
	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	
	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }
	
	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;
	
	  if (proto === null) {
	    return true;
	  }
	
	  var constructor = proto.constructor;
	
	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === objStringValue;
	}
	
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _virtex = __webpack_require__(6);
	
	var _defaults = __webpack_require__(100);
	
	var _defaults2 = _interopRequireDefault(_defaults);
	
	var _arrayEqual = __webpack_require__(106);
	
	var _arrayEqual2 = _interopRequireDefault(_arrayEqual);
	
	var _objectEqual = __webpack_require__(107);
	
	var _objectEqual2 = _interopRequireDefault(_objectEqual);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Constants
	 */
	
	/**
	 * Imports
	 */
	
	var _actions$types = _virtex.actions.types;
	var CREATE_THUNK = _actions$types.CREATE_THUNK;
	var UPDATE_THUNK = _actions$types.UPDATE_THUNK;
	var DESTROY_THUNK = _actions$types.DESTROY_THUNK;
	
	/**
	 * virtex-component
	 */
	
	function middleware(_ref) {
	  var dispatch = _ref.dispatch;
	
	  var maybeDispatch = function maybeDispatch(action) {
	    return action && dispatch(action);
	  };
	
	  return function (next) {
	    return function (action) {
	      switch (action.type) {
	        case CREATE_THUNK:
	          return create(maybeDispatch, action.vnode);
	        case UPDATE_THUNK:
	          return update(maybeDispatch, action.vnode, action.prev);
	        case DESTROY_THUNK:
	          return destroy(maybeDispatch, action.vnode);
	        default:
	          return next(action);
	      }
	    };
	  };
	}
	
	function create(dispatch, thunk) {
	  var component = thunk.type;
	  var onCreate = component.onCreate;
	
	  thunk.props = thunk.props || {};
	
	  // Setup the default immutable shouldUpdate if this component
	  // hasn't exported one
	  component.shouldUpdate = component.shouldUpdate || shouldUpdate;
	
	  // Call the onCreate hook
	  if (onCreate) {
	    dispatch(onCreate(thunk));
	  }
	
	  return thunk.vnode = render(component, thunk);
	}
	
	function update(dispatch, thunk, prev) {
	  if (thunk.vnode) return thunk.vnode;
	
	  var component = thunk.type;
	  var onUpdate = component.onUpdate;
	  var shouldUpdate = component.shouldUpdate;
	
	  thunk.props = thunk.props || {};
	  (0, _defaults2.default)(thunk, prev);
	
	  if (shouldUpdate(prev, thunk)) {
	    onUpdate && dispatch(onUpdate(prev, thunk));
	    thunk.vnode = render(component, thunk);
	
	    return thunk.vnode;
	  }
	
	  return thunk.vnode = prev.vnode;
	}
	
	function destroy(dispatch, thunk) {
	  var onRemove = thunk.type.onRemove;
	
	  onRemove && dispatch(onRemove(thunk));
	}
	
	function render(component, thunk) {
	  return typeof component === 'function' ? component(thunk) : component.render(thunk);
	}
	
	function shouldUpdate(prev, next) {
	  return !(0, _arrayEqual2.default)(prev.children, next.children) || !(0, _objectEqual2.default)(prev.props, next.props);
	}
	
	/**
	 * Exports
	 */
	
	exports.default = middleware;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Imports
	 */
	
	var forEach = __webpack_require__(101)
	
	/**
	 * defaults
	 */
	
	function defaults (obj, src) {
	  forEach(src, function (val, key) {
	    if (obj[key] === undefined) {
	      obj[key] = val
	    }
	  })
	
	  return obj
	}
	
	/**
	 * Exports
	 */
	
	module.exports = defaults


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var isObject = __webpack_require__(102)
	var isArray = __webpack_require__(103)
	var forEachObj = __webpack_require__(104)
	var forEachArr = __webpack_require__(105)
	
	/**
	 * Expose foreach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * For each
	 * @param  {Function} fn  iterator
	 * @param  {Object}   obj object to iterate over
	 */
	
	function forEach (fn, a) {
	  if (isArray(a)) return forEachArr.call(this, fn, a)
	  if (isObject(a)) return forEachObj.call(this, fn, a)
	}


/***/ },
/* 102 */
/***/ function(module, exports) {

	/**
	 * Expose isObject
	 */
	
	module.exports = isObject
	
	/**
	 * Constants
	 */
	
	var objString = toString(Object)
	
	/**
	 * Check for plain object.
	 *
	 * @param {Mixed} val
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject (val) {
	  return !!val && (val.constructor === Object || toString(val.constructor) === objString)
	}
	
	function toString (val) {
	  return Function.prototype.toString.call(val)
	}


/***/ },
/* 103 */
/***/ function(module, exports) {

	/**
	 * Expose isArray
	 */
	
	module.exports = isArray['default'] = isArray
	
	/**
	 * isArray
	 */
	
	function isArray (val) {
	  return Array.isArray(val)
	}


/***/ },
/* 104 */
/***/ function(module, exports) {

	/**
	 * Expose forEach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * forEach
	 */
	
	function forEach (fn, obj) {
	  if (!obj) return
	
	  var keys = Object.keys(obj)
	
	  for (var i = 0, len = keys.length; i < len; ++i) {
	    var key = keys[i]
	    fn.call(this, obj[key], key)
	  }
	}


/***/ },
/* 105 */
/***/ function(module, exports) {

	/**
	 * Expose forEach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * forEach
	 */
	
	function forEach (fn, arr) {
	  if (!arr) return
	
	  for (var i = 0, len = arr.length; i < len; ++i) {
	    fn.call(this, arr[i], i)
	  }
	}


/***/ },
/* 106 */
/***/ function(module, exports) {

	/**
	 * Expse equal
	 */
	
	module.exports = equal['default'] = equal
	
	/**
	 * Check if two arrays are equal.
	 * @param  {Array} a array 1
	 * @param  {Array} b array 2
	 * @return {Boolean}
	 */
	
	function equal (a, b) {
	  var aLen = a.length
	  var bLen = b.length
	
	  if (aLen === bLen) {
	    for (var i = 0; i < aLen; ++i) {
	      if (a[i] !== b[i]) {
	        return false
	      }
	    }
	
	    return true
	  }
	
	  return false
	}


/***/ },
/* 107 */
/***/ function(module, exports) {

	/**
	 * objectEqual
	 */
	
	function objectEqual (a, b) {
	  var aKeys = Object.keys(a)
	  var bKeys = Object.keys(b)
	  var aLen = aKeys.length
	  var bLen = bKeys.length
	
	  if (aLen === bLen) {
	    for (var i = 0; i < aLen; ++i) {
	      var key = aKeys[i]
	
	      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key) || a[key] !== b[key]) {
	        return false
	      }
	    }
	
	    return true
	  }
	
	  return false
	}
	
	/**
	 * Exports
	 */
	
	module.exports = objectEqual


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Imports
	                                                                                                                                                                                                                                                                   */
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.destroyEphemeral = exports.createEphemeral = exports.toEphemeral = undefined;
	
	var _getProp = __webpack_require__(109);
	
	var _getProp2 = _interopRequireDefault(_getProp);
	
	var _setProp = __webpack_require__(111);
	
	var _setProp2 = _interopRequireDefault(_setProp);
	
	var _omitProp = __webpack_require__(122);
	
	var _omitProp2 = _interopRequireDefault(_omitProp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * Action types
	 */
	
	var CREATE = 'CREATE_EPHEMERAL';
	var DESTROY = 'DESTROY_EPHEMERAL';
	
	/**
	 * Ephemeral state reducer
	 */
	
	function ephemeralReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments[1];
	  var _action$meta$ephemera = action.meta.ephemeral;
	  var reducer = _action$meta$ephemera.reducer;
	  var key = _action$meta$ephemera.key;
	
	  switch (action.type) {
	    case CREATE:
	      return (0, _setProp2.default)(key, state, action.payload);
	    case DESTROY:
	      return (0, _omitProp2.default)(key, state);
	    default:
	      var newState = reducer((0, _getProp2.default)(key, state), action);
	      return (0, _setProp2.default)(key, state, newState);
	  }
	
	  return state;
	}
	
	/**
	 * Action creators
	 */
	
	function toEphemeral(key, reducer, action) {
	  return _extends({}, action, {
	    meta: _extends({}, action.meta || {}, {
	      ephemeral: {
	        key: key,
	        reducer: reducer
	      }
	    })
	  });
	}
	
	function createEphemeral(key, initialState) {
	  return {
	    type: CREATE,
	    payload: initialState,
	    meta: {
	      ephemeral: { key: key }
	    }
	  };
	}
	
	function destroyEphemeral(key) {
	  return {
	    type: DESTROY,
	    meta: {
	      ephemeral: { key: key }
	    }
	  };
	}
	
	/**
	 * Mount reducer
	 */
	
	function mount(prop, reducer) {
	  return function (state, action) {
	    return isEphemeral(action) ? _extends({}, state, _defineProperty({}, prop, ephemeralReducer(state[prop] || {}, action))) : reducer(state, action);
	  };
	}
	
	function isEphemeral(action) {
	  return action.meta && action.meta.hasOwnProperty('ephemeral');
	}
	
	/**
	 * Exports
	 */
	
	exports.default = mount;
	exports.toEphemeral = toEphemeral;
	exports.createEphemeral = createEphemeral;
	exports.destroyEphemeral = destroyEphemeral;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var isString = __webpack_require__(110)
	
	/**
	 * Expose getProp
	 */
	
	module.exports = getProp['default'] = getProp
	
	/**
	 * Get propert
	 * @param  {Array|String} path path to property
	 * @param  {Object} obj object to retrieve property from
	 * @return {Mixed} property
	 */
	
	function getProp (path, obj) {
	  if (isString(path)) {
	    path = path.split('.')
	  }
	
	  for (var i = 0, len = path.length; i < len && obj; ++i) {
	    obj = obj[path[i]]
	  }
	
	  return obj
	}


/***/ },
/* 110 */
/***/ function(module, exports) {

	/**
	 * Expose isString
	 */
	
	module.exports = isString['default'] = isString
	
	/**
	 * Check if string
	 * @param  {Mixed}  value
	 * @return {Boolean}
	 */
	function isString (value) {
	  return typeof value === 'string'
	}


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var clone = __webpack_require__(112)
	var isFunction = __webpack_require__(119)
	var isString = __webpack_require__(120)
	var isNumber = __webpack_require__(121)
	
	/**
	 * Expose setProp
	 */
	
	module.exports = setProp['default'] = setProp
	
	/**
	 * setProp
	 */
	
	function setProp (path, obj, value) {
	  // Fast-path single key array paths
	  if (isNumber(path)) return set(obj, path, value)
	  if (isString(path)) path = path.split('.')
	
	  return setPropInternal(path, obj, value, 0)
	}
	
	function setPropInternal (path, obj, value, idx) {
	  if (path.length === idx) {
	    return value
	  }
	
	  // Create things as we go down if they don't exist
	  obj = obj || {}
	
	  var key = path[idx]
	  return set(obj, key, setPropInternal(path, obj[key], value, ++idx))
	}
	
	function set (obj, key, value) {
	  var newObj = clone(obj)
	  newObj[key] = isFunction(value) ? value(obj[key]) : value
	  return newObj
	}


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var cloneObj = __webpack_require__(113)
	
	/**
	 * Expose cloneShallow
	 */
	
	module.exports = cloneShallow['default'] = cloneShallow
	
	/**
	 * Clone object or array shallow
	 * @param  {Object|Array} a object to copy
	 * @return {Object|Array}
	 */
	
	function cloneShallow (a) {
	  return Array.isArray(a)
	    ? a.slice()
	    : cloneObj(a)
	}


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var forEach = __webpack_require__(114)
	
	/**
	 * Expose cloneObj
	 */
	
	module.exports = cloneObj['default'] = cloneObj
	
	/**
	 * Clone an object.
	 * @param  {Object} obj Object to Clone
	 * @return {Object}
	 */
	
	function cloneObj (obj) {
	  var newObj = {}
	
	  forEach(function (val, key) {
	    newObj[key] = val
	  }, obj)
	
	  return newObj
	}


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var isObject = __webpack_require__(115)
	var isArray = __webpack_require__(116)
	var forEachObj = __webpack_require__(117)
	var forEachArr = __webpack_require__(118)
	
	/**
	 * Expose foreach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * For each
	 * @param  {Function} fn  iterator
	 * @param  {Object}   obj object to iterate over
	 */
	
	function forEach (fn, a) {
	  if (isArray(a)) return forEachArr.call(this, fn, a)
	  if (isObject(a)) return forEachObj.call(this, fn, a)
	}


/***/ },
/* 115 */
/***/ function(module, exports) {

	/**
	 * Expose isObject
	 */
	
	module.exports = isObject
	
	/**
	 * Constants
	 */
	
	var objString = toString(Object)
	
	/**
	 * Check for plain object.
	 *
	 * @param {Mixed} val
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject (val) {
	  return !!val && (val.constructor === Object || toString(val.constructor) === objString)
	}
	
	function toString (val) {
	  return Function.prototype.toString.call(val)
	}


/***/ },
/* 116 */
/***/ function(module, exports) {

	/**
	 * Expose isArray
	 */
	
	module.exports = isArray['default'] = isArray
	
	/**
	 * isArray
	 */
	
	function isArray (val) {
	  return Array.isArray(val)
	}


/***/ },
/* 117 */
/***/ function(module, exports) {

	/**
	 * Expose forEach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * forEach
	 */
	
	function forEach (fn, obj) {
	  if (!obj) return
	
	  var keys = Object.keys(obj)
	
	  for (var i = 0, len = keys.length; i < len; ++i) {
	    var key = keys[i]
	    fn.call(this, obj[key], key)
	  }
	}


/***/ },
/* 118 */
/***/ function(module, exports) {

	/**
	 * Expose forEach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * forEach
	 */
	
	function forEach (fn, arr) {
	  if (!arr) return
	
	  for (var i = 0, len = arr.length; i < len; ++i) {
	    fn.call(this, arr[i], i)
	  }
	}


/***/ },
/* 119 */
/***/ function(module, exports) {

	/**
	 * Modules
	 */
	
	/**
	 * Expose isFunction
	 */
	
	module.exports = isFunction['default'] = isFunction
	
	/**
	 * isFunction
	 */
	
	function isFunction (value) {
	  return typeof value === 'function'
	}


/***/ },
/* 120 */
/***/ function(module, exports) {

	/**
	 * Expose isString
	 */
	
	module.exports = isString['default'] = isString
	
	/**
	 * Check if string
	 * @param  {Mixed}  value
	 * @return {Boolean}
	 */
	function isString (value) {
	  return typeof value === 'string'
	}


/***/ },
/* 121 */
/***/ function(module, exports) {

	/**
	 * Modules
	 */
	
	/**
	 * Expose isNumber
	 */
	
	module.exports = isNumber['default'] = isNumber
	
	/**
	 * isNumber
	 */
	
	function isNumber (value) {
	  return typeof value === 'number'
	}


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var omit = __webpack_require__(123)
	var setProp = __webpack_require__(111)
	
	/**
	 * Expose omitProp
	 */
	
	module.exports = omitProp['default'] = omitProp
	
	/**
	 * omitProp
	 */
	
	function omitProp (path, obj) {
	  if (typeof path === 'string') {
	    path = path.split('.')
	  }
	
	  if (path.length > 1) {
	    var subpath = path.slice(0, -1)
	    var key = path[path.length - 1]
	
	    return setProp(subpath, obj, function (obj) {
	      return omit(obj, key)
	    })
	  }
	
	  return omit(obj, key)
	}


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Imports
	 */
	
	var forEach = __webpack_require__(124)
	
	/**
	 * Object omit
	 */
	
	function omit (obj, keys, ctx) {
	  var result = {}
	
	  if (Array.isArray(keys)) {
	    forEach(obj, function (val, key) {
	      if (keys.indexOf(key) === -1) {
	        result[key] = val
	      }
	    })
	  } else if (typeof keys === 'function') {
	    forEach(obj, function (val, key) {
	      if (keys !== key) {
	        result[key] = val
	      }
	    })
	  } else {
	    forEach(obj, function (val, key) {
	      if (!keys.call(ctx, key)) {
	        result[key] = val
	      }
	    })
	  }
	
	  return result
	}
	
	/**
	 * Exports
	 */
	
	module.exports = omit


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var isObject = __webpack_require__(125)
	var isArray = __webpack_require__(126)
	var forEachObj = __webpack_require__(127)
	var forEachArr = __webpack_require__(128)
	
	/**
	 * Expose foreach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * For each
	 * @param  {Function} fn  iterator
	 * @param  {Object}   obj object to iterate over
	 */
	
	function forEach (fn, a) {
	  if (isArray(a)) return forEachArr.call(this, fn, a)
	  if (isObject(a)) return forEachObj.call(this, fn, a)
	}


/***/ },
/* 125 */
/***/ function(module, exports) {

	/**
	 * Expose isObject
	 */
	
	module.exports = isObject
	
	/**
	 * Constants
	 */
	
	var objString = toString(Object)
	
	/**
	 * Check for plain object.
	 *
	 * @param {Mixed} val
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject (val) {
	  return !!val && (val.constructor === Object || toString(val.constructor) === objString)
	}
	
	function toString (val) {
	  return Function.prototype.toString.call(val)
	}


/***/ },
/* 126 */
/***/ function(module, exports) {

	/**
	 * Expose isArray
	 */
	
	module.exports = isArray['default'] = isArray
	
	/**
	 * isArray
	 */
	
	function isArray (val) {
	  return Array.isArray(val)
	}


/***/ },
/* 127 */
/***/ function(module, exports) {

	/**
	 * Expose forEach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * forEach
	 */
	
	function forEach (fn, obj) {
	  if (!obj) return
	
	  var keys = Object.keys(obj)
	
	  for (var i = 0, len = keys.length; i < len; ++i) {
	    var key = keys[i]
	    fn.call(this, obj[key], key)
	  }
	}


/***/ },
/* 128 */
/***/ function(module, exports) {

	/**
	 * Expose forEach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * forEach
	 */
	
	function forEach (fn, arr) {
	  if (!arr) return
	
	  for (var i = 0, len = arr.length; i < len; ++i) {
	    fn.call(this, arr[i], i)
	  }
	}


/***/ },
/* 129 */
/***/ function(module, exports) {

	/**
	 * Expose emptyElement
	 */
	
	module.exports = emptyElement
	
	/**
	 * emptyElement
	 */
	
	function emptyElement (el) {
	  var node
	
	  while (node = el.firstChild) {
	    el.removeChild(node)
	  }
	
	  return el
	}


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reduxEphemeral = __webpack_require__(108);
	
	var _objectEqual = __webpack_require__(131);
	
	var _objectEqual2 = _interopRequireDefault(_objectEqual);
	
	var _arrayEqual = __webpack_require__(132);
	
	var _arrayEqual2 = _interopRequireDefault(_arrayEqual);
	
	var _getProp = __webpack_require__(133);
	
	var _getProp2 = _interopRequireDefault(_getProp);
	
	var _virtex = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Constants
	 */
	
	var _actions$types = _virtex.actions.types; /**
	                                             * Imports
	                                             */
	
	var CREATE_THUNK = _actions$types.CREATE_THUNK;
	var UPDATE_THUNK = _actions$types.UPDATE_THUNK;
	var DESTROY_THUNK = _actions$types.DESTROY_THUNK;
	
	/**
	 * Provide local state to virtex components
	 */
	
	function local() {
	  var prop = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	
	  return function (_ref) {
	    var getState = _ref.getState;
	    var dispatch = _ref.dispatch;
	
	    var state = function state() {
	      return (0, _getProp2.default)(prop, getState());
	    };
	
	    return function (next) {
	      return function (action) {
	        switch (action.type) {
	          case CREATE_THUNK:
	            create(dispatch, action.vnode);
	            break;
	          case UPDATE_THUNK:
	            update(state, action.vnode, action.prev);
	            break;
	          case DESTROY_THUNK:
	            destroy(dispatch, action.vnode);
	            break;
	        }
	
	        return next(action);
	      };
	    };
	  };
	}
	
	function create(dispatch, thunk) {
	  var component = thunk.type;
	  var _component$initialSta = component.initialState;
	  var initialState = _component$initialSta === undefined ? function () {
	    return {};
	  } : _component$initialSta;
	
	  prepare(thunk, initialState(thunk.props));
	
	  // If a component does not have a reducer, it does not
	  // get any local state
	  if (component.reducer) {
	    component.shouldUpdate = component.shouldUpdate || shouldUpdate;
	    dispatch((0, _reduxEphemeral.createEphemeral)(thunk.path, thunk.state));
	  }
	}
	
	function update(getState, thunk, prev) {
	  prepare(thunk, (0, _getProp2.default)(thunk.path, getState()));
	}
	
	function destroy(dispatch, thunk) {
	  thunk.type.reducer && dispatch((0, _reduxEphemeral.destroyEphemeral)(thunk.path));
	}
	
	function shouldUpdate(prev, next) {
	  return !(0, _arrayEqual2.default)(prev.children, next.children) || !(0, _objectEqual2.default)(prev.props, next.props) || prev.state !== next.state;
	}
	
	function ref(refs) {
	  return function (name) {
	    return function (local) {
	      return refs[name] = local;
	    };
	  };
	}
	
	function prepare(thunk, state) {
	  thunk.state = state;
	  thunk.local = function (fn) {
	    for (var _len = arguments.length, outerArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      outerArgs[_key - 1] = arguments[_key];
	    }
	
	    return function () {
	      for (var _len2 = arguments.length, innerArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        innerArgs[_key2] = arguments[_key2];
	      }
	
	      return (0, _reduxEphemeral.toEphemeral)(thunk.path, thunk.type.reducer, fn.apply(thunk, outerArgs.concat(innerArgs)));
	    };
	  };
	
	  var refs = {};
	
	  thunk.ref = {
	    as: ref(refs),
	    to: function to(name, fn) {
	      for (var _len3 = arguments.length, outerArgs = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
	        outerArgs[_key3 - 2] = arguments[_key3];
	      }
	
	      return function () {
	        return refs[name].apply(refs, [fn].concat(outerArgs)).apply(undefined, arguments);
	      };
	    }
	  };
	
	  if (thunk.props && thunk.props.ref) {
	    thunk.props.ref(thunk.local);
	  }
	}
	
	/**
	 * Exports
	 */
	
	exports.default = local;

/***/ },
/* 131 */
/***/ function(module, exports) {

	/**
	 * objectEqual
	 */
	
	function objectEqual (a, b) {
	  var aKeys = Object.keys(a)
	  var bKeys = Object.keys(b)
	  var aLen = aKeys.length
	  var bLen = bKeys.length
	
	  if (aLen === bLen) {
	    for (var i = 0; i < aLen; ++i) {
	      var key = aKeys[i]
	
	      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key) || a[key] !== b[key]) {
	        return false
	      }
	    }
	
	    return true
	  }
	
	  return false
	}
	
	/**
	 * Exports
	 */
	
	module.exports = objectEqual


/***/ },
/* 132 */
/***/ function(module, exports) {

	/**
	 * Expse equal
	 */
	
	module.exports = equal['default'] = equal
	
	/**
	 * Check if two arrays are equal.
	 * @param  {Array} a array 1
	 * @param  {Array} b array 2
	 * @return {Boolean}
	 */
	
	function equal (a, b) {
	  var aLen = a.length
	  var bLen = b.length
	
	  if (aLen === bLen) {
	    for (var i = 0; i < aLen; ++i) {
	      if (a[i] !== b[i]) {
	        return false
	      }
	    }
	
	    return true
	  }
	
	  return false
	}


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var isString = __webpack_require__(134)
	
	/**
	 * Expose getProp
	 */
	
	module.exports = getProp['default'] = getProp
	
	/**
	 * Get propert
	 * @param  {Array|String} path path to property
	 * @param  {Object} obj object to retrieve property from
	 * @return {Mixed} property
	 */
	
	function getProp (path, obj) {
	  if (isString(path)) {
	    path = path.split('.')
	  }
	
	  for (var i = 0, len = path.length; i < len && obj; ++i) {
	    obj = obj[path[i]]
	  }
	
	  return obj
	}


/***/ },
/* 134 */
/***/ function(module, exports) {

	/**
	 * Expose isString
	 */
	
	module.exports = isString['default'] = isString
	
	/**
	 * Check if string
	 * @param  {Mixed}  value
	 * @return {Boolean}
	 */
	function isString (value) {
	  return typeof value === 'string'
	}


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _proxyEvent = __webpack_require__(136);
	
	var _proxyEvent2 = _interopRequireDefault(_proxyEvent);
	
	var _domEvents = __webpack_require__(138);
	
	var _domEvents2 = _interopRequireDefault(_domEvents);
	
	var _compose = __webpack_require__(139);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _evStore = __webpack_require__(143);
	
	var _evStore2 = _interopRequireDefault(_evStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * Imports
	                                                                                                                                                                                                     */
	
	/**
	 * Delegator
	 */
	
	function delegant(rootNode) {
	  var fn = arguments.length <= 1 || arguments[1] === undefined ? function (v) {
	    return v;
	  } : arguments[1];
	
	  return _compose2.default.apply(undefined, _toConsumableArray(_domEvents2.default.map(bind)));
	
	  function bind(name) {
	    var handler = listener(name);
	    rootNode.addEventListener(name, handler, true);
	    return function () {
	      return rootNode.removeEventListener(name, handler, true);
	    };
	  }
	
	  function listener(name) {
	    return function (e) {
	      return bubble(name, e.target, e);
	    };
	  }
	
	  function bubble(name, target, e) {
	    var es = (0, _evStore2.default)(target);
	    var handler = es[name];
	
	    if (handler) {
	      var event = new _proxyEvent2.default(e);
	      event.currentTarget = target;
	      fn(handler(event));
	      if (event._stopPropagation || event._stopImmediatePropagation) {
	        return;
	      }
	    }
	
	    if (target.parentNode && target.parentNode !== rootNode) {
	      bubble(name, target.parentNode, e);
	    }
	  }
	}
	
	/**
	 * Exports
	 */
	
	exports.default = delegant;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/**
	 * Note: This code copied from: https://github.com/Raynos/dom-delegator/blob/master/proxy-event.js
	 */
	
	var inherits = __webpack_require__(137);
	
	var ALL_PROPS = ["altKey", "bubbles", "cancelable", "ctrlKey", "eventPhase", "metaKey", "relatedTarget", "shiftKey", "target", "timeStamp", "type", "view", "which"];
	var KEY_PROPS = ["char", "charCode", "key", "keyCode"];
	var MOUSE_PROPS = ["button", "buttons", "clientX", "clientY", "layerX", "layerY", "offsetX", "offsetY", "pageX", "pageY", "screenX", "screenY", "toElement"];
	
	var rkeyEvent = /^key|input/;
	var rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/;
	
	module.exports = ProxyEvent;
	
	function ProxyEvent(ev) {
	    if (!(this instanceof ProxyEvent)) {
	        return new ProxyEvent(ev);
	    }
	
	    if (rkeyEvent.test(ev.type)) {
	        return new KeyEvent(ev);
	    } else if (rmouseEvent.test(ev.type)) {
	        return new MouseEvent(ev);
	    }
	
	    for (var i = 0; i < ALL_PROPS.length; i++) {
	        var propKey = ALL_PROPS[i];
	        this[propKey] = ev[propKey];
	    }
	
	    this._rawEvent = ev;
	    this._bubbles = false;
	}
	
	ProxyEvent.prototype.preventDefault = function () {
	    this._rawEvent.preventDefault();
	};
	
	ProxyEvent.prototype.startPropagation = function () {
	    this._bubbles = true;
	};
	
	ProxyEvent.prototype.stopPropagation = function () {
	    this._stopPropagation = true;
	};
	
	ProxyEvent.prototype.stopImmediatePropagation = function () {
	    this._stopImmediatePropagation = true;
	};
	
	function MouseEvent(ev) {
	    for (var i = 0; i < ALL_PROPS.length; i++) {
	        var propKey = ALL_PROPS[i];
	        this[propKey] = ev[propKey];
	    }
	
	    for (var j = 0; j < MOUSE_PROPS.length; j++) {
	        var mousePropKey = MOUSE_PROPS[j];
	        this[mousePropKey] = ev[mousePropKey];
	    }
	
	    this._rawEvent = ev;
	}
	
	inherits(MouseEvent, ProxyEvent);
	
	function KeyEvent(ev) {
	    for (var i = 0; i < ALL_PROPS.length; i++) {
	        var propKey = ALL_PROPS[i];
	        this[propKey] = ev[propKey];
	    }
	
	    for (var j = 0; j < KEY_PROPS.length; j++) {
	        var keyPropKey = KEY_PROPS[j];
	        this[keyPropKey] = ev[keyPropKey];
	    }
	
	    this._rawEvent = ev;
	}
	
	inherits(KeyEvent, ProxyEvent);

/***/ },
/* 137 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 138 */
/***/ function(module, exports) {

	/**
	 * domEvents
	 */
	
	var domEvents = [
	  'abort',
	  'animationend',
	  'animationiteration',
	  'animationstart',
	  'blur',
	  'canplay',
	  'canplaythrough',
	  'change',
	  'click',
	  'contextmenu',
	  'copy',
	  'cut',
	  'dblclick',
	  'drag',
	  'dragend',
	  'dragenter',
	  'dragexit',
	  'dragleave',
	  'dragover',
	  'dragstart',
	  'drop',
	  'durationchange',
	  'emptied',
	  'encrypted',
	  'ended',
	  'error',
	  'focus',
	  'focusin',
	  'focusout',
	  'input',
	  'invalid',
	  'keydown',
	  'keypress',
	  'keyup',
	  'load',
	  'loadeddata',
	  'loadedmetadata',
	  'loadstart',
	  'mousedown',
	  'mouseenter',
	  'mouseleave',
	  'mousemove',
	  'mouseout',
	  'mouseover',
	  'mouseup',
	  'paste',
	  'pause',
	  'play',
	  'playing',
	  'progress',
	  'ratechange',
	  'reset',
	  'resize',
	  'scroll',
	  'seeked',
	  'seeking',
	  'select',
	  'stalled',
	  'submit',
	  'suspend',
	  'timeupdate',
	  'touchcancel',
	  'touchend',
	  'touchmove',
	  'touchstart',
	  'transitionend',
	  'unload',
	  'volumechange',
	  'waiting',
	  'wheel'
	]
	
	/**
	 * Expose domEvents
	 */
	
	module.exports = domEvents


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var reduce = __webpack_require__(140)
	var identity = __webpack_require__(141)
	var slice = __webpack_require__(142)
	
	/**
	 * Expose compose
	 */
	
	module.exports = compose
	
	/**
	 * Accumulate function compositions.
	 * f . g . h ...
	 */
	
	function compose () {
	  var args = arguments
	  return reduce(
	    composeTwo,
	    args[0] || identity,
	    slice(args, 1, args.length)
	  )
	}
	
	/**
	 * Compose `f` with `g`
	 * f . g
	 */
	
	function composeTwo (f, g) {
	  return function () {
	    return f.call(null, g.apply(null, arguments))
	  }
	}


/***/ },
/* 140 */
/***/ function(module, exports) {

	/**
	 * Modules
	 */
	
	/**
	 * Expose reduceArray
	 */
	
	module.exports = reduceArray['default'] = reduceArray
	
	/**
	 * reduceArray
	 */
	
	function reduceArray (cb, init, arr) {
	  var len = arr.length
	  var acc = init
	  if (!arr.length) return init
	
	  for (var i = 0; i < len; i++) {
	    acc = cb(acc, arr[i], i, arr)
	  }
	
	  return acc
	}


/***/ },
/* 141 */
/***/ function(module, exports) {

	/**
	 * Modules
	 */
	
	/**
	 * Expose identity
	 */
	
	module.exports = identity['default'] = identity
	
	/**
	 * A function that returns its first arg.
	 * @param  {Any} val
	 * @return {Any} val
	 */
	function identity (val) {
	  return val
	}


/***/ },
/* 142 */
/***/ function(module, exports) {

	/**
	 * Vars
	 */
	
	var sliced = Array.prototype.slice
	
	/**
	 * Expose slice
	 */
	
	module.exports = slice['default'] = slice
	
	/**
	 * slice
	 */
	
	function slice (array, begin, end) {
	  return sliced.call(array, begin, end)
	}


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var OneVersionConstraint = __webpack_require__(144);
	
	var MY_VERSION = '7';
	OneVersionConstraint('ev-store', MY_VERSION);
	
	var hashKey = '__EV_STORE_KEY@' + MY_VERSION;
	
	module.exports = EvStore;
	
	function EvStore(elem) {
	    var hash = elem[hashKey];
	
	    if (!hash) {
	        hash = elem[hashKey] = {};
	    }
	
	    return hash;
	}


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Individual = __webpack_require__(145);
	
	module.exports = OneVersion;
	
	function OneVersion(moduleName, version, defaultValue) {
	    var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;
	    var enforceKey = key + '_ENFORCE_SINGLETON';
	
	    var versionValue = Individual(enforceKey, version);
	
	    if (versionValue !== version) {
	        throw new Error('Can only have one copy of ' +
	            moduleName + '.\n' +
	            'You already have version ' + versionValue +
	            ' installed.\n' +
	            'This means you cannot install version ' + version);
	    }
	
	    return Individual(key, defaultValue);
	}


/***/ },
/* 145 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/*global window, global*/
	
	var root = typeof window !== 'undefined' ?
	    window : typeof global !== 'undefined' ?
	    global : {};
	
	module.exports = Individual;
	
	function Individual(key, value) {
	    if (key in root) {
	        return root[key];
	    }
	
	    root[key] = value;
	
	    return value;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reconstitute = undefined;
	
	var _replaceElement = __webpack_require__(147);
	
	var _replaceElement2 = _interopRequireDefault(_replaceElement);
	
	var _insertElement = __webpack_require__(148);
	
	var _insertElement2 = _interopRequireDefault(_insertElement);
	
	var _removeElement = __webpack_require__(149);
	
	var _removeElement2 = _interopRequireDefault(_removeElement);
	
	var _updateNode = __webpack_require__(150);
	
	var _updateNode2 = _interopRequireDefault(_updateNode);
	
	var _createNode = __webpack_require__(165);
	
	var _createNode2 = _interopRequireDefault(_createNode);
	
	var _foreach = __webpack_require__(160);
	
	var _foreach2 = _interopRequireDefault(_foreach);
	
	var _virtex = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Constants
	 */
	
	var _actions$types = _virtex.actions.types; /**
	                                             * Imports
	                                             */
	
	var CREATE_NODE = _actions$types.CREATE_NODE;
	var UPDATE_NODE = _actions$types.UPDATE_NODE;
	var REMOVE_NODE = _actions$types.REMOVE_NODE;
	var REPLACE_NODE = _actions$types.REPLACE_NODE;
	var INSERT_NODE = _actions$types.INSERT_NODE;
	
	/**
	 * Virtex DOM effects driver
	 */
	
	function dom(_ref) {
	  var dispatch = _ref.dispatch;
	
	  return function (next) {
	    return function (action) {
	      switch (action.type) {
	        case CREATE_NODE:
	          return (0, _createNode2.default)(action.vnode, action.children);
	        case UPDATE_NODE:
	          return (0, _updateNode2.default)(action.prev, action.vnode);
	        case REMOVE_NODE:
	          (0, _removeElement2.default)(action.vnode.element);
	          return action.vnode;
	        case REPLACE_NODE:
	          (0, _replaceElement2.default)(action.vnode.element, action.prev.element);
	          return action.vnode;
	        case INSERT_NODE:
	          (0, _insertElement2.default)(action.vnode.element, action.newVnode.element, action.pos);
	          return action.vnode;
	      }
	
	      return next(action);
	    };
	  };
	}
	
	/**
	 * Setup the cached element property on a vnode tree. Useful for server-side
	 * rendering
	 */
	
	function reconstitute(vnode, element) {
	  vnode.element = element;
	  (0, _foreach2.default)(function (vnode, i) {
	    return reconstitute(vnode, element.childNodes[i]);
	  }, vnode.children);
	}
	
	/**
	 * Exports
	 */
	
	exports.default = dom;
	exports.reconstitute = reconstitute;

/***/ },
/* 147 */
/***/ function(module, exports) {

	/**
	 * Expose replaceElement
	 */
	
	module.exports = replaceElement['default'] = replaceElement
	
	/**
	 * replaceElement
	 */
	
	function replaceElement (newNode, oldNode) {
	  return oldNode.parentNode.replaceChild(newNode, oldNode)
	}


/***/ },
/* 148 */
/***/ function(module, exports) {

	/**
	 * Expose insertElement
	 */
	
	module.exports = insertElement['default'] = insertElement
	
	/**
	 * insertElement
	 */
	
	function insertElement (parent, node, pos) {
	  return parent.insertBefore(node, parent.childNodes[pos] || null)
	}


/***/ },
/* 149 */
/***/ function(module, exports) {

	/**
	 * Expose removeElement
	 */
	
	module.exports = removeElement['default'] = removeElement
	
	/**
	 * removeElement
	 */
	
	function removeElement (node) {
	  return node.parentNode.removeChild(node)
	}


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _removeAttribute = __webpack_require__(151);
	
	var _removeAttribute2 = _interopRequireDefault(_removeAttribute);
	
	var _setAttribute = __webpack_require__(154);
	
	var _setAttribute2 = _interopRequireDefault(_setAttribute);
	
	var _isUndefined = __webpack_require__(159);
	
	var _isUndefined2 = _interopRequireDefault(_isUndefined);
	
	var _foreach = __webpack_require__(160);
	
	var _foreach2 = _interopRequireDefault(_foreach);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Update element
	 */
	
	/**
	 * Imports
	 */
	
	function updateElement(prev, next) {
	  var node = next.element = prev.element;
	
	  /**
	   * Diff attributes
	   */
	
	  var pattrs = prev.props;
	  var nattrs = next.props;
	
	  (0, _foreach2.default)(function (val, key) {
	    if (!nattrs || (0, _isUndefined2.default)(nattrs[key])) {
	      (0, _removeAttribute2.default)(node, key);
	    }
	  }, pattrs);
	
	  (0, _foreach2.default)(function (val, key) {
	    if (!pattrs || val !== pattrs[key]) {
	      (0, _setAttribute2.default)(node, key, val);
	    }
	  }, nattrs);
	
	  return next;
	}
	
	/**
	 * Exports
	 */
	
	exports.default = updateElement;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _setValue = __webpack_require__(152);
	
	var _setValue2 = _interopRequireDefault(_setValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Remove an attribute from an element
	 */
	
	function removeAttribute(node, name) {
	  switch (name) {
	    case 'checked':
	    case 'disabled':
	    case 'selected':
	      node[name] = false;
	      break;
	    case 'innerHTML':
	      node.innerHTML = '';
	      break;
	    case 'value':
	      (0, _setValue2.default)(node, null);
	      break;
	    default:
	      node.removeAttribute(name);
	      break;
	  }
	}
	
	/**
	 * Exports
	 */
	
	/**
	 * Imports
	 */
	
	exports.default = removeAttribute;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var canSelectText = __webpack_require__(153)
	
	/**
	 * Expose setValue
	 */
	
	module.exports = setValue['default'] = setValue
	
	/**
	 * setValue
	 */
	
	function setValue (node, value) {
	  if (node.ownerDocument.activeElement === node && canSelectText(node)) {
	    var start = node.selectionStart
	    var end = node.selectionEnd
	    node.value = value
	    node.setSelectionRange(start, end)
	  } else {
	    node.value = value
	  }
	}


/***/ },
/* 153 */
/***/ function(module, exports) {

	/**
	 * Modules
	 */
	
	/**
	 * Expose canSelectText
	 */
	
	module.exports = canSelectText['default'] = canSelectText
	
	/**
	 * Selectable element regex
	 */
	
	var selectable = /^text|search|password|tel|url$/
	
	/**
	 * canSelectText
	 */
	
	function canSelectText (node) {
	  return node.tagName === 'INPUT' && selectable.test(node.type)
	}


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _removeAttribute = __webpack_require__(151);
	
	var _removeAttribute2 = _interopRequireDefault(_removeAttribute);
	
	var _isValidAttr = __webpack_require__(155);
	
	var _isValidAttr2 = _interopRequireDefault(_isValidAttr);
	
	var _setAttribute = __webpack_require__(156);
	
	var _setAttribute2 = _interopRequireDefault(_setAttribute);
	
	var _setValue = __webpack_require__(152);
	
	var _setValue2 = _interopRequireDefault(_setValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Set an attribute on an element
	 */
	
	/**
	 * Imports
	 */
	
	function setAttribute(node, name, value) {
	  if (typeof value === 'function') {
	    value = value(node, name);
	  }
	
	  if ((0, _isValidAttr2.default)(value)) {
	    switch (name) {
	      case 'nodeValue':
	      case 'checked':
	      case 'disabled':
	      case 'selected':
	      case 'innerHTML':
	      case 'textContent':
	        node[name] = value;
	        break;
	      case 'value':
	        (0, _setValue2.default)(node, value);
	        break;
	      default:
	        (0, _setAttribute2.default)(node, name, value);
	        break;
	    }
	  } else {
	    (0, _removeAttribute2.default)(node, name);
	  }
	}
	
	/**
	 * Exports
	 */
	
	exports.default = setAttribute;

/***/ },
/* 155 */
/***/ function(module, exports) {

	/**
	 * Expose isValidAttr
	 */
	
	module.exports = isValidAttr
	
	/**
	 * isValidAttr
	 */
	
	function isValidAttr (val) {
	  switch (typeof val) {
	    case 'string':
	    case 'number':
	      return true
	    case 'boolean':
	      return val
	    default:
	      return false
	  }
	}


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var svgAttributeNamespace = __webpack_require__(157)
	
	/**
	 * Expose setAttribute
	 */
	
	module.exports = setAttribute['default'] = setAttribute
	
	/**
	 * setAttribute
	 */
	
	function setAttribute (node, name, value) {
	  var ns = svgAttributeNamespace(name)
	  return ns
	    ? node.setAttributeNS(ns, name, value)
	    : node.setAttribute(name, value)
	}


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var namespaces = __webpack_require__(158)
	
	/**
	 * Exports
	 */
	
	module.exports = svgAttributeNamespace['default'] = svgAttributeNamespace
	
	/**
	 * Get namespace of svg attribute
	 *
	 * @param {String} attributeName
	 * @return {String} namespace
	 */
	
	function svgAttributeNamespace (attributeName) {
	  // if no prefix separator in attributeName, then no namespace
	  if (attributeName.indexOf(':') === -1) return null
	
	  // get prefix from attributeName
	  var prefix = attributeName.split(':', 1)[0]
	
	  // if prefix in supported prefixes
	  if (namespaces.hasOwnProperty(prefix)) {
	    // then namespace of prefix
	    return namespaces[prefix]
	  } else {
	    // else unsupported prefix
	    throw new Error('svg-attribute-namespace: prefix "' + prefix + '" is not supported by SVG.')
	  }
	}


/***/ },
/* 158 */
/***/ function(module, exports) {

	/*
	 * Supported SVG attribute namespaces by prefix.
	 *
	 * References:
	 * - http://www.w3.org/TR/SVGTiny12/attributeTable.html
	 * - http://www.w3.org/TR/SVG/attindex.html
	 * - http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAttrNS
	 */
	
	var svgAttributeNamespaces = {
	  ev: 'http://www.w3.org/2001/xml-events',
	  xlink: 'http://www.w3.org/1999/xlink',
	  xml: 'http://www.w3.org/XML/1998/namespace',
	  xmlns: 'http://www.w3.org/2000/xmlns/'
	}
	
	/**
	 * Expose svgAttributeNamespaces
	 */
	
	module.exports = svgAttributeNamespaces


/***/ },
/* 159 */
/***/ function(module, exports) {

	/**
	 * Expose isUndefined
	 */
	
	module.exports = isUndefined['default'] = isUndefined
	
	/**
	 * Check if undefined.
	 * @param  {Mixed}  value
	 * @return {Boolean}
	 */
	
	function isUndefined (value) {
	  return typeof value === 'undefined'
	}


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var isObject = __webpack_require__(161)
	var isArray = __webpack_require__(162)
	var forEachObj = __webpack_require__(163)
	var forEachArr = __webpack_require__(164)
	
	/**
	 * Expose foreach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * For each
	 * @param  {Function} fn  iterator
	 * @param  {Object}   obj object to iterate over
	 */
	
	function forEach (fn, a) {
	  if (isArray(a)) return forEachArr.call(this, fn, a)
	  if (isObject(a)) return forEachObj.call(this, fn, a)
	}


/***/ },
/* 161 */
/***/ function(module, exports) {

	/**
	 * Expose isObject
	 */
	
	module.exports = isObject
	
	/**
	 * Constants
	 */
	
	var objString = toString(Object)
	
	/**
	 * Check for plain object.
	 *
	 * @param {Mixed} val
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject (val) {
	  return !!val && (val.constructor === Object || toString(val.constructor) === objString)
	}
	
	function toString (val) {
	  return Function.prototype.toString.call(val)
	}


/***/ },
/* 162 */
/***/ function(module, exports) {

	/**
	 * Expose isArray
	 */
	
	module.exports = isArray['default'] = isArray
	
	/**
	 * isArray
	 */
	
	function isArray (val) {
	  return Array.isArray(val)
	}


/***/ },
/* 163 */
/***/ function(module, exports) {

	/**
	 * Expose forEach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * forEach
	 */
	
	function forEach (fn, obj) {
	  if (!obj) return
	
	  var keys = Object.keys(obj)
	
	  for (var i = 0, len = keys.length; i < len; ++i) {
	    var key = keys[i]
	    fn.call(this, obj[key], key)
	  }
	}


/***/ },
/* 164 */
/***/ function(module, exports) {

	/**
	 * Expose forEach
	 */
	
	module.exports = forEach['default'] = forEach
	
	/**
	 * forEach
	 */
	
	function forEach (fn, arr) {
	  if (!arr) return
	
	  for (var i = 0, len = arr.length; i < len; ++i) {
	    fn.call(this, arr[i], i)
	  }
	}


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createElement = __webpack_require__(166);
	
	var _createElement2 = _interopRequireDefault(_createElement);
	
	var _setAttribute = __webpack_require__(154);
	
	var _setAttribute2 = _interopRequireDefault(_setAttribute);
	
	var _foreach = __webpack_require__(160);
	
	var _foreach2 = _interopRequireDefault(_foreach);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Create a DOM element
	 */
	
	function createNode(vnode, children) {
	  var type = vnode.type;
	
	  if (type === '#text') {
	    vnode.element = document.createTextNode(vnode.props.nodeValue);
	    return vnode;
	  }
	
	  var node = vnode.element = (0, _createElement2.default)(type);
	  (0, _foreach2.default)(function (value, name) {
	    return (0, _setAttribute2.default)(node, name, value);
	  }, vnode.props);
	  (0, _foreach2.default)(function (child) {
	    return node.appendChild(child.element);
	  }, children);
	
	  return vnode;
	}
	
	/**
	 * Exports
	 */
	
	/**
	 * Imports
	 */
	
	exports.default = createNode;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var isSvg = __webpack_require__(167)
	var svgNs = __webpack_require__(170)
	
	/**
	 * Expose createElement
	 */
	
	module.exports = createElement['default'] = createElement
	
	/**
	 * createElement
	 */
	
	function createElement (tag) {
	  return isSvg(tag)
	    ? document.createElementNS(svgNs, tag)
	    : document.createElement(tag)
	}


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Modules
	 */
	
	var svgElements = __webpack_require__(168)
	var has = __webpack_require__(169)
	
	/**
	 * Expose isSvg
	 */
	
	module.exports = isSvg['default'] = isSvg
	
	/**
	 * Vars
	 */
	
	var svgMap = svgElements
	  .reduce(function (acc, name) {
	    acc[name] = true
	    return acc
	  }, {})
	
	/**
	 * isSvg
	 */
	
	function isSvg (name) {
	  return has(name, svgMap)
	}


/***/ },
/* 168 */
/***/ function(module, exports) {

	/**
	 * svgElements
	 */
	
	var svgElements = 'animate circle defs ellipse g line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ')
	
	/**
	 * Expose svgElements
	 */
	
	module.exports = svgElements['default'] = svgElements


/***/ },
/* 169 */
/***/ function(module, exports) {

	/**
	 * Expose has
	 */
	
	module.exports = has['default'] = has
	
	/**
	 * Vars
	 */
	
	var hasOwn = Object.prototype.hasOwnProperty
	
	/**
	 * has
	 */
	
	function has (prop, obj) {
	  return hasOwn.call(obj, prop)
	}


/***/ },
/* 170 */
/***/ function(module, exports) {

	/**
	 * Svg namespace
	 */
	
	var svgNamespace = 'http://www.w3.org/2000/svg'
	
	/**
	 * Expose svgNamespace
	 */
	
	module.exports = svgNamespace['default'] = svgNamespace


/***/ },
/* 171 */
/***/ function(module, exports) {

	"use strict";
	
	var repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};
	var pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};
	var formatTime = function formatTime(time) {
	  return " @ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};
	
	// Use the new performance api to get better precision if available
	var timer = typeof performance !== "undefined" && typeof performance.now === "function" ? performance : Date;
	
	/**
	 * Creates logger with followed options
	 *
	 * @namespace
	 * @property {object} options - options for logger
	 * @property {string} options.level - console[level]
	 * @property {boolean} options.duration - print duration of each action?
	 * @property {boolean} options.timestamp - print timestamp with each action?
	 * @property {object} options.colors - custom colors
	 * @property {object} options.logger - implementation of the `console` API
	 * @property {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @property {boolean} options.collapsed - is group collapsed?
	 * @property {boolean} options.predicate - condition which resolves logger behavior
	 * @property {function} options.stateTransformer - transform state before print
	 * @property {function} options.actionTransformer - transform action before print
	 * @property {function} options.errorTransformer - transform error before print
	 */
	
	function createLogger() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        var _options$level = options.level;
	        var level = _options$level === undefined ? "log" : _options$level;
	        var _options$logger = options.logger;
	        var logger = _options$logger === undefined ? window.console : _options$logger;
	        var _options$logErrors = options.logErrors;
	        var logErrors = _options$logErrors === undefined ? true : _options$logErrors;
	        var collapsed = options.collapsed;
	        var predicate = options.predicate;
	        var _options$duration = options.duration;
	        var duration = _options$duration === undefined ? false : _options$duration;
	        var _options$timestamp = options.timestamp;
	        var timestamp = _options$timestamp === undefined ? true : _options$timestamp;
	        var transformer = options.transformer;
	        var _options$stateTransfo = options.stateTransformer;
	        var // deprecated
	        stateTransformer = _options$stateTransfo === undefined ? function (state) {
	          return state;
	        } : _options$stateTransfo;
	        var _options$actionTransf = options.actionTransformer;
	        var actionTransformer = _options$actionTransf === undefined ? function (actn) {
	          return actn;
	        } : _options$actionTransf;
	        var _options$errorTransfo = options.errorTransformer;
	        var errorTransformer = _options$errorTransfo === undefined ? function (error) {
	          return error;
	        } : _options$errorTransfo;
	        var _options$colors = options.colors;
	        var colors = _options$colors === undefined ? {
	          title: function title() {
	            return "#000000";
	          },
	          prevState: function prevState() {
	            return "#9E9E9E";
	          },
	          action: function action() {
	            return "#03A9F4";
	          },
	          nextState: function nextState() {
	            return "#4CAF50";
	          },
	          error: function error() {
	            return "#F20404";
	          }
	        } : _options$colors;
	
	        // exit if console undefined
	
	        if (typeof logger === "undefined") {
	          return next(action);
	        }
	
	        // exit early if predicate function returns false
	        if (typeof predicate === "function" && !predicate(getState, action)) {
	          return next(action);
	        }
	
	        if (transformer) {
	          console.error("Option 'transformer' is deprecated, use stateTransformer instead");
	        }
	
	        var started = timer.now();
	        var prevState = stateTransformer(getState());
	
	        var formattedAction = actionTransformer(action);
	        var returnedValue = undefined;
	        var error = undefined;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }
	
	        var took = timer.now() - started;
	        var nextState = stateTransformer(getState());
	
	        // message
	        var time = new Date();
	        var isCollapsed = typeof collapsed === "function" ? collapsed(getState, action) : collapsed;
	
	        var formattedTime = formatTime(time);
	        var titleCSS = colors.title ? "color: " + colors.title(formattedAction) + ";" : null;
	        var title = "action " + formattedAction.type + (timestamp ? formattedTime : "") + (duration ? " in " + took.toFixed(2) + " ms" : "");
	
	        // render
	        try {
	          if (isCollapsed) {
	            if (colors.title) logger.groupCollapsed("%c " + title, titleCSS);else logger.groupCollapsed(title);
	          } else {
	            if (colors.title) logger.group("%c " + title, titleCSS);else logger.group(title);
	          }
	        } catch (e) {
	          logger.log(title);
	        }
	
	        if (colors.prevState) logger[level]("%c prev state", "color: " + colors.prevState(prevState) + "; font-weight: bold", prevState);else logger[level]("prev state", prevState);
	
	        if (colors.action) logger[level]("%c action", "color: " + colors.action(formattedAction) + "; font-weight: bold", formattedAction);else logger[level]("action", formattedAction);
	
	        if (error) {
	          if (colors.error) logger[level]("%c error", "color: " + colors.error(error, prevState) + "; font-weight: bold", error);else logger[level]("error", error);
	        } else {
	          if (colors.nextState) logger[level]("%c next state", "color: " + colors.nextState(nextState) + "; font-weight: bold", nextState);else logger[level]("next state", nextState);
	        }
	
	        try {
	          logger.groupEnd();
	        } catch (e) {
	          logger.log("—— log end ——");
	        }
	
	        if (error) throw error;
	        return returnedValue;
	      };
	    };
	  };
	}
	
	module.exports = createLogger;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map