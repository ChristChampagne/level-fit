<template>
  <ion-menu menu-id="app-menu" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <div class="ion_toolbar_style">
          <img
            class="ion_toolbar_image"
            src="/assets/fotos/avatar_menu.png"
            alt=""
          />
          <div>
            <ion-title class="title_ionic">Ashfak Sayem</ion-title>
            <ion-title class="subtitle_ionic">ashfaksayem@gmail.com</ion-title>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item class="fill-red">
          <div class="ion_item_red"></div>
          <div class="ion_toolbar_style">
            <div class="ion_toolbar_groups">
              <div class="ion_toolbar_group1">
                <img
                  class="ion_toolbar_option_image"
                  src="/assets/fotos/misrutinas.png"
                  alt=""
                />
                <ion-label>Mis rutinas</ion-label>
              </div>

              <div class="notificaciones">
                <p>2</p>
              </div>
            </div>
          </div>
        </ion-item>

         <ion-item>
          <div class="ion_toolbar_style">
            <div class="ion_toolbar_groups">
              <div class="ion_toolbar_group1">
                <img
                  class="ion_toolbar_option_image"
                  src="/assets/fotos/acercade.svg"
                  alt=""
                />
                <ion-label>Acerca de</ion-label>
              </div>

              <div class="notificaciones">
                <p>2</p>
              </div>
            </div>
          </div>
        </ion-item>

         <ion-item>
          <div class="ion_toolbar_style">
            <div class="ion_toolbar_groups">
              <div class="ion_toolbar_group1">
                <img
                  class="ion_toolbar_option_image"
                  src="/assets/fotos/noticias.svg"
                  alt=""
                />
                <ion-label>Noticias</ion-label>
              </div>

            </div>
          </div>
        </ion-item>


         <ion-item>
          <div class="ion_toolbar_style">
            <div class="ion_toolbar_groups">
              <div class="ion_toolbar_group1">
                <img
                  class="ion_toolbar_option_image"
                  src="/assets/fotos/galeria.svg"
                  alt=""
                />
                <ion-label href="Gallery.vue">Galería</ion-label>
              </div>

            </div>
          </div>
        </ion-item>

         <ion-item>
          <div class="ion_toolbar_style">
            <div class="ion_toolbar_groups">
              <div class="ion_toolbar_group1">
                <img
                  class="ion_toolbar_option_image"
                  src="/assets/fotos/calendario.svg"
                  alt=""
                />
                <ion-label>Calendario</ion-label>
              </div>

              <div class="notificaciones">
                <p>2</p>
              </div>
            </div>
          </div>
        </ion-item>

         <ion-item>
          <div class="ion_toolbar_style">
            <div class="ion_toolbar_groups">
              <div class="ion_toolbar_group1">
                <img
                  class="ion_toolbar_option_image"
                  src="/assets/fotos/configuracion.svg"
                  alt=""
                />
                <ion-label ></ion-label>
              </div>

            </div>
          </div>
        </ion-item>

         <ion-item>
          <div class="ion_toolbar_style">
            <div class="ion_toolbar_groups">
              <div class="ion_toolbar_group1">
                <img
                  class="ion_toolbar_option_image"
                  src="/assets/fotos/ayuda.svg"
                  alt=""
                />
                <ion-label>Ayuda</ion-label>
              </div>

            </div>
          </div>
        </ion-item>
        
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<style>

/* .fill-red {
  background-color: red !important;
}

.ion_item_red {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: red !important;
  z-index: -100;
  padding-top: 1rem;
} */

.notificaciones {
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border-radius: 4px;
  padding: 6px 10px 10px 10px;
  background-color: #B1E5FC;
}

.notificaciones p {
   
  margin: 0;
  padding: 0;
}

.ion_toolbar_groups {
  width: 250px;
  display: inline-flex;
  justify-content: space-between;
}

.ion_toolbar_group1 {
  display: flex;
  align-items: center;
}

.ion_toolbar_style {
  display: flex;
  align-items: center;
  text-align: left;
}

.ion_toolbar_image {
  height: 4rem;
  margin: 1rem;
}

.title_ionic {
  color: black;
}

.subtitle_ionic {
  color: rgb(97, 97, 97);
  font-size: small;
}

.ion_toolbar_option_image {
  height: 2rem;
  margin-right: 1rem;
}
</style>

<script>
import {
  IonMenu,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonList,
  IonLabel,
} from "@ionic/vue";
export default {
  name: "MenuS_",
  components: {
    IonMenu,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonList,
    IonLabel,
  },
};
</script>