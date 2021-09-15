import Phaser from 'phaser';
import { Asset, loadAssetsByType } from './AssetsLoader';
import WebFontFile from './WebFontLoader';

export default function PreloadSceneFactory(data: any, postScene: string) {
  return class PreloadScene extends Phaser.Scene {
    constructor() {
      super('PRELOAD_SCENE');
    }

    preload() {
      loadAssetsByType(this, data, Asset.images);
      loadAssetsByType(this, data, Asset.audio);
      loadAssetsByType(this, data, Asset.sprites);

      this.load.addFile(new WebFontFile(this.load, 'Press Start 2P'))
    }

    create() {
      this.scene.start(postScene);
    }
  };
}
