import Phaser from 'phaser';

export default function PreloadSceneFactory(data: any, postScene: string) {
  return class PreloadScene extends Phaser.Scene {
    constructor() {
      super('PRELOAD_SCENE');
    }

    preload() {
      this.loadImages();
      this.loadAudio();
    }

    create() {
      this.scene.start(postScene);
    }

    loadAudio() {
      const keys = Object.keys(data.assets.audio);

      for (let index = 0; index < keys.length; index += 1) {
        const name = keys[index];
        this.load.audio(
          name, `/assets/${data.key}/sounds/${data.assets.audio[name].file}`,
        );
      }
    }

    loadImages() {
      const keys = Object.keys(data.assets.images);

      for (let index = 0; index < keys.length; index += 1) {
        const name = keys[index];
        this.load.image(
          name, `/assets/${data.key}/images/${data.assets.images[name].file}`,
        );
      }
    }
  };
}
