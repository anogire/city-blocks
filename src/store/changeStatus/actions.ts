import { ChangeStatusAction, CHANGE_STATUS_ACTION } from "../actions";
import { createAction, GameStatus } from "../common";

export const createChangeStatusAction = (payload: GameStatus): ChangeStatusAction => {
    return createAction(CHANGE_STATUS_ACTION, payload);
}