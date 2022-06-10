import { GameState } from "../common";
import { ContinueGameAction } from "../actions";
import { getStorageData } from "../helpers";

export const reduceContinueGameAction = (state: GameState, action: ContinueGameAction): GameState => {
  const savedGame = getStorageData().game ?? state;

  return {...savedGame};
}