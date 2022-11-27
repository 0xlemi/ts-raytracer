import Tuple from "./tuple";
import Vector from "./vector";

export default class Point {
  tuple: Tuple;

  constructor(...elements: number[]) {
    this.tuple = new Tuple(...elements);
  }

  add(other: Point | Vector) {
    return new Point(...this.tuple.add(other.tuple).elements);
  }

  subtract(other: Point | Vector) {
    if (other instanceof Point) {
      const newVec = this.tuple.subtract(other.tuple).elements;
      return new Vector(newVec[0], newVec[1], newVec[2]);
    } else if (other instanceof Vector) {
      return new Point(...this.tuple.subtract(other.tuple).elements);
    }
  }

  toString() {
    return `Point[${this.tuple.elements.join(", ")}]`;
  }

}