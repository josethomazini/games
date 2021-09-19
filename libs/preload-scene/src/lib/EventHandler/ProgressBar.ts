import Phaser from "phaser";
export default class ProgressBar {
  bar: any;
  constructor(scene: Phaser.Scene) {
    this.bar = scene.add.graphics();
  }

  progressed(value: number) {
    this.bar.clear();
    this.bar.fillStyle(0xffffff, 1);
    this.bar.fillRect(250, 280, 300 * value, 30);
  }

  completed() {
    this.bar.destroy();
  }
}
