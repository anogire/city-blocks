import * as React from "react";
import styles from './Game.module.css';
import { useAppDispatch } from "../app/hooks";
import { GameAction, SizeBoard } from "../types";
import { SIZE_VARIANT } from "../consts";

export const ControlPanel: React.FC = () => {
    const [sizeBoard, setSizeBoard] = React.useState<SizeBoard>(5);
    const dispatch = useAppDispatch();
  
    const onStartNewGame = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
          const action: GameAction = {
              type: "initialGame",
              payload: sizeBoard,
          };
          dispatch(action);
      },
      [dispatch, sizeBoard]
    );
  
    const onSizeChange = React.useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
      setSizeBoard(+event.target.value as SizeBoard);
    }, []);

    return (
        <div>
            <select
                name="sizeBoard"
                value={sizeBoard}
                onChange={onSizeChange}
                aria-label="choose size of board"
                className={styles.selectSizeBoard}
            >
            {SIZE_VARIANT.map((size, i) => (
                <option key={i} value={size}>
                {size}
                </option>
            ))}
            </select>
            <button onClick={onStartNewGame}>New Game</button>
        </div>
    );
}