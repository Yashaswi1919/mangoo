class Stone extends BaseClass{
    constructor(x,y){
        super(x,y,100,50);
        this.image=loadImage("images/stone.png");
        this.trajectory=[];
    }
      
    
    display(){
        
        super.display();
        if(this.body.velocity.x > 10 && this.body.position.x > 150){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }
       
    }
}