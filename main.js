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
    if (resuelve.length>0) {
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
    stroke("purple");
   circle(derechaX,derechaY,20);
   circle(izquierdaX,izquierdaY,20);
   if (izquierdaY>250) {
    music.setVolume(1);
    document.getElementById("dere").innerHTML="VOLUMEN: 1";
}
else if (izquierdaY>200 && izquierdaY<250) {
    music.setVolume(2);
    document.getElementById("dere").innerHTML="VOLUMEN: 1.8";
}
else if (izquierdaY>150 && izquierdaY<200) {
    music.setVolume(3);
    document.getElementById("dere").innerHTML="VOLUMEN: 2";
}
else if (izquierdaY>100 && izquierdaY<150) {
    music.setVolume(4);
    document.getElementById("dere").innerHTML="VOLUMEN: 3";
}
else if (izquierdaY>50 && izquierdaY<100) {
    music.setVolume(5);
    document.getElementById("dere").innerHTML="VOLUMEN: 4";
}
else if (izquierdaY>0 && izquierdaY<50) {
    music.setVolume(6);
    document.getElementById("dere").innerHTML="VOLUMEN: 5";
}

if (izquierdaY>250) {
    music.rate(1);
    document.getElementById("izqui").innerHTML="VOLUMEN: 1";
}
else if (izquierdaY>200 && izquierdaY<250) {
    music.rate(2);
    document.getElementById("izqui").innerHTML="VOLUMEN: 1.8";
}
else if (izquierdaY>150 && izquierdaY<200) {
    music.rate(3);
    document.getElementById("izqui").innerHTML="VOLUMEN: 2";
}
else if (izquierdaY>100 && izquierdaY<150) {
    music.rate(4);
    document.getElementById("izqui").innerHTML="VOLUMEN: 3";
}
else if (izquierdaY>50 && izquierdaY<100) {
    music.rate(5);
    document.getElementById("izqui").innerHTML="VOLUMEN: 4";
}
else if (izquierdaY>0 && izquierdaY<50) {
    music.rate(6);
    document.getElementById("izqui").innerHTML="VOLUMEN: 5";
}
}
function empieza() {
    music.play();
    music.setVolume(1);
    music.rate(1);
}
function cook(){
    console.log("LISTO ya esta el MODELO:) ");
  }