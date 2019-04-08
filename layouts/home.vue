<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  beforeRouteEnter() {
    // eslint-disable-next-line no-console
    console.log('hello')
  }
}
</script>
