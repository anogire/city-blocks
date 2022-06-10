import * as React from "react";
import { GeneralBlock } from "../../types";

import './style.css';

interface BlockProps {
    block: GeneralBlock;
    isAnimation: boolean;
}

export const Block: React.FC<BlockProps> = ({block, isAnimation = false}) => {
    const delay = block.x < 3 ? block.x / 10 : .2;

    return (
        <div className={`cube ${isAnimation ? " with-cube-animation" : ""}`} style={{animationDelay: `${delay}s`}}>
            <span className="cube__marker">{block.value}</span>
            <img src="./images/boom.svg"
                className={`cube__boom-effect ${isAnimation ? " cube__boom-effect_active" : ""}`} alt="Boom" />
        </div>
    );
}