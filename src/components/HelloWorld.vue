<template>
  <div>
    <canvas id="c" width="250" height="250"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { fabric } from "fabric";

@Component
export default class HelloWorld extends Vue {
  mounted() {
    // create a wrapper around native canvas element (with id="c")
    const canvas = new fabric.Canvas("c");
    // create a rectangle object
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "red",
      width: 20,
      height: 20,
      angle: 45
    });

    // "add" rectangle onto canvas
    canvas.add(rect);

    // moving rec to another location
    rect.set({ left: 100, top: 100 });
    canvas.renderAll();
  }
}
</script>

<style scoped>
#c {
  border: 1px solid red;
}
</style>
