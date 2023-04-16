<template>
  <div>
    <b-container>
      <b-nav>
        <b-nav-item><Nuxt-link v-if="see" to="#">Feed</Nuxt-link></b-nav-item>
        <b-nav-item
          ><Nuxt-link v-if="see" to="/perfil/instrumental"
            >Instrumentales</Nuxt-link
          ></b-nav-item
        >
        <b-nav-item>
          <Nuxt-link to="/perfil/configuracion">Configuracion</Nuxt-link>
        </b-nav-item>
        <b-nav-item>
          <Nuxt-link to="/perfil/compras">Compras</Nuxt-link>
        </b-nav-item>
        <b-nav-item>
          <Nuxt-link to="/perfil/me_gusta">Instrumentales que me Gustan</Nuxt-link>
        </b-nav-item>
      </b-nav>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "hader",
  data() {
    return {
      see: true,
    };
  },
  mounted() {
    this.see = (this.$cookiz.get("usuario").vendedor)? true: false;
  },
};
</script>
