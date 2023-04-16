<template>
  <div>
    <b-form container>
      <b-form-group id="input-group-1" label="Nombre:">
        <FormulateInput
          id="input-1"
          v-model="form.nombre"
          name="Nombre"
          type="text"
          placeholder="Nombre Instrumental"
          validation="required"
          :wrapper-class="['input_form']"
        ></FormulateInput>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Descripcion"
        label-for="input-1"
        class="mb-2 mr-sm-2 mb-sm-0"
      >
        <FormulateInput
          type="textarea"
          id="textarea"
          v-model="form.descripcion"
          name="Descripcion"
          placeholder="Ingrese la descripcion del instrumental"
          :wrapper-class="['input_form']"
          validation="required"
        ></FormulateInput>
      </b-form-group>
      <FormulateInput type="currency" />

      

      <b-form-group
        id="input-group-1"
        label="Categoria / BPM / Escala"
        label-for="input-1"
      >
        <b-row>
          <b-col>
            <v-select
              class="style-chooser"
              v-model="form.categoria"
              type="vue-select"
              :options="form.categorias"
              placeholder="Categoria del Instrumental"
              required
            />
          </b-col>
          <b-col>
            <v-select
              class="style-chooser"
              v-model="form.bpm"
              placeholder="BPM"
              :options="form.bpms"
              required
            />
          </b-col>
          <b-col>
            <v-select
              class="style-chooser"
              v-model="form.escala"
              placeholder="Escala"
              :options="form.escalas"
              required
            />
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Minuatura"
        description="se cargara a las imagenes de su usuario"
        label-for="input-1"
      >
        <b-form-file
          v-model="form.miniatura"
          placeholder="agrege una minuatura"
          accept=".png, .jpg"
        ></b-form-file>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="MP3 / Wav / Sample"
        label-for="input-1"
      >
        <b-row>
          <b-col>
            <b-form-file
              v-model="form.mp3"
              placeholder="Agregar el MP3 aqui"
              drop-placeholder=""
              accept=".mp3"
            ></b-form-file>
          </b-col>
          <b-col>
            <b-form-file
              v-model="form.wav"
              placeholder="Agregar el WAV aqui"
              drop-placeholder=""
              accept=".wav"
            ></b-form-file>
          </b-col>
          <b-col>
            <b-form-file
              v-model="form.sample"
              placeholder="Agregar el Sample aqui"
              drop-placeholder=""
              accept=".zip, .rar"
            ></b-form-file>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-button variant="primary" @click="cargarInstrumental">
          Cargar Licencia
        </b-button>
      </b-form-group>
    </b-form>
  </div>
</template>
<script>
import axios from "axios";
import VueNumeric from "vue-numeric";
import DateRangePicker from "vue2-daterange-picker";

export default {
  name: "AgregarInstrumental",
  components: {
    VueNumeric,
    DateRangePicker,
  },
  props: {
  },
  data() {
    return {
      err: null,
      date: null,
      form: {
        nombre: null,
        descripcion: null,
        categoria: null,
        miniatura: null,
        bpm: null,
        escala: null,
        mp3: null,
        wav: null,
        sample: null,
        vendedor: null,
        licencia: null,
        categorias: [],
        bpms: [],
        escalas: [],
      },
    };
  },
  mounted() {
    this.loadCategoriasBpmEscalas();
  },
  methods: {
    cargarMinuatura: function (files) {
      this.form.minuatura = files[0];
    },
    validarToken: function () {
      axios
        .get(`${this.$axios.defaults.baseURL}vendedor/verificado`, {
          headers: {
            "access-token": this.$cookiz.get("usuario").token,
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          if (result.status == 200) {
            this.$bvModal.show("modalAgregar");
            this.loadCategoriasBpmEscalas();
          } else {
            this.err = result.data.err;
            this.$bvModal.show("error");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadCategoriasBpmEscalas: function () {
      axios
        .get(`${this.$axios.defaults.baseURL}categorias`)
        .then((result) => {
          if (result.status == 200) this.form.categorias = result.data;
        })
        .catch((err) => console.log(err));
      axios
        .get(`${this.$axios.defaults.baseURL}bpms`)
        .then((result) => {
          if (result.status == 200) this.form.bpms = result.data;
        })
        .catch((err) => console.log(err));
      axios
        .get(`${this.$axios.defaults.baseURL}escalas`)
        .then((result) => {
          if (result.status == 200) this.form.escalas = result.data;
        })
        .catch((err) => console.log(err));
    },
    cargarInstrumental: async function () {
      if (
        this.form.nombre &&
        this.form.descripcion &&
        this.form.bpm &&
        this.form.escala &&
        this.form.categoria &&
        this.form.miniatura &&
        this.form.mp3 &&
        this.form.wav &&
        this.form.sample
      ) {
        this.$emit("agregarInstrumental", this.form);
      }
    },
    loadFile: async function (name, url, file) {
      console.log("cargando el instrumental");
      var retorno = null;
      const form = new FormData();
      form.append(name, file);
      try {
        retorno = await axios.post(url, form, {
          headers: {
            "access-token": this.$cookiz.get("usuario").token,
            "Content-Type": "application/json",
          },
        });
        retorno = retorno.data;
      } catch (err) {
        console.log(err);
      }
      console.log("cargando el instrumental!!");
      return retorno;
    },
  },
};
</script>
<style>
.input_form {
  padding: 0;
  margin: 0;
}

.input_form .formulate-input-element {
  width: auto;
  max-width: none;
}

.formulate-input-error {
  color: var(--color7);
  font-size: 9px;
}
</style>
