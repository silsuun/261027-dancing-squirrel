class Duck {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(1, 0);
    this.acc = createVector(0, 0);

    this.maxSpeed = 2;
    this.turnStrength = 0.05;
    this.w = 10;
    this.stopped = false;
    this.facing = 1;

    this.stopStartTime = 0;
    this.stopDuration = 1500;
  }
  outofpond() {
    if (this.pos.x >= width - 25) {
    this.pos.x = width - 25;

    if (this.vel.x > 0) {
      this.vel.x *= -1;
      this.facing = -1;
    }
  }

  if (this.pos.x <= 25) {
    this.pos.x = 25;

    if (this.vel.x < 0) {
      this.vel.x *= -1;
      this.facing = 1;
    }
  }
    if (this.pos.y > height) {
      this.pos.y = height;
      this.vel.y *= -1;
    }

    if (this.pos.y < 20) {
      this.pos.y = 20;
      this.vel.y *= -1;
    }
  }

  move() {
    if (this.stopped) {
      if (millis() - this.stopStartTime > this.stopDuration) {
        this.stopped = false;
      }
      return;
    }

    // 조금씩 방향을 바꾸기
    this.acc.x = random(-this.turnStrength, this.turnStrength);
    this.acc.y = random(-this.turnStrength, this.turnStrength);

    // 가속도 적용
    this.vel.add(this.acc);

    // 최대 속도 제한
    this.vel.limit(this.maxSpeed);

    // 위치 이동
    this.pos.add(this.vel);
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y);

    scale(this.facing, 1);

    if (!this.stopped) {
      this.drawDuck();
    } else {
      this.drawDuckButt();
    }
    pop();
  }

  drawDuck() {
    noStroke();

    // 몸통
    fill(255, 220, 70);
    ellipse(0, 0, 50, 35);

    // 머리
    ellipse(12, -20, 30, 30);

    // 부리
    fill(255, 140, 30);
    triangle(23, -22, 38, -17, 23, -13);

    // 눈
    fill(0);
    circle(17, -24, 4);
  }

  // 엉덩이만 내민 오리

  drawDuckButt() {
    noStroke();

    // 몸통
    fill(255, 220, 70);
    ellipse(0, 0, 50, 35);

    // 다리 두 개
    stroke(255, 140, 30);
    strokeWeight(4);

    line(-8, -12, -12, -24);
    line(5, -12, 9, -24);

    // 발가락
    line(-12, -24, -17, -26);
    line(-12, -24, -8, -27);

    line(9, -24, 4, -27);
    line(9, -24, 14, -26);
  }
}
