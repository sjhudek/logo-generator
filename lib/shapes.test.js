const { Triangle, Circle, Square } = require("../lib/shapes");

describe('Triangle', () => {
  test('should render a triangle SVG with the given color', () => {
    const triangle = new Triangle(150, 18, 244, 182, 56, 182);
    triangle.setColor('blue');
    const expectedSVG = '<polygon points="150,18 244,182 56,182" fill="blue" />';
    expect(triangle.render()).toBe(expectedSVG);
  });
});

describe('Circle', () => {
  test('should render a circle SVG with the given color', () => {
    const circle = new Circle(150, 100, 50);
    circle.setColor('red');
    const expectedSVG = '<circle cx="150" cy="100" r="50" fill="red" />';
    expect(circle.render()).toBe(expectedSVG);
  });
});

describe('Square', () => {
  test('should render a square SVG with the given color', () => {
    const square = new Square(100, 100, 200);
    square.setColor('green');
    const expectedSVG = '<rect x="100" y="100" width="200" height="200" fill="green" />';
    expect(square.render()).toBe(expectedSVG);
  });
});
