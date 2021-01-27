const mouseConstraints = Matter.mouseConstraints;
const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var chain1, chain2, chain3, chain4, chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, windowHeight);
	engine = Engine.create();
	world = engine.world;

	//let canvasmouse = Mouse.create(canvas.elt);
	//canvasmouse.pixelRatio = pixelDensity();
	//mouse : canvasmouse
	 
	//mConstraint = MouseConstraint.create(engine, options);
	//World.add(world, mConstraint);
   
	bob1 = new Pendulum(200,100,50,50);
	bob2 = new Pendulum(300,100,50,50);
	bob3 = new Pendulum(400,100,50,50);
	bob4 = new Pendulum(500,100,50,50);
	bob5 = new Pendulum(600,100,50,50);

	chain1 = new SlingShot(bob1.body, {x : 200, y: 50});
	chain2 = new SlingShot(bob2.body, {x : 300, y: 50});
	chain3 = new SlingShot(bob3.body, {x : 400, y: 50});
	chain4 = new SlingShot(bob4.body, {x : 500, y: 50});
	chain5 = new SlingShot(bob5.body, {x : 600, y: 50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();

   chain1.display();
   chain2.display();
   chain3.display();
   chain4.display();
   chain5.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY })
}

