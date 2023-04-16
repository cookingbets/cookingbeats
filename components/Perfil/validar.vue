<template>
  <div>
    <b-button @click="evaluar">
      validar
    </b-button>
    <b-alert variant="info" dismissible v-model="aprobado">
      Su validacion ya fue aprobada
    </b-alert>
    <b-alert variant="info" dismissible v-model="enProcesso">
      Su validacion esta en proceso
    </b-alert>
    <b-modal
      id="validarmodal"
      title="Validar"
      body-bg-variant="dark"
      header-bg-variant="dark"
      footer-bg-variant="dark"
      @ok="send"
    >
      <b-form-group label="Dni 1">
        <b-form-file v-model="dni1" accept=".jpg, .png, .jpeg"></b-form-file>
      </b-form-group>
      <b-form-group label="Dni 2">
        <b-form-file v-model="dni2" accept=".jpg, .png, .jpeg"></b-form-file>
      </b-form-group>
      <b-form-group label="Perfil">
        <b-form-file v-model="perfil" accept=".jpg, .png, .jpeg"></b-form-file>
      </b-form-group>
    </b-modal>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "validar",
  data() {
    return {
      dni1: null,
      dni2: null,
      perfil: null,
      enProcesso: false,
      aprobado: false,
    };
  },
  methods: {
    evaluar() {
      console.log(this.$axios.defaults.baseURL);
      axios
        .get(`${this.$axios.defaults.baseURL}verificar`, {
          headers: {
            "Content-Type": "multipart/form-data",
            "access-token": this.$cookiz.get('usuario').token,
          },
        })
        .then((result) => {
          if (result.status == 200) {
            if (result.data.validado) this.aprobado = true;
            else this.enProcesso = true;
          } else {
            this.$bvModal.show("validarmodal");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async send() {
      var dni1 = await this.loadFile(
        "dni1",
        `${this.$axios.defaults.baseURL}upload/dni1`,
        this.dni1
      );

      var dni2 = await this.loadFile(
        "dni2",
        `${this.$axios.defaults.baseURL}upload/dni2`,
        this.dni2
      );

      var perfil = await this.loadFile(
        "perfil",
        `${this.$axios.defaults.baseURL}upload/perfil`,
        this.perfil
      );
      try {
        var data = {
          dni1: dni1.id,
          dni2: dni2.id,
          perfil: perfil.id,
        };
        var retorno = await axios.post(
          `${this.$axios.defaults.baseURL}verificar`,
          data,
          {
            headers: {
              "access-token": this.$cookiz.get('usuario').token,
            },
          }
        );

        if (retorno.status == 200) {
          this.$bvModal.hide("validarmodal");
        }
      } catch (error) {
        console.log(error);
      }
    },
    loadFile: async function(name, url, file) {
      console.log("cargando el instrumental");
      var retorno = null;
      const form = new FormData();
      form.append(name, file);
      try {
        retorno = await axios.post(url, form, {
          headers: {
            "Content-Type": "multipart/form-data",
            "access-token": this.$cookiz.get('usuario').token,
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
