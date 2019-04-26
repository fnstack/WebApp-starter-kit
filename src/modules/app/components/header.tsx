import * as React from 'react';
import { Icon, Layout } from 'antd';
import classnames from 'classnames';
// import { UserData } from 'react-oidc';
import './header.less';
// import { userManager } from 'identity';

// const { SubMenu } = Menu;

interface HeaderProps {
  style?: any;
  className?: string;
  toggleSideBar: () => void;
}

interface HeaderState {
  isSideBareCollapsed: boolean;
}

class Header extends React.PureComponent<HeaderProps, HeaderState> {
  public state: HeaderState = {
    isSideBareCollapsed: false
  };

  private handleTogleSidebar = () => {
    const { toggleSideBar } = this.props;
    const { isSideBareCollapsed } = this.state;

    this.setState({ isSideBareCollapsed: !isSideBareCollapsed });
    toggleSideBar();
  };

  // private handleOnLogin = async e => {
  //   e.preventDefault();
  //   // await userManager.signinRedirect();
  // };

  public render() {
    const { isSideBareCollapsed } = this.state;
    const { style, className } = this.props;

    return (
      <Layout.Header className={`header ${className}`} style={{ padding: 0, ...style }}>
        <div className="button" onClick={this.handleTogleSidebar}>
          <Icon type={classnames({ 'menu-unfold': isSideBareCollapsed, 'menu-fold': !isSideBareCollapsed })} />
        </div>

        <div className="rightWarpper">
          {/* <UserData>
            {context => {
              if (context.user) {
                return (
                  <Menu mode="horizontal" style={{ lineHeight: '64px' }}>
                    <SubMenu
                      style={{
                        float: 'right'
                      }}
                      title={
                        <span>
                          <Icon type="user" />
                          {context.user.profile}
                        </span>
                      }
                    >
                      <Menu.Item key="logout">Sign out</Menu.Item>
                    </SubMenu>
                  </Menu>
                );
              } else {
                return (
                  <Button type="primary" icon="login" onClick={this.handleOnLogin}>
                    Se connecter
                  </Button>
                );
              }
            }}
          </UserData> */}
        </div>
      </Layout.Header>
    );
  }
}

export { Header };
