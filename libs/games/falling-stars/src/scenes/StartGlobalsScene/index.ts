import { Globals } from '@games/preload-scene';
import Phaser from 'phaser';


export default class StartGlobalsScene extends Phaser.Scene {
  constructor() {
    super('start-globals-scene');
  }

  create() {
    Globals['musicPlaying'] = false;

    this.scene.start('splash-scene');
  }
}
