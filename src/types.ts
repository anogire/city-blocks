import { SIZE_VARIANT } from "./consts";

export type BlockValue = 0 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048;
export type BlockProbability = { value: BlockValue, probability: number }[];

export type Board = GeneralBlock[];
export type SizeBoard = typeof SIZE_VARIANT[number];

export type GeneralBlock = {
  x: number,
  y: number,
  value: BlockValue,
  probability: number,
};

export type GeneralBlockInfo = Pick<GeneralBlock, "value" | "probability">;