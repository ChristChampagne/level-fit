<template>
  <ion-content>
    <ion-title>Peliculas Christian Rgz</ion-title>
    <ion-accordion-group
      v-for="item in lista"
      :key="item.id"
      ref="accordionGroup"
    >
      <ion-accordion value="first">
        <ion-item slot="header" color="light">
          <ion-label>{{ item.title }}</ion-label>
        </ion-item>

        <div class="ion-padding" slot="content">
          <ion-grid>
            <ion-row>
              
              <ion-col><ion-img :src="item.portada" style="width: 100%;"></ion-img>
              </ion-col>
              
              <ion-col>
          <h4 >{{item.id}}  -   {{pelicula.year}}</h4>                
          <h1>Descripcion</h1>
          {{pelicula.sinopsis}}
                </ion-col>
            </ion-row>
          </ion-grid>

        </div>
      </ion-accordion>
    </ion-accordion-group>
  </ion-content>
</template>

<script>
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonImg,
} from "@ionic/vue";

import { defineComponent } from "vue";
import axios from 'axios';

export default defineComponent({
  name: "AxiosCard  ",
  components: {
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
    IonImg,
  },
  data() {
    return {
      lista: [
    ],
    };
  },

 async  created(){
   await axios.get("https://jsonplaceholder.typicode.com/todos").then((result) =>{
    this.lista = result.data;
   })
  }

});
</script>