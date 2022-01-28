var quemuel
function setup() {
  createCanvas(1080,720);
  quemuel=createSprite(540,360,203,195)
}

function draw() 
{
  background("darkcyan");
  if (keyIsDown(RIGHT_ARROW))
  {
   quemuel.position.x=quemuel.position.x+5
   background("grey");
  }
  if (keyIsDown(LEFT_ARROW))
  {
    background("yellow");
   quemuel.position.x=quemuel.position.x-5
  }
  if (keyIsDown(DOWN_ARROW))
  {
   quemuel.position.y=quemuel.position.y+5
   background("darkred");
  }
  if (keyIsDown(UP_ARROW))
  {
   quemuel.position.y=quemuel.position.y-5
   background("violet");
  }
  drawSprites()
}










































//pablo pablo pablo