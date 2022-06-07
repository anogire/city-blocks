import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { COUNT_NEW_RANDOM_BLOCKS, GAME_BLOCKS } from "../../consts";
import { createBuyJokerAction, createChangeStatusAction, selectMoney, selectNextBlocks } from "../../store";
import { GeneralBlock } from "../../types";
import { Block } from "../Block";

import "./style.css";

interface JokerProps {
    isVisible: boolean;
}

export const JokerStore: React.FC<JokerProps> = ({ isVisible }) => {
    const money = useSelector(selectMoney);
    const jokerVariant = GAME_BLOCKS.filter(block => !!block.price);
    const nextBlock = useSelector(selectNextBlocks)[COUNT_NEW_RANDOM_BLOCKS - 1];
    const dispatch = useDispatch();

    const onBuyJokerBlock = React.useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
            const currentBlock: GeneralBlock = JSON.parse((event.target as HTMLDivElement).dataset.block!);
            const action = createBuyJokerAction({
                ...currentBlock,
            });
          dispatch(action);
      },
      [dispatch]
    );

    const onBackToTheGame = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            const action = createChangeStatusAction("playing");
            dispatch(action);
        },
        [dispatch]
      );

    return isVisible
        ?   <div className="overlay">
                <h1>Joker</h1>
                <h3>Choose your next building</h3>
                <div className="joker-board">
                    {
                        jokerVariant.map(block => <div 
                            key={`${block.value}`} 
                            className="container" 
                            style={{
                                opacity: block.price > money ? 0.5 : 1,
                                pointerEvents: block.price > money ? "none" : "initial"
                            }}
                            onClick={onBuyJokerBlock}
                        >
                            <Block block={{...block, x: nextBlock.x, y: nextBlock.y}} />
                            <div className="joker-price">{block.price}</div>
                        </div>
                    )}
                </div>
                <button onClick={onBackToTheGame}>Cancel</button>
            </div>
        : null;
};