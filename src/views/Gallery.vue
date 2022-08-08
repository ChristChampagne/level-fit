<template>
  <ion-content>
    <ion-grid>
      <div class="heart-outline__position">
        <ion-col class="img-principal">
          <img
            class="img-principal__hpesas"
            src="/assets/fotos/hombre-p.jpg"
            alt=""
          />
        </ion-col>
      </div>
      <div>
        <ion-col>
          <img
            class="img-principal__fotos-row3"
            src="/assets/fotos/pesas.jpg"
            alt=""
        /></ion-col>
        <ion-col>
          <img
            class="img-principal__fotos-row3"
            src="/assets/fotos/mujer-boxing.jpg"
            alt=""
        /></ion-col>
        <!-- <ion-col> <img class="img-principal__fotos-row3" src="/assets/fotos/pesas.jpg" alt="" /></ion-col> -->
      </div>
      <div>
        <ion-col>
          <img
            class="img-principal__fotos-rowlarge"
            src="/assets/fotos/hombre-c.jpg"
            alt=""
        /></ion-col>
        <div>
          <ion-col>
            <img
              class="img-principal__fotos-row2"
              src="/assets/fotos/abdominales.jpg"
              alt=""
            />
          </ion-col>
          <ion-col>
            <img
              class="img-principal__fotos-row2"
              src="/assets/fotos/llanta.jpg"
              alt=""
            />
          </ion-col>
        </div>
      </div>

    </ion-grid>
    <ion-footer>

      <div class="bar bar-subheader bar-royal">
    <div class="title">LevelFit ©</div>
  </div>
    </ion-footer>
  </ion-content>
</template>

<script>
// import {} from '@ionic/vue';
import { IonCol, IonGrid } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "GaleriaP",
  components: {
    IonCol,
    IonGrid,
  },
});
</script>

