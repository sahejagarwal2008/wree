var Engine = Matter.Engine
var World = Matter.World
var Bodies = Matter.Bodies
var Constraint = Matter.Constraint 

var engine,world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15
var string
var ball
var bg = "sprites/maxresdefault.jpg"

function setup(){
    var canvas = createCanvas(1000,600)
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(500,570,1000,40)
    box1 = new Box(550,550,50,50)
    box2 = new Box(600,550,50,50)
    box3 = new Box(650,550,50,50)
    box4 = new Box(700,550,50,50)
    box5 = new Box(750,550,50,50)
    box6 = new Box(575,500,50,50)
    box7 = new Box(625,500,50,50)
    box8 = new Box(675,500,50,50)
    box9 = new Box(600,500,50,50)
    box10 = new Box(650,450,50,50)
    box11 = new Box(700,450,50,50)
    box12 = new Box(750,450,50,50)
    box13 = new Box(675,400,50,50)
    box14 = new Box(725,400,50,50)
    box15 = new Box(700,350,50,50)
    ball = new Ball(100,100,50,50)
    string = new String(ball.body,{x:300,y:150})
}



   

function draw(){
    Engine.update(engine)
    background("bg");
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    ball.display();
    string.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

