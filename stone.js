class Stone {

    constructor(x, y, r) {
        var options={
            isStatic:0,
            restitution:0, 
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x, y, r, options);
    this.image = loadImage("Plucking mangoes/stone.png")
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