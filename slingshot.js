class SlingShot{
    constructor(bodyA, pointB){
        var options1 = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.002,
            length:6
        }
        this.slingShot = Constraint.create(options1);
        World.add(world, this.slingShot);
    }
    
    display(){
        if(this.slingShot.bodyA != null){
        var pointA = this.slingShot.bodyA.position;
        var pointB = this.slingShot.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.slingShot.bodyA = null;
    }
    attach(){
        this.slingShot.bodyA = stone.body;   
    }
    
}
