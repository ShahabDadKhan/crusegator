<template>
  <div>
    <div>
      <div class="d-flex flex-column align-center">
        <div
          style="background-color: #0055b9; width100%"
          class="d-flex flex-row justify-center pa-15"
        >
          <div
            class="d-flex flex-column justify-center align-center"
            style="width: 25%; background-color: pink"
          >
            <v-img
              style="width: 80%; flex: none"
              src="../Img/cruisegator footer 1.png"
            ></v-img>
            <div class="d-flex -flex-row pt-5">
              <v-icon class="pr-6 fab fa-youtube" color="white"> </v-icon>
              <v-icon class="pr-6 fab fa-twitter" color="white"> </v-icon>
              <v-icon class="pr-6 fab fa-pinterest" color="white"> </v-icon>
              <v-icon class="pr-6 fab fa-instagram" color="white"> </v-icon>
              <v-icon class="pr-6 fab fa-facebook" color="white"> </v-icon>
            </div>
          </div>
          <div
            class="d-flex flex-row"
            style="width: 25%; background-color: red"
          >
            <ul style="list-style: none; text-decoration: none">
              <li class="pa-1">
                <a style="text-decoration: none; color: white" href="#">Home</a>
              </li>

              <li class="pa-1">
                <a style="text-decoration: none; color: white" href="#">News</a>
              </li>
              <li class="pa-1">
                <a style="text-decoration: none; color: white" href="#"
                  >Database</a
                >
              </li>
            </ul>
            <ul style="list-style: none; text-decoration: none">
              <li class="pa-1">
                <a style="text-decoration: none; color: white" href="#">Map</a>
              </li>
              <li class="pa-1">
                <a style="text-decoration: none; color: white" href="#"
                  >About Us</a
                >
              </li>
              <li class="pa-1">
                <a style="text-decoration: none; color: white" href="#"
                  >Privacy Policy</a
                >
              </li>
            </ul>
          </div>
          <div class="pa-5" style="width: 25%">
            <h1>Get Updated</h1>
            <v-text-field
              style="width: 60%"
              label="Email addresss"
            ></v-text-field>
            <v-text-field label="Subscribe"></v-text-field>
          </div>
        </div>
        <div>
          <h3>Copywrite &copy; 2021</h3>
        </div>
      </div>
    </div>
  </div>
</template>
