import { Dispatch } from "redux";
import { UsersAPI } from "../../../api/Users";
import { CreateUserPayload, UpdateUserPayload } from "../../../api/Users/UsersModel";
import { IStore } from "../../store/Store";
import { ActionConsts } from "../consts";

export const SettingsActions = {
  CreateUser: (payload: CreateUserPayload) => (dispatch: Dispatch) => {
    dispatch({ type: ActionConsts.Common.SET_IS_LOADING, payload: true });
    UsersAPI.Create(payload).then((res) => {
      dispatch({ type: ActionConsts.Common.SET_IS_LOADING, payload: false });
      dispatch({ type: ActionConsts.Settings.CREATE_NEW_USER, payload: res });
    });
  },
  DeleteUser: (id: number) => (dispatch: Dispatch, getState: () => IStore) => {
    dispatch({ type: ActionConsts.Common.SET_IS_LOADING, payload: true });
    UsersAPI.Delete(id).then((res) => {
      const { newUsers } = getState().settings;

      const deletedUserIdx = newUsers.findIndex((u) => u.id === id);
      const updatedUsers = [...newUsers];
      updatedUsers.splice(deletedUserIdx, 1), console.log("updated usr", updatedUsers);

      dispatch({ type: ActionConsts.Common.SET_IS_LOADING, payload: false });
      dispatch({
        type: ActionConsts.Settings.DELETE_NEW_USER,
        payload: updatedUsers,
      });
    });
  },
};
