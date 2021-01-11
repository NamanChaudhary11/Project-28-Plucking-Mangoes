class Mango {
    constructor(x,y,radius){
        var opt = 
        {
            isStatic : true,
            friction : 1,
            restitution : 0
        }
        this.x=x;
        this.y=y;
        this.radius = radius;
        this.body = Bodies.circle(x,y,this.radius/2,opt);
        this.image = loadImage("mango.png")
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.pos;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*6.5, this.radius*6.5);
        pop();
    }
}