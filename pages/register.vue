<template>
  <div class="container-fluid">
    <div class="row no-gutter">
      <div class="col-md-8 d-none d-md-flex bg-image-register"></div>
      <div class="col-md-4">
        <NuxtLink to="/">
          <span class="material-symbols-outlined">
            arrow_back_ios
          </span>
        </NuxtLink>
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 col-xl-7 mx-auto">
                <div class="d-flex justify-content-center">
                  <img src="/icons/logo.png" alt="" width="80px" />
                </div>
                <br />
                <b-form>
                  <b-form-group label="Nombre">
                    <FormulateInput :wrapper-class="['input_form']" type="text" v-model="nombre" validation="required"/>
                  </b-form-group>
                  <b-form-group label="Email">
                    <b-form-input v-model="email" type="email" required>
                    </b-form-input>
                    <p v-if="inputerr.email">
                      <b class="err-input"
                        >Ingrese un email.</b
                      >
                    </p>
                  </b-form-group>
                  <b-form-group label="Confirmar Email">
                    <b-form-input
                      v-model="confirmarEmail"
                      type="email"
                      required
                    >
                    </b-form-input>
                    <p v-if="inputerr.confirmarEmail">
                      <b class="err-input"
                        >Confirme el email.</b
                      >
                    </p>
                    <p v-if="inputerr.emailNoCoincide">
                      <b class="err-input"
                        >Los emails no coinciden.</b
                      >
                    </p>
                    <p v-if="inputerr.emailValido">
                      <b class="err-input"
                        >El email no es valido.</b
                      >
                    </p>
                  </b-form-group>
                  <b-form-group label="Contraseña">
                    <b-form-input
                      type="password"
                      v-model="contrasenia"
                      @blur="showErrContrasenia"
                      @click="focusContrasenia"
                      required
                    ></b-form-input>
                    <p v-if="inputerr.contrasenia">
                      <b class="err-input">Ingrese una contraseña.</b>
                    </p>
                    <p v-if="inputerr.longitud">
                      <b class="err-input">
                        La contrasenia no es suficientemente larga tiene que tener mas de 6 caracteres.
                      </b>
                    </p>
                    <p v-if="inputerr.mayusculas">
                      <b class="err-input">
                        La contraseña tiene que tener al menos una mayuscula.
                      </b>
                    </p>
                    <p v-if="inputerr.numeros">
                      <b class="err-input">
                        La contraseña tiene que tener al menos un numero
                      </b>
                    </p>
                    <p v-if="inputerr.caracteres">
                      <b class="err-input">
                        La contraseña tiene que tener al menos dos caracteres especiales.
                      </b>
                    </p>
                  </b-form-group>
                  <b-form-group label="Confirmar Contrasenia">
                    <b-form-input
                      type="password"
                      v-model="confirmarContrasenia"
                      required
                    ></b-form-input>
                    <b v-if="inputerr.confirmarContrasenia" class="err-input"
                      >Confirme la contraseña.</b
                    ><br />
                  </b-form-group>
                  <b-form-group class="container text-center">
                    <b-row class="">
                      <b-col
                        @click="mostrarComprador"
                        v-bind:class="classComprador"
                      >
                        Comprador
                        <span class="material-symbols-outlined">
                          shopping_cart
                        </span>
                      </b-col>
                      <b-col
                        @click="mostrarProducto"
                        v-bind:class="classVendedor"
                      >
                        Productor
                        <span class="material-symbols-outlined">
                          store
                        </span>
                      </b-col>
                    </b-row>
                  </b-form-group>
                  <b-form-group>
                    {{ terminosYCondiciones }}
                    
                      <b-form-checkbox v-model="terminosYCondiciones" value="true" unchecked-value="false">Acepto los terminos y condiciones</b-form-checkbox>
                    
                  </b-form-group>
                  <b-button block class="rounded-pill" @blur="blurRegistro" @click="registrar"
                    >Registrar
                    </b-button
                  >
                  <br />
                  <h6>
                    ¿Ya tenés cuenta?<a
                      ><nuxt-link to="/login"> Entrar</nuxt-link></a
                    >
                  </h6>
                </b-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { sha256, sha224 } from "js-sha256";

