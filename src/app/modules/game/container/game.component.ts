import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';
import { MainMenu } from "./scenes/MainMenu";
import { Game } from "./scenes/Game";

//const logoImg = require('/assets/logo.png');

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {

  constructor() { 
}

  ngOnInit(): void {

	const config: Phaser.Types.Core.GameConfig = {
	  title: "Hermes",
	  url: "https://github.com/digitsensitive/phaser3-typescript",
	  version: "1.0",
	  width: 1000,
	  height: 700,
	  type: Phaser.AUTO,
	  parent: "game",
	  scene: [ MainMenu, Game ],
	  input: {
	    keyboard: true,
	    mouse: false,
	    touch: false,
	    gamepad: false
	  },
	  physics: {
	    default: "arcade",
	    arcade: {
	      debug: false
	    }
	  },
	  backgroundColor: "#353535",
	  render: { pixelArt: false, antialias: true }
	};

	const game = new Phaser.Game(config);

	// function preload() {
	//   this.load.image("logo", logoImg);
	//   this.load.image("mapa", MapaImg);
	// }

	// function create() {

	//   this.add.image(533, 325, "mapa");
	//   const logo = this.add.image(400, 150, "logo");

	//   this.tweens.add({
	//     targets: logo,
	//     y: 450,
	//     duration: 2000,
	//     ease: "Power2",
	//     yoyo: true,
	//     loop: -1
	//   });
	// }

  }

}
