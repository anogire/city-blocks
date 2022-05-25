import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCheckBoardAction, selectBlocks } from "../../store";
import { GeneralBlock } from "../../types";

import './style.css';

interface BlockProps {
    block: GeneralBlock;
}

export const Block: React.FC<BlockProps> = ({block}) => {
    const {x, y, value} = block;
    const randomBlock = useSelector(selectBlocks);
    const dispatch = useDispatch();

    const onSetNewBlock = React.useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
          if (!!value) return;
          const newValue = randomBlock[0].value;
          const action = createCheckBoardAction({...block, value: newValue});
          dispatch(action);
      },
      [dispatch, block, value, randomBlock]
    );

    return (
        <div className="block" data-id={`${x}${y}`} onClick={onSetNewBlock}>
            {!!value ? value : null}
        </div>
    );
}