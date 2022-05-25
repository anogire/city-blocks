import * as React from "react";
import styles from './Game.module.css';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { GameAction, GeneralBlock } from "../types";
import { selectBlocks } from "./gameControl";

interface BlockProps {
    block: GeneralBlock;
  }

export const Block: React.FC<BlockProps> = ({block}) => {
    const {x, y, value} = block;
    const randomBlock = useAppSelector(selectBlocks);
    const dispatch = useAppDispatch();

    const onSetNewBlock = React.useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
          if (!!value) return;
          const newValue = randomBlock[0].value;
          const action: GameAction = {
              type: "checkBoard",
              payload: {...block, value: newValue},
          };
          dispatch(action);
      },
      [dispatch, block, value, randomBlock]
    );

    return (
        <div className={styles.block} data-id={`${x}${y}`} onClick={onSetNewBlock}>
            {!!value ? value : null}
        </div>
    );
}