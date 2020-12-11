var car,wall;
var speed,weight
function setup() {
  createCanvas(2000,1000);
  speed=random(55,90)
  weight=random(400,1500)
 car= createSprite(50, 200, 50, 50);
 wall=createSprite(1500,200,60,height/2)
 car.shapeColor="teal";
}

function draw() {
  background(255,255,255);
  car.velocityX=speed;
   
  drawSprites();
}