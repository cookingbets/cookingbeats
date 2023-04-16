<template>
  <div>
    <b-container>
      <Header></Header>
      <CompraItem
        v-for="(compra, i) in compras"
        v-bind:key="i"
        :data="compra"
        v-on:refresh="load"
      ></CompraItem>
    </b-container>
  </div>
</template>
<script>
import Header from "../../components/Perfil/header.vue";
import CompraItem from "../../components/Compras/CompraItem.vue";
import axios from "axios";

export default {
  name: "compras",
  middleware: "login",
  components: {
    Header,
    CompraItem,
  },
  data() {
    return {
      compras: [],
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load: function() {
      axios
        .get("http://localhost:3000/compras", {
          headers: {
            "access-token": this.$cookiz.get('usuario').token,
          },
        })
        .then((result) => {
          if (result.status == 200) {
            console.log(result.data);
            this.compras = result.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
