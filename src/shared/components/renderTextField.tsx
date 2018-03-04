import * as React from 'react';
import * as classnames from 'classnames';
import { FormGroup, Label, Input } from 'reactstrap';
import { WrappedFieldMetaProps } from 'redux-form';

interface RenderFieldProps {
  input?: any;
  label?: string;
  type?: string;
  meta?: WrappedFieldMetaProps;
}

/**
 * The function that wrap a text field for redux-form
 *
 * @param {RenderFieldProps} props
 * @returns
 */
export const RenderTextField: React.SFC<RenderFieldProps> = (props: RenderFieldProps) => {
  const { input, label, type, meta: { touched, error } } = props;
  return (
    <FormGroup className={classnames({ 'has-warning': touched && error })}>
      <Label className="form-control-label">{label}</Label>
      <Input
        className={classnames({ 'is-valid': touched && !error }, { 'is-invalid': touched && error })}
        {...input}
        placeholder={label}
        type={type}
      />
      {touched && (error && <div className="text-danger">{error}</div>)}
    </FormGroup>
  );
};
