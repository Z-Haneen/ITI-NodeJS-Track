import { Shape } from './Shape.js';

export class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }

    toString() {
        return `Hello Rectangle Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`;
    }
}