import { BLOCK_VARIANT, IBlock, TBlockVariant, TBoard, TSize } from "../types";
 

export const getRandomBlock = () => {
  const range: TBlockVariant[] =  [...Array(3).fill(BLOCK_VARIANT[0]), ...Array(2).fill(BLOCK_VARIANT[1]), BLOCK_VARIANT[2]];
  const block = range[Math.floor(Math.random() * range.length)];

  return block;
}

export const getNewRandomBlocks = () => {
  const newBlocks: TBlockVariant[] = [];
  for (let i = 0; i < 3; i++) {
    newBlocks.push(getRandomBlock());
  }

  return newBlocks;
}

export const getNewBoard = (size: TSize) => {
  const range: Array<TBlockVariant | 0> = [...Array(size * 2).fill(0), ...BLOCK_VARIANT.slice(0, 3)];
  const board: TBoard = {};

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const key = j.toString() + i.toString();
      const randomValue = range[Math.floor(Math.random() * range.length)];
      board[key] = randomValue;
    }
  }

  return board;
}

export const getNeighbors = (board: TBoard, x: number, y: number, value: TBlockVariant): number[][] => {
  const neighbors: number[][] = [];
  
  if (board[(x + 1).toString() + y.toString()] === value) neighbors.push([x + 1, y]); 
  if (board[(x - 1).toString() + y.toString()] === value) neighbors.push([x - 1, y]); 
  if (board[x.toString() + (y + 1).toString()] === value) neighbors.push([x, y + 1]); 
  if (board[x.toString() + (y - 1).toString()] === value) neighbors.push([x, y - 1]); 
  
  const clearNeighbors = neighbors.filter((neighbor) => !!neighbor.length);

  return clearNeighbors;
}

export const recalculateBoard = (board: TBoard, block: IBlock): 
  {
    board: TBoard,
    isChanged: boolean,
    value: TBlockVariant
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
    newValue = newValue * 2 as TBlockVariant;

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