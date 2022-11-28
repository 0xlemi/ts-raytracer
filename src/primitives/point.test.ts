// create point tests using jest
// Path: src/primitives/point.test.ts
// Compare this snippet from src/primitives/vector.test.ts:
import { describe, expect, it } from '@jest/globals';
import Point from "./point";
import Vector from "./vector";


describe("Point", () => {
  describe("add", () => {
    it("should add a vector and a point", () => {
      const vector = new Vector(1, 2, 3);
      const point = new Point(1, 2, 3);
      expect(point.add(vector)).toStrictEqual(new Point(2, 4, 6));
    });

    it("should add two points", () => {
      const point1 = new Point(1, 2, 3);
      const point2 = new Point(1, 2, 3);
      expect(point1.add(point2)).toStrictEqual(new Point(2, 4, 6));
    });
  });

  describe("subtract", () => {
    it("should subtract a vector and a point", () => {
      const vector = new Vector(1, 2, 3);
      const point = new Point(1, 2, 3);
      expect(point.subtract(vector)).toStrictEqual(new Point(0, 0, 0));
    });

    it("should subtract two points", () => {
      const point1 = new Point(1, 2, 3);
      const point2 = new Point(1, 2, 3);
      expect(point1.subtract(point2)).toStrictEqual(new Vector(0, 0, 0));
    });
  });

});

