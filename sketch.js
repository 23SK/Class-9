var box;

function setup() {
  createCanvas(500, 500);
  box = createSprite(250, 250, 20, 20);
}

function draw() {
  background("black")
  drawSprites();
  if (keyIsDown(UP_ARROW)) {
    box.position.y -= 5
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y += 5
  }

  if (keyIsDown(LEFT_ARROW)) {
    box.position.x -= 5
  }

  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x += 5;
  }
}
