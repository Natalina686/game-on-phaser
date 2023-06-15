import { Game } from "./game"; 

// our game's configuration
export const config = {
  type: Phaser.AUTO,
  width: 940,
  height: 360,
  scene: [Game],
  physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 100 },
        },
      },
};

// create the game, and pass it the configuration
export const game = new Phaser.Game(config);


