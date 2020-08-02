var compPaddle,playerPaddle, Ball;
var bottomEdge,topEdge;

function preload() {
  compPaddle=loadImage("Sprites/Doctor.jpg");
}

function setup() {  
  createCanvas(400,400);
  compPaddle=createSprite(20, 180, 10, 100);
  compPaddle.shapeColor = "cyan";
  playerPaddle=createSprite(380, 180, 10, 100);
  playerPaddle.shapeColor = "cyan";
  Ball=createSprite(200, 200, 20, 20);
  Ball.shapeColor = "magenta";
  Ball.velocityX = 3;
  Ball.velocityY = 3;
  
  bottomEdge=createSprite(200,400,400,10);
  topEdge=createSprite(200,0,400,10);

  }

function draw() {
  background(0); 
  createEdgeSprites();
  
  playerPaddle.y = World.mouseY;
  compPaddle.y = Ball.y;

  //fill("white");
  //for(var y=0; y>400; y=y+20){
  //line(this.position.x, this.position.y, this.position.x, this.position.y+10);
  //}

  Ball.bounceOff(bottomEdge);
  Ball.bounceOff(topEdge);
  Ball.bounceOff(playerPaddle);
  Ball.bounceOff(compPaddle); 

  if(Ball.x>400||Ball.x<0){
    compPaddle.x=20;
    compPaddle.y=180;
  }

  drawSprites();
}