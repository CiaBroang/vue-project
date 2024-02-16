<script>
export default {
  props: ['product'],
  name: 'imageCardHorizontal',
}
</script>

<template>
  <v-card
    class="mx-auto"
    width="400"
  >
    <v-row no-gutters>
      <v-col cols="4">
        <img :src="product.image" alt="Image" style="width: 100%; padding: 1em;">
      </v-col>
      <v-col cols="8">
        <v-card-text>
          {{ product.title }}
        </v-card-text>
        <v-card-text>
          {{ product.price }}
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>
