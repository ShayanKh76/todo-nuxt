<template class="">
  <v-container>
    <v-card
      min-height="70px"
      class="mt-n2 borderL py-4 my-n1"
      :style="{ borderLeft: todo.color + ' 7px solid !important' }"
      :elevation="3"
      color="white"
    >
      <v-card-title
        class="text-caption mx-n2 my-0 d-flex justify-space-between"
        v-if="todo.tag"
      >
        <p
          class="mt-n5 mb-n1 tag px-1"
          :style="{ color: todo.color, background: todo.bgColor }"
        >
          {{ todo.name }}
        </p>
        <v-icon left dense color="black" class="mt-n5">mdi-dots-horizontal </v-icon>
      </v-card-title>

      <v-card-text class="mx-n1 my-n3">
        <div class="text-wrap description black--text text-body-2">
          {{ todo.description }}
        </div>
      </v-card-text>
      <v-card-actions class="my-n4 mx-1">
        <span class="black--text text-caption font-weight-light">Time: 1pm-2am</span>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      default: null,
      required: false,
    },
  },
};
</script>
<style scoped>
@font-face {
  font-family: "Indie";
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url("~assets/fonts/IndieFlower-Regular.ttf") format("truetype");
}
* {
  user-select: none;
}

.tag {
  /* color: #ff808f; */
  font-weight: bold;
  /* background: rgba(255, 128, 143, 0.15); */

  border-radius: 4px;
}
span {
  color: white;
}
.description {
  font-size: 16px;
  margin-bottom: -5px;
}
</style>
