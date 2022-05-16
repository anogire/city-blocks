export const SIZE_VARIANT = [4, 5, 6] as const;
export const BLOCK_VARIANT = [4, 8, 16, 32, 64, 128, 256, 512, 0] as const;

export type TBoard = Record<string, TBlockVariant>
export type TSize = typeof SIZE_VARIANT[number];
export type TBlockVariant = typeof BLOCK_VARIANT[number];

export interface IBlock {
    x: number,
    y: number,
    value: TBlockVariant,
  }

export interface GameState {
    readonly board: TBoard;
    readonly randomBlocks: TBlockVariant[];
    readonly size: TSize;
    readonly status: "playing" | "game over" | "not active";
}

export type GameAction =
    | { type: "initialGame", payload: TSize }
    | { type: "checkBoard", payload: IBlock}
    | { type: "default"}