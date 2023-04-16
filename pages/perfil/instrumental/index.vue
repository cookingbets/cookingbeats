<template>
  <div>
    <Header></Header>
    <b-container fluid>
      <b-row>
        <b-col>
          <nuxt-link to="instrumental/add">
            <span class="material-symbols-outlined">
              add
            </span>
          </nuxt-link>
        </b-col>
      </b-row>
      <b-row>
        <Instrumental
          :instrumentales="instrumentales"
          v-on:ver="instrumentalVer"
          v-on:eliminar="instrumentalDelete"
        ></Instrumental>
      </b-row>
    </b-container>
    <InstrumentalView ref="InstrumentalView"></InstrumentalView>
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
</template>
<script>
import Header from "../../../components/Perfil/header.vue";
import Instrumental from "../../../components/Instrumentales/instrumentalEdit.vue";
import InstrumentalView from "../../../components/Perfil/instrumental.vue";
import axios from "axios";

export default {
  name: "instrumentalesPerfil",
  middleware: "login",
  components: {
    Header,
    Instrumental,
    InstrumentalView,
  
  },
  data() {
    return {
      instrumentales: [],
      rows: 0,
      perPage: 10,
      currentPage: 1,
    };
  },
  mounted() {
    console.log(this.instrumentales);
    this.loadInstrumentales(this.currentPage, this.perPage);
  },
  methods: {
    loadInstrumentales(page, rows) {
      axios
        .get(`http://localhost:3000/instrumental/user/${this.$cookiz.get('usuario').id}?page=${page}&rows=${rows}`, {
          headers: {
            "access-token": this.$cookiz.get('usuario').token,
          },
        })
        .then((result) => {
          if (result.status == 200) {
            this.instrumentales = result.data.data;

            this.rows = parseInt(result.data.total);

            console.log(this.rows, this.currentPage)
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    instrumentalVer: function(instrumental) {
      console.log(instrumental);
      this.$refs.InstrumentalView.load(instrumental);
      this.$bvModal.show("instrumental_data");
    },
    instrumentalesEdit: function(instrumental){
      
    },
    instrumentalDelete: function(instrumental){
      axios.delete(`http://localhost:3000/instrumental/${instrumental}`).then(result =>{
        if(result.status == 200){
          this.loadInstrumentales();
        }
      }).catch(err => {
        console.log(err);
      })
    },
    change(pagina){
      this.loadInstrumentales(pagina, this.perPage);
    },
    addInstrumental(){
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
    }
  },
};
</script>
