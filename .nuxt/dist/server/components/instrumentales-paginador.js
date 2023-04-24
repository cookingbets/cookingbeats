exports.ids = [13];
exports.modules = {

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(224);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("d41aa5fc", content, true, context)
};

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paginador_vue_vue_type_style_index_0_id_26f8f19c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(191);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paginador_vue_vue_type_style_index_0_id_26f8f19c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paginador_vue_vue_type_style_index_0_id_26f8f19c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paginador_vue_vue_type_style_index_0_id_26f8f19c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paginador_vue_vue_type_style_index_0_id_26f8f19c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".paginador .actual{background-color:var(--color6);color:var(--color1)}.paginador{display:flex;justify-content:center}.paginador div{display:flex;flex-direction:row;list-style:none}.paginador button{background-color:var(--color2);width:40px;height:40px;display:block;text-align:center;vertical-align:middle;border:none}.boton-borde-izquierda{border-radius:10px 0 0 10px}.boton-borde-derecha{border-radius:0 10px 10px 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Instrumentales/paginador.vue?vue&type=template&id=26f8f19c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "paginador"
  }, [_vm._ssrNode((_vm.pagina < _vm.cantidadPorPagina ? "<div>" + (_vm.pagina > 1 ? "<button class=\"boton-borde-izquierda\">&lt;</button>" : "<button class=\"boton-borde-izquierda\">-</button>") + " " + _vm._ssrList(_vm.paginas, function (i) {
    return "<div>" + (i == _vm.paginas ? "<button class=\"actual\">" + _vm._ssrEscape("\n        " + _vm._s(i) + "\n      ") + "</button>" : "<button>" + _vm._ssrEscape("\n        " + _vm._s(i) + "\n      ") + "</button>") + "</div>";
  }) + " <button class=\"boton-borde-derecha\">&gt;</button></div>" : "<!---->") + " " + (_vm.pagina > _vm.cantidadPorPagina && _vm.pagina < _vm.total - _vm.cantidadPorPagina ? "<div>" + (_vm.pagina > 1 ? "<button class=\"boton-borde-izquierda\">&lt;</button>" : "<!---->") + " " + _vm._ssrList(_vm.numeros, function (numero) {
    return "<div>" + (numero == _vm.pagina ? "<button class=\"actual\">" + _vm._ssrEscape("\n        " + _vm._s(numero) + "\n      ") + "</button>" : "<button>" + _vm._ssrEscape("\n        " + _vm._s(numero) + "\n      ") + "</button>") + "</div>";
  }) + " <button class=\"boton-borde-derecha\">&gt;</button></div>" : "<div>" + (_vm.pagina > 1 ? "<button class=\"boton-borde-izquierda\">&lt;</button>" : "<!---->") + " " + _vm._ssrList(_vm.numeros, function (numero) {
    return "<div>" + (numero == _vm.pagina ? "<button class=\"actual\">" + _vm._ssrEscape("\n        " + _vm._s(numero) + "\n      ") + "</button>" : "<button>" + _vm._ssrEscape("\n        " + _vm._s(numero) + "\n      ") + "</button>") + "</div>";
  }) + " " + (_vm.pagina < this.total ? "<button class=\"boton-borde-derecha\">&gt;</button>" : "<button class=\"boton-borde-derecha\">-</button>") + "</div>"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Instrumentales/paginador.vue?vue&type=template&id=26f8f19c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Instrumentales/paginador.vue?vue&type=script&lang=js&
/* harmony default export */ var paginadorvue_type_script_lang_js_ = ({
  name: "paginador",
  data() {
    return {
      paginas: 0,
      numeros: []
    };
  },
  props: {
    total: Number,
    cantidadPorPagina: Number,
    pagina: Number
  },
  mounted() {
    this.paginas = Math.round(this.total / this.cantidadPorPagina);
    if (this.pagina <= this.cantidadPorPagina) for (var i = 1; i <= this.cantidadPorPagina; i++) this.numeros.push(i);else if (this.pagina > this.cantidadPorPagina && this.pagina < this.paginas - this.cantidadPorPagina) {
      if (this.cantidadPorPagina % 2 == 1) {
        for (var i = this.pagina - Math.floor(this.cantidadPorPagina / 2); i <= this.pagina + Math.floor(this.cantidadPorPagina / 2); i++) {
          this.numeros.push(i);
        }
      } else {
        for (var i = this.pagina - Math.floor(this.cantidadPorPagina / 2) + 1; i <= this.pagina + Math.floor(this.cantidadPorPagina / 2); i++) this.numeros.push(i);
      }
    } else if (this.pagina >= this.paginas - this.cantidadPorPagina) for (var i = this.pagina - this.cantidadPorPagina; i <= this.paginas; i++) this.numeros.push(i);
  }
});
// CONCATENATED MODULE: ./components/Instrumentales/paginador.vue?vue&type=script&lang=js&
 /* harmony default export */ var Instrumentales_paginadorvue_type_script_lang_js_ = (paginadorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Instrumentales/paginador.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(223)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Instrumentales_paginadorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "dd6b2832"
  
)

/* harmony default export */ var paginador = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=instrumentales-paginador.js.map