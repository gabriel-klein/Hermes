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
    const color_circ = new Phaser.Display.Color(0,0,0);

    //Rodada 1
    var rota1_pt1 = this.add.line(210,390,-0.9090,-5.3636,44,28,color1.color);
    var rota1_pt2 = this.add.line(210,397,44,28,87.9204,-21.9166,color1.color);
    var rota2 = this.add.line(230,380,-0.9090,-5.3636,87.9204,-21.9166,color2.color);
    var rota3_pt1 = this.add.line(210,380,-0.9090,-5.3636,44.6,20,color3.color);
    var rota3_pt2 = this.add.line(199,390,44.6,20,67.33,-23.33, color3.color);
    var rota3_pt3 = this.add.line(199,375,67.33,-26.33,90.29,-18.47,color3.color);
    var ponto_a = this.add.circle(186,365,5,color_circ.color);
    var a = this.add.text(182,358,'A', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' })
    var ponto_b = this.add.circle(275,350,5,color_circ.color);
    var b = this.add.text(272,343,'B', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' })

    //Rodada 2
    var rota4_pt1 = this.add.line(301,515,0,0,119,-15,color1.color);
    var rota4_pt2 = this.add.line(260,555,119,-15,160.04,-106.63,color1.color);
    var rota5 = this.add.line(316,555,2.5,4.5,161.52,-99.30,color2.color);
    var rota6_pt1 = this.add.line(290,533,0,-3.25,95,-48,color3.color);
    var rota6_pt2 = this.add.line(249,540,95,-48,83,-107,color3.color);
    var rota6_pt3 = this.add.line(280,510,83,-107,157.25,-107.625,color3.color);
    var ponto_a = this.add.circle(240,510,5,color_circ.color);
    var a = this.add.text(236,503,'A', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' })
    var ponto_b = this.add.circle(400,400,5,color_circ.color);
    var b = this.add.text(396,393,'B', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' })

    //Rodada 3
    var rota7_pt1 = this.add.line(666,481,0,0,-92,-24,color1.color);
    var rota7_pt2 = this.add.line(623,514,-92,-24,-98,-111,color1.color);
    var rota7_pt3 = this.add.line(650,478,-102.66,-115,-50,-111,color1.color);
    var rota8_pt1 = this.add.line(625,495,10,-3.09,-21.3,-46.66,color2.color);
    var rota8_pt2 = this.add.line(614,485,-21.3,-46.66,-12,-68,color2.color);
    var rota8_pt3 = this.add.line(627,475,-12,-68,-48,-69.3,color2.color);
    var rota8_pt4 = this.add.line(616,486,-48,-69.3,-33.3,-90.6,color2.color);
    var rota8_pt5 = this.add.line(610,487,-33.3,-90.6,-34.6,-113.3,color2.color);
    var rota9_pt1 = this.add.line(630,500,-1.27,4.36,16,-64,color3.color);
    var rota9_pt2 = this.add.line(633,487,16,-64,-8,-100,color3.color);
    var rota9_pt3 = this.add.line(636,490,-8,-100,-36,-137.3,color3.color);
    var rota9_pt4 = this.add.line(627,487,-36,-137.3,-46.8,-105.7,color3.color);
    var ponto_a = this.add.circle(620,465,5,color_circ.color);
    var a = this.add.text(616,458,'A', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' })
    var ponto_b = this.add.circle(573,362,5,color_circ.color);
    var b = this.add.text(569,355,'B', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' })

    //Rodada 4 
    var rota10_pt1 = this.add.line(1080,350,0,0,-641.3,-132,color1.color);
    var rota10_pt2 = this.add.line(938,358,-641.3,-132,-282.6,16,color1.color);
    var rota11_pt1 = this.add.line(900,318,20,-10,-296,-54.6,color2.color);
    var rota11_pt2 = this.add.line(313,186,-20,10,290,100,color2.color);
    var rota11_pt3 = this.add.line(854,340,-633,-137,-465,-29,color2.color);
    var rota11_pt4 = this.add.line(833,308,-442,-29,-268,18,color2.color);
    var ponto_a = this.add.circle(760,285,5,color_circ.color);
    var a = this.add.text(756,278,'A', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' })
    var ponto_b = this.add.circle(475,300,5,color_circ.color);
    var b = this.add.text(471,293,'B', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' })

    //Rodada 5 
    var rota12_pt1 = this.add.line(482,566,-4,0,68,-30,color1.color);
    var rota12_pt2 = this.add.line(447,576,68,-30,64,-81,color1.color);
    var rota12_pt3 = this.add.line(466,565,64,-81,21,-109,color1.color);
    var rota13_pt1 = this.add.line(450,557,5,2,30,-18,color2.color);
    var rota13_pt2 = this.add.line(448,557,30,-18,52,1,color2.color);
    var rota13_pt3 = this.add.line(440,569,52,1,58,-45,color2.color);
    var rota13_pt4 = this.add.line(451,578,58,-45,30,-105,color2.color);
    var rota14_pt1 = this.add.line(454,605,0,0,22,-108,color3.color);
    var ponto_a = this.add.circle(443,547,5,color_circ.color);
    var a = this.add.text(439,540,'A', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' })
    var ponto_b = this.add.circle(465,445,5,color_circ.color);
    var b = this.add.text(461,438,'B', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' })




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
