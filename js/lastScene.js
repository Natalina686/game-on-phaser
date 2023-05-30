class Lastscene extends Phaser.Scene {
    constructor() {
        super("finishGame");
    }
    create() {
        this.add.text(20, 20, "Finish...");
       
    }
}