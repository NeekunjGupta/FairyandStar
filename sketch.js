const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var star,star2,starImg;
var fairy,fairyImg;
var bground,bgroundImg;
var music;
function preload()
{
   //preload the images here
  fairyImg = loadImage("images/fairy1.png");
  starImg =  loadImage("images/star.png");
  bgroundImg =  loadImage("images/starnight.png");
  //music = loadSound("sound/JoyMusic.mp3");
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
var option = {
  isStatic:true
}  
  star= Bodies.rectangle(650,50,30,30,option);
  World.add(world,star);
  bground = createSprite(200,200,50,50)
  bground.addImage("bg",bgroundImg);
  fairy = createSprite(100,550,50,50)
  fairy.addImage("fairy",fairyImg);
  fairy.scale=0.2
  fairy.setCollider("rectangle",0,0,1000,200)
  star2 = createSprite(650,50,30,30)
  star2.addImage("star",starImg);
  star2.scale=0.2
  Engine.run(engine)
}


function draw() {
 //music.loop();
 fairy.velocityX = 0 
  if(keyDown(RIGHT_ARROW)){
   fairy.velocityX = 2
 }
 if(keyDown(LEFT_ARROW)){
  fairy.velocityX = -2
}
star2.x=star.position.x;
star2.y=star.position.y;

  if(keyDown(DOWN_ARROW)){
    Matter.Body.setStatic(star,false)
  }
  if(star.position.y>500 && star2.y>500){
    Matter.Body.setStatic(star,true)
  }
  
  rectMode(CENTER);
  rect(650,50,30,30);  
  drawSprites();
}