var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(40,200,50,50);
  bullet.shapeColor="white";
  wall=createSprite(1500,200,60,height/2);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      bullet.shapeColor="red";
    }
    if(damage<10)
    {
      bullet.shapeColor="green";
    }
  }
  drawSprites();
}