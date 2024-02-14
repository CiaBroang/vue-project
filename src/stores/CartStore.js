import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', { //namnet på min store
  state: () => ({ // State-funktionen returnerar det initiala tillståndet för butiken
    cart: []
  }),
  getters: { //Getters är funktioner. cartItemCount är en getter som beräknar antalet varor i varukorgen.
    cartItemCount: state => (state.cart ? state.cart.length : 0) //om cart arrayen finns returnera antalet, annars returnera 0
  },
  actions: {   // Actions är funktioner som används för att utföra asynkrona operationer eller ändra state

    addToCart(product) {
      this.cart.push(product);
    }
  }
});