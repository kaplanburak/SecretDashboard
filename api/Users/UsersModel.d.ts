export interface GetUsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface NewUser {
  name: string;
  job: string;
}

export interface CreateUserPayload extends NewUser {}

export interface CreateUserResponse extends NewUser {
  id: number;
  createdAt: string;
}

export interface UpdateUserPayload extends NewUser {}

export interface UpdateUserResponse extends NewUser {
  updatedAt: string;
}
