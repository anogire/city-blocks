import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGetBonusAction, selectNextMilestone, selectScore} from "../../store";
import { getStorageData } from "../../store/helpers";
import { SideEffectWithSound } from "../Sound";
import cn from "classnames";

import './style.css';

export const Score: React.FC = () => {
    const score = useSelector(selectScore);
    const { isChanged, min } = useSelector(selectNextMilestone);
    const [isGetBonus, setIsGetBonus] = React.useState(false);
    const bestScore = getStorageData().bestScore ?? 0;
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (isChanged) {
            setIsGetBonus(true);
            const action = createGetBonusAction(1);
            dispatch(action);
        }
    }, [dispatch, isChanged]);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsGetBonus(false), 2000);

        return () => clearTimeout(timer);
    }, [isChanged]);

    return (
        <>
        <div className="score-container">
            <div className="score">
                <img
                    src="/images/slider.svg"
                    className="score__back-img"
                    height="100px"
                    alt="Joker Bonus"
                />
                <div
                    className="score__slider"
                    style={{width: `${score <= 100 ? score : score * 100 / min - 100}%`}}
                />
            </div>
            <p>{score}</p>
            {!!bestScore && <p className="best-score">Your best result: {bestScore}</p>}
        </div>

        {isGetBonus
        && <SideEffectWithSound >
                <img
                    src="/images/joker.svg"
                    className={cn({"with-bonus-animation": isGetBonus})}
                    alt="Joker Bonus"
                />
            </SideEffectWithSound>
        }
        </>
    );
}