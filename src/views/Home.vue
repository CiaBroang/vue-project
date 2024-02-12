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
</template>