<template>
  <v-app>
    <v-main>
      <the-navbar />
      <the-home />
      <the-info />
      <the-database />
      <the-map />
      <learn-more />
      <latest-news />
      <the-footer />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheNavbar from "./views/TheNavbar.vue";
import TheHome from "./views/TheHome.vue";
import TheInfo from "./views/TheInfo.vue";
import TheDatabase from "./views/TheDatabase.vue";
import TheMap from "./views/TheMap.vue";
import LearnMore from "./views/LearnMore.vue";
import LatestNews from "./views/LatestNews.vue";
import TheFooter from "./views/TheFooter.vue";

export default {
  components: {
    TheNavbar,
    TheHome,
    TheInfo,
    TheDatabase,
    TheMap,
    LearnMore,
    LatestNews,
    TheFooter,
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
