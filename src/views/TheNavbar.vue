<template>
  <v-app-bar
    app
    flat
    class="d-flex align-center"
    style="border-bottom: 1px solid #e5e5e5"
    height="100px"
  >
    <div class="" style="width: 20%">
      <v-img
        class="shrink mx-5"
        contain
        src="../Img/cruisegator 1.png"
        transition="scale-transition"
      />
    </div>
    <div class="mx-15 d-flex align-center" style="width:628px;">
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
     <v-btn v-for="names in btn" :key="names" retain-focus-on-click plain class=" custom-btn mx-1">{{ names.name }}</v-btn>
    </div>

    <div class="ml-15">
         <v-avatar>
      <img
        src="../Img/profile.jpg"
        alt="Ronal"
      >
    </v-avatar>

       <!-- <v-expansion-panel> pop </v-expansion-panel> -->
    </div>
   
  </v-app-bar>
</template>

<script>
export default {
  data(){
    return{
      btn:[
        {name:'Explore' },
        {name:'News' },
        {name:'Map' },
        {name:'Donate' }

        ]
    }
  }
}
</script>

<style>


.input::v-deep .v-input__slot {
  min-height: 10px !important;
  background: white !important;
}

/* .v-input::v-deep .v-input__slot {
 color: turquoise;
} */
/* 
#input-22 {
     font-family:Public Sans;
    font-weight: 400;
} */

/* .input{
  background: tomato;
} */


/* .custom-btn:active{
    color:red;
    
} */

.heading-primary {
  font-family: Public Sans;
  font-weight: 200;
  font-size: 80px;
  line-height: 100px;
  color: #0055B9;
  font-style: normal;
}

.paragraph-1{
   font-family: Public Sans;
  font-weight: 200;
  line-height: 40px;
  font-size: 30px;
  color: rgba(0, 0, 0, 0.7);
  font-style: normal;
}

.h1{
    font-family:Public Sans;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
    /* color:black; */

}



</style>
