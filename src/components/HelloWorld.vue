<template>
  <div>
    <canvas id="c" width="250" height="250"></canvas>
    <img src="../assets/cat.jpeg" id="my-image" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { fabric } from "fabric";

@Component
export default class HelloWorld extends Vue {
  mounted() {
    // create a wrapper around native canvas element (with id="c")
    const canvas = new fabric.Canvas("c", {
      backgroundColor: "rgb(255,250,220)"
    });

    ////////// PART I //////////////
    ////////////////////////////////
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

    // moving rec to another location using setters
    rect.set({ left: 20, top: 100 });
    rect.set({ angle: 15 });
    rect.set({ strokeWidth: 5, stroke: "rgba(100,200,200,0.5)" });

    // const getterOfWidth = rect.width; // or rect.getWidth()
    // console.warn(getterOfWidth);

    // console.log(canvas.item(0)); // reference fabric.Rect added earlier (first object)
    canvas.getObjects(); // get all objects on canvas (rect will be first and only)

    // canvas.remove(rect); // remove previously-added fabric.Rect

    const circle = new fabric.Circle({
      radius: 20,
      fill: "green",
      left: 100,
      top: 100
    });
    const triangle = new fabric.Triangle({
      width: 20,
      height: 30,
      fill: "blue",
      left: 50,
      top: 50
    });
    canvas.add(circle, triangle);

    circle.set("selectable", false); // make object unselectable

    const imgElement = document.getElementById("my-image") as HTMLImageElement;
    const imgInstance = new fabric.Image(imgElement, {
      left: 200,
      top: 200,
      width: 30,
      height: 30,
      angle: 30,
      opacity: 0.85
    });
    canvas.add(imgInstance);

    ////////// PART 2 //////////////
    ////////////////////////////////

    canvas.on("mouse:down", function(options) {
      const event = options.e as MouseEvent;
      console.log(event.clientX, event.clientY);
    });

    canvas.on("mouse:down", function(options) {
      if (options.target) {
        console.log("an object was clicked! ", options.target.type);
      }
    });

    const rect2 = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "red",
      width: 20,
      height: 20,
      angle: 45
    });
    canvas.add(rect2);

    rect2.on("selected", function() {
      console.log("selected a rectangle");
    });

    const circle2 = new fabric.Circle({
      left: 200,
      top: 200,
      radius: 75,
      fill: "blue"
    });
    canvas.add(circle2);
    circle2.on("selected", function() {
      console.log("selected a circle");
    });

    ////////// PART III //////////////
    ////////////////////////////////

    canvas.renderAll();
  }
}
</script>

<style scoped>
#c {
  border: 1px solid red;
}
</style>
