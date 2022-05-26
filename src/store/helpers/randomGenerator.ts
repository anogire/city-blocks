import { BlockProbability, GeneralBlockInfo } from "../../types";

const binarySearch = (arr: number[], x: number, start: number, end: number): number => {  
    if (start > end) return (arr[start] >= x) ? start : -1;
    
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= x)
        return binarySearch(arr, x, start, mid - 1);
    else
        return binarySearch(arr, x, mid + 1, end);
}

export const getNextBlock = (blocks: BlockProbability): GeneralBlockInfo => {
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