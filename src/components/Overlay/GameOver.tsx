import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GAME_OVER_SOUND_ID } from "../../consts";
import { createChangeStatusAction, selectScore } from "../../store";
import { ButtonWithSound } from "../Sound";

// @ts-ignore to avoid ts error of unknown module
import soundGameOver from "../Sound/sounds/game-over.mp3";

import "./style.css";

interface GameOverProps {
    isVisible: boolean;
}

export const GameOver: React.FC<GameOverProps> = ({ isVisible }) => {
    const score = useSelector(selectScore);
    const dispatch = useDispatch();

    const onBackToTheGame = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            const action = createChangeStatusAction("not active");
            dispatch(action);
        },
        [dispatch]
    );

    return isVisible
        ?   <div className="overlay">
                <h1>Congratz!</h1>
                <p>Your city has reached a population of</p>
                <h2>{score}</h2>
                <div style={{ position: "fixed", top: -100, left: -100 }}>
                    <audio id={GAME_OVER_SOUND_ID} src={soundGameOver as string} autoPlay/>
                </div>
                <ButtonWithSound soundType="click" label=" Ok " onClick={onBackToTheGame} />
            </div>
        : null;
};