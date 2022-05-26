import React from 'react';
import { useDispatch } from 'react-redux';
import { createInitialGameAction } from '../../store';
import { SIZE_VARIANT } from '../../consts';
import { SizeBoard } from '../../types';

import './style.css';

export const Menu: React.FC = () => {
    const [sizeBoard, setSizeBoard] = React.useState<SizeBoard>(5);
    const dispatch = useDispatch();
  
    const onStartNewGame = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
          const action = createInitialGameAction(sizeBoard);
          dispatch(action);
      },
      [dispatch, sizeBoard]
    );
  
    const onSizeChange = React.useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
      setSizeBoard(+event.target.value as SizeBoard);
    }, []);

    return (
        <div className="wrap">
            <select
                name="sizeBoard"
                value={sizeBoard}
                onChange={onSizeChange}
                aria-label="choose size of board"
                className="selectSizeBoard"
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