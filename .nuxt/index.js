import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_0b0183ac from 'nuxt_plugin_plugin_0b0183ac' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_plugin_1adf807c from 'nuxt_plugin_plugin_1adf807c' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_bootstrapvue_52e0661e from 'nuxt_plugin_bootstrapvue_52e0661e' // Source: ./bootstrap-vue.js (mode: 'all')
import nuxt_plugin_nuxtvueselect_47a88f2a from 'nuxt_plugin_nuxtvueselect_47a88f2a' // Source: ./nuxt-vue-select.js (mode: 'client')
import nuxt_plugin_cookieuniversalnuxt_6e02a72c from 'nuxt_plugin_cookieuniversalnuxt_6e02a72c' // Source: ./cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_axios_42ead0c2 from 'nuxt_plugin_axios_42ead0c2' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_nuxtplugin7d015f50_3ed2d92c from 'nuxt_plugin_nuxtplugin7d015f50_3ed2d92c' // Source: ./nuxt.plugin.7d015f50.js (mode: 'all')
import nuxt_plugin_vueplyr_9db9a11c from 'nuxt_plugin_vueplyr_9db9a11c' // Source: ../plugins/vue-plyr (mode: 'client')
import nuxt_plugin_auth_364a8fa4 from 'nuxt_plugin_auth_364a8fa4' // Source: ./auth.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"cookingbeats","render":{"csp":{"reportOnly":true,"hashAlgorithm":"sha256","policies":{"default-src":["'self'"],"img-src":["https:","*.google-analytics.com"],"worker-src":["'self'","blob:","https:\u002F\u002Fwww.mercadolibre.com\u002F","*.logrocket.io"],"style-src":["'self'","'unsafe-inline'","https:\u002F\u002Fwww.mercadolibre.com\u002F"],"script-src":["'self'","'unsafe-inline'","https:\u002F\u002Fwww.mercadolibre.com\u002F","sentry.io","*.sentry-cdn.com","*.google-analytics.com","*.logrocket.io"],"connect-src":["https:\u002F\u002Fwww.mercadolibre.com\u002F","sentry.io","*.google-analytics.com"],"form-action":["'self'"],"frame-ancestors":["'self'"],"object-src":["'self'"],"base-uri":["https:\u002F\u002Fwww.mercadolibre.com\u002F"],"report-uri":["https:\u002F\u002Fsentry.io\u002Fapi\u002F\u003Cproject\u003E\u002Fsecurity\u002F?sentry_key=\u003Ckey\u003E"]}}},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"main.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@braid\u002Fvue-formulate@2.5.3\u002Fdist\u002Fsnow.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fbootstrap@4.5.3\u002Fdist\u002Fcss\u002Fbootstrap.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Fstackpath.bootstrapcdn.com\u002Ffont-awesome\u002F4.7.0\u002Fcss\u002Ffont-awesome.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Material+Icons"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Material+Icons+Sharp"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fvuetify@2.x\u002Fdist\u002Fvuetify.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"script":[{"src":"https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.3.1.slim.min.js","type":"text\u002Fjavascript"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fpopper.js\u002F1.14.3\u002Fumd\u002Fpopper.min.js","type":"text\u002Fjavascript"},{"src":"https:\u002F\u002Fstackpath.bootstrapcdn.com\u002Fbootstrap\u002F4.1.3\u002Fjs\u002Fbootstrap.min.js","type":"text\u002Fjavascript"},{"src":"https:\u002F\u002Fsdk.mercadopago.com\u002Fjs\u002Fv1","type":"text\u002Fjavascript"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_0b0183ac === 'function') {
    await nuxt_plugin_plugin_0b0183ac(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_1adf807c === 'function') {
    await nuxt_plugin_plugin_1adf807c(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_52e0661e === 'function') {
    await nuxt_plugin_bootstrapvue_52e0661e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_nuxtvueselect_47a88f2a === 'function') {
    await nuxt_plugin_nuxtvueselect_47a88f2a(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_6e02a72c === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_6e02a72c(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_42ead0c2 === 'function') {
    await nuxt_plugin_axios_42ead0c2(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtplugin7d015f50_3ed2d92c === 'function') {
    await nuxt_plugin_nuxtplugin7d015f50_3ed2d92c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueplyr_9db9a11c === 'function') {
    await nuxt_plugin_vueplyr_9db9a11c(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_364a8fa4 === 'function') {
    await nuxt_plugin_auth_364a8fa4(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
