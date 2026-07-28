import { Rectangle } from './Rectangle.js';
import { Square } from './Square.js';
import { Circle } from './Circle.js';

try {
    const rect = new Rectangle(10, 5);
    const sq = new Square(6);
    const circ = new Circle(7);

    console.log(rect.toString());
    console.log(sq.toString());
    console.log(circ.toString());

} catch (error) {
    console.error(error.message);
}