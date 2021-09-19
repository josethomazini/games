import Phaser from "phaser";

export default class PrintMouseCoords {
  style: Phaser.Types.GameObjects.Text.TextStyle
  text: Phaser.GameObjects.Text
  scene: Phaser.Scene
  color: string

  constructor(scene: Phaser.Scene, color = '#00ff00') {
    this.scene = scene;
    this.color = color;
  }

  create() {
    if(process.env.NODE_ENV === 'production') return;

    this.style = <Phaser.Types.GameObjects.Text.TextStyle>{ fill: this.color };
    this.text = this.scene.add.text(10, 10, '', this.style).setDepth(1);
  }

  update() {
    if(process.env.NODE_ENV === 'production') return;

    const pointer = this.scene.input.activePointer;

    this.text.setText([
        'x: ' + pointer.worldX,
        'y: ' + pointer.worldY
    ]);
  }
}
