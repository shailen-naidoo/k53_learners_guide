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
      <v-flex md5>
        <h1 class="body-2 mb-2">
          Road signs categories
        </h1>
        <v-divider class="mb-3" />
        <v-layout column>
          <v-flex v-for="({ name, icon, desc, color, path }, i) in roadSignCategories" :key="i">
            <p v-if="!(i > 0)" class="body-1">
              Available
            </p>
            <p v-if="i == 1" class="body-1">
              Coming soon
            </p>
            <v-card class="border-radius" :flat="i > 0" :color="i > 0 ? 'grey lighten-3' : ''">
              <v-card-title class="title font-weight-light">
                <v-icon class="mr-2" :color="color">
                  {{ icon }}
                </v-icon>
                <span>{{ name }}</span>
                <v-spacer />
              </v-card-title>
              <v-divider />
              <v-card-text>
                {{ desc }}
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn v-if="!(i > 0)" flat small :to="{ path }" nuxt>
                  view
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  head: {
    title: '📃 Road Sign Categories | K53 Learners Guide',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Road signs are divided into many topics, such as, regulatory signs, traffic signals and so forth. This is a complete overview of these topics',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: '📃 Road Sign Categories | K53 Learners Guide',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: 'Road signs are divided into many topics, such as, regulatory signs, traffic signals and so forth. This is a complete overview of these topics',
      },
    ],
  },
  async asyncData({ $axios, }) {
    const { default: data, } = await import('@/static/data/pages/courses/road-signs/overview/index.json');

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
