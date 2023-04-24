exports.ids = [22];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=perfil-validar.js.map