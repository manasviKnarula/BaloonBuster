var bow , arrow,  playground, redballoon, pinkballoon, greenballoon ,blueballoon ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, playgroundImage;


function preload(){
  
  playgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(600, 600);
  
  //creating background
 playground = createSprite(150,150,600,600);
 playground.addImage(playgroundImage);
  playground.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
 
  blueballoon = createGroup();
  redballoon = createGroup();
  pinkballoon = createGroup();
  greenballoon = createGroup();
  arrowGroup = createGroup();
}

function draw() {

  // moving ground
   playground.velocityX = -3 

    if (playground.x < 0){
     playground.x = playground.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  if(arrowGroup.isTouching(redballoon)){
      redballoon.destroyEach();
      arrowGroup.destroyEach();
      score = score + 1;
  }
  if(arrowGroup.isTouching(blueballoon)){
      blueballoon.destroyEach();
      arrowGroup.destroyEach();
      score = score + 1;
  }
  if(arrowGroup.isTouching(greenballoon)){
      greenballoon.destroyEach();
      arrowGroup.destroyEach();
      score = score + 1;
  }
  if(arrowGroup.isTouching(pinkballoon)){   
      pinkballoon.destroyEach();
      arrowGroup.destroyEach();
      score = score + 1;
  }
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }


  
  drawSprites();
    textSize(20);  
    text("Score: "+ score, 500,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redballoon.add(red);
  return red
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueballoon.add(blue);
  return blue;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenballoon.add(green);
  return green;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkballoon.add(pink);
  return pink;
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow)
  return arrow;
}
