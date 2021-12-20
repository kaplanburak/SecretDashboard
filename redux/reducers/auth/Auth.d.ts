declare namespace IAuthReducer {
  interface State {
    user?: User;
  }

  interface User {
    displayName: string;
    email: string;
  }
}

export { IAuthReducer };
