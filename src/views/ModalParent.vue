<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Modal Padre</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div>
                <h5> {{name}} </h5>
            </div>
            <ion-button 
                expand="block"
                @click="openModal"
                color="light"
            >
                Abrir Modal
            </ion-button>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonHeader, IonPage, IonTitle, IonToolbar, IonContent, 
    IonButton, modalController
} from '@ionic/vue';

import { defineComponent } from 'vue';
import ModalChild from './ModalChild.vue'

export default defineComponent({
    name: 'ModalParentPage',

    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonButton
    },
    data(){
        return {
            name:''
        }
    },
    methods: {
        //Crear funcion para abrir modal
        openModal: async function () {
            //Declarar función para crear con modalController la estructura del modal
            const modal = await modalController.create({
                component: ModalChild,
                parent: this
            });

            //Se abre el modal
            await modal.present();

            //Al terminar o cerrar modal, recibe respuesta
            let response = await modal.onDidDismiss();

            this.name = response.data.name
        }
    }
});
</script>