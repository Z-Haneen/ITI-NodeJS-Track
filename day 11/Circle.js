import { Shape } from './Shape.js';

export class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }

    toString() {
        return `Hello Circle   Area: ${this.calculateArea().toFixed(2)}, Perimeter: ${this.calculatePerimeter().toFixed(2)}`;
    }
}