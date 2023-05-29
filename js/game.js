
let gameScene = new Phaser.Scene('Game');
 

let config = {
  type: Phaser.AUTO,  // Phaser  (WebGL или Canvas)
  width: 640, 
  height: 360, 
  scene: gameScene 
};
 
// создаем игру и передам ей конфигурацию
let game = new Phaser.Game(config);
