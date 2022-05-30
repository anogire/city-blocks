import React from "react";
import { useSelector } from "react-redux";
import { selectScore } from "../../store";

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
            </div>
        : null;
};