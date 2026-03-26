"use strict"

const config = {
    type: Phaser.AUTO,
    width: 100,
    height: 1000,
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