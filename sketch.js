let canvas;

function setup() {
canvas = createCanvas(600, 400);
canvas.position(100, 100);
canvas.parent('myContainer');
canvas.position(300,50);
text = createDiv('This is an HTML string!');
text.position(50, 50);
canvas.class("lemon");
}

function draw() {
  background(220,180,200);
  ellipse(width/2, height/2, 100, 100);
  ellipse(width/4, height/2, 50, 50);
}
