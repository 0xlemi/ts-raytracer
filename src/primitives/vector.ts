import Point from "./point";
import Tuple from "./tuple";

export default class Vector {

  tuple: Tuple;

  constructor(x: number, y: number, z: number) {
    this.tuple = new Tuple(x, y, z);
  }

  equals(other: Vector) {
    return this.tuple.equals(other.tuple);
  }

  add(other: Vector | Point) {
    if (other instanceof Vector) {
      const newVec = this.tuple.add(other.tuple);
      return new Vector(newVec.get(0), newVec.get(1), newVec.get(2));
    } else if (other instanceof Point) {
      return new Point(...this.tuple.add(other.tuple).elements);
    }
  }

  subtract(other: Vector | Point) {
    if (other instanceof Vector) {
      const newVec = this.tuple.subtract(other.tuple);
      return new Vector(newVec.get(0), newVec.get(1), newVec.get(2));
    } else if (other instanceof Point) {
      // wierd case may need change w = -1
      return new Point(...this.tuple.subtract(other.tuple).elements);
    }
  }

  negate() {
    const newVec = this.tuple.negate();
    return new Vector(newVec.get(0), newVec.get(1), newVec.get(2));
  }

  multiply(scalar: number) {
    const newVec = this.tuple.multiply(scalar);
    return new Vector(newVec.get(0), newVec.get(1), newVec.get(2));
  }

  divide(scalar: number) {
    const newVec = this.tuple.divide(scalar);
    return new Vector(newVec.get(0), newVec.get(1), newVec.get(2));
  }

  magnitude() {
    return Math.sqrt(this.tuple.elements.reduce((sum, element) => {
      return sum + element ** 2;
    }, 0));
  }

  normalize() {
    return this.divide(this.magnitude());
  }

  dot(other: Vector) {
    return this.tuple.elements.reduce((sum, element, index) => {
      return sum + element * other.tuple.elements[index];
    }, 0);
  }

  cross(other: Vector) {
    const [x1, y1, z1] = this.tuple.elements;
    const [x2, y2, z2] = other.tuple.elements;
    return new Vector(
      y1 * z2 - z1 * y2,
      z1 * x2 - x1 * z2,
      x1 * y2 - y1 * x2
    );
  }

  toTuple() {
    return this.tuple;
  }

  toString() {
    return `Vector[${this.tuple.elements.join(", ")}]`;
  }

}