<template>
  <v-app>
    <v-main>
      <the-navbar/>
      <the-home/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TheNavbar from './views/TheNavbar.vue';
import TheHome from './views/TheHome.vue'

export default {
  components: { TheNavbar,TheHome },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
