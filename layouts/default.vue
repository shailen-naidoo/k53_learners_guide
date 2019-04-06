<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
    <v-bottom-nav
      v-model="showBottomNav"
      app
      fixed
      color="yellow"
      :active.sync="currentPage"
    >
      <v-btn
        v-for="({ title, icon },i) in pageButtons"
        :key="i"
        :value="title.toLowerCase()"
        :to="{ path: `/${title.toLowerCase()}` }"
      >
        <span>{{ title }}</span>
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import staticData from '@/data/layouts/default.json'

export default {
  staticData: () => staticData,
  data() {
    return {
      showBottomNav: true,
      currentPage: 'dashboard'
    }
  }
}
</script>
