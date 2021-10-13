function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    
    fill(225, 100, 0);
    stroke(0, 100, 0);
    rect(30, 15, 575, 25);
    rect(590, 15, 25, 450);
    rect(30, 440, 575, 25);
    rect(20, 15, 25, 450);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(30, 30, 50);
    circle(600, 30, 50);
    circle(600, 450, 50);
    circle(30, 450, 50);

}

function take_snapshot(){
    student_name = document.getElementById("student_name").value;
    save(student_name);
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}