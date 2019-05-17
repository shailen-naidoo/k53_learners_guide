<template>
  <v-container
    fill-height
    grid-list-lg
  >
    <v-layout justify-center align-center text-xs-left text-md-left>
      <v-flex md5 sm8>
        <v-layout column>
          <v-flex xs12 md12>
            <h1 class="body-2 mb-2">
              Available
            </h1>
            <v-divider class="mb-3" />
            <v-card class="border-radius">
              <v-card-text @click="show = !show">
                <h1 class="title mt-3">
                  ⛔ Road signs
                </h1>
                <p class="mt-3">
                  Road signs are these weird things you see on the road and they tell you what to do
                </p>
              </v-card-text>
              <v-divider />
              <v-slide-y-transition hide-on-leave>
                <div v-show="show">
                  <v-card-text>
                    <v-subheader>Categories</v-subheader>
                    <v-list>
                      <v-list-tile v-for="({ name, icon, color }, i) in roadSignCategories" :key="i">
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
                    <v-btn flat small :to="{ name: 'courses-road-signs-overview' }" class="border-radius-btn">
                      View Course
                    </v-btn>
                  </v-card-actions>
                </div>
              </v-slide-y-transition>
            </v-card>
          </v-flex>
          <v-flex xs12 md12>
            <h1 class="body-2 mb-2">
              Coming soon
            </h1>
            <v-divider class="mb-3" />
            <v-card color="grey lighten-3" class="border-radius" flat>
              <v-card-text text>
                <h1 class="title mt-3">
                  🤚 Rules of the road
                </h1>
                <p class="mt-3">
                  Rules of the road is the rules that everyone should know when driving on the road
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md12>
            <v-card color="grey lighten-3" class="border-radius" flat>
              <v-card-text>
                <h1 class="title mt-3">
                  🚗 Controls
                </h1>
                <p class="mt-3">
                  Controls are the things you should be familiar with when driving a car
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import staticData from '@/data/pages/courses/index.json'

export default {
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
  staticData: () => staticData,
  data() {
    return {
      show: false,
    }
  },
  async asyncData({ $axios, }) {
    const { data, } = await $axios.get('/data/pages/courses/index.json')

    return {
      ...data,
    }
  },
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
