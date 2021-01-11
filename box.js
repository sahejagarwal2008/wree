class Box{
    constructor(x,y,width,height){
        var options = {
            'restitution':10.0,
            'friction':10.0,
            'density':10.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        fill ("white")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
    }
}