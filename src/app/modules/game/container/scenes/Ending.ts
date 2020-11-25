export class Ending extends Phaser.Scene {

  private startKey: Phaser.Input.Keyboard.Key;

  constructor() {
    super({
      key: "Ending",
    });
  }

  init(): void {
    this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  }

  preload(): void {

  }

  create(): void {

  	var graphics;
  	const Mapa = this.add.image(500, 350, 'mapa');
    const colorBlack = new Phaser.Display.Color(0, 0, 0);
    const colorLaran = new Phaser.Display.Color(243,236,191)
    var rect = this.add.rectangle(500, 350, 1650, 700, colorBlack.color);
    rect.alpha = 0.7;
    var fundo_result = this.add.rectangle(500,350,600,400, colorLaran.color)

    graphics = this.add.graphics();

    graphics.lineStyle(2, 0xffff00, 1);

    //  32px radius on the corners
    graphics.strokeRoundedRect(32, 32, 300, 200, 32);

    graphics.lineStyle(4, 0xff00ff, 1);

    //  Using an object to define a different radius per corner
    graphics.strokeRoundedRect(360, 240, 400, 300, { tl: 64, tr: 22, bl: 12, br: 0 });
  }

  update(): void {

     if(this.startKey.isDown)
    {
      this.scene.start('MainMenu');
    }
  }
}
