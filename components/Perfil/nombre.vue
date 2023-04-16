<template>
  <div>
    <h3>Editar Perfil</h3>
    <b-form-group label="Nombre" description="Nombre de usuario">
      <FormulateInput
        v-model="nombre"
        type="text"
        :wrapper-class="['input_form']"
        placeholder=""
      >
      </FormulateInput>
    </b-form-group>
    <b-form-group label="Email" description="Email de usuario">
      <FormulateInput
        v-model="email"
        :wrapper-class="['input_form']"
        type="email"
      >
      </FormulateInput>
    </b-form-group>
    <b-form-group>
      <b-button variant="dark" v-on:click="cambiarDatos"
        >Cambiar Datos</b-button
      >
    </b-form-group>
  </div>
</template>
<script>
export default {
  name: "nombre",
  props: {
    nombre: String,
    email: String,
  },
  methods: {
    cambiarDatos: function() {
      if (this.$cookiz.get("usuario").nombreusuario != this.nombre) {
        axios
          .put(
            "http://localhost:3000/usuario/edit/nombre",
            { nombre: this.nombre, id: this.$cookiz.get("usuario").id },
            { headers: { "access-token": this.$cookiz.get("usuario").token } }
          )
          .then((result) => {
            if (result.status == 200) {
              this.$cookiz.set(
                "usuario",
                (this.$cookiz.get("usuario").nombreusuario =
                  result.nombreusuario)
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }

      if (this.$cookiz.get("usuario").email != this.email) {
        axios
          .put(
            "http://localhost:3000/usuario/edit/email",
            { email: this.email, id: this.$cookiz.get("usuario").id },
            { headers: { "access-token": this.$cookiz.get("usuario").token } }
          )
          .then((result) => {
            if (result.status == 200) {
              this.$store.commit("email", this.usuario.email);
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
