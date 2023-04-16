<template>
  <div>
    <Header></Header>
    <b-container></b-container>
  </div>
</template>
<script>
import Header from "../../components/Perfil/header.vue";

export default {
  name: "perfil",
  middleware: "login",
  components: {
    Header,
  },
  mounted() {
    console.log(this.$cookiz.getAll());
  },
};
</script>
