import getBaseurl from '@games/base-url';
import Phaser from 'phaser';

const basePath = `${getBaseurl()}assets`;

export enum Asset {
  'audio' = 'audio',
  'images' = 'images',
  'sprites' = 'sprites'
}

const loader = {
  audio: (assetName: string, assetFile: string,
      scene: Phaser.Scene, data: any) => {
    scene.load.audio(
      assetName, `${basePath}/${data.key}/${Asset.audio}/${assetFile}`,
    );
  },

  images: (assetName: string, assetFile: string,
      scene: Phaser.Scene, data: any) => {
    scene.load.image(
      assetName, `${basePath}/${data.key}/${Asset.images}/${assetFile}`,
    );
  },

  sprites: (assetName: string, assetFile: string,
      scene: Phaser.Scene, data: any) => {
    const { frameWidth, frameHeight } = data.assets[Asset.sprites][assetName];

    scene.load.spritesheet(
      assetName, `${basePath}/${data.key}/${Asset.sprites}/${assetFile}`,
      { frameWidth, frameHeight }
    );
  },
};

export function loadAssetsByType(scene: Phaser.Scene, data: any, type: Asset) {
  const assetNames = Object.keys(data.assets[type]);

  for (let i = 0; i < assetNames.length; i += 1) {
    const assetName = assetNames[i];
    const assetFile = data.assets[type][assetName].file;

    loader[type](assetName, assetFile, scene, data);
  }
}
