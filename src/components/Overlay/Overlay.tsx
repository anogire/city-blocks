import React from "react";
import { useSelector } from "react-redux";
import { selectScore } from "../../store";

import "./style.css";

interface OverlayProps {
    isVisible: boolean;
}

export const Overlay: React.FC<OverlayProps> = ({ isVisible }) => {
    const score = useSelector(selectScore);

    return isVisible
        ? <div className="overlay">
            <h1>Congratz</h1>
            <p>Your city has reached a population of</p>
            <p>{score}</p>
          </div>
        : null;
};