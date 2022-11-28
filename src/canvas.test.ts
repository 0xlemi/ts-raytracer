// create tests for canvas using jest
// Path: src/canvas.test.ts
import { describe, expect, it } from '@jest/globals';

import Canvas from "./canvas";

import Color from "./primitives/color";

describe("Canvas", () => {

  describe("constructor", () => {
    it("should create a canvas with the correct dimensions", () => {
      const canvas = new Canvas(10, 20);
      expect(canvas.width).toBe(10);
      expect(canvas.height).toBe(20);
    });

    it("should create a canvas with all pixels initialized to black", () => {
      const canvas = new Canvas(10, 20);
      for (let i = 0; i < canvas.height; i++) {
        for (let j = 0; j < canvas.width; j++) {
          expect(canvas.pixelAt(j, i)).toStrictEqual(new Color(0, 0, 0));
        }
      }
    });
  });

  describe("pixelOutOfBounds", () => {
    it("should return true if the pixel is out of bounds", () => {
      const canvas = new Canvas(10, 20);
      expect(canvas.pixelOutOfBounds(10, 0)).toBe(true);
      expect(canvas.pixelOutOfBounds(0, 20)).toBe(true);
      expect(canvas.pixelOutOfBounds(10, 20)).toBe(true);
    });

    it("should return false if the pixel is in bounds", () => {
      const canvas = new Canvas(10, 20);
      expect(canvas.pixelOutOfBounds(0, 0)).toBe(false);
      expect(canvas.pixelOutOfBounds(9, 0)).toBe(false);
      expect(canvas.pixelOutOfBounds(0, 19)).toBe(false);
      expect(canvas.pixelOutOfBounds(9, 19)).toBe(false);
    });
  });

  describe("writePixel", () => {
    it("should write a pixel to the canvas", () => {
      const canvas = new Canvas(10, 20);
      const red = new Color(1, 0, 0);
      canvas.writePixel(2, 3, red);
      expect(canvas.pixelAt(2, 3)).toStrictEqual(red);
    });
  });

  describe("pixelAt", () => {
    it("should return the correct color at the pixel", () => {
      const canvas = new Canvas(10, 20);
      const red = new Color(1, 0, 0);
      canvas.writePixel(2, 3, red);
      expect(canvas.pixelAt(2, 3)).toStrictEqual(red);
    });
  });

  describe("toPPM", () => {
    it("should return a PPM header", () => {
      const canvas = new Canvas(5, 3);
      const ppm = canvas.toPPM();
      const lines = ppm.split("\n");
      console.log(lines);
      expect(lines[0]).toBe("P3");
      expect(lines[1]).toBe("5 3");
      expect(lines[2]).toBe("255");
    });

    it("should return a PPM body", () => {
      const canvas = new Canvas(5, 3);
      const c1 = new Color(1.5, 0, 0);
      const c2 = new Color(0, 0.5, 0);
      const c3 = new Color(-0.5, 0, 1);
      canvas.writePixel(0, 0, c1);
      canvas.writePixel(2, 1, c2);
      canvas.writePixel(4, 2, c3);
      const ppm = canvas.toPPM();
      const lines = ppm.split("\n");
      console.log(lines[3]);
      expect(lines[3]).toBe("255 0 0 0 0 0 0 0 0 0 0 0 0 0 0");
      expect(lines[4]).toBe("0 0 0 0 0 0 0 128 0 0 0 0 0 0 0");
      expect(lines[5]).toBe("0 0 0 0 0 0 0 0 0 0 0 0 0 0 255");
    }
    );

    // it("should split long lines in the PPM body", () => {
    //   const canvas = new Canvas(10, 2);
    //   const color = new Color(1, 0.8, 0.6);
    //   for (let i = 0; i < canvas.height; i++) {
    //     for (let j = 0; j < canvas.width; j++) {
    //       canvas.writePixel(j, i, color);
    //     }
    //   }
    //   const ppm = canvas.toPPM();
    //   const lines = ppm.split("\r");
    //   expect(lines[3]).toBe("255 204 153 255 204 153 255 204 153 255 204 153 255 204 153");
    //   expect(lines[4]).toBe("255 204 153 255 204 153 255 204 153 255 204 153 255 204 153");
    //   expect(lines[5]).toBe("255 204 153 255 204 153 255 204 153 255 204 153 255 204 153");
    //   expect(lines[6]).toBe("255 204 153 255 204 153 255 204 153 255 204 153 255 204 153");
    //   expect(lines[7]).toBe("255 204 153 255 204 153 255 204 153 255 204 153 255 204 153");
    //   expect(lines[8]).toBe("255 204 153 255 204 153 255 204 153 255 204 153 255 204 153");
    // });

    // it("should end with a newline", () => {
    //   const canvas = new Canvas(5, 3);
    //   const ppm = canvas.toPPM();
    //   expect(ppm[ppm.length - 1]).toBe("\r");
    // });

  });
});