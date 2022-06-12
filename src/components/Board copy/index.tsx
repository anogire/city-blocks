import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { COUNT_NEW_RANDOM_BLOCKS } from "../../consts";
import { createCheckBoardAction, selectBoard, selectNextBlocks, selectSize } from "../../store";
import { getStorageMergedBlocks } from "../../store/helpers";
import { GeneralBlock } from "../../types";
import { Block } from "../Block";
import { ElementWithSound } from "../Sound";

import './style.css';

export const Board: React.FC = () => {  
    const[curWidth, setCurWidth] = React.useState(0);  

    const board = useSelector(selectBoard);
    const size = useSelector(selectSize);

    const nextBlock = useSelector(selectNextBlocks)[COUNT_NEW_RANDOM_BLOCKS - 1];
    const dispatch = useDispatch();

    const onSetNewBlock = React.useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            setCurWidth(event.currentTarget.offsetWidth);

            const block: GeneralBlock = JSON.parse((event.target as HTMLElement).dataset.block!);

            const action = createCheckBoardAction({
                ...block, 
                value: nextBlock.value,
                probability: nextBlock.probability,
                price: nextBlock.price,
            });
            dispatch(action);
        },
        [dispatch, nextBlock]
    );

    const mergedBlocks = getStorageMergedBlocks();
    const neighbors = mergedBlocks.neighbors || [];
    const resultBlock = mergedBlocks.resultBlock || []; 

    return (
        <div
            className="game-board"
            style={{
                gridTemplateColumns: `repeat(${size}, minmax(auto, 1fr))`, 
                gridTemplateRows: `repeat(${size}, minmax(auto, 1fr))`,
            }}
        >
            {
                board.map(block => {

                    const isMergedAnimation = neighbors.some(item => item[0] === block.x && item[1] === block.y);
                    const result = resultBlock[0] === block.x && resultBlock[1] === block.y;

                    // if (!!block.value) return (
                    //     <Block 
                    //         key={`${block.x}${block.y}`} 
                    //         block={block} 
                    //         isAnimation={true} 
                    //         isResultBlock={result}
                    //     />
                    // )
                    // return (isMergedAnimation
                    //     ?   <div key={`${block.x}${block.y}`}>
                    //             <ElementWithSound
                    //                 soundType="set block"
                    //                 onClick={onSetNewBlock} 
                    //             />
                    //             <Block 
                    //                 block={block} 
                    //                 isAnimation={false} 
                    //                 isMergedAnimation={isMergedAnimation}
                    //                 resultBlock={resultBlock}
                    //                 curWidth={curWidth}
                    //             />
                    //         </div>
                    //     :   <ElementWithSound
                    //             key={`${block.x}${block.y}`}
                    //             soundType="set block"
                    //             onClick={onSetNewBlock} 
                    //             dataBlock={JSON.stringify({x: block.x, y: block.y})}
                    //             classNames="cell-inner-effect"
                    //         />
                    //     )
                    return (!!block.value)
                    ?  <Block 
                            key={`${block.x}${block.y}`} 
                            block={block} 
                            isAnimation={true} 
                            isResultBlock={result}
                        />                
                    :  <ElementWithSound
                            key={`${block.x}${block.y}`}
                            soundType="set block"
                            onClick={onSetNewBlock} 
                            dataBlock={JSON.stringify({x: block.x, y: block.y})}
                            classNames="cell-inner-effect"
                            // isMergedAnimation={isMergedAnimation}
                            // resultBlock={isMergedAnimation ? resultBlock : []}
                            // curWidth={curWidth}
                        />
                }

                )
            }
        </div>
    );
}