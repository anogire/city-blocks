import { GeneralBlock, SizeBoard } from "../types";
import { Action, GameState, GameStatus } from "./common";

export const INITIAL_GAME_ACTION = "InitialGameAction";
export const CHECK_BOARD_ACTION = "CheckBoardAction";
export const CHANGE_STATUS_ACTION = "ChangeStatusAction";
export const BUY_JOKER_ACTION = "BuyJokerAction";
export const GET_BONUS_ACTION = "GetBonusAction";
export const CONTINUE_GAME_ACTION = "ContinueGameAction";

export type InitialGameAction = Action<typeof INITIAL_GAME_ACTION, SizeBoard>;
export type CheckBoardAction = Action<typeof CHECK_BOARD_ACTION, GeneralBlock>;
export type ChangeStatusAction = Action<typeof CHANGE_STATUS_ACTION, GameStatus>;
export type BuyJokerAction = Action<typeof BUY_JOKER_ACTION, GeneralBlock>;
export type GetBonusAction = Action<typeof GET_BONUS_ACTION,  number>;
export type ContinueGameAction = Action<typeof CONTINUE_GAME_ACTION, GameState>;