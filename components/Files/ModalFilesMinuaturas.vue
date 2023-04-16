<template>
    <div>
        <b-button v-b-modal.modalinstrumentales>
            <span class="material-symbols-outlined">
                image
            </span>
        </b-button>

        <b-modal id="modalinstrumentales" size="xl" title="BootstrapVue" header-bg-variant="dark" body-bg-variant="dark" footer-bg-variant="dark">
            <b-row>
                <b-col>
                    <b-form-file
                        v-model="minuatura"
                        placeholder="agrege una minuatura"
                        accept=".png, .jpg"
                    ></b-form-file>
                    <p class="mt-2">Miniatura Cargada: <b>{{ minuatura ? minuatura.name : '' }}</b></p>
                </b-col>
                <b-col>
                    <b-button @click="cargarMiniatura">
                        <span class="material-symbols-outlined">
                            upload
                        </span>
                    </b-button>
                </b-col>
            </b-row>
            <b-row>
                <b-card-group columns>
                    <b-card v-for="(miniatura, i) in files" :key="i" @click="seleccionarMinuatura(miniatura.id)"  :img-src="miniatura.url">
                        <b-card-text>
                            <button class="eliminar">
                                <span class="material-symbols-outlined">
                                    delete
                                </span>
                            </button>
                        </b-card-text>
                    </b-card>
                </b-card-group>
            </b-row>
        </b-modal>
    </div>
</template>
<style>
.eliminar{
    width: 30px;
    height: 30px;
    background-color: gray;
    border-radius: 30px;
    text-align: center;
    align-items: baseline;
    padding: 2px;
}

.eliminar span{
    font-size: 25px;
}

#dropzone{
    border: 3px dashed gainsboro;
    border-radius: 10px;
    background-color: transparent;
}

.dz-file-preview{
    background-color: var(--color2);
    border: 10px;
}
</style>
<script>
import axios from 'axios';

export default{
    name: "modalfiles",
    props:{
        type: String,
    },
    components:{
        
    },
    data(){
        return{
            minuatura: null
        }
    },
    mounted(){
        
        axios.get(`${this.$axios.defaults.baseURL}files/minuaturas`, {
            headers: {
              "access-token": this.$cookiz.get("usuario").token,
              "Content-Type": "application/json",
            },
          }).then(response=>{
            if(response.status == 200){
                console.log(response.data);
                this.files = response.data.rows;
            }
          }).catch(err =>{
            console.log(err);
          })    
    },
    methods:{
        seleccionarMinuatura(id){
            this.$emit('seleccionarMinuatura', id);
        },
        async cargarMiniatura(){
            var miniatura = await this.loadFile(
            "miniatura",
                `${this.$axios.defaults.baseURL}upload/miniatura`,
                this.minuatura
            );
        },
        loadFile: async function(name, url, file) {
        console.log("cargando el instrumental");
        var retorno = null;
        const form = new FormData();
        form.append(name, file);
        try {
          retorno = await axios.post(url, form, {
            headers: {
              "access-token": this.$cookiz.get("usuario").token,
              "Content-Type": "application/json",
            },
          });
          retorno = retorno.data;
        } catch (err) {
          console.log(err);
        }
        console.log("cargando el instrumental!!");
        return retorno;
      },
    }
}
</script>