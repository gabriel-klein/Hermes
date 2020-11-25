import { Component, OnInit } from '@angular/core';

import * as Phaser from 'phaser';
import { Observable } from 'rxjs';

import { GameService } from '../game.service';
import { Game } from './scenes/Game';
import { MainMenu } from './scenes/MainMenu';
import { Ending } from './scenes/Ending';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(private service: GameService) {}

  ranking$: Observable<any>;

  ngOnInit(): void {
    this.initGame();
    //this.ranking$ = this.service.getRanking();
  }

  private initGame(): void {
    const config: Phaser.Types.Core.GameConfig = {
      title: 'Hermes',
      url: 'https://github.com/digitsensitive/phaser3-typescript',
      version: '1.0',
      width: 1300,
      height: 700,
      type: Phaser.AUTO,
      parent: 'game',
      scene: [MainMenu, Game, Ending],
      input: {
        keyboard: true,
        mouse: true,
        touch: true,
        gamepad: true,
      },
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
        },
      },
      backgroundColor: '#d1d099',
      render: { pixelArt: false, antialias: true },
    };

    const game = new Phaser.Game(config);
    let rand;

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
