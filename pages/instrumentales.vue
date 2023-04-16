<template>
  <div>
    <b-container fluid>
      <div>
        <b-row>
          <b-col cols="2">
            <b-button v-b-toggle.collapse-1 class="color-6" size="sm" style="font-size: 16px; margin: none; padding: none;">
              <span class="material-symbols-outlined">
                filter_list
              </span>
            </b-button>
          </b-col>
          <b-col cols="10">
            <b-nav-form class="buscador">
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
                v-model="search"
              ></b-form-input>
              <b-button style="margin-left: 5px;" size="sm" class="my-2 my-sm-0" v-on:click="searching" >
                <span style="font-size: 16px; margin: none; padding: none;" class="material-symbols-outlined">
                  search
                </span>
              </b-button>
            </b-nav-form>
          </b-col>
        </b-row>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card  class="bg-dark text-white instrumental categorias" style="width: 100%; height: 150px;">
          <b-row>
            <b-col>
              <div class="m-2">
                <chepbar :data="categorias" @select="filterCategoria"></chepbar>
                <chepbar :data="bpms" @select="filterBpm"></chepbar>
                <chepbar :data="escalas" @select="filterEscala"></chepbar>          
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-collapse>
    </div>
        <div class="instrumentales-contendor">
          <Instrumental
          v-for="(instrumental, i) in instrumentales"
          v-bind:key="i"
          v-bind:instrumental="instrumental"
          v-on:reproducir="reproducir"
          :index="i"
        ></Instrumental>
        </div>
        <div class="content-center">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            pills
            @change="change"
            first-number
            last-number
          ></b-pagination>
          
        </div>
        <reproductor ref="reproductor"></reproductor>
    </b-container>
  </div>
</template>
<style>
.instrumentales-contendor{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 50px;
}
.form-inline{
  flex-flow: row!important;
  position: absolute;
  right: 0px;
  width: 200px;
  margin-top: 10px;
}
.pagination{
  display: flex;
  justify-content: center;
}

.buscador {
  margin-right: 55px;
}
.content-center {
  justify-content: center;
}

.v-slide-group__content > .v-chip {
  pointer-events: all;
}
.categorias {
  height: 185px!important;
  animation: 0.3s ease-out 0s 1 slideInFromTop;
}
@keyframes slideInFromTop {
  0% {
    transform: translateY(-10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.pagination button, .page-item.disabled .page-link{
  background-color: #555;
  border: #555;
  color: var(--color1);
}

.pagination button:hover, .page-item.disabled .page-link:hover{
  background-color: var(--color2);
  color: var(--color1);
}

.pagination .page-item.active .page-link{
  background-color: var(--color6);
  color: var(--color1);
  z-index: 1;
}
@media screen and (max-width: 799px) {
  .instrumentales-contendor{
    justify-content: center;
  }
  .buscador {
    margin-right: 15px;
  }
}
</style>
<script>
import Instrumental from "../components/Instrumentales/instrumental.vue";
import reproductor from "../components/Instrumentales/reproductor.vue";
import Pagination from 'vue-pagination-2';
import chepbar from '../components/Utilidades/chip-bar.vue';
import axios from "axios";

export default {
  name: "instrumentales",
  components: {
    Instrumental,
    Pagination,
    reproductor,
    chepbar
  },
  data() {
    return {
      instrumentales: [],
      total: 0,
      pagina: 1,
      categorias: [],
      bpms: [],
      escalas: [],
      rows: 50,
      perPage: 10,
      currentPage: 1,

      escala: null,
      bpm: null,
      categoria: null,

      search: ""
    };
  },
  mounted() {
    this.load(this.currentPage, this.perPage);
    axios
      .get(`${this.$axios.defaults.baseURL}categorias`)
      .then((result) => {
        if (result.status == 200) this.categorias = result.data;
      })
      .catch((err) => console.log(err));
    axios
      .get(`${this.$axios.defaults.baseURL}bpms`)
      .then((result) => {
        if (result.status == 200) this.bpms = result.data;
      })
      .catch((err) => console.log(err));
    axios
      .get(`${this.$axios.defaults.baseURL}escalas`)
      .then((result) => {
        if (result.status == 200) this.escalas = result.data;
      })
      .catch((err) => console.log(err));
  },
  methods:{
    load(page, rows){
      var url = `http://localhost:3000/instrumental?page=${page}&rows=${rows}`;

      (this.bpm)? url += `&bpm=${this.bpm}`: null;
      (this.escala)? url += `&escala=${this.escala}`:null;
      (this.categoria)? url += `&categoria=${this.categoria}`:null;
      (this.search)? url += `&search=${this.search}`: null;

      axios
      .get(url)
      .then((result) => {
        if(result.status == 200){
          console.log(result.data.pagin);
          this.instrumentales = result.data.data;

          this.rows = parseInt(result.data.pagin.total);

          console.log(this.rows, this.currentPage)
        }
      })
      .catch((err) => {
        console.log(err);
      });
    },
    change(pagina){
      this.load(pagina, this.perPage);
    },
    reproducir(id){
      var instrumental = this.instrumentales[id];
      this.$refs.reproductor.play(instrumental.id, instrumental.tieneMp3.url, (instrumental.tieneMiniatura != null)? instrumental.tieneMiniatura.url: null, instrumental.nombre, instrumental.descripcion, instrumental.precio, (instrumental.Categoria)?instrumental.Categoria.categoria:null, (instrumental.Bpm)?instrumental.Bpm.bpm:null, (instrumental.Escala)?instrumental.Escala.escala:null, instrumental.Vendedor, instrumental.likes);
    },
    filterBpm(id){
      (id != 0)? this.bpm = id: this.bpm = null;
      this.load(this.currentPage, this.perPage);
    },
    filterEscala(id){
      (id != 0)?this.escala = id: this.escala = null;
      this.load(this.currentPage, this.perPage);
    },
    filterCategoria(id){
      (id != 0)?this.categoria = id: this.categoria = null;
      this.load(this.currentPage, this.perPage);
    },
    searching(){
      if(this.search){
        this.load(this.currentPage, this.perPage)
      }
    }
  }
};
</script>
