import { getNewBoard, getNewRandomBlocks } from "../../utils";
import { COUNT_NEW_RANDOM_BLOCKS, GAME_BLOCKS, MAX_START_NOT_EMPTY_BLOCKS } from "../../consts";
import { InitialGameAction } from "../../store/actionTypes";
import { Board, GameState, SizeBoard } from "../../types";

export const reduceInitialGameAction = (state: GameState, action: InitialGameAction): GameState => {
  const sizeBoard: SizeBoard = action.payload;
  const newBoard: Board = getNewBoard(GAME_BLOCKS, sizeBoard, MAX_START_NOT_EMPTY_BLOCKS);
  const randomBlocks: Board = getNewRandomBlocks(GAME_BLOCKS.slice(1), COUNT_NEW_RANDOM_BLOCKS);

  const newStateForGame: GameState = {
    board: newBoard,
    randomBlocks: randomBlocks,
    size: sizeBoard,
    status: "playing",
  };
  
  return newStateForGame;
}