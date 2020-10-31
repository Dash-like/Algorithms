var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200,80,30);
  movingRect.velocityX = -5;
  movingRect.velocityY = 0.3;
}

function draw() {
  background(255,255,255);
  // movingRect.x = mouseX;
  // movingRect.y = mouseY;
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";

  if(movingRect.x - fixedRect.x < movingRect.width/2 +fixedRect.width /2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 +fixedRect.width /2  &&
    movingRect.y - fixedRect.y < movingRect.height/2 +fixedRect.height /2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 +fixedRect.height /2){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  if(movingRect.x - fixedRect.x < movingRect.width/2 +fixedRect.width /2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 +fixedRect.width /2  &&
    movingRect.y - fixedRect.y < movingRect.height/2 +fixedRect.height /2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 +fixedRect.height /2){
      movingRect.velocityX = movingRect.velocityX*(-1);
      movingRect.velocityY = movingRect.velocityY*(-1);
    }

  drawSprites();
}