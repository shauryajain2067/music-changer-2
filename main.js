haryy_potter="";
peter_pan="";

function preload(){
    peter_pan=loadSound("music.mp3");
     harry_potter=loadSound("music2.mp3"); 
}

function setup(){
    
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
  
}

function draw(){
    image(video,0,0,600,500);
}
    
