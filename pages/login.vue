<template>
  <div>
    <b-row>
      <div class="col-md-8 d-none d-md-flex bg-image"></div>
      <div class="col-md-4">
        <br>
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
                  <b-form-group id="input-group-1" label-for="input-1">
                    <b-form-input
                      v-model="form.email"
                      type="email"
                      placeholder="Ingrese Email"
                      @change="removeerror"
                      id="email"
                      @blur="clearerr"
                      required
                    ></b-form-input>
                    <b v-if="inputerr.email_invalid" class="err-input"
                      >Ingrese un Email valido.</b
                    ><br />
                    <b v-if="inputerr.email_void" class="err-input"
                      >Ingrese un Email.</b
                    >
                  </b-form-group>
                  <b-form-group id="input-group-1" label-for="input-1">
                    <b-form-input
                      v-model="form.password"
                      type="password"
                      placeholder="Ingrese Contraseña"
                      @change="removeerror"
                      id="password"
                      @blur="clearerr"
                      required
                    ></b-form-input>
                    <b v-if="inputerr.password_invalid" class="err-input"
                      >Ingrese una contraseña valida.</b
                    >
                    <b v-if="inputerr.password_void" class="err-input"
                      >Ingrese una contraseña valida.</b
                    >
                  </b-form-group>
                  <b-form-group>
                    <b-alert
                      show
                      variant="danger"
                      v-for="(erro, i) in error"
                      v-bind:key="i"
                      >{{ erro }}</b-alert
                    >
                  </b-form-group>
                  <b-button
                    @click="login"
                    class="button btn-block text-uppercase mb-2 rounded-pill"
                    block
                    variant="none"
                    >Login</b-button
                  >
                  <h6>
                    ¿Aún no tenés cuenta?<a
                      ><nuxt-link to="/register"> Registrarse</nuxt-link></a
                    >
                  </h6>
                </b-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-row>
  </div>
</template>
<script>
import axios from "axios";
import { sha256, sha224 } from "js-sha256";
import { Base64 } from "js-base64";

export default {
  name: "login",
  layout: "ingreso",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: [],
      inputerr: {
        email_void: false,
        password_void: false,
        email_invalid: false,
        password_invalid: false,
      },
      styles: {
        email_input: "",
        email_password: "",
      },
    };
  },
  mounted() {
    console.log(this.$cookiz.get('usuario'))
  },
  methods: {
    login() {
      this.removeerror();
      if (this.form.email != "" && this.form.contrasenia != "") {
        this.send();
      }
      if (this.form.email == "") {
        document
          .getElementById("email")
          .setAttribute("class", "form-control form-control-err");
        this.inputerr.email_void = true;
      }
      if (this.form.password == "") {
        document
          .getElementById("password")
          .setAttribute("class", "form-control form-control-err");
        this.inputerr.password_void = true;
      }
    },
    send() {
      axios
        .post(`${this.$axios.defaults.baseURL}auth`, {
          email: this.form.email,
          contrasenia: this.hash(this.form.password),
        })
        .then(async(result) => {
          console.log(result);
          if (result.status == 200) {
            await this.$cookiz.set("usuario", result.data, {
              maxAge: 60 * 60 * 24 * 7,
              httpOnly:false
            });
            this.$router.push("/perfil");
          } else {
          }
          console.log(this.error);
        })
        .catch((err) => {
          if (err.response.status == 401) {
            document
              .getElementById("email")
              .setAttribute("class", "form-control form-control-err");
            document
              .getElementById("password")
              .setAttribute("class", "form-control form-control-err");
            this.inputerr.password_invalid = true;
            this.inputerr.email_invalid = true;
          }
        });
    },
    removeerror: function() {
      this.error = [];
      this.inputerr.email_void = false;
      this.inputerr.password_void = false;
      this.inputerr.email_invalid = false;
      this.inputerr.password_invalid = false;
    },
    clearerr() {
      document.getElementById("email").setAttribute("class", "form-control");
      document.getElementById("password").setAttribute("class", "form-control");
      this.inputerr.email_void = false;
      this.inputerr.password_void = false;
      this.inputerr.email_invalid = false;
      this.inputerr.password_invalid = false;
    },
    onReset(event) {
      event.preventDefault();
      this.form.email = "";
      this.form.password = "";
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
.login {
  animation: 0.8s slide-left;
}
@keyframes slide-left {
  from {
    margin-left: 30%;
  }
  to {
    margin-left: 0%;
  }
}

.login,
.image {
  min-height: 95vh;
}

h6 {
  -webkit-animation: appear 5s; /* Chrome, Safari, Opera */
  animation: appear 1.5s;
}

/* Chrome, Safari, Opera */
@-webkit-keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Standard syntax */
@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.bg-image {
  background-image: url("/beatmaker.jpg");
  background-size: cover;
  background-position: center center;

  -webkit-animation: myfirst 5s; /* Chrome, Safari, Opera */
  animation: myfirst 1.2s;
}
/* Chrome, Safari, Opera */
@-webkit-keyframes myfirst {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}

/* Standard syntax */
@keyframes myfirst {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}

.button {
  display: inline-block;
  height: 37.6px;
  border-radius: 10rem;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.button:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #40059b;
  border-radius: 10rem;
  z-index: -2;
}
.button:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: #008fb3;
  transition: all 0.3s;
  border-radius: 10rem;
  z-index: -1;
}
.button:hover {
  color: #fff;
}
.button:hover:before {
  width: 100%;
}
</style>
