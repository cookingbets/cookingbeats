<template>
  <div>
    <b-container>
      <br>
      <h3>Instrumentales</h3>
      <br>
      <Instrumental
        v-for="(instrumental, i) in instrumentales"
        v-bind:key="i"
        v-bind:instrumental="instrumental"
      ></Instrumental>
    </b-container>
  </div>
</template>
<script>
import Instrumental from "../components/Instrumentales/instrumental.vue";
import axios from 'axios';
export default {
  data () {
    return {
      instrumentales: []
    }
  },
  name: "perfil",
  components: {
    Instrumental
  },
  mounted() {
      axios
        .get(`http://localhost:3000/instrumental/user/${this.$route.params.id}`)
        .then((response) => {
          if (response.status == 200) {
            this.instrumentales = response.data;
          }
        })
        .catch((err) => {
          console.error(err);
        });
  },
};
</script>