
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box, ball1, ball2, ball3, ball5;
var sling1,sling2, sling3, sling4, sling5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	box = new Box(400, 100, 500, 30)

	//bobs of the pendulum
	ball1 = new Ball(425, 500, 50);
	ball2 = new Ball(475, 500, 50);
	ball3 = new Ball(525, 500, 50);
	ball4 = new Ball(575, 500, 50);
	ball5 = new Ball(625, 500, 50);

	sling1 = new SlingShot(ball1.body, {x:175, y:100})
	sling2 = new SlingShot(ball2.body, {x:275, y:100})
	sling3 = new SlingShot(ball3.body, {x:375, y:100})
	sling4 = new SlingShot(ball4.body, {x:475, y:100})
	sling5 = new SlingShot(ball5.body, {x:575, y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(232,231,228);
  
  drawSprites();
  box.display();
  sling1.display();
  ball1.display();

  sling2.display();
  ball2.display();

  sling3.display();
  ball3.display();

  sling4.display();
  ball4.display();

  sling5.display();
  ball5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball5.body, ball5.body.position, {x:800, y:-800})
	}
  }

