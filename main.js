/// <reference path="p5js/TSDef/p5.global-mode.d.ts" />


new p5();

let CW = windowWidth /100;
let RH = windowHeight /100;

let time = {
    t: 0
};

function setup () {
    createCanvas(windowWidth, windowHeight);
    background(0)
    stroke(100);
}

function draw () {
    translate(500, 400);
    // rotate(PI);
    background(0);
    time.t = time.t + deltaTime/10000;
    gridlines();
    stroke(255, 0, 0);
    noFill()
    // circle_curve(3, -2, 0);
    // linear_line(-2, 2);
    // quadratic_curve(-1,0, 0);
    // cubic_curve(1, 0, 0);
    // elipse_curve(-5,3,4,5);
    // parabolic_curve(0, 0, 1, 1);
    // Hyperbola_curve(0,0,1,2,-1);
    poly_curve(-1, [1]);
}

function windowResized() {
    CW = windowWidth /100;
    RH = windowHeight /100;
    resizeCanvas(windowWidth, windowHeight);

}


let scale = 40;
function gridlines () {
    stroke(100);
    for (let i= -100; i< 100; i++) {
        line(-2000, i*scale, 2000,i*scale);
        stroke(150);
        text(i, i* scale + 5,15);
        text(-i, -15 ,i* scale -5);
        stroke(100);
        for (let j= -100; j<100; j++) {
            line(i*scale, -1000, i*scale, 1000);
        }
    }
    stroke(255);
    line (0, 20 * scale, 0, -20* scale);
    line (20* scale, 0, -20* scale, 0);
}


