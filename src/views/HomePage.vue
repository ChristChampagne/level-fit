<template>
    <ion-content>
        <ion-header :translucent="false">
      <div>
        <div class="levelfit_toolbar">
          <div class="levelfit_toolbar_icon"></div>
          <h1 class="tittle_header">Level Fit</h1>
          <div>
            <ion-button class="btn-menu" @click="openMenu()"><ion-icon name="grid-outline"></ion-icon></ion-button>
          </div>
          
        </div>
      </div>
    </ion-header>
    </ion-content>
</template>
<!-- Code hidden for display purpose -->
<script>
import {menuController} from "@ionic/vue";
export default {
    methods:{
      openMenu(){
        menuController.open("app-menu")
      }
    }
};
</script>
<style>
.btn-menu{
   /* padding: 11px; */
  right: 1px;
  /* position: absolute; */
  color: white;
--background:color red;
  background-color: transparent;
}
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
.tittle_header{
  /* position: relative; */

  /* right: 1rem; */
}
</style>