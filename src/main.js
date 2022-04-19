let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    fps: {
        target: 60,
    },
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyOne, keyR, keyLEFT, keyRIGHT, keyA, keyD, keyJ;

/*
Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20) : Rocket->Arrow, Spaceships->dragons, explosion->new
Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20)
Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20): new dragon that moves faster -> purple dragon
Replace the UI borders with new artwork (10): new background
Implement a simultaneous two-player mode (30)

Total: 100

Citation:
Jiatao Xu, from SJSU, he helps me with the artwork.
Calex Raffield, same class, he helps me to implement a new timer
*/