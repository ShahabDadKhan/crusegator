<template>
  <div
    style="
      background-color: #006fb9;
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
    "
  >
    <div
      style="
        background-color: #005eb5;
        clip-path: polygon(100% 0, 97% 92%, 0% 100%, 0% 0%);
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
      "
    >
      <div
        class="d-flex flex-column align-center"
        style="
          background-color: #0055b9;
          clip-path: polygon(100% 0, 94% 83%, 0% 100%, 0% 0%);
          box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
        "
      >
        <div class="d-flex flex-row justify-center pa-15">
          <div
            class="d-flex flex-column justify-center align-center"
            style="width: 25%"
          >
            <v-img
              class="mt-n16"
              style="width: 65%; flex: none"
              src="../Img/cruisegator footer 1.png"
            ></v-img>
            <div class="d-flex -flex-row pt-5 mb-10">
              <v-icon class="pr-6 fab fa-youtube" large color="white"> </v-icon>
              <v-icon class="pr-6 fab fa-twitter" large color="white"> </v-icon>
              <v-icon class="pr-6 fab fa-pinterest" large color="white">
              </v-icon>
              <v-icon class="pr-6 fab fa-instagram" large color="white">
              </v-icon>
              <v-icon class="pr-6 fab fa-facebook" large color="white">
              </v-icon>
            </div>
          </div>
          <div class="d-flex flex-row" style="width: 25%">
            <ul style="list-style: none; text-decoration: none">
              <li class="pa-7 paragraph-4">
                <a style="text-decoration: none; color: white" href="#">Home</a>
              </li>

              <li class="pa-7 paragraph-4">
                <a style="text-decoration: none; color: white" href="#">News</a>
              </li>
              <li class="pa-7 paragraph-4">
                <a style="text-decoration: none; color: white" href="#"
                  >Database</a
                >
              </li>
            </ul>
            <ul style="list-style: none; text-decoration: none">
              <li class="pa-7 paragraph-4">
                <a style="text-decoration: none; color: white" href="#">Map</a>
              </li>
              <li class="pa-7 paragraph-4">
                <a style="text-decoration: none; color: white" href="#"
                  >About Us</a
                >
              </li>
              <li class="pa-7 paragraph-4">
                <a style="text-decoration: none; color: white" href="#"
                  >Privacy Policy</a
                >
              </li>
            </ul>
          </div>
          <div class="pa-5" style="width: 25%">
            <h1 class="paragraph-5">Get Updated</h1>
            <v-text-field
              class="label pt-8"
              style="width: 80%"
              label="Email addresss"
              outlined
              solo
              height="50px"
            ></v-text-field>
            <v-text-field
              class="
                subscibe
                d-flex
                justify-center
                align-center
                heading-primary-1
              "
              label="Subscribe"
              outlined
              solo
              style="width: 80%"
              height="50px"
            ></v-text-field>
          </div>
        </div>
        <div class="mb-16 pb-16">
          <h3 class="paragraph-4">
            Copyright &copy;Cruisegator 2021. All rights reserved
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.subscibe ::v-deep.v-label {
  color: #0068a1 !important;
  margin-left: 130px;
  text-align: center;
  font-size: 25px;
}

/* .label ::v-deep.fieldset {
  background-color: #136ad0;
}

.v-input__slot {
  background-color: #136ad0 !important;
}
/* .v-input ::v-deep.fieldset {
  background-color: #136ad0;
} */

/* .label ::v-deep.fieldset {
  background-color: chartreuse;
}  */
</style>
