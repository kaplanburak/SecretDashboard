import { Auth } from "firebase/auth";

declare namespace ISignUpForm {
  interface Props {
    authInstance: Auth;
  }
}

export { ISignUpForm };
