import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCheckBoardAction } from "../../modules/Game";
import { selectBlocks } from "../../store/selectors";
import { IBlock } from "../../types";

import './style.css';

export const Block: React.FC<IBlock> = ({x, y, value}) => {
    const randomBlock = useSelector(selectBlocks);
    const dispatch = useDispatch();

    const onSetNewBlock = React.useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
          if (!!value) return;
          const action = createCheckBoardAction({x: x, y: y, value: randomBlock[0]});
          dispatch(action);
      },
      [dispatch, x, y, value, randomBlock]
    );

    return (
        <div className="block" data-id={x.toString() + y} onClick={onSetNewBlock}>
            {/* [{x}, {y}]: {value} */}
            {!!value ? value : null}
        </div>
    );
}