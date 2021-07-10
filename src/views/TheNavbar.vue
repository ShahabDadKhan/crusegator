<template>
  <v-app-bar
    app
    flat
    class="d-flex align-center"
    style="border-bottom: 1px solid #e5e5e5; background: #ffffff"
    height="100px"
  >
    <div style="width: 20%">
      <v-img
        class="shrink mx-5"
        contain
        src="../Img/cruisegator 1.png"
        transition="scale-transition"
      />
    </div>
    <div class="mx-15 d-flex align-center" style="width: 628px">
      <v-text-field
        placeholder="Search"
        class="input mt-7"
        filled
        rounded
        height="37px"
        id="text"
        outlined
      >
        <v-icon class="material-icons-outlined">search</v-icon>
      </v-text-field>
    </div>

    <div class="mx-15 h1">
      <v-btn
        v-for="names in btn"
        :key="names"
        retain-focus-on-click
        plain
        class="custom-btn mx-1"
        >{{ names.name }}</v-btn
      >
    </div>

    <div class="ml-15">
      <v-avatar>
        <img src="../Img/profile.jpg" alt="Ronal" />
      </v-avatar>

      <!-- <v-expansion-panel> pop </v-expansion-panel> -->
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      btn: [
        { name: "Explore" },
        { name: "News" },
        { name: "Map" },
        { name: "Donate" },
      ],
    };
  },
};
</script>

<style>
.v-input__slot {
  background-color: white !important;
}
.v-input__slot fieldset {
  color: #0055b9;
}

.heading-primary {
  font-family: Public Sans;
  font-weight: 200;
  font-size: 80px;
  line-height: 100px;
  color: #0055b9;
  font-style: normal;
}

.heading-primary-1 {
  font-family: Poppins;
  font-weight: 400;
  font-size: 50px;
  line-height: 60px;
  color: #0055b9;
  font-style: normal;
}

.heading-primary-2 {
  font-family: Poppins;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  color: #0055b9 !important;
  font-style: normal;
}
.heading-secondary-1 {
  font-family: Poppins;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
}

.heading-tertiary-1 {
  font-family: Poppins;
  font-weight: 500;
  font-size: 20px !important;
  font-style: normal;
}

.heading-tertiary-2 {
  font-family: Poppins;
  font-weight: 400;
  font-size: 46px;
  line-height: 30px;
  font-style: normal;
}

.heading-tertiary-3 {
  font-family: Poppins;
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  font-style: normal;
}

.paragraph-1 {
  font-family: Public Sans;
  font-weight: 200;
  line-height: 40px;
  font-size: 30px;
  color: rgba(0, 0, 0, 0.7);
  font-style: normal;
}

.paragraph-2 {
  font-family: Public Sans;
  font-weight: 200;
  line-height: 30px;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.7);
  font-style: normal;
}

.paragraph-3 {
  font-family: Public Sans;
  font-weight: 400;
  line-height: 30px;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.7);
  font-style: normal;
}

.paragraph-4 {
  font-family: Public Sans;
  font-weight: 400;
  line-height: 15px;
  font-size: 22px;
  color: #e0e0e0;
  font-style: normal;
}

.paragraph-5 {
  font-family: Public Sans;
  font-weight: 500;
  line-height: 25px;
  font-size: 30px;
  color: #e0e0e0;
  font-style: normal;
}

.h1 {
  font-family: Public Sans;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.7);
  /* color:black; */
}
</style>
