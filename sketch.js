const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var ground, wall;

function setup() {
  var canvas = createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  var ground_options ={
    isStatic: true
  }

  ground = Bodies.rectangle(400,390,400,20,ground_options);
  World.add(world,ground);

  var ball_options ={
   restitution: 0.8
  }

  ball = Bodies.circle(400,200,40,ball_options);
  World.add(world,ball);

  console.log(ground.position.x, ground.position.y);
}

function draw() {
  background(0);  

  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 40, 40);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  
  drawSprites();
}