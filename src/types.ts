import { CheckBoardAction, InitialGameAction } from "./store/actionTypes";

export const SIZE_VARIANT = [4, 5, 6] as const;
export const BLOCK_VARIANT = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096] as const;

export const RANDOM_BLOCK_VARIANT: BlockWithProbability = [
  { value: 2, probability: 20 },
  { value: 4, probability: 10 },
  { value: 8, probability: 5 },
  { value: 16, probability: 1 },
];

export const INITIAL_BLOCK: BlockWithProbability = [
  { value: 0, probability: 50 },
  { value: 2, probability: 20 },
  { value: 4, probability: 10 },
  { value: 8, probability: 5 },
  { value: 16, probability: 1 },
];

export type Board = Record<string, BlockVariant>
export type SizeBoard = typeof SIZE_VARIANT[number];

export type BlockVariant = typeof BLOCK_VARIANT[number];
export type BlockWithProbability = { value: BlockVariant, probability: number }[];

export interface IBlock {
  x: number,
  y: number,
  value: BlockVariant,
};

export interface GameState {
  readonly board: Board;
  readonly randomBlocks: BlockVariant[];
  readonly size: SizeBoard;
  readonly status: "playing" | "game over" | "not active";
};

export interface Action<T, P> {
  readonly type: T;
  readonly payload: P;
};

export type GameAction = InitialGameAction | CheckBoardAction;