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
            <v-card class="border-radius">
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
                <v-btn flat small :to="{ path }">
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
import staticData from '@/data/pages/courses/road-signs/overview/index.json'

export default {
  head: {
    title: '📃 Road Sign Categories | K53 Learners Guide'
  },
  staticData: () => staticData
}
</script>

<style scoped>
.border-radius {
  border-radius: 5px;
}

.border-radius-btn {
  border-radius: 2px;
}
</style>
