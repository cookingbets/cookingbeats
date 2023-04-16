<template>
  <div>
    <b-modal size="xl" id="instrumental_data" v-bind:title="data.nombre">
      <b-row>
        <b-col>
          <b-img thumbnail fluid v-bind:src="data.minuatura"></b-img>
        </b-col>
        <b-col>
          <b-row>
            <b-col>
              <audio
                v-bind:src="data.mp3"
                controlsList="nodownload"
                controls
              ></audio>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              ><a
                class="btn btn-ligth"
                target="_blank"
                v-bind:href="data.mp3"
                download
              >
                Mp3
              </a></b-col
            >
            <b-col
              ><a class="btn btn-ligth" v-bind:href="data.wav" download>
                Wav
              </a></b-col
            >
          </b-row>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "instrumental_modal",
  data() {
    return {
      data: {
        nombre: null,
        miniatura: null,
      },
    };
  },
  methods: {
    load: function(instrumental) {
      this.data = instrumental;
    },
  },
};
</script>
