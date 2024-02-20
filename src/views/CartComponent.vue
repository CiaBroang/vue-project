<script>
import { useCartStore, useUserStore } from '@/stores/CartStore';
import { computed } from 'vue';
import imageCardHorizontal from '@/components/ImageCardHorizontal.vue';
import InputComponent from '@/components/InputComponent.vue';

export default {
  setup() {
    const cartStore = useCartStore();
    const cartProducts = computed(() => cartStore.cartProducts);
    const userStore = useUserStore();
    const firstname = computed(() => userStore.firstname)
    const email = computed(() => userStore.email)
    const lastname = computed(() => userStore.lastname)
    return {
      cartProducts,
      firstname,
      lastname,
      email,
    };
  },
  components: {
    imageCardHorizontal,
    InputComponent
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
        <InputComponent />
      </v-card>
    </template>

    <template v-slot:item.3>
      <v-card title="Välj betalningssätt" flat>
        <p>Namn: {{ firstname }} {{ lastname }}</p>
        <p>Email: {{ email }}</p>
        Dina betalningsalternativ:
        .....
      </v-card>
    </template>
  </v-stepper>
</template>
