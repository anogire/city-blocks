import { GameState } from "./common";

export const selectBoard = (state: GameState) => state.board;
export const selectNextBlocks = (state: GameState) => state.nextBlocks;
export const selectSize = (state: GameState) => state.size;
export const selectStatus = (state: GameState) => state.status;
export const selectScore = (state: GameState) => state.score;
export const selectMoney = (state: GameState) => state.money;