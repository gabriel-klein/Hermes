import logoImg from "./logo.png";

export class MainMenu extends Phaser.Scene {

  private startKey: Phaser.Input.Keyboard.Key;
  private bitmapTexts: Phaser.GameObjects.BitmapText[] = [];

  constructor() {
    super({
      key: "MainMenu"
    });
  }

  init(): void {
    this.startKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
  }

  create() {

  		var texto = this.add.text(0,0,"testando",{fontFamily:"Georgia", fontSize:"26px"})
        
    }

    update() {

        if (this.startKey.isDown) {
	      this.scene.start('Game');
	    }
    }
}