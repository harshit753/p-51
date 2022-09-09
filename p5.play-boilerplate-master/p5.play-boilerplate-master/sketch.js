var canvas
var backgroundImage, bullet_img
var player1_img, player2_img
var database, gameState
var form,player, playerCount

function preload() {
  backgroundImage = loadImage("assets/background.gif")
  player1_img = loadImage("assets/attacking_player-remove.png")
  player2_img = loadImage("assets/defencing_player-remove.png" )
  bullet_img = loadImage("assets/bullet_img-remove.png")
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  createSprite(400, 200, 50, 50);
  database = firebase.database()
  game = new Game()
  game.getSate(
  game.start()
  )
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}