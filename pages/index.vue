<template>
  <v-container fill-height>
    <v-layout justify-center align-center text-xs-center text-sm-center text-md-center>
      <v-flex md5>
        <v-img src="/icon.png" class="mt-5 mb-5" height="200px" contain />
        <h1 class="display-1">
          K53 learners guide
        </h1>
        <p class="px-5 mt-3 body-2 font-weight-light">
          An online K53 learners guide that looks modern and is fully accessible offline
        </p>
        <v-btn
          color="yellow"
          depressed
          round
          :to="{ path: '/courses' }"
          @click="checkFirstTimeUsage"
        >
          Check out app
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'home',
  head() {
    return {
      title: `${this.name} | K53 Learners Guide`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'An online K53 learners guide that looks modern and is fully accessible offline'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: 'An online K53 learners guide that looks modern and is fully accessible offline'
        }
      ]
    }
  },
  asyncData() {
    return {
      name: 'Guide'
    }
  },
  methods: {
    checkFirstTimeUsage() {
      localStorage.setItem('k53-learners-guide-app', JSON.stringify({
        usedApp: true
      }))
    }
  },
  beforeRouteEnter(to, from, next) {
    if (process.browser) {
      const { usedApp } = localStorage.getItem('k53-learners-guide-app') ? JSON.parse(localStorage.getItem('k53-learners-guide-app')) : { usedApp: false }

      if (usedApp) {
        next('/courses')
      } else {
        next()
      }
    } else {
      next()
    }
  }
}
</script>
