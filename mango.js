class Mango {

    constructor(x, y, r) {
        var options={
            isStatic:true,
            restitution:1, 
            friction:1,
            density:0
        }
        this.body = Bodies.circle(x, y, r, options);
    this.image = loadImage("Plucking mangoes/mango1.png")
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("white");
        image(this.image, 0, 0, 0);
        pop();
      }
}