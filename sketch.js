
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var basketLeft;
var basketRight;

function preload(){}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	var paper_options ={
		restitution: 0.8
	};

	paper = Bodies.circle(200,450,30,paper_options);
	World.add(world,paper);

	//Create the Bodies Here.
	ground = new Ground(500,490,1000,10);
	basketLeft = new Ground(700,420,10,150);
	basketRight = new Ground(900,420,10,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.show();
  basketLeft.show();
  basketRight.show();

  fill(255);
  ellipse(paper.position.x, paper.position.y,30);
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(paper,paper.position,{x:0.1,y:-0.1});
	}
}

