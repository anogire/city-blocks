import React from "react";
import { getStorageData } from "../../store/helpers";

interface SoundState {
    isSound: boolean,
    toggleSound: () => void,
}

interface SoundProviderProps {
    children?: React.ReactNode,
}

export const SoundContext = React.createContext<SoundState | null>(null);

export const SoundProvider: React.FC<SoundProviderProps> = ({ children }) => {
    const [isSound, setIsSound] = React.useState(getStorageData().isSound ?? true);

    const context = React.useMemo(() => ({
        isSound,
        toggleSound: () => setIsSound(!isSound),
    }), [isSound]);

    return (
        <SoundContext.Provider value={context}>
            {children}
        </SoundContext.Provider>
    );
};