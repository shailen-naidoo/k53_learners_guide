<template>
  <v-app>
    <v-toolbar
      dense
      flat
      color="grey lighten-5"
      fixed
      app
    >
      <v-btn icon @click="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>
    </v-toolbar>
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
      <v-snackbar :value="offline && !dismiss" top :multi-line="$vuetify.breakpoint.smAndDown" :timeout="5000">
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
    };
  },
  computed: {
    offline: {
      get() {
        return this.$store.state.offline;
      },
      set() {
        this.$store.commit('SET_DISMISS', true);
      },
    },
    dismiss: {
      get() {
        return this.$store.state.dismiss;
      },
      set(value) {
        this.$store.commit('SET_DISMISS', value);
      },
    },
  },
  watch: {
    offline(n) {
      if (n) {
        return false;
      }

      this.backOnline = true;
    },
  },
};
</script>
