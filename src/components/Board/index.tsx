import * as React from "react";
import { Block } from "../Block";
import { useSelector } from "react-redux";
import { selectBoard, selectSize } from "../../store/selectors";

import './style.css';

export const Board: React.FC = () => {
    const board = useSelector(selectBoard);
    const size = useSelector(selectSize);

    return (
        <div className="gameBoard" style={{gridTemplateRows: `repeat(${size}, 1fr)`}}>
        {
            board.map(block => {
                return (
                    <Block key={`${block.x}${block.y}`} block={block} />
                );
            })
        }
        </div>
    );
}