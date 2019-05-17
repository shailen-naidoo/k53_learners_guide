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
      <v-flex md5 xs10 text-md-center text-sm-center text-xs-center>
        <v-avatar size="80px" class="mb-3">
          <img src="https://image.flaticon.com/icons/svg/1738/1738691.svg" alt="">
        </v-avatar>
        <p>Create an account to get access to some cool features</p>
        <v-btn color="grey lighten-3" round small>
          Create account
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import {
//   auth,
// } from '@/plugins/firebase'

export default {
  head: {
    title: '🧑 Account | K53 Learner\'s Guide',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Don\'t worry, something cool will happen here pretty soon 😝',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: '🧑 Account | K53 Learner\'s Guide',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Don\'t worry, something cool will happen here pretty soon 😝',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://media0.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif?cid=790b76115ccaf10250457771671b1a79&rid=giphy.gif',
      },
    ],
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
