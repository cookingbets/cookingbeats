<template>
  <div class="paginador">
    <div v-if="pagina < cantidadPorPagina">
      <button class="boton-borde-izquierda" v-if="pagina > 1">&#60;</button>
      <button class="boton-borde-izquierda" v-else>-</button>
      <div v-for="i in paginas" :key="i">
        <button v-if="i == paginas" class="actual">
          {{ i }}
        </button>
        <button v-else>
          {{ i }}
        </button>
      </div>
      <button class="boton-borde-derecha">&#62;</button>
    </div>
    <div
      v-if="pagina > cantidadPorPagina && pagina < total - cantidadPorPagina"
    >
      <button class="boton-borde-izquierda" v-if="pagina > 1">&#60;</button>
      <div v-for="numero in numeros" :key="numero">
        <button v-if="numero == pagina" class="actual">
          {{ numero }}
        </button>
        <button v-else>
          {{ numero }}
        </button>
      </div>
      <button class="boton-borde-derecha">&#62;</button>
    </div>
    <div v-else>
      <button class="boton-borde-izquierda" v-if="pagina > 1">&#60;</button>
      <div v-for="numero in numeros" :key="numero">
        <button v-if="numero == pagina" class="actual">
          {{ numero }}
        </button>
        <button v-else>
          {{ numero }}
        </button>
      </div>
      <button v-if="pagina < this.total" class="boton-borde-derecha">&#62;</button>
      <button class="boton-borde-derecha" v-else>-</button>
    </div>
  </div>
</template>
<script>

export default {
  name: "paginador",
  data() {
    return {
      paginas: 0,
      numeros: [],
    };
  },
  props: {
    total: Number,
    cantidadPorPagina: Number,
    pagina: Number,
  },
  mounted() {
    this.paginas = Math.round(this.total / this.cantidadPorPagina);
    if (this.pagina <= this.cantidadPorPagina)
      for (var i = 1; i <= this.cantidadPorPagina; i++) this.numeros.push(i);
    else if (
      this.pagina > this.cantidadPorPagina &&
      this.pagina < this.paginas - this.cantidadPorPagina
    ) {
      if (this.cantidadPorPagina % 2 == 1) {
        for (
          var i = this.pagina - Math.floor(this.cantidadPorPagina / 2);
          i <= this.pagina + Math.floor(this.cantidadPorPagina / 2);
          i++
        ) {
          this.numeros.push(i);
        }
      }else{
        for(var i = this.pagina - Math.floor(this.cantidadPorPagina / 2) + 1; i <= this.pagina + Math.floor(this.cantidadPorPagina/2); i++) this.numeros.push(i);
      }
    }else if(this.pagina >= this.paginas - this.cantidadPorPagina) for (var i = this.pagina - this.cantidadPorPagina; i <= this.paginas; i ++ ) this.numeros.push(i);
  },
};
</script>
<style>

.paginador .actual{
  background-color: var(--color6);
  color: var(--color1);
}
.paginador {
  display: flex;
  justify-content: center;
}

.paginador div {
  display: flex;
  flex-direction: row;
  list-style: none;
}

.paginador button {
  background-color: var(--color2);
  width: 40px;
  height: 40px;
  display: block;
  text-align: center;
  vertical-align: middle;
  border: none;
}

.boton-borde-izquierda {
  border-radius: 10px 0px 0px 10px;
}

.boton-borde-derecha {
  border-radius: 0px 10px 10px 0px;
}

</style>