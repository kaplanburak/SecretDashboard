import { Auth } from "firebase/auth";

declare namespace ISignInForm {
  interface Props {
    authInstance: Auth;
  }
}

export { ISignInForm };
