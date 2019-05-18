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
      <v-flex
        v-if="!user"
        md5
        xs10
        text-md-center
        text-sm-center
        text-xs-center
      >
        <v-avatar size="80px" class="mb-4">
          <img src="https://image.flaticon.com/icons/svg/1738/1738691.svg">
        </v-avatar>
        <p class="body-2">
          Create an account to get access to some cool features
        </p>
        <v-btn color="grey lighten-3" round @click="showAccounts = true">
          Login / Signup
        </v-btn>
        <div class="text-md-center text-sm-center text-xs-center mt-5">
          <p class="caption">
            Interested in the people who made this project possible?
            <nuxt-link :to="{ name: 'courses' }">
              Find out more
            </nuxt-link> ❤
          </p>
        </div>
      </v-flex>
      <v-flex v-else md5 sm6>
        <no-ssr>
          <v-card class="border-radius">
            <v-card-title>
              <v-spacer />
              <v-btn
                small
                depressed
                outline
                round
                color="black"
                @click="signOut"
              >
                Sign out
              </v-btn>
            </v-card-title>
            <v-card-text>
              <div class="text-md-center text-sm-center text-xs-center">
                <v-avatar size="120px" class="mb-3 mt-3">
                  <img :src="user.photoURL" alt="">
                </v-avatar>
                <p class="subheading">
                  {{ user.displayName }}
                </p>
              </div>
              <div :class="{ 'pl-3': $vuetify.breakpoint.mdAndUp }">
                <v-subheader class="pl-0">
                  Settings
                </v-subheader>
                <v-checkbox label="Receive email updates about the K53 Guide project" class="pt-0 mt-0" />
              </div>
            </v-card-text>
          </v-card>
          <div class="text-md-center text-sm-center text-xs-center mt-5">
            <p class="caption">
              Want to help make this project even better?
              <nuxt-link :to="{ name: 'courses' }">
                Find out more
              </nuxt-link> ❤
            </p>
          </div>
        </no-ssr>
      </v-flex>
    </v-layout>
    <v-dialog v-model="showAccounts" max-width="500px">
      <v-card class="border-radius">
        <v-card-title>Create / Login K53 Guide account</v-card-title>
        <v-divider />
        <v-card-text class="text-md-center text-sm-center text-xs-center pb-4">
          <v-btn fab depressed color="#DB4437" dark @click="signInWithGoogle">
            <v-icon>fab fa-google</v-icon>
          </v-btn>
          <v-btn fab depressed color="#38A1F3" dark @click="signInWithTwitter">
            <v-icon>fab fa-twitter</v-icon>
          </v-btn>
          <v-btn fab depressed color="#3C5A99" dark @click="signInWithFacebook">
            <v-icon>fab fa-facebook</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
    <no-ssr>
      <v-snackbar v-model="showError" top right :timeout="10000" :multi-line="$vuetify.breakpoint.smAndDown">
        <span class="caption">Ooops! Email already exists, maybe you used one of the other sign-in options 😊</span>
      </v-snackbar>
    </no-ssr>
  </v-container>
</template>

<script>
import {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
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
      showError: false,
      user: null,
    }
  },
  mounted() {
    auth.onAuthStateChanged((user) => {
      this.user = user
    })
  },
  methods: {
    async signInWithGoogle() {
      try {
        await auth.signInWithPopup(googleProvider)
        this.showAccounts = false
      } catch (e) {
        this.showError = true
      }
    },
    async signInWithTwitter() {
      try {
        await auth.signInWithPopup(twitterProvider)
        this.showAccounts = false
      } catch (e) {
        this.showError = true
      }
    },
    async signInWithFacebook() {
      try {
        await auth.signInWithPopup(facebookProvider)
        this.showAccounts = false
      } catch (e) {
        this.showError = true
      }
    },
    signOut() {
      auth.signOut()
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
