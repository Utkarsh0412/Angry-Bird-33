class Slingshot{
 constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10
      }
      this.sling=Constraint.create(options)   
      this.bodyA=bodyA;
      this.pointB=pointB
      World.add(world,this.sling)
      this.sling1=loadImage("sprites/sling1.png")
      this.sling2=loadImage("sprites/sling2.png")
      this.sling3=loadImage("sprites/sling3.png")
 }
display(){
    image(this.sling1,200,20)
    image(this.sling2,170,20)
    
    if(this.sling.bodyA!==null){

    
    var pointA=this.sling.bodyA.position
    var pointB=this.pointB
    push()
    strokeWeight(4)
    stroke("rgb(76,39,39)")
    if(this.sling.bodyA.position.x>200){
      strokeWeight(4)
      line(pointA.x+25,pointA.y,pointB.x-10,pointB.y)
      line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3)
      image(this.sling3,pointA.x+25,pointA.y-10,15,30)
    }
    else{

    strokeWeight(7)
line(pointA.x-25,pointA.y,pointB.x-10,pointB.y)
line(pointA.x-25,pointA.y,pointB.x+30,pointB.y-3)
image(this.sling3,pointA.x-30,pointA.y-10,15,30)
    }
pop()
    }
}
fly(){
this.sling.bodyA=null

}
attach(){
    this.sling.bodyA=this.bodyA
}
}
