// Name       : Gun Kim
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021


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
      text( 'RULE : R ', 100,130)
      push()
      textSize(100)
      text( 'FRYING MASTER',20,280)
      pop()
    }
    break;
    
    case RULE :
    {
      fill(255)
      text( 'JUMP : SPACE', 100,130)
      text( 'DASH DOWN : D', 100, 100)
      text( 'Use the jump to avoid the white ball' , 80 , 200)
      text( ' Hang in there and break your record.', 80, 230 )
      text( ' START : ENTER ', 100,300 )
      push()
      textSize(20)
      text('(Take advantage of the collision with the ground.)', 342 ,100 )
      pop()
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
        text( 'RESTART : ENTER', 100,130)
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
        if( keyCode == '82')
        {
          CurrentScreen = RULE;
        }
      }
      break;


    case GAME_SCREEN:
      {
        if (keyCode == '13')
        {
          CurrentScreen == MAIN_MENU;
        }
      }
      break;


      case RULE:
        {
          if (keyCode == '13')
          {
            CurrentScreen == GAME_SCREEN;
          }
        }
        break;
  
  }



    
    if(keyCode == '32')
    {
    let jump = createVector(0, -5);
    mover.applyForce(jump);
    }

    if( keyCode == '68' )
  {
    let dash = createVector(  0, 10)
    mover.applyForce(dash)
  }
    


    
  }






