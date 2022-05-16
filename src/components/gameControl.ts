import { RootState } from '../app/store';
import { getNewBoard, getNewRandomBlocks, getRandomBlock, recalculateBoard } from "../app/utils";
import { GameAction, GameState, TBlockVariant, TBoard, TSize } from "../types";

const initialState: GameState = {
  board: {},
  randomBlocks: [],
  size: 5,
  status: "not active",
};

export function gameReducer(state = initialState, action: GameAction): GameState {
  switch (action.type) {     
    case "initialGame": 
      const sizeBoard: TSize = action.payload;
      const newBoard: TBoard = getNewBoard(sizeBoard);
      const randomBlocks: TBlockVariant[] = getNewRandomBlocks();
    
      const newStateForGame: GameState = {
        board: newBoard,
        randomBlocks: randomBlocks,
        size: sizeBoard,
        status: "playing",
      };

      return newStateForGame;

    case "checkBoard": 
      const {x, y, value} = action.payload;
      const newBlocks = [...state.randomBlocks];
      let changedBoard = {
        board: {...state.board},
        value: value,
        isChanged: true,
      };

      do {
        changedBoard = recalculateBoard(changedBoard.board, {x: x, y: y, value: changedBoard.value});
      } while (changedBoard.isChanged);

      const newRandomBlocks = [...newBlocks.slice(1, 3), getRandomBlock()];

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