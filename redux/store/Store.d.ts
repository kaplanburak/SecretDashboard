import { IAuthReducer } from "../reducers/auth/Auth";
import { ICommonReducer } from "../reducers/common/Common";

export interface IStore {
  common: ICommonReducer.State;
  auth: IAuthReducer.State;
}
