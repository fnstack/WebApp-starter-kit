import * as React from 'react';
import Helmet from 'react-helmet';

interface HomeProps {
  style?: React.CSSProperties;
}

/**
 * The Home component
 *
 * @returns Home as react stateless component
 */
class Home extends React.Component<HomeProps> {
  public render() {
    return (
      <div className="animated fadeIn">
        <Helmet>
          <title>Easy Trade - Accueil</title>
        </Helmet>
        Hello World
      </div>
    );
  }
}

export { Home };
