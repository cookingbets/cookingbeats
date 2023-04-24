exports.ids = [39,11,19,20];
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

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Instrumentales/instrumentalEdit.vue?vue&type=template&id=280cac86&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('table', {
    staticClass: "table table-dark"
  }, [_vm._ssrNode("<thead><tr><th scope=\"col\">Nombre</th> <th scope=\"col\" colspan=\"2\">Descripcion</th> <th scope=\"col\">Precio</th> <th scope=\"col\">categoria</th> <th scope=\"col\">BPM</th> <th scope=\"col\">Escala</th> <th scope=\"col\"></th> <th scope=\"col\"></th></tr></thead> "), _vm._ssrNode("<tbody>", "</tbody>", _vm._l(_vm.instrumentales, function (instrumental, i) {
    return _vm._ssrNode("<tr>", "</tr>", [_vm._ssrNode("<td>" + _vm._ssrEscape(_vm._s(instrumental.nombre)) + "</td> <td colspan=\"2\">" + _vm._ssrEscape(_vm._s(instrumental.descripcion)) + "</td> <td>" + _vm._ssrEscape("$ " + _vm._s(instrumental.precio)) + "</td> <td>" + _vm._ssrEscape(_vm._s(instrumental.escala)) + "</td> <td>" + _vm._ssrEscape(_vm._s(instrumental.bpm)) + "</td> <td>" + _vm._ssrEscape(_vm._s(instrumental.escala)) + "</td> "), _vm._ssrNode("<td>", "</td>", [_c('b-button', {
      attrs: {
        "variant": "dark"
      },
      on: {
        "click": function ($event) {
          return _vm.eliminar(instrumental.id);
        }
      }
    }, [_c('span', {
      staticClass: "material-icons text-white"
    }, [_vm._v("\n            delete\n          ")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<td>", "</td>", [_c('b-button', {
      attrs: {
        "variant": "outline-light"
      },
      on: {
        "click": function ($event) {
          return _vm.ver(instrumental);
        }
      }
    }, [_c('span', {
      staticClass: "material-icons text-white"
    }, [_vm._v("\n            more\n          ")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<td>", "</td>", [_c('b-button', {
      attrs: {
        "variant": "outline-light"
      },
      on: {
        "click": function ($event) {
          return _vm.edit(instrumental);
        }
      }
    }, [_c('span', {
      staticClass: "material-icons text-white"
    }, [_vm._v("\n            edit\n          ")])])], 1)], 2);
  }), 0)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Instrumentales/instrumentalEdit.vue?vue&type=template&id=280cac86&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Instrumentales/instrumentalEdit.vue?vue&type=script&lang=js&
/* harmony default export */ var instrumentalEditvue_type_script_lang_js_ = ({
  name: "instrumental",
  props: {
    instrumentales: Array
  },
  components: {},
  mounted() {
    console.log(this.instrumental);
  },
  methods: {
    eliminar(id) {
      console.log(id);
      this.$emit("eliminar", id);
    },
    ver: function (instrumental) {
      this.$emit("ver", instrumental);
    },
    edit: function (instrumental) {
      this.$router.push(`/perfil/instrumental/edit/${instrumental.id}`);
    }
  }
});
// CONCATENATED MODULE: ./components/Instrumentales/instrumentalEdit.vue?vue&type=script&lang=js&
 /* harmony default export */ var Instrumentales_instrumentalEditvue_type_script_lang_js_ = (instrumentalEditvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Instrumentales/instrumentalEdit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Instrumentales_instrumentalEditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "54bd3af4"
  
)

/* harmony default export */ var instrumentalEdit = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/perfil/instrumental/index.vue?vue&type=template&id=1e8c0f2b&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Header'), _vm._ssrNode(" "), _c('b-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('b-row', [_c('b-col', [_c('nuxt-link', {
    attrs: {
      "to": "instrumental/add"
    }
  }, [_c('span', {
    staticClass: "material-symbols-outlined"
  }, [_vm._v("\n            add\n          ")])])], 1)], 1), _vm._v(" "), _c('b-row', [_c('Instrumental', {
    attrs: {
      "instrumentales": _vm.instrumentales
    },
    on: {
      "ver": _vm.instrumentalVer,
      "eliminar": _vm.instrumentalDelete
    }
  })], 1)], 1), _vm._ssrNode(" "), _c('InstrumentalView', {
    ref: "InstrumentalView"
  }), _vm._ssrNode(" "), _c('b-pagination', {
    attrs: {
      "total-rows": _vm.rows,
      "per-page": _vm.perPage,
      "pills": "",
      "first-number": "",
      "last-number": ""
    },
    on: {
      "change": _vm.change
    },
    model: {
      value: _vm.currentPage,
      callback: function ($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/perfil/instrumental/index.vue?vue&type=template&id=1e8c0f2b&

// EXTERNAL MODULE: ./components/Perfil/header.vue + 4 modules
var header = __webpack_require__(122);

// EXTERNAL MODULE: ./components/Instrumentales/instrumentalEdit.vue + 4 modules
var instrumentalEdit = __webpack_require__(199);

// EXTERNAL MODULE: ./components/Perfil/instrumental.vue + 4 modules
var Perfil_instrumental = __webpack_require__(200);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/perfil/instrumental/index.vue?vue&type=script&lang=js&




/* harmony default export */ var instrumentalvue_type_script_lang_js_ = ({
  name: "instrumentalesPerfil",
  middleware: "login",
  components: {
    Header: header["default"],
    Instrumental: instrumentalEdit["default"],
    InstrumentalView: Perfil_instrumental["default"]
  },
  data() {
    return {
      instrumentales: [],
      rows: 0,
      perPage: 10,
      currentPage: 1
    };
  },
  mounted() {
    console.log(this.instrumentales);
    this.loadInstrumentales(this.currentPage, this.perPage);
  },
  methods: {
    loadInstrumentales(page, rows) {
      external_axios_default.a.get(`http://localhost:3000/instrumental/user/${this.$cookiz.get('usuario').id}?page=${page}&rows=${rows}`, {
        headers: {
          "access-token": this.$cookiz.get('usuario').token
        }
      }).then(result => {
        if (result.status == 200) {
          this.instrumentales = result.data.data;
          this.rows = parseInt(result.data.total);
          console.log(this.rows, this.currentPage);
        }
      }).catch(err => {
        console.error(err);
      });
    },
    instrumentalVer: function (instrumental) {
      console.log(instrumental);
      this.$refs.InstrumentalView.load(instrumental);
      this.$bvModal.show("instrumental_data");
    },
    instrumentalesEdit: function (instrumental) {},
    instrumentalDelete: function (instrumental) {
      external_axios_default.a.delete(`http://localhost:3000/instrumental/${instrumental}`).then(result => {
        if (result.status == 200) {
          this.loadInstrumentales();
        }
      }).catch(err => {
        console.log(err);
      });
    },
    change(pagina) {
      this.loadInstrumentales(pagina, this.perPage);
    },
    addInstrumental() {
      external_axios_default.a.get(`${this.$axios.defaults.baseURL}verificar`, {
        headers: {
          "access-token": this.$cookiz.get("usuario").token,
          "Content-Type": "application/json"
        }
      }).then(result => {
        if (result.status == 203) this.$router.push("/perfil");
      }).catch(err => {
        console.log(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/perfil/instrumental/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var perfil_instrumentalvue_type_script_lang_js_ = (instrumentalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/perfil/instrumental/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  perfil_instrumentalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2897b229"
  
)

/* harmony default export */ var perfil_instrumental = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map