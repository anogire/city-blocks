import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createChangeStatusAction, selectScore } from "../../store";
import { getStorageData, setStorageScore } from "../../store/helpers";
import { ButtonWithSound, SideEffectWithSound } from "../Sound";


import "./style.css";

interface GameOverProps {
    isVisible: boolean;
}

export const GameOver: React.FC<GameOverProps> = ({ isVisible }) => {
    const score = useSelector(selectScore);
    const dispatch = useDispatch();

    if (isVisible) {
        const storage = getStorageData() ?? 0;
        (!storage.bestScore || storage.bestScore < score) && setStorageScore(score);
    }

    const onBackToTheGame = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            const action = createChangeStatusAction("not active");
            dispatch(action);
        },
        [dispatch]
    );

    return isVisible
        ?   <div className="overlay">
                <div className="game-over-container">
                    <img src="./images/logo.png" width="50%" alt="City blocks" />
                    <h1>Congratz!</h1>
                    <div className="with-animation-firework"></div>
                </div>
                <p>Your city has reached a population of</p>
                <h2>{score}</h2>
                <SideEffectWithSound />
                <ButtonWithSound soundType="click" label=" Ok " onClick={onBackToTheGame} />
            </div>
        : null;
};