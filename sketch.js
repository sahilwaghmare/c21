var car,wall,speed,weight

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);
bullet=createSprite(50, 200, 30, 10);
wall=createSprite(1200,200,thickness,height/2);
bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  if (hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
if(damage>10){
  wall.shapeColor=color(255,0,0);
}
if (damage<10){
  wall.shapeColor=color(0,255,0);
}
  } 
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletrightedge=lbullet.x+lwall.width
  wallleftedge=lwall.x
  if(bulletrightedge>=wallleftedge){
    return true
  }
  return false
}