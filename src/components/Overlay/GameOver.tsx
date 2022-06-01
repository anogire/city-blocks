import React from "react";
import { useSelector } from "react-redux";
import { GAME_OVER_SOUND_ID } from "../../consts";
import { selectScore } from "../../store";

// @ts-ignore to avoid ts error of unknown module
import soundGameOver from "../Sound/sounds/game-over.mp3";

import "./style.css";

interface GameOverProps {
    isVisible: boolean;
}

export const GameOver: React.FC<GameOverProps> = ({ isVisible }) => {
    const score = useSelector(selectScore);

    return isVisible
        ?   <div className="overlay">
                <h1>Congratz!</h1>
                <p>Your city has reached a population of</p>
                <h2>{score}</h2>
                <div style={{ position: "fixed", top: -100, left: -100 }}>
                    <audio id={GAME_OVER_SOUND_ID} src={soundGameOver as string} autoPlay/>
                </div>
            </div>
        : null;
};