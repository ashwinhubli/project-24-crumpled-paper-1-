const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var wall1,wall2,wall3;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(600,390,1200,5,ground_options);
    
    World.add(world,ground);
   var ball_options ={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
   ball = Bodies.circle(100,350,20,ball_options);
   World.add(world,ball)
   //push();
   wall1 = new DustbinWall(900,370,140,20);
   wall2 = new DustbinWall(820,330,20,100);
   wall3 = new DustbinWall(970,330,20,100);
   //fill();
   //pop();
    console.log(ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,20);
    ellipse(ball.position.x,ball.position.y,20);
    wall1.display();
    wall2.display();
    wall3.display();
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:80,y:-85});
  }




}