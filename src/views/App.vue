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

      <v-app-bar-title @click="$router.push('/home')">
        The shop
      </v-app-bar-title>

      <v-spacer></v-spacer>
      <div class="text-center">
        <v-btn :to="{ name: 'cart' }">
          Varukorg ({{ cartItemCount }})
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<!-- TO DO

Favoritmarkera eller rullgardinsmeny för att välja antal. v-model (och värdet som matas in) används

Kolla på Vue's provide/inject-funktioner. Istället för att upprepa samma kod på varje sida för att få Pinia och cartItemCount värdet

Attributinterpolering (v-bind eller dess kortform) används (key-props (relaterade till v-for) räknas inte)
v-model (och värdet som matas in) används
Minst en komponent ska ta emot, och använda, minst en prop (via props-nyckeln)
Minst en beräknad egenskap (computed) används
Minst en bevakare (watch) används
Alla props ska vara typsäkra
Minst ett custom event används (skickas och tas emot)
Använd Pinia så att flera komponenter kan hämta information därifrån
Använd minst ett Vue Router-adressparametervärde -->