import * as React from "react";
import styles from './Game.module.css';
import { useAppSelector } from "../app/hooks";
import { selectBlocks } from "./gameControl";

export const RandomBlocks: React.FC = () => {
    const randomBlocks = useAppSelector(selectBlocks);

    return (
        <div className={styles.randomContainer}>
            {
                randomBlocks.map((block, i) => {
                    return (
                        <div key={i} className={styles.block}>
                            {block.value}
                        </div>
                    );
                })
            }
        </div>
    );
}