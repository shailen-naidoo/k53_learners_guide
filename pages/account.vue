<template>
  <v-container
    fill-height
    grid-list-lg
  >
    <v-layout
      row
      wrap
      justify-center
      align-center
    >
      <v-flex md5 xs10 text-md-center text-sm-center text-xs-center>
        <v-avatar size="80px" class="mb-4">
          <img src="https://image.flaticon.com/icons/svg/1738/1738691.svg">
        </v-avatar>
        <p class="body-2">
          Create an account to get access to some cool features
        </p>
        <v-btn color="grey lighten-3" round @click="showAccounts = true">
          Create account
        </v-btn>
      </v-flex>
    </v-layout>
    <v-dialog v-model="showAccounts" max-width="500px">
      <v-card class="border-radius">
        <v-card-title>Create K53 Guide account</v-card-title>
        <v-divider />
        <v-card-text class="text-md-center pb-4">
          <v-btn fab depressed color="#DB4437" dark @click="signInWithGoogle">
            <v-icon>fab fa-google</v-icon>
          </v-btn>
          <v-btn fab depressed color="#38A1F3" dark>
            <v-icon>fab fa-twitter</v-icon>
          </v-btn>
          <v-btn fab depressed color="#3C5A99" dark>
            <v-icon>fab fa-facebook</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import {
  auth,
  googleProvider,
} from '@/plugins/firebase.js'

export default {
  head: {
    title: '🧑 Account | K53 Learner\'s Guide',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Don\'t worry, something cool will happen here pretty soon 😝',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: '🧑 Account | K53 Learner\'s Guide',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Don\'t worry, something cool will happen here pretty soon 😝',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://media0.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif?cid=790b76115ccaf10250457771671b1a79&rid=giphy.gif',
      },
    ],
  },
  data() {
    return {
      showAccounts: false,
    }
  },
  methods: {
    async signInWithGoogle() {
      await auth.signInWithPopup(googleProvider)
      this.showAccounts = false
    },
  },
}
</script>

<style scoped>
.border-radius {
  border-radius: 5px;
}

.border-radius-btn {
  border-radius: 2px;
}
</style>
