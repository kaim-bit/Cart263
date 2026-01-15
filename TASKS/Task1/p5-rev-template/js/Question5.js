"use strict";
let overlap
let counter = 0
let radius = 75
let flib = 100
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
    console.log("go")

}

function draw() {
    background(100)


    checkCollisionWithSquare()

    if (overlap) {
        s1.g = 150
    }
    else {
        s1.g = 130
    }
    // background("black")
    noFill()
    stroke("green")
    strokeWeight(2)

    for (let circles = 0; circles < 10; circles++) {
        if (counter < 10) {

            fill(0, 0, 0, flib)
            ellipse(width / 2, height / 2, counter * 10 + radius)

        }
    }



    console.log(counter)

    push()
    noStroke()
    fill(100, 100, 100)
    ellipse(width / 2, height / 2, radius)
    pop()

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
    flib -= 20

    if (overlap)
        counter += 1
}