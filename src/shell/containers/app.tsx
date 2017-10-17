import * as React from 'react';
import {Helmet} from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Footer} from '../../shell';
import ThemeDefault from '../../sass/themeDefault';

const favicon = require('./favicon.ico');

/**
 * The app interface
 *
 * @interface IAppProps
 */
interface IAppProps {
  children?: React.ReactElement < any >;
}

/**
 * The layout react component
 *
 * @class App
 * @extends {React.Component<IAppProps, any>}
 */
class App extends React.Component < IAppProps, any > {

  public render() {

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <Helmet>
            <link rel="icon" type="img/ico" href={favicon}/>
            <title>HSE Web Starter Kit</title>
          </Helmet>

          <h1>
            HSE Web Starter Kit
          </h1>

          <Footer/>

        </div>
      </MuiThemeProvider>
    );
  }
}

export {App as Layout};
