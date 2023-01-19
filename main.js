function setup(){
    recta=createCanvas(300,300);
    recta.position(527,160);
    video=createCapture(VIDEO);
    video.hide();
}
function preload(){
    music=loadSound("sonido.mp3");
}
function draw(){
    image(video,0,0,300,300);
}
function empieza() {
    music.play();
    music.setVolume(1);
    music.rate(1);
}