import { Rule } from "antd/lib/form";
import { AuthFormType } from "../../definitions/enums";

declare namespace IAuthForm {
  interface Props {
    handleSubmit: (values: Fields) => void;
    type: AuthFormType;
  }

  interface Fields {
    email: string;
    password: string;
    name?: string;
  }

  interface FieldRules {
    [key: string]: Rule[];
  }
}

export { IAuthForm };
