class Ball{
    constructor(x, y, radius) {
      var options = {
        'restitution':1,
        'friction':1,
        'density':2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      stroke(1);
      fill(255,0,255);
      ellipseMode(RADIUS)
      ellipse(pos.x,pos.y,this.radius)
    }
  };