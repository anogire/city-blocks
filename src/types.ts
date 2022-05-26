import { SIZE_VARIANT } from "./consts";

export type BlockValue = number;
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