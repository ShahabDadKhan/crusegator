<template>
  <div class="pt-16" style="height: 100vh; background-color: #f8f9f9">
    <div class="d-flex flex-column align-center py-15">
      <h1
        class="heading-primary d-flex flex-column align-center"
        style="width: 50%; font-size: 50px; color: #000000"
      >
        Why choose Cruisegator?
      </h1>
      <v-divider
        inset
        style="border-color: #0055b9; width: 5%; border-width: 2px"
        class="mb-5"
      ></v-divider>
      <p class="paragraph-1 text-center" style="width: 50%">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div>
      <v-container class="my-10">
        <v-row class="">
          <v-col class="col-4">
            <v-card flat class="mx-8" style="background-color: #f8f9f9">
              <v-icon
                class="material-icons-two-tone"
                style="color: #0055b9"
                size="55px"
              >
                explore
              </v-icon>

              <h3 class="heading-secondary-1">Realtime Cruiseship Location</h3>
              <p class="paragraph-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. !
                Repudiandae fuga, quia a alias eligendi sit minima impedit optio
                dolor!
              </p>
            </v-card>
          </v-col>
          <v-col class="col-4">
            <v-card flat class="mx-8" style="background-color: #f8f9f9">
              <v-icon
                class="material-icons-two-tone"
                style="color: #0055b9"
                size="55px"
              >
                storage
              </v-icon>

              <h3 class="heading-secondary-1">
                Complete database of cruiship data
              </h3>
              <p class="paragraph-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. !
                Repudiandae fuga, quia a alias eligendi sit minima impedit optio
                dolor!
              </p>
            </v-card>
          </v-col>
          <v-col class="col-4">
            <v-card flat class="mx-8" style="background-color: #f8f9f9">
              <v-icon
                class="material-icons-two-tone"
                style="color: #0055b9"
                size="55px"
              >
                folder
              </v-icon>

              <h3 class="heading-secondary-1">Save your desired cruiseship</h3>
              <p class="paragraph-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. !
                Repudiandae fuga, quia a alias eligendi sit minima impedit optio
                dolor!
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style scoped>
.v-divider--inset {
  margin-left: 0px !important;
}

h3 {
  padding: 10px 0px;
}
</style>
