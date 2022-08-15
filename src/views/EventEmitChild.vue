<template>
    <ion-item>
        <ion-input placeholder="Nombre" name="name" v-model="name"></ion-input>
    </ion-item>
    <div class="ion-text-center">
        <ion-button @click="sendName">Agregar</ion-button>
    </div>
</template>

<script>
import {
    IonItem, IonInput,IonButton
} from '@ionic/vue';

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EventEmitChild',
    emits: ["getName"],
    components: {
        IonItem,
        IonInput,
        IonButton
    },
    data() {
        return {
            name: ''
        }
    },
    methods: {
        sendName : function(){
            this.$emit("getName", this.name)
        },
    }
});
</script>