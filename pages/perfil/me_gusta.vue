<template>
  <b-container fluid>
    <Header></Header>
    <h1>Instrumentales que me Gustan</h1>
    <hr />
    <Instrumental
          v-for="(instrumental, i) in instrumentales"
          v-bind:key="i"
          v-bind:instrumental="instrumental.Instrumentales"
        ></Instrumental>
  </b-container>
</template>
<script>
import Header from "../../components/Perfil/header.vue";
import Instrumental from "../../components/Instrumentales/instrumental.vue";
import axios from "axios";

export default {
  middleware: "login",
  components: {
    Header,
    Instrumental,
  },
  data() {
    return {
        instrumentales: []
    };
  },
  mounted() {
    axios.get(
      `${this.$axios.defaults.baseURL}instrumental/usuario/likes`,
      {
        headers: {
          "access-token": this.$cookiz.get('usuario').token,
        },
      }
    ).then(result =>{
        if(result.status == 200){
            this.instrumentales = result.data;
        }
    }).catch(err =>{
        console.log(err);
    });
  },
};
</script>