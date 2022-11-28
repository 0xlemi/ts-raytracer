import Canvas from "./src/canvas";
import Color from "./src/primitives/color";


let canvas = new Canvas(5, 5);

canvas.writePixel(3, 0, new Color(1, 0, 0));

console.log(canvas.toPPM());