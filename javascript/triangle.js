/*
Instructions
Determine if a triangle is equilateral, isosceles, or scalene.

An equilateral triangle has all three sides the same length.

An isosceles triangle has at least two sides the same length. (It is sometimes specified as having exactly two sides the same length, but for the purposes 
  of this exercise we'll say at least two.)

A scalene triangle has all sides of different lengths.
*/

class Triangle {
  constructor(...sides) {
    this._sides = sides;
  }

  get isEquilateral() {
    return this._sides.every((side) => side === this._sides[0] && side > 0);
  }

  get isIsosceles() {
    const [a, b, c] = this._sides;
    return (a === b || a === c || b === c) && this.isTriangle();
  }

  get isScalene() {
    const [a, b, c] = this._sides;
    return !(a === b || a === c || b === c) && this.isTriangle();
  }

  isTriangle() {
    this._sides.sort();
    const [side1, side2, side3] = this._sides;
    return side1 + side2 >= side3;
  }
}
