import { getSoundManager, ISoundManager } from '@games/sound-manager';
import Phaser from 'phaser';

export default class SplashScene extends Phaser.Scene {
  soundManager: ISoundManager;

  constructor() {
    super('SPLASH_SCENE');
    this.soundManager = getSoundManager(this);
  }

  async create() {

    this.soundManager.load('boom', true);
    this.soundManager.setVolume('boom', 1);
    this.soundManager.play('boom');

    this.add.image(400, 300, 'sky');

    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    await sleep(5000);

    this.scene.start('ANOTHER_SCENE');
  }
}
