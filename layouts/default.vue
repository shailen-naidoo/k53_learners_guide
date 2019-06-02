<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
    <v-bottom-nav
      v-model="showBottomNav"
      app
      fixed
      :color="offline ? 'black' : 'yellow'"
      :dark="offline"
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
      <v-snackbar v-model="showOffline" top :multi-line="$vuetify.breakpoint.smAndDown" :timeout="5000">
        You are offline ❌ No stress, you can still use the app
        <v-btn class="ml-1" flat color="yellow" @click="dismiss = true">
          dismiss
        </v-btn>
      </v-snackbar>
      <v-snackbar v-model="backOnline" top :timeout="5000">
        Woohoo! You are back online 🙌
      </v-snackbar>
    </no-ssr>
  </v-app>
</template>

<script>
import staticData from '@/static/data/layouts/default.json';

export default {
  staticData: () => staticData,
  data() {
    return {
      showBottomNav: true,
      currentPage: this.$route.name,
      backOnline: false,
      firstTimeNotification: false,
    };
  },
  computed: {
    offline: {
      get() {
        return this.$store.state.offline;
      },
      set() {},
    },
    dismiss: {
      get() {
        return this.$store.state.dismiss;
      },
      set(value) {
        this.$store.commit('SET_DISMISS', value);
      },
    },
    showOffline: {
      get() {
        return this.offline && !this.dismiss;
      },
      set() {
        this.$store.commit('SET_DISMISS', true);
      },
    },
  },
  watch: {
    offline(n) {
      if (n) {
        return false;
      }

      this.backOnline = true;
      this.$store.commit('SET_DISMISS', false);
    },
  },
};
</script>
