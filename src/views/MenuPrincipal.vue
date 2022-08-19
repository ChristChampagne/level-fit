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

  <ion-content class="m-1">
    <ion-grid>
      <ion-row>
        <ion-col
          style="background-color: #d42323; border-radius: 3px"
          class="m-1"
        >
          <div class="d-flex">
            <img
              src="../../public/assets/img/login-icon.jpg"
              alt=""
              style="width: 4rem; height: 4rem"
              class="ml-3 mt-2 mr-5"
            />
            <h1 style="color: white; font-weight: bold">
              ¡Bienvenido, usuario!
            </h1>
          </div>
          <div></div>
        </ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid>
      <ion-row>
        <ion-col style="border-radius: 3px" class="m-1">
          <ion-card style="background-color: #d42323" class="">
            <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-card-content style="color: #ffa4a4">
                    <h1 style="font-weight: bold">
                      Calorías quemadas el día de hoy: 2250
                    </h1>
                    <h4>Reanuda tu rutina ahora</h4>
                  </ion-card-content>
                </ion-col>
                <ion-col>
                  <img src="../../public/assets/fotos/hombre.png" />
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card>

          <ion-grid class="text-center">
            <ion-row>
              <ion-col size="5" class="mt-3 mr-1">
                <ion-card style="background-color: #d42323">
                  <img src="../../public/assets/fotos/card1.png" />

                  <ion-card-content>
                    <h3 style="font-weight: bold; color: white">
                      Rutina Diaria de Pierna
                    </h3>
                  </ion-card-content>
                </ion-card>
              </ion-col>

              <ion-col size="5" class="mt-3">
                <ion-card style="background-color: #d42323">
                  <img src="../../public/assets/fotos/card2.png" />
                  <ion-card-content>
                    <h3 style="font-weight: bold; color: white">
                      Rutina de Abdomen
                    </h3>
                  </ion-card-content>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid class="mb-5">
      <ion-row>
        <ion-col size="6">
            <div style="border-radius:20px">
          <img  src="../../public/assets/fotos/1.png" alt="" />

            </div>
        </ion-col>

        <ion-col size="6">
            <div><img src="../../public/assets/fotos/2.png" alt="" /></div></ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import { menuController } from "@ionic/vue";

export default {
  name: "MenuPrincipal",
  methods: {
    openMenu() {
      menuController.open("app-menu");
    },
  },
  components: {},
};
</script>

