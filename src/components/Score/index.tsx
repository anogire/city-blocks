import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGetBonusAction, selectNextMilestone, selectScore} from "../../store";

import './style.css';

export const Score: React.FC = () => {
    const score = useSelector(selectScore);
    const { isChanged, min, max } = useSelector(selectNextMilestone);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (isChanged) {
            const action = createGetBonusAction(1);
            dispatch(action);
        }
    }, [dispatch, isChanged]);

    return (
        <div className="score">
            <h2>Score</h2>
            <span>{score}</span>

            <input
                name="radius"
                value={score}
                type="range"
                onChange={() => {}}
                min={min} max={max} step="1"
            />
        </div>
    );
}