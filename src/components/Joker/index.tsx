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
            <img src="/images/joker.svg" height="70px" alt="Joker Bonus" />
            { money }
        </div>
    );
}