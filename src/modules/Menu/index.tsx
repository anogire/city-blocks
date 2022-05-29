import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createChangeStatusAction, createInitialGameAction, selectBoard, selectSize } from '../../store';
import { SIZE_VARIANT } from '../../consts';
import { SizeBoard } from '../../types';

import './style.css';

export const Menu: React.FC = () => {
    const board = useSelector(selectBoard);
    const size = useSelector(selectSize);
    const [isNewGame, setIsNewGame] = React.useState<boolean>(!board.length);
    const [sizeBoard, setSizeBoard] = React.useState<SizeBoard>(size);
    const dispatch = useDispatch();
  
    const onStartNewGame = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsNewGame(false);
            const action = createInitialGameAction(sizeBoard);
            dispatch(action);
      },
      [dispatch, sizeBoard]
    );

    const onContinueGame = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            const action = createChangeStatusAction("playing");
            dispatch(action);
        },
        [dispatch]
      );
  
    const onSizeChange = React.useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setIsNewGame(true);
        setSizeBoard(+event.target.value as SizeBoard);
    }, []);

    return (
        <div className="menu">
            <select
                name="sizeBoard"
                value={sizeBoard}
                onChange={onSizeChange}
                aria-label="choose size of board"
                className="menu__size-board"
            >
            {SIZE_VARIANT.map((size, i) => (
                <option key={i} value={size}>
                {size}
                </option>
            ))}
            </select>
            <button onClick={onStartNewGame}>New Game</button>
            <button onClick={onContinueGame} disabled={isNewGame}>Continue</button>
        </div>
    );
}