<template>
    <ion-header :translucent="true">
        <ion-toolbar>
            <ion-title>Modal Hijo</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
        <ion-item>
            <ion-input placeholder="Nombre" name="name" v-model="name"></ion-input>
        </ion-item>
        <div class="ion-text-center">
            <ion-button @click="closeModal">Cerrar</ion-button>
        </div>
    </ion-content>
</template>

<script>
import {
    IonHeader, IonTitle, IonToolbar, IonContent, 
    IonItem, IonInput,IonButton, modalController
} from '@ionic/vue';

import { defineComponent } from 'vue';


export default defineComponent({
    name: 'ModalChild',

    components: {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonItem,
        IonInput,
        IonButton
    },
    data(){
        return {
            name:''
        }
    },
    methods: {
        closeModal : function(){
            modalController.dismiss({name: this.name})
        }
    }
});
</script>