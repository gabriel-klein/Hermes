import seila from "../assets/Mapa.png";

export class Game extends Phaser.Scene {

	constructor() {
	    super({
	      key: "Game"
	    });
  	}

  	preload(): void {
  		this.load.image("sei", seila);
	}

    create(): void {

    const logo2 = this.add.image(400, 150, "sei");

	this.tweens.add({
	    targets: logo2,
	    y: 450,
	    duration: 2000,
	    ease: "Power2",
	    yoyo: true,
	    loop: -1
	  	});
	}

}