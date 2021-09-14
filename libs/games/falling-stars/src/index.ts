import { IGame } from '@games/game-interface';
import data from './data.json';
import startGame from './lib/StartGame';

const fallingStars: IGame = {
  key: data.key,
  name: data.name,
  version: data.version,
  thumb: data.thumb,
  callable: startGame,
};

export default fallingStars;
