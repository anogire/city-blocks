import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createChangeStatusAction, createInitialGameAction, selectBoard, selectSize } from '../../store';
import { SIZE_VARIANT } from '../../consts';
import { SizeBoard } from '../../types';
import { ButtonWithSound, SoundContext } from '../../components/Sound';

import './style.css';

export const Menu: React.FC = () => {
    const board = useSelector(selectBoard);
    const size = useSelector(selectSize);
    const sound = React.useContext(SoundContext);
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

    const onToggleSound = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => sound?.toggleSound(),
        [sound]
    );

    return (
        <div className="menu">
            <ButtonWithSound
                soundType="click"
                label={sound?.isSound ? "Sound On" : "Sound Off"}
                onClick={onToggleSound}
            />
            <div>
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
                <ButtonWithSound
                    soundType="click"
                    label="New Game"
                    onClick={onStartNewGame}
                />
            </div>
            <ButtonWithSound
                soundType="click"
                label="Continue"
                isDisabled={isNewGame}
                onClick={onContinueGame}
            />
        </div>
    );
}