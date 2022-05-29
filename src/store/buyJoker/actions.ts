import { BuyJokerAction, BUY_JOKER_ACTION } from "../actions";
import { GeneralBlock } from "../../types";
import { createAction } from "../common";

export const createBuyJokerAction = (payload: GeneralBlock): BuyJokerAction => {
    return createAction(BUY_JOKER_ACTION, payload);
}