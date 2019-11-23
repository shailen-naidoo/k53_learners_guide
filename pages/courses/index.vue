<template>
  <v-container
    fill-height
    grid-list-lg
  >
    <v-layout justify-center align-center text-xs-left text-md-left>
      <v-flex md4 sm8>
        <v-layout column>
          <v-flex xs12 md12>
            <h1 class="body-2 mb-2">
              Available
            </h1>
            <v-divider class="mb-3" />
            <CourseCard
              title="⛔ Road signs"
              description="Road signs are these weird things you see on the road and they tell you what to do"
              :categories="roadSignCategories"
              :to="{ name: 'courses-road-signs-overview' }"
            />
          </v-flex>
          <v-flex xs12 md12>
            <h1 class="body-2 mb-2">
              Coming soon
            </h1>
            <v-divider class="mb-3" />
            <CourseCard
              title="🤚 Rules of the road"
              description="Rules of the road is the rules that everyone should know when driving on the road"
              coming-soon
            />
          </v-flex>
          <v-flex xs12 md12>
            <CourseCard
              title="🚗 Controls"
              description="Controls are the things you should be familiar with when driving a car"
              coming-soon
            />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue';

export default {
  components: {
    CourseCard,
  },
  head: {
    title: '📄 Courses | K53 Learners Guide',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Check out all the courses that is offered by the K53 PWA 👀',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: '📄 Courses | K53 Learners Guide',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: 'Check out all the courses that is offered by the K53 PWA 👀',
      },
    ],
  },
  async asyncData({ $axios }) {
    const { default: data } = await import('@/static/data/pages/courses/index.json');

    return {
      ...data,
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
