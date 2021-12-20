import { ICommonReducer } from "./Common";
import { IAction } from "../../Action";
import { ActionConsts } from "../../actions/consts";

const initialState: ICommonReducer.State = {
  isLoading: false,
};

export const CommonReducer = (
  state = initialState,
  action: IAction<Partial<ICommonReducer.State>>
) => {
  switch (action.type) {
    case ActionConsts.Common.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ActionConsts.Common.RESET_REDUCER:
      return initialState;
    default:
      return state;
  }
};
