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
      <v-flex md5 text-md-center text-sm-center text-xs-center>
        <v-card flat color="grey lighten-5" class="border-radius">
          <v-card-text class="title">
            Don't worry, something cool will happen here pretty soon 😝
          </v-card-text>
          <v-img src="https://media0.giphy.com/media/l0HlKrB02QY0f1mbm/giphy.gif?cid=790b76115ccaf10250457771671b1a79&rid=giphy.gif" contain class="mt-5" style="border-radius: 10px;" />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  head: {
    title: '📱 Dashboard | K53 Learner\'s Guide',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Don\'t worry, something cool will happen here pretty soon 😝'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Don\'t worry, something cool will happen here pretty soon 😝'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://media0.giphy.com/media/l0HlKrB02QY0f1mbm/giphy.gif?cid=790b76115ccaf10250457771671b1a79&rid=giphy.gif'
      }
    ]
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
