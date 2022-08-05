<template>
  <ion-content>
    <ion-title>Peliculas Christian Rgz</ion-title>
    <ion-accordion-group
      v-for="pelicula in peliculas"
      :key="pelicula.id"
      ref="accordionGroup"
    >
      <ion-accordion value="first">
        <ion-item slot="header" color="light">
          <ion-label>{{ pelicula.name }}</ion-label>
        </ion-item>

        <div class="ion-padding" slot="content">
          <ion-grid>
            <ion-row>
              
              <ion-col><ion-img :src="pelicula.portada" style="width: 100%;"></ion-img>
              </ion-col>
              
              <ion-col>
          <h4 >{{pelicula.name}}  -   {{pelicula.year}}</h4>                
          <h1>Descripcion</h1>
          {{pelicula.sinopsis}}
                </ion-col>
            </ion-row>
          </ion-grid>

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
  IonImg,
} from "@ionic/vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "CardPage",
  components: {
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
    IonImg,
  },
  data() {
    return {
      peliculas: [
        {
          id: 1,
          name: "Las Locuras Del Emperador",
          portada: "assets/peliculas/cusco.jpg",
          year: 2020,
          sinopsis:
            "Basada en la historia de Arsène Lupin, el ladrón Assane Diop se propone vengar a su padre de las injusticias sufridas por parte de una familia adinerada.",
        },
        {
          id: 2,
          name: "Sin Lugar Para Los Debiles",
          portada: "assets/peliculas/debiles.jpg",
          year: 2020,
          sinopsis:
            "El profesor calmado de química de una secundaria, Walter White cree que su vida no puede ser peor.",
        },
        {
          id: 3,
          name: "Las Locuras De Kronk",
          portada: "assets/peliculas/kronk.jpg",
          year: 2020,
          sinopsis:
            "La vida del peculiar abogado Saul Goodman mientras defiende a narcotraficantes en particular, y a toda suerte de criminales en general.",
        },
        {
          id: 4,
          name: "Cars",
          portada: "assets/peliculas/cars.jpg",
          year: 2020,
          sinopsis:
            "Con las dispares ciudades de Piltover y Zaun como telón de fondo, dos hermanas luchan en bandos opuestos de una guerra entre tecnologías mágicas y creencias enfrentadas.",
        },
        {
          id: 5,
          name: "Doctor Strange",
          portada: "assets/peliculas/strange.jpg",
          year: 2020,
          sinopsis:
            "Cuando los superhéroes abusan de sus superpoderes en lugar de usarlos para el bien, The Boys se embarcan en una búsqueda heroica para exponer secretos.",
        },
        {
          id: 6,
          name: "Perros De Guerra",
          portada: "assets/peliculas/perros.jpg",
          year: 2020,
          sinopsis:
            "Cuando un niño desaparece, sus amigos, la familia y la policía se ven envueltos en una serie de eventos misteriosos al tratar de encontrarlo.",
        },
        {
          id: 7,
          name: "La Red Social",
          portada: "assets/peliculas/face.jpg",
          year: 2020,
          sinopsis:
            "Después de haber estado desaparecido durante casi 20 años, Rick Sánchez llega de imprevisto a la puerta de la casa de su hija Beth y se va a vivir con ella y su familia utilizando el garaje como su laboratorio personal.",
        },
        {
          id: 8,
          name: "Harry Potter Y La Piedra Filosofal",
          portada: "assets/peliculas/harry.jpg",
          year: 2001,
          sinopsis:
            "El día en que cumple once años, Harry Potter se entera de que es hijo de dos destacados hechiceros, de los que ha heredado poderes mágicos. En la escuela Hogwarts de Magia y Hechicería, donde se educa con otros niños que también tienen poderes especiales, aprenderá todo lo necesario para ser mago.",
        },
        {
          id: 9,
          name: "Harry Potter Y La Cámara Secreta",
          portada: "assets/images/peliculas/harry2.jpg",
          year: 2002,
          sinopsis:
            "Terminado el verano, Harry (Radcliffe) no ve la hora de abandonar la casa de sus odiosos tíos, pero, inesperadamente se presenta en su dormitorio Dobby, un elfo doméstico, que le anuncia que correrá un gran peligro si vuelve a Hogwarts. A pesar de los esfuerzos del elfo por retenerlo, Harry es rescatado por Ron y sus hermanos, con la ayuda de un coche volador, y recibido con los brazos abiertos en el cálido hogar de los Weasley.",
        },
        {
          id: 10,
          name: "Harry Potter Y El Prisionero De Azkaban",
          portada: "assets/peliculas/harry3.jpg",
          year: 2004,
          sinopsis:
            "Cuando Harry Potter y sus amigos vuelven a Hogwarts para cursar su tercer año de estudios, se ven involucrados en un misterio: de la prisión para magos de Azkaban se ha fugado Sirius Black, un peligroso mago que fue cómplice de Lord Voldemort y que intentará vengarse de Harry Potter. El joven aprendiz de mago contribuyó en gran medida a la condena de Sirius, por lo que hay razones para temer por su vida.",
        },
        {
          id: 11,
          name: "Harry Potter Y El Cáliz De Fuego",
          portada: "assets/images/peliculas/harry4.jpg",
          year: 2005,
          sinopsis:
            "El brujo Geralt, un cazador de monstruos, trata de encontrar su lugar en un mundo en el que las personas suelen ser más malvadas que las bestias.",
        },
        {
          id: 12,
          name: "Harry Potter Y La Orden del Fénix",
          portada: "assets/images/peliculas/harry5.jpg",
          year: 2007,
          sinopsis:
            "Las tediosas vacaciones en casa de sus tíos todavía no han acabado y Harry se encuentra más inquieto que nunca. Apenas ha tenido noticias de Ron y Hermione y presiente que algo extraño está sucediendo en Hogwarts. En efecto, cuando por fin empieza el curso, sus temores se hacen realidad. El Ministerio de Magia niega que Voldemort haya regresado e inicia una campaña de desprestigio contra Harry y Dumbledore, encomendando a la horrible profesora Dolores Umbridge la tarea de vigilar todos sus movimientos. Así, pues, además de sentirse solo e incomprendido, Harry sospecha que Voldemort puede adivinar sus pensamientos e intuye que el temible mago trata de apoderarse de un objeto secreto que le permitiría recuperar su destructivo poder.",
        },
        {
          id: 13,
          name: "Harry Potter Y El Misterio Del Príncipe",
          portada: "assets/peliculas/harry6.jpg",
          year: 2009,
          sinopsis:
            "Con dieciséis años cumplidos, Harry inicia el sexto curso en Hogwarts en medio de terribles acontecimientos que asolan Inglaterra. Elegido capitán del equipo de Quidditch, los entrenamientos, los exámenes y las chicas ocupan todo su tiempo, pero la tranquilidad dura poco. A pesar de los férreos controles de seguridad que protegen la escuela, dos alumnos son brutalmente atacados. Dumbledore sabe que se acerca el momento, anunciado por la Profecía, en que Harry y Voldemort se enfrentarán a muerte.",
        },
        {
          id: 14,
          name: "Harry Potter Y Las Reliquias De La Muerte Pt. 1",
          portada: "assets/peliculas/harry7.jpg",
          year: 2010,
          sinopsis:
            "Primera parte de la adaptación al cine del último libro de la saga Harry Potter. Es una continuación de la historia recogida en El misterio del príncipe. Una misión casi imposible cae sobre los hombros de Harry: deberá encontrar y destruir a los últimos horrocruxes para poner fin al reinado de Lord Voldemort. En el episodio final de la saga, el joven hechicero de 17 años emprende con sus amigos Hermione Granger y Ron Weasley un peligroso viaje por Inglaterra para encontrar los objetos que contienen los fragmentos del alma del Señor Tenebroso, que son los que garantizan su longevidad. Pero la tarea no será fácil, pues el poder del lado oscuro crece cada vez más, y las más firmes lealtades serán puestas a prueba. Harry deberá usar todos los conocimientos que ha adquirido gracias a Dumbledore para enfrentarse a su enemigo y encontrar la forma de sobrevivir a esta última aventura.",
        },
        {
          id: 15,
          name: "Harry Potter Y Las Reliquias De La Muerte Pt. 2",
          portada: "assets/images/peliculas/harry8.png",
          year: 2011,
          sinopsis:
            "El final ha llegado. Harry, Hermione y Ron tendrán que recuperar la espada de Gryffindor para encontrar y destruir los últimos horrocruxes. Mientras tanto, Lord Voldemort está a punto de apoderarse por completo de Hogwarts y de conseguir su objetivo: matar a Harry Potter. La única esperanza de Harry es encontrar los horrocruxes antes de que Voldemort lo encuentre a él. Buscando pistas, descubre una antigua y olvidada historia: la leyenda de las reliquias de la muerte, que podría dar al malvado Lord el poder definitivo. Pero el futuro de Harry está escrito desde que nació e incluye una misión para la que se ha estado preparando desde que llegó a Hogwarts: la batalla final contra Voldemort.",
        },
      ],
    };
  },
});
</script>