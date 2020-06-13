import { fabric } from 'fabric';
import './styles.css';

window.onload = function() {

    // create a wrapper around native canvas element (with id="c")
    let canvas = new fabric.Canvas('c');

    // create a rectangle object
    let rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 20,
    height: 20,
    angle: 45
    });

    // "add" rectangle onto canvas
    canvas.add(rect);

    // moving rec to another location
    rect.set({ left: 100, top: 100})
    canvas.renderAll()
}



