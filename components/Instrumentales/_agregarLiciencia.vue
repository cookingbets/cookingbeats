<template>
  <b-form container-fluid>
    <b-row>
      <b-col>
        <h2>Licencia de Uso</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert v-if="errorAutores" show variant="danger"
          >Tiene que ingresar al menos a un autor.</b-alert
        >
        <b>Autores</b>
        <br />
        <b-row v-for="(autor, i) in autores" :key="i">
          <b-col>
            <FormulateInput
              type="text"
              name="Descripcion"
              v-model="autor.nombre"
              placeholder="Ingrese el nombre del autor"
              :wrapper-class="['input_form']"
            ></FormulateInput>
          </b-col>
          <b-col>
            <v-button v-on:click="eliminarAutor(i)">
              <span class="material-symbols-outlined"> delete </span>
            </v-button>
          </b-col>
        </b-row>
        <b-button v-on:click="agregarAutor"> Add </b-button>
      </b-col>
    </b-row>
    <hr>
    <b-row>
      <b-col>
        <b>Ambitos</b>
        <v-select
          class="style-chooser"
          v-model="ambitosSeleccionados"
          multiple
          :options="ambitos"
        ></v-select>
      </b-col>
      <b-col>
        <b>Periodo de Duracion:</b>
        <v-select
          v-model="duracion"
          class="style-chooser"
          :options="['1 Año', '2 Años', '3 Años', '4 Años', '5 Años']"
        ></v-select>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="input_form">
          <vue-numeric
            v-model="precio"
            currency="$"
            separator=","
            v-bind:precision="2"
            outputType="number"
            :min="100"
            :disabled="licenciaFree"
            required
          ></vue-numeric>
        </div>
      </b-col>
      <b-col>
        <FormulateInput
          v-model="licenciaFree"
          type="checkbox"
          label="Esta licencia es gratis"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button @click="cargarLicencia"> Agregar Licencia </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <cardLicencia
          v-for="(licencia, i) in licencias"
          :key="i"
          :id="i"
          v-bind:licencia="licencia"
          v-on:delate="eliminarLicencia"
        >
        </cardLicencia>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button @click="volver">
          <span class="material-symbols-outlined"> arrow_back </span>
        </b-button>
      </b-col>
      <b-col>
        <b-button @click="cargarInstrumental()">Cargar Instrumental</b-button>
      </b-col>
    </b-row>
  </b-form>
</template>
<script>
import axios from "axios";
import cardLicencia from "./_cardLicencia.vue";
import VueNumeric from "vue-numeric";

export default {
  name: "AgregarLicencia",
  props: {
    form: Object,
  },
  components: {
    cardLicencia,
    VueNumeric
  },
  data() {
    return {
      licencias: [],
      autores: [{ nombre: null }],
      ambitos: [],
      duracion: null,
      precio: null,
      ambitosSeleccionados: [],
      errorAutores: false,
      licenciaFree: false
    };
  },
  mounted() {
    axios.get(`${this.$axios.defaults.baseURL}ambitos`).then((result) => {
      if (result.status == 200) {
        this.ambitos = result.data;
      }
    });
  },
  methods: {
    agregarAutor() {
      this.autores.push({ nombre: null });
    },
    eliminarAutor(i) {
      this.autores.splice(i, 1);
    },
    seleccionarMinuatura(id) {
      alert(id);
    },
    cargarLicencia() {
      this.licencias.push({
        duracion: this.duracion,
        ambitos: this.ambitosSeleccionados,
        precio: this.precio,
        free: this.licenciaFree
      });
    },
    eliminarLicencia(id){
      this.licencias.splice(id, 1);
    },
    cargarInstrumental() {
      if (this.autores.length > 0 && this.licencias.length > 0) {
        var data = {};
        
        data.autores = this.autores;
        data.licencias = this.licencias;
        this.$emit("cargarDatosLicencia", data);
      }
    },
    volver() {
      this.$emit("volver");
    },
  },
};
</script>
<style></style>
