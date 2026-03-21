"use strict"

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: function () { },
        create: function () { },
        update: function () { }
    },
    physics: {
        default: 'arcade',
    }
};

const game = new Phaser.Game(config);