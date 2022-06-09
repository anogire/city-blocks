const STORAGE_ID = "city-blocks";

interface StorageData {
    bestScore?: number,
    isSound?: boolean,
}

export function setStorageScore(score: number = 0): void {
    const storage = getStorageData();
    if (!storage.bestScore || storage.bestScore < score) {
        localStorage.setItem(STORAGE_ID, JSON.stringify({...storage, bestScore: score}));
    }
}

export function setStorageSound(isSound: boolean = true): void {
    const storage = getStorageData();
    if (!storage.isSound || storage.isSound !== isSound) {
        localStorage.setItem(STORAGE_ID, JSON.stringify({...storage, isSound: isSound}));
    }
}

export function getStorageData(): StorageData {
    const storageData = localStorage.getItem(STORAGE_ID);

    return storageData ? JSON.parse(storageData) as StorageData : {};
}