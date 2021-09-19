import { createSoundManager } from '@games/sound-manager';
import Phaser from 'phaser';
import { Globals } from '..';
import EventHandler from './EventHandler';
import { Asset, loadAssetsByType } from './EventHandler/AssetsLoader';
import WebFontFile from './WebFontLoader';


export default function PreloadSceneFactory(data: any, postScene: string) {
  return class PreloadScene extends Phaser.Scene {
    constructor() {
      super('preload-scene');
    }

    preload() {
      new EventHandler(this);

      loadAssetsByType(this, data, Asset.images);
      loadAssetsByType(this, data, Asset.audio);
      loadAssetsByType(this, data, Asset.sprites);

      this.load.addFile(new WebFontFile(this.load, data.webfonts))
    }

    create() {
      Globals['soundManager'] = createSoundManager(this);


      this.scene.start(postScene);
    }
  };
}
