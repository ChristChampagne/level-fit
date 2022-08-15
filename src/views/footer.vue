<template>
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
  <div class="bar bar-subheader bar-royal">
    <div class="title">LevelFit ©</div>
  </div>

  <div class="bar-large bar-subheader bar-royal">
    <!-- <ion-img src="./user.png"></ion-img> -->
    <!-- <img src="user.png" alt=""> -->

    <div class="SocialComponent">
      <div class="SocialBar">
        <ion-icon class="user-icon" name="person-circle"></ion-icon>

        <div class="links">
          <i class="icon-social"><ion-icon name="logo-facebook"></ion-icon></i>
          <i class="icon-social"><ion-icon name="logo-twitter"></ion-icon></i>
          <i class="icon-social"><ion-icon name="logo-instagram"></ion-icon></i>
          <i class="icon-social"><ion-icon name="mail"></ion-icon></i>
        </div>
      </div>
    </div>
    <ul class="bar-subheader-container">
      <li class="bar-subheader-container__name">FAQ</li>
      <li class="bar-subheader-container__name">Blog</li>
      <li class="bar-subheader-container__name">Portafolio</li>
    </ul>

    <ul class="bar-subheader-container">
      <li class="bar-subheader-container__name">Privacidad</li>
      <li class="bar-subheader-container__name">Aviso de Privacidad</li>
      <li class="bar-subheader-container__name">Cookies</li>
    </ul>

    <!-- <div class="title">Redes </div> -->
  </div>
</template>

<script>
import {menuController} from "@ionic/vue";
// import { IonFooter, IonTitle, IonToolbar } from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "FooterP",
  components: {
    // IonImg
    // IonFooter,
    // IonTitle,
    // IonToolbar,
  },
   methods: {
    openMenu() {
      menuController.open("app-menu");
    },
  },
});
</script>