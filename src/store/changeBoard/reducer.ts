import { GameState } from "../common";
import { CheckBoardAction } from "../actions";
import { isGameOver, recalculateBoard, recalculateNextBlocks, setStorageGame } from "../helpers";
import { initialState } from "../reducer";

export const reduceCheckBoardAction = (state: GameState, action: CheckBoardAction): GameState => {

  const block = action.payload!;
  let changedBoard = {
    board: [...state.board],
    block: block,
    isChanged: true,
    score: 0,
  };

  let newScore = state.score + block.value;
  let multiplier = 1;

  do {
    changedBoard = recalculateBoard(changedBoard.board, {...changedBoard.block});
    if (changedBoard.isChanged) newScore += changedBoard.score * multiplier++;
  } while (changedBoard.isChanged);

  const newBlocks = [...state.nextBlocks];
  const newNextBlocks = recalculateNextBlocks(newBlocks);

  const isNextMilestone = newScore >= state.nextMilestone.max;

  const newStateAfterCheck: GameState = isGameOver(changedBoard.board)
    ? { 
      ...initialState, 
      status: "game over",
      score: newScore,
    }
    : {
      ...state,
      board: changedBoard.board,
      nextBlocks: newNextBlocks,
      score: newScore,
      nextMilestone: {
        ...state.nextMilestone,
        isChanged: isNextMilestone,
      }
    };
  
  setStorageGame(newStateAfterCheck);

  return newStateAfterCheck;
}