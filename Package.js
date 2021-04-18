class Package{

    constructor(x,y,width,height){
        var options ={
            restitution: 1.0
        }

       
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        

        rotate(angle);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}