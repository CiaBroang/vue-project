<script>
import { useUserStore } from '@/stores/CartStore';

export default {
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    email: '',
    nameRules: [
      value => {
        if (value) return true

        return 'Ditt namn saknas'
      },
      value => {
        if (value?.length <= 10) return true

        return 'Ditt namn behöver vara kortare än 10 bokstäver'
      },
    ],
    emailRules: [
      value => {
        if (value) return true

        return 'Din email saknas'
      },
      value => {
        if (/.+@.+\..+/.test(value)) return true

        return 'Din email är inte giltlig'
      },
    ],
  }),
  watch: {
    firstname(newName) { useUserStore().updateUserFirstName(newName) },
    lastname(newName) { useUserStore().updateUserLastName(newName) },
    email(newEmail) { useUserStore().updateUserEmail(newEmail) }
  }
}
</script>

<template>
  <v-container>

    <v-col>
      <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="Förnamn" required
        hide-details></v-text-field>
    </v-col>
    <v-col>
      <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Efternamn" hide-details
        required></v-text-field>
    </v-col>
    <v-col>
      <v-text-field v-model="email" :rules="emailRules" label="Email" hide-details required></v-text-field>
    </v-col>
  </v-container>
</template>