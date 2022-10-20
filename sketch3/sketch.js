var offset
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(5);
  stroke(240);

  for (var i = 0; i <= mouseY; i += 50) {
    for (var j = 0; j <= mouseX; j += 60) {
      fill(random(220), 0, random(255));
      ellipse(i, j, 25, 25);
    }


  }
}