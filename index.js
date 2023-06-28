const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes.js");

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
  let svgCode = "";

  if (shape === "circle") {
    const circle = new Circle(150, 100, 50, shapeColor, textColor, text);
    svgCode = circle.draw();
  } else if (shape === "triangle") {
    const triangle = new Triangle(
      50,
      150,
      150,
      50,
      250,
      150,
      shapeColor,
      textColor,
      text
    );
    svgCode = triangle.draw();
  } else if (shape === "square") {
    const square = new Square(100, 50, 100, shapeColor, textColor, text);
    svgCode = square.draw();
  }

  fs.writeFile("logo.svg", svgCode, (err) => {
    if (err) throw err;
    console.log("SVG file created: logo.svg");

    const { exec } = require("child_process");
    exec("open logo.svg");
  });
}

inquirer.prompt(questions).then((answers) => {
  const { char, textcolor, shape, shapecolor } = answers;
  generateSVG(shape, char, textcolor, shapecolor);
});
