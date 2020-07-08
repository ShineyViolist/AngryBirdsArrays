class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.path = [];
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png")
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x,this.body.position.y];
      this.path.push(position);
    }
    //console.log(this.path);
    for(var i = 0; i < this.path.length; i++){
      image(this.image2,this.path[i][0],this.path[i][1]);
    }
    super.display();
  }
}
