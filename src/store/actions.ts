import { GeneralBlock, SizeBoard } from "../types";
import { Action, GameStatus } from "./common";

export const INITIAL_GAME_ACTION = "InitialGameAction";
export const CHECK_BOARD_ACTION = "CheckBoardAction";
export const CHANGE_STATUS_ACTION = "ChangeStatusAction";

export type InitialGameAction = Action<typeof INITIAL_GAME_ACTION, SizeBoard>;
export type CheckBoardAction = Action<typeof CHECK_BOARD_ACTION, GeneralBlock>;
export type ChangeStatusAction = Action<typeof CHANGE_STATUS_ACTION, GameStatus>;