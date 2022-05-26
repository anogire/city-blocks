import * as React from "react";
import { useSelector } from "react-redux";
import { selectBlocks } from "../../store";
import { Block } from "../Block";

import './style.css';

export const NextBlocks: React.FC = () => {
    const nextBlocks = useSelector(selectBlocks);

    return (
        <div className="randomContainer">
            {
                nextBlocks.map(block => <Block key={`${block.x}${block.y}`} block={block} />)
            }
        </div>
    );
}