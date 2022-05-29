import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGetBonusAction, selectScore } from "../../store";

import './style.css';

export const Score: React.FC = () => {
    const score = useSelector(selectScore);
    const [jokerIndicator, setJokerIndicator] = React.useState(0);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (score >= jokerIndicator + 100) {
            setJokerIndicator(score);
            const action = createGetBonusAction(1);
            dispatch(action);
        }
    }, [dispatch, score, jokerIndicator]);

    return (
        <div className="score">
            <h2>Score</h2>
            <span>{score}</span>

            <input
                name="radius"
                value={score}
                type="range"
                onChange={() => {}}
                min={jokerIndicator} max={jokerIndicator + 100} step="1"
            />
        </div>
    );
}