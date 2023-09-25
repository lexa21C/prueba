<template>
  <div class="container">
    <h1>Listado de Canciones</h1>

    <b-row>
      <b-col>
        <div class="table-responsive">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Artista</th>
                <th scope="col">Cancion</th>
                <th scope="col">Genero</th>
                <th scope="col">Me gusta</th>
                <th scope="col">Acciones</th>
                <!-- <th scope="col">Ficha</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td>{{ item.artista }}</td>
                <td>{{ item.titulo_cancion }}</td>
                <td>{{ item.genero }}</td>
                <td>3</td>
                <!-- <td>
                  <b-button  @click="postProyecto()" variant="success" class="enviar">Agregar</b-button>
                </td> -->
                <td>
                  <b-button @click="fichaProyectos(item.id)" variant="primary" class="m-1">
                    <i icon="hand-thumbs-up-fill"></i>
                    <b-icon icon="hand-thumbs-up-fill"></b-icon>
                  </b-button>
                </td>
                <td>
                  <b-button @click="editarEntrega(item)" variant="warning" class="m-1 mr-2">
                    <b-icon icon="pencil"></b-icon>
                  </b-button>
                  <b-button @click="eliminarEntrega(item.id)" variant="danger">
                    <b-icon icon="trash"></b-icon>
                  </b-button>
                </td>
              </tr>
            </tbody>
          </table>          
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      perPage: 5, // Adjust the number of items per page as needed
      currentPage: 1,
      items: null
    };
  },
  // computed: {
  //   rows() {
  //     return this.items.length;
  //   },
   
  //   paginatedItems() {
  //     const startIndex = (this.currentPage - 1) * this.perPage;
  //     const endIndex = startIndex + this.perPage;
  //     return this.items.slice(startIndex, endIndex);
  //   }
  // },
  methods: {
    async getProyecto (){
      await axios.get('api/lista_canciones').then(response=>{
          this.items= response.data
          console.log(this.items
)
          });
          
      },
      
    
  },
  mounted(){
    this.getProyecto()
  }
};
</script>

<style scoped>
/* styles.css */
/* body {
  background-color: #E0FEFF; /* Color de fondo DEFEFF */
  /* Otros estilos para el cuerpo de la página si es necesario 
} */

</style>