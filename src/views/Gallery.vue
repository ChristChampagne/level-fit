<template>
  <ion-content>
    <ion-header :translucent="false">
      <div>
        <div class="levelfit_toolbar">
          <div class="levelfit_toolbar_icon"></div>
          <h1 class="tittle_header">Level Fit</h1>
          <div>
            <ion-button class="btn-menu" @click="openMenu()"
              ><ion-icon name="grid-outline"></ion-icon
            ></ion-button>
          </div>
        </div>
      </div>
    </ion-header>

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
import { IonCol, IonGrid, menuController } from "@ionic/vue";
// import { defineComponent } from "vue";

export default {
  name: "GaleriaP",
  methods: {
    openMenu() {
      menuController.open("app-menu");
    },
  },
  components: {
    IonCol,
    IonGrid,
  },
};
</script>
