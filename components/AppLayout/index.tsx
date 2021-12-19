import { FC } from "react";
import { Layout, Spin } from "antd";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { IStore } from "../../redux/store/Store";

export const AppLayout: FC = ({ children }) => {
  const router = useRouter();
  const { isLoading } = useSelector((store: IStore) => store.common);
  const auth = getAuth();

  if (!auth.currentUser) {
    router.push("/auth");
    return null;
  }

  return (
    <Layout>
      <button
        type="button"
        onClick={() => {
          signOut(auth)
            .then(() => {
              router.push("/auth");
            })
            .catch((error) => {
              // An error happened.
            });
        }}
      >
        Logout
      </button>
      <Spin spinning={isLoading}>{children}</Spin>
    </Layout>
  );
};
