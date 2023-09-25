<template>
  <b-navbar class="navbar" toggleable="lg">
    <b-navbar-brand href="#">
  </b-navbar-brand>
  
  <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
  <b-collapse id="nav-collapse" class="navbar-collapse" is-nav>
      <b-navbar-nav>
         
          <img src="" alt="Logo" class="m-2" style="max-width: 100px; min-width: 50px; width: auto; height: auto;">
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/lista">lista Reproducion</b-nav-item>
        <b-nav-item to="/Login">login</b-nav-item>
        <b-nav-item to="/registrar">Registrar</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<!-- Resto del código igual -->

<style scoped>
.navbar {
  background-color: #2D4463;
}

.navbar-nav a.nav-link {
  color: #ffffff; /* Color blanco para el texto de navegación */
}

.navbar-collapse {
  align-items: center;
  justify-content: space-between;
}
</style>
