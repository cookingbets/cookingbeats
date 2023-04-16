<template>
  <b-card bg-variant="dark" class="compra-item">
    <b-row>
      <b-col>
 N° {{ data.id }} | Reference: {{ data.external_reference }}
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div
          class="d-flex justify-content-between"
          v-if="data.status == 'approved'"
        >
          <b-badge variant="success" style="font-size: 18px;" pill>Pagado</b-badge>
        </div>
        <div v-else-if="data.status == 'pending'">
          <b-badge variant="denger">Pendiente</b-badge>
        </div>
        <p v-else>
          Sin Seguimiento -
          <b-button size="sm" @click="reload(data.external_reference)">
            <md-icon v-if="!loaditem" :size="18">Load</md-icon>
            <b-spinner
              v-if="loaditem"
              small
              label="load"
              variant="ligth"
            ></b-spinner>
          </b-button>
        </p>
      </b-col>
      <b-col>
        <b-button
          v-if="data.status == 'approved'"
          @click="download"
          small
          variant="dark"
          class="bg-color6 text-bg-color1"
          style="border-radius: 10px;"
        >
          <span class="material-icons">
            file_download
          </span>
        </b-button>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
import axios from "axios";

export default {
  name: "CompraItem",
  components: {},
  data: {
    loaditem: false,
  },
  props: {
    data: Object,
  },
  mounted() {
    this.reload(this.data.external_reference);
  },
  methods: {
    reload: function(external_reference) {
      this.loaditem = true;
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
            this.loaditem = false;
            this.$emit("refresh");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    download: function() {
      if (this.data.tipo == 1) {
        axios
          .get(
            `http://localhost:3000/compras/instrumental/download?id=${this.data.id}`,
            {
              headers: {
                "access-token": this.$cookiz.get('usuario').token,
              },
            }
          )
          .then((result) => {
            if (result.status == 200) {
              window.open(result.data);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
