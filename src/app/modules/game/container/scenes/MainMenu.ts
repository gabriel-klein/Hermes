import logoImg from "../assets/logo.png";

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

  // preload(): void {
  //   this.load.bitmapFont(
  //     "asteroidFont",
  //     "./src/modules/game/container/assets/font/asteroidFont.png",
  //     "./src/modules/game/container/assets/font/asteroidFont.fnt"
  //   );
  // }

  // create(): void {
  //   this.bitmapTexts.push(
  //     this.add.bitmapText(
  //       this.sys.canvas.width / 2 - 150,
  //       this.sys.canvas.height / 2 + 40,
  //       "asteroidFont",
  //       "PRESS S TO PLAY",
  //       45
  //     )
  //   );

  //   this.bitmapTexts.push(
  //     this.add.bitmapText(
  //       this.sys.canvas.width / 2 - 150,
  //       this.sys.canvas.height / 2 - 60,
  //       "asteroidFont",
  //       "A S T E R O I D",
  //       80
  //     )
  //   );

  //   this.bitmapTexts.push(
  //     this.add.bitmapText(
  //       this.sys.canvas.width / 2 - 150,
  //       this.sys.canvas.height / 2 + 80,
  //       "asteroidFont",
  //       "HIGHSCORE: " ,
  //       45
  //     )
  //   );
  // }

  update(): void {
    if (this.startKey.isDown) {
      this.scene.start('Game');
    }
  }

  preload(): void {
  		this.load.image("logo", logoImg);
	}

  create(): void {

  const logo = this.add.image(400, 150, "logo");

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  	});
  }

}