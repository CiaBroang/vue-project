<script>
  import { useCartStore } from '@/stores/CartStore';
  import { computed } from 'vue';

  export default {
  setup() {
    const cartStore = useCartStore();
    const cartItemCount = computed(() => cartStore.cartItemCount);


    return {
      cartItemCount
    };
  }
};

</script>

<template>
    <h1> Varukorg </h1>

    <v-stepper :items="['Granska', 'Leverans', 'Betalning']">
  <template v-slot:item.1>
    <v-card title="Step One" flat>...
      <v-card-subtitle>
        Antal varor i varukorgen ({{ cartItemCount }})
      </v-card-subtitle>
    </v-card>
  </template>

  <template v-slot:item.2>
    <v-card title="Step Two" flat>...</v-card>
  </template>

  <template v-slot:item.3>
    <v-card title="Step Three" flat>...</v-card>
  </template>
</v-stepper>
    

    
</template>

