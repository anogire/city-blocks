import * as React from "react";
import { withSound } from "./withSound";
import CSS from 'csstype';
import { removeMergedData } from "../../store/helpers";
import { useSelector } from "react-redux";
import { selectSize } from "../../store";


interface ElementInterface {
    onClick: (event: React.MouseEvent<HTMLElement>) => void,
    classNames?: string,
    inlineStyle?: CSS.Properties,
    dataBlock?: string,
    isMergedAnimation?: boolean,
    resultBlock?: number[],
    children?: React.ReactNode,
    curWidth?: number,
}

export const Element: React.FC<ElementInterface> = ({ curWidth=5, onClick, classNames, inlineStyle, dataBlock, isMergedAnimation = false, resultBlock, children }) => {
    const [cl, setCl] = React.useState(classNames);
    const [addBlock, setAddBlock] = React.useState("not-werty");

    const size = useSelector(selectSize);

    React.useEffect(() => {
        if(isMergedAnimation) setCl("cube with-merged-animation");
    }, [isMergedAnimation]);

    let additionalStyle: CSS.Properties = inlineStyle || {};

    if (isMergedAnimation) {
        additionalStyle = {
            ...additionalStyle,
            [`--fromX` as string]: `${JSON.parse(dataBlock!).x * curWidth}px`,
            [`--fromY` as string]: `${JSON.parse(dataBlock!).y * curWidth}px`,
            [`--toX` as string]: `${resultBlock![0] * curWidth}px`,
            [`--toY` as string]: `${resultBlock![1] * curWidth}px`,
            width: `${24 / size}rem`,
            height: `${24 / size}rem`,
        }
    }

    const deleteBlocks = React.useCallback(() => {
        setCl(classNames);
        setAddBlock("werty");
        removeMergedData();
        },
        [classNames]
    );

    return (
        isMergedAnimation
        ? <>
            <div className={addBlock}></div>
            <div
            onAnimationEnd={deleteBlocks}
            className={cl}
            style={additionalStyle}

            data-block={dataBlock}
            onClick = {onClick}
        >
            { children }
        </div>
        </>

        : 
        
        <div
            className={classNames}
            style={inlineStyle}

            data-block={dataBlock}
            onClick = {onClick}
        >
            { children }
        </div>
    );
};

export const ElementWithSound = withSound(Element);