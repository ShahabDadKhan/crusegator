<template>
  <div class="pt-16" style="height: 21%">
    <div class="d-flex flex-column align-center py-15">
      <h1
        class="heading-primary d-flex flex-column align-center"
        style="width: 50%; font-size: 50px; color: #000000"
      >
        Latest News
      </h1>
      <v-divider
        inset
        style="border-color: #0055b9; width: 5%; border-width: 2px"
        class="mb-5"
      ></v-divider>
    </div>
    <div>
      <v-container class="my-10">
        <v-row class="">
          <v-col class="col-4" v-for="infos in info" :key="infos.date">
            <v-card flat class="mx-8" style="background-color: #f8f9f9">
              <v-img :src="infos.img"> </v-img>
              <h5 class="paragraph-3 px-5 pt-5">{{ infos.date }}</h5>
              <h3 class="heading-primary-2 px-5">Lorem ipsum dotor sit amet</h3>
              <p class="paragraph-2 px-5">
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Rhoncus mattis rhoncus urna neque viverra justo. Iaculis
                at erat pellentesque adipis ...
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [
        { img: require("../Img/1.png"), date: "Sun 8 May 2021" },
        { img: require("../Img/2.png"), date: "Fri 16 Jun 2021" },
        { img: require("../Img/3.png"), date: "Mon 30 August 2021" },
      ],
    };
  },
};
</script>

<style scoped>
.v-divider--inset {
  margin-left: 0px !important;
}

h3 {
  padding: 10px 0px;
}
</style>
