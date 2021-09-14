import Phaser from 'phaser';

export default class SplashScene extends Phaser.Scene {
  constructor() {
    super('SPLASH_SCENE');
  }

  create() {
    this.add.image(400, 300, 'sky');

    const config: any = {
      volume: 1,
      loop: 0,
    };
    const audio = this.sound.add('boom', config);

    audio.play();
  }
}
