const fs = require("fs");
const inquirer = require("inquirer");
const { circle, triangle, square } = require("./lib/shapes.js");

console.log("hi");

const questions = [
  {
    message: "Enter a maximum of three (3) characters.",
    type: "input",
    name: "char",
    validate: (value) =>
      value ? true : "You must enter a maximum of three (3) characters.",
  },
  {
    message:
      "Enter a text color (e.g., white, black) or a hex number (e.g., #000000).",
    type: "input",
    name: "textcolor",
    validate: (value) =>
      value ? true : "Please enter a text color or hex number.",
  },
  {
    message: "Choose a shape:",
    name: "shape",
    type: "list",
    choices: ["circle", "triangle", "square"],
    validate: (value) => (value ? true : "Please choose a shape."),
  },
  {
    message:
      "Enter a color for your shape (e.g., white, black) or a hex number (e.g., #000000).",
    type: "input",
    name: "shapecolor",
    validate: (value) =>
      value ? true : "Please enter a color for your shape.",
  },
];

function generateSVG(shape, text, textColor, shapeColor) {
  // Generate SVG code based on the shape and colors provided
  let svgCode = "";

  if (shape === "circle") {
    svgCode = circle(text, textColor, shapeColor);
  } else if (shape === "triangle") {
    svgCode = triangle(text, textColor, shapeColor);
  } else if (shape === "square") {
    svgCode = square(text, textColor, shapeColor);
  }

  // Write SVG code to a file named "logo.svg"
  require("fs").writeFile("logo.svg", svgCode, (err) => {
    if (err) throw err;
    console.log("SVG file created: logo.svg");

    // Open the SVG file in the default application
    const { exec } = require("child_process");
    exec("open logo.svg");
  });
}

inquirer.prompt(questions).then((answers) => {
  const { char, textcolor, shape, shapecolor } = answers;
  generateSVG(shape, char, textcolor, shapecolor);
});
