<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Canciones</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card v-for="el in card" :key="el.id">
       <div class="" :style="{ backgroundImage: 'url(' + el.portada +')' ,fontSize: '12px' }"
          style="
            background-position: bottom;
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
          "
        >
        <ion-img style="max-width:350px;margin: 0 auto;" :src="el.portada"></ion-img>
       </div> 
            
        <ion-fab horizontal="end">
          <ion-fab-button style="margin-top: -30px">
            <span>+</span>
          </ion-fab-button>
        </ion-fab>
        <ion-card-header>
          <ion-card-subtitle>{{ el.name }}</ion-card-subtitle>
          <div class="song-container" style="display: flex;align-items: center; justify-content: space-between;">
            <ion-card-title class="song-container__name--blue">{{ el.nombre }}</ion-card-title>
            <ion-card-subtitle class="song-container__duration" style="font-size:12px;padding: 5px;background: #f1f1f1;border-radius: 4px;">{{ el.duracion }} </ion-card-subtitle>
          </div>
          <ion-card-subtitle style="font-size:12px;padding: 5px;background: #f1f1f1;border-radius: 4px; width: fit-content;">{{ el.año }}</ion-card-subtitle>
          <ion-card-subtitle>Autor: {{ el.autor }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <p>Descripcion: {{ el.descripcion }}</p>
        </ion-card-content>
        <ion-card-content> </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle,
  IonImg
} from "@ionic/vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "CardPage",
  components: {
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonCardTitle,
    IonImg
  },
  data() {
    return {
      card: [
        { id: 1, name: "Tiago PZK, LIT killah - Entre Nosotros", portada: "assets/img/entrenosotros.jpg", año: 2019, autor: "LIT killah | Tiago PZK", duracion: "3m 12s", isFav: false, descripcion: "Entre nosotros habla de la ruptura de una relación, de cuando a veces eso que cuidamos tanto se va desgastando, del vacío que se siente y de lo mal que hace que esa persona que amas deja de ser demostrativa cuenta Tiago PZK sobre Entre Nosotros."},
        { id: 2, name: "Joji - Glimpse of Us", portada: "assets/img/Joji.jpg", año: 2020, autor: "Joji", duracion: "3m 12s", isFav: false, descripcion: "Es una oscura canción de amor donde Joji compara su relación actual con la anterior y el amor que sentía por su ex; Joji no puede olvidar el amor y el sentimiento que tuvo en su última relación por lo que intenta revivir esos sentimientos."},
        { id: 3, name: "Charlie Puth - Light Switch", portada: "assets/img/LightS.png", año: 2020, autor: "Charlie Puth", duracion: "3m 12s", isFav: false, descripcion: "La alegre canción pop, en la que Puth canta sobre su atracción por un interés amoroso"},
        { id: 4, name: "The Kid LAROI - Thousand Miles", portada: "assets/img/Thosand.jpg", año: 2020, autor: "Kid LAROI", duracion: "3m 12s", isFav: false, descripcion: "NONE"},
        { id: 5, name: "PARTIENDONOS LA MADRE ZARCORT ft. Kairo", portada: "assets/img/Zarcort.jpg", año: 2020, autor: "ZARCORT ft. Kairo", duracion: "3m 12s", isFav: false, descripcion: "Me gusta el Ritmo :)"},
        { id: 6, name: "David Dallas - Runnin’", portada: "assets/img/Runnin.jpg", año: 2020, autor: "David Dallas", duracion: "3m 12s", isFav: false, descripcion: "Me gusta el Ritmo :)"},
        { id: 7, name: "Travis Scott & Kendrick Lamar “Goosebumps” - 21 Savage (Remix)", portada: "assets/img/travis.png", año: 2020, autor: "Travis Scott & Kendrick Lamar", duracion: "3m 12s", isFav: false, descripcion: "Me gusta el Ritmo :)"},
        { id: 8, name: "Harry Styles - As It Was", portada: "assets/img/Harry.jpg", año: 2020, autor: "Harry Styles", duracion: "3m 12s", isFav: false, descripcion: "Me gusta el Ritmo :)"},
        { id: 9, name: "Lecrae - This is My Time", portada: "assets/img/lacre.jpg", año: 2020, autor: "Lecrae", duracion: "3m 12s", isFav: false, descripcion: "Me gusta el Ritmo :)"},
        { id: 10, name: "Wake Me Up Before You Go / Wham! ", portada: "assets/img/Wham.jpg", año: 2020, autor: "Wham!", duracion: "3m 12s", isFav: false, descripcion: "Me gusta el Ritmo :)"},
        { id: 11, name: "2Pac - California Love feat. Dr. Dre", portada: "assets/img/California.png", año: 2020, autor: "2Pac", duracion: "3m 12s", isFav: false, descripcion: "Me gusta el Ritmo :)"},
        { id: 12, name: "Will Paquin - Chandelier", portada: "assets/img/Paquin.jpg", año: 2020, autor: "Will Paquin", duracion: "3m 12s", isFav: false, descripcion: "Me gusta el Ritmo :)"},
        { id: 13, name: "JVKE - this is what falling in love feels like", portada: "assets/img/love.jpg", año: 2020, autor: "JVKE", duracion: "3m 12s", isFav: false, descripcion: "Me gusta el Ritmo :)"},
        { id: 14, name: "TRUENO- FEEL ME??", portada: "assets/img/Trueno.png", año: 2020, autor: "TRUENO", duracion: "3m 12s", isFav: false, descripcion: "Me gusta el Ritmo :)"},
        { id: 15, name: "Bad Bunny - Tití Me Preguntó", portada: "assets/img/BadConejo.jpg", año: 2020, autor: "Bad Bunny", duracion: "3m 12s", isFav: false, descripcion: "Me gusta el Ritmo :)"},
      ],
    };
  },
});
</script>