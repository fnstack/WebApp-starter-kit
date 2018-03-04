import * as React from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Breadcrumb } from '../components/Breadcrumb';
import { Container } from 'reactstrap';
import { Footer } from '../components/Footer';
import { Home } from '../../home';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Users, UserProfile } from '../../users';

/**
 * The app interface
 *
 * @interface IAppProps
 */
interface IAppProps {
  children?: React.ReactElement<{}>;
  location?: any;
}

/**
 * The layout react component
 *
 * @class App
 * @extends {React.Component<IAppProps, {}>}
 */
class App extends React.Component<IAppProps> {
  public props: IAppProps;

  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/accueil" component={Home} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/users/profile" component={UserProfile} />

                <Redirect from="/" to="/accueil" />
              </Switch>
            </Container>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export { App };
