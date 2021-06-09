// Name       : Gun Kim
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

let mover;
let obstacles = [];

function setup() {
  createCanvas(800, 400);
  mover = new Mover(200,370);
}

function draw() {
  background(0);
    
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
     

  }
  
}

function keyPressed()
{
    //jump = space = 32
    if(keyCode == '32')
    {
    let jump = createVector(0, -5);
    mover.applyForce(jump);
    }




}


