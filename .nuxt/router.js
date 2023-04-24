import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _48a5652a = () => interopDefault(import('../pages/albumes/index.vue' /* webpackChunkName: "pages/albumes/index" */))
const _1b490066 = () => interopDefault(import('../pages/instrumentales.vue' /* webpackChunkName: "pages/instrumentales" */))
const _43950b1a = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _68b68e96 = () => interopDefault(import('../pages/perfil/index.vue' /* webpackChunkName: "pages/perfil/index" */))
const _6fa5a589 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _52d69700 = () => interopDefault(import('../pages/perfil/albumes.vue' /* webpackChunkName: "pages/perfil/albumes" */))
const _9a9a0b50 = () => interopDefault(import('../pages/perfil/compras.vue' /* webpackChunkName: "pages/perfil/compras" */))
const _2c1645ec = () => interopDefault(import('../pages/perfil/configuracion.vue' /* webpackChunkName: "pages/perfil/configuracion" */))
const _cdb412fc = () => interopDefault(import('../pages/perfil/instrumental/index.vue' /* webpackChunkName: "pages/perfil/instrumental/index" */))
const _fd0f9010 = () => interopDefault(import('../pages/perfil/me_gusta.vue' /* webpackChunkName: "pages/perfil/me_gusta" */))
const _6f157c02 = () => interopDefault(import('../pages/perfil/mercadopago.vue' /* webpackChunkName: "pages/perfil/mercadopago" */))
const _46e5d2c0 = () => interopDefault(import('../pages/perfil/procesarcompra.vue' /* webpackChunkName: "pages/perfil/procesarcompra" */))
const _420acc58 = () => interopDefault(import('../pages/perfil/ventas.vue' /* webpackChunkName: "pages/perfil/ventas" */))
const _14a7ecd1 = () => interopDefault(import('../pages/perfil/instrumental/add.vue' /* webpackChunkName: "pages/perfil/instrumental/add" */))
const _0fa96596 = () => interopDefault(import('../pages/perfil/instrumental/edit/_id.vue' /* webpackChunkName: "pages/perfil/instrumental/edit/_id" */))
const _e482abdc = () => interopDefault(import('../pages/albumes/_id.vue' /* webpackChunkName: "pages/albumes/_id" */))
const _3d68cd3b = () => interopDefault(import('../pages/buy/_id.vue' /* webpackChunkName: "pages/buy/_id" */))
const _09f95e0f = () => interopDefault(import('../pages/compra/_id.vue' /* webpackChunkName: "pages/compra/_id" */))
const _75c2973a = () => interopDefault(import('../pages/instrumental/_id.vue' /* webpackChunkName: "pages/instrumental/_id" */))
const _148dd75c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _b5bbfe78 = () => interopDefault(import('../pages/_id.vue' /* webpackChunkName: "pages/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/cookingbeats-nuxt/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/albumes",
    component: _48a5652a,
    name: "albumes"
  }, {
    path: "/instrumentales",
    component: _1b490066,
    name: "instrumentales"
  }, {
    path: "/login",
    component: _43950b1a,
    name: "login"
  }, {
    path: "/perfil",
    component: _68b68e96,
    name: "perfil"
  }, {
    path: "/register",
    component: _6fa5a589,
    name: "register"
  }, {
    path: "/perfil/albumes",
    component: _52d69700,
    name: "perfil-albumes"
  }, {
    path: "/perfil/compras",
    component: _9a9a0b50,
    name: "perfil-compras"
  }, {
    path: "/perfil/configuracion",
    component: _2c1645ec,
    name: "perfil-configuracion"
  }, {
    path: "/perfil/instrumental",
    component: _cdb412fc,
    name: "perfil-instrumental"
  }, {
    path: "/perfil/me_gusta",
    component: _fd0f9010,
    name: "perfil-me_gusta"
  }, {
    path: "/perfil/mercadopago",
    component: _6f157c02,
    name: "perfil-mercadopago"
  }, {
    path: "/perfil/procesarcompra",
    component: _46e5d2c0,
    name: "perfil-procesarcompra"
  }, {
    path: "/perfil/ventas",
    component: _420acc58,
    name: "perfil-ventas"
  }, {
    path: "/perfil/instrumental/add",
    component: _14a7ecd1,
    name: "perfil-instrumental-add"
  }, {
    path: "/perfil/instrumental/edit/:id?",
    component: _0fa96596,
    name: "perfil-instrumental-edit-id"
  }, {
    path: "/albumes/:id",
    component: _e482abdc,
    name: "albumes-id"
  }, {
    path: "/buy/:id?",
    component: _3d68cd3b,
    name: "buy-id"
  }, {
    path: "/compra/:id?",
    component: _09f95e0f,
    name: "compra-id"
  }, {
    path: "/instrumental/:id?",
    component: _75c2973a,
    name: "instrumental-id"
  }, {
    path: "/",
    component: _148dd75c,
    name: "index"
  }, {
    path: "/:id",
    component: _b5bbfe78,
    name: "id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
