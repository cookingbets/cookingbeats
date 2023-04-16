<template>
  <div>
    <h3>Cambiar Contraseña</h3>
    <b-form-group
      label="Contraseña Actual"
      description="Ingrese su contraseña actual"
    >
      <FormulateInput
        v-model="contrasenia"
        type="password"
        :wrapper-class="['input_form']"
        @focus="inputfocus"
      ></FormulateInput>
    </b-form-group>
    <b-form-group
      label="Contraseña Nueva"
      description="Ingrese la nueva contraseña"
    >
      <FormulateInput
        v-model="contraseniaNueva"
        type="password"
        :wrapper-class="['input_form']"
        @focus="inputfocus"
      ></FormulateInput>
    </b-form-group>
    <b-form-group
      label="Confirmar Contraseña Nueva"
      description="Confirme la nueva contraseña"
    >
      <FormulateInput
        v-model="confirmarContraseniaNueva"
        type="password"
        :wrapper-class="['input_form']"
        @focus="inputfocus"
      ></FormulateInput>
    </b-form-group>
    <b-form-group>
      <b-button variant="dark" v-on:click="cambiarContrasenia"
        >Cambiar Contraseña</b-button
      >
    </b-form-group>
  </div>
</template>
<script>
export default {
  name: "contrasenia",
  props: {
    contrasenia: String,
  },
  data() {
    return {
      contraseniaNueva: null,
      confirmarContraseniaNueva: null,
    };
  },
  methods: {
    cambiarContrasenia: function() {
      if (
        this.contrasenia != this.contraseniaNueva &&
        this.contraseniaNueva == this.confirmarContraseniaNueva
      ) {
        axios
          .put(
            "http://localhost:3000/usuario/edit/contrasenia",
            {
              actual: this.$cookiz.get("usuario").contrasenia,
              nueva: this.hash(this.contraseniaNueva),
            },
            { headers: { "access-token": this.$cookiz.get("usuario").token } }
          )
          .then((result) => {
            if (result.status == 200) {
              console.log("contraseña cambiada");
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
