<template>
  <div>
    <Nabvar></Nabvar>
    <router-view />
  </div>
</template>

<script>
import axios from 'axios';
import Nabvar from '@/components/Nabvar.vue';


export default {
  data() {
    return {
      rol: this.$store.state.rol,
    };
  },
  components: {
    Nabvar,
  
   
  },
  beforeCreate() {
    this.$store.commit('initializeStore');

    const token = this.$store.state.user.token;

    if (token) {
      axios.defaults.headers.common['Authorization'] = "Token " + token;
    } else {
      axios.defaults.headers.common['Authorization'] = "";
    }
  },
};
</script>

