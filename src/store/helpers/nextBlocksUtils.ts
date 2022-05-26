import { COUNT_NEW_RANDOM_BLOCKS, GAME_BLOCKS } from "../../consts";
import { BlockProbability, GeneralBlock } from "../../types";
import { getNextBlock } from "./randomGenerator";

export const getNextBlocks = (blocks: BlockProbability, count: number): GeneralBlock[] => { 
    const nextBlocks: GeneralBlock[] = [];
    
    for (let i = 0; i < count; i++) {
      const blockInfo = getNextBlock(blocks);
      const block: GeneralBlock = {
        x: i,
        y: 0,
        ...blockInfo,
      }
      nextBlocks.push(block);
    }
  
    return nextBlocks;
  }

export const recalculateNextBlocks = (blocks: GeneralBlock[]): GeneralBlock[] => {
    const blockInfo = getNextBlock(GAME_BLOCKS.slice(1));
    const nextBlock: GeneralBlock = {
      x: COUNT_NEW_RANDOM_BLOCKS - 1,
      y: 0,
      ...blockInfo,
    }
  
    const newNextBlocks: GeneralBlock[] = blocks.slice(1, COUNT_NEW_RANDOM_BLOCKS)
      .map(block => ({ ...block, x: block.x - 1}));
      newNextBlocks.push(nextBlock);
  
    return newNextBlocks;
  }