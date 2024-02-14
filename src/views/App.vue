<script>
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from '@/stores/CartStore';
import { computed } from 'vue'; // Importera 'computed' från Vue för att skapa beräknade egenskaper

export default {
  setup() {
    const cartStore = useCartStore(); //använder 'useCartStore' så jag får tillgång till min Pinia
    const cartItemCount = computed(() => cartStore.cartItemCount); //här skapas en beräknad egenskap som hämtar antalet varor i varukorgen från Pinia


    return { //returnerar cartItemCount så den kan användas
      cartItemCount
    };
  }
};
</script>

<template>
  <v-app id="app">
    <v-app-bar extended>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Shop</v-app-bar-title>

      <v-spacer></v-spacer>
      <div class="text-center">
    <v-btn :to="{name: 'cart'}">
      Varukorg ({{ cartItemCount }})
    </v-btn>
    </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<!-- TO DO -->

<!-- Favoritmarkera eller rullgardinsmeny för att välja antal. v-model (och värdet som matas in) används -->

<!-- Minst en icke-Vue-Router-.vue-komponent ska skapas (App.vue räknas inte). Skapa en Vue-komponent som inte är relaterad till routning, det vill säga en komponent som inte används för att rendera olika vyer beroende på URL:en -->

<!-- Minst en komponent ska ta emot, och använda, minst en prop (via props-nyckeln). Detta kan till exempel användas för att skicka data från en överordnad komponent (till exempel App.vue) till en underordnad komponent (en annan .vue-fil). Datan kan vara vad som helst: en sträng, en siffra, ett objekt etc. -->

<!-- Kolla på Vue's provide/inject-funktioner. Istället för att upprepa samma kod på varje sida för att få Pinia och cartItemCount värdet-->




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