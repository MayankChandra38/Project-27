// for name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
}

function setup() {
	createCanvas(800, 700);

	//for createting engine and world
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	
	//for creating support and balls
	Suprt = new Support(400,300,30,500);
	ball1 = new Ball(200,550,60);
	ball2 = new Ball(300,550,60);
	ball3 = new Ball(400,550,60);
	ball4 = new Ball(500,550,60);
	ball5 = new Ball(600,550,60);

	//for creating rope
	Rope1 = new ROPE(ball1.body,Suprt.body,-195,0)
	Rope2 = new ROPE(ball2.body,Suprt.body,-100,0);
	Rope3 = new ROPE(ball3.body,Suprt.body,0,0);
	Rope4 = new ROPE(ball4.body,Suprt.body,100,0);
	Rope5 = new ROPE(ball5.body,Suprt.body,195,0);

	//for running engine
	Engine.run(engine);
  
}

function draw() {
	//for setting background blue
	background("blue");

	//for updating engine
	Engine.update(engine);
	
	//for displaying classes
    Suprt.display();
    ball1.display();
	ball2.display();
  	ball3.display();
   	ball4.display();
	ball5.display();
	Rope1.display();
	Rope2.display();
	Rope3.display();
	Rope4.display();
	Rope5.display();

    //for displaying sprites
	drawSprites();
 
}