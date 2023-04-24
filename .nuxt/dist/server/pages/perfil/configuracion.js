exports.ids = [35,16,19,21,22];
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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Perfil/validar.vue?vue&type=template&id=01343ee8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-button', {
    on: {
      "click": _vm.evaluar
    }
  }, [_vm._v("\n    validar\n  ")]), _vm._ssrNode(" "), _c('b-alert', {
    attrs: {
      "variant": "info",
      "dismissible": ""
    },
    model: {
      value: _vm.aprobado,
      callback: function ($$v) {
        _vm.aprobado = $$v;
      },
      expression: "aprobado"
    }
  }, [_vm._v("\n    Su validacion ya fue aprobada\n  ")]), _vm._ssrNode(" "), _c('b-alert', {
    attrs: {
      "variant": "info",
      "dismissible": ""
    },
    model: {
      value: _vm.enProcesso,
      callback: function ($$v) {
        _vm.enProcesso = $$v;
      },
      expression: "enProcesso"
    }
  }, [_vm._v("\n    Su validacion esta en proceso\n  ")]), _vm._ssrNode(" "), _c('b-modal', {
    attrs: {
      "id": "validarmodal",
      "title": "Validar",
      "body-bg-variant": "dark",
      "header-bg-variant": "dark",
      "footer-bg-variant": "dark"
    },
    on: {
      "ok": _vm.send
    }
  }, [_c('b-form-group', {
    attrs: {
      "label": "Dni 1"
    }
  }, [_c('b-form-file', {
    attrs: {
      "accept": ".jpg, .png, .jpeg"
    },
    model: {
      value: _vm.dni1,
      callback: function ($$v) {
        _vm.dni1 = $$v;
      },
      expression: "dni1"
    }
  })], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "label": "Dni 2"
    }
  }, [_c('b-form-file', {
    attrs: {
      "accept": ".jpg, .png, .jpeg"
    },
    model: {
      value: _vm.dni2,
      callback: function ($$v) {
        _vm.dni2 = $$v;
      },
      expression: "dni2"
    }
  })], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "label": "Perfil"
    }
  }, [_c('b-form-file', {
    attrs: {
      "accept": ".jpg, .png, .jpeg"
    },
    model: {
      value: _vm.perfil,
      callback: function ($$v) {
        _vm.perfil = $$v;
      },
      expression: "perfil"
    }
  })], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Perfil/validar.vue?vue&type=template&id=01343ee8&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Perfil/validar.vue?vue&type=script&lang=js&

