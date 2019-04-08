<template>
  <v-container
    fill-height
    grid-list-lg
  >
    <v-layout justify-center align-center text-xs-center text-md-left>
      <v-flex md6 sm8>
        <v-layout column>
          <v-flex xs12 md12>
            <h1 class="body-2 mb-2">
              Available
            </h1>
            <v-divider class="mb-3" />
            <v-card hover class="border-radius" @click="show = !show">
              <v-card-text>
                <h1 class="title mt-3">
                  ⛔ Road signs
                </h1>
                <p class="mt-3">
                  Road signs are these weird things you see on the road and they tell you what to do
                </p>
              </v-card-text>
              <v-divider />
              <v-slide-y-transition>
                <v-card-text v-show="show">
                  <p class="caption ml-1">Topics covered</p>
                  <v-chip small>Regulatory signs</v-chip>
                  <v-chip small>Warning signs</v-chip>
                  <v-chip small>Traffic signals</v-chip>
                  <v-chip small>Temporary signs</v-chip>
                  <v-chip small>Road markings</v-chip>
                  <v-chip small>Guidance signs</v-chip>
                  <v-chip small>Information signs</v-chip>
                </v-card-text>
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
                  Rules of the road is the rules that everyone should know when driving on the road
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
export default {
  head: {
    title: '📄 Courses | K53 Learners Guide'
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
.border-radius {
  border-radius: 5px;
}
</style>
