import * as React from "react";
import { useSelector } from "react-redux";
import { selectNextBlocks } from "../../store";
import { Block } from "../Block";

import './style.css';

export const NextBlocks: React.FC = () => {
    const nextBlocks = useSelector(selectNextBlocks);

    return (
        <div className="next-blocks-container">
            {
                nextBlocks.map(block => <Block key={`${block.x}${block.y}`} block={block} />)
            }
        </div>
    );
}