<template>
  <div>
    <canvas id="c" width="400" height="400"></canvas>
    <img src="../assets/cat.jpeg" id="my-image" style="display: none" />
    <p>Move mouswheel to zoom in and out. Hold <b>alt</b> key to move canvas when zoomed in.</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { fabric } from "fabric";

@Component
export default class HelloWorld extends Vue {
  public isDragging = false;
  public selection = false;
  public lastPosX = 0;
  public lastPosY = 0;

  mounted() {
    // create a wrapper around native canvas element (with id="c")
    const canvas = new fabric.Canvas("c", {
      backgroundColor: "rgb(255,250,220)",
    });
    const url =
      "https://postmediacanoe.files.wordpress.com/2019/07/gettyimages-910314172-e1564420108411.jpg?w=840&h=630&crop=1&quality=80&strip=all";
    const url2 =
      "https://png2.kisspng.com/sh/b54bd7efd622fb1c333a6a8175deb821/L0KzQYm3UsE4N5dpiZH0aYP2gLBuTfJqepVoedluLYryf37qjPlxNZJ3jJ9rYYL2PbTzigBieqV4RadqOEi8QYLsUsI3a5Y2Rqo8MUe3RIm3UcUyQGkAUaYDNkG3QXB3jvc=/kisspng-birdcage-zoo-clip-art-bars-cliparts-5a88911e226ce1.831744801518899486141.png";
    ////////// PART I //////////////
    ////////////////////////////////
    // create a rectangle object
    // const rect = new fabric.Rect({
    //   left: 100,
    //   top: 100,
    //   fill: "red",
    //   width: 20,
    //   height: 20,
    //   angle: 45,
    // });

    // "add" rectangle onto canvas
    // canvas.add(rect);

    // // moving rec to another location using setters
    // rect.set({ left: 20, top: 100 });
    // rect.set({ angle: 15 });
    // rect.set({ strokeWidth: 5, stroke: "rgba(100,200,200,0.5)" });

    // // const getterOfWidth = rect.width; // or rect.getWidth()
    // // console.warn(getterOfWidth);

    // // console.log(canvas.item(0)); // reference fabric.Rect added earlier (first object)
    // canvas.getObjects(); // get all objects on canvas (rect will be first and only)

    // // canvas.remove(rect); // remove previously-added fabric.Rect

    // const circle = new fabric.Circle({
    //   radius: 20,
    //   fill: "green",
    //   left: 100,
    //   top: 100
    // });
    // const triangle = new fabric.Triangle({
    //   width: 20,
    //   height: 30,
    //   fill: "blue",
    //   left: 50,
    //   top: 50
    // });
    // canvas.add(circle, triangle);

    // circle.set("selectable", false); // make object unselectable

    // const imgElement = document.getElementById("my-image") as HTMLImageElement;
    // const imgInstance = new fabric.Image(imgElement, {
    //   left: 200,
    //   top: 200,
    //   width: 30,
    //   height: 30,
    //   angle: 30,
    //   opacity: 0.85
    // });
    // canvas.add(imgInstance);

    ////////// PART 2 //////////////
    ////////////////////////////////

    // canvas.on("mouse:down", function(options) {
    //   const event = options.e as MouseEvent;
    //   console.log(event.clientX, event.clientY);
    // });

    // canvas.on("mouse:down", function(options) {
    //   if (options.target) {
    //     console.log("an object was clicked! ", options.target.type);
    //   }
    // });

    // const rect2 = new fabric.Rect({
    //   left: 100,
    //   top: 100,
    //   fill: "red",
    //   width: 20,
    //   height: 20,
    //   angle: 45
    // });
    // canvas.add(rect2);

    // rect2.on("selected", function() {
    //   console.log("selected a rectangle");
    // });

    // const circle2 = new fabric.Circle({
    //   left: 200,
    //   top: 200,
    //   radius: 75,
    //   fill: "blue"
    // });
    // canvas.add(circle2);
    // circle2.on("selected", function() {
    //   console.log("selected a circle");
    // });

    ////////// PART III //////////////
    /////////////////////////////////
    // const circle = new fabric.Circle({
    //   radius: 100,
    //   fill: "#eef",
    //   scaleY: 0.5,
    //   originX: "center",
    //   originY: "center",
    // });

    // const text = new fabric.Text("hello world", {
    //   fontSize: 30,
    //   originX: "center",
    //   originY: "center",
    // });

    // const group = new fabric.Group([circle, text], {
    //   left: 100,
    //   top: 100,
    //   angle: -10,
    // });

    // canvas.add(group);
    // // in order to use setFill named setter, you need to add the optional named setter/getter
    // // code from src/util/named_accessors.mixins.js
    // group.item(0).set("fill", "red");
    // group.item(1).set({
    //   text: "trololo",
    //   fill: "white",
    // });

    //////////////// ANOTHER GROUP
    // const circle1 = new fabric.Circle({
    //   radius: 50,
    //   fill: 'red',
    //   left: 0
    // });
    // const circle2 = new fabric.Circle({
    //   radius: 50,
    //   fill: 'green',
    //   left: 100
    // });
    // const circle3 = new fabric.Circle({
    //   radius: 50,
    //   fill: 'blue',
    //   left: 200
    // });

    // const group = new fabric.Group([ circle1, circle2, circle3 ], {
    //   left: 100,
    //   top: 100
    // });

    // canvas.add(group);

    //////////// ASYNC GROUP
    // fabric.Image.fromURL(url, function(img) {
    //   const img1 = img.scale(0.1).set({ left: 100, top: 100 });

    //   fabric.Image.fromURL(url, function(img) {
    //     const img2 = img.scale(0.1).set({ left: 175, top: 175 });

    //     fabric.Image.fromURL(url, function(img) {
    //       const img3 = img.scale(0.1).set({ left: 250, top: 250 });

    //       canvas.add(
    //         new fabric.Group([img1, img2, img3], { left: 200, top: 200 })
    //       );
    //     });
    //   });
    // });

    //////////// Serialization
    // JSON.stringify(canvas); // {"version":"3.6.3","objects":[],"background":"rgb(255,250,220)"}

    // canvas.add(
    //   new fabric.Rect({
    //     left: 50,
    //     top: 50,
    //     height: 20,
    //     width: 20,
    //     fill: "green"
    //   })
    // );
    // JSON.stringify(canvas); //{"version":"3.6.3","objects":[{"type":"rect","version":"3.6.3"
    // //,"originX":"left","originY":"top","left":50,"top":50,"width":20,"height":20,"fill":"green","stroke"
    // //:null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,
    // //"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,
    // //"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"",
    // //"fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over",
    // //"transformMatrix":null,"skewX":0,"skewY":0,"rx":0,"ry":0}],"background":"rgb(255,250,220)"}

    // // Note: This is tiny output compared to image serialization with `canvas.toDataURL('png')`

    // console.log(JSON.stringify(canvas.toObject())); // output above as object

    ////////////// Loading from Desrialization
    // canvas.loadFromJSON({"objects":[{"type":"rect","version":"3.6.3","originX":"left","originY":"top","left":50,"top":50,"width":20,"height":20,"fill":"green","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"rx":0,"ry":0}],"background":"rgb(255,250,220)"});

    ////////// PART IV //////////////
    /////////////////////////////////

    // assign an image as a background

    // canvas.setBackgroundImage(url, canvas.renderAll.bind(canvas));
    // canvas.setOverlayImage(url2, canvas.renderAll.bind(canvas));

    // canvas.add(
    //   new fabric.Circle({ radius: 30, fill: "#f55", top: 100, left: 100 })
    // );

    ////////// PART V ///////////////
    /////////////////////////////////

    /////////// GENERAL ZOOM MOUSEWHEEL
    // canvas.on("mouse:wheel", (opt) => {
    //   const event = opt.e as WheelEvent;
    //   const delta = event.deltaY;
    //   let zoom = canvas.getZoom();
    //   zoom *= 0.999 ** delta; // 0.999 smoothes the delta

    //   if (zoom > 4) { // if zoom bigger than 2, set to 2
    //     zoom = 4;
    //   }
    //   if (zoom < 0.1) {
    //     zoom = 0.1;
    //   }
    //   canvas.setZoom(zoom);
    //   opt.e.preventDefault();
    //   opt.e.stopPropagation();
    // });

    ////////// POINTER ZOOM MOUSEWHEEL

    // Creating canvas
    const bg = new fabric.Rect({ width: 990, height: 490, stroke: 'pink', strokeWidth: 10, fill: '' });
    bg.fill = new fabric.Pattern({ source: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAASElEQVQ4y2NkYGD4z0A6+M3AwMBKrGJWBgYGZiibEQ0zIInDaCaoelYyHYcX/GeitomjBo4aOGrgQBj4b7RwGFwGsjAwMDAAAD2/BjgezgsZAAAAAElFTkSuQmCC' },
    () => { bg.dirty = true; canvas.requestRenderAll(); bg.selectable= false });
    canvas.add(bg);
    const imageHeight = bg.height! + bg.strokeWidth!;
    const imageWidth = bg.width! + bg.strokeWidth!;

    canvas.on("mouse:wheel", (opt) => {
      const event = opt.e as WheelEvent;
      const delta = event.deltaY;
      let zoom = canvas.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 5) { // if zoom bigger than 2, set to 2
        zoom = 5;
      }
      if (zoom < 0.2) {
        zoom = 0.2;
      }
      canvas.zoomToPoint({x: event.offsetX, y: event.offsetY} as fabric.Point, zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();

      const vpt = canvas.viewportTransform as number[];
      if ((zoom < canvas.getHeight() / imageHeight
        || (zoom < canvas.getWidth() / imageWidth)
      )) { // when zooming out below canvas height divided by image height
        vpt[4] = (canvas.getWidth()/2) - imageWidth * zoom / 2;
        vpt[5] = (canvas.getHeight()/2) - imageHeight * zoom / 2;
      } else { // this avoid going out of the borders
        if (vpt[4] >= 0) {
          vpt[4] = 0;
        } else if (vpt[4] < canvas.getWidth() - imageWidth * zoom) {
          vpt[4] = canvas.getWidth() - imageWidth * zoom;
        }
        if (vpt[5] >= 0) {
          vpt[5] = 0;
        } else if (vpt[5] < canvas.getHeight() - imageHeight * zoom) {
          vpt[5] = canvas.getHeight() - imageHeight * zoom;
        }
      }
      
      
    });

    //// DRAGGING CANVAS
    canvas.on("mouse:down", (opt) => {
      const event = opt.e as MouseEvent;
      if (event.altKey === true) {
        this.isDragging = true;
        this.selection = false;
        this.lastPosX = event.clientX;
        this.lastPosY = event.clientY;
      }
    });

    canvas.on("mouse:move", (opt) => {
      if (this.isDragging) {
        const event = opt.e as MouseEvent;
        const zoom = canvas.getZoom();
        const vpt = canvas.viewportTransform as number[];

        if ((zoom < canvas.getHeight() / imageHeight
          || (zoom < canvas.getWidth() / imageWidth)
        )) { // when zooming out below canvas height symetrically
          vpt[4] = (canvas.getWidth()/2) - imageWidth * zoom / 2;
          vpt[5] = (canvas.getHeight()/2) - imageHeight * zoom / 2;
        } else { // blocking movement beyond borders        
          vpt[4] += event.clientX - this.lastPosX;
          vpt[5] += event.clientY - this.lastPosY;
          if (vpt[4] >= 0) {            
            vpt[4] = 0;
          } else if (vpt[4] < canvas.getWidth() - imageWidth * zoom) {
            vpt[4] = canvas.getWidth() - imageWidth * zoom;
          }
          if (vpt[5] >= 0) {
            vpt[5] = 0;
          } else if (vpt[5] < canvas.getHeight() - imageHeight * zoom) {
            vpt[5] = canvas.getHeight() - imageHeight * zoom;
          }
        }
        canvas.requestRenderAll();
        this.lastPosX = event.clientX;
        this.lastPosY = event.clientY;
      }
    });

    canvas.on("mouse:up", (opt) => {
      this.isDragging = false;
      this.selection = false;
    });

    canvas.renderAll();
  }
}
</script>

<style scoped>
#c {
  border: 1px solid red;
}
</style>
