export class Shape {
    constructor() {
        if (new.target.name === "Shape") {
            throw new Error("Cannot instantiate abstract class Shape directly.");
        }
    }

    calculateArea() {
        throw new Error("Method must be implemented.");
    }

    calculatePerimeter() {
        throw new Error("Method must be implemented.");
    }

    toString() {
        return "Hello from Shape";
    }
}