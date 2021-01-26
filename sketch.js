var mouse, mouseImage;
var cat, catImage1,catImage2,catImage3;
var ground, groundImage;
function preload() {
    //load the images here
    mouseImage = loadImage("images/jerryOne.png");
    groundImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
}

function draw() {
    background(groundImage);
    //Write condition here to evalute if tom and jerry collide
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
