import BaseMenu from '@games/base-menu';
import Phaser from 'phaser';

export default class Menu extends BaseMenu {

  constructor(scene: Phaser.Scene) {
    const options = [
      {
        key: 'play',
        obj: scene.add.text(400, 300, 'Play').setOrigin(.5)
      },
      {
        key: 'credits',
        obj: scene.add.text(400, 400, 'Credits').setOrigin(.5)
      }
    ]

    const selectedOption = 'play'

    const styles = {
      selected: {
        fontFamily: '"Press Start 2P"',
        fontSize: '35px',
        fill: 'yellow'
      },
      notselected: {
        fontFamily: '"Press Start 2P"',
        fontSize: '25px',
        fill: 'gray'
      }
    }

    super(scene, options, selectedOption, styles)
  }

  enterPressed() {
    if(this.selectedOption === 'play') {
      this.scene.scene.start('platform-scene');
    }

    if(this.selectedOption === 'credits') {
      this.scene.scene.start('platform-scene');
    }
  }
}
