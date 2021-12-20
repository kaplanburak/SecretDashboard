import { combineReducers } from "redux";
import { CommonReducer } from "./common";
import { DashboardReducer } from "./dashboard";
import { SettingsReducer } from "./settings";

export default combineReducers({
  common: CommonReducer,
  dashboard: DashboardReducer,
  settings: SettingsReducer,
});
