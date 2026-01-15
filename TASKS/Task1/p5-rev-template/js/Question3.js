"use strict";
let x1 = 100
let y1 = 100

let y2 = 100

let x = 100
let y = 100
let w = 50
let h = 50
let r = 155
let b = 155
let g = 20
function setup() {
    createCanvas(500, 500)
    background("black")
    console.log("go")

}

function draw() {
    y2 += 2
    background("black")
    push()
    noStroke()
    fill(r - 200, g, b)
    rect(x1, y, w,)
    pop()

    push()
    noStroke()
    fill(r + 200, g, b)
    rect(x, y1, w,)
    pop()

    push()
    noStroke()
    fill(r, g, b + 100)
    rect(x, y2, w,)
    pop()

    if (y2 == 500) {
        y2 = 100
    }
}

function mousePressed() {
    console.log("alak")
    x1 += 10
}

function keyPressed() {
    if (key === " ") {
        y1 += 20
    }
}