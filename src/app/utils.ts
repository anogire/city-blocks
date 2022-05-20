import { IBlock, BlockVariant, Board, SizeBoard, BlockWithProbability } from "../types";

const binarySearch = (arr: number[], x: number, start: number, end: number): number => {  
  if (start > end) return (arr[start] >= x) ? start : -1;
  
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] >= x)
    return binarySearch(arr, x, start, mid - 1);
  else
    return binarySearch(arr, x, mid + 1, end);
}

export const getRandomBlock = (blocks: BlockWithProbability): BlockVariant => {
  const blockVariant = blocks.map(a => a.value);  
  const probability = blocks.map(a => a.probability);  
  const n = blocks.length;
  
  const prefix = [probability[0]];

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + probability[i];
  }

  let random = Math.floor((Math.random()* prefix[n - 1])) + 1;
  let index = binarySearch(prefix, random, 0, n - 1);

  return blockVariant[index];
}

export const getNewRandomBlocks = (blocks: BlockWithProbability): BlockVariant[] => { 
  const newBlocks: BlockVariant[] = [];
  
  for (let i = 0; i < 3; i++) {
    newBlocks.push(getRandomBlock(blocks));
  }

  return newBlocks;
}

export const getNewBoard = (blocks: BlockWithProbability, size: SizeBoard): Board => {
  const board: Board = {};
  let limit = 8;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const randomValue = (!!limit) ? getRandomBlock(blocks) : 0;
      if (!!randomValue) limit--;

      board[j.toString() + i] = (
           board[(j + 1).toString() + i]
        || board[(j - 1).toString() + i]
        || board[j + (i + 1).toString()]
        || board[j + (i - 1).toString()] === randomValue) ? 0 : randomValue;
    }
  }

  return board;
}

export const getNeighbors = (board: Board, x: number, y: number, value: BlockVariant): number[][] => {
  const neighbors: number[][] = [];
  
  if (board[(x + 1).toString() + y] === value) neighbors.push([x + 1, y]); 
  if (board[(x - 1).toString() + y] === value) neighbors.push([x - 1, y]); 
  if (board[x + (y + 1).toString()] === value) neighbors.push([x, y + 1]); 
  if (board[x + (y - 1).toString()] === value) neighbors.push([x, y - 1]); 
  
  const clearNeighbors = neighbors.filter((neighbor) => !!neighbor.length);

  return clearNeighbors;
}

export const recalculateBoard = (board: Board, block: IBlock): 
  {
    board: Board,
    isChanged: boolean,
    value: BlockVariant
  } => {

  const newBoard = {...board};
  const {x, y} = block;
  let isChanged = false;
  let newValue = block.value;

  const nearNeighbors: number[][] = getNeighbors(newBoard, x, y, newValue);
  const futherNeighbors: number[][] = nearNeighbors
    .map(neighbor => getNeighbors(newBoard, neighbor[0], neighbor[1], newValue))
    .flat()
    .filter(neighbor => neighbor.join('') !== x.toString() + y.toString()); // exclude yourself

  const neighbors = [...nearNeighbors, ...futherNeighbors];

  if (neighbors.length > 1) {
    isChanged = true;
    newValue = newValue * 2 as BlockVariant;

    neighbors.map(neighbor => newBoard[neighbor[0].toString() + neighbor[1].toString()] = 0);
    newBoard[x.toString() + y.toString()] = newValue;
    
  } else {
    newBoard[x.toString() + y.toString()] = newValue;
  }

  return {
    board: newBoard, 
    isChanged: isChanged, 
    value: newValue,
  };
}