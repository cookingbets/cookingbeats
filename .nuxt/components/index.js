export const Footer = () => import('../../components/footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Menu = () => import('../../components/menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
export const AlbumesAlbumheader = () => import('../../components/Albumes/albumheader.vue' /* webpackChunkName: "components/albumes-albumheader" */).then(c => wrapFunctional(c.default || c))
export const AlbumesAlbumitem = () => import('../../components/Albumes/albumitem.vue' /* webpackChunkName: "components/albumes-albumitem" */).then(c => wrapFunctional(c.default || c))
export const ComponentsCookBoton = () => import('../../components/Components-cook/boton.vue' /* webpackChunkName: "components/components-cook-boton" */).then(c => wrapFunctional(c.default || c))
export const ComprasCompraItem = () => import('../../components/Compras/CompraItem.vue' /* webpackChunkName: "components/compras-compra-item" */).then(c => wrapFunctional(c.default || c))
export const FilesModalFilesMinuaturas = () => import('../../components/Files/ModalFilesMinuaturas.vue' /* webpackChunkName: "components/files-modal-files-minuaturas" */).then(c => wrapFunctional(c.default || c))
export const MercadopagoCarga = () => import('../../components/Mercadopago/carga.vue' /* webpackChunkName: "components/mercadopago-carga" */).then(c => wrapFunctional(c.default || c))
export const MercadopagoPago = () => import('../../components/Mercadopago/pago.vue' /* webpackChunkName: "components/mercadopago-pago" */).then(c => wrapFunctional(c.default || c))
export const InstrumentalesAgregarInstrumental = () => import('../../components/Instrumentales/_agregarInstrumental.vue' /* webpackChunkName: "components/instrumentales-agregar-instrumental" */).then(c => wrapFunctional(c.default || c))
export const InstrumentalesAgregarLiciencia = () => import('../../components/Instrumentales/_agregarLiciencia.vue' /* webpackChunkName: "components/instrumentales-agregar-liciencia" */).then(c => wrapFunctional(c.default || c))
export const InstrumentalesCardLicencia = () => import('../../components/Instrumentales/_cardLicencia.vue' /* webpackChunkName: "components/instrumentales-card-licencia" */).then(c => wrapFunctional(c.default || c))
export const InstrumentalesCardinstrumental = () => import('../../components/Instrumentales/_cardinstrumental.vue' /* webpackChunkName: "components/instrumentales-cardinstrumental" */).then(c => wrapFunctional(c.default || c))
export const InstrumentalesIntrumentalcargado = () => import('../../components/Instrumentales/_intrumentalcargado.vue' /* webpackChunkName: "components/instrumentales-intrumentalcargado" */).then(c => wrapFunctional(c.default || c))
export const InstrumentalesReproductorCard = () => import('../../components/Instrumentales/_reproductorCard.vue' /* webpackChunkName: "components/instrumentales-reproductor-card" */).then(c => wrapFunctional(c.default || c))
export const InstrumentalesInstrumental = () => import('../../components/Instrumentales/instrumental.vue' /* webpackChunkName: "components/instrumentales-instrumental" */).then(c => wrapFunctional(c.default || c))
export const InstrumentalesInstrumentalEdit = () => import('../../components/Instrumentales/instrumentalEdit.vue' /* webpackChunkName: "components/instrumentales-instrumental-edit" */).then(c => wrapFunctional(c.default || c))
export const InstrumentalesPaginador = () => import('../../components/Instrumentales/paginador.vue' /* webpackChunkName: "components/instrumentales-paginador" */).then(c => wrapFunctional(c.default || c))
export const InstrumentalesReproductor = () => import('../../components/Instrumentales/reproductor.vue' /* webpackChunkName: "components/instrumentales-reproductor" */).then(c => wrapFunctional(c.default || c))
export const PerfilContrasenia = () => import('../../components/Perfil/contrasenia.vue' /* webpackChunkName: "components/perfil-contrasenia" */).then(c => wrapFunctional(c.default || c))
export const PerfilHeader = () => import('../../components/Perfil/header.vue' /* webpackChunkName: "components/perfil-header" */).then(c => wrapFunctional(c.default || c))
export const PerfilInstrumental = () => import('../../components/Perfil/instrumental.vue' /* webpackChunkName: "components/perfil-instrumental" */).then(c => wrapFunctional(c.default || c))
export const PerfilNombre = () => import('../../components/Perfil/nombre.vue' /* webpackChunkName: "components/perfil-nombre" */).then(c => wrapFunctional(c.default || c))
export const PerfilValidar = () => import('../../components/Perfil/validar.vue' /* webpackChunkName: "components/perfil-validar" */).then(c => wrapFunctional(c.default || c))
export const UtilidadesChipBar = () => import('../../components/Utilidades/chip-bar.vue' /* webpackChunkName: "components/utilidades-chip-bar" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
