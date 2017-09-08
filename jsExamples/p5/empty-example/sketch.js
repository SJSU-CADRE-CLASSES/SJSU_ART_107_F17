function setup() {
   createCanvas(windowWidth,windowHeight);
   background(200);
}

function draw() {
    background(200);
    ellipse(mouseX, mouseY, 80, 80);
    console.log(mouseX,mouseY);
   

}
    
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}