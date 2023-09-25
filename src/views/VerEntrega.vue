<template>
  <div>
    <h1>Listado de Elementos</h1>

    <!-- Botón para abrir el formulario de creación -->
    <button @click="mostrarFormularioCreacion">Agregar Elemento</button>

    <!-- Lista de elementos -->
    <ul>
      <li v-for="elemento in elementos" :key="elemento.id">
        {{ elemento.nombre }}
        <button @click="editarElemento(elemento)">Editar</button>
        <button @click="eliminarElemento(elemento.id)">Eliminar</button>
      </li>
    </ul>

    <!-- Formulario de creación/edición -->
    <div v-if="mostrarFormulario">
      <h2>{{ modo === 'crear' ? 'Crear Elemento' : 'Editar Elemento' }}</h2>
      <form @submit.prevent="guardarElemento">
        <input v-model="elemento.nombre" placeholder="Nombre" />
        <button type="submit">{{ modo === 'crear' ? 'Crear' : 'Guardar' }}</button>
        <button @click="cancelar">Cancelar</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      elementos: [],
      elemento: {
        id: null,
        nombre: '',
      },
      modo: 'crear', // 'crear' o 'editar'
      mostrarFormulario: false,
    };
  },
  methods: {
    async fetchElementos() {
      try {
        const response = await axios.get('API_ENDPOINT'); // Reemplaza 'API_ENDPOINT' con la URL de tu API
        this.elementos = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async mostrarFormularioCreacion() {
      this.modo = 'crear';
      this.elemento.id = null;
      this.elemento.nombre = '';
      this.mostrarFormulario = true;
    },
    async editarElemento(elemento) {
      this.modo = 'editar';
      this.elemento.id = elemento.id;
      this.elemento.nombre = elemento.nombre;
      this.mostrarFormulario = true;
    },
    async guardarElemento() {
      if (this.modo === 'crear') {
        try {
          const response = await axios.post('API_ENDPOINT', this.elemento); // Reemplaza 'API_ENDPOINT' con la URL de creación de elementos
          this.elementos.push(response.data);
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          await axios.put(`API_ENDPOINT/${this.elemento.id}`, this.elemento); // Reemplaza 'API_ENDPOINT' con la URL de actualización de elementos
          const elementoActualizadoIndex = this.elementos.findIndex(el => el.id === this.elemento.id);
          if (elementoActualizadoIndex !== -1) {
            this.elementos[elementoActualizadoIndex] = { ...this.elementos[elementoActualizadoIndex], ...this.elemento };
          }
        } catch (error) {
          console.error(error);
        }
      }
      this.cancelar();
    },
    async eliminarElemento(id) {
      if (confirm('¿Estás seguro de que quieres eliminar este elemento?')) {
        try {
          await axios.delete(`API_ENDPOINT/${id}`); // Reemplaza 'API_ENDPOINT' con la URL de eliminación de elementos
          this.elementos = this.elementos.filter(el => el.id !== id);
        } catch (error) {
          console.error(error);
        }
      }
    },
    cancelar() {
      this.mostrarFormulario = false;
    },
  },
  mounted() {
    this.fetchElementos();
  },
};
</script>

<style scoped>
/* Estilos para tu componente si es necesario */
</style>