export default {
  name: "register",
  layout: "ingreso",
  data() {
    return {
      see: true,
      productor: false,
      nombre: "",
      email: "",
      confirmarEmail: "",
      contrasenia: "",
      confirmarContrasenia: "",
      terminosYCondiciones: false,
      classComprador: "selected border rounded-pill",
      classVendedor: "notSelected",
      inputerr:{
        nombre: false,
        email: false,
        confirmarEmail: false,
        contrasenia: false,
        confirmarContrasenia: false,
        longitud: false,
        mayusculas: false,
        numeros: false,
        caracteres: false,
        emailValido: false,
        emailNoCoincide: false,
      },
    };
  },
  methods: {
    mostrarProducto: function() {
      this.productor = true;

      this.classVendedor = "selected border rounded-pill";
      this.classComprador = "notSelected";
    },
    mostrarComprador: function() {
      this.productor = false;

      this.classVendedor = "notSelected";
      this.classComprador = "selected border rounded-pill";
    },
    validar: function() {
      return (
        this.nombre != "" &&
        this.email != "" &&
        this.confirmarEmail != "" &&
        this.contrasenia != "" &&
        this.confirmarContrasenia != "" &&
        this.email == this.email &&
        this.contrasenia == this.confirmarContrasenia
      );
    },
    validarEmail: function() {
      return this.email == this.confirmarEmail;
    },
    validarMayuscula(cadena){
      return /([a-z,0-9,\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\=,\+,\[,\],\',\",\;,\:,\<,\>,\.,\.,\?,\¿]*[A-Z][0-9,\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\=,\+,\[,\],\',\",\;,\:,\<,\>,\.,\.,\?,\¿,a-z]*)/g.test(cadena);
    },
    validarNumero(cadena){
      return /([a-z,A-Z,\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\=,\+,\[,\],\',\",\;,\:,\<,\>,\.,\.,\?,\¿]*[0-9][\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\=,\+,\[,\],\',\",\;,\:,\<,\>,\.,\.,\?,\¿,A-Z,a-z]*)/g.test(cadena);
    },
    validarCaracterEspecial(cadena){
      return /([a-z,A-Z,0-9]*[\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\=,\+,\[,\],\',\",\;,\:,\<,\>,\.,\.,\?,\¿][a-z,A-Z,0-9]*[\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\=,\+,\[,\],\',\",\;,\:,\<,\>,\.,\.,\?][a-z,A-Z,0-9]*)/g.test(cadena);
    },
    validarConstraseña(){
      var retorno = true;
      if(this.contrasenia != this.confirmarContrasenia) retorno = false;
      if(this.contrasenia.length < 6) retorno = false;
      if(!this.validarMayuscula(this.contrasenia)) retorno = false;
      if(!this.validarNumero(this.contrasenia)) retorno = false;
      if(!this.validarCaracterEspecial(this.contrasenia)) retorno = false;
      return retorno ;
    },
    showErrContrasenia(){
      if(this.contrasenia.length < 5) this.inputerr.longitud = true;
      if(!this.validarMayuscula(this.contrasenia)) this.inputerr.mayusculas = true;
      if(!this.validarNumero(this.contrasenia)) this.inputerr.numeros = true;
      if(!this.validarCaracterEspecial(this.contrasenia)) this.inputerr.caracteres = true;
    },
    focusContrasenia(){
      this.inputerr.longitud = false;
      this.inputerr.mayusculas = false;
      this.inputerr.numeros = false;
      this.inputerr.caracteres = false;
    },
    showErr(){
      if(this.nombre == "")this.inputerr.nombre = true;
      if(this.email == "")this.inputerr.email = true;
      if(this.confirmarEmail == "") this.inputerr.confirmarEmail = true;
      if(this.contrasenia == "") this.inputerr.contrasenia = true;
      if(this.confirmarContrasenia == "") this.inputerr.confirmarContrasenia = true;
    },
    blurRegistro(){
      this.inputerr.nombre = false;
      this.inputerr.email = false;
      this.inputerr.confirmarEmail = false;
      this.inputerr.contrasenia = false;
      this.inputerr.confirmarContrasenia = false;
    },
    registrar: function() {
      this.showErr()
      if (this.validar() && this.validarConstraseña() && this.validarEmail()) {
        var data = {
          productor: this.productor,
          nombre: this.nombre,
          email: this.email,
          contrasenia: this.hash(this.contrasenia),
        };

        axios
          .post(`${this.$axios.defaults.baseURL}auth/register`, data)
          .then((result) => {
            if (result.status == 200) {
              this.$cookiz.set("usuario", result.data, {
                path: "/",
                maxAge: 60 * 60 * 24 * 7,
              });
              this.$router.push("/perfil");
            } else if (result.status == 203) {
              alert("El usuario y existe!!");
            } else {
              console.log(result);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (this.validarConstraseña()) {
      } else if (this.validarEmail()) {
      }
    },
    hash(pwd) {
      return sha256
        .create()
        .update(pwd)
        .hex();
    },
  },
};
</script>

<style>
.bg-image-register {
  background-image: url("/producer_equipment.jpg");
  background-size: cover;
  background-position: center center;

  -webkit-animation: myfirst 5s; /* Chrome, Safari, Opera */
  animation: myfirst 1.2s;
}
</style>
