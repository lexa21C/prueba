<template>
  <div class="background-image">
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="12" sm="6" md="5">
          <b-card class="transparent-card">
            <b-row class="text-center">
              <h1>Iniciar sesion</h1>
            </b-row>
            <b-row>
              <b-form @submit.prevent="submitForm">
                <b-form-group id="email-group" label="Correo electrónico:" label-for="email">
                  <b-form-input v-model="email" id="email" name="email" type="email"></b-form-input>
                </b-form-group>
                <b-form-group id="password-group" label="Contraseña:" label-for="password">
                  <b-form-input v-model="password" id="password" name="password" type="password"></b-form-input>
                </b-form-group>
                <div class="m-2 text-center">
                  <hr class="my-3">
                  <b-button type="submit" variant="primary"> Iniciar sesion</b-button>
                  <p>¿No tienes una cuenta? <router-link to="/registrar">Registrarse</router-link></p>
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
import { BForm, BFormGroup, BFormInput, BButton, BCard } from 'bootstrap-vue'; // Import BootstrapVue components

export default {
  components: {
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    BCard,
  },
  data() {
    return {
      email: '',
      password: '',
      errors: [],
    };
  },
  methods: {
    submitForm() {
      axios.defaults.headers.common['Authorization'] = '';
      localStorage.removeItem('token');
      this.errors = [];
      if (this.email === '') {
        this.errors.push('The email is missing!');
      }
      if (this.password === '') {
        this.errors.push('The password is missing!');
      }
      if (!this.errors.length) {
        const formData = {
          email: this.email,
          password: this.password,
        };
        axios
          .post('api/inicio_sesion/', formData)
          .then(response => {
            console.log(response.data);
            // Handle successful login here
            this.$router.push('/lista');
          })
          .catch(error => {
            if (error.response) {
              for (const property in error.response.data) {
                this.errors.push(`${property}: ${error.response.data[property]}`);
              }
              console.log(JSON.stringify(error.response.data));
            } else if (error.message) {
              this.errors.push('Something went wrong. Please try again');
              console.log(JSON.stringify(error));
            }
          });
      }
    },
  },
};
</script>

<style scoped>
.background-image {
  background-image: url('../assets/registrar.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll; /* Cambia a scroll o elimina esta propiedad */
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
