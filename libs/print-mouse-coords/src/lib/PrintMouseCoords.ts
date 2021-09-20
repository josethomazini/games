import Phaser from "phaser";

export default class PrintMouseCoords {
  style: Phaser.Types.GameObjects.Text.TextStyle
  text: Phaser.GameObjects.Text
  scene: Phaser.Scene
  color: string
  configs: any
  show: boolean

  constructor(scene: Phaser.Scene, color = '#00ff00', show = true) {
    this.scene = scene;
    this.color = color;
    this.show = process.env.NODE_ENV !== 'production' && show

    this.configs = {
      xPos: 10,
      yPos: 10,
      color,
      initialValue: '',
      style: <Phaser.Types.GameObjects.Text.TextStyle>{ fill: this.color }
    }

    this.create()
  }

  create() {
    if(!this.show) return;

    this.text = this.scene.add.text(
      this.configs.xPos,
      this.configs.yPos,
      this.configs.initialValue,
      this.configs.style
    ).setDepth(1);
  }

  update() {
    if(!this.show) return;

    const pointer = this.scene.input.activePointer;

    this.text.setText([
      'x: ' + pointer.worldX,
      'y: ' + pointer.worldY
    ]);
  }
}
