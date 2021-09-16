export default class AssertText {
  text: any;
  constructor(scene) {
    const { width, height } = scene.cameras.main;

    const config = {
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    };

    this.text = scene.make.text(config);
    this.text.setOrigin(0.5, 0.5);
  }

  fileProgressed(file) {
    const txt = `Loading asset: ${file.key}`;
    this.text.setText(txt);
  }

  completed() {
    this.text.destroy();
  }
}
