<template>
  <div class="d-flex flex-column align-center py-15">
    <h1
      class="heading-primary d-flex flex-column align-center"
      style="width: 50%; font-size: 50px; color: #000000"
    >
      What we provide?
    </h1>
    <v-divider
      inset
      style="border-color: #0055b9; width: 5%; border-width: 2px"
      class="mb-5 ml-4"
    ></v-divider>
    <div
      class="d-flex flex-row align-center my-16"
      style="width: 80%; height: 100%"
    >
      <div class="database-left mr-16" style="width: 45%">
        <h1 class="heading-primary-1">
          Database with details of over 1,000 cruiseship
        </h1>
        <p class="heading-tertiary-3 my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit
          amet massa vitae tortor condimentum. Fames ac turpis egestas maecenas
          pharetra convallis posuere.
        </p>
        <v-btn
          rounded
          large
          width="350"
          height="75"
          color="#0055B9"
          style="text-transform: none"
          class="heading-tertiary-1 white--text my-3"
          >Explore Database</v-btn
        >
      </div>
      <div class="database-right ml-16 pl-8" style="width: 45%">
        <v-img
          width="100%"
          height="100%"
          src="../Img/screenshot-localhost_3000-2021.06.png"
        ></v-img>
      </div>
    </div>
  </div>
</template>
