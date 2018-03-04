import * as React from 'react';
import { User as UserModel } from '../../users';
import { FormProps, InjectedFormProps, reduxForm, Field, FormErrors } from 'redux-form';
import { Button } from 'reactstrap';
import { RenderTextField } from '../../shared';

interface UserInfoFormProps {
  className?: string;
  style?: React.CSSProperties;
}

/**
 * The UserInfoForm component
 *
 * @returns UserInfoForm as react stateless component
 */
const UserInfoForm: React.StatelessComponent<
  UserInfoFormProps & FormProps<UserModel, {}> & InjectedFormProps<UserModel>
> = props => {
  const { handleSubmit, onSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit!(onSubmit)}>
        <Field label="Email" name="email" component={RenderTextField} type="email" />

        <Button color="primary" type="submit">
          <i className="fas fa-dot-circle" /> &nbsp; Valider
        </Button>
      </form>
    </div>
  );
};

const validate = (values: UserModel): FormErrors<UserModel> => {
  const errors: FormErrors<UserModel> = {};

  if (!values.email) {
    errors.email = `L'email est obligatoire`;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(values.email)) {
    errors.email = `L'adresse mail est invalide`;
  }
  return errors;
};

const userInfoForm = reduxForm({
  form: 'userInfo',
  validate,
  enableReinitialize: true
})(UserInfoForm);

export { userInfoForm as UserInfoForm };
