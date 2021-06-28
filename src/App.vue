<template>
  <v-app>
    <v-main>
      <the-navbar/>
      <!-- <the-home/> -->
      <the-info/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TheNavbar from './views/TheNavbar.vue'
// import TheHome from './views/TheHome.vue'
import TheInfo from './views/TheInfo.vue'

export default {
  components: { TheNavbar,TheInfo },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
