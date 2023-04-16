<template>
  <div>
    <b-container>
      <b-form>
        <b-form-group label="Nombre">
          <b-form-input type="text" v-model="form.nombre"></b-form-input>
        </b-form-group>
        <b-form-group label="Descripcion">
          <b-form-textarea v-model="form.descripcion"></b-form-textarea>
        </b-form-group>
        <b-form-group label="Precio">
          <b-form-input type="number" v-model="form.precio"></b-form-input>
        </b-form-group>
        <b-row>
          <b-col sm>
            <b-form-group label="Categoria">
              <b-form-input type="text" v-model="form.categoria"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm>
            <b-form-group label="BPM">
              <b-form-input type="text" v-model="form.bpm"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm>
            <b-form-group label="Escala">
              <b-form-input type="text" v-model="form.escala"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm>
            <b-form-group label="Minuatura">
              <b-img thumbnail v-bind:src="views.minuatura"></b-img>
            </b-form-group>
          </b-col>
          <b-col sm>
            <b-form-group label="Mp3">
              <audio v-bind:src="views.mp3" controls></audio>
            </b-form-group>
          </b-col>
          <b-col sm>
            <b-form-group label="Wav">
              <audio v-bind:src="views.wav" controls></audio>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm>
            <b-form-group label="Minuatura">
              <b-form-file
                v-model="form.miniatura"
                placeholder="agrege una minuatura"
                accept=".png, .jpg"
              ></b-form-file>
            </b-form-group>
          </b-col>
          <b-col sm>
            <b-form-group label="Mp3">
              <b-form-file
                v-model="form.mp3"
                placeholder="Agregar el MP3 aqui"
                drop-placeholder=""
                accept=".mp3"
              ></b-form-file>
            </b-form-group>
          </b-col>
          <b-col sm>
            <b-form-group label="Wav">
              <b-form-file
                v-model="form.wav"
                placeholder="Agregar el WAV aqui"
                drop-placeholder=""
                accept=".wav"
              ></b-form-file>
            </b-form-group>
          </b-col>
        </b-row>
        <hr />
        <b-form-group>
          <b-button @click="edit" class="btn boton">Editar</b-button>
        </b-form-group>
      </b-form>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "editar",
  middleware: "login",
  data() {
    return {
      form: {
        nombre: "",
        descripcion: "",
        precio: 0,
        categoria: "",
        bpm: "",
        escala: "",
        miniatura: null,
        mp3: null,
        wav: null,
        sample: null,
      },
      views: {
        minuatura: null,
        mp3: null,
        wav: null,
        sample: null,
      },
    };
  },
  components: {
  },
  mounted() {
    this.load();
  },
  methods: {
    load: function() {
      axios
        .get(`http://localhost:3000/instrumental/${this.$route.params.id}`)
        .then((result) => {
          if (result.status == 200) {
            var data = result.data;
            this.form.nombre = data.nombre;
            this.form.descripcion = data.descripcion;
            this.form.precio = data.precio;
            this.form.categoria = data.categoria;
            this.form.bpm = data.bpm;
            this.form.escala = data.escala;
            this.views.minuatura = data.tieneMiniatura.url;
            this.views.mp3 = data.tieneMp3.url;
            this.views.wav = data.tieneWav.url;
            this.views.sample = data.tieneSample.url;
          } else {
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    validar: function() {
      return (
        this.form.nombre != "" ||
        this.form.descripcion != "" ||
        this.form.precio != "" ||
        this.form.categoria != "" ||
        this.form.bpm != "" ||
        this.form.escala != "" ||
        this.form.minuatura ||
        this.form.mp3 ||
        this.form.wav
      );
    },
    edit: async function() {
      if (this.validar()) {
        if (this.form.miniatura) {
          var minuatura = await this.loadFile(
            "miniatura",
            "http://localhost:3000/upload/miniatura",
            this.form.miniatura
          );
          this.form.miniatura = minuatura.id;
        }

        if (this.form.mp3) {
          var mp3 = await this.loadFile(
            "mp3",
            "http://localhost:3000/upload/mp3",
            this.form.mp3
          );
          this.form.mp3 = mp3.id;
        }

        if (this.form.wav) {
          var wav = await this.loadFile(
            "wav",
            "http://localhost:3000/upload/wav",
            this.form.wav
          );
          this.form.wav = wav.id;
        }

        var data = {
          nombre: this.form.nombre,
          descripcion: this.form.descripcion,
          precio: this.form.precio,
          categoria: this.form.categoria,
          miniatura: this.form.miniatura,
          bpm: this.form.bpm,
          escala: this.form.escala,
          mp3: this.form.mp3,
          wav: this.form.wav,
          licencia: 1,
        };

        axios
          .put(
            `http://localhost:3000/instrumental/${this.$route.params.id}`,
            data,
            {
              headers: {
                "access-token": this.$cookiz.get('usuario').token,
                "Content-Type": "application/json",
              },
            }
          )
          .then((result) => {
            if(result.status == 200){
              this.$router.push('../');
            }else{

            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
      }
    },
    loadFile: async function(name, url, file) {
      var retorno = null;
      const form = new FormData();
      form.append(name, file);
      try {
        retorno = await axios.post(url, form, {
          headers: {
            "Content-Type": "multipart/form-data",
            "access-token": this.$cookiz.get('usuario').token,
          },
        });
        retorno = retorno.data;
      } catch (err) {
        console.log(err);
      }
      console.log(retorno);
      return retorno;
    },
  },
};
</script>
