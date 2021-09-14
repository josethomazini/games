import { IGame } from '@games/game-interface';
import fallingStars from '@games/games/falling-stars';

const gameData: IGame[] = [];
gameData.push(fallingStars);

function compare(a: IGame, b: IGame) {
  const aLower = a.name.toLowerCase();
  const bLower = b.name.toLowerCase();

  if (aLower < bLower) return -1;
  if (aLower > bLower) return 1;
  return 0;
}

const getGameData = () => gameData.sort(compare);

export function getDataByUrl(url: string): IGame {
  const key = url.replace('/', '');

  for (let index = 0; index < gameData.length; index += 1) {
    const element = gameData[index];

    if (key === element.key) {
      return element;
    }
  }
  throw new Error(`Illegal key: ${key}`);
}

export default getGameData;
