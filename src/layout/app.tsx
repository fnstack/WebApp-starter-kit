import * as React from 'react';
import { Layout } from 'antd';
import '../styles/less/themes/index.less';
import './app.less';
import { Header, SideMenu, Breadcrumb } from './components';
import { Route, Switch, Link } from 'react-router-dom';
import { Page404 } from './page404';

// @ts-ignore no relevant error
import * as logo from '../images/logo.png';

const { Sider, Content, Footer } = Layout;

interface AppState {
  collapsed: boolean;
}

class App extends React.PureComponent<{}, AppState> {
  public state = {
    collapsed: false
  };

  private toggleSideBar = () => {
    const { collapsed } = this.state;

    if (collapsed) {
      document.getElementById('content-body').style.marginLeft = '230px';
      document.getElementById('content-body').style.transition = 'all 0.3s';
    } else {
      document.getElementById('content-body').style.marginLeft = '80px';
      document.getElementById('content-body').style.transition = 'all 0.3s';
    }

    this.setState({ collapsed: !collapsed });
  };

  public render() {
    const { collapsed } = this.state;
    return (
      <Layout>
        <Sider
          style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={230}
        >
          <div className="logo">
            <Link to="/">
              <img alt="logo" src={logo} />
            </Link>
            {!collapsed && (
              <Link to="/">
                <span>Webb Starter kit</span>
              </Link>
            )}
          </div>
          <SideMenu />
        </Sider>
        <Layout id="content-body" className="sidebar-maximized" style={{ minHeight: '100vh' }}>
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
            <Switch>
              {/* <Route path="/users" component={Directions} /> */}

              <Route component={Page404} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center', color: '#fff' }}>Webb app starter kit © 2018 FnStack, Inc.</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
