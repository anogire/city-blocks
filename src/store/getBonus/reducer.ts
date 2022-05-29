import { GameState } from "../common";
import { GetBonusAction } from "../actions";

export const reduceGetBonusAction = (state: GameState, action: GetBonusAction): GameState => {
  const newMoney = state.money + action.payload!;
  
  const newState: GameState = { 
      ...state, 
      money: newMoney,
    };
  
  return newState;
}