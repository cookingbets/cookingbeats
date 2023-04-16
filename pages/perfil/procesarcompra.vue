<template>
  <div></div>
</template>
<script>
import axios from "axios";
export default {
  name: "compras",
  mounted() {
    alert(this.$route.params.external_reference)
    console.log(this.$route)
    axios
      .get(
        `http://localhost:3000/compras/carga?external_reference=${this.$route.query.external_reference}`,
        {
          headers: {
            "access-token": this.$cookies.get("usuario").token,
          },
        }
      )
      .then((result) => {
        if (result.status == 200) {
          this.$router.push("/perfil/compras");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
