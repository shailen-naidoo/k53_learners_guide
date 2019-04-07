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
        <v-btn color="yellow" :to="{ path: '/courses' }" round depressed>
          Check out app
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'home',
  head: {
    title: 'K53 Learners Guide',
    meta: [
      {
        name: 'description',
        content: 'An online K53 learners guide that looks modern and is fully accessible offline'
      }
    ]
  }
}
</script>
