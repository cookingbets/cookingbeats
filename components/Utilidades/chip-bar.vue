<template>
  <v-row justify="space-around" dark>
    <h6>{{ title }}</h6>
    <v-chip-group mandatory active-class="bg-color6 text-bg-color1" dark>
      <v-chip class="ma-2" @click="select(0)">
        todo
      </v-chip>
      <v-chip v-for="(tag, i) in data" :key="i" class="ma-2" @click="select(tag.code)">
        {{ tag.label }}
      </v-chip>
    </v-chip-group>
  </v-row>
</template>
<script>
export default {
  name: "chipbar",
  props:{
    data: Array,
    title: String
  },
  methods:{
    select(id){
      this.$emit('select', id);
    }
  }
};
</script>