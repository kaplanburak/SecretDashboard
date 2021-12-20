import { IAction } from "../../Action";
import { ActionConsts } from "../../actions/consts";
import { ISettingsReducer } from "./Settings";

const initialState: ISettingsReducer.State = {
  newUsers: [],
};

export const SettingsReducer = (
  state = initialState,
  action: IAction<Partial<ISettingsReducer.State>>
) => {
  switch (action.type) {
    case ActionConsts.Settings.CREATE_NEW_USER:
      return {
        ...state,
        newUsers: [...state.newUsers, action.payload],
      };
    case ActionConsts.Settings.DELETE_NEW_USER:
      return {
        ...state,
        newUsers: [...action.payload],
      };
    case ActionConsts.Settings.RESET_REDUCER:
      return initialState;
    default:
      return state;
  }
};