/* harmony default export */ var validarvue_type_script_lang_js_ = ({
  name: "validar",
  data() {
    return {
      dni1: null,
      dni2: null,
      perfil: null,
      enProcesso: false,
      aprobado: false
    };
  },
  methods: {
    evaluar() {
      console.log(this.$axios.defaults.baseURL);
      external_axios_default.a.get(`${this.$axios.defaults.baseURL}verificar`, {
        headers: {
          "Content-Type": "multipart/form-data",
          "access-token": this.$cookiz.get('usuario').token
        }
      }).then(result => {
        if (result.status == 200) {
          if (result.data.validado) this.aprobado = true;else this.enProcesso = true;
        } else {
          this.$bvModal.show("validarmodal");
        }
      }).catch(err => {
        console.log(err);
      });
    },
    async send() {
      var dni1 = await this.loadFile("dni1", `${this.$axios.defaults.baseURL}upload/dni1`, this.dni1);
      var dni2 = await this.loadFile("dni2", `${this.$axios.defaults.baseURL}upload/dni2`, this.dni2);
      var perfil = await this.loadFile("perfil", `${this.$axios.defaults.baseURL}upload/perfil`, this.perfil);
      try {
        var data = {
          dni1: dni1.id,
          dni2: dni2.id,
          perfil: perfil.id
        };
        var retorno = await external_axios_default.a.post(`${this.$axios.defaults.baseURL}verificar`, data, {
          headers: {
            "access-token": this.$cookiz.get('usuario').token
          }
        });
        if (retorno.status == 200) {
          this.$bvModal.hide("validarmodal");
        }
      } catch (error) {
        console.log(error);
      }
    },
    loadFile: async function (name, url, file) {
      console.log("cargando el instrumental");
      var retorno = null;
      const form = new FormData();
      form.append(name, file);
      try {
        retorno = await external_axios_default.a.post(url, form, {
          headers: {
            "Content-Type": "multipart/form-data",
            "access-token": this.$cookiz.get('usuario').token
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
// CONCATENATED MODULE: ./components/Perfil/validar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Perfil_validarvue_type_script_lang_js_ = (validarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Perfil/validar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Perfil_validarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1c4858df"
  
)

/* harmony default export */ var validar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Mercadopago/carga.vue?vue&type=template&id=96dcfb9a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-button', {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.mercadopago",
      modifiers: {
        "mercadopago": true
      }
    }]
  }, [_vm._v("Launch demo modal")]), _vm._ssrNode(" "), _c('b-modal', {
    attrs: {
      "id": "mercadopago",
      "title": "Mercado Pago",
      "body-bg-variant": "dark",
      "header-bg-variant": "dark",
      "hide-footer": ""
    }
  }, [_c('div', [_c('p', {
    staticClass: "my-4"
  }, [_vm._v("\n      Para conectar mercado pago a nuestro sistema tiene que seguir las\n      siguientes instruecciones\n    ")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("\n          Obten las credenciales de\n        "), _c('a', {
    attrs: {
      "href": "https://www.mercadopago.com.ar/settings/account/credentials",
      "target": "_blank"
    }
  }, [_vm._v("mercado pago credenciales")])]), _vm._v(" "), _c('li', [_vm._v("\n          Copie la Public Key y el Access Token y coloquelo en los siguientes campos.\n      ")])]), _vm._v(" "), _c('div', [_c('b-form-group', {
    attrs: {
      "label": "Public Key"
    }
  }, [_c('FormulateInput', {
    attrs: {
      "type": "text",
      "name": "Public Key",
      "validation": [['matches', /TEST-[0-9,a-z]{8}-[0-9,a-z]{4}-[0-9,a-z]{4}-[0-9,a-z]{4}-[0-9,a-z]{12}$/]],
      "wrapper-class": ['input_form'],
      "required": ""
    },
    model: {
      value: _vm.public_key,
      callback: function ($$v) {
        _vm.public_key = $$v;
      },
      expression: "public_key"
    }
  })], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "label": "Access Token"
    }
  }, [_c('FormulateInput', {
    attrs: {
      "type": "password",
      "name": "Access Token",
      "wrapper-class": ['input_form'],
      "validation": [['matches', /TEST-[0-9,a-z]{15}-[0-9,a-z]{6}-[0-9,a-z]{32}-[0-9,a-z]{10}/]],
      "required": ""
    },
    model: {
      value: _vm.access_token,
      callback: function ($$v) {
        _vm.access_token = $$v;
      },
      expression: "access_token"
    }
  })], 1), _vm._v(" "), _c('b-button', {
    attrs: {
      "variant": "outline-primary"
    },
    on: {
      "click": function ($event) {
        return _vm.cargarCredenciales();
      }
    }
  }, [_vm._v("Cargar Credenciales")])], 1)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Mercadopago/carga.vue?vue&type=template&id=96dcfb9a&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Mercadopago/carga.vue?vue&type=script&lang=js&

/* harmony default export */ var cargavue_type_script_lang_js_ = ({
  data() {
    return {
      access_token: null,
      public_key: null
    };
  },
  methods: {
    cargarCredenciales() {
      if (this.public_key && this.access_token) {
        external_axios_default.a.post(`${this.$axios.defaults.baseURL}vendedor/mercadopago/`, {
          access_token: this.access_token,
          public_key: this.public_key
        }, {
          headers: {
            "access-token": this.$cookiz.get('usuario').token,
            "Content-Type": "application/json"
          }
        }).then(result => {
          if (result.status == 200) {
            this.$bvModal.hide("mercadopago");
          }
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Mercadopago/carga.vue?vue&type=script&lang=js&
 /* harmony default export */ var Mercadopago_cargavue_type_script_lang_js_ = (cargavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Mercadopago/carga.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Mercadopago_cargavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6609e3d6"
  
)

/* harmony default export */ var carga = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Perfil/nombre.vue?vue&type=template&id=4ddf61f0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<h3>Editar Perfil</h3> "), _c('b-form-group', {
    attrs: {
      "label": "Nombre",
      "description": "Nombre de usuario"
    }
  }, [_c('FormulateInput', {
    attrs: {
      "type": "text",
      "wrapper-class": ['input_form'],
      "placeholder": ""
    },
    model: {
      value: _vm.nombre,
      callback: function ($$v) {
        _vm.nombre = $$v;
      },
      expression: "nombre"
    }
  })], 1), _vm._ssrNode(" "), _c('b-form-group', {
    attrs: {
      "label": "Email",
      "description": "Email de usuario"
    }
  }, [_c('FormulateInput', {
    attrs: {
      "wrapper-class": ['input_form'],
      "type": "email"
    },
    model: {
      value: _vm.email,
      callback: function ($$v) {
        _vm.email = $$v;
      },
      expression: "email"
    }
  })], 1), _vm._ssrNode(" "), _c('b-form-group', [_c('b-button', {
    attrs: {
      "variant": "dark"
    },
    on: {
      "click": _vm.cambiarDatos
    }
  }, [_vm._v("Cambiar Datos")])], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Perfil/nombre.vue?vue&type=template&id=4ddf61f0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Perfil/nombre.vue?vue&type=script&lang=js&
/* harmony default export */ var nombrevue_type_script_lang_js_ = ({
  name: "nombre",
  props: {
    nombre: String,
    email: String
  },
  methods: {
    cambiarDatos: function () {
      if (this.$cookiz.get("usuario").nombreusuario != this.nombre) {
        axios.put("http://localhost:3000/usuario/edit/nombre", {
          nombre: this.nombre,
          id: this.$cookiz.get("usuario").id
        }, {
          headers: {
            "access-token": this.$cookiz.get("usuario").token
          }
        }).then(result => {
          if (result.status == 200) {
            this.$cookiz.set("usuario", this.$cookiz.get("usuario").nombreusuario = result.nombreusuario);
          }
        }).catch(err => {
          console.log(err);
        });
      }
      if (this.$cookiz.get("usuario").email != this.email) {
        axios.put("http://localhost:3000/usuario/edit/email", {
          email: this.email,
          id: this.$cookiz.get("usuario").id
        }, {
          headers: {
            "access-token": this.$cookiz.get("usuario").token
          }
        }).then(result => {
          if (result.status == 200) {
            this.$store.commit("email", this.usuario.email);
          }
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Perfil/nombre.vue?vue&type=script&lang=js&
 /* harmony default export */ var Perfil_nombrevue_type_script_lang_js_ = (nombrevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Perfil/nombre.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Perfil_nombrevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cf17b9f2"
  
)

/* harmony default export */ var nombre = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/perfil/configuracion.vue?vue&type=template&id=c067bd9a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Header'), _vm._ssrNode(" "), _c('b-container', [_c('b-row', [_c('b-col', [_c('hr'), _vm._v(" "), _c('h3', [_vm._v("Mercado Pago")]), _vm._v(" "), _c('mercadopago'), _vm._v(" "), _c('hr'), _vm._v(" "), _c('Nombre'), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', [_vm._v("Cambiar Contraseña")]), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "label": "Contraseña Actual",
      "description": "Ingrese su contraseña actual"
    }
  }, [_c('FormulateInput', {
    attrs: {
      "type": "password",
      "wrapper-class": ['input_form']
    },
    on: {
      "focus": _vm.inputfocus
    },
    model: {
      value: _vm.contraseña.actual,
      callback: function ($$v) {
        _vm.$set(_vm.contraseña, "actual", $$v);
      },
      expression: "contraseña.actual"
    }
  })], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "label": "Contraseña Nueva",
      "description": "Ingrese la nueva contraseña"
    }
  }, [_c('FormulateInput', {
    attrs: {
      "type": "password",
      "wrapper-class": ['input_form']
    },
    on: {
      "focus": _vm.inputfocus
    },
    model: {
      value: _vm.contraseña.nueva,
      callback: function ($$v) {
        _vm.$set(_vm.contraseña, "nueva", $$v);
      },
      expression: "contraseña.nueva"
    }
  })], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "label": "Confirmar Contraseña Nueva",
      "description": "Confirme la nueva contraseña"
    }
  }, [_c('FormulateInput', {
    attrs: {
      "type": "password",
      "wrapper-class": ['input_form']
    },
    on: {
      "focus": _vm.inputfocus
    },
    model: {
      value: _vm.contraseña.confirmacion,
      callback: function ($$v) {
        _vm.$set(_vm.contraseña, "confirmacion", $$v);
      },
      expression: "contraseña.confirmacion"
    }
  })], 1), _vm._v(" "), _c('b-form-group', [_c('b-button', {
    attrs: {
      "variant": "dark"
    },
    on: {
      "click": _vm.cambiarContrasenia
    }
  }, [_vm._v("Cambiar Contraseña")])], 1), _vm._v(" "), _vm._l(_vm.mensajesDeError.contraseniaNueva, function (text, i) {
    return _c('p', {
      key: i,
      staticClass: "text-danger"
    }, [_vm._v("\n          " + _vm._s(text) + "\n        ")]);
  })], 2)], 1), _vm._v(" "), _c('b-row', [_c('b-col', [_c('h3', [_vm._v("Validar usuario")]), _vm._v(" "), _c('p', [_vm._v("Este paso es necesario para que puedas comenzar a vender tus instrumentales. Por eso necesitamos que cargues los siguientes datos para poder validarte: foto frontal y de dorso del dni, y una foto de perfil.")]), _vm._v(" "), _c('validar')], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/perfil/configuracion.vue?vue&type=template&id=c067bd9a&

// EXTERNAL MODULE: ./components/Perfil/header.vue + 4 modules
var header = __webpack_require__(122);

// EXTERNAL MODULE: ./components/Perfil/validar.vue + 4 modules
var validar = __webpack_require__(196);

// EXTERNAL MODULE: ./components/Mercadopago/carga.vue + 4 modules
var carga = __webpack_require__(197);

// EXTERNAL MODULE: ./components/Perfil/nombre.vue + 4 modules
var nombre = __webpack_require__(198);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "js-sha256"
var external_js_sha256_ = __webpack_require__(80);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/perfil/configuracion.vue?vue&type=script&lang=js&






/* harmony default export */ var configuracionvue_type_script_lang_js_ = ({
  name: "perfilConfiguracion",
  middleware: "login",
  components: {
    Header: header["default"],
    Validar: validar["default"],
    mercadopago: carga["default"],
    Nombre: nombre["default"]
  },
  data() {
    return {
      urlEnved: null,
      usuario: {
        nombre: null,
        email: null
      },
      contraseña: {
        actual: "",
        nueva: "",
        confirmacion: ""
      },
      clasesError: {
        contraseniaActual: "",
        contraseniaNueva: "",
        contraseniaConfirmar: ""
      },
      mensajesDeError: {
        contraseniaActual: [],
        contraseniaNueva: []
      }
    };
  },
  mounted() {
    this.usuario.nombre = this.$cookiz.get("usuario").nombreusuario;
    this.usuario.email = this.$cookiz.get("usuario").email;
  },
  methods: {
    mercadopago: function () {
      external_axios_default.a.get("http://localhost:3000/vendedor/mercadopago/", {
        headers: {
          "access-token": this.$cookiz.get('usuario').token,
          "Content-Type": "application/json"
        }
      }).then(result => {
        if (result.status == 200) {
          var mercadopago = window.open(result.data);
          /*var usuario = this.$cookiz.get('usuario');
          mercadopago.onbeforeunload = (e) => {
            console.log(e.target.URL.split("?")[1].split("=")[1]);
            console.log(usuario);
             const options = {
              method: "GET",
              url: "http://localhost:3000/vendedor/mercadopago/setcredentials",
              params: { code: e.target.URL.split("?")[1].split("=")[1] },
              headers: {
                "access-token": usuario.token,
              },
            };
             axios
              .request(options)
              .then(function (response) {
                console.log(response.data);
              })
              .catch(function (error) {
                console.error(error);
              });
          };
          */
        }
      }).catch(err => {
        console.log(err);
      });
    },
    loadcode: function (code) {
      console.log(code);
    },
    cambiarDatos: function () {
      if (this.$cookiz.get("usuario").nombreusuario != this.usuario.nombre) {
        external_axios_default.a.put("http://localhost:3000/usuario/edit/nombre", {
          nombre: this.usuario.nombre,
          id: this.$cookiz.get("usuario").id
        }, {
          headers: {
            "access-token": this.$cookiz.get("usuario").token
          }
        }).then(result => {
          if (result.status == 200) {
            this.$cookiz.set("usuario", this.$cookiz.get("usuario").nombreusuario = result.nombreusuario);
          }
        }).catch(err => {
          console.log(err);
        });
      }
      if (this.$cookiz.get('usuario').email != this.usuario.email) {
        external_axios_default.a.put("http://localhost:3000/usuario/edit/email", {
          email: this.usuario.email,
          id: this.$cookiz.get('usuario').id
        }, {
          headers: {
            "access-token": this.$cookiz.get('usuario').token
          }
        }).then(result => {
          if (result.status == 200) {
            this.$store.commit("email", this.usuario.email);
          }
        }).catch(err => {
          console.log(err);
        });
      }
    },
    cambiarContrasenia: function () {
      console.log(this.hash(this.contraseña.actual), this.$cookiz.get('usuario').contraseña);
      console.log(this.contraseña.actual != this.contraseña.nueva && this.contraseña.nueva == this.contraseña.confirmacion && this.hash(this.contraseña.actual) == this.$cookiz.get('usuario').contraseña);
      if (this.contraseña.actual != "" && this.contraseña.nueva != "" && this.contraseña.confirmacion != "" && this.contraseña.actual != this.contraseña.nueva && this.contraseña.nueva == this.contraseña.confirmacion && this.hash(this.contraseña.actual) == this.$cookiz.get('usuario').contraseña) {
        external_axios_default.a.put("http://localhost:3000/usuario/edit/contrasenia", {
          actual: this.$cookiz.get('usuario').contraseña,
          nueva: this.hash(this.contraseña.nueva)
        }, {
          headers: {
            "access-token": this.$cookiz.get('usuario').token
          }
        }).then(result => {
          if (result.status == 200) {
            console.log("contraseña cambiada");
          }
        }).catch(err => {
          console.log(err);
        });
      } else {
        if (this.contraseña.actual == this.contraseña.nueva) {
          this.clasesError.contraseniaActual = "input-danger";
          this.mensajesDeError.contraseniaNueva.push("La nueva contraseña es igual a la contraseña actual");
        }
        if (this.contraseña.nueva != this.contraseña.confirmacion) {
          this.clasesError.contraseniaNueva = "input-danger";
          this.clasesError.contraseniaConfirmar = "input-danger";
          this.mensajesDeError.contraseniaNueva.push("Las contraseñas no conciden");
        }
        if (this.hash(this.contraseña.actual) != this.$cookiz.get('usuario').contraseña) {
          this.clasesError.contraseniaActual = "input-danger";
          this.mensajesDeError.contraseniaActual.push("La contraseña ingresada es incorrecta");
        }
      }
    },
    inputfocus: function () {
      this.clasesError.contraseniaActual = "";
      this.clasesError.contraseniaNueva = "";
      this.clasesError.contraseniaConfirmar = "";
      this.mensajesDeError.contraseniaActual = [];
      this.mensajesDeError.contraseniaNueva = [];
    },
    hash: function (pwd) {
      return external_js_sha256_["sha256"].create().update(pwd).hex();
    }
  }
});
// CONCATENATED MODULE: ./pages/perfil/configuracion.vue?vue&type=script&lang=js&
 /* harmony default export */ var perfil_configuracionvue_type_script_lang_js_ = (configuracionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/perfil/configuracion.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  perfil_configuracionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4e2f95fa"
  
)

/* harmony default export */ var configuracion = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=configuracion.js.map