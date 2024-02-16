<script>
import { useCartStore } from '@/stores/CartStore';
import { computed } from 'vue';
import imageCardHorizontal from '@/components/imageCardHorizontal.vue';

export default {
  setup() {
    const cartStore = useCartStore();
    const cartProducts = computed(() => cartStore.cartProducts);

    console.log(cartProducts.value);


    return {
      cartProducts
    };
  },
  components: {
    imageCardHorizontal
  },
};
</script>

<template>
  <h1>Cart</h1>

  <v-stepper :items="['Granska', 'Leverans', 'Betalning']">
    <template v-slot:item.1>
      <v-card title="Step 1" flat>
        <template v-if="cartProducts.length > 0">
          <div v-for="product in cartProducts" :key="product.id">
            <imageCardHorizontal :product="product" />
          </div>
        </template>
        <template v-else>
          <p>Din varukorg är tom!</p>
        </template>
        <v-card-subtitle>
          Antal varor i varukorgen ({{ cartProducts.length }})
        </v-card-subtitle>
      </v-card>
    </template>

    <template v-slot:item.2>
      <v-card title="Step 2" flat>...</v-card>
    </template>

    <template v-slot:item.3>
      <v-card title="Step 3" flat>...</v-card>
    </template>
  </v-stepper>
</template>
