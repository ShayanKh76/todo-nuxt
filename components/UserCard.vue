<template class="">
  <v-container>
    <v-card
      min-height="60px"
      class="mt-n2 borderL py-4 my-n1"
      :style="{ borderLeft: todo.color + ' 4px solid !important' }"
      :elevation="3"
      color="white"
    >
      <!-- <v-card-title
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
      </v-card-title> -->

      <v-card-text class="mx-n2 my-n7 py-5">
        <div class="text-wrap description black--text">
          <v-icon class="mx-n2" :style="{ color: todo.color }">mdi-circle-small</v-icon
          ><span class="ml-0 text-body-2"> {{ todo.description }}</span>
        </div>
      </v-card-text>
      <v-card-actions class="mt-2 mb-n5 mx-0 d-flex justify-space-between">
        <span class="black--text text-caption font-weight-light"
          ><v-icon small color="#636363" class="mb-1">mdi-clock-time-five-outline</v-icon>
          1pm - 2am</span
        ><span class="dColor text-caption font-weight-light"
          ><v-icon small color="#a6a6a6" class="mb-1">mdi-checkbox-blank-outline</v-icon>
          Done</span
        >
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
.dColor {
  color: #636363;
}

.description {
  font-size: 16px;
  margin-bottom: -5px;
}
</style>
