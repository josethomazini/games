import Phaser from "phaser";
import data from '../../../data.json';

export default class Title {

  constructor(scene: Phaser.Scene) {
    scene.add.text(
      70,
      100,
      data.name,
      <Phaser.Types.GameObjects.Text.TextStyle>{
        fontFamily: '"Press Start 2P"',
        fontSize: '50px',
        fill: 'yellow'
      }
    )
  }
}
