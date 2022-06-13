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
    const board = useSelector(selectBoard);
    const size = useSelector(selectSize);
    const nextBlock = useSelector(selectNextBlocks)[COUNT_NEW_RANDOM_BLOCKS - 1];
    const dispatch = useDispatch();

    const[curWidth, setCurWidth] = React.useState(0);

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

    const mergingBlocks = getStorageMergedBlocks();
    const neighbors = mergingBlocks.neighbors ?? [];
    const resultBlock = mergingBlocks.resultBlock ?? []; 

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
                const isResultBlock = resultBlock[0] === block.x && resultBlock[1] === block.y;
                if (!!block.value) return (
                    <Block 
                        key={`${block.x}${block.y}`} 
                        block={block} 
                        isAnimation={true} 
                        isResultBlock={isResultBlock}
                    />
                )
                return (isMergedAnimation
                    ?   <React.Fragment key={`${block.x}${block.y}`}>
                            <ElementWithSound
                                soundType="set block"
                                onClick={onSetNewBlock} 
                                dataBlock={JSON.stringify({x: block.x, y: block.y})}
                                classes="cell-inner-effect cell-after-merging"
                            />
                            <Block 
                                block={block} 
                                isMergedAnimation={isMergedAnimation}
                                coordsResultBlock={resultBlock}
                                blockWidth={curWidth}
                                sizeBoard={size}
                            />
                        </React.Fragment>
                    :   <ElementWithSound
                            key={`${block.x}${block.y}`}
                            soundType="set block"
                            onClick={onSetNewBlock} 
                            dataBlock={JSON.stringify({x: block.x, y: block.y})}
                            classes="cell-inner-effect"
                        />
                    )
            })
        }
        </div>
    );
}