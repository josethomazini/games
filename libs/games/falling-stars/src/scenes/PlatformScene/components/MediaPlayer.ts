import { Globals } from "@games/preload-scene";


function stopBackgroundSound() {
  if(Globals['musicPlaying'] === undefined) {
    Globals['musicPlaying'] = false;
  }

  if(!Globals['musicPlaying']) return;

  Globals['musicPlaying'] = false;
  Globals['soundManager'].stop('song');
}


export default {
  stopBackgroundSound
}
