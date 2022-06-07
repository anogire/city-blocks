import * as React from "react";
import { GeneralBlock } from "../../types";

import './style.css';

interface BlockProps {
    block: GeneralBlock;
}

export const Block: React.FC<BlockProps> = ({block}) => {

    return (
        <div className="cube"><span className="marker">{block.value}</span></div>
    );
}