<template>
  <ion-content>
    <ion-header :translucent="false">
      <div>
        <div class="levelfit_toolbar">
          <div class="levelfit_toolbar_icon"></div>
          <h1 class="">Level Fit</h1>
          <img
            class="levelfit_toolbar_icon_menu"
            src="/assets/svg/menu.svg"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </ion-header>
    <div id="principal">
      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-slides>
              <ion-slide>
                <div style="width=100%">
                  <img
                    src="../../public/assets/img/gym1.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
              </ion-slide>
              <ion-slide>
                <div style="width=100%">
                  <img
                    src="../../public/assets/img/gym2.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
              </ion-slide>
            </ion-slides>
          </ion-col>
          <ion-col size="12">
            <ion-datetime locale="es-ES" presentation="date"> </ion-datetime>
          </ion-col>

          <ion-col size="12" class="d-flex">
          

             <svg
              class="circle"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              style="
                shape-rendering: geometricPrecision;
                text-rendering: geometricPrecision;
                image-rendering: optimizeQuality;
                fill-rule: evenodd;
                clip-rule: evenodd;
              "
              viewBox=""
            >
              <g id="UrTavla">
                <circle
                  style="
                    fill: red;
                    stroke-width: 1.6871;
                    stroke-miterlimit: 10;
                  "
                  cx="60"
                  cy="60"
                  r="50"
                ></circle>
                <text
                  x="60"
                  y="60"
                  text-anchor="middle"
                  stroke="white"
                  dy=".3em"
                >
                  4
                </text>
              </g>
            </svg>

                         <svg
              class="circle"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              style="
                shape-rendering: geometricPrecision;
                text-rendering: geometricPrecision;
                image-rendering: optimizeQuality;
                fill-rule: evenodd;
                clip-rule: evenodd;
              "
              viewBox=""
            >
              <g id="UrTavla">
                <circle
                  style="
                    fill: red;
                    stroke-width: 1.6871;
                    stroke-miterlimit: 10;
                  "
                  cx="60"
                  cy="60"
                  r="50"
                ></circle>
                <text
                  x="60"
                  y="60"
                  text-anchor="middle"
                  stroke="white"
                  dy=".3em"
                >
                  Ago
                </text>
              </g>
            </svg>

                         <svg
              class="circle"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              style="
                shape-rendering: geometricPrecision;
                text-rendering: geometricPrecision;
                image-rendering: optimizeQuality;
                fill-rule: evenodd;
                clip-rule: evenodd;
              "
              viewBox=""
            >
              <g id="UrTavla">
                <circle
                  style="
                    fill: red;
                    stroke-width: 1.6871;
                    stroke-miterlimit: 10;
                  "
                  cx="60"
                  cy="60"
                  r="50"
                ></circle>
                <text
                  x="60"
                  y="60"
                  text-anchor="middle"
                  stroke="white"
                  dy=".3em"
                >
                  22
                </text>
              </g>
            </svg>

            
          </ion-col>
          <ion-col size="12">
            <div class="text-center">
              <ion-button color="transparent" style="width: 15rem; background-color:red !important; border-radius:1rem;"
                >Aceptar</ion-button
              >
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
  </ion-content>
</template>

<script>
import {} from "@ionic/vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "NuevoCalendario",
});
</script>

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

.circle {
  fill: red;
}
</style>