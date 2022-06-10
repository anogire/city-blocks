import * as React from "react";
import { CONGRATZ_SOUND_ID } from "../../consts";
import { SoundContext } from "./SoundContext";

export function sideSound<P>(Component: React.FC<P>): React.FC<P> {
    const SideSoundEffect: React.FC<P> = ({ ...props }) => {
        const sound = React.useContext(SoundContext);
        const getBonusSoundRef = React.useRef<HTMLAudioElement>();

        getBonusSoundRef.current = document.getElementById(CONGRATZ_SOUND_ID)! as HTMLAudioElement;
        sound?.isSound && getBonusSoundRef.current.play();

        return <Component {...props as unknown as P} />;
    };

    return SideSoundEffect;
}