import { ContinueGameAction, CONTINUE_GAME_ACTION } from "../actions";
import { createAction} from "../common";

export const createContinueGameAction = (): ContinueGameAction => {
    return createAction(CONTINUE_GAME_ACTION);
}