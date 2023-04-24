exports.ids = [14];
exports.modules = {

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(139);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2dfabed6", content, true, context)
};

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reproductor_vue_vue_type_style_index_0_id_6230e59c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reproductor_vue_vue_type_style_index_0_id_6230e59c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reproductor_vue_vue_type_style_index_0_id_6230e59c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reproductor_vue_vue_type_style_index_0_id_6230e59c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reproductor_vue_vue_type_style_index_0_id_6230e59c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".reproductor{position:fixed;display:flex;flex-direction:row;align-items:center;justify-content:space-between;flex-wrap:wrap;z-index:1;bottom:0;left:0;width:100%;min-height:100px;background-color:var(--color4);border-radius:20px 20px 0 0}.informacion{display:flex;justify-content:space-around;width:300px;font-size:18px}.audio{width:50%;min-width:320px}.control{width:300px}.informacion img{height:90px;border-radius:10px}.plyr__controls{background-color:var(--color4)!important;color:var(--color1)!important}.plyr__controls input[type=range]{color:var(--color2)!important}.plyr__control:hover,.plyr__control[aria-expanded=true]{background-color:var(--color6)!important}.plyr__menu__container div{background-color:var(--color4)!important}.plyr__menu__container div,.plyr__menu__container span{color:var(--color1)!important}@media (max-width:768px){.reproductor{justify-content:center;flex-direction:column}.reproductor div{width:90%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Instrumentales/reproductor.vue?vue&type=template&id=6230e59c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "reproductor",
    style: _vm.style,
    attrs: {
      "id": "reproductor"
    }
  }, [_vm._ssrNode("<div class=\"informacion\">" + (_vm.img != null ? "<img" + _vm._ssrAttr("src", _vm.img) + " alt>" : "<!---->") + " <div>" + (_vm.vendedor != null ? "<i>" + _vm._ssrEscape(_vm._s(_vm.vendedor.nombre)) + "</i>" : "<!---->") + "</div></div> "), _vm._ssrNode("<div class=\"audio\">", "</div>", [_c('vue-plyr', [_c('audio', {
    attrs: {
      "src": _vm.sourse,
      "controls": "",
      "nodownload": "",
      "autoplay": "",
      "buffered": ""
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"control\">", "</div>", [_c('b-button', {
    staticClass: "boton",
    on: {
      "click": _vm.comprar
    }
  }, [_c('span', {
    staticClass: "material-symbols-outlined"
  }, [_vm._v("\n        shopping_bag\n      ")])]), _vm._ssrNode(" "), _c('b-button', {
    staticClass: "boton"
  }, [_c('span', {
    staticClass: "material-icons",
    staticStyle: {
      "size": "10pt"
    }
  }, [_vm._v("thumb_up")]), _c('b-badge', {
    attrs: {
      "variant": "light"
    }
  }, [_vm._v(_vm._s(_vm.like))])], 1)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Instrumentales/reproductor.vue?vue&type=template&id=6230e59c&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Instrumentales/reproductor.vue?vue&type=script&lang=js&

/* harmony default export */ var reproductorvue_type_script_lang_js_ = ({
  name: "reproductor",
  components: {
    [ false && false]: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 88, 7))
  },
  data() {
    return {
      id: null,
      img: null,
      sourse: "",
      title: null,
      description: null,
      precio: null,
      categoria: null,
      bpm: null,
      escala: null,
      vendedor: null,
      like: null,
      style: "bottom: -100px"
    };
  },
  methods: {
    async play(id, sourse, img, title, descripcion, precio, categoria, bpm, escala, vendedor, like) {
      this.id = id;
      this.sourse = sourse;
      this.img = img;
      this.title = title;
      this.description = descripcion;
      this.precio = precio;
      this.categoria = categoria;
      this.bpm = bpm;
      this.escala = escala;
      this.vendedor = vendedor;
      this.like = like;
      var audio = document.querySelector("audio");
      audio.load();
      this.style = "bottom:0px";
    },
    varlidar: function () {
      return this.$cookiz.get('usuario') != undefined;
    },
    comprar: async function () {
      if (this.varlidar()) {
        var usuario = this.$cookiz.get('usuario');
        this.$router.push(`/compra/${this.id}`);
      } else {
        this.$router.push("/login");
      }
    },
    mg() {
      if (this.varlidar) {
        external_axios_default.a.post(`${this.$axios.defaults.baseURL}instrumental/like/${this.instrumental.id}`, {}, {
          headers: {
            "access-token": this.$cookiz.get('usuario').token
          }
        }).then(result => {
          if (result.status = 200) {
            this.instrumental.like == null ? 1 : this.instrumental.like++;
          }
        });
      } else {
        this.$router.push("/login");
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Instrumentales/reproductor.vue?vue&type=script&lang=js&
 /* harmony default export */ var Instrumentales_reproductorvue_type_script_lang_js_ = (reproductorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Instrumentales/reproductor.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(138)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Instrumentales_reproductorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e0f700b6"
  
)

/* harmony default export */ var reproductor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=instrumentales-reproductor.js.map