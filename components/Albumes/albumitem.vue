<template>
  <nuxt-link to="albumes/2">
    <b-card
      title="Album Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 15rem;"
      class="mb-2"
      bg-variant="dark"
      text-variant="white"
    >
      <b-card-text>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quae
        </p>
        <p>
          <b>BPM | Escala </b>
        </p>
      </b-card-text>
    </b-card>
  </nuxt-link>
</template>
<script>
export default {
  name: "Albumitem",
  data() {
    return {
      src: "",
    };
  },
};
</script>
