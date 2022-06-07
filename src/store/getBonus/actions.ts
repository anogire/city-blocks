import { GetBonusAction, GET_BONUS_ACTION } from "../actions";
import { createAction } from "../common";

export const createGetBonusAction = (payload: number): GetBonusAction => {
    return createAction(GET_BONUS_ACTION, payload);
}