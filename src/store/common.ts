import { Board, SizeBoard } from "../types";
import { BuyJokerAction, ChangeStatusAction, CheckBoardAction, ContinueGameAction, GetBonusAction, InitialGameAction } from "./actions";

export interface GameState {
    readonly board: Board;
    readonly nextBlocks: Board;
    readonly size: SizeBoard;
    readonly status: GameStatus;
    readonly score: number;
    readonly money: number;
    readonly nextMilestone: {
        isChanged: boolean,
        min: number,
        max: number,
    };
  };

export type GameStatus = "playing" | "game over" | "not active" | "store";
  
export type GameAction = InitialGameAction | CheckBoardAction | ChangeStatusAction | BuyJokerAction | GetBonusAction | ContinueGameAction;

export interface Action<T, P> {
    readonly type: T;
    readonly payload?: P;
};

export function createAction<T extends string, P>(type: T, payload?: P): Action<T, P> {
    return { type, payload };
};