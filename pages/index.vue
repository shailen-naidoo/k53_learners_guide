<template>
  <v-container fill-height>
    <v-layout justify-center align-center text-xs-center text-sm-center text-md-center>
      <v-flex md6>
        <h1 class="display-1">
          K53 learners guide
        </h1>
        <v-img src="/icon.png" class="mt-5 mb-5" height="200px" contain />
        <v-btn color="yellow" :to="{ path: '/courses' }" round depressed>
          Check out app
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'home'
}
</script>
