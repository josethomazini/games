# Games

[Play](https://josethomazini.github.io/games/apps/frontend/)

## Resources

https://opengameart.org/

## Important

After the creation of a new game always update the workspace.json by adding the game's assets folder on the build target of the frontend configs.

## Sound

- Call getSoundManager at Splash to create the unique instance

Scene

```
import { getSoundManager, ISoundManager } from '@games/sound-manager';

export default class SplashScene extends Phaser.Scene {
  soundManager: ISoundManager;

  create() {
    this.soundManager = getSoundManager(this);
    this.soundManager.load('boom', true);
    this.soundManager.play('boom');
```
