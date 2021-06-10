


// Name       : Gun Kim
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021


class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = 16;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.y >= height - this.r  ) {
      this.pos.y = height - 16;
      this.vel.y *= -0.7;
    }
  
    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  // hits(obstacles)
  // {
  //   return( this.pos.x + 15 , this.pos.y + 15 , 30,30,30  )
  // }

  update() {
 

    this.vel.add(this.acc );
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);

    let f = 0
    if(keyIsDown('68'))
    {
     f = 255
    }
 
    fill(f)
    ellipse(this.pos.x, this.pos.y , 30);

  
  }
}