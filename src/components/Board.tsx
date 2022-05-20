import * as React from "react";
import styles from './Game.module.css';
import { useAppSelector } from "../app/hooks";
import { selectBoard, selectSize } from "./gameControl";
import { BlockVariant } from "../types";
import { Block } from "./Block";

export const Board: React.FC = () => {
    const board = useAppSelector(selectBoard);
    const size = useAppSelector(selectSize);

    return (
        <div className={styles.gameBoard} style={{gridTemplateRows: `repeat(${size}, 1fr)`}}>
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