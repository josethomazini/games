import getLogger from '@games/logger';
import { createSoundManager } from '@games/sound-manager';
import Phaser from 'phaser';
import { Globals } from '..';
import EventHandler from './EventHandler';
import { Asset, loadAssetsByType } from './EventHandler/AssetsLoader';
import WebFontFile from './WebFontLoader';

const logger = getLogger('PreloadSceneFactory')


export default function PreloadSceneFactory(data: any, postScene: string) {
  return class PreloadScene extends Phaser.Scene {
    constructor() {
      super('preload-scene');
    }

    preload() {
      logger.info('info')
      new EventHandler(this);

      loadAssetsByType(this, data, Asset.images);
      loadAssetsByType(this, data, Asset.audio);
      loadAssetsByType(this, data, Asset.sprites);

      // TODO: list of fonts
      this.load.addFile(new WebFontFile(this.load, data.webFont))

    }

    create() {
      Globals['soundManager'] = createSoundManager(this);


      this.scene.start(postScene);
    }
  };
}
