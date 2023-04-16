<template>
  <b-card text-variant="white" style="background-color: var(--color4);">
    <b-card-body v-bind:title="instrumental.instrumental.nombre">
      <b-row>
        <b-col cols="2">
          <img
            v-if="instrumental.instrumental.tieneMiniatura != null"
            v-bind:src="instrumental.instrumental.tieneMiniatura.url"
            alt=""
            width="100px"
          />
        </b-col>
        <b-col cols="10">
          <div class="col">
            <v-chip
              class="chip-size-x-small"
              style="background-color: var(--color6t); color: white"
            >
              ${{ instrumental.instrumental.precio }}
            </v-chip>
            <v-chip style="background-color: var(--color7); color: white">
              {{ instrumental.instrumental.Bpm.bpm }} Bpm
            </v-chip>
            <v-chip style="background-color: var(--color3); color: black">
              {{ instrumental.instrumental.Escala.escala }} Bpm
            </v-chip>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <vue-plyr>
          <audio
            v-bind:src="instrumental.instrumental.tieneMp3.url"
            controls
            nodownload
            buffered
          ></audio>
          </vue-plyr>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  name: "cardinstrumental",
  components: {
    [process.client && "VuePlyr"]: () => import("vue-plyr"),
  },
  props: {
    instrumental: Object,
  },
};
</script>
