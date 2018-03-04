import * as React from 'react';
import { connect } from 'react-redux';
import { CallbackComponent } from 'redux-oidc';
import { userManager } from './userManager';
import { Dispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IdentityCallBackProps extends RouteComponentProps<any> {
  dispatch: Dispatch<{}>;
}

class CallbackPage extends React.PureComponent<IdentityCallBackProps> {
  public render() {
    return (
      <CallbackComponent userManager={userManager} successCallback={this.loginSuccess} errorCallback={this.loginFailed}>
        <div className="loader-body text-center" style={{ paddingTop: 100 }}>
          <h3>Redirection...</h3>

          <div className="loader">
            <div id="largeBox" />
            <div id="smallBox" />
          </div>
        </div>
      </CallbackComponent>
    );
  }

  private loginSuccess = () => {
    this.props.history.push('/');
  };

  private loginFailed = () => {
    this.props.history.push('/');
  };
}

const mapDispatchToProps = () => ({});

const callBackPage = withRouter<IdentityCallBackProps>(connect(null, mapDispatchToProps)(CallbackPage));

export { callBackPage };
