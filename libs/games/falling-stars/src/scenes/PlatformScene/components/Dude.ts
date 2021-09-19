import Phaser from 'phaser';

const key = 'dude';

enum DudeEnum {
  ANIM_DEAD = "ANIM_DEAD",
  ANIM_RIGHT = "ANIM_RIGHT",
  ANIM_LEFT = "ANIM_LEFT",
  ANIM_IDLE = "ANIM_IDLE"
}

class DudeAnimations {
  scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;

    this.createRightAnim();
    this.createLeftAnim();
    this.createIdleAnim();
    this.createDeadAnim();
  }

  createDeadAnim() {
    const config = {
      key: DudeEnum.ANIM_DEAD,
      frames: [{ key, frame: 9 }],
      frameRate: 20,
    };

    this.scene.anims.create(config);
  }

  createIdleAnim() {
    const config: Phaser.Types.Animations.Animation = {
      key: DudeEnum.ANIM_IDLE,
      frames: [{ key, frame: 4 }],
      frameRate: 20,
    };

    this.scene.anims.create(config);
  }

  createRightAnim() {
    const config: Phaser.Types.Animations.Animation = {
      key: DudeEnum.ANIM_RIGHT,
      frames: this.scene.anims.generateFrameNumbers(
        key, { start: 5, end: 8 },
      ),
      frameRate: 10,
      repeat: -1,
    };

    this.scene.anims.create(config);
  }

  createLeftAnim() {
    const config: Phaser.Types.Animations.Animation = {
      key: DudeEnum.ANIM_LEFT,
      frames: this.scene.anims.generateFrameNumbers(
        key, { start: 0, end: 3 },
      ),
      frameRate: 10,
      repeat: -1,
    };

    this.scene.anims.create(config);
  }
}

export default class Dude extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, key);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setBounce(0.2);
    this.setCollideWorldBounds(true);

    new DudeAnimations(scene);
  }
}
