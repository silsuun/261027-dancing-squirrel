let duck;

function setup() {
  createCanvas(400, 400);
  duck = new Duck();
}

function draw() {
  background(0, 0, 100);
  duck.move();
  duck.outofpond();
  duck.show();
}

function keyPressed() {
  if (key === DOWN_ARROW) {
    duck.stopped = true;
    duck.stopStartTime = millis();
  }
}
