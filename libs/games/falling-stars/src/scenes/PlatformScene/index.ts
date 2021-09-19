import Phaser from 'phaser';
import Dude from './components/Dude';


export default class PlatformScene extends Phaser.Scene {
  constructor() {
    super('platform-scene');
  }

  async create() {
    new Dude(this, 100, 200);
    // MediaPlayer.stopBackgroundSound()

    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await sleep(5000);

    this.scene.start('splash-scene');
  }
}
