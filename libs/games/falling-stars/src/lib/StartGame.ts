import Phaser from 'phaser';
import scenes from '../scenes';

export default function startGame(): void {
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

  // eslint-disable-next-line no-new
  new Phaser.Game(config);
}
