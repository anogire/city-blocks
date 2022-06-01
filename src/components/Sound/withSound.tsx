import * as React from "react";
import { CLICK_SOUND_ID, SET_BLOCK_SOUND_ID } from "../../consts";
import { GameSounds } from "../../types";
import { SoundContext } from "./SoundContext";

interface WithSoundProps {
    soundType: GameSounds;
    onClick: React.EventHandler<React.MouseEvent>;
}

export function withSound<P>(Component: React.FC<P>): React.FC<WithSoundProps & P> {
    const ButtonWithSound: React.FC<WithSoundProps & P> = ({ soundType, onClick, ...props }) => {
        const sound = React.useContext(SoundContext);

        const clickSoundRef = React.useRef<HTMLAudioElement>();
        const setBlockSoundRef = React.useRef<HTMLAudioElement>();

        React.useEffect(() => {
            clickSoundRef.current = document.getElementById(CLICK_SOUND_ID)! as HTMLAudioElement;
            setBlockSoundRef.current = document.getElementById(SET_BLOCK_SOUND_ID)! as HTMLAudioElement;
        }, []);

        const onSound = React.useCallback((e: any) => {
            const element = (function(soundType) {
                switch(soundType) {
                  case "click": return clickSoundRef.current;
                  case "set block": return setBlockSoundRef.current;
                  default: return clickSoundRef.current;
                }
              })(soundType);

            sound?.isSound && element?.play();
            onClick(e);

        }, [onClick, soundType, sound?.isSound]);

        return <Component onClick={onSound} {...props as unknown as P} />;
    };

    return ButtonWithSound;
}
