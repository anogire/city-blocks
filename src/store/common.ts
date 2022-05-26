import { Board, GameStatus, SizeBoard } from "../types";
import { CheckBoardAction, InitialGameAction } from "./actions";

export interface GameState {
    readonly board: Board;
    readonly randomBlocks: Board;
    readonly size: SizeBoard;
    readonly status: GameStatus;
  };
  
export type GameAction = InitialGameAction | CheckBoardAction;

export interface Action<T, P> {
    readonly type: T;
    readonly payload: P;
};

export function createAction<T extends string, P>(type: T, payload: P): Action<T, P> {
    return { type, payload };
};