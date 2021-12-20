import { FC } from "react";
import { useRouter } from "next/router";
import {
  createUserWithEmailAndPassword,
  UserCredential,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { message as showMessage } from "antd";
import { AuthForm } from "../AuthForm";
import { IAuthForm } from "../AuthForm/AuthForm";
import { ISignUpForm } from "./SignUpForm";
import { useLoading } from "../../hooks";
import { AuthFormType } from "../../definitions/enums";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../redux/actions/auth";

export const SignUpForm: FC<ISignUpForm.Props> = ({ authInstance }) => {
  const { startLoading, stopLoading } = useLoading();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleError = (error: any) => {
    stopLoading();

    const { code } = error;
    let message = "An error occurred!";

    if (code === "auth/email-already-in-use") {
      message = "Email already exists!";
    }

    showMessage.error(message);
  };

  const handleSignUp = (values: IAuthForm.Fields) => {
    startLoading();

    setPersistence(authInstance, browserLocalPersistence).then(() => {
      createUserWithEmailAndPassword(authInstance, values.email, values.password)
        .then((credential: UserCredential) => {
          const { user } = credential;
          const { name, email } = values;

          if (name) {
            const displayName = name;

            updateProfile(user, {
              displayName,
            })
              .then(() => {
                dispatch(AuthActions.setUser({ displayName, email }));
                showMessage.success("Success!");
                router.push("/dashboard");
              })
              .catch(handleError);
          }

          stopLoading();
        })
        .catch(handleError);
    });
  };

  return <AuthForm handleSubmit={handleSignUp} type={AuthFormType.SignUp} />;
};
