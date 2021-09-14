export type Callable = () => void;

export interface IGame {
  key: string,
  name: string,
  version: string,
  thumb: string,
  callable: Callable
}
