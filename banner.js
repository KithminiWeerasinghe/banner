"use strict";

let targetX = new Array(7);
let targetY = new Array(7);
let circleSize = new Array(7);
let targetDX =new Array(7);
let targetDY = new Array(7);


let allCirclesDeleted = false;
let personX = 80;
let person;

function preload(){
    person = loadImage('images/person.png');
}

function setup(){
    createCanvas(1000,600);

    for(let i=0; i<targetX.length; i++){
        targetX[i] = random(width);
        targetY[i] = random(height);
        circleSize[i] = random(40, 60);
        targetDX[i] = random(-2, 2);
        targetDY[i] = random(-2, 2);
    }

    person.resize(250, 250);
}

function draw(){
    background(3, 4, 94);
    

    allCirclesDeleted = true;
    for(let i=0; i<targetX.length; i++){
        if(targetX[i] !== undefined){
            allCirclesDeleted = false;
        }
    }

    if(allCirclesDeleted){
        background(162, 210, 255);
        circlesDeleted();
        
    } else {
        rectMode(CENTER); //border looking thingy
        noFill();
        stroke(244, 202, 224);
        strokeWeight(20);
        rect(width/2, height/2, 1000, 600);

        DrawCircles();

        writeText(244, 202, 224, 2, 215, 185, 213, 20, BOLD, 'Click inside all the circles.', width/2, 350);
        writeText(202, 240, 248, 5, 144, 224, 239, 40, BOLD, 'CREATIVE CODING (1701ICT)', width/2, 200);
        writeText(202, 240, 248, 2, 144, 224, 239, 25, BOLD,'Griffith University, Gold Coast', width/2, 250);
        writeText(202, 240, 248, 2, 144, 224, 239, 25, BOLD,'learn JavaScript using p5.js', width/2, 300);

        if(mouseIsPressed){
            for(let i=0; i<targetX.length; i++){
                if(dist(mouseX, mouseY, targetX[i], targetY[i]) < circleSize[i]/2){
                    targetX[i]=undefined;
                    targetY[i]=undefined;
                    targetDX[i]=undefined;
                    targetDY[i]=undefined;
                }
            }
        }
    }
}

function DrawCircles(){
    for(let i=0; i<targetX.length; i++){
        if(targetX[i] !== undefined){
            stroke(215, 185, 213);
            strokeWeight(5);
            fill(173, 167, 201);
            ellipse(targetX[i], targetY[i], circleSize[i]);

            //speed
            targetX[i] += targetDX[i];
            targetY[i] += targetDY[i];

            //bounce
            if(targetX[i]<circleSize[i]/2 || targetX[i]> width-circleSize[i]/2){
                targetDX[i] = -targetDX[i]
            }

            if(targetY[i]<circleSize[i]/2 || targetY[i]>height-circleSize[i]/2){
                targetDY[i] = -targetDY[i]
            }
        }
    }
}

function writeText(r, g, b, w, R, G, B, tSize, style, content, x, y){
    textAlign(CENTER, CENTER);
    stroke(r, g, b);
    strokeWeight(w);
    fill(R, G, B);
    textSize(tSize);
    textStyle(style);
    text(content, x, y);
}


function circlesDeleted(){
    rectMode(CENTER);
    stroke(244, 202, 224);
    strokeWeight(15);
    fill(3, 4, 94);
    rect(width/2, height/2, 900, 500);

    noFill();
    stroke(244, 202, 224);
    strokeWeight(10);
    rect(width/2, height/2, 850, 450)

    writeText(244, 202,224, 3, 244, 202, 224, 40, BOLD, 'CREATIVE CODING (1701ICT)', width/2, 200);

    writeText(173, 167, 201, 2, 215, 185, 213, 25, BOLD, 'Unlock Your Creativity with p5.js', width/2, 250);
    writeText(173, 167, 201, 2, 215, 185, 213, 25, BOLD, 'Learn to Code Interactive Art & Graphics', width/2, 300);
    writeText(173, 167, 201, 2, 215, 185, 213, 25, BOLD, 'Join Our Course Today!', width/2, 350);

    image(person, personX, 350);
    personX = personX + 1;

    if(personX>920-200){
        personX=80;
    }

}
