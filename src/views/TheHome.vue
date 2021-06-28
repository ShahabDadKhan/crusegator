<template>
    <v-container class="container-1 ma-0 pa-0" style="min-width:100%; ">

        <div class="home-left d-flex justify-center flex-column">
            <h1 class="heading-primary pr-2">Enjoy your life on cruiseship</h1>
            <p class="paragraph-1 mt-5">Find the deck plans, data, schedules, and all the goodies about your desired cruiseship here at Cruisegator.</p>
            <v-btn rounded x-large width="350" height="75" color="#0055B9" style="text-transform: none;" class="heading-tertiary-1 white--text my-3">Explore Database</v-btn>
            <v-btn rounded plain width="350" height="75">LEARN MORE
          <v-icon class="material-icons-outlined"> arrow_right_alt</v-icon> 
</v-btn>
        </div>
        <div class="home-right">
            <v-img
                max-height="99%"
                max-width="99%"
                class="ship" 
                
                src="../Img/Group 16.png"
            ></v-img>
        </div>

    </v-container>
</template>


<style>

.container-1{
display: flex;
flex-direction: row;
justify-content: space-between;
position: absolute;

height:100%;


background: linear-gradient(180deg, #FAFAFA 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF;
/* background-color: pink; */
}

.v-btn--rounded {
    border-radius: 50px;
}

.home-left{
    max-width: 33%;
    margin:130px 50px 240px 170px;
}

.home-right{
    max-width: 55%;
    min-height: 100%;
    margin: 0px;
    /* padding-top: 63px;
 */
    /* position: absolute; */
}

.ship{
    position: relative;
    top: 136px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}
</style>