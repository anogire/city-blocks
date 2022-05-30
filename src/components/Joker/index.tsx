import * as React from "react";
import { useDispatch } from "react-redux";
import { createChangeStatusAction } from "../../store";

import './style.css';

export const Joker: React.FC = () => {
    const dispatch = useDispatch();

    const onJokerStore = React.useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            const action = createChangeStatusAction("store");
            dispatch(action);
        },
        [dispatch]
      );


    return (
        <div className="joker" onClick={onJokerStore}>
            <h2>Joker</h2>
        </div>
    );
}