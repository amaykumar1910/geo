class Iron {
    constructor(x,y,width,height) {
      var options = {
          'friction': 3,
          'restitution':0.8,
          'density':30
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push()
			translate(pos.x,pos.y);
			rectMode(CENTER)
            rotate(angle);
		    fill(150);
            rect(0,0, this.width, this.height);	
        pop()
      }
  };