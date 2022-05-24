import { createAction } from "../../store/actionCreators";
import { InitialGameAction, INITIAL_GAME_ACTION } from "../../store/actionTypes";
import { SizeBoard } from "../../types";

export const createInitialGameAction = (payload: SizeBoard): InitialGameAction => {
    return createAction(INITIAL_GAME_ACTION, payload);
}