import Phaser from 'phaser';

class SoundManager {
  private sounds: Record<string, Phaser.Sound.HTML5AudioSound|Phaser.Sound.BaseSound>;

  private scene: Phaser.Scene;

  private playing: Record<string, boolean>;

  constructor(scene: Phaser.Scene) {
    this.sounds = {};
    this.playing = {};
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
    if (this.sounds[key] === undefined) {
      throw Error(`Sound ${key} wasn't loaded`)
    }
    this.sounds[key].play();
  }

  stop(key: string) {
    if (this.sounds[key] === undefined) {
      throw Error(`Sound ${key} wasn't loaded`)
    }
    this.sounds[key].stop();
  }

  setVolume(key: string, value: number) {
    if (this.sounds[key] === undefined) {
      throw Error(`Sound ${key} wasn't loaded`)
    };
    (<Phaser.Sound.HTML5AudioSound>this.sounds[key]).setVolume(value);
  }
}

let soundManager: SoundManager;

export function createSoundManager(scene: Phaser.Scene): any {
  if(soundManager !== undefined) {
    throw Error('The sound manager was already created');
  }
  soundManager = new SoundManager(scene);
  return soundManager;
}

export function getSoundManager() {
  if (soundManager === undefined) {
    throw Error('The sound manager wasn\'t started');
  }
  return soundManager;
}
