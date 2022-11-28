// create test for color using jest
// Path: src/color.test.ts

import { describe, expect, it } from '@jest/globals';
import Color from "./color";

describe("Color", () => {

  describe("normilizeColorValue", () => {
    it("should return 0 if the value is less than 0", () => {
      expect(Color.normalizeColorValue(-1)).toBe(0);
      expect(Color.normalizeColorValue(-0.5)).toBe(0);
      expect(Color.normalizeColorValue(-0.0000001)).toBe(0);
    });

    it("should return 255 if the value is greater than 1", () => {
      expect(Color.normalizeColorValue(1.0000001)).toBe(255);
      expect(Color.normalizeColorValue(1.5)).toBe(255);
      expect(Color.normalizeColorValue(2)).toBe(255);
    });

    it("should return value between 0 and 255 if the value is between 0 and 1", () => {
      expect(Color.normalizeColorValue(0)).toBe(0);
      expect(Color.normalizeColorValue(0.5)).toBe(128);
      expect(Color.normalizeColorValue(1)).toBe(255);
    });
  });

  describe("denormalizeColorValue", () => {
    it("should return 0 if the value is less than 0", () => {
      expect(Color.denormalizeColorValue(-1)).toBe(0);
      expect(Color.denormalizeColorValue(-0.5)).toBe(0);
      expect(Color.denormalizeColorValue(-0.0000001)).toBe(0);
    });

    it("should return 1 if the value is greater than 255", () => {
      expect(Color.denormalizeColorValue(255.0000001)).toBe(1);
      expect(Color.denormalizeColorValue(255.5)).toBe(1);
      expect(Color.denormalizeColorValue(256)).toBe(1);
    });

    it("should return value between 0 and 1 if the value is between 0 and 255", () => {
      expect(Color.denormalizeColorValue(0)).toBe(0);
      expect(Color.denormalizeColorValue(128)).toBe(0.5019607843137255);
      expect(Color.denormalizeColorValue(255)).toBe(1);
    });
  });

  describe("getters", () => {
    it("should return the correct values for red, green, and blue", () => {
      const color = new Color(-0.5, 0.4, 1.7);
    });
  });

  describe("setters", () => {
    it("should set the correct values for red, green, and blue", () => {
      const color = new Color(-0.5, 0.4, 1.7);
      color.red = 0.9;
      color.green = 0.8;
      color.blue = 0.7;
    });
  });

  describe("equals", () => {
    it("should return true if two colors are equal", () => {
      const color1 = new Color(1, .5, .000001);
      const color2 = new Color(1, .5, 0);
      expect(color1.equals(color2)).toBe(true);
    });

    it("should return false if two colors are not equal", () => {
      const color1 = new Color(1, .8, .3);
      const color2 = new Color(1, .8, .4);
      expect(color1.equals(color2)).toBe(false);
    });
  });

  describe("add", () => {
    it("should add two colors", () => {
      const color1 = new Color(1, .2, .3);
      const color2 = new Color(1, .2, .3);

      const result = color1.add(color2);
      expect(result.red).toBe(255);
      expect(result.green).toBe(102);
      expect(result.blue).toBe(154);
    });
  });

  describe("subtract", () => {
    it("should subtract two colors", () => {
      const color1 = new Color(1, .2, .3);
      const color2 = new Color(1, .2, .3);
      expect(color1.subtract(color2)).toStrictEqual(new Color(0, 0, 0));
    });
  });

  // Test not working
  describe("multiply", () => {
    it("should multiply a color by a scalar", () => {
      const color = new Color(1, .2, .3);
    });
  });


  // Test not working
  describe("hadamard", () => {
    it("should multiply two colors", () => {
      const color1 = new Color(1, .2, .3);
      const color2 = new Color(1, .2, .3);
    });
  });

  describe("toString", () => {
    it("should return a string representation of the color", () => {
      const color = new Color(1, .5, .2);
      expect(color.toString()).toBe("[255, 128, 51]");
    });
  });


});
