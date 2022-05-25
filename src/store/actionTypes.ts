import { Action, GeneralBlock, SizeBoard } from "../types";

export const INITIAL_GAME_ACTION = "InitialGameAction";
export const CHECK_BOARD_ACTION = "CheckBoardAction";

export type InitialGameAction = Action<typeof INITIAL_GAME_ACTION, SizeBoard>;
export type CheckBoardAction = Action<typeof CHECK_BOARD_ACTION, GeneralBlock>;