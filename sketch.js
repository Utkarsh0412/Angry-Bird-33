const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var array1=[]
var gamestate="onSling"
var backgroundImage
function preload(){

  getTime()
}
function setup() {
  createCanvas(1200,400);
engine=Engine.create()
  world=engine.world
  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  ground=new Ground(600,390,1200,20);
  pig1=new Pig(810,350);
  log1=new Log(810,260,300,PI/2);
  box3=new Box(700,240,70,70);
  box4=new Box(920,240,70,70)
  pig3=new Pig(810,220)
  log3=new Log(810,180,300,PI/2);
  box5=new Box(810,160,70,70);
  log4=new Log(760,120,150,PI/7)
  log5=new Log(870,120,150,-PI/7)
  bird=new Bird(200,50)
  birdAngle=bird.body.angle;
  sling=new Slingshot(bird.body,{x:200,y:50})
  platform=new  Ground(150,305,300,170)
  array1.push(1)
  array1.push(2)
  console.log(array1)
}
  
function draw() {
  if(backgroundImage){
  background(backgroundImage);  
  }
Engine.update(engine)
box1.display()
box2.display()
ground.display()
pig1.display()
log1.display()
box3.display()
box4.display()
pig3.display()
log3.display()
box5.display()
log4.display()
log5.display()
bird.display()
sling.display()
platform.display();
}
function mouseDragged(){
  if(gamestate === "onSling"){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
  }
}
function mouseReleased(){
  sling.fly();
  gamestate="launched"
}
function keyPressed(){
  if(keyCode === 32){
    bird.trajectory=[]
  bird.body.speed=0.2
Matter.Body.setPosition(bird.body,{x:200,y:50})
Matter.Body.setAngle(bird.body,birdAngle)
 sling.attach();
 gamestate="onSling"
  }
}
async function getTime(){
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJson= await response.json()
  console.log(responseJson)
  var dateTime=responseJson.datetime
  console.log(dateTime)
  var hour=dateTime.slice(11,13)
  console.log(hour)
  if(hour>=19 || hour<=6){
 backgroundImage=loadImage("sprites/bg2.jpg")
 console.log("bg2")
  }
  else{
    backgroundImage=loadImage("sprites/bg.png")
  }
}