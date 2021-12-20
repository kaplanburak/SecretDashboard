import axios from "axios";
import {
  GetUsersResponse,
  CreateUserPayload,
  CreateUserResponse,
  UpdateUserPayload,
  UpdateUserResponse,
} from "./UsersModel";

const endpoint = "/api/users";

export const UsersAPI = {
  Get: (): Promise<GetUsersResponse> => {
    return axios.get(endpoint).then((res) => res.data);
  },
  Create: (payload: CreateUserPayload): Promise<CreateUserResponse> => {
    return axios.post(endpoint, payload).then((res) => res.data);
  },
  Update: (payload: UpdateUserPayload): Promise<UpdateUserResponse> => {
    return axios.put(endpoint, payload).then((res) => res.data);
  },
  Delete: (id: number): Promise<any> => {
    return axios.delete(`${endpoint}/${id}`).then((res) => {});
  },
};
