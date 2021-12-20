import { IAction } from "../../Action";
import { ActionConsts } from "../../actions/consts";
import { IDashboardReducer } from "./Dashboard";

const initialState: IDashboardReducer.State = {
  users: [],
};

export const DashboardReducer = (
  state = initialState,
  action: IAction<Partial<IDashboardReducer.State>>
) => {
  switch (action.type) {
    case ActionConsts.Dashboard.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ActionConsts.Dashboard.RESET_REDUCER:
      return initialState;
    default:
      return state;
  }
};
