class ROPE{
    constructor(bodyA,bodyB,offsetX,offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 1,
            length :1,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
      }
      display(){
        var PointA = this.chain.bodyA.position;
        var PointB = this.chain.bodyB.position;

        strokeWeight(5);

        var Anchor1X = PointA.x;
        var Anchor1Y = PointA.y;

        var Anchor2X = PointB.x+this.offsetX;
        var Anchor2Y = PointB.y+this.offsetY;

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
      }
}