import { GameState } from "../common";
import { CheckBoardAction } from "../actions";
import { isGameOver, recalculateBoard, recalculateNextBlocks } from "../helpers";

export const reduceCheckBoardAction = (state: GameState, action: CheckBoardAction): GameState => {
  const block = action.payload;
  let changedBoard = {
    board: [...state.board],
    value: block.value,
    isChanged: true,
  };

  do {
    changedBoard = recalculateBoard(changedBoard.board, {...block, value: changedBoard.value});
  } while (changedBoard.isChanged);

  const newBlocks = [...state.nextBlocks];
  const newNextBlocks = recalculateNextBlocks(newBlocks);
  const newStatus = isGameOver(changedBoard.board, newNextBlocks[0]) ? "game over" : state.status;

  const newStateAfterCheck: GameState = {
    ...state,
    board: changedBoard.board,
    nextBlocks: newNextBlocks,
    status: newStatus,
  };
  
  return newStateAfterCheck;
}