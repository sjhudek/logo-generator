const { Circle } = require("../lib/shapes");

describe("Circle", () => {
  test("should generate correct SVG code", () => {
    const circle = new Circle(150, 100, 50, "red", "white", "C");
    const expectedSvgCode = `
      <svg version="1.1" width="700" height="700" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="50" fill="red" fill-opacity="1" stroke="none" stroke-width="1" stroke-opacity="1" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">C</text>
      </svg>
    `;

    expect(circle.draw()).toBe(expectedSvgCode);
  });
});
