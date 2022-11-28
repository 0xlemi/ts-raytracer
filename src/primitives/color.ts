import Tuple from "./tuple";

export default class Color {

  tuple: Tuple;

  static normalizeColorValue(value: number) {
    if (value < 0) {
      return 0;
    } else if (value > 1) {
      return 255;
    }
    return Math.round(value * 255);
  }

  static denormalizeColorValue(value: number) {
    if (value < 0) {
      return 0;
    } else if (value > 255) {
      return 1;
    }
    return value / 255;
  }

  constructor(r: number, g: number, b: number) {
    const red = Color.normalizeColorValue(r);
    const green = Color.normalizeColorValue(g);
    const blue = Color.normalizeColorValue(b);
    this.tuple = new Tuple(red, green, blue);
  }

  equals(other: Color) {
    return this.tuple.equals(other.tuple);
  }

  get red() {
    return this.tuple.get(0);
  }
  get green() {
    return this.tuple.get(1);
  }
  get blue() {
    return this.tuple.get(2);
  }
  set red(value: number) {
    this.tuple.set(0, Color.normalizeColorValue(value));
  }
  set green(value: number) {
    this.tuple.set(1, Color.normalizeColorValue(value));
  }
  set blue(value: number) {
    this.tuple.set(2, Color.normalizeColorValue(value));
  }


  add(other: Color) {
    const newColor = this.tuple.add(other.tuple).elements.map(Color.denormalizeColorValue);
    return new Color(newColor[0], newColor[1], newColor[2]);
  }

  subtract(other: Color) {
    const newColor = this.tuple.subtract(other.tuple)
    return new Color(newColor.get(0), newColor.get(1), newColor.get(2));
  }

  multiply(scalar: number) {
    const newColor = this.tuple.multiply(scalar)
    return new Color(newColor.get(0), newColor.get(1), newColor.get(2));
  }

  hadamard(other: Color) {
    const newColorArray = this.tuple.elements.map((element, index) => {
      return element * other.tuple.get(index);
    })
    return new Color(newColorArray[0], newColorArray[1], newColorArray[2]);
  }

  toString() {
    return `[${this.tuple.elements.join(", ")}]`;
  }
}