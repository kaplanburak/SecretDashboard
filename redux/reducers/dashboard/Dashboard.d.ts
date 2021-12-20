import { User } from "../../../api/Users/UsersModel";

declare namespace IDashboardReducer {
  interface State {
    users: User[];
  }
}
