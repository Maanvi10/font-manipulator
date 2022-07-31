noseX=0;
noseY=0;

difference=0;

rightWristX = 0;
leftWristX= 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas= createCanvas(550, 550);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log('Posenet Is Initialized!');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log (results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log("noseX =" + noseX + "noseY ="+ noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX=" + leftWristX +"rightWristX=" + rightWristX + "difference=" + difference);
    }
}

function draw(){
    background('#ffbffc');
    fill('#0022ff');
    textSize(difference);
    text('Dear Children,Kindly Report to class 4a at 1:35pm if you have enrolled for Independence day program',20,200);
}


