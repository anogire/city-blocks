import { GameState } from "../common";
import { CheckBoardAction } from "../actions";
import { getRandomBlock, recalculateBoard } from "../../utils";
import { COUNT_NEW_RANDOM_BLOCKS, GAME_BLOCKS } from "../../consts";
import { GeneralBlock } from "../../types";

export const reduceCheckBoardAction = (state: GameState, action: CheckBoardAction): GameState => {
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

  const newRandomBlocks: GeneralBlock[] = newBlocks.slice(1, COUNT_NEW_RANDOM_BLOCKS)
    .map(block => ({ ...block, x: block.x - 1}));
  newRandomBlocks.push(randomBlock);

  const newStateAfterCheck: GameState = {
    ...state,
    board: changedBoard.board,
    randomBlocks: newRandomBlocks,
  };
  
  return newStateAfterCheck;
}