<template>
  <div class="background-image">
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="12" sm="6" md="5">
          <b-card class="transparent-card">
            <b-row class="text-center">
              <h1>Registrar</h1>
            </b-row>
            <b-row>
              <b-form @submit.prevent="submitForm">
                <b-form-group id="name-group" label="Nombre:" label-for="username">
                  <b-form-input v-model="name" id="username" name="username"></b-form-input>
                </b-form-group>
                <b-form-group id="email-group" label="Correo electrónico:" label-for="email">
                  <b-form-input v-model="email" id="email" name="email" type="email"></b-form-input>
                </b-form-group>
                <b-form-group id="password-group" label="Contraseña:" label-for="password">
                  <b-form-input v-model="password" id="password" name="password" type="password"></b-form-input>
                </b-form-group>
                <b-form-group id="password-confirmation-group" label="Confirmar Contraseña:" label-for="password_confirmation">
                  <b-form-input v-model="password_confirmation" id="password_confirmation" name="password_confirmation" type="password"></b-form-input>
                </b-form-group>
                <div class="m-2 text-center">
                  <hr class="my-4">
                  <b-button type="submit" variant="primary"> Registrar</b-button>
                  <p>¿Ya tienes una cuenta? <router-link to="/Login">Iniciar sesión</router-link></p>
                </div>
              </b-form>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    };
  },
  methods: {
    submitForm() {
      axios.defaults.headers.common['Authorization'] = '';
      localStorage.removeItem('token');
      if (!this.name || !this.email || !this.password || !this.password_confirmation) {
        console.error('Please fill in all fields.');
        return;
      }
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };
      axios
        .post('api/registro_usuario', formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.background-image {
  background-image: url('../assets/registrar.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.transparent-card {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  margin: 60px; /* Agregar margen a la tarjeta */
}
</style>
