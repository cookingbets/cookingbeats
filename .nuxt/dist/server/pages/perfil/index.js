exports.ids = [36,19];
exports.modules = {

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Perfil/header.vue?vue&type=template&id=4076be65&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-container', [_c('b-nav', [_c('b-nav-item', [_vm.see ? _c('Nuxt-link', {
    attrs: {
      "to": "#"
    }
  }, [_vm._v("Feed")]) : _vm._e()], 1), _vm._v(" "), _c('b-nav-item', [_vm.see ? _c('Nuxt-link', {
    attrs: {
      "to": "/perfil/instrumental"
    }
  }, [_vm._v("Instrumentales")]) : _vm._e()], 1), _vm._v(" "), _c('b-nav-item', [_c('Nuxt-link', {
    attrs: {
      "to": "/perfil/configuracion"
    }
  }, [_vm._v("Configuracion")])], 1), _vm._v(" "), _c('b-nav-item', [_c('Nuxt-link', {
    attrs: {
      "to": "/perfil/compras"
    }
  }, [_vm._v("Compras")])], 1), _vm._v(" "), _c('b-nav-item', [_c('Nuxt-link', {
    attrs: {
      "to": "/perfil/me_gusta"
    }
  }, [_vm._v("Instrumentales que me Gustan")])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Perfil/header.vue?vue&type=template&id=4076be65&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Perfil/header.vue?vue&type=script&lang=js&
/* harmony default export */ var headervue_type_script_lang_js_ = ({
  name: "hader",
  data() {
    return {
      see: true
    };
  },
  mounted() {
    this.see = this.$cookiz.get("usuario").vendedor ? true : false;
  }
});
// CONCATENATED MODULE: ./components/Perfil/header.vue?vue&type=script&lang=js&
 /* harmony default export */ var Perfil_headervue_type_script_lang_js_ = (headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Perfil/header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Perfil_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ec54986a"
  
)

/* harmony default export */ var header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/perfil/index.vue?vue&type=template&id=da6a65a2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Header'), _vm._ssrNode(" "), _c('b-container')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/perfil/index.vue?vue&type=template&id=da6a65a2&

// EXTERNAL MODULE: ./components/Perfil/header.vue + 4 modules
var header = __webpack_require__(122);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/perfil/index.vue?vue&type=script&lang=js&

/* harmony default export */ var perfilvue_type_script_lang_js_ = ({
  name: "perfil",
  middleware: "login",
  components: {
    Header: header["default"]
  },
  mounted() {
    console.log(this.$cookiz.getAll());
  }
});
// CONCATENATED MODULE: ./pages/perfil/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_perfilvue_type_script_lang_js_ = (perfilvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/perfil/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_perfilvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4d6819ae"
  
)

/* harmony default export */ var perfil = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map