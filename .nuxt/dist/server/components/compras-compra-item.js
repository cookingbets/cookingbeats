exports.ids = [4];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=compras-compra-item.js.map