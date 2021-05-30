function setup(){
    canvas =  createCanvas(500,500);
     canvas.center();
 video = createCapture(VIDEO)
 video.size(300,300)
 video.hide()
}

document.getElementById("here") = canvas ; 

function draw(){
    image(video,175,180,150,150)
    fill(255,0,0)
    stroke(0,0,129)
    circle(50,450,100)
    circle(50,50,100)
    circle(450,450,100)
    circle(450,50,100)
    fill(0,0,129)
    stroke(255,0,0)
    rect(100,450,300,10)
    rect(100,50,300,10)
    rect(450,100,10,300)
    rect(50,100,10,300)
}