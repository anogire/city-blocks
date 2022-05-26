import { GameAction, GameState } from "./common";
import { INITIAL_GAME_ACTION, CHECK_BOARD_ACTION } from "./actions";
import { reduceInitialGameAction } from "./initial";
import { reduceCheckBoardAction } from "./changeBoard";

const initialState: GameState = {
  board: [],
  nextBlocks: [],
  size: 5,
  status: "not active",
  score: 0,
};

export const gameReducer = (state = initialState, action: GameAction): GameState => {
  switch (action.type) {     
    case INITIAL_GAME_ACTION: return reduceInitialGameAction(state, action);

    case CHECK_BOARD_ACTION: return reduceCheckBoardAction(state, action);

    default:
      return state;
  };
};