export function areaOfTriangle(x1, y1, x2, y2, x3, y3) {
  return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0);
}

export function isPointInRectangle(x, y, x1, y1, x2, y2) {
  if (x1 > x2) {
    let temp = x1;
    x1 = x2;
    x2 = temp;
  }

  if (y1 > y2) {
    let temp = y1;
    y1 = y2;
    y2 = temp;
  }

  return x >= x1 && x <= x2 && y >= y1 && y <= y2;
}

function swap(x, y) {
  return { y, x };
}
