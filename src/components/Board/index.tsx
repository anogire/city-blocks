import * as React from "react";
import { BlockVariant } from "../../types";
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
            Object.entries(board).sort().map(([key, value]) => {
                return (
                    <Block key={key} x={+key[0]} y={+key[1]} value={value as BlockVariant}/>
                );
            })
        }
        </div>
    );
}