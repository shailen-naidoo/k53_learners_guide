<template>
  <v-container
    fill-height
    grid-list-lg
  >
    <v-layout
      row
      wrap
      justify-center
      align-center
    >
      <v-flex md4>
        <h1 class="body-2 mb-2">
          <span>Regulatory signs</span>
        </h1>
        <v-divider class="mb-3" />
        <v-layout column>
          <v-flex v-for="({ image, name, description, type }, i) in signs" :key="i">
            <v-card :id="`${type.toLowerCase().replace(' ','-')}-${i}`" class="border-radius">
              <v-card-title class="subheading">
                {{ name }}
                <v-spacer />
                <v-chip label small color="grey lighten-4" class="border-radius">
                  {{ type }}
                </v-chip>
              </v-card-title>
              <v-img :src="image" class="ma-2" contain height="200px" />
              <v-card-text>
                {{ description }}
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  head() {
    const [
      ,,,,
      roadSignTopic,
    ] = this.$route.path.split('/');
    const formatTopicName = roadSignTopic.split('-').map(([a, ...rest]) => `${a.toUpperCase()}${rest.join('')}`).join(' ');

    return {
      title: `🛑 ${formatTopicName} | K53 Learners Guide`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Regulatory signs are signs that control traffic, they are generally red in color and are found at intersections. Think of a stop sign!',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `🛑 ${formatTopicName} | K53 Learners Guide`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: 'Regulatory signs are signs that control traffic, they are generally red in color and are found at intersections. Think of a stop sign!',
        },
      ],
    };
  },
  data() {
    return {
      showFilter: false,
      signFilters: [],
    };
  },
  async asyncData({ params: { index } }) {
    const { default: signs } = await import(`@/static/data/pages/courses/road-signs/topic/${index}.json`);
    return {
      signs,
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
