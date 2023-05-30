// our game's configuration
let config = {
    type: Phaser.AUTO,
    width: 940,
    height: 360,
    scene: [Introscene, Game, Lastscene]
  };
  
  // create the game, and pass it the configuration
  let game = new Phaser.Game(config);