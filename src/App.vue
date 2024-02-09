<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
import axios from 'axios';

export default {
  data() {
    return {
    products: []
  };
},
methods: {
  fetchData() {
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
      this.products = response.data;
    })
    .catch(error => {
      console.log('error fetching data:', error);
    });
  }
},
mounted() {
  this.fetchData();
  }
};
</script>


<template>
  <v-app id="app">
    <v-app-bar extended>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Shop</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon="mdi-dots-vertical">
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="product in products"
            :key="product.id"
            cols="4"
          >
            <v-card height="200">
              <v-img :src="product.image" height="100"></v-img>
              <v-card-title>{{ product.title }}</v-card-title>
              <p v-if="product.rating.rate >= 4">Populär produkt!</p>
              <v-card-subtitle>{{ product.price }} kr</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<!-- Skapa en dynamisk Vite-webbapplikation. 

För G så ska följande krav uppfyllas:

Webbanrop görs information från en eller flera webbtjänster visas i webbapplikationen (Undvik CORS-problem och använd helst HTTPS, för applikationen ska fungera bra som publicerad; Visa åtminstone 3 värden (Obs:sidan måste ju vara innehållsrik och fylla ett syfte); Använd inte Cities-tjänsten eller någon annan webbtjänst som har tagits upp som ett exempel)
Textinterpolering ({{ och }}) används
Attributinterpolering (v-bind eller dess kortform) används (key-props (relaterade till v-for) räknas inte)
Villkorlig rendering (v-if) används
Listrendering (v-for) används
Händelser (v-on eller dess kortform) används
v-model (och värdet som matas in) används
En Single Page Application, bestående av minst två webbsidor, ska skapas med Vue Router (Använd både router-link och router-view)
Minst en icke-Vue-Router-.vue-komponent ska skapas (App.vue räknas inte)
Minst en komponent ska ta emot, och använda, minst en prop (via props-nyckeln)
Källkoden för projektet publiceras på GitHub (eller liknande)
För VG ska kraven för G vara uppfyllda. Dessutom ska följande krav uppfyllas:

Använd någonting annat än fetch (till exempel Axios) för att göra webbanropen
Minst en beräknad egenskap (computed) används
Minst en bevakare (watch) används
Alla props ska vara typsäkra
Minst ett custom event används (skickas och tas emot)
Använd Pinia så att flera komponenter kan hämta information därifrån
Använd minst ett Vue Router-adressparametervärde
Bootstrap, Veutify eller valfritt grafiskt ska användas
Det finns en ESLint-konfiguration för projektet, som alla filer följer
Det finns en Prettier-konfiguration för projektet, som alla filer följer -->