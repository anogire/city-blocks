import { RootState } from '../app/store';
import { getNewBoard, getNewRandomBlocks, getRandomBlock, recalculateBoard } from "../app/utils";
import { COUNT_NEW_RANDOM_BLOCKS, GAME_BLOCKS, MAX_START_NOT_EMPTY_BLOCKS } from '../consts';
import { GameAction, GameState, Board, SizeBoard, GeneralBlock } from "../types";

const initialState: GameState = {
  board: [],
  randomBlocks: [],
  size: 5,
  status: "not active",
};

export function gameReducer(state = initialState, action: GameAction): GameState {
  switch (action.type) {     
    case "initialGame": 
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

    case "checkBoard": 
      const block = action.payload;
      const newBlocks = [...state.randomBlocks];

      let changedBoard = {
        board: [...state.board],
        value: block.value,
        isChanged: true,
      };

      do {
        changedBoard = recalculateBoard(changedBoard.board, {...block, value: changedBoard.value});
      } while (changedBoard.isChanged);

      const blockInfo = getRandomBlock(GAME_BLOCKS.slice(1));
      const randomBlock: GeneralBlock = {
        x: COUNT_NEW_RANDOM_BLOCKS - 1,
        y: 0,
        ...blockInfo,
      }

      const newRandomBlocks = [...newBlocks.slice(1, COUNT_NEW_RANDOM_BLOCKS), randomBlock];

      const newStateAfterCheck: GameState = {
        ...state,
        board: changedBoard.board,
        randomBlocks: newRandomBlocks,
      };

      return newStateAfterCheck;

    default:
      return state;
  }
}

export const selectBoard = (state: RootState) => state.gameControl.board;
export const selectBlocks = (state: RootState) => state.gameControl.randomBlocks;
export const selectSize = (state: RootState) => state.gameControl.size;
export const selectStatus = (state: RootState) => state.gameControl.status;