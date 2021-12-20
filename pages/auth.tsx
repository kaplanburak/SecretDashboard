import type { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Auth, getAuth } from "firebase/auth";
import { Layout, Card, Button, Spin } from "antd";
import { SignInForm } from "../components/SignInForm";
import { SignUpForm } from "../components/SignUpForm";
import styles from "../styles/page/Auth.module.css";
import { IStore } from "../redux/store/Store";
import { useLoading } from "../hooks";
import { AuthActions } from "../redux/actions/auth";

const Auth: NextPage = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  dispatch(AuthActions.setUser());

  const [signedUp, setSignedUp] = useState(true);

  const { isLoading } = useSelector((store: IStore) => store.common);
  const { startLoading, stopLoading } = useLoading();

  const switchForms = () => {
    startLoading();
    setTimeout(() => {
      setSignedUp((val) => !val);
      stopLoading();
    }, 200);
  };

  return (
    <Layout>
      <Layout.Content className={styles.layout}>
        <Spin spinning={isLoading}>
          {signedUp ? (
            <Card title="Sign In">
              <SignInForm authInstance={auth} />
              <Button type="link" block onClick={switchForms}>
                {`I don't have an account`}
              </Button>
            </Card>
          ) : (
            <Card title="Sign Up">
              <SignUpForm authInstance={auth} />
              <Button type="link" block onClick={switchForms}>
                I already have an account
              </Button>
            </Card>
          )}
        </Spin>
      </Layout.Content>
    </Layout>
  );
};

export default Auth;
