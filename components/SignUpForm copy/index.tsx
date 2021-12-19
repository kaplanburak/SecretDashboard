import { FC } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthForm } from "../AuthForm";
import { IAuthForm } from "../AuthForm/AuthForm";
import { ISignUpForm } from "./SignUpForm";

export const SignUpForm: FC<ISignUpForm.Props> = ({ authInstance }) => {
  const handleSignUp = (formFields: IAuthForm.Fields) => {
    const { email, password } = formFields;

    createUserWithEmailAndPassword(authInstance, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("userCredential", userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return <AuthForm handleSubmit={handleSignUp} />;
};
