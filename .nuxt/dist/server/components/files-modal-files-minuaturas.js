exports.ids = [5];
exports.modules = {

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(222);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("db37c9d6", content, true, context)
};

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalFilesMinuaturas_vue_vue_type_style_index_0_id_0895b368_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(190);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalFilesMinuaturas_vue_vue_type_style_index_0_id_0895b368_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalFilesMinuaturas_vue_vue_type_style_index_0_id_0895b368_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalFilesMinuaturas_vue_vue_type_style_index_0_id_0895b368_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalFilesMinuaturas_vue_vue_type_style_index_0_id_0895b368_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".eliminar{width:30px;height:30px;background-color:grey;border-radius:30px;text-align:center;align-items:baseline;padding:2px}.eliminar span{font-size:25px}#dropzone{border:3px dashed #dcdcdc;border-radius:10px;background-color:transparent}.dz-file-preview{background-color:var(--color2);border:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Files/ModalFilesMinuaturas.vue?vue&type=template&id=0895b368&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-button', {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.modalinstrumentales",
      modifiers: {
        "modalinstrumentales": true
      }
    }]
  }, [_c('span', {
    staticClass: "material-symbols-outlined"
  }, [_vm._v("\n            image\n        ")])]), _vm._ssrNode(" "), _c('b-modal', {
    attrs: {
      "id": "modalinstrumentales",
      "size": "xl",
      "title": "BootstrapVue",
      "header-bg-variant": "dark",
      "body-bg-variant": "dark",
      "footer-bg-variant": "dark"
    }
  }, [_c('b-row', [_c('b-col', [_c('b-form-file', {
    attrs: {
      "placeholder": "agrege una minuatura",
      "accept": ".png, .jpg"
    },
    model: {
      value: _vm.minuatura,
      callback: function ($$v) {
        _vm.minuatura = $$v;
      },
      expression: "minuatura"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "mt-2"
  }, [_vm._v("Miniatura Cargada: "), _c('b', [_vm._v(_vm._s(_vm.minuatura ? _vm.minuatura.name : ''))])])], 1), _vm._v(" "), _c('b-col', [_c('b-button', {
    on: {
      "click": _vm.cargarMiniatura
    }
  }, [_c('span', {
    staticClass: "material-symbols-outlined"
  }, [_vm._v("\n                        upload\n                    ")])])], 1)], 1), _vm._v(" "), _c('b-row', [_c('b-card-group', {
    attrs: {
      "columns": ""
    }
  }, _vm._l(_vm.files, function (miniatura, i) {
    return _c('b-card', {
      key: i,
      attrs: {
        "img-src": miniatura.url
      },
      on: {
        "click": function ($event) {
          return _vm.seleccionarMinuatura(miniatura.id);
        }
      }
    }, [_c('b-card-text', [_c('button', {
      staticClass: "eliminar"
    }, [_c('span', {
      staticClass: "material-symbols-outlined"
    }, [_vm._v("\n                                delete\n                            ")])])])], 1);
  }), 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Files/ModalFilesMinuaturas.vue?vue&type=template&id=0895b368&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Files/ModalFilesMinuaturas.vue?vue&type=script&lang=js&

/* harmony default export */ var ModalFilesMinuaturasvue_type_script_lang_js_ = ({
  name: "modalfiles",
  props: {
    type: String
  },
  components: {},
  data() {
    return {
      minuatura: null
    };
  },
  mounted() {
    external_axios_default.a.get(`${this.$axios.defaults.baseURL}files/minuaturas`, {
      headers: {
        "access-token": this.$cookiz.get("usuario").token,
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.status == 200) {
        console.log(response.data);
        this.files = response.data.rows;
      }
    }).catch(err => {
      console.log(err);
    });
  },
  methods: {
    seleccionarMinuatura(id) {
      this.$emit('seleccionarMinuatura', id);
    },
    async cargarMiniatura() {
      var miniatura = await this.loadFile("miniatura", `${this.$axios.defaults.baseURL}upload/miniatura`, this.minuatura);
    },
    loadFile: async function (name, url, file) {
      console.log("cargando el instrumental");
      var retorno = null;
      const form = new FormData();
      form.append(name, file);
      try {
        retorno = await external_axios_default.a.post(url, form, {
          headers: {
            "access-token": this.$cookiz.get("usuario").token,
            "Content-Type": "application/json"
          }
        });
        retorno = retorno.data;
      } catch (err) {
        console.log(err);
      }
      console.log("cargando el instrumental!!");
      return retorno;
    }
  }
});
// CONCATENATED MODULE: ./components/Files/ModalFilesMinuaturas.vue?vue&type=script&lang=js&
 /* harmony default export */ var Files_ModalFilesMinuaturasvue_type_script_lang_js_ = (ModalFilesMinuaturasvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Files/ModalFilesMinuaturas.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(221)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Files_ModalFilesMinuaturasvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1f7acf7c"
  
)

/* harmony default export */ var ModalFilesMinuaturas = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=files-modal-files-minuaturas.js.map