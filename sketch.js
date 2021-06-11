// Name       : Gun Kim
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

const MAIN_MENU = 0;
const GAME_SCREEN = 1;
let CurrentScreen = MAIN_MENU ;

let mover;
let obstacles = [];

function setup() {
  createCanvas(800, 400);
  mover = new Mover(200,370);

  
}

function draw() {
  background(0);

  switch( CurrentScreen )
  {   
    case MAIN_MENU : 
    {
      fill(255)
      textSize(30)
      text( 'START : ENTER ',100,100)
      text( 'JUMP : SPACE', 100,130)
      text( 'STOP TIME : D', 100, 160)
    }
    break;
   
    case GAME_SCREEN: {
    let gravity = createVector(0, 0.3);
    mover.applyForce(gravity);
    mover.update();
    mover.edges();
    mover.show();

    if(random(1) < 0.05)
    {
        obstacles.push(new Obstacles());
    }
    
      for( let o of obstacles )
      {
        o.move();
        o.show();
        
      if( mover.hits(o) )
      {
        fill(255)
        text( 'GAME OVER', 100,100 )
        noLoop();
      }
      }

      
      break;
    }
  }

      hit = collideCircleCircle( 50,50,50,50,50,50 )         
 
}
      
  


function keyPressed()
{
  switch(CurrentScreen)
  {
    case MAIN_MENU:
      {
        if(keyCode == '13')
        {
          CurrentScreen = GAME_SCREEN;
        }
      }
      break;

     case GAME_SCREEN:
       {
         if(keyCode == '13')
         {
           CurrentScreen = MAIN_MENU;
         }
       }   
       break;
  }



    //jump = space = 32
    if(keyCode == '32')
    {
    let jump = createVector(0, -5);
    mover.applyForce(jump);
    }


    
}




