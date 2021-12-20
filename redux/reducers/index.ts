import { combineReducers } from "redux";
import { CommonReducer } from "./common";
import { DashboardReducer } from "./dashboard";

export default combineReducers({
  common: CommonReducer,
  dashboard: DashboardReducer,
});
