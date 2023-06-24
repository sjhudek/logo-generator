
function circle(cx, cy, r, fill, textColor, text) {
  const svg = `
    <svg version="1.1" width="700" height="700" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" />
      <text x="${cx}" y="${cy + 25}" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
  return svg;
}

function triangle(x1, y1, x2, y2, x3, y3, fill, textColor, text) {
  const svg = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${fill}" />
      <text x="${(x1 + x2 + x3) / 3}" y="${(y1 + y2 + y3) / 3 + 25}" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
  return svg;
}

function square(x, y, side, fill, textColor, text) {
  const svg = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="${x}" y="${y}" width="${side}" height="${side}" fill="${fill}" />
      <text x="${x + side / 2}" y="${y + side / 2 + 25}" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
  return svg;
}

module.exports = { circle, triangle, square };
