import type { NextPage } from "next";
import { AppLayout } from "../components";
import { Form, Input, Button, Space, Typography } from "antd";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CreateUserPayload, CreateUserResponse, NewUser } from "../api/Users/UsersModel";
import { IStore } from "../redux/store/Store";
import { SettingsActions } from "../redux/actions/settings";

const Settings: NextPage = () => {
  const dispatch = useDispatch();

  const createUser = useCallback(
    (payload: CreateUserPayload) => {
      dispatch(SettingsActions.CreateUser(payload));
    },
    [dispatch]
  );

  const deleteUser = useCallback(
    (id: number) => {
      dispatch(SettingsActions.DeleteUser(id));
    },
    [dispatch]
  );

  const { isLoading } = useSelector((store: IStore) => store.common);
  const { newUsers } = useSelector((store: IStore) => store.settings);

  const handleSubmit = (values: NewUser) => {
    if (!isLoading) {
      console.log("values", values);
      const { name, job } = values;
      createUser({ name, job });
    }
  };

  const [form] = Form.useForm();

  console.log("nu", newUsers);

  return (
    <AppLayout>
      <h3>New Users</h3>
      <Space direction="vertical">
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Job" name="job">
            <Input />
          </Form.Item>
          <Button htmlType="submit">Add</Button>
        </Form>
        <ul>
          {newUsers.map((u: CreateUserResponse) => (
            <li key={u.id}>
              <Space>
                <Typography.Text>{`${u.name} (${u.job})`}</Typography.Text>
                {u.id && (
                  <Typography.Link
                    type="danger"
                    onClick={() => {
                      deleteUser(u.id);
                    }}
                  >
                    Delete
                  </Typography.Link>
                )}
              </Space>
            </li>
          ))}
        </ul>
      </Space>
    </AppLayout>
  );
};

export default Settings;
