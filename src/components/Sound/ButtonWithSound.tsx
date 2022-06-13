import * as React from "react";
import { withSound } from "./withSound";

const classNames = require('classnames');

interface ButtonInterface {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    label?: string,
    isDisabled?: boolean,
    classes?: string,
}

export const Button: React.FC<ButtonInterface> = ({ onClick, label, isDisabled, classes }) => {
    const btnClasses = classNames(classes);

    return (
        <button className={btnClasses} disabled={isDisabled} onClick={onClick}>
            { label }
        </button>
    );
};

export const ButtonWithSound = withSound(Button);