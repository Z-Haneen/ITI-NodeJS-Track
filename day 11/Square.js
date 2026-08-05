import { Shape } from './Shape.js';

export class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    calculateArea() {
        return this.side * this.side;
    }

    calculatePerimeter() {
        return 4 * this.side;
    }

    toString() {
        return `Hello Square   Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`;
    }
}