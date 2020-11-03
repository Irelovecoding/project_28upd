class launcher{
    constructor(bodyA, p2){
        var options = {
            bodyA: bodyA,
           pointB: p2,
            stiffness: 0.04,
            length: 10
        }
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    display(){
        if (this.launcher.bodyA) {
            var pointA = this.launcher.bodyA.position;
            var pointB = this.launcher.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    attach(s1) {
this.launcher.bodyA = s1; 

    }


     fly() {
this.launcher.bodyA = null;
    }
}