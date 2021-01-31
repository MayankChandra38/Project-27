class Ball {
    constructor(x,y,radius) {
        var options = {
            isStatic:true,
            restitution:0.2,
            friction:0.3,
            density:0.1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        rotate(angle);
        strokeWeight(5);
        stroke("black")
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,40,40);
    }
}  