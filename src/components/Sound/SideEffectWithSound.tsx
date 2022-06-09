import * as React from "react";
import { sideSound } from "./sideSound";

interface ElementInterface {
    children?: React.ReactNode,
}

export const Element: React.FC<ElementInterface> = ({children}) => {
    return <> { children } </>;
};

export const SideEffectWithSound = sideSound(Element);