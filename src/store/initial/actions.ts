import { InitialGameAction, INITIAL_GAME_ACTION } from "../actions";
import { SizeBoard } from "../../types";
import { createAction } from "../common";

export const createInitialGameAction = (payload: SizeBoard): InitialGameAction => {
    return createAction(INITIAL_GAME_ACTION, payload);
}