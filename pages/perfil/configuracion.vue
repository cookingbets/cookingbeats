<template>
  <div>
    <Header></Header>
    <b-container>
      <b-row>
        <b-col>
          <hr />
          <h3>Mercado Pago</h3>
          <mercadopago></mercadopago>
          <hr />
            <Nombre></Nombre>
            
          <hr />
          <h3>Cambiar Contraseña</h3>
          <b-form-group
            label="Contraseña Actual"
            description="Ingrese su contraseña actual"
          >
            <FormulateInput 
              v-model="contraseña.actual"
              type="password"
              :wrapper-class="['input_form']"
              @focus="inputfocus"
            ></FormulateInput >
          </b-form-group>
          <b-form-group
            label="Contraseña Nueva"
            description="Ingrese la nueva contraseña"
          >
            <FormulateInput
              v-model="contraseña.nueva"
              type="password"
              :wrapper-class="['input_form']"
              @focus="inputfocus"
            ></FormulateInput>
          </b-form-group>
          <b-form-group
            label="Confirmar Contraseña Nueva"
            description="Confirme la nueva contraseña"
          >
            <FormulateInput
              v-model="contraseña.confirmacion"
              type="password"
              :wrapper-class="['input_form']"
              @focus="inputfocus"
            ></FormulateInput>
          </b-form-group>
          <b-form-group>
            <b-button variant="dark" v-on:click="cambiarContrasenia"
              >Cambiar Contraseña</b-button
            >
          </b-form-group>
          <p
            class="text-danger"
            v-for="(text, i) in mensajesDeError.contraseniaNueva"
            v-bind:key="i"
          >
            {{ text }}
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h3>Validar usuario</h3>
          <p>Este paso es necesario para que puedas comenzar a vender tus instrumentales. Por eso necesitamos que cargues los siguientes datos para poder validarte: foto frontal y de dorso del dni, y una foto de perfil.</p>
          <validar></validar>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Header from "../../components/Perfil/header.vue";
import Validar from '../../components/Perfil/validar.vue';
import mercadopago from '../../components/Mercadopago/carga.vue';
import Nombre from '../../components/Perfil/nombre.vue';
import axios from "axios";
import { sha256, sha224 } from "js-sha256";

export default {
  name: "perfilConfiguracion",
  middleware: "login",
  components: {
    Header,
    Validar,
    mercadopago,
    Nombre
  },
  data() {
    return {
      urlEnved: null,
      usuario: {
        nombre: null,
        email: null,
      },
      contraseña: {
        actual: "",
        nueva: "",
        confirmacion: "",
      },
      clasesError: {
        contraseniaActual: "",
        contraseniaNueva: "",
        contraseniaConfirmar: "",
      },
      mensajesDeError: {
        contraseniaActual: [],
        contraseniaNueva: [],
      },
    };
  },
  mounted() {
    this.usuario.nombre = this.$cookiz.get("usuario").nombreusuario;
    this.usuario.email = this.$cookiz.get("usuario").email;
  },
  methods: {
    mercadopago: function () {
      axios
        .get("http://localhost:3000/vendedor/mercadopago/",{
          headers: {
            "access-token": this.$cookiz.get('usuario').token,
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          if (result.status == 200) {
            var mercadopago = window.open(result.data);
            /*var usuario = this.$cookiz.get('usuario');
            mercadopago.onbeforeunload = (e) => {
              console.log(e.target.URL.split("?")[1].split("=")[1]);
              console.log(usuario);

              const options = {
                method: "GET",
                url: "http://localhost:3000/vendedor/mercadopago/setcredentials",
                params: { code: e.target.URL.split("?")[1].split("=")[1] },
                headers: {
                  "access-token": usuario.token,
                },
              };

              axios
                .request(options)
                .then(function (response) {
                  console.log(response.data);
                })
                .catch(function (error) {
                  console.error(error);
                });
            };
	    */
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadcode: function (code) {
      console.log(code);
    },
    cambiarDatos: function () {
      if (this.$cookiz.get("usuario").nombreusuario != this.usuario.nombre) {
        axios
          .put(
            "http://localhost:3000/usuario/edit/nombre",
            { nombre: this.usuario.nombre, id: this.$cookiz.get("usuario").id },
            { headers: { "access-token": this.$cookiz.get("usuario").token } }
          )
          .then((result) => {
            if (result.status == 200) {
              this.$cookiz.set("usuario", this.$cookiz.get("usuario").nombreusuario = result.nombreusuario);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }

      if (this.$cookiz.get('usuario').email != this.usuario.email) {
        axios
          .put(
            "http://localhost:3000/usuario/edit/email",
            { email: this.usuario.email, id: this.$cookiz.get('usuario').id },
            { headers: { "access-token": this.$cookiz.get('usuario').token } }
          )
          .then((result) => {
            if (result.status == 200) {
              this.$store.commit("email", this.usuario.email);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    cambiarContrasenia: function () {
      console.log(
        this.hash(this.contraseña.actual),
        this.$cookiz.get('usuario').contraseña
      );
      console.log(
        this.contraseña.actual != this.contraseña.nueva &&
          this.contraseña.nueva == this.contraseña.confirmacion &&
          this.hash(this.contraseña.actual) ==
            this.$cookiz.get('usuario').contraseña
      );

      if (
        this.contraseña.actual != "" &&
        this.contraseña.nueva != "" &&
        this.contraseña.confirmacion != "" &&
        this.contraseña.actual != this.contraseña.nueva &&
        this.contraseña.nueva == this.contraseña.confirmacion &&
        this.hash(this.contraseña.actual) ==
          this.$cookiz.get('usuario').contraseña
      ) {
        axios
          .put(
            "http://localhost:3000/usuario/edit/contrasenia",
            {
              actual: this.$cookiz.get('usuario').contraseña,
              nueva: this.hash(this.contraseña.nueva),
            },
            { headers: { "access-token": this.$cookiz.get('usuario').token } }
          )
          .then((result) => {
            if (result.status == 200) {
              console.log("contraseña cambiada");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        if (this.contraseña.actual == this.contraseña.nueva) {
          this.clasesError.contraseniaActual = "input-danger";
          this.mensajesDeError.contraseniaNueva.push(
            "La nueva contraseña es igual a la contraseña actual"
          );
        }

        if (this.contraseña.nueva != this.contraseña.confirmacion) {
          this.clasesError.contraseniaNueva = "input-danger";
          this.clasesError.contraseniaConfirmar = "input-danger";
          this.mensajesDeError.contraseniaNueva.push(
            "Las contraseñas no conciden"
          );
        }

        if (
          this.hash(this.contraseña.actual) !=
          this.$cookiz.get('usuario').contraseña
        ) {
          this.clasesError.contraseniaActual = "input-danger";
          this.mensajesDeError.contraseniaActual.push(
            "La contraseña ingresada es incorrecta"
          );
        }
      }
    },
    inputfocus: function () {
      this.clasesError.contraseniaActual = "";
      this.clasesError.contraseniaNueva = "";
      this.clasesError.contraseniaConfirmar = "";

      this.mensajesDeError.contraseniaActual = [];
      this.mensajesDeError.contraseniaNueva = [];
    },
    hash: function (pwd) {
      return sha256.create().update(pwd).hex();
    },
  },
};
</script>
<style>
</style>
