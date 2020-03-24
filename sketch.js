//create the variables

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var track,car1_img,car2_img,car3_img,car4_img;

function preload()
{
//load animation 
bg=loadImage("images/background_for_form.gif");
track=loadImage("images/track.jpg");
car1_img=loadImage("images/car1.png");
car2_img=loadImage("images/car2.png");
car3_img=loadImage("images/car3.png");
car4_img=loadImage("images/car4.png");
ground=loadImage("images/ground.png");

}

function setup(){
  //create the canvas
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  //connect the database to firebase
  database = firebase.database();
  //start the game
  game = new Game();
  //read the gamestate from database
  game.getState();
  //start the game
  game.start();
}


function draw(){
  //update the game state
  if(playerCount === 4){
    game.update(1);
  }
  //start the game when game state is 1
  if(gameState === 1){
    clear();
    game.play();
  }
  // if game state is 2 end the game
  if(gameState===2)
  {
    game.end();
  }
}
