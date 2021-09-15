import PreloadSceneFactory from '@games/preload-scene';
import data from '../data.json';
import AnotherScene from './AnotherScene';
import SplashScene from './SplashScene';

const scenes = [
  PreloadSceneFactory(data, 'SPLASH_SCENE'),
  SplashScene, AnotherScene,
];

export default scenes;
