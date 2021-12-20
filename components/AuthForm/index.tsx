import { FC } from "react";
import { Form, Input, Button } from "antd";
import { IAuthForm } from "./AuthForm";
import { AuthFormType } from "../../definitions/enums";

export const AuthForm: FC<IAuthForm.Props> = ({ handleSubmit, type }) => {
  const [form] = Form.useForm();

  const rules: IAuthForm.FieldRules = {
    name: [
      {
        required: true,
        message: "Please enter your name",
      },
    ],
    email: [
      {
        type: "email",
        message: "The input is not valid E-mail!",
      },
      {
        required: true,
        message: "Please enter your E-mail!",
      },
    ],
    password: [
      {
        required: true,
        message: "Please enter your password!",
      },
      {
        min: 6,
        message: "Password must be at least 6 characters!",
      },
    ],
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      {type === AuthFormType.SignUp && (
        <Form.Item label="Full Name" name="name" rules={rules.name} hasFeedback>
          <Input size="large" />
        </Form.Item>
      )}
      <Form.Item label="Email" name="email" rules={rules.email} hasFeedback>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={rules.password} hasFeedback>
        <Input.Password size="large" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
