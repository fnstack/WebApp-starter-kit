import '@babel/polyfill';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import './modules/styles/sass/app.scss';
import './modules/styles/less/themes/index.less';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { ApolloProvider } from 'react-apollo';
import { IntlProvider, addLocaleData } from 'react-intl';
import fr from 'react-intl/locale-data/fr';
import registerServiceWorker from './registerServiceWorker';
import { client } from 'apollo';

addLocaleData([...fr]);

ReactDom.render(
  <ApolloProvider client={client}>
    <IntlProvider locale="fr">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </IntlProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
