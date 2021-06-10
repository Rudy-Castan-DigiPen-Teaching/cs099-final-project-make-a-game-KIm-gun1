// Name       : Gun Kim
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021


class Obstacles
{
    constructor()
    {
      this.x = width;   
      this.y = random(0,100)
      this.y2 = random( 200,400)
    }

    move()
    {
        this.x -=16
    }
    
    show()
    {
        stroke(255)
        point( this.x, this.y )
        fill(255)
        rect( this.x, this.y2, random(10,100), 10 )
    }
}