import Phaser from 'phaser';

export default class BaseMenu {
  scene: Phaser.Scene
  styles: any
  selectedOption: any
  options: any
  cursors: Phaser.Types.Input.Keyboard.CursorKeys
  upPressed: boolean
  downPressed: boolean

  constructor(scene: Phaser.Scene, options: any, selectedOption: string, styles: any) {
    this.scene = scene

    this.upPressed = false
    this.downPressed = false

    this.cursors = scene.input.keyboard.createCursorKeys();
    this.scene.input.keyboard.on('keydown-ENTER', this.enterPressed, this);

    this.options = options

    this.selectedOption = selectedOption

    this.styles = styles

    this.applySelection()
  }

  enterPressed() {
    throw Error ('enterPressed not implemented')
  }

  applySelection() {
    this.options.forEach((opts: any) => {
      if(opts.key === this.selectedOption) {
        opts.obj.setStyle(this.styles.selected)
      } else {
        opts.obj.setStyle(this.styles.notselected)
      }
    })
  }

  getSelectedIndex() {
    for (let i = 0; i < this.options.length; i++) {
      if(this.options[i].key === this.selectedOption) {
        return i
      }
    }
    throw Error('Not defined a selected option')
  }

  getOptionBeforeSelected() {
    const selectedIndex = this.getSelectedIndex()

    if(selectedIndex === 0) {
      return this.options[this.options.length - 1]
    } else {
      return this.options[selectedIndex - 1]
    }
  }

  getOptionAfterSelected() {
    const selectedIndex = this.getSelectedIndex()

    if(selectedIndex === this.options.length - 1) {
      return this.options[0]
    } else {
      return this.options[selectedIndex + 1]
    }
  }

  setNewSelection(option: any) {
    this.selectedOption = option.key
    this.applySelection()
  }

  update() {
    if(this.cursors.up.isDown) {
      if(!this.upPressed) {
        this.setNewSelection(this.getOptionBeforeSelected())
        this.upPressed = true
      }
    } else {
      this.upPressed = false
    }

    if(this.cursors.down.isDown) {
      if(!this.downPressed) {
        this.setNewSelection(this.getOptionAfterSelected())
        this.downPressed = true
      }
    } else {
      this.downPressed = false
    }
  }
}
