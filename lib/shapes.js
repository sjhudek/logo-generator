const { Triangle, Circle, Square } = require("../shapes");

class Shape {
  constructor(fill, textColor, text) {
    this.fill = fill;
    this.textColor = textColor;
    this.text = text;
  }

  getSvgAttributes() {
    return `fill="${this.fill}" fill-opacity="1" stroke="none" stroke-width="1" stroke-opacity="1"`;
  }
}

class Circle extends Shape {
  constructor(cx, cy, r, fill, textColor, text) {
    super(fill, textColor, text);
    this.cx = cx;
    this.cy = cy;
    this.r = r;
  }

  setColor(color) {
    this.color = color;
  }

  draw() {
    return `
      <svg version="1.1" width="700" height="700" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" ${this.getSvgAttributes()} />
        <text x="${this.cx}" y="${this.cy + 25}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
    `;
  }
  render() {
    return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}" />`;
  }  
}

class Triangle extends Shape {
  constructor(x1, y1, x2, y2, x3, y3, fill, textColor, text) {
    super(fill, textColor, text);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
  }

  setColor(color) {
    this.color = color;
  }

  draw() {
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" ${this.getSvgAttributes()} />
        <text x="${(this.x1 + this.x2 + this.x3) / 3}" y="${(this.y1 + this.y2 + this.y3) / 3 +
      25}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
    `;
  }
  render() {
    return `<polygon points="${this.points}" fill="${this.color}" />`;
  }  
}

class Square extends Shape {
  constructor(x, y, side, fill, textColor, text) {
    super(fill, textColor, text);
    this.x = x;
    this.y = y;
    this.side = side;
  }

  setColor(color) {
    this.color = color;
  }

  draw() {
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="${this.x}" y="${this.y}" width="${this.side}" height="${this.side}" ${this.getSvgAttributes()} />
        <text x="${this.x + this.side}" y="${(this.y + this.side )/ 2 + 25}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
    `;
  }
  render() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.side}" height="${this.side}" fill="${this.color}" />`;
  }  
}

module.exports = { Circle, Triangle, Square };
