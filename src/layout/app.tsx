import * as React from 'react';
import { Layout } from 'antd';
import './app.less';
import { Header, SideMenu, Breadcrumb } from './components';
import { Route, Switch, Link } from 'react-router-dom';
import { Page404 } from './page404';
import { MenuTests } from 'menuTests';

// @ts-ignore no relevant error
import * as logo from '../images/logo.png';
import { User } from 'oidc-client';
import { RedirectToAuth, userManager } from 'identity';

const { Sider, Content, Footer } = Layout;

interface AppState {
  collapsed: boolean;
  user: User;
}

class App extends React.PureComponent<{}, AppState> {
  public state = {
    collapsed: false,
    user: JSON.parse(localStorage.getItem('user')) as User
  };

  private toggleSideBar = () => {
    const { collapsed } = this.state;

    this.setState({ collapsed: !collapsed });
  };

  public isAuthenticated = (): boolean => {
    const { user } = this.state;
    return user && !user.expired;
  };

  public render() {
    const { collapsed } = this.state;
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} width={230}>
          <div className="logo">
            <Link to="/">
              <img alt="logo" src={logo} />
            </Link>
            {!collapsed && (
              <Link to="/">
                <span>Web Starter kit</span>
              </Link>
            )}
          </div>
          <SideMenu />
        </Sider>
        <Layout className="sidebar-maximized" style={{ minHeight: '100vh' }}>
          <Header toggleSideBar={this.toggleSideBar} />

          <Breadcrumb />
          <Content
            style={{
              margin: '24px 16px 0 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
              overflow: 'initial'
            }}
          >
            {this.isAuthenticated() && (
              <Switch>
                <Route path="/main/child" component={MenuTests} />

                <Route component={Page404} />
              </Switch>
            )}
            {!this.isAuthenticated() && (
              <Switch>
                <Route
                  render={() => (
                    // tslint:disable-next-line:jsx-no-lambda
                    <RedirectToAuth userManager={userManager} />
                  )}
                />
              </Switch>
            )}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Web Starter kit © 2018 FnStack, Inc.</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
