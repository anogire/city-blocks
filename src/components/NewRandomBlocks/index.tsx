import * as React from "react";
import { useSelector } from "react-redux";
import { selectBlocks } from "../../store";
import { Block } from "../Block";

import './style.css';

export const RandomBlocks: React.FC = () => {
    const randomBlocks = useSelector(selectBlocks);

    return (
        <div className="randomContainer">
            {
                randomBlocks.map(block => <Block key={`${block.x}${block.y}`} block={block} />)
            }
        </div>
    );
}