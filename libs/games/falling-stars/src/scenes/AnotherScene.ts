import { getSoundManager, ISoundManager } from '@games/sound-manager';
import Phaser from 'phaser';
import styles from '../styles';

export default class AnotherScene extends Phaser.Scene {
  soundManager: ISoundManager;

  constructor() {
    super('ANOTHER_SCENE');
    this.soundManager = getSoundManager(this);
  }

  async create() {
    this.soundManager.setVolume('boom', 0.5);

    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    this.add.text(50, 50, 'Hello World!', styles.title)

    await sleep(5000);

    this.scene.start('SPLASH_SCENE');
  }
}
