import { IAuthReducer } from "./Auth";
import { IAction } from "../../Action";
import { ActionConsts } from "../../actions/consts";

const initialState: IAuthReducer.State = {
  user: undefined,
};

export const AuthReducer = (state = initialState, action: IAction<Partial<IAuthReducer.State>>) => {
  switch (action.type) {
    case ActionConsts.Auth.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ActionConsts.Auth.RESET_REDUCER:
      return initialState;
    default:
      return state;
  }
};
