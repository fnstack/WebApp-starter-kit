import * as React from 'react';
import { Icon, Layout, Menu, Button } from 'antd';
import classnames from 'classnames';
import './header.less';
import { userManager } from 'identity';
import { User } from 'oidc-client';

const { SubMenu } = Menu;

interface HeaderProps {
  style?: any;
  className?: string;
  toggleSideBar: () => void;
}

interface HeaderState {
  isSideBareCollapsed: boolean;
  isAuthenticated: boolean;
  user: User;
}

class Header extends React.PureComponent<HeaderProps, HeaderState> {
  public state: HeaderState = {
    isSideBareCollapsed: false,
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    user: JSON.parse(localStorage.getItem('user')) as User
  };

  private handleTogleSidebar = () => {
    const { toggleSideBar } = this.props;
    const { isSideBareCollapsed } = this.state;

    this.setState({ isSideBareCollapsed: !isSideBareCollapsed });
    toggleSideBar();
  };

  private handleOnLogin = async e => {
    e.preventDefault();
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    await userManager.signinRedirect();
  };

  private handleOnLogOut = async e => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    await userManager.signoutRedirect();
  };

  public render() {
    const { isSideBareCollapsed, isAuthenticated, user } = this.state;
    const { style, className } = this.props;

    return (
      <Layout.Header className={`header ${className}`} style={{ padding: 0, ...style }}>
        <div className="button" onClick={this.handleTogleSidebar}>
          <Icon type={classnames({ 'menu-unfold': isSideBareCollapsed, 'menu-fold': !isSideBareCollapsed })} />
        </div>

        <div className="rightWarpper">
          {/* To do: Uncoment this when identity server is set. */}
          {/* {isAuthenticated && ( */}
          <Menu mode="horizontal" style={{ lineHeight: '64px' }}>
            <SubMenu
              style={{
                float: 'right'
              }}
              title={
                <span>
                  <Icon type="user" />
                  {/* {user.profile.preferred_username} */}
                </span>
              }
            >
              <Menu.Item key="logout" onClick={this.handleOnLogOut}>
                Se déconnecter
              </Menu.Item>
            </SubMenu>
          </Menu>
          {/* )} */}
          {/* {!isAuthenticated && (
            <Button type="primary" icon="login" onClick={this.handleOnLogin}>
              Se connecter
            </Button>
          )} */}
        </div>
      </Layout.Header>
    );
  }
}

export { Header };
