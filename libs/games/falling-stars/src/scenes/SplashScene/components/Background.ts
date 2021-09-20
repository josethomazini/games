import Phaser from "phaser"


export default class Background {
  constructor(scene: Phaser.Scene) {
    scene.add.image(400, 300, 'sky')
  }
}
