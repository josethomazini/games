export default class LoadingText {
  text: any;
  constructor(scene) {
    const { width, height } = scene.cameras.main;

    const config = {
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    };

    this.text = scene.make.text(config);
    this.text.setOrigin(0.5, 0.5);
  }

  completed() {
    this.text.destroy();
  }
}
