var shooter,bgImg

function preload() {
  bgImg=loadImage("background1.webp")
}
function setup() {
  createCanvas(1500,800);
  shooter=createSprite(400, 200, 50, 50);

  bulletGroup=createGroup()

  bot1=createSprite(500,300,30,30)
  bot2=createSprite(800,500,30,30)
}

function draw() {
  background(bgImg);
 
  //w for moving up
  if(keyDown("w")) {
    shooter.y=shooter.y-2
  }

    //a for moving left
    if(keyDown("a")) {
      shooter.x=shooter.x-2
    }

      //s for moving down
  if(keyDown("s")) {
    shooter.y=shooter.y+2
  }

    //d for moving right
    if(keyDown("d")) {
      shooter.x=shooter.x+2
    }

   createBot()
  drawSprites();
}

function keyPressed() {
  if(keyCode==RIGHT_ARROW) {
    bullet=createSprite(shooter.x,shooter.y,10,10)
    bullet.velocityX=8
    bulletGroup.add(bullet)
  }

  if(keyCode==LEFT_ARROW) {
    bullet=createSprite(shooter.x,shooter.y,10,10)
    bullet.velocityX=-8
    bulletGroup.add(bullet)
  }

  if(keyCode==UP_ARROW) {
    bullet=createSprite(shooter.x,shooter.y,10,10)
    bullet.velocityY=-8
    bulletGroup.add(bullet)
  }

  if(keyCode==DOWN_ARROW) {
    bullet=createSprite(shooter.x,shooter.y,10,10)
    bullet.velocityY=8
    bulletGroup.add(bullet)
  }
}


function createBot() {
  if(frameCount%50==0) {
    botBullet=createSprite(bot1.x,bot1.y,8,8)
    if(shooter.x>bot1.x) {
      botBullet.velocityX=10
    }
    else if(shooter.x<bot1.x) {
      botBullet.velocityX=-10
    }
    else {
      if(shooter.y>bot1.y) {
        botBullet.velocityY=10
      }
      else if(shooter.y<bot1.y) {
        botBullet.velocityY=-10
      }
  }
}
}