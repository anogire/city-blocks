import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createChangeStatusAction, selectMoney } from "../../store";

import './style.css';

export const Joker: React.FC = () => {
    const money = useSelector(selectMoney);
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
            { money }
        </div>
    );
}