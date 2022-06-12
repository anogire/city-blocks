import * as React from "react";
import { GeneralBlock } from "../../types";

import './style.css';

interface BlockProps {
    block: GeneralBlock;
    isAnimation: boolean;
    isResultBlock?: boolean;
}

export const Block: React.FC<BlockProps> = ({isResultBlock = false, block, isAnimation = false}) => {

    const delay = block.x < 3 ? block.x / 10 : .2;

    return (
        <div 

        className={`${isResultBlock ? "cube hidden" : `cube ${isAnimation ? " with-cube-animation" : ""}`
        }`}

            style={{
                animationDelay: `${isResultBlock ? 2 : delay}s`,
            }}>
            <span className="cube__marker">{block.value}</span>
            <img src="./images/boom.svg"
                className={`cube__boom-effect ${isAnimation ? " cube__boom-effect_active" : ""}`} alt="Boom" />
        </div>
    );
}


// import * as React from "react";
// import { useSelector } from "react-redux";
// import { selectSize } from "../../store";
// import { GeneralBlock } from "../../types";
// import CSS from 'csstype';

// import './style.css';
// import { removeMergedData } from "../../store/helpers";

// interface BlockProps {
//     block: GeneralBlock;
//     isAnimation: boolean;
//     isResultBlock?: boolean;

//     isMergedAnimation?: boolean,
//     resultBlock?: number[],
//     curWidth?: number,
// }

// export const Block: React.FC<BlockProps> = ({isResultBlock = false, block, isAnimation = false, isMergedAnimation = false, resultBlock, curWidth=5}) => {

//     const delay = block.x < 3 ? block.x / 10 : .2;

//     const [cl, setCl] = React.useState("");
//     const [addBlock, setAddBlock] = React.useState("not-werty");

//     const size = useSelector(selectSize);

//     React.useEffect(() => {
//         if(isMergedAnimation) setCl("cube with-merged-animation");
//     }, [isMergedAnimation]);

//     let additionalStyle: CSS.Properties = {};

//     if (isMergedAnimation) {
//         additionalStyle = {
//             ...additionalStyle,
//             [`--fromX` as string]: `${block.x * curWidth}px`,
//             [`--fromY` as string]: `${block.y * curWidth}px`,
//             [`--toX` as string]: `${resultBlock![0] * curWidth}px`,
//             [`--toY` as string]: `${resultBlock![1] * curWidth}px`,
//             width: `${24 / size}rem`,
//             height: `${24 / size}rem`,
//         }
//     }

//     const deleteBlocks = React.useCallback(() => {
//         setCl("");
//         setAddBlock("werty");
//         removeMergedData();
//         },
//         []
//     );

//     return (
//         isMergedAnimation
//         ? <>
//             <div className={addBlock}></div>
//             <div
//                 onAnimationEnd={deleteBlocks}
//                 className={cl}
//                 style={additionalStyle}
//             >
//             </div>
//         </>

//         :

//         <div 

//         className={`${isResultBlock ? "cube hidden" : `cube ${isAnimation ? " with-cube-animation" : ""}`
//         }`}

//             style={{
//                 animationDelay: `${isResultBlock ? 2 : delay}s`,
//             }}>
//             <span className="cube__marker">{block.value}</span>
//             <img src="./images/boom.svg"
//                 className={`cube__boom-effect ${isAnimation ? " cube__boom-effect_active" : ""}`} alt="Boom" />
//         </div>
//     );
// }


// import * as React from "react";
// import { GeneralBlock } from "../../types";

// import './style.css';

// interface BlockProps {
//     block: GeneralBlock;
//     isAnimation: boolean;
//     isResultBlock?: boolean;
// }

// export const Block: React.FC<BlockProps> = ({isResultBlock = false, block, isAnimation = false}) => {

//     const delay = block.x < 3 ? block.x / 10 : .2;

//     return (
//         <div 

//         className={`${isResultBlock ? "cube hidden" : `cube ${isAnimation ? " with-cube-animation" : ""}`
//         }`}

//             style={{
//                 animationDelay: `${isResultBlock ? 2 : delay}s`,
//             }}>
//             <span className="cube__marker">{block.value}</span>
//             <img src="./images/boom.svg"
//                 className={`cube__boom-effect ${isAnimation ? " cube__boom-effect_active" : ""}`} alt="Boom" />
//         </div>
//     );
// }