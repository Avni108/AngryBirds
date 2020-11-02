var fixedRectangle;
var movingRectangle;

function setup() {
  createCanvas(800,400);

fixedRectangle = createSprite(600,200,70,70);
fixedRectangle.shapeColor = "green";
fixedRectangle.debug = true;
fixedRectangle.velocityX = -3;

movingRectangle = createSprite(300,200,50,50);
movingRectangle.shapeColor = "green";
movingRectangle.debug = true;
movingRectangle.velocityX = 3;

}

function draw() {
  background(255,0,157); 
  
  bounceOff(fixedRectangle,movingRectangle);
  drawSprites();
}


    
    


