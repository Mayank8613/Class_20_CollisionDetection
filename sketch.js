var fixedRectangle, movingRectangle;

function setup() {
  createCanvas(1200,800);
  fixedRectangle = createSprite(200, 200, 50, 50);
  fixedRectangle.shapeColor = "green";
  movingRectangle = createSprite(400, 200, 80, 30);
  movingRectangle.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;
  //console.log(movingRectangle.x - fixedRectangle.x);
if(movingRectangle.x-fixedRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 && 
  fixedRectangle.x - movingRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2 &&
  movingRectangle.y-fixedRectangle.y < fixedRectangle.width/2 + movingRectangle.width/2 &&
  fixedRectangle.y - movingRectangle.y < movingRectangle.width/2 + fixedRectangle.width/2) {
  movingRectangle.shapeColor ="red";
  fixedRectangle.shapeColor="red";
}
else{
  movingRectangle.shapeColor ="green";
  fixedRectangle.shapeColor="green";
}
  drawSprites();
}