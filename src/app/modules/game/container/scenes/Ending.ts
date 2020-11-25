import fundo from '../assets/fundo_laranja.png';
import miniFundo from '../assets/mini_fundo.png';
import mininiFundo from '../assets/mini_mini_fundo.png';
import pe_hermes from '../assets/pe_hermes.png';
import porta from '../assets/porta.png';

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

  	this.load.image('fundo',fundo);
  	this.load.image('miniFundo',miniFundo);
  	this.load.image('mininiFundo',mininiFundo);
  	this.load.image('pe_hermes',pe_hermes);
  	this.load.image('porta',porta);
  }

  create(): void {

  	var graphics;
  	const Mapa = this.add.image(500, 350, 'mapa');
    const colorBlack = new Phaser.Display.Color(0, 0, 0);
    const colorLaran = new Phaser.Display.Color(243,236,191)
    var rect = this.add.rectangle(500, 350, 1650, 700, colorBlack.color);
    rect.alpha = 0.7;
    var fundo = this.add.image(500,290,'fundo').setScale(0.7,0.5)
    var miniFundo = this.add.image(500,350,'miniFundo').setScale(0.7,0.7)
    var pe = this.add.image(425,222,'pe_hermes').setScale(0.7,0.7)
    var txtResul = this.add.text(445,210,"Resultado",{ fontFamily: 'Roboto', fontSize: '30px', color: '#000' })
    var txtDinG = this.add.text(330,255,"Dinheiro Gasto -  ",{ fontFamily: 'Georgia', fontSize: '18px', color: '#000' })
    var txtDinR = this.add.text(330,285,"Dinheiro Restante -  ",{ fontFamily: 'Georgia', fontSize: '18px', color: '#000' })
    var pontos = this.add.text(545,340,"XXX - Pontos",{ fontFamily: 'Georgia', fontSize: '15px', color: '#000' })
    
    function delay(delay: number) {
      return new Promise(r => {
          setTimeout(r, delay);
      })
    }

    function esclarece(){
      rect.alpha = rect.alpha - 0.1;
      fundo.alpha = fundo.alpha - 0.1;
      miniFundo.alpha = miniFundo.alpha - 0.1;
      txtResul.alpha = txtResul.alpha - 0.1;
      txtDinR.alpha = txtDinR.alpha - 0.1;
      pontos.alpha = pontos.alpha - 0.1;
      mininiFundo.alpha = mininiFundo.alpha - 0.1;
      menuPrin.alpha = menuPrin.alpha - 0.1;
      porta.alpha = porta.alpha - 0.1;
      pe.alpha = pe.alpha - 0.1;

    }

    var mininiFundo = this.add.image(500,420,'mininiFundo').setScale(0.7,0.7).setInteractive( {cursor: 'pointer'} )
    .on('pointerdown',adeus,this)

    var menuPrin = this.add.text(435,410,"Menu Principal",{ fontFamily: 'Roboto', fontSize: '14px', color: '#000' })
    .setInteractive( {cursor: 'pointer'} )
    .on('pointerdown',adeus,this)
    
    var porta = this.add.image(550,418,'porta').setInteractive( {cursor: 'pointer'} )
    .on('pointerdown',adeus,this)

    this.input.keyboard.on('keydown_ENTER',adeus,this)

     function adeus(this){

        (async () => { 

        setInterval(esclarece,50);

        await delay(500);


        if(rect.alpha == 0)
        {
          this.scene.start('MainMenu');
        }
        })();

      }

  }

  update(): void {

    //  if(this.startKey.isDown)
    // {
    //   this.scene.start('MainMenu');
    // }
  }
}
