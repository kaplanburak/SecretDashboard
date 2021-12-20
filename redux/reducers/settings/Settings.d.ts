import { CreateUserResponse } from "../../../api/Users/UsersModel";

declare namespace ISettingsReducer {
  interface State {
    newUsers: NewUser[];
  }

  interface NewUser extends CreateUserResponse {
    updatedAt?: string;
  }
}
