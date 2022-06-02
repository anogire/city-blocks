import * as React from "react";
import { GeneralBlock } from "../../types";

import './style.css';

interface BlockProps {
    block: GeneralBlock;
}

export const Block: React.FC<BlockProps> = ({block}) => {
    const value = block.value;
    return (
        <div className={`${!!value ? `cube` : ""}`} data-block={JSON.stringify(block)}>
            <span className={`${!!value ? `marker` : ""}`}>
                {!!value ? value : null}
            </span>
        </div>
    );
}