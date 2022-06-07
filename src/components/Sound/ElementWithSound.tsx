import * as React from "react";
import { withSound } from "./withSound";
import CSS from 'csstype';

interface ElementInterface {
    onClick: (event: React.MouseEvent<HTMLElement>) => void,
    classNames?: string,
    inlineStyle?: CSS.Properties,
    dataBlock?: string,
    children?: React.ReactNode,
}

export const Element: React.FC<ElementInterface> = ({ onClick, classNames, inlineStyle, dataBlock, children }) => {

    return (
        <div
            className={`${classNames ? ` ${classNames}` : ""}`}
            style={inlineStyle}
            data-block={dataBlock}
            onClick = {onClick}
        >
            { children }
        </div>
    );
};

export const ElementWithSound = withSound(Element);