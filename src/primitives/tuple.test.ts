import { describe, expect, it } from '@jest/globals';
// Path: lib/primitives/tuple.test.ts
import Point from "./point";
import Tuple from './tuple';
import Vector from "./vector";

describe("Tuple", () => {

  describe("get", () => {
    it("should return the value at the given index", () => {
      const tuple = new Tuple(1, 2, 3, 4);
      expect(tuple.get(0)).toBe(1);
      expect(tuple.get(1)).toBe(2);
      expect(tuple.get(2)).toBe(3);
      expect(tuple.get(3)).toBe(4);
    });
  });

  describe("set", () => {
    it("should set the value at the given index", () => {
      const tuple = new Tuple(1, 2, 3, 4);
      tuple.set(0, 5);
      tuple.set(1, 6);
      tuple.set(2, 7);
      tuple.set(3, 8);
      expect(tuple).toStrictEqual(new Tuple(5, 6, 7, 8));
    });
  });

  describe("equals", () => {
    it("should return true if two tuples are equal", () => {
      const tuple1 = new Tuple(1, 2, 3.000001, 4);
      const tuple2 = new Tuple(1, 2, 3, 4);
      expect(tuple1.equals(tuple2)).toBe(true);
    });

    it("should return false if two tuples are not equal", () => {
      const tuple1 = new Tuple(1, 2, 3, 4);
      const tuple2 = new Tuple(1, 2, 3, 5);
      expect(tuple1.equals(tuple2)).toBe(false);
    });
  });

  describe("add", () => {
    it("should add two tuples", () => {
      const tuple1 = new Tuple(1, 2, 3, 4);
      const tuple2 = new Tuple(1, 2, 3, 4);
      expect(tuple1.add(tuple2)).toStrictEqual(new Tuple(2, 4, 6, 8));
    });
  });

  describe("subtract", () => {
    it("should subtract two tuples", () => {
      const tuple1 = new Tuple(1, 2, 3, 4);
      const tuple2 = new Tuple(1, 2, 3, 4);
      expect(tuple1.subtract(tuple2)).toStrictEqual(new Tuple(0, 0, 0, 0));
      expect(tuple2.subtract(tuple1)).toStrictEqual(new Tuple(0, 0, 0, 0));
    });
  });

  describe("negate", () => {
    it("should negate a tuple", () => {
      const tuple = new Tuple(1, 2, 3, 4);
      expect(tuple.negate()).toStrictEqual(new Tuple(-1, -2, -3, -4));
    });
  });

  describe("multiply", () => {
    it("should multiply a tuple by a scalar", () => {
      const tuple = new Tuple(1, 2, 3, 4);
      expect(tuple.multiply(2)).toStrictEqual(new Tuple(2, 4, 6, 8));
    });
  });

  describe("divide", () => {
    it("should divide a tuple by a scalar", () => {
      const tuple = new Tuple(1, 2, 3, 4);
      expect(tuple.divide(2)).toStrictEqual(new Tuple(0.5, 1, 1.5, 2));
    });
  });


  describe("toVector", () => {
    it("should return a vector", () => {
      const tuple = new Tuple(1, 2, 3, 4);
      expect(tuple.toVector()).toStrictEqual(new Vector(1, 2, 3));
    });
  });

  describe("toPoint", () => {
    it("should return a point", () => {
      const tuple = new Tuple(1, 2, 3, 4);
      expect(tuple.toPoint()).toStrictEqual(new Point(1, 2, 3, 4));
    });
  });

  describe("toString", () => {
    it("should return a string", () => {
      const tuple = new Tuple(1, 2, 3, 4);
      expect(tuple.toString()).toBe("Tuple[1, 2, 3, 4]");
    });
  });

});



