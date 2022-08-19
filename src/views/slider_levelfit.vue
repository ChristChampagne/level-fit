<template>
  <!--Vue renderiza solamente 1 componente a la vez -->
  <ion-page>
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

    <ion-content :fullscreen="true">
      <ion-slides>
        <ion-slide>
          <div style="width=100%">
            <img src="/assets/fotos/gym.png" alt="" srcset="" />
          </div>
        </ion-slide>
        <ion-slide>
          <h1>Slide 2</h1>
        </ion-slide>
        <ion-slide>
          <h1>Slide 3</h1>
        </ion-slide>
      </ion-slides>

      <div
        style="
          display: flex;
          justify-content: space-around;
          margin: 0rem;
          margin-top: 2rem;
        "
      >
        <div class="semana" style="background-color: #389c16">
          <div class="semana_h2">
            <h2>Semana</h2>
          </div>
          <div class="semana_numero">
            <h3>01</h3>
          </div>
          <img src="/assets/fotos/weights.png" alt="" />
        </div>
        <div class="semana" style="background-color: #f1b600">
          <div class="semana_h2">
            <h2>Semana</h2>
          </div>
          <div class="semana_numero">
            <h3>02</h3>
          </div>
          <img src="/assets/fotos/russianweight.png" alt="" />
        </div>

        <div class="semana" style="background-color: #e80020">
          <div class="semana_h2">
            <h2>Semana</h2>
          </div>
          <div class="semana_numero">
            <h3>03</h3>
          </div>
          <img src="/assets/fotos/box.png" alt="" />
        </div>
      </div>
      <div class="imagenbottom m-3">
        <img src="/assets/fotos/girlboxing.jpg" alt="" srcset="" />
      </div>
      
    </ion-content>
  </ion-page>
</template>

<style>
body {
color: white !important;
}

.imagenbottom img {
  /* -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); */
  margin-top: 3rem;
  width: 100vw;
}

.semana_h2 {
  margin: 0;
  -ms-transform: rotate(270deg); /* IE 9 */
  transform: rotate(270deg);
  position: absolute;
  top: 40px;
  left: -10px;
}

.semana_numero {
  margin: 0;
  position: absolute;
  top: 0px;
  right: 20px;
}

.semana_numero h3 {
  font-weight: bolder;
  font-size: 4rem;
}

@media only screen and (max-width: 600px) {
  .semana_numero h3 {
    font-size: 2rem;
  }
  .semana_numero {
    right: 10px;
  }
}

.semana_h2 h2 {
  margin: 0;
  padding: 0;
  font-size: medium;
}

.semana {
  height: 200px;
  width: 26%;
  border-radius: 0.5rem;
  position: relative;
}

.semana img {
  height: 100px;
  width: 100px;
  position: absolute;
  bottom: -30px;
  right: -1px;
}
</style>

<style>
.levelfit_toolbar {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0.8rem;
  background-color: #d42323;
  display: inline-flex;
  text-align: center;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  /* box-shadow: 0px 6px 4px 0px rgba(0,0,0,0.2);
-webkit-box-shadow: 0px 6px 4px 0px rgba(0,0,0,0.2);
-moz-box-shadow: 0px 6px 4px 0px rgba(0,0,0,0.2); */
}

.levelfit_toolbar h1 {
  color: white;
  font-weight: bolder;
  margin: 0;
  padding: 0;
}

.levelfit_toolbar_icon {
  background-color: white;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin-right: 0.8rem;
}

.levelfit_toolbar_icon_menu {
  height: 25px;
  width: 25px;
  color: white;
}
</style>

<style>
</style>
<script>
import {
  IonHeader,
  IonPage,
  IonContent,
  IonSlides,
  IonSlide,
  menuController
} from "@ionic/vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "CardPage",
  components: {
    IonHeader,
    IonPage,
    IonContent,
    IonSlides,
    IonSlide,
  },
  data() {
    return {
      lista: [],
    };
  },
   methods: {
    openMenu() {
      menuController.open("app-menu");
    },
   }
});
</script>