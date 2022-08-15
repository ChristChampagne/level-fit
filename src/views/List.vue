<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Lista</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list ref="elementSliding">
        <ion-list-header>
          <ion-label><h1>Lista de Canciones</h1></ion-label>
        </ion-list-header>
        <ion-item-sliding v-for="videogame in VideoGamesList" :key="videogame.id">
          <ion-item>
            <ion-label>{{ videogame.name }}</ion-label>
          </ion-item>
          <ion-item-options side="end">
            <ion-item-option @click="addFav(videogame)">
              <ion-icon
                size="small"
                v-if="videogame.isFav"
                src="/assets/svg/heart.svg"
              ></ion-icon>
              <ion-icon
                size="small"
                v-else
                src="/assets/svg/heart-outline.svg"
              ></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
      <ion-list v-if="myFavs.length">
        <ion-list-header>
          <ion-label><h1>Lista de Canciones Favoritas</h1></ion-label>
        </ion-list-header>
        <ion-item v-for="el in myFavs" :key="el">
          <ion-item>
            <ion-label>{{el}}</ion-label>

          </ion-item>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonItemOptions,
  IonItemOption,
  IonItemSliding,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListPage",
  components: {
    IonItemOptions,
    IonItemOption,
    IonItemSliding,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
  },

  data: function () {
    return {
      VideoGamesList: [
        { id: 1, name: "Los Botones Azules", art: "assets/imgfav/1.png", year:2022, artist:"Junior H & Luis R Conriquez", isFav: false, long:"3:50"},
        { id: 2, name: "No Me Pesa", art: "assets/imgfav/1.png", year:2020, artist:"Junior H", isFav: false, long:"2:20"},
        { id: 3, name: "Yo Tambien Soy De Durango", art: "assets/imgfav/3.png", year:2021, artist:"Alterados de la sierra", isFav: false,long:"4:01"},
        { id: 4, name: "Moscow Mule", art: "assets/imgfav/bad.png", year:2022, artist:"Bad Bunny", isFav: false,long:"1:50"},
        { id: 5, name: "Ojitos lindos", art: "assets/imgfav/bad.png", year:2022, artist:"Bad Bunny", isFav: false,long:"2:50"},
        { id: 6, name: "Ojos Colorados", art: "assets/imgfav/bad.png", year:2022, artist:"Bad Bunny", isFav: false,long:"4:00" },
        { id: 7, name: "Despues De La Playa", art: "assets/imgfav/bad.png", year:2022, artist:"Bad Bunny", isFav: false,long:"3:00"},
        { id: 8, name: "Party", art: "assets/imgfav/bad.png", year:2022, artist:"Bad Bunny", isFav: false,long:"4:00"},
        { id: 9, name: "Un Ratito", art: "assets/imgfav/bad.png", year:2022, artist:"Bad Bunny", isFav: false,long:"5:00"},
        { id: 10, name: "Me Porto Bonito", art: "assets/imgfav/bad.png", year:2022, artist:"Bad Bunny", isFav: false,long:"6:00"},
        { id: 11, name: "Efecto", art: "assets/imgfav/bad.png", year:2022, artist:"Bad Bunny", isFav: false,long:"4:00"},
        { id: 12, name: "Me Fui De Vacaciones", art: "assets/imgfav/bad.png", year:2022, artist:"Bad Bunny", isFav: false,long:"3:00"},
        { id: 13, name: "Tarot", art: "assets/imgfav/bad.png", year:2022, artist:"Bad Bunny", isFav: false,long:"3:50"},
        { id: 14, name: "Un Coco", art: "assets/imgfav/bad.png", year:2022, artist:"Bad Bunny", isFav: false,long:"2:23"},
        { id: 15, name: "Aguacero", art: "assets/imgfav/bad.png", year:2022, artist:"Bad Bunny", isFav: false,long:"2:00"},
      ],
      myFavs: [],
    };
  },
  methods: {
    addFav: function (videogame) {
      console.log(videogame);
      if (!videogame.isFav) {
        // This se utiliza para de este metodo y de este componente toma la variabla myfav y darle un push al nuevo array.
        this.myFavs.push(videogame.name);
        videogame.isFav = true;
      } else {
        this.myFavs = this.myFavs.filter((item) => item !== videogame.name);
        videogame.isFav = false;
      }

      this.$refs.elementSliding.$el.closeSlidingItems();
    },
  },
});
</script>