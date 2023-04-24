module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/albumes-albumheader","2":"components/albumes-albumitem","3":"components/components-cook-boton","4":"components/compras-compra-item","5":"components/files-modal-files-minuaturas","6":"components/instrumentales-agregar-instrumental","7":"components/instrumentales-agregar-liciencia","8":"components/instrumentales-card-licencia","9":"components/instrumentales-cardinstrumental","10":"components/instrumentales-instrumental","11":"components/instrumentales-instrumental-edit","12":"components/instrumentales-intrumentalcargado","13":"components/instrumentales-paginador","14":"components/instrumentales-reproductor","15":"components/instrumentales-reproductor-card","16":"components/mercadopago-carga","17":"components/mercadopago-pago","18":"components/perfil-contrasenia","19":"components/perfil-header","20":"components/perfil-instrumental","21":"components/perfil-nombre","22":"components/perfil-validar","23":"components/utilidades-chip-bar","24":"pages/_id","25":"pages/albumes/_id","26":"pages/albumes/index","27":"pages/buy/_id","28":"pages/compra/_id","29":"pages/index","30":"pages/instrumental/_id","31":"pages/instrumentales","32":"pages/login","33":"pages/perfil/albumes","34":"pages/perfil/compras","35":"pages/perfil/configuracion","36":"pages/perfil/index","37":"pages/perfil/instrumental/add","38":"pages/perfil/instrumental/edit/_id","39":"pages/perfil/instrumental/index","40":"pages/perfil/me_gusta","41":"pages/perfil/mercadopago","42":"pages/perfil/procesarcompra","43":"pages/perfil/ventas","44":"pages/register"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/cookingbeats-nuxt/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createSimpleFunctional; });
/* unused harmony export directiveConfig */
/* unused harmony export addOnceEventListener */
/* unused harmony export passiveSupported */
/* unused harmony export addPassiveEventListener */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getNestedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return deepEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getObjectValueByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getPropertyFromItem; });
/* unused harmony export createRange */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getZIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return filterObjectOnKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return convertToUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return kebabCase; });
/* unused harmony export isObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return keyCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return remapInternalIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* unused harmony export arrayDiff */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return upperFirst; });
/* unused harmony export groupItems */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return wrapInArray; });
/* unused harmony export sortItems */
/* unused harmony export defaultFilter */
/* unused harmony export searchItems */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getSlotType; });
/* unused harmony export debounce */
/* unused harmony export throttle */
/* unused harmony export getPrefixedScopedSlots */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return padEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return chunk; });
/* unused harmony export humanReadableFileSize */
/* unused harmony export camelizeObjectKeys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return mergeDeep; });
/* unused harmony export fillArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return composedPath; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function createSimpleFunctional(c, el = 'div', name) {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: name || c.replace(/__/g, '-'),
    functional: true,
    props: {
      tag: {
        type: String,
        default: el
      }
    },
    render(h, {
      data,
      props,
      children
    }) {
      data.staticClass = `${c} ${data.staticClass || ''}`.trim();
      return h(props.tag, data, children);
    }
  });
}
function directiveConfig(binding, defaults = {}) {
  return {
    ...defaults,
    ...binding.modifiers,
    value: binding.arg,
    ...(binding.value || {})
  };
}
function addOnceEventListener(el, eventName, cb, options = false) {
  const once = event => {
    cb(event);
    el.removeEventListener(eventName, once, options);
  };
  el.addEventListener(eventName, once, options);
}
let passiveSupported = false;
try {
  if (typeof window !== 'undefined') {
    const testListenerOpts = Object.defineProperty({}, 'passive', {
      get: () => {
        passiveSupported = true;
      }
    });
    window.addEventListener('testListener', testListenerOpts, testListenerOpts);
    window.removeEventListener('testListener', testListenerOpts, testListenerOpts);
  }
} catch (e) {
  console.warn(e);
}
/* eslint-disable-line no-console */


function addPassiveEventListener(el, event, cb, options) {
  el.addEventListener(event, cb, passiveSupported ? options : false);
}
function getNestedValue(obj, path, fallback) {
  const last = path.length - 1;
  if (last < 0) return obj === undefined ? fallback : obj;
  for (let i = 0; i < last; i++) {
    if (obj == null) {
      return fallback;
    }
    obj = obj[path[i]];
  }
  if (obj == null) return fallback;
  return obj[path[last]] === undefined ? fallback : obj[path[last]];
}
function deepEqual(a, b) {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date && a.getTime() !== b.getTime()) {
    // If the values are Date, compare them as timestamps
    return false;
  }
  if (a !== Object(a) || b !== Object(b)) {
    // If the values aren't objects, they were already checked for equality
    return false;
  }
  const props = Object.keys(a);
  if (props.length !== Object.keys(b).length) {
    // Different number of props, don't bother to check
    return false;
  }
  return props.every(p => deepEqual(a[p], b[p]));
}
function getObjectValueByPath(obj, path, fallback) {
  // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
  if (obj == null || !path || typeof path !== 'string') return fallback;
  if (obj[path] !== undefined) return obj[path];
  path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties

  path = path.replace(/^\./, ''); // strip a leading dot

  return getNestedValue(obj, path.split('.'), fallback);
}
function getPropertyFromItem(item, property, fallback) {
  if (property == null) return item === undefined ? fallback : item;
  if (item !== Object(item)) return fallback === undefined ? item : fallback;
  if (typeof property === 'string') return getObjectValueByPath(item, property, fallback);
  if (Array.isArray(property)) return getNestedValue(item, property, fallback);
  if (typeof property !== 'function') return fallback;
  const value = property(item, fallback);
  return typeof value === 'undefined' ? fallback : value;
}
function createRange(length) {
  return Array.from({
    length
  }, (v, k) => k);
}
function getZIndex(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return 0;
  const index = +window.getComputedStyle(el).getPropertyValue('z-index');
  if (!index) return getZIndex(el.parentNode);
  return index;
}
function filterObjectOnKeys(obj, keys) {
  const filtered = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (typeof obj[key] !== 'undefined') {
      filtered[key] = obj[key];
    }
  }
  return filtered;
}
function convertToUnit(str, unit = 'px') {
  if (str == null || str === '') {
    return undefined;
  } else if (isNaN(+str)) {
    return String(str);
  } else {
    return `${Number(str)}${unit}`;
  }
}
function kebabCase(str) {
  return (str || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
} // KeyboardEvent.keyCode aliases

const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
/**
 * This remaps internal names like '$cancel' or '$vuetify.icons.cancel'
 * to the current name or component for that icon.
 */

function remapInternalIcon(vm, iconName) {
  // Look for custom component in the configuration
  const component = vm.$vuetify.icons.component; // Look for overrides

  if (iconName.startsWith('$')) {
    // Get the target icon name
    const iconPath = `$vuetify.icons.values.${iconName.split('$').pop().split('.').pop()}`; // Now look up icon indirection name,
    // e.g. '$vuetify.icons.values.cancel'

    const override = getObjectValueByPath(vm, iconPath, iconName);
    if (typeof override === 'string') iconName = override;else return override;
  }
  if (component == null) {
    return iconName;
  }
  return {
    component,
    props: {
      icon: iconName
    }
  };
}
function keys(o) {
  return Object.keys(o);
}
/**
 * Camelize a hyphen-delimited string.
 */

const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
};
/**
 * Returns the set difference of B and A, i.e. the set of elements in B but not in A
 */

function arrayDiff(a, b) {
  const diff = [];
  for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) < 0) diff.push(b[i]);
  }
  return diff;
}
/**
 * Makes the first character of a string uppercase
 */

function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function groupItems(items, groupBy, groupDesc) {
  const key = groupBy[0];
  const groups = [];
  let current;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const val = getObjectValueByPath(item, key, null);
    if (current !== val) {
      current = val;
      groups.push({
        name: val !== null && val !== void 0 ? val : '',
        items: []
      });
    }
    groups[groups.length - 1].items.push(item);
  }
  return groups;
}
function wrapInArray(v) {
  return v != null ? Array.isArray(v) ? v : [v] : [];
}
function sortItems(items, sortBy, sortDesc, locale, customSorters) {
  if (sortBy === null || !sortBy.length) return items;
  const stringCollator = new Intl.Collator(locale, {
    sensitivity: 'accent',
    usage: 'sort'
  });
  return items.sort((a, b) => {
    for (let i = 0; i < sortBy.length; i++) {
      const sortKey = sortBy[i];
      let sortA = getObjectValueByPath(a, sortKey);
      let sortB = getObjectValueByPath(b, sortKey);
      if (sortDesc[i]) {
        [sortA, sortB] = [sortB, sortA];
      }
      if (customSorters && customSorters[sortKey]) {
        const customResult = customSorters[sortKey](sortA, sortB);
        if (!customResult) continue;
        return customResult;
      } // Check if both cannot be evaluated

      if (sortA === null && sortB === null) {
        continue;
      } // Dates should be compared numerically

      if (sortA instanceof Date && sortB instanceof Date) {
        return sortA.getTime() - sortB.getTime();
      }
      [sortA, sortB] = [sortA, sortB].map(s => (s || '').toString().toLocaleLowerCase());
      if (sortA !== sortB) {
        if (!isNaN(sortA) && !isNaN(sortB)) return Number(sortA) - Number(sortB);
        return stringCollator.compare(sortA, sortB);
      }
    }
    return 0;
  });
}
function defaultFilter(value, search, item) {
  return value != null && search != null && typeof value !== 'boolean' && value.toString().toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
}
function searchItems(items, search) {
  if (!search) return items;
  search = search.toString().toLowerCase();
  if (search.trim() === '') return items;
  return items.filter(item => Object.keys(item).some(key => defaultFilter(getObjectValueByPath(item, key), search, item)));
}
/**
 * Returns:
 *  - 'normal' for old style slots - `<template slot="default">`
 *  - 'scoped' for old style scoped slots (`<template slot="default" slot-scope="data">`) or bound v-slot (`#default="data"`)
 *  - 'v-slot' for unbound v-slot (`#default`) - only if the third param is true, otherwise counts as scoped
 */

function getSlotType(vm, name, split) {
  if (vm.$slots.hasOwnProperty(name) && vm.$scopedSlots.hasOwnProperty(name) && vm.$scopedSlots[name].name) {
    return split ? 'v-slot' : 'scoped';
  }
  if (vm.$slots.hasOwnProperty(name)) return 'normal';
  if (vm.$scopedSlots.hasOwnProperty(name)) return 'scoped';
}
function debounce(fn, delay) {
  let timeoutId = 0;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
function throttle(fn, limit) {
  let throttling = false;
  return (...args) => {
    if (!throttling) {
      throttling = true;
      setTimeout(() => throttling = false, limit);
      return fn(...args);
    }
  };
}
function getPrefixedScopedSlots(prefix, scopedSlots) {
  return Object.keys(scopedSlots).filter(k => k.startsWith(prefix)).reduce((obj, k) => {
    obj[k.replace(prefix, '')] = scopedSlots[k];
    return obj;
  }, {});
}
function getSlot(vm, name = 'default', data, optional = false) {
  if (vm.$scopedSlots.hasOwnProperty(name)) {
    return vm.$scopedSlots[name](data instanceof Function ? data() : data);
  } else if (vm.$slots.hasOwnProperty(name) && (!data || optional)) {
    return vm.$slots[name];
  }
  return undefined;
}
function clamp(value, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value));
}
function padEnd(str, length, char = '0') {
  return str + char.repeat(Math.max(0, length - str.length));
}
function chunk(str, size = 1) {
  const chunked = [];
  let index = 0;
  while (index < str.length) {
    chunked.push(str.substr(index, size));
    index += size;
  }
  return chunked;
}
function humanReadableFileSize(bytes, binary = false) {
  const base = binary ? 1024 : 1000;
  if (bytes < base) {
    return `${bytes} B`;
  }
  const prefix = binary ? ['Ki', 'Mi', 'Gi'] : ['k', 'M', 'G'];
  let unit = -1;
  while (Math.abs(bytes) >= base && unit < prefix.length - 1) {
    bytes /= base;
    ++unit;
  }
  return `${bytes.toFixed(1)} ${prefix[unit]}B`;
}
function camelizeObjectKeys(obj) {
  if (!obj) return {};
  return Object.keys(obj).reduce((o, key) => {
    o[camelize(key)] = obj[key];
    return o;
  }, {});
}
function mergeDeep(source = {}, target = {}) {
  for (const key in target) {
    const sourceProperty = source[key];
    const targetProperty = target[key]; // Only continue deep merging if
    // both properties are objects

    if (isObject(sourceProperty) && isObject(targetProperty)) {
      source[key] = mergeDeep(sourceProperty, targetProperty);
      continue;
    }
    source[key] = targetProperty;
  }
  return source;
}
function fillArray(length, obj) {
  return Array(length).fill(obj);
}
/**  Polyfill for Event.prototype.composedPath */

function composedPath(e) {
  if (e.composedPath) return e.composedPath();
  const path = [];
  let el = e.target;
  while (el) {
    path.push(el);
    if (el.tagName === 'HTML') {
      path.push(document);
      path.push(window);
      return path;
    }
    el = el.parentElement;
  }
  return path;
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
class Service {
  constructor() {
    this.framework = {};
  }
  init(root, ssrContext) {}
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export consoleInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return consoleWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return consoleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deprecate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return breaking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removed; });
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* eslint-disable no-console */

function createMessage(message, vm, parent) {
  if (_framework__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].config.silent) return;
  if (parent) {
    vm = {
      _isVue: true,
      $parent: parent,
      $options: vm
    };
  }
  if (vm) {
    // Only show each message once per instance
    vm.$_alreadyWarned = vm.$_alreadyWarned || [];
    if (vm.$_alreadyWarned.includes(message)) return;
    vm.$_alreadyWarned.push(message);
  }
  return `[Vuetify] ${message}` + (vm ? generateComponentTrace(vm) : '');
}
function consoleInfo(message, vm, parent) {
  const newMessage = createMessage(message, vm, parent);
  newMessage != null && console.info(newMessage);
}
function consoleWarn(message, vm, parent) {
  const newMessage = createMessage(message, vm, parent);
  newMessage != null && console.warn(newMessage);
}
function consoleError(message, vm, parent) {
  const newMessage = createMessage(message, vm, parent);
  newMessage != null && console.error(newMessage);
}
function deprecate(original, replacement, vm, parent) {
  consoleWarn(`[UPGRADE] '${original}' is deprecated, use '${replacement}' instead.`, vm, parent);
}
function breaking(original, replacement, vm, parent) {
  consoleError(`[BREAKING] '${original}' has been removed, use '${replacement}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`, vm, parent);
}
function removed(original, vm, parent) {
  consoleWarn(`[REMOVED] '${original}' has been removed. You can safely omit it.`, vm, parent);
}
/**
 * Shamelessly stolen from vuejs/vue/blob/dev/src/core/util/debug.js
 */

const classifyRE = /(?:^|[-_])(\w)/g;
const classify = str => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');
function formatComponentName(vm, includeFile) {
  if (vm.$root === vm) {
    return '<Root>';
  }
  const options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
  let name = options.name || options._componentTag;
  const file = options.__file;
  if (!name && file) {
    const match = file.match(/([^/\\]+)\.vue$/);
    name = match && match[1];
  }
  return (name ? `<${classify(name)}>` : `<Anonymous>`) + (file && includeFile !== false ? ` at ${file}` : '');
}
function generateComponentTrace(vm) {
  if (vm._isVue && vm.$parent) {
    const tree = [];
    let currentRecursiveSequence = 0;
    while (vm) {
      if (tree.length > 0) {
        const last = tree[tree.length - 1];
        if (last.constructor === vm.constructor) {
          currentRecursiveSequence++;
          vm = vm.$parent;
          continue;
        } else if (currentRecursiveSequence > 0) {
          tree[tree.length - 1] = [last, currentRecursiveSequence];
          currentRecursiveSequence = 0;
        }
      }
      tree.push(vm);
      vm = vm.$parent;
    }
    return '\n\nfound in\n\n' + tree.map((vm, i) => `${i === 0 ? '---> ' : ' '.repeat(5 + i * 2)}${Array.isArray(vm) ? `${formatComponentName(vm[0])}... (${vm[1]} recursive calls)` : formatComponentName(vm)}`).join('\n');
  } else {
    return `\n\n(found in ${formatComponentName(vm)})`;
  }
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isCssColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return colorToInt; });
/* unused harmony export classToHex */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return intToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colorToHex; });
/* unused harmony export HSVAtoRGBA */
/* unused harmony export RGBAtoHSVA */
/* unused harmony export HSVAtoHSLA */
/* unused harmony export HSLAtoHSVA */
/* unused harmony export RGBAtoCSS */
/* unused harmony export RGBtoCSS */
/* unused harmony export RGBAtoHex */
/* unused harmony export HexToRGBA */
/* unused harmony export HexToHSVA */
/* unused harmony export HSVAtoHex */
/* unused harmony export parseHex */
/* unused harmony export parseGradient */
/* unused harmony export RGBtoInt */
/* unused harmony export contrastRatio */
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _color_transformSRGB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
// Utilities



function isCssColor(color) {
  return !!color && !!color.match(/^(#|var\(--|(rgb|hsl)a?\()/);
}
function colorToInt(color) {
  let rgb;
  if (typeof color === 'number') {
    rgb = color;
  } else if (typeof color === 'string') {
    let c = color[0] === '#' ? color.substring(1) : color;
    if (c.length === 3) {
      c = c.split('').map(char => char + char).join('');
    }
    if (c.length !== 6) {
      Object(_console__WEBPACK_IMPORTED_MODULE_0__[/* consoleWarn */ "c"])(`'${color}' is not a valid rgb color`);
    }
    rgb = parseInt(c, 16);
  } else {
    throw new TypeError(`Colors can only be numbers or strings, recieved ${color == null ? color : color.constructor.name} instead`);
  }
  if (rgb < 0) {
    Object(_console__WEBPACK_IMPORTED_MODULE_0__[/* consoleWarn */ "c"])(`Colors cannot be negative: '${color}'`);
    rgb = 0;
  } else if (rgb > 0xffffff || isNaN(rgb)) {
    Object(_console__WEBPACK_IMPORTED_MODULE_0__[/* consoleWarn */ "c"])(`'${color}' is not a valid rgb color`);
    rgb = 0xffffff;
  }
  return rgb;
}
function classToHex(color, colors, currentTheme) {
  const [colorName, colorModifier] = color.toString().trim().replace('-', '').split(' ', 2);
  let hexColor = '';
  if (colorName && colorName in colors) {
    if (colorModifier && colorModifier in colors[colorName]) {
      hexColor = colors[colorName][colorModifier];
    } else if ('base' in colors[colorName]) {
      hexColor = colors[colorName].base;
    }
  } else if (colorName && colorName in currentTheme) {
    hexColor = currentTheme[colorName];
  }
  return hexColor;
}
function intToHex(color) {
  let hexColor = color.toString(16);
  if (hexColor.length < 6) hexColor = '0'.repeat(6 - hexColor.length) + hexColor;
  return '#' + hexColor;
}
function colorToHex(color) {
  return intToHex(colorToInt(color));
}
/**
 * Converts HSVA to RGBA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param color HSVA color as an array [0-360, 0-1, 0-1, 0-1]
 */

function HSVAtoRGBA(hsva) {
  const {
    h,
    s,
    v,
    a
  } = hsva;
  const f = n => {
    const k = (n + h / 60) % 6;
    return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  };
  const rgb = [f(5), f(3), f(1)].map(v => Math.round(v * 255));
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
    a
  };
}
/**
 * Converts RGBA to HSVA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param color RGBA color as an array [0-255, 0-255, 0-255, 0-1]
 */

function RGBAtoHSVA(rgba) {
  if (!rgba) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  const r = rgba.r / 255;
  const g = rgba.g / 255;
  const b = rgba.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  if (max !== min) {
    if (max === r) {
      h = 60 * (0 + (g - b) / (max - min));
    } else if (max === g) {
      h = 60 * (2 + (b - r) / (max - min));
    } else if (max === b) {
      h = 60 * (4 + (r - g) / (max - min));
    }
  }
  if (h < 0) h = h + 360;
  const s = max === 0 ? 0 : (max - min) / max;
  const hsv = [h, s, max];
  return {
    h: hsv[0],
    s: hsv[1],
    v: hsv[2],
    a: rgba.a
  };
}
function HSVAtoHSLA(hsva) {
  const {
    h,
    s,
    v,
    a
  } = hsva;
  const l = v - v * s / 2;
  const sprime = l === 1 || l === 0 ? 0 : (v - l) / Math.min(l, 1 - l);
  return {
    h,
    s: sprime,
    l,
    a
  };
}
function HSLAtoHSVA(hsl) {
  const {
    h,
    s,
    l,
    a
  } = hsl;
  const v = l + s * Math.min(l, 1 - l);
  const sprime = v === 0 ? 0 : 2 - 2 * l / v;
  return {
    h,
    s: sprime,
    v,
    a
  };
}
function RGBAtoCSS(rgba) {
  return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
}
function RGBtoCSS(rgba) {
  return RGBAtoCSS({
    ...rgba,
    a: 1
  });
}
function RGBAtoHex(rgba) {
  const toHex = v => {
    const h = Math.round(v).toString(16);
    return ('00'.substr(0, 2 - h.length) + h).toUpperCase();
  };
  return `#${[toHex(rgba.r), toHex(rgba.g), toHex(rgba.b), toHex(Math.round(rgba.a * 255))].join('')}`;
}
function HexToRGBA(hex) {
  const rgba = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* chunk */ "b"])(hex.slice(1), 2).map(c => parseInt(c, 16));
  return {
    r: rgba[0],
    g: rgba[1],
    b: rgba[2],
    a: Math.round(rgba[3] / 255 * 100) / 100
  };
}
function HexToHSVA(hex) {
  const rgb = HexToRGBA(hex);
  return RGBAtoHSVA(rgb);
}
function HSVAtoHex(hsva) {
  return RGBAtoHex(HSVAtoRGBA(hsva));
}
function parseHex(hex) {
  if (hex.startsWith('#')) {
    hex = hex.slice(1);
  }
  hex = hex.replace(/([^0-9a-f])/gi, 'F');
  if (hex.length === 3 || hex.length === 4) {
    hex = hex.split('').map(x => x + x).join('');
  }
  if (hex.length === 6) {
    hex = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* padEnd */ "s"])(hex, 8, 'F');
  } else {
    hex = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* padEnd */ "s"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* padEnd */ "s"])(hex, 6), 8, 'F');
  }
  return `#${hex}`.toUpperCase().substr(0, 9);
}
function parseGradient(gradient, colors, currentTheme) {
  return gradient.replace(/([a-z]+(\s[a-z]+-[1-5])?)(?=$|,)/gi, x => {
    return classToHex(x, colors, currentTheme) || x;
  }).replace(/(rgba\()#[0-9a-f]+(?=,)/gi, x => {
    return 'rgba(' + Object.values(HexToRGBA(parseHex(x.replace(/rgba\(/, '')))).slice(0, 3).join(',');
  });
}
function RGBtoInt(rgba) {
  return (rgba.r << 16) + (rgba.g << 8) + rgba.b;
}
/**
 * Returns the contrast ratio (1-21) between two colors.
 *
 * @param c1 First color
 * @param c2 Second color
 */

function contrastRatio(c1, c2) {
  const [, y1] = Object(_color_transformSRGB__WEBPACK_IMPORTED_MODULE_2__[/* toXYZ */ "b"])(RGBtoInt(c1));
  const [, y2] = Object(_color_transformSRGB__WEBPACK_IMPORTED_MODULE_2__[/* toXYZ */ "b"])(RGBtoInt(c2));
  return (Math.max(y1, y2) + 0.05) / (Math.min(y1, y2) + 0.05);
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fromXYZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toXYZ; });
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
 // For converting XYZ to sRGB

const srgbForwardMatrix = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.2040, 1.0570]]; // Forward gamma adjust

const srgbForwardTransform = C => C <= 0.0031308 ? C * 12.92 : 1.055 * C ** (1 / 2.4) - 0.055; // For converting sRGB to XYZ

const srgbReverseMatrix = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]]; // Reverse gamma adjust

const srgbReverseTransform = C => C <= 0.04045 ? C / 12.92 : ((C + 0.055) / 1.055) ** 2.4;
function fromXYZ(xyz) {
  const rgb = Array(3);
  const transform = srgbForwardTransform;
  const matrix = srgbForwardMatrix; // Matrix transform, then gamma adjustment

  for (let i = 0; i < 3; ++i) {
    rgb[i] = Math.round(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* clamp */ "c"])(transform(matrix[i][0] * xyz[0] + matrix[i][1] * xyz[1] + matrix[i][2] * xyz[2])) * 255);
  } // Rescale back to [0, 255]

  return (rgb[0] << 16) + (rgb[1] << 8) + (rgb[2] << 0);
}
function toXYZ(rgb) {
  const xyz = [0, 0, 0];
  const transform = srgbReverseTransform;
  const matrix = srgbReverseMatrix; // Rescale from [0, 255] to [0, 1] then adjust sRGB gamma to linear RGB

  const r = transform((rgb >> 16 & 0xff) / 255);
  const g = transform((rgb >> 8 & 0xff) / 255);
  const b = transform((rgb >> 0 & 0xff) / 255); // Matrix color space transform

  for (let i = 0; i < 3; ++i) {
    xyz[i] = matrix[i][0] * r + matrix[i][1] * g + matrix[i][2] * b;
  }
  return xyz;
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ framework_Vuetify; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/install.js


function install(Vue, args = {}) {
  if (install.installed) return;
  install.installed = true;
  if (external_vue_default.a !== Vue) {
    Object(console["b" /* consoleError */])(`Multiple instances of Vue detected
See https://github.com/vuetifyjs/vuetify/issues/4068

If you're seeing "$attrs is readonly", it's caused by this`);
  }
  const components = args.components || {};
  const directives = args.directives || {};
  for (const name in directives) {
    const directive = directives[name];
    Vue.directive(name, directive);
  }
  (function registerComponents(components) {
    if (components) {
      for (const key in components) {
        const component = components[key];
        if (component && !registerComponents(component.$_vuetify_subcomponents)) {
          Vue.component(key, component);
        }
      }
      return true;
    }
    return false;
  })(components); // Used to avoid multiple mixins being setup
  // when in dev mode and hot module reload
  // https://github.com/vuejs/vue/issues/5089#issuecomment-284260111

  if (Vue.$_vuetify_installed) return;
  Vue.$_vuetify_installed = true;
  Vue.mixin({
    beforeCreate() {
      const options = this.$options;
      if (options.vuetify) {
        options.vuetify.init(this, this.$ssrContext);
        this.$vuetify = Vue.observable(options.vuetify.framework);
      } else {
        this.$vuetify = options.parent && options.parent.$vuetify || this;
      }
    },
    beforeMount() {
      // @ts-ignore
      if (this.$options.vuetify && this.$el && this.$el.hasAttribute('data-server-rendered')) {
        // @ts-ignore
        this.$vuetify.isHydrating = true; // @ts-ignore

        this.$vuetify.breakpoint.update(true);
      }
    },
    mounted() {
      // @ts-ignore
      if (this.$options.vuetify && this.$vuetify.isHydrating) {
        // @ts-ignore
        this.$vuetify.isHydrating = false; // @ts-ignore

        this.$vuetify.breakpoint.update();
      }
    }
  });
}
// EXTERNAL MODULE: ./node_modules/vuetify/src/styles/main.sass
var main = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/locale/en.js
/* harmony default export */ var en = ({
  badge: 'Badge',
  close: 'Close',
  dataIterator: {
    noResultsText: 'No matching records found',
    loadingText: 'Loading items...'
  },
  dataTable: {
    itemsPerPageText: 'Rows per page:',
    ariaLabel: {
      sortDescending: 'Sorted descending.',
      sortAscending: 'Sorted ascending.',
      sortNone: 'Not sorted.',
      activateNone: 'Activate to remove sorting.',
      activateDescending: 'Activate to sort descending.',
      activateAscending: 'Activate to sort ascending.'
    },
    sortBy: 'Sort by'
  },
  dataFooter: {
    itemsPerPageText: 'Items per page:',
    itemsPerPageAll: 'All',
    nextPage: 'Next page',
    prevPage: 'Previous page',
    firstPage: 'First page',
    lastPage: 'Last page',
    pageText: '{0}-{1} of {2}'
  },
  datePicker: {
    itemsSelected: '{0} selected',
    nextMonthAriaLabel: 'Next month',
    nextYearAriaLabel: 'Next year',
    prevMonthAriaLabel: 'Previous month',
    prevYearAriaLabel: 'Previous year'
  },
  noDataText: 'No data available',
  carousel: {
    prev: 'Previous visual',
    next: 'Next visual',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} more'
  },
  fileInput: {
    counter: '{0} files',
    counterSize: '{0} files ({1} in total)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Pagination Navigation',
      next: 'Next page',
      previous: 'Previous page',
      page: 'Goto Page {0}',
      currentPage: 'Current Page, Page {0}'
    }
  },
  rating: {
    ariaLabel: {
      icon: 'Rating {0} of {1}'
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vuetify/lib/presets/default/index.js
// Styles
 // Locale


const default_preset = {
  breakpoint: {
    // TODO: update to MD2 spec in v3 - 1280
    mobileBreakpoint: 1264,
    scrollBarWidth: 16,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920
    }
  },
  icons: {
    // TODO: remove v3
    iconfont: 'mdi',
    values: {}
  },
  lang: {
    current: 'en',
    locales: {
      en: en
    },
    // Default translator exists in lang service
    t: undefined
  },
  rtl: false,
  theme: {
    dark: false,
    default: 'light',
    disable: false,
    options: {
      cspNonce: undefined,
      customProperties: undefined,
      minifyTheme: undefined,
      themeCache: undefined,
      variations: true
    },
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00'
      },
      dark: {
        primary: '#2196F3',
        secondary: '#424242',
        accent: '#FF4081',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00'
      }
    }
  }
};
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/services/service/index.js
var service = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/presets/index.js
// Preset
 // Utilities




class presets_Presets extends service["a" /* Service */] {
  constructor(parentPreset, parent) {
    super(); // The default preset

    const defaultPreset = Object(helpers["r" /* mergeDeep */])({}, default_preset); // The user provided preset

    const {
      userPreset
    } = parent; // The user provided global preset

    const {
      preset: globalPreset = {},
      ...preset
    } = userPreset;
    if (globalPreset.preset != null) {
      Object(console["c" /* consoleWarn */])('Global presets do not support the **preset** option, it can be safely omitted');
    }
    parent.preset = Object(helpers["r" /* mergeDeep */])(Object(helpers["r" /* mergeDeep */])(defaultPreset, globalPreset), preset);
  }
}
presets_Presets.property = 'presets';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/application/index.js
// Extensions

class application_Application extends service["a" /* Service */] {
  constructor() {
    super(...arguments);
    this.bar = 0;
    this.top = 0;
    this.left = 0;
    this.insetFooter = 0;
    this.right = 0;
    this.bottom = 0;
    this.footer = 0;
    this.application = {
      bar: {},
      top: {},
      left: {},
      insetFooter: {},
      right: {},
      bottom: {},
      footer: {}
    };
  }
  register(uid, location, size) {
    this.application[location][uid] = size;
    this.update(location);
  }
  unregister(uid, location) {
    if (this.application[location][uid] == null) return;
    delete this.application[location][uid];
    this.update(location);
  }
  update(location) {
    this[location] = Object.values(this.application[location]).reduce((acc, cur) => acc + cur, 0);
  }
}
application_Application.property = 'application';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/breakpoint/index.js
// Extensions

class breakpoint_Breakpoint extends service["a" /* Service */] {
  constructor(preset) {
    super(); // Public

    this.xs = false;
    this.sm = false;
    this.md = false;
    this.lg = false;
    this.xl = false;
    this.xsOnly = false;
    this.smOnly = false;
    this.smAndDown = false;
    this.smAndUp = false;
    this.mdOnly = false;
    this.mdAndDown = false;
    this.mdAndUp = false;
    this.lgOnly = false;
    this.lgAndDown = false;
    this.lgAndUp = false;
    this.xlOnly = false; // Value is xs to match v2.x functionality

    this.name = 'xs';
    this.height = 0;
    this.width = 0; // TODO: Add functionality to detect this dynamically in v3
    // Value is true to match v2.x functionality

    this.mobile = true;
    this.resizeTimeout = 0;
    const {
      mobileBreakpoint,
      scrollBarWidth,
      thresholds
    } = preset[breakpoint_Breakpoint.property];
    this.mobileBreakpoint = mobileBreakpoint;
    this.scrollBarWidth = scrollBarWidth;
    this.thresholds = thresholds;
  }
  init() {
    this.update();
    /* istanbul ignore if */

    if (typeof window === 'undefined') return;
    window.addEventListener('resize', this.onResize.bind(this), {
      passive: true
    });
  }
  /* eslint-disable-next-line max-statements */

  update(ssr = false) {
    const height = ssr ? 0 : this.getClientHeight();
    const width = ssr ? 0 : this.getClientWidth();
    const xs = width < this.thresholds.xs;
    const sm = width < this.thresholds.sm && !xs;
    const md = width < this.thresholds.md - this.scrollBarWidth && !(sm || xs);
    const lg = width < this.thresholds.lg - this.scrollBarWidth && !(md || sm || xs);
    const xl = width >= this.thresholds.lg - this.scrollBarWidth;
    this.height = height;
    this.width = width;
    this.xs = xs;
    this.sm = sm;
    this.md = md;
    this.lg = lg;
    this.xl = xl;
    this.xsOnly = xs;
    this.smOnly = sm;
    this.smAndDown = (xs || sm) && !(md || lg || xl);
    this.smAndUp = !xs && (sm || md || lg || xl);
    this.mdOnly = md;
    this.mdAndDown = (xs || sm || md) && !(lg || xl);
    this.mdAndUp = !(xs || sm) && (md || lg || xl);
    this.lgOnly = lg;
    this.lgAndDown = (xs || sm || md || lg) && !xl;
    this.lgAndUp = !(xs || sm || md) && (lg || xl);
    this.xlOnly = xl;
    switch (true) {
      case xs:
        this.name = 'xs';
        break;
      case sm:
        this.name = 'sm';
        break;
      case md:
        this.name = 'md';
        break;
      case lg:
        this.name = 'lg';
        break;
      default:
        this.name = 'xl';
        break;
    }
    if (typeof this.mobileBreakpoint === 'number') {
      this.mobile = width < parseInt(this.mobileBreakpoint, 10);
      return;
    }
    const breakpoints = {
      xs: 0,
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4
    };
    const current = breakpoints[this.name];
    const max = breakpoints[this.mobileBreakpoint];
    this.mobile = current <= max;
  }
  onResize() {
    clearTimeout(this.resizeTimeout); // Added debounce to match what
    // v-resize used to do but was
    // removed due to a memory leak
    // https://github.com/vuetifyjs/vuetify/pull/2997

    this.resizeTimeout = window.setTimeout(this.update.bind(this), 200);
  } // Cross-browser support as described in:
  // https://stackoverflow.com/questions/1248081

  getClientWidth() {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return 0; // SSR

    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
  getClientHeight() {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return 0; // SSR

    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }
}
breakpoint_Breakpoint.property = 'breakpoint';
// EXTERNAL MODULE: ./node_modules/vuetify/lib/services/goto/index.js + 2 modules
var services_goto = __webpack_require__(82);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/mdi-svg.js
const icons = {
  complete: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',
  cancel: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  close: 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
  delete: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  clear: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  success: 'M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z',
  info: 'M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
  warning: 'M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
  error: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  prev: 'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z',
  next: 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z',
  checkboxOn: 'M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z',
  checkboxOff: 'M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z',
  checkboxIndeterminate: 'M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z',
  delimiter: 'M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z',
  sort: 'M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z',
  expand: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
  menu: 'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z',
  subgroup: 'M7,10L12,15L17,10H7Z',
  dropdown: 'M7,10L12,15L17,10H7Z',
  radioOn: 'M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z',
  radioOff: 'M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z',
  edit: 'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z',
  ratingEmpty: 'M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z',
  ratingFull: 'M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z',
  ratingHalf: 'M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z',
  loading: 'M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12',
  first: 'M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z',
  last: 'M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z',
  unfold: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z',
  file: 'M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z',
  plus: 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z',
  minus: 'M19,13H5V11H19V13Z'
};
/* harmony default export */ var mdi_svg = (icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/md.js
const md_icons = {
  complete: 'check',
  cancel: 'cancel',
  close: 'close',
  delete: 'cancel',
  clear: 'clear',
  success: 'check_circle',
  info: 'info',
  warning: 'priority_high',
  error: 'warning',
  prev: 'chevron_left',
  next: 'chevron_right',
  checkboxOn: 'check_box',
  checkboxOff: 'check_box_outline_blank',
  checkboxIndeterminate: 'indeterminate_check_box',
  delimiter: 'fiber_manual_record',
  sort: 'arrow_upward',
  expand: 'keyboard_arrow_down',
  menu: 'menu',
  subgroup: 'arrow_drop_down',
  dropdown: 'arrow_drop_down',
  radioOn: 'radio_button_checked',
  radioOff: 'radio_button_unchecked',
  edit: 'edit',
  ratingEmpty: 'star_border',
  ratingFull: 'star',
  ratingHalf: 'star_half',
  loading: 'cached',
  first: 'first_page',
  last: 'last_page',
  unfold: 'unfold_more',
  file: 'attach_file',
  plus: 'add',
  minus: 'remove'
};
/* harmony default export */ var md = (md_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/mdi.js
const mdi_icons = {
  complete: 'mdi-check',
  cancel: 'mdi-close-circle',
  close: 'mdi-close',
  delete: 'mdi-close-circle',
  clear: 'mdi-close',
  success: 'mdi-check-circle',
  info: 'mdi-information',
  warning: 'mdi-exclamation',
  error: 'mdi-alert',
  prev: 'mdi-chevron-left',
  next: 'mdi-chevron-right',
  checkboxOn: 'mdi-checkbox-marked',
  checkboxOff: 'mdi-checkbox-blank-outline',
  checkboxIndeterminate: 'mdi-minus-box',
  delimiter: 'mdi-circle',
  sort: 'mdi-arrow-up',
  expand: 'mdi-chevron-down',
  menu: 'mdi-menu',
  subgroup: 'mdi-menu-down',
  dropdown: 'mdi-menu-down',
  radioOn: 'mdi-radiobox-marked',
  radioOff: 'mdi-radiobox-blank',
  edit: 'mdi-pencil',
  ratingEmpty: 'mdi-star-outline',
  ratingFull: 'mdi-star',
  ratingHalf: 'mdi-star-half-full',
  loading: 'mdi-cached',
  first: 'mdi-page-first',
  last: 'mdi-page-last',
  unfold: 'mdi-unfold-more-horizontal',
  file: 'mdi-paperclip',
  plus: 'mdi-plus',
  minus: 'mdi-minus'
};
/* harmony default export */ var mdi = (mdi_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/fa.js
const fa_icons = {
  complete: 'fas fa-check',
  cancel: 'fas fa-times-circle',
  close: 'fas fa-times',
  delete: 'fas fa-times-circle',
  clear: 'fas fa-times-circle',
  success: 'fas fa-check-circle',
  info: 'fas fa-info-circle',
  warning: 'fas fa-exclamation',
  error: 'fas fa-exclamation-triangle',
  prev: 'fas fa-chevron-left',
  next: 'fas fa-chevron-right',
  checkboxOn: 'fas fa-check-square',
  checkboxOff: 'far fa-square',
  checkboxIndeterminate: 'fas fa-minus-square',
  delimiter: 'fas fa-circle',
  sort: 'fas fa-sort-up',
  expand: 'fas fa-chevron-down',
  menu: 'fas fa-bars',
  subgroup: 'fas fa-caret-down',
  dropdown: 'fas fa-caret-down',
  radioOn: 'far fa-dot-circle',
  radioOff: 'far fa-circle',
  edit: 'fas fa-edit',
  ratingEmpty: 'far fa-star',
  ratingFull: 'fas fa-star',
  ratingHalf: 'fas fa-star-half',
  loading: 'fas fa-sync',
  first: 'fas fa-step-backward',
  last: 'fas fa-step-forward',
  unfold: 'fas fa-arrows-alt-v',
  file: 'fas fa-paperclip',
  plus: 'fas fa-plus',
  minus: 'fas fa-minus'
};
/* harmony default export */ var fa = (fa_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/fa4.js
const fa4_icons = {
  complete: 'fa fa-check',
  cancel: 'fa fa-times-circle',
  close: 'fa fa-times',
  delete: 'fa fa-times-circle',
  clear: 'fa fa-times-circle',
  success: 'fa fa-check-circle',
  info: 'fa fa-info-circle',
  warning: 'fa fa-exclamation',
  error: 'fa fa-exclamation-triangle',
  prev: 'fa fa-chevron-left',
  next: 'fa fa-chevron-right',
  checkboxOn: 'fa fa-check-square',
  checkboxOff: 'fa fa-square-o',
  checkboxIndeterminate: 'fa fa-minus-square',
  delimiter: 'fa fa-circle',
  sort: 'fa fa-sort-up',
  expand: 'fa fa-chevron-down',
  menu: 'fa fa-bars',
  subgroup: 'fa fa-caret-down',
  dropdown: 'fa fa-caret-down',
  radioOn: 'fa fa-dot-circle-o',
  radioOff: 'fa fa-circle-o',
  edit: 'fa fa-pencil',
  ratingEmpty: 'fa fa-star-o',
  ratingFull: 'fa fa-star',
  ratingHalf: 'fa fa-star-half-o',
  loading: 'fa fa-refresh',
  first: 'fa fa-step-backward',
  last: 'fa fa-step-forward',
  unfold: 'fa fa-angle-double-down',
  file: 'fa fa-paperclip',
  plus: 'fa fa-plus',
  minus: 'fa fa-minus'
};
/* harmony default export */ var fa4 = (fa4_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/fa-svg.js

function convertToComponentDeclarations(component, iconSet) {
  const result = {};
  for (const key in iconSet) {
    result[key] = {
      component,
      props: {
        icon: iconSet[key].split(' fa-')
      }
    };
  }
  return result;
}
/* harmony default export */ var fa_svg = (convertToComponentDeclarations('font-awesome-icon', fa));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/index.js






/* harmony default export */ var presets = (Object.freeze({
  mdiSvg: mdi_svg,
  md: md,
  mdi: mdi,
  fa: fa,
  fa4: fa4,
  faSvg: fa_svg
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/index.js
// Extensions
 // Utilities

 // Presets


class icons_Icons extends service["a" /* Service */] {
  constructor(preset) {
    super();
    const {
      iconfont,
      values,
      component
    } = preset[icons_Icons.property];
    this.component = component;
    this.iconfont = iconfont;
    this.values = Object(helpers["r" /* mergeDeep */])(presets[iconfont], values);
  }
}
icons_Icons.property = 'icons';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/lang/index.js
// Extensions
 // Utilities



const LANG_PREFIX = '$vuetify.';
const fallback = Symbol('Lang fallback');
function getTranslation(locale, key, usingDefault = false, defaultLocale) {
  const shortKey = key.replace(LANG_PREFIX, '');
  let translation = Object(helpers["j" /* getObjectValueByPath */])(locale, shortKey, fallback);
  if (translation === fallback) {
    if (usingDefault) {
      Object(console["b" /* consoleError */])(`Translation key "${shortKey}" not found in fallback`);
      translation = key;
    } else {
      Object(console["c" /* consoleWarn */])(`Translation key "${shortKey}" not found, falling back to default`);
      translation = getTranslation(defaultLocale, key, true, defaultLocale);
    }
  }
  return translation;
}
class lang_Lang extends service["a" /* Service */] {
  constructor(preset) {
    super();
    this.defaultLocale = 'en';
    const {
      current,
      locales,
      t
    } = preset[lang_Lang.property];
    this.current = current;
    this.locales = locales;
    this.translator = t || this.defaultTranslator;
  }
  currentLocale(key) {
    const translation = this.locales[this.current];
    const defaultLocale = this.locales[this.defaultLocale];
    return getTranslation(translation, key, false, defaultLocale);
  }
  t(key, ...params) {
    if (!key.startsWith(LANG_PREFIX)) return this.replace(key, params);
    return this.translator(key, ...params);
  }
  defaultTranslator(key, ...params) {
    return this.replace(this.currentLocale(key), params);
  }
  replace(str, params) {
    return str.replace(/\{(\d+)\}/g, (match, index) => {
      /* istanbul ignore next */
      return String(params[+index]);
    });
  }
}
lang_Lang.property = 'lang';
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/colorUtils.js
var colorUtils = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/color/transformSRGB.js
var transformSRGB = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/util/color/transformCIELAB.js
const delta = 0.20689655172413793; // 6÷29

const cielabForwardTransform = t => t > delta ** 3 ? Math.cbrt(t) : t / (3 * delta ** 2) + 4 / 29;
const cielabReverseTransform = t => t > delta ? t ** 3 : 3 * delta ** 2 * (t - 4 / 29);
function fromXYZ(xyz) {
  const transform = cielabForwardTransform;
  const transformedY = transform(xyz[1]);
  return [116 * transformedY - 16, 500 * (transform(xyz[0] / 0.95047) - transformedY), 200 * (transformedY - transform(xyz[2] / 1.08883))];
}
function toXYZ(lab) {
  const transform = cielabReverseTransform;
  const Ln = (lab[0] + 16) / 116;
  return [transform(Ln + lab[1] / 500) * 0.95047, transform(Ln), transform(Ln - lab[2] / 200) * 1.08883];
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/theme/utils.js




function parse(theme, isItem = false, variations = true) {
  const {
    anchor,
    ...variant
  } = theme;
  const colors = Object.keys(variant);
  const parsedTheme = {};
  for (let i = 0; i < colors.length; ++i) {
    const name = colors[i];
    const value = theme[name];
    if (value == null) continue;
    if (!variations) {
      parsedTheme[name] = {
        base: Object(colorUtils["c" /* intToHex */])(Object(colorUtils["b" /* colorToInt */])(value))
      };
    } else if (isItem) {
      /* istanbul ignore else */
      if (name === 'base' || name.startsWith('lighten') || name.startsWith('darken')) {
        parsedTheme[name] = Object(colorUtils["a" /* colorToHex */])(value);
      }
    } else if (typeof value === 'object') {
      parsedTheme[name] = parse(value, true, variations);
    } else {
      parsedTheme[name] = genVariations(name, Object(colorUtils["b" /* colorToInt */])(value));
    }
  }
  if (!isItem) {
    parsedTheme.anchor = anchor || parsedTheme.base || parsedTheme.primary.base;
  }
  return parsedTheme;
}
/**
 * Generate the CSS for a base color (.primary)
 */

const genBaseColor = (name, value) => {
  return `
.v-application .${name} {
  background-color: ${value} !important;
  border-color: ${value} !important;
}
.v-application .${name}--text {
  color: ${value} !important;
  caret-color: ${value} !important;
}`;
};
/**
 * Generate the CSS for a variant color (.primary.darken-2)
 */

const genVariantColor = (name, variant, value) => {
  const [type, n] = variant.split(/(\d)/, 2);
  return `
.v-application .${name}.${type}-${n} {
  background-color: ${value} !important;
  border-color: ${value} !important;
}
.v-application .${name}--text.text--${type}-${n} {
  color: ${value} !important;
  caret-color: ${value} !important;
}`;
};
const genColorVariableName = (name, variant = 'base') => `--v-${name}-${variant}`;
const genColorVariable = (name, variant = 'base') => `var(${genColorVariableName(name, variant)})`;
function genStyles(theme, cssVar = false) {
  const {
    anchor,
    ...variant
  } = theme;
  const colors = Object.keys(variant);
  if (!colors.length) return '';
  let variablesCss = '';
  let css = '';
  const aColor = cssVar ? genColorVariable('anchor') : anchor;
  css += `.v-application a { color: ${aColor}; }`;
  cssVar && (variablesCss += `  ${genColorVariableName('anchor')}: ${anchor};\n`);
  for (let i = 0; i < colors.length; ++i) {
    const name = colors[i];
    const value = theme[name];
    css += genBaseColor(name, cssVar ? genColorVariable(name) : value.base);
    cssVar && (variablesCss += `  ${genColorVariableName(name)}: ${value.base};\n`);
    const variants = Object(helpers["q" /* keys */])(value);
    for (let i = 0; i < variants.length; ++i) {
      const variant = variants[i];
      const variantValue = value[variant];
      if (variant === 'base') continue;
      css += genVariantColor(name, variant, cssVar ? genColorVariable(name, variant) : variantValue);
      cssVar && (variablesCss += `  ${genColorVariableName(name, variant)}: ${variantValue};\n`);
    }
  }
  if (cssVar) {
    variablesCss = `:root {\n${variablesCss}}\n\n`;
  }
  return variablesCss + css;
}
function genVariations(name, value) {
  const values = {
    base: Object(colorUtils["c" /* intToHex */])(value)
  };
  for (let i = 5; i > 0; --i) {
    values[`lighten${i}`] = Object(colorUtils["c" /* intToHex */])(lighten(value, i));
  }
  for (let i = 1; i <= 4; ++i) {
    values[`darken${i}`] = Object(colorUtils["c" /* intToHex */])(darken(value, i));
  }
  return values;
}
function lighten(value, amount) {
  const lab = fromXYZ(transformSRGB["b" /* toXYZ */](value));
  lab[0] = lab[0] + amount * 10;
  return transformSRGB["a" /* fromXYZ */](toXYZ(lab));
}
function darken(value, amount) {
  const lab = fromXYZ(transformSRGB["b" /* toXYZ */](value));
  lab[0] = lab[0] - amount * 10;
  return transformSRGB["a" /* fromXYZ */](toXYZ(lab));
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/theme/index.js
/* eslint-disable no-multi-spaces */
// Extensions
 // Utilities


 // Types


class theme_Theme extends service["a" /* Service */] {
  constructor(preset) {
    super();
    this.disabled = false;
    this.isDark = null;
    this.unwatch = null;
    this.vueMeta = null;
    const {
      dark,
      disable,
      options,
      themes
    } = preset[theme_Theme.property];
    this.dark = Boolean(dark);
    this.defaults = this.themes = themes;
    this.options = options;
    if (disable) {
      this.disabled = true;
      return;
    }
    this.themes = {
      dark: this.fillVariant(themes.dark, true),
      light: this.fillVariant(themes.light, false)
    };
  } // When setting css, check for element and apply new values

  /* eslint-disable-next-line accessor-pairs */

  set css(val) {
    if (this.vueMeta) {
      if (this.isVueMeta23) {
        this.applyVueMeta23();
      }
      return;
    }
    this.checkOrCreateStyleElement() && (this.styleEl.innerHTML = val);
  }
  set dark(val) {
    const oldDark = this.isDark;
    this.isDark = val; // Only apply theme after dark
    // has already been set before

    oldDark != null && this.applyTheme();
  }
  get dark() {
    return Boolean(this.isDark);
  } // Apply current theme default
  // only called on client side

  applyTheme() {
    if (this.disabled) return this.clearCss();
    this.css = this.generatedStyles;
  }
  clearCss() {
    this.css = '';
  } // Initialize theme for SSR and SPA
  // Attach to ssrContext head or
  // apply new theme to document

  init(root, ssrContext) {
    if (this.disabled) return;
    /* istanbul ignore else */

    if (root.$meta) {
      this.initVueMeta(root);
    } else if (ssrContext) {
      this.initSSR(ssrContext);
    }
    this.initTheme(root);
  } // Allows for you to set target theme

  setTheme(theme, value) {
    this.themes[theme] = Object.assign(this.themes[theme], value);
    this.applyTheme();
  } // Reset theme defaults

  resetThemes() {
    this.themes.light = Object.assign({}, this.defaults.light);
    this.themes.dark = Object.assign({}, this.defaults.dark);
    this.applyTheme();
  } // Check for existence of style element

  checkOrCreateStyleElement() {
    this.styleEl = document.getElementById('vuetify-theme-stylesheet');
    /* istanbul ignore next */

    if (this.styleEl) return true;
    this.genStyleElement(); // If doesn't have it, create it

    return Boolean(this.styleEl);
  }
  fillVariant(theme = {}, dark) {
    const defaultTheme = this.themes[dark ? 'dark' : 'light'];
    return Object.assign({}, defaultTheme, theme);
  } // Generate the style element
  // if applicable

  genStyleElement() {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return;
    /* istanbul ignore next */

    this.styleEl = document.createElement('style');
    this.styleEl.type = 'text/css';
    this.styleEl.id = 'vuetify-theme-stylesheet';
    if (this.options.cspNonce) {
      this.styleEl.setAttribute('nonce', this.options.cspNonce);
    }
    document.head.appendChild(this.styleEl);
  }
  initVueMeta(root) {
    this.vueMeta = root.$meta();
    if (this.isVueMeta23) {
      // vue-meta needs to apply after mounted()
      root.$nextTick(() => {
        this.applyVueMeta23();
      });
      return;
    }
    const metaKeyName = typeof this.vueMeta.getOptions === 'function' ? this.vueMeta.getOptions().keyName : 'metaInfo';
    const metaInfo = root.$options[metaKeyName] || {};
    root.$options[metaKeyName] = () => {
      metaInfo.style = metaInfo.style || [];
      const vuetifyStylesheet = metaInfo.style.find(s => s.id === 'vuetify-theme-stylesheet');
      if (!vuetifyStylesheet) {
        metaInfo.style.push({
          cssText: this.generatedStyles,
          type: 'text/css',
          id: 'vuetify-theme-stylesheet',
          nonce: (this.options || {}).cspNonce
        });
      } else {
        vuetifyStylesheet.cssText = this.generatedStyles;
      }
      return metaInfo;
    };
  }
  applyVueMeta23() {
    const {
      set
    } = this.vueMeta.addApp('vuetify');
    set({
      style: [{
        cssText: this.generatedStyles,
        type: 'text/css',
        id: 'vuetify-theme-stylesheet',
        nonce: this.options.cspNonce
      }]
    });
  }
  initSSR(ssrContext) {
    // SSR
    const nonce = this.options.cspNonce ? ` nonce="${this.options.cspNonce}"` : '';
    ssrContext.head = ssrContext.head || '';
    ssrContext.head += `<style type="text/css" id="vuetify-theme-stylesheet"${nonce}>${this.generatedStyles}</style>`;
  }
  initTheme(root) {
    // Only watch for reactivity on client side
    if (typeof document === 'undefined') return; // If we get here somehow, ensure
    // existing instance is removed

    if (this.unwatch) {
      this.unwatch();
      this.unwatch = null;
    } // TODO: Update to use RFC if merged
    // https://github.com/vuejs/rfcs/blob/advanced-reactivity-api/active-rfcs/0000-advanced-reactivity-api.md

    root.$once('hook:created', () => {
      const obs = external_vue_default.a.observable({
        themes: this.themes
      });
      this.unwatch = root.$watch(() => obs.themes, () => this.applyTheme(), {
        deep: true
      });
    });
    this.applyTheme();
  }
  get currentTheme() {
    const target = this.dark ? 'dark' : 'light';
    return this.themes[target];
  }
  get generatedStyles() {
    const theme = this.parsedTheme;
    /* istanbul ignore next */

    const options = this.options || {};
    let css;
    if (options.themeCache != null) {
      css = options.themeCache.get(theme);
      /* istanbul ignore if */

      if (css != null) return css;
    }
    css = genStyles(theme, options.customProperties);
    if (options.minifyTheme != null) {
      css = options.minifyTheme(css);
    }
    if (options.themeCache != null) {
      options.themeCache.set(theme, css);
    }
    return css;
  }
  get parsedTheme() {
    return parse(this.currentTheme || {}, undefined, Object(helpers["i" /* getNestedValue */])(this.options, ['variations'], true));
  } // Is using v2.3 of vue-meta
  // https://github.com/nuxt/vue-meta/releases/tag/v2.3.0

  get isVueMeta23() {
    return typeof this.vueMeta.addApp === 'function';
  }
}
theme_Theme.property = 'theme';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/framework.js
 // Services


class framework_Vuetify {
  constructor(userPreset = {}) {
    this.framework = {
      isHydrating: false
    };
    this.installed = [];
    this.preset = {};
    this.userPreset = {};
    this.userPreset = userPreset;
    this.use(presets_Presets);
    this.use(application_Application);
    this.use(breakpoint_Breakpoint);
    this.use(services_goto["a" /* Goto */]);
    this.use(icons_Icons);
    this.use(lang_Lang);
    this.use(theme_Theme);
  } // Called on the new vuetify instance
  // bootstrap in install beforeCreate
  // Exposes ssrContext if available

  init(root, ssrContext) {
    this.installed.forEach(property => {
      const service = this.framework[property];
      service.framework = this.framework;
      service.init(root, ssrContext);
    }); // rtl is not installed and
    // will never be called by
    // the init process

    this.framework.rtl = Boolean(this.preset.rtl);
  } // Instantiate a VuetifyService

  use(Service) {
    const property = Service.property;
    if (this.installed.includes(property)) return; // TODO maybe a specific type for arg 2?

    this.framework[property] = new Service(this.preset, this);
    this.installed.push(property);
  }
}
framework_Vuetify.install = install;
framework_Vuetify.installed = false;
framework_Vuetify.version = "2.6.13";
framework_Vuetify.config = {
  silent: false
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("requrl");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/menu.vue?vue&type=template&id=0e0a5680&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-navbar', {
    attrs: {
      "toggleable": "sm",
      "type": "dark",
      "variant": "dark"
    }
  }, [_c('b-navbar-brand', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/icons/logo.png",
      "width": "40px",
      "alt": ""
    }
  })]), _vm._v(" "), _c('b-navbar-toggle', {
    attrs: {
      "target": "nav-collapse"
    }
  }), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "nav-collapse",
      "variant": "dark",
      "is-nav": ""
    }
  }, [_c('b-navbar-nav', [_c('li', {
    staticClass: "nav-item"
  }, [_c('NuxtLink', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v(" Home ")])], 1), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('Nuxt-link', {
    attrs: {
      "to": "/instrumentales"
    }
  }, [_vm._v("\n          Instrumentales\n        ")])], 1)]), _vm._v(" "), _c('b-navbar-nav', {
    staticClass: "ml-auto"
  }, [_c('li', {
    staticClass: "nav-item"
  }, [_vm.login ? _c('nuxt-link', {
    attrs: {
      "to": "/perfil"
    }
  }, [_vm._v(" Cuenta ")]) : _vm._e()], 1), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_vm.login ? _c('button', {
    on: {
      "click": _vm.logout
    }
  }, [_vm._v("Salir")]) : _vm._e()]), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [!_vm.login ? _c('nuxt-link', {
    attrs: {
      "to": "/login"
    }
  }, [_vm._v(" Entrar ")]) : _vm._e()], 1), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [!_vm.login ? _c('nuxt-link', {
    attrs: {
      "to": "/register"
    }
  }, [_vm._v(" Registrarse ")]) : _vm._e()], 1)])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/menu.vue?vue&type=template&id=0e0a5680&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/menu.vue?vue&type=script&lang=js&
/* harmony default export */ var menuvue_type_script_lang_js_ = ({
  name: "Menu",
  data() {
    return {
      cssimg: {
        blank: true,
        width: 75,
        height: 75
      },
      login: false
    };
  },
  components: {},
  mounted() {
    console.log(this.$cookiz.get('usuario'));
    if (this.$cookiz.get('usuario') != null) {
      this.login = true;
    }
  },
  methods: {
    logout: function () {
      this.$cookiz.remove('usuario');
      this.login = false;
      this.$router.push("/login");
    }
  }
});
// CONCATENATED MODULE: ./components/menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_menuvue_type_script_lang_js_ = (menuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/menu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_menuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "790ebff4"
  
)

/* harmony default export */ var menu = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer.vue?vue&type=template&id=192d35b8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', {
    staticClass: "footer",
    attrs: {
      "fluid": ""
    }
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "sm": "3"
    }
  }), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9"
    }
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "sm": ""
    }
  }, [_c('h4', [_vm._v("Acerca De")]), _vm._v(" "), _c('p', [_vm._v("Cooking Beats")]), _vm._v(" "), _c('p', [_vm._v("Aviso Legal")]), _vm._v(" "), _c('p', [_vm._v("Formas de Pago")])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": ""
    }
  }, [_c('h4', [_vm._v("Ayuda")]), _vm._v(" "), _c('p', [_vm._v("Comprar")]), _vm._v(" "), _c('p', [_vm._v("Vender")]), _vm._v(" "), _c('p', [_vm._v("Problemas")])])], 1)], 1)], 1), _vm._v(" "), _c('hr')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footer.vue?vue&type=template&id=192d35b8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer.vue?vue&type=script&lang=js&
/* harmony default export */ var footervue_type_script_lang_js_ = ({
  name: "Footer",
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./components/footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_footervue_type_script_lang_js_ = (footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(58)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1d85f6f0"
  
)

/* harmony default export */ var footer = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?r(exports):undefined}(this,(function(e){"use strict";function r(e){return"string"==typeof e?e[0].toUpperCase()+e.substr(1):e}var n={accepted:function(e){return"من فضلك اقبل ال "+e.name},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" يجب أن يأتي بعد "+a[0]+".":r(n)+" يجب أن يكون تاريخ أحدث"},alpha:function(e){return r(e.name)+" يجب أن يحتوى على حروف أبجدية فقط."},alphanumeric:function(e){return r(e.name)+" يمكن أن يحتوي على حروف أبجدية أو أرقام فقط."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" يجب أن يكون قبل "+a[0]+".":r(n)+" يجب أن يكون تاريخ أقدم"},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" يجب أن يقع بين "+t[0]+" و "+t[1]+".":r(n)+" يجب ان يكون طوله بين "+t[0]+" و "+t[1]+" حرف."},confirm:function(e){var n=e.name;e.args;return r(n)+" غير متطابق."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" ليس على الصيغة الصحيحة, من فضلك استخدم هذه الصيغة "+a[0]:r(n)+" ليس على الصيغة الصحيحة."},default:function(e){e.name;return"هذه القيمة غير مناسبة."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” ليس عنوان بريد الكتروني.":"من فضلك أدخل عنوان بريد الكتروني مناسب."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” لا تنتهي بنهاية صحيحة.":"نهاية هذه القيمة ليست صحيحة."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” ليس "+n+" صحيح.":"هذه القيمة ليست "+n+" صحيح."},matches:function(e){return r(e.name)+" ليست قيمة مسموح بها."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"يمكنك فقط ان تختار "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" لا يمكن أن يتجاوز "+t[0]+".":r(n)+" لا يجب ان يزيد طوله عن "+t[0]+" حرف."},mime:function(e){var n=e.name,a=e.args;return r(n)+" يجب ان يكون من نوع "+(a[0]||"لا يسمح بأي نوع.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"يجب أن تختار على الأقل "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" يجب أن يكون أكبر من "+t[0]+".":r(n)+" يجب أن يكون طوله أكبر من "+t[0]+" حرف."},not:function(e){var r=e.name;return"“"+e.value+"” ليست قيمة مسموح بها ك"+r+"."},number:function(e){return r(e.name)+" يجب أن يكون رقم."},required:function(e){return r(e.name)+" ضروري."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” لا تبدأ بقيمة صحيحة.":"هذه القيمة لا تبدأ بقيمة صحيحة."},url:function(e){e.name;return"من فضلك أدخل رابط صحيح."}};var a={accepted:function(e){return"Si us plau accepta els "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" ha de ser després de "+a[0]+".":r(n)+" ha de ser una data posterior."},alpha:function(e){return r(e.name)+" només pot contenir lletres."},alphanumeric:function(e){return r(e.name)+" només pot contenir lletres i números."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" ha de ser abans de "+a[0]+".":r(n)+" ha de ser una data anterior"},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" ha d'estar entre "+t[0]+" i "+t[1]+".":r(n)+" ha de tenir entre "+t[0]+" i "+t[1]+" caràcters."},confirm:function(e){var n=e.name;e.args;return r(n)+" no coincideix."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" no és una data vàlida, si us plau usi el format "+a[0]:r(n)+" no és una data vàlida."},default:function(e){e.name;return"Aquest camp no és vàlid."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” no és un correu electrònic vàlid.":"Si us plau introdueixi un correu electrònic vàlid."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” no acaba en un valor vàlid.":"Aquest camp no acaba en un valor vàlid."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” no és un "+n+" permès.":"Això no és un "+n+" permès."},matches:function(e){return r(e.name)+" no és un valor permès."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Només pots seleccionar "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" ha de ser menor o igual que "+t[0]+".":r(n)+" ha de ser menor o igual que "+t[0]+" caràcters."},mime:function(e){var n=e.name,a=e.args;return r(n)+" ha de ser de tipus: "+(a[0]||"No es permet el format d'arxius.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Necessites almenys "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" ha de contenir almenys "+t[0]+".":r(n)+" ha de contenir almenys "+t[0]+" caràcters."},not:function(e){var r=e.name;return"“"+e.value+"” no és un "+r+" permès."},number:function(e){return r(e.name)+" ha de ser un número."},required:function(e){return r(e.name)+" és requerit."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” no comença amb un valor vàlid.":"Aquest camp no comença amb un valor vàlid."},url:function(e){e.name;return"Si us plau introdueixi una url vàlida."}};var t={accepted:function(e){return"Prosím potvrďte "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" musí bý po "+a[0]+".":r(n)+" musí být pozdější datum."},alpha:function(e){return r(e.name)+" může obsahovat pouze písmena."},alphanumeric:function(e){return r(e.name)+" může obsahovat pouze písmena a čísla."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" musí být před "+a[0]+".":r(n)+" musí být dřívější datum."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" musí být mezi "+t[0]+" a "+t[1]+".":r(n)+" délka musí být mezi "+t[0]+" a "+t[1]+" znaky."},confirm:function(e){var n=e.name;e.args;return r(n)+" se neshoduje."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" není platné datum, použijte formát "+a[0]:r(n)+" není platné datum."},default:function(e){e.name;return"Toto pole není vyplěno správně."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” není platná e-mailová adresa.":"Zadejte platnou e-mailovou adresu."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” nekončí správnou hodnotou.":"Toto pole nekončí správnou hodnotou."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” není povolená hodnota "+n+".":"Toto není povolená hodnota "+n+"."},matches:function(e){return r(e.name)+" není povolená hodnota."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Můžete vybrat pouze "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" musí být menší nebo rovno "+t[0]+".":r(n)+" musí být menší nebo rovno "+t[0]+" znaků."},mime:function(e){var n=e.name,a=e.args;return r(n)+" musí být typ: "+(a[0]||"Žádné typy souborů nejsou povolené.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Je potřeba nejméně "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" musí být nejméně "+t[0]+".":r(n)+" musí být nejméně "+t[0]+" znaků."},not:function(e){var r=e.name;return"“"+e.value+"” není povolená hodnota "+r+"."},number:function(e){return r(e.name)+" musí být číslo."},required:function(e){return"Pole "+r(e.name)+" je povinné."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” nezačíná platnou hodnotou.":"Toto pole nezačíná platnou hodnotou."},url:function(e){e.name;return"Zadejte platnou URL adresu."}};var i={accepted:function(e){return"Accepter venligst "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" skal være efter "+a[0]+".":r(n)+" skal være en senere dato."},alpha:function(e){return r(e.name)+" kan kun indeholde bogstaver."},alphanumeric:function(e){return r(e.name)+" kan kun indeholde bogstaver og tal."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" skal være før "+a[0]+".":r(n)+" skal være en tidligere dato."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" skal være mellem "+t[0]+" og "+t[1]+".":r(n)+" skal være mellem "+t[0]+" og "+t[1]+" tegn."},confirm:function(e){var n=e.name;e.args;return r(n)+" matcher ikke."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" er ikke gyldig, brug venligst formatet "+a[0]:r(n)+" er ikke en gyldig dato."},default:function(e){e.name;return"Dette felt er ikke gyldigt."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” er ikke en gyldig email-adresse.":"Indtast venligst en gyldig email-adresse."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” slutter ikke med en gyldig værdi.":"Dette felt slutter ikke med en gyldig værdi."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” er ikke en tilladt "+n+".":"Dette er ikke en tilladt "+n+"."},matches:function(e){return r(e.name)+" er ikke en gyldig værdi."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Du kan kun vælge "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" skal være mindre end eller lig "+t[0]+".":r(n)+" skal være mindre end eller lig "+t[0]+" tegn."},mime:function(e){var n=e.name,a=e.args;return r(n)+" skal være af typen: "+(a[0]||"Ingen tilladte filformater.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Du skal vælge mindst "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" skal være mere end "+t[0]+".":r(n)+" skal være mere end "+t[0]+" tegn."},not:function(e){var r=e.name;return"“"+e.value+"” er ikke en gyldig "+r+"."},number:function(e){return r(e.name)+" skal være et tal."},required:function(e){return r(e.name)+" er påkrævet."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” starter ikke med en gyldig værdi.":"Dette felt starter ikke med en gyldig værdi."},url:function(e){e.name;return"Indtast venligst en gyldig URL."}};var u={accepted:function(e){return e.name+" erfordert Zustimmung."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" muss auf "+a[0]+" folgen.":r(n)+" muss ein späteres Datum sein."},alpha:function(e){return r(e.name)+" darf nur Buchstaben enthalten."},alphanumeric:function(e){return r(e.name)+" darf nur Buchstaben und Zahlen enthalten."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" muss vor "+a[0]+" sein.":r(n)+" muss ein früheres Datum sein."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" muss zwischen "+t[0]+" und "+t[1]+".":r(n)+" muss zwischen "+t[0]+" und "+t[1]+" Zeichen lang sein."},confirm:function(e){var n=e.name;e.args;return r(n)+" stimmt nicht überein."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" ist nicht korrekt, bitte das Format "+a[0]+" benutzen.":r(n)+" ist kein gültiges Datum."},default:function(e){e.name;return"Das Feld hat einen Fehler."},email:function(e){e.name;var r=e.value;return r?"„"+r+"“ ist keine gültige E-Mail-Adresse.":"Bitte eine gültige E-Mail-Adresse eingeben."},endsWith:function(e){e.name;var r=e.value;return r?"„"+r+"” endet nicht mit einem gültigen Wert.":"Dieses Feld endet nicht mit einem gültigen Wert"},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"„"+r(a)+"“ ist kein gültiger Wert für "+n+".":"Dies ist kein gültiger Wert für "+n+"."},matches:function(e){return r(e.name)+" ist kein gültiger Wert."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Es dürfen nur "+t[0]+" "+n+" ausgewählt werden.";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" muss kleiner oder gleich "+t[0]+" sein.":r(n)+" muss "+t[0]+" oder weniger Zeichen lang sein."},mime:function(e){var n=e.name,a=e.args;return r(n)+" muss den Typ "+(a[0]||"Keine Dateien erlaubt")+" haben."},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Es müssen mindestens "+t[0]+" "+n+" ausgewählt werden.";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" muss größer als "+t[0]+" sein.":r(n)+" muss "+t[0]+" oder mehr Zeichen lang sein."},not:function(e){var r=e.name;return"„"+e.value+"“ ist kein erlaubter Wert für "+r+"."},number:function(e){return r(e.name)+" muss eine Zahl sein."},required:function(e){return r(e.name)+" ist ein Pflichtfeld."},startsWith:function(e){e.name;var r=e.value;return r?"„"+r+"” beginnt nicht mit einem gültigen Wert":"Dieses Feld beginnt nicht mit einem gültigen Wert"},url:function(e){return r(e.name)+" muss eine gültige URL sein."}};var o={accepted:function(e){return"Please accept the "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" must be after "+a[0]+".":r(n)+" must be a later date."},alpha:function(e){return r(e.name)+" can only contain alphabetical characters."},alphanumeric:function(e){return r(e.name)+" can only contain letters and numbers."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" must be before "+a[0]+".":r(n)+" must be an earlier date."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" must be between "+t[0]+" and "+t[1]+".":r(n)+" must be between "+t[0]+" and "+t[1]+" characters long."},confirm:function(e){var n=e.name;e.args;return r(n)+" does not match."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" is not a valid date, please use the format "+a[0]:r(n)+" is not a valid date."},default:function(e){e.name;return"This field isn’t valid."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” is not a valid email address.":"Please enter a valid email address."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” doesn’t end with a valid value.":"This field doesn’t end with a valid value."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” is not an allowed "+n+".":"This is not an allowed "+n+"."},matches:function(e){return r(e.name)+" is not an allowed value."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"You may only select "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" must be less than or equal to "+t[0]+".":r(n)+" must be less than or equal to "+t[0]+" characters long."},mime:function(e){var n=e.name,a=e.args;return r(n)+" must be of the type: "+(a[0]||"No file formats allowed.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"You need at least "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" must be at least "+t[0]+".":r(n)+" must be at least "+t[0]+" characters long."},not:function(e){var r=e.name;return"“"+e.value+"” is not an allowed "+r+"."},number:function(e){return r(e.name)+" must be a number."},required:function(e){return r(e.name)+" is required."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” doesn’t start with a valid value.":"This field doesn’t start with a valid value."},url:function(e){e.name;return"Please include a valid url."}};var s={accepted:function(e){return"Por favor acepta los "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" debe ser luego de "+a[0]+".":r(n)+" debe ser una fecha posterior."},alpha:function(e){return r(e.name)+" solo puede contener letras."},alphanumeric:function(e){return r(e.name)+" solo puede contener letras y números."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" debe ser antes de "+a[0]+".":r(n)+" debe ser una fecha anterior."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" debe estar entre "+t[0]+" y "+t[1]+".":r(n)+" debe tener entre "+t[0]+" y "+t[1]+" caracteres."},confirm:function(e){var n=e.name;e.args;return r(n)+" no coincide."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" no es una fecha válida, por favor use el formato "+a[0]:r(n)+" no es una fecha válida."},default:function(e){e.name;return"Este campo no es válido."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” no es un correo electrónico válido.":"Por favor introduzca un correo electrónico válido."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” no termina en un valor válido.":"Este campo no termina en un valor válido."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” no es un "+n+" permitido.":"Esto no es un "+n+" permitido."},matches:function(e){return r(e.name)+" no es un valor permitido."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Solo puedes seleccionar "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" debe ser menor o igual que "+t[0]+".":r(n)+" debe ser menor o igual que "+t[0]+" caracteres."},mime:function(e){var n=e.name,a=e.args;return r(n)+" debe ser de tipo: "+(a[0]||"No se permite el formato de archivos.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Necesitas al menos "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" debe contener al menos "+t[0]+".":r(n)+" debe contener al menos "+t[0]+" caracteres."},not:function(e){var r=e.name;return"“"+e.value+"” no es un "+r+" permitido."},number:function(e){return r(e.name)+" debe ser un número."},required:function(e){return r(e.name)+" es requerido."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” no comienza con un valor válido.":"Este campo no comienza con un valor válido."},url:function(e){e.name;return"Por favor introduzca una url válida."}};var l={accepted:function(e){return"Merci d'accepter les "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" doit être postérieur à "+a[0]+".":r(n)+" doit être une date ultérieure."},alpha:function(e){return r(e.name)+" peut uniquement contenir des lettres."},alphanumeric:function(e){return r(e.name)+" peut uniquement contenir des lettres ou des chiffres"},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" doit être antérieur à "+a[0]+".":r(n)+" doit être une date antérieure."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" doit être compris entre "+t[0]+" et "+t[1]+".":r(n)+" doit être compris entre "+t[0]+" et "+t[1]+" caractères."},confirm:function(e){var n=e.name;e.args;return r(n)+" ne correspond pas."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" n'est pas valide.  Merci d'utiliser le format "+a[0]:r(n)+" n'est pas une date valide."},default:function(e){e.name;return"Ce champ n'est pas valide."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” n'est pas une adresse email valide.":"Merci d'entrer une adresse email valide."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” ne termine pas par une valeur correcte.":"Ce champ ne termine pas par une valeur correcte."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” n'est pas un(e) "+n+" autorisé(e).":"Cette valeur n'est pas un(e) "+n+" autorisé(e)."},matches:function(e){return r(e.name)+" n'est pas une valeur autorisée."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Vous pouvez uniquement sélectionner "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" doit être inférieur ou égal à "+t[0]+".":r(n)+" doit être inférieur ou égal à "+t[0]+" caractères."},mime:function(e){var n=e.name,a=e.args;return r(n)+" doit être de type: "+(a[0]||"Aucun format autorisé.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Vous devez sélectionner au moins "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" doit être supérieur à "+t[0]+".":r(n)+" doit être plus long que "+t[0]+" caractères."},not:function(e){var r=e.name;return"“"+e.value+"” n'est pas un(e) "+r+" autorisé(e)."},number:function(e){return r(e.name)+" doit être un nombre."},required:function(e){return r(e.name)+" est obligatoire."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” ne commence pas par une valeur correcte.":"Ce champ ne commence pas par une valeur correcte."},url:function(e){e.name;return"Merci d'entrer une URL valide."}};var m={accepted:function(e){return"אנא קבל את ה"+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" חייב להיות אחרי "+a[0]+".":r(n)+" חייב להיות תאריך יותר מאוחר."},alpha:function(e){return r(e.name)+" יכול להכיל אותיות בלבד."},alphanumeric:function(e){return r(e.name)+" יכול להכיל אותיות ומספרים בלבד."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" חייב להיות לפני "+a[0]+".":r(n)+" חייב להיות תאריך יותר מוקדם."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" חייב להיות בין "+t[0]+" ו-"+t[1]+".":r(n)+" חייב להיות בין "+t[0]+" ו-"+t[1]+" אותיות."},confirm:function(e){var n=e.name;e.args;return r(n)+" אינו תואם."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" אינו תאריך תקין, אנא השתמש בפורמט "+a[0]:r(n)+" אינו תאריך תקין."},default:function(e){e.name;return"השדה אינו תקין."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” אינו כתובת אימייל תקין.":"אנא הכנס כתובת אימייל תקין."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” אינו מסתיים בערך תקין.":"שדה זו אינו מסתיים בערך תקין."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” אינו "+n+" מורשה.":"ערך זו איננו "+n+" מורשה."},matches:function(e){return r(e.name)+" אינו ערך מורשה."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"אתה יכול לבחור רק "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" חייב להיות פחות או שוה ל-"+t[0]+".":r(n)+" חייב להיות פחות או שוה ל-"+t[0]+" אותיות."},mime:function(e){var n=e.name,a=e.args;return r(n)+" חייב להיות מסוג של: "+(a[0]||"סוגי קבצים לא מורשים.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"אתה צריך לפחות "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" חייב להיות לפחות "+t[0]+".":r(n)+" חייב להיות לפחות "+t[0]+" אותיות."},not:function(e){var r=e.name;return"“"+e.value+"” אינו "+r+" מורשה."},number:function(e){return r(e.name)+" חייב להיות מספר."},required:function(e){return r(e.name)+" נדרש."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” אינו מתחיל בערך תקף.":"שדה זה אינו מתחיל בערך תקף."},url:function(e){e.name;return"אנא כלול כתובת אתר חוקית."}};var v={accepted:function(e){return"Kérlek fogadd el a(z) "+e.name+" mezőt."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" után kell lennie "+a[0]+".":r(n)+" későbbi dátumnak kell lennie."},alpha:function(e){return r(e.name)+" csak ábécé szerinti karaktereket tartalmazhat."},alphanumeric:function(e){return r(e.name)+" csak betűket és számokat tartalmazhat."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" előtt kell lennie "+a[0]+".":r(n)+" korábbi dátumnak kell lennie."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" között kell lennie "+t[0]+" és "+t[1]+".":r(n)+" között kell lennie "+t[0]+" és "+t[1]+" karakter hosszú."},confirm:function(e){var n=e.name;e.args;return r(n)+" nem egyezik."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" nem érvényes dátum, kérlek használd a "+a[0]+" formátumot.":r(n)+" nem érvényes dátum."},default:function(e){e.name;return"Ez a mező érvénytelen."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” nem érvényes e-mail cím.":"Kérlek valós e-mail címet adj meg."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” nem ér véget érvényes értékkel.":"Ez a mező nem ér véget érvényes értékkel."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” nem megengedett "+n+".":"Ez nem megengedett "+n+"."},matches:function(e){return r(e.name)+" nem megengedett érték."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Csak választható "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" kisebbnek vagy egyenlőnek kell lennie "+t[0]+".":r(n)+" kisebbnek vagy egyenlőnek kell lennie "+t[0]+" karakter hosszú."},mime:function(e){var n=e.name,a=e.args;return r(n)+" típusúnak kell lennie: "+(a[0]||"Nem engedélyezett fájlformátumok.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Legalább szükséges "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" legalább "+t[0]+".":r(n)+" legalább "+t[0]+" karakter hosszú."},not:function(e){var r=e.name;return"“"+e.value+"” nem megengedett "+r+"."},number:function(e){return r(e.name)+" számnak kell lennie."},required:function(e){return r(e.name)+" kötelező."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” nem érvényes értékkel kezdődik.":"Ez a mező nem érvényes értékkel kezdődik."},url:function(e){e.name;return"Kérlek érvényes ulr-t adj meg."}};var c={accepted:function(e){return"Per favore, accetta il campo "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" deve essere una data successiva al "+a[0]+".":r(n)+" deve essere una data successiva a quella attuale."},alpha:function(e){return r(e.name)+" può contenere solo lettere."},alphanumeric:function(e){return r(e.name)+" può contenere solo lettere e numeri."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" deve essere una data precedente al "+a[0]+".":r(n)+" deve essere una data precedente a quella attuale."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" deve essere tra "+t[0]+" e "+t[1]+".":r(n)+" deve avere una lunghezza compresa tra "+t[0]+" e "+t[1]+" caratteri."},confirm:function(e){var n=e.name;e.args;return r(n)+" non corrisponde."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" non è una data valida. Per favore usa il formato "+a[0]:r(n)+" non è una data valida."},default:function(e){e.name;return"Questo campo non è valido."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” non è un indirizzo email valido.":"Per favore, inserisci un indirizzo email valido."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” non termina con un valore valido.":"Questo campo non termina con un valore valido."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” non è un valore valido per il campo "+n+".":n+" invalido."},matches:function(e){return r(e.name)+" invalido."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Puoi selezionare al massimo "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" deve essere inferiore o uguale a "+t[0]+".":r(n)+" deve essere inferiore o uguale a "+t[0]+" caratteri."},mime:function(e){var n=e.name,a=e.args;return r(n)+" deve essere del tipo: "+(a[0]||"Nessun formato file autorizzato.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Devi selezionare almeno "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" deve essere maggiore di "+t[0]+".":r(n)+" deve essere più lungo di "+t[0]+" caratteri."},not:function(e){var r=e.name;return"“"+e.value+"” non è un valore valido per il campo "+r+"."},number:function(e){return r(e.name)+" deve essere un numero."},required:function(e){return r(e.name)+" è un campo obbligatorio."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” non inizia con un valore valido.":"Questo campo non inizia con un valore valido."},url:function(e){e.name;return"Per favore inserisci un URL valido."}};var f={accepted:function(e){return e.name+"を承認してください。"},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+"は "+a[0]+" 以降にしてください。":r(n)+"はより後にしてください。"},alpha:function(e){return r(e.name)+"にはアルファベットのみ使用できます。"},alphanumeric:function(e){return r(e.name)+"には英数字のみ使用できます。"},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+"は "+a[0]+" 以前にしてください。":r(n)+"はより前にしてください。"},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+"は"+t[0]+"から"+t[1]+"の間でなければなりません。":r(n)+"は"+t[0]+"文字から"+t[1]+"文字でなければなりません。"},confirm:function(e){var n=e.name;e.args;return r(n)+"が一致しません。"},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+"は有効な形式ではありません。次のフォーマットで入力してください: "+a[0]:r(n)+"は有効な形式ではありません。"},default:function(e){e.name;return"有効な値ではありません。"},email:function(e){e.name;var r=e.value;return r?"“"+r+"” は有効なメールアドレスではありません。":"有効なメールアドレスを入力してください。"},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” は有効な値で終わっていません。":"有効な値で終わっていません。"},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” は許可された"+n+"ではありません。":"許可された"+n+"ではありません。"},matches:function(e){return r(e.name)+"は許可された値ではありません。"},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return n+"は"+t[0]+"項目しか選択できません。";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+"は"+t[0]+"以下でなければなりません。":r(n)+"は"+t[0]+"文字以下でなければなりません。"},mime:function(e){var n=e.name,a=e.args;return r(n)+"は次のファイル形式でなければなりません: "+(a[0]||"許可されたファイル形式がありません")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return n+"は"+t[0]+"項目以上選択してください。";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+"は"+t[0]+"以上でなければなりません。":r(n)+"は"+t[0]+"文字以上でなければなりません。"},not:function(e){var r=e.name;return"“"+e.value+"” は許可された"+r+"ではありません。"},number:function(e){return r(e.name)+"には数字のみ使用できます。"},required:function(e){return r(e.name)+"は必須項目です。"},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” は有効な値で始まっていません。":"有効な値で始まっていません。"},url:function(e){e.name;return"有効なURLを入力してください。"}};var d={accepted:function(e){return e.name+" 승인해 주세요."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" "+a[0]+" 이후이어야 합니다.":r(n)+" 미래의 날짜이어야 합니다."},alpha:function(e){return r(e.name)+" 알파벳만 사용할 수 있습니다."},alphanumeric:function(e){return r(e.name)+" 문자와 숫자만 사용할 수 있습니다."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" "+a[0]+" 이전이어야 합니다.":r(n)+"이전이어야 합니다."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" "+t[0]+"와 "+t[1]+"사이이어야 합니다.":r(n)+" "+t[0]+"자애서 "+t[1]+"자 사이이어야 합니다."},confirm:function(e){var n=e.name;e.args;return r(n)+" 일치하지 않습니다."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" 유효한 날짜 형식이 아닙니다. 다음과 같은 형식으로 입력해 주세요: "+a[0]:r(n)+"올바른 날짜 형식이 아닙니다."},default:function(e){e.name;return"유효하지 않은 값입니다."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” 유효한 이메일 주소가 아닙니다.":"유효한 이메일 주소를 입력해 주세요."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"”으로 끝내야합니다.":"유효한 값으로 끝나지 않습니다."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” 허용된 "+n+" 아닙니다.":n+" 허용된 값이 아닙니다."},matches:function(e){return r(e.name)+" 허용 된 값이 아닙니다."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return n+" "+t[0]+"개의 항목만 선택 가능합니다.";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" "+t[0]+"이하이어야 합니다.":r(n)+" "+t[0]+"자 이하이어야 합니다."},mime:function(e){var n=e.name,a=e.args;return r(n)+" 다음과 같은 파일 형식이어야 합니다: "+(a[0]||"허용되는 파일 형식이 아닙니다.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return n+" "+t[0]+" 이상 선택해 주세요.";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" "+t[0]+"이상이어야 합니다.":r(n)+" "+t[0]+"자 이상이어야 합니다."},not:function(e){var r=e.name;return"“"+e.value+"” 허용된 "+r+" 아닙니다."},number:function(e){return r(e.name)+" 숫자만 사용 가능합니다."},required:function(e){return r(e.name)+" 필수 항목입니다."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” 유효한 값으로 시작하지 않습니다.":"유효한 값으로 시작하지 않습니다."},url:function(e){e.name;return"유효한 URL을 입력해 주세요."}};var g={accepted:function(e){return"Vennligst aksepter "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" må være etter "+a[0]+".":r(n)+" må være på en senere dato."},alpha:function(e){return r(e.name)+" kan kun inneholde bokstaver."},alphanumeric:function(e){return r(e.name)+" kan kun inneholde bokstaver og tall."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" må være før "+a[0]+".":r(n)+" må være en tidligere dato."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" må være mellom "+t[0]+" og "+t[1]+".":r(n)+" må være mellom "+t[0]+" og "+t[1]+" tegn."},confirm:function(e){var n=e.name;e.args;return r(n)+" matcher ikke."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" er ikke gyldig. Vennligst bruk formatet "+a[0]:r(n)+" er ikke en gyldig dato."},default:function(e){e.name;return"Dette feltet er ikke gyldig."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” er ikke en gyldig e-postadresse.":"Vennligst skriv inn en gyldig e-postadresse."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” slutter ikke med en gyldig verdi.":"Dette feltet slutter ikke med en gyldig verdi."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” er ikke et tillatt "+n+".":"Dette er ikke et tillatt "+n+"."},matches:function(e){return r(e.name)+" er ikke en gyldig verdi."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Du kan kun velge "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" må være mindre eller lik "+t[0]+".":r(n)+" må være mindre eller lik "+t[0]+" tegn."},mime:function(e){var n=e.name,a=e.args;return r(n)+" må være av typen: "+(a[0]||"Ingen tillatte filformater.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Du skal velge minst "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" må være større enn "+t[0]+".":r(n)+" må være minst "+t[0]+" tegn."},not:function(e){var r=e.name;return"“"+e.value+"” er ikke et tillatt "+r+"."},number:function(e){return r(e.name)+" må være et tall."},required:function(e){return r(e.name)+" er påkrevd."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” starter ikke med en gyldig verdi.":"Dette feltet starter ikke med en gyldig verdi."},url:function(e){e.name;return"Vennligst skriv inn en gyldig URL."}};var y={accepted:function(e){return"Sta "+e.name+" toe."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" moet na "+a[0]+" zijn.":r(n)+" moet een latere datum zijn."},alpha:function(e){return r(e.name)+" mag enkel letters bevatten."},alphanumeric:function(e){return r(e.name)+" mag enkel letters en cijfers bevatten."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" moet voor "+a[0]+" zijn.":r(n)+" moet een eerdere datum zijn."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" moet tussen "+t[0]+" en "+t[1]+" zitten.":r(n)+" moet tussen "+t[0]+" en "+t[1]+" lang zijn."},confirm:function(e){var n=e.name;e.args;return r(n)+" komt niet overeen."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" is geen geldige datum, het juiste format is "+a[0]:r(n)+" is geen geldige datum."},default:function(e){e.name;return"De invoer voor dit veld is niet geldig"},email:function(e){e.name;var r=e.value;return r?"“"+r+"” is geen geldig e-mailadres.":"Voer een geldig e-mailadres in."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” eindigt niet op een geldige waarde.":"Dit veld eindigt niet op een geldige waarde."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” is niet toegestaan als "+n+".":"Deze "+n+" is niet toegestaan."},matches:function(e){return r(e.name)+" is niet toegestaan."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Je kunt maximaal "+t[0]+" selecteren als "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" moet kleiner of gelijk zijn aan "+t[0]+".":r(n)+" mag maximaal "+t[0]+" karakters bevatten."},mime:function(e){var n=e.name,a=e.args;return r(n)+" moet van dit type zijn: "+(a[0]||"Bestanden zijn niet toegestaan")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Je moet tenminste "+t[0]+" selecteren als "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" moet groter zijn dan "+t[0]+".":r(n)+" moet tenminste "+t[0]+" karakters bevatten."},not:function(e){var r=e.name;return"“"+e.value+"” is geen geldige "+r+"."},number:function(e){return r(e.name)+" moet een getal zijn."},required:function(e){return r(e.name)+" is verplicht."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” begint niet met een geldige waarde.":"Dit veld begint niet met een geldige waarde."},url:function(e){e.name;return"Voer een geldige URL in."}};var h={accepted:function(e){return"Prašome priimti "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" turi būti po "+a[0]+".":r(n)+" turi būti vėlesnė data."},alpha:function(e){return r(e.name)+" gali būti tik abėcėlės raidės."},alphanumeric:function(e){return r(e.name)+" gali būti tik raidės ir skaičiai."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" turi būti prieš "+a[0]+".":r(n)+" turi būti ankstesnė data."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" turi būti tarp "+t[0]+" ir "+t[1]+".":r(n)+" turi būti tarp "+t[0]+" ir "+t[1]+" simbolių ilgio."},confirm:function(e){var n=e.name;e.args;return r(n)+" nesutampa."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" neteisinga data, naudokite formatą "+a[0]:r(n)+" neteisinga data."},default:function(e){e.name;return"Šis laukas nėra validus."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” nėra teisingas el. pašto adresas.":"Prašome įvesti galiojantį el. pašto adresą."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” nesibaigia galiojančia reikšme.":"Šis laukas nesibaigia galiojančia reikšme."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” nėra tinkamas "+n+".":"Tai netinkamas "+n+"."},matches:function(e){return r(e.name)+" nėra leistina reikšmė."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Galite pasirinkti tik "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" turi būti mažesnis arba lygus "+t[0]+".":r(n)+" turi turėti mažiau arba lygiai "+t[0]+" simbolių."},mime:function(e){var n=e.name,a=e.args;return r(n)+" turi būti tokio tipo: "+(a[0]||"Neleidžiami jokie failų formatai.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Turi būti ne mažiau nei "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" turi būti ne mažiau nei "+t[0]+".":r(n)+" turi būti ne mažiau "+t[0]+" simbolių."},not:function(e){var r=e.name;return"“"+e.value+"” nėra leistinas "+r+"."},number:function(e){return r(e.name)+" turi būti skaičius."},required:function(e){return r(e.name)+" yra privalomas."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” neprasideda galiojančia reikšme.":"Šis laukas neprasideda galiojančia reikšme."},url:function(e){e.name;return"Įveskite galiojantį URL."}};var A={accepted:function(e){return"Proszę zaakceptować "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" musi być po "+a[0]+".":r(n)+" musi być przyszłą datą."},alpha:function(e){return r(e.name)+" może zawierać wyłącznie znaki alfabetyczne."},alphanumeric:function(e){return r(e.name)+" może zawierać wyłącznie liczby i litery."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" musi być przed "+a[0]+".":r(n)+" musi być wczesniejszą datą."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" musi być pomiędzy "+t[0]+" oraz "+t[1]+".":r(n)+" musi być pomiędzy "+t[0]+" oraz "+t[1]+" znaków."},confirm:function(e){var n=e.name;e.args;return r(n)+" nie pasuje."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" nie jest poprawną datą, proszę użyć formatu "+a[0]:r(n)+" nie jest poprawną datą."},default:function(e){e.name;return"Pole nie jest poprawne."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” nie jest poprawnym adresem email.":"Proszę podać poprawny adres email."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” nie kończy się z poprawną wartością.":"Pole nie kończy się z poprawną wartością."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” jest niedozwoloną wartością pola "+n+".":"Wartość jest niedozwolona w polu "+n+"."},matches:function(e){return r(e.name)+" nie jest dozwoloną wartością."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Możesz wybrać maksymalnie "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" musi być mniejszy lub równy "+t[0]+".":r(n)+" musi być mniejszy lub równy "+t[0]+" znaków."},mime:function(e){var n=e.name,a=e.args;return r(n)+" musi być typem: "+(a[0]||"Niedozwolone formaty plików.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Potrzeba przynajmniej "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" musi mieć przynajmniej "+t[0]+".":r(n)+" musi mieć przynajmniej "+t[0]+" znaków."},not:function(e){var r=e.name;return"“"+e.value+"” jest niedozwoloną wartością "+r+"."},number:function(e){return r(e.name)+" musi być liczbą."},required:function(e){return r(e.name)+" jest wymagane."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” nie zaczyna się z poprawną wartością.":"Pole nie zaczyna się z poprawną wartością."},url:function(e){e.name;return"Proszę wprowadzić poprawny adres URL."}};var p={accepted:function(e){return"Por favor aceite o "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" deve ser posterior a "+a[0]+".":r(n)+" deve ser uma data posterior."},alpha:function(e){return r(e.name)+" pode conter apenas letras."},alphanumeric:function(e){return r(e.name)+" pode conter apenas letras e números."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" deve ser antes de "+a[0]+".":r(n)+" deve ser uma data anterior."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" deve ser entre "+t[0]+" e "+t[1]+".":r(n)+" deve ter entre "+t[0]+" e "+t[1]+" caracteres."},confirm:function(e){var n=e.name;e.args;return r(n)+" não corresponde."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" não é válido, por favor use o formato "+a[0]:r(n)+" não é uma data válida."},default:function(e){e.name;return"Este campo não é válido."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” não é um e-mail válido.":"Por favor informe um e-mail válido."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” não termina com um valor válido.":"Este campo não termina com um valor válido."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” não é um "+n+" permitido.":"Isso não é um "+n+" permitido."},matches:function(e){return r(e.name)+" não é um valor válido."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Você deve selecionar apenas "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" deve ser menor ou igual a "+t[0]+".":r(n)+" deve ter no máximo "+t[0]+" caracteres."},mime:function(e){var n=e.name,a=e.args;return r(n)+" deve ser no formato: "+(a[0]||"Formato de arquivo não permitido.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Você deve selecionar pelo menos "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" deve ser maior que "+t[0]+".":r(n)+" deve ter mais de "+t[0]+" caracteres."},not:function(e){var r=e.name;return"“"+e.value+"” não é um "+r+" válido."},number:function(e){return r(e.name)+" deve ser um número."},required:function(e){return r(e.name)+" é obrigatório."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” não começa com um valor válido.":"Este campo não começa com um valor válido."},url:function(e){e.name;return"Por favor informe uma URL válida."}};var b={accepted:function(e){return"Пожалуйста, подтвердите "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" должна быть после "+a[0]+".":r(n)+" должна быть дата после."},alpha:function(e){return r(e.name)+" может содержать только буквы."},alphanumeric:function(e){return r(e.name)+" может содержать только буквы и цифры."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" должно быть раньше "+a[0]+".":r(n)+" должно быть раньше."},between:function(e){var n=e.name,a=e.value,t=e.args;!(!Array.isArray(t)||!t[2])&&t[2];return isNaN(a),r(n)+" должно быть между "+t[0]+" и "+t[1]+"."},confirm:function(e){var n=e.name;e.args;return r(n)+" не совпадает."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" не является допустимой датой, пожалуйста, используйте формат "+a[0]:r(n)+" не является допустимой датой."},default:function(e){e.name;return"Это поле не является допустимым."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” недействительный адрес электронной почты.":"Пожалуйста, введите действительный адрес электронной почты."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” не заканчивается допустимым значением.":"Это поле не заканчивается допустимым значением."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” является ошибочным для "+n+".":"Выбранное значение для "+n+" ошибочно."},matches:function(e){return r(e.name)+" не совпадает."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Вы можете выбрать только "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" должно быть меньше или равно "+t[0]+".":"Количество символов "+r(n)+" должно быть меньше или равно "+t[0]+"."},mime:function(e){var n=e.name,a=e.args;return r(n)+" должно быть файлом одного из следующих типов: "+(a[0]||"Не допустимые форматы файлов.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Должно быть не менее "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" должно быть не менее "+t[0]+".":"Количество символов "+r(n)+" должно быть не менее "+t[0]+"."},not:function(e){var r=e.name;return"“"+e.value+"” не является допустимым "+r+"."},number:function(e){return r(e.name)+" должны быть числом."},required:function(e){return r(e.name)+" обязательное поле."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” должно начинаться действительным значением.":"Поле должно начинаться действительным значением."},url:function(e){e.name;return"Пожалуйста, укажите действительный URL."}};var k={accepted:function(e){return"Prosím príjmi "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" musí byť neskôr ako "+a[0]+".":"Pre "+r(n)+" je potrebné zvoliť neskorší dátum."},alpha:function(e){return r(e.name)+" môže obsahovať len písmená."},alphanumeric:function(e){return r(e.name)+" môže obsahovať len písmená a čísla."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" musí byť skôr než "+a[0]+".":"Pre "+r(n)+" je potrebné zvoliť skorší dátum."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" musí byť medzi "+t[0]+" a "+t[1]+".":r(n)+" musí mať od "+t[0]+" do "+t[1]+" znakov."},confirm:function(e){var n=e.name;e.args;return r(n)+" sa nezhoduje."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" neobsahuje korektný dátum. Je potrebné použiť formát "+a[0]:r(n)+" neobsahuje korektný dátum."},default:function(e){e.name;return"Toto pole obsahuje chybu."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” nie je platná emailová adresa.":"Prosím, uveď platnú emailovú adresu.."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” nekončí povolenou hodnotou.":"Toto pole nekončí povolenou hodnotou."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” nie je povolená hodnota pre "+n+".":"Toto nie je povolená hodnota pre "+n+"."},matches:function(e){return r(e.name)+" nie je povolená hodnota."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Je možné vybrať najviac "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" musí byť nanajvýš "+t[0]+".":r(n)+" musí obsahovať nanajvýš "+t[0]+" znakov."},mime:function(e){var n=e.name,a=e.args;return r(n)+" musí byť typu: "+(a[0]||"Žiadne formáty nie sú povolené.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Je potrebné vybrať aspoň "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" musí byť aspoň "+t[0]+".":r(n)+" musí obsahovať aspoň "+t[0]+" znakov."},not:function(e){var r=e.name;return"“"+e.value+"” nie je povolená hodnota pre "+r+"."},number:function(e){return r(e.name)+" musí byť číslo."},required:function(e){return r(e.name)+" je povinné pole."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” nezačína povolenou hodnotou.":"Toto pole nezačína povolenou hodnotou."},url:function(e){e.name;return"Prosím, uveď platnú URL adresu."}};var N={accepted:function(e){return"Molimo Vas da prihvatite "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" mora biti posle "+a[0]+".":r(n)+" mora biti kasniji datum."},alpha:function(e){return r(e.name)+" može sadržati samo abecedne karaktere."},alphanumeric:function(e){return r(e.name)+" može sadržati samo slova i brojeve."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" mora biti pre "+a[0]+".":r(n)+" mora biti raniji datum."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" mora biti između "+t[0]+" i "+t[1]+".":r(n)+" mora biti između "+t[0]+" i "+t[1]+" karaktera."},confirm:function(e){var n=e.name;e.args;return r(n)+" se ne podudara."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" nije važeći datum, koristite format "+a[0]:r(n)+" nije važeći datum."},default:function(e){e.name;return"Ovo polje nije važeće."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” nije važeća e-mail adresa.":"Unesite ispravnu e-mail adresu."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” se ne završava važećom vrednošću.":"Ovo polje se ne završava važećom vrednošću."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” nije dozvoljeno "+n+".":"Ovo nije dozvoljeno "+n+"."},matches:function(e){return r(e.name)+" nije dozvoljena vrednost za ovo polje."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Možete odabrati samo "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" mora biti manje ili jednako "+t[0]+".":r(n)+" mora biti manje ili jednako "+t[0]+" karaktera."},mime:function(e){var n=e.name,a=e.args;return r(n)+" mora biti jedan sledecih formata: "+(a[0]||"Format datoteke nije dozvoljen.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Treba Vam bar "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" treba da ima najmanje "+t[0]+".":r(n)+" treba da ima najmanje "+t[0]+" karaktera."},not:function(e){var r=e.name;return"“"+e.value+"” nije dozvoljena vrednost za polje "+r+"."},number:function(e){return r(e.name)+" mora biti broj."},required:function(e){return r(e.name)+" je obavezno polje."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” ne počinje sa važećom vrednošću.":"Ovo polje ne počinje sa važećom vrednošću."},url:function(e){e.name;return"Unesite važeći url."}};var z={accepted:function(e){return"Var vänlig acceptera "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" måste vara efter "+a[0]+".":r(n)+" måste vara ett senare datum."},alpha:function(e){return r(e.name)+" får bara innehålla bokstäver."},alphanumeric:function(e){return r(e.name)+" får bara innehålla bokstäver och nummer."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" måste vara innan "+a[0]+".":r(n)+" måste vara ett tidigare datum."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" måste vara mellan "+t[0]+" och "+t[1]+".":r(n)+" måste vara mellan "+t[0]+" och "+t[1]+" tecken ."},confirm:function(e){var n=e.name;e.args;return r(n)+" matchar inte."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" är inte ett giltigt datum, var vänlig och använd formatet "+a[0]:r(n)+" är inte ett giltigt datum."},default:function(e){e.name;return"Fältet är inte giltigt."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” är inte en giltigt e-postadress.":"Var vänlig och ange en giltig e-postadress."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” slutar inte med ett giltigt värde.":"Detta fält slutar inte med ett giltigt värde."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” är inte ett tillåtet "+n+".":"Detta är inte ett tillåtet "+n+"."},matches:function(e){return r(e.name)+" är inte ett tillåtet värde."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Du får bara välja "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" måste vara mer än eller lika med "+t[0]+".":r(n)+" måste vara mindre än eller lika med "+t[0]+" tecken."},mime:function(e){var n=e.name,a=e.args;return r(n)+" måste vara av typen: "+(a[0]||"Inga filformat tillåtna.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Du måste välja minst "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" måste vara minst "+t[0]+".":r(n)+" måste åtminstone vara "+t[0]+" tecken långt."},not:function(e){var r=e.name;return"“"+e.value+"” är inte tillåtet "+r+"."},number:function(e){return r(e.name)+" måste vara ett nummer."},required:function(e){return r(e.name)+" är obligatoriskt."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” börjar inte med ett giltigt värde.":"Detta fält börjar inte med ett giltigt värde."},url:function(e){e.name;return"Vänligen ange en giltig url."}};var j={accepted:function(e){return"กรุณายอมรับ "+r(e.name)},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" ต้องเป็นวันที่หลังจาก "+a[0]:r(n)+" ต้องเป็นวันที่ยังไม่มาถึง"},alpha:function(e){return r(e.name)+" มีได้เฉพาะตัวอักษรเท่านั้น"},alphanumeric:function(e){return r(e.name)+" มีได้เฉพาะตัวอักษรและตัวเลขเท่านั้น"},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" ต้องเป็นวันที่ก่อนหน้า "+a[0]:r(n)+" ต้องเป็นวันที่ผ่านมาแล้ว"},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" ต้องมีค่าระหว่าง "+t[0]+" ถึง "+t[1]:r(n)+" ต้องมีความยาว "+t[0]+" ถึง "+t[1]+" ตัว"},confirm:function(e){var n=e.name;e.args;return r(n)+" ไม่ตรงกัน"},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" ไม่ใช่วันที่ที่ถูกต้อง กรุณาใช้ตามรูปแบบ "+a[0]:r(n)+" ไม่ใช่วันที่ที่ถูกต้อง"},default:function(e){e.name;return"ข้อมูลช่องนี้ไม่ถูกต้อง"},email:function(e){e.name;var r=e.value;return r?"“"+r+"” ไม่ใช่ที่อยู่อีเมลที่ถูกต้อง":"กรุณากรอกที่อยู่อีเมลให้ถูกต้อง"},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” ไม่ได้ลงท้ายด้วยค่าที่ถูกต้อง":"ข้อมูลช่องนี้ไม่ได้ลงท้ายด้วยค่าที่ถูกต้อง"},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” ไม่ใช่ "+n+" ที่อนุญาตให้กรอก":"นี่ไม่ใช่ "+n+" ที่อนุญาตให้กรอก"},matches:function(e){return r(e.name)+" ไม่ใช่ค่าที่อนุญาตให้กรอก"},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"คุณเลือกได้เพียง "+t[0]+" "+n+" เท่านั้น";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" ต้องมีไม่เกิน "+t[0]:r(n)+" ต้องยาวไม่เกิน "+t[0]+" ตัว"},mime:function(e){var n=e.name,a=e.args;return r(n)+" ต้องเป็นประเภท: "+(a[0]||"ไม่มีประเภทไฟล์ที่อนุญาต")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"คุณต้องเลือกอย่างน้อย "+t[0]+" "+n;var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" ต้องมีค่าอย่างน้อย "+t[0]:r(n)+" ต้องยาวอย่างน้อย "+t[0]+" ตัว"},not:function(e){var r=e.name;return"“"+e.value+"” ไม่ใช่ค่า "+r+" ที่อนุญาตให้กรอก"},number:function(e){return r(e.name)+" ต้องเป็นตัวเลข"},required:function(e){return r(e.name)+" จำเป็นต้องกรอก"},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” ไม่ได้ขึ้นต้นด้วยค่าที่ถูกต้อง":"ข้อมูลช่องนี้ไม่ได้ขึ้นต้นด้วยค่าที่ถูกต้อง"},url:function(e){e.name;return"กรุณาแนบลิงก์ให้ถูกต้อง"}};var w={accepted:function(e){return"Lütfen "+e.name+"'i kabul edin.."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+", "+a[0]+" sonrasında olmalıdır.":r(n)+" daha sonraki bir tarih olmalıdır."},alpha:function(e){return r(e.name)+" yalnızca alfabetik karakterler içerebilir."},alphanumeric:function(e){return r(e.name)+" yalnızca harf ve rakam içerebilir."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+", "+a[0]+" tarihinden önce olmalıdır.":r(n)+" daha erken bir tarih olmalıdır."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+", "+t[0]+" ile "+t[1]+" arasında olmalıdır.":r(n)+", "+t[0]+" ile "+t[1]+" karakter uzunluğunda olmalıdır."},confirm:function(e){var n=e.name;e.args;return r(n)+" eşleşmiyor."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" geçerli bir tarih değil, lütfen "+a[0]+" biçimini kullanın":r(n)+" geçerli bir tarih değil."},default:function(e){e.name;return"Bu alan geçerli değil."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” geçerli bir e-posta adresi değil.":"Lütfen geçerli bir e-posta adresi giriniz."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” geçerli bir değerle bitmiyor.":"Bu alan geçerli bir değerle bitmiyor."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” izin verilen bir "+n+" değil.":"Bu izin verilen bir "+n+" değil."},matches:function(e){return r(e.name)+" izin verilen bir değer değil."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Yalnızca "+t[0]+" "+n+" seçebilirsiniz.";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+", "+t[0]+" değerinden küçük veya ona eşit olmalıdır.":r(n)+", "+t[0]+" karakterden küçük veya ona eşit olmalıdır."},mime:function(e){var n=e.name,a=e.args;return r(n)+" şu türde olmalıdır: "+(a[0]||"Dosya formatına izin verilmez.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"En az "+t[0]+" "+n+" gerekiyor.";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" en az "+t[0]+" olmalıdır.":r(n)+" en az "+t[0]+" karakter uzunluğunda olmalıdır."},not:function(e){var r=e.name;return"“"+e.value+"” izin verilen bir "+r+" değil."},number:function(e){return r(e.name)+" bir sayı olmalıdır."},required:function(e){return r(e.name)+" gerekli."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” geçerli bir değerle başlamıyor.":"Bu alan geçerli bir değerle başlamıyor."},url:function(e){e.name;return"Lütfen geçerli bir url ekleyin."}};var x={accepted:function(e){return e.name+" phải được chấp nhận."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" phải sau ngày "+a[0]+".":r(n)+" phải sau ngày hôm nay."},alpha:function(e){return r(e.name)+" chỉ có thể chứa các kí tự chữ."},alphanumeric:function(e){return r(e.name)+" chỉ có thể chứa các kí tự chữ và số."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" phải trước ngày ngày "+a[0]+".":r(n)+" phải trước ngày hôm nay."},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" phải có giá trị nằm trong khoảng giữa "+t[0]+" and "+t[1]+".":r(n)+" phải có giá trị dài từ "+t[0]+" đến "+t[1]+" ký tự."},confirm:function(e){var n=e.name;e.args;return r(n)+" không khớp."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" không phải là định dạng của ngày, vui lòng sử dụng định dạng "+a[0]:r(n)+" không phải là định dạng của ngày."},default:function(e){e.name;return"Trường này không hợp lệ."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” phải là một địa chỉ email hợp lệ.":"Vui lòng nhập địa chỉ email hợp lệ."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” phải kết thúc bằng giá trị hợp lệ.":"Trường này phải kết thúc bằng giá trị hợp lệ."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” phải khớp với "+n+".":n+" phải khớp với giá trị cho phép."},matches:function(e){return r(e.name)+" phải khớp với giá trị cho phép."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Bạn chỉ có thể chọn "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" phải nhỏ hơn hoặc bằng "+t[0]+".":r(n)+" phải nhỏ hơn hoặc bằng "+t[0]+" ký tự."},mime:function(e){var n=e.name,a=e.args;return r(n)+" phải chứa kiểu tệp phù hợp: "+(a[0]||"Không có định dạng tệp nào được cho phép.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Phải chứa ít nhất "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" phải chứa ít nhất "+t[0]+".":r(n)+" phải chứa ít nhất "+t[0]+" ký tự."},not:function(e){var r=e.name;return"“"+e.value+"” phải là "+r+" hợp lệ."},number:function(e){return r(e.name)+" phải là số."},required:function(e){return r(e.name)+" là bắt buộc."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” phải bắt đầu bằng giá trị hợp lệ.":"Trường này phải bắt đầu bằng giá trị hợp lệ."},url:function(e){e.name;return"Vui lòng nhập đúng định dạng url."}};var W={accepted:function(e){return"请同意"+e.name+"。"},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" 必须在 "+a[0]+" 之后。":r(n)+" 必须是以后的日期。"},alpha:function(e){return r(e.name)+" 只能包含字母。"},alphanumeric:function(e){return r(e.name)+" 只能包含字母或数字。"},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" 必须在 "+a[0]+" 之前":r(n)+" 必须是以前的日期。"},between:function(e){var n=e.name,a=e.value,t=e.args,i=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" 必须在 "+t[0]+" 和 "+t[1]+" 之间。":r(n)+" 必须在 "+t[0]+" 和 "+t[1]+" 字符长度之间。"},confirm:function(e){var n=e.name;e.args;return r(n)+" 不匹配。"},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" 日期无效，请使用 "+a[0]+" 格式。":r(n)+" 日期无效。"},default:function(e){e.name;return"此输入无效。"},email:function(e){e.name;var r=e.value;return r?"“"+r+"” 不是一个有效的电子邮箱地址。":"请输入有效的电子邮箱地址。"},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” 包含无效的结尾值。":"无效的结尾值。"},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” 是 "+n+" 不允许的值。":n+" 包含不允许的值。"},matches:function(e){return r(e.name)+" 包含不允许的值。"},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"您最多可有 "+t[0]+" 个 "+n+"。";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" 必须小于或等于 "+t[0]+".":r(n)+" 必须小于或等于 "+t[0]+" 字符长度."},mime:function(e){var n=e.name,a=e.args;return r(n)+" 格式必须是: "+(a[0]||"无允许文件格式")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"您需要最少 "+t[0]+" 个 "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?r(n)+" 最少是 "+t[0]+".":r(n)+" 最少 "+t[0]+" 字符长度。"},not:function(e){var r=e.name;return"“"+e.value+"” 是 "+r+" 不被允许的值。"},number:function(e){return r(e.name)+" 必须是数字。"},required:function(e){return r(e.name)+" 是必填项。"},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” 包含无效的起始值":"无效的起始值"},url:function(e){e.name;return"请输入正确的网址。"}};e.ar=function(e){var r;e.extend({locales:(r={},r.ar=n,r)})},e.ca=function(e){var r;e.extend({locales:(r={},r.ca=a,r)})},e.cs=function(e){var r;e.extend({locales:(r={},r.cs=t,r)})},e.da=function(e){var r;e.extend({locales:(r={},r.da=i,r)})},e.de=function(e){var r;e.extend({locales:(r={},r.de=u,r)})},e.en=function(e){var r;e.extend({locales:(r={},r.en=o,r)})},e.es=function(e){var r;e.extend({locales:(r={},r.es=s,r)})},e.fr=function(e){var r;e.extend({locales:(r={},r.fr=l,r)})},e.he=function(e){var r;e.extend({locales:(r={},r.he=m,r)})},e.hu=function(e){var r;e.extend({locales:(r={},r.hu=v,r)})},e.it=function(e){var r;e.extend({locales:(r={},r.it=c,r)})},e.ja=function(e){var r;e.extend({locales:(r={},r.ja=f,r)})},e.ko=function(e){var r;e.extend({locales:(r={},r.ko=d,r)})},e.lt=function(e){var r;e.extend({locales:(r={},r.lt=h,r)})},e.nb=function(e){var r;e.extend({locales:(r={},r.nb=g,r)})},e.nl=function(e){var r;e.extend({locales:(r={},r.nl=y,r)})},e.pl=function(e){var r;e.extend({locales:(r={},r.pl=A,r)})},e.pt=function(e){var r;e.extend({locales:(r={},r.pt=p,r)})},e.ru=function(e){var r;e.extend({locales:(r={},r.ru=b,r)})},e.sk=function(e){var r;e.extend({locales:(r={},r.sk=k,r)})},e.sr=function(e){var r;e.extend({locales:(r={},r.sr=N,r)})},e.sv=function(e){var r;e.extend({locales:(r={},r.sv=z,r)})},e.th=function(e){var r;e.extend({locales:(r={},r.th=j,r)})},e.tr=function(e){var r;e.extend({locales:(r={},r.tr=w,r)})},e.vi=function(e){var r;e.extend({locales:(r={},r.vi=x,r)})},e.zh=function(e){var r;e.extend({locales:(r={},r.zh=W,r)})},Object.defineProperty(e,"__esModule",{value:!0})}));


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3d8de15e", content, true, context)
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6439d180", content, true, context)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4db0c6d6", content, true, context)
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("639e52db", content, true, context)
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("76e980ab", content, true, context)
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("bootstrap-vue");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("cookie-universal");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@braid/vue-formulate");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
module.exports = __webpack_require__(65);


/***/ }),
/* 35 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function ({
  app,
  redirect
}) {
  // If the user is not authenticated
  var usuario = app.$cookiz.get('usuario');
  if (!usuario) {
    return redirect('/login');
  }
  console.log(usuario);
  app.$cookiz.set('usuario', usuario);
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("71f83a6d", content, true)

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * Bootstrap v4.6.2 (https://getbootstrap.com/)\n * Copyright 2011-2022 The Bootstrap Authors\n * Copyright 2011-2022 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(.focus-visible),[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit}address,dl,ol,ul{margin-bottom:1rem}dl,ol,ul{margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{border-style:none}img,svg{vertical-align:middle}svg{overflow:hidden}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit;text-align:-webkit-match-parent}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus:not(.focus-visible),button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem}.display-1,.display-2{font-weight:300;line-height:1.2}.display-2{font-size:5.5rem}.display-3{font-size:4.5rem}.display-3,.display-4{font-weight:300;line-height:1.2}.display-4{font-size:3.5rem}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:.875em;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-inline,.list-unstyled{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:.875em;color:#6c757d}.blockquote-footer:before{content:\"\\2014\\00A0\"}.img-fluid,.img-thumbnail{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-1>*{flex:0 0 100%;max-width:100%}.row-cols-2>*{flex:0 0 50%;max-width:50%}.row-cols-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-4>*{flex:0 0 25%;max-width:25%}.row-cols-5>*{flex:0 0 20%;max-width:20%}.row-cols-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.333333%;max-width:8.333333%}.col-2{flex:0 0 16.666667%;max-width:16.666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.333333%;max-width:33.333333%}.col-5{flex:0 0 41.666667%;max-width:41.666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.333333%;max-width:58.333333%}.col-8{flex:0 0 66.666667%;max-width:66.666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.333333%;max-width:83.333333%}.col-11{flex:0 0 91.666667%;max-width:91.666667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-sm-1>*{flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-sm-4>*{flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-md-1>*{flex:0 0 100%;max-width:100%}.row-cols-md-2>*{flex:0 0 50%;max-width:50%}.row-cols-md-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-md-4>*{flex:0 0 25%;max-width:25%}.row-cols-md-5>*{flex:0 0 20%;max-width:20%}.row-cols-md-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-lg-1>*{flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-lg-4>*{flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-xl-1>*{flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-xl-4>*{flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;margin-bottom:1rem;color:#212529}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm td,.table-sm th{padding:.3rem}.table-bordered,.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#7abaff}.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#b3b7bb}.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#8fd19e}.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#86cfda}.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffdf7e}.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#ed969e}.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fbfcfc}.table-hover .table-light:hover,.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#95999c}.table-hover .table-dark:hover,.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th,.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#343a40;border-color:#454d55}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#343a40}.table-dark td,.table-dark th,.table-dark thead th{border-color:#454d55}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:hsla(0,0%,100%,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}input[type=date].form-control,input[type=datetime-local].form-control,input[type=month].form-control,input[type=time].form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none}select.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;font-size:1rem;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[multiple],select.form-control[size],textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#28a745}.valid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,.9);border-radius:.25rem}.form-row>.col>.valid-tooltip,.form-row>[class*=col-]>.valid-tooltip{left:5px}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#28a745;padding-right:calc(1.5em + .75rem)!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.was-validated select.form-control:valid,select.form-control.is-valid{padding-right:3rem!important;background-position:right 1.5rem center}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-valid,.was-validated .custom-select:valid{border-color:#28a745;padding-right:calc(.75em + 2.3125rem)!important;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") right .75rem center/8px 10px no-repeat,#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat}.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#28a745}.custom-control-input.is-valid~.custom-control-label:before,.was-validated .custom-control-input:valid~.custom-control-label:before{border-color:#28a745}.custom-control-input.is-valid:checked~.custom-control-label:before,.was-validated .custom-control-input:valid:checked~.custom-control-label:before{border-color:#34ce57;background-color:#34ce57}.custom-control-input.is-valid:focus~.custom-control-label:before,.was-validated .custom-control-input:valid:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label:before,.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#28a745}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.form-row>.col>.invalid-tooltip,.form-row>[class*=col-]>.invalid-tooltip{left:5px}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem)!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.was-validated select.form-control:invalid,select.form-control.is-invalid{padding-right:3rem!important;background-position:right 1.5rem center}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-invalid,.was-validated .custom-select:invalid{border-color:#dc3545;padding-right:calc(.75em + 2.3125rem)!important;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") right .75rem center/8px 10px no-repeat,#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat}.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#dc3545}.custom-control-input.is-invalid~.custom-control-label:before,.was-validated .custom-control-input:invalid~.custom-control-label:before{border-color:#dc3545}.custom-control-input.is-invalid:checked~.custom-control-label:before,.was-validated .custom-control-input:invalid:checked~.custom-control-label:before{border-color:#e4606d;background-color:#e4606d}.custom-control-input.is-invalid:focus~.custom-control-label:before,.was-validated .custom-control-input:invalid:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label:before,.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#dc3545}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:flex;flex-flow:row wrap;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{justify-content:center}.form-inline .form-group,.form-inline label{display:flex;align-items:center;margin-bottom:0}.form-inline .form-group{flex:0 0 auto;flex-flow:row wrap}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary.focus,.btn-primary:focus,.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary.focus,.btn-secondary:focus,.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success.focus,.btn-success:focus,.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info.focus,.btn-info:focus,.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning.focus,.btn-warning:focus,.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger.focus,.btn-danger:focus,.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light.focus,.btn-light:focus,.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark.focus,.btn-dark:focus,.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-outline-primary{color:#007bff;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-success{color:#28a745;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{color:#343a40;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link{font-weight:400;color:#007bff;text-decoration:none}.btn-link:hover{color:#0056b3}.btn-link.focus,.btn-link:focus,.btn-link:hover{text-decoration:underline}.btn-link.disabled,.btn-link:disabled{color:#6c757d;pointer-events:none}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.collapsing.width{width:0;height:auto;transition:width .35s ease}@media (prefers-reduced-motion:reduce){.collapsing.width{transition:none}}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#e9ecef}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#adb5bd;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split:after,.dropright .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-left:0}.dropleft .dropdown-toggle-split:before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio],.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control{margin-left:-1px}.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:flex;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label:after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group.has-validation>.custom-file:nth-last-child(n+3) .custom-file-label,.input-group.has-validation>.custom-file:nth-last-child(n+3) .custom-file-label:after,.input-group.has-validation>.custom-select:nth-last-child(n+3),.input-group.has-validation>.form-control:nth-last-child(n+3),.input-group:not(.has-validation)>.custom-file:not(:last-child) .custom-file-label,.input-group:not(.has-validation)>.custom-file:not(:last-child) .custom-file-label:after,.input-group:not(.has-validation)>.custom-select:not(:last-child),.input-group:not(.has-validation)>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group-append,.input-group-prepend{display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn:focus,.input-group-prepend .btn:focus{z-index:3}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea){height:calc(1.5em + 1rem + 2px)}.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea){height:calc(1.5em + .5rem + 2px)}.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group.has-validation>.input-group-append:nth-last-child(n+3)>.btn,.input-group.has-validation>.input-group-append:nth-last-child(n+3)>.input-group-text,.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.btn,.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;z-index:1;display:block;min-height:1.5rem;padding-left:1.5rem;-webkit-print-color-adjust:exact;color-adjust:exact;print-color-adjust:exact}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;left:0;z-index:-1;width:1rem;height:1.25rem;opacity:0}.custom-control-input:checked~.custom-control-label:before{color:#fff;border-color:#007bff;background-color:#007bff}.custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:focus:not(:checked)~.custom-control-label:before{border-color:#80bdff}.custom-control-input:not(:disabled):active~.custom-control-label:before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.custom-control-input:disabled~.custom-control-label,.custom-control-input[disabled]~.custom-control-label{color:#6c757d}.custom-control-input:disabled~.custom-control-label:before,.custom-control-input[disabled]~.custom-control-label:before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label:before{pointer-events:none;background-color:#fff;border:1px solid #adb5bd}.custom-control-label:after,.custom-control-label:before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\"}.custom-control-label:after{background:50%/50% 50% no-repeat}.custom-checkbox .custom-control-label:before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:before{border-color:#007bff;background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label:before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label:before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label:after{top:calc(.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-switch .custom-control-label:after{transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label:after{background-color:#fff;transform:translateX(.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-select{display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") right .75rem center/8px 10px no-repeat;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.custom-select-sm{height:calc(1.5em + .5rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.custom-select-lg{height:calc(1.5em + 1rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.custom-file{display:inline-block;margin-bottom:0}.custom-file,.custom-file-input{position:relative;width:100%;height:calc(1.5em + .75rem + 2px)}.custom-file-input{z-index:2;margin:0;overflow:hidden;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-input:disabled~.custom-file-label,.custom-file-input[disabled]~.custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en)~.custom-file-label:after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]:after{content:attr(data-browse)}.custom-file-label{left:0;z-index:1;height:calc(1.5em + .75rem + 2px);overflow:hidden;font-weight:400;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label,.custom-file-label:after{position:absolute;top:0;right:0;padding:.375rem .75rem;line-height:1.5;color:#495057}.custom-file-label:after{bottom:0;z-index:3;display:block;height:calc(1.5em + .75rem);content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;height:1.4rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:0}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-moz-range-thumb{-moz-transition:none;transition:none}}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;-ms-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-ms-thumb{-ms-transition:none;transition:none}}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower,.custom-range::-ms-fill-upper{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label:before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-control-label:before,.custom-file-label,.custom-select{transition:none}}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-link{margin-bottom:-1px;background-color:transparent;border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{isolation:isolate;border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{background:none;border:0;border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;padding:.5rem 1rem}.navbar,.navbar .container,.navbar .container-fluid,.navbar .container-lg,.navbar .container-md,.navbar .container-sm,.navbar .container-xl{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:50%/100% 100% no-repeat}.navbar-nav-scroll{max-height:75vh;overflow-y:auto}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{flex-wrap:nowrap}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{flex-wrap:nowrap}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{flex-wrap:nowrap}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{flex-wrap:nowrap}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{flex-wrap:nowrap}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:hsla(0,0%,100%,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:hsla(0,0%,100%,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:hsla(0,0%,100%,.5);border-color:hsla(0,0%,100%,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-dark .navbar-text{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem}.card-subtitle,.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-bottom:-.75rem;border-bottom:0}.card-header-pills,.card-header-tabs{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem;border-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom,.card-img-top{flex-shrink:0;width:100%}.card-img,.card-img-top{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{display:flex;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{flex:1 0 0%;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;grid-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion{overflow-anchor:none}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{border-radius:0;margin-bottom:-1px}.breadcrumb{display:flex;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item:before{float:left;padding-right:.5rem;color:#6c757d;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover:before{text-decoration:underline;text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.badge{transition:none}}a.badge:focus,a.badge:hover{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}a.badge-primary:focus,a.badge-primary:hover{color:#fff;background-color:#0062cc}a.badge-primary.focus,a.badge-primary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.badge-secondary{color:#fff;background-color:#6c757d}a.badge-secondary:focus,a.badge-secondary:hover{color:#fff;background-color:#545b62}a.badge-secondary.focus,a.badge-secondary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.badge-success{color:#fff;background-color:#28a745}a.badge-success:focus,a.badge-success:hover{color:#fff;background-color:#1e7e34}a.badge-success.focus,a.badge-success:focus{outline:0;box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:focus,a.badge-info:hover{color:#fff;background-color:#117a8b}a.badge-info.focus,a.badge-info:focus{outline:0;box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.badge-warning{color:#212529;background-color:#ffc107}a.badge-warning:focus,a.badge-warning:hover{color:#212529;background-color:#d39e00}a.badge-warning.focus,a.badge-warning:focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.badge-danger{color:#fff;background-color:#dc3545}a.badge-danger:focus,a.badge-danger:hover{color:#fff;background-color:#bd2130}a.badge-danger.focus,a.badge-danger:focus{outline:0;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:focus,a.badge-light:hover{color:#212529;background-color:#dae0e5}a.badge-light.focus,a.badge-light:focus{outline:0;box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:focus,a.badge-dark:hover{color:#fff;background-color:#1d2124}a.badge-dark.focus,a.badge-dark:focus{outline:0;box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;z-index:2;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}.progress{height:1rem;line-height:0;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress,.progress-bar{display:flex;overflow:hidden}.progress-bar{flex-direction:column;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:1rem 1rem}.progress-bar-animated{animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion:reduce){.progress-bar-animated{animation:none}}.media{display:flex;align-items:flex-start}.media-body{flex:1}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.25rem}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;background-color:transparent;border:0}a.close.disabled{pointer-events:none}.toast{flex-basis:350px;max-width:350px;font-size:.875rem;background-color:hsla(0,0%,100%,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:flex;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:hsla(0,0%,100%,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05);border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translateY(-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered:before{display:block;height:calc(100vh - 1rem);height:-moz-min-content;height:min-content;content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{flex-direction:column;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable:before{content:none}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .close{padding:1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered:before{height:calc(100vh - 3.5rem);height:-moz-min-content;height:min-content}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}[dir=ltr] .tooltip{text-align:left}[dir=rtl] .tooltip{text-align:right}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow:before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow:before,.bs-tooltip-top .arrow:before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow:before,.bs-tooltip-right .arrow:before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.bs-tooltip-bottom .arrow:before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow:before,.bs-tooltip-left .arrow:before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}[dir=ltr] .popover{text-align:left}[dir=rtl] .popover{text-align:right}.popover{top:0;left:0;z-index:1060;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover,.popover .arrow{position:absolute;display:block}.popover .arrow{width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow:after,.popover .arrow:before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=top]>.arrow:before,.bs-popover-top>.arrow:before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top]>.arrow:after,.bs-popover-top>.arrow:after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right]>.arrow:before,.bs-popover-right>.arrow:before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right]>.arrow:after,.bs-popover-right>.arrow:after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=bottom]>.arrow:before,.bs-popover-bottom>.arrow:before{top:0;border-width:0 .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom]>.arrow:after,.bs-popover-bottom>.arrow:after{top:1px;border-width:0 .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left]>.arrow:before,.bs-popover-left>.arrow:before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left]>.arrow:after,.bs-popover-left>.arrow:after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner:after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){transform:translateX(100%)}.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:none;border:0;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:50%/100% 100% no-repeat}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8'%3E%3Cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3E%3C/svg%3E\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@keyframes spinner-border{to{transform:rotate(1turn)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;border:.25em solid;border-right:.25em solid transparent;border-radius:50%;animation:spinner-border .75s linear infinite}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;background-color:currentcolor;border-radius:50%;opacity:0;animation:spinner-grow .75s linear infinite}.spinner-grow-sm{width:1rem;height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{animation-duration:1.5s}}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#6c757d!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62!important}.bg-success{background-color:#28a745!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important}.bg-info{background-color:#17a2b8!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important}.bg-warning{background-color:#ffc107!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important}.bg-danger{background-color:#dc3545!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important}.bg-light{background-color:#f8f9fa!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important}.bg-dark{background-color:#343a40!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded-sm{border-radius:.2rem!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important}.rounded-right,.rounded-top{border-top-right-radius:.25rem!important}.rounded-bottom,.rounded-right{border-bottom-right-radius:.25rem!important}.rounded-bottom,.rounded-left{border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important}.rounded-lg{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-0{border-radius:0!important}.clearfix:after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive:before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9:before{padding-top:42.857143%}.embed-responsive-16by9:before{padding-top:56.25%}.embed-responsive-4by3:before{padding-top:75%}.embed-responsive-1by1:before{padding-top:100%}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-fill{flex:1 1 auto!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}@media (min-width:576px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}}@media (min-width:768px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:sticky!important}.fixed-top{top:0}.fixed-bottom,.fixed-top{position:fixed;right:0;left:0;z-index:1030}.fixed-bottom{bottom:0}@supports (position:sticky){.sticky-top{position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.stretched-link:after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:transparent}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0056b3!important}.text-secondary{color:#6c757d!important}a.text-secondary:focus,a.text-secondary:hover{color:#494f54!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#19692c!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#0f6674!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#ba8b00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#a71d2a!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#cbd3da!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#121416!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:hsla(0,0%,100%,.5)!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none!important}.text-break{word-break:break-word!important;word-wrap:break-word!important}.text-reset{color:inherit!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,:after,:before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]:after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd}blockquote,img,pre,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}.container,body{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("32df6d42", content, true)

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/*!\n * BootstrapVue Custom CSS (https://bootstrap-vue.org)\n */.bv-no-focus-ring:focus{outline:none}@media (max-width:575.98px){.bv-d-xs-down-none{display:none!important}}@media (max-width:767.98px){.bv-d-sm-down-none{display:none!important}}@media (max-width:991.98px){.bv-d-md-down-none{display:none!important}}@media (max-width:1199.98px){.bv-d-lg-down-none{display:none!important}}.bv-d-xl-down-none{display:none!important}.form-control.focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control.focus.is-valid{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.form-control.focus.is-invalid{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.b-avatar{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;flex-shrink:0;width:2.5rem;height:2.5rem;font-size:inherit;font-weight:400;line-height:1;max-width:100%;max-height:auto;text-align:center;overflow:visible;position:relative;transition:color .15s ease-in-out,background-color .15s ease-in-out,box-shadow .15s ease-in-out}.b-avatar:focus{outline:0}.b-avatar.btn,.b-avatar[href]{padding:0;border:0}.b-avatar.btn .b-avatar-img img,.b-avatar[href] .b-avatar-img img{transition:transform .15s ease-in-out}.b-avatar.btn:not(:disabled):not(.disabled),.b-avatar[href]:not(:disabled):not(.disabled){cursor:pointer}.b-avatar.btn:not(:disabled):not(.disabled):hover .b-avatar-img img,.b-avatar[href]:not(:disabled):not(.disabled):hover .b-avatar-img img{transform:scale(1.15)}.b-avatar.disabled,.b-avatar:disabled,.b-avatar[disabled]{opacity:.65;pointer-events:none}.b-avatar .b-avatar-custom,.b-avatar .b-avatar-img,.b-avatar .b-avatar-text{border-radius:inherit;width:100%;height:100%;overflow:hidden;display:flex;justify-content:center;align-items:center;-webkit-mask-image:radial-gradient(#fff,#000);mask-image:radial-gradient(#fff,#000)}.b-avatar .b-avatar-text{text-transform:uppercase;white-space:nowrap}.b-avatar[href]{text-decoration:none}.b-avatar>.b-icon{width:60%;height:auto;max-width:100%}.b-avatar .b-avatar-img img{width:100%;height:100%;max-height:auto;border-radius:inherit;-o-object-fit:cover;object-fit:cover}.b-avatar .b-avatar-badge{position:absolute;min-height:1.5em;min-width:1.5em;padding:.25em;line-height:1;border-radius:10em;font-size:70%;font-weight:700;z-index:1}.b-avatar-sm{width:1.5rem;height:1.5rem}.b-avatar-sm .b-avatar-text{font-size:.6rem}.b-avatar-sm .b-avatar-badge{font-size:.42rem}.b-avatar-lg{width:3.5rem;height:3.5rem}.b-avatar-lg .b-avatar-text{font-size:1.4rem}.b-avatar-lg .b-avatar-badge{font-size:.98rem}.b-avatar-group .b-avatar-group-inner{display:flex;flex-wrap:wrap}.b-avatar-group .b-avatar{border:1px solid #dee2e6}.b-avatar-group .btn.b-avatar:hover:not(.disabled):not(disabled),.b-avatar-group a.b-avatar:hover:not(.disabled):not(disabled){z-index:1}.b-calendar{display:inline-flex}.b-calendar .b-calendar-inner{min-width:250px}.b-calendar .b-calendar-header,.b-calendar .b-calendar-nav{margin-bottom:.25rem}.b-calendar .b-calendar-nav .btn{padding:.25rem}.b-calendar output{padding:.25rem;font-size:80%}.b-calendar output.readonly{background-color:#e9ecef;opacity:1}.b-calendar .b-calendar-footer{margin-top:.5rem}.b-calendar .b-calendar-grid{padding:0;margin:0;overflow:hidden}.b-calendar .b-calendar-grid .row{flex-wrap:nowrap}.b-calendar .b-calendar-grid-caption{padding:.25rem}.b-calendar .b-calendar-grid-body .col[data-date] .btn{width:32px;height:32px;font-size:14px;line-height:1;margin:3px auto;padding:9px 0}.b-calendar .btn.disabled,.b-calendar .btn:disabled,.b-calendar .btn[aria-disabled=true]{cursor:default;pointer-events:none}.card-img-left{border-top-left-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-img-right{border-top-right-radius:calc(.25rem - 1px);border-bottom-right-radius:calc(.25rem - 1px)}.dropdown.dropleft .dropdown-toggle.dropdown-toggle-no-caret:before,.dropdown:not(.dropleft) .dropdown-toggle.dropdown-toggle-no-caret:after{display:none!important}.dropdown .dropdown-menu:focus{outline:none}.b-dropdown-form{display:inline-block;padding:.25rem 1.5rem;width:100%;clear:both;font-weight:400}.b-dropdown-form:focus{outline:1px dotted!important;outline:5px auto -webkit-focus-ring-color!important}.b-dropdown-form.disabled,.b-dropdown-form:disabled{outline:0!important;color:#adb5bd;pointer-events:none}.b-dropdown-text{display:inline-block;padding:.25rem 1.5rem;margin-bottom:0;width:100%;clear:both;font-weight:lighter}.custom-checkbox.b-custom-control-lg,.input-group-lg .custom-checkbox{font-size:1.25rem;line-height:1.5;padding-left:1.875rem}.custom-checkbox.b-custom-control-lg .custom-control-label:before,.input-group-lg .custom-checkbox .custom-control-label:before{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;border-radius:.3rem}.custom-checkbox.b-custom-control-lg .custom-control-label:after,.input-group-lg .custom-checkbox .custom-control-label:after{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;background-size:50% 50%}.custom-checkbox.b-custom-control-sm,.input-group-sm .custom-checkbox{font-size:.875rem;line-height:1.5;padding-left:1.3125rem}.custom-checkbox.b-custom-control-sm .custom-control-label:before,.input-group-sm .custom-checkbox .custom-control-label:before{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;border-radius:.2rem}.custom-checkbox.b-custom-control-sm .custom-control-label:after,.input-group-sm .custom-checkbox .custom-control-label:after{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;background-size:50% 50%}.custom-switch.b-custom-control-lg,.input-group-lg .custom-switch{padding-left:2.8125rem}.custom-switch.b-custom-control-lg .custom-control-label,.input-group-lg .custom-switch .custom-control-label{font-size:1.25rem;line-height:1.5}.custom-switch.b-custom-control-lg .custom-control-label:before,.input-group-lg .custom-switch .custom-control-label:before{top:.3125rem;height:1.25rem;left:-2.8125rem;width:2.1875rem;border-radius:.625rem}.custom-switch.b-custom-control-lg .custom-control-label:after,.input-group-lg .custom-switch .custom-control-label:after{top:calc(.3125rem + 2px);left:calc(-2.8125rem + 2px);width:calc(1.25rem - 4px);height:calc(1.25rem - 4px);border-radius:.625rem;background-size:50% 50%}.custom-switch.b-custom-control-lg .custom-control-input:checked~.custom-control-label:after,.input-group-lg .custom-switch .custom-control-input:checked~.custom-control-label:after{transform:translateX(.9375rem)}.custom-switch.b-custom-control-sm,.input-group-sm .custom-switch{padding-left:1.96875rem}.custom-switch.b-custom-control-sm .custom-control-label,.input-group-sm .custom-switch .custom-control-label{font-size:.875rem;line-height:1.5}.custom-switch.b-custom-control-sm .custom-control-label:before,.input-group-sm .custom-switch .custom-control-label:before{top:.21875rem;left:-1.96875rem;width:1.53125rem;height:.875rem;border-radius:.4375rem}.custom-switch.b-custom-control-sm .custom-control-label:after,.input-group-sm .custom-switch .custom-control-label:after{top:calc(.21875rem + 2px);left:calc(-1.96875rem + 2px);width:calc(.875rem - 4px);height:calc(.875rem - 4px);border-radius:.4375rem;background-size:50% 50%}.custom-switch.b-custom-control-sm .custom-control-input:checked~.custom-control-label:after,.input-group-sm .custom-switch .custom-control-input:checked~.custom-control-label:after{transform:translateX(.65625rem)}.input-group>.input-group-append:last-child>.btn-group:not(:last-child):not(.dropdown-toggle)>.btn,.input-group>.input-group-append:not(:last-child)>.btn-group>.btn,.input-group>.input-group-prepend>.btn-group>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn-group>.btn,.input-group>.input-group-prepend:first-child>.btn-group:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.btn-group>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.b-form-btn-label-control.form-control{display:flex;align-items:stretch;height:auto;padding:0;background-image:none}.input-group .b-form-btn-label-control.form-control{padding:0}.b-form-btn-label-control.form-control[dir=rtl],[dir=rtl] .b-form-btn-label-control.form-control{flex-direction:row-reverse}.b-form-btn-label-control.form-control[dir=rtl]>label,[dir=rtl] .b-form-btn-label-control.form-control>label{text-align:right}.b-form-btn-label-control.form-control>.btn{line-height:1;font-size:inherit;box-shadow:none!important;border:0}.b-form-btn-label-control.form-control>.btn:disabled{pointer-events:none}.b-form-btn-label-control.form-control.is-valid>.btn{color:#28a745}.b-form-btn-label-control.form-control.is-invalid>.btn{color:#dc3545}.b-form-btn-label-control.form-control>.dropdown-menu{padding:.5rem}.b-form-btn-label-control.form-control>.form-control{height:auto;min-height:calc(1.5em + .75rem);padding-left:.25rem;margin:0;border:0;outline:0;background:transparent;word-break:break-word;font-size:inherit;white-space:normal;cursor:pointer}.b-form-btn-label-control.form-control>.form-control.form-control-sm{min-height:calc(1.5em + .5rem)}.b-form-btn-label-control.form-control>.form-control.form-control-lg{min-height:calc(1.5em + 1rem)}.input-group.input-group-sm .b-form-btn-label-control.form-control>.form-control{min-height:calc(1.5em + .5rem);padding-top:.25rem;padding-bottom:.25rem}.input-group.input-group-lg .b-form-btn-label-control.form-control>.form-control{min-height:calc(1.5em + 1rem);padding-top:.5rem;padding-bottom:.5rem}.b-form-btn-label-control.form-control[aria-disabled=true],.b-form-btn-label-control.form-control[aria-readonly=true]{background-color:#e9ecef;opacity:1}.b-form-btn-label-control.form-control[aria-disabled=true]{pointer-events:none}.b-form-btn-label-control.form-control[aria-disabled=true]>label{cursor:default}.b-form-btn-label-control.btn-group>.dropdown-menu{padding:.5rem}.custom-file-label{white-space:nowrap;overflow-x:hidden}.b-custom-control-lg.custom-file,.b-custom-control-lg .custom-file-input,.b-custom-control-lg .custom-file-label,.input-group-lg.custom-file,.input-group-lg .custom-file-input,.input-group-lg .custom-file-label{font-size:1.25rem;height:calc(1.5em + 1rem + 2px)}.b-custom-control-lg .custom-file-label,.b-custom-control-lg .custom-file-label:after,.input-group-lg .custom-file-label,.input-group-lg .custom-file-label:after{padding:.5rem 1rem;line-height:1.5}.b-custom-control-lg .custom-file-label,.input-group-lg .custom-file-label{border-radius:.3rem}.b-custom-control-lg .custom-file-label:after,.input-group-lg .custom-file-label:after{font-size:inherit;height:calc(1.5em + 1rem);border-radius:0 .3rem .3rem 0}.b-custom-control-sm.custom-file,.b-custom-control-sm .custom-file-input,.b-custom-control-sm .custom-file-label,.input-group-sm.custom-file,.input-group-sm .custom-file-input,.input-group-sm .custom-file-label{font-size:.875rem;height:calc(1.5em + .5rem + 2px)}.b-custom-control-sm .custom-file-label,.b-custom-control-sm .custom-file-label:after,.input-group-sm .custom-file-label,.input-group-sm .custom-file-label:after{padding:.25rem .5rem;line-height:1.5}.b-custom-control-sm .custom-file-label,.input-group-sm .custom-file-label{border-radius:.2rem}.b-custom-control-sm .custom-file-label:after,.input-group-sm .custom-file-label:after{font-size:inherit;height:calc(1.5em + .5rem);border-radius:0 .2rem .2rem 0}.form-control.is-invalid,.form-control.is-valid,.was-validated .form-control:invalid,.was-validated .form-control:valid{background-position:right calc(.375em + .1875rem) center}input[type=color].form-control{height:calc(1.5em + .75rem + 2px);padding:.125rem .25rem}.input-group-sm input[type=color].form-control,input[type=color].form-control.form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.125rem .25rem}.input-group-lg input[type=color].form-control,input[type=color].form-control.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.125rem .25rem}input[type=color].form-control:disabled{background-color:#adb5bd;opacity:.65}.input-group>.custom-range{position:relative;flex:1 1 auto;width:1%;margin-bottom:0}.input-group>.custom-file+.custom-range,.input-group>.custom-range+.custom-file,.input-group>.custom-range+.custom-range,.input-group>.custom-range+.custom-select,.input-group>.custom-range+.form-control,.input-group>.custom-range+.form-control-plaintext,.input-group>.custom-select+.custom-range,.input-group>.form-control+.custom-range,.input-group>.form-control-plaintext+.custom-range{margin-left:-1px}.input-group>.custom-range:focus{z-index:3}.input-group>.custom-range:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-range:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-range{padding:0 .75rem;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;height:calc(1.5em + .75rem + 2px);border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.input-group>.custom-range{transition:none}}.input-group>.custom-range:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.input-group>.custom-range:disabled,.input-group>.custom-range[readonly]{background-color:#e9ecef}.input-group-lg>.custom-range{height:calc(1.5em + 1rem + 2px);padding:0 1rem;border-radius:.3rem}.input-group-sm>.custom-range{height:calc(1.5em + .5rem + 2px);padding:0 .5rem;border-radius:.2rem}.input-group .custom-range.is-valid,.was-validated .input-group .custom-range:valid{border-color:#28a745}.input-group .custom-range.is-valid:focus,.was-validated .input-group .custom-range:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-range.is-valid:focus::-webkit-slider-thumb,.was-validated .custom-range:valid:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac}.custom-range.is-valid:focus::-moz-range-thumb,.was-validated .custom-range:valid:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac}.custom-range.is-valid:focus::-ms-thumb,.was-validated .custom-range:valid:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac}.custom-range.is-valid::-webkit-slider-thumb,.was-validated .custom-range:valid::-webkit-slider-thumb{background-color:#28a745;background-image:none}.custom-range.is-valid::-webkit-slider-thumb:active,.was-validated .custom-range:valid::-webkit-slider-thumb:active{background-color:#9be7ac;background-image:none}.custom-range.is-valid::-webkit-slider-runnable-track,.was-validated .custom-range:valid::-webkit-slider-runnable-track{background-color:rgba(40,167,69,.35)}.custom-range.is-valid::-moz-range-thumb,.was-validated .custom-range:valid::-moz-range-thumb{background-color:#28a745;background-image:none}.custom-range.is-valid::-moz-range-thumb:active,.was-validated .custom-range:valid::-moz-range-thumb:active{background-color:#9be7ac;background-image:none}.custom-range.is-valid::-moz-range-track,.was-validated .custom-range:valid::-moz-range-track{background:rgba(40,167,69,.35)}.custom-range.is-valid~.valid-feedback,.custom-range.is-valid~.valid-tooltip,.was-validated .custom-range:valid~.valid-feedback,.was-validated .custom-range:valid~.valid-tooltip{display:block}.custom-range.is-valid::-ms-thumb,.was-validated .custom-range:valid::-ms-thumb{background-color:#28a745;background-image:none}.custom-range.is-valid::-ms-thumb:active,.was-validated .custom-range:valid::-ms-thumb:active{background-color:#9be7ac;background-image:none}.custom-range.is-valid::-ms-track-lower,.custom-range.is-valid::-ms-track-upper,.was-validated .custom-range:valid::-ms-track-lower,.was-validated .custom-range:valid::-ms-track-upper{background:rgba(40,167,69,.35)}.input-group .custom-range.is-invalid,.was-validated .input-group .custom-range:invalid{border-color:#dc3545}.input-group .custom-range.is-invalid:focus,.was-validated .input-group .custom-range:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-range.is-invalid:focus::-webkit-slider-thumb,.was-validated .custom-range:invalid:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.custom-range.is-invalid:focus::-moz-range-thumb,.was-validated .custom-range:invalid:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.custom-range.is-invalid:focus::-ms-thumb,.was-validated .custom-range:invalid:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.custom-range.is-invalid::-webkit-slider-thumb,.was-validated .custom-range:invalid::-webkit-slider-thumb{background-color:#dc3545;background-image:none}.custom-range.is-invalid::-webkit-slider-thumb:active,.was-validated .custom-range:invalid::-webkit-slider-thumb:active{background-color:#f6cdd1;background-image:none}.custom-range.is-invalid::-webkit-slider-runnable-track,.was-validated .custom-range:invalid::-webkit-slider-runnable-track{background-color:rgba(220,53,69,.35)}.custom-range.is-invalid::-moz-range-thumb,.was-validated .custom-range:invalid::-moz-range-thumb{background-color:#dc3545;background-image:none}.custom-range.is-invalid::-moz-range-thumb:active,.was-validated .custom-range:invalid::-moz-range-thumb:active{background-color:#f6cdd1;background-image:none}.custom-range.is-invalid::-moz-range-track,.was-validated .custom-range:invalid::-moz-range-track{background:rgba(220,53,69,.35)}.custom-range.is-invalid~.invalid-feedback,.custom-range.is-invalid~.invalid-tooltip,.was-validated .custom-range:invalid~.invalid-feedback,.was-validated .custom-range:invalid~.invalid-tooltip{display:block}.custom-range.is-invalid::-ms-thumb,.was-validated .custom-range:invalid::-ms-thumb{background-color:#dc3545;background-image:none}.custom-range.is-invalid::-ms-thumb:active,.was-validated .custom-range:invalid::-ms-thumb:active{background-color:#f6cdd1;background-image:none}.custom-range.is-invalid::-ms-track-lower,.custom-range.is-invalid::-ms-track-upper,.was-validated .custom-range:invalid::-ms-track-lower,.was-validated .custom-range:invalid::-ms-track-upper{background:rgba(220,53,69,.35)}.custom-radio.b-custom-control-lg,.input-group-lg .custom-radio{font-size:1.25rem;line-height:1.5;padding-left:1.875rem}.custom-radio.b-custom-control-lg .custom-control-label:before,.input-group-lg .custom-radio .custom-control-label:before{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;border-radius:50%}.custom-radio.b-custom-control-lg .custom-control-label:after,.input-group-lg .custom-radio .custom-control-label:after{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;background:no-repeat 50%/50% 50%}.custom-radio.b-custom-control-sm,.input-group-sm .custom-radio{font-size:.875rem;line-height:1.5;padding-left:1.3125rem}.custom-radio.b-custom-control-sm .custom-control-label:before,.input-group-sm .custom-radio .custom-control-label:before{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;border-radius:50%}.custom-radio.b-custom-control-sm .custom-control-label:after,.input-group-sm .custom-radio .custom-control-label:after{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;background:no-repeat 50%/50% 50%}.b-rating{text-align:center}.b-rating.d-inline-flex{width:auto}.b-rating .b-rating-star,.b-rating .b-rating-value{padding:0 .25em}.b-rating .b-rating-value{min-width:2.5em}.b-rating .b-rating-star{display:inline-flex;justify-content:center;outline:0}.b-rating .b-rating-star .b-rating-icon{display:inline-flex;transition:all .15s ease-in-out}.b-rating.disabled,.b-rating:disabled{background-color:#e9ecef;color:#6c757d}.b-rating:not(.disabled):not(.readonly) .b-rating-star{cursor:pointer}.b-rating:not(.disabled):not(.readonly) .b-rating-star:hover .b-rating-icon,.b-rating:not(.disabled):not(.readonly):focus:not(:hover) .b-rating-star.focused .b-rating-icon{transform:scale(1.5)}.b-rating[dir=rtl] .b-rating-star-half{transform:scaleX(-1)}.b-form-spinbutton{text-align:center;overflow:hidden;background-image:none;padding:0}.b-form-spinbutton[dir=rtl]:not(.flex-column),[dir=rtl] .b-form-spinbutton:not(.flex-column){flex-direction:row-reverse}.b-form-spinbutton output{font-size:inherit;outline:0;border:0;background-color:transparent;width:auto;margin:0;padding:0 .25rem}.b-form-spinbutton output>bdi,.b-form-spinbutton output>div{display:block;min-width:2.25em;height:1.5em}.b-form-spinbutton.flex-column{height:auto;width:auto}.b-form-spinbutton.flex-column output{margin:0 .25rem;padding:.25rem 0}.b-form-spinbutton:not(.d-inline-flex):not(.flex-column){output-width:100%}.b-form-spinbutton.d-inline-flex:not(.flex-column){width:auto}.b-form-spinbutton .btn{line-height:1;box-shadow:none!important}.b-form-spinbutton .btn:disabled{pointer-events:none}.b-form-spinbutton .btn:hover:not(:disabled)>div>.b-icon{transform:scale(1.25)}.b-form-spinbutton.disabled,.b-form-spinbutton.readonly{background-color:#e9ecef}.b-form-spinbutton.disabled{pointer-events:none}.b-form-tags.focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.b-form-tags.focus.is-valid{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.b-form-tags.focus.is-invalid{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.b-form-tags.disabled{background-color:#e9ecef}.b-form-tags-list{margin-top:-.25rem}.b-form-tags-list .b-form-tag,.b-form-tags-list .b-form-tags-field{margin-top:.25rem}.b-form-tags-input{color:#495057}.b-form-tag{font-size:75%;font-weight:400;line-height:1.5;margin-right:.25rem}.b-form-tag.disabled{opacity:.75}.b-form-tag>button.b-form-tag-remove{color:inherit;font-size:125%;line-height:1;float:none;margin-left:.25rem}.form-control-lg .b-form-tag,.form-control-sm .b-form-tag{line-height:1.5}.media-aside{display:flex;margin-right:1rem}.media-aside-right{margin-right:0;margin-left:1rem}.modal-backdrop{opacity:.5}.b-pagination-pills .page-item .page-link{border-radius:50rem!important;margin-left:.25rem;line-height:1}.b-pagination-pills .page-item:first-child .page-link{margin-left:0}.popover.b-popover{display:block;opacity:1;outline:0}.popover.b-popover.fade:not(.show){opacity:0}.popover.b-popover.show{opacity:1}.b-popover-primary.popover{background-color:#cce5ff;border-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-primary.bs-popover-top>.arrow:before{border-top-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-primary.bs-popover-top>.arrow:after{border-top-color:#cce5ff}.b-popover-primary.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-primary.bs-popover-right>.arrow:before{border-right-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-primary.bs-popover-right>.arrow:after{border-right-color:#cce5ff}.b-popover-primary.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-primary.bs-popover-bottom>.arrow:before{border-bottom-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-primary.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-primary.bs-popover-bottom .popover-header:before,.b-popover-primary.bs-popover-bottom>.arrow:after{border-bottom-color:#bdddff}.b-popover-primary.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-primary.bs-popover-left>.arrow:before{border-left-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-primary.bs-popover-left>.arrow:after{border-left-color:#cce5ff}.b-popover-primary .popover-header{color:#212529;background-color:#bdddff;border-bottom-color:#a3d0ff}.b-popover-primary .popover-body{color:#004085}.b-popover-secondary.popover{background-color:#e2e3e5;border-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-secondary.bs-popover-top>.arrow:before{border-top-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-secondary.bs-popover-top>.arrow:after{border-top-color:#e2e3e5}.b-popover-secondary.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-secondary.bs-popover-right>.arrow:before{border-right-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-secondary.bs-popover-right>.arrow:after{border-right-color:#e2e3e5}.b-popover-secondary.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-secondary.bs-popover-bottom>.arrow:before{border-bottom-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-secondary.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-secondary.bs-popover-bottom .popover-header:before,.b-popover-secondary.bs-popover-bottom>.arrow:after{border-bottom-color:#dadbde}.b-popover-secondary.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-secondary.bs-popover-left>.arrow:before{border-left-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-secondary.bs-popover-left>.arrow:after{border-left-color:#e2e3e5}.b-popover-secondary .popover-header{color:#212529;background-color:#dadbde;border-bottom-color:#ccced2}.b-popover-secondary .popover-body{color:#383d41}.b-popover-success.popover{background-color:#d4edda;border-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-success.bs-popover-top>.arrow:before{border-top-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-success.bs-popover-top>.arrow:after{border-top-color:#d4edda}.b-popover-success.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-success.bs-popover-right>.arrow:before{border-right-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-success.bs-popover-right>.arrow:after{border-right-color:#d4edda}.b-popover-success.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-success.bs-popover-bottom>.arrow:before{border-bottom-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-success.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-success.bs-popover-bottom .popover-header:before,.b-popover-success.bs-popover-bottom>.arrow:after{border-bottom-color:#c9e8d1}.b-popover-success.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-success.bs-popover-left>.arrow:before{border-left-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-success.bs-popover-left>.arrow:after{border-left-color:#d4edda}.b-popover-success .popover-header{color:#212529;background-color:#c9e8d1;border-bottom-color:#b7e1c1}.b-popover-success .popover-body{color:#155724}.b-popover-info.popover{background-color:#d1ecf1;border-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-info.bs-popover-top>.arrow:before{border-top-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-info.bs-popover-top>.arrow:after{border-top-color:#d1ecf1}.b-popover-info.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-info.bs-popover-right>.arrow:before{border-right-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-info.bs-popover-right>.arrow:after{border-right-color:#d1ecf1}.b-popover-info.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-info.bs-popover-bottom>.arrow:before{border-bottom-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-info.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-info.bs-popover-bottom .popover-header:before,.b-popover-info.bs-popover-bottom>.arrow:after{border-bottom-color:#c5e7ed}.b-popover-info.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-info.bs-popover-left>.arrow:before{border-left-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-info.bs-popover-left>.arrow:after{border-left-color:#d1ecf1}.b-popover-info .popover-header{color:#212529;background-color:#c5e7ed;border-bottom-color:#b2dfe7}.b-popover-info .popover-body{color:#0c5460}.b-popover-warning.popover{background-color:#fff3cd;border-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-warning.bs-popover-top>.arrow:before{border-top-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-warning.bs-popover-top>.arrow:after{border-top-color:#fff3cd}.b-popover-warning.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-warning.bs-popover-right>.arrow:before{border-right-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-warning.bs-popover-right>.arrow:after{border-right-color:#fff3cd}.b-popover-warning.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-warning.bs-popover-bottom>.arrow:before{border-bottom-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-warning.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-warning.bs-popover-bottom .popover-header:before,.b-popover-warning.bs-popover-bottom>.arrow:after{border-bottom-color:#ffefbe}.b-popover-warning.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-warning.bs-popover-left>.arrow:before{border-left-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-warning.bs-popover-left>.arrow:after{border-left-color:#fff3cd}.b-popover-warning .popover-header{color:#212529;background-color:#ffefbe;border-bottom-color:#ffe9a4}.b-popover-warning .popover-body{color:#856404}.b-popover-danger.popover{background-color:#f8d7da;border-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-danger.bs-popover-top>.arrow:before{border-top-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-danger.bs-popover-top>.arrow:after{border-top-color:#f8d7da}.b-popover-danger.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-danger.bs-popover-right>.arrow:before{border-right-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-danger.bs-popover-right>.arrow:after{border-right-color:#f8d7da}.b-popover-danger.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-danger.bs-popover-bottom>.arrow:before{border-bottom-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-danger.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-danger.bs-popover-bottom .popover-header:before,.b-popover-danger.bs-popover-bottom>.arrow:after{border-bottom-color:#f6cace}.b-popover-danger.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-danger.bs-popover-left>.arrow:before{border-left-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-danger.bs-popover-left>.arrow:after{border-left-color:#f8d7da}.b-popover-danger .popover-header{color:#212529;background-color:#f6cace;border-bottom-color:#f2b4ba}.b-popover-danger .popover-body{color:#721c24}.b-popover-light.popover{background-color:#fefefe;border-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-light.bs-popover-top>.arrow:before{border-top-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-light.bs-popover-top>.arrow:after{border-top-color:#fefefe}.b-popover-light.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-light.bs-popover-right>.arrow:before{border-right-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-light.bs-popover-right>.arrow:after{border-right-color:#fefefe}.b-popover-light.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-light.bs-popover-bottom>.arrow:before{border-bottom-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-light.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-light.bs-popover-bottom .popover-header:before,.b-popover-light.bs-popover-bottom>.arrow:after{border-bottom-color:#f6f6f6}.b-popover-light.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-light.bs-popover-left>.arrow:before{border-left-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-light.bs-popover-left>.arrow:after{border-left-color:#fefefe}.b-popover-light .popover-header{color:#212529;background-color:#f6f6f6;border-bottom-color:#eaeaea}.b-popover-light .popover-body{color:#818182}.b-popover-dark.popover{background-color:#d6d8d9;border-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-dark.bs-popover-top>.arrow:before{border-top-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-dark.bs-popover-top>.arrow:after{border-top-color:#d6d8d9}.b-popover-dark.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-dark.bs-popover-right>.arrow:before{border-right-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-dark.bs-popover-right>.arrow:after{border-right-color:#d6d8d9}.b-popover-dark.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-dark.bs-popover-bottom>.arrow:before{border-bottom-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-dark.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-dark.bs-popover-bottom .popover-header:before,.b-popover-dark.bs-popover-bottom>.arrow:after{border-bottom-color:#ced0d2}.b-popover-dark.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-dark.bs-popover-left>.arrow:before{border-left-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-dark.bs-popover-left>.arrow:after{border-left-color:#d6d8d9}.b-popover-dark .popover-header{color:#212529;background-color:#ced0d2;border-bottom-color:#c1c4c5}.b-popover-dark .popover-body{color:#1b1e21}.b-sidebar-outer{position:fixed;top:0;left:0;right:0;height:0;overflow:visible;z-index:1035}.b-sidebar-backdrop{left:0;z-index:-1;width:100vw;opacity:.6}.b-sidebar,.b-sidebar-backdrop{position:fixed;top:0;height:100vh}.b-sidebar{display:flex;flex-direction:column;width:320px;max-width:100%;max-height:100%;margin:0;outline:0;transform:translateX(0)}.b-sidebar.slide{transition:transform .3s ease-in-out}@media (prefers-reduced-motion:reduce){.b-sidebar.slide{transition:none}}.b-sidebar:not(.b-sidebar-right){left:0;right:auto}.b-sidebar:not(.b-sidebar-right).slide:not(.show){transform:translateX(-100%)}.b-sidebar:not(.b-sidebar-right)>.b-sidebar-header .close{margin-left:auto}.b-sidebar.b-sidebar-right{left:auto;right:0}.b-sidebar.b-sidebar-right.slide:not(.show){transform:translateX(100%)}.b-sidebar.b-sidebar-right>.b-sidebar-header .close{margin-right:auto}.b-sidebar>.b-sidebar-header{font-size:1.5rem;padding:.5rem 1rem;display:flex;flex-direction:row;flex-grow:0;align-items:center}[dir=rtl] .b-sidebar>.b-sidebar-header{flex-direction:row-reverse}.b-sidebar>.b-sidebar-header .close{float:none;font-size:1.5rem}.b-sidebar>.b-sidebar-body{flex-grow:1;height:100%;overflow-y:auto}.b-sidebar>.b-sidebar-footer{flex-grow:0}.b-skeleton-wrapper{cursor:wait}.b-skeleton{position:relative;overflow:hidden;background-color:rgba(0,0,0,.12);cursor:wait;-webkit-mask-image:radial-gradient(#fff,#000);mask-image:radial-gradient(#fff,#000)}.b-skeleton:before{content:\" \"}.b-skeleton-text{height:1rem;margin-bottom:.25rem;border-radius:.25rem}.b-skeleton-button{width:75px;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem}.b-skeleton-avatar{width:2.5em;height:2.5em;border-radius:50%}.b-skeleton-input{height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;line-height:1.5;border:1px solid #ced4da;border-radius:.25rem}.b-skeleton-icon-wrapper svg{color:rgba(0,0,0,.12)}.b-skeleton-img{height:100%;width:100%}.b-skeleton-animate-wave:after{content:\"\";position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;background:linear-gradient(90deg,transparent,hsla(0,0%,100%,.4),transparent);animation:b-skeleton-animate-wave 1.75s linear infinite}@media (prefers-reduced-motion:reduce){.b-skeleton-animate-wave:after{background:none;animation:none}}@keyframes b-skeleton-animate-wave{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}.b-skeleton-animate-fade{animation:b-skeleton-animate-fade .875s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-skeleton-animate-fade{animation:none}}@keyframes b-skeleton-animate-fade{0%{opacity:1}to{opacity:.4}}.b-skeleton-animate-throb{animation:b-skeleton-animate-throb .875s ease-in infinite alternate}@media (prefers-reduced-motion:reduce){.b-skeleton-animate-throb{animation:none}}@keyframes b-skeleton-animate-throb{0%{transform:scale(1)}to{transform:scale(.975)}}.table.b-table.b-table-fixed{table-layout:fixed}.table.b-table.b-table-no-border-collapse{border-collapse:separate;border-spacing:0}.table.b-table[aria-busy=true]{opacity:.55}.table.b-table>tbody>tr.b-table-details>td{border-top:none!important}.table.b-table>caption{caption-side:bottom}.table.b-table.b-table-caption-top>caption{caption-side:top!important}.table.b-table>tbody>.table-active,.table.b-table>tbody>.table-active>td,.table.b-table>tbody>.table-active>th{background-color:rgba(0,0,0,.075)}.table.b-table.table-hover>tbody>tr.table-active:hover td,.table.b-table.table-hover>tbody>tr.table-active:hover th{color:#212529;background-image:linear-gradient(rgba(0,0,0,.075),rgba(0,0,0,.075));background-repeat:no-repeat}.table.b-table>tbody>.bg-active,.table.b-table>tbody>.bg-active>td,.table.b-table>tbody>.bg-active>th{background-color:hsla(0,0%,100%,.075)!important}.table.b-table.table-hover.table-dark>tbody>tr.bg-active:hover td,.table.b-table.table-hover.table-dark>tbody>tr.bg-active:hover th{color:#fff;background-image:linear-gradient(hsla(0,0%,100%,.075),hsla(0,0%,100%,.075));background-repeat:no-repeat}.b-table-sticky-header,.table-responsive,[class*=table-responsive-]{margin-bottom:1rem}.b-table-sticky-header>.table,.table-responsive>.table,[class*=table-responsive-]>.table{margin-bottom:0}.b-table-sticky-header{overflow-y:auto;max-height:300px}@media print{.b-table-sticky-header{overflow-y:visible!important;max-height:none!important}}@supports (position:sticky){.b-table-sticky-header>.table.b-table>thead>tr>th{position:sticky;top:0;z-index:2}.b-table-sticky-header>.table.b-table>tbody>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>tfoot>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>thead>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tbody>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tfoot>tr>.b-table-sticky-column,.table-responsive>.table.b-table>thead>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tbody>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tfoot>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>thead>tr>.b-table-sticky-column{position:sticky;left:0}.b-table-sticky-header>.table.b-table>thead>tr>.b-table-sticky-column,.table-responsive>.table.b-table>thead>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>thead>tr>.b-table-sticky-column{z-index:5}.b-table-sticky-header>.table.b-table>tbody>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>tfoot>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tbody>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tfoot>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tbody>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tfoot>tr>.b-table-sticky-column{z-index:2}.table.b-table>tbody>tr>.table-b-table-default,.table.b-table>tfoot>tr>.table-b-table-default,.table.b-table>thead>tr>.table-b-table-default{color:#212529;background-color:#fff}.table.b-table.table-dark>tbody>tr>.bg-b-table-default,.table.b-table.table-dark>tfoot>tr>.bg-b-table-default,.table.b-table.table-dark>thead>tr>.bg-b-table-default{color:#fff;background-color:#343a40}.table.b-table.table-striped>tbody>tr:nth-of-type(odd)>.table-b-table-default{background-image:linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05));background-repeat:no-repeat}.table.b-table.table-striped.table-dark>tbody>tr:nth-of-type(odd)>.bg-b-table-default{background-image:linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,.05));background-repeat:no-repeat}.table.b-table.table-hover>tbody>tr:hover>.table-b-table-default{color:#212529;background-image:linear-gradient(rgba(0,0,0,.075),rgba(0,0,0,.075));background-repeat:no-repeat}.table.b-table.table-hover.table-dark>tbody>tr:hover>.bg-b-table-default{color:#fff;background-image:linear-gradient(hsla(0,0%,100%,.075),hsla(0,0%,100%,.075));background-repeat:no-repeat}}.table.b-table>tfoot>tr>[aria-sort],.table.b-table>thead>tr>[aria-sort]{cursor:pointer;background-image:none;background-repeat:no-repeat;background-size:.65em 1em}.table.b-table>tfoot>tr>[aria-sort]:not(.b-table-sort-icon-left),.table.b-table>thead>tr>[aria-sort]:not(.b-table-sort-icon-left){background-position:right .375rem center;padding-right:calc(.75rem + .65em)}.table.b-table>tfoot>tr>[aria-sort].b-table-sort-icon-left,.table.b-table>thead>tr>[aria-sort].b-table-sort-icon-left{background-position:left .375rem center;padding-left:calc(.75rem + .65em)}.table.b-table>tfoot>tr>[aria-sort=none],.table.b-table>thead>tr>[aria-sort=none]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>[aria-sort=ascending],.table.b-table>thead>tr>[aria-sort=ascending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>[aria-sort=descending],.table.b-table>thead>tr>[aria-sort=descending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-dark>tfoot>tr>[aria-sort=none],.table.b-table.table-dark>thead>tr>[aria-sort=none],.table.b-table>.thead-dark>tr>[aria-sort=none]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-dark>tfoot>tr>[aria-sort=ascending],.table.b-table.table-dark>thead>tr>[aria-sort=ascending],.table.b-table>.thead-dark>tr>[aria-sort=ascending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-dark>tfoot>tr>[aria-sort=descending],.table.b-table.table-dark>thead>tr>[aria-sort=descending],.table.b-table>.thead-dark>tr>[aria-sort=descending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>.table-dark[aria-sort=none],.table.b-table>thead>tr>.table-dark[aria-sort=none]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>.table-dark[aria-sort=ascending],.table.b-table>thead>tr>.table-dark[aria-sort=ascending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>.table-dark[aria-sort=descending],.table.b-table>thead>tr>.table-dark[aria-sort=descending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-sm>tfoot>tr>[aria-sort]:not(.b-table-sort-icon-left),.table.b-table.table-sm>thead>tr>[aria-sort]:not(.b-table-sort-icon-left){background-position:right .15rem center;padding-right:calc(.3rem + .65em)}.table.b-table.table-sm>tfoot>tr>[aria-sort].b-table-sort-icon-left,.table.b-table.table-sm>thead>tr>[aria-sort].b-table-sort-icon-left{background-position:left .15rem center;padding-left:calc(.3rem + .65em)}.table.b-table.b-table-selectable:not(.b-table-selectable-no-click)>tbody>tr{cursor:pointer}.table.b-table.b-table-selectable:not(.b-table-selectable-no-click).b-table-selecting.b-table-select-range>tbody>tr{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media (max-width:575.98px){.table.b-table.b-table-stacked-sm{display:block;width:100%}.table.b-table.b-table-stacked-sm>caption,.table.b-table.b-table-stacked-sm>tbody,.table.b-table.b-table-stacked-sm>tbody>tr,.table.b-table.b-table-stacked-sm>tbody>tr>td,.table.b-table.b-table-stacked-sm>tbody>tr>th{display:block}.table.b-table.b-table-stacked-sm>tfoot,.table.b-table.b-table-stacked-sm>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-sm>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-sm>thead,.table.b-table.b-table-stacked-sm>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-sm>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-sm>caption{caption-side:top!important}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-sm>tbody>tr.bottom-row,.table.b-table.b-table-stacked-sm>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-sm>tbody>tr>:first-child,.table.b-table.b-table-stacked-sm>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-sm>tbody>tr>[rowspan]+th{border-top-width:3px}}@media (max-width:767.98px){.table.b-table.b-table-stacked-md{display:block;width:100%}.table.b-table.b-table-stacked-md>caption,.table.b-table.b-table-stacked-md>tbody,.table.b-table.b-table-stacked-md>tbody>tr,.table.b-table.b-table-stacked-md>tbody>tr>td,.table.b-table.b-table-stacked-md>tbody>tr>th{display:block}.table.b-table.b-table-stacked-md>tfoot,.table.b-table.b-table-stacked-md>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-md>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-md>thead,.table.b-table.b-table-stacked-md>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-md>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-md>caption{caption-side:top!important}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-md>tbody>tr.bottom-row,.table.b-table.b-table-stacked-md>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-md>tbody>tr>:first-child,.table.b-table.b-table-stacked-md>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-md>tbody>tr>[rowspan]+th{border-top-width:3px}}@media (max-width:991.98px){.table.b-table.b-table-stacked-lg{display:block;width:100%}.table.b-table.b-table-stacked-lg>caption,.table.b-table.b-table-stacked-lg>tbody,.table.b-table.b-table-stacked-lg>tbody>tr,.table.b-table.b-table-stacked-lg>tbody>tr>td,.table.b-table.b-table-stacked-lg>tbody>tr>th{display:block}.table.b-table.b-table-stacked-lg>tfoot,.table.b-table.b-table-stacked-lg>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-lg>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-lg>thead,.table.b-table.b-table-stacked-lg>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-lg>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-lg>caption{caption-side:top!important}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-lg>tbody>tr.bottom-row,.table.b-table.b-table-stacked-lg>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-lg>tbody>tr>:first-child,.table.b-table.b-table-stacked-lg>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-lg>tbody>tr>[rowspan]+th{border-top-width:3px}}@media (max-width:1199.98px){.table.b-table.b-table-stacked-xl{display:block;width:100%}.table.b-table.b-table-stacked-xl>caption,.table.b-table.b-table-stacked-xl>tbody,.table.b-table.b-table-stacked-xl>tbody>tr,.table.b-table.b-table-stacked-xl>tbody>tr>td,.table.b-table.b-table-stacked-xl>tbody>tr>th{display:block}.table.b-table.b-table-stacked-xl>tfoot,.table.b-table.b-table-stacked-xl>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-xl>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-xl>thead,.table.b-table.b-table-stacked-xl>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-xl>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-xl>caption{caption-side:top!important}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-xl>tbody>tr.bottom-row,.table.b-table.b-table-stacked-xl>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-xl>tbody>tr>:first-child,.table.b-table.b-table-stacked-xl>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-xl>tbody>tr>[rowspan]+th{border-top-width:3px}}.table.b-table.b-table-stacked{display:block;width:100%}.table.b-table.b-table-stacked>caption,.table.b-table.b-table-stacked>tbody,.table.b-table.b-table-stacked>tbody>tr,.table.b-table.b-table-stacked>tbody>tr>td,.table.b-table.b-table-stacked>tbody>tr>th{display:block}.table.b-table.b-table-stacked>tfoot,.table.b-table.b-table-stacked>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked>thead,.table.b-table.b-table-stacked>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked>caption{caption-side:top!important}.table.b-table.b-table-stacked>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked>tbody>tr.bottom-row,.table.b-table.b-table-stacked>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked>tbody>tr>:first-child,.table.b-table.b-table-stacked>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked>tbody>tr>[rowspan]+th{border-top-width:3px}.b-time{min-width:150px}.b-time[aria-disabled=true] output,.b-time[aria-readonly=true] output,.b-time output.disabled{background-color:#e9ecef;opacity:1}.b-time[aria-disabled=true] output{pointer-events:none}[dir=rtl] .b-time>.d-flex:not(.flex-column){flex-direction:row-reverse}.b-time .b-time-header{margin-bottom:.5rem}.b-time .b-time-header output{padding:.25rem;font-size:80%}.b-time .b-time-footer{margin-top:.5rem}.b-time .b-time-ampm{margin-left:.5rem}.b-toast{display:block;position:relative;max-width:350px;-webkit-backface-visibility:hidden;backface-visibility:hidden;background-clip:padding-box;z-index:1;border-radius:.25rem}.b-toast .toast{background-color:hsla(0,0%,100%,.85)}.b-toast:not(:last-child){margin-bottom:.75rem}.b-toast.b-toast-solid .toast{background-color:#fff}.b-toast .toast{opacity:1}.b-toast .toast.fade:not(.show){opacity:0}.b-toast .toast .toast-body{display:block}.b-toast-primary .toast{background-color:rgba(230,242,255,.85);border-color:rgba(184,218,255,.85);color:#004085}.b-toast-primary .toast .toast-header{color:#004085;background-color:rgba(204,229,255,.85);border-bottom-color:rgba(184,218,255,.85)}.b-toast-primary.b-toast-solid .toast{background-color:#e6f2ff}.b-toast-secondary .toast{background-color:rgba(239,240,241,.85);border-color:rgba(214,216,219,.85);color:#383d41}.b-toast-secondary .toast .toast-header{color:#383d41;background-color:rgba(226,227,229,.85);border-bottom-color:rgba(214,216,219,.85)}.b-toast-secondary.b-toast-solid .toast{background-color:#eff0f1}.b-toast-success .toast{background-color:rgba(230,245,233,.85);border-color:rgba(195,230,203,.85);color:#155724}.b-toast-success .toast .toast-header{color:#155724;background-color:rgba(212,237,218,.85);border-bottom-color:rgba(195,230,203,.85)}.b-toast-success.b-toast-solid .toast{background-color:#e6f5e9}.b-toast-info .toast{background-color:rgba(229,244,247,.85);border-color:rgba(190,229,235,.85);color:#0c5460}.b-toast-info .toast .toast-header{color:#0c5460;background-color:rgba(209,236,241,.85);border-bottom-color:rgba(190,229,235,.85)}.b-toast-info.b-toast-solid .toast{background-color:#e5f4f7}.b-toast-warning .toast{background-color:rgba(255,249,231,.85);border-color:rgba(255,238,186,.85);color:#856404}.b-toast-warning .toast .toast-header{color:#856404;background-color:rgba(255,243,205,.85);border-bottom-color:rgba(255,238,186,.85)}.b-toast-warning.b-toast-solid .toast{background-color:#fff9e7}.b-toast-danger .toast{background-color:rgba(252,237,238,.85);border-color:rgba(245,198,203,.85);color:#721c24}.b-toast-danger .toast .toast-header{color:#721c24;background-color:rgba(248,215,218,.85);border-bottom-color:rgba(245,198,203,.85)}.b-toast-danger.b-toast-solid .toast{background-color:#fcedee}.b-toast-light .toast{background-color:hsla(0,0%,100%,.85);border-color:rgba(253,253,254,.85);color:#818182}.b-toast-light .toast .toast-header{color:#818182;background-color:hsla(0,0%,99.6%,.85);border-bottom-color:rgba(253,253,254,.85)}.b-toast-light.b-toast-solid .toast{background-color:#fff}.b-toast-dark .toast{background-color:rgba(227,229,229,.85);border-color:rgba(198,200,202,.85);color:#1b1e21}.b-toast-dark .toast .toast-header{color:#1b1e21;background-color:rgba(214,216,217,.85);border-bottom-color:rgba(198,200,202,.85)}.b-toast-dark.b-toast-solid .toast{background-color:#e3e5e5}.b-toaster{z-index:1100}.b-toaster .b-toaster-slot{position:relative;display:block}.b-toaster .b-toaster-slot:empty{display:none!important}.b-toaster.b-toaster-bottom-center,.b-toaster.b-toaster-bottom-full,.b-toaster.b-toaster-bottom-left,.b-toaster.b-toaster-bottom-right,.b-toaster.b-toaster-top-center,.b-toaster.b-toaster-top-full,.b-toaster.b-toaster-top-left,.b-toaster.b-toaster-top-right{position:fixed;left:.5rem;right:.5rem;margin:0;padding:0;height:0;overflow:visible}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot,.b-toaster.b-toaster-top-right .b-toaster-slot{position:absolute;max-width:350px;width:100%;left:0;right:0;padding:0;margin:0}.b-toaster.b-toaster-bottom-full .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot .b-toast,.b-toaster.b-toaster-bottom-full .b-toaster-slot .toast,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot .b-toast,.b-toaster.b-toaster-top-full .b-toaster-slot .toast{width:100%;max-width:100%}.b-toaster.b-toaster-top-center,.b-toaster.b-toaster-top-full,.b-toaster.b-toaster-top-left,.b-toaster.b-toaster-top-right{top:0}.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot,.b-toaster.b-toaster-top-right .b-toaster-slot{top:.5rem}.b-toaster.b-toaster-bottom-center,.b-toaster.b-toaster-bottom-full,.b-toaster.b-toaster-bottom-left,.b-toaster.b-toaster-bottom-right{bottom:0}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot{bottom:.5rem}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-right .b-toaster-slot{margin-left:auto}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot{margin-right:auto}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-move,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-move,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-move,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-move{transition:transform .175s}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-to .toast.fade{transition-delay:.175s}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active{position:absolute;transition-delay:.175s}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active .toast.fade{transition-delay:0s}.tooltip.b-tooltip{display:block;opacity:.9;outline:0}.tooltip.b-tooltip.fade:not(.show){opacity:0}.tooltip.b-tooltip.show{opacity:.9}.tooltip.b-tooltip.noninteractive{pointer-events:none}.tooltip.b-tooltip .arrow{margin:0 .25rem}.tooltip.b-tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.bs-tooltip-left .arrow,.tooltip.b-tooltip.bs-tooltip-right .arrow{margin:.25rem 0}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-top .arrow:before{border-top-color:#007bff}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-right .arrow:before{border-right-color:#007bff}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-bottom .arrow:before{border-bottom-color:#007bff}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-left .arrow:before{border-left-color:#007bff}.tooltip.b-tooltip-primary .tooltip-inner{color:#fff;background-color:#007bff}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-top .arrow:before{border-top-color:#6c757d}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-right .arrow:before{border-right-color:#6c757d}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-bottom .arrow:before{border-bottom-color:#6c757d}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-left .arrow:before{border-left-color:#6c757d}.tooltip.b-tooltip-secondary .tooltip-inner{color:#fff;background-color:#6c757d}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-top .arrow:before{border-top-color:#28a745}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-right .arrow:before{border-right-color:#28a745}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-bottom .arrow:before{border-bottom-color:#28a745}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-left .arrow:before{border-left-color:#28a745}.tooltip.b-tooltip-success .tooltip-inner{color:#fff;background-color:#28a745}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-top .arrow:before{border-top-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-right .arrow:before{border-right-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-bottom .arrow:before{border-bottom-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-left .arrow:before{border-left-color:#17a2b8}.tooltip.b-tooltip-info .tooltip-inner{color:#fff;background-color:#17a2b8}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-top .arrow:before{border-top-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-right .arrow:before{border-right-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-bottom .arrow:before{border-bottom-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-left .arrow:before{border-left-color:#ffc107}.tooltip.b-tooltip-warning .tooltip-inner{color:#212529;background-color:#ffc107}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-top .arrow:before{border-top-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-right .arrow:before{border-right-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-bottom .arrow:before{border-bottom-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-left .arrow:before{border-left-color:#dc3545}.tooltip.b-tooltip-danger .tooltip-inner{color:#fff;background-color:#dc3545}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-top .arrow:before{border-top-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-right .arrow:before{border-right-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-bottom .arrow:before{border-bottom-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-left .arrow:before{border-left-color:#f8f9fa}.tooltip.b-tooltip-light .tooltip-inner{color:#212529;background-color:#f8f9fa}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-top .arrow:before{border-top-color:#343a40}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-right .arrow:before{border-right-color:#343a40}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-bottom .arrow:before{border-bottom-color:#343a40}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-left .arrow:before{border-left-color:#343a40}.tooltip.b-tooltip-dark .tooltip-inner{color:#fff;background-color:#343a40}.b-icon.bi{display:inline-block;overflow:visible;vertical-align:-.15em}.b-icon.b-icon-animation-cylon,.b-icon.b-iconstack .b-icon-animation-cylon>g{transform-origin:center;animation:b-icon-animation-cylon .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-cylon,.b-icon.b-iconstack .b-icon-animation-cylon>g{animation:none}}.b-icon.b-icon-animation-cylon-vertical,.b-icon.b-iconstack .b-icon-animation-cylon-vertical>g{transform-origin:center;animation:b-icon-animation-cylon-vertical .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-cylon-vertical,.b-icon.b-iconstack .b-icon-animation-cylon-vertical>g{animation:none}}.b-icon.b-icon-animation-fade,.b-icon.b-iconstack .b-icon-animation-fade>g{transform-origin:center;animation:b-icon-animation-fade .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-fade,.b-icon.b-iconstack .b-icon-animation-fade>g{animation:none}}.b-icon.b-icon-animation-spin,.b-icon.b-iconstack .b-icon-animation-spin>g{transform-origin:center;animation:b-icon-animation-spin 2s linear infinite normal}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin,.b-icon.b-iconstack .b-icon-animation-spin>g{animation:none}}.b-icon.b-icon-animation-spin-reverse,.b-icon.b-iconstack .b-icon-animation-spin-reverse>g{transform-origin:center;animation:b-icon-animation-spin 2s linear infinite reverse}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin-reverse,.b-icon.b-iconstack .b-icon-animation-spin-reverse>g{animation:none}}.b-icon.b-icon-animation-spin-pulse,.b-icon.b-iconstack .b-icon-animation-spin-pulse>g{transform-origin:center;animation:b-icon-animation-spin 1s steps(8) infinite normal}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin-pulse,.b-icon.b-iconstack .b-icon-animation-spin-pulse>g{animation:none}}.b-icon.b-icon-animation-spin-reverse-pulse,.b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse>g{transform-origin:center;animation:b-icon-animation-spin 1s steps(8) infinite reverse}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin-reverse-pulse,.b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse>g{animation:none}}.b-icon.b-icon-animation-throb,.b-icon.b-iconstack .b-icon-animation-throb>g{transform-origin:center;animation:b-icon-animation-throb .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-throb,.b-icon.b-iconstack .b-icon-animation-throb>g{animation:none}}@keyframes b-icon-animation-cylon{0%{transform:translateX(-25%)}to{transform:translateX(25%)}}@keyframes b-icon-animation-cylon-vertical{0%{transform:translateY(25%)}to{transform:translateY(-25%)}}@keyframes b-icon-animation-fade{0%{opacity:.1}to{opacity:1}}@keyframes b-icon-animation-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes b-icon-animation-throb{0%{opacity:.5;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.btn .b-icon.bi,.dropdown-item .b-icon.bi,.dropdown-toggle .b-icon.bi,.input-group-text .b-icon.bi,.nav-link .b-icon.bi{font-size:125%;vertical-align:text-bottom}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("2998b330", content, true)

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#__layout,#__layout>div,#__nuxt,body,html{font-family:\"Asap\",sans-serif;background-color:#202135;color:#fff;height:100%;--color1:#ccc;--color2:#ae85ed;--color3:#feb808;--color4:#0f0d0e;--color5:#091358;--color6:#40059b;--color7:#e4641c;--color8:rgba(38,153,67,0.925);--color1t:hsla(0,0%,80%,0.5);--color2t:rgba(174,133,237,0.5);--color3t:rgba(254,184,8,0.5);--color4t:rgba(15,13,14,0.5);--color5t:rgba(9,19,88,0.5);--color6t:rgba(64,5,155,0.5);--color7t:rgba(228,100,28,0.5);display:flex;flex-direction:column}.bg-color1{background:var(--color1)}.bg-color2{background:var(--color2)}.bg-color3{background:var(--color3)}.bg-color4{background:var(--color4)}.bg-color5{background:var(--color5)}.bg-color6{background:var(--color6)}.text-bg-color1{color:var(--color1)}.text-bg-color2{color:var(--color2)}.text-bg-color3{color:var(--color3)}.text-bg-color4{color:var(--color4)}.text-bg-color5{color:var(--color5)}.text-bg-color6{color:var(--color6)}.nav-bar{background-color:#202135;color:#fff}.form-control,.form-control:focus,.form-control:hover{color:var(--color1);background-color:var(--color4);border-color:var(--color4)}.form-control input[disabled]{background-color:var(--color6)}.item-menu{size:14px;font-family:\"Asap\",sans-serif;margin:0 10%}.item-menu,.item-menu:hover{text-decoration:none;color:#fff}.card-body{padding:1%}.card-body .card-img-left{height:200px}.material-icons,a{color:var(--color1)}hr{border-color:var(--color1)}.input-danger{border-color:red}.compra-item{width:100%;margin-bottom:20px;height:125px;max-height:125;background-color:var(--color4);border-radius:10px;box-shadow:4px 4px 4px rgba(0,0,0,.25)}.boton,.boton:active,.boton:focus,.boton:hover{background-color:var(--color6);border:var(--color6);color:#fff}.login input,.login input:focus,.login input:hover{background-color:#333c73}.selected{background-color:#40059b}.content-center{display:flex;align-content:center}.plyr,.plyr__controls{background-color:var(--color4);color:var(--color1)}.pill{border-radius:10px;padding:0 10px;margin:0 5px;border:none}.categoria{background-color:var(--color2t)}.bpm{background-color:var(--color3t)}.escala{background-color:var(--color1t)}.card-body{padding:10px;font-size:16px}.err-input{color:var(--color7);font-size:11px}.form-control-err{border-color:var(--color7)}.input_form input,textarea{padding:0;margin:0;width:100%;min-height:40px;max-width:none;color:#fff;background:rgba(37,62,139,.3)!important;border:none!important;border-bottom:1px solid rgba(0,0,0,.8)!important;border-radius:5px}.formulate-input-error{color:var(--color7);font-size:9px}.style-chooser .vs__search::-moz-placeholder{background:#212a4f!important;color:#fff;text-transform:lowercase;border:none!important;border-bottom:1px solid rgba(0,0,0,.8)!important;border-radius:5px;font-feature-settings:\"smcp\";font-variant:small-caps}.style-chooser .vs__dropdown-menu,.style-chooser .vs__dropdown-toggle,.style-chooser .vs__search::placeholder{background:#212a4f!important;color:#fff;text-transform:lowercase;border:none!important;border-bottom:1px solid rgba(0,0,0,.8)!important;border-radius:5px;font-feature-settings:\"smcp\";font-variant:small-caps}.style-chooser .vs__dropdown-toggle,.style-chooser .vs__selected{color:#fff;background-color:var(--color2)}@media (max-width:425px){.card-img-left{display:none}.instrumental{width:95%;margin:1%}.login{width:90%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("ba2b540c", content, true)

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(49);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(50);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(51);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(52);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(53);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"Material Icons\";font-style:normal;font-weight:400;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:local(\"Material Icons\"),local(\"MaterialIcons-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}.material-icons{font-family:\"Material Icons\";font-weight:400;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\"}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MaterialIcons-Regular.4674f8d.eot";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MaterialIcons-Regular.cff684e.woff2";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MaterialIcons-Regular.83bebaf.woff";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MaterialIcons-Regular.5e7382c.ttf";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("1ff4c59c", content, true)

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--vs-colors--lightest:rgba(60,60,60,0.26);--vs-colors--light:rgba(60,60,60,0.5);--vs-colors--dark:#333;--vs-colors--darkest:rgba(0,0,0,0.15);--vs-search-input-color:inherit;--vs-search-input-bg:#fff;--vs-search-input-placeholder-color:inherit;--vs-font-size:1rem;--vs-line-height:1.4;--vs-state-disabled-bg:#f8f8f8;--vs-state-disabled-color:var(--vs-colors--light);--vs-state-disabled-controls-color:var(--vs-colors--light);--vs-state-disabled-cursor:not-allowed;--vs-border-color:var(--vs-colors--lightest);--vs-border-width:1px;--vs-border-style:solid;--vs-border-radius:4px;--vs-actions-padding:4px 6px 0 3px;--vs-controls-color:var(--vs-colors--light);--vs-controls-size:1;--vs-controls--deselect-text-shadow:0 1px 0 #fff;--vs-selected-bg:#f0f0f0;--vs-selected-color:var(--vs-colors--dark);--vs-selected-border-color:var(--vs-border-color);--vs-selected-border-style:var(--vs-border-style);--vs-selected-border-width:var(--vs-border-width);--vs-dropdown-bg:#fff;--vs-dropdown-color:inherit;--vs-dropdown-z-index:1000;--vs-dropdown-min-width:160px;--vs-dropdown-max-height:350px;--vs-dropdown-box-shadow:0px 3px 6px 0px var(--vs-colors--darkest);--vs-dropdown-option-bg:#000;--vs-dropdown-option-color:var(--vs-dropdown-color);--vs-dropdown-option-padding:3px 20px;--vs-dropdown-option--active-bg:#5897fb;--vs-dropdown-option--active-color:#fff;--vs-dropdown-option--deselect-bg:#fb5858;--vs-dropdown-option--deselect-color:#fff;--vs-transition-timing-function:cubic-bezier(1,-0.115,0.975,0.855);--vs-transition-duration:150ms}.v-select{font-family:inherit;position:relative}.v-select,.v-select *{box-sizing:border-box}:root{--vs-transition-timing-function:cubic-bezier(1,0.5,0.8,1);--vs-transition-duration:0.15s}@keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.vs__fade-enter-active,.vs__fade-leave-active{pointer-events:none;transition:opacity .15s cubic-bezier(1,.5,.8,1);transition:opacity var(--vs-transition-duration) var(--vs-transition-timing-function)}.vs__fade-enter,.vs__fade-leave-to{opacity:0}:root{--vs-disabled-bg:var(--vs-state-disabled-bg);--vs-disabled-color:var(--vs-state-disabled-color);--vs-disabled-cursor:var(--vs-state-disabled-cursor)}.vs--disabled .vs__clear,.vs--disabled .vs__dropdown-toggle,.vs--disabled .vs__open-indicator,.vs--disabled .vs__search,.vs--disabled .vs__selected{background-color:#f8f8f8;background-color:var(--vs-disabled-bg);cursor:not-allowed;cursor:var(--vs-disabled-cursor)}.v-select[dir=rtl] .vs__actions{padding:0 3px 0 6px}.v-select[dir=rtl] .vs__clear{margin-left:6px;margin-right:0}.v-select[dir=rtl] .vs__deselect{margin-left:0;margin-right:2px}.v-select[dir=rtl] .vs__dropdown-menu{text-align:right}.vs__dropdown-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#fff;background:var(--vs-search-input-bg);border:1px solid rgba(60,60,60,.26);border:var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);border-radius:4px;border-radius:var(--vs-border-radius);display:flex;padding:0 0 4px;white-space:normal}.vs__selected-options{display:flex;flex-basis:100%;flex-grow:1;flex-wrap:wrap;padding:0 2px;position:relative}.vs__actions{align-items:center;display:flex;padding:4px 6px 0 3px;padding:var(--vs-actions-padding)}.vs--searchable .vs__dropdown-toggle{cursor:text}.vs--unsearchable .vs__dropdown-toggle{cursor:pointer}.vs--open .vs__dropdown-toggle{border-bottom-color:transparent;border-bottom-left-radius:0;border-bottom-right-radius:0}.vs__open-indicator{fill:rgba(60,60,60,.5);fill:var(--vs-controls-color);transform:scale(1);transform:scale(var(--vs-controls-size));transition:transform .15s cubic-bezier(1,.5,.8,1);transition:transform var(--vs-transition-duration) var(--vs-transition-timing-function);transition-timing-function:cubic-bezier(1,.5,.8,1);transition-timing-function:var(--vs-transition-timing-function)}.vs--open .vs__open-indicator{transform:rotate(180deg) scale(1);transform:rotate(180deg) scale(var(--vs-controls-size))}.vs--loading .vs__open-indicator{opacity:0}.vs__clear{fill:rgba(60,60,60,.5);fill:var(--vs-controls-color);background-color:transparent;border:0;cursor:pointer;margin-right:8px;padding:0}.vs__dropdown-menu{background:#fff;background:var(--vs-dropdown-bg);border:1px solid rgba(60,60,60,.26);border:var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);border-radius:0 0 4px 4px;border-radius:0 0 var(--vs-border-radius) var(--vs-border-radius);border-top-style:none;box-shadow:0 3px 6px 0 rgba(0,0,0,.15);box-shadow:var(--vs-dropdown-box-shadow);box-sizing:border-box;color:inherit;color:var(--vs-dropdown-color);display:block;left:0;list-style:none;margin:0;max-height:350px;max-height:var(--vs-dropdown-max-height);min-width:160px;min-width:var(--vs-dropdown-min-width);overflow-y:auto;padding:5px 0;position:absolute;text-align:left;top:calc(100% - 1px);top:calc(100% - var(--vs-border-width));width:100%;z-index:1000;z-index:var(--vs-dropdown-z-index)}.vs__no-options{text-align:center}.vs__dropdown-option{clear:both;color:inherit;color:var(--vs-dropdown-option-color);cursor:pointer;display:block;line-height:1.42857143;padding:3px 20px;padding:var(--vs-dropdown-option-padding);white-space:nowrap}.vs__dropdown-option--highlight{background:#5897fb;background:var(--vs-dropdown-option--active-bg);color:#fff;color:var(--vs-dropdown-option--active-color)}.vs__dropdown-option--deselect{background:#fb5858;background:var(--vs-dropdown-option--deselect-bg);color:#fff;color:var(--vs-dropdown-option--deselect-color)}.vs__dropdown-option--disabled{background:#f8f8f8;background:var(--vs-state-disabled-bg);color:rgba(60,60,60,.5);color:var(--vs-state-disabled-color);cursor:not-allowed;cursor:var(--vs-state-disabled-cursor)}.vs__selected{align-items:center;background-color:#f0f0f0;background-color:var(--vs-selected-bg);border:1px solid rgba(60,60,60,.26);border:var(--vs-selected-border-width) var(--vs-selected-border-style) var(--vs-selected-border-color);border-radius:4px;border-radius:var(--vs-border-radius);color:#333;color:var(--vs-selected-color);display:flex;line-height:1.4;line-height:var(--vs-line-height);margin:4px 2px 0;padding:0 .25em;z-index:0}.vs__deselect{fill:rgba(60,60,60,.5);fill:var(--vs-controls-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;cursor:pointer;display:inline-flex;margin-left:4px;padding:0;text-shadow:0 1px 0 #fff;text-shadow:var(--vs-controls--deselect-text-shadow)}.vs--single .vs__selected{background-color:transparent;border-color:transparent}.vs--single.vs--loading .vs__selected,.vs--single.vs--open .vs__selected{opacity:.4;position:absolute}.vs--single.vs--searching .vs__selected{display:none}.vs__search::-webkit-search-cancel-button{display:none}.vs__search::-ms-clear,.vs__search::-webkit-search-decoration,.vs__search::-webkit-search-results-button,.vs__search::-webkit-search-results-decoration{display:none}.vs__search,.vs__search:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:1px solid transparent;border-left:none;box-shadow:none;color:inherit;color:var(--vs-search-input-color);flex-grow:1;font-size:1rem;font-size:var(--vs-font-size);line-height:1.4;line-height:var(--vs-line-height);margin:4px 0 0;max-width:100%;outline:none;padding:0 7px;width:0;z-index:1}.vs__search::-moz-placeholder{color:inherit;color:var(--vs-search-input-placeholder-color)}.vs__search::placeholder{color:inherit;color:var(--vs-search-input-placeholder-color)}.vs--unsearchable .vs__search{opacity:1}.vs--unsearchable:not(.vs--disabled) .vs__search{cursor:pointer}.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search{opacity:.2}.vs__spinner{align-self:center;animation:vSelectSpinner 1.1s linear infinite;border:.9em solid hsla(0,0%,39%,.1);border-left-color:rgba(60,60,60,.45);font-size:5px;opacity:0;overflow:hidden;text-indent:-9999em;transform:translateZ(0) scale(var(--vs-controls-size));transform:translateZ(0) scale(var(--vs-controls--spinner-size,var(--vs-controls-size)));transition:opacity .1s}.vs__spinner,.vs__spinner:after{border-radius:50%;height:5em;transform:scale(var(--vs-controls-size));transform:scale(var(--vs-controls--spinner-size,var(--vs-controls-size)));width:5em}.vs--loading .vs__spinner{opacity:1}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_id_0e0a5680_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_id_0e0a5680_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_id_0e0a5680_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_id_0e0a5680_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_id_0e0a5680_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".navbar{height:70px;background:#202135;padding-bottom:20px;margin-bottom:20px}a:hover{text-decoration:none;color:#fff}.brand{position:absolute;padding-left:20px;float:left;line-height:70px;text-transform:uppercase;font-size:1.4em}.brand a,.brand a:visited{color:#0c0c0c;text-decoration:none}nav{float:right}nav ul{list-style:none;margin:0;padding:0}nav ul li{float:left;position:relative}nav ul li a,nav ul li button{display:block;padding:10px 20px 0;line-height:50px;color:#fff;text-decoration:none}nav ul li a:before{transition:.3s;height:5px;content:\"\";position:absolute;background-color:#7c6cd9;width:0;bottom:0}nav ul li a:hover:before{width:70%}nav ul li a:not(:only-child):after{padding-left:4px;content:\" ▾\"}nav ul li ul li{min-width:190px}nav ul li ul li a{padding:15px;line-height:20px}.nav-dropdown{z-index:1;box-shadow:0 3px 12px rgba(0,0,0,.15)}.nav-dropdown,.nav-mobile{display:none;position:absolute}.nav-mobile{top:0;right:0;background:#202135;height:70px;width:70px}@media only screen and (max-width:799px){.nav-mobile{display:block}nav{width:100%;padding:70px 0 15px}nav ul{display:none}nav ul li{float:none;margin-bottom:5px}nav ul li a{padding:15px;line-height:20px}nav ul li a:hover:before{width:20%}nav ul li ul li a{padding-left:30px}.nav-dropdown{position:static}.search-bar{margin-top:5px}#nav-collapse{padding:5px 20px;background-color:#3b4148;z-index:1000;animation:fadeInUp .6s .2s;animation-fill-mode:both}}#nav-toggle{position:absolute;left:18px;top:22px;cursor:pointer;padding:10px 35px 16px 0;animation:fadeInUp .6s .2s;animation-fill-mode:both}#nav-toggle span,#nav-toggle span:after,#nav-toggle span:before{cursor:pointer;border-radius:1px;height:5px;width:35px;background:#fff;position:absolute;display:block;content:\"\";transition:all .3s ease-in-out}#nav-toggle span:before{top:-10px}#nav-toggle span:after{bottom:-10px}#nav-toggle.active span{background-color:transparent;animation:fadeInUp .6s .2s;animation-fill-mode:both}#nav-toggle.active span:after,#nav-toggle.active span:before{top:0}#nav-toggle.active span:before{transform:rotate(45deg)}#nav-toggle.active span:after{transform:rotate(-45deg)}@media screen and (min-width:799px){.nav-list{display:block!important}#nav-collapse{padding:5px 20px;z-index:1000;animation:fadeInUp .6s .2s;animation-fill-mode:both}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_192d35b8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_192d35b8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_192d35b8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_192d35b8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_192d35b8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".logotipo{margin-left:25%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_382c8861_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_382c8861_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_382c8861_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_382c8861_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_382c8861_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{font-family:\"Source Sans Pro\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  usuario: null
});
const mutations = {
  login(state, user) {
    state.usuario = user;
  },
  logout(state) {
    state.usuario = null;
  },
  token() {
    return state.usuario.token;
  },
  nombre(nombre) {
    state.usuario.nombreusuario = nombre;
  },
  email(email) {
    state.usuario.email = email;
  }
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("2840f874", content, true)

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--color:#fafafa;--background-color:#050505;--link-color:#00bcd4;--main-headline-color:#e91e63;--accent-background-color:#00bcd4;--accent-color:#050505}.formulate-input{margin-bottom:1.5em;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol}.formulate-input .formulate-input-label{display:block;line-height:1.5;font-size:.9em;font-weight:600;margin-bottom:.1em}.formulate-input .formulate-input-label--before+.formulate-input-help--before{margin-top:-.25em;margin-bottom:.75em}.formulate-input .formulate-input-element{max-width:20em;margin-bottom:.1em}.formulate-input .formulate-input-help{color:#6d6d6d;font-size:.7em;font-weight:400;line-height:1.5;margin-bottom:.25em}.formulate-input .formulate-input-errors{list-style-type:none;padding:0;margin:0}.formulate-input .formulate-file-upload-error,.formulate-input .formulate-input-error{color:#960505;font-size:.8em;font-weight:300;line-height:1.5;margin-bottom:.25em}.formulate-input:last-child{margin-bottom:0}.formulate-input[data-classification=text] input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.3em;border:1px solid #cecece;box-sizing:border-box;background-color:transparent;font-size:.9em;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;padding:.75em;display:block;width:100%;font-weight:400;line-height:1.2em;margin:0}.formulate-input[data-classification=text] input::-moz-placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=text] input::placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=text] input:focus{outline:0;border:1px solid #41b883}.formulate-input[data-classification=text] .formulate-input-element--date input,.formulate-input[data-classification=text] .formulate-input-element--datetime-local input,.formulate-input[data-classification=text] .formulate-input-element--month input,.formulate-input[data-classification=text] .formulate-input-element--week input{min-height:2.2em}.formulate-input[data-classification=text] .formulate-input-element--search{position:relative}.formulate-input[data-classification=text] .formulate-input-element--search:before{content:\"\";width:2em;height:100%;position:absolute;left:0;top:0;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 72.99 72.9\"><path fill=\"%236d6d6d\" d=\"M71.77,66,53.87,48.1A29.94,29.94,0,1,0,30,60a29.52,29.52,0,0,0,18.1-6.1l18,17.8A4,4,0,0,0,69,72.9a4.18,4.18,0,0,0,2.9-1.2A4.09,4.09,0,0,0,71.77,66ZM30.07,51.9a21.9,21.9,0,1,1,15.5-37.4A21.37,21.37,0,0,1,52,30a22,22,0,0,1-6.4,15.5A21.54,21.54,0,0,1,30.07,51.9Z\"/></svg>');background-size:1em 1em;background-repeat:no-repeat;background-position:50%;pointer-events:none}.formulate-input[data-classification=text] .formulate-input-element--search input{padding-left:2em}.formulate-input[data-classification=text] input[type=color]{height:1.1em;box-sizing:content-box;width:auto;min-width:5em}.formulate-input[data-classification=text] input[type=color]::-webkit-color-swatch-wrapper{padding:0 0 0 1.5em;display:flex;align-items:center;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 79.17 79.17\"><path fill=\"%236d6d6d\" d=\"M40.8,22.92c-3.4-3.4-4.76-8.44-1-12.24s8.84-2.44,12.24,1c5-5,10.69-13.33,18.81-11.31a11,11,0,0,1,7.62,14.34c-1.26,3.45-4.63,6.06-7.16,8.59-.92.93-3,2.26-3.46,3.46-.42,1,1.82,2.63,2.36,4a8,8,0,0,1-12.42,9.19c-.21-.16-1.35-1.51-1.59-1.51s-.83.83-1,1L49.71,44.9,32.43,62.18c-3.37,3.38-6.6,7.14-10.26,10.21a11,11,0,0,1-4.48,2.28c-1.25.3-3.11-.22-4.18.18-1.28.48-2.42,2.65-3.68,3.4-6.05,3.61-12.64-4-8.46-9.57.73-1,2.53-1.92,3-3a14.46,14.46,0,0,0-.09-2.52,10.75,10.75,0,0,1,3.14-6.77c.92-1,1.93-1.93,2.89-2.9Zm4.4-1.5c4.19,4,8.24,8.24,12.36,12.36,2.06,2.06,5,5.59,8,2.61,4.65-4.62-5-6.8-2.42-10.78C66.3,20.7,76.4,16.48,74.84,9.45,73.62,4,67.12,2.78,63.29,6.32c-2.55,2.36-4.93,4.94-7.39,7.4-.79.78-1.8,2.28-2.88,2.73-2.14.88-3.4-1.62-4.79-2.77-2.58-2.14-6.89-.82-6.53,3C41.89,18.68,43.87,20.09,45.2,21.42Zm-1.45,4.44L27.82,41.79C22,47.57,15.89,53.14,10.41,59.2a8.23,8.23,0,0,0-1.44,2c-.93,2,.25,4.14-.5,6S4.92,69.94,4.3,72a2.34,2.34,0,0,0,2.56,3c1.11-.17,2-1.33,2.71-2.07a11.17,11.17,0,0,1,2.08-2c1.68-.94,4,.17,5.93-.57C20,69.41,22,66.73,23.76,65L34.42,54.3,53.3,35.42Z\"/></svg>');background-repeat:no-repeat;background-size:.9em .9em;background-position:left .1em}.formulate-input[data-classification=text] input[type=color]::-webkit-color-swatch{display:block;height:1em;border-radius:.2em;border:0;flex:auto}.formulate-input[data-classification=text] input[type=color]::-moz-color-swatch{display:block;height:1em;border-radius:.2em;border:0;flex:auto}.formulate-input[data-classification=slider] .formulate-input-element--range{display:flex;align-items:center}.formulate-input[data-classification=slider] .formulate-input-element-range-value{font-size:.9em;line-height:1;margin-left:.5em;background-color:#efefef;padding:.25em .3em;border-radius:.25em;color:#6d6d6d;font-feature-settings:\"tnum\";font-variant-numeric:tabular-nums}.formulate-input[data-classification=slider] input{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;font-size:1em;padding:.5em 0}.formulate-input[data-classification=slider] input:focus{outline:0}.formulate-input[data-classification=slider] input::-webkit-slider-thumb{cursor:pointer;-webkit-appearance:none;appearance:none;width:1em;height:1em;border-radius:1em;border:0;background-color:#41b883;margin-top:calc(-.5em + 2px)}.formulate-input[data-classification=slider] input::-moz-range-thumb{cursor:pointer;-moz-appearance:none;appearance:none;width:1em;height:1em;border-radius:1em;border:0;background-color:#41b883;margin-top:calc(-.5em + 2px)}.formulate-input[data-classification=slider] input::-ms-thumb{cursor:pointer;appearance:none;width:1em;height:1em;border-radius:1em;border:0;background-color:#41b883;margin-top:calc(-.5em + 2px)}.formulate-input[data-classification=slider] input::-webkit-slider-runnable-track{-webkit-appearance:none;appearance:none;width:100%;height:4px;background-color:#efefef;border-radius:3px;margin:0;padding:0}.formulate-input[data-classification=slider] input::-moz-range-track{-moz-appearance:none;appearance:none;width:100%;height:4px;background-color:#efefef;border-radius:3px;margin:0;padding:0}.formulate-input[data-classification=textarea] textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.3em;border:1px solid #cecece;box-sizing:border-box;background-color:transparent;font-size:.9em;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;padding:.75em;display:block;width:100%;font-weight:400;line-height:1.2em;margin:0}.formulate-input[data-classification=textarea] textarea::-moz-placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=textarea] textarea::placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=textarea] textarea:focus{outline:0;border:1px solid #41b883}.formulate-input[data-classification=button] button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.3em;box-sizing:border-box;background-color:transparent;font-size:.9em;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;padding:.75em;display:block;width:100%;font-weight:400;line-height:1.2em;margin:0;border:1px solid #41b883;background-color:#41b883;color:#fff;min-width:0;width:auto;font-weight:700;cursor:pointer;display:inline-flex;align-items:center}.formulate-input[data-classification=button] button::-moz-placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=button] button::placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=button] button:focus{outline:0;border:1px solid #41b883}.formulate-input[data-classification=button] button[disabled],.formulate-input[data-classification=button] button[disabled]:active{background-color:#cecece;border-color:#cecece}.formulate-input[data-classification=button] button[data-ghost]{color:#41b883;background-color:transparent;border-color:currentColor}.formulate-input[data-classification=button] button[data-minor]{font-size:.75em;display:inline-block}.formulate-input[data-classification=button] button[data-danger]{background-color:#960505;border-color:#960505}.formulate-input[data-classification=button] button[data-danger][data-ghost]{color:#960505;background-color:transparent}.formulate-input[data-classification=button] button:active{background-color:#64c89b;border-color:#64c89b}.formulate-input[data-classification=select] .formulate-input-element{position:relative}.formulate-input[data-classification=select] .formulate-input-element:before{content:\"\";width:0;height:0;border-color:#cecece transparent transparent;border-style:solid;border-width:.3em .3em 0;top:50%;margin-top:-.1em;right:1em;position:absolute}.formulate-input[data-classification=select] .formulate-input-element[data-multiple]:before{display:none}.formulate-input[data-classification=select] select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.3em;border:1px solid #cecece;box-sizing:border-box;background-color:transparent;font-size:.9em;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;display:block;width:100%;font-weight:400;line-height:1.2em;margin:0;padding:.75em 2em .75em .75em}.formulate-input[data-classification=select] select::-moz-placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=select] select::placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=select] select:focus{outline:0;border:1px solid #41b883}.formulate-input[data-classification=select] select option{color:#000}.formulate-input[data-classification=select] select option:disabled{color:#a8a8a8}.formulate-input[data-classification=select] select[multiple]{padding:0;overflow-y:auto}.formulate-input[data-classification=select] select[multiple] option{padding:.75em}.formulate-input[data-classification=select] select[data-placeholder-selected]{color:#a8a8a8}.formulate-input[data-classification=box] .formulate-input-wrapper{display:flex;align-items:center}.formulate-input[data-classification=box] .formulate-input-element{overflow:hidden;display:flex;align-items:center}.formulate-input[data-classification=box] .formulate-input-element input{position:absolute;left:-999px;opacity:0;pointer-events:none}.formulate-input[data-classification=box] .formulate-input-element-decorator{display:block;width:1em;height:1em;border-radius:.25em;border:1px solid #cecece;position:relative}.formulate-input[data-classification=box] .formulate-input-element-decorator:before{content:\"\";display:block;background-size:contain;background-position:100%;width:calc(100% - .125em);height:calc(100% - .125em);box-sizing:border-box;position:absolute;top:.0625em;left:.0625em}.formulate-input[data-classification=box] .formulate-input-element[data-type=radio] .formulate-input-element-decorator{border-radius:1em}.formulate-input[data-classification=box] .formulate-input-element[data-type=radio] .formulate-input-element-decorator:before{border-radius:1em;width:calc(100% - .5em);height:calc(100% - .5em);top:.25em;left:.25em}.formulate-input[data-classification=box] .formulate-input-element input[type=checkbox]:checked~.formulate-input-element-decorator{border-color:#41b883}.formulate-input[data-classification=box] .formulate-input-element input[type=checkbox]:checked~.formulate-input-element-decorator:before{background-color:#41b883;-webkit-mask-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path d=\"M8.76,56.2c-6.38-6.34,3.26-16,9.64-9.69L38,65.88,80.56,23.29c6.38-6.38,16.07,3.32,9.69,9.69L42.84,80.37a6.83,6.83,0,0,1-9.65,0Z\"/></svg>');mask-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path d=\"M8.76,56.2c-6.38-6.34,3.26-16,9.64-9.69L38,65.88,80.56,23.29c6.38-6.38,16.07,3.32,9.69,9.69L42.84,80.37a6.83,6.83,0,0,1-9.65,0Z\"/></svg>')}.formulate-input[data-classification=box] .formulate-input-element input[type=radio]:checked~.formulate-input-element-decorator{border-color:#41b883}.formulate-input[data-classification=box] .formulate-input-element input[type=radio]:checked~.formulate-input-element-decorator:before{background-color:#41b883}.formulate-input[data-classification=box] .formulate-input-element input:focus~.formulate-input-element-decorator{border-color:#41b883}.formulate-input[data-classification=box] .formulate-input-label--after{margin-left:.5em}.formulate-input[data-classification=box] .formulate-input-label--before{margin-right:.5em}.formulate-input[data-classification=group] .formulate-input-group-item,.formulate-input[data-classification=group]>.formulate-input-wrapper>.formulate-input-label{margin-bottom:.5em}.formulate-input[data-classification=group] [data-is-repeatable]{padding:1em;border:1px solid #efefef;border-radius:.3em}.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-grouping{margin:-1em -1em 0}.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable{padding:1em 3em 1em 1em;border-bottom:1px solid #efefef;position:relative}.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove{position:absolute;display:block;top:calc(50% - .15em);width:1.3em;height:1.3em;background-color:#cecece;right:.85em;border-radius:1.3em;cursor:pointer;transition:background-color .2s;overflow:hidden;text-indent:-1000px}.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove[data-disabled]{opacity:.2;pointer-events:none}.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:after,.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:before{content:\"\";position:absolute;top:calc(50% - .1em);left:.325em;display:block;width:.65em;height:.2em;background-color:#fff;transform-origin:center center;transition:transform .25s}@media(pointer:fine){.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:hover{background-color:#dc2c2c}.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:hover:after,.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:hover:before{height:.2em;width:.75em;left:.25em;top:calc(50% - .075em)}.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:hover:after{transform:rotate(45deg)}.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:hover:before{transform:rotate(-45deg)}}.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable:last-child{margin-bottom:1em}.formulate-input[data-classification=file] .formulate-input-upload-area{width:100%;position:relative;padding:2em 0}.formulate-input[data-classification=file] .formulate-input-upload-area input{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;opacity:0;position:absolute;left:0;right:0;bottom:0;top:0;width:100%;height:100%;z-index:5}.formulate-input[data-classification=file] .formulate-input-upload-area[data-has-files]{padding:0}.formulate-input[data-classification=file] .formulate-input-upload-area[data-has-files] input{display:none}.formulate-input[data-classification=file] .formulate-input-upload-area-mask{border-radius:.4em;position:absolute;pointer-events:none;display:flex;justify-content:center;align-items:center;left:0;right:0;top:0;bottom:0;border:2px dashed #a8a8a8;z-index:2}.formulate-input[data-classification=file] .formulate-input-upload-area-mask:before{content:\"\";background-color:#a8a8a8;-webkit-mask-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 58 58\"><path d=\"M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z\"/><polygon points=\"27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22\"/></svg>');mask-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 58 58\"><path d=\"M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z\"/><polygon points=\"27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22\"/></svg>');-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;width:2em;height:2em;position:absolute;pointer-events:none}.formulate-input[data-classification=file] .formulate-input-upload-area input:focus~.formulate-input-upload-area-mask,.formulate-input[data-classification=file] .formulate-input-upload-area input:hover~.formulate-input-upload-area-mask,.formulate-input[data-classification=file] .formulate-input-upload-area input[data-is-drag-hover]~.formulate-input-upload-area-mask{border-color:#41b883}.formulate-input[data-classification=file] .formulate-input-upload-area input:focus~.formulate-input-upload-area-mask:before,.formulate-input[data-classification=file] .formulate-input-upload-area input:hover~.formulate-input-upload-area-mask:before,.formulate-input[data-classification=file] .formulate-input-upload-area input[data-is-drag-hover]~.formulate-input-upload-area-mask:before{background-color:#41b883}.formulate-input[data-classification=file] .formulate-files{list-style-type:none;margin:0;padding:0}.formulate-input[data-classification=file] .formulate-files .formulate-file-add{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;min-width:75px;border:1px solid #41b883;color:#41b883;padding:5px;border-radius:5px;text-align:center;position:relative;font-size:13px;background-color:transparent;cursor:pointer;margin:.5em 0}.formulate-input[data-classification=file] .formulate-files .formulate-file-add input{position:absolute;display:block;cursor:pointer}.formulate-input[data-classification=file] .formulate-files .formulate-file-add input::-webkit-file-upload-button{display:none}.formulate-input[data-classification=file] .formulate-files .formulate-file-progress{background-color:#cecece;height:.3em;border-radius:1.25em;width:5em;overflow:hidden;position:relative;flex:0 0 5em;right:.75em;transition:height .25s,width .25s,flex-basis .25s;z-index:2}.formulate-input[data-classification=file] .formulate-files .formulate-file-progress:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;display:block;opacity:0;transform:scale(.08);background-color:#fff;-webkit-mask-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path d=\"M8.76,56.2c-6.38-6.34,3.26-16,9.64-9.69L38,65.88,80.56,23.29c6.38-6.38,16.07,3.32,9.69,9.69L42.84,80.37a6.83,6.83,0,0,1-9.65,0Z\"/></svg>');mask-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path d=\"M8.76,56.2c-6.38-6.34,3.26-16,9.64-9.69L38,65.88,80.56,23.29c6.38-6.38,16.07,3.32,9.69,9.69L42.84,80.37a6.83,6.83,0,0,1-9.65,0Z\"/></svg>');-webkit-mask-size:77%;mask-size:77%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;z-index:3}.formulate-input[data-classification=file] .formulate-files .formulate-file-progress[data-just-finished]{width:1.25em;height:1.25em;flex:0 0 1.25em}.formulate-input[data-classification=file] .formulate-files .formulate-file-progress[data-just-finished]:before{transition:transform .25s .2s,opacity .25s .2s;transform:scale(1);opacity:1}.formulate-input[data-classification=file] .formulate-files .formulate-file-progress[data-is-finished]{transition:height .25s,width .25s,left .25s,top,.25s,border-radius .25s;width:.3em;flex:0 0 .3em;height:100%;right:0;border-radius:0 .23em .23em 0}.formulate-input[data-classification=file] .formulate-files .formulate-file-progress[data-is-finished]:before{transition:opacity .1s;opacity:0}.formulate-input[data-classification=file] .formulate-files .formulate-file-progress .formulate-file-progress-inner{background-color:#41b883;width:1%;position:absolute;left:0;bottom:0;top:0;z-index:2}.formulate-input[data-classification=file] .formulate-files .formulate-file-name{padding-left:1.5em;padding-right:2em;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:auto}.formulate-input[data-classification=file] .formulate-files .formulate-file-name:before{position:absolute;left:.7em;top:50%;margin-top:-.7em;background-color:#a8a8a8;content:\"\";-webkit-mask-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64.06 83.59\"><path d=\"M55.94,83.59a8.16,8.16,0,0,0,8.12-8.16V19.12a1.77,1.77,0,0,0-.52-1.25L46.21.59A1.69,1.69,0,0,0,45.14.08L44.69,0l-.18,0H8.13A8.18,8.18,0,0,0,0,8.16V75.41a8.16,8.16,0,0,0,8.13,8.16H55.94ZM46.68,6,58.11,17.38H46.68ZM3.52,75.43V8.16A4.64,4.64,0,0,1,8.13,3.52h35V19.16a1.75,1.75,0,0,0,1.76,1.74H60.55V75.43a4.65,4.65,0,0,1-4.61,4.65H8.13A4.65,4.65,0,0,1,3.52,75.43Z\"/></svg>');mask-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64.06 83.59\"><path d=\"M55.94,83.59a8.16,8.16,0,0,0,8.12-8.16V19.12a1.77,1.77,0,0,0-.52-1.25L46.21.59A1.69,1.69,0,0,0,45.14.08L44.69,0l-.18,0H8.13A8.18,8.18,0,0,0,0,8.16V75.41a8.16,8.16,0,0,0,8.13,8.16H55.94ZM46.68,6,58.11,17.38H46.68ZM3.52,75.43V8.16A4.64,4.64,0,0,1,8.13,3.52h35V19.16a1.75,1.75,0,0,0,1.76,1.74H60.55V75.43a4.65,4.65,0,0,1-4.61,4.65H8.13A4.65,4.65,0,0,1,3.52,75.43Z\"/></svg>');-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;width:1.25em;height:1.25em;display:inline-block;margin-right:.5em}.formulate-input[data-classification=file] .formulate-files .formulate-file-remove{width:1.25em;height:1.25em;border-radius:1em;border:1px solid #a8a8a8;background-color:#a8a8a8;-webkit-mask-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 59.1 59.2\"><path d=\"M1.6,57.7a5,5,0,0,0,3.5,1.5,4.85,4.85,0,0,0,3.5-1.5l21-21,21,21a5,5,0,0,0,3.5,1.5,4.85,4.85,0,0,0,3.5-1.5,5,5,0,0,0,0-7.1l-21-21,21-21a5,5,0,0,0,0-7.1,5,5,0,0,0-7.1,0l-21,21L8.6,1.7a5,5,0,0,0-7.1,0,5,5,0,0,0,0,7.1l21,21L1.6,50.7A4.83,4.83,0,0,0,1.6,57.7Z\"/></svg>');mask-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 59.1 59.2\"><path d=\"M1.6,57.7a5,5,0,0,0,3.5,1.5,4.85,4.85,0,0,0,3.5-1.5l21-21,21,21a5,5,0,0,0,3.5,1.5,4.85,4.85,0,0,0,3.5-1.5,5,5,0,0,0,0-7.1l-21-21,21-21a5,5,0,0,0,0-7.1,5,5,0,0,0-7.1,0l-21,21L8.6,1.7a5,5,0,0,0-7.1,0,5,5,0,0,0,0,7.1l21,21L1.6,50.7A4.83,4.83,0,0,0,1.6,57.7Z\"/></svg>');-webkit-mask-size:.6em;mask-size:.6em;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;cursor:pointer;position:absolute;right:.75em;z-index:1;transition:transform .25s}@media(pointer:fine){.formulate-input[data-classification=file] .formulate-files .formulate-file-remove:hover{transform:scale(1.5)}}.formulate-input[data-classification=file] .formulate-files li{display:block}.formulate-input[data-classification=file] .formulate-files li[data-has-error] .formulate-file-progress{background-color:#dc2c2c}.formulate-input[data-classification=file] .formulate-files li[data-has-preview] .formulate-file-name:before{display:none}.formulate-input[data-classification=file] .formulate-files li+li{margin-top:.5em}.formulate-input[data-classification=file] .formulate-files .formulate-file{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.3em;border:1px solid #cecece;box-sizing:border-box;background-color:transparent;font-size:.9em;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;padding:.75em;display:block;font-weight:400;line-height:1.2em;margin:0;width:100%;display:flex;justify-content:space-between;align-items:center;position:relative}.formulate-input[data-classification=file] .formulate-files .formulate-file::-moz-placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=file] .formulate-files .formulate-file::placeholder{color:#a8a8a8;line-height:normal}.formulate-input[data-classification=file] .formulate-files .formulate-file:focus{outline:0;border:1px solid #41b883}.formulate-input[data-classification=file] .formulate-files .formulate-file ::-webkit-progress-bar{-webkit-appearance:none;appearance:none;height:.5em;border-radius:.5em;overflow:hidden}.formulate-input[data-classification=file] .formulate-files .formulate-file-image-preview{width:3em;height:3em;flex:0 0 3em;position:relative;z-index:2;left:-1px;box-shadow:0 0 0 1px #efefef;transition:transform .25s,box-shadow .25s,background-color .25s}@media(pointer:fine){.formulate-input[data-classification=file] .formulate-files .formulate-file-image-preview:hover{transition-delay:.2s;transform:scale(3);background-color:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.1)}}.formulate-input[data-classification=file] .formulate-files .formulate-file-image-preview img{display:block;position:absolute;width:100%;height:100%;left:0;right:0;bottom:0;top:0;-o-object-fit:contain;object-fit:contain;transition:all .25s}.formulate-input[data-classification=file] [data-type=image] .formulate-input-upload-area .formulate-input-upload-area-mask:before{-webkit-mask-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 90 71.05\"><path d=\"M82.89,0H7.1A7.12,7.12,0,0,0,0,7.11V64a7.11,7.11,0,0,0,7.1,7.1H82.9A7.11,7.11,0,0,0,90,64V7.11A7.12,7.12,0,0,0,82.89,0ZM69.28,39.35a5.44,5.44,0,0,0-8,0L50.58,50.74,32.38,30.88a5.31,5.31,0,0,0-7.92,0L4.74,52.4V7.11A2.37,2.37,0,0,1,7.11,4.74H82.9a2.37,2.37,0,0,1,2.36,2.37V56.3Z\"/><circle cx=\"67.74\" cy=\"22.26\" r=\"8.53\"/></svg>');mask-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 90 71.05\"><path d=\"M82.89,0H7.1A7.12,7.12,0,0,0,0,7.11V64a7.11,7.11,0,0,0,7.1,7.1H82.9A7.11,7.11,0,0,0,90,64V7.11A7.12,7.12,0,0,0,82.89,0ZM69.28,39.35a5.44,5.44,0,0,0-8,0L50.58,50.74,32.38,30.88a5.31,5.31,0,0,0-7.92,0L4.74,52.4V7.11A2.37,2.37,0,0,1,7.11,4.74H82.9a2.37,2.37,0,0,1,2.36,2.37V56.3Z\"/><circle cx=\"67.74\" cy=\"22.26\" r=\"8.53\"/></svg>')}.formulate-form-errors{margin:.75em 0;padding:0;list-style-type:none}.formulate-form-errors:first-child{margin-top:0}.formulate-form-errors:last-child{margin-bottom:0}.formulate-form-errors .formulate-form-error{color:#960505;font-size:.9em;font-weight:300;line-height:1.5;margin-bottom:.25em}@keyframes v-shake{59%{margin-left:0}60%,80%{margin-left:2px}70%,90%{margin-left:-2px}}.v-application .black{background-color:#000!important;border-color:#000!important}.v-application .black--text{color:#000!important;caret-color:#000!important}.v-application .white{background-color:#fff!important;border-color:#fff!important}.v-application .white--text{color:#fff!important;caret-color:#fff!important}.v-application .transparent{background-color:transparent!important;border-color:transparent!important}.v-application .transparent--text{color:transparent!important;caret-color:transparent!important}.v-application .red{background-color:#f44336!important;border-color:#f44336!important}.v-application .red--text{color:#f44336!important;caret-color:#f44336!important}.v-application .red.lighten-5{background-color:#ffebee!important;border-color:#ffebee!important}.v-application .red--text.text--lighten-5{color:#ffebee!important;caret-color:#ffebee!important}.v-application .red.lighten-4{background-color:#ffcdd2!important;border-color:#ffcdd2!important}.v-application .red--text.text--lighten-4{color:#ffcdd2!important;caret-color:#ffcdd2!important}.v-application .red.lighten-3{background-color:#ef9a9a!important;border-color:#ef9a9a!important}.v-application .red--text.text--lighten-3{color:#ef9a9a!important;caret-color:#ef9a9a!important}.v-application .red.lighten-2{background-color:#e57373!important;border-color:#e57373!important}.v-application .red--text.text--lighten-2{color:#e57373!important;caret-color:#e57373!important}.v-application .red.lighten-1{background-color:#ef5350!important;border-color:#ef5350!important}.v-application .red--text.text--lighten-1{color:#ef5350!important;caret-color:#ef5350!important}.v-application .red.darken-1{background-color:#e53935!important;border-color:#e53935!important}.v-application .red--text.text--darken-1{color:#e53935!important;caret-color:#e53935!important}.v-application .red.darken-2{background-color:#d32f2f!important;border-color:#d32f2f!important}.v-application .red--text.text--darken-2{color:#d32f2f!important;caret-color:#d32f2f!important}.v-application .red.darken-3{background-color:#c62828!important;border-color:#c62828!important}.v-application .red--text.text--darken-3{color:#c62828!important;caret-color:#c62828!important}.v-application .red.darken-4{background-color:#b71c1c!important;border-color:#b71c1c!important}.v-application .red--text.text--darken-4{color:#b71c1c!important;caret-color:#b71c1c!important}.v-application .red.accent-1{background-color:#ff8a80!important;border-color:#ff8a80!important}.v-application .red--text.text--accent-1{color:#ff8a80!important;caret-color:#ff8a80!important}.v-application .red.accent-2{background-color:#ff5252!important;border-color:#ff5252!important}.v-application .red--text.text--accent-2{color:#ff5252!important;caret-color:#ff5252!important}.v-application .red.accent-3{background-color:#ff1744!important;border-color:#ff1744!important}.v-application .red--text.text--accent-3{color:#ff1744!important;caret-color:#ff1744!important}.v-application .red.accent-4{background-color:#d50000!important;border-color:#d50000!important}.v-application .red--text.text--accent-4{color:#d50000!important;caret-color:#d50000!important}.v-application .pink{background-color:#e91e63!important;border-color:#e91e63!important}.v-application .pink--text{color:#e91e63!important;caret-color:#e91e63!important}.v-application .pink.lighten-5{background-color:#fce4ec!important;border-color:#fce4ec!important}.v-application .pink--text.text--lighten-5{color:#fce4ec!important;caret-color:#fce4ec!important}.v-application .pink.lighten-4{background-color:#f8bbd0!important;border-color:#f8bbd0!important}.v-application .pink--text.text--lighten-4{color:#f8bbd0!important;caret-color:#f8bbd0!important}.v-application .pink.lighten-3{background-color:#f48fb1!important;border-color:#f48fb1!important}.v-application .pink--text.text--lighten-3{color:#f48fb1!important;caret-color:#f48fb1!important}.v-application .pink.lighten-2{background-color:#f06292!important;border-color:#f06292!important}.v-application .pink--text.text--lighten-2{color:#f06292!important;caret-color:#f06292!important}.v-application .pink.lighten-1{background-color:#ec407a!important;border-color:#ec407a!important}.v-application .pink--text.text--lighten-1{color:#ec407a!important;caret-color:#ec407a!important}.v-application .pink.darken-1{background-color:#d81b60!important;border-color:#d81b60!important}.v-application .pink--text.text--darken-1{color:#d81b60!important;caret-color:#d81b60!important}.v-application .pink.darken-2{background-color:#c2185b!important;border-color:#c2185b!important}.v-application .pink--text.text--darken-2{color:#c2185b!important;caret-color:#c2185b!important}.v-application .pink.darken-3{background-color:#ad1457!important;border-color:#ad1457!important}.v-application .pink--text.text--darken-3{color:#ad1457!important;caret-color:#ad1457!important}.v-application .pink.darken-4{background-color:#880e4f!important;border-color:#880e4f!important}.v-application .pink--text.text--darken-4{color:#880e4f!important;caret-color:#880e4f!important}.v-application .pink.accent-1{background-color:#ff80ab!important;border-color:#ff80ab!important}.v-application .pink--text.text--accent-1{color:#ff80ab!important;caret-color:#ff80ab!important}.v-application .pink.accent-2{background-color:#ff4081!important;border-color:#ff4081!important}.v-application .pink--text.text--accent-2{color:#ff4081!important;caret-color:#ff4081!important}.v-application .pink.accent-3{background-color:#f50057!important;border-color:#f50057!important}.v-application .pink--text.text--accent-3{color:#f50057!important;caret-color:#f50057!important}.v-application .pink.accent-4{background-color:#c51162!important;border-color:#c51162!important}.v-application .pink--text.text--accent-4{color:#c51162!important;caret-color:#c51162!important}.v-application .purple{background-color:#9c27b0!important;border-color:#9c27b0!important}.v-application .purple--text{color:#9c27b0!important;caret-color:#9c27b0!important}.v-application .purple.lighten-5{background-color:#f3e5f5!important;border-color:#f3e5f5!important}.v-application .purple--text.text--lighten-5{color:#f3e5f5!important;caret-color:#f3e5f5!important}.v-application .purple.lighten-4{background-color:#e1bee7!important;border-color:#e1bee7!important}.v-application .purple--text.text--lighten-4{color:#e1bee7!important;caret-color:#e1bee7!important}.v-application .purple.lighten-3{background-color:#ce93d8!important;border-color:#ce93d8!important}.v-application .purple--text.text--lighten-3{color:#ce93d8!important;caret-color:#ce93d8!important}.v-application .purple.lighten-2{background-color:#ba68c8!important;border-color:#ba68c8!important}.v-application .purple--text.text--lighten-2{color:#ba68c8!important;caret-color:#ba68c8!important}.v-application .purple.lighten-1{background-color:#ab47bc!important;border-color:#ab47bc!important}.v-application .purple--text.text--lighten-1{color:#ab47bc!important;caret-color:#ab47bc!important}.v-application .purple.darken-1{background-color:#8e24aa!important;border-color:#8e24aa!important}.v-application .purple--text.text--darken-1{color:#8e24aa!important;caret-color:#8e24aa!important}.v-application .purple.darken-2{background-color:#7b1fa2!important;border-color:#7b1fa2!important}.v-application .purple--text.text--darken-2{color:#7b1fa2!important;caret-color:#7b1fa2!important}.v-application .purple.darken-3{background-color:#6a1b9a!important;border-color:#6a1b9a!important}.v-application .purple--text.text--darken-3{color:#6a1b9a!important;caret-color:#6a1b9a!important}.v-application .purple.darken-4{background-color:#4a148c!important;border-color:#4a148c!important}.v-application .purple--text.text--darken-4{color:#4a148c!important;caret-color:#4a148c!important}.v-application .purple.accent-1{background-color:#ea80fc!important;border-color:#ea80fc!important}.v-application .purple--text.text--accent-1{color:#ea80fc!important;caret-color:#ea80fc!important}.v-application .purple.accent-2{background-color:#e040fb!important;border-color:#e040fb!important}.v-application .purple--text.text--accent-2{color:#e040fb!important;caret-color:#e040fb!important}.v-application .purple.accent-3{background-color:#d500f9!important;border-color:#d500f9!important}.v-application .purple--text.text--accent-3{color:#d500f9!important;caret-color:#d500f9!important}.v-application .purple.accent-4{background-color:#a0f!important;border-color:#a0f!important}.v-application .purple--text.text--accent-4{color:#a0f!important;caret-color:#a0f!important}.v-application .deep-purple{background-color:#673ab7!important;border-color:#673ab7!important}.v-application .deep-purple--text{color:#673ab7!important;caret-color:#673ab7!important}.v-application .deep-purple.lighten-5{background-color:#ede7f6!important;border-color:#ede7f6!important}.v-application .deep-purple--text.text--lighten-5{color:#ede7f6!important;caret-color:#ede7f6!important}.v-application .deep-purple.lighten-4{background-color:#d1c4e9!important;border-color:#d1c4e9!important}.v-application .deep-purple--text.text--lighten-4{color:#d1c4e9!important;caret-color:#d1c4e9!important}.v-application .deep-purple.lighten-3{background-color:#b39ddb!important;border-color:#b39ddb!important}.v-application .deep-purple--text.text--lighten-3{color:#b39ddb!important;caret-color:#b39ddb!important}.v-application .deep-purple.lighten-2{background-color:#9575cd!important;border-color:#9575cd!important}.v-application .deep-purple--text.text--lighten-2{color:#9575cd!important;caret-color:#9575cd!important}.v-application .deep-purple.lighten-1{background-color:#7e57c2!important;border-color:#7e57c2!important}.v-application .deep-purple--text.text--lighten-1{color:#7e57c2!important;caret-color:#7e57c2!important}.v-application .deep-purple.darken-1{background-color:#5e35b1!important;border-color:#5e35b1!important}.v-application .deep-purple--text.text--darken-1{color:#5e35b1!important;caret-color:#5e35b1!important}.v-application .deep-purple.darken-2{background-color:#512da8!important;border-color:#512da8!important}.v-application .deep-purple--text.text--darken-2{color:#512da8!important;caret-color:#512da8!important}.v-application .deep-purple.darken-3{background-color:#4527a0!important;border-color:#4527a0!important}.v-application .deep-purple--text.text--darken-3{color:#4527a0!important;caret-color:#4527a0!important}.v-application .deep-purple.darken-4{background-color:#311b92!important;border-color:#311b92!important}.v-application .deep-purple--text.text--darken-4{color:#311b92!important;caret-color:#311b92!important}.v-application .deep-purple.accent-1{background-color:#b388ff!important;border-color:#b388ff!important}.v-application .deep-purple--text.text--accent-1{color:#b388ff!important;caret-color:#b388ff!important}.v-application .deep-purple.accent-2{background-color:#7c4dff!important;border-color:#7c4dff!important}.v-application .deep-purple--text.text--accent-2{color:#7c4dff!important;caret-color:#7c4dff!important}.v-application .deep-purple.accent-3{background-color:#651fff!important;border-color:#651fff!important}.v-application .deep-purple--text.text--accent-3{color:#651fff!important;caret-color:#651fff!important}.v-application .deep-purple.accent-4{background-color:#6200ea!important;border-color:#6200ea!important}.v-application .deep-purple--text.text--accent-4{color:#6200ea!important;caret-color:#6200ea!important}.v-application .indigo{background-color:#3f51b5!important;border-color:#3f51b5!important}.v-application .indigo--text{color:#3f51b5!important;caret-color:#3f51b5!important}.v-application .indigo.lighten-5{background-color:#e8eaf6!important;border-color:#e8eaf6!important}.v-application .indigo--text.text--lighten-5{color:#e8eaf6!important;caret-color:#e8eaf6!important}.v-application .indigo.lighten-4{background-color:#c5cae9!important;border-color:#c5cae9!important}.v-application .indigo--text.text--lighten-4{color:#c5cae9!important;caret-color:#c5cae9!important}.v-application .indigo.lighten-3{background-color:#9fa8da!important;border-color:#9fa8da!important}.v-application .indigo--text.text--lighten-3{color:#9fa8da!important;caret-color:#9fa8da!important}.v-application .indigo.lighten-2{background-color:#7986cb!important;border-color:#7986cb!important}.v-application .indigo--text.text--lighten-2{color:#7986cb!important;caret-color:#7986cb!important}.v-application .indigo.lighten-1{background-color:#5c6bc0!important;border-color:#5c6bc0!important}.v-application .indigo--text.text--lighten-1{color:#5c6bc0!important;caret-color:#5c6bc0!important}.v-application .indigo.darken-1{background-color:#3949ab!important;border-color:#3949ab!important}.v-application .indigo--text.text--darken-1{color:#3949ab!important;caret-color:#3949ab!important}.v-application .indigo.darken-2{background-color:#303f9f!important;border-color:#303f9f!important}.v-application .indigo--text.text--darken-2{color:#303f9f!important;caret-color:#303f9f!important}.v-application .indigo.darken-3{background-color:#283593!important;border-color:#283593!important}.v-application .indigo--text.text--darken-3{color:#283593!important;caret-color:#283593!important}.v-application .indigo.darken-4{background-color:#1a237e!important;border-color:#1a237e!important}.v-application .indigo--text.text--darken-4{color:#1a237e!important;caret-color:#1a237e!important}.v-application .indigo.accent-1{background-color:#8c9eff!important;border-color:#8c9eff!important}.v-application .indigo--text.text--accent-1{color:#8c9eff!important;caret-color:#8c9eff!important}.v-application .indigo.accent-2{background-color:#536dfe!important;border-color:#536dfe!important}.v-application .indigo--text.text--accent-2{color:#536dfe!important;caret-color:#536dfe!important}.v-application .indigo.accent-3{background-color:#3d5afe!important;border-color:#3d5afe!important}.v-application .indigo--text.text--accent-3{color:#3d5afe!important;caret-color:#3d5afe!important}.v-application .indigo.accent-4{background-color:#304ffe!important;border-color:#304ffe!important}.v-application .indigo--text.text--accent-4{color:#304ffe!important;caret-color:#304ffe!important}.v-application .blue{background-color:#2196f3!important;border-color:#2196f3!important}.v-application .blue--text{color:#2196f3!important;caret-color:#2196f3!important}.v-application .blue.lighten-5{background-color:#e3f2fd!important;border-color:#e3f2fd!important}.v-application .blue--text.text--lighten-5{color:#e3f2fd!important;caret-color:#e3f2fd!important}.v-application .blue.lighten-4{background-color:#bbdefb!important;border-color:#bbdefb!important}.v-application .blue--text.text--lighten-4{color:#bbdefb!important;caret-color:#bbdefb!important}.v-application .blue.lighten-3{background-color:#90caf9!important;border-color:#90caf9!important}.v-application .blue--text.text--lighten-3{color:#90caf9!important;caret-color:#90caf9!important}.v-application .blue.lighten-2{background-color:#64b5f6!important;border-color:#64b5f6!important}.v-application .blue--text.text--lighten-2{color:#64b5f6!important;caret-color:#64b5f6!important}.v-application .blue.lighten-1{background-color:#42a5f5!important;border-color:#42a5f5!important}.v-application .blue--text.text--lighten-1{color:#42a5f5!important;caret-color:#42a5f5!important}.v-application .blue.darken-1{background-color:#1e88e5!important;border-color:#1e88e5!important}.v-application .blue--text.text--darken-1{color:#1e88e5!important;caret-color:#1e88e5!important}.v-application .blue.darken-2{background-color:#1976d2!important;border-color:#1976d2!important}.v-application .blue--text.text--darken-2{color:#1976d2!important;caret-color:#1976d2!important}.v-application .blue.darken-3{background-color:#1565c0!important;border-color:#1565c0!important}.v-application .blue--text.text--darken-3{color:#1565c0!important;caret-color:#1565c0!important}.v-application .blue.darken-4{background-color:#0d47a1!important;border-color:#0d47a1!important}.v-application .blue--text.text--darken-4{color:#0d47a1!important;caret-color:#0d47a1!important}.v-application .blue.accent-1{background-color:#82b1ff!important;border-color:#82b1ff!important}.v-application .blue--text.text--accent-1{color:#82b1ff!important;caret-color:#82b1ff!important}.v-application .blue.accent-2{background-color:#448aff!important;border-color:#448aff!important}.v-application .blue--text.text--accent-2{color:#448aff!important;caret-color:#448aff!important}.v-application .blue.accent-3{background-color:#2979ff!important;border-color:#2979ff!important}.v-application .blue--text.text--accent-3{color:#2979ff!important;caret-color:#2979ff!important}.v-application .blue.accent-4{background-color:#2962ff!important;border-color:#2962ff!important}.v-application .blue--text.text--accent-4{color:#2962ff!important;caret-color:#2962ff!important}.v-application .light-blue{background-color:#03a9f4!important;border-color:#03a9f4!important}.v-application .light-blue--text{color:#03a9f4!important;caret-color:#03a9f4!important}.v-application .light-blue.lighten-5{background-color:#e1f5fe!important;border-color:#e1f5fe!important}.v-application .light-blue--text.text--lighten-5{color:#e1f5fe!important;caret-color:#e1f5fe!important}.v-application .light-blue.lighten-4{background-color:#b3e5fc!important;border-color:#b3e5fc!important}.v-application .light-blue--text.text--lighten-4{color:#b3e5fc!important;caret-color:#b3e5fc!important}.v-application .light-blue.lighten-3{background-color:#81d4fa!important;border-color:#81d4fa!important}.v-application .light-blue--text.text--lighten-3{color:#81d4fa!important;caret-color:#81d4fa!important}.v-application .light-blue.lighten-2{background-color:#4fc3f7!important;border-color:#4fc3f7!important}.v-application .light-blue--text.text--lighten-2{color:#4fc3f7!important;caret-color:#4fc3f7!important}.v-application .light-blue.lighten-1{background-color:#29b6f6!important;border-color:#29b6f6!important}.v-application .light-blue--text.text--lighten-1{color:#29b6f6!important;caret-color:#29b6f6!important}.v-application .light-blue.darken-1{background-color:#039be5!important;border-color:#039be5!important}.v-application .light-blue--text.text--darken-1{color:#039be5!important;caret-color:#039be5!important}.v-application .light-blue.darken-2{background-color:#0288d1!important;border-color:#0288d1!important}.v-application .light-blue--text.text--darken-2{color:#0288d1!important;caret-color:#0288d1!important}.v-application .light-blue.darken-3{background-color:#0277bd!important;border-color:#0277bd!important}.v-application .light-blue--text.text--darken-3{color:#0277bd!important;caret-color:#0277bd!important}.v-application .light-blue.darken-4{background-color:#01579b!important;border-color:#01579b!important}.v-application .light-blue--text.text--darken-4{color:#01579b!important;caret-color:#01579b!important}.v-application .light-blue.accent-1{background-color:#80d8ff!important;border-color:#80d8ff!important}.v-application .light-blue--text.text--accent-1{color:#80d8ff!important;caret-color:#80d8ff!important}.v-application .light-blue.accent-2{background-color:#40c4ff!important;border-color:#40c4ff!important}.v-application .light-blue--text.text--accent-2{color:#40c4ff!important;caret-color:#40c4ff!important}.v-application .light-blue.accent-3{background-color:#00b0ff!important;border-color:#00b0ff!important}.v-application .light-blue--text.text--accent-3{color:#00b0ff!important;caret-color:#00b0ff!important}.v-application .light-blue.accent-4{background-color:#0091ea!important;border-color:#0091ea!important}.v-application .light-blue--text.text--accent-4{color:#0091ea!important;caret-color:#0091ea!important}.v-application .cyan{background-color:#00bcd4!important;border-color:#00bcd4!important}.v-application .cyan--text{color:#00bcd4!important;caret-color:#00bcd4!important}.v-application .cyan.lighten-5{background-color:#e0f7fa!important;border-color:#e0f7fa!important}.v-application .cyan--text.text--lighten-5{color:#e0f7fa!important;caret-color:#e0f7fa!important}.v-application .cyan.lighten-4{background-color:#b2ebf2!important;border-color:#b2ebf2!important}.v-application .cyan--text.text--lighten-4{color:#b2ebf2!important;caret-color:#b2ebf2!important}.v-application .cyan.lighten-3{background-color:#80deea!important;border-color:#80deea!important}.v-application .cyan--text.text--lighten-3{color:#80deea!important;caret-color:#80deea!important}.v-application .cyan.lighten-2{background-color:#4dd0e1!important;border-color:#4dd0e1!important}.v-application .cyan--text.text--lighten-2{color:#4dd0e1!important;caret-color:#4dd0e1!important}.v-application .cyan.lighten-1{background-color:#26c6da!important;border-color:#26c6da!important}.v-application .cyan--text.text--lighten-1{color:#26c6da!important;caret-color:#26c6da!important}.v-application .cyan.darken-1{background-color:#00acc1!important;border-color:#00acc1!important}.v-application .cyan--text.text--darken-1{color:#00acc1!important;caret-color:#00acc1!important}.v-application .cyan.darken-2{background-color:#0097a7!important;border-color:#0097a7!important}.v-application .cyan--text.text--darken-2{color:#0097a7!important;caret-color:#0097a7!important}.v-application .cyan.darken-3{background-color:#00838f!important;border-color:#00838f!important}.v-application .cyan--text.text--darken-3{color:#00838f!important;caret-color:#00838f!important}.v-application .cyan.darken-4{background-color:#006064!important;border-color:#006064!important}.v-application .cyan--text.text--darken-4{color:#006064!important;caret-color:#006064!important}.v-application .cyan.accent-1{background-color:#84ffff!important;border-color:#84ffff!important}.v-application .cyan--text.text--accent-1{color:#84ffff!important;caret-color:#84ffff!important}.v-application .cyan.accent-2{background-color:#18ffff!important;border-color:#18ffff!important}.v-application .cyan--text.text--accent-2{color:#18ffff!important;caret-color:#18ffff!important}.v-application .cyan.accent-3{background-color:#00e5ff!important;border-color:#00e5ff!important}.v-application .cyan--text.text--accent-3{color:#00e5ff!important;caret-color:#00e5ff!important}.v-application .cyan.accent-4{background-color:#00b8d4!important;border-color:#00b8d4!important}.v-application .cyan--text.text--accent-4{color:#00b8d4!important;caret-color:#00b8d4!important}.v-application .teal{background-color:#009688!important;border-color:#009688!important}.v-application .teal--text{color:#009688!important;caret-color:#009688!important}.v-application .teal.lighten-5{background-color:#e0f2f1!important;border-color:#e0f2f1!important}.v-application .teal--text.text--lighten-5{color:#e0f2f1!important;caret-color:#e0f2f1!important}.v-application .teal.lighten-4{background-color:#b2dfdb!important;border-color:#b2dfdb!important}.v-application .teal--text.text--lighten-4{color:#b2dfdb!important;caret-color:#b2dfdb!important}.v-application .teal.lighten-3{background-color:#80cbc4!important;border-color:#80cbc4!important}.v-application .teal--text.text--lighten-3{color:#80cbc4!important;caret-color:#80cbc4!important}.v-application .teal.lighten-2{background-color:#4db6ac!important;border-color:#4db6ac!important}.v-application .teal--text.text--lighten-2{color:#4db6ac!important;caret-color:#4db6ac!important}.v-application .teal.lighten-1{background-color:#26a69a!important;border-color:#26a69a!important}.v-application .teal--text.text--lighten-1{color:#26a69a!important;caret-color:#26a69a!important}.v-application .teal.darken-1{background-color:#00897b!important;border-color:#00897b!important}.v-application .teal--text.text--darken-1{color:#00897b!important;caret-color:#00897b!important}.v-application .teal.darken-2{background-color:#00796b!important;border-color:#00796b!important}.v-application .teal--text.text--darken-2{color:#00796b!important;caret-color:#00796b!important}.v-application .teal.darken-3{background-color:#00695c!important;border-color:#00695c!important}.v-application .teal--text.text--darken-3{color:#00695c!important;caret-color:#00695c!important}.v-application .teal.darken-4{background-color:#004d40!important;border-color:#004d40!important}.v-application .teal--text.text--darken-4{color:#004d40!important;caret-color:#004d40!important}.v-application .teal.accent-1{background-color:#a7ffeb!important;border-color:#a7ffeb!important}.v-application .teal--text.text--accent-1{color:#a7ffeb!important;caret-color:#a7ffeb!important}.v-application .teal.accent-2{background-color:#64ffda!important;border-color:#64ffda!important}.v-application .teal--text.text--accent-2{color:#64ffda!important;caret-color:#64ffda!important}.v-application .teal.accent-3{background-color:#1de9b6!important;border-color:#1de9b6!important}.v-application .teal--text.text--accent-3{color:#1de9b6!important;caret-color:#1de9b6!important}.v-application .teal.accent-4{background-color:#00bfa5!important;border-color:#00bfa5!important}.v-application .teal--text.text--accent-4{color:#00bfa5!important;caret-color:#00bfa5!important}.v-application .green{background-color:#4caf50!important;border-color:#4caf50!important}.v-application .green--text{color:#4caf50!important;caret-color:#4caf50!important}.v-application .green.lighten-5{background-color:#e8f5e9!important;border-color:#e8f5e9!important}.v-application .green--text.text--lighten-5{color:#e8f5e9!important;caret-color:#e8f5e9!important}.v-application .green.lighten-4{background-color:#c8e6c9!important;border-color:#c8e6c9!important}.v-application .green--text.text--lighten-4{color:#c8e6c9!important;caret-color:#c8e6c9!important}.v-application .green.lighten-3{background-color:#a5d6a7!important;border-color:#a5d6a7!important}.v-application .green--text.text--lighten-3{color:#a5d6a7!important;caret-color:#a5d6a7!important}.v-application .green.lighten-2{background-color:#81c784!important;border-color:#81c784!important}.v-application .green--text.text--lighten-2{color:#81c784!important;caret-color:#81c784!important}.v-application .green.lighten-1{background-color:#66bb6a!important;border-color:#66bb6a!important}.v-application .green--text.text--lighten-1{color:#66bb6a!important;caret-color:#66bb6a!important}.v-application .green.darken-1{background-color:#43a047!important;border-color:#43a047!important}.v-application .green--text.text--darken-1{color:#43a047!important;caret-color:#43a047!important}.v-application .green.darken-2{background-color:#388e3c!important;border-color:#388e3c!important}.v-application .green--text.text--darken-2{color:#388e3c!important;caret-color:#388e3c!important}.v-application .green.darken-3{background-color:#2e7d32!important;border-color:#2e7d32!important}.v-application .green--text.text--darken-3{color:#2e7d32!important;caret-color:#2e7d32!important}.v-application .green.darken-4{background-color:#1b5e20!important;border-color:#1b5e20!important}.v-application .green--text.text--darken-4{color:#1b5e20!important;caret-color:#1b5e20!important}.v-application .green.accent-1{background-color:#b9f6ca!important;border-color:#b9f6ca!important}.v-application .green--text.text--accent-1{color:#b9f6ca!important;caret-color:#b9f6ca!important}.v-application .green.accent-2{background-color:#69f0ae!important;border-color:#69f0ae!important}.v-application .green--text.text--accent-2{color:#69f0ae!important;caret-color:#69f0ae!important}.v-application .green.accent-3{background-color:#00e676!important;border-color:#00e676!important}.v-application .green--text.text--accent-3{color:#00e676!important;caret-color:#00e676!important}.v-application .green.accent-4{background-color:#00c853!important;border-color:#00c853!important}.v-application .green--text.text--accent-4{color:#00c853!important;caret-color:#00c853!important}.v-application .light-green{background-color:#8bc34a!important;border-color:#8bc34a!important}.v-application .light-green--text{color:#8bc34a!important;caret-color:#8bc34a!important}.v-application .light-green.lighten-5{background-color:#f1f8e9!important;border-color:#f1f8e9!important}.v-application .light-green--text.text--lighten-5{color:#f1f8e9!important;caret-color:#f1f8e9!important}.v-application .light-green.lighten-4{background-color:#dcedc8!important;border-color:#dcedc8!important}.v-application .light-green--text.text--lighten-4{color:#dcedc8!important;caret-color:#dcedc8!important}.v-application .light-green.lighten-3{background-color:#c5e1a5!important;border-color:#c5e1a5!important}.v-application .light-green--text.text--lighten-3{color:#c5e1a5!important;caret-color:#c5e1a5!important}.v-application .light-green.lighten-2{background-color:#aed581!important;border-color:#aed581!important}.v-application .light-green--text.text--lighten-2{color:#aed581!important;caret-color:#aed581!important}.v-application .light-green.lighten-1{background-color:#9ccc65!important;border-color:#9ccc65!important}.v-application .light-green--text.text--lighten-1{color:#9ccc65!important;caret-color:#9ccc65!important}.v-application .light-green.darken-1{background-color:#7cb342!important;border-color:#7cb342!important}.v-application .light-green--text.text--darken-1{color:#7cb342!important;caret-color:#7cb342!important}.v-application .light-green.darken-2{background-color:#689f38!important;border-color:#689f38!important}.v-application .light-green--text.text--darken-2{color:#689f38!important;caret-color:#689f38!important}.v-application .light-green.darken-3{background-color:#558b2f!important;border-color:#558b2f!important}.v-application .light-green--text.text--darken-3{color:#558b2f!important;caret-color:#558b2f!important}.v-application .light-green.darken-4{background-color:#33691e!important;border-color:#33691e!important}.v-application .light-green--text.text--darken-4{color:#33691e!important;caret-color:#33691e!important}.v-application .light-green.accent-1{background-color:#ccff90!important;border-color:#ccff90!important}.v-application .light-green--text.text--accent-1{color:#ccff90!important;caret-color:#ccff90!important}.v-application .light-green.accent-2{background-color:#b2ff59!important;border-color:#b2ff59!important}.v-application .light-green--text.text--accent-2{color:#b2ff59!important;caret-color:#b2ff59!important}.v-application .light-green.accent-3{background-color:#76ff03!important;border-color:#76ff03!important}.v-application .light-green--text.text--accent-3{color:#76ff03!important;caret-color:#76ff03!important}.v-application .light-green.accent-4{background-color:#64dd17!important;border-color:#64dd17!important}.v-application .light-green--text.text--accent-4{color:#64dd17!important;caret-color:#64dd17!important}.v-application .lime{background-color:#cddc39!important;border-color:#cddc39!important}.v-application .lime--text{color:#cddc39!important;caret-color:#cddc39!important}.v-application .lime.lighten-5{background-color:#f9fbe7!important;border-color:#f9fbe7!important}.v-application .lime--text.text--lighten-5{color:#f9fbe7!important;caret-color:#f9fbe7!important}.v-application .lime.lighten-4{background-color:#f0f4c3!important;border-color:#f0f4c3!important}.v-application .lime--text.text--lighten-4{color:#f0f4c3!important;caret-color:#f0f4c3!important}.v-application .lime.lighten-3{background-color:#e6ee9c!important;border-color:#e6ee9c!important}.v-application .lime--text.text--lighten-3{color:#e6ee9c!important;caret-color:#e6ee9c!important}.v-application .lime.lighten-2{background-color:#dce775!important;border-color:#dce775!important}.v-application .lime--text.text--lighten-2{color:#dce775!important;caret-color:#dce775!important}.v-application .lime.lighten-1{background-color:#d4e157!important;border-color:#d4e157!important}.v-application .lime--text.text--lighten-1{color:#d4e157!important;caret-color:#d4e157!important}.v-application .lime.darken-1{background-color:#c0ca33!important;border-color:#c0ca33!important}.v-application .lime--text.text--darken-1{color:#c0ca33!important;caret-color:#c0ca33!important}.v-application .lime.darken-2{background-color:#afb42b!important;border-color:#afb42b!important}.v-application .lime--text.text--darken-2{color:#afb42b!important;caret-color:#afb42b!important}.v-application .lime.darken-3{background-color:#9e9d24!important;border-color:#9e9d24!important}.v-application .lime--text.text--darken-3{color:#9e9d24!important;caret-color:#9e9d24!important}.v-application .lime.darken-4{background-color:#827717!important;border-color:#827717!important}.v-application .lime--text.text--darken-4{color:#827717!important;caret-color:#827717!important}.v-application .lime.accent-1{background-color:#f4ff81!important;border-color:#f4ff81!important}.v-application .lime--text.text--accent-1{color:#f4ff81!important;caret-color:#f4ff81!important}.v-application .lime.accent-2{background-color:#eeff41!important;border-color:#eeff41!important}.v-application .lime--text.text--accent-2{color:#eeff41!important;caret-color:#eeff41!important}.v-application .lime.accent-3{background-color:#c6ff00!important;border-color:#c6ff00!important}.v-application .lime--text.text--accent-3{color:#c6ff00!important;caret-color:#c6ff00!important}.v-application .lime.accent-4{background-color:#aeea00!important;border-color:#aeea00!important}.v-application .lime--text.text--accent-4{color:#aeea00!important;caret-color:#aeea00!important}.v-application .yellow{background-color:#ffeb3b!important;border-color:#ffeb3b!important}.v-application .yellow--text{color:#ffeb3b!important;caret-color:#ffeb3b!important}.v-application .yellow.lighten-5{background-color:#fffde7!important;border-color:#fffde7!important}.v-application .yellow--text.text--lighten-5{color:#fffde7!important;caret-color:#fffde7!important}.v-application .yellow.lighten-4{background-color:#fff9c4!important;border-color:#fff9c4!important}.v-application .yellow--text.text--lighten-4{color:#fff9c4!important;caret-color:#fff9c4!important}.v-application .yellow.lighten-3{background-color:#fff59d!important;border-color:#fff59d!important}.v-application .yellow--text.text--lighten-3{color:#fff59d!important;caret-color:#fff59d!important}.v-application .yellow.lighten-2{background-color:#fff176!important;border-color:#fff176!important}.v-application .yellow--text.text--lighten-2{color:#fff176!important;caret-color:#fff176!important}.v-application .yellow.lighten-1{background-color:#ffee58!important;border-color:#ffee58!important}.v-application .yellow--text.text--lighten-1{color:#ffee58!important;caret-color:#ffee58!important}.v-application .yellow.darken-1{background-color:#fdd835!important;border-color:#fdd835!important}.v-application .yellow--text.text--darken-1{color:#fdd835!important;caret-color:#fdd835!important}.v-application .yellow.darken-2{background-color:#fbc02d!important;border-color:#fbc02d!important}.v-application .yellow--text.text--darken-2{color:#fbc02d!important;caret-color:#fbc02d!important}.v-application .yellow.darken-3{background-color:#f9a825!important;border-color:#f9a825!important}.v-application .yellow--text.text--darken-3{color:#f9a825!important;caret-color:#f9a825!important}.v-application .yellow.darken-4{background-color:#f57f17!important;border-color:#f57f17!important}.v-application .yellow--text.text--darken-4{color:#f57f17!important;caret-color:#f57f17!important}.v-application .yellow.accent-1{background-color:#ffff8d!important;border-color:#ffff8d!important}.v-application .yellow--text.text--accent-1{color:#ffff8d!important;caret-color:#ffff8d!important}.v-application .yellow.accent-2{background-color:#ff0!important;border-color:#ff0!important}.v-application .yellow--text.text--accent-2{color:#ff0!important;caret-color:#ff0!important}.v-application .yellow.accent-3{background-color:#ffea00!important;border-color:#ffea00!important}.v-application .yellow--text.text--accent-3{color:#ffea00!important;caret-color:#ffea00!important}.v-application .yellow.accent-4{background-color:#ffd600!important;border-color:#ffd600!important}.v-application .yellow--text.text--accent-4{color:#ffd600!important;caret-color:#ffd600!important}.v-application .amber{background-color:#ffc107!important;border-color:#ffc107!important}.v-application .amber--text{color:#ffc107!important;caret-color:#ffc107!important}.v-application .amber.lighten-5{background-color:#fff8e1!important;border-color:#fff8e1!important}.v-application .amber--text.text--lighten-5{color:#fff8e1!important;caret-color:#fff8e1!important}.v-application .amber.lighten-4{background-color:#ffecb3!important;border-color:#ffecb3!important}.v-application .amber--text.text--lighten-4{color:#ffecb3!important;caret-color:#ffecb3!important}.v-application .amber.lighten-3{background-color:#ffe082!important;border-color:#ffe082!important}.v-application .amber--text.text--lighten-3{color:#ffe082!important;caret-color:#ffe082!important}.v-application .amber.lighten-2{background-color:#ffd54f!important;border-color:#ffd54f!important}.v-application .amber--text.text--lighten-2{color:#ffd54f!important;caret-color:#ffd54f!important}.v-application .amber.lighten-1{background-color:#ffca28!important;border-color:#ffca28!important}.v-application .amber--text.text--lighten-1{color:#ffca28!important;caret-color:#ffca28!important}.v-application .amber.darken-1{background-color:#ffb300!important;border-color:#ffb300!important}.v-application .amber--text.text--darken-1{color:#ffb300!important;caret-color:#ffb300!important}.v-application .amber.darken-2{background-color:#ffa000!important;border-color:#ffa000!important}.v-application .amber--text.text--darken-2{color:#ffa000!important;caret-color:#ffa000!important}.v-application .amber.darken-3{background-color:#ff8f00!important;border-color:#ff8f00!important}.v-application .amber--text.text--darken-3{color:#ff8f00!important;caret-color:#ff8f00!important}.v-application .amber.darken-4{background-color:#ff6f00!important;border-color:#ff6f00!important}.v-application .amber--text.text--darken-4{color:#ff6f00!important;caret-color:#ff6f00!important}.v-application .amber.accent-1{background-color:#ffe57f!important;border-color:#ffe57f!important}.v-application .amber--text.text--accent-1{color:#ffe57f!important;caret-color:#ffe57f!important}.v-application .amber.accent-2{background-color:#ffd740!important;border-color:#ffd740!important}.v-application .amber--text.text--accent-2{color:#ffd740!important;caret-color:#ffd740!important}.v-application .amber.accent-3{background-color:#ffc400!important;border-color:#ffc400!important}.v-application .amber--text.text--accent-3{color:#ffc400!important;caret-color:#ffc400!important}.v-application .amber.accent-4{background-color:#ffab00!important;border-color:#ffab00!important}.v-application .amber--text.text--accent-4{color:#ffab00!important;caret-color:#ffab00!important}.v-application .orange{background-color:#ff9800!important;border-color:#ff9800!important}.v-application .orange--text{color:#ff9800!important;caret-color:#ff9800!important}.v-application .orange.lighten-5{background-color:#fff3e0!important;border-color:#fff3e0!important}.v-application .orange--text.text--lighten-5{color:#fff3e0!important;caret-color:#fff3e0!important}.v-application .orange.lighten-4{background-color:#ffe0b2!important;border-color:#ffe0b2!important}.v-application .orange--text.text--lighten-4{color:#ffe0b2!important;caret-color:#ffe0b2!important}.v-application .orange.lighten-3{background-color:#ffcc80!important;border-color:#ffcc80!important}.v-application .orange--text.text--lighten-3{color:#ffcc80!important;caret-color:#ffcc80!important}.v-application .orange.lighten-2{background-color:#ffb74d!important;border-color:#ffb74d!important}.v-application .orange--text.text--lighten-2{color:#ffb74d!important;caret-color:#ffb74d!important}.v-application .orange.lighten-1{background-color:#ffa726!important;border-color:#ffa726!important}.v-application .orange--text.text--lighten-1{color:#ffa726!important;caret-color:#ffa726!important}.v-application .orange.darken-1{background-color:#fb8c00!important;border-color:#fb8c00!important}.v-application .orange--text.text--darken-1{color:#fb8c00!important;caret-color:#fb8c00!important}.v-application .orange.darken-2{background-color:#f57c00!important;border-color:#f57c00!important}.v-application .orange--text.text--darken-2{color:#f57c00!important;caret-color:#f57c00!important}.v-application .orange.darken-3{background-color:#ef6c00!important;border-color:#ef6c00!important}.v-application .orange--text.text--darken-3{color:#ef6c00!important;caret-color:#ef6c00!important}.v-application .orange.darken-4{background-color:#e65100!important;border-color:#e65100!important}.v-application .orange--text.text--darken-4{color:#e65100!important;caret-color:#e65100!important}.v-application .orange.accent-1{background-color:#ffd180!important;border-color:#ffd180!important}.v-application .orange--text.text--accent-1{color:#ffd180!important;caret-color:#ffd180!important}.v-application .orange.accent-2{background-color:#ffab40!important;border-color:#ffab40!important}.v-application .orange--text.text--accent-2{color:#ffab40!important;caret-color:#ffab40!important}.v-application .orange.accent-3{background-color:#ff9100!important;border-color:#ff9100!important}.v-application .orange--text.text--accent-3{color:#ff9100!important;caret-color:#ff9100!important}.v-application .orange.accent-4{background-color:#ff6d00!important;border-color:#ff6d00!important}.v-application .orange--text.text--accent-4{color:#ff6d00!important;caret-color:#ff6d00!important}.v-application .deep-orange{background-color:#ff5722!important;border-color:#ff5722!important}.v-application .deep-orange--text{color:#ff5722!important;caret-color:#ff5722!important}.v-application .deep-orange.lighten-5{background-color:#fbe9e7!important;border-color:#fbe9e7!important}.v-application .deep-orange--text.text--lighten-5{color:#fbe9e7!important;caret-color:#fbe9e7!important}.v-application .deep-orange.lighten-4{background-color:#ffccbc!important;border-color:#ffccbc!important}.v-application .deep-orange--text.text--lighten-4{color:#ffccbc!important;caret-color:#ffccbc!important}.v-application .deep-orange.lighten-3{background-color:#ffab91!important;border-color:#ffab91!important}.v-application .deep-orange--text.text--lighten-3{color:#ffab91!important;caret-color:#ffab91!important}.v-application .deep-orange.lighten-2{background-color:#ff8a65!important;border-color:#ff8a65!important}.v-application .deep-orange--text.text--lighten-2{color:#ff8a65!important;caret-color:#ff8a65!important}.v-application .deep-orange.lighten-1{background-color:#ff7043!important;border-color:#ff7043!important}.v-application .deep-orange--text.text--lighten-1{color:#ff7043!important;caret-color:#ff7043!important}.v-application .deep-orange.darken-1{background-color:#f4511e!important;border-color:#f4511e!important}.v-application .deep-orange--text.text--darken-1{color:#f4511e!important;caret-color:#f4511e!important}.v-application .deep-orange.darken-2{background-color:#e64a19!important;border-color:#e64a19!important}.v-application .deep-orange--text.text--darken-2{color:#e64a19!important;caret-color:#e64a19!important}.v-application .deep-orange.darken-3{background-color:#d84315!important;border-color:#d84315!important}.v-application .deep-orange--text.text--darken-3{color:#d84315!important;caret-color:#d84315!important}.v-application .deep-orange.darken-4{background-color:#bf360c!important;border-color:#bf360c!important}.v-application .deep-orange--text.text--darken-4{color:#bf360c!important;caret-color:#bf360c!important}.v-application .deep-orange.accent-1{background-color:#ff9e80!important;border-color:#ff9e80!important}.v-application .deep-orange--text.text--accent-1{color:#ff9e80!important;caret-color:#ff9e80!important}.v-application .deep-orange.accent-2{background-color:#ff6e40!important;border-color:#ff6e40!important}.v-application .deep-orange--text.text--accent-2{color:#ff6e40!important;caret-color:#ff6e40!important}.v-application .deep-orange.accent-3{background-color:#ff3d00!important;border-color:#ff3d00!important}.v-application .deep-orange--text.text--accent-3{color:#ff3d00!important;caret-color:#ff3d00!important}.v-application .deep-orange.accent-4{background-color:#dd2c00!important;border-color:#dd2c00!important}.v-application .deep-orange--text.text--accent-4{color:#dd2c00!important;caret-color:#dd2c00!important}.v-application .brown{background-color:#795548!important;border-color:#795548!important}.v-application .brown--text{color:#795548!important;caret-color:#795548!important}.v-application .brown.lighten-5{background-color:#efebe9!important;border-color:#efebe9!important}.v-application .brown--text.text--lighten-5{color:#efebe9!important;caret-color:#efebe9!important}.v-application .brown.lighten-4{background-color:#d7ccc8!important;border-color:#d7ccc8!important}.v-application .brown--text.text--lighten-4{color:#d7ccc8!important;caret-color:#d7ccc8!important}.v-application .brown.lighten-3{background-color:#bcaaa4!important;border-color:#bcaaa4!important}.v-application .brown--text.text--lighten-3{color:#bcaaa4!important;caret-color:#bcaaa4!important}.v-application .brown.lighten-2{background-color:#a1887f!important;border-color:#a1887f!important}.v-application .brown--text.text--lighten-2{color:#a1887f!important;caret-color:#a1887f!important}.v-application .brown.lighten-1{background-color:#8d6e63!important;border-color:#8d6e63!important}.v-application .brown--text.text--lighten-1{color:#8d6e63!important;caret-color:#8d6e63!important}.v-application .brown.darken-1{background-color:#6d4c41!important;border-color:#6d4c41!important}.v-application .brown--text.text--darken-1{color:#6d4c41!important;caret-color:#6d4c41!important}.v-application .brown.darken-2{background-color:#5d4037!important;border-color:#5d4037!important}.v-application .brown--text.text--darken-2{color:#5d4037!important;caret-color:#5d4037!important}.v-application .brown.darken-3{background-color:#4e342e!important;border-color:#4e342e!important}.v-application .brown--text.text--darken-3{color:#4e342e!important;caret-color:#4e342e!important}.v-application .brown.darken-4{background-color:#3e2723!important;border-color:#3e2723!important}.v-application .brown--text.text--darken-4{color:#3e2723!important;caret-color:#3e2723!important}.v-application .blue-grey{background-color:#607d8b!important;border-color:#607d8b!important}.v-application .blue-grey--text{color:#607d8b!important;caret-color:#607d8b!important}.v-application .blue-grey.lighten-5{background-color:#eceff1!important;border-color:#eceff1!important}.v-application .blue-grey--text.text--lighten-5{color:#eceff1!important;caret-color:#eceff1!important}.v-application .blue-grey.lighten-4{background-color:#cfd8dc!important;border-color:#cfd8dc!important}.v-application .blue-grey--text.text--lighten-4{color:#cfd8dc!important;caret-color:#cfd8dc!important}.v-application .blue-grey.lighten-3{background-color:#b0bec5!important;border-color:#b0bec5!important}.v-application .blue-grey--text.text--lighten-3{color:#b0bec5!important;caret-color:#b0bec5!important}.v-application .blue-grey.lighten-2{background-color:#90a4ae!important;border-color:#90a4ae!important}.v-application .blue-grey--text.text--lighten-2{color:#90a4ae!important;caret-color:#90a4ae!important}.v-application .blue-grey.lighten-1{background-color:#78909c!important;border-color:#78909c!important}.v-application .blue-grey--text.text--lighten-1{color:#78909c!important;caret-color:#78909c!important}.v-application .blue-grey.darken-1{background-color:#546e7a!important;border-color:#546e7a!important}.v-application .blue-grey--text.text--darken-1{color:#546e7a!important;caret-color:#546e7a!important}.v-application .blue-grey.darken-2{background-color:#455a64!important;border-color:#455a64!important}.v-application .blue-grey--text.text--darken-2{color:#455a64!important;caret-color:#455a64!important}.v-application .blue-grey.darken-3{background-color:#37474f!important;border-color:#37474f!important}.v-application .blue-grey--text.text--darken-3{color:#37474f!important;caret-color:#37474f!important}.v-application .blue-grey.darken-4{background-color:#263238!important;border-color:#263238!important}.v-application .blue-grey--text.text--darken-4{color:#263238!important;caret-color:#263238!important}.v-application .grey{background-color:#9e9e9e!important;border-color:#9e9e9e!important}.v-application .grey--text{color:#9e9e9e!important;caret-color:#9e9e9e!important}.v-application .grey.lighten-5{background-color:#fafafa!important;border-color:#fafafa!important}.v-application .grey--text.text--lighten-5{color:#fafafa!important;caret-color:#fafafa!important}.v-application .grey.lighten-4{background-color:#f5f5f5!important;border-color:#f5f5f5!important}.v-application .grey--text.text--lighten-4{color:#f5f5f5!important;caret-color:#f5f5f5!important}.v-application .grey.lighten-3{background-color:#eee!important;border-color:#eee!important}.v-application .grey--text.text--lighten-3{color:#eee!important;caret-color:#eee!important}.v-application .grey.lighten-2{background-color:#e0e0e0!important;border-color:#e0e0e0!important}.v-application .grey--text.text--lighten-2{color:#e0e0e0!important;caret-color:#e0e0e0!important}.v-application .grey.lighten-1{background-color:#bdbdbd!important;border-color:#bdbdbd!important}.v-application .grey--text.text--lighten-1{color:#bdbdbd!important;caret-color:#bdbdbd!important}.v-application .grey.darken-1{background-color:#757575!important;border-color:#757575!important}.v-application .grey--text.text--darken-1{color:#757575!important;caret-color:#757575!important}.v-application .grey.darken-2{background-color:#616161!important;border-color:#616161!important}.v-application .grey--text.text--darken-2{color:#616161!important;caret-color:#616161!important}.v-application .grey.darken-3{background-color:#424242!important;border-color:#424242!important}.v-application .grey--text.text--darken-3{color:#424242!important;caret-color:#424242!important}.v-application .grey.darken-4{background-color:#212121!important;border-color:#212121!important}.v-application .grey--text.text--darken-4{color:#212121!important;caret-color:#212121!important}.v-application .shades.black{background-color:#000!important;border-color:#000!important}.v-application .shades--text.text--black{color:#000!important;caret-color:#000!important}.v-application .shades.white{background-color:#fff!important;border-color:#fff!important}.v-application .shades--text.text--white{color:#fff!important;caret-color:#fff!important}.v-application .shades.transparent{background-color:transparent!important;border-color:transparent!important}.v-application .shades--text.text--transparent{color:transparent!important;caret-color:transparent!important}/*!\n * ress.css • v2.0.4\n * MIT License\n * github.com/filipelinhares/ress\n */html{box-sizing:border-box;overflow-y:scroll;-webkit-text-size-adjust:100%;word-break:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4}*,:after,:before{background-repeat:no-repeat;box-sizing:inherit}:after,:before{text-decoration:inherit;vertical-align:inherit}*{padding:0;margin:0}hr{overflow:visible;height:0}details,main{display:block}summary{display:list-item}small{font-size:80%}[hidden]{display:none}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{background-color:transparent}a:active,a:hover{outline-width:0}code,kbd,pre,samp{font-family:monospace,monospace}pre{font-size:1em}b,strong{font-weight:bolder}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}input{border-radius:0}[disabled]{cursor:default}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{overflow:auto;resize:vertical}button,input,optgroup,select,textarea{font:inherit}optgroup{font-weight:700}button{overflow:visible}button,select{text-transform:none}[role=button],[type=button],[type=reset],[type=submit],button{cursor:pointer;color:inherit}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button:-moz-focusring{outline:1px dotted ButtonText}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}button,input,select,textarea{background-color:transparent;border-style:none}select{-moz-appearance:none;-webkit-appearance:none}select::-ms-expand{display:none}select::-ms-value{color:currentColor}legend{border:0;color:inherit;display:table;white-space:normal;max-width:100%}::-webkit-file-upload-button{-webkit-appearance:button;color:inherit;font:inherit}img{border-style:none}progress{vertical-align:baseline}@media screen{[hidden~=screen]{display:inherit}[hidden~=screen]:not(:active):not(:focus):not(:target){position:absolute!important;clip:rect(0 0 0 0)!important}}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled=true]{cursor:default}.v-application .elevation-24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)!important}.v-application .elevation-23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)!important}.v-application .elevation-22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)!important}.v-application .elevation-21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)!important}.v-application .elevation-20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)!important}.v-application .elevation-19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)!important}.v-application .elevation-18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)!important}.v-application .elevation-17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)!important}.v-application .elevation-16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)!important}.v-application .elevation-15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)!important}.v-application .elevation-14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)!important}.v-application .elevation-13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)!important}.v-application .elevation-12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)!important}.v-application .elevation-11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)!important}.v-application .elevation-10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)!important}.v-application .elevation-9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)!important}.v-application .elevation-8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)!important}.v-application .elevation-7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)!important}.v-application .elevation-6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)!important}.v-application .elevation-5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)!important}.v-application .elevation-4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)!important}.v-application .elevation-3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)!important}.v-application .elevation-2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important}.v-application .elevation-1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)!important}.v-application .elevation-0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.carousel-transition-enter{transform:translate(100%)}.carousel-transition-leave,.carousel-transition-leave-to{position:absolute;top:0;transform:translate(-100%)}.carousel-reverse-transition-enter{transform:translate(-100%)}.carousel-reverse-transition-leave,.carousel-reverse-transition-leave-to{position:absolute;top:0;transform:translate(100%)}.dialog-transition-enter-active,.dialog-transition-leave-active{pointer-events:none!important}.dialog-transition-enter,.dialog-transition-leave-to{transform:scale(.5);opacity:0}.dialog-transition-enter-to,.dialog-transition-leave{opacity:1}.dialog-bottom-transition-enter,.dialog-bottom-transition-leave-to{transform:translateY(100%)}.dialog-top-transition-enter,.dialog-top-transition-leave-to{transform:translateY(-100%)}.picker-reverse-transition-enter-active,.picker-reverse-transition-leave-active,.picker-transition-enter-active,.picker-transition-leave-active{transition:.3s cubic-bezier(0,0,.2,1)}.picker-reverse-transition-enter,.picker-reverse-transition-leave-to,.picker-transition-enter,.picker-transition-leave-to{opacity:0}.picker-reverse-transition-leave,.picker-reverse-transition-leave-active,.picker-reverse-transition-leave-to,.picker-transition-leave,.picker-transition-leave-active,.picker-transition-leave-to{position:absolute!important}.picker-transition-enter{transform:translateY(100%)}.picker-reverse-transition-enter,.picker-transition-leave-to{transform:translateY(-100%)}.picker-reverse-transition-leave-to{transform:translateY(100%)}.picker-title-transition-enter-to,.picker-title-transition-leave{transform:translate(0)}.picker-title-transition-enter{transform:translate(-100%)}.picker-title-transition-leave-to{opacity:0;transform:translate(100%)}.picker-title-transition-leave,.picker-title-transition-leave-active,.picker-title-transition-leave-to{position:absolute!important}.tab-transition-enter{transform:translate(100%)}.tab-transition-leave,.tab-transition-leave-active{position:absolute;top:0}.tab-transition-leave-to{position:absolute}.tab-reverse-transition-enter,.tab-transition-leave-to{transform:translate(-100%)}.tab-reverse-transition-leave,.tab-reverse-transition-leave-to{top:0;position:absolute;transform:translate(100%)}.expand-transition-enter-active,.expand-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.expand-transition-move{transition:transform .6s}.expand-x-transition-enter-active,.expand-x-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.expand-x-transition-move{transition:transform .6s}.scale-transition-enter-active,.scale-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scale-transition-move{transition:transform .6s}.scale-transition-enter,.scale-transition-leave,.scale-transition-leave-to{opacity:0;transform:scale(0)}.scale-rotate-transition-enter-active,.scale-rotate-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scale-rotate-transition-move{transition:transform .6s}.scale-rotate-transition-enter,.scale-rotate-transition-leave,.scale-rotate-transition-leave-to{opacity:0;transform:scale(0) rotate(-45deg)}.scale-rotate-reverse-transition-enter-active,.scale-rotate-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scale-rotate-reverse-transition-move{transition:transform .6s}.scale-rotate-reverse-transition-enter,.scale-rotate-reverse-transition-leave,.scale-rotate-reverse-transition-leave-to{opacity:0;transform:scale(0) rotate(45deg)}.message-transition-enter-active,.message-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.message-transition-move{transition:transform .6s}.message-transition-enter,.message-transition-leave-to{opacity:0;transform:translateY(-15px)}.message-transition-leave,.message-transition-leave-active{position:absolute}.slide-y-transition-enter-active,.slide-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.slide-y-transition-move{transition:transform .6s}.slide-y-transition-enter,.slide-y-transition-leave-to{opacity:0;transform:translateY(-15px)}.slide-y-reverse-transition-enter-active,.slide-y-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.slide-y-reverse-transition-move{transition:transform .6s}.slide-y-reverse-transition-enter,.slide-y-reverse-transition-leave-to{opacity:0;transform:translateY(15px)}.scroll-y-transition-enter-active,.scroll-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scroll-y-transition-move{transition:transform .6s}.scroll-y-transition-enter,.scroll-y-transition-leave-to{opacity:0}.scroll-y-transition-enter{transform:translateY(-15px)}.scroll-y-transition-leave-to{transform:translateY(15px)}.scroll-y-reverse-transition-enter-active,.scroll-y-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scroll-y-reverse-transition-move{transition:transform .6s}.scroll-y-reverse-transition-enter,.scroll-y-reverse-transition-leave-to{opacity:0}.scroll-y-reverse-transition-enter{transform:translateY(15px)}.scroll-y-reverse-transition-leave-to{transform:translateY(-15px)}.scroll-x-transition-enter-active,.scroll-x-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scroll-x-transition-move{transition:transform .6s}.scroll-x-transition-enter,.scroll-x-transition-leave-to{opacity:0}.scroll-x-transition-enter{transform:translateX(-15px)}.scroll-x-transition-leave-to{transform:translateX(15px)}.scroll-x-reverse-transition-enter-active,.scroll-x-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scroll-x-reverse-transition-move{transition:transform .6s}.scroll-x-reverse-transition-enter,.scroll-x-reverse-transition-leave-to{opacity:0}.scroll-x-reverse-transition-enter{transform:translateX(15px)}.scroll-x-reverse-transition-leave-to{transform:translateX(-15px)}.slide-x-transition-enter-active,.slide-x-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.slide-x-transition-move{transition:transform .6s}.slide-x-transition-enter,.slide-x-transition-leave-to{opacity:0;transform:translateX(-15px)}.slide-x-reverse-transition-enter-active,.slide-x-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.slide-x-reverse-transition-move{transition:transform .6s}.slide-x-reverse-transition-enter,.slide-x-reverse-transition-leave-to{opacity:0;transform:translateX(15px)}.fade-transition-enter-active,.fade-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.fade-transition-move{transition:transform .6s}.fade-transition-enter,.fade-transition-leave-to{opacity:0!important}.fab-transition-enter-active,.fab-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.fab-transition-move{transition:transform .6s}.fab-transition-enter,.fab-transition-leave-to{transform:scale(0) rotate(-45deg)}.v-application .blockquote{padding:16px 0 16px 24px;font-size:18px;font-weight:300}.v-application code,.v-application kbd{border-radius:3px;font-size:85%;font-weight:400}.v-application code{padding:.2em .4em}.v-application kbd{padding:.2em .4rem;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.theme--light.v-application code{background-color:rgba(0,0,0,.05);color:currentColor}.theme--light.v-application kbd{background:#212529;color:#fff}.theme--dark.v-application code{background-color:hsla(0,0%,100%,.1);color:currentColor}.theme--dark.v-application kbd{background:#212529;color:#fff}html{font-size:16px;overflow-x:hidden;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:rgba(0,0,0,0)}html.overflow-y-hidden{overflow-y:hidden!important}.v-application{font-family:\"Roboto\",sans-serif;line-height:1.5}.v-application ::-ms-clear,.v-application ::-ms-reveal{display:none}@supports(-webkit-touch-callout:none){body{cursor:pointer}}.v-application .theme--light.heading{color:rgba(0,0,0,.87)}.v-application .theme--dark.heading{color:#fff}.v-application ol,.v-application ul{padding-left:24px}.v-application .display-4{font-size:6rem!important;line-height:6rem;letter-spacing:-.015625em!important}.v-application .display-3,.v-application .display-4{font-weight:300;font-family:\"Roboto\",sans-serif!important}.v-application .display-3{font-size:3.75rem!important;line-height:3.75rem;letter-spacing:-.0083333333em!important}.v-application .display-2{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.v-application .display-1,.v-application .display-2{font-weight:400;font-family:\"Roboto\",sans-serif!important}.v-application .display-1{font-size:2.125rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.v-application .headline{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important}.v-application .headline,.v-application .title{line-height:2rem;font-family:\"Roboto\",sans-serif!important}.v-application .title{font-size:1.25rem!important;font-weight:500;letter-spacing:.0125em!important}.v-application .subtitle-2{font-size:.875rem!important;font-weight:500;letter-spacing:.0071428571em!important;line-height:1.375rem;font-family:\"Roboto\",sans-serif!important}.v-application .subtitle-1{font-size:1rem!important;letter-spacing:.009375em!important;line-height:1.75rem}.v-application .body-2,.v-application .subtitle-1{font-weight:400;font-family:\"Roboto\",sans-serif!important}.v-application .body-2{font-size:.875rem!important;letter-spacing:.0178571429em!important;line-height:1.25rem}.v-application .body-1{font-size:1rem!important;letter-spacing:.03125em!important;line-height:1.5rem}.v-application .body-1,.v-application .caption{font-weight:400;font-family:\"Roboto\",sans-serif!important}.v-application .caption{font-size:.75rem!important;letter-spacing:.0333333333em!important;line-height:1.25rem}.v-application .overline{font-size:.75rem!important;font-weight:500;letter-spacing:.1666666667em!important;line-height:2rem;text-transform:uppercase;font-family:\"Roboto\",sans-serif!important}.v-application p{margin-bottom:16px}@media only print{.v-application .hidden-print-only{display:none!important}}@media only screen{.v-application .hidden-screen-only{display:none!important}}@media only screen and (max-width:599.98px){.v-application .hidden-xs-only{display:none!important}}@media only screen and (min-width:600px)and (max-width:959.98px){.v-application .hidden-sm-only{display:none!important}}@media only screen and (max-width:959.98px){.v-application .hidden-sm-and-down{display:none!important}}@media only screen and (min-width:600px){.v-application .hidden-sm-and-up{display:none!important}}@media only screen and (min-width:960px)and (max-width:1263.98px){.v-application .hidden-md-only{display:none!important}}@media only screen and (max-width:1263.98px){.v-application .hidden-md-and-down{display:none!important}}@media only screen and (min-width:960px){.v-application .hidden-md-and-up{display:none!important}}@media only screen and (min-width:1264px)and (max-width:1903.98px){.v-application .hidden-lg-only{display:none!important}}@media only screen and (max-width:1903.98px){.v-application .hidden-lg-and-down{display:none!important}}@media only screen and (min-width:1264px){.v-application .hidden-lg-and-up{display:none!important}}@media only screen and (min-width:1904px){.v-application .hidden-xl-only{display:none!important}}.d-sr-only,.d-sr-only-focusable:not(:focus){border:0!important;clip:rect(0,0,0,0)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}.v-application .font-weight-thin{font-weight:100!important}.v-application .font-weight-light{font-weight:300!important}.v-application .font-weight-regular{font-weight:400!important}.v-application .font-weight-medium{font-weight:500!important}.v-application .font-weight-bold{font-weight:700!important}.v-application .font-weight-black{font-weight:900!important}.v-application .font-italic{font-style:italic!important}.v-application .transition-fast-out-slow-in{transition:.3s cubic-bezier(.4,0,.2,1)!important}.v-application .transition-linear-out-slow-in{transition:.3s cubic-bezier(0,0,.2,1)!important}.v-application .transition-fast-out-linear-in{transition:.3s cubic-bezier(.4,0,1,1)!important}.v-application .transition-ease-in-out{transition:.3s cubic-bezier(.4,0,.6,1)!important}.v-application .transition-fast-in-fast-out{transition:.3s cubic-bezier(.25,.8,.25,1)!important}.v-application .transition-swing{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.v-application .overflow-auto{overflow:auto!important}.v-application .overflow-hidden{overflow:hidden!important}.v-application .overflow-visible{overflow:visible!important}.v-application .overflow-x-auto{overflow-x:auto!important}.v-application .overflow-x-hidden{overflow-x:hidden!important}.v-application .overflow-y-auto{overflow-y:auto!important}.v-application .overflow-y-hidden{overflow-y:hidden!important}.v-application .d-none{display:none!important}.v-application .d-inline{display:inline!important}.v-application .d-inline-block{display:inline-block!important}.v-application .d-block{display:block!important}.v-application .d-table{display:table!important}.v-application .d-table-row{display:table-row!important}.v-application .d-table-cell{display:table-cell!important}.v-application .d-flex{display:flex!important}.v-application .d-inline-flex{display:inline-flex!important}.v-application .float-none{float:none!important}.v-application .float-left{float:left!important}.v-application .float-right{float:right!important}.v-application--is-rtl .float-end{float:left!important}.v-application--is-ltr .float-end,.v-application--is-rtl .float-start{float:right!important}.v-application--is-ltr .float-start{float:left!important}.v-application .flex-fill{flex:1 1 auto!important}.v-application .flex-row{flex-direction:row!important}.v-application .flex-column{flex-direction:column!important}.v-application .flex-row-reverse{flex-direction:row-reverse!important}.v-application .flex-column-reverse{flex-direction:column-reverse!important}.v-application .flex-grow-0{flex-grow:0!important}.v-application .flex-grow-1{flex-grow:1!important}.v-application .flex-shrink-0{flex-shrink:0!important}.v-application .flex-shrink-1{flex-shrink:1!important}.v-application .flex-wrap{flex-wrap:wrap!important}.v-application .flex-nowrap{flex-wrap:nowrap!important}.v-application .flex-wrap-reverse{flex-wrap:wrap-reverse!important}.v-application .justify-start{justify-content:flex-start!important}.v-application .justify-end{justify-content:flex-end!important}.v-application .justify-center{justify-content:center!important}.v-application .justify-space-between{justify-content:space-between!important}.v-application .justify-space-around{justify-content:space-around!important}.v-application .align-start{align-items:flex-start!important}.v-application .align-end{align-items:flex-end!important}.v-application .align-center{align-items:center!important}.v-application .align-baseline{align-items:baseline!important}.v-application .align-stretch{align-items:stretch!important}.v-application .align-content-start{align-content:flex-start!important}.v-application .align-content-end{align-content:flex-end!important}.v-application .align-content-center{align-content:center!important}.v-application .align-content-space-between{align-content:space-between!important}.v-application .align-content-space-around{align-content:space-around!important}.v-application .align-content-stretch{align-content:stretch!important}.v-application .align-self-auto{align-self:auto!important}.v-application .align-self-start{align-self:flex-start!important}.v-application .align-self-end{align-self:flex-end!important}.v-application .align-self-center{align-self:center!important}.v-application .align-self-baseline{align-self:baseline!important}.v-application .align-self-stretch{align-self:stretch!important}.v-application .order-first{order:-1!important}.v-application .order-0{order:0!important}.v-application .order-1{order:1!important}.v-application .order-2{order:2!important}.v-application .order-3{order:3!important}.v-application .order-4{order:4!important}.v-application .order-5{order:5!important}.v-application .order-6{order:6!important}.v-application .order-7{order:7!important}.v-application .order-8{order:8!important}.v-application .order-9{order:9!important}.v-application .order-10{order:10!important}.v-application .order-11{order:11!important}.v-application .order-12{order:12!important}.v-application .order-last{order:13!important}.v-application .ma-0{margin:0!important}.v-application .ma-1{margin:4px!important}.v-application .ma-2{margin:8px!important}.v-application .ma-3{margin:12px!important}.v-application .ma-4{margin:16px!important}.v-application .ma-5{margin:20px!important}.v-application .ma-6{margin:24px!important}.v-application .ma-7{margin:28px!important}.v-application .ma-8{margin:32px!important}.v-application .ma-9{margin:36px!important}.v-application .ma-10{margin:40px!important}.v-application .ma-11{margin:44px!important}.v-application .ma-12{margin:48px!important}.v-application .ma-13{margin:52px!important}.v-application .ma-14{margin:56px!important}.v-application .ma-15{margin:60px!important}.v-application .ma-16{margin:64px!important}.v-application .ma-auto{margin:auto!important}.v-application .mx-0{margin-right:0!important;margin-left:0!important}.v-application .mx-1{margin-right:4px!important;margin-left:4px!important}.v-application .mx-2{margin-right:8px!important;margin-left:8px!important}.v-application .mx-3{margin-right:12px!important;margin-left:12px!important}.v-application .mx-4{margin-right:16px!important;margin-left:16px!important}.v-application .mx-5{margin-right:20px!important;margin-left:20px!important}.v-application .mx-6{margin-right:24px!important;margin-left:24px!important}.v-application .mx-7{margin-right:28px!important;margin-left:28px!important}.v-application .mx-8{margin-right:32px!important;margin-left:32px!important}.v-application .mx-9{margin-right:36px!important;margin-left:36px!important}.v-application .mx-10{margin-right:40px!important;margin-left:40px!important}.v-application .mx-11{margin-right:44px!important;margin-left:44px!important}.v-application .mx-12{margin-right:48px!important;margin-left:48px!important}.v-application .mx-13{margin-right:52px!important;margin-left:52px!important}.v-application .mx-14{margin-right:56px!important;margin-left:56px!important}.v-application .mx-15{margin-right:60px!important;margin-left:60px!important}.v-application .mx-16{margin-right:64px!important;margin-left:64px!important}.v-application .mx-auto{margin-right:auto!important;margin-left:auto!important}.v-application .my-0{margin-top:0!important;margin-bottom:0!important}.v-application .my-1{margin-top:4px!important;margin-bottom:4px!important}.v-application .my-2{margin-top:8px!important;margin-bottom:8px!important}.v-application .my-3{margin-top:12px!important;margin-bottom:12px!important}.v-application .my-4{margin-top:16px!important;margin-bottom:16px!important}.v-application .my-5{margin-top:20px!important;margin-bottom:20px!important}.v-application .my-6{margin-top:24px!important;margin-bottom:24px!important}.v-application .my-7{margin-top:28px!important;margin-bottom:28px!important}.v-application .my-8{margin-top:32px!important;margin-bottom:32px!important}.v-application .my-9{margin-top:36px!important;margin-bottom:36px!important}.v-application .my-10{margin-top:40px!important;margin-bottom:40px!important}.v-application .my-11{margin-top:44px!important;margin-bottom:44px!important}.v-application .my-12{margin-top:48px!important;margin-bottom:48px!important}.v-application .my-13{margin-top:52px!important;margin-bottom:52px!important}.v-application .my-14{margin-top:56px!important;margin-bottom:56px!important}.v-application .my-15{margin-top:60px!important;margin-bottom:60px!important}.v-application .my-16{margin-top:64px!important;margin-bottom:64px!important}.v-application .my-auto{margin-top:auto!important;margin-bottom:auto!important}.v-application .mt-0{margin-top:0!important}.v-application .mt-1{margin-top:4px!important}.v-application .mt-2{margin-top:8px!important}.v-application .mt-3{margin-top:12px!important}.v-application .mt-4{margin-top:16px!important}.v-application .mt-5{margin-top:20px!important}.v-application .mt-6{margin-top:24px!important}.v-application .mt-7{margin-top:28px!important}.v-application .mt-8{margin-top:32px!important}.v-application .mt-9{margin-top:36px!important}.v-application .mt-10{margin-top:40px!important}.v-application .mt-11{margin-top:44px!important}.v-application .mt-12{margin-top:48px!important}.v-application .mt-13{margin-top:52px!important}.v-application .mt-14{margin-top:56px!important}.v-application .mt-15{margin-top:60px!important}.v-application .mt-16{margin-top:64px!important}.v-application .mt-auto{margin-top:auto!important}.v-application .mr-0{margin-right:0!important}.v-application .mr-1{margin-right:4px!important}.v-application .mr-2{margin-right:8px!important}.v-application .mr-3{margin-right:12px!important}.v-application .mr-4{margin-right:16px!important}.v-application .mr-5{margin-right:20px!important}.v-application .mr-6{margin-right:24px!important}.v-application .mr-7{margin-right:28px!important}.v-application .mr-8{margin-right:32px!important}.v-application .mr-9{margin-right:36px!important}.v-application .mr-10{margin-right:40px!important}.v-application .mr-11{margin-right:44px!important}.v-application .mr-12{margin-right:48px!important}.v-application .mr-13{margin-right:52px!important}.v-application .mr-14{margin-right:56px!important}.v-application .mr-15{margin-right:60px!important}.v-application .mr-16{margin-right:64px!important}.v-application .mr-auto{margin-right:auto!important}.v-application .mb-0{margin-bottom:0!important}.v-application .mb-1{margin-bottom:4px!important}.v-application .mb-2{margin-bottom:8px!important}.v-application .mb-3{margin-bottom:12px!important}.v-application .mb-4{margin-bottom:16px!important}.v-application .mb-5{margin-bottom:20px!important}.v-application .mb-6{margin-bottom:24px!important}.v-application .mb-7{margin-bottom:28px!important}.v-application .mb-8{margin-bottom:32px!important}.v-application .mb-9{margin-bottom:36px!important}.v-application .mb-10{margin-bottom:40px!important}.v-application .mb-11{margin-bottom:44px!important}.v-application .mb-12{margin-bottom:48px!important}.v-application .mb-13{margin-bottom:52px!important}.v-application .mb-14{margin-bottom:56px!important}.v-application .mb-15{margin-bottom:60px!important}.v-application .mb-16{margin-bottom:64px!important}.v-application .mb-auto{margin-bottom:auto!important}.v-application .ml-0{margin-left:0!important}.v-application .ml-1{margin-left:4px!important}.v-application .ml-2{margin-left:8px!important}.v-application .ml-3{margin-left:12px!important}.v-application .ml-4{margin-left:16px!important}.v-application .ml-5{margin-left:20px!important}.v-application .ml-6{margin-left:24px!important}.v-application .ml-7{margin-left:28px!important}.v-application .ml-8{margin-left:32px!important}.v-application .ml-9{margin-left:36px!important}.v-application .ml-10{margin-left:40px!important}.v-application .ml-11{margin-left:44px!important}.v-application .ml-12{margin-left:48px!important}.v-application .ml-13{margin-left:52px!important}.v-application .ml-14{margin-left:56px!important}.v-application .ml-15{margin-left:60px!important}.v-application .ml-16{margin-left:64px!important}.v-application .ml-auto{margin-left:auto!important}.v-application--is-ltr .ms-0{margin-left:0!important}.v-application--is-rtl .ms-0{margin-right:0!important}.v-application--is-ltr .ms-1{margin-left:4px!important}.v-application--is-rtl .ms-1{margin-right:4px!important}.v-application--is-ltr .ms-2{margin-left:8px!important}.v-application--is-rtl .ms-2{margin-right:8px!important}.v-application--is-ltr .ms-3{margin-left:12px!important}.v-application--is-rtl .ms-3{margin-right:12px!important}.v-application--is-ltr .ms-4{margin-left:16px!important}.v-application--is-rtl .ms-4{margin-right:16px!important}.v-application--is-ltr .ms-5{margin-left:20px!important}.v-application--is-rtl .ms-5{margin-right:20px!important}.v-application--is-ltr .ms-6{margin-left:24px!important}.v-application--is-rtl .ms-6{margin-right:24px!important}.v-application--is-ltr .ms-7{margin-left:28px!important}.v-application--is-rtl .ms-7{margin-right:28px!important}.v-application--is-ltr .ms-8{margin-left:32px!important}.v-application--is-rtl .ms-8{margin-right:32px!important}.v-application--is-ltr .ms-9{margin-left:36px!important}.v-application--is-rtl .ms-9{margin-right:36px!important}.v-application--is-ltr .ms-10{margin-left:40px!important}.v-application--is-rtl .ms-10{margin-right:40px!important}.v-application--is-ltr .ms-11{margin-left:44px!important}.v-application--is-rtl .ms-11{margin-right:44px!important}.v-application--is-ltr .ms-12{margin-left:48px!important}.v-application--is-rtl .ms-12{margin-right:48px!important}.v-application--is-ltr .ms-13{margin-left:52px!important}.v-application--is-rtl .ms-13{margin-right:52px!important}.v-application--is-ltr .ms-14{margin-left:56px!important}.v-application--is-rtl .ms-14{margin-right:56px!important}.v-application--is-ltr .ms-15{margin-left:60px!important}.v-application--is-rtl .ms-15{margin-right:60px!important}.v-application--is-ltr .ms-16{margin-left:64px!important}.v-application--is-rtl .ms-16{margin-right:64px!important}.v-application--is-ltr .ms-auto{margin-left:auto!important}.v-application--is-rtl .ms-auto{margin-right:auto!important}.v-application--is-ltr .me-0{margin-right:0!important}.v-application--is-rtl .me-0{margin-left:0!important}.v-application--is-ltr .me-1{margin-right:4px!important}.v-application--is-rtl .me-1{margin-left:4px!important}.v-application--is-ltr .me-2{margin-right:8px!important}.v-application--is-rtl .me-2{margin-left:8px!important}.v-application--is-ltr .me-3{margin-right:12px!important}.v-application--is-rtl .me-3{margin-left:12px!important}.v-application--is-ltr .me-4{margin-right:16px!important}.v-application--is-rtl .me-4{margin-left:16px!important}.v-application--is-ltr .me-5{margin-right:20px!important}.v-application--is-rtl .me-5{margin-left:20px!important}.v-application--is-ltr .me-6{margin-right:24px!important}.v-application--is-rtl .me-6{margin-left:24px!important}.v-application--is-ltr .me-7{margin-right:28px!important}.v-application--is-rtl .me-7{margin-left:28px!important}.v-application--is-ltr .me-8{margin-right:32px!important}.v-application--is-rtl .me-8{margin-left:32px!important}.v-application--is-ltr .me-9{margin-right:36px!important}.v-application--is-rtl .me-9{margin-left:36px!important}.v-application--is-ltr .me-10{margin-right:40px!important}.v-application--is-rtl .me-10{margin-left:40px!important}.v-application--is-ltr .me-11{margin-right:44px!important}.v-application--is-rtl .me-11{margin-left:44px!important}.v-application--is-ltr .me-12{margin-right:48px!important}.v-application--is-rtl .me-12{margin-left:48px!important}.v-application--is-ltr .me-13{margin-right:52px!important}.v-application--is-rtl .me-13{margin-left:52px!important}.v-application--is-ltr .me-14{margin-right:56px!important}.v-application--is-rtl .me-14{margin-left:56px!important}.v-application--is-ltr .me-15{margin-right:60px!important}.v-application--is-rtl .me-15{margin-left:60px!important}.v-application--is-ltr .me-16{margin-right:64px!important}.v-application--is-rtl .me-16{margin-left:64px!important}.v-application--is-ltr .me-auto{margin-right:auto!important}.v-application--is-rtl .me-auto{margin-left:auto!important}.v-application .ma-n1{margin:-4px!important}.v-application .ma-n2{margin:-8px!important}.v-application .ma-n3{margin:-12px!important}.v-application .ma-n4{margin:-16px!important}.v-application .ma-n5{margin:-20px!important}.v-application .ma-n6{margin:-24px!important}.v-application .ma-n7{margin:-28px!important}.v-application .ma-n8{margin:-32px!important}.v-application .ma-n9{margin:-36px!important}.v-application .ma-n10{margin:-40px!important}.v-application .ma-n11{margin:-44px!important}.v-application .ma-n12{margin:-48px!important}.v-application .ma-n13{margin:-52px!important}.v-application .ma-n14{margin:-56px!important}.v-application .ma-n15{margin:-60px!important}.v-application .ma-n16{margin:-64px!important}.v-application .mx-n1{margin-right:-4px!important;margin-left:-4px!important}.v-application .mx-n2{margin-right:-8px!important;margin-left:-8px!important}.v-application .mx-n3{margin-right:-12px!important;margin-left:-12px!important}.v-application .mx-n4{margin-right:-16px!important;margin-left:-16px!important}.v-application .mx-n5{margin-right:-20px!important;margin-left:-20px!important}.v-application .mx-n6{margin-right:-24px!important;margin-left:-24px!important}.v-application .mx-n7{margin-right:-28px!important;margin-left:-28px!important}.v-application .mx-n8{margin-right:-32px!important;margin-left:-32px!important}.v-application .mx-n9{margin-right:-36px!important;margin-left:-36px!important}.v-application .mx-n10{margin-right:-40px!important;margin-left:-40px!important}.v-application .mx-n11{margin-right:-44px!important;margin-left:-44px!important}.v-application .mx-n12{margin-right:-48px!important;margin-left:-48px!important}.v-application .mx-n13{margin-right:-52px!important;margin-left:-52px!important}.v-application .mx-n14{margin-right:-56px!important;margin-left:-56px!important}.v-application .mx-n15{margin-right:-60px!important;margin-left:-60px!important}.v-application .mx-n16{margin-right:-64px!important;margin-left:-64px!important}.v-application .my-n1{margin-top:-4px!important;margin-bottom:-4px!important}.v-application .my-n2{margin-top:-8px!important;margin-bottom:-8px!important}.v-application .my-n3{margin-top:-12px!important;margin-bottom:-12px!important}.v-application .my-n4{margin-top:-16px!important;margin-bottom:-16px!important}.v-application .my-n5{margin-top:-20px!important;margin-bottom:-20px!important}.v-application .my-n6{margin-top:-24px!important;margin-bottom:-24px!important}.v-application .my-n7{margin-top:-28px!important;margin-bottom:-28px!important}.v-application .my-n8{margin-top:-32px!important;margin-bottom:-32px!important}.v-application .my-n9{margin-top:-36px!important;margin-bottom:-36px!important}.v-application .my-n10{margin-top:-40px!important;margin-bottom:-40px!important}.v-application .my-n11{margin-top:-44px!important;margin-bottom:-44px!important}.v-application .my-n12{margin-top:-48px!important;margin-bottom:-48px!important}.v-application .my-n13{margin-top:-52px!important;margin-bottom:-52px!important}.v-application .my-n14{margin-top:-56px!important;margin-bottom:-56px!important}.v-application .my-n15{margin-top:-60px!important;margin-bottom:-60px!important}.v-application .my-n16{margin-top:-64px!important;margin-bottom:-64px!important}.v-application .mt-n1{margin-top:-4px!important}.v-application .mt-n2{margin-top:-8px!important}.v-application .mt-n3{margin-top:-12px!important}.v-application .mt-n4{margin-top:-16px!important}.v-application .mt-n5{margin-top:-20px!important}.v-application .mt-n6{margin-top:-24px!important}.v-application .mt-n7{margin-top:-28px!important}.v-application .mt-n8{margin-top:-32px!important}.v-application .mt-n9{margin-top:-36px!important}.v-application .mt-n10{margin-top:-40px!important}.v-application .mt-n11{margin-top:-44px!important}.v-application .mt-n12{margin-top:-48px!important}.v-application .mt-n13{margin-top:-52px!important}.v-application .mt-n14{margin-top:-56px!important}.v-application .mt-n15{margin-top:-60px!important}.v-application .mt-n16{margin-top:-64px!important}.v-application .mr-n1{margin-right:-4px!important}.v-application .mr-n2{margin-right:-8px!important}.v-application .mr-n3{margin-right:-12px!important}.v-application .mr-n4{margin-right:-16px!important}.v-application .mr-n5{margin-right:-20px!important}.v-application .mr-n6{margin-right:-24px!important}.v-application .mr-n7{margin-right:-28px!important}.v-application .mr-n8{margin-right:-32px!important}.v-application .mr-n9{margin-right:-36px!important}.v-application .mr-n10{margin-right:-40px!important}.v-application .mr-n11{margin-right:-44px!important}.v-application .mr-n12{margin-right:-48px!important}.v-application .mr-n13{margin-right:-52px!important}.v-application .mr-n14{margin-right:-56px!important}.v-application .mr-n15{margin-right:-60px!important}.v-application .mr-n16{margin-right:-64px!important}.v-application .mb-n1{margin-bottom:-4px!important}.v-application .mb-n2{margin-bottom:-8px!important}.v-application .mb-n3{margin-bottom:-12px!important}.v-application .mb-n4{margin-bottom:-16px!important}.v-application .mb-n5{margin-bottom:-20px!important}.v-application .mb-n6{margin-bottom:-24px!important}.v-application .mb-n7{margin-bottom:-28px!important}.v-application .mb-n8{margin-bottom:-32px!important}.v-application .mb-n9{margin-bottom:-36px!important}.v-application .mb-n10{margin-bottom:-40px!important}.v-application .mb-n11{margin-bottom:-44px!important}.v-application .mb-n12{margin-bottom:-48px!important}.v-application .mb-n13{margin-bottom:-52px!important}.v-application .mb-n14{margin-bottom:-56px!important}.v-application .mb-n15{margin-bottom:-60px!important}.v-application .mb-n16{margin-bottom:-64px!important}.v-application .ml-n1{margin-left:-4px!important}.v-application .ml-n2{margin-left:-8px!important}.v-application .ml-n3{margin-left:-12px!important}.v-application .ml-n4{margin-left:-16px!important}.v-application .ml-n5{margin-left:-20px!important}.v-application .ml-n6{margin-left:-24px!important}.v-application .ml-n7{margin-left:-28px!important}.v-application .ml-n8{margin-left:-32px!important}.v-application .ml-n9{margin-left:-36px!important}.v-application .ml-n10{margin-left:-40px!important}.v-application .ml-n11{margin-left:-44px!important}.v-application .ml-n12{margin-left:-48px!important}.v-application .ml-n13{margin-left:-52px!important}.v-application .ml-n14{margin-left:-56px!important}.v-application .ml-n15{margin-left:-60px!important}.v-application .ml-n16{margin-left:-64px!important}.v-application--is-ltr .ms-n1{margin-left:-4px!important}.v-application--is-rtl .ms-n1{margin-right:-4px!important}.v-application--is-ltr .ms-n2{margin-left:-8px!important}.v-application--is-rtl .ms-n2{margin-right:-8px!important}.v-application--is-ltr .ms-n3{margin-left:-12px!important}.v-application--is-rtl .ms-n3{margin-right:-12px!important}.v-application--is-ltr .ms-n4{margin-left:-16px!important}.v-application--is-rtl .ms-n4{margin-right:-16px!important}.v-application--is-ltr .ms-n5{margin-left:-20px!important}.v-application--is-rtl .ms-n5{margin-right:-20px!important}.v-application--is-ltr .ms-n6{margin-left:-24px!important}.v-application--is-rtl .ms-n6{margin-right:-24px!important}.v-application--is-ltr .ms-n7{margin-left:-28px!important}.v-application--is-rtl .ms-n7{margin-right:-28px!important}.v-application--is-ltr .ms-n8{margin-left:-32px!important}.v-application--is-rtl .ms-n8{margin-right:-32px!important}.v-application--is-ltr .ms-n9{margin-left:-36px!important}.v-application--is-rtl .ms-n9{margin-right:-36px!important}.v-application--is-ltr .ms-n10{margin-left:-40px!important}.v-application--is-rtl .ms-n10{margin-right:-40px!important}.v-application--is-ltr .ms-n11{margin-left:-44px!important}.v-application--is-rtl .ms-n11{margin-right:-44px!important}.v-application--is-ltr .ms-n12{margin-left:-48px!important}.v-application--is-rtl .ms-n12{margin-right:-48px!important}.v-application--is-ltr .ms-n13{margin-left:-52px!important}.v-application--is-rtl .ms-n13{margin-right:-52px!important}.v-application--is-ltr .ms-n14{margin-left:-56px!important}.v-application--is-rtl .ms-n14{margin-right:-56px!important}.v-application--is-ltr .ms-n15{margin-left:-60px!important}.v-application--is-rtl .ms-n15{margin-right:-60px!important}.v-application--is-ltr .ms-n16{margin-left:-64px!important}.v-application--is-rtl .ms-n16{margin-right:-64px!important}.v-application--is-ltr .me-n1{margin-right:-4px!important}.v-application--is-rtl .me-n1{margin-left:-4px!important}.v-application--is-ltr .me-n2{margin-right:-8px!important}.v-application--is-rtl .me-n2{margin-left:-8px!important}.v-application--is-ltr .me-n3{margin-right:-12px!important}.v-application--is-rtl .me-n3{margin-left:-12px!important}.v-application--is-ltr .me-n4{margin-right:-16px!important}.v-application--is-rtl .me-n4{margin-left:-16px!important}.v-application--is-ltr .me-n5{margin-right:-20px!important}.v-application--is-rtl .me-n5{margin-left:-20px!important}.v-application--is-ltr .me-n6{margin-right:-24px!important}.v-application--is-rtl .me-n6{margin-left:-24px!important}.v-application--is-ltr .me-n7{margin-right:-28px!important}.v-application--is-rtl .me-n7{margin-left:-28px!important}.v-application--is-ltr .me-n8{margin-right:-32px!important}.v-application--is-rtl .me-n8{margin-left:-32px!important}.v-application--is-ltr .me-n9{margin-right:-36px!important}.v-application--is-rtl .me-n9{margin-left:-36px!important}.v-application--is-ltr .me-n10{margin-right:-40px!important}.v-application--is-rtl .me-n10{margin-left:-40px!important}.v-application--is-ltr .me-n11{margin-right:-44px!important}.v-application--is-rtl .me-n11{margin-left:-44px!important}.v-application--is-ltr .me-n12{margin-right:-48px!important}.v-application--is-rtl .me-n12{margin-left:-48px!important}.v-application--is-ltr .me-n13{margin-right:-52px!important}.v-application--is-rtl .me-n13{margin-left:-52px!important}.v-application--is-ltr .me-n14{margin-right:-56px!important}.v-application--is-rtl .me-n14{margin-left:-56px!important}.v-application--is-ltr .me-n15{margin-right:-60px!important}.v-application--is-rtl .me-n15{margin-left:-60px!important}.v-application--is-ltr .me-n16{margin-right:-64px!important}.v-application--is-rtl .me-n16{margin-left:-64px!important}.v-application .pa-0{padding:0!important}.v-application .pa-1{padding:4px!important}.v-application .pa-2{padding:8px!important}.v-application .pa-3{padding:12px!important}.v-application .pa-4{padding:16px!important}.v-application .pa-5{padding:20px!important}.v-application .pa-6{padding:24px!important}.v-application .pa-7{padding:28px!important}.v-application .pa-8{padding:32px!important}.v-application .pa-9{padding:36px!important}.v-application .pa-10{padding:40px!important}.v-application .pa-11{padding:44px!important}.v-application .pa-12{padding:48px!important}.v-application .pa-13{padding:52px!important}.v-application .pa-14{padding:56px!important}.v-application .pa-15{padding:60px!important}.v-application .pa-16{padding:64px!important}.v-application .px-0{padding-right:0!important;padding-left:0!important}.v-application .px-1{padding-right:4px!important;padding-left:4px!important}.v-application .px-2{padding-right:8px!important;padding-left:8px!important}.v-application .px-3{padding-right:12px!important;padding-left:12px!important}.v-application .px-4{padding-right:16px!important;padding-left:16px!important}.v-application .px-5{padding-right:20px!important;padding-left:20px!important}.v-application .px-6{padding-right:24px!important;padding-left:24px!important}.v-application .px-7{padding-right:28px!important;padding-left:28px!important}.v-application .px-8{padding-right:32px!important;padding-left:32px!important}.v-application .px-9{padding-right:36px!important;padding-left:36px!important}.v-application .px-10{padding-right:40px!important;padding-left:40px!important}.v-application .px-11{padding-right:44px!important;padding-left:44px!important}.v-application .px-12{padding-right:48px!important;padding-left:48px!important}.v-application .px-13{padding-right:52px!important;padding-left:52px!important}.v-application .px-14{padding-right:56px!important;padding-left:56px!important}.v-application .px-15{padding-right:60px!important;padding-left:60px!important}.v-application .px-16{padding-right:64px!important;padding-left:64px!important}.v-application .py-0{padding-top:0!important;padding-bottom:0!important}.v-application .py-1{padding-top:4px!important;padding-bottom:4px!important}.v-application .py-2{padding-top:8px!important;padding-bottom:8px!important}.v-application .py-3{padding-top:12px!important;padding-bottom:12px!important}.v-application .py-4{padding-top:16px!important;padding-bottom:16px!important}.v-application .py-5{padding-top:20px!important;padding-bottom:20px!important}.v-application .py-6{padding-top:24px!important;padding-bottom:24px!important}.v-application .py-7{padding-top:28px!important;padding-bottom:28px!important}.v-application .py-8{padding-top:32px!important;padding-bottom:32px!important}.v-application .py-9{padding-top:36px!important;padding-bottom:36px!important}.v-application .py-10{padding-top:40px!important;padding-bottom:40px!important}.v-application .py-11{padding-top:44px!important;padding-bottom:44px!important}.v-application .py-12{padding-top:48px!important;padding-bottom:48px!important}.v-application .py-13{padding-top:52px!important;padding-bottom:52px!important}.v-application .py-14{padding-top:56px!important;padding-bottom:56px!important}.v-application .py-15{padding-top:60px!important;padding-bottom:60px!important}.v-application .py-16{padding-top:64px!important;padding-bottom:64px!important}.v-application .pt-0{padding-top:0!important}.v-application .pt-1{padding-top:4px!important}.v-application .pt-2{padding-top:8px!important}.v-application .pt-3{padding-top:12px!important}.v-application .pt-4{padding-top:16px!important}.v-application .pt-5{padding-top:20px!important}.v-application .pt-6{padding-top:24px!important}.v-application .pt-7{padding-top:28px!important}.v-application .pt-8{padding-top:32px!important}.v-application .pt-9{padding-top:36px!important}.v-application .pt-10{padding-top:40px!important}.v-application .pt-11{padding-top:44px!important}.v-application .pt-12{padding-top:48px!important}.v-application .pt-13{padding-top:52px!important}.v-application .pt-14{padding-top:56px!important}.v-application .pt-15{padding-top:60px!important}.v-application .pt-16{padding-top:64px!important}.v-application .pr-0{padding-right:0!important}.v-application .pr-1{padding-right:4px!important}.v-application .pr-2{padding-right:8px!important}.v-application .pr-3{padding-right:12px!important}.v-application .pr-4{padding-right:16px!important}.v-application .pr-5{padding-right:20px!important}.v-application .pr-6{padding-right:24px!important}.v-application .pr-7{padding-right:28px!important}.v-application .pr-8{padding-right:32px!important}.v-application .pr-9{padding-right:36px!important}.v-application .pr-10{padding-right:40px!important}.v-application .pr-11{padding-right:44px!important}.v-application .pr-12{padding-right:48px!important}.v-application .pr-13{padding-right:52px!important}.v-application .pr-14{padding-right:56px!important}.v-application .pr-15{padding-right:60px!important}.v-application .pr-16{padding-right:64px!important}.v-application .pb-0{padding-bottom:0!important}.v-application .pb-1{padding-bottom:4px!important}.v-application .pb-2{padding-bottom:8px!important}.v-application .pb-3{padding-bottom:12px!important}.v-application .pb-4{padding-bottom:16px!important}.v-application .pb-5{padding-bottom:20px!important}.v-application .pb-6{padding-bottom:24px!important}.v-application .pb-7{padding-bottom:28px!important}.v-application .pb-8{padding-bottom:32px!important}.v-application .pb-9{padding-bottom:36px!important}.v-application .pb-10{padding-bottom:40px!important}.v-application .pb-11{padding-bottom:44px!important}.v-application .pb-12{padding-bottom:48px!important}.v-application .pb-13{padding-bottom:52px!important}.v-application .pb-14{padding-bottom:56px!important}.v-application .pb-15{padding-bottom:60px!important}.v-application .pb-16{padding-bottom:64px!important}.v-application .pl-0{padding-left:0!important}.v-application .pl-1{padding-left:4px!important}.v-application .pl-2{padding-left:8px!important}.v-application .pl-3{padding-left:12px!important}.v-application .pl-4{padding-left:16px!important}.v-application .pl-5{padding-left:20px!important}.v-application .pl-6{padding-left:24px!important}.v-application .pl-7{padding-left:28px!important}.v-application .pl-8{padding-left:32px!important}.v-application .pl-9{padding-left:36px!important}.v-application .pl-10{padding-left:40px!important}.v-application .pl-11{padding-left:44px!important}.v-application .pl-12{padding-left:48px!important}.v-application .pl-13{padding-left:52px!important}.v-application .pl-14{padding-left:56px!important}.v-application .pl-15{padding-left:60px!important}.v-application .pl-16{padding-left:64px!important}.v-application--is-ltr .ps-0{padding-left:0!important}.v-application--is-rtl .ps-0{padding-right:0!important}.v-application--is-ltr .ps-1{padding-left:4px!important}.v-application--is-rtl .ps-1{padding-right:4px!important}.v-application--is-ltr .ps-2{padding-left:8px!important}.v-application--is-rtl .ps-2{padding-right:8px!important}.v-application--is-ltr .ps-3{padding-left:12px!important}.v-application--is-rtl .ps-3{padding-right:12px!important}.v-application--is-ltr .ps-4{padding-left:16px!important}.v-application--is-rtl .ps-4{padding-right:16px!important}.v-application--is-ltr .ps-5{padding-left:20px!important}.v-application--is-rtl .ps-5{padding-right:20px!important}.v-application--is-ltr .ps-6{padding-left:24px!important}.v-application--is-rtl .ps-6{padding-right:24px!important}.v-application--is-ltr .ps-7{padding-left:28px!important}.v-application--is-rtl .ps-7{padding-right:28px!important}.v-application--is-ltr .ps-8{padding-left:32px!important}.v-application--is-rtl .ps-8{padding-right:32px!important}.v-application--is-ltr .ps-9{padding-left:36px!important}.v-application--is-rtl .ps-9{padding-right:36px!important}.v-application--is-ltr .ps-10{padding-left:40px!important}.v-application--is-rtl .ps-10{padding-right:40px!important}.v-application--is-ltr .ps-11{padding-left:44px!important}.v-application--is-rtl .ps-11{padding-right:44px!important}.v-application--is-ltr .ps-12{padding-left:48px!important}.v-application--is-rtl .ps-12{padding-right:48px!important}.v-application--is-ltr .ps-13{padding-left:52px!important}.v-application--is-rtl .ps-13{padding-right:52px!important}.v-application--is-ltr .ps-14{padding-left:56px!important}.v-application--is-rtl .ps-14{padding-right:56px!important}.v-application--is-ltr .ps-15{padding-left:60px!important}.v-application--is-rtl .ps-15{padding-right:60px!important}.v-application--is-ltr .ps-16{padding-left:64px!important}.v-application--is-rtl .ps-16{padding-right:64px!important}.v-application--is-ltr .pe-0{padding-right:0!important}.v-application--is-rtl .pe-0{padding-left:0!important}.v-application--is-ltr .pe-1{padding-right:4px!important}.v-application--is-rtl .pe-1{padding-left:4px!important}.v-application--is-ltr .pe-2{padding-right:8px!important}.v-application--is-rtl .pe-2{padding-left:8px!important}.v-application--is-ltr .pe-3{padding-right:12px!important}.v-application--is-rtl .pe-3{padding-left:12px!important}.v-application--is-ltr .pe-4{padding-right:16px!important}.v-application--is-rtl .pe-4{padding-left:16px!important}.v-application--is-ltr .pe-5{padding-right:20px!important}.v-application--is-rtl .pe-5{padding-left:20px!important}.v-application--is-ltr .pe-6{padding-right:24px!important}.v-application--is-rtl .pe-6{padding-left:24px!important}.v-application--is-ltr .pe-7{padding-right:28px!important}.v-application--is-rtl .pe-7{padding-left:28px!important}.v-application--is-ltr .pe-8{padding-right:32px!important}.v-application--is-rtl .pe-8{padding-left:32px!important}.v-application--is-ltr .pe-9{padding-right:36px!important}.v-application--is-rtl .pe-9{padding-left:36px!important}.v-application--is-ltr .pe-10{padding-right:40px!important}.v-application--is-rtl .pe-10{padding-left:40px!important}.v-application--is-ltr .pe-11{padding-right:44px!important}.v-application--is-rtl .pe-11{padding-left:44px!important}.v-application--is-ltr .pe-12{padding-right:48px!important}.v-application--is-rtl .pe-12{padding-left:48px!important}.v-application--is-ltr .pe-13{padding-right:52px!important}.v-application--is-rtl .pe-13{padding-left:52px!important}.v-application--is-ltr .pe-14{padding-right:56px!important}.v-application--is-rtl .pe-14{padding-left:56px!important}.v-application--is-ltr .pe-15{padding-right:60px!important}.v-application--is-rtl .pe-15{padding-left:60px!important}.v-application--is-ltr .pe-16{padding-right:64px!important}.v-application--is-rtl .pe-16{padding-left:64px!important}.v-application .rounded-0{border-radius:0!important}.v-application .rounded-sm{border-radius:2px!important}.v-application .rounded{border-radius:4px!important}.v-application .rounded-lg{border-radius:8px!important}.v-application .rounded-xl{border-radius:24px!important}.v-application .rounded-pill{border-radius:9999px!important}.v-application .rounded-circle{border-radius:50%!important}.v-application .rounded-t-0{border-top-left-radius:0!important;border-top-right-radius:0!important}.v-application .rounded-t-sm{border-top-left-radius:2px!important;border-top-right-radius:2px!important}.v-application .rounded-t{border-top-left-radius:4px!important;border-top-right-radius:4px!important}.v-application .rounded-t-lg{border-top-left-radius:8px!important;border-top-right-radius:8px!important}.v-application .rounded-t-xl{border-top-left-radius:24px!important;border-top-right-radius:24px!important}.v-application .rounded-t-pill{border-top-left-radius:9999px!important;border-top-right-radius:9999px!important}.v-application .rounded-t-circle{border-top-left-radius:50%!important;border-top-right-radius:50%!important}.v-application .rounded-r-0{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.v-application .rounded-r-sm{border-top-right-radius:2px!important;border-bottom-right-radius:2px!important}.v-application .rounded-r{border-top-right-radius:4px!important;border-bottom-right-radius:4px!important}.v-application .rounded-r-lg{border-top-right-radius:8px!important;border-bottom-right-radius:8px!important}.v-application .rounded-r-xl{border-top-right-radius:24px!important;border-bottom-right-radius:24px!important}.v-application .rounded-r-pill{border-top-right-radius:9999px!important;border-bottom-right-radius:9999px!important}.v-application .rounded-r-circle{border-top-right-radius:50%!important;border-bottom-right-radius:50%!important}.v-application .rounded-b-0{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.v-application .rounded-b-sm{border-bottom-left-radius:2px!important;border-bottom-right-radius:2px!important}.v-application .rounded-b{border-bottom-left-radius:4px!important;border-bottom-right-radius:4px!important}.v-application .rounded-b-lg{border-bottom-left-radius:8px!important;border-bottom-right-radius:8px!important}.v-application .rounded-b-xl{border-bottom-left-radius:24px!important;border-bottom-right-radius:24px!important}.v-application .rounded-b-pill{border-bottom-left-radius:9999px!important;border-bottom-right-radius:9999px!important}.v-application .rounded-b-circle{border-bottom-left-radius:50%!important;border-bottom-right-radius:50%!important}.v-application .rounded-l-0{border-top-left-radius:0!important;border-bottom-left-radius:0!important}.v-application .rounded-l-sm{border-top-left-radius:2px!important;border-bottom-left-radius:2px!important}.v-application .rounded-l{border-top-left-radius:4px!important;border-bottom-left-radius:4px!important}.v-application .rounded-l-lg{border-top-left-radius:8px!important;border-bottom-left-radius:8px!important}.v-application .rounded-l-xl{border-top-left-radius:24px!important;border-bottom-left-radius:24px!important}.v-application .rounded-l-pill{border-top-left-radius:9999px!important;border-bottom-left-radius:9999px!important}.v-application .rounded-l-circle{border-top-left-radius:50%!important;border-bottom-left-radius:50%!important}.v-application .rounded-tl-0{border-top-left-radius:0!important}.v-application .rounded-tl-sm{border-top-left-radius:2px!important}.v-application .rounded-tl{border-top-left-radius:4px!important}.v-application .rounded-tl-lg{border-top-left-radius:8px!important}.v-application .rounded-tl-xl{border-top-left-radius:24px!important}.v-application .rounded-tl-pill{border-top-left-radius:9999px!important}.v-application .rounded-tl-circle{border-top-left-radius:50%!important}.v-application .rounded-tr-0{border-top-right-radius:0!important}.v-application .rounded-tr-sm{border-top-right-radius:2px!important}.v-application .rounded-tr{border-top-right-radius:4px!important}.v-application .rounded-tr-lg{border-top-right-radius:8px!important}.v-application .rounded-tr-xl{border-top-right-radius:24px!important}.v-application .rounded-tr-pill{border-top-right-radius:9999px!important}.v-application .rounded-tr-circle{border-top-right-radius:50%!important}.v-application .rounded-br-0{border-bottom-right-radius:0!important}.v-application .rounded-br-sm{border-bottom-right-radius:2px!important}.v-application .rounded-br{border-bottom-right-radius:4px!important}.v-application .rounded-br-lg{border-bottom-right-radius:8px!important}.v-application .rounded-br-xl{border-bottom-right-radius:24px!important}.v-application .rounded-br-pill{border-bottom-right-radius:9999px!important}.v-application .rounded-br-circle{border-bottom-right-radius:50%!important}.v-application .rounded-bl-0{border-bottom-left-radius:0!important}.v-application .rounded-bl-sm{border-bottom-left-radius:2px!important}.v-application .rounded-bl{border-bottom-left-radius:4px!important}.v-application .rounded-bl-lg{border-bottom-left-radius:8px!important}.v-application .rounded-bl-xl{border-bottom-left-radius:24px!important}.v-application .rounded-bl-pill{border-bottom-left-radius:9999px!important}.v-application .rounded-bl-circle{border-bottom-left-radius:50%!important}.v-application .text-left{text-align:left!important}.v-application .text-right{text-align:right!important}.v-application .text-center{text-align:center!important}.v-application .text-justify{text-align:justify!important}[dir=ltr] .v-application .text-start{text-align:left!important}[dir=ltr] .v-application .text-end,[dir=rtl] .v-application .text-start{text-align:right!important}[dir=rtl] .v-application .text-end{text-align:left!important}.v-application .text-decoration-line-through{text-decoration:line-through!important}.v-application .text-decoration-none{text-decoration:none!important}.v-application .text-decoration-overline{text-decoration:overline!important}.v-application .text-decoration-underline{text-decoration:underline!important}.v-application .text-wrap{white-space:normal!important}.v-application .text-no-wrap{white-space:nowrap!important}.v-application .text-pre{white-space:pre!important}.v-application .text-pre-line{white-space:pre-line!important}.v-application .text-pre-wrap{white-space:pre-wrap!important}.v-application .text-break{word-wrap:break-word!important;word-break:break-word!important}.v-application .text-truncate{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.v-application .text-none{text-transform:none!important}.v-application .text-capitalize{text-transform:capitalize!important}.v-application .text-lowercase{text-transform:lowercase!important}.v-application .text-uppercase{text-transform:uppercase!important}.v-application .text-h1{font-size:6rem!important;line-height:6rem;letter-spacing:-.015625em!important}.v-application .text-h1,.v-application .text-h2{font-weight:300;font-family:\"Roboto\",sans-serif!important}.v-application .text-h2{font-size:3.75rem!important;line-height:3.75rem;letter-spacing:-.0083333333em!important}.v-application .text-h3{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.v-application .text-h3,.v-application .text-h4{font-weight:400;font-family:\"Roboto\",sans-serif!important}.v-application .text-h4{font-size:2.125rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.v-application .text-h5{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important}.v-application .text-h5,.v-application .text-h6{line-height:2rem;font-family:\"Roboto\",sans-serif!important}.v-application .text-h6{font-size:1.25rem!important;font-weight:500;letter-spacing:.0125em!important}.v-application .text-subtitle-1{font-size:1rem!important;font-weight:400;line-height:1.75rem;letter-spacing:.009375em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-subtitle-2{font-size:.875rem!important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-body-1{font-size:1rem!important;line-height:1.5rem;letter-spacing:.03125em!important}.v-application .text-body-1,.v-application .text-body-2{font-weight:400;font-family:\"Roboto\",sans-serif!important}.v-application .text-body-2{font-size:.875rem!important;line-height:1.25rem;letter-spacing:.0178571429em!important}.v-application .text-button{font-size:.875rem!important;font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em!important;font-family:\"Roboto\",sans-serif!important;text-transform:uppercase!important}.v-application .text-caption{font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em!important}.v-application .text-caption,.v-application .text-overline{font-size:.75rem!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-overline{font-weight:500;line-height:2rem;letter-spacing:.1666666667em!important;text-transform:uppercase!important}@media(min-width:600px){.v-application .d-sm-none{display:none!important}.v-application .d-sm-inline{display:inline!important}.v-application .d-sm-inline-block{display:inline-block!important}.v-application .d-sm-block{display:block!important}.v-application .d-sm-table{display:table!important}.v-application .d-sm-table-row{display:table-row!important}.v-application .d-sm-table-cell{display:table-cell!important}.v-application .d-sm-flex{display:flex!important}.v-application .d-sm-inline-flex{display:inline-flex!important}.v-application .float-sm-none{float:none!important}.v-application .float-sm-left{float:left!important}.v-application .float-sm-right{float:right!important}.v-application--is-rtl .float-sm-end{float:left!important}.v-application--is-ltr .float-sm-end,.v-application--is-rtl .float-sm-start{float:right!important}.v-application--is-ltr .float-sm-start{float:left!important}.v-application .flex-sm-fill{flex:1 1 auto!important}.v-application .flex-sm-row{flex-direction:row!important}.v-application .flex-sm-column{flex-direction:column!important}.v-application .flex-sm-row-reverse{flex-direction:row-reverse!important}.v-application .flex-sm-column-reverse{flex-direction:column-reverse!important}.v-application .flex-sm-grow-0{flex-grow:0!important}.v-application .flex-sm-grow-1{flex-grow:1!important}.v-application .flex-sm-shrink-0{flex-shrink:0!important}.v-application .flex-sm-shrink-1{flex-shrink:1!important}.v-application .flex-sm-wrap{flex-wrap:wrap!important}.v-application .flex-sm-nowrap{flex-wrap:nowrap!important}.v-application .flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.v-application .justify-sm-start{justify-content:flex-start!important}.v-application .justify-sm-end{justify-content:flex-end!important}.v-application .justify-sm-center{justify-content:center!important}.v-application .justify-sm-space-between{justify-content:space-between!important}.v-application .justify-sm-space-around{justify-content:space-around!important}.v-application .align-sm-start{align-items:flex-start!important}.v-application .align-sm-end{align-items:flex-end!important}.v-application .align-sm-center{align-items:center!important}.v-application .align-sm-baseline{align-items:baseline!important}.v-application .align-sm-stretch{align-items:stretch!important}.v-application .align-content-sm-start{align-content:flex-start!important}.v-application .align-content-sm-end{align-content:flex-end!important}.v-application .align-content-sm-center{align-content:center!important}.v-application .align-content-sm-space-between{align-content:space-between!important}.v-application .align-content-sm-space-around{align-content:space-around!important}.v-application .align-content-sm-stretch{align-content:stretch!important}.v-application .align-self-sm-auto{align-self:auto!important}.v-application .align-self-sm-start{align-self:flex-start!important}.v-application .align-self-sm-end{align-self:flex-end!important}.v-application .align-self-sm-center{align-self:center!important}.v-application .align-self-sm-baseline{align-self:baseline!important}.v-application .align-self-sm-stretch{align-self:stretch!important}.v-application .order-sm-first{order:-1!important}.v-application .order-sm-0{order:0!important}.v-application .order-sm-1{order:1!important}.v-application .order-sm-2{order:2!important}.v-application .order-sm-3{order:3!important}.v-application .order-sm-4{order:4!important}.v-application .order-sm-5{order:5!important}.v-application .order-sm-6{order:6!important}.v-application .order-sm-7{order:7!important}.v-application .order-sm-8{order:8!important}.v-application .order-sm-9{order:9!important}.v-application .order-sm-10{order:10!important}.v-application .order-sm-11{order:11!important}.v-application .order-sm-12{order:12!important}.v-application .order-sm-last{order:13!important}.v-application .ma-sm-0{margin:0!important}.v-application .ma-sm-1{margin:4px!important}.v-application .ma-sm-2{margin:8px!important}.v-application .ma-sm-3{margin:12px!important}.v-application .ma-sm-4{margin:16px!important}.v-application .ma-sm-5{margin:20px!important}.v-application .ma-sm-6{margin:24px!important}.v-application .ma-sm-7{margin:28px!important}.v-application .ma-sm-8{margin:32px!important}.v-application .ma-sm-9{margin:36px!important}.v-application .ma-sm-10{margin:40px!important}.v-application .ma-sm-11{margin:44px!important}.v-application .ma-sm-12{margin:48px!important}.v-application .ma-sm-13{margin:52px!important}.v-application .ma-sm-14{margin:56px!important}.v-application .ma-sm-15{margin:60px!important}.v-application .ma-sm-16{margin:64px!important}.v-application .ma-sm-auto{margin:auto!important}.v-application .mx-sm-0{margin-right:0!important;margin-left:0!important}.v-application .mx-sm-1{margin-right:4px!important;margin-left:4px!important}.v-application .mx-sm-2{margin-right:8px!important;margin-left:8px!important}.v-application .mx-sm-3{margin-right:12px!important;margin-left:12px!important}.v-application .mx-sm-4{margin-right:16px!important;margin-left:16px!important}.v-application .mx-sm-5{margin-right:20px!important;margin-left:20px!important}.v-application .mx-sm-6{margin-right:24px!important;margin-left:24px!important}.v-application .mx-sm-7{margin-right:28px!important;margin-left:28px!important}.v-application .mx-sm-8{margin-right:32px!important;margin-left:32px!important}.v-application .mx-sm-9{margin-right:36px!important;margin-left:36px!important}.v-application .mx-sm-10{margin-right:40px!important;margin-left:40px!important}.v-application .mx-sm-11{margin-right:44px!important;margin-left:44px!important}.v-application .mx-sm-12{margin-right:48px!important;margin-left:48px!important}.v-application .mx-sm-13{margin-right:52px!important;margin-left:52px!important}.v-application .mx-sm-14{margin-right:56px!important;margin-left:56px!important}.v-application .mx-sm-15{margin-right:60px!important;margin-left:60px!important}.v-application .mx-sm-16{margin-right:64px!important;margin-left:64px!important}.v-application .mx-sm-auto{margin-right:auto!important;margin-left:auto!important}.v-application .my-sm-0{margin-top:0!important;margin-bottom:0!important}.v-application .my-sm-1{margin-top:4px!important;margin-bottom:4px!important}.v-application .my-sm-2{margin-top:8px!important;margin-bottom:8px!important}.v-application .my-sm-3{margin-top:12px!important;margin-bottom:12px!important}.v-application .my-sm-4{margin-top:16px!important;margin-bottom:16px!important}.v-application .my-sm-5{margin-top:20px!important;margin-bottom:20px!important}.v-application .my-sm-6{margin-top:24px!important;margin-bottom:24px!important}.v-application .my-sm-7{margin-top:28px!important;margin-bottom:28px!important}.v-application .my-sm-8{margin-top:32px!important;margin-bottom:32px!important}.v-application .my-sm-9{margin-top:36px!important;margin-bottom:36px!important}.v-application .my-sm-10{margin-top:40px!important;margin-bottom:40px!important}.v-application .my-sm-11{margin-top:44px!important;margin-bottom:44px!important}.v-application .my-sm-12{margin-top:48px!important;margin-bottom:48px!important}.v-application .my-sm-13{margin-top:52px!important;margin-bottom:52px!important}.v-application .my-sm-14{margin-top:56px!important;margin-bottom:56px!important}.v-application .my-sm-15{margin-top:60px!important;margin-bottom:60px!important}.v-application .my-sm-16{margin-top:64px!important;margin-bottom:64px!important}.v-application .my-sm-auto{margin-top:auto!important;margin-bottom:auto!important}.v-application .mt-sm-0{margin-top:0!important}.v-application .mt-sm-1{margin-top:4px!important}.v-application .mt-sm-2{margin-top:8px!important}.v-application .mt-sm-3{margin-top:12px!important}.v-application .mt-sm-4{margin-top:16px!important}.v-application .mt-sm-5{margin-top:20px!important}.v-application .mt-sm-6{margin-top:24px!important}.v-application .mt-sm-7{margin-top:28px!important}.v-application .mt-sm-8{margin-top:32px!important}.v-application .mt-sm-9{margin-top:36px!important}.v-application .mt-sm-10{margin-top:40px!important}.v-application .mt-sm-11{margin-top:44px!important}.v-application .mt-sm-12{margin-top:48px!important}.v-application .mt-sm-13{margin-top:52px!important}.v-application .mt-sm-14{margin-top:56px!important}.v-application .mt-sm-15{margin-top:60px!important}.v-application .mt-sm-16{margin-top:64px!important}.v-application .mt-sm-auto{margin-top:auto!important}.v-application .mr-sm-0{margin-right:0!important}.v-application .mr-sm-1{margin-right:4px!important}.v-application .mr-sm-2{margin-right:8px!important}.v-application .mr-sm-3{margin-right:12px!important}.v-application .mr-sm-4{margin-right:16px!important}.v-application .mr-sm-5{margin-right:20px!important}.v-application .mr-sm-6{margin-right:24px!important}.v-application .mr-sm-7{margin-right:28px!important}.v-application .mr-sm-8{margin-right:32px!important}.v-application .mr-sm-9{margin-right:36px!important}.v-application .mr-sm-10{margin-right:40px!important}.v-application .mr-sm-11{margin-right:44px!important}.v-application .mr-sm-12{margin-right:48px!important}.v-application .mr-sm-13{margin-right:52px!important}.v-application .mr-sm-14{margin-right:56px!important}.v-application .mr-sm-15{margin-right:60px!important}.v-application .mr-sm-16{margin-right:64px!important}.v-application .mr-sm-auto{margin-right:auto!important}.v-application .mb-sm-0{margin-bottom:0!important}.v-application .mb-sm-1{margin-bottom:4px!important}.v-application .mb-sm-2{margin-bottom:8px!important}.v-application .mb-sm-3{margin-bottom:12px!important}.v-application .mb-sm-4{margin-bottom:16px!important}.v-application .mb-sm-5{margin-bottom:20px!important}.v-application .mb-sm-6{margin-bottom:24px!important}.v-application .mb-sm-7{margin-bottom:28px!important}.v-application .mb-sm-8{margin-bottom:32px!important}.v-application .mb-sm-9{margin-bottom:36px!important}.v-application .mb-sm-10{margin-bottom:40px!important}.v-application .mb-sm-11{margin-bottom:44px!important}.v-application .mb-sm-12{margin-bottom:48px!important}.v-application .mb-sm-13{margin-bottom:52px!important}.v-application .mb-sm-14{margin-bottom:56px!important}.v-application .mb-sm-15{margin-bottom:60px!important}.v-application .mb-sm-16{margin-bottom:64px!important}.v-application .mb-sm-auto{margin-bottom:auto!important}.v-application .ml-sm-0{margin-left:0!important}.v-application .ml-sm-1{margin-left:4px!important}.v-application .ml-sm-2{margin-left:8px!important}.v-application .ml-sm-3{margin-left:12px!important}.v-application .ml-sm-4{margin-left:16px!important}.v-application .ml-sm-5{margin-left:20px!important}.v-application .ml-sm-6{margin-left:24px!important}.v-application .ml-sm-7{margin-left:28px!important}.v-application .ml-sm-8{margin-left:32px!important}.v-application .ml-sm-9{margin-left:36px!important}.v-application .ml-sm-10{margin-left:40px!important}.v-application .ml-sm-11{margin-left:44px!important}.v-application .ml-sm-12{margin-left:48px!important}.v-application .ml-sm-13{margin-left:52px!important}.v-application .ml-sm-14{margin-left:56px!important}.v-application .ml-sm-15{margin-left:60px!important}.v-application .ml-sm-16{margin-left:64px!important}.v-application .ml-sm-auto{margin-left:auto!important}.v-application--is-ltr .ms-sm-0{margin-left:0!important}.v-application--is-rtl .ms-sm-0{margin-right:0!important}.v-application--is-ltr .ms-sm-1{margin-left:4px!important}.v-application--is-rtl .ms-sm-1{margin-right:4px!important}.v-application--is-ltr .ms-sm-2{margin-left:8px!important}.v-application--is-rtl .ms-sm-2{margin-right:8px!important}.v-application--is-ltr .ms-sm-3{margin-left:12px!important}.v-application--is-rtl .ms-sm-3{margin-right:12px!important}.v-application--is-ltr .ms-sm-4{margin-left:16px!important}.v-application--is-rtl .ms-sm-4{margin-right:16px!important}.v-application--is-ltr .ms-sm-5{margin-left:20px!important}.v-application--is-rtl .ms-sm-5{margin-right:20px!important}.v-application--is-ltr .ms-sm-6{margin-left:24px!important}.v-application--is-rtl .ms-sm-6{margin-right:24px!important}.v-application--is-ltr .ms-sm-7{margin-left:28px!important}.v-application--is-rtl .ms-sm-7{margin-right:28px!important}.v-application--is-ltr .ms-sm-8{margin-left:32px!important}.v-application--is-rtl .ms-sm-8{margin-right:32px!important}.v-application--is-ltr .ms-sm-9{margin-left:36px!important}.v-application--is-rtl .ms-sm-9{margin-right:36px!important}.v-application--is-ltr .ms-sm-10{margin-left:40px!important}.v-application--is-rtl .ms-sm-10{margin-right:40px!important}.v-application--is-ltr .ms-sm-11{margin-left:44px!important}.v-application--is-rtl .ms-sm-11{margin-right:44px!important}.v-application--is-ltr .ms-sm-12{margin-left:48px!important}.v-application--is-rtl .ms-sm-12{margin-right:48px!important}.v-application--is-ltr .ms-sm-13{margin-left:52px!important}.v-application--is-rtl .ms-sm-13{margin-right:52px!important}.v-application--is-ltr .ms-sm-14{margin-left:56px!important}.v-application--is-rtl .ms-sm-14{margin-right:56px!important}.v-application--is-ltr .ms-sm-15{margin-left:60px!important}.v-application--is-rtl .ms-sm-15{margin-right:60px!important}.v-application--is-ltr .ms-sm-16{margin-left:64px!important}.v-application--is-rtl .ms-sm-16{margin-right:64px!important}.v-application--is-ltr .ms-sm-auto{margin-left:auto!important}.v-application--is-rtl .ms-sm-auto{margin-right:auto!important}.v-application--is-ltr .me-sm-0{margin-right:0!important}.v-application--is-rtl .me-sm-0{margin-left:0!important}.v-application--is-ltr .me-sm-1{margin-right:4px!important}.v-application--is-rtl .me-sm-1{margin-left:4px!important}.v-application--is-ltr .me-sm-2{margin-right:8px!important}.v-application--is-rtl .me-sm-2{margin-left:8px!important}.v-application--is-ltr .me-sm-3{margin-right:12px!important}.v-application--is-rtl .me-sm-3{margin-left:12px!important}.v-application--is-ltr .me-sm-4{margin-right:16px!important}.v-application--is-rtl .me-sm-4{margin-left:16px!important}.v-application--is-ltr .me-sm-5{margin-right:20px!important}.v-application--is-rtl .me-sm-5{margin-left:20px!important}.v-application--is-ltr .me-sm-6{margin-right:24px!important}.v-application--is-rtl .me-sm-6{margin-left:24px!important}.v-application--is-ltr .me-sm-7{margin-right:28px!important}.v-application--is-rtl .me-sm-7{margin-left:28px!important}.v-application--is-ltr .me-sm-8{margin-right:32px!important}.v-application--is-rtl .me-sm-8{margin-left:32px!important}.v-application--is-ltr .me-sm-9{margin-right:36px!important}.v-application--is-rtl .me-sm-9{margin-left:36px!important}.v-application--is-ltr .me-sm-10{margin-right:40px!important}.v-application--is-rtl .me-sm-10{margin-left:40px!important}.v-application--is-ltr .me-sm-11{margin-right:44px!important}.v-application--is-rtl .me-sm-11{margin-left:44px!important}.v-application--is-ltr .me-sm-12{margin-right:48px!important}.v-application--is-rtl .me-sm-12{margin-left:48px!important}.v-application--is-ltr .me-sm-13{margin-right:52px!important}.v-application--is-rtl .me-sm-13{margin-left:52px!important}.v-application--is-ltr .me-sm-14{margin-right:56px!important}.v-application--is-rtl .me-sm-14{margin-left:56px!important}.v-application--is-ltr .me-sm-15{margin-right:60px!important}.v-application--is-rtl .me-sm-15{margin-left:60px!important}.v-application--is-ltr .me-sm-16{margin-right:64px!important}.v-application--is-rtl .me-sm-16{margin-left:64px!important}.v-application--is-ltr .me-sm-auto{margin-right:auto!important}.v-application--is-rtl .me-sm-auto{margin-left:auto!important}.v-application .ma-sm-n1{margin:-4px!important}.v-application .ma-sm-n2{margin:-8px!important}.v-application .ma-sm-n3{margin:-12px!important}.v-application .ma-sm-n4{margin:-16px!important}.v-application .ma-sm-n5{margin:-20px!important}.v-application .ma-sm-n6{margin:-24px!important}.v-application .ma-sm-n7{margin:-28px!important}.v-application .ma-sm-n8{margin:-32px!important}.v-application .ma-sm-n9{margin:-36px!important}.v-application .ma-sm-n10{margin:-40px!important}.v-application .ma-sm-n11{margin:-44px!important}.v-application .ma-sm-n12{margin:-48px!important}.v-application .ma-sm-n13{margin:-52px!important}.v-application .ma-sm-n14{margin:-56px!important}.v-application .ma-sm-n15{margin:-60px!important}.v-application .ma-sm-n16{margin:-64px!important}.v-application .mx-sm-n1{margin-right:-4px!important;margin-left:-4px!important}.v-application .mx-sm-n2{margin-right:-8px!important;margin-left:-8px!important}.v-application .mx-sm-n3{margin-right:-12px!important;margin-left:-12px!important}.v-application .mx-sm-n4{margin-right:-16px!important;margin-left:-16px!important}.v-application .mx-sm-n5{margin-right:-20px!important;margin-left:-20px!important}.v-application .mx-sm-n6{margin-right:-24px!important;margin-left:-24px!important}.v-application .mx-sm-n7{margin-right:-28px!important;margin-left:-28px!important}.v-application .mx-sm-n8{margin-right:-32px!important;margin-left:-32px!important}.v-application .mx-sm-n9{margin-right:-36px!important;margin-left:-36px!important}.v-application .mx-sm-n10{margin-right:-40px!important;margin-left:-40px!important}.v-application .mx-sm-n11{margin-right:-44px!important;margin-left:-44px!important}.v-application .mx-sm-n12{margin-right:-48px!important;margin-left:-48px!important}.v-application .mx-sm-n13{margin-right:-52px!important;margin-left:-52px!important}.v-application .mx-sm-n14{margin-right:-56px!important;margin-left:-56px!important}.v-application .mx-sm-n15{margin-right:-60px!important;margin-left:-60px!important}.v-application .mx-sm-n16{margin-right:-64px!important;margin-left:-64px!important}.v-application .my-sm-n1{margin-top:-4px!important;margin-bottom:-4px!important}.v-application .my-sm-n2{margin-top:-8px!important;margin-bottom:-8px!important}.v-application .my-sm-n3{margin-top:-12px!important;margin-bottom:-12px!important}.v-application .my-sm-n4{margin-top:-16px!important;margin-bottom:-16px!important}.v-application .my-sm-n5{margin-top:-20px!important;margin-bottom:-20px!important}.v-application .my-sm-n6{margin-top:-24px!important;margin-bottom:-24px!important}.v-application .my-sm-n7{margin-top:-28px!important;margin-bottom:-28px!important}.v-application .my-sm-n8{margin-top:-32px!important;margin-bottom:-32px!important}.v-application .my-sm-n9{margin-top:-36px!important;margin-bottom:-36px!important}.v-application .my-sm-n10{margin-top:-40px!important;margin-bottom:-40px!important}.v-application .my-sm-n11{margin-top:-44px!important;margin-bottom:-44px!important}.v-application .my-sm-n12{margin-top:-48px!important;margin-bottom:-48px!important}.v-application .my-sm-n13{margin-top:-52px!important;margin-bottom:-52px!important}.v-application .my-sm-n14{margin-top:-56px!important;margin-bottom:-56px!important}.v-application .my-sm-n15{margin-top:-60px!important;margin-bottom:-60px!important}.v-application .my-sm-n16{margin-top:-64px!important;margin-bottom:-64px!important}.v-application .mt-sm-n1{margin-top:-4px!important}.v-application .mt-sm-n2{margin-top:-8px!important}.v-application .mt-sm-n3{margin-top:-12px!important}.v-application .mt-sm-n4{margin-top:-16px!important}.v-application .mt-sm-n5{margin-top:-20px!important}.v-application .mt-sm-n6{margin-top:-24px!important}.v-application .mt-sm-n7{margin-top:-28px!important}.v-application .mt-sm-n8{margin-top:-32px!important}.v-application .mt-sm-n9{margin-top:-36px!important}.v-application .mt-sm-n10{margin-top:-40px!important}.v-application .mt-sm-n11{margin-top:-44px!important}.v-application .mt-sm-n12{margin-top:-48px!important}.v-application .mt-sm-n13{margin-top:-52px!important}.v-application .mt-sm-n14{margin-top:-56px!important}.v-application .mt-sm-n15{margin-top:-60px!important}.v-application .mt-sm-n16{margin-top:-64px!important}.v-application .mr-sm-n1{margin-right:-4px!important}.v-application .mr-sm-n2{margin-right:-8px!important}.v-application .mr-sm-n3{margin-right:-12px!important}.v-application .mr-sm-n4{margin-right:-16px!important}.v-application .mr-sm-n5{margin-right:-20px!important}.v-application .mr-sm-n6{margin-right:-24px!important}.v-application .mr-sm-n7{margin-right:-28px!important}.v-application .mr-sm-n8{margin-right:-32px!important}.v-application .mr-sm-n9{margin-right:-36px!important}.v-application .mr-sm-n10{margin-right:-40px!important}.v-application .mr-sm-n11{margin-right:-44px!important}.v-application .mr-sm-n12{margin-right:-48px!important}.v-application .mr-sm-n13{margin-right:-52px!important}.v-application .mr-sm-n14{margin-right:-56px!important}.v-application .mr-sm-n15{margin-right:-60px!important}.v-application .mr-sm-n16{margin-right:-64px!important}.v-application .mb-sm-n1{margin-bottom:-4px!important}.v-application .mb-sm-n2{margin-bottom:-8px!important}.v-application .mb-sm-n3{margin-bottom:-12px!important}.v-application .mb-sm-n4{margin-bottom:-16px!important}.v-application .mb-sm-n5{margin-bottom:-20px!important}.v-application .mb-sm-n6{margin-bottom:-24px!important}.v-application .mb-sm-n7{margin-bottom:-28px!important}.v-application .mb-sm-n8{margin-bottom:-32px!important}.v-application .mb-sm-n9{margin-bottom:-36px!important}.v-application .mb-sm-n10{margin-bottom:-40px!important}.v-application .mb-sm-n11{margin-bottom:-44px!important}.v-application .mb-sm-n12{margin-bottom:-48px!important}.v-application .mb-sm-n13{margin-bottom:-52px!important}.v-application .mb-sm-n14{margin-bottom:-56px!important}.v-application .mb-sm-n15{margin-bottom:-60px!important}.v-application .mb-sm-n16{margin-bottom:-64px!important}.v-application .ml-sm-n1{margin-left:-4px!important}.v-application .ml-sm-n2{margin-left:-8px!important}.v-application .ml-sm-n3{margin-left:-12px!important}.v-application .ml-sm-n4{margin-left:-16px!important}.v-application .ml-sm-n5{margin-left:-20px!important}.v-application .ml-sm-n6{margin-left:-24px!important}.v-application .ml-sm-n7{margin-left:-28px!important}.v-application .ml-sm-n8{margin-left:-32px!important}.v-application .ml-sm-n9{margin-left:-36px!important}.v-application .ml-sm-n10{margin-left:-40px!important}.v-application .ml-sm-n11{margin-left:-44px!important}.v-application .ml-sm-n12{margin-left:-48px!important}.v-application .ml-sm-n13{margin-left:-52px!important}.v-application .ml-sm-n14{margin-left:-56px!important}.v-application .ml-sm-n15{margin-left:-60px!important}.v-application .ml-sm-n16{margin-left:-64px!important}.v-application--is-ltr .ms-sm-n1{margin-left:-4px!important}.v-application--is-rtl .ms-sm-n1{margin-right:-4px!important}.v-application--is-ltr .ms-sm-n2{margin-left:-8px!important}.v-application--is-rtl .ms-sm-n2{margin-right:-8px!important}.v-application--is-ltr .ms-sm-n3{margin-left:-12px!important}.v-application--is-rtl .ms-sm-n3{margin-right:-12px!important}.v-application--is-ltr .ms-sm-n4{margin-left:-16px!important}.v-application--is-rtl .ms-sm-n4{margin-right:-16px!important}.v-application--is-ltr .ms-sm-n5{margin-left:-20px!important}.v-application--is-rtl .ms-sm-n5{margin-right:-20px!important}.v-application--is-ltr .ms-sm-n6{margin-left:-24px!important}.v-application--is-rtl .ms-sm-n6{margin-right:-24px!important}.v-application--is-ltr .ms-sm-n7{margin-left:-28px!important}.v-application--is-rtl .ms-sm-n7{margin-right:-28px!important}.v-application--is-ltr .ms-sm-n8{margin-left:-32px!important}.v-application--is-rtl .ms-sm-n8{margin-right:-32px!important}.v-application--is-ltr .ms-sm-n9{margin-left:-36px!important}.v-application--is-rtl .ms-sm-n9{margin-right:-36px!important}.v-application--is-ltr .ms-sm-n10{margin-left:-40px!important}.v-application--is-rtl .ms-sm-n10{margin-right:-40px!important}.v-application--is-ltr .ms-sm-n11{margin-left:-44px!important}.v-application--is-rtl .ms-sm-n11{margin-right:-44px!important}.v-application--is-ltr .ms-sm-n12{margin-left:-48px!important}.v-application--is-rtl .ms-sm-n12{margin-right:-48px!important}.v-application--is-ltr .ms-sm-n13{margin-left:-52px!important}.v-application--is-rtl .ms-sm-n13{margin-right:-52px!important}.v-application--is-ltr .ms-sm-n14{margin-left:-56px!important}.v-application--is-rtl .ms-sm-n14{margin-right:-56px!important}.v-application--is-ltr .ms-sm-n15{margin-left:-60px!important}.v-application--is-rtl .ms-sm-n15{margin-right:-60px!important}.v-application--is-ltr .ms-sm-n16{margin-left:-64px!important}.v-application--is-rtl .ms-sm-n16{margin-right:-64px!important}.v-application--is-ltr .me-sm-n1{margin-right:-4px!important}.v-application--is-rtl .me-sm-n1{margin-left:-4px!important}.v-application--is-ltr .me-sm-n2{margin-right:-8px!important}.v-application--is-rtl .me-sm-n2{margin-left:-8px!important}.v-application--is-ltr .me-sm-n3{margin-right:-12px!important}.v-application--is-rtl .me-sm-n3{margin-left:-12px!important}.v-application--is-ltr .me-sm-n4{margin-right:-16px!important}.v-application--is-rtl .me-sm-n4{margin-left:-16px!important}.v-application--is-ltr .me-sm-n5{margin-right:-20px!important}.v-application--is-rtl .me-sm-n5{margin-left:-20px!important}.v-application--is-ltr .me-sm-n6{margin-right:-24px!important}.v-application--is-rtl .me-sm-n6{margin-left:-24px!important}.v-application--is-ltr .me-sm-n7{margin-right:-28px!important}.v-application--is-rtl .me-sm-n7{margin-left:-28px!important}.v-application--is-ltr .me-sm-n8{margin-right:-32px!important}.v-application--is-rtl .me-sm-n8{margin-left:-32px!important}.v-application--is-ltr .me-sm-n9{margin-right:-36px!important}.v-application--is-rtl .me-sm-n9{margin-left:-36px!important}.v-application--is-ltr .me-sm-n10{margin-right:-40px!important}.v-application--is-rtl .me-sm-n10{margin-left:-40px!important}.v-application--is-ltr .me-sm-n11{margin-right:-44px!important}.v-application--is-rtl .me-sm-n11{margin-left:-44px!important}.v-application--is-ltr .me-sm-n12{margin-right:-48px!important}.v-application--is-rtl .me-sm-n12{margin-left:-48px!important}.v-application--is-ltr .me-sm-n13{margin-right:-52px!important}.v-application--is-rtl .me-sm-n13{margin-left:-52px!important}.v-application--is-ltr .me-sm-n14{margin-right:-56px!important}.v-application--is-rtl .me-sm-n14{margin-left:-56px!important}.v-application--is-ltr .me-sm-n15{margin-right:-60px!important}.v-application--is-rtl .me-sm-n15{margin-left:-60px!important}.v-application--is-ltr .me-sm-n16{margin-right:-64px!important}.v-application--is-rtl .me-sm-n16{margin-left:-64px!important}.v-application .pa-sm-0{padding:0!important}.v-application .pa-sm-1{padding:4px!important}.v-application .pa-sm-2{padding:8px!important}.v-application .pa-sm-3{padding:12px!important}.v-application .pa-sm-4{padding:16px!important}.v-application .pa-sm-5{padding:20px!important}.v-application .pa-sm-6{padding:24px!important}.v-application .pa-sm-7{padding:28px!important}.v-application .pa-sm-8{padding:32px!important}.v-application .pa-sm-9{padding:36px!important}.v-application .pa-sm-10{padding:40px!important}.v-application .pa-sm-11{padding:44px!important}.v-application .pa-sm-12{padding:48px!important}.v-application .pa-sm-13{padding:52px!important}.v-application .pa-sm-14{padding:56px!important}.v-application .pa-sm-15{padding:60px!important}.v-application .pa-sm-16{padding:64px!important}.v-application .px-sm-0{padding-right:0!important;padding-left:0!important}.v-application .px-sm-1{padding-right:4px!important;padding-left:4px!important}.v-application .px-sm-2{padding-right:8px!important;padding-left:8px!important}.v-application .px-sm-3{padding-right:12px!important;padding-left:12px!important}.v-application .px-sm-4{padding-right:16px!important;padding-left:16px!important}.v-application .px-sm-5{padding-right:20px!important;padding-left:20px!important}.v-application .px-sm-6{padding-right:24px!important;padding-left:24px!important}.v-application .px-sm-7{padding-right:28px!important;padding-left:28px!important}.v-application .px-sm-8{padding-right:32px!important;padding-left:32px!important}.v-application .px-sm-9{padding-right:36px!important;padding-left:36px!important}.v-application .px-sm-10{padding-right:40px!important;padding-left:40px!important}.v-application .px-sm-11{padding-right:44px!important;padding-left:44px!important}.v-application .px-sm-12{padding-right:48px!important;padding-left:48px!important}.v-application .px-sm-13{padding-right:52px!important;padding-left:52px!important}.v-application .px-sm-14{padding-right:56px!important;padding-left:56px!important}.v-application .px-sm-15{padding-right:60px!important;padding-left:60px!important}.v-application .px-sm-16{padding-right:64px!important;padding-left:64px!important}.v-application .py-sm-0{padding-top:0!important;padding-bottom:0!important}.v-application .py-sm-1{padding-top:4px!important;padding-bottom:4px!important}.v-application .py-sm-2{padding-top:8px!important;padding-bottom:8px!important}.v-application .py-sm-3{padding-top:12px!important;padding-bottom:12px!important}.v-application .py-sm-4{padding-top:16px!important;padding-bottom:16px!important}.v-application .py-sm-5{padding-top:20px!important;padding-bottom:20px!important}.v-application .py-sm-6{padding-top:24px!important;padding-bottom:24px!important}.v-application .py-sm-7{padding-top:28px!important;padding-bottom:28px!important}.v-application .py-sm-8{padding-top:32px!important;padding-bottom:32px!important}.v-application .py-sm-9{padding-top:36px!important;padding-bottom:36px!important}.v-application .py-sm-10{padding-top:40px!important;padding-bottom:40px!important}.v-application .py-sm-11{padding-top:44px!important;padding-bottom:44px!important}.v-application .py-sm-12{padding-top:48px!important;padding-bottom:48px!important}.v-application .py-sm-13{padding-top:52px!important;padding-bottom:52px!important}.v-application .py-sm-14{padding-top:56px!important;padding-bottom:56px!important}.v-application .py-sm-15{padding-top:60px!important;padding-bottom:60px!important}.v-application .py-sm-16{padding-top:64px!important;padding-bottom:64px!important}.v-application .pt-sm-0{padding-top:0!important}.v-application .pt-sm-1{padding-top:4px!important}.v-application .pt-sm-2{padding-top:8px!important}.v-application .pt-sm-3{padding-top:12px!important}.v-application .pt-sm-4{padding-top:16px!important}.v-application .pt-sm-5{padding-top:20px!important}.v-application .pt-sm-6{padding-top:24px!important}.v-application .pt-sm-7{padding-top:28px!important}.v-application .pt-sm-8{padding-top:32px!important}.v-application .pt-sm-9{padding-top:36px!important}.v-application .pt-sm-10{padding-top:40px!important}.v-application .pt-sm-11{padding-top:44px!important}.v-application .pt-sm-12{padding-top:48px!important}.v-application .pt-sm-13{padding-top:52px!important}.v-application .pt-sm-14{padding-top:56px!important}.v-application .pt-sm-15{padding-top:60px!important}.v-application .pt-sm-16{padding-top:64px!important}.v-application .pr-sm-0{padding-right:0!important}.v-application .pr-sm-1{padding-right:4px!important}.v-application .pr-sm-2{padding-right:8px!important}.v-application .pr-sm-3{padding-right:12px!important}.v-application .pr-sm-4{padding-right:16px!important}.v-application .pr-sm-5{padding-right:20px!important}.v-application .pr-sm-6{padding-right:24px!important}.v-application .pr-sm-7{padding-right:28px!important}.v-application .pr-sm-8{padding-right:32px!important}.v-application .pr-sm-9{padding-right:36px!important}.v-application .pr-sm-10{padding-right:40px!important}.v-application .pr-sm-11{padding-right:44px!important}.v-application .pr-sm-12{padding-right:48px!important}.v-application .pr-sm-13{padding-right:52px!important}.v-application .pr-sm-14{padding-right:56px!important}.v-application .pr-sm-15{padding-right:60px!important}.v-application .pr-sm-16{padding-right:64px!important}.v-application .pb-sm-0{padding-bottom:0!important}.v-application .pb-sm-1{padding-bottom:4px!important}.v-application .pb-sm-2{padding-bottom:8px!important}.v-application .pb-sm-3{padding-bottom:12px!important}.v-application .pb-sm-4{padding-bottom:16px!important}.v-application .pb-sm-5{padding-bottom:20px!important}.v-application .pb-sm-6{padding-bottom:24px!important}.v-application .pb-sm-7{padding-bottom:28px!important}.v-application .pb-sm-8{padding-bottom:32px!important}.v-application .pb-sm-9{padding-bottom:36px!important}.v-application .pb-sm-10{padding-bottom:40px!important}.v-application .pb-sm-11{padding-bottom:44px!important}.v-application .pb-sm-12{padding-bottom:48px!important}.v-application .pb-sm-13{padding-bottom:52px!important}.v-application .pb-sm-14{padding-bottom:56px!important}.v-application .pb-sm-15{padding-bottom:60px!important}.v-application .pb-sm-16{padding-bottom:64px!important}.v-application .pl-sm-0{padding-left:0!important}.v-application .pl-sm-1{padding-left:4px!important}.v-application .pl-sm-2{padding-left:8px!important}.v-application .pl-sm-3{padding-left:12px!important}.v-application .pl-sm-4{padding-left:16px!important}.v-application .pl-sm-5{padding-left:20px!important}.v-application .pl-sm-6{padding-left:24px!important}.v-application .pl-sm-7{padding-left:28px!important}.v-application .pl-sm-8{padding-left:32px!important}.v-application .pl-sm-9{padding-left:36px!important}.v-application .pl-sm-10{padding-left:40px!important}.v-application .pl-sm-11{padding-left:44px!important}.v-application .pl-sm-12{padding-left:48px!important}.v-application .pl-sm-13{padding-left:52px!important}.v-application .pl-sm-14{padding-left:56px!important}.v-application .pl-sm-15{padding-left:60px!important}.v-application .pl-sm-16{padding-left:64px!important}.v-application--is-ltr .ps-sm-0{padding-left:0!important}.v-application--is-rtl .ps-sm-0{padding-right:0!important}.v-application--is-ltr .ps-sm-1{padding-left:4px!important}.v-application--is-rtl .ps-sm-1{padding-right:4px!important}.v-application--is-ltr .ps-sm-2{padding-left:8px!important}.v-application--is-rtl .ps-sm-2{padding-right:8px!important}.v-application--is-ltr .ps-sm-3{padding-left:12px!important}.v-application--is-rtl .ps-sm-3{padding-right:12px!important}.v-application--is-ltr .ps-sm-4{padding-left:16px!important}.v-application--is-rtl .ps-sm-4{padding-right:16px!important}.v-application--is-ltr .ps-sm-5{padding-left:20px!important}.v-application--is-rtl .ps-sm-5{padding-right:20px!important}.v-application--is-ltr .ps-sm-6{padding-left:24px!important}.v-application--is-rtl .ps-sm-6{padding-right:24px!important}.v-application--is-ltr .ps-sm-7{padding-left:28px!important}.v-application--is-rtl .ps-sm-7{padding-right:28px!important}.v-application--is-ltr .ps-sm-8{padding-left:32px!important}.v-application--is-rtl .ps-sm-8{padding-right:32px!important}.v-application--is-ltr .ps-sm-9{padding-left:36px!important}.v-application--is-rtl .ps-sm-9{padding-right:36px!important}.v-application--is-ltr .ps-sm-10{padding-left:40px!important}.v-application--is-rtl .ps-sm-10{padding-right:40px!important}.v-application--is-ltr .ps-sm-11{padding-left:44px!important}.v-application--is-rtl .ps-sm-11{padding-right:44px!important}.v-application--is-ltr .ps-sm-12{padding-left:48px!important}.v-application--is-rtl .ps-sm-12{padding-right:48px!important}.v-application--is-ltr .ps-sm-13{padding-left:52px!important}.v-application--is-rtl .ps-sm-13{padding-right:52px!important}.v-application--is-ltr .ps-sm-14{padding-left:56px!important}.v-application--is-rtl .ps-sm-14{padding-right:56px!important}.v-application--is-ltr .ps-sm-15{padding-left:60px!important}.v-application--is-rtl .ps-sm-15{padding-right:60px!important}.v-application--is-ltr .ps-sm-16{padding-left:64px!important}.v-application--is-rtl .ps-sm-16{padding-right:64px!important}.v-application--is-ltr .pe-sm-0{padding-right:0!important}.v-application--is-rtl .pe-sm-0{padding-left:0!important}.v-application--is-ltr .pe-sm-1{padding-right:4px!important}.v-application--is-rtl .pe-sm-1{padding-left:4px!important}.v-application--is-ltr .pe-sm-2{padding-right:8px!important}.v-application--is-rtl .pe-sm-2{padding-left:8px!important}.v-application--is-ltr .pe-sm-3{padding-right:12px!important}.v-application--is-rtl .pe-sm-3{padding-left:12px!important}.v-application--is-ltr .pe-sm-4{padding-right:16px!important}.v-application--is-rtl .pe-sm-4{padding-left:16px!important}.v-application--is-ltr .pe-sm-5{padding-right:20px!important}.v-application--is-rtl .pe-sm-5{padding-left:20px!important}.v-application--is-ltr .pe-sm-6{padding-right:24px!important}.v-application--is-rtl .pe-sm-6{padding-left:24px!important}.v-application--is-ltr .pe-sm-7{padding-right:28px!important}.v-application--is-rtl .pe-sm-7{padding-left:28px!important}.v-application--is-ltr .pe-sm-8{padding-right:32px!important}.v-application--is-rtl .pe-sm-8{padding-left:32px!important}.v-application--is-ltr .pe-sm-9{padding-right:36px!important}.v-application--is-rtl .pe-sm-9{padding-left:36px!important}.v-application--is-ltr .pe-sm-10{padding-right:40px!important}.v-application--is-rtl .pe-sm-10{padding-left:40px!important}.v-application--is-ltr .pe-sm-11{padding-right:44px!important}.v-application--is-rtl .pe-sm-11{padding-left:44px!important}.v-application--is-ltr .pe-sm-12{padding-right:48px!important}.v-application--is-rtl .pe-sm-12{padding-left:48px!important}.v-application--is-ltr .pe-sm-13{padding-right:52px!important}.v-application--is-rtl .pe-sm-13{padding-left:52px!important}.v-application--is-ltr .pe-sm-14{padding-right:56px!important}.v-application--is-rtl .pe-sm-14{padding-left:56px!important}.v-application--is-ltr .pe-sm-15{padding-right:60px!important}.v-application--is-rtl .pe-sm-15{padding-left:60px!important}.v-application--is-ltr .pe-sm-16{padding-right:64px!important}.v-application--is-rtl .pe-sm-16{padding-left:64px!important}.v-application .text-sm-left{text-align:left!important}.v-application .text-sm-right{text-align:right!important}.v-application .text-sm-center{text-align:center!important}.v-application .text-sm-justify{text-align:justify!important}[dir=ltr] .v-application .text-sm-start{text-align:left!important}[dir=ltr] .v-application .text-sm-end,[dir=rtl] .v-application .text-sm-start{text-align:right!important}[dir=rtl] .v-application .text-sm-end{text-align:left!important}.v-application .text-sm-h1{font-size:6rem!important;line-height:6rem;letter-spacing:-.015625em!important}.v-application .text-sm-h1,.v-application .text-sm-h2{font-weight:300;font-family:\"Roboto\",sans-serif!important}.v-application .text-sm-h2{font-size:3.75rem!important;line-height:3.75rem;letter-spacing:-.0083333333em!important}.v-application .text-sm-h3{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.v-application .text-sm-h3,.v-application .text-sm-h4{font-weight:400;font-family:\"Roboto\",sans-serif!important}.v-application .text-sm-h4{font-size:2.125rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.v-application .text-sm-h5{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important}.v-application .text-sm-h5,.v-application .text-sm-h6{line-height:2rem;font-family:\"Roboto\",sans-serif!important}.v-application .text-sm-h6{font-size:1.25rem!important;font-weight:500;letter-spacing:.0125em!important}.v-application .text-sm-subtitle-1{font-size:1rem!important;font-weight:400;line-height:1.75rem;letter-spacing:.009375em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-sm-subtitle-2{font-size:.875rem!important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-sm-body-1{font-size:1rem!important;font-weight:400;line-height:1.5rem;letter-spacing:.03125em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-sm-body-2{font-weight:400;line-height:1.25rem;letter-spacing:.0178571429em!important}.v-application .text-sm-body-2,.v-application .text-sm-button{font-size:.875rem!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-sm-button{font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em!important;text-transform:uppercase!important}.v-application .text-sm-caption{font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em!important}.v-application .text-sm-caption,.v-application .text-sm-overline{font-size:.75rem!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-sm-overline{font-weight:500;line-height:2rem;letter-spacing:.1666666667em!important;text-transform:uppercase!important}}@media(min-width:960px){.v-application .d-md-none{display:none!important}.v-application .d-md-inline{display:inline!important}.v-application .d-md-inline-block{display:inline-block!important}.v-application .d-md-block{display:block!important}.v-application .d-md-table{display:table!important}.v-application .d-md-table-row{display:table-row!important}.v-application .d-md-table-cell{display:table-cell!important}.v-application .d-md-flex{display:flex!important}.v-application .d-md-inline-flex{display:inline-flex!important}.v-application .float-md-none{float:none!important}.v-application .float-md-left{float:left!important}.v-application .float-md-right{float:right!important}.v-application--is-rtl .float-md-end{float:left!important}.v-application--is-ltr .float-md-end,.v-application--is-rtl .float-md-start{float:right!important}.v-application--is-ltr .float-md-start{float:left!important}.v-application .flex-md-fill{flex:1 1 auto!important}.v-application .flex-md-row{flex-direction:row!important}.v-application .flex-md-column{flex-direction:column!important}.v-application .flex-md-row-reverse{flex-direction:row-reverse!important}.v-application .flex-md-column-reverse{flex-direction:column-reverse!important}.v-application .flex-md-grow-0{flex-grow:0!important}.v-application .flex-md-grow-1{flex-grow:1!important}.v-application .flex-md-shrink-0{flex-shrink:0!important}.v-application .flex-md-shrink-1{flex-shrink:1!important}.v-application .flex-md-wrap{flex-wrap:wrap!important}.v-application .flex-md-nowrap{flex-wrap:nowrap!important}.v-application .flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.v-application .justify-md-start{justify-content:flex-start!important}.v-application .justify-md-end{justify-content:flex-end!important}.v-application .justify-md-center{justify-content:center!important}.v-application .justify-md-space-between{justify-content:space-between!important}.v-application .justify-md-space-around{justify-content:space-around!important}.v-application .align-md-start{align-items:flex-start!important}.v-application .align-md-end{align-items:flex-end!important}.v-application .align-md-center{align-items:center!important}.v-application .align-md-baseline{align-items:baseline!important}.v-application .align-md-stretch{align-items:stretch!important}.v-application .align-content-md-start{align-content:flex-start!important}.v-application .align-content-md-end{align-content:flex-end!important}.v-application .align-content-md-center{align-content:center!important}.v-application .align-content-md-space-between{align-content:space-between!important}.v-application .align-content-md-space-around{align-content:space-around!important}.v-application .align-content-md-stretch{align-content:stretch!important}.v-application .align-self-md-auto{align-self:auto!important}.v-application .align-self-md-start{align-self:flex-start!important}.v-application .align-self-md-end{align-self:flex-end!important}.v-application .align-self-md-center{align-self:center!important}.v-application .align-self-md-baseline{align-self:baseline!important}.v-application .align-self-md-stretch{align-self:stretch!important}.v-application .order-md-first{order:-1!important}.v-application .order-md-0{order:0!important}.v-application .order-md-1{order:1!important}.v-application .order-md-2{order:2!important}.v-application .order-md-3{order:3!important}.v-application .order-md-4{order:4!important}.v-application .order-md-5{order:5!important}.v-application .order-md-6{order:6!important}.v-application .order-md-7{order:7!important}.v-application .order-md-8{order:8!important}.v-application .order-md-9{order:9!important}.v-application .order-md-10{order:10!important}.v-application .order-md-11{order:11!important}.v-application .order-md-12{order:12!important}.v-application .order-md-last{order:13!important}.v-application .ma-md-0{margin:0!important}.v-application .ma-md-1{margin:4px!important}.v-application .ma-md-2{margin:8px!important}.v-application .ma-md-3{margin:12px!important}.v-application .ma-md-4{margin:16px!important}.v-application .ma-md-5{margin:20px!important}.v-application .ma-md-6{margin:24px!important}.v-application .ma-md-7{margin:28px!important}.v-application .ma-md-8{margin:32px!important}.v-application .ma-md-9{margin:36px!important}.v-application .ma-md-10{margin:40px!important}.v-application .ma-md-11{margin:44px!important}.v-application .ma-md-12{margin:48px!important}.v-application .ma-md-13{margin:52px!important}.v-application .ma-md-14{margin:56px!important}.v-application .ma-md-15{margin:60px!important}.v-application .ma-md-16{margin:64px!important}.v-application .ma-md-auto{margin:auto!important}.v-application .mx-md-0{margin-right:0!important;margin-left:0!important}.v-application .mx-md-1{margin-right:4px!important;margin-left:4px!important}.v-application .mx-md-2{margin-right:8px!important;margin-left:8px!important}.v-application .mx-md-3{margin-right:12px!important;margin-left:12px!important}.v-application .mx-md-4{margin-right:16px!important;margin-left:16px!important}.v-application .mx-md-5{margin-right:20px!important;margin-left:20px!important}.v-application .mx-md-6{margin-right:24px!important;margin-left:24px!important}.v-application .mx-md-7{margin-right:28px!important;margin-left:28px!important}.v-application .mx-md-8{margin-right:32px!important;margin-left:32px!important}.v-application .mx-md-9{margin-right:36px!important;margin-left:36px!important}.v-application .mx-md-10{margin-right:40px!important;margin-left:40px!important}.v-application .mx-md-11{margin-right:44px!important;margin-left:44px!important}.v-application .mx-md-12{margin-right:48px!important;margin-left:48px!important}.v-application .mx-md-13{margin-right:52px!important;margin-left:52px!important}.v-application .mx-md-14{margin-right:56px!important;margin-left:56px!important}.v-application .mx-md-15{margin-right:60px!important;margin-left:60px!important}.v-application .mx-md-16{margin-right:64px!important;margin-left:64px!important}.v-application .mx-md-auto{margin-right:auto!important;margin-left:auto!important}.v-application .my-md-0{margin-top:0!important;margin-bottom:0!important}.v-application .my-md-1{margin-top:4px!important;margin-bottom:4px!important}.v-application .my-md-2{margin-top:8px!important;margin-bottom:8px!important}.v-application .my-md-3{margin-top:12px!important;margin-bottom:12px!important}.v-application .my-md-4{margin-top:16px!important;margin-bottom:16px!important}.v-application .my-md-5{margin-top:20px!important;margin-bottom:20px!important}.v-application .my-md-6{margin-top:24px!important;margin-bottom:24px!important}.v-application .my-md-7{margin-top:28px!important;margin-bottom:28px!important}.v-application .my-md-8{margin-top:32px!important;margin-bottom:32px!important}.v-application .my-md-9{margin-top:36px!important;margin-bottom:36px!important}.v-application .my-md-10{margin-top:40px!important;margin-bottom:40px!important}.v-application .my-md-11{margin-top:44px!important;margin-bottom:44px!important}.v-application .my-md-12{margin-top:48px!important;margin-bottom:48px!important}.v-application .my-md-13{margin-top:52px!important;margin-bottom:52px!important}.v-application .my-md-14{margin-top:56px!important;margin-bottom:56px!important}.v-application .my-md-15{margin-top:60px!important;margin-bottom:60px!important}.v-application .my-md-16{margin-top:64px!important;margin-bottom:64px!important}.v-application .my-md-auto{margin-top:auto!important;margin-bottom:auto!important}.v-application .mt-md-0{margin-top:0!important}.v-application .mt-md-1{margin-top:4px!important}.v-application .mt-md-2{margin-top:8px!important}.v-application .mt-md-3{margin-top:12px!important}.v-application .mt-md-4{margin-top:16px!important}.v-application .mt-md-5{margin-top:20px!important}.v-application .mt-md-6{margin-top:24px!important}.v-application .mt-md-7{margin-top:28px!important}.v-application .mt-md-8{margin-top:32px!important}.v-application .mt-md-9{margin-top:36px!important}.v-application .mt-md-10{margin-top:40px!important}.v-application .mt-md-11{margin-top:44px!important}.v-application .mt-md-12{margin-top:48px!important}.v-application .mt-md-13{margin-top:52px!important}.v-application .mt-md-14{margin-top:56px!important}.v-application .mt-md-15{margin-top:60px!important}.v-application .mt-md-16{margin-top:64px!important}.v-application .mt-md-auto{margin-top:auto!important}.v-application .mr-md-0{margin-right:0!important}.v-application .mr-md-1{margin-right:4px!important}.v-application .mr-md-2{margin-right:8px!important}.v-application .mr-md-3{margin-right:12px!important}.v-application .mr-md-4{margin-right:16px!important}.v-application .mr-md-5{margin-right:20px!important}.v-application .mr-md-6{margin-right:24px!important}.v-application .mr-md-7{margin-right:28px!important}.v-application .mr-md-8{margin-right:32px!important}.v-application .mr-md-9{margin-right:36px!important}.v-application .mr-md-10{margin-right:40px!important}.v-application .mr-md-11{margin-right:44px!important}.v-application .mr-md-12{margin-right:48px!important}.v-application .mr-md-13{margin-right:52px!important}.v-application .mr-md-14{margin-right:56px!important}.v-application .mr-md-15{margin-right:60px!important}.v-application .mr-md-16{margin-right:64px!important}.v-application .mr-md-auto{margin-right:auto!important}.v-application .mb-md-0{margin-bottom:0!important}.v-application .mb-md-1{margin-bottom:4px!important}.v-application .mb-md-2{margin-bottom:8px!important}.v-application .mb-md-3{margin-bottom:12px!important}.v-application .mb-md-4{margin-bottom:16px!important}.v-application .mb-md-5{margin-bottom:20px!important}.v-application .mb-md-6{margin-bottom:24px!important}.v-application .mb-md-7{margin-bottom:28px!important}.v-application .mb-md-8{margin-bottom:32px!important}.v-application .mb-md-9{margin-bottom:36px!important}.v-application .mb-md-10{margin-bottom:40px!important}.v-application .mb-md-11{margin-bottom:44px!important}.v-application .mb-md-12{margin-bottom:48px!important}.v-application .mb-md-13{margin-bottom:52px!important}.v-application .mb-md-14{margin-bottom:56px!important}.v-application .mb-md-15{margin-bottom:60px!important}.v-application .mb-md-16{margin-bottom:64px!important}.v-application .mb-md-auto{margin-bottom:auto!important}.v-application .ml-md-0{margin-left:0!important}.v-application .ml-md-1{margin-left:4px!important}.v-application .ml-md-2{margin-left:8px!important}.v-application .ml-md-3{margin-left:12px!important}.v-application .ml-md-4{margin-left:16px!important}.v-application .ml-md-5{margin-left:20px!important}.v-application .ml-md-6{margin-left:24px!important}.v-application .ml-md-7{margin-left:28px!important}.v-application .ml-md-8{margin-left:32px!important}.v-application .ml-md-9{margin-left:36px!important}.v-application .ml-md-10{margin-left:40px!important}.v-application .ml-md-11{margin-left:44px!important}.v-application .ml-md-12{margin-left:48px!important}.v-application .ml-md-13{margin-left:52px!important}.v-application .ml-md-14{margin-left:56px!important}.v-application .ml-md-15{margin-left:60px!important}.v-application .ml-md-16{margin-left:64px!important}.v-application .ml-md-auto{margin-left:auto!important}.v-application--is-ltr .ms-md-0{margin-left:0!important}.v-application--is-rtl .ms-md-0{margin-right:0!important}.v-application--is-ltr .ms-md-1{margin-left:4px!important}.v-application--is-rtl .ms-md-1{margin-right:4px!important}.v-application--is-ltr .ms-md-2{margin-left:8px!important}.v-application--is-rtl .ms-md-2{margin-right:8px!important}.v-application--is-ltr .ms-md-3{margin-left:12px!important}.v-application--is-rtl .ms-md-3{margin-right:12px!important}.v-application--is-ltr .ms-md-4{margin-left:16px!important}.v-application--is-rtl .ms-md-4{margin-right:16px!important}.v-application--is-ltr .ms-md-5{margin-left:20px!important}.v-application--is-rtl .ms-md-5{margin-right:20px!important}.v-application--is-ltr .ms-md-6{margin-left:24px!important}.v-application--is-rtl .ms-md-6{margin-right:24px!important}.v-application--is-ltr .ms-md-7{margin-left:28px!important}.v-application--is-rtl .ms-md-7{margin-right:28px!important}.v-application--is-ltr .ms-md-8{margin-left:32px!important}.v-application--is-rtl .ms-md-8{margin-right:32px!important}.v-application--is-ltr .ms-md-9{margin-left:36px!important}.v-application--is-rtl .ms-md-9{margin-right:36px!important}.v-application--is-ltr .ms-md-10{margin-left:40px!important}.v-application--is-rtl .ms-md-10{margin-right:40px!important}.v-application--is-ltr .ms-md-11{margin-left:44px!important}.v-application--is-rtl .ms-md-11{margin-right:44px!important}.v-application--is-ltr .ms-md-12{margin-left:48px!important}.v-application--is-rtl .ms-md-12{margin-right:48px!important}.v-application--is-ltr .ms-md-13{margin-left:52px!important}.v-application--is-rtl .ms-md-13{margin-right:52px!important}.v-application--is-ltr .ms-md-14{margin-left:56px!important}.v-application--is-rtl .ms-md-14{margin-right:56px!important}.v-application--is-ltr .ms-md-15{margin-left:60px!important}.v-application--is-rtl .ms-md-15{margin-right:60px!important}.v-application--is-ltr .ms-md-16{margin-left:64px!important}.v-application--is-rtl .ms-md-16{margin-right:64px!important}.v-application--is-ltr .ms-md-auto{margin-left:auto!important}.v-application--is-rtl .ms-md-auto{margin-right:auto!important}.v-application--is-ltr .me-md-0{margin-right:0!important}.v-application--is-rtl .me-md-0{margin-left:0!important}.v-application--is-ltr .me-md-1{margin-right:4px!important}.v-application--is-rtl .me-md-1{margin-left:4px!important}.v-application--is-ltr .me-md-2{margin-right:8px!important}.v-application--is-rtl .me-md-2{margin-left:8px!important}.v-application--is-ltr .me-md-3{margin-right:12px!important}.v-application--is-rtl .me-md-3{margin-left:12px!important}.v-application--is-ltr .me-md-4{margin-right:16px!important}.v-application--is-rtl .me-md-4{margin-left:16px!important}.v-application--is-ltr .me-md-5{margin-right:20px!important}.v-application--is-rtl .me-md-5{margin-left:20px!important}.v-application--is-ltr .me-md-6{margin-right:24px!important}.v-application--is-rtl .me-md-6{margin-left:24px!important}.v-application--is-ltr .me-md-7{margin-right:28px!important}.v-application--is-rtl .me-md-7{margin-left:28px!important}.v-application--is-ltr .me-md-8{margin-right:32px!important}.v-application--is-rtl .me-md-8{margin-left:32px!important}.v-application--is-ltr .me-md-9{margin-right:36px!important}.v-application--is-rtl .me-md-9{margin-left:36px!important}.v-application--is-ltr .me-md-10{margin-right:40px!important}.v-application--is-rtl .me-md-10{margin-left:40px!important}.v-application--is-ltr .me-md-11{margin-right:44px!important}.v-application--is-rtl .me-md-11{margin-left:44px!important}.v-application--is-ltr .me-md-12{margin-right:48px!important}.v-application--is-rtl .me-md-12{margin-left:48px!important}.v-application--is-ltr .me-md-13{margin-right:52px!important}.v-application--is-rtl .me-md-13{margin-left:52px!important}.v-application--is-ltr .me-md-14{margin-right:56px!important}.v-application--is-rtl .me-md-14{margin-left:56px!important}.v-application--is-ltr .me-md-15{margin-right:60px!important}.v-application--is-rtl .me-md-15{margin-left:60px!important}.v-application--is-ltr .me-md-16{margin-right:64px!important}.v-application--is-rtl .me-md-16{margin-left:64px!important}.v-application--is-ltr .me-md-auto{margin-right:auto!important}.v-application--is-rtl .me-md-auto{margin-left:auto!important}.v-application .ma-md-n1{margin:-4px!important}.v-application .ma-md-n2{margin:-8px!important}.v-application .ma-md-n3{margin:-12px!important}.v-application .ma-md-n4{margin:-16px!important}.v-application .ma-md-n5{margin:-20px!important}.v-application .ma-md-n6{margin:-24px!important}.v-application .ma-md-n7{margin:-28px!important}.v-application .ma-md-n8{margin:-32px!important}.v-application .ma-md-n9{margin:-36px!important}.v-application .ma-md-n10{margin:-40px!important}.v-application .ma-md-n11{margin:-44px!important}.v-application .ma-md-n12{margin:-48px!important}.v-application .ma-md-n13{margin:-52px!important}.v-application .ma-md-n14{margin:-56px!important}.v-application .ma-md-n15{margin:-60px!important}.v-application .ma-md-n16{margin:-64px!important}.v-application .mx-md-n1{margin-right:-4px!important;margin-left:-4px!important}.v-application .mx-md-n2{margin-right:-8px!important;margin-left:-8px!important}.v-application .mx-md-n3{margin-right:-12px!important;margin-left:-12px!important}.v-application .mx-md-n4{margin-right:-16px!important;margin-left:-16px!important}.v-application .mx-md-n5{margin-right:-20px!important;margin-left:-20px!important}.v-application .mx-md-n6{margin-right:-24px!important;margin-left:-24px!important}.v-application .mx-md-n7{margin-right:-28px!important;margin-left:-28px!important}.v-application .mx-md-n8{margin-right:-32px!important;margin-left:-32px!important}.v-application .mx-md-n9{margin-right:-36px!important;margin-left:-36px!important}.v-application .mx-md-n10{margin-right:-40px!important;margin-left:-40px!important}.v-application .mx-md-n11{margin-right:-44px!important;margin-left:-44px!important}.v-application .mx-md-n12{margin-right:-48px!important;margin-left:-48px!important}.v-application .mx-md-n13{margin-right:-52px!important;margin-left:-52px!important}.v-application .mx-md-n14{margin-right:-56px!important;margin-left:-56px!important}.v-application .mx-md-n15{margin-right:-60px!important;margin-left:-60px!important}.v-application .mx-md-n16{margin-right:-64px!important;margin-left:-64px!important}.v-application .my-md-n1{margin-top:-4px!important;margin-bottom:-4px!important}.v-application .my-md-n2{margin-top:-8px!important;margin-bottom:-8px!important}.v-application .my-md-n3{margin-top:-12px!important;margin-bottom:-12px!important}.v-application .my-md-n4{margin-top:-16px!important;margin-bottom:-16px!important}.v-application .my-md-n5{margin-top:-20px!important;margin-bottom:-20px!important}.v-application .my-md-n6{margin-top:-24px!important;margin-bottom:-24px!important}.v-application .my-md-n7{margin-top:-28px!important;margin-bottom:-28px!important}.v-application .my-md-n8{margin-top:-32px!important;margin-bottom:-32px!important}.v-application .my-md-n9{margin-top:-36px!important;margin-bottom:-36px!important}.v-application .my-md-n10{margin-top:-40px!important;margin-bottom:-40px!important}.v-application .my-md-n11{margin-top:-44px!important;margin-bottom:-44px!important}.v-application .my-md-n12{margin-top:-48px!important;margin-bottom:-48px!important}.v-application .my-md-n13{margin-top:-52px!important;margin-bottom:-52px!important}.v-application .my-md-n14{margin-top:-56px!important;margin-bottom:-56px!important}.v-application .my-md-n15{margin-top:-60px!important;margin-bottom:-60px!important}.v-application .my-md-n16{margin-top:-64px!important;margin-bottom:-64px!important}.v-application .mt-md-n1{margin-top:-4px!important}.v-application .mt-md-n2{margin-top:-8px!important}.v-application .mt-md-n3{margin-top:-12px!important}.v-application .mt-md-n4{margin-top:-16px!important}.v-application .mt-md-n5{margin-top:-20px!important}.v-application .mt-md-n6{margin-top:-24px!important}.v-application .mt-md-n7{margin-top:-28px!important}.v-application .mt-md-n8{margin-top:-32px!important}.v-application .mt-md-n9{margin-top:-36px!important}.v-application .mt-md-n10{margin-top:-40px!important}.v-application .mt-md-n11{margin-top:-44px!important}.v-application .mt-md-n12{margin-top:-48px!important}.v-application .mt-md-n13{margin-top:-52px!important}.v-application .mt-md-n14{margin-top:-56px!important}.v-application .mt-md-n15{margin-top:-60px!important}.v-application .mt-md-n16{margin-top:-64px!important}.v-application .mr-md-n1{margin-right:-4px!important}.v-application .mr-md-n2{margin-right:-8px!important}.v-application .mr-md-n3{margin-right:-12px!important}.v-application .mr-md-n4{margin-right:-16px!important}.v-application .mr-md-n5{margin-right:-20px!important}.v-application .mr-md-n6{margin-right:-24px!important}.v-application .mr-md-n7{margin-right:-28px!important}.v-application .mr-md-n8{margin-right:-32px!important}.v-application .mr-md-n9{margin-right:-36px!important}.v-application .mr-md-n10{margin-right:-40px!important}.v-application .mr-md-n11{margin-right:-44px!important}.v-application .mr-md-n12{margin-right:-48px!important}.v-application .mr-md-n13{margin-right:-52px!important}.v-application .mr-md-n14{margin-right:-56px!important}.v-application .mr-md-n15{margin-right:-60px!important}.v-application .mr-md-n16{margin-right:-64px!important}.v-application .mb-md-n1{margin-bottom:-4px!important}.v-application .mb-md-n2{margin-bottom:-8px!important}.v-application .mb-md-n3{margin-bottom:-12px!important}.v-application .mb-md-n4{margin-bottom:-16px!important}.v-application .mb-md-n5{margin-bottom:-20px!important}.v-application .mb-md-n6{margin-bottom:-24px!important}.v-application .mb-md-n7{margin-bottom:-28px!important}.v-application .mb-md-n8{margin-bottom:-32px!important}.v-application .mb-md-n9{margin-bottom:-36px!important}.v-application .mb-md-n10{margin-bottom:-40px!important}.v-application .mb-md-n11{margin-bottom:-44px!important}.v-application .mb-md-n12{margin-bottom:-48px!important}.v-application .mb-md-n13{margin-bottom:-52px!important}.v-application .mb-md-n14{margin-bottom:-56px!important}.v-application .mb-md-n15{margin-bottom:-60px!important}.v-application .mb-md-n16{margin-bottom:-64px!important}.v-application .ml-md-n1{margin-left:-4px!important}.v-application .ml-md-n2{margin-left:-8px!important}.v-application .ml-md-n3{margin-left:-12px!important}.v-application .ml-md-n4{margin-left:-16px!important}.v-application .ml-md-n5{margin-left:-20px!important}.v-application .ml-md-n6{margin-left:-24px!important}.v-application .ml-md-n7{margin-left:-28px!important}.v-application .ml-md-n8{margin-left:-32px!important}.v-application .ml-md-n9{margin-left:-36px!important}.v-application .ml-md-n10{margin-left:-40px!important}.v-application .ml-md-n11{margin-left:-44px!important}.v-application .ml-md-n12{margin-left:-48px!important}.v-application .ml-md-n13{margin-left:-52px!important}.v-application .ml-md-n14{margin-left:-56px!important}.v-application .ml-md-n15{margin-left:-60px!important}.v-application .ml-md-n16{margin-left:-64px!important}.v-application--is-ltr .ms-md-n1{margin-left:-4px!important}.v-application--is-rtl .ms-md-n1{margin-right:-4px!important}.v-application--is-ltr .ms-md-n2{margin-left:-8px!important}.v-application--is-rtl .ms-md-n2{margin-right:-8px!important}.v-application--is-ltr .ms-md-n3{margin-left:-12px!important}.v-application--is-rtl .ms-md-n3{margin-right:-12px!important}.v-application--is-ltr .ms-md-n4{margin-left:-16px!important}.v-application--is-rtl .ms-md-n4{margin-right:-16px!important}.v-application--is-ltr .ms-md-n5{margin-left:-20px!important}.v-application--is-rtl .ms-md-n5{margin-right:-20px!important}.v-application--is-ltr .ms-md-n6{margin-left:-24px!important}.v-application--is-rtl .ms-md-n6{margin-right:-24px!important}.v-application--is-ltr .ms-md-n7{margin-left:-28px!important}.v-application--is-rtl .ms-md-n7{margin-right:-28px!important}.v-application--is-ltr .ms-md-n8{margin-left:-32px!important}.v-application--is-rtl .ms-md-n8{margin-right:-32px!important}.v-application--is-ltr .ms-md-n9{margin-left:-36px!important}.v-application--is-rtl .ms-md-n9{margin-right:-36px!important}.v-application--is-ltr .ms-md-n10{margin-left:-40px!important}.v-application--is-rtl .ms-md-n10{margin-right:-40px!important}.v-application--is-ltr .ms-md-n11{margin-left:-44px!important}.v-application--is-rtl .ms-md-n11{margin-right:-44px!important}.v-application--is-ltr .ms-md-n12{margin-left:-48px!important}.v-application--is-rtl .ms-md-n12{margin-right:-48px!important}.v-application--is-ltr .ms-md-n13{margin-left:-52px!important}.v-application--is-rtl .ms-md-n13{margin-right:-52px!important}.v-application--is-ltr .ms-md-n14{margin-left:-56px!important}.v-application--is-rtl .ms-md-n14{margin-right:-56px!important}.v-application--is-ltr .ms-md-n15{margin-left:-60px!important}.v-application--is-rtl .ms-md-n15{margin-right:-60px!important}.v-application--is-ltr .ms-md-n16{margin-left:-64px!important}.v-application--is-rtl .ms-md-n16{margin-right:-64px!important}.v-application--is-ltr .me-md-n1{margin-right:-4px!important}.v-application--is-rtl .me-md-n1{margin-left:-4px!important}.v-application--is-ltr .me-md-n2{margin-right:-8px!important}.v-application--is-rtl .me-md-n2{margin-left:-8px!important}.v-application--is-ltr .me-md-n3{margin-right:-12px!important}.v-application--is-rtl .me-md-n3{margin-left:-12px!important}.v-application--is-ltr .me-md-n4{margin-right:-16px!important}.v-application--is-rtl .me-md-n4{margin-left:-16px!important}.v-application--is-ltr .me-md-n5{margin-right:-20px!important}.v-application--is-rtl .me-md-n5{margin-left:-20px!important}.v-application--is-ltr .me-md-n6{margin-right:-24px!important}.v-application--is-rtl .me-md-n6{margin-left:-24px!important}.v-application--is-ltr .me-md-n7{margin-right:-28px!important}.v-application--is-rtl .me-md-n7{margin-left:-28px!important}.v-application--is-ltr .me-md-n8{margin-right:-32px!important}.v-application--is-rtl .me-md-n8{margin-left:-32px!important}.v-application--is-ltr .me-md-n9{margin-right:-36px!important}.v-application--is-rtl .me-md-n9{margin-left:-36px!important}.v-application--is-ltr .me-md-n10{margin-right:-40px!important}.v-application--is-rtl .me-md-n10{margin-left:-40px!important}.v-application--is-ltr .me-md-n11{margin-right:-44px!important}.v-application--is-rtl .me-md-n11{margin-left:-44px!important}.v-application--is-ltr .me-md-n12{margin-right:-48px!important}.v-application--is-rtl .me-md-n12{margin-left:-48px!important}.v-application--is-ltr .me-md-n13{margin-right:-52px!important}.v-application--is-rtl .me-md-n13{margin-left:-52px!important}.v-application--is-ltr .me-md-n14{margin-right:-56px!important}.v-application--is-rtl .me-md-n14{margin-left:-56px!important}.v-application--is-ltr .me-md-n15{margin-right:-60px!important}.v-application--is-rtl .me-md-n15{margin-left:-60px!important}.v-application--is-ltr .me-md-n16{margin-right:-64px!important}.v-application--is-rtl .me-md-n16{margin-left:-64px!important}.v-application .pa-md-0{padding:0!important}.v-application .pa-md-1{padding:4px!important}.v-application .pa-md-2{padding:8px!important}.v-application .pa-md-3{padding:12px!important}.v-application .pa-md-4{padding:16px!important}.v-application .pa-md-5{padding:20px!important}.v-application .pa-md-6{padding:24px!important}.v-application .pa-md-7{padding:28px!important}.v-application .pa-md-8{padding:32px!important}.v-application .pa-md-9{padding:36px!important}.v-application .pa-md-10{padding:40px!important}.v-application .pa-md-11{padding:44px!important}.v-application .pa-md-12{padding:48px!important}.v-application .pa-md-13{padding:52px!important}.v-application .pa-md-14{padding:56px!important}.v-application .pa-md-15{padding:60px!important}.v-application .pa-md-16{padding:64px!important}.v-application .px-md-0{padding-right:0!important;padding-left:0!important}.v-application .px-md-1{padding-right:4px!important;padding-left:4px!important}.v-application .px-md-2{padding-right:8px!important;padding-left:8px!important}.v-application .px-md-3{padding-right:12px!important;padding-left:12px!important}.v-application .px-md-4{padding-right:16px!important;padding-left:16px!important}.v-application .px-md-5{padding-right:20px!important;padding-left:20px!important}.v-application .px-md-6{padding-right:24px!important;padding-left:24px!important}.v-application .px-md-7{padding-right:28px!important;padding-left:28px!important}.v-application .px-md-8{padding-right:32px!important;padding-left:32px!important}.v-application .px-md-9{padding-right:36px!important;padding-left:36px!important}.v-application .px-md-10{padding-right:40px!important;padding-left:40px!important}.v-application .px-md-11{padding-right:44px!important;padding-left:44px!important}.v-application .px-md-12{padding-right:48px!important;padding-left:48px!important}.v-application .px-md-13{padding-right:52px!important;padding-left:52px!important}.v-application .px-md-14{padding-right:56px!important;padding-left:56px!important}.v-application .px-md-15{padding-right:60px!important;padding-left:60px!important}.v-application .px-md-16{padding-right:64px!important;padding-left:64px!important}.v-application .py-md-0{padding-top:0!important;padding-bottom:0!important}.v-application .py-md-1{padding-top:4px!important;padding-bottom:4px!important}.v-application .py-md-2{padding-top:8px!important;padding-bottom:8px!important}.v-application .py-md-3{padding-top:12px!important;padding-bottom:12px!important}.v-application .py-md-4{padding-top:16px!important;padding-bottom:16px!important}.v-application .py-md-5{padding-top:20px!important;padding-bottom:20px!important}.v-application .py-md-6{padding-top:24px!important;padding-bottom:24px!important}.v-application .py-md-7{padding-top:28px!important;padding-bottom:28px!important}.v-application .py-md-8{padding-top:32px!important;padding-bottom:32px!important}.v-application .py-md-9{padding-top:36px!important;padding-bottom:36px!important}.v-application .py-md-10{padding-top:40px!important;padding-bottom:40px!important}.v-application .py-md-11{padding-top:44px!important;padding-bottom:44px!important}.v-application .py-md-12{padding-top:48px!important;padding-bottom:48px!important}.v-application .py-md-13{padding-top:52px!important;padding-bottom:52px!important}.v-application .py-md-14{padding-top:56px!important;padding-bottom:56px!important}.v-application .py-md-15{padding-top:60px!important;padding-bottom:60px!important}.v-application .py-md-16{padding-top:64px!important;padding-bottom:64px!important}.v-application .pt-md-0{padding-top:0!important}.v-application .pt-md-1{padding-top:4px!important}.v-application .pt-md-2{padding-top:8px!important}.v-application .pt-md-3{padding-top:12px!important}.v-application .pt-md-4{padding-top:16px!important}.v-application .pt-md-5{padding-top:20px!important}.v-application .pt-md-6{padding-top:24px!important}.v-application .pt-md-7{padding-top:28px!important}.v-application .pt-md-8{padding-top:32px!important}.v-application .pt-md-9{padding-top:36px!important}.v-application .pt-md-10{padding-top:40px!important}.v-application .pt-md-11{padding-top:44px!important}.v-application .pt-md-12{padding-top:48px!important}.v-application .pt-md-13{padding-top:52px!important}.v-application .pt-md-14{padding-top:56px!important}.v-application .pt-md-15{padding-top:60px!important}.v-application .pt-md-16{padding-top:64px!important}.v-application .pr-md-0{padding-right:0!important}.v-application .pr-md-1{padding-right:4px!important}.v-application .pr-md-2{padding-right:8px!important}.v-application .pr-md-3{padding-right:12px!important}.v-application .pr-md-4{padding-right:16px!important}.v-application .pr-md-5{padding-right:20px!important}.v-application .pr-md-6{padding-right:24px!important}.v-application .pr-md-7{padding-right:28px!important}.v-application .pr-md-8{padding-right:32px!important}.v-application .pr-md-9{padding-right:36px!important}.v-application .pr-md-10{padding-right:40px!important}.v-application .pr-md-11{padding-right:44px!important}.v-application .pr-md-12{padding-right:48px!important}.v-application .pr-md-13{padding-right:52px!important}.v-application .pr-md-14{padding-right:56px!important}.v-application .pr-md-15{padding-right:60px!important}.v-application .pr-md-16{padding-right:64px!important}.v-application .pb-md-0{padding-bottom:0!important}.v-application .pb-md-1{padding-bottom:4px!important}.v-application .pb-md-2{padding-bottom:8px!important}.v-application .pb-md-3{padding-bottom:12px!important}.v-application .pb-md-4{padding-bottom:16px!important}.v-application .pb-md-5{padding-bottom:20px!important}.v-application .pb-md-6{padding-bottom:24px!important}.v-application .pb-md-7{padding-bottom:28px!important}.v-application .pb-md-8{padding-bottom:32px!important}.v-application .pb-md-9{padding-bottom:36px!important}.v-application .pb-md-10{padding-bottom:40px!important}.v-application .pb-md-11{padding-bottom:44px!important}.v-application .pb-md-12{padding-bottom:48px!important}.v-application .pb-md-13{padding-bottom:52px!important}.v-application .pb-md-14{padding-bottom:56px!important}.v-application .pb-md-15{padding-bottom:60px!important}.v-application .pb-md-16{padding-bottom:64px!important}.v-application .pl-md-0{padding-left:0!important}.v-application .pl-md-1{padding-left:4px!important}.v-application .pl-md-2{padding-left:8px!important}.v-application .pl-md-3{padding-left:12px!important}.v-application .pl-md-4{padding-left:16px!important}.v-application .pl-md-5{padding-left:20px!important}.v-application .pl-md-6{padding-left:24px!important}.v-application .pl-md-7{padding-left:28px!important}.v-application .pl-md-8{padding-left:32px!important}.v-application .pl-md-9{padding-left:36px!important}.v-application .pl-md-10{padding-left:40px!important}.v-application .pl-md-11{padding-left:44px!important}.v-application .pl-md-12{padding-left:48px!important}.v-application .pl-md-13{padding-left:52px!important}.v-application .pl-md-14{padding-left:56px!important}.v-application .pl-md-15{padding-left:60px!important}.v-application .pl-md-16{padding-left:64px!important}.v-application--is-ltr .ps-md-0{padding-left:0!important}.v-application--is-rtl .ps-md-0{padding-right:0!important}.v-application--is-ltr .ps-md-1{padding-left:4px!important}.v-application--is-rtl .ps-md-1{padding-right:4px!important}.v-application--is-ltr .ps-md-2{padding-left:8px!important}.v-application--is-rtl .ps-md-2{padding-right:8px!important}.v-application--is-ltr .ps-md-3{padding-left:12px!important}.v-application--is-rtl .ps-md-3{padding-right:12px!important}.v-application--is-ltr .ps-md-4{padding-left:16px!important}.v-application--is-rtl .ps-md-4{padding-right:16px!important}.v-application--is-ltr .ps-md-5{padding-left:20px!important}.v-application--is-rtl .ps-md-5{padding-right:20px!important}.v-application--is-ltr .ps-md-6{padding-left:24px!important}.v-application--is-rtl .ps-md-6{padding-right:24px!important}.v-application--is-ltr .ps-md-7{padding-left:28px!important}.v-application--is-rtl .ps-md-7{padding-right:28px!important}.v-application--is-ltr .ps-md-8{padding-left:32px!important}.v-application--is-rtl .ps-md-8{padding-right:32px!important}.v-application--is-ltr .ps-md-9{padding-left:36px!important}.v-application--is-rtl .ps-md-9{padding-right:36px!important}.v-application--is-ltr .ps-md-10{padding-left:40px!important}.v-application--is-rtl .ps-md-10{padding-right:40px!important}.v-application--is-ltr .ps-md-11{padding-left:44px!important}.v-application--is-rtl .ps-md-11{padding-right:44px!important}.v-application--is-ltr .ps-md-12{padding-left:48px!important}.v-application--is-rtl .ps-md-12{padding-right:48px!important}.v-application--is-ltr .ps-md-13{padding-left:52px!important}.v-application--is-rtl .ps-md-13{padding-right:52px!important}.v-application--is-ltr .ps-md-14{padding-left:56px!important}.v-application--is-rtl .ps-md-14{padding-right:56px!important}.v-application--is-ltr .ps-md-15{padding-left:60px!important}.v-application--is-rtl .ps-md-15{padding-right:60px!important}.v-application--is-ltr .ps-md-16{padding-left:64px!important}.v-application--is-rtl .ps-md-16{padding-right:64px!important}.v-application--is-ltr .pe-md-0{padding-right:0!important}.v-application--is-rtl .pe-md-0{padding-left:0!important}.v-application--is-ltr .pe-md-1{padding-right:4px!important}.v-application--is-rtl .pe-md-1{padding-left:4px!important}.v-application--is-ltr .pe-md-2{padding-right:8px!important}.v-application--is-rtl .pe-md-2{padding-left:8px!important}.v-application--is-ltr .pe-md-3{padding-right:12px!important}.v-application--is-rtl .pe-md-3{padding-left:12px!important}.v-application--is-ltr .pe-md-4{padding-right:16px!important}.v-application--is-rtl .pe-md-4{padding-left:16px!important}.v-application--is-ltr .pe-md-5{padding-right:20px!important}.v-application--is-rtl .pe-md-5{padding-left:20px!important}.v-application--is-ltr .pe-md-6{padding-right:24px!important}.v-application--is-rtl .pe-md-6{padding-left:24px!important}.v-application--is-ltr .pe-md-7{padding-right:28px!important}.v-application--is-rtl .pe-md-7{padding-left:28px!important}.v-application--is-ltr .pe-md-8{padding-right:32px!important}.v-application--is-rtl .pe-md-8{padding-left:32px!important}.v-application--is-ltr .pe-md-9{padding-right:36px!important}.v-application--is-rtl .pe-md-9{padding-left:36px!important}.v-application--is-ltr .pe-md-10{padding-right:40px!important}.v-application--is-rtl .pe-md-10{padding-left:40px!important}.v-application--is-ltr .pe-md-11{padding-right:44px!important}.v-application--is-rtl .pe-md-11{padding-left:44px!important}.v-application--is-ltr .pe-md-12{padding-right:48px!important}.v-application--is-rtl .pe-md-12{padding-left:48px!important}.v-application--is-ltr .pe-md-13{padding-right:52px!important}.v-application--is-rtl .pe-md-13{padding-left:52px!important}.v-application--is-ltr .pe-md-14{padding-right:56px!important}.v-application--is-rtl .pe-md-14{padding-left:56px!important}.v-application--is-ltr .pe-md-15{padding-right:60px!important}.v-application--is-rtl .pe-md-15{padding-left:60px!important}.v-application--is-ltr .pe-md-16{padding-right:64px!important}.v-application--is-rtl .pe-md-16{padding-left:64px!important}.v-application .text-md-left{text-align:left!important}.v-application .text-md-right{text-align:right!important}.v-application .text-md-center{text-align:center!important}.v-application .text-md-justify{text-align:justify!important}[dir=ltr] .v-application .text-md-start{text-align:left!important}[dir=ltr] .v-application .text-md-end,[dir=rtl] .v-application .text-md-start{text-align:right!important}[dir=rtl] .v-application .text-md-end{text-align:left!important}.v-application .text-md-h1{font-size:6rem!important;line-height:6rem;letter-spacing:-.015625em!important}.v-application .text-md-h1,.v-application .text-md-h2{font-weight:300;font-family:\"Roboto\",sans-serif!important}.v-application .text-md-h2{font-size:3.75rem!important;line-height:3.75rem;letter-spacing:-.0083333333em!important}.v-application .text-md-h3{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.v-application .text-md-h3,.v-application .text-md-h4{font-weight:400;font-family:\"Roboto\",sans-serif!important}.v-application .text-md-h4{font-size:2.125rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.v-application .text-md-h5{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important}.v-application .text-md-h5,.v-application .text-md-h6{line-height:2rem;font-family:\"Roboto\",sans-serif!important}.v-application .text-md-h6{font-size:1.25rem!important;font-weight:500;letter-spacing:.0125em!important}.v-application .text-md-subtitle-1{font-size:1rem!important;font-weight:400;line-height:1.75rem;letter-spacing:.009375em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-md-subtitle-2{font-size:.875rem!important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-md-body-1{font-size:1rem!important;font-weight:400;line-height:1.5rem;letter-spacing:.03125em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-md-body-2{font-weight:400;line-height:1.25rem;letter-spacing:.0178571429em!important}.v-application .text-md-body-2,.v-application .text-md-button{font-size:.875rem!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-md-button{font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em!important;text-transform:uppercase!important}.v-application .text-md-caption{font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em!important}.v-application .text-md-caption,.v-application .text-md-overline{font-size:.75rem!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-md-overline{font-weight:500;line-height:2rem;letter-spacing:.1666666667em!important;text-transform:uppercase!important}}@media(min-width:1264px){.v-application .d-lg-none{display:none!important}.v-application .d-lg-inline{display:inline!important}.v-application .d-lg-inline-block{display:inline-block!important}.v-application .d-lg-block{display:block!important}.v-application .d-lg-table{display:table!important}.v-application .d-lg-table-row{display:table-row!important}.v-application .d-lg-table-cell{display:table-cell!important}.v-application .d-lg-flex{display:flex!important}.v-application .d-lg-inline-flex{display:inline-flex!important}.v-application .float-lg-none{float:none!important}.v-application .float-lg-left{float:left!important}.v-application .float-lg-right{float:right!important}.v-application--is-rtl .float-lg-end{float:left!important}.v-application--is-ltr .float-lg-end,.v-application--is-rtl .float-lg-start{float:right!important}.v-application--is-ltr .float-lg-start{float:left!important}.v-application .flex-lg-fill{flex:1 1 auto!important}.v-application .flex-lg-row{flex-direction:row!important}.v-application .flex-lg-column{flex-direction:column!important}.v-application .flex-lg-row-reverse{flex-direction:row-reverse!important}.v-application .flex-lg-column-reverse{flex-direction:column-reverse!important}.v-application .flex-lg-grow-0{flex-grow:0!important}.v-application .flex-lg-grow-1{flex-grow:1!important}.v-application .flex-lg-shrink-0{flex-shrink:0!important}.v-application .flex-lg-shrink-1{flex-shrink:1!important}.v-application .flex-lg-wrap{flex-wrap:wrap!important}.v-application .flex-lg-nowrap{flex-wrap:nowrap!important}.v-application .flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.v-application .justify-lg-start{justify-content:flex-start!important}.v-application .justify-lg-end{justify-content:flex-end!important}.v-application .justify-lg-center{justify-content:center!important}.v-application .justify-lg-space-between{justify-content:space-between!important}.v-application .justify-lg-space-around{justify-content:space-around!important}.v-application .align-lg-start{align-items:flex-start!important}.v-application .align-lg-end{align-items:flex-end!important}.v-application .align-lg-center{align-items:center!important}.v-application .align-lg-baseline{align-items:baseline!important}.v-application .align-lg-stretch{align-items:stretch!important}.v-application .align-content-lg-start{align-content:flex-start!important}.v-application .align-content-lg-end{align-content:flex-end!important}.v-application .align-content-lg-center{align-content:center!important}.v-application .align-content-lg-space-between{align-content:space-between!important}.v-application .align-content-lg-space-around{align-content:space-around!important}.v-application .align-content-lg-stretch{align-content:stretch!important}.v-application .align-self-lg-auto{align-self:auto!important}.v-application .align-self-lg-start{align-self:flex-start!important}.v-application .align-self-lg-end{align-self:flex-end!important}.v-application .align-self-lg-center{align-self:center!important}.v-application .align-self-lg-baseline{align-self:baseline!important}.v-application .align-self-lg-stretch{align-self:stretch!important}.v-application .order-lg-first{order:-1!important}.v-application .order-lg-0{order:0!important}.v-application .order-lg-1{order:1!important}.v-application .order-lg-2{order:2!important}.v-application .order-lg-3{order:3!important}.v-application .order-lg-4{order:4!important}.v-application .order-lg-5{order:5!important}.v-application .order-lg-6{order:6!important}.v-application .order-lg-7{order:7!important}.v-application .order-lg-8{order:8!important}.v-application .order-lg-9{order:9!important}.v-application .order-lg-10{order:10!important}.v-application .order-lg-11{order:11!important}.v-application .order-lg-12{order:12!important}.v-application .order-lg-last{order:13!important}.v-application .ma-lg-0{margin:0!important}.v-application .ma-lg-1{margin:4px!important}.v-application .ma-lg-2{margin:8px!important}.v-application .ma-lg-3{margin:12px!important}.v-application .ma-lg-4{margin:16px!important}.v-application .ma-lg-5{margin:20px!important}.v-application .ma-lg-6{margin:24px!important}.v-application .ma-lg-7{margin:28px!important}.v-application .ma-lg-8{margin:32px!important}.v-application .ma-lg-9{margin:36px!important}.v-application .ma-lg-10{margin:40px!important}.v-application .ma-lg-11{margin:44px!important}.v-application .ma-lg-12{margin:48px!important}.v-application .ma-lg-13{margin:52px!important}.v-application .ma-lg-14{margin:56px!important}.v-application .ma-lg-15{margin:60px!important}.v-application .ma-lg-16{margin:64px!important}.v-application .ma-lg-auto{margin:auto!important}.v-application .mx-lg-0{margin-right:0!important;margin-left:0!important}.v-application .mx-lg-1{margin-right:4px!important;margin-left:4px!important}.v-application .mx-lg-2{margin-right:8px!important;margin-left:8px!important}.v-application .mx-lg-3{margin-right:12px!important;margin-left:12px!important}.v-application .mx-lg-4{margin-right:16px!important;margin-left:16px!important}.v-application .mx-lg-5{margin-right:20px!important;margin-left:20px!important}.v-application .mx-lg-6{margin-right:24px!important;margin-left:24px!important}.v-application .mx-lg-7{margin-right:28px!important;margin-left:28px!important}.v-application .mx-lg-8{margin-right:32px!important;margin-left:32px!important}.v-application .mx-lg-9{margin-right:36px!important;margin-left:36px!important}.v-application .mx-lg-10{margin-right:40px!important;margin-left:40px!important}.v-application .mx-lg-11{margin-right:44px!important;margin-left:44px!important}.v-application .mx-lg-12{margin-right:48px!important;margin-left:48px!important}.v-application .mx-lg-13{margin-right:52px!important;margin-left:52px!important}.v-application .mx-lg-14{margin-right:56px!important;margin-left:56px!important}.v-application .mx-lg-15{margin-right:60px!important;margin-left:60px!important}.v-application .mx-lg-16{margin-right:64px!important;margin-left:64px!important}.v-application .mx-lg-auto{margin-right:auto!important;margin-left:auto!important}.v-application .my-lg-0{margin-top:0!important;margin-bottom:0!important}.v-application .my-lg-1{margin-top:4px!important;margin-bottom:4px!important}.v-application .my-lg-2{margin-top:8px!important;margin-bottom:8px!important}.v-application .my-lg-3{margin-top:12px!important;margin-bottom:12px!important}.v-application .my-lg-4{margin-top:16px!important;margin-bottom:16px!important}.v-application .my-lg-5{margin-top:20px!important;margin-bottom:20px!important}.v-application .my-lg-6{margin-top:24px!important;margin-bottom:24px!important}.v-application .my-lg-7{margin-top:28px!important;margin-bottom:28px!important}.v-application .my-lg-8{margin-top:32px!important;margin-bottom:32px!important}.v-application .my-lg-9{margin-top:36px!important;margin-bottom:36px!important}.v-application .my-lg-10{margin-top:40px!important;margin-bottom:40px!important}.v-application .my-lg-11{margin-top:44px!important;margin-bottom:44px!important}.v-application .my-lg-12{margin-top:48px!important;margin-bottom:48px!important}.v-application .my-lg-13{margin-top:52px!important;margin-bottom:52px!important}.v-application .my-lg-14{margin-top:56px!important;margin-bottom:56px!important}.v-application .my-lg-15{margin-top:60px!important;margin-bottom:60px!important}.v-application .my-lg-16{margin-top:64px!important;margin-bottom:64px!important}.v-application .my-lg-auto{margin-top:auto!important;margin-bottom:auto!important}.v-application .mt-lg-0{margin-top:0!important}.v-application .mt-lg-1{margin-top:4px!important}.v-application .mt-lg-2{margin-top:8px!important}.v-application .mt-lg-3{margin-top:12px!important}.v-application .mt-lg-4{margin-top:16px!important}.v-application .mt-lg-5{margin-top:20px!important}.v-application .mt-lg-6{margin-top:24px!important}.v-application .mt-lg-7{margin-top:28px!important}.v-application .mt-lg-8{margin-top:32px!important}.v-application .mt-lg-9{margin-top:36px!important}.v-application .mt-lg-10{margin-top:40px!important}.v-application .mt-lg-11{margin-top:44px!important}.v-application .mt-lg-12{margin-top:48px!important}.v-application .mt-lg-13{margin-top:52px!important}.v-application .mt-lg-14{margin-top:56px!important}.v-application .mt-lg-15{margin-top:60px!important}.v-application .mt-lg-16{margin-top:64px!important}.v-application .mt-lg-auto{margin-top:auto!important}.v-application .mr-lg-0{margin-right:0!important}.v-application .mr-lg-1{margin-right:4px!important}.v-application .mr-lg-2{margin-right:8px!important}.v-application .mr-lg-3{margin-right:12px!important}.v-application .mr-lg-4{margin-right:16px!important}.v-application .mr-lg-5{margin-right:20px!important}.v-application .mr-lg-6{margin-right:24px!important}.v-application .mr-lg-7{margin-right:28px!important}.v-application .mr-lg-8{margin-right:32px!important}.v-application .mr-lg-9{margin-right:36px!important}.v-application .mr-lg-10{margin-right:40px!important}.v-application .mr-lg-11{margin-right:44px!important}.v-application .mr-lg-12{margin-right:48px!important}.v-application .mr-lg-13{margin-right:52px!important}.v-application .mr-lg-14{margin-right:56px!important}.v-application .mr-lg-15{margin-right:60px!important}.v-application .mr-lg-16{margin-right:64px!important}.v-application .mr-lg-auto{margin-right:auto!important}.v-application .mb-lg-0{margin-bottom:0!important}.v-application .mb-lg-1{margin-bottom:4px!important}.v-application .mb-lg-2{margin-bottom:8px!important}.v-application .mb-lg-3{margin-bottom:12px!important}.v-application .mb-lg-4{margin-bottom:16px!important}.v-application .mb-lg-5{margin-bottom:20px!important}.v-application .mb-lg-6{margin-bottom:24px!important}.v-application .mb-lg-7{margin-bottom:28px!important}.v-application .mb-lg-8{margin-bottom:32px!important}.v-application .mb-lg-9{margin-bottom:36px!important}.v-application .mb-lg-10{margin-bottom:40px!important}.v-application .mb-lg-11{margin-bottom:44px!important}.v-application .mb-lg-12{margin-bottom:48px!important}.v-application .mb-lg-13{margin-bottom:52px!important}.v-application .mb-lg-14{margin-bottom:56px!important}.v-application .mb-lg-15{margin-bottom:60px!important}.v-application .mb-lg-16{margin-bottom:64px!important}.v-application .mb-lg-auto{margin-bottom:auto!important}.v-application .ml-lg-0{margin-left:0!important}.v-application .ml-lg-1{margin-left:4px!important}.v-application .ml-lg-2{margin-left:8px!important}.v-application .ml-lg-3{margin-left:12px!important}.v-application .ml-lg-4{margin-left:16px!important}.v-application .ml-lg-5{margin-left:20px!important}.v-application .ml-lg-6{margin-left:24px!important}.v-application .ml-lg-7{margin-left:28px!important}.v-application .ml-lg-8{margin-left:32px!important}.v-application .ml-lg-9{margin-left:36px!important}.v-application .ml-lg-10{margin-left:40px!important}.v-application .ml-lg-11{margin-left:44px!important}.v-application .ml-lg-12{margin-left:48px!important}.v-application .ml-lg-13{margin-left:52px!important}.v-application .ml-lg-14{margin-left:56px!important}.v-application .ml-lg-15{margin-left:60px!important}.v-application .ml-lg-16{margin-left:64px!important}.v-application .ml-lg-auto{margin-left:auto!important}.v-application--is-ltr .ms-lg-0{margin-left:0!important}.v-application--is-rtl .ms-lg-0{margin-right:0!important}.v-application--is-ltr .ms-lg-1{margin-left:4px!important}.v-application--is-rtl .ms-lg-1{margin-right:4px!important}.v-application--is-ltr .ms-lg-2{margin-left:8px!important}.v-application--is-rtl .ms-lg-2{margin-right:8px!important}.v-application--is-ltr .ms-lg-3{margin-left:12px!important}.v-application--is-rtl .ms-lg-3{margin-right:12px!important}.v-application--is-ltr .ms-lg-4{margin-left:16px!important}.v-application--is-rtl .ms-lg-4{margin-right:16px!important}.v-application--is-ltr .ms-lg-5{margin-left:20px!important}.v-application--is-rtl .ms-lg-5{margin-right:20px!important}.v-application--is-ltr .ms-lg-6{margin-left:24px!important}.v-application--is-rtl .ms-lg-6{margin-right:24px!important}.v-application--is-ltr .ms-lg-7{margin-left:28px!important}.v-application--is-rtl .ms-lg-7{margin-right:28px!important}.v-application--is-ltr .ms-lg-8{margin-left:32px!important}.v-application--is-rtl .ms-lg-8{margin-right:32px!important}.v-application--is-ltr .ms-lg-9{margin-left:36px!important}.v-application--is-rtl .ms-lg-9{margin-right:36px!important}.v-application--is-ltr .ms-lg-10{margin-left:40px!important}.v-application--is-rtl .ms-lg-10{margin-right:40px!important}.v-application--is-ltr .ms-lg-11{margin-left:44px!important}.v-application--is-rtl .ms-lg-11{margin-right:44px!important}.v-application--is-ltr .ms-lg-12{margin-left:48px!important}.v-application--is-rtl .ms-lg-12{margin-right:48px!important}.v-application--is-ltr .ms-lg-13{margin-left:52px!important}.v-application--is-rtl .ms-lg-13{margin-right:52px!important}.v-application--is-ltr .ms-lg-14{margin-left:56px!important}.v-application--is-rtl .ms-lg-14{margin-right:56px!important}.v-application--is-ltr .ms-lg-15{margin-left:60px!important}.v-application--is-rtl .ms-lg-15{margin-right:60px!important}.v-application--is-ltr .ms-lg-16{margin-left:64px!important}.v-application--is-rtl .ms-lg-16{margin-right:64px!important}.v-application--is-ltr .ms-lg-auto{margin-left:auto!important}.v-application--is-rtl .ms-lg-auto{margin-right:auto!important}.v-application--is-ltr .me-lg-0{margin-right:0!important}.v-application--is-rtl .me-lg-0{margin-left:0!important}.v-application--is-ltr .me-lg-1{margin-right:4px!important}.v-application--is-rtl .me-lg-1{margin-left:4px!important}.v-application--is-ltr .me-lg-2{margin-right:8px!important}.v-application--is-rtl .me-lg-2{margin-left:8px!important}.v-application--is-ltr .me-lg-3{margin-right:12px!important}.v-application--is-rtl .me-lg-3{margin-left:12px!important}.v-application--is-ltr .me-lg-4{margin-right:16px!important}.v-application--is-rtl .me-lg-4{margin-left:16px!important}.v-application--is-ltr .me-lg-5{margin-right:20px!important}.v-application--is-rtl .me-lg-5{margin-left:20px!important}.v-application--is-ltr .me-lg-6{margin-right:24px!important}.v-application--is-rtl .me-lg-6{margin-left:24px!important}.v-application--is-ltr .me-lg-7{margin-right:28px!important}.v-application--is-rtl .me-lg-7{margin-left:28px!important}.v-application--is-ltr .me-lg-8{margin-right:32px!important}.v-application--is-rtl .me-lg-8{margin-left:32px!important}.v-application--is-ltr .me-lg-9{margin-right:36px!important}.v-application--is-rtl .me-lg-9{margin-left:36px!important}.v-application--is-ltr .me-lg-10{margin-right:40px!important}.v-application--is-rtl .me-lg-10{margin-left:40px!important}.v-application--is-ltr .me-lg-11{margin-right:44px!important}.v-application--is-rtl .me-lg-11{margin-left:44px!important}.v-application--is-ltr .me-lg-12{margin-right:48px!important}.v-application--is-rtl .me-lg-12{margin-left:48px!important}.v-application--is-ltr .me-lg-13{margin-right:52px!important}.v-application--is-rtl .me-lg-13{margin-left:52px!important}.v-application--is-ltr .me-lg-14{margin-right:56px!important}.v-application--is-rtl .me-lg-14{margin-left:56px!important}.v-application--is-ltr .me-lg-15{margin-right:60px!important}.v-application--is-rtl .me-lg-15{margin-left:60px!important}.v-application--is-ltr .me-lg-16{margin-right:64px!important}.v-application--is-rtl .me-lg-16{margin-left:64px!important}.v-application--is-ltr .me-lg-auto{margin-right:auto!important}.v-application--is-rtl .me-lg-auto{margin-left:auto!important}.v-application .ma-lg-n1{margin:-4px!important}.v-application .ma-lg-n2{margin:-8px!important}.v-application .ma-lg-n3{margin:-12px!important}.v-application .ma-lg-n4{margin:-16px!important}.v-application .ma-lg-n5{margin:-20px!important}.v-application .ma-lg-n6{margin:-24px!important}.v-application .ma-lg-n7{margin:-28px!important}.v-application .ma-lg-n8{margin:-32px!important}.v-application .ma-lg-n9{margin:-36px!important}.v-application .ma-lg-n10{margin:-40px!important}.v-application .ma-lg-n11{margin:-44px!important}.v-application .ma-lg-n12{margin:-48px!important}.v-application .ma-lg-n13{margin:-52px!important}.v-application .ma-lg-n14{margin:-56px!important}.v-application .ma-lg-n15{margin:-60px!important}.v-application .ma-lg-n16{margin:-64px!important}.v-application .mx-lg-n1{margin-right:-4px!important;margin-left:-4px!important}.v-application .mx-lg-n2{margin-right:-8px!important;margin-left:-8px!important}.v-application .mx-lg-n3{margin-right:-12px!important;margin-left:-12px!important}.v-application .mx-lg-n4{margin-right:-16px!important;margin-left:-16px!important}.v-application .mx-lg-n5{margin-right:-20px!important;margin-left:-20px!important}.v-application .mx-lg-n6{margin-right:-24px!important;margin-left:-24px!important}.v-application .mx-lg-n7{margin-right:-28px!important;margin-left:-28px!important}.v-application .mx-lg-n8{margin-right:-32px!important;margin-left:-32px!important}.v-application .mx-lg-n9{margin-right:-36px!important;margin-left:-36px!important}.v-application .mx-lg-n10{margin-right:-40px!important;margin-left:-40px!important}.v-application .mx-lg-n11{margin-right:-44px!important;margin-left:-44px!important}.v-application .mx-lg-n12{margin-right:-48px!important;margin-left:-48px!important}.v-application .mx-lg-n13{margin-right:-52px!important;margin-left:-52px!important}.v-application .mx-lg-n14{margin-right:-56px!important;margin-left:-56px!important}.v-application .mx-lg-n15{margin-right:-60px!important;margin-left:-60px!important}.v-application .mx-lg-n16{margin-right:-64px!important;margin-left:-64px!important}.v-application .my-lg-n1{margin-top:-4px!important;margin-bottom:-4px!important}.v-application .my-lg-n2{margin-top:-8px!important;margin-bottom:-8px!important}.v-application .my-lg-n3{margin-top:-12px!important;margin-bottom:-12px!important}.v-application .my-lg-n4{margin-top:-16px!important;margin-bottom:-16px!important}.v-application .my-lg-n5{margin-top:-20px!important;margin-bottom:-20px!important}.v-application .my-lg-n6{margin-top:-24px!important;margin-bottom:-24px!important}.v-application .my-lg-n7{margin-top:-28px!important;margin-bottom:-28px!important}.v-application .my-lg-n8{margin-top:-32px!important;margin-bottom:-32px!important}.v-application .my-lg-n9{margin-top:-36px!important;margin-bottom:-36px!important}.v-application .my-lg-n10{margin-top:-40px!important;margin-bottom:-40px!important}.v-application .my-lg-n11{margin-top:-44px!important;margin-bottom:-44px!important}.v-application .my-lg-n12{margin-top:-48px!important;margin-bottom:-48px!important}.v-application .my-lg-n13{margin-top:-52px!important;margin-bottom:-52px!important}.v-application .my-lg-n14{margin-top:-56px!important;margin-bottom:-56px!important}.v-application .my-lg-n15{margin-top:-60px!important;margin-bottom:-60px!important}.v-application .my-lg-n16{margin-top:-64px!important;margin-bottom:-64px!important}.v-application .mt-lg-n1{margin-top:-4px!important}.v-application .mt-lg-n2{margin-top:-8px!important}.v-application .mt-lg-n3{margin-top:-12px!important}.v-application .mt-lg-n4{margin-top:-16px!important}.v-application .mt-lg-n5{margin-top:-20px!important}.v-application .mt-lg-n6{margin-top:-24px!important}.v-application .mt-lg-n7{margin-top:-28px!important}.v-application .mt-lg-n8{margin-top:-32px!important}.v-application .mt-lg-n9{margin-top:-36px!important}.v-application .mt-lg-n10{margin-top:-40px!important}.v-application .mt-lg-n11{margin-top:-44px!important}.v-application .mt-lg-n12{margin-top:-48px!important}.v-application .mt-lg-n13{margin-top:-52px!important}.v-application .mt-lg-n14{margin-top:-56px!important}.v-application .mt-lg-n15{margin-top:-60px!important}.v-application .mt-lg-n16{margin-top:-64px!important}.v-application .mr-lg-n1{margin-right:-4px!important}.v-application .mr-lg-n2{margin-right:-8px!important}.v-application .mr-lg-n3{margin-right:-12px!important}.v-application .mr-lg-n4{margin-right:-16px!important}.v-application .mr-lg-n5{margin-right:-20px!important}.v-application .mr-lg-n6{margin-right:-24px!important}.v-application .mr-lg-n7{margin-right:-28px!important}.v-application .mr-lg-n8{margin-right:-32px!important}.v-application .mr-lg-n9{margin-right:-36px!important}.v-application .mr-lg-n10{margin-right:-40px!important}.v-application .mr-lg-n11{margin-right:-44px!important}.v-application .mr-lg-n12{margin-right:-48px!important}.v-application .mr-lg-n13{margin-right:-52px!important}.v-application .mr-lg-n14{margin-right:-56px!important}.v-application .mr-lg-n15{margin-right:-60px!important}.v-application .mr-lg-n16{margin-right:-64px!important}.v-application .mb-lg-n1{margin-bottom:-4px!important}.v-application .mb-lg-n2{margin-bottom:-8px!important}.v-application .mb-lg-n3{margin-bottom:-12px!important}.v-application .mb-lg-n4{margin-bottom:-16px!important}.v-application .mb-lg-n5{margin-bottom:-20px!important}.v-application .mb-lg-n6{margin-bottom:-24px!important}.v-application .mb-lg-n7{margin-bottom:-28px!important}.v-application .mb-lg-n8{margin-bottom:-32px!important}.v-application .mb-lg-n9{margin-bottom:-36px!important}.v-application .mb-lg-n10{margin-bottom:-40px!important}.v-application .mb-lg-n11{margin-bottom:-44px!important}.v-application .mb-lg-n12{margin-bottom:-48px!important}.v-application .mb-lg-n13{margin-bottom:-52px!important}.v-application .mb-lg-n14{margin-bottom:-56px!important}.v-application .mb-lg-n15{margin-bottom:-60px!important}.v-application .mb-lg-n16{margin-bottom:-64px!important}.v-application .ml-lg-n1{margin-left:-4px!important}.v-application .ml-lg-n2{margin-left:-8px!important}.v-application .ml-lg-n3{margin-left:-12px!important}.v-application .ml-lg-n4{margin-left:-16px!important}.v-application .ml-lg-n5{margin-left:-20px!important}.v-application .ml-lg-n6{margin-left:-24px!important}.v-application .ml-lg-n7{margin-left:-28px!important}.v-application .ml-lg-n8{margin-left:-32px!important}.v-application .ml-lg-n9{margin-left:-36px!important}.v-application .ml-lg-n10{margin-left:-40px!important}.v-application .ml-lg-n11{margin-left:-44px!important}.v-application .ml-lg-n12{margin-left:-48px!important}.v-application .ml-lg-n13{margin-left:-52px!important}.v-application .ml-lg-n14{margin-left:-56px!important}.v-application .ml-lg-n15{margin-left:-60px!important}.v-application .ml-lg-n16{margin-left:-64px!important}.v-application--is-ltr .ms-lg-n1{margin-left:-4px!important}.v-application--is-rtl .ms-lg-n1{margin-right:-4px!important}.v-application--is-ltr .ms-lg-n2{margin-left:-8px!important}.v-application--is-rtl .ms-lg-n2{margin-right:-8px!important}.v-application--is-ltr .ms-lg-n3{margin-left:-12px!important}.v-application--is-rtl .ms-lg-n3{margin-right:-12px!important}.v-application--is-ltr .ms-lg-n4{margin-left:-16px!important}.v-application--is-rtl .ms-lg-n4{margin-right:-16px!important}.v-application--is-ltr .ms-lg-n5{margin-left:-20px!important}.v-application--is-rtl .ms-lg-n5{margin-right:-20px!important}.v-application--is-ltr .ms-lg-n6{margin-left:-24px!important}.v-application--is-rtl .ms-lg-n6{margin-right:-24px!important}.v-application--is-ltr .ms-lg-n7{margin-left:-28px!important}.v-application--is-rtl .ms-lg-n7{margin-right:-28px!important}.v-application--is-ltr .ms-lg-n8{margin-left:-32px!important}.v-application--is-rtl .ms-lg-n8{margin-right:-32px!important}.v-application--is-ltr .ms-lg-n9{margin-left:-36px!important}.v-application--is-rtl .ms-lg-n9{margin-right:-36px!important}.v-application--is-ltr .ms-lg-n10{margin-left:-40px!important}.v-application--is-rtl .ms-lg-n10{margin-right:-40px!important}.v-application--is-ltr .ms-lg-n11{margin-left:-44px!important}.v-application--is-rtl .ms-lg-n11{margin-right:-44px!important}.v-application--is-ltr .ms-lg-n12{margin-left:-48px!important}.v-application--is-rtl .ms-lg-n12{margin-right:-48px!important}.v-application--is-ltr .ms-lg-n13{margin-left:-52px!important}.v-application--is-rtl .ms-lg-n13{margin-right:-52px!important}.v-application--is-ltr .ms-lg-n14{margin-left:-56px!important}.v-application--is-rtl .ms-lg-n14{margin-right:-56px!important}.v-application--is-ltr .ms-lg-n15{margin-left:-60px!important}.v-application--is-rtl .ms-lg-n15{margin-right:-60px!important}.v-application--is-ltr .ms-lg-n16{margin-left:-64px!important}.v-application--is-rtl .ms-lg-n16{margin-right:-64px!important}.v-application--is-ltr .me-lg-n1{margin-right:-4px!important}.v-application--is-rtl .me-lg-n1{margin-left:-4px!important}.v-application--is-ltr .me-lg-n2{margin-right:-8px!important}.v-application--is-rtl .me-lg-n2{margin-left:-8px!important}.v-application--is-ltr .me-lg-n3{margin-right:-12px!important}.v-application--is-rtl .me-lg-n3{margin-left:-12px!important}.v-application--is-ltr .me-lg-n4{margin-right:-16px!important}.v-application--is-rtl .me-lg-n4{margin-left:-16px!important}.v-application--is-ltr .me-lg-n5{margin-right:-20px!important}.v-application--is-rtl .me-lg-n5{margin-left:-20px!important}.v-application--is-ltr .me-lg-n6{margin-right:-24px!important}.v-application--is-rtl .me-lg-n6{margin-left:-24px!important}.v-application--is-ltr .me-lg-n7{margin-right:-28px!important}.v-application--is-rtl .me-lg-n7{margin-left:-28px!important}.v-application--is-ltr .me-lg-n8{margin-right:-32px!important}.v-application--is-rtl .me-lg-n8{margin-left:-32px!important}.v-application--is-ltr .me-lg-n9{margin-right:-36px!important}.v-application--is-rtl .me-lg-n9{margin-left:-36px!important}.v-application--is-ltr .me-lg-n10{margin-right:-40px!important}.v-application--is-rtl .me-lg-n10{margin-left:-40px!important}.v-application--is-ltr .me-lg-n11{margin-right:-44px!important}.v-application--is-rtl .me-lg-n11{margin-left:-44px!important}.v-application--is-ltr .me-lg-n12{margin-right:-48px!important}.v-application--is-rtl .me-lg-n12{margin-left:-48px!important}.v-application--is-ltr .me-lg-n13{margin-right:-52px!important}.v-application--is-rtl .me-lg-n13{margin-left:-52px!important}.v-application--is-ltr .me-lg-n14{margin-right:-56px!important}.v-application--is-rtl .me-lg-n14{margin-left:-56px!important}.v-application--is-ltr .me-lg-n15{margin-right:-60px!important}.v-application--is-rtl .me-lg-n15{margin-left:-60px!important}.v-application--is-ltr .me-lg-n16{margin-right:-64px!important}.v-application--is-rtl .me-lg-n16{margin-left:-64px!important}.v-application .pa-lg-0{padding:0!important}.v-application .pa-lg-1{padding:4px!important}.v-application .pa-lg-2{padding:8px!important}.v-application .pa-lg-3{padding:12px!important}.v-application .pa-lg-4{padding:16px!important}.v-application .pa-lg-5{padding:20px!important}.v-application .pa-lg-6{padding:24px!important}.v-application .pa-lg-7{padding:28px!important}.v-application .pa-lg-8{padding:32px!important}.v-application .pa-lg-9{padding:36px!important}.v-application .pa-lg-10{padding:40px!important}.v-application .pa-lg-11{padding:44px!important}.v-application .pa-lg-12{padding:48px!important}.v-application .pa-lg-13{padding:52px!important}.v-application .pa-lg-14{padding:56px!important}.v-application .pa-lg-15{padding:60px!important}.v-application .pa-lg-16{padding:64px!important}.v-application .px-lg-0{padding-right:0!important;padding-left:0!important}.v-application .px-lg-1{padding-right:4px!important;padding-left:4px!important}.v-application .px-lg-2{padding-right:8px!important;padding-left:8px!important}.v-application .px-lg-3{padding-right:12px!important;padding-left:12px!important}.v-application .px-lg-4{padding-right:16px!important;padding-left:16px!important}.v-application .px-lg-5{padding-right:20px!important;padding-left:20px!important}.v-application .px-lg-6{padding-right:24px!important;padding-left:24px!important}.v-application .px-lg-7{padding-right:28px!important;padding-left:28px!important}.v-application .px-lg-8{padding-right:32px!important;padding-left:32px!important}.v-application .px-lg-9{padding-right:36px!important;padding-left:36px!important}.v-application .px-lg-10{padding-right:40px!important;padding-left:40px!important}.v-application .px-lg-11{padding-right:44px!important;padding-left:44px!important}.v-application .px-lg-12{padding-right:48px!important;padding-left:48px!important}.v-application .px-lg-13{padding-right:52px!important;padding-left:52px!important}.v-application .px-lg-14{padding-right:56px!important;padding-left:56px!important}.v-application .px-lg-15{padding-right:60px!important;padding-left:60px!important}.v-application .px-lg-16{padding-right:64px!important;padding-left:64px!important}.v-application .py-lg-0{padding-top:0!important;padding-bottom:0!important}.v-application .py-lg-1{padding-top:4px!important;padding-bottom:4px!important}.v-application .py-lg-2{padding-top:8px!important;padding-bottom:8px!important}.v-application .py-lg-3{padding-top:12px!important;padding-bottom:12px!important}.v-application .py-lg-4{padding-top:16px!important;padding-bottom:16px!important}.v-application .py-lg-5{padding-top:20px!important;padding-bottom:20px!important}.v-application .py-lg-6{padding-top:24px!important;padding-bottom:24px!important}.v-application .py-lg-7{padding-top:28px!important;padding-bottom:28px!important}.v-application .py-lg-8{padding-top:32px!important;padding-bottom:32px!important}.v-application .py-lg-9{padding-top:36px!important;padding-bottom:36px!important}.v-application .py-lg-10{padding-top:40px!important;padding-bottom:40px!important}.v-application .py-lg-11{padding-top:44px!important;padding-bottom:44px!important}.v-application .py-lg-12{padding-top:48px!important;padding-bottom:48px!important}.v-application .py-lg-13{padding-top:52px!important;padding-bottom:52px!important}.v-application .py-lg-14{padding-top:56px!important;padding-bottom:56px!important}.v-application .py-lg-15{padding-top:60px!important;padding-bottom:60px!important}.v-application .py-lg-16{padding-top:64px!important;padding-bottom:64px!important}.v-application .pt-lg-0{padding-top:0!important}.v-application .pt-lg-1{padding-top:4px!important}.v-application .pt-lg-2{padding-top:8px!important}.v-application .pt-lg-3{padding-top:12px!important}.v-application .pt-lg-4{padding-top:16px!important}.v-application .pt-lg-5{padding-top:20px!important}.v-application .pt-lg-6{padding-top:24px!important}.v-application .pt-lg-7{padding-top:28px!important}.v-application .pt-lg-8{padding-top:32px!important}.v-application .pt-lg-9{padding-top:36px!important}.v-application .pt-lg-10{padding-top:40px!important}.v-application .pt-lg-11{padding-top:44px!important}.v-application .pt-lg-12{padding-top:48px!important}.v-application .pt-lg-13{padding-top:52px!important}.v-application .pt-lg-14{padding-top:56px!important}.v-application .pt-lg-15{padding-top:60px!important}.v-application .pt-lg-16{padding-top:64px!important}.v-application .pr-lg-0{padding-right:0!important}.v-application .pr-lg-1{padding-right:4px!important}.v-application .pr-lg-2{padding-right:8px!important}.v-application .pr-lg-3{padding-right:12px!important}.v-application .pr-lg-4{padding-right:16px!important}.v-application .pr-lg-5{padding-right:20px!important}.v-application .pr-lg-6{padding-right:24px!important}.v-application .pr-lg-7{padding-right:28px!important}.v-application .pr-lg-8{padding-right:32px!important}.v-application .pr-lg-9{padding-right:36px!important}.v-application .pr-lg-10{padding-right:40px!important}.v-application .pr-lg-11{padding-right:44px!important}.v-application .pr-lg-12{padding-right:48px!important}.v-application .pr-lg-13{padding-right:52px!important}.v-application .pr-lg-14{padding-right:56px!important}.v-application .pr-lg-15{padding-right:60px!important}.v-application .pr-lg-16{padding-right:64px!important}.v-application .pb-lg-0{padding-bottom:0!important}.v-application .pb-lg-1{padding-bottom:4px!important}.v-application .pb-lg-2{padding-bottom:8px!important}.v-application .pb-lg-3{padding-bottom:12px!important}.v-application .pb-lg-4{padding-bottom:16px!important}.v-application .pb-lg-5{padding-bottom:20px!important}.v-application .pb-lg-6{padding-bottom:24px!important}.v-application .pb-lg-7{padding-bottom:28px!important}.v-application .pb-lg-8{padding-bottom:32px!important}.v-application .pb-lg-9{padding-bottom:36px!important}.v-application .pb-lg-10{padding-bottom:40px!important}.v-application .pb-lg-11{padding-bottom:44px!important}.v-application .pb-lg-12{padding-bottom:48px!important}.v-application .pb-lg-13{padding-bottom:52px!important}.v-application .pb-lg-14{padding-bottom:56px!important}.v-application .pb-lg-15{padding-bottom:60px!important}.v-application .pb-lg-16{padding-bottom:64px!important}.v-application .pl-lg-0{padding-left:0!important}.v-application .pl-lg-1{padding-left:4px!important}.v-application .pl-lg-2{padding-left:8px!important}.v-application .pl-lg-3{padding-left:12px!important}.v-application .pl-lg-4{padding-left:16px!important}.v-application .pl-lg-5{padding-left:20px!important}.v-application .pl-lg-6{padding-left:24px!important}.v-application .pl-lg-7{padding-left:28px!important}.v-application .pl-lg-8{padding-left:32px!important}.v-application .pl-lg-9{padding-left:36px!important}.v-application .pl-lg-10{padding-left:40px!important}.v-application .pl-lg-11{padding-left:44px!important}.v-application .pl-lg-12{padding-left:48px!important}.v-application .pl-lg-13{padding-left:52px!important}.v-application .pl-lg-14{padding-left:56px!important}.v-application .pl-lg-15{padding-left:60px!important}.v-application .pl-lg-16{padding-left:64px!important}.v-application--is-ltr .ps-lg-0{padding-left:0!important}.v-application--is-rtl .ps-lg-0{padding-right:0!important}.v-application--is-ltr .ps-lg-1{padding-left:4px!important}.v-application--is-rtl .ps-lg-1{padding-right:4px!important}.v-application--is-ltr .ps-lg-2{padding-left:8px!important}.v-application--is-rtl .ps-lg-2{padding-right:8px!important}.v-application--is-ltr .ps-lg-3{padding-left:12px!important}.v-application--is-rtl .ps-lg-3{padding-right:12px!important}.v-application--is-ltr .ps-lg-4{padding-left:16px!important}.v-application--is-rtl .ps-lg-4{padding-right:16px!important}.v-application--is-ltr .ps-lg-5{padding-left:20px!important}.v-application--is-rtl .ps-lg-5{padding-right:20px!important}.v-application--is-ltr .ps-lg-6{padding-left:24px!important}.v-application--is-rtl .ps-lg-6{padding-right:24px!important}.v-application--is-ltr .ps-lg-7{padding-left:28px!important}.v-application--is-rtl .ps-lg-7{padding-right:28px!important}.v-application--is-ltr .ps-lg-8{padding-left:32px!important}.v-application--is-rtl .ps-lg-8{padding-right:32px!important}.v-application--is-ltr .ps-lg-9{padding-left:36px!important}.v-application--is-rtl .ps-lg-9{padding-right:36px!important}.v-application--is-ltr .ps-lg-10{padding-left:40px!important}.v-application--is-rtl .ps-lg-10{padding-right:40px!important}.v-application--is-ltr .ps-lg-11{padding-left:44px!important}.v-application--is-rtl .ps-lg-11{padding-right:44px!important}.v-application--is-ltr .ps-lg-12{padding-left:48px!important}.v-application--is-rtl .ps-lg-12{padding-right:48px!important}.v-application--is-ltr .ps-lg-13{padding-left:52px!important}.v-application--is-rtl .ps-lg-13{padding-right:52px!important}.v-application--is-ltr .ps-lg-14{padding-left:56px!important}.v-application--is-rtl .ps-lg-14{padding-right:56px!important}.v-application--is-ltr .ps-lg-15{padding-left:60px!important}.v-application--is-rtl .ps-lg-15{padding-right:60px!important}.v-application--is-ltr .ps-lg-16{padding-left:64px!important}.v-application--is-rtl .ps-lg-16{padding-right:64px!important}.v-application--is-ltr .pe-lg-0{padding-right:0!important}.v-application--is-rtl .pe-lg-0{padding-left:0!important}.v-application--is-ltr .pe-lg-1{padding-right:4px!important}.v-application--is-rtl .pe-lg-1{padding-left:4px!important}.v-application--is-ltr .pe-lg-2{padding-right:8px!important}.v-application--is-rtl .pe-lg-2{padding-left:8px!important}.v-application--is-ltr .pe-lg-3{padding-right:12px!important}.v-application--is-rtl .pe-lg-3{padding-left:12px!important}.v-application--is-ltr .pe-lg-4{padding-right:16px!important}.v-application--is-rtl .pe-lg-4{padding-left:16px!important}.v-application--is-ltr .pe-lg-5{padding-right:20px!important}.v-application--is-rtl .pe-lg-5{padding-left:20px!important}.v-application--is-ltr .pe-lg-6{padding-right:24px!important}.v-application--is-rtl .pe-lg-6{padding-left:24px!important}.v-application--is-ltr .pe-lg-7{padding-right:28px!important}.v-application--is-rtl .pe-lg-7{padding-left:28px!important}.v-application--is-ltr .pe-lg-8{padding-right:32px!important}.v-application--is-rtl .pe-lg-8{padding-left:32px!important}.v-application--is-ltr .pe-lg-9{padding-right:36px!important}.v-application--is-rtl .pe-lg-9{padding-left:36px!important}.v-application--is-ltr .pe-lg-10{padding-right:40px!important}.v-application--is-rtl .pe-lg-10{padding-left:40px!important}.v-application--is-ltr .pe-lg-11{padding-right:44px!important}.v-application--is-rtl .pe-lg-11{padding-left:44px!important}.v-application--is-ltr .pe-lg-12{padding-right:48px!important}.v-application--is-rtl .pe-lg-12{padding-left:48px!important}.v-application--is-ltr .pe-lg-13{padding-right:52px!important}.v-application--is-rtl .pe-lg-13{padding-left:52px!important}.v-application--is-ltr .pe-lg-14{padding-right:56px!important}.v-application--is-rtl .pe-lg-14{padding-left:56px!important}.v-application--is-ltr .pe-lg-15{padding-right:60px!important}.v-application--is-rtl .pe-lg-15{padding-left:60px!important}.v-application--is-ltr .pe-lg-16{padding-right:64px!important}.v-application--is-rtl .pe-lg-16{padding-left:64px!important}.v-application .text-lg-left{text-align:left!important}.v-application .text-lg-right{text-align:right!important}.v-application .text-lg-center{text-align:center!important}.v-application .text-lg-justify{text-align:justify!important}[dir=ltr] .v-application .text-lg-start{text-align:left!important}[dir=ltr] .v-application .text-lg-end,[dir=rtl] .v-application .text-lg-start{text-align:right!important}[dir=rtl] .v-application .text-lg-end{text-align:left!important}.v-application .text-lg-h1{font-size:6rem!important;line-height:6rem;letter-spacing:-.015625em!important}.v-application .text-lg-h1,.v-application .text-lg-h2{font-weight:300;font-family:\"Roboto\",sans-serif!important}.v-application .text-lg-h2{font-size:3.75rem!important;line-height:3.75rem;letter-spacing:-.0083333333em!important}.v-application .text-lg-h3{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.v-application .text-lg-h3,.v-application .text-lg-h4{font-weight:400;font-family:\"Roboto\",sans-serif!important}.v-application .text-lg-h4{font-size:2.125rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.v-application .text-lg-h5{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important}.v-application .text-lg-h5,.v-application .text-lg-h6{line-height:2rem;font-family:\"Roboto\",sans-serif!important}.v-application .text-lg-h6{font-size:1.25rem!important;font-weight:500;letter-spacing:.0125em!important}.v-application .text-lg-subtitle-1{font-size:1rem!important;font-weight:400;line-height:1.75rem;letter-spacing:.009375em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-lg-subtitle-2{font-size:.875rem!important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-lg-body-1{font-size:1rem!important;font-weight:400;line-height:1.5rem;letter-spacing:.03125em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-lg-body-2{font-weight:400;line-height:1.25rem;letter-spacing:.0178571429em!important}.v-application .text-lg-body-2,.v-application .text-lg-button{font-size:.875rem!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-lg-button{font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em!important;text-transform:uppercase!important}.v-application .text-lg-caption{font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em!important}.v-application .text-lg-caption,.v-application .text-lg-overline{font-size:.75rem!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-lg-overline{font-weight:500;line-height:2rem;letter-spacing:.1666666667em!important;text-transform:uppercase!important}}@media(min-width:1904px){.v-application .d-xl-none{display:none!important}.v-application .d-xl-inline{display:inline!important}.v-application .d-xl-inline-block{display:inline-block!important}.v-application .d-xl-block{display:block!important}.v-application .d-xl-table{display:table!important}.v-application .d-xl-table-row{display:table-row!important}.v-application .d-xl-table-cell{display:table-cell!important}.v-application .d-xl-flex{display:flex!important}.v-application .d-xl-inline-flex{display:inline-flex!important}.v-application .float-xl-none{float:none!important}.v-application .float-xl-left{float:left!important}.v-application .float-xl-right{float:right!important}.v-application--is-rtl .float-xl-end{float:left!important}.v-application--is-ltr .float-xl-end,.v-application--is-rtl .float-xl-start{float:right!important}.v-application--is-ltr .float-xl-start{float:left!important}.v-application .flex-xl-fill{flex:1 1 auto!important}.v-application .flex-xl-row{flex-direction:row!important}.v-application .flex-xl-column{flex-direction:column!important}.v-application .flex-xl-row-reverse{flex-direction:row-reverse!important}.v-application .flex-xl-column-reverse{flex-direction:column-reverse!important}.v-application .flex-xl-grow-0{flex-grow:0!important}.v-application .flex-xl-grow-1{flex-grow:1!important}.v-application .flex-xl-shrink-0{flex-shrink:0!important}.v-application .flex-xl-shrink-1{flex-shrink:1!important}.v-application .flex-xl-wrap{flex-wrap:wrap!important}.v-application .flex-xl-nowrap{flex-wrap:nowrap!important}.v-application .flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.v-application .justify-xl-start{justify-content:flex-start!important}.v-application .justify-xl-end{justify-content:flex-end!important}.v-application .justify-xl-center{justify-content:center!important}.v-application .justify-xl-space-between{justify-content:space-between!important}.v-application .justify-xl-space-around{justify-content:space-around!important}.v-application .align-xl-start{align-items:flex-start!important}.v-application .align-xl-end{align-items:flex-end!important}.v-application .align-xl-center{align-items:center!important}.v-application .align-xl-baseline{align-items:baseline!important}.v-application .align-xl-stretch{align-items:stretch!important}.v-application .align-content-xl-start{align-content:flex-start!important}.v-application .align-content-xl-end{align-content:flex-end!important}.v-application .align-content-xl-center{align-content:center!important}.v-application .align-content-xl-space-between{align-content:space-between!important}.v-application .align-content-xl-space-around{align-content:space-around!important}.v-application .align-content-xl-stretch{align-content:stretch!important}.v-application .align-self-xl-auto{align-self:auto!important}.v-application .align-self-xl-start{align-self:flex-start!important}.v-application .align-self-xl-end{align-self:flex-end!important}.v-application .align-self-xl-center{align-self:center!important}.v-application .align-self-xl-baseline{align-self:baseline!important}.v-application .align-self-xl-stretch{align-self:stretch!important}.v-application .order-xl-first{order:-1!important}.v-application .order-xl-0{order:0!important}.v-application .order-xl-1{order:1!important}.v-application .order-xl-2{order:2!important}.v-application .order-xl-3{order:3!important}.v-application .order-xl-4{order:4!important}.v-application .order-xl-5{order:5!important}.v-application .order-xl-6{order:6!important}.v-application .order-xl-7{order:7!important}.v-application .order-xl-8{order:8!important}.v-application .order-xl-9{order:9!important}.v-application .order-xl-10{order:10!important}.v-application .order-xl-11{order:11!important}.v-application .order-xl-12{order:12!important}.v-application .order-xl-last{order:13!important}.v-application .ma-xl-0{margin:0!important}.v-application .ma-xl-1{margin:4px!important}.v-application .ma-xl-2{margin:8px!important}.v-application .ma-xl-3{margin:12px!important}.v-application .ma-xl-4{margin:16px!important}.v-application .ma-xl-5{margin:20px!important}.v-application .ma-xl-6{margin:24px!important}.v-application .ma-xl-7{margin:28px!important}.v-application .ma-xl-8{margin:32px!important}.v-application .ma-xl-9{margin:36px!important}.v-application .ma-xl-10{margin:40px!important}.v-application .ma-xl-11{margin:44px!important}.v-application .ma-xl-12{margin:48px!important}.v-application .ma-xl-13{margin:52px!important}.v-application .ma-xl-14{margin:56px!important}.v-application .ma-xl-15{margin:60px!important}.v-application .ma-xl-16{margin:64px!important}.v-application .ma-xl-auto{margin:auto!important}.v-application .mx-xl-0{margin-right:0!important;margin-left:0!important}.v-application .mx-xl-1{margin-right:4px!important;margin-left:4px!important}.v-application .mx-xl-2{margin-right:8px!important;margin-left:8px!important}.v-application .mx-xl-3{margin-right:12px!important;margin-left:12px!important}.v-application .mx-xl-4{margin-right:16px!important;margin-left:16px!important}.v-application .mx-xl-5{margin-right:20px!important;margin-left:20px!important}.v-application .mx-xl-6{margin-right:24px!important;margin-left:24px!important}.v-application .mx-xl-7{margin-right:28px!important;margin-left:28px!important}.v-application .mx-xl-8{margin-right:32px!important;margin-left:32px!important}.v-application .mx-xl-9{margin-right:36px!important;margin-left:36px!important}.v-application .mx-xl-10{margin-right:40px!important;margin-left:40px!important}.v-application .mx-xl-11{margin-right:44px!important;margin-left:44px!important}.v-application .mx-xl-12{margin-right:48px!important;margin-left:48px!important}.v-application .mx-xl-13{margin-right:52px!important;margin-left:52px!important}.v-application .mx-xl-14{margin-right:56px!important;margin-left:56px!important}.v-application .mx-xl-15{margin-right:60px!important;margin-left:60px!important}.v-application .mx-xl-16{margin-right:64px!important;margin-left:64px!important}.v-application .mx-xl-auto{margin-right:auto!important;margin-left:auto!important}.v-application .my-xl-0{margin-top:0!important;margin-bottom:0!important}.v-application .my-xl-1{margin-top:4px!important;margin-bottom:4px!important}.v-application .my-xl-2{margin-top:8px!important;margin-bottom:8px!important}.v-application .my-xl-3{margin-top:12px!important;margin-bottom:12px!important}.v-application .my-xl-4{margin-top:16px!important;margin-bottom:16px!important}.v-application .my-xl-5{margin-top:20px!important;margin-bottom:20px!important}.v-application .my-xl-6{margin-top:24px!important;margin-bottom:24px!important}.v-application .my-xl-7{margin-top:28px!important;margin-bottom:28px!important}.v-application .my-xl-8{margin-top:32px!important;margin-bottom:32px!important}.v-application .my-xl-9{margin-top:36px!important;margin-bottom:36px!important}.v-application .my-xl-10{margin-top:40px!important;margin-bottom:40px!important}.v-application .my-xl-11{margin-top:44px!important;margin-bottom:44px!important}.v-application .my-xl-12{margin-top:48px!important;margin-bottom:48px!important}.v-application .my-xl-13{margin-top:52px!important;margin-bottom:52px!important}.v-application .my-xl-14{margin-top:56px!important;margin-bottom:56px!important}.v-application .my-xl-15{margin-top:60px!important;margin-bottom:60px!important}.v-application .my-xl-16{margin-top:64px!important;margin-bottom:64px!important}.v-application .my-xl-auto{margin-top:auto!important;margin-bottom:auto!important}.v-application .mt-xl-0{margin-top:0!important}.v-application .mt-xl-1{margin-top:4px!important}.v-application .mt-xl-2{margin-top:8px!important}.v-application .mt-xl-3{margin-top:12px!important}.v-application .mt-xl-4{margin-top:16px!important}.v-application .mt-xl-5{margin-top:20px!important}.v-application .mt-xl-6{margin-top:24px!important}.v-application .mt-xl-7{margin-top:28px!important}.v-application .mt-xl-8{margin-top:32px!important}.v-application .mt-xl-9{margin-top:36px!important}.v-application .mt-xl-10{margin-top:40px!important}.v-application .mt-xl-11{margin-top:44px!important}.v-application .mt-xl-12{margin-top:48px!important}.v-application .mt-xl-13{margin-top:52px!important}.v-application .mt-xl-14{margin-top:56px!important}.v-application .mt-xl-15{margin-top:60px!important}.v-application .mt-xl-16{margin-top:64px!important}.v-application .mt-xl-auto{margin-top:auto!important}.v-application .mr-xl-0{margin-right:0!important}.v-application .mr-xl-1{margin-right:4px!important}.v-application .mr-xl-2{margin-right:8px!important}.v-application .mr-xl-3{margin-right:12px!important}.v-application .mr-xl-4{margin-right:16px!important}.v-application .mr-xl-5{margin-right:20px!important}.v-application .mr-xl-6{margin-right:24px!important}.v-application .mr-xl-7{margin-right:28px!important}.v-application .mr-xl-8{margin-right:32px!important}.v-application .mr-xl-9{margin-right:36px!important}.v-application .mr-xl-10{margin-right:40px!important}.v-application .mr-xl-11{margin-right:44px!important}.v-application .mr-xl-12{margin-right:48px!important}.v-application .mr-xl-13{margin-right:52px!important}.v-application .mr-xl-14{margin-right:56px!important}.v-application .mr-xl-15{margin-right:60px!important}.v-application .mr-xl-16{margin-right:64px!important}.v-application .mr-xl-auto{margin-right:auto!important}.v-application .mb-xl-0{margin-bottom:0!important}.v-application .mb-xl-1{margin-bottom:4px!important}.v-application .mb-xl-2{margin-bottom:8px!important}.v-application .mb-xl-3{margin-bottom:12px!important}.v-application .mb-xl-4{margin-bottom:16px!important}.v-application .mb-xl-5{margin-bottom:20px!important}.v-application .mb-xl-6{margin-bottom:24px!important}.v-application .mb-xl-7{margin-bottom:28px!important}.v-application .mb-xl-8{margin-bottom:32px!important}.v-application .mb-xl-9{margin-bottom:36px!important}.v-application .mb-xl-10{margin-bottom:40px!important}.v-application .mb-xl-11{margin-bottom:44px!important}.v-application .mb-xl-12{margin-bottom:48px!important}.v-application .mb-xl-13{margin-bottom:52px!important}.v-application .mb-xl-14{margin-bottom:56px!important}.v-application .mb-xl-15{margin-bottom:60px!important}.v-application .mb-xl-16{margin-bottom:64px!important}.v-application .mb-xl-auto{margin-bottom:auto!important}.v-application .ml-xl-0{margin-left:0!important}.v-application .ml-xl-1{margin-left:4px!important}.v-application .ml-xl-2{margin-left:8px!important}.v-application .ml-xl-3{margin-left:12px!important}.v-application .ml-xl-4{margin-left:16px!important}.v-application .ml-xl-5{margin-left:20px!important}.v-application .ml-xl-6{margin-left:24px!important}.v-application .ml-xl-7{margin-left:28px!important}.v-application .ml-xl-8{margin-left:32px!important}.v-application .ml-xl-9{margin-left:36px!important}.v-application .ml-xl-10{margin-left:40px!important}.v-application .ml-xl-11{margin-left:44px!important}.v-application .ml-xl-12{margin-left:48px!important}.v-application .ml-xl-13{margin-left:52px!important}.v-application .ml-xl-14{margin-left:56px!important}.v-application .ml-xl-15{margin-left:60px!important}.v-application .ml-xl-16{margin-left:64px!important}.v-application .ml-xl-auto{margin-left:auto!important}.v-application--is-ltr .ms-xl-0{margin-left:0!important}.v-application--is-rtl .ms-xl-0{margin-right:0!important}.v-application--is-ltr .ms-xl-1{margin-left:4px!important}.v-application--is-rtl .ms-xl-1{margin-right:4px!important}.v-application--is-ltr .ms-xl-2{margin-left:8px!important}.v-application--is-rtl .ms-xl-2{margin-right:8px!important}.v-application--is-ltr .ms-xl-3{margin-left:12px!important}.v-application--is-rtl .ms-xl-3{margin-right:12px!important}.v-application--is-ltr .ms-xl-4{margin-left:16px!important}.v-application--is-rtl .ms-xl-4{margin-right:16px!important}.v-application--is-ltr .ms-xl-5{margin-left:20px!important}.v-application--is-rtl .ms-xl-5{margin-right:20px!important}.v-application--is-ltr .ms-xl-6{margin-left:24px!important}.v-application--is-rtl .ms-xl-6{margin-right:24px!important}.v-application--is-ltr .ms-xl-7{margin-left:28px!important}.v-application--is-rtl .ms-xl-7{margin-right:28px!important}.v-application--is-ltr .ms-xl-8{margin-left:32px!important}.v-application--is-rtl .ms-xl-8{margin-right:32px!important}.v-application--is-ltr .ms-xl-9{margin-left:36px!important}.v-application--is-rtl .ms-xl-9{margin-right:36px!important}.v-application--is-ltr .ms-xl-10{margin-left:40px!important}.v-application--is-rtl .ms-xl-10{margin-right:40px!important}.v-application--is-ltr .ms-xl-11{margin-left:44px!important}.v-application--is-rtl .ms-xl-11{margin-right:44px!important}.v-application--is-ltr .ms-xl-12{margin-left:48px!important}.v-application--is-rtl .ms-xl-12{margin-right:48px!important}.v-application--is-ltr .ms-xl-13{margin-left:52px!important}.v-application--is-rtl .ms-xl-13{margin-right:52px!important}.v-application--is-ltr .ms-xl-14{margin-left:56px!important}.v-application--is-rtl .ms-xl-14{margin-right:56px!important}.v-application--is-ltr .ms-xl-15{margin-left:60px!important}.v-application--is-rtl .ms-xl-15{margin-right:60px!important}.v-application--is-ltr .ms-xl-16{margin-left:64px!important}.v-application--is-rtl .ms-xl-16{margin-right:64px!important}.v-application--is-ltr .ms-xl-auto{margin-left:auto!important}.v-application--is-rtl .ms-xl-auto{margin-right:auto!important}.v-application--is-ltr .me-xl-0{margin-right:0!important}.v-application--is-rtl .me-xl-0{margin-left:0!important}.v-application--is-ltr .me-xl-1{margin-right:4px!important}.v-application--is-rtl .me-xl-1{margin-left:4px!important}.v-application--is-ltr .me-xl-2{margin-right:8px!important}.v-application--is-rtl .me-xl-2{margin-left:8px!important}.v-application--is-ltr .me-xl-3{margin-right:12px!important}.v-application--is-rtl .me-xl-3{margin-left:12px!important}.v-application--is-ltr .me-xl-4{margin-right:16px!important}.v-application--is-rtl .me-xl-4{margin-left:16px!important}.v-application--is-ltr .me-xl-5{margin-right:20px!important}.v-application--is-rtl .me-xl-5{margin-left:20px!important}.v-application--is-ltr .me-xl-6{margin-right:24px!important}.v-application--is-rtl .me-xl-6{margin-left:24px!important}.v-application--is-ltr .me-xl-7{margin-right:28px!important}.v-application--is-rtl .me-xl-7{margin-left:28px!important}.v-application--is-ltr .me-xl-8{margin-right:32px!important}.v-application--is-rtl .me-xl-8{margin-left:32px!important}.v-application--is-ltr .me-xl-9{margin-right:36px!important}.v-application--is-rtl .me-xl-9{margin-left:36px!important}.v-application--is-ltr .me-xl-10{margin-right:40px!important}.v-application--is-rtl .me-xl-10{margin-left:40px!important}.v-application--is-ltr .me-xl-11{margin-right:44px!important}.v-application--is-rtl .me-xl-11{margin-left:44px!important}.v-application--is-ltr .me-xl-12{margin-right:48px!important}.v-application--is-rtl .me-xl-12{margin-left:48px!important}.v-application--is-ltr .me-xl-13{margin-right:52px!important}.v-application--is-rtl .me-xl-13{margin-left:52px!important}.v-application--is-ltr .me-xl-14{margin-right:56px!important}.v-application--is-rtl .me-xl-14{margin-left:56px!important}.v-application--is-ltr .me-xl-15{margin-right:60px!important}.v-application--is-rtl .me-xl-15{margin-left:60px!important}.v-application--is-ltr .me-xl-16{margin-right:64px!important}.v-application--is-rtl .me-xl-16{margin-left:64px!important}.v-application--is-ltr .me-xl-auto{margin-right:auto!important}.v-application--is-rtl .me-xl-auto{margin-left:auto!important}.v-application .ma-xl-n1{margin:-4px!important}.v-application .ma-xl-n2{margin:-8px!important}.v-application .ma-xl-n3{margin:-12px!important}.v-application .ma-xl-n4{margin:-16px!important}.v-application .ma-xl-n5{margin:-20px!important}.v-application .ma-xl-n6{margin:-24px!important}.v-application .ma-xl-n7{margin:-28px!important}.v-application .ma-xl-n8{margin:-32px!important}.v-application .ma-xl-n9{margin:-36px!important}.v-application .ma-xl-n10{margin:-40px!important}.v-application .ma-xl-n11{margin:-44px!important}.v-application .ma-xl-n12{margin:-48px!important}.v-application .ma-xl-n13{margin:-52px!important}.v-application .ma-xl-n14{margin:-56px!important}.v-application .ma-xl-n15{margin:-60px!important}.v-application .ma-xl-n16{margin:-64px!important}.v-application .mx-xl-n1{margin-right:-4px!important;margin-left:-4px!important}.v-application .mx-xl-n2{margin-right:-8px!important;margin-left:-8px!important}.v-application .mx-xl-n3{margin-right:-12px!important;margin-left:-12px!important}.v-application .mx-xl-n4{margin-right:-16px!important;margin-left:-16px!important}.v-application .mx-xl-n5{margin-right:-20px!important;margin-left:-20px!important}.v-application .mx-xl-n6{margin-right:-24px!important;margin-left:-24px!important}.v-application .mx-xl-n7{margin-right:-28px!important;margin-left:-28px!important}.v-application .mx-xl-n8{margin-right:-32px!important;margin-left:-32px!important}.v-application .mx-xl-n9{margin-right:-36px!important;margin-left:-36px!important}.v-application .mx-xl-n10{margin-right:-40px!important;margin-left:-40px!important}.v-application .mx-xl-n11{margin-right:-44px!important;margin-left:-44px!important}.v-application .mx-xl-n12{margin-right:-48px!important;margin-left:-48px!important}.v-application .mx-xl-n13{margin-right:-52px!important;margin-left:-52px!important}.v-application .mx-xl-n14{margin-right:-56px!important;margin-left:-56px!important}.v-application .mx-xl-n15{margin-right:-60px!important;margin-left:-60px!important}.v-application .mx-xl-n16{margin-right:-64px!important;margin-left:-64px!important}.v-application .my-xl-n1{margin-top:-4px!important;margin-bottom:-4px!important}.v-application .my-xl-n2{margin-top:-8px!important;margin-bottom:-8px!important}.v-application .my-xl-n3{margin-top:-12px!important;margin-bottom:-12px!important}.v-application .my-xl-n4{margin-top:-16px!important;margin-bottom:-16px!important}.v-application .my-xl-n5{margin-top:-20px!important;margin-bottom:-20px!important}.v-application .my-xl-n6{margin-top:-24px!important;margin-bottom:-24px!important}.v-application .my-xl-n7{margin-top:-28px!important;margin-bottom:-28px!important}.v-application .my-xl-n8{margin-top:-32px!important;margin-bottom:-32px!important}.v-application .my-xl-n9{margin-top:-36px!important;margin-bottom:-36px!important}.v-application .my-xl-n10{margin-top:-40px!important;margin-bottom:-40px!important}.v-application .my-xl-n11{margin-top:-44px!important;margin-bottom:-44px!important}.v-application .my-xl-n12{margin-top:-48px!important;margin-bottom:-48px!important}.v-application .my-xl-n13{margin-top:-52px!important;margin-bottom:-52px!important}.v-application .my-xl-n14{margin-top:-56px!important;margin-bottom:-56px!important}.v-application .my-xl-n15{margin-top:-60px!important;margin-bottom:-60px!important}.v-application .my-xl-n16{margin-top:-64px!important;margin-bottom:-64px!important}.v-application .mt-xl-n1{margin-top:-4px!important}.v-application .mt-xl-n2{margin-top:-8px!important}.v-application .mt-xl-n3{margin-top:-12px!important}.v-application .mt-xl-n4{margin-top:-16px!important}.v-application .mt-xl-n5{margin-top:-20px!important}.v-application .mt-xl-n6{margin-top:-24px!important}.v-application .mt-xl-n7{margin-top:-28px!important}.v-application .mt-xl-n8{margin-top:-32px!important}.v-application .mt-xl-n9{margin-top:-36px!important}.v-application .mt-xl-n10{margin-top:-40px!important}.v-application .mt-xl-n11{margin-top:-44px!important}.v-application .mt-xl-n12{margin-top:-48px!important}.v-application .mt-xl-n13{margin-top:-52px!important}.v-application .mt-xl-n14{margin-top:-56px!important}.v-application .mt-xl-n15{margin-top:-60px!important}.v-application .mt-xl-n16{margin-top:-64px!important}.v-application .mr-xl-n1{margin-right:-4px!important}.v-application .mr-xl-n2{margin-right:-8px!important}.v-application .mr-xl-n3{margin-right:-12px!important}.v-application .mr-xl-n4{margin-right:-16px!important}.v-application .mr-xl-n5{margin-right:-20px!important}.v-application .mr-xl-n6{margin-right:-24px!important}.v-application .mr-xl-n7{margin-right:-28px!important}.v-application .mr-xl-n8{margin-right:-32px!important}.v-application .mr-xl-n9{margin-right:-36px!important}.v-application .mr-xl-n10{margin-right:-40px!important}.v-application .mr-xl-n11{margin-right:-44px!important}.v-application .mr-xl-n12{margin-right:-48px!important}.v-application .mr-xl-n13{margin-right:-52px!important}.v-application .mr-xl-n14{margin-right:-56px!important}.v-application .mr-xl-n15{margin-right:-60px!important}.v-application .mr-xl-n16{margin-right:-64px!important}.v-application .mb-xl-n1{margin-bottom:-4px!important}.v-application .mb-xl-n2{margin-bottom:-8px!important}.v-application .mb-xl-n3{margin-bottom:-12px!important}.v-application .mb-xl-n4{margin-bottom:-16px!important}.v-application .mb-xl-n5{margin-bottom:-20px!important}.v-application .mb-xl-n6{margin-bottom:-24px!important}.v-application .mb-xl-n7{margin-bottom:-28px!important}.v-application .mb-xl-n8{margin-bottom:-32px!important}.v-application .mb-xl-n9{margin-bottom:-36px!important}.v-application .mb-xl-n10{margin-bottom:-40px!important}.v-application .mb-xl-n11{margin-bottom:-44px!important}.v-application .mb-xl-n12{margin-bottom:-48px!important}.v-application .mb-xl-n13{margin-bottom:-52px!important}.v-application .mb-xl-n14{margin-bottom:-56px!important}.v-application .mb-xl-n15{margin-bottom:-60px!important}.v-application .mb-xl-n16{margin-bottom:-64px!important}.v-application .ml-xl-n1{margin-left:-4px!important}.v-application .ml-xl-n2{margin-left:-8px!important}.v-application .ml-xl-n3{margin-left:-12px!important}.v-application .ml-xl-n4{margin-left:-16px!important}.v-application .ml-xl-n5{margin-left:-20px!important}.v-application .ml-xl-n6{margin-left:-24px!important}.v-application .ml-xl-n7{margin-left:-28px!important}.v-application .ml-xl-n8{margin-left:-32px!important}.v-application .ml-xl-n9{margin-left:-36px!important}.v-application .ml-xl-n10{margin-left:-40px!important}.v-application .ml-xl-n11{margin-left:-44px!important}.v-application .ml-xl-n12{margin-left:-48px!important}.v-application .ml-xl-n13{margin-left:-52px!important}.v-application .ml-xl-n14{margin-left:-56px!important}.v-application .ml-xl-n15{margin-left:-60px!important}.v-application .ml-xl-n16{margin-left:-64px!important}.v-application--is-ltr .ms-xl-n1{margin-left:-4px!important}.v-application--is-rtl .ms-xl-n1{margin-right:-4px!important}.v-application--is-ltr .ms-xl-n2{margin-left:-8px!important}.v-application--is-rtl .ms-xl-n2{margin-right:-8px!important}.v-application--is-ltr .ms-xl-n3{margin-left:-12px!important}.v-application--is-rtl .ms-xl-n3{margin-right:-12px!important}.v-application--is-ltr .ms-xl-n4{margin-left:-16px!important}.v-application--is-rtl .ms-xl-n4{margin-right:-16px!important}.v-application--is-ltr .ms-xl-n5{margin-left:-20px!important}.v-application--is-rtl .ms-xl-n5{margin-right:-20px!important}.v-application--is-ltr .ms-xl-n6{margin-left:-24px!important}.v-application--is-rtl .ms-xl-n6{margin-right:-24px!important}.v-application--is-ltr .ms-xl-n7{margin-left:-28px!important}.v-application--is-rtl .ms-xl-n7{margin-right:-28px!important}.v-application--is-ltr .ms-xl-n8{margin-left:-32px!important}.v-application--is-rtl .ms-xl-n8{margin-right:-32px!important}.v-application--is-ltr .ms-xl-n9{margin-left:-36px!important}.v-application--is-rtl .ms-xl-n9{margin-right:-36px!important}.v-application--is-ltr .ms-xl-n10{margin-left:-40px!important}.v-application--is-rtl .ms-xl-n10{margin-right:-40px!important}.v-application--is-ltr .ms-xl-n11{margin-left:-44px!important}.v-application--is-rtl .ms-xl-n11{margin-right:-44px!important}.v-application--is-ltr .ms-xl-n12{margin-left:-48px!important}.v-application--is-rtl .ms-xl-n12{margin-right:-48px!important}.v-application--is-ltr .ms-xl-n13{margin-left:-52px!important}.v-application--is-rtl .ms-xl-n13{margin-right:-52px!important}.v-application--is-ltr .ms-xl-n14{margin-left:-56px!important}.v-application--is-rtl .ms-xl-n14{margin-right:-56px!important}.v-application--is-ltr .ms-xl-n15{margin-left:-60px!important}.v-application--is-rtl .ms-xl-n15{margin-right:-60px!important}.v-application--is-ltr .ms-xl-n16{margin-left:-64px!important}.v-application--is-rtl .ms-xl-n16{margin-right:-64px!important}.v-application--is-ltr .me-xl-n1{margin-right:-4px!important}.v-application--is-rtl .me-xl-n1{margin-left:-4px!important}.v-application--is-ltr .me-xl-n2{margin-right:-8px!important}.v-application--is-rtl .me-xl-n2{margin-left:-8px!important}.v-application--is-ltr .me-xl-n3{margin-right:-12px!important}.v-application--is-rtl .me-xl-n3{margin-left:-12px!important}.v-application--is-ltr .me-xl-n4{margin-right:-16px!important}.v-application--is-rtl .me-xl-n4{margin-left:-16px!important}.v-application--is-ltr .me-xl-n5{margin-right:-20px!important}.v-application--is-rtl .me-xl-n5{margin-left:-20px!important}.v-application--is-ltr .me-xl-n6{margin-right:-24px!important}.v-application--is-rtl .me-xl-n6{margin-left:-24px!important}.v-application--is-ltr .me-xl-n7{margin-right:-28px!important}.v-application--is-rtl .me-xl-n7{margin-left:-28px!important}.v-application--is-ltr .me-xl-n8{margin-right:-32px!important}.v-application--is-rtl .me-xl-n8{margin-left:-32px!important}.v-application--is-ltr .me-xl-n9{margin-right:-36px!important}.v-application--is-rtl .me-xl-n9{margin-left:-36px!important}.v-application--is-ltr .me-xl-n10{margin-right:-40px!important}.v-application--is-rtl .me-xl-n10{margin-left:-40px!important}.v-application--is-ltr .me-xl-n11{margin-right:-44px!important}.v-application--is-rtl .me-xl-n11{margin-left:-44px!important}.v-application--is-ltr .me-xl-n12{margin-right:-48px!important}.v-application--is-rtl .me-xl-n12{margin-left:-48px!important}.v-application--is-ltr .me-xl-n13{margin-right:-52px!important}.v-application--is-rtl .me-xl-n13{margin-left:-52px!important}.v-application--is-ltr .me-xl-n14{margin-right:-56px!important}.v-application--is-rtl .me-xl-n14{margin-left:-56px!important}.v-application--is-ltr .me-xl-n15{margin-right:-60px!important}.v-application--is-rtl .me-xl-n15{margin-left:-60px!important}.v-application--is-ltr .me-xl-n16{margin-right:-64px!important}.v-application--is-rtl .me-xl-n16{margin-left:-64px!important}.v-application .pa-xl-0{padding:0!important}.v-application .pa-xl-1{padding:4px!important}.v-application .pa-xl-2{padding:8px!important}.v-application .pa-xl-3{padding:12px!important}.v-application .pa-xl-4{padding:16px!important}.v-application .pa-xl-5{padding:20px!important}.v-application .pa-xl-6{padding:24px!important}.v-application .pa-xl-7{padding:28px!important}.v-application .pa-xl-8{padding:32px!important}.v-application .pa-xl-9{padding:36px!important}.v-application .pa-xl-10{padding:40px!important}.v-application .pa-xl-11{padding:44px!important}.v-application .pa-xl-12{padding:48px!important}.v-application .pa-xl-13{padding:52px!important}.v-application .pa-xl-14{padding:56px!important}.v-application .pa-xl-15{padding:60px!important}.v-application .pa-xl-16{padding:64px!important}.v-application .px-xl-0{padding-right:0!important;padding-left:0!important}.v-application .px-xl-1{padding-right:4px!important;padding-left:4px!important}.v-application .px-xl-2{padding-right:8px!important;padding-left:8px!important}.v-application .px-xl-3{padding-right:12px!important;padding-left:12px!important}.v-application .px-xl-4{padding-right:16px!important;padding-left:16px!important}.v-application .px-xl-5{padding-right:20px!important;padding-left:20px!important}.v-application .px-xl-6{padding-right:24px!important;padding-left:24px!important}.v-application .px-xl-7{padding-right:28px!important;padding-left:28px!important}.v-application .px-xl-8{padding-right:32px!important;padding-left:32px!important}.v-application .px-xl-9{padding-right:36px!important;padding-left:36px!important}.v-application .px-xl-10{padding-right:40px!important;padding-left:40px!important}.v-application .px-xl-11{padding-right:44px!important;padding-left:44px!important}.v-application .px-xl-12{padding-right:48px!important;padding-left:48px!important}.v-application .px-xl-13{padding-right:52px!important;padding-left:52px!important}.v-application .px-xl-14{padding-right:56px!important;padding-left:56px!important}.v-application .px-xl-15{padding-right:60px!important;padding-left:60px!important}.v-application .px-xl-16{padding-right:64px!important;padding-left:64px!important}.v-application .py-xl-0{padding-top:0!important;padding-bottom:0!important}.v-application .py-xl-1{padding-top:4px!important;padding-bottom:4px!important}.v-application .py-xl-2{padding-top:8px!important;padding-bottom:8px!important}.v-application .py-xl-3{padding-top:12px!important;padding-bottom:12px!important}.v-application .py-xl-4{padding-top:16px!important;padding-bottom:16px!important}.v-application .py-xl-5{padding-top:20px!important;padding-bottom:20px!important}.v-application .py-xl-6{padding-top:24px!important;padding-bottom:24px!important}.v-application .py-xl-7{padding-top:28px!important;padding-bottom:28px!important}.v-application .py-xl-8{padding-top:32px!important;padding-bottom:32px!important}.v-application .py-xl-9{padding-top:36px!important;padding-bottom:36px!important}.v-application .py-xl-10{padding-top:40px!important;padding-bottom:40px!important}.v-application .py-xl-11{padding-top:44px!important;padding-bottom:44px!important}.v-application .py-xl-12{padding-top:48px!important;padding-bottom:48px!important}.v-application .py-xl-13{padding-top:52px!important;padding-bottom:52px!important}.v-application .py-xl-14{padding-top:56px!important;padding-bottom:56px!important}.v-application .py-xl-15{padding-top:60px!important;padding-bottom:60px!important}.v-application .py-xl-16{padding-top:64px!important;padding-bottom:64px!important}.v-application .pt-xl-0{padding-top:0!important}.v-application .pt-xl-1{padding-top:4px!important}.v-application .pt-xl-2{padding-top:8px!important}.v-application .pt-xl-3{padding-top:12px!important}.v-application .pt-xl-4{padding-top:16px!important}.v-application .pt-xl-5{padding-top:20px!important}.v-application .pt-xl-6{padding-top:24px!important}.v-application .pt-xl-7{padding-top:28px!important}.v-application .pt-xl-8{padding-top:32px!important}.v-application .pt-xl-9{padding-top:36px!important}.v-application .pt-xl-10{padding-top:40px!important}.v-application .pt-xl-11{padding-top:44px!important}.v-application .pt-xl-12{padding-top:48px!important}.v-application .pt-xl-13{padding-top:52px!important}.v-application .pt-xl-14{padding-top:56px!important}.v-application .pt-xl-15{padding-top:60px!important}.v-application .pt-xl-16{padding-top:64px!important}.v-application .pr-xl-0{padding-right:0!important}.v-application .pr-xl-1{padding-right:4px!important}.v-application .pr-xl-2{padding-right:8px!important}.v-application .pr-xl-3{padding-right:12px!important}.v-application .pr-xl-4{padding-right:16px!important}.v-application .pr-xl-5{padding-right:20px!important}.v-application .pr-xl-6{padding-right:24px!important}.v-application .pr-xl-7{padding-right:28px!important}.v-application .pr-xl-8{padding-right:32px!important}.v-application .pr-xl-9{padding-right:36px!important}.v-application .pr-xl-10{padding-right:40px!important}.v-application .pr-xl-11{padding-right:44px!important}.v-application .pr-xl-12{padding-right:48px!important}.v-application .pr-xl-13{padding-right:52px!important}.v-application .pr-xl-14{padding-right:56px!important}.v-application .pr-xl-15{padding-right:60px!important}.v-application .pr-xl-16{padding-right:64px!important}.v-application .pb-xl-0{padding-bottom:0!important}.v-application .pb-xl-1{padding-bottom:4px!important}.v-application .pb-xl-2{padding-bottom:8px!important}.v-application .pb-xl-3{padding-bottom:12px!important}.v-application .pb-xl-4{padding-bottom:16px!important}.v-application .pb-xl-5{padding-bottom:20px!important}.v-application .pb-xl-6{padding-bottom:24px!important}.v-application .pb-xl-7{padding-bottom:28px!important}.v-application .pb-xl-8{padding-bottom:32px!important}.v-application .pb-xl-9{padding-bottom:36px!important}.v-application .pb-xl-10{padding-bottom:40px!important}.v-application .pb-xl-11{padding-bottom:44px!important}.v-application .pb-xl-12{padding-bottom:48px!important}.v-application .pb-xl-13{padding-bottom:52px!important}.v-application .pb-xl-14{padding-bottom:56px!important}.v-application .pb-xl-15{padding-bottom:60px!important}.v-application .pb-xl-16{padding-bottom:64px!important}.v-application .pl-xl-0{padding-left:0!important}.v-application .pl-xl-1{padding-left:4px!important}.v-application .pl-xl-2{padding-left:8px!important}.v-application .pl-xl-3{padding-left:12px!important}.v-application .pl-xl-4{padding-left:16px!important}.v-application .pl-xl-5{padding-left:20px!important}.v-application .pl-xl-6{padding-left:24px!important}.v-application .pl-xl-7{padding-left:28px!important}.v-application .pl-xl-8{padding-left:32px!important}.v-application .pl-xl-9{padding-left:36px!important}.v-application .pl-xl-10{padding-left:40px!important}.v-application .pl-xl-11{padding-left:44px!important}.v-application .pl-xl-12{padding-left:48px!important}.v-application .pl-xl-13{padding-left:52px!important}.v-application .pl-xl-14{padding-left:56px!important}.v-application .pl-xl-15{padding-left:60px!important}.v-application .pl-xl-16{padding-left:64px!important}.v-application--is-ltr .ps-xl-0{padding-left:0!important}.v-application--is-rtl .ps-xl-0{padding-right:0!important}.v-application--is-ltr .ps-xl-1{padding-left:4px!important}.v-application--is-rtl .ps-xl-1{padding-right:4px!important}.v-application--is-ltr .ps-xl-2{padding-left:8px!important}.v-application--is-rtl .ps-xl-2{padding-right:8px!important}.v-application--is-ltr .ps-xl-3{padding-left:12px!important}.v-application--is-rtl .ps-xl-3{padding-right:12px!important}.v-application--is-ltr .ps-xl-4{padding-left:16px!important}.v-application--is-rtl .ps-xl-4{padding-right:16px!important}.v-application--is-ltr .ps-xl-5{padding-left:20px!important}.v-application--is-rtl .ps-xl-5{padding-right:20px!important}.v-application--is-ltr .ps-xl-6{padding-left:24px!important}.v-application--is-rtl .ps-xl-6{padding-right:24px!important}.v-application--is-ltr .ps-xl-7{padding-left:28px!important}.v-application--is-rtl .ps-xl-7{padding-right:28px!important}.v-application--is-ltr .ps-xl-8{padding-left:32px!important}.v-application--is-rtl .ps-xl-8{padding-right:32px!important}.v-application--is-ltr .ps-xl-9{padding-left:36px!important}.v-application--is-rtl .ps-xl-9{padding-right:36px!important}.v-application--is-ltr .ps-xl-10{padding-left:40px!important}.v-application--is-rtl .ps-xl-10{padding-right:40px!important}.v-application--is-ltr .ps-xl-11{padding-left:44px!important}.v-application--is-rtl .ps-xl-11{padding-right:44px!important}.v-application--is-ltr .ps-xl-12{padding-left:48px!important}.v-application--is-rtl .ps-xl-12{padding-right:48px!important}.v-application--is-ltr .ps-xl-13{padding-left:52px!important}.v-application--is-rtl .ps-xl-13{padding-right:52px!important}.v-application--is-ltr .ps-xl-14{padding-left:56px!important}.v-application--is-rtl .ps-xl-14{padding-right:56px!important}.v-application--is-ltr .ps-xl-15{padding-left:60px!important}.v-application--is-rtl .ps-xl-15{padding-right:60px!important}.v-application--is-ltr .ps-xl-16{padding-left:64px!important}.v-application--is-rtl .ps-xl-16{padding-right:64px!important}.v-application--is-ltr .pe-xl-0{padding-right:0!important}.v-application--is-rtl .pe-xl-0{padding-left:0!important}.v-application--is-ltr .pe-xl-1{padding-right:4px!important}.v-application--is-rtl .pe-xl-1{padding-left:4px!important}.v-application--is-ltr .pe-xl-2{padding-right:8px!important}.v-application--is-rtl .pe-xl-2{padding-left:8px!important}.v-application--is-ltr .pe-xl-3{padding-right:12px!important}.v-application--is-rtl .pe-xl-3{padding-left:12px!important}.v-application--is-ltr .pe-xl-4{padding-right:16px!important}.v-application--is-rtl .pe-xl-4{padding-left:16px!important}.v-application--is-ltr .pe-xl-5{padding-right:20px!important}.v-application--is-rtl .pe-xl-5{padding-left:20px!important}.v-application--is-ltr .pe-xl-6{padding-right:24px!important}.v-application--is-rtl .pe-xl-6{padding-left:24px!important}.v-application--is-ltr .pe-xl-7{padding-right:28px!important}.v-application--is-rtl .pe-xl-7{padding-left:28px!important}.v-application--is-ltr .pe-xl-8{padding-right:32px!important}.v-application--is-rtl .pe-xl-8{padding-left:32px!important}.v-application--is-ltr .pe-xl-9{padding-right:36px!important}.v-application--is-rtl .pe-xl-9{padding-left:36px!important}.v-application--is-ltr .pe-xl-10{padding-right:40px!important}.v-application--is-rtl .pe-xl-10{padding-left:40px!important}.v-application--is-ltr .pe-xl-11{padding-right:44px!important}.v-application--is-rtl .pe-xl-11{padding-left:44px!important}.v-application--is-ltr .pe-xl-12{padding-right:48px!important}.v-application--is-rtl .pe-xl-12{padding-left:48px!important}.v-application--is-ltr .pe-xl-13{padding-right:52px!important}.v-application--is-rtl .pe-xl-13{padding-left:52px!important}.v-application--is-ltr .pe-xl-14{padding-right:56px!important}.v-application--is-rtl .pe-xl-14{padding-left:56px!important}.v-application--is-ltr .pe-xl-15{padding-right:60px!important}.v-application--is-rtl .pe-xl-15{padding-left:60px!important}.v-application--is-ltr .pe-xl-16{padding-right:64px!important}.v-application--is-rtl .pe-xl-16{padding-left:64px!important}.v-application .text-xl-left{text-align:left!important}.v-application .text-xl-right{text-align:right!important}.v-application .text-xl-center{text-align:center!important}.v-application .text-xl-justify{text-align:justify!important}[dir=ltr] .v-application .text-xl-start{text-align:left!important}[dir=ltr] .v-application .text-xl-end,[dir=rtl] .v-application .text-xl-start{text-align:right!important}[dir=rtl] .v-application .text-xl-end{text-align:left!important}.v-application .text-xl-h1{font-size:6rem!important;line-height:6rem;letter-spacing:-.015625em!important}.v-application .text-xl-h1,.v-application .text-xl-h2{font-weight:300;font-family:\"Roboto\",sans-serif!important}.v-application .text-xl-h2{font-size:3.75rem!important;line-height:3.75rem;letter-spacing:-.0083333333em!important}.v-application .text-xl-h3{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.v-application .text-xl-h3,.v-application .text-xl-h4{font-weight:400;font-family:\"Roboto\",sans-serif!important}.v-application .text-xl-h4{font-size:2.125rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.v-application .text-xl-h5{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important}.v-application .text-xl-h5,.v-application .text-xl-h6{line-height:2rem;font-family:\"Roboto\",sans-serif!important}.v-application .text-xl-h6{font-size:1.25rem!important;font-weight:500;letter-spacing:.0125em!important}.v-application .text-xl-subtitle-1{font-size:1rem!important;font-weight:400;line-height:1.75rem;letter-spacing:.009375em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-xl-subtitle-2{font-size:.875rem!important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-xl-body-1{font-size:1rem!important;font-weight:400;line-height:1.5rem;letter-spacing:.03125em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-xl-body-2{font-weight:400;line-height:1.25rem;letter-spacing:.0178571429em!important}.v-application .text-xl-body-2,.v-application .text-xl-button{font-size:.875rem!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-xl-button{font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em!important;text-transform:uppercase!important}.v-application .text-xl-caption{font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em!important}.v-application .text-xl-caption,.v-application .text-xl-overline{font-size:.75rem!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-xl-overline{font-weight:500;line-height:2rem;letter-spacing:.1666666667em!important;text-transform:uppercase!important}}@media print{.v-application .d-print-none{display:none!important}.v-application .d-print-inline{display:inline!important}.v-application .d-print-inline-block{display:inline-block!important}.v-application .d-print-block{display:block!important}.v-application .d-print-table{display:table!important}.v-application .d-print-table-row{display:table-row!important}.v-application .d-print-table-cell{display:table-cell!important}.v-application .d-print-flex{display:flex!important}.v-application .d-print-inline-flex{display:inline-flex!important}.v-application .float-print-none{float:none!important}.v-application .float-print-left{float:left!important}.v-application .float-print-right{float:right!important}.v-application--is-rtl .float-print-end{float:left!important}.v-application--is-ltr .float-print-end,.v-application--is-rtl .float-print-start{float:right!important}.v-application--is-ltr .float-print-start{float:left!important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "Footer", function() { return Footer; });
__webpack_require__.d(components_namespaceObject, "Menu", function() { return Menu; });
__webpack_require__.d(components_namespaceObject, "AlbumesAlbumheader", function() { return AlbumesAlbumheader; });
__webpack_require__.d(components_namespaceObject, "AlbumesAlbumitem", function() { return AlbumesAlbumitem; });
__webpack_require__.d(components_namespaceObject, "ComponentsCookBoton", function() { return ComponentsCookBoton; });
__webpack_require__.d(components_namespaceObject, "ComprasCompraItem", function() { return ComprasCompraItem; });
__webpack_require__.d(components_namespaceObject, "FilesModalFilesMinuaturas", function() { return FilesModalFilesMinuaturas; });
__webpack_require__.d(components_namespaceObject, "MercadopagoCarga", function() { return MercadopagoCarga; });
__webpack_require__.d(components_namespaceObject, "MercadopagoPago", function() { return MercadopagoPago; });
__webpack_require__.d(components_namespaceObject, "InstrumentalesAgregarInstrumental", function() { return InstrumentalesAgregarInstrumental; });
__webpack_require__.d(components_namespaceObject, "InstrumentalesAgregarLiciencia", function() { return InstrumentalesAgregarLiciencia; });
__webpack_require__.d(components_namespaceObject, "InstrumentalesCardLicencia", function() { return InstrumentalesCardLicencia; });
__webpack_require__.d(components_namespaceObject, "InstrumentalesCardinstrumental", function() { return InstrumentalesCardinstrumental; });
__webpack_require__.d(components_namespaceObject, "InstrumentalesIntrumentalcargado", function() { return InstrumentalesIntrumentalcargado; });
__webpack_require__.d(components_namespaceObject, "InstrumentalesReproductorCard", function() { return InstrumentalesReproductorCard; });
__webpack_require__.d(components_namespaceObject, "InstrumentalesInstrumental", function() { return InstrumentalesInstrumental; });
__webpack_require__.d(components_namespaceObject, "InstrumentalesInstrumentalEdit", function() { return InstrumentalesInstrumentalEdit; });
__webpack_require__.d(components_namespaceObject, "InstrumentalesPaginador", function() { return InstrumentalesPaginador; });
__webpack_require__.d(components_namespaceObject, "InstrumentalesReproductor", function() { return InstrumentalesReproductor; });
__webpack_require__.d(components_namespaceObject, "PerfilContrasenia", function() { return PerfilContrasenia; });
__webpack_require__.d(components_namespaceObject, "PerfilHeader", function() { return PerfilHeader; });
__webpack_require__.d(components_namespaceObject, "PerfilInstrumental", function() { return PerfilInstrumental; });
__webpack_require__.d(components_namespaceObject, "PerfilNombre", function() { return PerfilNombre; });
__webpack_require__.d(components_namespaceObject, "PerfilValidar", function() { return PerfilValidar; });
__webpack_require__.d(components_namespaceObject, "UtilidadesChipBar", function() { return UtilidadesChipBar; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(29);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['login'] = __webpack_require__(36);
middleware['login'] = middleware['login'].default || middleware['login'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

          // check for previous reload time not to reload infinitely
          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true /* skip cache */);
          }
        }

        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    };
    // Only set once

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(30);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(19);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(15);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(20);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _48a5652a = () => interopDefault(__webpack_require__.e(/* import() | pages/albumes/index */ 26).then(__webpack_require__.bind(null, 228)));
const _1b490066 = () => interopDefault(__webpack_require__.e(/* import() | pages/instrumentales */ 31).then(__webpack_require__.bind(null, 229)));
const _43950b1a = () => interopDefault(__webpack_require__.e(/* import() | pages/login */ 32).then(__webpack_require__.bind(null, 230)));
const _68b68e96 = () => interopDefault(__webpack_require__.e(/* import() | pages/perfil/index */ 36).then(__webpack_require__.bind(null, 231)));
const _6fa5a589 = () => interopDefault(__webpack_require__.e(/* import() | pages/register */ 44).then(__webpack_require__.bind(null, 232)));
const _52d69700 = () => interopDefault(__webpack_require__.e(/* import() | pages/perfil/albumes */ 33).then(__webpack_require__.bind(null, 233)));
const _9a9a0b50 = () => interopDefault(__webpack_require__.e(/* import() | pages/perfil/compras */ 34).then(__webpack_require__.bind(null, 234)));
const _2c1645ec = () => interopDefault(__webpack_require__.e(/* import() | pages/perfil/configuracion */ 35).then(__webpack_require__.bind(null, 235)));
const _cdb412fc = () => interopDefault(__webpack_require__.e(/* import() | pages/perfil/instrumental/index */ 39).then(__webpack_require__.bind(null, 236)));
const _fd0f9010 = () => interopDefault(__webpack_require__.e(/* import() | pages/perfil/me_gusta */ 40).then(__webpack_require__.bind(null, 237)));
const _6f157c02 = () => interopDefault(__webpack_require__.e(/* import() | pages/perfil/mercadopago */ 41).then(__webpack_require__.bind(null, 238)));
const _46e5d2c0 = () => interopDefault(__webpack_require__.e(/* import() | pages/perfil/procesarcompra */ 42).then(__webpack_require__.bind(null, 239)));
const _420acc58 = () => interopDefault(__webpack_require__.e(/* import() | pages/perfil/ventas */ 43).then(__webpack_require__.bind(null, 240)));
const _14a7ecd1 = () => interopDefault(__webpack_require__.e(/* import() | pages/perfil/instrumental/add */ 37).then(__webpack_require__.bind(null, 241)));
const _0fa96596 = () => interopDefault(__webpack_require__.e(/* import() | pages/perfil/instrumental/edit/_id */ 38).then(__webpack_require__.bind(null, 242)));
const _e482abdc = () => interopDefault(__webpack_require__.e(/* import() | pages/albumes/_id */ 25).then(__webpack_require__.bind(null, 243)));
const _3d68cd3b = () => interopDefault(__webpack_require__.e(/* import() | pages/buy/_id */ 27).then(__webpack_require__.bind(null, 244)));
const _09f95e0f = () => interopDefault(__webpack_require__.e(/* import() | pages/compra/_id */ 28).then(__webpack_require__.bind(null, 227)));
const _75c2973a = () => interopDefault(__webpack_require__.e(/* import() | pages/instrumental/_id */ 30).then(__webpack_require__.bind(null, 225)));
const _148dd75c = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 29).then(__webpack_require__.bind(null, 245)));
const _b5bbfe78 = () => interopDefault(__webpack_require__.e(/* import() | pages/_id */ 24).then(__webpack_require__.bind(null, 246)));

const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/cookingbeats-nuxt/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/albumes",
    component: _48a5652a,
    name: "albumes"
  }, {
    path: "/instrumentales",
    component: _1b490066,
    name: "instrumentales"
  }, {
    path: "/login",
    component: _43950b1a,
    name: "login"
  }, {
    path: "/perfil",
    component: _68b68e96,
    name: "perfil"
  }, {
    path: "/register",
    component: _6fa5a589,
    name: "register"
  }, {
    path: "/perfil/albumes",
    component: _52d69700,
    name: "perfil-albumes"
  }, {
    path: "/perfil/compras",
    component: _9a9a0b50,
    name: "perfil-compras"
  }, {
    path: "/perfil/configuracion",
    component: _2c1645ec,
    name: "perfil-configuracion"
  }, {
    path: "/perfil/instrumental",
    component: _cdb412fc,
    name: "perfil-instrumental"
  }, {
    path: "/perfil/me_gusta",
    component: _fd0f9010,
    name: "perfil-me_gusta"
  }, {
    path: "/perfil/mercadopago",
    component: _6f157c02,
    name: "perfil-mercadopago"
  }, {
    path: "/perfil/procesarcompra",
    component: _46e5d2c0,
    name: "perfil-procesarcompra"
  }, {
    path: "/perfil/ventas",
    component: _420acc58,
    name: "perfil-ventas"
  }, {
    path: "/perfil/instrumental/add",
    component: _14a7ecd1,
    name: "perfil-instrumental-add"
  }, {
    path: "/perfil/instrumental/edit/:id?",
    component: _0fa96596,
    name: "perfil-instrumental-edit-id"
  }, {
    path: "/albumes/:id",
    component: _e482abdc,
    name: "albumes-id"
  }, {
    path: "/buy/:id?",
    component: _3d68cd3b,
    name: "buy-id"
  }, {
    path: "/compra/:id?",
    component: _09f95e0f,
    name: "compra-id"
  }, {
    path: "/instrumental/:id?",
    component: _75c2973a,
    name: "instrumental-id"
  }, {
    path: "/",
    component: _148dd75c,
    name: "index"
  }, {
    path: "/:id",
    component: _b5bbfe78,
    name: "id"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message() {
      return this.error.message || 'Error';
    }
  },
  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "59f05cb5"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "15a300a9"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/dist/bootstrap-vue.css
var bootstrap_vue = __webpack_require__(43);

// EXTERNAL MODULE: ./assets/main.css
var main = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/material-design-icons/iconfont/material-icons.css
var material_icons = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/vue-select/dist/vue-select.css
var vue_select = __webpack_require__(54);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=382c8861&
var defaultvue_type_template_id_382c8861_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Menu'), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('Nuxt')], 1), _vm._ssrNode(" "), _c('Footer')], 2);
};
var defaultvue_type_template_id_382c8861_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=382c8861&

// EXTERNAL MODULE: ./components/menu.vue + 4 modules
var menu = __webpack_require__(17);

// EXTERNAL MODULE: ./components/footer.vue + 4 modules
var footer = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&


/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  components: {
    Menu: menu["default"],
    Footer: footer["default"]
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_382c8861_render,
  defaultvue_type_template_id_382c8861_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "04028a77"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {Menu: __webpack_require__(17).default,Footer: __webpack_require__(18).default})

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/ingreso.vue?vue&type=template&id=0267d4ee&
var ingresovue_type_template_id_0267d4ee_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Nuxt')], 1);
};
var ingresovue_type_template_id_0267d4ee_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/ingreso.vue?vue&type=template&id=0267d4ee&

// CONCATENATED MODULE: ./layouts/ingreso.vue

var script = {}


/* normalize component */

var ingreso_component = Object(componentNormalizer["a" /* default */])(
  script,
  ingresovue_type_template_id_0267d4ee_render,
  ingresovue_type_template_id_0267d4ee_staticRenderFns,
  false,
  null,
  null,
  "8ae1a232"
  
)

/* harmony default export */ var ingreso = (ingreso_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js












const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_ingreso": sanitizeComponent(ingreso)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
    if (this.isPreview) {
      if (this.$store && this.$store._actions.nuxtServerInit) {
        this.$loading.start();
        await this.$store.dispatch('nuxtServerInit', this.context);
      }
      await this.refresh();
      this.$loading.finish();
    }
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    },
    isPreview() {
      return Boolean(this.$options.previewData);
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(page => {
        const p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (nuxt_error.options || nuxt_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    },
    getRouterBase() {
      return Object(external_ufo_["withoutTrailingSlash"])(this.$router.options.base);
    },
    getRoutePath(route = '/') {
      const base = this.getRouterBase();
      return Object(external_ufo_["withoutTrailingSlash"])(Object(external_ufo_["withoutBase"])(Object(external_ufo_["parsePath"])(route).pathname, base));
    },
    getStaticAssetsPath(route = '/') {
      const {
        staticAssetsBase
      } = window.__NUXT__;
      return urlJoin(staticAssetsBase, this.getRoutePath(route));
    },
    async fetchStaticManifest() {
      return window.__NUXT_IMPORT__('manifest.js', Object(external_ufo_["normalizeURL"])(urlJoin(this.getStaticAssetsPath(), 'manifest.js')));
    },
    setPagePayload(payload) {
      this._pagePayload = payload;
      this._fetchCounters = {};
    },
    async fetchPayload(route, prefetch) {
      const path = Object(external_ufo_["decode"])(this.getRoutePath(route));
      const manifest = await this.fetchStaticManifest();
      if (!manifest.routes.includes(path)) {
        if (!prefetch) {
          this.setPagePayload(false);
        }
        throw new Error(`Route ${path} is not pre-rendered`);
      }
      const src = urlJoin(this.getStaticAssetsPath(route), 'payload.js');
      try {
        const payload = await window.__NUXT_IMPORT__(path, Object(external_ufo_["normalizeURL"])(src));
        if (!prefetch) {
          this.setPagePayload(payload);
        }
        return payload;
      } catch (err) {
        if (!prefetch) {
          this.setPagePayload(false);
        }
        throw err;
      }
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};
(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(62), 'store/index.js');

  // If store is an exported method = classic mode (deprecated)

  // Enforce store modules
  store_store.modules = store_store.modules || {};

  // If the environment supports hot reloading...
})();

// createStore
const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};
function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;
  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }
  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }
  return normalizeModule(moduleData, filePath);
}
function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state);
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }
  return moduleData;
}
// CONCATENATED MODULE: ./.nuxt/components/index.js
const Footer = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 18)).then(c => wrapFunctional(c.default || c));
const Menu = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 17)).then(c => wrapFunctional(c.default || c));
const AlbumesAlbumheader = () => __webpack_require__.e(/* import() | components/albumes-albumheader */ 1).then(__webpack_require__.bind(null, 204)).then(c => wrapFunctional(c.default || c));
const AlbumesAlbumitem = () => __webpack_require__.e(/* import() | components/albumes-albumitem */ 2).then(__webpack_require__.bind(null, 194)).then(c => wrapFunctional(c.default || c));
const ComponentsCookBoton = () => __webpack_require__.e(/* import() | components/components-cook-boton */ 3).then(__webpack_require__.bind(null, 247)).then(c => wrapFunctional(c.default || c));
const ComprasCompraItem = () => __webpack_require__.e(/* import() | components/compras-compra-item */ 4).then(__webpack_require__.bind(null, 195)).then(c => wrapFunctional(c.default || c));
const FilesModalFilesMinuaturas = () => __webpack_require__.e(/* import() | components/files-modal-files-minuaturas */ 5).then(__webpack_require__.bind(null, 248)).then(c => wrapFunctional(c.default || c));
const MercadopagoCarga = () => __webpack_require__.e(/* import() | components/mercadopago-carga */ 16).then(__webpack_require__.bind(null, 197)).then(c => wrapFunctional(c.default || c));
const MercadopagoPago = () => __webpack_require__.e(/* import() | components/mercadopago-pago */ 17).then(__webpack_require__.bind(null, 226)).then(c => wrapFunctional(c.default || c));
const InstrumentalesAgregarInstrumental = () => __webpack_require__.e(/* import() | components/instrumentales-agregar-instrumental */ 6).then(__webpack_require__.bind(null, 201)).then(c => wrapFunctional(c.default || c));
const InstrumentalesAgregarLiciencia = () => __webpack_require__.e(/* import() | components/instrumentales-agregar-liciencia */ 7).then(__webpack_require__.bind(null, 202)).then(c => wrapFunctional(c.default || c));
const InstrumentalesCardLicencia = () => __webpack_require__.e(/* import() | components/instrumentales-card-licencia */ 8).then(__webpack_require__.bind(null, 173)).then(c => wrapFunctional(c.default || c));
const InstrumentalesCardinstrumental = () => __webpack_require__.e(/* import() | components/instrumentales-cardinstrumental */ 9).then(__webpack_require__.bind(null, 174)).then(c => wrapFunctional(c.default || c));
const InstrumentalesIntrumentalcargado = () => __webpack_require__.e(/* import() | components/instrumentales-intrumentalcargado */ 12).then(__webpack_require__.bind(null, 203)).then(c => wrapFunctional(c.default || c));
const InstrumentalesReproductorCard = () => __webpack_require__.e(/* import() | components/instrumentales-reproductor-card */ 15).then(__webpack_require__.bind(null, 249)).then(c => wrapFunctional(c.default || c));
const InstrumentalesInstrumental = () => __webpack_require__.e(/* import() | components/instrumentales-instrumental */ 10).then(__webpack_require__.bind(null, 121)).then(c => wrapFunctional(c.default || c));
const InstrumentalesInstrumentalEdit = () => __webpack_require__.e(/* import() | components/instrumentales-instrumental-edit */ 11).then(__webpack_require__.bind(null, 199)).then(c => wrapFunctional(c.default || c));
const InstrumentalesPaginador = () => __webpack_require__.e(/* import() | components/instrumentales-paginador */ 13).then(__webpack_require__.bind(null, 250)).then(c => wrapFunctional(c.default || c));
const InstrumentalesReproductor = () => __webpack_require__.e(/* import() | components/instrumentales-reproductor */ 14).then(__webpack_require__.bind(null, 172)).then(c => wrapFunctional(c.default || c));
const PerfilContrasenia = () => __webpack_require__.e(/* import() | components/perfil-contrasenia */ 18).then(__webpack_require__.bind(null, 251)).then(c => wrapFunctional(c.default || c));
const PerfilHeader = () => __webpack_require__.e(/* import() | components/perfil-header */ 19).then(__webpack_require__.bind(null, 122)).then(c => wrapFunctional(c.default || c));
const PerfilInstrumental = () => __webpack_require__.e(/* import() | components/perfil-instrumental */ 20).then(__webpack_require__.bind(null, 200)).then(c => wrapFunctional(c.default || c));
const PerfilNombre = () => __webpack_require__.e(/* import() | components/perfil-nombre */ 21).then(__webpack_require__.bind(null, 198)).then(c => wrapFunctional(c.default || c));
const PerfilValidar = () => __webpack_require__.e(/* import() | components/perfil-validar */ 22).then(__webpack_require__.bind(null, 196)).then(c => wrapFunctional(c.default || c));
const UtilidadesChipBar = () => __webpack_require__.e(/* import() | components/utilidades-chip-bar */ 23).then(__webpack_require__.bind(null, 193)).then(c => wrapFunctional(c.default || c));

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }
  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};
      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }
      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: ./node_modules/vuetify/lib/framework.js + 18 modules
var framework = __webpack_require__(13);

// CONCATENATED MODULE: ./.nuxt/vuetify/options.js
/* harmony default export */ var vuetify_options = ({
  "theme": {
    "dark": true
  }
});
// CONCATENATED MODULE: ./.nuxt/vuetify/plugin.js



external_vue_default.a.use(framework["a" /* default */], {});
/* harmony default export */ var vuetify_plugin = (ctx => {
  const vuetifyOptions = typeof vuetify_options === 'function' ? vuetify_options(ctx) : vuetify_options;
  vuetifyOptions.icons = vuetifyOptions.icons || {};
  vuetifyOptions.icons.iconfont = 'mdi';
  const vuetify = new framework["a" /* default */](vuetifyOptions);
  ctx.app.vuetify = vuetify;
  ctx.$vuetify = vuetify.framework;
});
// EXTERNAL MODULE: external "bootstrap-vue"
var external_bootstrap_vue_ = __webpack_require__(31);

// CONCATENATED MODULE: ./.nuxt/bootstrap-vue.js


external_vue_default.a.use(external_bootstrap_vue_["BootstrapVue"], {});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(28);

// EXTERNAL MODULE: external "cookie-universal"
var external_cookie_universal_ = __webpack_require__(32);
var external_cookie_universal_default = /*#__PURE__*/__webpack_require__.n(external_cookie_universal_);

// CONCATENATED MODULE: ./.nuxt/cookie-universal-nuxt.js

/* harmony default export */ var cookie_universal_nuxt = (({
  req,
  res
}, inject) => {
  const options = {
    "alias": "cookiz",
    "parseJSON": true
  };
  inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(12);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js



// Axios.prototype cannot be modified
const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },
  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }
      this.defaults.headers[scope][name] = value;
    }
  },
  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },
  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },
  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },
  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },
  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }
};

// Request helpers ($get, $post, ...)
for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}
const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};
const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel;

  // Extend axios proto
  extendAxiosInstance(axios);

  // Intercept to apply default headers
  axios.onRequest(config => {
    config.headers = {
      ...axios.defaults.headers.common,
      ...config.headers
    };
  });

  // Setup interceptors

  setupProgress(axios);
  return axios;
};
const setupProgress = axios => {
  if (true) {
    return;
  }

  // A noop loading inteterface for when $nuxt is not yet ready
  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };
  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };
  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }
    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }
    currentRequests--;
    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }
    currentRequests--;
    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }
      return;
    }
    $loading().fail();
    $loading().finish();
  });
  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }
    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };
  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};
/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {};
  // baseURL
  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/';

  // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js
  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  };

  // Proxy SSR request headers headers
  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = {
      ...ctx.req.headers
    };
    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }
    axiosOptions.headers.common = {
      ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }
  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }
  const axios = createAxiosInstance(axiosOptions);

  // Inject axios to the context as $axios
  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: external "@braid/vue-formulate"
var vue_formulate_ = __webpack_require__(33);
var vue_formulate_default = /*#__PURE__*/__webpack_require__.n(vue_formulate_);

// EXTERNAL MODULE: ./node_modules/@braid/vue-formulate-i18n/dist/locales.umd.js
var locales_umd = __webpack_require__(21);

// CONCATENATED MODULE: ./formulate.config.js

/* harmony default export */ var formulate_config = ({
  plugins: [locales_umd["de"], locales_umd["es"]],
  locale: 'es'
});
// CONCATENATED MODULE: ./.nuxt/nuxt.plugin.7d015f50.js



external_vue_default.a.use(vue_formulate_default.a, formulate_config);
// EXTERNAL MODULE: external "requrl"
var external_requrl_ = __webpack_require__(16);

// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(22);

// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/@nuxtjs/auth-next/dist/runtime.mjs






const isUnset = (o) => typeof o === "undefined" || o === null;
const isSet = (o) => !isUnset(o);
const isSameURL = (ctx, a, b) => normalizePath(a, ctx) === normalizePath(b, ctx);
function isRelativeURL(u) {
  return u && u.length && new RegExp([
    "^\\/([a-zA-Z0-9@\\-%_~.:]",
    "[/a-zA-Z0-9@\\-%_~.:]*)?",
    "([?][^#]*)?(#[^#]*)?$"
  ].join("")).test(u);
}
function parseQuery(queryString) {
  const query = {};
  const pairs = queryString.split("&");
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}
function encodeQuery(queryObject) {
  return Object.entries(queryObject).filter(([_key, value]) => typeof value !== "undefined").map(([key, value]) => encodeURIComponent(key) + (value != null ? "=" + encodeURIComponent(value) : "")).join("&");
}
function routeOption(route, key, value) {
  return route.matched.some((m) => {
    if (false) {} else {
      return Object.values(m.components).some((component) => Object.values(component._Ctor).some((ctor) => ctor.options && ctor.options[key] === value));
    }
  });
}
function runtime_getMatchedComponents(route, matches = []) {
  return [].concat(...[], ...route.matched.map(function(m, index) {
    return Object.keys(m.components).map(function(key) {
      matches.push(index);
      return m.components[key];
    });
  }));
}
function normalizePath(path = "", ctx) {
  let result = path.split("?")[0];
  if (ctx && ctx.base) {
    result = result.replace(ctx.base, "/");
  }
  if (result.charAt(result.length - 1) === "/") {
    result = result.slice(0, -1);
  }
  result = result.replace(/\/+/g, "/");
  return result;
}
function encodeValue(val) {
  if (typeof val === "string") {
    return val;
  }
  return JSON.stringify(val);
}
function decodeValue(val) {
  if (typeof val === "string") {
    try {
      return JSON.parse(val);
    } catch (_) {
    }
  }
  return val;
}
function getProp(holder, propName) {
  if (!propName || !holder || typeof holder !== "object") {
    return holder;
  }
  if (propName in holder) {
    return holder[propName];
  }
  const propParts = Array.isArray(propName) ? propName : (propName + "").split(".");
  let result = holder;
  while (propParts.length && result) {
    result = result[propParts.shift()];
  }
  return result;
}
function addTokenPrefix(token, tokenType) {
  if (!token || !tokenType || typeof token !== "string" || token.startsWith(tokenType)) {
    return token;
  }
  return tokenType + " " + token;
}
function removeTokenPrefix(token, tokenType) {
  if (!token || !tokenType || typeof token !== "string") {
    return token;
  }
  return token.replace(tokenType + " ", "");
}
function runtime_urlJoin(...args) {
  return args.join("/").replace(/[/]+/g, "/").replace(/^(.+):\//, "$1://").replace(/^file:/, "file:/").replace(/\/(\?|&|#[^!])/g, "$1").replace(/\?/g, "&").replace("&", "?");
}
function cleanObj(obj) {
  for (const key in obj) {
    if (obj[key] === void 0) {
      delete obj[key];
    }
  }
  return obj;
}
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function randomString(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

class runtime_Storage {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.options = options;
    this._initState();
  }
  setUniversal(key, value) {
    if (isUnset(value)) {
      return this.removeUniversal(key);
    }
    this.setCookie(key, value);
    this.setLocalStorage(key, value);
    this.setState(key, value);
    return value;
  }
  getUniversal(key) {
    let value;
    if (true) {
      value = this.getState(key);
    }
    if (isUnset(value)) {
      value = this.getCookie(key);
    }
    if (isUnset(value)) {
      value = this.getLocalStorage(key);
    }
    if (isUnset(value)) {
      value = this.getState(key);
    }
    return value;
  }
  syncUniversal(key, defaultValue) {
    let value = this.getUniversal(key);
    if (isUnset(value) && isSet(defaultValue)) {
      value = defaultValue;
    }
    if (isSet(value)) {
      this.setUniversal(key, value);
    }
    return value;
  }
  removeUniversal(key) {
    this.removeState(key);
    this.removeLocalStorage(key);
    this.removeCookie(key);
  }
  _initState() {
    external_vue_.set(this, "_state", {});
    this._useVuex = this.options.vuex && !!this.ctx.store;
    if (this._useVuex) {
      const storeModule = {
        namespaced: true,
        state: () => this.options.initialState,
        mutations: {
          SET(state, payload) {
            external_vue_.set(state, payload.key, payload.value);
          }
        }
      };
      this.ctx.store.registerModule(this.options.vuex.namespace, storeModule, {
        preserveState: Boolean(this.ctx.store.state[this.options.vuex.namespace])
      });
      this.state = this.ctx.store.state[this.options.vuex.namespace];
    } else {
      external_vue_.set(this, "state", {});
      console.warn("[AUTH] The Vuex Store is not activated. This might cause issues in auth module behavior, like redirects not working properly.To activate it, see https://nuxtjs.org/docs/2.x/directory-structure/store");
    }
  }
  setState(key, value) {
    if (key[0] === "_") {
      external_vue_.set(this._state, key, value);
    } else if (this._useVuex) {
      this.ctx.store.commit(this.options.vuex.namespace + "/SET", {
        key,
        value
      });
    } else {
      external_vue_.set(this.state, key, value);
    }
    return value;
  }
  getState(key) {
    if (key[0] !== "_") {
      return this.state[key];
    } else {
      return this._state[key];
    }
  }
  watchState(key, fn) {
    if (this._useVuex) {
      return this.ctx.store.watch((state) => getProp(state[this.options.vuex.namespace], key), fn);
    }
  }
  removeState(key) {
    this.setState(key, void 0);
  }
  setLocalStorage(key, value) {
    if (isUnset(value)) {
      return this.removeLocalStorage(key);
    }
    if (!this.isLocalStorageEnabled()) {
      return;
    }
    const _key = this.getPrefix() + key;
    try {
      localStorage.setItem(_key, encodeValue(value));
    } catch (e) {
      if (!this.options.ignoreExceptions) {
        throw e;
      }
    }
    return value;
  }
  getLocalStorage(key) {
    if (!this.isLocalStorageEnabled()) {
      return;
    }
    const _key = this.getPrefix() + key;
    const value = localStorage.getItem(_key);
    return decodeValue(value);
  }
  removeLocalStorage(key) {
    if (!this.isLocalStorageEnabled()) {
      return;
    }
    const _key = this.getPrefix() + key;
    localStorage.removeItem(_key);
  }
  getCookies() {
    if (!this.isCookiesEnabled()) {
      return;
    }
    const cookieStr =  false ? undefined : this.ctx.req.headers.cookie;
    return external_cookie_.parse(cookieStr || "") || {};
  }
  setCookie(key, value, options = {}) {
    if (!this.options.cookie ||  true && !this.ctx.res) {
      return;
    }
    if (!this.isCookiesEnabled()) {
      return;
    }
    const _prefix = options.prefix !== void 0 ? options.prefix : this.options.cookie.prefix;
    const _key = _prefix + key;
    const _options = Object.assign({}, this.options.cookie.options, options);
    const _value = encodeValue(value);
    if (isUnset(value)) {
      _options.maxAge = -1;
    }
    if (typeof _options.expires === "number") {
      _options.expires = new Date(Date.now() + _options.expires * 864e5);
    }
    const serializedCookie = external_cookie_.serialize(_key, _value, _options);
    if (false) {} else if ( true && this.ctx.res) {
      let cookies = this.ctx.res.getHeader("Set-Cookie") || [];
      if (!Array.isArray(cookies))
        cookies = [cookies];
      cookies.unshift(serializedCookie);
      this.ctx.res.setHeader("Set-Cookie", cookies.filter((v, i, arr) => arr.findIndex((val) => val.startsWith(v.substr(0, v.indexOf("=")))) === i));
    }
    return value;
  }
  getCookie(key) {
    if (!this.options.cookie ||  true && !this.ctx.req) {
      return;
    }
    if (!this.isCookiesEnabled()) {
      return;
    }
    const _key = this.options.cookie.prefix + key;
    const cookies = this.getCookies();
    const value = cookies[_key] ? decodeURIComponent(cookies[_key]) : void 0;
    return decodeValue(value);
  }
  removeCookie(key, options) {
    this.setCookie(key, void 0, options);
  }
  getPrefix() {
    if (!this.options.localStorage) {
      throw new Error("Cannot get prefix; localStorage is off");
    }
    return this.options.localStorage.prefix;
  }
  isLocalStorageEnabled() {
    if (!this.options.localStorage) {
      return false;
    }
    if (true) {
      return false;
    }
    const test = "test";
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      if (!this.options.ignoreExceptions) {
        console.warn("[AUTH] Local storage is enabled in config, but browser doesn't support it");
      }
      return false;
    }
  }
  isCookiesEnabled() {
    if (!this.options.cookie) {
      return false;
    }
    if (true) {
      return true;
    }
    if (window.navigator.cookieEnabled) {
      return true;
    } else {
      console.warn("[AUTH] Cookies is enabled in config, but browser doesn't support it");
      return false;
    }
  }
}

class runtime_Auth {
  constructor(ctx, options) {
    this.strategies = {};
    this._errorListeners = [];
    this._redirectListeners = [];
    this.ctx = ctx;
    this.options = options;
    const initialState = { user: null, loggedIn: false };
    const storage = new runtime_Storage(ctx, { ...options, ...{ initialState } });
    this.$storage = storage;
    this.$state = storage.state;
  }
  get state() {
    if (!this._stateWarnShown) {
      this._stateWarnShown = true;
      console.warn("[AUTH] $auth.state is deprecated. Please use $auth.$state or top level props like $auth.loggedIn");
    }
    return this.$state;
  }
  get strategy() {
    return this.getStrategy();
  }
  getStrategy(throwException = true) {
    if (throwException) {
      if (!this.$state.strategy) {
        throw new Error("No strategy is set!");
      }
      if (!this.strategies[this.$state.strategy]) {
        throw new Error("Strategy not supported: " + this.$state.strategy);
      }
    }
    return this.strategies[this.$state.strategy];
  }
  get user() {
    return this.$state.user;
  }
  get loggedIn() {
    return this.$state.loggedIn;
  }
  get busy() {
    return this.$storage.getState("busy");
  }
  async init() {
    if (this.options.resetOnError) {
      this.onError((...args) => {
        if (typeof this.options.resetOnError !== "function" || this.options.resetOnError(...args)) {
          this.reset();
        }
      });
    }
    this.$storage.syncUniversal("strategy", this.options.defaultStrategy);
    if (!this.getStrategy(false)) {
      this.$storage.setUniversal("strategy", this.options.defaultStrategy);
      if (!this.getStrategy(false)) {
        return Promise.resolve();
      }
    }
    try {
      await this.mounted();
    } catch (error) {
      this.callOnError(error);
    } finally {
      if (false) {}
    }
  }
  getState(key) {
    if (!this._getStateWarnShown) {
      this._getStateWarnShown = true;
      console.warn("[AUTH] $auth.getState is deprecated. Please use $auth.$storage.getState() or top level props like $auth.loggedIn");
    }
    return this.$storage.getState(key);
  }
  registerStrategy(name, strategy) {
    this.strategies[name] = strategy;
  }
  setStrategy(name) {
    if (name === this.$storage.getUniversal("strategy")) {
      return Promise.resolve();
    }
    if (!this.strategies[name]) {
      throw new Error(`Strategy ${name} is not defined!`);
    }
    this.reset();
    this.$storage.setUniversal("strategy", name);
    return this.mounted();
  }
  mounted(...args) {
    if (!this.getStrategy().mounted) {
      return this.fetchUserOnce();
    }
    return Promise.resolve(this.getStrategy().mounted(...args)).catch((error) => {
      this.callOnError(error, { method: "mounted" });
      return Promise.reject(error);
    });
  }
  loginWith(name, ...args) {
    return this.setStrategy(name).then(() => this.login(...args));
  }
  login(...args) {
    if (!this.getStrategy().login) {
      return Promise.resolve();
    }
    return this.wrapLogin(this.getStrategy().login(...args)).catch((error) => {
      this.callOnError(error, { method: "login" });
      return Promise.reject(error);
    });
  }
  fetchUser(...args) {
    if (!this.getStrategy().fetchUser) {
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().fetchUser(...args)).catch((error) => {
      this.callOnError(error, { method: "fetchUser" });
      return Promise.reject(error);
    });
  }
  logout(...args) {
    if (!this.getStrategy().logout) {
      this.reset();
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().logout(...args)).catch((error) => {
      this.callOnError(error, { method: "logout" });
      return Promise.reject(error);
    });
  }
  setUserToken(token, refreshToken) {
    if (!this.getStrategy().setUserToken) {
      this.getStrategy().token.set(token);
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().setUserToken(token, refreshToken)).catch((error) => {
      this.callOnError(error, { method: "setUserToken" });
      return Promise.reject(error);
    });
  }
  reset(...args) {
    if (!this.getStrategy().reset) {
      this.setUser(false);
      this.getStrategy().token.reset();
      this.getStrategy().refreshToken.reset();
    }
    return this.getStrategy().reset(...args);
  }
  refreshTokens() {
    if (!this.getStrategy().refreshController) {
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().refreshController.handleRefresh()).catch((error) => {
      this.callOnError(error, { method: "refreshTokens" });
      return Promise.reject(error);
    });
  }
  check(...args) {
    if (!this.getStrategy().check) {
      return { valid: true };
    }
    return this.getStrategy().check(...args);
  }
  fetchUserOnce(...args) {
    if (!this.$state.user) {
      return this.fetchUser(...args);
    }
    return Promise.resolve();
  }
  setUser(user) {
    this.$storage.setState("user", user);
    let check = { valid: Boolean(user) };
    if (check.valid) {
      check = this.check();
    }
    this.$storage.setState("loggedIn", check.valid);
  }
  request(endpoint, defaults = {}) {
    const _endpoint = typeof defaults === "object" ? Object.assign({}, defaults, endpoint) : endpoint;
    if (_endpoint.baseURL === "") {
      _endpoint.baseURL = external_requrl_(this.ctx.req);
    }
    if (!this.ctx.app.$axios) {
      console.error("[AUTH] add the @nuxtjs/axios module to nuxt.config file");
      return;
    }
    return this.ctx.app.$axios.request(_endpoint).catch((error) => {
      this.callOnError(error, { method: "request" });
      return Promise.reject(error);
    });
  }
  requestWith(strategy, endpoint, defaults) {
    const token = this.getStrategy().token.get();
    const _endpoint = Object.assign({}, defaults, endpoint);
    const tokenName = this.strategies[strategy].options.token.name || "Authorization";
    if (!_endpoint.headers) {
      _endpoint.headers = {};
    }
    if (!_endpoint.headers[tokenName] && isSet(token) && token && typeof token === "string") {
      _endpoint.headers[tokenName] = token;
    }
    return this.request(_endpoint);
  }
  wrapLogin(promise) {
    this.$storage.setState("busy", true);
    this.error = null;
    return Promise.resolve(promise).then((response) => {
      this.$storage.setState("busy", false);
      return response;
    }).catch((error) => {
      this.$storage.setState("busy", false);
      return Promise.reject(error);
    });
  }
  onError(listener) {
    this._errorListeners.push(listener);
  }
  callOnError(error, payload = {}) {
    this.error = error;
    for (const fn of this._errorListeners) {
      fn(error, payload);
    }
  }
  redirect(name, noRouter = false) {
    if (!this.options.redirect) {
      return;
    }
    const from = this.options.fullPathRedirect ? this.ctx.route.fullPath : this.ctx.route.path;
    let to = this.options.redirect[name];
    if (!to) {
      return;
    }
    if (this.options.rewriteRedirects) {
      if (name === "login" && isRelativeURL(from) && !isSameURL(this.ctx, to, from)) {
        this.$storage.setUniversal("redirect", from);
      }
      if (name === "home") {
        const redirect = this.$storage.getUniversal("redirect");
        this.$storage.setUniversal("redirect", null);
        if (isRelativeURL(redirect)) {
          to = redirect;
        }
      }
    }
    to = this.callOnRedirect(to, from) || to;
    if (isSameURL(this.ctx, to, from)) {
      return;
    }
    if (false) {} else {
      this.ctx.redirect(to, this.ctx.query);
    }
  }
  onRedirect(listener) {
    this._redirectListeners.push(listener);
  }
  callOnRedirect(to, from) {
    for (const fn of this._redirectListeners) {
      to = fn(to, from) || to;
    }
    return to;
  }
  hasScope(scope) {
    const userScopes = this.$state.user && getProp(this.$state.user, this.options.scopeKey);
    if (!userScopes) {
      return false;
    }
    if (Array.isArray(userScopes)) {
      return userScopes.includes(scope);
    }
    return Boolean(getProp(userScopes, scope));
  }
}

const authMiddleware = async (ctx) => {
  if (routeOption(ctx.route, "auth", false)) {
    return;
  }
  const matches = [];
  const Components = runtime_getMatchedComponents(ctx.route, matches);
  if (!Components.length) {
    return;
  }
  const { login, callback } = ctx.$auth.options.redirect;
  const pageIsInGuestMode = routeOption(ctx.route, "auth", "guest");
  const insidePage = (page) => normalizePath(ctx.route.path, ctx) === normalizePath(page, ctx);
  if (ctx.$auth.$state.loggedIn) {
    const { tokenExpired, refreshTokenExpired, isRefreshable } = ctx.$auth.check(true);
    if (!login || insidePage(login) || pageIsInGuestMode) {
      ctx.$auth.redirect("home");
    }
    if (refreshTokenExpired) {
      ctx.$auth.reset();
    } else if (tokenExpired) {
      if (isRefreshable) {
        try {
          await ctx.$auth.refreshTokens();
        } catch (error) {
          ctx.$auth.reset();
        }
      } else {
        ctx.$auth.reset();
      }
    }
  } else if (!pageIsInGuestMode && (!callback || !insidePage(callback))) {
    ctx.$auth.redirect("login");
  }
};

class ConfigurationDocumentRequestError extends Error {
  constructor() {
    super("Error loading OpenIDConnect configuration document");
    this.name = "ConfigurationDocumentRequestError";
  }
}

const ConfigurationDocumentWarning = (message) => console.warn(`[AUTH] [OPENID CONNECT] Invalid configuration. ${message}`);
class runtime_ConfigurationDocument {
  constructor(scheme, storage) {
    this.scheme = scheme;
    this.$storage = storage;
    this.key = "_configuration_document." + this.scheme.name;
  }
  _set(value) {
    return this.$storage.setState(this.key, value);
  }
  get() {
    return this.$storage.getState(this.key);
  }
  set(value) {
    this._set(value);
    return value;
  }
  async request() {
    var _a, _b, _c, _d;
    const serverDoc = (_d = (_c = (_b = (_a = this.scheme.$auth.ctx) == null ? void 0 : _a.nuxtState) == null ? void 0 : _b.$auth) == null ? void 0 : _c.openIDConnect) == null ? void 0 : _d.configurationDocument;
    if (false) {}
    if (!this.get()) {
      const configurationDocument = await this.scheme.requestHandler.axios.$get(this.scheme.options.endpoints.configuration).catch((e) => Promise.reject(e));
      if (true) {
        this.scheme.$auth.ctx.beforeNuxtRender(({ nuxtState }) => {
          nuxtState.$auth = {
            oidc: {
              configurationDocument
            }
          };
        });
      }
      this.set(configurationDocument);
    }
  }
  validate() {
    const mapping = {
      responseType: "response_type_supported",
      scope: "scopes_supported",
      grantType: "grant_types_supported",
      acrValues: "acr_values_supported"
    };
    Object.keys(mapping).forEach((optionsKey) => {
      const configDocument = this.get();
      const configDocumentKey = mapping[optionsKey];
      const configDocumentValues = configDocument[configDocumentKey];
      const optionsValues = this.scheme.options[optionsKey];
      if (typeof configDocumentValues !== "undefined") {
        if (Array.isArray(optionsValues) && Array.isArray(configDocumentValues)) {
          optionsValues.forEach((optionsValue) => {
            if (!configDocumentValues.includes(optionsValue)) {
              ConfigurationDocumentWarning(`A value of scheme options ${optionsKey} is not supported by ${configDocumentKey} of by Authorization Server.`);
            }
          });
        }
        if (!Array.isArray(optionsValues) && Array.isArray(configDocumentValues) && !configDocumentValues.includes(optionsValues)) {
          ConfigurationDocumentWarning(`Value of scheme option ${optionsKey} is not supported by ${configDocumentKey} of by Authorization Server.`);
        }
        if (!Array.isArray(optionsValues) && !Array.isArray(configDocumentValues) && configDocumentValues !== optionsValues) {
          ConfigurationDocumentWarning(`Value of scheme option ${optionsKey} is not supported by ${configDocumentKey} of by Authorization Server.`);
        }
      }
    });
  }
  async init() {
    await this.request().catch(() => {
      throw new ConfigurationDocumentRequestError();
    });
    this.validate();
    this.setSchemeEndpoints();
  }
  setSchemeEndpoints() {
    const configurationDocument = this.get();
    this.scheme.options.endpoints = external_defu_(this.scheme.options.endpoints, {
      authorization: configurationDocument.authorization_endpoint,
      token: configurationDocument.token_endpoint,
      userInfo: configurationDocument.userinfo_endpoint,
      logout: configurationDocument.end_session_endpoint
    });
  }
  reset() {
    this._set(false);
  }
}

class ExpiredAuthSessionError extends Error {
  constructor() {
    super("Both token and refresh token have expired. Your request was aborted.");
    this.name = "ExpiredAuthSessionError";
  }
}

class RefreshController {
  constructor(scheme) {
    this.scheme = scheme;
    this._refreshPromise = null;
    this.$auth = scheme.$auth;
  }
  handleRefresh() {
    if (this._refreshPromise) {
      return this._refreshPromise;
    }
    return this._doRefresh();
  }
  _doRefresh() {
    this._refreshPromise = new Promise((resolve, reject) => {
      this.scheme.refreshTokens().then((response) => {
        this._refreshPromise = null;
        resolve(response);
      }).catch((error) => {
        this._refreshPromise = null;
        reject(error);
      });
    });
    return this._refreshPromise;
  }
}

var TokenStatusEnum;
(function(TokenStatusEnum2) {
  TokenStatusEnum2["UNKNOWN"] = "UNKNOWN";
  TokenStatusEnum2["VALID"] = "VALID";
  TokenStatusEnum2["EXPIRED"] = "EXPIRED";
})(TokenStatusEnum || (TokenStatusEnum = {}));
class TokenStatus {
  constructor(token, tokenExpiresAt) {
    this._status = this._calculate(token, tokenExpiresAt);
  }
  unknown() {
    return TokenStatusEnum.UNKNOWN === this._status;
  }
  valid() {
    return TokenStatusEnum.VALID === this._status;
  }
  expired() {
    return TokenStatusEnum.EXPIRED === this._status;
  }
  _calculate(token, tokenExpiresAt) {
    const now = Date.now();
    try {
      if (!token || !tokenExpiresAt) {
        return TokenStatusEnum.UNKNOWN;
      }
    } catch (error) {
      return TokenStatusEnum.UNKNOWN;
    }
    const timeSlackMillis = 500;
    tokenExpiresAt -= timeSlackMillis;
    if (now < tokenExpiresAt) {
      return TokenStatusEnum.VALID;
    }
    return TokenStatusEnum.EXPIRED;
  }
}

class runtime_RefreshToken {
  constructor(scheme, storage) {
    this.scheme = scheme;
    this.$storage = storage;
  }
  get() {
    const _key = this.scheme.options.refreshToken.prefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  set(tokenValue) {
    const refreshToken = addTokenPrefix(tokenValue, this.scheme.options.refreshToken.type);
    this._setToken(refreshToken);
    this._updateExpiration(refreshToken);
    return refreshToken;
  }
  sync() {
    const refreshToken = this._syncToken();
    this._syncExpiration();
    return refreshToken;
  }
  reset() {
    this._setToken(false);
    this._setExpiration(false);
  }
  status() {
    return new TokenStatus(this.get(), this._getExpiration());
  }
  _getExpiration() {
    const _key = this.scheme.options.refreshToken.expirationPrefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  _setExpiration(expiration) {
    const _key = this.scheme.options.refreshToken.expirationPrefix + this.scheme.name;
    return this.$storage.setUniversal(_key, expiration);
  }
  _syncExpiration() {
    const _key = this.scheme.options.refreshToken.expirationPrefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
  _updateExpiration(refreshToken) {
    let refreshTokenExpiration;
    const _tokenIssuedAtMillis = Date.now();
    const _tokenTTLMillis = Number(this.scheme.options.refreshToken.maxAge) * 1e3;
    const _tokenExpiresAtMillis = _tokenTTLMillis ? _tokenIssuedAtMillis + _tokenTTLMillis : 0;
    try {
      refreshTokenExpiration = external_jwt_decode_(refreshToken + "").exp * 1e3 || _tokenExpiresAtMillis;
    } catch (error) {
      refreshTokenExpiration = _tokenExpiresAtMillis;
      if (!(error && error.name === "InvalidTokenError")) {
        throw error;
      }
    }
    return this._setExpiration(refreshTokenExpiration || false);
  }
  _setToken(refreshToken) {
    const _key = this.scheme.options.refreshToken.prefix + this.scheme.name;
    return this.$storage.setUniversal(_key, refreshToken);
  }
  _syncToken() {
    const _key = this.scheme.options.refreshToken.prefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
}

class RequestHandler {
  constructor(scheme, axios) {
    this.scheme = scheme;
    this.axios = axios;
    this.interceptor = null;
  }
  setHeader(token) {
    if (this.scheme.options.token.global) {
      this.axios.setHeader(this.scheme.options.token.name, token);
    }
  }
  clearHeader() {
    if (this.scheme.options.token.global) {
      this.axios.setHeader(this.scheme.options.token.name, false);
    }
  }
  initializeRequestInterceptor(refreshEndpoint) {
    this.interceptor = this.axios.interceptors.request.use(async (config) => {
      if (!this._needToken(config) || config.url === refreshEndpoint) {
        return config;
      }
      const { valid, tokenExpired, refreshTokenExpired, isRefreshable } = this.scheme.check(true);
      let isValid = valid;
      if (refreshTokenExpired) {
        this.scheme.reset();
        throw new ExpiredAuthSessionError();
      }
      if (tokenExpired) {
        if (!isRefreshable) {
          this.scheme.reset();
          throw new ExpiredAuthSessionError();
        }
        isValid = await this.scheme.refreshTokens().then(() => true).catch(() => {
          this.scheme.reset();
          throw new ExpiredAuthSessionError();
        });
      }
      const token = this.scheme.token.get();
      if (!isValid) {
        if (!token && this._requestHasAuthorizationHeader(config)) {
          throw new ExpiredAuthSessionError();
        }
        return config;
      }
      return this._getUpdatedRequestConfig(config, token);
    });
  }
  reset() {
    this.axios.interceptors.request.eject(this.interceptor);
    this.interceptor = null;
  }
  _needToken(config) {
    const options = this.scheme.options;
    return options.token.global || Object.values(options.endpoints).some((endpoint) => typeof endpoint === "object" ? endpoint.url === config.url : endpoint === config.url);
  }
  _getUpdatedRequestConfig(config, token) {
    if (typeof token === "string") {
      config.headers[this.scheme.options.token.name] = token;
    }
    return config;
  }
  _requestHasAuthorizationHeader(config) {
    return !!config.headers.common[this.scheme.options.token.name];
  }
}

class runtime_Token {
  constructor(scheme, storage) {
    this.scheme = scheme;
    this.$storage = storage;
  }
  get() {
    const _key = this.scheme.options.token.prefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  set(tokenValue) {
    const token = addTokenPrefix(tokenValue, this.scheme.options.token.type);
    this._setToken(token);
    this._updateExpiration(token);
    if (typeof token === "string") {
      this.scheme.requestHandler.setHeader(token);
    }
    return token;
  }
  sync() {
    const token = this._syncToken();
    this._syncExpiration();
    if (typeof token === "string") {
      this.scheme.requestHandler.setHeader(token);
    }
    return token;
  }
  reset() {
    this.scheme.requestHandler.clearHeader();
    this._setToken(false);
    this._setExpiration(false);
  }
  status() {
    return new TokenStatus(this.get(), this._getExpiration());
  }
  _getExpiration() {
    const _key = this.scheme.options.token.expirationPrefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  _setExpiration(expiration) {
    const _key = this.scheme.options.token.expirationPrefix + this.scheme.name;
    return this.$storage.setUniversal(_key, expiration);
  }
  _syncExpiration() {
    const _key = this.scheme.options.token.expirationPrefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
  _updateExpiration(token) {
    let tokenExpiration;
    const _tokenIssuedAtMillis = Date.now();
    const _tokenTTLMillis = Number(this.scheme.options.token.maxAge) * 1e3;
    const _tokenExpiresAtMillis = _tokenTTLMillis ? _tokenIssuedAtMillis + _tokenTTLMillis : 0;
    try {
      tokenExpiration = external_jwt_decode_(token + "").exp * 1e3 || _tokenExpiresAtMillis;
    } catch (error) {
      tokenExpiration = _tokenExpiresAtMillis;
      if (!(error && error.name === "InvalidTokenError")) {
        throw error;
      }
    }
    return this._setExpiration(tokenExpiration || false);
  }
  _setToken(token) {
    const _key = this.scheme.options.token.prefix + this.scheme.name;
    return this.$storage.setUniversal(_key, token);
  }
  _syncToken() {
    const _key = this.scheme.options.token.prefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
}

class runtime_IdToken {
  constructor(scheme, storage) {
    this.scheme = scheme;
    this.$storage = storage;
  }
  get() {
    const _key = this.scheme.options.idToken.prefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  set(tokenValue) {
    const idToken = addTokenPrefix(tokenValue, this.scheme.options.idToken.type);
    this._setToken(idToken);
    this._updateExpiration(idToken);
    return idToken;
  }
  sync() {
    const idToken = this._syncToken();
    this._syncExpiration();
    return idToken;
  }
  reset() {
    this._setToken(false);
    this._setExpiration(false);
  }
  status() {
    return new TokenStatus(this.get(), this._getExpiration());
  }
  _getExpiration() {
    const _key = this.scheme.options.idToken.expirationPrefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  _setExpiration(expiration) {
    const _key = this.scheme.options.idToken.expirationPrefix + this.scheme.name;
    return this.$storage.setUniversal(_key, expiration);
  }
  _syncExpiration() {
    const _key = this.scheme.options.idToken.expirationPrefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
  _updateExpiration(idToken) {
    let idTokenExpiration;
    const _tokenIssuedAtMillis = Date.now();
    const _tokenTTLMillis = Number(this.scheme.options.idToken.maxAge) * 1e3;
    const _tokenExpiresAtMillis = _tokenTTLMillis ? _tokenIssuedAtMillis + _tokenTTLMillis : 0;
    try {
      idTokenExpiration = external_jwt_decode_(idToken + "").exp * 1e3 || _tokenExpiresAtMillis;
    } catch (error) {
      idTokenExpiration = _tokenExpiresAtMillis;
      if (!(error && error.name === "InvalidTokenError")) {
        throw error;
      }
    }
    return this._setExpiration(idTokenExpiration || false);
  }
  _setToken(idToken) {
    const _key = this.scheme.options.idToken.prefix + this.scheme.name;
    return this.$storage.setUniversal(_key, idToken);
  }
  _syncToken() {
    const _key = this.scheme.options.idToken.prefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
  userInfo() {
    const idToken = this.get();
    if (typeof idToken === "string") {
      return external_jwt_decode_(idToken);
    }
  }
}

class runtime_BaseScheme {
  constructor($auth, ...options) {
    this.$auth = $auth;
    this.options = options.reduce((p, c) => external_defu_(p, c), {});
  }
  get name() {
    return this.options.name;
  }
}

const DEFAULTS$4 = {
  name: "local",
  endpoints: {
    login: {
      url: "/api/auth/login",
      method: "post"
    },
    logout: {
      url: "/api/auth/logout",
      method: "post"
    },
    user: {
      url: "/api/auth/user",
      method: "get"
    }
  },
  token: {
    property: "token",
    type: "Bearer",
    name: "Authorization",
    maxAge: 1800,
    global: true,
    required: true,
    prefix: "_token.",
    expirationPrefix: "_token_expiration."
  },
  user: {
    property: "user",
    autoFetch: true
  },
  clientId: false,
  grantType: false,
  scope: false
};
class LocalScheme extends runtime_BaseScheme {
  constructor($auth, options, ...defaults) {
    super($auth, options, ...defaults, DEFAULTS$4);
    this.token = new runtime_Token(this, this.$auth.$storage);
    this.requestHandler = new RequestHandler(this, this.$auth.ctx.$axios);
  }
  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false
    };
    const token = this.token.sync();
    if (!token) {
      return response;
    }
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    const tokenStatus = this.token.status();
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }
  mounted({
    tokenCallback = () => this.$auth.reset(),
    refreshTokenCallback = void 0
  } = {}) {
    const { tokenExpired, refreshTokenExpired } = this.check(true);
    if (refreshTokenExpired && typeof refreshTokenCallback === "function") {
      refreshTokenCallback();
    } else if (tokenExpired && typeof tokenCallback === "function") {
      tokenCallback();
    }
    this.initializeRequestInterceptor();
    return this.$auth.fetchUserOnce();
  }
  async login(endpoint, { reset = true } = {}) {
    if (!this.options.endpoints.login) {
      return;
    }
    if (reset) {
      this.$auth.reset({ resetInterceptor: false });
    }
    if (this.options.clientId) {
      endpoint.data.client_id = this.options.clientId;
    }
    if (this.options.grantType) {
      endpoint.data.grant_type = this.options.grantType;
    }
    if (this.options.scope) {
      endpoint.data.scope = this.options.scope;
    }
    const response = await this.$auth.request(endpoint, this.options.endpoints.login);
    this.updateTokens(response);
    if (!this.requestHandler.interceptor) {
      this.initializeRequestInterceptor();
    }
    if (this.options.user.autoFetch) {
      await this.fetchUser();
    }
    return response;
  }
  setUserToken(token) {
    this.token.set(token);
    return this.fetchUser();
  }
  fetchUser(endpoint) {
    if (!this.check().valid) {
      return Promise.resolve();
    }
    if (!this.options.endpoints.user) {
      this.$auth.setUser({});
      return Promise.resolve();
    }
    return this.$auth.requestWith(this.name, endpoint, this.options.endpoints.user).then((response) => {
      const userData = getProp(response.data, this.options.user.property);
      if (!userData) {
        const error = new Error(`User Data response does not contain field ${this.options.user.property}`);
        return Promise.reject(error);
      }
      this.$auth.setUser(userData);
      return response;
    }).catch((error) => {
      this.$auth.callOnError(error, { method: "fetchUser" });
      return Promise.reject(error);
    });
  }
  async logout(endpoint = {}) {
    if (this.options.endpoints.logout) {
      await this.$auth.requestWith(this.name, endpoint, this.options.endpoints.logout).catch(() => {
      });
    }
    return this.$auth.reset();
  }
  reset({ resetInterceptor = true } = {}) {
    this.$auth.setUser(false);
    this.token.reset();
    if (resetInterceptor) {
      this.requestHandler.reset();
    }
  }
  updateTokens(response) {
    const token = this.options.token.required ? getProp(response.data, this.options.token.property) : true;
    this.token.set(token);
  }
  initializeRequestInterceptor() {
    this.requestHandler.initializeRequestInterceptor();
  }
}

const DEFAULTS$3 = {
  name: "cookie",
  cookie: {
    name: null
  },
  token: {
    type: "",
    property: "",
    maxAge: false,
    global: false,
    required: false
  },
  endpoints: {
    csrf: null
  }
};
class CookieScheme extends LocalScheme {
  constructor($auth, options) {
    super($auth, options, DEFAULTS$3);
  }
  mounted() {
    if (true) {
      this.$auth.ctx.$axios.setHeader("referer", this.$auth.ctx.req.headers.host);
    }
    return super.mounted();
  }
  check() {
    const response = { valid: false };
    if (!super.check().valid) {
      return response;
    }
    if (this.options.cookie.name) {
      const cookies = this.$auth.$storage.getCookies();
      response.valid = Boolean(cookies[this.options.cookie.name]);
      return response;
    }
    response.valid = true;
    return response;
  }
  async login(endpoint) {
    this.$auth.reset();
    if (this.options.endpoints.csrf) {
      await this.$auth.request(this.options.endpoints.csrf, {
        maxRedirects: 0
      });
    }
    return super.login(endpoint, { reset: false });
  }
  reset() {
    if (this.options.cookie.name) {
      this.$auth.$storage.setCookie(this.options.cookie.name, null, {
        prefix: ""
      });
    }
    return super.reset();
  }
}

const DEFAULTS$2 = {
  name: "oauth2",
  accessType: null,
  redirectUri: null,
  logoutRedirectUri: null,
  clientId: null,
  audience: null,
  grantType: null,
  responseMode: null,
  acrValues: null,
  autoLogout: false,
  endpoints: {
    logout: null,
    authorization: null,
    token: null,
    userInfo: null
  },
  scope: [],
  token: {
    property: "access_token",
    type: "Bearer",
    name: "Authorization",
    maxAge: 1800,
    global: true,
    prefix: "_token.",
    expirationPrefix: "_token_expiration."
  },
  refreshToken: {
    property: "refresh_token",
    maxAge: 60 * 60 * 24 * 30,
    prefix: "_refresh_token.",
    expirationPrefix: "_refresh_token_expiration."
  },
  user: {
    property: false
  },
  responseType: "token",
  codeChallengeMethod: "implicit"
};
class runtime_Oauth2Scheme extends runtime_BaseScheme {
  constructor($auth, options, ...defaults) {
    super($auth, options, ...defaults, DEFAULTS$2);
    this.req = $auth.ctx.req;
    this.token = new runtime_Token(this, this.$auth.$storage);
    this.refreshToken = new runtime_RefreshToken(this, this.$auth.$storage);
    this.refreshController = new RefreshController(this);
    this.requestHandler = new RequestHandler(this, this.$auth.ctx.$axios);
  }
  get scope() {
    return Array.isArray(this.options.scope) ? this.options.scope.join(" ") : this.options.scope;
  }
  get redirectURI() {
    const basePath = this.$auth.ctx.base || "";
    const path = normalizePath(basePath + "/" + this.$auth.options.redirect.callback);
    return this.options.redirectUri || runtime_urlJoin(external_requrl_(this.req), path);
  }
  get logoutRedirectURI() {
    return this.options.logoutRedirectUri || runtime_urlJoin(external_requrl_(this.req), this.$auth.options.redirect.logout);
  }
  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false,
      refreshTokenExpired: false,
      isRefreshable: true
    };
    const token = this.token.sync();
    this.refreshToken.sync();
    if (!token) {
      return response;
    }
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    const tokenStatus = this.token.status();
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      response.refreshTokenExpired = true;
      return response;
    }
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }
  async mounted() {
    const { tokenExpired, refreshTokenExpired } = this.check(true);
    if (refreshTokenExpired || tokenExpired && this.options.autoLogout) {
      this.$auth.reset();
    }
    this.requestHandler.initializeRequestInterceptor(this.options.endpoints.token);
    const redirected = await this._handleCallback();
    if (!redirected) {
      return this.$auth.fetchUserOnce();
    }
  }
  reset() {
    this.$auth.setUser(false);
    this.token.reset();
    this.refreshToken.reset();
    this.requestHandler.reset();
  }
  async login(_opts = {}) {
    const opts = {
      protocol: "oauth2",
      response_type: this.options.responseType,
      access_type: this.options.accessType,
      client_id: this.options.clientId,
      redirect_uri: this.redirectURI,
      scope: this.scope,
      state: _opts.state || randomString(10),
      code_challenge_method: this.options.codeChallengeMethod,
      ..._opts.params
    };
    if (this.options.audience) {
      opts.audience = this.options.audience;
    }
    if (opts.response_type.includes("token") || opts.response_type.includes("id_token")) {
      opts.nonce = _opts.nonce || randomString(10);
    }
    if (opts.code_challenge_method) {
      switch (opts.code_challenge_method) {
        case "plain":
        case "S256":
          {
            const state = this.generateRandomString();
            this.$auth.$storage.setUniversal(this.name + ".pkce_state", state);
            const codeVerifier = this.generateRandomString();
            this.$auth.$storage.setUniversal(this.name + ".pkce_code_verifier", codeVerifier);
            const codeChallenge = await this.pkceChallengeFromVerifier(codeVerifier, opts.code_challenge_method === "S256");
            opts.code_challenge = window.encodeURIComponent(codeChallenge);
          }
          break;
      }
    }
    if (this.options.responseMode) {
      opts.response_mode = this.options.responseMode;
    }
    if (this.options.acrValues) {
      opts.acr_values = this.options.acrValues;
    }
    this.$auth.$storage.setUniversal(this.name + ".state", opts.state);
    const url = this.options.endpoints.authorization + "?" + encodeQuery(opts);
    window.location.replace(url);
  }
  logout() {
    if (this.options.endpoints.logout) {
      const opts = {
        client_id: this.options.clientId + "",
        logout_uri: this.logoutRedirectURI
      };
      const url = this.options.endpoints.logout + "?" + encodeQuery(opts);
      window.location.replace(url);
    }
    return this.$auth.reset();
  }
  async fetchUser() {
    if (!this.check().valid) {
      return;
    }
    if (!this.options.endpoints.userInfo) {
      this.$auth.setUser({});
      return;
    }
    const response = await this.$auth.requestWith(this.name, {
      url: this.options.endpoints.userInfo
    });
    this.$auth.setUser(getProp(response.data, this.options.user.property));
  }
  async _handleCallback() {
    if (this.$auth.options.redirect && normalizePath(this.$auth.ctx.route.path, this.$auth.ctx) !== normalizePath(this.$auth.options.redirect.callback, this.$auth.ctx)) {
      return;
    }
    if (true) {
      return;
    }
    const hash = parseQuery(this.$auth.ctx.route.hash.substr(1));
    const parsedQuery = Object.assign({}, this.$auth.ctx.route.query, hash);
    let token = parsedQuery[this.options.token.property];
    let refreshToken;
    if (this.options.refreshToken.property) {
      refreshToken = parsedQuery[this.options.refreshToken.property];
    }
    const state = this.$auth.$storage.getUniversal(this.name + ".state");
    this.$auth.$storage.setUniversal(this.name + ".state", null);
    if (state && parsedQuery.state !== state) {
      return;
    }
    if (this.options.responseType === "code" && parsedQuery.code) {
      let codeVerifier;
      if (this.options.codeChallengeMethod && this.options.codeChallengeMethod !== "implicit") {
        codeVerifier = this.$auth.$storage.getUniversal(this.name + ".pkce_code_verifier");
        this.$auth.$storage.setUniversal(this.name + ".pkce_code_verifier", null);
      }
      const response = await this.$auth.request({
        method: "post",
        url: this.options.endpoints.token,
        baseURL: "",
        data: encodeQuery({
          code: parsedQuery.code,
          client_id: this.options.clientId + "",
          redirect_uri: this.redirectURI,
          response_type: this.options.responseType,
          audience: this.options.audience,
          grant_type: this.options.grantType,
          code_verifier: codeVerifier
        })
      });
      token = getProp(response.data, this.options.token.property) || token;
      refreshToken = getProp(response.data, this.options.refreshToken.property) || refreshToken;
    }
    if (!token || !token.length) {
      return;
    }
    this.token.set(token);
    if (refreshToken && refreshToken.length) {
      this.refreshToken.set(refreshToken);
    }
    if (this.$auth.options.watchLoggedIn) {
      this.$auth.redirect("home", true);
      return true;
    }
  }
  async refreshTokens() {
    const refreshToken = this.refreshToken.get();
    if (!refreshToken) {
      return;
    }
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      this.$auth.reset();
      throw new ExpiredAuthSessionError();
    }
    this.requestHandler.clearHeader();
    const response = await this.$auth.request({
      method: "post",
      url: this.options.endpoints.token,
      baseURL: "",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: encodeQuery({
        refresh_token: removeTokenPrefix(refreshToken, this.options.token.type),
        scopes: this.scope,
        client_id: this.options.clientId + "",
        grant_type: "refresh_token"
      })
    }).catch((error) => {
      this.$auth.callOnError(error, { method: "refreshToken" });
      return Promise.reject(error);
    });
    this.updateTokens(response);
    return response;
  }
  updateTokens(response) {
    const token = getProp(response.data, this.options.token.property);
    const refreshToken = getProp(response.data, this.options.refreshToken.property);
    this.token.set(token);
    if (refreshToken) {
      this.refreshToken.set(refreshToken);
    }
  }
  async pkceChallengeFromVerifier(v, hashValue) {
    if (hashValue) {
      const hashed = await this._sha256(v);
      return this._base64UrlEncode(hashed);
    }
    return v;
  }
  generateRandomString() {
    const array = new Uint32Array(28);
    window.crypto.getRandomValues(array);
    return Array.from(array, (dec) => ("0" + dec.toString(16)).substr(-2)).join("");
  }
  _sha256(plain) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest("SHA-256", data);
  }
  _base64UrlEncode(str) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(str))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
}

const DEFAULTS$1 = {
  name: "openIDConnect",
  responseType: "code",
  grantType: "authorization_code",
  scope: ["openid", "profile", "offline_access"],
  idToken: {
    property: "id_token",
    maxAge: 1800,
    prefix: "_id_token.",
    expirationPrefix: "_id_token_expiration."
  },
  codeChallengeMethod: "S256"
};
class OpenIDConnectScheme extends runtime_Oauth2Scheme {
  constructor($auth, options, ...defaults) {
    super($auth, options, ...defaults, DEFAULTS$1);
    this.idToken = new runtime_IdToken(this, this.$auth.$storage);
    this.configurationDocument = new runtime_ConfigurationDocument(this, this.$auth.$storage);
  }
  updateTokens(response) {
    super.updateTokens(response);
    const idToken = getProp(response.data, this.options.idToken.property);
    if (idToken) {
      this.idToken.set(idToken);
    }
  }
  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false,
      refreshTokenExpired: false,
      idTokenExpired: false,
      isRefreshable: true
    };
    const token = this.token.sync();
    this.refreshToken.sync();
    this.idToken.sync();
    if (!token) {
      return response;
    }
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    const tokenStatus = this.token.status();
    const refreshTokenStatus = this.refreshToken.status();
    const idTokenStatus = this.idToken.status();
    if (refreshTokenStatus.expired()) {
      response.refreshTokenExpired = true;
      return response;
    }
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    if (idTokenStatus.expired()) {
      response.idTokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }
  async mounted() {
    await this.configurationDocument.init();
    const { tokenExpired, refreshTokenExpired } = this.check(true);
    if (refreshTokenExpired || tokenExpired && this.options.autoLogout) {
      this.$auth.reset();
    }
    this.requestHandler.initializeRequestInterceptor(this.options.endpoints.token);
    const redirected = await this._handleCallback();
    if (!redirected) {
      return this.$auth.fetchUserOnce();
    }
  }
  reset() {
    this.$auth.setUser(false);
    this.token.reset();
    this.idToken.reset();
    this.refreshToken.reset();
    this.requestHandler.reset();
    this.configurationDocument.reset();
  }
  logout() {
    if (this.options.endpoints.logout) {
      const opts = {
        id_token_hint: this.idToken.get(),
        post_logout_redirect_uri: this.logoutRedirectURI
      };
      const url = this.options.endpoints.logout + "?" + encodeQuery(opts);
      window.location.replace(url);
    }
    return this.$auth.reset();
  }
  async fetchUser() {
    if (!this.check().valid) {
      return;
    }
    if (this.idToken.get()) {
      const data2 = this.idToken.userInfo();
      this.$auth.setUser(data2);
      return;
    }
    if (!this.options.endpoints.userInfo) {
      this.$auth.setUser({});
      return;
    }
    const { data } = await this.$auth.requestWith(this.name, {
      url: this.options.endpoints.userInfo
    });
    this.$auth.setUser(data);
  }
  async _handleCallback() {
    if (this.$auth.options.redirect && normalizePath(this.$auth.ctx.route.path) !== normalizePath(this.$auth.options.redirect.callback)) {
      return;
    }
    if (true) {
      return;
    }
    const hash = parseQuery(this.$auth.ctx.route.hash.substr(1));
    const parsedQuery = Object.assign({}, this.$auth.ctx.route.query, hash);
    let token = parsedQuery[this.options.token.property];
    let refreshToken;
    if (this.options.refreshToken.property) {
      refreshToken = parsedQuery[this.options.refreshToken.property];
    }
    let idToken = parsedQuery[this.options.idToken.property];
    const state = this.$auth.$storage.getUniversal(this.name + ".state");
    this.$auth.$storage.setUniversal(this.name + ".state", null);
    if (state && parsedQuery.state !== state) {
      return;
    }
    if (this.options.responseType === "code" && parsedQuery.code) {
      let codeVerifier;
      if (this.options.codeChallengeMethod && this.options.codeChallengeMethod !== "implicit") {
        codeVerifier = this.$auth.$storage.getUniversal(this.name + ".pkce_code_verifier");
        this.$auth.$storage.setUniversal(this.name + ".pkce_code_verifier", null);
      }
      const response = await this.$auth.request({
        method: "post",
        url: this.options.endpoints.token,
        baseURL: "",
        data: encodeQuery({
          code: parsedQuery.code,
          client_id: this.options.clientId,
          redirect_uri: this.redirectURI,
          response_type: this.options.responseType,
          audience: this.options.audience,
          grant_type: this.options.grantType,
          code_verifier: codeVerifier
        })
      });
      token = getProp(response.data, this.options.token.property) || token;
      refreshToken = getProp(response.data, this.options.refreshToken.property) || refreshToken;
      idToken = getProp(response.data, this.options.idToken.property) || idToken;
    }
    if (!token || !token.length) {
      return;
    }
    this.token.set(token);
    if (refreshToken && refreshToken.length) {
      this.refreshToken.set(refreshToken);
    }
    if (idToken && idToken.length) {
      this.idToken.set(idToken);
    }
    this.$auth.redirect("home", true);
    return true;
  }
}

const DEFAULTS = {
  name: "refresh",
  endpoints: {
    refresh: {
      url: "/api/auth/refresh",
      method: "post"
    }
  },
  refreshToken: {
    property: "refresh_token",
    data: "refresh_token",
    maxAge: 60 * 60 * 24 * 30,
    required: true,
    tokenRequired: false,
    prefix: "_refresh_token.",
    expirationPrefix: "_refresh_token_expiration."
  },
  autoLogout: false
};
class RefreshScheme extends LocalScheme {
  constructor($auth, options) {
    super($auth, options, DEFAULTS);
    this.refreshRequest = null;
    this.refreshToken = new runtime_RefreshToken(this, this.$auth.$storage);
    this.refreshController = new RefreshController(this);
  }
  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false,
      refreshTokenExpired: false,
      isRefreshable: true
    };
    const token = this.token.sync();
    const refreshToken = this.refreshToken.sync();
    if (!token || !refreshToken) {
      return response;
    }
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    const tokenStatus = this.token.status();
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      response.refreshTokenExpired = true;
      return response;
    }
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }
  mounted() {
    return super.mounted({
      tokenCallback: () => {
        if (this.options.autoLogout) {
          this.$auth.reset();
        }
      },
      refreshTokenCallback: () => {
        this.$auth.reset();
      }
    });
  }
  refreshTokens() {
    if (!this.options.endpoints.refresh) {
      return Promise.resolve();
    }
    if (!this.check().valid) {
      return Promise.resolve();
    }
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      this.$auth.reset();
      throw new ExpiredAuthSessionError();
    }
    if (!this.options.refreshToken.tokenRequired) {
      this.requestHandler.clearHeader();
    }
    const endpoint = {
      data: {
        client_id: void 0,
        grant_type: void 0
      }
    };
    if (this.options.refreshToken.required && this.options.refreshToken.data) {
      endpoint.data[this.options.refreshToken.data] = this.refreshToken.get();
    }
    if (this.options.clientId) {
      endpoint.data.client_id = this.options.clientId;
    }
    if (this.options.grantType) {
      endpoint.data.grant_type = "refresh_token";
    }
    cleanObj(endpoint.data);
    this.refreshRequest = this.refreshRequest || this.$auth.request(endpoint, this.options.endpoints.refresh);
    return this.refreshRequest.then((response) => {
      this.updateTokens(response, { isRefreshing: true });
      return response;
    }).catch((error) => {
      this.$auth.callOnError(error, { method: "refreshToken" });
      return Promise.reject(error);
    }).finally(() => {
      this.refreshRequest = null;
    });
  }
  setUserToken(token, refreshToken) {
    this.token.set(token);
    if (refreshToken) {
      this.refreshToken.set(refreshToken);
    }
    return this.fetchUser();
  }
  reset({ resetInterceptor = true } = {}) {
    this.$auth.setUser(false);
    this.token.reset();
    this.refreshToken.reset();
    if (resetInterceptor) {
      this.requestHandler.reset();
    }
  }
  updateTokens(response, { isRefreshing = false, updateOnRefresh = true } = {}) {
    const token = this.options.token.required ? getProp(response.data, this.options.token.property) : true;
    const refreshToken = this.options.refreshToken.required ? getProp(response.data, this.options.refreshToken.property) : true;
    this.token.set(token);
    if (refreshToken && (!isRefreshing || isRefreshing && updateOnRefresh)) {
      this.refreshToken.set(refreshToken);
    }
  }
  initializeRequestInterceptor() {
    this.requestHandler.initializeRequestInterceptor(this.options.endpoints.refresh.url);
  }
}

class Auth0Scheme extends runtime_Oauth2Scheme {
  logout() {
    this.$auth.reset();
    const opts = {
      client_id: this.options.clientId + "",
      returnTo: this.logoutRedirectURI
    };
    const url = this.options.endpoints.logout + "?" + encodeQuery(opts);
    window.location.replace(url);
  }
}

class LaravelJWTScheme extends RefreshScheme {
  updateTokens(response, { isRefreshing = false, updateOnRefresh = false } = {}) {
    super.updateTokens(response, { isRefreshing, updateOnRefresh });
  }
}



// CONCATENATED MODULE: ./.nuxt/auth.js



// Active schemes

_nuxt_middleware.auth = authMiddleware;
/* harmony default export */ var auth = (function (ctx, inject) {
  // Options
  const options = {
    "resetOnError": false,
    "ignoreExceptions": false,
    "scopeKey": "scope",
    "rewriteRedirects": true,
    "fullPathRedirect": false,
    "watchLoggedIn": true,
    "redirect": {
      "login": "/login",
      "logout": "/",
      "home": "/",
      "callback": "/login"
    },
    "vuex": {
      "namespace": "auth"
    },
    "cookie": {
      "prefix": "auth.",
      "options": {
        "path": "/"
      }
    },
    "localStorage": {
      "prefix": "auth."
    },
    "defaultStrategy": ""
  };

  // Create a new Auth instance
  const $auth = new runtime_Auth(ctx, options);

  // Register strategies

  // Inject it to nuxt context as $auth
  inject('auth', $auth);
  ctx.$auth = $auth;

  // Initialize auth
  return $auth.init().catch(error => {
    if (false) {}
  });
});
// CONCATENATED MODULE: ./.nuxt/index.js













/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')
 // Source: ./vuetify/plugin.js (mode: 'all')
 // Source: ./bootstrap-vue.js (mode: 'all')
 // Source: ./nuxt-vue-select.js (mode: 'client')
 // Source: ./cookie-universal-nuxt.js (mode: 'all')
 // Source: ./axios.js (mode: 'all')
 // Source: ./nuxt.plugin.7d015f50.js (mode: 'all')
 // Source: ../plugins/vue-plyr (mode: 'client')
 // Source: ./auth.js (mode: 'all')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}
async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext);
  // Add this.$router into store actions/mutations
  store.$router = router;

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule;

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "cookingbeats",
      "render": {
        "csp": {
          "reportOnly": true,
          "hashAlgorithm": "sha256",
          "policies": {
            "default-src": ["'self'"],
            "img-src": ["https:", "*.google-analytics.com"],
            "worker-src": ["'self'", "blob:", "https:\u002F\u002Fwww.mercadolibre.com\u002F", "*.logrocket.io"],
            "style-src": ["'self'", "'unsafe-inline'", "https:\u002F\u002Fwww.mercadolibre.com\u002F"],
            "script-src": ["'self'", "'unsafe-inline'", "https:\u002F\u002Fwww.mercadolibre.com\u002F", "sentry.io", "*.sentry-cdn.com", "*.google-analytics.com", "*.logrocket.io"],
            "connect-src": ["https:\u002F\u002Fwww.mercadolibre.com\u002F", "sentry.io", "*.google-analytics.com"],
            "form-action": ["'self'"],
            "frame-ancestors": ["'self'"],
            "object-src": ["'self'"],
            "base-uri": ["https:\u002F\u002Fwww.mercadolibre.com\u002F"],
            "report-uri": ["https:\u002F\u002Fsentry.io\u002Fapi\u002F\u003Cproject\u003E\u002Fsecurity\u002F?sentry_key=\u003Ckey\u003E"]
          }
        }
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "stylesheet",
        "href": "main.css"
      }, {
        "rel": "stylesheet",
        "type": "text\u002Fcss",
        "href": "https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@braid\u002Fvue-formulate@2.5.3\u002Fdist\u002Fsnow.min.css"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fbootstrap@4.5.3\u002Fdist\u002Fcss\u002Fbootstrap.min.css"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Fstackpath.bootstrapcdn.com\u002Ffont-awesome\u002F4.7.0\u002Fcss\u002Ffont-awesome.min.css"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Material+Icons"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Material+Icons+Sharp"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fvuetify@2.x\u002Fdist\u002Fvuetify.min.css"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      }, {
        "rel": "stylesheet",
        "type": "text\u002Fcss",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"
      }, {
        "rel": "stylesheet",
        "type": "text\u002Fcss",
        "href": "https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"
      }],
      "script": [{
        "src": "https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.3.1.slim.min.js",
        "type": "text\u002Fjavascript"
      }, {
        "src": "https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fpopper.js\u002F1.14.3\u002Fumd\u002Fpopper.min.js",
        "type": "text\u002Fjavascript"
      }, {
        "src": "https:\u002F\u002Fstackpath.bootstrapcdn.com\u002Fbootstrap\u002F4.1.3\u002Fjs\u002Fbootstrap.min.js",
        "type": "text\u002Fjavascript"
      }, {
        "src": "https:\u002F\u002Fsdk.mercadopago.com\u002Fjs\u002Fv1",
        "type": "text\u002Fjavascript"
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };

  // Make app available into store via this.app
  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Add into store
    store[key] = app[key];

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);
  if (false) {}

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof vuetify_plugin === 'function') {
    await vuetify_plugin(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (false) {}
  if (typeof cookie_universal_nuxt === 'function') {
    await cookie_universal_nuxt(app.context, inject);
  }
  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./.nuxt/nuxt.plugin.7d015f50.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/nuxt.plugin.7d015f50.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (false) {}
  if (typeof auth === 'function') {
    await auth(app.context, inject);
  }

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/cookingbeats-nuxt/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  if (ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  }

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;

      // Stop recording store mutations
      ssrContext.unsetMutationObserver();
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Dispatch store nuxtServerInit
  */
  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  }
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Record store mutations for full-static after nuxtServerInit and Middleware
  ssrContext.nuxt.mutations = [];
  ssrContext.unsetMutationObserver = store.subscribe(m => {
    ssrContext.nuxt.mutations.push([m.type, m.payload]);
  });

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.delete-all.js");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.every.js");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.filter.js");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find.js");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find-key.js");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.includes.js");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.key-of.js");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-keys.js");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-values.js");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.merge.js");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.reduce.js");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.some.js");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.update.js");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("vue-numeric");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("js-sha256");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.array.last-item.js");

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ goTo; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ goto_Goto; });

// NAMESPACE OBJECT: ./node_modules/vuetify/lib/services/goto/easing-patterns.js
var easing_patterns_namespaceObject = {};
__webpack_require__.r(easing_patterns_namespaceObject);
__webpack_require__.d(easing_patterns_namespaceObject, "linear", function() { return linear; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInQuad", function() { return easeInQuad; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutQuad", function() { return easeOutQuad; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutQuad", function() { return easeInOutQuad; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInCubic", function() { return easeInCubic; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutCubic", function() { return easeOutCubic; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutCubic", function() { return easeInOutCubic; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInQuart", function() { return easeInQuart; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutQuart", function() { return easeOutQuart; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutQuart", function() { return easeInOutQuart; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInQuint", function() { return easeInQuint; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutQuint", function() { return easeOutQuint; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutQuint", function() { return easeInOutQuint; });

// EXTERNAL MODULE: ./node_modules/vuetify/lib/services/service/index.js
var service = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/goto/easing-patterns.js
// linear
const linear = t => t; // accelerating from zero velocity

const easeInQuad = t => t ** 2; // decelerating to zero velocity

const easeOutQuad = t => t * (2 - t); // acceleration until halfway, then deceleration

const easeInOutQuad = t => t < 0.5 ? 2 * t ** 2 : -1 + (4 - 2 * t) * t; // accelerating from zero velocity

const easeInCubic = t => t ** 3; // decelerating to zero velocity

const easeOutCubic = t => --t ** 3 + 1; // acceleration until halfway, then deceleration

const easeInOutCubic = t => t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; // accelerating from zero velocity

const easeInQuart = t => t ** 4; // decelerating to zero velocity

const easeOutQuart = t => 1 - --t ** 4; // acceleration until halfway, then deceleration

const easeInOutQuart = t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t; // accelerating from zero velocity

const easeInQuint = t => t ** 5; // decelerating to zero velocity

const easeOutQuint = t => 1 + --t ** 5; // acceleration until halfway, then deceleration

const easeInOutQuint = t => t < 0.5 ? 16 * t ** 5 : 1 + 16 * --t ** 5;
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/goto/util.js
// Return target's cumulative offset from the top
function getOffset(target) {
  if (typeof target === 'number') {
    return target;
  }
  let el = $(target);
  if (!el) {
    throw typeof target === 'string' ? new Error(`Target element "${target}" not found.`) : new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${type(target)} instead.`);
  }
  let totalOffset = 0;
  while (el) {
    totalOffset += el.offsetTop;
    el = el.offsetParent;
  }
  return totalOffset;
}
function getContainer(container) {
  const el = $(container);
  if (el) return el;
  throw typeof container === 'string' ? new Error(`Container element "${container}" not found.`) : new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${type(container)} instead.`);
}
function type(el) {
  return el == null ? el : el.constructor.name;
}
function $(el) {
  if (typeof el === 'string') {
    return document.querySelector(el);
  } else if (el && el._isVue) {
    return el.$el;
  } else if (el instanceof HTMLElement) {
    return el;
  } else {
    return null;
  }
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/goto/index.js
// Extensions
 // Utilities



function goTo(_target, _settings = {}) {
  const settings = {
    container: document.scrollingElement || document.body || document.documentElement,
    duration: 500,
    offset: 0,
    easing: 'easeInOutCubic',
    appOffset: true,
    ..._settings
  };
  const container = getContainer(settings.container);
  /* istanbul ignore else */

  if (settings.appOffset && goTo.framework.application) {
    const isDrawer = container.classList.contains('v-navigation-drawer');
    const isClipped = container.classList.contains('v-navigation-drawer--clipped');
    const {
      bar,
      top
    } = goTo.framework.application;
    settings.offset += bar;
    /* istanbul ignore else */

    if (!isDrawer || isClipped) settings.offset += top;
  }
  const startTime = performance.now();
  let targetLocation;
  if (typeof _target === 'number') {
    targetLocation = getOffset(_target) - settings.offset;
  } else {
    targetLocation = getOffset(_target) - getOffset(container) - settings.offset;
  }
  const startLocation = container.scrollTop;
  if (targetLocation === startLocation) return Promise.resolve(targetLocation);
  const ease = typeof settings.easing === 'function' ? settings.easing : easing_patterns_namespaceObject[settings.easing];
  /* istanbul ignore else */

  if (!ease) throw new TypeError(`Easing function "${settings.easing}" not found.`); // Cannot be tested properly in jsdom

  /* istanbul ignore next */

  return new Promise(resolve => requestAnimationFrame(function step(currentTime) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.abs(settings.duration ? Math.min(timeElapsed / settings.duration, 1) : 1);
    container.scrollTop = Math.floor(startLocation + (targetLocation - startLocation) * ease(progress));
    const clientHeight = container === document.body ? document.documentElement.clientHeight : container.clientHeight;
    const reachBottom = clientHeight + container.scrollTop >= container.scrollHeight;
    if (progress === 1 ||
    // Need to go lower but reach bottom
    targetLocation > container.scrollTop && reachBottom) {
      return resolve(targetLocation);
    }
    requestAnimationFrame(step);
  }));
}
goTo.framework = {};
goTo.init = () => {};
class goto_Goto extends service["a" /* Service */] {
  constructor() {
    super();
    return goTo;
  }
}
goto_Goto.property = 'goTo';

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("vue2-daterange-picker");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("vue-pagination-2");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("js-base64");

/***/ }),
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, exports) {

module.exports = require("vue-plyr");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map