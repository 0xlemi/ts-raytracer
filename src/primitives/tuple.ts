import Point from "./point";
import Vector from "./vector";

export default class Tuple {

  elements: number[];
  EPSILON = 0.00001;

  constructor(...elements: number[]) {
    this.elements = elements;
  }

  get(num: number) {
    return this.elements[num];
  }

  set(num: number, value: number) {
    this.elements[num] = value;
  }

  equals(other: Tuple) {
    // compare each element using epsilon
    return this.elements.every((element, index) => {
      return Math.abs(element - other.elements[index]) < this.EPSILON;
    });
  }

  add(other: Tuple) {
    return new Tuple(...this.elements.map((element, index) => {
      return element + other.elements[index];
    }));
  }

  subtract(other: Tuple) {
    return new Tuple(...this.elements.map((element, index) => {
      return element - other.elements[index];
    }));
  }

  negate() {
    return new Tuple(...this.elements.map(element => -element));
  }

  multiply(scalar: number) {
    return new Tuple(...this.elements.map(element => element * scalar));
  }

  divide(scalar: number) {
    return new Tuple(...this.elements.map(element => element / scalar));
  }

  toVector() {
    return new Vector(this.elements[0], this.elements[1], this.elements[2]);
  }

  toPoint() {
    return new Point(...this.elements);
  }


  toString() {
    return `Tuple[${this.elements.join(", ")}]`;
  }
}