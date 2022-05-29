import { BlockProbability } from "./types";

export const SIZE_VARIANT = [3, 4, 5, 6] as const;

export const GAME_BLOCKS: BlockProbability = [
  { value: 0, probability: 50, price: 0 },
  { value: 2, probability: 20, price: 1 },
  { value: 4, probability: 10, price: 1 },
  { value: 8, probability: 5, price: 2 },
  { value: 16, probability: 1, price: 2 },
  { value: 32, probability: 1, price: 3 },
  { value: 64, probability: 0, price: 4 },
  { value: 128, probability: 0, price: 0 },
  { value: 256, probability: 0, price: 0 },
  { value: 512, probability: 0, price: 0 },
  { value: 1024, probability: 0, price: 0 },
  { value: 2048, probability: 0, price: 0 },
];

export const MAX_START_NOT_EMPTY_BLOCKS = 8;

export const COUNT_NEW_RANDOM_BLOCKS = 3;