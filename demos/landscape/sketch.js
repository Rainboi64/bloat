var cols, rows;
var scl = 20;
var w = 1000;
var h = 1000;

var t = 0;

var terrain = [];

function setup() {
  createCanvas(1000, 1000, WEBGL);
  cols = w / scl + 10;
  rows = h / scl + 10;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0;
    }
  }
}

function draw() {
  t -= 0.1;
  var yoff = t;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }

  background(Math.sin(t) * 255, Math.cos(t) * 255, Math.sin(t) * 255 + 2);
  translate(0, 50);
  rotateX(PI / 3);
  rotateZ(PI * Math.sin(t / 50));
  translate(-w / 2, -h / 2);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      fill((y / scl) * 200, (y / scl) * 40, 200, 20 * sqrt(x + y));
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
}
