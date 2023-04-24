exports.ids = [11];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=instrumentales-instrumental-edit.js.map