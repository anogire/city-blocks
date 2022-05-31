import { GameState } from "../common";
import { GetBonusAction } from "../actions";

export const reduceGetBonusAction = (state: GameState, action: GetBonusAction): GameState => {
  const newMoney = state.money + action.payload!;
  const rangeNexMilestone = state.score + Math.floor(state.score / 100) * 100;

  const newState: GameState = { 
      ...state, 
      money: newMoney,
      nextMilestone: {
        isChanged: false,
        min: state.score,
        max: rangeNexMilestone,
      }
    };
  
  return newState;
}