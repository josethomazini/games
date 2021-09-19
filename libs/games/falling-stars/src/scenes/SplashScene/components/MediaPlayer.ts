import { Globals } from "@games/preload-scene";


function playBackgroundSound() {
  if(Globals['musicPlaying'] === undefined) {
    Globals['musicPlaying'] = false;
  }

  if(Globals['musicPlaying']) return;

  Globals['musicPlaying'] = true;
  Globals['soundManager'].load('song', true);
  Globals['soundManager'].play('song');
  Globals['soundManager'].setVolume('song', 0.05);
}

export default {
  playBackgroundSound,
}
