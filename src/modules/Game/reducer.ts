import { getRandomBlock, recalculateBoard } from "../../app/utils";
import { CheckBoardAction } from "../../store/actionTypes";
import { GameState, RANDOM_BLOCK_VARIANT } from "../../types";

export const reduceCheckBoardAction = (state: GameState, action: CheckBoardAction): GameState => {
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
  
        const newRandomBlocks = [...newBlocks.slice(1, 3), getRandomBlock(RANDOM_BLOCK_VARIANT)];
  
        const newStateAfterCheck: GameState = {
          ...state,
          board: changedBoard.board,
          randomBlocks: newRandomBlocks,
        };
  
        return newStateAfterCheck;
  }