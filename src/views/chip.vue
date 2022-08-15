<template>
  <ion-chip>
    <ion-label>Default</ion-label>
  </ion-chip>

  <ion-chip v-for="el in chips" :key="el.id">
    <ion-img style="max-width:25px;margin: 0 auto;" :src="el.portada"></ion-img>
    <ion-label color="secondary">{{el.autor}}</ion-label>
  
  </ion-chip>

  <ion-chip color="secondary">
    <ion-label color="dark">Secondary w/ Dark label</ion-label>
  </ion-chip>

  <ion-chip :disabled="true">
    <ion-label>Disabled Chip</ion-label>
  </ion-chip>

  <ion-chip>
    <ion-icon :icon="pin"></ion-icon>
    <ion-label>Default</ion-label>
  </ion-chip>

  <ion-chip>
    <ion-icon :icon="heart" color="dark"></ion-icon>
    <ion-label>Default</ion-label>
  </ion-chip>

  <ion-chip>
    <ion-label>Button Chip</ion-label>
    <ion-icon :icon="closeCircle"></ion-icon>
  </ion-chip>

  <ion-chip>
    <ion-icon :icon="pin" color="primary"></ion-icon>
    <ion-label>Icon Chip</ion-label>
    <ion-icon :icon="close"></ion-icon>
  </ion-chip>

  <ion-chip>
    <ion-avatar>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
    </ion-avatar>
    <ion-label>Avatar Chip</ion-label>
    <ion-icon :icon="closeCircle"></ion-icon>
  </ion-chip>
</template>

<script>
import {
  IonAvatar, IonChip, IonIcon, IonLabel 
} from "@ionic/vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "ChipsPage",
  components: {
    IonAvatar, IonChip, IonIcon, IonLabel 
  },
  data() {
    return {
      chips: [
        { id: 1, name: "Tiago PZK, LIT killah - Entre Nosotros", portada: "assets/img/entrenosotros.jpg", año: 2019, autor: "LIT killah | Tiago PZK", duracion: "3m 12s", isFav: false },
        { id: 2, name: "Joji - Glimpse of Us", portada: "assets/img/Joji.jpg", año: 2020, autor: "Joji", duracion: "3m 12s", isFav: false },
        { id: 3, name: "Charlie Puth - Light Switch", portada: "assets/img/LightS.png", año: 2020, autor: "Charlie Puth", duracion: "3m 12s", isFav: false },
        { id: 4, name: "The Kid LAROI - Thousand Miles", portada: "assets/img/Thosand.jpg", año: 2020, autor: "Kid LAROI", duracion: "3m 12s", isFav: false },
        { id: 5, name: "PARTIENDONOS LA MADRE ZARCORT ft. Kairo", portada: "assets/img/Zarcort.jpg", año: 2020, autor: "ZARCORT ft. Kairo", duracion: "3m 12s", isFav: false },
        { id: 6, name: "David Dallas - Runnin’", portada: "assets/img/Runnin.jpg", año: 2020, autor: "David Dallas", duracion: "3m 12s", isFav: false },
        { id: 7, name: "Travis Scott & Kendrick Lamar “Goosebumps” - 21 Savage (Remix)", portada: "assets/img/travis.png", año: 2020, autor: "Travis Scott & Kendrick Lamar", duracion: "3m 12s", isFav: false },
        { id: 8, name: "Harry Styles - As It Was", portada: "assets/img/Harry.jpg", año: 2020, autor: "Harry Styles", duracion: "3m 12s", isFav: false },
        { id: 9, name: "Lecrae - This is My Time", portada: "assets/img/lacre.jpg", año: 2020, autor: "Lecrae", duracion: "3m 12s", isFav: false },
        { id: 10, name: "Wake Me Up Before You Go / Wham! ", portada: "assets/img/Wham.jpg", año: 2020, autor: "Wham!", duracion: "3m 12s", isFav: false },
        { id: 11, name: "2Pac - California Love feat. Dr. Dre", portada: "assets/img/California.png", año: 2020, autor: "2Pac", duracion: "3m 12s", isFav: false },
        { id: 12, name: "Will Paquin - Chandelier", portada: "assets/img/Paquin.jpg", año: 2020, autor: "Will Paquin", duracion: "3m 12s", isFav: false },
        { id: 13, name: "JVKE - this is what falling in love feels like", portada: "assets/img/love.jpg", año: 2020, autor: "JVKE", duracion: "3m 12s", isFav: false },
        { id: 14, name: "TRUENO- FEEL ME??", portada: "assets/img/Trueno.png", año: 2020, autor: "TRUENO", duracion: "3m 12s", isFav: false },
        { id: 15, name: "Bad Bunny - Tití Me Preguntó", portada: "assets/img/BadConejo.jpg", año: 2020, autor: "Bad Bunny", duracion: "3m 12s", isFav: false },
      ],
    };
  },
});
</script>