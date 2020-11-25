import aviao from '../assets/aviao.png';
import caminhao from '../assets/caminhao.png';
import carro from '../assets/carro.png';
import botao from '../assets/Enviar Pedido.png';
import moto from '../assets/moto.png';
import navio from '../assets/navio.png';
import trem from '../assets/trem.png';

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
    this.load.image('botao_pedir', botao);
    this.load.image('carro', carro);
    this.load.image('caminhao', caminhao);
    this.load.image('moto', moto);
    this.load.image('trem', trem);
    this.load.image('navio', navio);
    this.load.image('aviao', aviao);
  }

  create(): void {
    const Mapa = this.add.image(500, 350, 'mapa');
    const color1 = new Phaser.Display.Color(179, 73, 73);
    const color2 = new Phaser.Display.Color(90, 104, 173);
    const color3 = new Phaser.Display.Color(232, 232, 151);
    let color_circ = new Phaser.Display.Color(0, 0, 0);
    const rodada = this.add.text(1110, 30, 'Rodada nº', { fontFamily: 'Georgia', fontSize: '18px', color: '#000' });
    const pontos = this.add.text(1050, 70, 'Pontos -  ', { fontFamily: 'Georgia', fontSize: '18px', color: '#000' });
    const dinheiro = this.add.text(1050, 110, 'Dinheiro - ', {
      fontFamily: 'Georgia',
      fontSize: '18px',
      color: '#000',
    });
    this.add.rectangle(1173, 140, 280, 1, color_circ.color);
    const modal = this.add.text(1050, 160, 'Modais ', { fontFamily: 'Georgia', fontSize: '18px', color: '#000' });
    let btn_pedir = this.add.image(1160, 400, 'botao_pedir');
    btn_pedir.setScale(0.6, 0.6);
    const carro = this.add.image(1070, 210, 'carro').setScale(0.03, 0.03);
    const caminhao = this.add.image(1130, 210, 'caminhao').setScale(0.09, 0.09);
    const moto = this.add.image(1190, 208, 'moto').setScale(0.2, 0.2);
    const trem = this.add.image(1240, 210, 'trem').setScale(0.07, 0.07);
    const navio = this.add.image(1070, 260, 'navio').setScale(0.15, 0.15);
    const aviao = this.add.image(1130, 260, 'aviao').setScale(0.2, 0.2);

    // Rodada 1
    let rota1_pt1 = this.add
      .rectangle(209, 384, 60, 2.8, color1.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende1(rota1_pt1);
        acende1(rota1_pt2);
      })
      .on('pointerout', () => {
        apaga1(rota1_pt1);
        apaga1(rota1_pt2);
      });
    rota1_pt1.rotation = 10;

    let rota1_pt2 = this.add
      .rectangle(253, 377, 60, 2.8, color1.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende1(rota1_pt1);
        acende1(rota1_pt2);
      })
      .on('pointerout', () => {
        apaga1(rota1_pt1);
        apaga1(rota1_pt2);
      });
    rota1_pt2.rotation = 40;

    const rota2 = this.add
      .rectangle(230, 355, 85, 2.8, color2.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende2(rota2);
      })
      .on('pointerout', () => {
        apaga2(rota2);
      });
    rota2.rotation = 6.1;

    let rota3_pt1 = this.add
      .rectangle(212, 378, 48, 2.8, color3.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende3(rota3_pt1);
        acende3(rota3_pt2);
        acende3(rota3_pt3);
      })
      .on('pointerout', () => {
        apaga3(rota3_pt1);
        apaga3(rota3_pt2);
        apaga3(rota3_pt3);
      });
    rota3_pt1.rotation = 9.9;

    let rota3_pt2 = this.add
      .rectangle(245, 365, 50, 2.8, color3.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende3(rota3_pt1);
        acende3(rota3_pt2);
        acende3(rota3_pt3);
      })
      .on('pointerout', () => {
        apaga3(rota3_pt1);
        apaga3(rota3_pt2);
        apaga3(rota3_pt3);
      });
    rota3_pt2.rotation = 2.1;

    let rota3_pt3 = this.add
      .rectangle(266, 345, 20, 2.8, color3.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende3(rota3_pt1);
        acende3(rota3_pt2);
        acende3(rota3_pt3);
      })
      .on('pointerout', () => {
        apaga3(rota3_pt1);
        apaga3(rota3_pt2);
        apaga3(rota3_pt3);
      });
    rota3_pt3.rotation = 0.3;

    let ponto_a = this.add.circle(186, 365, 5, color_circ.color);
    let a = this.add.text(182, 358, 'A', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' });
    let ponto_b = this.add.circle(275, 350, 5, color_circ.color);
    let b = this.add.text(272, 343, 'B', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' });
    // rota1_pt1.setInteractive();

    // ----------------------------------------------------------------------------------------------------
    // Rodada 2
    // var rota4_pt1 = this.add.line(301,515,0,0,119,-15,color1.color);
    let rota4_pt1 = this.add
      .rectangle(300, 501, 120, 2.8, color1.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende1(rota4_pt1);
        acende1(rota4_pt2);
      })
      .on('pointerout', () => {
        apaga1(rota4_pt1);
        apaga1(rota4_pt2);
      });
    rota4_pt1.rotation = 3;

    // var rota4_pt2 = this.add.line(260,555,119,-15,160.04,-106.63,color1.color);
    let rota4_pt2 = this.add
      .rectangle(378, 447, 100, 2.7, color1.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende1(rota4_pt1);
        acende1(rota4_pt2);
      })
      .on('pointerout', () => {
        apaga1(rota4_pt1);
        apaga1(rota4_pt2);
      });

    rota4_pt2.rotation = 1.99;

    // var rota5 = this.add.line(316,555,2.5,4.5,161.52,-99.30,color2.color);
    const rota5 = this.add
      .rectangle(320, 458, 190, 2.8, color2.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende2(rota5);
      })
      .on('pointerout', () => {
        apaga2(rota5);
      });
    rota5.rotation = 2.53;

    // var rota6_pt1 = this.add.line(290,533,0,-3.25,95,-48,color3.color);
    let rota6_pt1 = this.add
      .rectangle(290, 485, 105, 2.8, color3.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende3(rota6_pt1);
        acende3(rota6_pt2);
        acende3(rota6_pt3);
      })
      .on('pointerout', () => {
        apaga3(rota6_pt2);
        apaga3(rota6_pt3);
        apaga3(rota6_pt1);
      });
    rota6_pt1.rotation = 2.7;

    // var rota6_pt2 = this.add.line(249,540,95,-48,83,-107,color3.color);
    let rota6_pt2 = this.add
      .rectangle(330, 432, 63, 2.8, color3.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende3(rota6_pt1);
        acende3(rota6_pt2);
        acende3(rota6_pt3);
      })
      .on('pointerout', () => {
        apaga3(rota6_pt2);
        apaga3(rota6_pt3);
        apaga3(rota6_pt1);
      });
    rota6_pt2.rotation = 1.36;

    // var rota6_pt3 = this.add.line(280,510,83,-107,157.25,-107.625,color3.color);
    let rota6_pt3 = this.add
      .rectangle(359, 400, 74, 2.8, color3.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende3(rota6_pt2);
        acende3(rota6_pt3);
        acende3(rota6_pt1);
      })
      .on('pointerout', () => {
        apaga3(rota6_pt2);
        apaga3(rota6_pt3);
        apaga3(rota6_pt1);
      });

    ponto_a = this.add.circle(240, 510, 5, color_circ.color);
    a = this.add.text(236, 503, 'A', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' });
    ponto_b = this.add.circle(400, 400, 5, color_circ.color);
    b = this.add.text(396, 393, 'B', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' });

    // ----------------------------------------------------------------------------------------------------
    // Rodada 3
    // var rota7_pt1 = this.add.line(666,481,0,0,-92,-24,color1.color);
    let rota7_pt1 = this.add
      .rectangle(573, 458, 95, 2.8, color1.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende1(rota7_pt1);
        acende1(rota7_pt2);
        acende1(rota7_pt3);
      })
      .on('pointerout', () => {
        apaga1(rota7_pt1);
        apaga1(rota7_pt2);
        apaga1(rota7_pt3);
      });
    rota7_pt1.rotation = 0.25;

    // var rota7_pt2 = this.add.line(623,514,-92,-24,-98,-111,color1.color);
    let rota7_pt2 = this.add
      .rectangle(525, 405, 85, 2.8, color1.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende1(rota7_pt1);
        acende1(rota7_pt2);
        acende1(rota7_pt3);
      })
      .on('pointerout', () => {
        apaga1(rota7_pt1);
        apaga1(rota7_pt2);
        apaga1(rota7_pt3);
      });
    rota7_pt2.rotation = 1.5;

    // var rota7_pt3 = this.add.line(650,478,-102.66,-115,-50,-111,color1.color);
    let rota7_pt3 = this.add
      .rectangle(545, 364, 49, 2.8, color1.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende1(rota7_pt1);
        acende1(rota7_pt2);
        acende1(rota7_pt3);
      })
      .on('pointerout', () => {
        apaga1(rota7_pt1);
        apaga1(rota7_pt2);
        apaga1(rota7_pt3);
      });

    // var rota8_pt1 = this.add.line(625,495,10,-3.09,-21.3,-46.66,color2.color);
    let rota8_pt1 = this.add
      .rectangle(605, 447, 50, 2.8, color2.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende2(rota8_pt1);
        acende2(rota8_pt2);
        acende2(rota8_pt3);
        acende2(rota8_pt4);
        acende2(rota8_pt5);
      })
      .on('pointerout', () => {
        apaga2(rota8_pt1);
        apaga2(rota8_pt2);
        apaga2(rota8_pt3);
        apaga2(rota8_pt4);
        apaga2(rota8_pt5);
      });
    rota8_pt1.rotation = 0.9;

    // var rota8_pt2 = this.add.line(614,485,-21.3,-46.66,-12,-68,color2.color);
    let rota8_pt2 = this.add
      .rectangle(593, 417, 22, 2.8, color2.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende2(rota8_pt1);
        acende2(rota8_pt2);
        acende2(rota8_pt3);
        acende2(rota8_pt4);
        acende2(rota8_pt5);
      })
      .on('pointerout', () => {
        apaga2(rota8_pt1);
        apaga2(rota8_pt2);
        apaga2(rota8_pt3);
        apaga2(rota8_pt4);
        apaga2(rota8_pt5);
      });
    rota8_pt2.rotation = 1.8;

    // var rota8_pt3 = this.add.line(627,475,-12,-68,-48,-69.3,color2.color);
    let rota8_pt3 = this.add
      .rectangle(580, 405, 35, 2.8, color2.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende2(rota8_pt1);
        acende2(rota8_pt2);
        acende2(rota8_pt3);
        acende2(rota8_pt4);
        acende2(rota8_pt5);
      })
      .on('pointerout', () => {
        apaga2(rota8_pt1);
        apaga2(rota8_pt2);
        apaga2(rota8_pt3);
        apaga2(rota8_pt4);
        apaga2(rota8_pt5);
      });
    rota8_pt3.rotation = -0.04;

    // var rota8_pt4 = this.add.line(616,486,-48,-69.3,-33.3,-90.6,color2.color);
    let rota8_pt4 = this.add
      .rectangle(570, 395, 27, 2.8, color2.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende2(rota8_pt1);
        acende2(rota8_pt2);
        acende2(rota8_pt3);
        acende2(rota8_pt4);
        acende2(rota8_pt5);
      })
      .on('pointerout', () => {
        apaga2(rota8_pt1);
        apaga2(rota8_pt2);
        apaga2(rota8_pt3);
        apaga2(rota8_pt4);
        apaga2(rota8_pt5);
      });
    rota8_pt4.rotation = 2.1;

    // var rota8_pt5 = this.add.line(610,487,-33.3,-90.6,-34.6,-113.3,color2.color);
    let rota8_pt5 = this.add
      .rectangle(575, 375, 20, 2.8, color2.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende2(rota8_pt1);
        acende2(rota8_pt2);
        acende2(rota8_pt3);
        acende2(rota8_pt4);
        acende2(rota8_pt5);
      })
      .on('pointerout', () => {
        apaga2(rota8_pt1);
        apaga2(rota8_pt2);
        apaga2(rota8_pt3);
        apaga2(rota8_pt4);
        apaga2(rota8_pt5);
      });
    rota8_pt5.rotation = 1.5;

    // var rota9_pt1 = this.add.line(630,500,-1.27,4.36,16,-64,color3.color);
    let rota9_pt1 = this.add
      .rectangle(630, 435, 66, 2.8, color3.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende3(rota9_pt1);
        acende3(rota9_pt2);
        acende3(rota9_pt3);
      })
      .on('pointerout', () => {
        apaga3(rota9_pt1);
        apaga3(rota9_pt2);
        apaga3(rota9_pt3);
      });
    rota9_pt1.rotation = 1.8;
    // var rota9_pt2 = this.add.line(633,487,16,-64,-8,-100,color3.color);
    let rota9_pt2 = this.add
      .rectangle(612, 371, 82, 2.8, color3.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende3(rota9_pt1);
        acende3(rota9_pt2);
        acende3(rota9_pt3);
      })
      .on('pointerout', () => {
        apaga3(rota9_pt1);
        apaga3(rota9_pt2);
        apaga3(rota9_pt3);
      });
    rota9_pt2.rotation = 0.9;

    // var rota9_pt3 = this.add.line(636,490,-8,-100,-36,-137.3,color3.color);
    // var rota9_pt4 = this.add.line(627,487,-36,-137.3,-46.8,-105.7,color3.color);
    let rota9_pt3 = this.add
      .rectangle(580, 352, 28, 2.8, color3.color)
      .setInteractive({ cursor: 'pointer' })
      .on('pointermove', () => {
        acende3(rota9_pt1);
        acende3(rota9_pt2);
        acende3(rota9_pt3);
      })
      .on('pointerout', () => {
        apaga3(rota9_pt1);
        apaga3(rota9_pt2);
        apaga3(rota9_pt3);
      });
    rota9_pt3.rotation = 2;

    ponto_a = this.add.circle(620, 465, 5, color_circ.color);
    a = this.add.text(616, 458, 'A', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' });
    ponto_b = this.add.circle(573, 362, 5, color_circ.color);
    b = this.add.text(569, 355, 'B', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' });

    // Rodada 4
    // var rota10_pt1 = this.add.line(1080,350,0,0,-641.3,-132,color1.color);
    // var rota10_pt2 = this.add.line(938,358,-641.3,-132,-282.6,16,color1.color);
    // var rota11_pt1 = this.add.line(900,318,20,-10,-296,-54.6,color2.color);
    // var rota11_pt2 = this.add.line(313,186,-20,10,290,100,color2.color);
    // var rota11_pt3 = this.add.line(854,340,-633,-137,-465,-29,color2.color);
    // var rota11_pt4 = this.add.line(833,308,-442,-29,-268,18,color2.color);
    // var ponto_a = this.add.circle(760,285,5,color_circ.color);
    // var a = this.add.text(756,278,'A', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' })
    // var ponto_b = this.add.circle(475,300,5,color_circ.color);
    // var b = this.add.text(471,293,'B', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' })

    // Rodada 5
    // var rota12_pt1 = this.add.line(482,566,-4,0,68,-30,color1.color);
    // var rota12_pt2 = this.add.line(447,576,68,-30,64,-81,color1.color);
    // var rota12_pt3 = this.add.line(466,565,64,-81,21,-109,color1.color);
    // var rota13_pt1 = this.add.line(450,557,5,2,30,-18,color2.color);
    // var rota13_pt2 = this.add.line(448,557,30,-18,52,1,color2.color);
    // var rota13_pt3 = this.add.line(440,569,52,1,58,-45,color2.color);
    // var rota13_pt4 = this.add.line(451,578,58,-45,30,-105,color2.color);
    // var rota14_pt1 = this.add.line(454,605,0,0,22,-108,color3.color);
    // var ponto_a = this.add.circle(443,547,5,color_circ.color);
    // var a = this.add.text(439,540,'A', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' })
    // var ponto_b = this.add.circle(465,445,5,color_circ.color);
    // var b = this.add.text(461,438,'B', { fontFamily: 'Arial', fontSize: '10px', color: '#fff' })

    // teste.on('pointermove', () => {

    //  	acende1(teste);
    // });

    function acende1(rota) {
      const color = new Phaser.Display.Color(242, 51, 51);
      rota.setFillStyle(color.color);
    }
    function apaga1(rota) {
      rota.setFillStyle(color1.color);
    }

    function acende2(rota) {
      const color = new Phaser.Display.Color(28, 52, 173);
      rota.setFillStyle(color.color);
    }
    function apaga2(rota) {
      rota.setFillStyle(color2.color);
    }

    function acende3(rota) {
      const color = new Phaser.Display.Color(214, 214, 58);
      rota.setFillStyle(color.color);
    }
    function apaga3(rota) {
      rota.setFillStyle(color3.color);
    }

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
      this.scene.start('Ending');
    }
  }
}
