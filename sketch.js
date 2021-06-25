
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var dustbinObj, paperObject,groundObject	
var world;
var sling;


function setup() {
	createCanvas(1300, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/3,570,width,20);
	dustbinObj=new dustbin(900,550);
	//Create a Ground
	

	/*var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 900,
	    height: 700,
	    wireframes: false
	  }
	});*/

	Engine.run(engine);
	//Render.run(render);
  
	sling=new Slingshot(paperObject.body,{x:200,y:150});
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  sling.display();
 
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    sling.fly();
    //gameState = "launched";
}

