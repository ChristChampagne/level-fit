<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Canciones Favoritas</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!-- Carta de las canciones favoritas -->
      <ion-card v-for="canciones in lista" :key="canciones.id">
        <ion-grid>
          <ion-row>
          <ion-col>
              <ion-img  v-if="canciones.click != true"  :src="canciones.art" style="" @click="showButtons(canciones)" ></ion-img>
              <div v-else>
                <ion-img :src="canciones.art" class="img-blur" @click="showButtons(canciones)"></ion-img>


              </div>
              <ion-fab v-if="canciones.isFav == true">
                  <ion-fab-button class="like-button"><ion-icon class="icono" src="/assets/svg/heart.svg"  @click="fav(canciones)"></ion-icon></ion-fab-button>
                </ion-fab>
                <ion-fab v-else>
                  <ion-fab-button class="like-button"><ion-icon  class="icono" src="/assets/svg/heart-outline.svg" @click="fav(canciones)" ></ion-icon></ion-fab-button>
                </ion-fab>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-card-header>
          <ion-card-title>{{ canciones.name }}</ion-card-title>
            <ion-card-subtitle>{{ canciones.artist }}</ion-card-subtitle>
            <ion-card-subtitle>{{ "Año: " + canciones.year + "" + " Duracion: " + canciones.long }}</ion-card-subtitle>
          </ion-card-header>

        <ion-card-content>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  ionCard,
  ionCardHeader,
  ionCardTitle,
  IonCardSubtitle,
  ionCardContent,
} from "@ionic/vue";

import { defineComponent } from "vue";
// import {createAnimation} from '@ionic/vue';

export default defineComponent({
  name: "CardPage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    ionCard,
    ionCardHeader,
    ionCardTitle,
    IonCardSubtitle,
    ionCardContent,
  },

  data() {
    return {
      lista: [
        {
          id: 1,
          name: "Los Botones Azules",
          art: "assets/imgfav/1.png",
          year: 2022,
          artist: "Junior H & Luis R Conriquez",
          isFav: false,
          long: "3:50",
          click:false
        },
        {
          id: 2,
          name: "No Me Pesa",
          art: "assets/imgfav/2.jfif",
          year: 2020,
          artist: "Junior H",
          isFav: false,
          long: "2:20",
          click:false

        },
        {
          id: 3,
          name: "Yo Tambien Soy De Durango",
          art: "assets/imgfav/3.png",
          year: 2021,
          artist: "Alterados de la sierra",
          isFav: false,
          long: "4:01",
          click:false

        },
        {
          id: 4,
          name: "Moscow Mule",
          art: "assets/imgfav/bad.png",
          year: 2022,
          artist: "Bad Bunny",
          isFav: false,
          long: "1:50",
          click:false

        },
        {
          id: 5,
          name: "Ojitos lindos",
          art: "assets/imgfav/bad.png",
          year: 2022,
          artist: "Bad Bunny",
          isFav: false,
          long: "2:50",
          click:false

        },
        {
          id: 6,
          name: "Ojos Colorados",
          art: "assets/imgfav/bad.png",
          year: 2022,
          artist: "Bad Bunny",
          isFav: false,
          long: "4:00",
          click:false

        },
        {
          id: 7,
          name: "Despues De La Playa",
          art: "assets/imgfav/bad.png",
          year: 2022,
          artist: "Bad Bunny",
          isFav: false,
          long: "3:00",
          click:false

        },
        {
          id: 8,
          name: "Party",
          art: "assets/imgfav/bad.png",
          year: 2022,
          artist: "Bad Bunny",
          isFav: false,
          long: "4:00",
          click:false

        },
        {
          id: 9,
          name: "Un Ratito",
          art: "assets/imgfav/bad.png",
          year: 2022,
          artist: "Bad Bunny",
          isFav: false,
          long: "5:00",
          click:false

        },
        {
          id: 10,
          name: "Me Porto Bonito",
          art: "assets/imgfav/bad.png",
          year: 2022,
          artist: "Bad Bunny",
          isFav: false,
          long: "6:00",
          click:false

        },
        {
          id: 11,
          name: "Efecto",
          art: "assets/imgfav/bad.png",
          year: 2022,
          artist: "Bad Bunny",
          isFav: false,
          long: "4:00",
          click:false

        },
        {
          id: 12,
          name: "Me Fui De Vacaciones",
          art: "assets/imgfav/bad.png",
          year: 2022,
          artist: "Bad Bunny",
          isFav: false,
          long: "3:00",
          click:false

        },
        {
          id: 13,
          name: "Tarot",
          art: "assets/imgfav/bad.png",
          year: 2022,
          artist: "Bad Bunny",
          isFav: false,
          long: "3:50",
          click:false

        },
        {
          id: 14,
          name: "Un Coco",
          art: "assets/imgfav/bad.png",
          year: 2022,
          artist: "Bad Bunny",
          isFav: false,
          long: "2:23",
          click:false

        },
        {
          id: 15,
          name: "Aguacero",
          art: "assets/imgfav/bad.png",
          year: 2022,
          artist: "Bad Bunny",
          isFav: false,
          long: "2:00",
          click:false

        },
      ],
    };
  },

  methods:{
    showButtons: function(cancion){  
      cancion.click == false ? cancion.click = true : cancion.click = false;
    },

    fav: function(cancion){
      cancion.preventDefault
      cancion.isFav == false ? cancion.isFav = true : cancion.isFav = false;

    }
  }
});
</script>