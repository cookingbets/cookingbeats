exports.ids = [26,2];
exports.modules = {

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Albumes/albumitem.vue?vue&type=template&id=5a8fde25&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('nuxt-link', {
    attrs: {
      "to": "albumes/2"
    }
  }, [_c('b-card', {
    staticClass: "mb-2",
    staticStyle: {
      "max-width": "15rem"
    },
    attrs: {
      "title": "Album Title",
      "img-src": "https://picsum.photos/600/300/?image=25",
      "img-alt": "Image",
      "img-top": "",
      "tag": "article",
      "bg-variant": "dark",
      "text-variant": "white"
    }
  }, [_c('b-card-text', [_c('p', [_vm._v("\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quae\n      ")]), _vm._v(" "), _c('p', [_c('b', [_vm._v("BPM | Escala ")])])])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Albumes/albumitem.vue?vue&type=template&id=5a8fde25&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Albumes/albumitem.vue?vue&type=script&lang=js&
/* harmony default export */ var albumitemvue_type_script_lang_js_ = ({
  name: "Albumitem",
  data() {
    return {
      src: ""
    };
  }
});
// CONCATENATED MODULE: ./components/Albumes/albumitem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Albumes_albumitemvue_type_script_lang_js_ = (albumitemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Albumes/albumitem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Albumes_albumitemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b183102a"
  
)

/* harmony default export */ var albumitem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/albumes/index.vue?vue&type=template&id=0e1e4a6a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('Menu'), _vm._v(" "), _c('h3', {
    staticClass: "text-left"
  }, [_vm._v("Albumes Destacados")]), _vm._v(" "), _c('b-card-group', {
    attrs: {
      "deck": ""
    }
  }, _vm._l(_vm.albumes, function (album, i) {
    return _c('Albumitem', {
      key: i
    });
  }), 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/albumes/index.vue?vue&type=template&id=0e1e4a6a&

// EXTERNAL MODULE: ./components/menu.vue + 4 modules
var menu = __webpack_require__(17);

// EXTERNAL MODULE: ./components/Albumes/albumitem.vue + 4 modules
var albumitem = __webpack_require__(194);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/albumes/index.vue?vue&type=script&lang=js&


/* harmony default export */ var albumesvue_type_script_lang_js_ = ({
  name: "albumes",
  components: {
    Menu: menu["default"],
    Albumitem: albumitem["default"]
  },
  data() {
    return {
      albumes: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }
});
// CONCATENATED MODULE: ./pages/albumes/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_albumesvue_type_script_lang_js_ = (albumesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/albumes/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_albumesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0163b95e"
  
)

/* harmony default export */ var albumes = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Menu: __webpack_require__(17).default})


/***/ })

};;
//# sourceMappingURL=index.js.map