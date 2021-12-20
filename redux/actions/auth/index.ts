import { Dispatch } from "redux";
import { IAuthReducer } from "../../reducers/auth/Auth";
import { ActionConsts } from "../consts";

export const AuthActions = {
  setUser: (payload?: IAuthReducer.User) => (dispatch: Dispatch) => {
    dispatch({ type: ActionConsts.Auth.SET_USER, payload });
  },
};
