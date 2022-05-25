import { GameState, GameAction } from "../types";
import { reduceInitialGameAction } from "../modules/Menu";
import { reduceCheckBoardAction } from "../modules/Game";
import { INITIAL_GAME_ACTION, CHECK_BOARD_ACTION } from "./actionTypes";

const initialState: GameState = {
  board: [],
  randomBlocks: [],
  size: 5,
  status: "not active",
};

export const gameReducer = (state = initialState, action: GameAction): GameState => {
  switch (action.type) {     
    case INITIAL_GAME_ACTION: return reduceInitialGameAction(state, action);

    case CHECK_BOARD_ACTION: return reduceCheckBoardAction(state, action);

    default:
      return state;
  };
};