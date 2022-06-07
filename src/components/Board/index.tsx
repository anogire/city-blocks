import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { COUNT_NEW_RANDOM_BLOCKS } from "../../consts";
import { createCheckBoardAction, selectBoard, selectNextBlocks, selectSize } from "../../store";
import { GeneralBlock } from "../../types";
import { Block } from "../Block";
import { ElementWithSound } from "../Sound";

import './style.css';

export const Board: React.FC = () => {
    const board = useSelector(selectBoard);
    const size = useSelector(selectSize);
    const nextBlock = useSelector(selectNextBlocks)[COUNT_NEW_RANDOM_BLOCKS - 1];

    const dispatch = useDispatch();

    const onSetNewBlock = React.useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            const block: GeneralBlock = JSON.parse((event.target as HTMLDivElement).dataset.block!);

            if (!!block.value) return;

            const action = createCheckBoardAction({
                ...block, 
                value: nextBlock.value, 
                price: nextBlock.price
            });
            dispatch(action);
        },
        [dispatch, nextBlock]
    );

    return (
        <ElementWithSound 
            soundType="set block"
            onClick={onSetNewBlock} 
            classNames="game-board"
            inlineStyle={{
                gridTemplateColumns: `repeat(${size}, minmax(auto, 1fr))`, 
                gridTemplateRows: `repeat(${size}, minmax(auto, 1fr))`,
            }}
        >
            {
                board.map(block => <Block key={`${block.x}${block.y}`} block={block} />)
            }
        </ElementWithSound>
    );
}