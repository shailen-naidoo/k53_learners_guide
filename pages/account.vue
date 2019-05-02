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
      <v-flex md5 text-md-center>
        <v-card flat color="grey lighten-5" class="border-radius">
          <v-card-text class="title">
            Don't worry, something cool will happen here pretty soon 😝
          </v-card-text>
          <v-img src="https://media0.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif?cid=790b76115ccaf10250457771671b1a79&rid=giphy.gif" class="mt-5" style="border-radius: 10px;" />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  head: {
    title: '🧑 Account | K53 Learner\'s Guide'
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
