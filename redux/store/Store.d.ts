import { ICommonReducer } from "../reducers/common/Common";
import { IDashboardReducer } from "../reducers/dashboard/Dashboard";

export interface IStore {
  common: ICommonReducer.State;
  dashboard: IDashboardReducer.State;
}
