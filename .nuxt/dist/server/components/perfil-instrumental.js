exports.ids = [20];
exports.modules = {

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Perfil/instrumental.vue?vue&type=template&id=6dfbee96&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-modal', {
    attrs: {
      "size": "xl",
      "id": "instrumental_data",
      "title": _vm.data.nombre
    }
  }, [_c('b-row', [_c('b-col', [_c('b-img', {
    attrs: {
      "thumbnail": "",
      "fluid": "",
      "src": _vm.data.minuatura
    }
  })], 1), _vm._v(" "), _c('b-col', [_c('b-row', [_c('b-col', [_c('audio', {
    attrs: {
      "src": _vm.data.mp3,
      "controlsList": "nodownload",
      "controls": ""
    }
  })])], 1), _vm._v(" "), _c('b-row', [_c('b-col', [_c('a', {
    staticClass: "btn btn-ligth",
    attrs: {
      "target": "_blank",
      "href": _vm.data.mp3,
      "download": ""
    }
  }, [_vm._v("\n              Mp3\n            ")])]), _vm._v(" "), _c('b-col', [_c('a', {
    staticClass: "btn btn-ligth",
    attrs: {
      "href": _vm.data.wav,
      "download": ""
    }
  }, [_vm._v("\n              Wav\n            ")])])], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Perfil/instrumental.vue?vue&type=template&id=6dfbee96&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Perfil/instrumental.vue?vue&type=script&lang=js&

/* harmony default export */ var instrumentalvue_type_script_lang_js_ = ({
  name: "instrumental_modal",
  data() {
    return {
      data: {
        nombre: null,
        miniatura: null
      }
    };
  },
  methods: {
    load: function (instrumental) {
      this.data = instrumental;
    }
  }
});
// CONCATENATED MODULE: ./components/Perfil/instrumental.vue?vue&type=script&lang=js&
 /* harmony default export */ var Perfil_instrumentalvue_type_script_lang_js_ = (instrumentalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Perfil/instrumental.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Perfil_instrumentalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2e448490"
  
)

/* harmony default export */ var instrumental = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=perfil-instrumental.js.map