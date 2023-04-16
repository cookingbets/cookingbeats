<template>
  <div>
    <b-button v-b-modal.mercadopago>Launch demo modal</b-button>

    <b-modal
      id="mercadopago"
      title="Mercado Pago"
      body-bg-variant="dark"
      header-bg-variant="dark"
      hide-footer
    >
      <div>
        <p class="my-4">
        Para conectar mercado pago a nuestro sistema tiene que seguir las
        siguientes instruecciones
      </p>
      <ul>
        <li>
            Obten las credenciales de
          <a
            href="https://www.mercadopago.com.ar/settings/account/credentials"
            target="_blank"
            >mercado pago credenciales</a
          >
        </li>
        <li>
            Copie la Public Key y el Access Token y coloquelo en los siguientes campos.
        </li>
      </ul>
      <div>
        <b-form-group label="Public Key">
          <FormulateInput
            v-model="public_key"
            type="text"
            name="Public Key"
            :validation="[['matches', /TEST-[0-9,a-z]{8}-[0-9,a-z]{4}-[0-9,a-z]{4}-[0-9,a-z]{4}-[0-9,a-z]{12}$/]]"
            :wrapper-class="['input_form']"
            required
          ></FormulateInput>
        </b-form-group>
        <b-form-group label="Access Token">
          <FormulateInput
            v-model="access_token"
            type="password"
            name="Access Token"
            :wrapper-class="['input_form']"
            :validation="[['matches', /TEST-[0-9,a-z]{15}-[0-9,a-z]{6}-[0-9,a-z]{32}-[0-9,a-z]{10}/]]"
            required
          ></FormulateInput>
        </b-form-group>
        <b-button variant="outline-primary" @click="cargarCredenciales()"
          >Cargar Credenciales</b-button
        >
      </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      access_token: null,
      public_key: null,
    };
  },
  methods: {
    cargarCredenciales() {
      if (this.public_key && this.access_token) {
        axios
          .post(
            `${this.$axios.defaults.baseURL}vendedor/mercadopago/`,
            {
              access_token: this.access_token,
              public_key: this.public_key,
            },
            {
              headers: {
                "access-token": this.$cookiz.get('usuario').token,
                "Content-Type": "application/json",
              },
            }
          )
          .then((result) => {
            if (result.status == 200) {
              this.$bvModal.hide("mercadopago");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
