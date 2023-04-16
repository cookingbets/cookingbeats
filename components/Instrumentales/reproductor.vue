<template>
  <div id="reproductor" class="reproductor" v-bind:style="style">
    <div class="informacion">
      <img v-if="img != null" :src="img" alt="" />
      <div>
        <i v-if="vendedor != null">{{ vendedor.nombre }}</i>
      </div>
    </div>
    <div class="audio">
      <vue-plyr>
        <audio
          v-bind:src="sourse"
          controls
          nodownload
          autoplay
          buffered
        ></audio>
      </vue-plyr>
    </div>
    <div class="control">
      <b-button class="boton" @click="comprar">
        <span class="material-symbols-outlined">
          shopping_bag
        </span>
      </b-button>
      <b-button class="boton">
        <span class="material-icons" style="size: 10pt">thumb_up</span
        ><b-badge variant="light">{{ like }}</b-badge>
      </b-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "reproductor",
  components: {
    [process.client && 'VuePlyr']: () => import('vue-plyr'),
  },
  data() {
    return {
      id: null,
      img: null,
      sourse: "",
      title: null,
      description: null,
      precio: null,
      categoria: null,
      bpm: null,
      escala: null,
      vendedor: null,
      like: null,
      style: "bottom: -100px",
    };
  },
  methods: {
    async play(
      id,
      sourse,
      img,
      title,
      descripcion,
      precio,
      categoria,
      bpm,
      escala,
      vendedor,
      like
    ) {
      this.id = id;
      this.sourse = sourse;
      this.img = img;
      this.title = title;
      this.description = descripcion;
      this.precio = precio;
      this.categoria = categoria;
      this.bpm = bpm;
      this.escala = escala;
      this.vendedor = vendedor;
      this.like = like;
      var audio = document.querySelector("audio");
      audio.load();
      this.style = "bottom:0px";
    },
    varlidar: function() {
      return this.$cookiz.get('usuario') != undefined;
    },
    comprar: async function() {
      if (this.varlidar()) {
        var usuario = this.$cookiz.get('usuario');
        
        this.$router.push(`/compra/${this.id}`);
      } else {
        this.$router.push("/login");
      }
    },
    mg() {
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
              this.instrumental.like == null ? 1 : this.instrumental.like++;
            }
          });
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>
<style>
.reproductor {
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 1;

  bottom: 0px;
  left: 0px;
  width: 100%;
  min-height: 100px;
  background-color: var(--color4);
  border-radius: 20px 20px 0px 0px;
}

.informacion {
  display: flex;
  justify-content: space-around;
  width: 300px;
  font-size: 18px;
}

.audio {
  width: 50%;
  min-width: 320px;
}

.control {
  width: 300px;
}

.informacion img {
  height: 90px;
  border-radius: 10px;
}

.plyr__controls {
  background-color: var(--color4) !important;
  color: var(--color1) !important;
}

.plyr__controls input[type="range"] {
  color: var(--color2) !important;
}

.plyr__control[aria-expanded="true"],
.plyr__control:hover {
  background-color: var(--color6) !important;
}

.plyr__menu__container div {
  background-color: var(--color4) !important;
  color: var(--color1) !important;
}

.plyr__menu__container span {
  color: var(--color1) !important;
}

@media (max-width: 768px) {
  .reproductor {
    justify-content: center;
    flex-direction: column;
  }

  .reproductor div {
    width: 90%;
  }
}
</style>
