import PrintMouseCoords from '@games/print-mouse-coords';
import { getSoundManager, ISoundManager } from '@games/sound-manager';
import Phaser from 'phaser';
import styles from '../styles';

export default class SplashScene extends Phaser.Scene {
  soundManager: ISoundManager;
  mouseCoords: PrintMouseCoords;

  constructor() {
    super('SPLASH_SCENE');
    this.soundManager = getSoundManager(this);
  }

  async create() {
    this.mouseCoords = new PrintMouseCoords(this, '#0000ff')

    this.soundManager.load('boom', true);
    this.soundManager.setVolume('boom', 1);
    this.soundManager.play('boom');

    this.add.image(400, 300, 'sky');

    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    this.add.text(50, 50, 'Hello World!', styles.title2)

    await sleep(5000);

    this.scene.start('ANOTHER_SCENE');
  }

  update() {
    this.mouseCoords.update();
  }
}
