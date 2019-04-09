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
          <v-icon color="red" small>
            info
          </v-icon>
          <span>Regulatory signs</span>
        </h1>
        <v-divider class="mb-3" />
        <v-layout column>
          <v-flex>
            <v-card class="border-radius">
              <v-card-title class="title">
                Stop sign
              </v-card-title>
              <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Vienna_Convention_road_sign_B2a.svg/180px-Vienna_Convention_road_sign_B2a.svg.png" class="ma-2" contain height="200px" />
              <v-card-text>
                This sign is usually found at an intersection, it means you should stop
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card class="border-radius">
              <v-card-title class="title">
                Yield sign
              </v-card-title>
              <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ireland_road_sign_RUS_026_%28English%29.svg/180px-Ireland_road_sign_RUS_026_%28English%29.svg.png" class="ma-2" contain height="200px" />
              <v-card-text>
                This sign is usually found at an intersection, it means you should stop
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
    const [,,,, roadSignTopic] = this.$route.path.split('/')
    const formatTopicName = roadSignTopic.split('-').map(([a, ...rest]) => `${a.toUpperCase()}${rest.join('')}`).join(' ')

    return {
      title: `🛑 ${formatTopicName} | K53 Learners Guide`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Regulatory signs are signs that control traffic, they are generally red in color and are found at intersections. Think of a stop sign!'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: 'Regulatory signs are signs that control traffic, they are generally red in color and are found at intersections. Think of a stop sign!'
        }
      ]
    }
  }
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
