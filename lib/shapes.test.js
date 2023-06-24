const { circle, triangle, square } = require('./shapes');

describe('Circle', () => {
  test('should render a circle SVG with the given color', () => {
    const circle = new Circle(150, 100, 50, 'red');
    const expectedSVG = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="50" fill="red" />
      </svg>
    `;
    expect(circle.render()).toBe(expectedSVG);
  });
});

describe('Triangle', () => {
  test('should render a triangle SVG with the given color', () => {
    const triangle = new Triangle(0, 0, 100, 0, 50, 100, 'blue');
    const expectedSVG = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,0 100,0 50,100" fill="blue" />
      </svg>
    `;
    expect(triangle.render()).toBe(expectedSVG);
  });
});

describe('Square', () => {
  test('should render a square SVG with the given color', () => {
    const square = new Square(50, 50, 100, 'green');
    const expectedSVG = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="100" height="100" fill="green" />
      </svg>
    `;
    expect(square.render()).toBe(expectedSVG);
  });
});
