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
          <v-flex v-for="(roadSign, i) in signs" :key="i" v-observe-visibility="{ callback: (...args) => visibility(...args, roadSign), once: true }">
            <RoadSignCard v-bind="roadSign" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RoadSignCard from '@/components/RoadSignCard.vue';

export default {
  components: {
    RoadSignCard,
  },
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
  async asyncData({ params: { index } }) {
    const { default: signs } = await import(`@/static/data/pages/courses/road-signs/topic/${index}.json`);
    return {
      signs: signs.map(sign => ({ ...sign, setImage: '' })),
    };
  },
  methods: {
    visibility(isVisible, entry, roadSign) {
      if (isVisible) {
        roadSign.setImage = roadSign.image;
      }
    },
  },
};
</script>
