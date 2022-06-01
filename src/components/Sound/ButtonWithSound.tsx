import * as React from "react";
import { withSound } from "./withSound";

interface ButtonInterface {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    label?: string,
    isDisabled?: boolean,
    classNames?: string,
}

export const Button: React.FC<ButtonInterface> = ({ onClick, label, isDisabled, classNames }) => {

    return (
        <button
            className={`${classNames ? ` ${classNames}` : ""}`}
            disabled={isDisabled}
            onClick={onClick}
        >
            { label }
        </button>
    );
};

export const ButtonWithSound = withSound(Button);