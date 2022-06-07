import * as React from "react";
import { GeneralBlock } from "../../types";

import './style.css';

interface BlockProps {
    block: GeneralBlock;
}

export const Block: React.FC<BlockProps> = ({block}) => {
    const delay = block.x < 3 ? block.x / 10 : .2;
    

    return (
        <div className="cube" style={{animationDelay: `${delay}s`}}>
            <span className="marker">{block.value}</span>
            <img src="./images/boom.svg" className="boom-effect" alt="Boom" />
        </div>
    );
}