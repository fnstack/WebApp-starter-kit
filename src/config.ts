interface Config {
  api: {
    uri: string;
    wsUri: string;
  };
  identity: {
    authority: string;
    clientId: string;
  };
}

export const config: Config = {
  api: {
    uri: 'https://api.graphql-europe.org',
    wsUri: `wss://fakerql.com/graphql`
  },
  identity: {
    authority: 'https://demo.identityserver.io',
    clientId: 'implicit.reference'
  }
};
