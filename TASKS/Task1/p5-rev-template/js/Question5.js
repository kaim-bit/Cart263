"use strict";
let overlap
let counter = 0
let radius = 75
let ellipseAlpha = 255
const s1 = {
    x: 100,
    y: 100,
    w: 75,
    h: 75,
    r: 255,
    g: 130,
    b: 0
}
const s2 = {
    x: 200,
    y: 100,
    s: 75,
    r: 255,
    g: 90,
    b: 0
}

function setup() {
    createCanvas(1000, 1000)


}

function draw() {
    ellipseAlpha = 255
    background(100)


    checkCollisionWithSquare()

    if (overlap) {
        s1.g = 150
    }
    else {
        s1.g = 130
    }


    // you said in the 3rd bonus you said to change the while to a for, even though you also said only while loops, i am going to use a for loop for this and i hope you accept because it said that i could.
    for (let circles = 0; circles <= counter; circles++) {
        if (counter < 10) {
            ellipseAlpha -= 20
            fill(255, 255, 255, ellipseAlpha)
            ellipse(width / 2, height / 2, circles * 10 + radius)
            console.log(circles)
        }
    }





    // push()
    // noStroke()
    // fill(100, 100, 100)
    // ellipse(width / 2, height / 2, radius)
    // pop()

    displaySquare()
}

function displaySquare() {
    push()
    noStroke()
    fill(s1.r, s1.g, s1.b)
    rect(s1.x, s1.y, s1.w, s1.h)
    pop()
}

function checkCollisionWithSquare() {
    overlap = mouseX > s1.x && mouseX < s1.x + s1.w && mouseY > s1.y && mouseY < s1.y + s1.h



}

function mousePressed() {


    if (overlap)
        counter += 1
}