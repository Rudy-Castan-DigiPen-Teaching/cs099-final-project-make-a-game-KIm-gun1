


class Obstacles
{
    constructor()
    {
      this.x = width;   
      this.y = random(0,100)
    }

    move()
    {
        this.x -=16
    }
    
    show()
    {
        stroke(255)
        point( this.x, this.y )
    }
}