<template>
  <div>
    <b-alert variant="success" show>
      <h3>Instrumental Cargado con Exito</h3>
    </b-alert>
    <cardinstrumental v-if="instrumental" :instrumental="instrumental"></cardinstrumental>
  </div>
</template>
<script>
import axios from "axios";
import cardinstrumental from './_cardinstrumental.vue';
export default {
  name: "instrumentalcargado",
  components:{
    cardinstrumental
  },
  data() {
    return {
      instrumental: null,
    };
  },
  methods: {
    cargarinstrumental(instrumental) {
      const options = {
        method: "GET",
        url: `http://localhost:3000/instrumental/${instrumental.id}`,
        
      };

      axios
        .request(options)
        .then( result=>{
          console.log(result.data);
          this.instrumental = result.data;
          console.log(this.instrumental);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
};
</script>
