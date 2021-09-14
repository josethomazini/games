import PreloadSceneFactory from '@games/preload-scene';
import data from '../data.json';
import SplashScene from './SplashScene';

const scenes = [
  PreloadSceneFactory(data, 'SPLASH_SCENE'),
  SplashScene,
];

export default scenes;
