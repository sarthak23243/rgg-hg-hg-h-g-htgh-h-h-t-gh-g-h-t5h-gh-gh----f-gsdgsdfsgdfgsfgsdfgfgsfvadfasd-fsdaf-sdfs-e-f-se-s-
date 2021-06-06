leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
music = "";
function setup() {
    canvas = createCanvas(600, 550);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function preload() {
    music = loadSound("music.mp3");
}
function draw(){
    image(video, 0, 0, 600, 550);
}
function playsong() {
    music.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded() {
    console.log("MODEL IS LOADED");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log(" leftWristX " + leftWristX + " leftWristY " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log(" RightW;ristX " + rightWristX + " RightWristY " + rightWristY);
    }
}