<script>
import { useCartStore } from '@/stores/CartStore';
import { computed } from 'vue';
import imageCardHorizontal from '@/components/ImageCardHorizontal.vue';
import TextInputComponent from '@/components/InputComponent.vue';

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
    imageCardHorizontal,
    TextInputComponent
  },
  data: () => ({
    valid: false
  })
};
</script>

<template>
  <h1>Kassa</h1>

  <v-stepper :items="['Granska', 'Leverans', 'Betalning']">
    <template v-slot:item.1>
      <v-card title="Din order" flat>
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
      <v-card title="Ange leveransadress" flat>
        <TextInputComponent />
        <p> Namn: {{ firstname }} </p>
      </v-card>
    </template>

    <template v-slot:item.3>
      <v-card title="Välj betalningssätt" flat>
        Dina betalningsalternativ:
      </v-card>
    </template>
  </v-stepper>
</template>
