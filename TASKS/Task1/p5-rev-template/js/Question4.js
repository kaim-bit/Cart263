"use strict";
let x = 0
let y = 0
let w = 50
let h = 50
let r = 0
let r1 = 0
let r2 = 0
let g = 0
let g1 = 0
let g2 = 0
let b = 100
let b1 = 160
let b2 = 255


function setup() {
    createCanvas(1000, 1000)
    background("black")
    console.log("go")

}

function draw() {
    if (mouseX <= width / 3) {
        r = 255
        g = 255
        b = 255
    }
    else {
        r = 0
        g = 0
        b = 100
    }

    if (mouseX >= width / 3 && mouseX <= width / 3 + width / 3) {
        r1 = 255
        g1 = 255
        b1 = 255
    }
    else {
        r1 = 0
        g1 = 0
        b1 = 160
    }

    if (mouseX >= width / 3 + width / 3) {
        r2 = 255
        g2 = 255
        b2 = 255
    }
    else {
        r2 = 0
        g2 = 0
        b2 = 255
    }


    background("black")
    push()
    noStroke()
    fill(r, g, b)
    rect(x, y, width / 3, height)
    pop()

    push()
    noStroke()
    fill(r1, g1, b1)
    rect(width / 3, y, width / 3, height)
    pop()

    push()
    noStroke()
    fill(r2, g2, b2)
    rect(width / 3 + width / 3, y, + width / 3, height)
    pop()
}