import { GAME_BLOCKS } from "../consts";
import { BlockProbability, BlockValue, Board, GeneralBlock, GeneralBlockInfo, SizeBoard } from "../types";

const findBlock = (board: Board, x: number, y: number) => {
  return board.find(block => block.x === x && block.y === y);
}

const findBlockIndex = (board: Board, x: number, y: number) => {
  return board.findIndex(block => block.x === x && block.y === y);
}

const findProbability = (blocks: BlockProbability, value: BlockValue) => {
  return blocks.find(block => block.value === value)!.probability;
}

const binarySearch = (arr: number[], x: number, start: number, end: number): number => {  
  if (start > end) return (arr[start] >= x) ? start : -1;
  
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] >= x)
    return binarySearch(arr, x, start, mid - 1);
  else
    return binarySearch(arr, x, mid + 1, end);
}

export const getRandomBlock = (blocks: BlockProbability): GeneralBlockInfo => {
  const blockVariant = blocks.map(a => a.value);  
  const probability = blocks.map(a => a.probability);  
  const n = blocks.length;
  
  const prefix = [probability[0]];

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + probability[i];
  }

  let random = Math.floor((Math.random()* prefix[n - 1])) + 1;
  let index = binarySearch(prefix, random, 0, n - 1);

  return {
    value: blockVariant[index],
    probability: probability[index],
  };
}

export const getNewRandomBlocks = (blocks: BlockProbability, count: number): GeneralBlock[] => { 
  const randomBlocks: GeneralBlock[] = [];
  
  for (let i = 0; i < count; i++) {
    const blockInfo = getRandomBlock(blocks);
    const block: GeneralBlock = {
      x: i,
      y: 0,
      ...blockInfo,
    }
    randomBlocks.push(block);
  }

  return randomBlocks;
}

export const getNewBoard = (blocks: BlockProbability, size: SizeBoard, limit: number): Board => {
  const board: Board = [];

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let blockInfo: GeneralBlockInfo = GAME_BLOCKS[0];

      if (!!limit) {
        const randomBlock = getRandomBlock(blocks);

        const variants = [
          findBlock(board, x + 1, y)?.value,
          findBlock(board, x - 1, y)?.value,
          findBlock(board, x, y + 1)?.value,
          findBlock(board, x, y - 1)?.value,
        ];
  
        const newBlockInfo = variants.includes(randomBlock.value)
          ? GAME_BLOCKS[0]
          : randomBlock;
  
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

export const getNeighbors = (board: Board, x: number, y: number, value: BlockValue): number[][] => {
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

export const recalculateBoard = (board: Board, block: GeneralBlock): 
  {
    board: Board,
    isChanged: boolean,
    value: BlockValue,
  } => {

  const newBoard = [...board];
  const {x, y} = block;
  let isChanged = false;
  let newValue = block.value;

  const nearNeighbors: number[][] = getNeighbors(newBoard, x, y, newValue);
  const futherNeighbors: number[][] = nearNeighbors
    .map(neighbor => getNeighbors(newBoard, neighbor[0], neighbor[1], newValue))
    .flat()
    .filter(neighbor => !(neighbor[0] === x && neighbor[1] === y));

  const neighbors = [...nearNeighbors, ...futherNeighbors];

  if (neighbors.length > 1) {
    isChanged = true;
    newValue = newValue * 2 as BlockValue;

    neighbors.map(neighbor => {
      const index = findBlockIndex(board, neighbor[0], neighbor[1]);
      return newBoard[index] = {
        ...newBoard[index],
        value: 0,
        probability: findProbability (GAME_BLOCKS, 0),
      }
    });
  }

  newBoard[findBlockIndex(board, x, y)] = {
    ...block,
    value: newValue,
    probability: findProbability (GAME_BLOCKS, newValue),
  };

  return {
    board: newBoard, 
    isChanged: isChanged, 
    value: newValue,
  };
}