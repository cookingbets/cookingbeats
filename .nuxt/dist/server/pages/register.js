exports.ids = [44];
exports.modules = {

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(211);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0f6a81c8", content, true, context)
};

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_66c24bce_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_66c24bce_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_66c24bce_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_66c24bce_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_66c24bce_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-image-register{background-image:url(/producer_equipment.jpg);background-size:cover;background-position:50%;animation:myfirst 1.2s}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=template&id=66c24bce&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-fluid"
  }, [_vm._ssrNode("<div class=\"row no-gutter\">", "</div>", [_vm._ssrNode("<div class=\"col-md-8 d-none d-md-flex bg-image-register\"></div> "), _vm._ssrNode("<div class=\"col-md-4\">", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "/"
    }
  }, [_c('span', {
    staticClass: "material-symbols-outlined"
  }, [_vm._v("\n          arrow_back_ios\n        ")])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"login d-flex align-items-center py-5\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-10 col-xl-7 mx-auto\">", "</div>", [_vm._ssrNode("<div class=\"d-flex justify-content-center\"><img src=\"/icons/logo.png\" alt width=\"80px\"></div> <br> "), _c('b-form', [_c('b-form-group', {
    attrs: {
      "label": "Nombre"
    }
  }, [_c('FormulateInput', {
    attrs: {
      "wrapper-class": ['input_form'],
      "type": "text",
      "validation": "required"
    },
    model: {
      value: _vm.nombre,
      callback: function ($$v) {
        _vm.nombre = $$v;
      },
      expression: "nombre"
    }
  })], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "label": "Email"
    }
  }, [_c('b-form-input', {
    attrs: {
      "type": "email",
      "required": ""
    },
    model: {
      value: _vm.email,
      callback: function ($$v) {
        _vm.email = $$v;
      },
      expression: "email"
    }
  }), _vm._v(" "), _vm.inputerr.email ? _c('p', [_c('b', {
    staticClass: "err-input"
  }, [_vm._v("Ingrese un email.")])]) : _vm._e()], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "label": "Confirmar Email"
    }
  }, [_c('b-form-input', {
    attrs: {
      "type": "email",
      "required": ""
    },
    model: {
      value: _vm.confirmarEmail,
      callback: function ($$v) {
        _vm.confirmarEmail = $$v;
      },
      expression: "confirmarEmail"
    }
  }), _vm._v(" "), _vm.inputerr.confirmarEmail ? _c('p', [_c('b', {
    staticClass: "err-input"
  }, [_vm._v("Confirme el email.")])]) : _vm._e(), _vm._v(" "), _vm.inputerr.emailNoCoincide ? _c('p', [_c('b', {
    staticClass: "err-input"
  }, [_vm._v("Los emails no coinciden.")])]) : _vm._e(), _vm._v(" "), _vm.inputerr.emailValido ? _c('p', [_c('b', {
    staticClass: "err-input"
  }, [_vm._v("El email no es valido.")])]) : _vm._e()], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "label": "Contraseña"
    }
  }, [_c('b-form-input', {
    attrs: {
      "type": "password",
      "required": ""
    },
    on: {
      "blur": _vm.showErrContrasenia,
      "click": _vm.focusContrasenia
    },
    model: {
      value: _vm.contrasenia,
      callback: function ($$v) {
        _vm.contrasenia = $$v;
      },
      expression: "contrasenia"
    }
  }), _vm._v(" "), _vm.inputerr.contrasenia ? _c('p', [_c('b', {
    staticClass: "err-input"
  }, [_vm._v("Ingrese una contraseña.")])]) : _vm._e(), _vm._v(" "), _vm.inputerr.longitud ? _c('p', [_c('b', {
    staticClass: "err-input"
  }, [_vm._v("\n                      La contrasenia no es suficientemente larga tiene que tener mas de 6 caracteres.\n                    ")])]) : _vm._e(), _vm._v(" "), _vm.inputerr.mayusculas ? _c('p', [_c('b', {
    staticClass: "err-input"
  }, [_vm._v("\n                      La contraseña tiene que tener al menos una mayuscula.\n                    ")])]) : _vm._e(), _vm._v(" "), _vm.inputerr.numeros ? _c('p', [_c('b', {
    staticClass: "err-input"
  }, [_vm._v("\n                      La contraseña tiene que tener al menos un numero\n                    ")])]) : _vm._e(), _vm._v(" "), _vm.inputerr.caracteres ? _c('p', [_c('b', {
    staticClass: "err-input"
  }, [_vm._v("\n                      La contraseña tiene que tener al menos dos caracteres especiales.\n                    ")])]) : _vm._e()], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "label": "Confirmar Contrasenia"
    }
  }, [_c('b-form-input', {
    attrs: {
      "type": "password",
      "required": ""
    },
    model: {
      value: _vm.confirmarContrasenia,
      callback: function ($$v) {
        _vm.confirmarContrasenia = $$v;
      },
      expression: "confirmarContrasenia"
    }
  }), _vm._v(" "), _vm.inputerr.confirmarContrasenia ? _c('b', {
    staticClass: "err-input"
  }, [_vm._v("Confirme la contraseña.")]) : _vm._e(), _c('br')], 1), _vm._v(" "), _c('b-form-group', {
    staticClass: "container text-center"
  }, [_c('b-row', {}, [_c('b-col', {
    class: _vm.classComprador,
    on: {
      "click": _vm.mostrarComprador
    }
  }, [_vm._v("\n                      Comprador\n                      "), _c('span', {
    staticClass: "material-symbols-outlined"
  }, [_vm._v("\n                        shopping_cart\n                      ")])]), _vm._v(" "), _c('b-col', {
    class: _vm.classVendedor,
    on: {
      "click": _vm.mostrarProducto
    }
  }, [_vm._v("\n                      Productor\n                      "), _c('span', {
    staticClass: "material-symbols-outlined"
  }, [_vm._v("\n                        store\n                      ")])])], 1)], 1), _vm._v(" "), _c('b-form-group', [_vm._v("\n                  " + _vm._s(_vm.terminosYCondiciones) + "\n                  \n                    "), _c('b-form-checkbox', {
    attrs: {
      "value": "true",
      "unchecked-value": "false"
    },
    model: {
      value: _vm.terminosYCondiciones,
      callback: function ($$v) {
        _vm.terminosYCondiciones = $$v;
      },
      expression: "terminosYCondiciones"
    }
  }, [_vm._v("Acepto los terminos y condiciones")])], 1), _vm._v(" "), _c('b-button', {
    staticClass: "rounded-pill",
    attrs: {
      "block": ""
    },
    on: {
      "blur": _vm.blurRegistro,
      "click": _vm.registrar
    }
  }, [_vm._v("Registrar\n                  ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h6', [_vm._v("\n                  ¿Ya tenés cuenta?"), _c('a', [_c('nuxt-link', {
    attrs: {
      "to": "/login"
    }
  }, [_vm._v(" Entrar")])], 1)])], 1)], 2)])])])], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/register.vue?vue&type=template&id=66c24bce&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "js-sha256"
