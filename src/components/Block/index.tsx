import * as React from "react";
import { GeneralBlock } from "../../types";

import './style.css';

interface BlockProps {
    block: GeneralBlock;
}

export const Block: React.FC<BlockProps> = ({block}) => {
    const value = block.value;
    return (
        <div className={`${!!value ? "cube" : "empty-cell"}`} data-block={JSON.stringify(block)}>
            {
                !!value ? <span className="marker">{value}</span> : null
            }
        </div>
    );
}