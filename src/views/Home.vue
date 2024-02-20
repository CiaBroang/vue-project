<script>
import axios from 'axios';
import { useCartStore } from '@/stores/CartStore';

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
    },
    addToCart(product) {
      useCartStore().addToCart(product);
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>


<template>
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="auto">
        <v-card height="300" width="200">
          <v-img :src="product.image" height="100"></v-img>
          <container style="padding: 20px; display: flex; flex-direction: column;">
            <v-card-title style="font-size: 18px;">{{ product.title }}</v-card-title>
            <v-card-subtitle v-if="product.rating.rate >= 4">Populär produkt!</v-card-subtitle>
            <!-- "non-breaking space" -->
            <v-card-subtitle v-else style="line-height: 1.2em;">&nbsp;</v-card-subtitle>
            <div style="margin-top: auto;">
              <v-card-subtitle style="font-weight: bold; color: #212121;">{{ product.price }} EUR</v-card-subtitle>
              <v-btn @click="addToCart(product)" size="small" color="indigo-darken-3" style="margin: 1.2em;">KÖP</v-btn>
            </div>
          </container>
        </v-card>
      </v-col>
      <v-col v-for="product in products" :key="product.id" cols="auto">

      </v-col>
    </v-row>
  </v-container>
  <v-pagination :length="3"></v-pagination>
</template>