let duck;
let duck2;

function setup() {
  createCanvas(400, 400);
  duck = new Duck();
  duck2= new Duck();
}

function draw() {
  background(0, 0, 100);
  duck.move();
  duck2.move(); 
  duck.outofpond();
  duck2.outofpond();
  duck.show();
  duck2.show();
}

function keyPressed() {
  if (key === DOWN_ARROW) {
    duck.stopped = true;
    duck.stopStartTime = millis();
  }
  if (key === UP_ARROW) {
    duck2.stopped = true;
    duck2.stopStartTime = millis();
  }
}
