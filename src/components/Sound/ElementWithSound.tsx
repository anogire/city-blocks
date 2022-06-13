import * as React from "react";
import { withSound } from "./withSound";
import CSS from 'csstype';

const classNames = require('classnames');

interface ElementInterface {
    onClick: (event: React.MouseEvent<HTMLElement>) => void,
    classes?: string,
    inlineStyle?: CSS.Properties,
    dataBlock?: string,
    children?: React.ReactNode,
}

export const Element: React.FC<ElementInterface> = ({ onClick, classes, inlineStyle, dataBlock, children }) => {
    const elementClasses = classNames(classes);

    return (
        <div className={elementClasses} style={inlineStyle} data-block={dataBlock} onClick = {onClick}>
            { children }
        </div>
    );
};

export const ElementWithSound = withSound(Element);