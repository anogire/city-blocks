import * as React from "react";
import styles from './Game.module.css';
import { useAppSelector } from "../app/hooks";
import { selectBoard, selectSize } from "./gameControl";
import { Block } from "./Block";

export const Board: React.FC = () => {
    const board = useAppSelector(selectBoard);
    const size = useAppSelector(selectSize);
    return (
        <div className={styles.gameBoard} style={{gridTemplateRows: `repeat(${size}, 1fr)`}}>
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