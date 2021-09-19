import Phaser from "phaser";
export default class PercentText {
  text: any;
  constructor(scene: Phaser.Scene) {
    const { width, height } = scene.cameras.main;

    const config = {
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    };

    this.text = scene.make.text(config);
    this.text.setOrigin(0.5, 0.5);
  }

  progressed(value: number) {
    const txt = `${parseInt(String(value * 100), 10)}%`;
    this.text.setText(txt);
  }

  completed() {
    this.text.destroy();
  }
}
