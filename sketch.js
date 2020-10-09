const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, ground, ball
function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create()
  world = engine.world
  var ground_option = {
    isStatic:true 
  }
ground = Bodies.rectangle(200,390,200,20,ground_option)
World.add(world, ground);

var ball_option = {
   restitution:3.0
}
ball = Bodies.circle(200,100,20,ball_option)
World.add(world,ball);


  /*object = Bodies.rectangle(200,100,50,50);
  World.add(world,object);
  console.log(object)
  console.log(object.type)
  console.log(object.position.x)
  console.log(object.position.y)*/
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20,20)
  drawSprites();
}