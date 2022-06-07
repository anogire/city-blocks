import React from "react";

interface SoundState {
    isSound: boolean,
    toggleSound: () => void,
}

interface SoundProviderProps {
    children?: React.ReactNode,
}

export const SoundContext = React.createContext<SoundState | null>(null);

export const SoundProvider: React.FC<SoundProviderProps> = ({ children }) => {
    const [isSound, setIsSound] = React.useState(true);

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