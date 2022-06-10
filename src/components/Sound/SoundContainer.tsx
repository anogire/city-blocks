import * as React from "react";
import { CLICK_SOUND_ID, CONGRATZ_SOUND_ID, SET_BLOCK_SOUND_ID } from "../../consts";  

// @ts-ignore to avoid ts error of unknown module
import soundClick from "./sounds/click.wav";
// @ts-ignore to avoid ts error of unknown module
import soundSetBlock from "./sounds/block.wav";
// @ts-ignore to avoid ts error of unknown module
import soundCongratz from "./sounds/congratz.mp3";


export const SoundContainer: React.FC = () => {

    return (
        <div style={{ position: "fixed", top: -100, left: -100 }}>
            <audio id={CLICK_SOUND_ID} src={soundClick as string} preload="metadata" />
            <audio id={SET_BLOCK_SOUND_ID} src={soundSetBlock as string} preload="metadata" />
            <audio id={CONGRATZ_SOUND_ID} src={soundCongratz as string} preload="metadata"/>
        </div>
    );
};