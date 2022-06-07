import { GAME_BLOCKS } from "../../consts";
import { BlockProbability, BlockValue, Board, GeneralBlock, GeneralBlockInfo, SizeBoard } from "../../types";
import { getNextBlock } from "./randomGenerator";

const findBlock = (board: Board, x: number, y: number) => {
  return board.find(block => block.x === x && block.y === y);
}

const findBlockIndex = (board: Board, x: number, y: number) => {
  return board.findIndex(block => block.x === x && block.y === y);
}
  
const findBlockInfo = (blocks: BlockProbability, value: BlockValue) => {
  const block = blocks.find(block => block.value === value)!;

  return {
    probability: block.probability,
    price: block.price,
  };
}

const getNeighbors = (board: Board, x: number, y: number, value: BlockValue): number[][] => {
  const neighbors: number[][] = [];
  
  let check = findBlock(board, x + 1, y);
  if (check && check.value === value) neighbors.push([x + 1, y]); 

  check = findBlock(board, x - 1, y);
  if (check && check.value === value) neighbors.push([x - 1, y]); 

  check = findBlock(board, x, y + 1);
  if (check && check.value === value) neighbors.push([x, y + 1]); 

  check = findBlock(board, x, y - 1);
  if (check && check.value === value) neighbors.push([x, y - 1]); 
  
  const clearNeighbors = neighbors.filter((neighbor) => !!neighbor.length);

  return clearNeighbors;
}

const getAllNeighbors = (board: Board, x: number, y: number, value: BlockValue): number[][] => {
  const nearNeighbors: number[][] = getNeighbors(board, x, y, value);
  const futherNeighbors: number[][] = nearNeighbors
    .map(neighbor => getNeighbors(board, neighbor[0], neighbor[1], value))
    .flat()
    .filter(neighbor => !(neighbor[0] === x && neighbor[1] === y));

  const neighbors = [...nearNeighbors, ...futherNeighbors];

  return neighbors;
}

export const isGameOver = (board: Board): boolean => {
  const emptyBlocks = board.filter(block => !block.value);

  return !emptyBlocks.length;
}

export const getNewBoard = (blocks: BlockProbability, size: SizeBoard, limit: number): Board => {
    const board: Board = [];
  
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        let blockInfo: GeneralBlockInfo = GAME_BLOCKS[0];
  
        if (!!limit) {
          const nextBlock = getNextBlock(blocks);
  
          const variants = [
            findBlock(board, x + 1, y)?.value,
            findBlock(board, x - 1, y)?.value,
            findBlock(board, x, y + 1)?.value,
            findBlock(board, x, y - 1)?.value,
          ];
    
          const newBlockInfo = variants.includes(nextBlock.value)
            ? GAME_BLOCKS[0]
            : nextBlock;
    
          if (!!newBlockInfo.value) limit--;
    
          blockInfo = { ...newBlockInfo };
        }
      
        const block: GeneralBlock = {
          x: x,
          y: y,
          ...blockInfo,
        };
  
        board.push(block);
      }
    }
  
    return board;
  }

export const recalculateBoard = (board: Board, block: GeneralBlock): 
  {
    board: Board,
    block: GeneralBlock,
    isChanged: boolean,
    score: number,
  } => {

  const newBoard = [...board];
  let newBlock = block;
  let {x, y, value: newValue} = block;
  let isChanged = false;
  let newScore = 0;

  const neighbors = getAllNeighbors(newBoard, x, y, newValue);

  if (neighbors.length > 1) {
    isChanged = true;
    newScore = neighbors.length * newValue;
    newValue = newValue * 2 as BlockValue;
    const emptyBlock = findBlockInfo(GAME_BLOCKS, 0);

    neighbors.map(neighbor => {
      const index = findBlockIndex(board, neighbor[0], neighbor[1]);
      return newBoard[index] = {
        ...newBoard[index],
        value: 0,
        probability: emptyBlock.probability,
        price: emptyBlock.price,
      }
    });

    const mergedBlock = findBlockInfo(GAME_BLOCKS, newValue);
    newBlock = {
      ...newBlock,
      value: newValue,
      probability: mergedBlock.probability,
      price: mergedBlock.price,
    };
  }

  newBoard[findBlockIndex(board, x, y)] = {...newBlock};

  return {
    board: newBoard,
    block: newBlock,
    isChanged: isChanged, 
    score: newScore,
  };
}