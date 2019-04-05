<template>
  <v-app>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
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
      >
        <span>{{ title }}</span>
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      showBottomNav: true,
      currentPage: 'dashboard',
      pageButtons: Object.freeze([
        {
          title: 'Dashboard',
          icon: 'dashboard'
        },
        {
          title: 'Courses',
          icon: 'library_books'
        },
        {
          title: 'Exams',
          icon: 'assessment'
        },
        {
          title: 'Account',
          icon: 'account_circle'
        }
      ])
    }
  }
}
</script>
