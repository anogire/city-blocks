import { GameState } from "../types";

export const selectBoard = (state: GameState) => state.board;
export const selectBlocks = (state: GameState) => state.randomBlocks;
export const selectSize = (state: GameState) => state.size;
export const selectStatus = (state: GameState) => state.status;