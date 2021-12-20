import { FC, useState } from "react";
import Link from "next/link";
import { Layout, Spin, message as showMessage, Typography, Menu, Card } from "antd";
import { PoweroffOutlined, SettingOutlined, DashboardOutlined } from "@ant-design/icons";
import { getAuth, signOut, onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { IStore } from "../../redux/store/Store";
import styles from "./AppLayout.module.css";

export const AppLayout: FC = ({ children }) => {
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState<User>();

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      router.push("/auth");
    }
  });

  const { isLoading } = useSelector((store: IStore) => store.common);

  const { Text, Title } = Typography;

  return (
    <Layout className={styles.layout}>
      <Spin spinning={isLoading || !currentUser}>
        {currentUser && (
          <>
            <Layout.Header>
              <div className={styles.headerContent}>
                <div>
                  <Title level={2} className={styles.headerText}>
                    {router.pathname
                      .replace("/", "")
                      .split("")
                      .map((char, i) => {
                        if (i === 0) return char.toUpperCase();
                        return char;
                      })}
                  </Title>
                </div>
                <div className={styles.headerUser}>
                  <Title level={5} className={styles.headerText}>
                    {currentUser.displayName}
                  </Title>
                  <Text className={`${styles.headerText} ${styles.secondary}`}>Admin</Text>
                </div>
              </div>
            </Layout.Header>
            <Layout>
              <Layout.Sider width={200} className={styles.sider}>
                <Menu className={styles.menu}>
                  <Menu.Item key="1" icon={<DashboardOutlined />}>
                    <Link as="/dashboard" href="dashboard">
                      <a>Dashboard</a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<SettingOutlined />}>
                    <Link as="/settings" href="settings">
                      <a>Settings</a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item
                    key="3"
                    icon={<PoweroffOutlined />}
                    onClick={() => {
                      signOut(auth)
                        .then(() => {
                          router.push("/auth");
                        })
                        .catch((error) => {
                          showMessage.error("An error occurred!");
                        });
                    }}
                  >
                    Logout
                  </Menu.Item>
                </Menu>
              </Layout.Sider>
            </Layout>
            <Layout className={styles.contentLayout}>
              <Layout.Content className={styles.content}>
                <Card>{children}</Card>
              </Layout.Content>
            </Layout>
          </>
        )}
      </Spin>
    </Layout>
  );
};
