const { Square } = require("../lib/shapes");

test("should generate correct SVG code", () => {
  const square = new Square(150, 125, 50, "red", "white", "C");
  const expectedSvgCode = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="150" y="125" width="50" height="50" fill="red" fill-opacity="1" stroke="none" stroke-width="1" stroke-opacity="1" />
      <text x="175" y="150" font-size="60" text-anchor="middle" fill="white">C</text>
    </svg>
  `;
  expect(square.draw().trim()).toBe(expectedSvgCode.trim());
});


