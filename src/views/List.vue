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
          <ion-label>
            <h1>Lista de Canciones</h1>
          </ion-label>
        </ion-list-header>
        <ion-item-sliding v-for="el in lista" :key="el.id">
          <ion-item>
            <ion-card>
              <ion-img :src="el.portada"></ion-img>
              <ion-card-header>
                <ion-card-title>{{ el.name }}</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                {{ el.año }}
                {{ el.autor }}
                {{ el.duracion }}
              </ion-card-content>
            </ion-card>
          </ion-item>
          <ion-item-options side="end">
            <ion-item-option @click="addFav(el)">
              <ion-icon size="small" v-if="el.isFav" src="/assets/svg/heartf.svg"></ion-icon>
              <ion-icon size="small" v-else src="/assets/svg/heart.svg"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
      <ion-list v-if="myFavs.length">
        <ion-list-header>
          <ion-label>
            <h1>Lista de Canciones Favoritas</h1>
          </ion-label>
        </ion-list-header>
        <ion-item v-for="el in myFavs" :key="el">
          <ion-item>
            <ion-label>{{ el }}</ion-label>
          </ion-item>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonImg,
} from "@ionic/vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "ListPage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonList,
    IonItem,
    IonLabel,
    IonItemSliding,
    IonItemOption,
    IonItemOptions,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonImg
  },
  data() {
    return {
      lista: [
        { id: 1, name: "Tiago PZK, LIT killah - Entre Nosotros", portada: "assets/img/entrenosotros.jpg", año: 2019, autor: "LIT killah | Tiago PZK", duracion: "3m 12s", isFav: false },
        { id: 2, name: "Joji - Glimpse of Us", portada: "", año: 2020, autor: "", duracion: "3m 12s", isFav: false },
        { id: 3, name: "Charlie Puth - Light Switch", portada: "", año: 2020, autor: "", duracion: "3m 12s", isFav: false },
        { id: 4, name: "The Kid LAROI - Thousand Miles", portada: "", año: 2020, autor: "", duracion: "3m 12s", isFav: false },
        { id: 5, name: "PARTIENDONOS LA MADRE ZARCORT ft. Kairo", portada: "", año: 2020, autor: "", duracion: "3m 12s", isFav: false },
        { id: 6, name: "David Dallas - Runnin’", portada: "", año: 2020, autor: "", duracion: "3m 12s", isFav: false },
        { id: 7, name: "Travis Scott & Kendrick Lamar “Goosebumps” - 21 Savage (Remix)", portada: "", año: 2020, autor: "", duracion: "3m 12s", isFav: false },
        { id: 8, name: "Harry Styles - As It Was", portada: "", año: 2020, autor: "", duracion: "3m 12s", isFav: false },
        { id: 9, name: "Lecrae - This is My Time", portada: "", año: 2020, autor: "", duracion: "3m 12s", isFav: false },
        { id: 10, name: "Wake Me Up Before You Go / Wham! ", portada: "", año: 2020, autor: "", duracion: "3m 12s", isFav: false },
        { id: 11, name: "2Pac - California Love feat. Dr. Dre", portada: "", año: 2020, autor: "", duracion: "3m 12s", isFav: false },
        { id: 12, name: "Will Paquin - Chandelier", portada: "", año: 2020, autor: "", duracion: "3m 12s", isFav: false },
        { id: 13, name: "JVKE - this is what falling in love feels like", portada: "", año: 2020, autor: "", duracion: "3m 12s", isFav: false },
        { id: 14, name: "TRUENO- FEEL ME??", portada: "", año: 2020, autor: "", duracion: "3m 12s", isFav: false },
        { id: 15, name: "Bad Bunny - Tití Me Preguntó", portada: "", año: 2020, autor: "", duracion: "3m 12s", isFav: false },
      ],
      myFavs: []
    }
  },
  methods: {
    addFav: function (el) {
      if (!el.isFav) {
        this.myFavs.push(el.name)
        el.isFav = true;
      } else {
        this.myFavs = this.myFavs.filter(item => item !== el.name)
        el.isFav = false;
      }
      this.$refs.elementSliding.$el.closeSlidingItems();
    }
  },

});
</script>