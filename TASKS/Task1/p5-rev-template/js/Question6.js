"use strict";


function setup() {
    console.log("go")
    createCanvas(600, 600)
}

function draw() {
    background("#87ceeb")
    push();
    textSize(28);
    fill("white");
    noStroke();
    text('test', width / 2, width / 2);
    pop();

    for (let i = 0; i < 10; i++) {
        push();
        textSize(28);
        fill("white");
        noStroke();
        text(str(i), i * 4 * 10, 25);
        pop();
    }

    for (let i = 0; i < 16; i++) {
        push();
        textSize(28);
        fill("white");
        noStroke();
        text(str(i), 10, i * 4 * 10);
        pop();
    }
}