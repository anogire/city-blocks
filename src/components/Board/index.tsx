import * as React from "react";
import { useSelector } from "react-redux";
import { selectBoard, selectSize } from "../../store";
import { Block } from "../Block";

import './style.css';

export const Board: React.FC = () => {
    const board = useSelector(selectBoard);
    const size = useSelector(selectSize);

    return (
        <div className="gameBoard" style={{gridTemplateRows: `repeat(${size}, 1fr)`}}>
        {
            board.map(block => <Block key={`${block.x}${block.y}`} block={block} />)
        }
        </div>
    );
}