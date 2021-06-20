var paper, dustbinRight, dustbinLeft, dustbinMiddle;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 650);


	engine = Engine.create();
	world = engine.world;

   paper1 = new Paper(150, 500, 10);   


   dustbinLeft = new Dustbin(640, 520, 10, 150);
   dustbinMiddle = new Dustbin(750, 590, 200, 10);
   dustbinRight = new Dustbin(851, 520, 10, 150);


   ground = new Ground(600, height-35, 1200, 15); 

   
   sling1= new SlingShot(paper1.body,{x:400,y:350});
  
  
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);


  dustbinRight.display();
  dustbinMiddle.display();
  dustbinLeft.display();

  paper1.display();
  
  ground.display();

  sling1.display();

  drawSprites();

}

function mouseDragged(){

  Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
  
  sling1.fly();
}
