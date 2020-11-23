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

  create(): void {

  		const Mapa = this.add.image(500, 350, "mapa");
  		var colorBlack = new Phaser.Display.Color(0, 0, 0);
  		var rect = this.add.rectangle(500, 350, 1300, 700, colorBlack.color);
  		rect.alpha = 0.7;
  		var Botao = this.add.sprite(500, 350, "botao").setInteractive({ cursor: 'pointer' });
  		Botao.setInteractive();

  		var titulo = this.add.text(430,50,"Hermes",{fontFamily:"Rufina", fontSize:"40px", color:"#b09666"})
  		var enter = this.add.text(460,270,"Press Enter",{fontFamily:"Georgia", fontSize:"18px", color:"#b09666"})
  		var record = this.add.text(30,30,"Record: ",{fontFamily:"Georgia", fontSize:"18px", color:"#b09666"})

  		titulo.setInteractive();
  		record.setInteractive();

    	Botao.on('pointerdown', function (pointer) {

        	this.scene.start("Game");
    
    	}, this);

    	titulo.on('pointermove', function() {

    		titulo.setColor("#dbb160");
    	});

    	titulo.on('pointerout', function() {

    		titulo.setColor("#b09666");
    	});

    	record.on('pointermove', function() {

    		record.setColor("#dbb160");
    	});

    	record.on('pointerout', function() {

    		record.setColor("#b09666");
    	});

  		function functionupdate(){
	  		if ( enter.visible == true ){

	  		    enter.visible = false;
	  		}
	  		else
	  		{
	  			enter.visible = true;
	  		}
	  	}

	  	setInterval(functionupdate,600);
    }

    update() {

        if (this.startKey.isDown) {

	    	this.scene.start('Game');
	    }

    }
}