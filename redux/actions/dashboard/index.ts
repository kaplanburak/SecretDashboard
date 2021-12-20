import { Dispatch } from "redux";
import { UsersAPI } from "../../../api/Users";
import { User } from "../../../api/Users/UsersModel";
import { ActionConsts } from "../consts";

export const DashboardActions = {
  GetUsers: () => (dispatch: Dispatch) => {
    UsersAPI.Get().then((res) => {
      console.log("res", res);
      dispatch({ type: ActionConsts.Dashboard.SET_USERS, payload: res.data });
    });
  },
};
