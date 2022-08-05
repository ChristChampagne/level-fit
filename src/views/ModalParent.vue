<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Modal</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-button color="dark" style="width:100%"  @click="openModal">Abrir modal</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'ModalParent',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,    IonButton
  }
});
</script>
