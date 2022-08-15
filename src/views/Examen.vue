<template>
<ion-content>
    <ion-title>Lista Series | Alejandro Gurrola</ion-title>
    <ion-accordion-group v-for="el in SeriesPage" :key="el.id" ref="accordionGroup">
      <ion-accordion value="first">
        <ion-item slot="header" color="light">
          <ion-label>{{el.name}}</ion-label>
        </ion-item>
        <div class="ion-padding" slot="content">
            <ion-img :src="el.portada" style="width: 20%; margin: inherit; margin-top: 08vh; margin-bottom: 2vh"></ion-img>
          {{el.name}}
          <div class="" style="background-color:darkred;width:fit-content; margin:left; border-radius: 25%;font-size: 20px;">{{el.year}}</div>
          <h1>Descripcion</h1>
          {{el.resumen}}
        </div>
      </ion-accordion>
     
      
    </ion-accordion-group>
  </ion-content>
</template>

<script>
import {
IonAccordion, 
IonAccordionGroup,
IonItem, 
IonLabel,
IonImg
} from "@ionic/vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "CardPage",
  components: {
    IonAccordion, 
    IonAccordionGroup,
    IonItem, 
    IonLabel,
    IonImg
    
  },
  data() {
    return {
      SeriesPage: [
        { id: 1, name: "LUPIN", portada: "assets/images/lupin.jpg", year: 2020, resumen: "Basada en la historia de Arsène Lupin, el ladrón Assane Diop se propone vengar a su padre de las injusticias sufridas por parte de una familia adinerada."},
        { id: 2, name: "Breaking Bad", portada: "assets/images/bb.jpg", year: 2020, resumen: "El profesor calmado de química de una secundaria, Walter White cree que su vida no puede ser peor."},
        { id: 3, name: "Better Call Saul", portada: "assets/images/bcs.jpg", year: 2020, resumen: "La vida del peculiar abogado Saul Goodman mientras defiende a narcotraficantes en particular, y a toda suerte de criminales en general."},
        { id: 4, name: "Arcane", portada: "assets/images/arcane.jpg", year: 2020, resumen: "Con las dispares ciudades de Piltover y Zaun como telón de fondo, dos hermanas luchan en bandos opuestos de una guerra entre tecnologías mágicas y creencias enfrentadas."},
        { id: 5, name: "The Boys", portada: "assets/images/boys.jpg", year: 2020, resumen: "Cuando los superhéroes abusan de sus superpoderes en lugar de usarlos para el bien, The Boys se embarcan en una búsqueda heroica para exponer secretos."},
        { id: 6, name: "Stranger Things", portada: "assets/images/st.jpeg", year: 2020, resumen: "Cuando un niño desaparece, sus amigos, la familia y la policía se ven envueltos en una serie de eventos misteriosos al tratar de encontrarlo."},
        { id: 7, name: "Rick & Morty", portada: "assets/images/ram.jpg", year: 2020, resumen: "Después de haber estado desaparecido durante casi 20 años, Rick Sánchez llega de imprevisto a la puerta de la casa de su hija Beth y se va a vivir con ella y su familia utilizando el garaje como su laboratorio personal."},
        { id: 8, name: "Brooklyn 99", portada: "assets/images/99.jpg", year: 2020, resumen: "Los detectives Jake Peralta, Amy Santiago, Rosa Diaz y la sargento Terry Jeffords son unos policías talentosos, sin preocupaciones y con el mejor registro de arrestos, hasta que llega a la estación policial el nuevo jefe Raymond Holt."},
        { id: 9, name: "Love, Death & Robots", portada: "assets/images/lvr.jpg", year: 2020, resumen: "Una colección de cuentos animados en varios géneros, que incluyen ciencia ficción, fantasía, horror y comedia."},
        { id: 10, name: "Final Space", portada: "assets/images/fs.jpg", year: 2020, resumen: "El astronauta Gary y su ayudante destructor de planetas Mooncake viajan por el espacio para encontrar dónde termina el universo."},
        { id: 11, name: "The witcher", portada: "assets/images/witcher.jpg", year: 2020, resumen: "El brujo Geralt, un cazador de monstruos, trata de encontrar su lugar en un mundo en el que las personas suelen ser más malvadas que las bestias."},
        { id: 12, name: "Chernobyl", portada: "assets/images/cher.jpg", year: 2020, resumen: "Hombres y mujeres valientes actúan heroicamente para mitigar los daños catastróficos cuando la central nuclear de Chernobyl sufre un accidente nuclear el 26 de abril de 1986."},
        { id: 13, name: "Invencible", portada: "assets/images/inv.jpg", year: 2020, resumen: "Mark Grayson, de 17 años, es como cualquier otro chico de su edad, excepto que su padre es el superhéroe más poderoso del planeta, Omni-Man. Mark descubre que el legado de su padre puede no ser tan heroico como parece."},
        { id: 14, name: "Cobra Kai", portada: "assets/images/cobra.jpg", year: 2020, resumen: "Treinta y cuatro años después de los eventos del torneo de karate All Valley de 1984, Johnny Lawrence busca la redención al abrir un dojo Cobra Kai, reavivando su rivalidad con un exitoso Daniel LaRusso."},
        { id: 15, name: "Game of Thrones", portada: "assets/images/got.jpg", year: 2020, resumen: "El libro mejor vendido de la serie A Song of Ice and Fire escrito por George R.R, es llevado a la pantalla chica cuando HBO decide recrear esta historia épica de fantasía."},
      ],
    };
  },
});
</script>