import * as React from "react";
import { useDispatch } from "react-redux";
import { createChangeStatusAction } from "../../store";

import './style.css';

export const Exit: React.FC = () => {
    const dispatch = useDispatch();

    const onExitFromGame = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            const action = createChangeStatusAction("not active");
            dispatch(action);
        },
        [dispatch]
      );
  

    return (
        <div className="exit">
            <button onClick={onExitFromGame}> X </button>
        </div>
    );
}