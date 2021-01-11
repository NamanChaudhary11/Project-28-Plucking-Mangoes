
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyImg,tree,treeImg;

function preload()
{
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
	
}

function setup() {
	createCanvas(1020,620);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	stone = new Stone(600,300,70);
	slingshot = new SlingShot(stone.body,{x:130, y:450});
	mango1 = new Mango(880,240,11);
	mango2 = new Mango(780,220,12);
	mango3 = new Mango(750,130,14);
	mango4 = new Mango(950,200,14);
	mango5 = new Mango(850,130,12);
	mango6 = new Mango(700,250,14);
	ground = new Ground(1000,610,2000,25);
	
	Engine.run(engine);
	  
}


function draw() {

    rectMode(CENTER);
	background("red");
	
    push(); 
	
    drawSprites();
    imageMode(CENTER);
    image(boy,210,520,260,310);
	image(tree,800,310,400,580);
	
	
	slingshot.display();
	stone.display();
	ground.display();
	
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	
	detectcollision(stone,mango1);
	detectcollision(stone,mango2);
	detectcollision(stone,mango3);
	detectcollision(stone,mango4);
	detectcollision(stone,mango5);
	detectcollision(stone,mango6);

}


  function mouseDragged()
  {
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
  }

  function mouseReleased()
  {
   slingshot.fly();
  }


  function detectcollision(a,b)
  {
	var distance = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(distance<=50)
	{
		Matter.Body.setStatic(b.body,false);
	}
  }


 function keyPressed()
 {
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body,{x:235, y:420})
		slingshot.attach(stone.body);
	}
 }