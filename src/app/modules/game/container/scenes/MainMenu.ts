import button from "../assets/play-button.svg";
import mapa from "../assets/mapa.png";
import fundo from "../assets/fundo_cinza.png";

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

  preload(): void {
  		this.load.image("botao", button);
  		this.load.image("mapa", mapa);
  		this.load.image("fundo", fundo);
	}

  create() {

  		const Mapa = this.add.image(500, 350, "mapa");
  		var colorBlack = new Phaser.Display.Color(0, 0, 0);
  		var rect = this.add.rectangle(500, 350, 1300, 700, colorBlack.color);
  		rect.alpha = 0.7;
  		var Botao = this.add.image(500, 350, "botao");
  		Botao.alpha = 0.5;

  		var titulo = this.add.text(430,50,"Hermes",{fontFamily:"Rufina", fontSize:"40px", color:"#b09666"})
  		var texto = this.add.text(460,270,"Press Enter",{fontFamily:"Georgia", fontSize:"18px", color:"#b09666"})
  		var texto = this.add.text(30,30,"Record: ",{fontFamily:"Georgia", fontSize:"18px", color:"#b09666"})

  		// this.input.on('pointerup', function () {

    //     //  darken the color by 10%
    //     color2.darken(10);

    //     rect2.setFillStyle(color2.color);

    //});


    }

    update() {

        if (this.startKey.isDown) {
	      this.scene.start('Game');
	    }

    }
}