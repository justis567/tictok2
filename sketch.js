function setup() {
  createCanvas(1600,800);
  

  hr=hour()
  mn=minute()
  sc=second()
  angleMode(DEGREES)

  
}

function draw() {
  background("black");

  mnAngle=map(mn,0,60,0,360)
hrAngle=map(hr,0,100,0,360)
scAngle = map(sc,0,60,0,360)  


push()
rotate(scAngle)
stroke(255,0,0)
strokeWeight(7)
line(0,0,100,0)
pop()
stroke(255,0,0)
strokeWeight(7)
line(0,0,100,0)




  drawSprites();
}