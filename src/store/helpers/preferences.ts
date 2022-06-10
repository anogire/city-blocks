const STORAGE_ID = "city-blocks";

interface StorageData {
    bestScore?: number,
    isSound?: boolean,
}

export function setStorageScore(score: number = 0): void {
    const storage = getStorageData();
    if (!storage.bestScore || storage.bestScore < score) {
        try {
            localStorage.setItem(STORAGE_ID, JSON.stringify({...storage, bestScore: score}));
        } catch(e) {
            console.log(`There is an error when set Score item into "${STORAGE_ID}" LocalStorage`);
        }
    }
}

export function setStorageSound(isSound: boolean = true): void {
    const storage = getStorageData();
    if (!storage.isSound || storage.isSound !== isSound) {
        try {
            localStorage.setItem(STORAGE_ID, JSON.stringify({...storage, isSound: isSound}));
        } catch(e) {
            console.log(`There is an error when set Sound item into "${STORAGE_ID}" LocalStorage`);
        }
    }
}

export function getStorageData(): StorageData {
    let storageData: StorageData = {};
    try {
        storageData = JSON.parse(localStorage.getItem(STORAGE_ID) || "");
    } catch(e) {
        console.log(`Something is wrong when get item "${STORAGE_ID}" from LocalStorage`);
    }
    
    return storageData;
}