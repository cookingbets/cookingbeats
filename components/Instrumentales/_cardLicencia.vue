<template>
  <b-card bg-variant="dark" class="licenciaCard">
    <b-row align-h="end">
        <b-col>
            <v-chip style="background-color: var(--color3)">
            <span class="material-symbols-outlined"> schedule </span>
            {{ licencia.duracion }}
            </v-chip>
            <v-chip v-if="!licencia.free" style="background-color: var(--color8); color: white;">
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
        </b-col>
        <b-col cols="1">
            <b-button size="sm" variant="link">
                <span class="material-symbols-outlined" @click="delate">
                    close
                </span>
            </b-button>
        </b-col>
    </b-row>
    <b-row>
      <v-col>
        <p>Ambitos:</p>
        <v-chip
          v-for="(ambito, i) in licencia.ambitos"
          :key="i"
          class="chip-size-x-small"
          style="background-color: var(--color6t); color: white"
        >
          {{ ambito.label }}
        </v-chip>
      </v-col>
    </b-row>
  </b-card>
</template>
<script>
export default {
  name: "cardLicencia",
  props: {
    licencia: Object,
    id: Number
  },
  mounted() {},
  methods:{
    delate: function(){
        this.$emit('delate',this.id);
    }
  }
};
</script>
<style>
.licenciaCard{
    margin-top: 1%;
}
</style>
