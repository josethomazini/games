import getBaseurl from '@games/base-url';
import { IGame } from '@games/game-interface';
import Phaser from 'phaser';
import data from './data.json';
import scenes from './scenes';


function startGame(): void {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    parent: 'gameCanvas',
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
      default: 'arcade',
      arcade: {
        debug: process.env.NODE_ENV === 'development',
        gravity: {
          y: 300,
        },
      },
    },
    scene: scenes,
  };

  new Phaser.Game(config);
}

const fallingStars: IGame = {
  key: data.key,
  name: data.name,
  version: data.version,
  thumb: data.thumb,
  callable: startGame,
};

fallingStars.thumb = `${getBaseurl()}${fallingStars.thumb}`;

export default fallingStars;
