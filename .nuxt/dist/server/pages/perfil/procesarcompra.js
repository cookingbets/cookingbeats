exports.ids = [42];
exports.modules = {

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/perfil/procesarcompra.vue?vue&type=template&id=5fb5ffd6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/perfil/procesarcompra.vue?vue&type=template&id=5fb5ffd6&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/perfil/procesarcompra.vue?vue&type=script&lang=js&

/* harmony default export */ var procesarcompravue_type_script_lang_js_ = ({
  name: "compras",
  mounted() {
    alert(this.$route.params.external_reference);
    console.log(this.$route);
    external_axios_default.a.get(`http://localhost:3000/compras/carga?external_reference=${this.$route.query.external_reference}`, {
      headers: {
        "access-token": this.$cookies.get("usuario").token
      }
    }).then(result => {
      if (result.status == 200) {
        this.$router.push("/perfil/compras");
      }
    }).catch(err => {
      console.log(err);
    });
  }
});
// CONCATENATED MODULE: ./pages/perfil/procesarcompra.vue?vue&type=script&lang=js&
 /* harmony default export */ var perfil_procesarcompravue_type_script_lang_js_ = (procesarcompravue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/perfil/procesarcompra.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  perfil_procesarcompravue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "67f68472"
  
)

/* harmony default export */ var procesarcompra = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=procesarcompra.js.map