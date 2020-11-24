import mapa from '../assets/Mapa.png';
import mapaJson from '../assets/Teste1.json';
import fundo from '../assets/fundo_cinza.png';

export class Game extends Phaser.Scene {
  private startKey: Phaser.Input.Keyboard.Key;

  constructor() {
    super({
      key: 'Game',
    });
  }

  init(): void {
    this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  }

  preload(): void {
    this.load.image('mapa', mapa);
    this.load.tilemapTiledJSON('mapaJson',mapaJson);
    this.load.image('fundo',fundo);
  }

  create(): void {
    const Mapa = this.add.image(500, 350, 'mapa');
    const tile = this.make.tilemap({ key: "mapaJson" });
    const color1 = new Phaser.Display.Color(179, 73, 73);
    const color2 = new Phaser.Display.Color(90, 104, 173);
    const color3 = new Phaser.Display.Color(232, 232, 151);

    //Rodada 1
    var rota1_pt1 = this.add.line(210,390,-0.9090,-5.3636,44,28,color1.color);
    var rota1_pt2 = this.add.line(210,397,44,28,87.9204,-21.9166,color1.color);
    var rota2 = this.add.line(230,380,-0.9090,-5.3636,87.9204,-21.9166,color2.color);
    var rota3_pt1 = this.add.line(210,380,-0.9090,-5.3636,44.6,20,color3.color);
    var rota3_pt2 = this.add.line(199,390,44.6,20,67.33,-23.33, color3.color);
    var rota3_pt3 = this.add.line(199,375,67.33,-26.33,90.29,-18.47,color3.color);

    //Rodada 2
    var rota4_pt1 = this.add.line(301,515,0,0,119,-15,color1.color);
    var rota4_pt2 = this.add.line(260,555,119,-15,160.04,-106.63,color1.color);
    var rota5 = this.add.line(316,555,2.5,4.5,161.52,-99.30,color2.color);
    var rota6_pt1 = this.add.line(290,533,0,-3.25,95,-48,color3.color);
    var rota6_pt2 = this.add.line(249,540,95,-48,83,-107,color3.color);
    var rota6_pt3 = this.add.line(280,510,83,-107,157.25,-107.625,color3.color);

    //Rodada 3
    var rota7_pt1 = this.add.line(666,481,0,0,-92,-24,color1.color);
    var rota7_pt2 = this.add.line(666,481,-92,-24,-50,-111,color1.color);



    // let rotas;

 //    var rotasLayer = tile.getObjectLayer("Rotas")['objects'];

 //    var rotas = tile.createFromObjects("Rotas", 1, {});
 //    rotas = this.physics.add.staticGroup()
 //    rotasLayer.forEach(object => {
 //    let obj = rotas.create(object.x, object.y, colorBlack.color); 
 //       obj.setScale(object.width/16, object.height/16); 
 //       obj.setOrigin(0); 
 //       obj.body.width = object.width; 
 //       obj.body.height = object.height; 
	// });

  }

  update(): void {
    if (this.startKey.isDown) {
      this.scene.start('MainMenu');
    }
  }
}
