import * as React from "react";
import { GeneralBlock } from "../../types";
import cn from "classnames";

import './style.css';

interface BlockProps {
    block: GeneralBlock;
    isAnimation: boolean;
}

export const Block: React.FC<BlockProps> = ({block, isAnimation = false}) => {
    const delay = block.x < 3 ? block.x / 10 : .2;

    return (
        <div className={cn("cube", { "with-cube-animation": isAnimation })} style={{animationDelay: `${delay}s`}}>
            <span className="cube__marker">{block.value}</span>
            <img 
                src="./images/boom.svg" 
                className={cn("cube__boom-effect", {"cube__boom-effect_active": isAnimation})}
                alt="Boom"
            />
        </div>
    );
}