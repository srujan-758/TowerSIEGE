
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1= new Ground(400,668,320,20);
	ground2= new Ground(900,360,220,20);
	block1= new Block(300,330,42,60,"red");
	block2= new Block(342,330,42,60,"red");
	block3= new Block(384,330,42,60,"red");
	block4= new Block(426,330,42,60,"red");
	block5= new Block(468,330,42,60,"red");
	block6= new Block(510,330,42,60,"red");
	block7= new Block(342,270,42,60,"blue");
	block8= new Block(384,270,42,60,"blue");
	block9= new Block(426,270,42,60,"blue");
	block10= new Block(468,270,42,60,"blue");
	block11= new Block(384,210,42,60,"green");
	block12= new Block(426,210,42,60,"green");
	block13= new Block(405,150,42,60,"yellow");
	block14= new Block(816,250,32,32,"yellow");
	block15= new Block(852,250,32,32,"yellow");
	block16= new Block(884,250,32,32,"yellow");
	block17= new Block(912,250,32,32,"yellow");
	block18= new Block(944,250,32,32,"yellow");
	block19= new Block(976,250,32,32,"yellow");
	block20= new Block(852,200,32,32,"green");
	block21= new Block(884,200,32,32,"green");
	block22= new Block(916,200,32,32,"green");
	block23= new Block(948,200,32,32,"green");
	block24= new Block(884,150,32,32,"blue");
	block25= new Block(916,150,32,32,"blue");
	block26= new Block(903,100,32,32,"red");
	hex= new Hex(140,536,52,52);
	sling= new SlingShot(hex.body,{x:134,y:550});

	fill("blue");
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground1.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  hex.display();
}
function mouseDragged(){
	Matter.Body.setPosition(hex.body,{x:mouseX,y:mouseY});	
  }
  
  function mouseReleased(){
	  sling.fly();
	
	}


