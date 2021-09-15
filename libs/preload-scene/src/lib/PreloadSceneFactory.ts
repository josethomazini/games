import Phaser from 'phaser';
import { Asset, loadAssetsByType } from './AssetsLoader';

export default function PreloadSceneFactory(data: any, postScene: string) {
  return class PreloadScene extends Phaser.Scene {
    constructor() {
      super('PRELOAD_SCENE');
    }

    preload() {
      loadAssetsByType(this, data, Asset.images);
      loadAssetsByType(this, data, Asset.audio);
      loadAssetsByType(this, data, Asset.sprites);
    }

    create() {
      this.scene.start(postScene);
    }
  };
}
