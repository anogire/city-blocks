import { GameState } from "../common";
import { ChangeStatusAction } from "../actions";
import { setStorageGame } from "../helpers";

export const reduceChangeStatusAction = (state: GameState, action: ChangeStatusAction): GameState => {
  const newStatus = action.payload!;

  const newStateForGame: GameState = {
    ...state,
    status: newStatus,
  };

  setStorageGame(newStateForGame);
  
  return newStateForGame;
}