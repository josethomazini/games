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

export function getDataByRoute(path: string): IGame|null {
  const key = path.replace('/games/apps/frontend/', '').replace('/', '');

  for (let index = 0; index < gameData.length; index += 1) {
    const element = gameData[index];

    if (key === element.key) {
      return element;
    }
  }
  return null;
}

export default getGameData;
