import React from "react";
import { useDispatch } from "react-redux";
import { createChangeStatusAction } from "../../store";

import "./style.css";

interface JokerProps {
    isVisible: boolean;
}

export const JokerStore: React.FC<JokerProps> = ({ isVisible }) => {
    const dispatch = useDispatch();

    const onBackToTheGame = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            const action = createChangeStatusAction("playing");
            dispatch(action);
        },
        [dispatch]
      );

    return isVisible
        ?   <div className="overlay">
                <h1>Store</h1>
                <button onClick={onBackToTheGame}>Cancel</button>
            </div>
        : null;
};