import * as React from "react";
import { GeneralBlock } from "../../types";
import './style.css';

const classNames = require('classnames');

interface BlockProps {
    block: GeneralBlock;
    isAnimation: boolean;
}

export const Block: React.FC<BlockProps> = ({block, isAnimation = false}) => {
    const delay = block.x < 3 ? block.x / 10 : .2;
    const blockClasses = classNames("cube", isAnimation && "with-cube-animation");
    const effectClasses = classNames("cube__boom-effect", isAnimation && "cube__boom-effect_active");

    return (
        <div className={blockClasses} style={{animationDelay: `${delay}s`}}>
            <span className="cube__marker">{block.value}</span>
            <img src="./images/boom.svg" className={effectClasses} alt="Boom" />
        </div>
    );
}