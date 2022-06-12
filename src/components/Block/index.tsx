import * as React from "react";
import { GeneralBlock, SizeBoard } from "../../types";
import { removeMergedData } from "../../store/helpers";
import { SIDE_BOARD } from "../../consts";
import CSS from 'csstype';

import './style.css';

interface BlockProps {
    block: GeneralBlock;
    isResultBlock?: boolean;
    isAnimation?: boolean;
    isMergedAnimation?: boolean;
    coordsResultBlock?: number[];
    blockWidth?: number;
    sizeBoard?: SizeBoard;
}

export const Block: React.FC<BlockProps> = (props) => {
    const {
        block,
        isResultBlock = false,
        isAnimation = false,
        isMergedAnimation = false,
        blockWidth = 5,
        sizeBoard = 5,
        coordsResultBlock
    } = props;
    const delay = block.x < 3 ? block.x / 10 : .2;

    const [mergingClasses, setMergingClasses] = React.useState("cube with-merging-animation");
    const [resultBlockClasses, setResultBlockClasses] = React.useState("cube with-cube-animation merged-block-hidden");

    let pathForMerging: CSS.Properties = {};

    if(isMergedAnimation) {
        pathForMerging =
        {
            [`--fromX` as string]: `${block.x * blockWidth}px`,
            [`--fromY` as string]: `${block.y * blockWidth}px`,
            [`--toX` as string]: `${coordsResultBlock![0] * blockWidth}px`,
            [`--toY` as string]: `${coordsResultBlock![1] * blockWidth}px`,
            width: `${SIDE_BOARD / sizeBoard}rem`,
            height: `${SIDE_BOARD / sizeBoard}rem`,
        }                
   }

    const onDeleteMergedBlocks = React.useCallback(() => {
        setMergingClasses("merged-blocks-delete");
        removeMergedData();
    }, []);

    const onShowResultBlock = React.useCallback(() => {
        setResultBlockClasses("cube with-cube-animation");
    }, []);

    if(isMergedAnimation) {
        return <div onAnimationEnd={onDeleteMergedBlocks} className={mergingClasses} style={pathForMerging} />
    }

    return (isResultBlock
        ?   <div
                onAnimationStart={onShowResultBlock}
                className={resultBlockClasses} style={{ animationDelay: `.5s` }}
            >
                <span className="cube__marker">{block.value}</span>
                <img src="./images/boom.svg" style={{ animationDelay: `1s` }}
                    className={"cube__boom-effect cube__boom-effect_active"} alt="Boom" />
            </div>
        :   <div
                className={`cube ${isAnimation ? " with-cube-animation" : ""}`}
                style={{ animationDelay: `${delay}s`}}
            >
                <span className="cube__marker">{block.value}</span>
                <img src="./images/boom.svg"
                    className={`cube__boom-effect ${isAnimation ? " cube__boom-effect_active" : ""}`} alt="Boom" />
            </div>
    );
}