<template>
  <div>
    <Menu></Menu>
    <b-container fluid>
      <albumheader></albumheader>
      <b-row> </b-row>
      <Instrumentalitem
        v-for="(instrumental, i) in instrumentales"
        v-bind:key="i"
      ></Instrumentalitem>
    </b-container>
  </div>
</template>
<script>
import Menu from "../../components/menu.vue";
import Albumheader from "../../components/Albumes/albumheader.vue";
import Instrumentalitem from "../../components/Instrumentales/instrumental.vue";

export default {
  name: "albumid",
  components: {
    Menu,
    Albumheader,
    Instrumentalitem,
  },
  data() {
    return {
      src: null,
      instrumentales: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
  mounted() {
    this.src = this.$route.params.id;
  },
};
</script>
