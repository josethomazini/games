import { Globals } from "@games/preload-scene";


function playBackgroundSound() {
  Globals['soundManager'].load('song', true);

  if(Globals['musicPlaying'] === undefined) {
    Globals['musicPlaying'] = false;
  }

  if(!Globals['musicPlaying']) {
    Globals['musicPlaying'] = true;
    Globals['soundManager'].play('song');
  }

  Globals['soundManager'].setVolume('song', 0.05);
}

export default {
  playBackgroundSound,
}
