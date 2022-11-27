import { describe, expect, it } from '@jest/globals';
import Point from "./point";
import Tuple from './tuple';
import Vector from "./vector";

describe("Vector", () => {

  describe("equals", () => {
    it("should return true if two vectors are equal", () => {
      const vector1 = new Vector(1, 2, 3.000001);
      const vector2 = new Vector(1, 2, 3);
      expect(vector1.equals(vector2)).toBe(true);
    });
  });

  describe("add", () => {
    it("should add two vectors", () => {
      const vector1 = new Vector(1, 2, 3);
      const vector2 = new Vector(1, 2, 3);
      expect(vector1.add(vector2)).toStrictEqual(new Vector(2, 4, 6));
    });

    it("should add a vector and a point", () => {
      const vector = new Vector(1, 2, 3);
      const point = new Point(1, 2, 3);
      expect(vector.add(point)).toStrictEqual(new Point(2, 4, 6));
    });
  });

  describe("subtract", () => {
    it("should subtract two vectors", () => {
      const vector1 = new Vector(1, 2, 3);
      const vector2 = new Vector(1, 2, 3);
      expect(vector1.subtract(vector2)).toStrictEqual(new Vector(0, 0, 0));
    });

    it("should subtract a vector and a point", () => {
      const vector = new Vector(1, 2, 3);
      const point = new Point(1, 2, 3);
      expect(vector.subtract(point)).toStrictEqual(new Point(0, 0, 0));
    });
  });

  describe("toTuple", () => {
    it("should return a tuple", () => {
      const vector = new Vector(1, 2, 3);
      expect(vector.toTuple()).toStrictEqual(new Tuple(1, 2, 3));
    });
  });

  describe("negate", () => {
    it("should negate a vector", () => {
      const vector = new Vector(1, 2, 3);
      expect(vector.negate()).toStrictEqual(new Vector(-1, -2, -3));
    });
  });

  describe("multiply", () => {
    it("should multiply a vector by a scalar", () => {
      const vector = new Vector(1, 2, 3);
      expect(vector.multiply(2)).toStrictEqual(new Vector(2, 4, 6));
    });
  });

  describe("divide", () => {
    it("should divide a vector by a scalar", () => {
      const vector = new Vector(1, 2, 3);
      expect(vector.divide(2)).toStrictEqual(new Vector(0.5, 1, 1.5));
    });
  });

  describe("magnitude", () => {
    it("should return the magnitude of a vector", () => {
      const vector = new Vector(1, 2, 3);
      expect(vector.magnitude()).toBeCloseTo(3.7416573867739413);
    });
  });


  describe("normalize", () => {
    it("should return the normalized vector", () => {
      const vector = new Vector(1, 2, 3);
      expect(vector.normalize()).toStrictEqual(new Vector(1 / Math.sqrt(14), 2 / Math.sqrt(14), 3 / Math.sqrt(14)));
    });
  });


  describe("dot", () => {
    it("should return the dot product of two vectors", () => {
      const vector1 = new Vector(1, 2, 3);
      const vector2 = new Vector(1, 2, 3);
      expect(vector1.dot(vector2)).toBe(14);
    });
  });

  describe("cross", () => {
    it("should return the cross product of two vectors", () => {
      const vector1 = new Vector(1, 2, 3);
      const vector2 = new Vector(4, 5, 6);

      expect(vector1.cross(vector2)).toStrictEqual(new Vector(-3, 6, -3));
      expect(vector2.cross(vector1)).toStrictEqual(new Vector(3, -6, 3));

    });
  });

  describe("toString", () => {
    it("should return a string", () => {
      const vector = new Vector(1, 2, 3);
      expect(vector.toString()).toBe("Vector[1, 2, 3]");
    });
  });


});