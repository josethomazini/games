export default class ProgressBox {
  box: any;
  constructor(scene) {
    this.box = scene.add.graphics();
    this.box.fillStyle(0x222222, 0.8);
    this.box.fillRect(240, 270, 320, 50);
  }

  completed() {
    this.box.destroy();
  }
}
