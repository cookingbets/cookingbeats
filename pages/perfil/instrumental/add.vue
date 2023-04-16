<template>
  <b-container>
    <b-row>
      <b-col>
        <b-progress
          height="4px"
          :value="porcentajeDatosInstrumental"
          :variant="variante"
        ></b-progress>
      </b-col>
      <b-co> 1 </b-co>
      <v-col>
        <b-progress
          height="4px"
          :value="porcentajeDatosLicencia"
          :variant="variante"
        ></b-progress>
      </v-col>
    </b-row>
    <hr />
    <Agregar
      v-show="instrumentalshow"
      v-on:agregarInstrumental="cargarDatosInstrumental"
    ></Agregar>
    <AgregarLicencia
      v-show="licenciashow"
      v-on:cargarDatosLicencia="cargarDatosLicencia"
      v-on:volver="volverLicencia"
    ></AgregarLicencia>
    <InstrumentalCargado v-show="instrumentalcargadoshow" ref="cargainstrumental"></InstrumentalCargado>
  </b-container>
</template>
<script>
import axios from "axios";
import Agregar from "../../../components/Instrumentales/_agregarInstrumental.vue";
import AgregarLicencia from "../../../components/Instrumentales/_agregarLiciencia.vue";
import InstrumentalCargado from "../../../components/Instrumentales/_intrumentalcargado.vue";

export default {
  name: "agregarinstrumental",
  components: {
    Agregar,
    AgregarLicencia,
    InstrumentalCargado,
  },
  data() {
    return {
      siguiente: true,
      porcentajeDatosInstrumental: 0,
      porcentajeDatosLicencia: 0,
      variante: "",
      instrumentalshow: true,
      licenciashow: false,
      instrumentalcargadoshow: false,
      form: {},
      licencias: [],
      autores: []
    };
  },
  mounted() {
    //tendria que consultar por si esta validado
    axios.get(`${this.$axios.defaults.baseURL}verificar`,{
      headers: {
            "access-token": this.$cookiz.get("usuario").token,
            "Content-Type": "application/json",
          },
    }).then(result=>{
      if(result.status == 203) this.$router.push("/perfil");
    }).catch(err=>{
      console.log(err);
    })
  },
  methods: {

    cargarDatosInstrumental(form) {
      this.instrumentalshow = false;
      this.licenciashow = true;
      this.porcentajeDatosInstrumental = 100;
      this.form = form;
    },
    cargarDatosLicencia(licencia){
      this.licencias = licencia.licencias;
      this.autores = licencia.autores;
      this.porcentajeDatosLicencia = 100;
      this.cargarInstrumental();
    },
    volverLicencia(){
      this.instrumentalshow = true;
      this.licenciashow = false;
      this.porcentajeDatosInstrumental = 0;
    }, 
    async cargarInstrumental() {
      var miniatura = await this.loadFile(
        "miniatura",
        `${this.$axios.defaults.baseURL}upload/miniatura`,
        this.form.miniatura
      );
      var mp3 = await this.loadFile(
        "mp3",
        `${this.$axios.defaults.baseURL}upload/mp3`,
        this.form.mp3
      );
      var wav = await this.loadFile(
        "wav",
        `${this.$axios.defaults.baseURL}upload/wav`,
        this.form.wav
      );
      var sample = await this.loadFile(
        "sample",
        `${this.$axios.defaults.baseURL}upload/sample`,
        this.form.sample
      );

      var data = {
        nombre: this.form.nombre,
        descripcion: this.form.descripcion,
        categoria: this.form.categoria.code,
        miniatura: miniatura.id,
        bpm: this.form.bpm.code,
        escala: this.form.escala.code,
        mp3: mp3.id,
        wav: wav.id,
        sample: sample.id,
        vendedor: null,
        autores: this.autores,
        licencias: this.licencias
      };
      axios
        .post(`${this.$axios.defaults.baseURL}instrumental/`, data, {
          headers: {
            "access-token": this.$cookiz.get("usuario").token,
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          if (result.status == 200) {
            this.licenciashow = false;
            this.porcentajeDatosLicencia = 100;
            this.instrumentalcargadoshow = true;
            this.$refs.cargainstrumental.cargarinstrumental(result.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
.panel-hide {
  display: none;
}
</style>
