import * as React from "react";
import { useSelector } from "react-redux";
import { selectScore } from "../../store";

import './style.css';

export const Score: React.FC = () => {
    const score = useSelector(selectScore);

    return (
        <div className="score">
            <h2>Score</h2>
            <span>{score}</span>
        </div>
    );
}