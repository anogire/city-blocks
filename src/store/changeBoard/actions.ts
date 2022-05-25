import { CheckBoardAction, CHECK_BOARD_ACTION } from "../actions";
import { GeneralBlock } from "../../types";
import { createAction } from "../common";

export const createCheckBoardAction = (payload: GeneralBlock): CheckBoardAction => {
    return createAction(CHECK_BOARD_ACTION, payload);
}