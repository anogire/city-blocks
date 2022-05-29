import { GameState } from "../common";
import { InitialGameAction } from "../actions";
import { COUNT_NEW_RANDOM_BLOCKS, GAME_BLOCKS, MAX_START_NOT_EMPTY_BLOCKS } from "../../consts";
import { Board, SizeBoard } from "../../types";
import { getNewBoard, getNextBlocks } from "../helpers";

export const reduceInitialGameAction = (state: GameState, action: InitialGameAction): GameState => {
  const sizeBoard: SizeBoard = action.payload!;
  const newBoard: Board = getNewBoard(GAME_BLOCKS, sizeBoard, MAX_START_NOT_EMPTY_BLOCKS);
  const nextBlocks: Board = getNextBlocks(GAME_BLOCKS.slice(1), COUNT_NEW_RANDOM_BLOCKS);

  const score = newBoard.reduce((sum, block) => sum += block.value, 0);

  const newStateForGame: GameState = {
    board: newBoard,
    nextBlocks: nextBlocks,
    size: sizeBoard,
    status: "playing",
    score: score,
    money: state.money,
  };
  
  return newStateForGame;
}