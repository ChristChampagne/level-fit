<template>
  <div id="principal">
    <ion-grid>
      <ion-row>
        <ion-col size="12">
          <div class="text-center">
            <img
              src="../../public/assets/img/login-icon.jpg"
              alt=""
              class="mt-5"
              style="width: 60%"
            />
          </div>
        </ion-col>

        <ion-col size="12">
          <div class="text-center">
            <h1 style="font-weight: bold" class="mb-3">
              ¡Ingresa a <a style="color: red">LevelFit!</a>
            </h1>
          </div>
          <ion-input
            style="border: 3px solid #8c2c23; border-radius: 15px; height: 4rem"
          ></ion-input>

          <ion-input
            style="border: 3px solid #8c2c23; border-radius: 15px; height: 4rem; margin-top:1rem"
          ></ion-input>
          <div class="text-left">
            <a class="mr-3 ml-3" style="font-size: 0.8rem; font-weight: bold"
              >¿Olvidaste tu contraseña? <a>Registrarte</a></a
            >
          </div>

          <div class="text-center mt-5">
            <ion-button color="danger" style="width:13rem; font-weight:bold; height:2.5rem">Ingresar</ion-button>
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
</template>

<script>
import {} from "@ionic/vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginPrincipal  ",
  components: {},
});
</script>