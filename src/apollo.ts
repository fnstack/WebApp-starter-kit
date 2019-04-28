import { ApolloClient, HttpLink, InMemoryCache, ApolloLink, split } from 'apollo-boost';
import { withClientState } from 'apollo-link-state';
import { WebSocketLink } from 'apollo-link-ws';
import { setContext } from 'apollo-link-context';
import { getMainDefinition } from 'apollo-utilities';
import { config } from './config';
// import { userManager } from 'identity';

const cache = new InMemoryCache();

const httpLink = new HttpLink({ uri: config.api.uri });

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

const authLink = setContext((_, { headers }) => {
  const accessToken = '';

  // userManager.getUser().then(user => {
  //   accessToken = user ? user.access_token : '';
  // });

  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : ''
    }
  };
});

export const client = new ApolloClient({
  cache,
  link: authLink.concat(ApolloLink.from([stateLink, link])),
  connectToDevTools: process.env.NODE_ENV === 'development'
});
