import * as React from 'react';
import { User, UserManager } from 'oidc-client';

export interface ICallbackProps {
  onSuccess?: (user: User) => void;
  onError?: (err: any) => void;
  userManager: UserManager;
}
class Callback extends React.Component<ICallbackProps> {
  public componentDidMount() {
    const { onSuccess, onError, userManager } = this.props;

    userManager
      .signinRedirectCallback()
      .then(user => {
        if (onSuccess) {
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('isAuthenticated', 'true');
          onSuccess(user);
        }
      })
      .catch(err => {
        if (onError) {
          localStorage.removeItem('user');
          localStorage.removeItem('isAuthenticated');
          onError(err);
        }
      });
  }
  public render() {
    return this.props.children;
  }
}

export { Callback };
