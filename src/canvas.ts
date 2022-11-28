import Color from "./primitives/color";

export default class Canvas {

  width: number;
  height: number;
  pixels: Color[][];

  constructor(width: number, height: number) {
    if (width < 0 || height < 0) {
      throw new Error("Width or height cannot be negative.");
    }
    this.width = width;
    this.height = height;
    this.pixels = [];
    for (let i = 0; i < height; i++) {
      this.pixels.push([]);
      for (let j = 0; j < width; j++) {
        this.pixels[i].push(new Color(0, 0, 0));
      }
    }
  }

  pixelOutOfBounds(x: number, y: number) {
    return x < 0 || x >= this.width || y < 0 || y >= this.height;
  }

  public writePixel(x: number, y: number, color: Color) {
    if (this.pixelOutOfBounds(x, y)) {
      throw new Error('pixel is outside of bounds');
    }
    this.pixels[y][x] = color;
  }

  pixelAt(x: number, y: number) {
    if (this.pixelOutOfBounds(x, y)) {
      throw new Error('pixel is outside of bounds');
    }
    return this.pixels[y][x];
  }

  toString() {
    let canvasString = "";
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        canvasString += this.pixels[i][j].toString() + " ";
      }
      canvasString += "\n";
    }
    return canvasString;
  }

  toPPM() {
    let ppm = "P3\n";
    ppm += `${this.width} ${this.height}\n`;
    ppm += "255\n";
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        const color = this.pixels[i][j];
        ppm += `${color.red} ${color.green} ${color.blue} `;
      }
      ppm += "\n";
    }
    return ppm;
  }


}