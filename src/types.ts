import { SIZE_VARIANT } from "./consts";

export type BlockValue = 0 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;
export type BlockProbability = { value: BlockValue, probability: number, price : number }[];

export type Board = GeneralBlock[];
export type SizeBoard = typeof SIZE_VARIANT[number];

export type GeneralBlock = {
  x: number,
  y: number,
  value: BlockValue,
  probability: number,
  price: number,
};

export type GeneralBlockInfo = Pick<GeneralBlock, "value" | "probability" | "price">;

export type GameSounds = "click" | "game over" | "set block" | "congratz";