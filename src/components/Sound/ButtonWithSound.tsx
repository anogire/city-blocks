import * as React from "react";
import { withSound } from "./withSound";

interface ButtonInterface {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    label?: string,
    isDisabled?: boolean,
    classes?: string,
}

export const Button: React.FC<ButtonInterface> = ({ onClick, label, isDisabled, classes }) => {

    return (
        <button className={classes} disabled={isDisabled} onClick={onClick}>
            { label }
        </button>
    );
};

export const ButtonWithSound = withSound(Button);