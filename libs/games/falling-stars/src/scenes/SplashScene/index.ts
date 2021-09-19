import PrintMouseCoords from '@games/print-mouse-coords';
import Phaser from 'phaser';
import data from '../../data.json';
import styles from '../../styles';
import MediaPlayer from './components/MediaPlayer';

export default class SplashScene extends Phaser.Scene {
  mouseCoords: PrintMouseCoords;
  songPlaying: boolean;
  soundManager: any


  constructor() {
    super('splash-scene');

    this.songPlaying = false;
    this.mouseCoords = new PrintMouseCoords(this, '#0000ff')
  }

  private drawBackground() {
    this.add.image(400, 300, 'sky')
  }

  private drawTitle() {
    this.add.text(70, 100, data.name, styles.splashTitle)
  }

  private drawMenu() {
    this.add.text(350, 300, 'Play', styles.splashMenuItem)
    this.add.text(320, 400, 'Credits', styles.splashMenuItem)
  }

  private draw() {
    this.drawBackground();
    this.drawTitle();
    this.drawMenu();
  }



  async create() {
    this.mouseCoords.create()
    MediaPlayer.playBackgroundSound();
    this.draw()





    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await sleep(5000);

    this.scene.start('platform-scene');
  }

  update() {
    this.mouseCoords.update();
  }
}
