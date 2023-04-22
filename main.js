noseX=0;
noseY=0;

function preload() {    
    clown_nose = loadImage('https://i.postimg.cc/HxHvgmRf/pngimg-com-heart-PNG51349.png')
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}
function modelLoaded(){
    console.log('PoseNet is Initialized')
}

function draw() {
    image(video, 0, 0, 400, 300);
    image(clown_nose, noseX-20, noseY-30, 40, 60)
}

function take_snapshot(){
    save('myFilterImage.png')
}