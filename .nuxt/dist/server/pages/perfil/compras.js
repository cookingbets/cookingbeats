exports.ids = [34,4,19];
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

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Compras/CompraItem.vue?vue&type=template&id=557eee7e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-card', {
    staticClass: "compra-item",
    attrs: {
      "bg-variant": "dark"
    }
  }, [_c('b-row', [_c('b-col', [_vm._v("\nN° " + _vm._s(_vm.data.id) + " | Reference: " + _vm._s(_vm.data.external_reference) + "\n     ")])], 1), _vm._v(" "), _c('b-row', [_c('b-col')], 1), _vm._v(" "), _c('b-row', [_c('b-col', [_vm.data.status == 'approved' ? _c('div', {
    staticClass: "d-flex justify-content-between"
  }, [_c('b-badge', {
    staticStyle: {
      "font-size": "18px"
    },
    attrs: {
      "variant": "success",
      "pill": ""
    }
  }, [_vm._v("Pagado")])], 1) : _vm.data.status == 'pending' ? _c('div', [_c('b-badge', {
    attrs: {
      "variant": "denger"
    }
  }, [_vm._v("Pendiente")])], 1) : _c('p', [_vm._v("\n         Sin Seguimiento -\n         "), _c('b-button', {
    attrs: {
      "size": "sm"
    },
    on: {
      "click": function ($event) {
        return _vm.reload(_vm.data.external_reference);
      }
    }
  }, [!_vm.loaditem ? _c('md-icon', {
    attrs: {
      "size": 18
    }
  }, [_vm._v("Load")]) : _vm._e(), _vm._v(" "), _vm.loaditem ? _c('b-spinner', {
    attrs: {
      "small": "",
      "label": "load",
      "variant": "ligth"
    }
  }) : _vm._e()], 1)], 1)]), _vm._v(" "), _c('b-col', [_vm.data.status == 'approved' ? _c('b-button', {
    staticClass: "bg-color6 text-bg-color1",
    staticStyle: {
      "border-radius": "10px"
    },
    attrs: {
      "small": "",
      "variant": "dark"
    },
    on: {
      "click": _vm.download
    }
  }, [_c('span', {
    staticClass: "material-icons"
  }, [_vm._v("\n           file_download\n         ")])]) : _vm._e()], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Compras/CompraItem.vue?vue&type=template&id=557eee7e&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Compras/CompraItem.vue?vue&type=script&lang=js&

/* harmony default export */ var CompraItemvue_type_script_lang_js_ = ({
  name: "CompraItem",
  components: {},
  data: {
    loaditem: false
  },
  props: {
    data: Object
  },
  mounted() {
    this.reload(this.data.external_reference);
  },
  methods: {
    reload: function (external_reference) {
      this.loaditem = true;
      external_axios_default.a.get(`http://localhost:3000/compras/carga?external_reference=${external_reference}`, {
        headers: {
          "access-token": this.$cookiz.get('usuario').token
        }
      }).then(result => {
        if (result.status == 200) {
          this.loaditem = false;
          this.$emit("refresh");
        }
      }).catch(err => {
        console.log(err);
      });
    },
    download: function () {
      if (this.data.tipo == 1) {
        external_axios_default.a.get(`http://localhost:3000/compras/instrumental/download?id=${this.data.id}`, {
          headers: {
            "access-token": this.$cookiz.get('usuario').token
          }
        }).then(result => {
          if (result.status == 200) {
            window.open(result.data);
          }
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Compras/CompraItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Compras_CompraItemvue_type_script_lang_js_ = (CompraItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Compras/CompraItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Compras_CompraItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "76962760"
  
)

/* harmony default export */ var CompraItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/perfil/compras.vue?vue&type=template&id=07187ce3&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-container', [_c('Header'), _vm._v(" "), _vm._l(_vm.compras, function (compra, i) {
    return _c('CompraItem', {
      key: i,
      attrs: {
        "data": compra
      },
      on: {
        "refresh": _vm.load
      }
    });
  })], 2)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/perfil/compras.vue?vue&type=template&id=07187ce3&

// EXTERNAL MODULE: ./components/Perfil/header.vue + 4 modules
var header = __webpack_require__(122);

// EXTERNAL MODULE: ./components/Compras/CompraItem.vue + 4 modules
var CompraItem = __webpack_require__(195);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/perfil/compras.vue?vue&type=script&lang=js&



/* harmony default export */ var comprasvue_type_script_lang_js_ = ({
  name: "compras",
  middleware: "login",
  components: {
    Header: header["default"],
    CompraItem: CompraItem["default"]
  },
  data() {
    return {
      compras: []
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load: function () {
      external_axios_default.a.get("http://localhost:3000/compras", {
        headers: {
          "access-token": this.$cookiz.get('usuario').token
        }
      }).then(result => {
        if (result.status == 200) {
          console.log(result.data);
          this.compras = result.data;
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/perfil/compras.vue?vue&type=script&lang=js&
 /* harmony default export */ var perfil_comprasvue_type_script_lang_js_ = (comprasvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/perfil/compras.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  perfil_comprasvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5dbbfdde"
  
)

/* harmony default export */ var compras = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=compras.js.map