<template>
  <v-container
    fill-height
    grid-list-lg
  >
    <v-layout justify-center align-center text-xs-center>
      <v-flex md6 sm8>
        <v-layout column>
          <v-flex xs12 md12>
            <v-card hover class="border-radius">
              <v-card-text>
                <h1 class="title mt-3">
                  ⛔ Road signs
                </h1>
                <p class="mt-3">
                  Road signs are these weird things you see on the road and they tell you what to do
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md12>
            <v-card color="grey lighten-3" class="border-radius" flat>
              <v-card-text text>
                <h1 class="title mt-3">
                  🤚 Rules of the road
                </h1>
                <p class="mt-3">
                  Rules of the road is the rules that everyone should know when driving on the road
                </p>
                <p class="caption">
                  Coming soon
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
                <p class="caption">
                  Coming soon
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
  }
}
</script>

<style scoped>
.border-radius {
  border-radius: 5px;
}
</style>
