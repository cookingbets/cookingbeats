<template>
<div class='music-card' tabindex='1' @click="reproducir($event)">
  <div class='image'>
    <img 
        v-if="instrumental.tieneMiniatura != null" 
        v-bind:src="instrumental.tieneMiniatura.url" 
        onerror="this.src='https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_960_720.png'"
         alt="" />
        <img v-else src="/img.png" alt="">
  </div>
  <div class='wave'></div>
  <div class='wave'></div>
  <div class='wave'></div>
  <div class='info'>
    <div class="row pointer-events-none">
          <div class="col-8">
            <p class="nombre">{{instrumental.nombre}}</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <v-chip
              v-if="instrumental.Escala"
              style="background-color: var(--color7);color: white;"
            >
              {{ instrumental.Escala ? instrumental.Escala.escala: "" }}
            </v-chip>
            <v-chip
              style="background-color: var(--color7);color: white;"
            >
            {{ instrumental.Bpm? instrumental.Bpm.bpm : instrumental.bpm }} Bpm
            </v-chip>
          </div>
        </div>
  </div>
</div>
</template>
<style>
@-webkit-keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
body {
  background: #fafafa;
}

.music-card {
  animation: 0.5s ease-out 0s 1 slideInFromLeft;
  margin: 1.5%;
  border-radius: 6px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  position: relative;
  width: 200px;
  height: 300px;
  cursor: pointer;
  pointer-events: all;
}

.music-card:hover {
  transition: 0.3s;
  opacity: 0.6;
}

.music-card > .image img {
  z-index: 1;
  opacity: 1;
  height: 300px;
  width: 300px;
}

.music-card  > .info, .nombre, .col-8, .info, .v-chip, .v-chip__content, .image {
  pointer-events: none;
}

.music-card > .image:after {
  height: 100px;
  content: "";
  top: 100px;
  position: absolute;
  width: 100%;
  z-index: 1;
}

.waves > .wave {
  position: absolute;
  height: 530px;
  width: 530px;
  opacity: 0.3;
  left: 0;
  top: 0;
  margin-left: -70%;
  margin-top: -130%;
  border-radius: 40%;
  background: radial-gradient(#b01de8, #f34235);
  -webkit-animation: spin 6000ms infinite linear;
  animation: spin 6000ms infinite linear;
}

.waves > .wave:nth-child(2) {
  top: 10px;
  -webkit-animation: spin 12000ms infinite linear;
  animation: spin 12000ms infinite linear;
}

.waves > .wave:nth-child(3) {
  top: 10px;
  -webkit-animation: spin 17000ms infinite linear;
  animation: spin 17000ms infinite linear;
}

.music-card > .info {
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 0;
  text-align: center;
}

.music-card > .info > .title {
  font-size: 1.3em;
  font-weight: 400;
  font-family: "Playfair display";
  color: #333;
  margin-bottom: 8px;
}

.music-card > .info > .artist {
  font-family: "Source sans pro";
  color: #cfcfcf;
  font-size: 0.8em;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-20%);
    opacity: 0.3;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@media screen and (max-width: 799px) {
  .music-card {
  margin-left: 10px auto;
  border-radius: 6px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  position: relative;
  width: 200px;
  height: 300px;
}
}
</style>
<script>
import axios from "axios";

export default {
  name: "instrumental",
  props: {
    instrumental: Object,
    index: Number
  },
  data() {
    return {
    };
  },
  mounted() {
    console.log(this.instrumental);
  },
  methods: {
    varlidar: function () {
      return this.$cookiz.get('usuario') != undefined;
    },
    comprar: async function () {
      if (this.varlidar()) {
        var usuario = this.$cookiz.get('usuario');
        //pericionamos la compra de un instrumental

        try {
          var response = await axios.get(
            `http://localhost:3000/instrumental/buy/${this.instrumental.id}`,
            {
              headers: {
                "access-token": this.$cookiz.get('usuario').token,
              },
            }
          );
          console.log(response.status);
          if (response.status == 200) {
            console.log(response.data.body.sandbox_init_point);
            var compra = window.open(response.data.sandbox_init_point);
            compra.onbeforeunload = (e) => {
              axios
                .get(
                  `http://localhost:3000/compras/carga?external_reference=${external_reference}`,
                  {
                    headers: {
                      "access-token": this.$cookiz.get('usuario').token,
                    },
                  }
                )
                .then((result) => {
                  if (result.status == 200) {
                    this.$router.push("/perfil/compras");
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            };
          } else {
            console.log("error cargando el mensaje");
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        this.$router.push("/login");
      }
    },
    like() {
      if (this.varlidar) {
        axios
          .post(
            `${this.$axios.defaults.baseURL}instrumental/like/${this.instrumental.id}`,
            {},
            {
              headers: {
                "access-token": this.$cookiz.get('usuario').token,
              },
            }
          )
          .then((result) => {
            if ((result.status = 200)) {
              this.instrumental.likes == null ? 1 : this.instrumental.likes++;
            }
          });
      } else {
        this.$router.push("/login");
      }
    },
    reproducir(event) {
      this.$emit("reproducir", this.index);
      
      var audio = document.getElementsByTagName('audio')[0];
      var cards = document.getElementsByClassName('music-card');

      
      audio.onplay = () => {
        event.target.classList.add('waves');
      }

      audio.onpause = () => {
        event.target.classList.remove('waves');
      }

      var removeClass = function(index) {
        cards.forEach((card) => {
          if(card.__vue__ != index) {
            card.classList.remove('waves');
          }
        })
      }
      removeClass(this)
    },
  },
};
</script>
