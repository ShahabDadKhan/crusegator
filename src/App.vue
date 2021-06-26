<template>
  <v-app>
    <v-main>
      <the-navbar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';

export default {
  components: { TheNavbar },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
