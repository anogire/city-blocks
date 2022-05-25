import { CheckBoardAction, InitialGameAction } from "./store/actionTypes";
import { SIZE_VARIANT } from "./consts";

export type BlockValue = 0 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048;
export type BlockProbability = { value: BlockValue, probability: number }[];

export type Board = GeneralBlock[];
export type SizeBoard = typeof SIZE_VARIANT[number];

export type GameStatus = "playing" | "game over" | "not active";

export type GeneralBlock = {
  x: number,
  y: number,
  value: BlockValue,
  probability: number,
};

export type GeneralBlockInfo = Pick<GeneralBlock, "value" | "probability">;

export interface GameState {
  readonly board: Board;
  readonly randomBlocks: Board;
  readonly size: SizeBoard;
  readonly status: GameStatus;
};

export interface Action<T, P> {
  readonly type: T;
  readonly payload: P;
};

export type GameAction = InitialGameAction | CheckBoardAction;