izquierdaX=0;
izquierdaY=0;
derechaX=0;
derechaY=0;
function setup(){
    recta=createCanvas(300,300);
    recta.position(527,160);
    video=createCapture(VIDEO);
    video.hide();
    comen=ml5.poseNet(video,cook);
    comen.on('pose',girls);
}
function girls(resuelve){
    if (resuelve) {
        console.log(resuelve);
        derechaX=resuelve[0].pose.rightWrist.x;
        derechaY=resuelve[0].pose.rightWrist.y;
        izquierdaX=resuelve[0].pose.leftWrist.x;
        izquierdaY=resuelve[0].pose.leftWrist.y;
    }
    }
function preload(){
    music=loadSound("sonido.mp3");
}
function draw(){
    image(video,0,0,300,300);
    fill("pink");
    stroke("pulple");
   circle(derechaX,derechaY,20);
   circle(izquierdaX,izquierdaY,20);
}
function empieza() {
    music.play();
    music.setVolume(1);
    music.rate(1);
}
function cook(){
    console.log("LISTO ya esta el MODELO:) ");
  }