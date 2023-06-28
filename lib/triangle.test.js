const { Triangle } = require("../lib/shapes");

describe("Triangle", () => {
  test("should render a triangle SVG with the given color", () => {
    const triangle = new Triangle(150, 18, 244, 182, 56, 182);
    triangle.setColor("blue");
    const expectedSVG = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`;
    expect(triangle.render().trim()).toBe(expectedSVG.trim());
  });
});  
