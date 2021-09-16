import AssertText from './AssetText';
import LoadingText from './LoadingText';
import PercentText from './PercentText';
import ProgressBar from './ProgressBar';
import ProgressBox from './ProgressBox';

export default class EventHandler {
  constructor(scene) {
    const progressBar = new ProgressBar(scene);
    const progressBox = new ProgressBox(scene);
    const loadingText = new LoadingText(scene);
    const percentText = new PercentText(scene);
    const assetText = new AssertText(scene);

    scene.load.on('progress', (value) => {
      percentText.progressed(value);
      progressBar.progressed(value);
    });

    scene.load.on('fileprogress', (file) => {
      assetText.fileProgressed(file);
    });

    scene.load.on('complete', () => {
      progressBar.completed();
      progressBox.completed();
      loadingText.completed();
      percentText.completed();
      assetText.completed();
    });
  }
}
