import { createAction } from "../../store/actionCreators";
import { CheckBoardAction, CHECK_BOARD_ACTION } from "../../store/actionTypes";
import { IBlock } from "../../types";

export const createCheckBoardAction = (payload: IBlock): CheckBoardAction => {
    return createAction(CHECK_BOARD_ACTION, payload);
}