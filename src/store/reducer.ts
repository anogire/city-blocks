import { GameAction, GameState } from "./common";
import { INITIAL_GAME_ACTION, CHECK_BOARD_ACTION, CHANGE_STATUS_ACTION, BUY_JOKER_ACTION, GET_BONUS_ACTION } from "./actions";
import { reduceInitialGameAction } from "./initial";
import { reduceCheckBoardAction } from "./changeBoard";
import { reduceChangeStatusAction } from "./changeStatus";
import { reduceBuyJokerAction } from "./buyJoker";
import { reduceGetBonusAction } from "./getBonus";

export const initialState: GameState = {
  board: [],
  nextBlocks: [],
  size: 5,
  status: "not active",
  score: 0,
  money: 2,
  nextMilestone: {
    isChanged: false,
    min: 0,
    max: 100,
  }
};

export const gameReducer = (state = initialState, action: GameAction): GameState => {
  switch (action.type) {     
    case INITIAL_GAME_ACTION: return reduceInitialGameAction(state, action);
    case CHECK_BOARD_ACTION: return reduceCheckBoardAction(state, action);
    case CHANGE_STATUS_ACTION: return reduceChangeStatusAction(state, action);
    case BUY_JOKER_ACTION: return reduceBuyJokerAction(state, action);
    case GET_BONUS_ACTION: return reduceGetBonusAction(state, action);

    default:
      return state;
  };
};