var words = ['hey', 'how', 'are', 'you', '?'];
var colors = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
    [100, 120, 130],
    [200, 210, 220],
];
function setup() {
    createCanvas(400, 400);
    textAlign(CENTER, CENTER);
    frameRate(2);
}

function draw() {
    var currentIndex = frameCount % words.length;
    var currentColor = colors[currentIndex];
    var currentWord = words[currentIndex];

   
    background(currentColor);
    ellipse(mouseX, mouseY, 30, 30);
    fill(0)
    textSize(100);
    text(currentWord, width / 2, height / 2);
}