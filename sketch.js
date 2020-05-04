const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,rainDrop;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);

  rainDrop1 = new rain(5, 20);
  rainDrop2 = new rain(5, 20);
  rainDrop3 = new rain(5, 20);
  rainDrop4 = new rain(5, 20);
  rainDrop5 = new rain(5, 20);
  rainDrop6 = new rain(5, 20);
  rainDrop7 = new rain(5, 20);
  rainDrop8 = new rain(5, 20);
  

 // createSprite(400, 200, 50, 50);
}

function draw() {
  Engine.update(engine);
  background(255,255,255);

  if (frameCount % 100 === 0) {
  rainDrop1 = new rain(5, 20);
  rainDrop2 = new rain(5, 20);
  rainDrop3 = new rain(5, 20);
  rainDrop4 = new rain(5, 20);
  rainDrop5 = new rain(5, 20);
  rainDrop6 = new rain(5, 20);
  rainDrop7 = new rain(5, 20);
  rainDrop8 = new rain(5, 20);
  }
  
  rainDrop1.display();
  rainDrop2.display();
  rainDrop3.display();
  rainDrop4.display();
  rainDrop5.display();
  rainDrop6.display();
  rainDrop7.display();
  rainDrop8.display();


 
  //drawSprites();
}