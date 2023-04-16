<template>
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col" colspan="2">Descripcion</th>
        <th scope="col">Precio</th>
        <th scope="col">categoria</th>
        <th scope="col">BPM</th>
        <th scope="col">Escala</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(instrumental, i) in instrumentales" v-bind:key="i">
        <td>{{ instrumental.nombre }}</td>
        <td colspan="2">{{ instrumental.descripcion }}</td>
        <td>$ {{ instrumental.precio }}</td>
        <td>{{ instrumental.escala }}</td>
        <td>{{ instrumental.bpm }}</td>
        <td>{{ instrumental.escala }}</td>
        <td>
          <b-button @click="eliminar(instrumental.id)" variant="dark">
            <span class="material-icons text-white">
              delete
            </span>
          </b-button>
        </td>
        <td>
          <b-button variant="outline-light" @click="ver(instrumental)">
            <span class="material-icons text-white">
              more
            </span>
          </b-button>
        </td>
        <td>
          <b-button variant="outline-light" @click="edit(instrumental)">
            <span class="material-icons text-white">
              edit
            </span>
          </b-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "instrumental",
  props: {
    instrumentales: Array,
  },
  components: {},
  mounted() {
    console.log(this.instrumental);
  },
  methods: {
    eliminar(id) {
      console.log(id);
      this.$emit("eliminar", id);
    },
    ver: function(instrumental) {
      this.$emit("ver", instrumental);
    },
    edit: function(instrumental) {
      this.$router.push(`/perfil/instrumental/edit/${instrumental.id}`);
    }
  },
};
</script>
