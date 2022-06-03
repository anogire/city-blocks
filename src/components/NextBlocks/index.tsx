import * as React from "react";
import { useSelector } from "react-redux";
import { COUNT_NEW_RANDOM_BLOCKS } from "../../consts";
import { selectNextBlocks } from "../../store";
import { Block } from "../Block";

import './style.css';

export const NextBlocks: React.FC = () => {
    const nextBlocks = useSelector(selectNextBlocks);

    return (
        <div
            className="next-blocks-container"
            style={{
                gridTemplateRows: `repeat(${COUNT_NEW_RANDOM_BLOCKS}, minmax(auto, 1fr))`, 
                gridTemplateColumns: `repeat(1, minmax(auto, 1fr))`,
            }}
        >
            {
                nextBlocks.map(block => <Block key={`${block.x}${block.y}`} block={block} />)
            }
        </div>
    );
}