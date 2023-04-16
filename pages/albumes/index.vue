<template>
  <b-container fluid>
    <Menu></Menu>
    <h3 class="text-left">Albumes Destacados</h3>
    <b-card-group deck >
      <Albumitem v-for="(album, i) in albumes" v-bind:key="i"></Albumitem>
    </b-card-group>
  </b-container>
</template>
<script>
import Menu from "../../components/menu";
import Albumitem from "../../components/Albumes/albumitem.vue";
export default {
  name: "albumes",
  components: {
    Menu,
    Albumitem,
  },
  data() {
    return {
      albumes: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
};
</script>
