"use strict";

let x = 500
let y = 380
let w = 50
let h = 50
let r = 155
let b = 155
let g = 20

function setup() {
    createCanvas(1800, 1000)

    console.log("go")

}

function draw() {
    background("black")
    push()
    noStroke()
    fill(r, g, b)
    ellipse(x, y, w, h)
    pop()

    push()
    noStroke()
    fill(r + 10, g + 50, b)
    ellipse(x + 300, y + 10, w - 5, h - 20)
    pop()

    push()
    noStroke()
    fill(r - 50, g - 20, b + 100)
    ellipse(x + 600, y + 50, w - 2, h + 100)
    pop()
}