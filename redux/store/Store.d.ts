import { ICommonReducer } from "../reducers/common/Common";
import { IDashboardReducer } from "../reducers/dashboard/Dashboard";
import { ISettingsReducer } from "../reducers/settings/Settings";

export interface IStore {
  common: ICommonReducer.State;
  dashboard: IDashboardReducer.State;
  settings: ISettingsReducer.State;
}
