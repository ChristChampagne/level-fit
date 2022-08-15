<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Componente Principal</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div>
                <p>Text con emit: {{name}}</p>
            </div>
            <event-emit-child @get-name="sendNameEvent">

            </event-emit-child>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonHeader, IonPage, IonTitle, IonToolbar, IonContent
} from '@ionic/vue';

import { defineComponent } from 'vue';
import EventEmitChild from './EventEmitChild.vue'

export default defineComponent({
    name: 'EventEmit',

    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent, 
        EventEmitChild
    },
    data(){
        return {
            name:''
        }
    },
    methods: {
        sendNameEvent(name){
            this.name = name;
        },
    }
});
</script>