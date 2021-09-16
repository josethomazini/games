export default class PercentText {
  constructor(scene) {
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

  progressed(value) {
    const txt = `${parseInt(value * 100, 10)}%`;
    this.text.setText(txt);
  }

  completed() {
    this.text.destroy();
  }
}
