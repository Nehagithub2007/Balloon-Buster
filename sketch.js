var ground, groundImage;

var bow, bowImage;

var bal1,bal2,bal3,bal4;
var balpink,balgreen,balblue,balred;

var arrow, arrowImage;

var score;

var arrowGroup, pinkbGroup, redbGroup, greenbGroup, bluebGroup;

function preload(){
 //load your images here 
 
  groundImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png");
  
  balpink = loadImage("pink_balloon0.png");
  balgreen = loadImage("green_balloon0.png");
  balblue = loadImage("blue_balloon0.png");
  balred = loadImage("red_balloon0.png");
}

function setup() {
  createCanvas(400,510);
  
  //add code here
  ground = createSprite(200,380,550,10);
  ground.addImage("g",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -3;
  ground.scale = 1.95;
  
  score = 0;
  
  
  bow = createSprite(390,270,10,10);
  bow.addImage("b",bowImage);
  
  //textSize = 20;
  
  arrowGroup = createGroup();
  pinkbGroup = createGroup();
  redbGroup = createGroup();
  bluebGroup = createGroup();
  greenbGroup = createGroup();
}

function draw() {

  background("white");
  //add code here
  bow.y = World.mouseY;
  
  console.log(ground.width);
  
  if (keyDown("space")){
    createArrow();
    
  }
  if (arrowGroup.isTouching(redbGroup)){
    redbGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+5;
  }
  if (arrowGroup.isTouching(pinkbGroup)){
    pinkbGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+4;
  }
  if (arrowGroup.isTouching(bluebGroup)){
    bluebGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+2;
  }
  if (arrowGroup.isTouching(greenbGroup)){
    greenbGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  
  
 var select_bal = Math.round(random(1,4));
  
 if (frameCount % 80 === 0){
  if (select_bal === 1){
    pinkb();
  } 
  else if (select_bal === 2){
    greenb();
  }
  else if (select_bal===3){ 
    redb();
  }
  else {blueb();}
 }
  
  drawSprites();
  
  textSize(20);
  text("Score :"+ score,270,50);
}

function pinkb(){
  
  
 // for (i = 70; i<450; i=i+50 ){
    bal1 = createSprite(0,Math.round(random(20,330)),10,10);
    bal1.addImage("p",balpink);
    bal1.velocityX = 3;
    bal1.lifetime = 200;
    bal1.scale = 0.8;
    pinkbGroup.add(bal1);
  //}
}
function greenb(){
 // for (i = 140; i<400; i=i+50){
    bal2 = createSprite(0,Math.round(random(20,360)),10,10);
    bal2.addImage("b",balgreen);
    bal2.velocityX = 3;
    bal2.lifetime = 200;
    bal2.scale = 0.07;
    greenbGroup.add(bal2);  
  //}
}
function redb(){
  //for (i = 210; i<350; i=i+50){
    bal3 = createSprite(0,Math.round(random(20,370)),10,10);
    bal3.addImage("r",balred);
    bal3.velocityX = 3;
    bal3.lifetime = 200;
    bal3.scale = 0.08;
    redbGroup.add(bal3);
  //}
}
function blueb(){
  //for (i = 260; i<300; i=i+50){
    bal4 = createSprite(0,Math.round(random(20,390)),10,10);
    bal4.addImage("g",balblue);
    bal4.velocityX = 3;
    bal4.lifetime = 200;
    bal4.scale = 0.08;
    bluebGroup.add(bal4);
  //}
}
function createArrow(){
  
  arrow = createSprite(550,100,10,10);
  arrow.velocityX = -20;
  arrow.lifetime = 170;
  arrow.addImage("a",arrowImage);
  arrow.scale = 0.31;
  arrow.y = bow.y;
  arrowGroup.add(arrow);
  return arrow;
    
}