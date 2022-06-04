import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { COUNT_NEW_RANDOM_BLOCKS, GAME_BLOCKS } from "../../consts";
import { createBuyJokerAction, createChangeStatusAction, selectMoney, selectNextBlocks } from "../../store";
import { GeneralBlock } from "../../types";
import { Block } from "../Block";
import { ButtonWithSound, ElementWithSound } from "../Sound";

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
      (event: React.MouseEvent<HTMLElement>) => {
            const currentBlock: GeneralBlock = JSON.parse((event.currentTarget as HTMLElement).dataset.block!);
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
                jokerVariant.map(block => block.price > money
                    ?   <div key={`${block.value}`} className="joker-cell not-active">
                            <Block block={{...block, x: nextBlock.x, y: nextBlock.y}} />
                        </div>
                    :   <ElementWithSound key={`${block.value}`}
                            soundType="click"
                            onClick={onBuyJokerBlock}
                            classNames="joker-cell effect"
                            dataBlock={JSON.stringify({...block, x: nextBlock.x, y: nextBlock.y})}
                        >
                            <Block block={{...block, x: nextBlock.x, y: nextBlock.y}} />
                        </ElementWithSound>
                )
                    
                }
            </div>
            <ButtonWithSound soundType="click" label=" Cancel " onClick={onBackToTheGame} />
          </div>
      : null;
    // return isVisible
    //     ?   <div className="overlay">
    //             <h1>Joker</h1>
    //             <h3>Choose your next building</h3>
    //             <div className="joker-board">


    //                 {
    //                     jokerVariant.map(block => 
    //                     <div  key={`${block.value}`}>
    //                     <div className={`joker1 ${block.price > money ? "" : " add"}`}>
    //                         { block.price > money
    //                         ?  <div
    //                                     className="cube1 not-active"
    //                                 >
    //                                 <span className="marker1">{block.value}</span>
    //                                 </div>
    //                         :  <ElementWithSound 
    //                                 soundType="click"
    //                                 onClick={onBuyJokerBlock}
    //                                 classNames="cube1"
    //                                 dataBlock={JSON.stringify({...block, x: nextBlock.x, y: nextBlock.y})}

    //                             >
    //                                 <span className="marker1"
    //                                 >
    //                                     {block.value}
    //                                     </span>
    //                             </ElementWithSound>
    //                             }
    //                         </div>
    //                     <div className="joker-price">{block.price}</div>
    //                     </div>
                            

    //                     )
    //                 }

    //             </div>
    //             <ButtonWithSound soundType="click" label=" Cancel " onClick={onBackToTheGame} />
    //         </div>
    //     : null;
};