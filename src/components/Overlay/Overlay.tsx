import React from "react";
import "./style.css";

interface OverlayProps {
    isVisible: boolean;
}

export const Overlay: React.FC<OverlayProps> = ({ isVisible }) => {
    return isVisible
        ? <div className="overlay"> GAME OVER </div>
        : null;
};