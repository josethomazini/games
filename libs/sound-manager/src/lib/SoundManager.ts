import Phaser from 'phaser';

export interface ISoundManager {
  load(key: string, loop: boolean): void;
  play(key: string): void;
  stop(key: string): void;
  setVolume(key: string, value: number): void;
}

class SoundManager implements ISoundManager {
  private sounds: Record<string, Phaser.Sound.HTML5AudioSound|Phaser.Sound.BaseSound>;

  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.sounds = {};
    this.scene = scene;
  }

  load(key: string, loop: boolean) {
    if (this.sounds[key] !== undefined) return;

    const config = {
      volume: 1,
      loop,
    };
    this.sounds[key] = this.scene.sound.add(key, config);
  }

  play(key: string) {
    this.sounds[key].play();
  }

  stop(key: string) {
    this.sounds[key].stop();
  }

  setVolume(key: string, value: number) {
    (<Phaser.Sound.HTML5AudioSound>this.sounds[key]).setVolume(value);
  }
}

let soundManager: ISoundManager;

export function getSoundManager(scene: Phaser.Scene) {
  if (soundManager === undefined) {
    soundManager = new SoundManager(scene);
  }
  return soundManager;
}
