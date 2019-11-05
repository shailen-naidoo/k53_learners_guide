<template>
  <v-card class="border-radius" :class="{ 'grey lighten-3': comingSoon }" :flat="comingSoon">
    <v-card-text @click="show = !show">
      <h1 class="title mt-3">
        {{ title }}
      </h1>
      <p class="mt-3">
        {{ description }}
      </p>
    </v-card-text>
    <template v-if="show && categories.length">
      <v-divider />
      <v-card-text>
        <v-subheader>Categories</v-subheader>
        <v-list>
          <v-list-tile v-for="({ name, icon, color }, i) in categories" :key="i">
            <v-list-tile-content>
              {{ name }}
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon :color="color">
                {{ icon }}
              </v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn flat small :to="to" nuxt class="border-radius-btn">
          View Course
        </v-btn>
      </v-card-actions>
    </template>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      default: () => [],
    },
    to: {
      type: [String, Object],
      default: () => ({}),
    },
    comingSoon: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.border-radius {
  border-radius: 5px;
}

.border-radius-btn {
  border-radius: 2px;
}
</style>
