import * as React from 'react';
import { Form, Input, Icon } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

const FormItem = Form.Item;

interface AddUserProps {
  onSubmit: any;
  onCloseModal: () => void;
  loading: any;
}

interface AddUserState {
  confirmDirty: boolean;
}

/**
 * The AddUser component
 *
 * @returns AddUser as react stateless component
 */
class AddUser extends React.PureComponent<AddUserProps, AddUserState> {
  public state = {
    confirmDirty: false
  };

  private handleSubmit = e => {
    e.preventDefault();
    const { onSubmit, onCloseModal, form, loading } = this.props;

    form.validateFields(async (err, variables) => {
      if (!err) {
        await onSubmit({
          variables
        });

        if (!loading) {
          onCloseModal();
        }
      }
    });
  };

  private handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  // @ts-ignore: Useless unused variable warning
  private compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Le deux mot de passe ne corespondent pas!');
    } else {
      callback();
    }
  };

  // @ts-ignore: Useless unused variable warning
  private validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <Form id="AddUserForm" onSubmit={this.handleSubmit}>
          <FormItem label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                { type: 'email', message: `Cette adresse email, n'est pas valide!` },
                { required: true, message: 'Veuillez entrer votre adresse email!' }
              ]
            })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" />)}
          </FormItem>
          <FormItem label="Mot de passe">
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Veillez entrer votre mot de passe!' },
                { validator: this.validateToNextPassword }
              ]
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Mot de passe"
              />
            )}
          </FormItem>
          <FormItem label="Confirm Password">
            {getFieldDecorator('confirm', {
              rules: [
                { required: true, message: 'Veuillez confirmez votre mot de passe!' },
                { validator: this.compareToFirstPassword }
              ]
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Confirmer le mot de passe"
                onBlur={this.handleConfirmBlur}
              />
            )}
          </FormItem>
        </Form>
      </>
    );
  }
}

const AddUserForm = Form.create()(AddUser);

export { AddUserForm };
