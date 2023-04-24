import WaveSurferVue from './WaveSurferVue.vue';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(WaveSurferVue);
}

export default {
  install(Vue, options) {
    Vue.component('wavesurfer', WaveSurferVue);
  }
}
