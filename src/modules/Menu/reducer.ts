import { getNewBoard, getNewRandomBlocks } from "../../app/utils";
import { InitialGameAction } from "../../store/actionTypes";
import { BlockVariant, Board, GameState, INITIAL_BLOCK, RANDOM_BLOCK_VARIANT, SizeBoard } from "../../types";

export const reduceInitialGameAction = (state: GameState, action: InitialGameAction): GameState => {
    const sizeBoard: SizeBoard = action.payload;
    const newBoard: Board = getNewBoard(INITIAL_BLOCK, sizeBoard);
    const randomBlocks: BlockVariant[] = getNewRandomBlocks(RANDOM_BLOCK_VARIANT);
  
    const newStateForGame: GameState = {
      board: newBoard,
      randomBlocks: randomBlocks,
      size: sizeBoard,
      status: "playing",
    };
  
    return newStateForGame;
  }