let x = 400;
let y = 200;
let xspeed = 5;
let yspeed = 2;
let easing = 0.10;
let r = 25;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    // background(0);
    let h = random(0, 360);
    let j = random(360, 500);

    ellipse(x, y, r * 2, r * 2);
    x += xspeed;
    y += yspeed;
    if (x + xspeed > width - r || x + xspeed < r) {
        fill(h, 70, 90, 10);
        xspeed = -xspeed - 10 * (easing);
    }
    if (y > height - r || y < r) {
        fill(j, h, 30, 10);
        yspeed = -yspeed - 2;
    }
}
