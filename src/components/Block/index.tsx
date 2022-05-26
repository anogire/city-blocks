import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { COUNT_NEW_RANDOM_BLOCKS } from "../../consts";
import { createCheckBoardAction, selectNextBlocks } from "../../store";
import { GeneralBlock } from "../../types";

import './style.css';

interface BlockProps {
    block: GeneralBlock;
}

export const Block: React.FC<BlockProps> = ({block}) => {
    const {x, y, value} = block;
    const nextBlock = useSelector(selectNextBlocks);
    const dispatch = useDispatch();

    const onSetNewBlock = React.useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
          if (!!value) return;
          const newValue = nextBlock[COUNT_NEW_RANDOM_BLOCKS - 1].value;
          const action = createCheckBoardAction({...block, value: newValue});
          dispatch(action);
      },
      [dispatch, block, value, nextBlock]
    );

    return (
        <div className="block" data-id={`${x}${y}`} onClick={onSetNewBlock}>
            {!!value ? value : null}
        </div>
    );
}