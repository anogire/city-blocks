import { GameState } from "../common";

const STORAGE_ID = "city-blocks";

interface StorageData {
    game?: GameState,
    bestScore?: number,
    isSound?: boolean,
}

export function setStorageScore(score: number = 0): void {
    const storage = getStorageData() ?? {};
    if (!storage.bestScore || storage.bestScore < score) {
        try {
            localStorage.setItem(STORAGE_ID, JSON.stringify({...storage, bestScore: score}));
        } catch(e) {
            console.log(`There is an error when set Score item into "${STORAGE_ID}" LocalStorage`);
        }
    }
}

export function setStorageSound(isSound: boolean = true): void {
    const storage = getStorageData() ?? {};
    if (!storage.isSound || storage.isSound !== isSound) {
        try {
            localStorage.setItem(STORAGE_ID, JSON.stringify({...storage, isSound: isSound}));
        } catch(e) {
            console.log(`There is an error when set Sound item into "${STORAGE_ID}" LocalStorage`);
        }
    }
}

export function setStorageGame(state: GameState): void {
    const storage = getStorageData() ?? {};
    try {
        localStorage.setItem(STORAGE_ID, JSON.stringify({...storage, game: state}));
    } catch(e) {
        console.log(`There is an error when set Game item into "${STORAGE_ID}" LocalStorage`);
    }
}

export function removeStorageItem(item: keyof StorageData): void {
    try {
        const storage = JSON.parse(localStorage.getItem(STORAGE_ID) || "");
        delete storage[item];
        localStorage.setItem(STORAGE_ID, JSON.stringify({...storage}));
    } catch(e) {
        console.log(`There is an error when remove ${item} item from "${STORAGE_ID}" LocalStorage`);
    }
}

export function getStorageData(): StorageData {
    let storageData: StorageData = {};
    try {
        storageData = JSON.parse(localStorage.getItem(STORAGE_ID) || "");
    } catch(e) {
    }
    
    return storageData;
}