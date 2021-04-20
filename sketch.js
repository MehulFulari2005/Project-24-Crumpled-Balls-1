
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(400, 630, 800, 20);

	base = new Dustbin(610, 610, 150, 20);
    
	leftside = new Dustbin(525, 570, 20, 100);
    
	rightside = new Dustbin(695, 570, 20, 100);
    
	paper = new Paper(100, 600, 15);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
 
  base.display();
  
  leftside.display();
  
  rightside.display();
  
  paper.display();

  drawSprites();
 
}


function keyPressed(){
   if(keyCode === UP_ARROW) {
	  
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:35, y:-35})
   }

}