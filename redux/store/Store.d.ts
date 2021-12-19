import { ICommonReducer } from "../reducers/common/Common";

export interface IStore {
  common: ICommonReducer.State;
}
