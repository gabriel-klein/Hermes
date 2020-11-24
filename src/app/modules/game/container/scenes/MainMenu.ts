import fundo from '../assets/fundo_cinza.png';
import mapa from '../assets/Mapa.png';
import button from '../assets/play-button.svg';

export class MainMenu extends Phaser.Scene {
  private startKey: Phaser.Input.Keyboard.Key;
  private bitmapTexts: Phaser.GameObjects.BitmapText[] = [];

  constructor() {
    super({
      key: 'MainMenu',
    });
  }

  init(): void {
    this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  }

  preload(): void {
    this.load.image('botao', button);
    this.load.image('mapa', mapa);
    this.load.image('fundo', fundo);
  }

  create(): void {
    const Mapa = this.add.image(500, 350, 'mapa');
    const colorBlack = new Phaser.Display.Color(0, 0, 0);
    var rect = this.add.rectangle(500, 350, 1300, 700, colorBlack.color);
    rect.alpha = 0.7;
    const Botao = this.add.sprite(500, 350, 'botao').setInteractive({ cursor: 'pointer' });
    Botao.setInteractive();

    const titulo = this.add.text(430, 50, 'Hermes', { fontFamily: 'Rufina', fontSize: '40px', color: '#b09666' });
    const enter = this.add.text(460, 270, 'Press Enter', { fontFamily: 'Georgia', fontSize: '18px', color: '#b09666' });
    const record = this.add.text(30, 30, 'Record: ', { fontFamily: 'Georgia', fontSize: '18px', color: '#b09666' });

    titulo.setInteractive();
    record.setInteractive();

    function esclarece(){
      rect.alpha = rect.alpha - 0.1;
      Botao.alpha = Botao.alpha - 0.1;
      titulo.alpha = titulo.alpha - 0.1;
      enter.alpha = enter.alpha - 0.1;
      record.alpha = record.alpha - 0.1;
    }

    function delay(delay: number) {
      return new Promise(r => {
          setTimeout(r, delay);
      })
    }

    Botao.on(
      'pointerdown',
      function (pointer) {

        (async () => { 

        setInterval(esclarece,50);

        await delay(500);


        if(rect.alpha == 0)
        {
          this.scene.start('Game');
        }
        })();
      },
      this
    );

    titulo.on('pointermove', function () {
      titulo.setColor('#dbb160');
    });

    titulo.on('pointerout', function () {
      titulo.setColor('#b09666');
    });

    record.on('pointermove', function () {
      record.setColor('#dbb160');
    });

    record.on('pointerout', function () {
      record.setColor('#b09666');
    });

    function pisca() {
      if (enter.visible == true) {
        enter.visible = false;
      } else {
        enter.visible = true;
      }
    }
    this.input.keyboard.on('keydown_ENTER',adeus,this)

      function adeus(this){

        (async () => { 

        setInterval(esclarece,50);

        await delay(500);


        if(rect.alpha == 0)
        {
          this.scene.start('Game');
        }
        })();

      }

    setInterval(pisca, 600);
  }

  update(){

    // if(this.startKey.isDown)
    // {
    //   this.scene.start('Game');
    // }
  }
}
