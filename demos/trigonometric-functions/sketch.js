var wh = 750;

function setup() {
  createCanvas(wh, wh);
}

var c = wh / 2;
var t = 0;
var r = 200;

var yp = [];
var xp = [];

function draw() {
  clear();

  t -= PI / 128;

  stroke("black");
  fill(255);
  text(
    "Theta = " + -ceil((t / (PI / 128) / 128) * 100) / 100 + "PI",
    10,
    10,
    120,
    120
  );

  var x = Math.cos(t);
  var y = Math.sin(t);

  stroke("black");
  strokeWeight(3);
  circle(c, c, 2 * r);

  stroke("purple");
  strokeWeight(10);
  point(c + x * r, c + y * r);

  strokeWeight(3);
  line(c, c, c + x * r, c + y * r);
  stroke("black");
  fill(255);
  text("Radius", c + (x / 2) * r, c + (y / 2) * r, 70, 80);

  yp.push({ x: c - r, y: c + y * r });
  xp.push({ x: c + x * r, y: c - r });

  stroke("black");
  fill(255);
  text(
    "X Axis",
    (c + x * r + xp[xp.length - 1].x) / 2 + 10,
    (c + y * r + xp[xp.length - 1].y) / 2,
    70,
    80
  );

  stroke("green");
  line(c + x * r, c + y * r, yp[xp.length - 1].x, yp[xp.length - 1].y);
  yp.forEach((p, i) => {
    point(p.x, p.y);
    yp[i].x--;
  });

  stroke("black");
  fill(255);
  text(
    "Y Axis",
    (c + x * r + yp[yp.length - 1].x) / 2 + 10,
    (c + y * r + yp[yp.length - 1].y) / 2,
    70,
    80
  );

  stroke("red");
  line(c + x * r, c + y * r, xp[xp.length - 1].x, xp[xp.length - 1].y);
  xp.forEach((p, i) => {
    point(p.x, p.y);
    xp[i].y--;
  });

  if (xp.length > r) {
    xp.shift();
  }

  if (yp.length > r) {
    yp.shift();
  }

  stroke("black");
  fill(255);
  text("Sin Wave", (yp[0].x + yp[yp.length - 1].x) / 2 + 10, c, 70, 80);

  stroke("black");
  fill(255);
  text("Cos Wave", c, (xp[0].y + xp[xp.length - 1].y) / 2 + 10, 70, 80);
}
