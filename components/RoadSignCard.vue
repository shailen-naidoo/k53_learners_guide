<template functional>
  <v-card :id="`${props.type.toLowerCase().replace(' ','-')}-${i}`" class="border-radius">
    <v-card-title class="subheading">
      {{ props.name }}
      <v-spacer />
      <v-chip label small color="grey lighten-4" class="border-radius">
        {{ props.type }}
      </v-chip>
    </v-card-title>
    <v-img :src="props.setImage" class="ma-2" contain height="200px" />
    <v-card-text>
      {{ props.description }}
    </v-card-text>
  </v-card>
</template>

<style scoped>
.border-radius {
  border-radius: 5px;
}

.border-radius-btn {
  border-radius: 2px;
}
</style>
