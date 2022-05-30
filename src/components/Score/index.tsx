import * as React from "react";
import { useDispatch } from "react-redux";
import { createGetBonusAction} from "../../store";

import './style.css';
interface BlockProps {
    score: number;
    min: number,
    max: number,
}

export const Score: React.FC<BlockProps> = ({score, min, max}) => {
    const dispatch = useDispatch();
    console.log(min, score, max);

    React.useEffect(() => {
        if (score >= max) {
            const action = createGetBonusAction(1);
            dispatch(action);
        }
    }, [dispatch, score, max]);

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