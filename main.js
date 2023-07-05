function setup(){
    video=createCapture(VIDEO);
    video.size(500,550);
    video.position(100,120);

    canvas = createCanvas(500, 550);
    canvas.position((screen.width / 2) + 50, 120);
}