var external_js_sha256_ = __webpack_require__(80);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=script&lang=js&


/* harmony default export */ var registervue_type_script_lang_js_ = ({
  name: "register",
  layout: "ingreso",
  data() {
    return {
      see: true,
      productor: false,
      nombre: "",
      email: "",
      confirmarEmail: "",
      contrasenia: "",
      confirmarContrasenia: "",
      terminosYCondiciones: false,
      classComprador: "selected border rounded-pill",
      classVendedor: "notSelected",
      inputerr: {
        nombre: false,
        email: false,
        confirmarEmail: false,
        contrasenia: false,
        confirmarContrasenia: false,
        longitud: false,
        mayusculas: false,
        numeros: false,
        caracteres: false,
        emailValido: false,
        emailNoCoincide: false
      }
    };
  },
  methods: {
    mostrarProducto: function () {
      this.productor = true;
      this.classVendedor = "selected border rounded-pill";
      this.classComprador = "notSelected";
    },
    mostrarComprador: function () {
      this.productor = false;
      this.classVendedor = "notSelected";
      this.classComprador = "selected border rounded-pill";
    },
    validar: function () {
      return this.nombre != "" && this.email != "" && this.confirmarEmail != "" && this.contrasenia != "" && this.confirmarContrasenia != "" && this.email == this.email && this.contrasenia == this.confirmarContrasenia;
    },
    validarEmail: function () {
      return this.email == this.confirmarEmail;
    },
    validarMayuscula(cadena) {
      return /([a-z,0-9,\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\=,\+,\[,\],\',\",\;,\:,\<,\>,\.,\.,\?,\¿]*[A-Z][0-9,\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\=,\+,\[,\],\',\",\;,\:,\<,\>,\.,\.,\?,\¿,a-z]*)/g.test(cadena);
    },
    validarNumero(cadena) {
      return /([a-z,A-Z,\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\=,\+,\[,\],\',\",\;,\:,\<,\>,\.,\.,\?,\¿]*[0-9][\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\=,\+,\[,\],\',\",\;,\:,\<,\>,\.,\.,\?,\¿,A-Z,a-z]*)/g.test(cadena);
    },
    validarCaracterEspecial(cadena) {
      return /([a-z,A-Z,0-9]*[\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\=,\+,\[,\],\',\",\;,\:,\<,\>,\.,\.,\?,\¿][a-z,A-Z,0-9]*[\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\=,\+,\[,\],\',\",\;,\:,\<,\>,\.,\.,\?][a-z,A-Z,0-9]*)/g.test(cadena);
    },
    validarConstraseña() {
      var retorno = true;
      if (this.contrasenia != this.confirmarContrasenia) retorno = false;
      if (this.contrasenia.length < 6) retorno = false;
      if (!this.validarMayuscula(this.contrasenia)) retorno = false;
      if (!this.validarNumero(this.contrasenia)) retorno = false;
      if (!this.validarCaracterEspecial(this.contrasenia)) retorno = false;
      return retorno;
    },
    showErrContrasenia() {
      if (this.contrasenia.length < 5) this.inputerr.longitud = true;
      if (!this.validarMayuscula(this.contrasenia)) this.inputerr.mayusculas = true;
      if (!this.validarNumero(this.contrasenia)) this.inputerr.numeros = true;
      if (!this.validarCaracterEspecial(this.contrasenia)) this.inputerr.caracteres = true;
    },
    focusContrasenia() {
      this.inputerr.longitud = false;
      this.inputerr.mayusculas = false;
      this.inputerr.numeros = false;
      this.inputerr.caracteres = false;
    },
    showErr() {
      if (this.nombre == "") this.inputerr.nombre = true;
      if (this.email == "") this.inputerr.email = true;
      if (this.confirmarEmail == "") this.inputerr.confirmarEmail = true;
      if (this.contrasenia == "") this.inputerr.contrasenia = true;
      if (this.confirmarContrasenia == "") this.inputerr.confirmarContrasenia = true;
    },
    blurRegistro() {
      this.inputerr.nombre = false;
      this.inputerr.email = false;
      this.inputerr.confirmarEmail = false;
      this.inputerr.contrasenia = false;
      this.inputerr.confirmarContrasenia = false;
    },
    registrar: function () {
      this.showErr();
      if (this.validar() && this.validarConstraseña() && this.validarEmail()) {
        var data = {
          productor: this.productor,
          nombre: this.nombre,
          email: this.email,
          contrasenia: this.hash(this.contrasenia)
        };
        external_axios_default.a.post(`${this.$axios.defaults.baseURL}auth/register`, data).then(result => {
          if (result.status == 200) {
            this.$cookiz.set("usuario", result.data, {
              path: "/",
              maxAge: 60 * 60 * 24 * 7
            });
            this.$router.push("/perfil");
          } else if (result.status == 203) {
            alert("El usuario y existe!!");
          } else {
            console.log(result);
          }
        }).catch(err => {
          console.log(err);
        });
      } else if (this.validarConstraseña()) {} else if (this.validarEmail()) {}
    },
    hash(pwd) {
      return external_js_sha256_["sha256"].create().update(pwd).hex();
    }
  }
});
// CONCATENATED MODULE: ./pages/register.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/register.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(210)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "34aa6b02"
  
)

/* harmony default export */ var register = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=register.js.map