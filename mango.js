
class mango{
    constructor(x,y,radius) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
            
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.image = loadImage("mango.png");
        World.add(world, this.body);
        this.radius = radius;


    }
   display() {
    var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2,this.radius*2);
        pop();

   }





}


