import Phaser from 'phaser'
import WebFontLoader from 'webfontloader'


export default class WebFontFile extends Phaser.Loader.File {
  fontNames: any[]

  constructor(loader: Phaser.Loader.LoaderPlugin, fontNames: any) {
    super(loader, {
      type: 'webfont',
      key: fontNames.toString()
    })

    this.fontNames = Array.isArray(fontNames) ? fontNames : [fontNames]
  }

  load() {
    const config = {
      active: () => {
        this.loader.nextFile(this, true)
      },
      'google': {
        families: this.fontNames
      }
    }

    WebFontLoader.load(config)
  }
}
