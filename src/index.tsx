import '@babel/polyfill';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import './styles/sass/app.scss';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache, ApolloLink, split } from 'apollo-boost';
import { getMainDefinition } from 'apollo-utilities';
import { withClientState } from 'apollo-link-state';
import { WebSocketLink } from 'apollo-link-ws';
import { createUploadLink } from 'apollo-upload-client';
import { config } from './config';
import { IntlProvider, addLocaleData } from 'react-intl';
import fr from 'react-intl/locale-data/fr';

addLocaleData([...fr]);

const cache = new InMemoryCache();

const httpLink = new HttpLink({ uri: config.api.uri });

const uploadLink = createUploadLink({ uri: config.api.uri });

const wsLink = new WebSocketLink({
  uri: config.api.wsUri,
  options: {
    reconnect: true
  }
});

const stateLink = withClientState({
  cache,
  defaults: {},
  resolvers: {
    Mutation: {}
  }
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, link, uploadLink]),
  connectToDevTools: process.env.NODE_ENV === 'development'
});

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
