import { FC } from "react";
import { message as showMessage } from "antd";
import {
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { AuthForm } from "../AuthForm";
import { IAuthForm } from "../AuthForm/AuthForm";
import { ISignInForm } from "./SignInForm";
import { useLoading } from "../../hooks";
import { AuthFormType } from "../../definitions/enum";

export const SignInForm: FC<ISignInForm.Props> = ({ authInstance }) => {
  const { startLoading, stopLoading } = useLoading();

  const handleSignIn = (values: IAuthForm.Fields) => {
    startLoading();

    setPersistence(authInstance, browserSessionPersistence).then(() => {
      return signInWithEmailAndPassword(authInstance, values.email, values.password)
        .then((credential: UserCredential) => {
          stopLoading();
          showMessage.success("Logged in successfully!");
        })
        .catch((error) => {
          stopLoading();
          console.error(error);
          showMessage.error("An error occurred!");
        });
    });
  };

  return <AuthForm handleSubmit={handleSignIn} type={AuthFormType.SignIn} />;
};
