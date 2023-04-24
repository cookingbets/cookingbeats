exports.ids = [21];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=perfil-nombre.js.map