import { PreloadSceneFactory } from "@games/preload-scene";
import data from '../data.json';
import PlatformScene from './PlatformScene';
import SplashScene from "./SplashScene";
import GlobalsScene from "./StartGlobalsScene";

const PreloadScene = PreloadSceneFactory(data, 'start-globals-scene')

const scenes = [
  PreloadScene,
  GlobalsScene,
  SplashScene,
  PlatformScene
]


export default scenes
