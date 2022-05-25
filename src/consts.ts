import { BlockProbability } from "./types";

export const SIZE_VARIANT = [4, 5, 6] as const;

export const GAME_BLOCKS: BlockProbability = [
  { value: 0, probability: 50 },
  { value: 2, probability: 20 },
  { value: 4, probability: 10 },
  { value: 8, probability: 5 },
  { value: 16, probability: 1 },
  { value: 32, probability: 1 },
  { value: 64, probability: 0 },
  { value: 128, probability: 0 },
  { value: 256, probability: 0 },
  { value: 512, probability: 0 },
  { value: 1024, probability: 0 },
  { value: 2048, probability: 0 },
];

export const MAX_START_NOT_EMPTY_BLOCKS = 8;

export const COUNT_NEW_RANDOM_BLOCKS = 3;