import { FC } from "react";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword, UserCredential, updateProfile } from "firebase/auth";
import { message as showMessage } from "antd";
import { AuthForm } from "../AuthForm";
import { IAuthForm } from "../AuthForm/AuthForm";
import { ISignUpForm } from "./SignUpForm";
import { useLoading } from "../../hooks";
import { AuthFormType } from "../../definitions/enum";

export const SignUpForm: FC<ISignUpForm.Props> = ({ authInstance }) => {
  const router = useRouter();
  const { startLoading, stopLoading } = useLoading();

  const handleError = (error: any) => {
    stopLoading();

    console.error(error);

    const { code } = error;
    let message = "An error occurred!";

    if (code === "auth/email-already-in-use") {
      message = "Email already exists!";
    }

    showMessage.error(message);
  };

  const handleSignUp = (values: IAuthForm.Fields) => {
    startLoading();

    createUserWithEmailAndPassword(authInstance, values.email, values.password)
      .then((credential: UserCredential) => {
        const { user } = credential;

        updateProfile(user, {
          displayName: values.fullName,
        })
          .then(() => {
            showMessage.success("Welcome!");
            router.push("/");
          })
          .catch(handleError);

        stopLoading();
      })
      .catch(handleError);
  };

  return <AuthForm handleSubmit={handleSignUp} type={AuthFormType.SignUp} />;
};
