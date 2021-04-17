
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var players,player1,player2;


var track,player1Img,player2Img;

function preload()
{
	player1Img=loadAnimation("images/boy1p.png","images/boy2p.png","images/boy3p.png","images/boy4.png","images/boy5.png","images/boy6.png","images/boy7.png","images/boy8.png");
	track=loadImage("images/track.jpg"); 
	player2Img=loadAnimation("images/run1.png","images/run2.png","images/run3.png","images/run4.png","images/run5.png","images/run6.png","images/run7.png","images/run8.png");
}

function setup() {
	canvas = createCanvas(displayWidth - 20, displayHeight-30);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



