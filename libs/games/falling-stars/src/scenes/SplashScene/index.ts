import PrintMouseCoords from '@games/print-mouse-coords';
import Phaser from 'phaser';
import Background from './components/Background';
import MediaPlayer from './components/MediaPlayer';
import Menu from './components/Menu';
import Title from './components/Title';

export default class SplashScene extends Phaser.Scene {
  mouseCoords: PrintMouseCoords;
  menu: any

  constructor() {
    super('splash-scene');
  }

  create() {
    this.mouseCoords = new PrintMouseCoords(this, '#00ffff', true)
    MediaPlayer.playBackgroundSound();
    new Background(this)
    new Title(this)
    this.menu = new Menu(this)





    // function sleep(ms: number) {
      //   return new Promise((resolve) => setTimeout(resolve, ms));
      // }
      // await sleep(5000);

    // this.scene.start('platform-scene');
  }

  update() {
    this.mouseCoords.update();
    this.menu.update()
  }
}
