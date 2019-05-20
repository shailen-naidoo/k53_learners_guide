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
        nuxt
      >
        <span>{{ title }}</span>
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
    <no-ssr>
      <v-snackbar v-model="offline" top :multi-line="$vuetify.breakpoint.smAndDown" :timeout="10000">
        You are currently offline ❌ No stress, you can still use the app ⚡
      </v-snackbar>
    </no-ssr>
  </v-app>
</template>

<script>
import staticData from '@/static/data/layouts/default.json';

import {
  mapState,
} from 'vuex';

export default {
  staticData: () => staticData,
  data() {
    return {
      showBottomNav: true,
      currentPage: this.$route.name,
    };
  },
  computed: {
    ...mapState({
      storeOffline: ({ offline, }) => offline,
    }),
    offline: {
      get() {
        return this.storeOffline;
      },
      set(value) {

      },
    },
  },
};
</script>
