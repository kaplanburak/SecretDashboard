import { FC } from "react";
import { message as showMessage } from "antd";
import {
  setPersistence,
  browserLocalPersistence,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { useRouter } from "next/router";
import { AuthForm } from "../AuthForm";
import { IAuthForm } from "../AuthForm/AuthForm";
import { ISignInForm } from "./SignInForm";
import { useLoading } from "../../hooks";
import { AuthFormType } from "../../definitions/enums";

export const SignInForm: FC<ISignInForm.Props> = ({ authInstance }) => {
  const { startLoading, stopLoading } = useLoading();
  const router = useRouter();

  const handleSignIn = (values: IAuthForm.Fields) => {
    startLoading();

    setPersistence(authInstance, browserLocalPersistence).then(() => {
      signInWithEmailAndPassword(authInstance, values.email, values.password)
        .then((credential: UserCredential) => {
          stopLoading();
          showMessage.success("Success!");
          router.push("/dashboard");
        })
        .catch((error) => {
          stopLoading();

          let msg = "An error occurred!";

          if (error.code === "auth/user-not-found") {
            msg = "User not found!";
          }

          showMessage.error(msg);
        });
    });
  };

  return <AuthForm handleSubmit={handleSignIn} type={AuthFormType.SignIn} />;
};
