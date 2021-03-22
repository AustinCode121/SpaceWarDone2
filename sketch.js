var player;
var score = 0;
var health = 0;
var START = 0
var PLAY = 1;
var WIN = 2
var LOSE = 3;
var gameState = START;
var spaceMobsGroup;
var spaceRock,mob1,mob2,mob3,spaceRockGroup;
var bullet;
var SpaceRockImage,mob1Image,mob2Image,mob3Image,mob4Image;
var playerImage;
var MobGroup1,MobGroup2,MobGroup3;
var ammo = 100;
var ammoGroup;
var gameState = START;
var playButton,playerGroup;
function preload(){
  SpaceRockImage = loadImage("SpaceRockImage.png");
  mob1Image = loadImage("Mob1Image.png");
  mob2Image = loadImage("Mob2Image.png");
  mob3Image = loadImage("Mob3Image.png");
  mob4Image = loadImage("SpaceMobKingImage.png");
  playerImage = loadImage("PlayerImage.png");
}
function setup() {
  createCanvas(800,400);
  playButton = createSprite(400,200,50,20);
  spaceMobsGroup = createGroup();
  ammoGroup = createGroup();
  MobGroup1 = createGroup();
  MobGroup2 = createGroup();
  MobGroup3 = createGroup();
spaceRockGroup = createGroup();
 edges = createEdgeSprites();
playerGroup = createGroup();
}

function draw() {
  background("purple"); 
 

 
   if(gameState === START){
    playButton.visible = true;
    if(mousePressedOver(playButton)){
      gameState = PLAY;
  }
  }
  if(gameState === PLAY){
    Play();
    playButton.visible = false;
  }
  if(gameState === WIN){
    playButton.visible = false;
  }
  if(gameState === LOSE){
    playButton.visible = false;
  }


  drawSprites();
}

 
function Play(){
  textSize(23);
    
    text("Ammo:"+ammo,100,20)
    player = createSprite(100, 200, 50, 50);
    playButton.visible = false;
    if(ammo === 0){
      strokeWeight(10)
     
      
    }
    if(keyDown("w")) {
      player.y = player.y - 10;
      console.log("AbC")
    }
    if(keyDown("s")) {
      player.y = player.y + 10;
    }
    createEdgeSprites();
    player.bounceOff(edges);
    if (keyDown("e") && ammo > 0 ){
      bullet = createSprite(200,player.y,50,10);
      bullet.lifetime = 800;
      ammo--;
       bullet.velocityX = 15;
       ammoGroup.add(bullet);
     }
   if(MobGroup1.isTouching(ammoGroup)){
    MobGroup1.destroyEach();
    ammo++;
    ammoGroup.destroyEach();
    score++;
   }
   if(MobGroup2.isTouching(ammoGroup)){
    MobGroup2.destroyEach();
    ammo++;
    ammoGroup.destroyEach();
    score++;
   }
  if(spaceRockGroup.isTouching(playerGroup)){
   gameState = LOSE;
  }
   if(MobGroup3.isTouching(ammoGroup)){
    MobGroup3.destroyEach();
    ammo++;
   ammoGroup.destroyEach();
   score++;
   }
    
}

  

