exports.ids = [18];
exports.modules = {

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Perfil/contrasenia.vue?vue&type=template&id=1ee2c742&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<h3>Cambiar Contraseña</h3> "), _c('b-form-group', {
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
      value: _vm.contrasenia,
      callback: function ($$v) {
        _vm.contrasenia = $$v;
      },
      expression: "contrasenia"
    }
  })], 1), _vm._ssrNode(" "), _c('b-form-group', {
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
      value: _vm.contraseniaNueva,
      callback: function ($$v) {
        _vm.contraseniaNueva = $$v;
      },
      expression: "contraseniaNueva"
    }
  })], 1), _vm._ssrNode(" "), _c('b-form-group', {
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
      value: _vm.confirmarContraseniaNueva,
      callback: function ($$v) {
        _vm.confirmarContraseniaNueva = $$v;
      },
      expression: "confirmarContraseniaNueva"
    }
  })], 1), _vm._ssrNode(" "), _c('b-form-group', [_c('b-button', {
    attrs: {
      "variant": "dark"
    },
    on: {
      "click": _vm.cambiarContrasenia
    }
  }, [_vm._v("Cambiar Contraseña")])], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Perfil/contrasenia.vue?vue&type=template&id=1ee2c742&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Perfil/contrasenia.vue?vue&type=script&lang=js&
/* harmony default export */ var contraseniavue_type_script_lang_js_ = ({
  name: "contrasenia",
  props: {
    contrasenia: String
  },
  data() {
    return {
      contraseniaNueva: null,
      confirmarContraseniaNueva: null
    };
  },
  methods: {
    cambiarContrasenia: function () {
      if (this.contrasenia != this.contraseniaNueva && this.contraseniaNueva == this.confirmarContraseniaNueva) {
        axios.put("http://localhost:3000/usuario/edit/contrasenia", {
          actual: this.$cookiz.get("usuario").contrasenia,
          nueva: this.hash(this.contraseniaNueva)
        }, {
          headers: {
            "access-token": this.$cookiz.get("usuario").token
          }
        }).then(result => {
          if (result.status == 200) {
            console.log("contraseña cambiada");
          }
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Perfil/contrasenia.vue?vue&type=script&lang=js&
 /* harmony default export */ var Perfil_contraseniavue_type_script_lang_js_ = (contraseniavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Perfil/contrasenia.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Perfil_contraseniavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "69076c36"
  
)

/* harmony default export */ var contrasenia = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=perfil-contrasenia.js.map