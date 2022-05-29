import { GameState } from "../common";
import { BuyJokerAction } from "../actions";

export const reduceBuyJokerAction = (state: GameState, action: BuyJokerAction): GameState => {
  const block = action.payload!;
  const newNextBlocks = [...state.nextBlocks.slice(0, -1), block];
  const newMoney = state.money - block.price!;

  const newState: GameState = { 
      ...state, 
      nextBlocks: newNextBlocks,
      money: newMoney,
      status: "playing",
    };
  
  return newState;
}