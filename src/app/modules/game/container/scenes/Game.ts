import mapa from "./Mapa.png";

export class Game extends Phaser.Scene {

	private startKey: Phaser.Input.Keyboard.Key;

	constructor() {
	    super({
	      key: "Game"
	    });
  	}

  	init(): void {
    this.startKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
  }

  	preload(): void {
  		this.load.image("mapa", mapa);
	}

    create(): void {

    const Mapa = this.add.image(500, 350, "mapa");
	}

	update(): void {

		if (this.startKey.isDown) {
	      this.scene.start('MainMenu');
	    }
	}
}