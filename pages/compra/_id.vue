<template>
  <div>
    <h3 style="margin: 0 30px">Finalizar compra</h3>
    <div class="contenedor-compra">
      <div class="instrumental-compra" v-if="instrumental">
        <Instrumental v-bind:instrumental="instrumental"></Instrumental>
      </div>
      <div class="reproductor-compra">
        <reproductor ref="reproductor" style="position: relative"></reproductor>
      </div>
      <div class="contenedor-licencia">
        <v-card-title style="color: #fff">Elige tu licencia</v-card-title>
        <label
          v-for="(licencia, i) in licencias"
          v-bind:key="i"
          :index="i"
          :for="'licencia-'+i"
        >
          <input type="radio" v-model="licenciaSelected" class="radio" :value="licencia.id" :id="'licencia-'+i">
          <v-card color="rgba(32,33,53,0.4)" class="licenciacard">
            <v-card-text>
              <v-chip v-if="licencia.isfree == 0" style="background-color: var(--color8); color: white;">
                <span class="material-symbols-outlined">
                attach_money
                </span>
                {{ licencia.precio }}
            </v-chip>
            <v-chip v-else style="background-color: var(--color8); color: white;" title="Licencia Gratis">
              <span class="material-symbols-outlined">
                redeem
              </span>
              Free
            </v-chip>
              <v-chip v-for="(ambito, j) in licencia.tieneAmbitos" :key="j" style="background-color: var(--color2)">
                Ambitos: {{ ambito.nombre }}
              </v-chip>
            </v-card-text>
          </v-card>
        </label>
      </div>
    </div>
    <b-button class="boton-finalizar" @click="finalizar">Finalizar</b-button>
  </div>
</template>
<style>
.contenedor-compra {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  margin: 50px auto;
  padding: 50px;
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 2px 20px 0 rgba(64, 5, 155, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.instrumental-compra {
  width: 205px;
}
.instrumental-compra > .music-card {
  pointer-events: none;
}
.reproductor-compra {
  width: 350px;
  height: 128px;
  display: inline-block;
}
.reproductor-compra > .reproductor {
  background-color: rgba(255, 255, 255, 0);
}
.reproductor-compra > .reproductor > .control {
  display: none;
}
.reproductor-compra > .reproductor > .audio > .plyr > .plyr__controls {
  background-color: rgba(255, 255, 255, 0) !important;
}
.reproductor-compra > .reproductor > .audio > .plyr {
  background-color: rgba(255, 255, 255, 0.25) !important;
}
.reproductor-compra > .reproductor > .audio {
  margin-left: 4%;
}
.contenedor-licencia {
  display: inline-grid;
  background-color: rgba(255, 255, 255, 0);
  color: #fff;
}
.contenedor-licencia > .v-card {
  border: none;
}
.licencia {
  background-color: #40059b;
  pointer-events: all;
  color: #fff;
}
.v-chip--active {
  background-color: #7c38e3;
}
.boton-finalizar {
  position: relative;
  left: 45%;
  margin-bottom: 50px;
}

.reproductor-compra > .reproductor > .audio > .plyr {
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.25) !important;
}

.radio{
  display: none;
}

.radio:checked + .licenciacard{
  box-shadow: 0px 0px 1px 1px var(--color8) !important;
}

@media (max-width: 750px) {
  .contenedor-compra {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .reproductor-compra > .reproductor > .audio > .plyr {
    background-color: rgba(255, 255, 255, 0) !important;
  }
  .reproductor-compra > .reproductor > .audio {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.25) !important;
    margin: 0 auto;
  }
  .reproductor-compra {
    width: 300px;
    height: 128px;
    display: inline-block;
  }
  .boton-finalizar {
    left: 40%;
  }
}
</style>
<script>
import axios from "axios";
import Instrumental from "../../components/Instrumentales/instrumental.vue";
import reproductor from "../../components/Instrumentales/reproductor.vue";

export default {
  name: "compra",
  components: {
    Instrumental,
    reproductor,
  },
  middleware: "login",
  data() {
    return {
      instrumental: null,
      licencias: null,
      selection: 1,
      licenciaSelected: null,
      licenciaSelectedObject: null
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    varlidar: function () {
      return this.$cookiz.get("usuario") != undefined;
    },
    load() {
      axios
        .get(`http://localhost:3000/instrumental/${this.$route.params.id}`)
        .then((result) => {
          if (result.status == 200) {
            this.instrumental = result.data.instrumental;
            this.licencias = result.data.licencia;
            this.$refs.reproductor.play(
              this.instrumental.id,
              this.instrumental.tieneMp3.url,
              null,
              this.instrumental.nombre,
              this.instrumental.descripcion,
              this.instrumental.precio,
              this.instrumental.Categoria
                ? this.instrumental.Categoria.categoria
                : null,
              this.instrumental.bpm ? this.instrumental.bpm : null,
              this.instrumental.Escala ? this.instrumental.Escala.escala : null,
              this.instrumental.Vendedor,
              this.instrumental.likes
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    selectLicencia(i) {
      console.log(this.$refs.licencia[i]);
    },
    finalizar: async function () {
      if (this.varlidar()) {
        
        try {
          var response = await axios.post(
            `http://localhost:3000/instrumental/buy/${this.instrumental.id}`,
            {
              idlicencia: this.licenciaSelected
            },
            {
              headers: {
                "access-token": this.$cookiz.get("usuario").token,
                "Content-Type": "application/json",
              },
            }
          );
          if (response.status == 200) {
            var data = response.data;
            if(!licencia.isfree == 0){
              this.$router.push('/perfil/compras');
            }else{
              var compra = window.open(data.data.sandbox_init_point);
              compra.onbeforeunload = (e) => {
                console.log(e);
                axios
                  .get(
                    `http://localhost:3000/compras/carga?external_reference=${external_reference}`,
                    {
                      headers: {
                        "access-token": this.$cookiz.get("usuario").token,
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
            }
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
  },
};
</script>
