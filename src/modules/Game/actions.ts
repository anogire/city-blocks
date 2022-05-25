import { createAction } from "../../store/actionCreators";
import { CheckBoardAction, CHECK_BOARD_ACTION } from "../../store/actionTypes";
import { GeneralBlock } from "../../types";

export const createCheckBoardAction = (payload: GeneralBlock): CheckBoardAction => {
    return createAction(CHECK_BOARD_ACTION, payload);
}