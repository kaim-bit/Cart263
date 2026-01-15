"use strict";
let x = 500
let y = 500
let w = 200
let h = 200
let r = 155
let b = 155
let g = 155
function setup() {
    createCanvas(2400, 1000)
    background("black")
    drawEllipse(x, y, w, h, r, g, b)
    drawEllipse(x + 50, y - 50, w + 50, h + 50, r + 50, g + 50, b + 50)
    drawEllipse(x + 50 + 50, y + 50 + 50, w + 50 + 50, h + 50 + 50, r + 50 + 50, g + 50 + 50, b + 50 + 50)
}

function draw() {

}

function drawEllipse(x, y, w, h, r, g, b) {
    push()
    noStroke()
    fill(r, g, b)
    ellipse(x, y, w, h)
    pop()
}