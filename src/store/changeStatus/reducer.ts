import { GameState } from "../common";
import { ChangeStatusAction } from "../actions";

export const reduceChangeStatusAction = (state: GameState, action: ChangeStatusAction): GameState => {
  const newStatus = action.payload!;

  const newStateForGame: GameState = {
    ...state,
    status: newStatus,
  };
  
  return newStateForGame;
}