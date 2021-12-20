import { Dispatch } from "redux";
import { UsersAPI } from "../../../api/Users";
import { ActionConsts } from "../consts";

export const DashboardActions = {
  GetUsers: () => (dispatch: Dispatch) => {
    dispatch({ type: ActionConsts.Common.SET_IS_LOADING, payload: true });

    UsersAPI.Get().then((res) => {
      dispatch({ type: ActionConsts.Common.SET_IS_LOADING, payload: false });
      dispatch({ type: ActionConsts.Dashboard.SET_USERS, payload: res.data });
    });
  },
};
