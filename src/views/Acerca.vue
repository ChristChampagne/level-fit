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
      
      <div style="width: 100vw; text-align: center">
        <h1>Acerca de Level Fit</h1>
      </div>

      <div style="display: inline-block; width:100%">
        <div class="imagen w-100">
          <img src="/assets/fotos/benchpress.jpg" alt="" />
        </div>

        <div class="imagen container w-100">
          <div class="contenido_card w-100">
            <div class="icono_mision">
              <img src="../../public/assets/svg/vision.png" alt="" srcset="" />
            </div>
            <div style="margin-left: 1rem" class="card_text">
              <h3>Misión</h3>
              <p>
                Si hay una disciplina que está viviendo un boom en los gimnasios
                y entre los deportistas esa es el fitness o entrenamiento de
                fuerza..
              </p>
            </div>
          </div>

          <div class="contenido_card w-100">
            <div class="icono_mision">
              <img src="../../public/assets/svg/vision.png" alt="" srcset="" />
            </div>
            <div style="margin-left: 1rem">
              <h3>Visión</h3>
              <p>
                Si hay una disciplina que está viviendo un boom en los gimnasios
                y entre los deportistas esa es el fitness o entrenamiento de
                fuerza..
              </p>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<style>


.contenido_card {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: initial;
  vertical-align: middle;
  padding: 1rem;

  width: 90%;
   background-color: white;
  box-shadow: 10px 10px 8px 0px rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 10px 10px 8px 0px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 10px 10px 8px 0px rgba(0, 0, 0, 0.19);
  margin-bottom: 2rem;
  border-radius: .5rem;
}

.icono_mision {
  height: 90px;
  width: 90px;
  
}

.icono_mision img {
}

.imagen {
  width: 50%;
  align-content: center;
  justify-content: center;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  
}
.imagen img {
  width: 45vw;
  border-radius: .5rem;
  overflow: hidden;
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
import { IonHeader, IonPage, IonContent } from "@ionic/vue";
import {menuController} from "@ionic/vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "AcercaDe",
  components: {
    IonHeader,
    IonPage,
    IonContent,
  },
  methods: {
    openMenu() {
      menuController.open("app-menu");
    },
   },
  data() {
    return {
      lista: [],
    };
  },

  
});
</script>