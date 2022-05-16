import * as React from "react";
import styles from './Game.module.css';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { GameAction, IBlock } from "../types";
import { selectBlocks } from "./gameControl";

export const Block: React.FC<IBlock> = ({x, y, value}) => {
    const randomBlock = useAppSelector(selectBlocks);
    const dispatch = useAppDispatch();

    const onSetNewBlock = React.useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
          if (!!value) return;
          const action: GameAction = {
              type: "checkBoard",
              payload: {x: x, y: y, value: randomBlock[0]},
          };
          dispatch(action);
      },
      [dispatch, x, y, value, randomBlock]
    );

    return (
        <div className={styles.block} data-id={x+y} onClick={onSetNewBlock}>
            {/* [{x}, {y}]: {value} */}
            {!!value ? value : null}
        </div>
    );
}