exports.ids = [38];
exports.modules = {

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/perfil/instrumental/edit/_id.vue?vue&type=template&id=7dc65db6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-container', [_c('b-form', [_c('b-form-group', {
    attrs: {
      "label": "Nombre"
    }
  }, [_c('b-form-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: _vm.form.nombre,
      callback: function ($$v) {
        _vm.$set(_vm.form, "nombre", $$v);
      },
      expression: "form.nombre"
    }
  })], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "label": "Descripcion"
    }
  }, [_c('b-form-textarea', {
    model: {
      value: _vm.form.descripcion,
      callback: function ($$v) {
        _vm.$set(_vm.form, "descripcion", $$v);
      },
      expression: "form.descripcion"
    }
  })], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "label": "Precio"
    }
  }, [_c('b-form-input', {
    attrs: {
      "type": "number"
    },
    model: {
      value: _vm.form.precio,
      callback: function ($$v) {
        _vm.$set(_vm.form, "precio", $$v);
      },
      expression: "form.precio"
    }
  })], 1), _vm._v(" "), _c('b-row', [_c('b-col', {
    attrs: {
      "sm": ""
    }
  }, [_c('b-form-group', {
    attrs: {
      "label": "Categoria"
    }
  }, [_c('b-form-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: _vm.form.categoria,
      callback: function ($$v) {
        _vm.$set(_vm.form, "categoria", $$v);
      },
      expression: "form.categoria"
    }
  })], 1)], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": ""
    }
  }, [_c('b-form-group', {
    attrs: {
      "label": "BPM"
    }
  }, [_c('b-form-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: _vm.form.bpm,
      callback: function ($$v) {
        _vm.$set(_vm.form, "bpm", $$v);
      },
      expression: "form.bpm"
    }
  })], 1)], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": ""
    }
  }, [_c('b-form-group', {
    attrs: {
      "label": "Escala"
    }
  }, [_c('b-form-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: _vm.form.escala,
      callback: function ($$v) {
        _vm.$set(_vm.form, "escala", $$v);
      },
      expression: "form.escala"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('b-row', [_c('b-col', {
    attrs: {
      "sm": ""
    }
  }, [_c('b-form-group', {
    attrs: {
      "label": "Minuatura"
    }
  }, [_c('b-img', {
    attrs: {
      "thumbnail": "",
      "src": _vm.views.minuatura
    }
  })], 1)], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": ""
    }
  }, [_c('b-form-group', {
    attrs: {
      "label": "Mp3"
    }
  }, [_c('audio', {
    attrs: {
      "src": _vm.views.mp3,
      "controls": ""
    }
  })])], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": ""
    }
  }, [_c('b-form-group', {
    attrs: {
      "label": "Wav"
    }
  }, [_c('audio', {
    attrs: {
      "src": _vm.views.wav,
      "controls": ""
    }
  })])], 1)], 1), _vm._v(" "), _c('b-row', [_c('b-col', {
    attrs: {
      "sm": ""
    }
  }, [_c('b-form-group', {
    attrs: {
      "label": "Minuatura"
    }
  }, [_c('b-form-file', {
    attrs: {
      "placeholder": "agrege una minuatura",
      "accept": ".png, .jpg"
    },
    model: {
      value: _vm.form.miniatura,
      callback: function ($$v) {
        _vm.$set(_vm.form, "miniatura", $$v);
      },
      expression: "form.miniatura"
    }
  })], 1)], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": ""
    }
  }, [_c('b-form-group', {
    attrs: {
      "label": "Mp3"
    }
  }, [_c('b-form-file', {
    attrs: {
      "placeholder": "Agregar el MP3 aqui",
      "drop-placeholder": "",
      "accept": ".mp3"
    },
    model: {
      value: _vm.form.mp3,
      callback: function ($$v) {
        _vm.$set(_vm.form, "mp3", $$v);
      },
      expression: "form.mp3"
    }
  })], 1)], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": ""
    }
  }, [_c('b-form-group', {
    attrs: {
      "label": "Wav"
    }
  }, [_c('b-form-file', {
    attrs: {
      "placeholder": "Agregar el WAV aqui",
      "drop-placeholder": "",
      "accept": ".wav"
    },
    model: {
      value: _vm.form.wav,
      callback: function ($$v) {
        _vm.$set(_vm.form, "wav", $$v);
      },
      expression: "form.wav"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('b-form-group', [_c('b-button', {
    staticClass: "btn boton",
    on: {
      "click": _vm.edit
    }
  }, [_vm._v("Editar")])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/perfil/instrumental/edit/_id.vue?vue&type=template&id=7dc65db6&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/perfil/instrumental/edit/_id.vue?vue&type=script&lang=js&

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: "editar",
  middleware: "login",
  data() {
    return {
      form: {
        nombre: "",
        descripcion: "",
        precio: 0,
        categoria: "",
        bpm: "",
        escala: "",
        miniatura: null,
        mp3: null,
        wav: null,
        sample: null
      },
      views: {
        minuatura: null,
        mp3: null,
        wav: null,
        sample: null
      }
    };
  },
  components: {},
  mounted() {
    this.load();
  },
  methods: {
    load: function () {
      external_axios_default.a.get(`http://localhost:3000/instrumental/${this.$route.params.id}`).then(result => {
        if (result.status == 200) {
          var data = result.data;
          this.form.nombre = data.nombre;
          this.form.descripcion = data.descripcion;
          this.form.precio = data.precio;
          this.form.categoria = data.categoria;
          this.form.bpm = data.bpm;
          this.form.escala = data.escala;
          this.views.minuatura = data.tieneMiniatura.url;
          this.views.mp3 = data.tieneMp3.url;
          this.views.wav = data.tieneWav.url;
          this.views.sample = data.tieneSample.url;
        } else {}
      }).catch(err => {
        console.log(err);
      });
    },
    validar: function () {
      return this.form.nombre != "" || this.form.descripcion != "" || this.form.precio != "" || this.form.categoria != "" || this.form.bpm != "" || this.form.escala != "" || this.form.minuatura || this.form.mp3 || this.form.wav;
    },
    edit: async function () {
      if (this.validar()) {
        if (this.form.miniatura) {
          var minuatura = await this.loadFile("miniatura", "http://localhost:3000/upload/miniatura", this.form.miniatura);
          this.form.miniatura = minuatura.id;
        }
        if (this.form.mp3) {
          var mp3 = await this.loadFile("mp3", "http://localhost:3000/upload/mp3", this.form.mp3);
          this.form.mp3 = mp3.id;
        }
        if (this.form.wav) {
          var wav = await this.loadFile("wav", "http://localhost:3000/upload/wav", this.form.wav);
          this.form.wav = wav.id;
        }
        var data = {
          nombre: this.form.nombre,
          descripcion: this.form.descripcion,
          precio: this.form.precio,
          categoria: this.form.categoria,
          miniatura: this.form.miniatura,
          bpm: this.form.bpm,
          escala: this.form.escala,
          mp3: this.form.mp3,
          wav: this.form.wav,
          licencia: 1
        };
        external_axios_default.a.put(`http://localhost:3000/instrumental/${this.$route.params.id}`, data, {
          headers: {
            "access-token": this.$cookiz.get('usuario').token,
            "Content-Type": "application/json"
          }
        }).then(result => {
          if (result.status == 200) {
            this.$router.push('../');
          } else {}
        }).catch(err => {
          console.log(err);
        });
      } else {}
    },
    loadFile: async function (name, url, file) {
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
      console.log(retorno);
      return retorno;
    }
  }
});
// CONCATENATED MODULE: ./pages/perfil/instrumental/edit/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var edit_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/perfil/instrumental/edit/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8730c7a4"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map